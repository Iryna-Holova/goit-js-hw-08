var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var r,a,i,o,u,f,l=0,c=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function I(e){return l=e,u=setTimeout(h,t),c?y(e):o}function S(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-l>=i}function h(){var e=g();if(S(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return p?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,b&&r?y(e):(r=a=void 0,o)}function w(){var e=g(),n=S(e);if(r=arguments,a=this,f=e,n){if(void 0===u)return I(f);if(p)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),o}return t=v(t)||0,d(n)&&(c=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=a=u=void 0},w.flush=function(){return void 0===u?o:j(g())},w}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=a.test(e);return u||i.test(e)?o(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return d(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:r,maxWait:t,trailing:a})};let b={email:"",message:""};form=document.querySelector(".feedback-form"),emailInput=form.querySelector("input"),messageInput=form.querySelector("textarea"),form.addEventListener("submit",(function(e){e.preventDefault(),emailInput.value&&messageInput.value?(console.log(b),localStorage.clear(),emailInput.value="",messageInput.value="",b.email="",b.message=""):alert("Please fill in all fields")})),form.addEventListener("input",t((function(e){switch(e.target.getAttribute("name")){case"email":b.email=e.target.value;break;case"message":b.message=e.target.value;break;default:return}localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),function(){try{JSON.parse(localStorage.getItem("feedback-form-state"))&&(b=JSON.parse(localStorage.getItem("feedback-form-state")),emailInput.value=b.email,messageInput.value=b.message)}catch(e){return}}();
//# sourceMappingURL=03-feedback.f0091245.js.map
