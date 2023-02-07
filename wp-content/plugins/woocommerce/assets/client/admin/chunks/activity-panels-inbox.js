"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8851],{78047:(e,t,o)=>{o.d(t,{U:()=>E,e:()=>h});var a=o(69307),n=o(83849),c=o.n(n),s=o(59838),i=o(76292),r=o.n(i),l=o(7862),m=o.n(l),d=o(86020),_=o(55609),u=o(92819);class p extends a.Component{render(){const{className:e,hasAction:t,hasDate:o,hasSubtitle:n,lines:s}=this.props,i=c()("woocommerce-activity-card is-loading",e);return(0,a.createElement)("div",{className:i,"aria-hidden":!0},(0,a.createElement)("span",{className:"woocommerce-activity-card__icon"},(0,a.createElement)("span",{className:"is-placeholder"})),(0,a.createElement)("div",{className:"woocommerce-activity-card__header"},(0,a.createElement)("div",{className:"woocommerce-activity-card__title is-placeholder"}),n&&(0,a.createElement)("div",{className:"woocommerce-activity-card__subtitle is-placeholder"}),o&&(0,a.createElement)("div",{className:"woocommerce-activity-card__date"},(0,a.createElement)("span",{className:"is-placeholder"}))),(0,a.createElement)("div",{className:"woocommerce-activity-card__body"},(0,u.range)(s).map((e=>(0,a.createElement)("span",{className:"is-placeholder",key:e})))),t&&(0,a.createElement)("div",{className:"woocommerce-activity-card__actions"},(0,a.createElement)("span",{className:"is-placeholder"})))}}p.propTypes={className:m().string,hasAction:m().bool,hasDate:m().bool,hasSubtitle:m().bool,lines:m().number},p.defaultProps={hasAction:!1,hasDate:!1,hasSubtitle:!1,lines:1};const h=p;class E extends a.Component{getCard(){const{actions:e,className:t,children:o,date:n,icon:s,subtitle:i,title:l,unread:m}=this.props,_=c()("woocommerce-activity-card",t),u=Array.isArray(e)?e:[e],p=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(n)?r().utc(n).fromNow():n;return(0,a.createElement)("section",{className:_},m&&(0,a.createElement)("span",{className:"woocommerce-activity-card__unread"}),s&&(0,a.createElement)("span",{className:"woocommerce-activity-card__icon","aria-hidden":!0},s),l&&(0,a.createElement)("header",{className:"woocommerce-activity-card__header"},(0,a.createElement)(d.H,{className:"woocommerce-activity-card__title"},l),i&&(0,a.createElement)("div",{className:"woocommerce-activity-card__subtitle"},i),p&&(0,a.createElement)("span",{className:"woocommerce-activity-card__date"},p)),o&&(0,a.createElement)(d.Section,{className:"woocommerce-activity-card__body"},o),e&&(0,a.createElement)("footer",{className:"woocommerce-activity-card__actions"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t})))))}render(){const{onClick:e}=this.props;return e?(0,a.createElement)(_.Button,{className:"woocommerce-activity-card__button",onClick:e},this.getCard()):this.getCard()}}E.propTypes={actions:m().oneOfType([m().arrayOf(m().element),m().element]),onClick:m().func,className:m().string,children:m().node,date:m().string,icon:m().node,subtitle:m().node,title:m().oneOfType([m().string,m().node]),unread:m().bool},E.defaultProps={icon:(0,a.createElement)(s.Z,{size:48}),unread:!1}},11640:(e,t,o)=>{o.r(t),o.d(t,{InboxPanel:()=>s,default:()=>i});var a=o(69307),n=o(17180),c=o(28655);const s=e=>{let{hasAbbreviatedNotifications:t,thingsToDoNextCount:o}=e;return(0,a.createElement)("div",{className:"woocommerce-notification-panels"},t&&(0,a.createElement)(c.vn,{thingsToDoNextCount:o}),(0,a.createElement)(n.Z,{showHeader:!1}))},i=s},17180:(e,t,o)=>{o.d(t,{Z:()=>y});var a=o(69307),n=o(65736),c=o(86020),s=o(55609),i=o(67221),r=o(9818),l=o(14599),m=o(82418),d=o(83786),_=o(14812),u=o(76292),p=o.n(u),h=o(78047),E=o(65933),w=o(70481);const g=e=>{let{onClose:t}=e;const{createNotice:o}=(0,r.useDispatch)("core/notices"),{batchUpdateNotes:c,removeAllNotes:m}=(0,r.useDispatch)(i.NOTES_STORE_NAME);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.Modal,{title:(0,n.__)("Dismiss all messages","woocommerce"),className:"woocommerce-inbox-dismiss-all-modal",onRequestClose:t},(0,a.createElement)("div",{className:"woocommerce-inbox-dismiss-all-modal__wrapper"},(0,a.createElement)("div",{className:"woocommerce-usage-modal__message"},(0,n.__)("Are you sure? Inbox messages will be dismissed forever.","woocommerce")),(0,a.createElement)("div",{className:"woocommerce-usage-modal__actions"},(0,a.createElement)(s.Button,{onClick:t},(0,n.__)("Cancel","woocommerce")),(0,a.createElement)(s.Button,{isPrimary:!0,onClick:()=>{(async()=>{(0,l.recordEvent)("wcadmin_inbox_action_dismissall",{});try{const e=await m({status:"unactioned"});o("success",(0,n.__)("All messages dismissed","woocommerce"),{actions:[{label:(0,n.__)("Undo","woocommerce"),onClick:()=>{c(e.map((e=>e.id)),{is_deleted:0})}}]})}catch(e){o("error",(0,n.__)("Messages could not be dismissed","woocommerce")),t()}})(),t()}},(0,n.__)("Yes, dismiss all","woocommerce"))))))},N=(e,t)=>{(0,l.recordEvent)("inbox_action_click",{note_name:e.name,note_title:e.title,note_content_inner_link:t})};let v=!1;const b={page:1,per_page:i.QUERY_DEFAULTS.pageSize,status:"unactioned",type:i.QUERY_DEFAULTS.noteTypes,orderby:"date",order:"desc",_fields:["id","name","title","content","type","status","actions","date_created","date_created_gmt","layout","image","is_deleted","is_read","locale"]},y=e=>{let{showHeader:t=!0}=e;const{createNotice:o}=(0,r.useDispatch)("core/notices"),{removeNote:u,updateNote:y,triggerNoteAction:f}=(0,r.useDispatch)(i.NOTES_STORE_NAME),{isError:C,isResolvingNotes:k,isBatchUpdating:x,notes:A}=(0,r.useSelect)((e=>{const{getNotes:t,getNotesError:o,isResolving:a,isNotesRequesting:n}=e(i.NOTES_STORE_NAME),c=p()("2022-01-11","YYYY-MM-DD").valueOf(),s=["en_US","en_AU","en_CA","en_GB","en_ZA"];return{notes:t(b).map((e=>{const t=p()(e.date_created_gmt,"YYYY-MM-DD").valueOf();return s.includes(e.locale)&&t>=c?{...e,content:(0,E.r7)(e.content,320)}:e})),isError:Boolean(o("getNotes",[b])),isResolvingNotes:a("getNotes",[b]),isBatchUpdating:n("batchUpdateNotes")}})),[O,S]=(0,a.useState)(!1);if(C){const e=(0,n.__)("There was an error getting your inbox. Please try again.","woocommerce"),t=(0,n.__)("Reload","woocommerce"),o=()=>{window.location.reload()};return(0,a.createElement)(c.EmptyContent,{title:e,actionLabel:t,actionURL:null,actionCallback:o})}const D=(0,E.kS)(A);return(0,a.createElement)(a.Fragment,null,O&&(0,a.createElement)(g,{onClose:()=>{S(!1)}}),(0,a.createElement)("div",{className:"woocommerce-homepage-notes-wrapper"},(k||x)&&(0,a.createElement)(c.Section,null,(0,a.createElement)(_.InboxNotePlaceholder,{className:"banner message-is-unread"})),(0,a.createElement)(c.Section,null,!k&&!x&&(e=>{let{hasNotes:t,isBatchUpdating:o,notes:i,onDismiss:r,onNoteActionClick:u,setShowDismissAllModal:p,showHeader:E=!0}=e;if(o)return;if(!t)return(0,a.createElement)(h.U,{className:"woocommerce-empty-activity-card",title:(0,n.__)("Your inbox is empty","woocommerce"),icon:!1},(0,n.__)("As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!","woocommerce"));v||((0,l.recordEvent)("inbox_panel_view",{total:i.length}),v=!0);const g=(0,w.GG)(),b=e=>{(0,l.recordEvent)("inbox_note_view",{note_content:e.content,note_name:e.name,note_title:e.title,note_type:e.type,screen:g})},y=Object.keys(i).map((e=>i[e]));return(0,a.createElement)(s.Card,{size:"large"},E&&(0,a.createElement)(s.CardHeader,{size:"medium"},(0,a.createElement)("div",{className:"wooocommerce-inbox-card__header"},(0,a.createElement)(_.Text,{size:"20",lineHeight:"28px",variant:"title.small"},(0,n.__)("Inbox","woocommerce")),(0,a.createElement)(c.Badge,{count:y.length})),(0,a.createElement)(c.EllipsisMenu,{label:(0,n.__)("Inbox Notes Options","woocommerce"),renderContent:e=>{let{onToggle:t}=e;return(0,a.createElement)("div",{className:"woocommerce-inbox-card__section-controls"},(0,a.createElement)(s.Button,{onClick:()=>{p(!0),t()}},(0,n.__)("Dismiss all","woocommerce")))}})),(0,a.createElement)(m.Z,{role:"menu"},y.map((e=>{const{id:t,is_deleted:o}=e;return o?null:(0,a.createElement)(d.Z,{key:t,timeout:500,classNames:"woocommerce-inbox-message"},(0,a.createElement)(_.InboxNoteCard,{key:t,note:e,onDismiss:r,onNoteActionClick:u,onBodyLinkClick:N,onNoteVisible:b}))}))))})({hasNotes:D,isBatchUpdating:x,notes:A,onDismiss:e=>{const t=(0,w.GG)();(0,l.recordEvent)("inbox_action_dismiss",{note_name:e.name,note_title:e.title,note_name_dismiss_all:!1,note_name_dismiss_confirmation:!0,screen:t});const a=e.id;try{u(a),o("success",(0,n.__)("Message dismissed","woocommerce"),{actions:[{label:(0,n.__)("Undo","woocommerce"),onClick:()=>{y(a,{is_deleted:0})}}]})}catch(e){o("error",(0,n._n)("Message could not be dismissed","Messages could not be dismissed",1,"woocommerce"))}},onNoteActionClick:(e,t)=>{f(e.id,t.id)},setShowDismissAllModal:S,showHeader:t}))))}},59838:(e,t,o)=>{t.Z=function(e){var t=e.size,o=void 0===t?24:t,a=e.onClick,i=(e.icon,e.className),r=function(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)o=c[a],0<=t.indexOf(o)||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,c),l=["gridicon","gridicons-notice-outline",i,!!function(e){return 0==e%18}(o)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return n.default.createElement("svg",s({className:l,height:o,width:o,onClick:a},r,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))};var a,n=(a=o(99196))&&a.__esModule?a:{default:a},c=["size","onClick","icon","className"];function s(){return s=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)}}}]);