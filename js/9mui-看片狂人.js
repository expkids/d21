var rule = {
    title:'看片狂人',
    host:'https://kpkuang.fyi',
    url:'/vodshow/fyclass--------fypage-----.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'MOBILE_UA',
    },
	
    class_name:'国产剧&港剧&韩剧&欧美剧&短剧&台剧&日剧&泰剧&越南剧&海外剧&电影&综艺&动漫',
    class_url:'13&14&23&16&37&20&15&21&22&30&1&3&4',
	
	tab_rename:{'迅浪云':'新浪','速播资源':'速播','火花云':'豪華','光速云':'光速','极映云':'金鷹','红牛云':'紅牛','虎牙HD':'虎牙','睿映HD':'如意','萌动次元':'魔都','高清资源库':'優質','电影天堂':'電影天堂','奇缘云':'愛奇藝','720高清云':'360','少年HD':'索尼','量子云':'量子','菲菲云':'非凡','暴风SD':'暴風','无极云播':'無盡','极速HD ':'極速','IK影视':'iKun','U咖云':'u酷','闪电云':'閃電'},
	tab_order:['迅浪云','速播资源','火花云','光速云','极映云','红牛云','虎牙HD','睿映HD','萌动次元','高清资源库','电影天堂','奇缘云','720高清云','腾讯视频-VIP解析','超清AB线','超清BY线','超清EV线','少年HD','量子云','菲菲云','暴风SD','无极云播','极速HD ','IK影视','U咖云','闪电云'],
		
    play_parse: true,
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,

    limit:6,
	
    推荐:'.uk-switcher.uk-margin;.fed-week-boxs li;.fed-list-pics&&title;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
	
    double:true, 
	
    一级:'.fed-list-info&&.fed-list-item;a&&title;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
	
    二级:{
		"title":"h1&&Text;.uk-list&&li:eq(3)&&Text",
		"img":".cover-shadow-xs&&data-original",
		"desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-4)&&Text;.module-info-content&&.module-info-item:eq(-3)&&Text;.uk-list&&li:eq(0)&&Text;.uk-list&&li:eq(1)&&Text",
		"content":".fed-col-xs12.fed-show-md-block&&Text",
		"tabs":"ul.yunlist&&li a",
		"lists":".fed-play-item.fed-drop-item:eq(#id) ul.fed-part-rows:eq(1) li"},
		
    搜索:'.fed-back-whits.uk-margin&&.uk-text-center;a&&title;.fed-list-pics&&data-original;.uk-overlay&&Text;a&&href',
}



