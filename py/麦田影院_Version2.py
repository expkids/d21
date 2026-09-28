# -*- coding: utf-8 -*-
# 麦田影院 - 精简优化版（带分类 filters 支持）
import re
import sys
import json
from urllib.parse import quote, unquote, urljoin, urlencode
from pyquery import PyQuery as pq
from xml.etree import ElementTree as ET
sys.path.append('..')
from base.spider import Spider

class Spider(Spider):
    def init(self, extend=""):
        self.host = "https://www.mtyy1.cc"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; MI 11) AppleWebKit/537.36 TVBox/1.0',
            'Accept': 'text/html,application/xml;q=0.9,*/*;q=0.8',
            'Referer': self.host,
            'Connection': 'keep-alive'
        }
        self.source_map = {"NBY":"高清NB源","1080zyk":"超清YZ源","ffm3u8":"极速FF源","lzm3u8":"稳定LZ源","yzzy":"YZ源"}
        self.DEFAULT_PIC = "https://pic.rmb.bdstatic.com/bjh/1d0b02d0f57f0a4212da8865de018520.jpeg"

        # 需要显示 filters 的分类（支持繁/简体）
        self.FILTER_CATEGORIES = {"短劇", "短剧", "電影", "电影", "電視劇", "电视剧", "動漫", "动漫", "綜藝", "综艺"}

    def getName(self):
        return "麦田影院"

    # 合并工具方法：编码修复+文本清理
    def clean_text(self, text):
        if not text:
            return ""
        try:
            if isinstance(text, bytes):
                # 尽量按 utf-8 解码，否则回退 gbk
                try:
                    text = text.decode('utf-8', errors='ignore')
                except:
                    text = text.decode('gbk', errors='ignore')
            # 处理类似 \uXXXX 的转义
            if '\\u' in text:
                try:
                    text = text.encode('utf-8').decode('unicode_escape', errors='ignore')
                except:
                    pass
            # 去掉控制字符并trim
            return re.sub(r'[\x00-\x1f\x7f]', '', str(text)).strip()
        except Exception:
            return str(text)

    # 简化请求方法
    def fetch_page(self, url, headers=None):
        try:
            resp = self.fetch(url, headers=headers or self.headers, timeout=15)
            # 有些请求返回的 encoding 未必正确，但多数页面为 utf-8
            try:
                resp.encoding = 'utf-8'
            except:
                pass
            if resp.status_code != 200:
                raise Exception(f"HTTP {resp.status_code}")
            return resp.text
        except Exception as e:
            self.log(f"Fetch err: {str(e)}")
            return ""

    # 为指定分类构建默认 filters 列表（可按需扩展）
    def build_filters_for_category(self, type_name):
        # 通用过滤项：地区 / 年份 / 排序
        years = [str(y) for y in range(2026, 2009, -1)]
        filters = [
            {"key": "area", "name": "地区", "value": ["大陆", "香港", "台湾", "美国", "日本", "韩国", "其他"]},
            {"key": "year", "name": "年份", "value": years},
            {"key": "sort", "name": "排序", "value": ["最新", "最热", "评分"]}
        ]

        # 根据大类做小幅定制（示例）
        tn = type_name or ""
        if any(x in tn for x in ("電視", "电视")):
            filters.insert(0, {"key": "season", "name": "集数", "value": ["连载", "完结"]})
        if any(x in tn for x in ("電影", "电影", "短劇", "短剧")):
            # 电影/短剧通常按时长或类型分组（示例占位）
            filters.append({"key": "type", "name": "类型", "value": ["动作", "喜剧", "爱情", "科幻", "剧情"]})
        if any(x in tn for x in ("動漫", "动漫")):
            filters.append({"key": "age", "name": "分级", "value": ["全部", "少儿", "少年", "青年"]})
        if any(x in tn for x in ("綜藝", "综艺")):
            filters.append({"key": "show", "name": "节目类型", "value": ["真人", "音乐", "访谈"]})

        return filters

    # 解析用户传入的 filter 字符串
    # 支持格式 eg: "area:日本|year:2022" 或 "area:日本$year:2022" 或 "area:日本&year:2022"
    def parse_filter_string(self, filter_str):
        if not filter_str:
            return {}
        pairs = re.split(r'[|$&]+', filter_str)
        params = {}
        for p in pairs:
            if ':' in p:
                k, v = p.split(':', 1)
                k, v = k.strip(), v.strip()
                if k and v:
                    params[k] = v
        return params

    # 首页内容（增加 filters 元数据）
    def homeContent(self, filter):
        html = self.fetch_page(self.host)
        doc = pq(html) if html else pq('')
        result = {'class': [], 'list': []}

        # 提取分类（加入去重檢查）
        added_cids = set()
        for a in doc('div.head-nav a[href*="/vodtype/"]').items():
            href = a.attr('href') or ""
            m = re.search(r'/vodtype/(\d+)\.html', href)
            if m:
                type_id = m.group(1)
                if type_id in added_cids:
                    continue
                added_cids.add(type_id)
                type_name = self.clean_text(a.text())
                result['class'].append({
                    'type_name': type_name,
                    'type_id': type_id
                })

        # 为部分指定分类生成 filters 元数据
        filters_map = {}
        for cls in result['class']:
            tn = cls.get('type_name', '')
            if tn and any(x in tn for x in self.FILTER_CATEGORIES):
                filters_map[cls['type_id']] = self.build_filters_for_category(tn)
        # 将 filters 放到返回结构中（供前端显示）
        if filters_map:
            result['filters'] = filters_map

        # 提取首页影片
        for box in doc('.public-list-box.public-pic-b').items():
            link = box.find('a.public-list-exp')
            if link and link.attr('href'):
                vid_m = re.search(r'/voddetail/(\d+)\.html', link.attr('href'))
                if vid_m:
                    img = link.find('img')
                    result['list'].append({
                        'vod_id': vid_m.group(1),
                        'vod_name': self.clean_text(link.attr('title') or (img.attr('alt') or "")),
                        'vod_pic': urljoin(self.host, img.attr('data-src') or img.attr('src') or ""),
                        'vod_remarks': self.clean_text(box.find('.public-prt').text())
                    })
        return result

    # 分类内容（支持传入 filter，解析后附加为查询参数）
    def categoryContent(self, tid, pg, filter, extend):
        # 解析页数
        try:
            pgi = int(pg)
        except:
            pgi = 1

        base_url = f"{self.host}/vodtype/{tid}.html" if pgi == 1 else f"{self.host}/vodtype/{tid}-{pgi}.html"
        # 解析 filter 字符串并附加到 URL（注：目标站不一定支持这些查询参数）
        params = self.parse_filter_string(filter)
        if params:
            sep = '&' if '?' in base_url else '?'
            base_url = f"{base_url}{sep}{urlencode(params)}"

        html = self.fetch_page(base_url)
        doc = pq(html) if html else pq('')
        videos = []

        for box in doc('.public-list-box.public-pic-b').items():
            link = box.find('a')
            if link and link.attr('href'):
                vid_m = re.search(r'/voddetail/(\d+)\.html', link.attr('href'))
                if vid_m:
                    img = link.find('img')
                    videos.append({
                        'vod_id': vid_m.group(1),
                        'vod_name': self.clean_text(link.attr('title') or (img.attr('alt') or "")),
                        'vod_pic': urljoin(self.host, img.attr('data-src') or img.attr('src') or ""),
                        'vod_remarks': self.clean_text(box.find('.public-prt').text())
                    })
        return {'list': videos, 'page': pg, 'pagecount': 999, 'limit': 20, 'total': 9999}

    # 影片详情
    def detailContent(self, ids):
        if not ids:
            return {"list": []}
        vid = ids[0]
        html = self.fetch_page(f"{self.host}/voddetail/{vid}.html")
        doc = pq(html) if html else pq('')
        vod_info = {
            "vod_id": vid,
            "vod_name": self.clean_text(doc('h1.player-title-link').text()),
            "vod_pic": urljoin(self.host, doc('.role-card img').attr('data-src') or ""),
            "vod_content": self.clean_text(doc('.card-text').text()),
            "vod_play_from": "",
            "vod_play_url": ""
        }

        # 解析播放源
        play_url = urljoin(self.host, doc('.anthology-list-play a:first').attr('href') or f"/vodplay/{vid}-1-1.html")
        play_html = self.fetch_page(play_url)
        play_doc = pq(play_html) if play_html else pq('')
        sources = {}

        for tab in play_doc('a.vod-playerUrl[data-form]').items():
            form = tab.attr('data-form')
            sname = self.source_map.get(form, self.clean_text(tab.text()))
            idx = list(play_doc('a.vod-playerUrl[data-form]')).index(tab[0])
            eps = [f"{self.clean_text(e.text())}${urljoin(self.host, e.attr('href'))}" 
                   for e in play_doc('.anthology-list-box').eq(idx).find('a').items() if e.text() and e.attr('href')]
            if eps:
                sources[sname] = '#'.join(eps)

        # 排序播放源：优先高清NB源
        final_from, final_url = [], []
        if "高清NB源" in sources:
            final_from.append("高清NB源")
            final_url.append(sources.pop("高清NB源"))
        final_from.extend(sources.keys())
        final_url.extend(sources.values())

        vod_info["vod_play_from"] = "$$$".join(final_from)
        vod_info["vod_play_url"] = "$$$".join(final_url)
        return {"list": [vod_info]}

    # 搜索功能（XML解析+网页兜底）
    def searchContent(self, key, quick, pg="1"):
        # 1. RSS搜索
        try:
            rss_url = f"{self.host}/rss.xml?wd={quote(key)}"
            if (html := self.fetch_page(rss_url, headers={**self.headers, 'Accept': 'application/xml'})):
                root = ET.fromstring(html)
                videos = []
                seen = set()
                for item in root.findall('.//item'):
                    link = self.clean_text(item.findtext('link') or "")
                    vid_m = re.search(r'/voddetail/(\d+)\.html', link)
                    if vid_m and vid_m.group(1) not in seen:
                        seen.add(vid_m.group(1))
                        title = self.clean_text(item.findtext('title'))
                        if title:
                            videos.append({
                                "vod_id": vid_m.group(1),
                                "vod_name": title,
                                "vod_pic": self.DEFAULT_PIC,
                                "vod_remarks": f"主演: {self.clean_text(item.findtext('author'))[:15]}..." if item.findtext('author') else ""
                            })
                if videos:
                    return {"list": videos, "page": int(pg)}
        except Exception as e:
            self.log(f"RSS err: {str(e)}")

        # 2. 网页兜底搜索
        try:
            search_url = f"{self.host}/vodsearch/{quote(key)}---{pg}---.html"
            html = self.fetch_page(search_url)
            doc = pq(html) if html else pq('')
            videos = []
            seen = set()
            for box in doc('.public-list-box.public-pic-b').items():
                link = box.find('a')
                if link and link.attr('href'):
                    vid_m = re.search(r'/voddetail/(\d+)\.html', link.attr('href'))
                    if vid_m and vid_m.group(1) not in seen:
                        seen.add(vid_m.group(1))
                        img = link.find('img')
                        videos.append({
                            "vod_id": vid_m.group(1),
                            "vod_name": self.clean_text(link.attr('title') or (img.attr('alt') or "")),
                            "vod_pic": urljoin(self.host, img.attr('data-src') or img.attr('src') or self.DEFAULT_PIC),
                            "vod_remarks": self.clean_text(box.find('.public-prt').text())
                        })
            return {"list": videos, "page": int(pg)}
        except Exception as e:
            self.log(f"Web search err: {str(e)}")
            return {"list": [], "page": int(pg)}

    # 播放解析
    def isVideoUrl(self, url):
        return any(ext in url.lower() for ext in ['.mp4', '.m3u8', '.flv'])

    def playerContent(self, flag, id, vipFlags):
        play_url = urljoin(self.host, id)
        if not play_url.startswith(('http', 'https')):
            return {"parse": 1, "url": play_url, "header": self.headers}

        if (html := self.fetch_page(play_url)) and (match := re.search(r'var player_aaaa=({[^}]+?url:[^}]+})', html, re.DOTALL)):
            try:
                data = json.loads(re.sub(r',\s*([}\]])', r'\1', match.group(1)))
                main = unquote(data.get('url', '')).strip()
                backup = unquote(data.get('url_next', '')).strip()
                play_addr = main if self.isVideoUrl(main) else backup if self.isVideoUrl(backup) else play_url
                return {
                    "parse": 0 if self.isVideoUrl(play_addr) else 1,
                    "url": play_addr,
                    "header": {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36", "Referer": play_url}
                }
            except Exception as e:
                self.log(f"Player parse err: {str(e)}")
        return {"parse": 1, "url": play_url, "header": self.headers}