```javascript
var rule = {
    title: 'TRVOD',
    host: 'https://www.trvod.com',
    homeUrl: '/',
    url: '/show/fyfilter.html',
    filterable: 1,
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
        "movie": [
            {
                "key": "cateId",
                "name": "分类",
                "value": [
                    {"n":"全部","v":"/id/movie"},
                    {"n":"动作片","v":"/id/dongzuopian"},
                    {"n":"喜剧片","v":"/id/xijupian"},
                    {"n":"爱情片","v":"/id/aiqingpian"},
                    {"n":"科幻片","v":"/id/kehuanpian"},
                    {"n":"恐怖片","v":"/id/kongbupian"},
                    {"n":"剧情片","v":"/id/juqingpian"},
                    {"n":"战争片","v":"/id/zhanzhengpian"},
                    {"n":"动画电影","v":"/id/donghuadianying"}
                ]
            },
            {
                "key": "area",
                "name": "地区",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"大陆","v":"/area/大陆"},
                    {"n":"香港","v":"/area/香港"},
                    {"n":"台湾","v":"/area/台湾"},
                    {"n":"美国","v":"/area/美国"},
                    {"n":"韩国","v":"/area/韩国"},
                    {"n":"日本","v":"/area/日本"},
                    {"n":"泰国","v":"/area/泰国"},
                    {"n":"英国","v":"/area/英国"},
                    {"n":"法国","v":"/area/法国"},
                    {"n":"印度","v":"/area/印度"}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"2026","v":"/year/2026"},
                    {"n":"2025","v":"/year/2025"},
                    {"n":"2024","v":"/year/2024"},
                    {"n":"2023","v":"/year/2023"},
                    {"n":"2022","v":"/year/2022"},
                    {"n":"2021","v":"/year/2021"},
                    {"n":"2020","v":"/year/2020"},
                    {"n":"2019","v":"/year/2019"},
                    {"n":"2018","v":"/year/2018"},
                    {"n":"2017","v":"/year/2017"},
                    {"n":"2016","v":"/year/2016"},
                    {"n":"2015","v":"/year/2015"},
                    {"n":"2014","v":"/year/2014"},
                    {"n":"2013","v":"/year/2013"},
                    {"n":"2012","v":"/year/2012"},
                    {"n":"2011","v":"/year/2011"},
                    {"n":"2010","v":"/year/2010"}
                ]
            },
            {
                "key": "by",
                "name": "排序",
                "value": [
                    {"n":"最新","v":"/by/time"},
                    {"n":"最热","v":"/by/hits"},
                    {"n":"评分","v":"/by/score"}
                ]
            }
        ],
        "tv": [
            {
                "key": "cateId",
                "name": "分类",
                "value": [
                    {"n":"全部","v":"/id/tv"},
                    {"n":"国产剧","v":"/id/guochanju"},
                    {"n":"港剧","v":"/id/gangju"},
                    {"n":"台剧","v":"/id/taiju"},
                    {"n":"韩剧","v":"/id/hanju"},
                    {"n":"日剧","v":"/id/riju"},
                    {"n":"美剧","v":"/id/meiju"},
                    {"n":"泰剧","v":"/id/taiju2"}
                ]
            },
            {
                "key": "area",
                "name": "地区",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"大陆","v":"/area/大陆"},
                    {"n":"香港","v":"/area/香港"},
                    {"n":"台湾","v":"/area/台湾"},
                    {"n":"韩国","v":"/area/韩国"},
                    {"n":"日本","v":"/area/日本"},
                    {"n":"美国","v":"/area/美国"},
                    {"n":"泰国","v":"/area/泰国"}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"2026","v":"/year/2026"},
                    {"n":"2025","v":"/year/2025"},
                    {"n":"2024","v":"/year/2024"},
                    {"n":"2023","v":"/year/2023"},
                    {"n":"2022","v":"/year/2022"},
                    {"n":"2021","v":"/year/2021"},
                    {"n":"2020","v":"/year/2020"},
                    {"n":"2019","v":"/year/2019"},
                    {"n":"2018","v":"/year/2018"}
                ]
            },
            {
                "key": "by",
                "name": "排序",
                "value": [
                    {"n":"最新","v":"/by/time"},
                    {"n":"最热","v":"/by/hits"},
                    {"n":"评分","v":"/by/score"}
                ]
            }
        ],
        "variety": [
            {
                "key": "cateId",
                "name": "分类",
                "value": [
                    {"n":"全部","v":"/id/variety"},
                    {"n":"大陆综艺","v":"/id/daluzongyi"},
                    {"n":"港台综艺","v":"/id/gangtaizongyi"},
                    {"n":"日韩综艺","v":"/id/rihanzongyi"},
                    {"n":"欧美综艺","v":"/id/oumeizongyi"}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"2026","v":"/year/2026"},
                    {"n":"2025","v":"/year/2025"},
                    {"n":"2024","v":"/year/2024"},
                    {"n":"2023","v":"/year/2023"},
                    {"n":"2022","v":"/year/2022"},
                    {"n":"2021","v":"/year/2021"}
                ]
            },
            {
                "key": "by",
                "name": "排序",
                "value": [
                    {"n":"最新","v":"/by/time"},
                    {"n":"最热","v":"/by/hits"},
                    {"n":"评分","v":"/by/score"}
                ]
            }
        ],
        "anime": [
            {
                "key": "cateId",
                "name": "分类",
                "value": [
                    {"n":"全部","v":"/id/anime"},
                    {"n":"国产动漫","v":"/id/guochandongman"},
                    {"n":"日韩动漫","v":"/id/rihandongman"},
                    {"n":"欧美动漫","v":"/id/oumeidongman"}
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    {"n":"全部","v":""},
                    {"n":"2026","v":"/year/2026"},
                    {"n":"2025","v":"/year/2025"},
                    {"n":"2024","v":"/year/2024"},
                    {"n":"2023","v":"/year/2023"},
                    {"n":"2022","v":"/year/2022"},
                    {"n":"2021","v":"/year/2021"}
                ]
            },
            {
                "key": "by",
                "name": "排序",
                "value": [
                    {"n":"最新","v":"/by/time"},
                    {"n":"最热","v":"/by/hits"},
                    {"n":"评分","v":"/by/score"}
                ]
            }
        ]
    },
    filter_def: {
        movie: {cateId: '/id/movie'},
        tv: {cateId: '/id/tv'},
        variety: {cateId: '/id/variety'},
        anime: {cateId: '/id/anime'}
    },
    searchable: 2,
    quickSearch: 0,
    searchUrl: '/search/**----------fypage---.html',
    headers: {
        'User-Agent': 'MOBILE_UA',
        'Referer': 'https://www.trvod.com/'
    },
    timeout: 5000,
    class_name: '电影&电视剧&综艺&动漫',
    class_url: 'movie&tv&variety&anime',
    play_parse: true,
    lazy: `js:
        var html = request(input);
        var player = html.match(/r player_.*?=(.*?)</);
        if(player){
            var data = JSON.parse(player[1]);
            var url = data.url;

            if (data.encrypt == '1') {
                url = unescape(url);
            } else if (data.encrypt == '2') {
                url = unescape(base64Decode(url));
            }

            if (/m3u8|mp4/.test(url)) {
                input = {
                    parse: 0,
                    jx: 0,
                    url: url
                }
            } else {
                input = {
                    parse: 1,
                    jx: 1,
                    url: url
                }
            }
        }
    `,
    推荐: '.module-items&&.module-item;*;*;*;*',
    一级: '.module-items&&.module-item;a&&title;.lazyload&&data-original||data-src;.module-item-note&&Text;a&&href',
    double: true,
    二级: {
        title: '.video-info-header&&h1&&Text;.video-info-aux&&Text',
        img: '.module-item-pic&&img&&data-original||data-src',
        desc: '.video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text;.video-info-items:eq(4)&&Text',
        content: '.vod_content&&Text',
        tabs: '.module-tab-item',
        lists: '.module-play-list:eq(#id)&&a'
    },
    搜索: '.module-items&&.module-search-item;*;*;*;*'
}
```

可能需要根据 TRVOD 当前模板微调以下 selector：

* `.module-items`
* `.module-item`
* `.vod_content`
* `.module-play-list`
* `.module-tab-item`

如果你贴一下 TRVOD 当前首页 HTML 或播放页 HTML，我可以再帮你做成完全精准可直接用、不需要再调 selector 的版本。
