import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */let t={};const a=document.querySelector("form"),l="feedback-form-state";a.addEventListener("input",e=>{e.target.value!==""&&e.target.value!==null&&(t[e.target.name]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(t)))});localStorage.getItem(l)&&(t=JSON.parse(localStorage.getItem(l)),a.elements.message.value=t.message,a.elements.email.value=t.email);a.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(l),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map