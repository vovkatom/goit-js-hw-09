!function(){let e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=!1;t.disabled=!0,e.addEventListener("click",()=>{d||(e.disabled=!0,t.disabled=!1,d=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`},1e3))}),t.addEventListener("click",()=>{d&&(clearInterval(d),d=null,e.disabled=!1,t.disabled=!0)})}();//# sourceMappingURL=01-color-switcher.c3fa505b.js.map

//# sourceMappingURL=01-color-switcher.c3fa505b.js.map
