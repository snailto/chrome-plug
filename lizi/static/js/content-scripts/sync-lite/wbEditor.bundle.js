webpackJsonp([30],{80:function(e,t){var r=chrome.runtime.getManifest().version;parseFloat(r.split(".")[0]+"."+r.split(".")[1]+r.split(".")[2]),chrome.runtime.sendMessage("sync-lite-get-article",function(e){var t=0,r=function r(){t+=1;var i=document.querySelector(".WB_editor_iframe");if(i){var n=e.data,c=document.querySelector(".title").querySelector("textarea");c.dispatchEvent(new Event("focus",{bubbles:!0})),c.value=n.title,c.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("focus",{bubbles:!0})),i.innerHTML=n.content,chrome.runtime.sendMessage("sync-lite-get-article-succ")}else t<10?setTimeout(r,500):chrome.runtime.sendMessage("sync-lite-get-article-fail")};!function e(){t+=1;var i=document.querySelector(".list_wrap").querySelector("ul");if(i){var n=Array.prototype.slice.call(i.querySelectorAll("li")).filter(function(e){return""!==e.className}).length;t=0;var c=new MutationObserver(function(e){e.forEach(function(e){if("childList"===e.type||"attributes"===e.type){var t=Array.prototype.slice.call(i.querySelectorAll("li")).filter(function(e){return""!==e.className}).length,l=i.querySelector("li");t===n+1&&l.className.match("curr")&&(c.disconnect(),setTimeout(r,400))}})});c.observe(i,{childList:!0,subtree:!0,attributes:!0})}else t<10?setTimeout(e,500):chrome.runtime.sendMessage("sync-lite-get-article-fail")}(),setTimeout(function(){document.querySelector(".list_add").querySelector("a").dispatchEvent(new Event("click",{bubbles:!0}))},1e3)})}});