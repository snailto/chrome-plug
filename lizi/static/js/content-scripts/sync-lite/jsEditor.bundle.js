webpackJsonp([35],{75:function(e,t){console.log("sync lite script running");var n=0;chrome.runtime.sendMessage("sync-lite-get-article",function(e){var t=function t(){n+=1;var c=document.querySelector(".kalamu-area");if(c){var i=e.data,r=document.querySelector("#note_title");r.dispatchEvent(new Event("focus",{bubbles:!0})),r.value=i.title,r.dispatchEvent(new Event("input",{bubbles:!0})),c.dispatchEvent(new Event("focus",{bubbles:!0})),c.innerHTML=i.content,chrome.runtime.sendMessage("sync-lite-get-article-succ")}else n<50?setTimeout(t,100):chrome.runtime.sendMessage("sync-lite-get-article-fail")};!function e(){n+=1;var c=document.querySelector("div.middle");if(c){var i=c.querySelectorAll("li.one-note").length,r=new MutationObserver(function(e){e.forEach(function(e){if("childList"===e.type||"attributes"===e.type){var s=c.querySelector("li.one-note");c.querySelectorAll("li.one-note").length===i+1&&s.className.match("active")&&(r.disconnect(),n=0,setTimeout(t,400))}})});r.observe(c,{childList:!0,subtree:!0,attributes:!0}),document.querySelector("#new-note").querySelector("a").dispatchEvent(new Event("click",{bubbles:!0}))}else n<50?setTimeout(e,100):chrome.runtime.sendMessage("sync-lite-get-article-fail")}()})}});