const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let o=null;t.addEventListener("click",(()=>{e.removeAttr,console.log("S-a apasat butonul start!"),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),o=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{console.log("S-a apasat butonul stop!"),clearInterval(o),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.34ffff7f.js.map