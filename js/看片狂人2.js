var rule = {
    title: '看片狂人[飞]',
    host: 'https://www.kpkuang.de',
    url: '/vodshow/fyclass--------fypage-----.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    
    headers: { 'User-Agent': 'MOBILE_UA' },
    
    class_name: '电影&电视剧&综艺&动漫&短剧&国产剧&韩剧&欧美剧',
    class_url: '1&2&3&4&37&13&23&16',
    
    // ==================== Markdown站点专用（无图片） ====================
    推荐: '.uk-switcher.uk-margin;.fed-week-boxs li;a&&title;;.fed-list-remarks&&Text;a&&href',
    
    一级: '.fed-list-info&&.fed-list-item;a&&title;;.fed-list-remarks&&Text;a&&href',
    
    搜索: '.fed-back-whits.uk-margin&&.uk-text-center;a&&title;;.uk-overlay&&Text;a&&href',
    
    二级: {
        title: "h1&&Text;.uk-list&&li:eq(3)&&Text",
        img: ".cover-shadow-xs&&data-original||src||img&&src",
        desc: ".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-4)&&Text;.module-info-content&&.module-info-item:eq(-3)&&Text",
        content: ".fed-col-xs12.fed-show-md-block&&Text",
        tabs: "ul.yunlist&&li a||.fed-drop-btns&&a",
        lists: ".fed-play-item.fed-drop-item:eq(#id) ul.fed-part-rows:eq(1) li||.fed-playlist&&li"
    },
    
    // Filters (confirmed working)
    filter_url: 'fyfilter--------fypage-----.html',
    
    filter: {
        "1": [ // 电影
            {key:"cateId", name:"类型", value:[
                {n:"全部",v:"1"},{n:"动作片",v:"6"},{n:"喜剧片",v:"7"},{n:"爱情片",v:"8"},
                {n:"科幻片",v:"9"},{n:"恐怖片",v:"10"},{n:"剧情片",v:"11"},{n:"战争片",v:"12"}
            ]},
            {key:"area", name:"地区", value:[
                {n:"全部",v:""},{n:"大陆",v:"大陆"},{n:"香港",v:"香港"},{n:"台湾",v:"台湾"},
                {n:"日本",v:"日本"},{n:"韩国",v:"韩国"},{n:"欧美",v:"欧美"}
            ]},
            {key:"year", name:"年份", value:[
                {n:"全部",v:""},{n:"2026",v:"2026"},{n:"2025",v:"2025"},{n:"2024",v:"2024"}
            ]},
            {key:"by", name:"排序", value:[
                {n:"时间",v:"time"},{n:"人气",v:"hits"},{n:"评分",v:"score"}
            ]}
        ],
        "2": [ // 电视剧
            {key:"cateId", name:"类型", value:[
                {n:"全部",v:"2"},{n:"国产剧",v:"13"},{n:"韩剧",v:"23"},{n:"欧美剧",v:"16"}
            ]},
            {key:"area", name:"地区", value:[{n:"全部",v:""},{n:"大陆",v:"大陆"},{n:"香港",v:"香港"},{n:"韩国",v:"韩国"},{n:"欧美",v:"欧美"}]},
            {key:"year", name:"年份", value:[{n:"全部",v:""},{n:"2026",v:"2026"},{n:"2025",v:"2025"},{n:"2024",v:"2024"}]},
            {key:"by", name:"排序", value:[{n:"时间",v:"time"},{n:"人气",v:"hits"},{n:"评分",v:"score"}]}
        ],
        "3": [{key:"cateId", name:"类型", value:[{n:"全部",v:"3"}]}],
        "4": [{key:"cateId", name:"类型", value:[{n:"全部",v:"4"}]}],
        "37": [{key:"cateId", name:"类型", value:[{n:"全部",v:"37"}]}]
    },
    
    filter_def: {
        "1": {cateId:"1", by:"time"},
        "2": {cateId:"2", by:"time"},
        "3": {cateId:"3", by:"time"},
        "4": {cateId:"4", by:"time"},
        "37": {cateId:"37", by:"time"}
    },
    
    play_parse: true,
    lazy: '',
    limit: 20,
    double: true,
    图片来源: '@Referer=https://www.kpkuang.de/'
};