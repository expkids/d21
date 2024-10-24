var rule={
    title:'唐人街影视',
    //host:'https://www.tangrenjie.tv',
    host:'https://www.trjvod.com',
	// url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyfilter.html',
    filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
"1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"劇情片","v":"11"},{"n":"奇幻片","v":"30"},{"n":"犯罪片","v":"54"},{"n":"動畫電影片","v":"55"},{"n":"恐怖片","v":"10"},{"n":"戰爭片","v":"12"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台灣","v":"/area/台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"國產劇","v":"13"},{"n":"港台劇","v":"14"},{"n":"日韓劇","v":"15"},{"n":"歐美劇","v":"16"},{"n":"其它劇","v":"31"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"歐美","v":"/area/欧美"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"台灣","v":"/area/台湾"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],	

"3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"大陸綜藝","v":"27"},{"n":"日韓綜藝","v":"28"},{"n":"歐美綜藝","v":"29"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台灣","v":"/area/台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"國產動漫","v":"24"},{"n":"日韓動漫","v":"25"},{"n":"歐美動漫","v":"26"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台灣","v":"/area/台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"53":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"53"},{"n":"反轉爽劇","v":"61"},{"n":"女頻戀愛","v":"62"},{"n":"古裝仙俠","v":"63"},{"n":"年代穿越","v":"64"},{"n":"腦洞懸疑","v":"65"},{"n":"現代都市","v":"67"}]}]
		},
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        53:{cateId:'53'}
    },
    searchUrl:'/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.top_nav&&ul li:gt(0):lt(25);a&&Text;a&&href;.*/(.*?).html',
    class_name:'電影&電視劇&綜藝&動漫&短劇',
    class_url:'1&2&3&4&53',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    //二级:{"title":"h2&&Text;.content_detail.content_min.fl .data_style&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(0)&&Text;.content_detail.content_min.fl li:eq(2)&&Text;.content_detail.content_min.fl li:eq(3)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    // 二级:{"title":"h2&&Text;.text-muted:eq(-1)&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&Text;.content_detail.content_min.fl&&ul&&li:eq(0)&&Text;.content_detail.content_min.fl&&ul&&li:eq(1)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    二级:{
    	"title":"h2&&Text;.data:eq(2)&&Text",
    	"img":".content_thumb .vodlist_thumb&&data-original",
    	"desc":";;;.data:eq(0)&&Text;.data:eq(1)&&Text",
    	"content":".content&&Text",
    	"tabs":"#NumTab a",
    	"lists":".play_list_box:eq(#id) .playlist_full li"
	},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb&&data-original;.pic_text.text_right&&Text;a&&href;.vodlist_sub&&Text',
}
