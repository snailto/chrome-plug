webpackJsonp([28],{110:function(t,e,a){"use strict";var s="https://api.x.xmt.cn",n="https://sso.xmt.cn";"release-production".match("production")||(s="",n="/sso");var _={titles:{ACCOUNT:"帐号管理",ADD_ACCOUNT:"添加帐号",CLASS:"新媒体课堂",DOWNLOAD:"App下载"},urls:{ACCOUNT_HOST:n,API_HOST:s,OPEN_HOST:"https://open.xmt.cn",ZAN_HOST:"https://api.xmtzan.com",ZAN_LOGIN:"api.xmtzan.com/api/web/login",CALENDAR_URL:"https://calendar.xmt.cn/",HOTARTICLE_API:"https://article.xmt.cn/",SEARCH_URL:"http://search.xmt.cn/",PAIBAN_HREF:"http://paiban.xmt.cn",MORE_PLATFORM_HREF:"https://wj.qq.com/s/918898/5579",PLAT_SYNC_HREF:"https://x.xmt.cn/sync/",WEB_LOGIN:n,SXL_URL:"https://x.xmt.cn/sxl/index.html",SXL_LOGIN:"https://www.sxl.cn/r/v1/users/xmt_users/login",PROFILE:"https://x.xmt.cn/user/",EXTENSION_API:"https://x.xmt.cn/user/#/appcenter",MATERIAL_API:"https://x.xmt.cn/user/#/material/photo",SOOGIF_SEARCH_GIF:s+"/api/sogif/image/search",SOOGIF_GET_COLUMN:s+"/api/sogif/column/list",SOOGIF_GET_GIF_LIST:s+"/api/sogif/column/image/list",IMAGE_SEARCH:s+"/api/openimage/search",IMAGE_GET_CATEGORY:s+"/api/openimage/categories",IMAGE_BY_CATEGORY:s+"/api/openimage/category",TEXT_LINK:s+"/system/option",DESKTOP_GET_DATA:s+"/api/super/desktop/account",DOC_IMPORT:s+"/api/word2html",COLLECT_STYLE:s+"/api/style_collect/add",GET_COLLECTED_STYLE:s+"/api/style_collect/list",DELETE_STYLE:s+"/api/style_collect/delete ",SAVE_STYLE:s+"/api/style_collect/update/",MESSAGE_GET:s+"/api/notify/list",MESSAGE_GET_UNREADCOUNT:s+"/api/notify/new_count",MESSAGE_GET_NEW:s+"/api/notify/list/new",MESSAGE_READ:s+"/api/notify/read",UPLOAD_IMG_API:"https://x.xmt.cn/uploadImg/index.html",STYLE_CENTER_URL:"https://x.xmt.cn/styleCenter/"},STORAGE_USERS_KEY:"xmt-extension-users",STORAGE_CONFIG_KEY:"xmt-extension-config",STORAGE_BIND_HINT_KEY:"xmt-should-show-bind-hint",DESKTOP:{CUSTOM_HEADER:"X-Xmt-Header",GET_FOLLOWER_URL:"https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&f=json",GET_HEADLINE_URL:"https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10&lang=zh_CN&f=json",ACCOUNT_STATUS:{EXPIRED:0,ACTIVE:1},CARD_STATUS:{DEFAULT:0,QRCODE:1,IMGCODE:2,WRONGPWD:3}},SYNC:{CUSTOM_HEADER_AID:"X-Xmt-Sync-Header-Aid",CUSTOM_HEADER_ACTION:"X-Xmt-Sync-Header-Action",CUSTOM_HEADER_PLAT:"X-Xmt-Sync-Header-Plat",CUSTOM_HEADER_Referer:"X-Xmt-Sync-Header-Referer",ERR_REPORT_URL:s+"/api/multiplatform/user/report_error"},SEARCH_PLATFORMS:{WEIXIN:"wx",WEIXIN_NUM:"wxn",UCHEAD:"uch",WEIXIN_TA:"wxta",TOUTIAO:"tt",WEIBO:"wb",YIDIAN:"yd",QIE:"qe",BAIJIA:"bj",WANGYI:"wy",SOHU:"sh",JIANSHU:"js",ZHIHU:"zh",UC:"uc",QINGBO:"qb",XINBANG:"xb",ZXCX:"zxcx",GOUTOUYING:"gty",PANSOU:"ps",PANDUODUO:"pdd",SO:"so",TAOBAO:"tb",SOGOU:"sg",JINGDONG:"jd",TMALL:"tm",YMX:"ymx",YANXUAN:"yx",SUNING:"sn"}};e.a=_},61:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a.n(s),_=a(110);n()(".xmt-container").on("click","#J_xmt_auth",function(){var t=window.localStorage.getItem("fakeId");n()(".auth-center").hide(),n()("#J_xmt_loading").show(),n.a.ajax({url:_.a.urls.API_HOST+"/api/sxl/mini_program/account",type:"POST",dataType:"json",data:{fakeId:t}}).then(function(t){0===t.base_resp.ret?n.a.ajax({url:"https://www.sxl.cn/r/v1/users/xmt_users/login",type:"POST",dataType:"json",data:{username:t.account.username,password:t.account.password}}).then(function(t){if(200===t.status){n()(".auth-center").show(),n()("#J_xmt_loading").hide(),chrome.extension.sendRequest({operation:"sxl-article",action:"submit"});var e=document.createElement("a");e.href=t.data.url,e.click()}}):(n()("#J_xmt_loading").hide(),n()(".auth-center").show(),alert(t.base_resp.msg))})})}});