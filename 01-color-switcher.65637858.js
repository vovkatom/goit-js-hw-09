const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=!1;t.disabled=!0,e.addEventListener("click",()=>{d||(e.disabled=!0,t.disabled=!1,d=setInterval(()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;document.body.style.backgroundColor=e,// Оновлюємо поточний колір фону у локальному сховищі
localStorage.setItem("color-switcher",e)},1e3))}),t.addEventListener("click",()=>{d&&(clearInterval(d),d=null,e.disabled=!1,t.disabled=!0)}),// Перевіряємо і встановлюємо поточний колір
window.addEventListener("load",()=>{let e=localStorage.getItem("color-switcher");e&&(document.body.style.backgroundColor=e)});//# sourceMappingURL=01-color-switcher.65637858.js.map

//# sourceMappingURL=01-color-switcher.65637858.js.map
