(function(e){function t(t){for(var n,i,r=t[0],l=t[1],u=t[2],v=0,p=[];v<r.length;v++)i=r[v],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},c=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var s=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),a=o.n(n);a.a},"08ef":function(e,t,o){var n={"./cv-accordion/cv-accordion-item.vue":"71e2","./cv-accordion/cv-accordion-skeleton.vue":"5244","./cv-accordion/cv-accordion.vue":"7b73","./cv-breadcrumb/cv-breadcrumb-item.vue":"55dc","./cv-breadcrumb/cv-breadcrumb-skeleton.vue":"5cb9","./cv-breadcrumb/cv-breadcrumb.vue":"6f06","./cv-button/cv-button-set.vue":"d897","./cv-button/cv-button-skeleton.vue":"0b06","./cv-button/cv-button.vue":"b281","./cv-button/cv-icon-button.vue":"4204","./cv-checkbox/cv-checkbox-skeleton.vue":"250c","./cv-checkbox/cv-checkbox.vue":"8c9d","./cv-code-snippet/cv-code-snippet-skeleton.vue":"fe2e","./cv-code-snippet/cv-code-snippet.vue":"f090","./cv-combo-box/cv-combo-box.vue":"5785","./cv-content-switcher/cv-content-switcher-button.vue":"15b9","./cv-content-switcher/cv-content-switcher-content.vue":"fc85","./cv-content-switcher/cv-content-switcher.vue":"7938","./cv-data-table/cv-data-table-action.vue":"baa6","./cv-data-table/cv-data-table-cell.vue":"7dc9","./cv-data-table/cv-data-table-row.vue":"411e","./cv-data-table/cv-data-table-skeleton.vue":"6ec6","./cv-data-table/cv-data-table.vue":"5617","./cv-date-picker/cv-date-picker.vue":"c924","./cv-dropdown/cv-dropdown-item.vue":"3ace","./cv-dropdown/cv-dropdown-skeleton.vue":"60c8","./cv-dropdown/cv-dropdown.vue":"1b7e","./cv-file-uploader/cv-file-uploader-skeleton.vue":"6c41","./cv-file-uploader/cv-file-uploader.vue":"7608","./cv-form/cv-form-group.vue":"3b05","./cv-form/cv-form-item.vue":"4813","./cv-form/cv-form.vue":"b155","./cv-inline-loading/cv-inline-loading.vue":"b55f","./cv-inline-notification/cv-inline-notification.vue":"9041","./cv-link/cv-link.vue":"e7e8","./cv-list/cv-list-item.vue":"a1d7","./cv-list/cv-list.vue":"21cd","./cv-loading/cv-loading.vue":"dbb8","./cv-modal/cv-modal.vue":"7346","./cv-multi-select/cv-multi-select.vue":"998c","./cv-number-input/cv-number-input-skeleton.vue":"e7c1","./cv-number-input/cv-number-input.vue":"0ffa","./cv-overflow-menu/cv-overflow-menu-item.vue":"5ed7","./cv-overflow-menu/cv-overflow-menu.vue":"b3a0","./cv-pagination/cv-pagination.vue":"8913","./cv-progress/cv-progress-step.vue":"4a7f","./cv-progress/cv-progress.vue":"01f6","./cv-radio-button/cv-radio-button.vue":"f243","./cv-radio-button/cv-radio-group.vue":"d923","./cv-search/cv-search.vue":"c005","./cv-select/cv-select-optgroup.vue":"6d31","./cv-select/cv-select-option.vue":"47d6","./cv-select/cv-select.vue":"c429","./cv-skeleton-text/cv-skeleton-text.vue":"85b3","./cv-slider/cv-slider-skeleton.vue":"30e3","./cv-slider/cv-slider.vue":"bf03","./cv-structured-list/cv-structured-list-data.vue":"6e05","./cv-structured-list/cv-structured-list-heading.vue":"e4ed","./cv-structured-list/cv-structured-list-item.vue":"43ca","./cv-structured-list/cv-structured-list.vue":"5bbf","./cv-tabs/cv-tab.vue":"e417","./cv-tabs/cv-tabs-skeleton.vue":"0e4a","./cv-tabs/cv-tabs.vue":"e464","./cv-tag/cv-tag-skeleton.vue":"21ca","./cv-tag/cv-tag.vue":"022c","./cv-text-area/cv-text-area.vue":"0019","./cv-text-input/cv-text-input.vue":"50e5","./cv-tile/cv-tile.vue":"4143","./cv-time-picker/cv-time-picker.vue":"1b53","./cv-toast-notification/cv-toast-notification.vue":"d64c","./cv-toggle/cv-toggle-skeleton.vue":"a32c","./cv-toggle/cv-toggle.vue":"761e","./cv-toolbar/cv-toolbar-divider.vue":"3ad3","./cv-toolbar/cv-toolbar-option.vue":"fbb6","./cv-toolbar/cv-toolbar-search.vue":"5907","./cv-toolbar/cv-toolbar-title.vue":"142c","./cv-toolbar/cv-toolbar.vue":"9783","./cv-tooltip/cv-definition-tooltip.vue":"9963","./cv-tooltip/cv-interactive-tooltip.vue":"d69a","./cv-tooltip/cv-tooltip.vue":"c332","./cv-ui-shell/cv-content.vue":"5326","./cv-ui-shell/cv-header-global-action.vue":"0df1","./cv-ui-shell/cv-header-menu-button.vue":"6bef","./cv-ui-shell/cv-header-menu-item.vue":"246e","./cv-ui-shell/cv-header-menu.vue":"a418","./cv-ui-shell/cv-header-name.vue":"49aa","./cv-ui-shell/cv-header-nav.vue":"ac7f","./cv-ui-shell/cv-header-panel.vue":"9af7","./cv-ui-shell/cv-header-side-nav-items.vue":"3e68","./cv-ui-shell/cv-header.vue":"21d9","./cv-ui-shell/cv-side-nav-icon.vue":"50a2","./cv-ui-shell/cv-side-nav-items.vue":"340a","./cv-ui-shell/cv-side-nav-link.vue":"4a05","./cv-ui-shell/cv-side-nav-menu-item.vue":"e2eb","./cv-ui-shell/cv-side-nav-menu.vue":"6f68","./cv-ui-shell/cv-side-nav.vue":"342a","./cv-ui-shell/cv-skip-to-content.vue":"cb8f","./cv-ui-shell/cv-switcher-item-link.vue":"cf28","./cv-ui-shell/cv-switcher-item.vue":"a4cd","./cv-ui-shell/cv-switcher.vue":"c3d0"};function a(e){var t=c(e);return o(t)}function c(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="08ef"},1947:function(e,t,o){},3801:function(e,t,o){},"39af":function(e,t,o){"use strict";var n=o("b11d"),a=o.n(n);a.a},"45c8":function(e,t,o){"use strict";var n=o("1947"),a=o.n(n);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("AppHeader"),o("AppContent")],1)},c=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("cv-header",{attrs:{"aria-label":"Carbon header"}},[o("cv-skip-to-content",{attrs:{href:"#main-content"}},[e._v(" Skip to content ")]),o("cv-header-name",{attrs:{href:"javascript:void(0)",prefix:"Sticky header"}}),o("template",{slot:"header-global"},[o("cv-header-global-action",{attrs:{"aria-label":"Notifications","aria-controls":"notifications-panel"}},[o("Notification20")],1),o("cv-header-global-action",{attrs:{"aria-label":"User avatar","aria-controls":"user-panel"}},[o("UserAvatar20")],1),o("cv-header-global-action",{attrs:{"aria-label":"App switcher","aria-controls":"switcher-panel"}},[o("AppSwitcher20")],1)],1)],2)},r=[],l=o("45c1"),u=o("4f6b"),s=o("9638"),v={name:"AppHeader",components:{Notification20:l["a"],UserAvatar20:u["a"],AppSwitcher20:s["a"]}},p=v,d=o("2877"),m=Object(d["a"])(p,i,r,!1,null,null,null),f=m.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"content",staticClass:"content"},[o("page-toolbar"),o("section",[o("h2",[e._v("Text Input")]),o("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")]),o("p",[e._v("Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.")]),o("p",[e._v("Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")]),o("cv-text-input",{attrs:{placeholder:"click to see browser behaviour on mobile device"}})],1),o("section",[o("h2",[e._v("Text Area")]),o("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")]),o("p",[e._v("Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.")]),o("p",[e._v("Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")]),o("cv-text-area",{attrs:{placeholder:"click to see browser behaviour on mobile device"}})],1),e._m(0),o("annotation-toolbar",{ref:"toolbar",on:{toggle:e.handleToolbarToggle}}),o("annotation-text-area",{ref:"textarea",on:{toggle:e.handleTextAreaToggle}}),o("annotation-list",{ref:"list"})],1)},h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h2",[e._v("Typography")]),o("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")]),o("p",[e._v("Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.")]),o("p",[e._v("Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")])])}],g=o("39c3"),y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("cv-toolbar",[o("cv-toolbar-search"),o("cv-overflow-menu",{staticClass:"bx--toolbar-action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 1")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 2")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Action 3")])],1)],1)},_=[],w={name:"PageToolbar"},x=w,A=(o("39af"),Object(d["a"])(x,y,_,!1,null,"ac1ee516",null)),k=A.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("cv-toolbar",[o("cv-icon-button",{attrs:{icon:e.iconTextScale},on:{click:e.handleToggle}}),o("cv-icon-button",{attrs:{icon:e.iconTextKerning},on:{click:e.handleToggle}}),o("cv-icon-button",{attrs:{icon:e.iconTextHighlight},on:{click:e.handleToggle}})],1)},T=[],q=o("4f33"),j=o("8180"),$=o("d2a6"),P={name:"AnnotationToolbar",computed:{iconTextScale:function(){return q["a"]},iconTextKerning:function(){return j["a"]},iconTextHighlight:function(){return $["a"]}},methods:{handleToggle:function(){this.$emit("toggle")}}},O=P,E=(o("b772"),Object(d["a"])(O,C,T,!1,null,"53520f3a",null)),S=E.exports,N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("cv-toolbar",[o("cv-text-area",{ref:"text",staticClass:"textarea",attrs:{placeholder:"click to see browser behaviour on mobile device"}}),o("div",{staticClass:"action"},[o("cv-icon-button",{attrs:{kind:"ghost",icon:e.iconClose},on:{click:e.handleToggle}}),o("cv-icon-button",{attrs:{icon:e.iconSave},on:{click:e.handleToggle}})],1)],1)},D=[],M=o("9450"),L=o("8f3b"),I={name:"AnnotationTextArea",computed:{iconClose:function(){return M["a"]},iconSave:function(){return L["a"]}},methods:{handleToggle:function(){this.$emit("toggle")}}},R=I,H=(o("bb65"),Object(d["a"])(R,N,D,!1,null,"799d39d2",null)),U=H.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("cv-toolbar",[o("cv-tile",[o("cv-overflow-menu",{staticClass:"bx--action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Edit")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Delete")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Copy Note")])],1),o("h6",[e._v("Calan Gray")]),o("p",[o("span",{staticStyle:{"background-color":"yellow"}},[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" Aenean commodo ligula eget dolor. Aenean massa."),o("br"),o("a",{attrs:{href:"#"}},[e._v("Read More")])]),o("h6",[e._v("Comments (20)")])],1),o("cv-tile",[o("cv-overflow-menu",{staticClass:"bx--action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Edit")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Delete")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Copy Note")])],1),o("h6",[e._v("Scarlett Millar")]),o("p",[o("span",{staticStyle:{"background-color":"yellow"}},[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" Aenean commodo ligula eget dolor. Aenean massa."),o("br"),o("a",{attrs:{href:"#"}},[e._v("Read More")])]),o("h6",[e._v("Comments (20)")])],1),o("cv-tile",[o("cv-overflow-menu",{staticClass:"bx--action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Edit")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Delete")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Copy Note")])],1),o("h6",[e._v("Bonnie Campbell")]),o("p",[o("span",{staticStyle:{"background-color":"yellow"}},[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" Aenean commodo ligula eget dolor. Aenean massa."),o("br"),o("a",{attrs:{href:"#"}},[e._v("Read More")])]),o("h6",[e._v("Comments (10)")])],1),o("cv-tile",[o("cv-overflow-menu",{staticClass:"bx--action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Edit")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Delete")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Copy Note")])],1),o("h6",[e._v("Tiegan McMillan")]),o("p",[o("span",{staticStyle:{"background-color":"yellow"}},[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" Aenean commodo ligula eget dolor. Aenean massa."),o("br"),o("a",{attrs:{href:"#"}},[e._v("Read More")])]),o("h6",[e._v("Comments (10)")])],1),o("cv-tile",[o("cv-overflow-menu",{staticClass:"bx--action",attrs:{"flip-menu":""}},[o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Edit")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Delete")]),o("cv-overflow-menu-item",{attrs:{"primary-focus":""}},[e._v("Copy Note")])],1),o("h6",[e._v("Daniel Jones")]),o("p",[o("span",{staticStyle:{"background-color":"yellow"}},[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" Aenean commodo ligula eget dolor. Aenean massa."),o("br"),o("a",{attrs:{href:"#"}},[e._v("Read More")])]),o("h6",[e._v("Comments (10)")])],1)],1)},V=[],K={name:"AnnotationList"},B=K,F=(o("5d97"),Object(d["a"])(B,J,V,!1,null,"eb867e80",null)),G=F.exports,z={name:"AppContent",components:{PageToolbar:k,AnnotationToolbar:S,AnnotationTextArea:U,AnnotationList:G},data:function(){return{toolbarPopper:null,textareaPopper:null,listPopper:null}},methods:{handleToolbarToggle:function(){var e=this.$refs.toolbar.$el,t=this.$refs.textarea.$el,o=this.$refs.list.$el;e.style.display="none",o.style.display="none",t.style.display="";var n=document.getSelection(),a=n.anchorNode.parentElement;this.textareaPopper=Object(g["a"])(a,t);var c=n.getRangeAt(0),i=document.createElement("span");i.setAttribute("style","background-color: yellow"),c.surroundContents(i),n.removeAllRanges()},handleTextAreaToggle:function(){var e=this.$refs.toolbar.$el,t=this.$refs.textarea.$el,o=this.$refs.list.$el;e.style.display="none",t.style.display="none",o.style.display="none"}},mounted:function(){var e=this,t=this.$refs.toolbar.$el,o=this.$refs.textarea.$el,n=this.$refs.list.$el;t.style.display="none",o.style.display="none",n.style.display="none",document.addEventListener("selectionchange",(function(){e.toolbarPopper&&e.toolbarPopper.destroy&&(e.toolbarPopper.destroy(),e.toolbarPopper=null),e.listPopper&&e.listPopper.destroy&&(e.listPopper.destroy(),e.listPopper=null);var a=document.getSelection();if(a.isCollapsed){var c=a.anchorNode;return c&&c.parentElement&&c.parentElement.hasAttribute("style")?n.style.display="":n.style.display="none",void(t.style.display="none")}o.style.display="none",n.style.display="none",t.style.display="",e.textareaPopper&&e.textareaPopper.destroy&&(e.textareaPopper.destroy(),e.textareaPopper=null);var i=a.anchorNode.parentElement;e.toolbarPopper=Object(g["a"])(i,t)}))}},Q=z,W=(o("45c8"),Object(d["a"])(Q,b,h,!1,null,null,null)),X=W.exports,Y={name:"App",components:{AppHeader:f,AppContent:X}},Z=Y,ee=(o("034f"),Object(d["a"])(Z,a,c,!1,null,null,null)),te=ee.exports,oe=(o("5e20"),o("e615"));n["a"].config.productionTip=!1,n["a"].use(oe["a"]),new n["a"]({render:function(e){return e(te)}}).$mount("#app")},"5d97":function(e,t,o){"use strict";var n=o("e817"),a=o.n(n);a.a},"85ec":function(e,t,o){},"8d03":function(e,t,o){},b11d:function(e,t,o){},b772:function(e,t,o){"use strict";var n=o("3801"),a=o.n(n);a.a},bb65:function(e,t,o){"use strict";var n=o("8d03"),a=o.n(n);a.a},e817:function(e,t,o){}});
//# sourceMappingURL=app.d56ae223.js.map