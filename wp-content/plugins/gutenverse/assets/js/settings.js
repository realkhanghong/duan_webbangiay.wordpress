!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({0:function(e,t){e.exports=window.React},1:function(e,t){e.exports=window.wp.i18n},14:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},17:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},18:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw r}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},19:function(e,t,n){var a=n(20);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},20:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.__esModule=!0,e.exports.default=e.exports},21:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},23:function(e,t,n){var a=n(35);e.exports=function(e,t){if(null==e)return{};var n,r,i=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.__esModule=!0,e.exports.default=e.exports},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return v}));var a,r=n(0),i=n.n(r),l=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(l)}for(var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&c.test(e)},s=[],m=0;m<256;++m)s.push((m+256).toString(16).substr(1));var f=function(e,t,n){var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n}(a)},d=function(e){var t=e.id,n=e.title,a=e.description,r=e.value,l=e.updateValue,o=f();return i.a.createElement("div",{className:"control-wrapper control-checkbox"},i.a.createElement("label",{className:"control-title",htmlFor:"".concat(t,"-checkbox-").concat(o)},n,i.a.createElement("input",{id:"".concat(t,"-checkbox-").concat(o),type:"checkbox",checked:r,onChange:function(e){return n=e.target.checked,void l(t,n);var n},hidden:!0}),i.a.createElement("span",{className:"switch"})),""!==a&&i.a.createElement("span",{className:"control-description"},a))},p=function(e){var t=e.id,n=e.title,a=e.description,r=e.value,l=e.defaultValue,o=void 0===l?"":l,c=e.updateValue,u=f(),s=void 0===r?o:r;return i.a.createElement("div",{className:"control-wrapper control-text"},i.a.createElement("label",{className:"control-title",htmlFor:"".concat(t,"-").concat(u)},n),i.a.createElement("input",{id:"".concat(t,"-").concat(u),type:"text",value:s,onChange:function(e){c(t,e.target.value)}}),""!==a&&i.a.createElement("span",{className:"control-description"},a))},v=function(e){var t=e.id,n=e.title,a=e.description,r=e.value,l=e.defaultValue,o=void 0===l?"":l,c=e.updateValue,u=f(),s=void 0===r?o:r;return i.a.createElement("div",{className:"control-wrapper control-textarea"},i.a.createElement("label",{className:"control-title",htmlFor:"".concat(t,"-").concat(u)},n),i.a.createElement("textarea",{id:"".concat(t,"-").concat(u),onChange:function(e){c(t,e.target.value)},value:s}),""!==a&&i.a.createElement("span",{className:"control-description"},a))}},35:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},4:function(e,t,n){var a=n(17),r=n(18),i=n(19),l=n(21);e.exports=function(e,t){return a(e)||r(e,t)||i(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},6:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},67:function(e,t,n){},7:function(e,t){e.exports=window.ReactDOM},73:function(e,t,n){"use strict";n.r(t),n(67);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),o=n(6),c=n.n(o),u=n(4),s=n.n(u),m=n(23),f=n.n(m),d=n(1),p=n(14),v=n.n(p),b=n(9),g=n(3),h=function(e){var t=e.settingValues,n=e.updateSettingValues,a=e.saving,i=e.saveData,l=t.form_confirmation,o=void 0===l?{}:l,c=function(e,t){n("form_confirmation",e,t)};return r.a.createElement("div",{className:"form-tab-body"},r.a.createElement("h2",null,Object(d.__)("Confirmation Mail to User (Default Setting)")),r.a.createElement("span",null,Object(d.__)('This setting will be the default for "confirmation email to user" when you create a new form.',"gutenverse")),r.a.createElement(g.a,{id:"user_confirm",title:Object(d.__)("Confirmation Mail to User","gutenverse"),description:Object(d.__)("Send confirmation email to user. (To be able to send email, please make sure you've setup SMTP correctly).","gutenverse"),value:o.user_confirm,updateValue:c}),o.user_confirm&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{id:"auto_select_email",title:Object(d.__)("Auto Select Email","gutenverse"),description:Object(d.__)("This will automatically select emails inputted from email's fields.","gutenverse"),value:o.auto_select_email,updateValue:c}),!o.auto_select_email&&r.a.createElement(g.b,{id:"email_input_name",title:Object(d.__)("Use Input's Name","gutenverse"),description:Object(d.__)("Only the selected input name will be sent email. (e.g : input-email).","gutenverse"),defaultValue:"input-email",value:o.email_input_name,updateValue:c}),r.a.createElement(g.b,{id:"user_email_subject",title:Object(d.__)("Email's Subject","gutenverse"),description:Object(d.__)("This will be your email's subject or title.","gutenverse"),value:o.user_email_subject,updateValue:c}),r.a.createElement(g.b,{id:"user_email_form",title:Object(d.__)("Email's Sender","gutenverse"),description:Object(d.__)("Enter the sender email by which you want to send email to user. (Please make sure you use the same email in your SMTP setup).","gutenverse"),value:o.user_email_form,updateValue:c}),r.a.createElement(g.b,{id:"user_email_reply_to",title:Object(d.__)("Email's Reply Target","gutenverse"),description:Object(d.__)("Enter email where user can reply/ you want to get reply.","gutenverse"),value:o.user_email_reply_to,updateValue:c}),r.a.createElement(g.c,{id:"user_email_body",title:Object(d.__)("Messages to User","gutenverse"),description:Object(d.__)("Enter your messages to include it in email's body which will be send to user.","gutenverse"),value:o.user_email_body,updateValue:c})),a?r.a.createElement("div",{className:"gutenverse-button"},Object(d.__)("Saving...","gutenverse")):r.a.createElement("div",{className:"gutenverse-button",onClick:i},Object(d.__)("Save","gutenverse")))},_=function(e){var t=e.settingValues,n=e.updateSettingValues,a=e.saving,i=e.saveData,l=t.form_notification,o=void 0===l?{}:l,c=function(e,t){n("form_notification",e,t)};return r.a.createElement("div",{className:"form-tab-body"},r.a.createElement("h2",null,Object(d.__)("Notification Mail to Admin (Default Setting)")),r.a.createElement("span",null,Object(d.__)('This setting will be the default for "admin notification" when you create a new form.',"gutenverse")),r.a.createElement(g.a,{id:"admin_confirm",title:Object(d.__)("Notification Mail to Admin","gutenverse"),description:Object(d.__)("Send notification email to you or your admin. (To be able to send email, please make sure you've setup SMTP correctly).","gutenverse"),value:o.admin_confirm,updateValue:c}),o.admin_confirm&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.b,{id:"admin_email_subject",title:Object(d.__)("Email Subject","gutenverse"),description:Object(d.__)("This will be your email's subject or title.","gutenverse"),value:o.admin_email_subject,updateValue:c}),r.a.createElement(g.b,{id:"admin_email_to",title:Object(d.__)("Email's Recipient","gutenverse"),description:Object(d.__)('Enter admin email where you want to send mail (For multiple email addresses please use "," as separator).',"gutenverse"),value:o.admin_email_to,updateValue:c}),r.a.createElement(g.b,{id:"admin_email_from",title:Object(d.__)("Email's Sender","gutenverse"),description:Object(d.__)("Enter the sender email by which you want to send email to admin. (Please make sure you use the same email in your SMTP setup).","gutenverse"),value:o.admin_email_from,updateValue:c}),r.a.createElement(g.b,{id:"admin_email_reply_to",title:Object(d.__)("Email's Reply Target","gutenverse"),description:Object(d.__)("Enter email where admin can reply/ you want to get reply.","gutenverse"),value:o.admin_email_reply_to,updateValue:c}),r.a.createElement(g.c,{id:"admin_note",title:Object(d.__)("Messages to Admin","gutenverse"),description:Object(d.__)("Enter your messages to include it in email's body which will be send to admin.","gutenverse"),value:o.admin_note,updateValue:c})),a?r.a.createElement("div",{className:"gutenverse-button"},Object(d.__)("Saving...","gutenverse")):r.a.createElement("div",{className:"gutenverse-button",onClick:i},Object(d.__)("Save","gutenverse")))},y=function(e){var t=Object(a.useState)("confirmation"),n=s()(t,2),i=n[0],l=n[1],o="";switch(i){case"confirmation":o=r.a.createElement(h,e);break;case"notification":o=r.a.createElement(_,e);break;default:o=null}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-setting"},r.a.createElement("div",{className:"".concat("confirmation"===i?"active":""),onClick:function(){return l("confirmation")}},Object(d.__)("User Confirmation","gutenverse")),r.a.createElement("div",{className:"".concat("notification"===i?"active":""),onClick:function(){return l("notification")}},Object(d.__)("Admin Notification","gutenverse"))),r.a.createElement("div",null,o))},O=n(8),E=n.n(O),j=["active"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.active,n=f()(e,j),a="";switch(t){case"form":a=r.a.createElement(y,n)}return r.a.createElement("div",{className:"settings-tab-body"},a)},S=function(){var e=window.GutenverseSettings.settingsData,t=Object(a.useState)("form"),n=s()(t,2),i=n[0],l=n[1],o=Object(a.useState)(e),u=s()(o,2),m=u[0],f=u[1],p=Object(a.useState)(!1),g=s()(p,2),h=g[0],_=g[1],y={form:Object(d.__)("Form","gutenverse")},O={active:i,settingValues:m,updateSettingValues:function(e,t,n){f(x(x({},m),{},c()({},e,x(x({},m[e]),{},c()({},t,n)))))},saving:h,saveData:function(){_(!0),E()({path:"gutenverse-client/v1/settings/modify",method:"POST",data:{setting:m}}).then((function(){_(!1)}))}};return r.a.createElement("div",{className:"settings-tab-container"},r.a.createElement("h2",{className:"gutenverse-icon-logo"},r.a.createElement(b.b,null),Object(d.__)("Settings","gutenverse")),r.a.createElement("div",{className:"setting-tabs"},r.a.createElement("div",{className:"settings-tab-header"},r.a.createElement("div",{className:"tab-items"},Object.keys(y).map((function(e){var t=y[e],n=v()("tab-item",{active:e===i});return r.a.createElement("div",{className:n,key:e,onClick:function(){return l(e)}},t)})))),r.a.createElement(C,O)))};document.getElementById("gutenverse-settings")&&document.addEventListener("DOMContentLoaded",(function(){l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null)),document.getElementById("gutenverse-settings"))}))},8:function(e,t){e.exports=window.wp.apiFetch},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return E}));var a,r,i,l,o,c,u,s,m=n(0),f=n.n(m);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return m.createElement("svg",d({width:109,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=m.createElement("circle",{cx:12,cy:12,r:12,fill:"url(#logo-full-color_svg__paint0_linear_4679_10)"})),r||(r=m.createElement("path",{d:"M16.547 16H9.619l-1.155-2-1.154-2-1.156-2L5 12l1.154 2 1.155 2 1.155 2h6.928l1.155-2z",fill:"#fff"})),i||(i=m.createElement("path",{d:"M7.31 12h4.618l1.155 2 1.154 2h2.31l-1.155-2-2.309-4H6.154l1.156 2z",fill:"#fff"})),l||(l=m.createElement("path",{d:"M17.701 10l-1.155-2-1.154-2H8.463L7.31 8h6.928l1.154 2 1.155 2 1.155 2 1.154-2-1.154-2z",fill:"#fff"})),o||(o=m.createElement("path",{d:"M33.936 17.168a5.328 5.328 0 01-2.086-.406 5.207 5.207 0 01-2.828-2.842 5.541 5.541 0 01-.406-2.142c0-.775.13-1.489.392-2.142a4.952 4.952 0 011.106-1.708 4.946 4.946 0 011.666-1.12 5.365 5.365 0 012.1-.406c.756 0 1.433.126 2.03.378.607.252 1.12.588 1.54 1.008.42.42.719.887.896 1.4l-1.918.924a2.571 2.571 0 00-.938-1.246c-.439-.336-.975-.504-1.61-.504-.616 0-1.157.145-1.624.434-.467.29-.83.69-1.092 1.204-.252.504-.378 1.097-.378 1.778s.135 1.279.406 1.792c.27.513.64.915 1.106 1.204.476.29 1.022.434 1.638.434.476 0 .92-.089 1.33-.266.42-.187.756-.453 1.008-.798.261-.345.392-.76.392-1.246v-.868l.994.84h-3.78v-1.82h4.956v1.106c0 .85-.14 1.591-.42 2.226a4.522 4.522 0 01-1.134 1.568c-.467.41-.994.719-1.582.924a5.465 5.465 0 01-1.764.294zm8.83 0c-.616 0-1.143-.13-1.582-.392a2.602 2.602 0 01-.98-1.12c-.224-.476-.336-1.031-.336-1.666V9.356h2.1v4.466c0 .29.056.546.168.77.121.215.29.383.504.504.215.121.457.182.728.182.28 0 .523-.06.728-.182.215-.121.378-.29.49-.504.121-.224.182-.48.182-.77V9.356h2.1V17h-1.96v-1.512l.112.336a1.923 1.923 0 01-.868 1.022c-.392.215-.854.322-1.386.322zm9.319-.084c-.924 0-1.643-.247-2.156-.742-.504-.504-.756-1.204-.756-2.1v-3.066h-1.288v-1.82h.07c.392 0 .69-.098.896-.294.215-.196.322-.49.322-.882v-.56h2.1v1.736h1.792v1.82h-1.792v2.926c0 .261.046.48.14.658a.868.868 0 00.434.378c.196.084.438.126.728.126.065 0 .14-.005.224-.014.084-.01.172-.019.266-.028V17c-.14.019-.299.037-.476.056a4.814 4.814 0 01-.504.028zm5.892.084c-.812 0-1.516-.177-2.114-.532a3.775 3.775 0 01-1.386-1.456 4.183 4.183 0 01-.49-2.016c0-.765.168-1.447.504-2.044a3.873 3.873 0 011.386-1.414c.58-.345 1.232-.518 1.96-.518.607 0 1.144.098 1.61.294.467.187.86.453 1.176.798.327.345.574.747.742 1.204a4.155 4.155 0 01.224 1.918c-.009.14-.032.261-.07.364h-5.726v-1.54h4.536l-.994.728c.094-.401.09-.756-.014-1.064a1.382 1.382 0 00-.546-.742c-.252-.187-.564-.28-.938-.28a1.63 1.63 0 00-.938.266c-.26.177-.457.439-.588.784-.13.345-.182.765-.154 1.26-.037.43.014.807.154 1.134.14.327.355.583.644.77.29.177.64.266 1.05.266.374 0 .691-.075.952-.224a1.6 1.6 0 00.63-.616l1.68.798c-.149.373-.387.7-.714.98-.317.28-.695.5-1.134.658a4.45 4.45 0 01-1.442.224zM62.854 17V9.356h1.96v1.512l-.112-.336c.177-.457.462-.793.854-1.008.401-.224.868-.336 1.4-.336.579 0 1.083.121 1.512.364.439.243.78.583 1.022 1.022.243.43.364.933.364 1.512V17h-2.1v-4.466c0-.299-.06-.555-.182-.77a1.213 1.213 0 00-.49-.504 1.405 1.405 0 00-.728-.182c-.27 0-.513.06-.728.182-.215.121-.383.29-.504.504a1.645 1.645 0 00-.168.77V17h-2.1zm10.638 0l-3.01-7.644h2.268l2.086 5.782h-.868l2.086-5.782h2.268L75.312 17h-1.82zm9.3.168c-.812 0-1.517-.177-2.114-.532a3.775 3.775 0 01-1.386-1.456 4.185 4.185 0 01-.49-2.016c0-.765.168-1.447.504-2.044a3.875 3.875 0 011.386-1.414c.579-.345 1.232-.518 1.96-.518.606 0 1.143.098 1.61.294.466.187.859.453 1.176.798.326.345.574.747.742 1.204a4.155 4.155 0 01.224 1.918c-.01.14-.033.261-.07.364h-5.726v-1.54h4.536l-.994.728c.093-.401.088-.756-.014-1.064a1.38 1.38 0 00-.546-.742c-.252-.187-.565-.28-.938-.28a1.63 1.63 0 00-.938.266c-.261.177-.457.439-.588.784-.13.345-.182.765-.154 1.26-.037.43.014.807.154 1.134.14.327.355.583.644.77.29.177.64.266 1.05.266.373 0 .69-.075.952-.224a1.6 1.6 0 00.63-.616l1.68.798c-.15.373-.387.7-.714.98-.317.28-.695.5-1.134.658a4.45 4.45 0 01-1.442.224zM87.668 17V9.356h1.96v1.834l-.14-.266c.168-.644.444-1.078.826-1.302.392-.233.854-.35 1.386-.35h.448v1.82h-.658c-.513 0-.928.159-1.246.476-.317.308-.476.747-.476 1.316V17h-2.1zm8.397.168c-.84 0-1.573-.196-2.198-.588a3.019 3.019 0 01-1.26-1.61l1.54-.728c.196.41.462.733.798.966.336.233.71.35 1.12.35.299 0 .527-.06.686-.182a.599.599 0 00.238-.504.454.454 0 00-.084-.28.747.747 0 00-.252-.224 1.789 1.789 0 00-.42-.168l-1.302-.364c-.626-.177-1.106-.462-1.442-.854a2.134 2.134 0 01-.504-1.414c0-.476.121-.891.364-1.246.242-.355.583-.63 1.022-.826.439-.205.943-.308 1.512-.308.746 0 1.4.177 1.96.532.57.345.97.835 1.204 1.47l-1.554.728a1.437 1.437 0 00-.616-.756 1.73 1.73 0 00-.994-.294c-.27 0-.486.056-.644.168a.546.546 0 00-.224.462c0 .103.028.196.084.28a.721.721 0 00.266.224c.13.065.29.126.476.182l1.218.364c.635.187 1.12.471 1.456.854.336.373.504.835.504 1.386 0 .476-.126.891-.378 1.246a2.474 2.474 0 01-1.022.84c-.439.196-.957.294-1.554.294zm7.891 0c-.812 0-1.517-.177-2.114-.532a3.78 3.78 0 01-1.386-1.456 4.18 4.18 0 01-.49-2.016c0-.765.168-1.447.504-2.044a3.869 3.869 0 011.386-1.414c.579-.345 1.232-.518 1.96-.518.607 0 1.143.098 1.61.294.467.187.859.453 1.176.798.327.345.574.747.742 1.204a4.155 4.155 0 01.224 1.918c-.009.14-.033.261-.07.364h-5.726v-1.54h4.536l-.994.728c.093-.401.089-.756-.014-1.064a1.385 1.385 0 00-.546-.742c-.252-.187-.565-.28-.938-.28a1.63 1.63 0 00-.938.266c-.261.177-.457.439-.588.784-.131.345-.182.765-.154 1.26-.037.43.014.807.154 1.134.14.327.355.583.644.77.289.177.639.266 1.05.266.373 0 .691-.075.952-.224.271-.15.481-.355.63-.616l1.68.798c-.149.373-.387.7-.714.98-.317.28-.695.5-1.134.658a4.45 4.45 0 01-1.442.224z",fill:"#011627"})),c||(c=m.createElement("defs",null,m.createElement("linearGradient",{id:"logo-full-color_svg__paint0_linear_4679_10",x1:12,y1:0,x2:12,y2:24,gradientUnits:"userSpaceOnUse"},m.createElement("stop",{stopColor:"#3B57F7"}),m.createElement("stop",{offset:1,stopColor:"#5CD0DA"})))))}function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return m.createElement("svg",v({width:15,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u||(u=m.createElement("path",{d:"M7.5 0C3.364 0 0 3.365 0 7.5v3.107C0 11.375.673 12 1.5 12h.75a.75.75 0 00.75-.75V7.393a.75.75 0 00-.75-.75h-.681C1.986 3.74 4.484 1.5 7.5 1.5c3.017 0 5.514 2.24 5.931 5.143h-.681a.75.75 0 00-.75.75V12c0 .827-.673 1.5-1.5 1.5H9v-.75H6V15h4.5c1.655 0 3-1.345 3-3 .827 0 1.5-.625 1.5-1.393V7.5C15 3.364 11.636 0 7.5 0z",fill:"#99A2A9"})))}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return m.createElement("svg",g({width:16,height:17,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=m.createElement("path",{d:"M3.085 1A1.5 1.5 0 014.5 0h3a1.5 1.5 0 011.415 1H10.5A1.5 1.5 0 0112 2.5v4.732c-.326.14-.631.343-.897.609L6.943 12H2.5a.5.5 0 000 1h3.486c-.26.343-.448.735-.553 1.155l-.375 1.498a1.94 1.94 0 00-.054.347H1.5A1.5 1.5 0 010 14.5v-12A1.5 1.5 0 011.5 1h1.585zM8 1.5a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h3a.5.5 0 00.5-.5zM9.5 6h-7a.5.5 0 100 1h7a.5.5 0 100-1zM6 9.5a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h3a.5.5 0 00.5-.5zm.98 3.877l4.83-4.83a1.87 1.87 0 112.644 2.646l-4.83 4.829a2.197 2.197 0 01-1.02.578l-1.498.374a.89.89 0 01-1.079-1.078l.375-1.498a2.18 2.18 0 01.578-1.02v-.001z",fill:"#99A2A9"})))}var _=["size"];function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var O=function(e){var t=e.size,n=void 0===t?16:t,a=function(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,_);return f.a.createElement("svg",y({},a,{width:n,height:n,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}),f.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"}))},E=function(){return f.a.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("g",{clipPath:"url(#clip0_3312_159)"},f.a.createElement("path",{d:"M32 53.332C23.176 53.332 16 46.156 16 37.332C16 28.508 23.176 21.332 32 21.332C40.824 21.332 48 28.508 48 37.332C48 46.156 40.824 53.332 32 53.332ZM32 25.332C25.384 25.332 20 30.716 20 37.332C20 43.948 25.384 49.332 32 49.332C38.616 49.332 44 43.948 44 37.332C44 30.716 38.616 25.332 32 25.332Z",fill:"#A2A5A9"}),f.a.createElement("path",{d:"M28.6668 42.6648C28.1548 42.6648 27.6428 42.4701 27.2535 42.0781C26.4721 41.2968 26.4721 40.0301 27.2535 39.2488L33.9201 32.5821C34.7015 31.8008 35.9681 31.8008 36.7495 32.5821C37.5308 33.3634 37.5308 34.6301 36.7495 35.4114L30.0828 42.0781C29.6908 42.4701 29.1788 42.6648 28.6668 42.6648Z",fill:"#A2A5A9"}),f.a.createElement("path",{d:"M35.3335 42.6648C34.8215 42.6648 34.3095 42.4701 33.9201 42.0781L27.2535 35.4114C26.4721 34.6301 26.4721 33.3634 27.2535 32.5821C28.0348 31.8008 29.3015 31.8008 30.0828 32.5821L36.7495 39.2488C37.5308 40.0301 37.5308 41.2968 36.7495 42.0781C36.3575 42.4701 35.8455 42.6648 35.3335 42.6648Z",fill:"#A2A5A9"}),f.a.createElement("path",{d:"M56.6667 61.3346H7.33333C3.288 61.3346 0 58.0466 0 54.0013V10.0013C0 5.95597 3.288 2.66797 7.33333 2.66797H56.6667C60.712 2.66797 64 5.95597 64 10.0013V54.0013C64 58.0466 60.712 61.3346 56.6667 61.3346ZM7.33333 6.66797C5.496 6.66797 4 8.16397 4 10.0013V54.0013C4 55.8386 5.496 57.3346 7.33333 57.3346H56.6667C58.504 57.3346 60 55.8386 60 54.0013V10.0013C60 8.16397 58.504 6.66797 56.6667 6.66797H7.33333Z",fill:"#A2A5A9"}),f.a.createElement("path",{d:"M62 16H2C0.896 16 0 15.104 0 14C0 12.896 0.896 12 2 12H62C63.104 12 64 12.896 64 14C64 15.104 63.104 16 62 16Z",fill:"#A2A5A9"})),f.a.createElement("defs",null,f.a.createElement("clipPath",{id:"clip0_3312_159"},f.a.createElement("rect",{width:"64",height:"64",fill:"white"}))))}}});