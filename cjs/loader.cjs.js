'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-25d17ad3.js');

/*
 Stencil Client Patch Esm v2.5.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["z-body.cjs",[[1,"z-body",{"level":[2],"variant":[1],"component":[1]}]]],["z-heading.cjs",[[1,"z-heading",{"level":[2],"variant":[1],"component":[1]}]]],["z-modal.cjs",[[1,"z-modal",{"modalid":[1],"modaltitle":[1],"modalsubtitle":[1]}]]],["z-app-header.cjs",[[1,"z-app-header"]]],["z-storia-button.cjs",[[1,"z-storia-button",{"variant":[1]}]]],["z-typography.cjs",[[1,"z-typography",{"component":[1],"variant":[1],"level":[1]}]]],["z-button_39.cjs",[[1,"z-combobox",{"inputid":[1],"items":[1],"label":[1],"hassearch":[4],"searchlabel":[1],"searchplaceholder":[1],"searchtitle":[1],"noresultslabel":[1],"isopen":[1028],"isfixed":[4],"closesearchtext":[1],"hascheckall":[4],"checkalltext":[1],"uncheckalltext":[1],"maxcheckableitems":[2],"searchValue":[32],"selectedCounter":[32],"renderItemsList":[32]},[[0,"inputCheck","inputCheckListener"]]],[1,"z-header",{"intlinkdata":[1],"extlinkdata":[1],"userdata":[1],"ismyz":[4],"logolink":[1],"imagealt":[1],"activeintlinkid":[1],"activesublinkid":[1],"hideloginbutton":[4],"activeMenuItem":[32],"currentMenuItem":[32],"isMobile":[32],"isMenuMobileOpen":[32]},[[9,"resize","handleResize"],[2,"zListItemLinkClick","handleZListItemLinkClick"],[2,"zListItemClick","handleZListItemClick"]]],[1,"z-footer",{"data":[1],"copyrightuser":[1]}],[1,"z-cookiebar",{"cookiepolicyurl":[1],"hide":[4],"callback":[16]}],[1,"z-pagination-bar",{"pages":[2],"visiblepages":[2],"currentpage":[1026],"startpage":[1026],"historyraw":[1],"listhistoryrow":[1040],"currentPages":[32]}],[1,"z-panel-elem",{"elemid":[1],"imgurl":[1],"imgalt":[1],"linkicon":[1],"linklabel":[1],"url":[1],"target":[1],"isdisabled":[4],"descr_slot_name":[1]}],[1,"z-button-sort",{"buttonid":[1],"label":[1],"desclabel":[1],"counter":[2],"sortlabelasc":[1],"sortlabeldesc":[1],"isselected":[1028],"sortasc":[1028]}],[1,"z-card-alert",{"iconname":[1],"contenttext":[1],"actiontext":[1],"type":[1]}],[1,"z-card-icon",{"icon":[1],"isdisabled":[4]}],[1,"z-icon-package"],[1,"z-info-box",{"boxid":[1],"isclosable":[4]}],[1,"z-toggle-button",{"label":[1],"isdisabled":[4],"avoidclick":[4],"isOpen":[32]}],[1,"z-card",{"faded":[4],"cardtype":[1],"ispressed":[4],"ishighlighted":[4]}],[1,"z-card-body"],[1,"z-card-cover",{"img":[1],"titolo":[1],"faded":[4],"defaultimg":[1]}],[1,"z-card-footer",{"titolo":[1],"autori":[1],"isbn":[1],"faded":[4],"cardtype":[1],"isOpen":[32],"allowTooltipAuthors":[32]},[[0,"toggleClick","handleToggle"]]],[1,"z-card-header",{"titolo":[1],"faded":[4],"cardtype":[1],"allowTooltip":[32]}],[1,"z-card-list",{"listdata":[1]}],[1,"z-chip",{"regulartext":[1],"boldtext":[2]}],[1,"z-stepper"],[1,"z-stepper-item",{"index":[2],"href":[1],"pressed":[4],"disabled":[4]}],[1,"z-tooltip",{"content":[1],"type":[1]}],[1,"z-list",{"inputrawdata":[1025],"list":[1040]}],[1,"z-menu-dropdown",{"nomeutente":[1],"menucontent":[1],"buttonid":[1],"ismenuopen":[32]}],[1,"z-footer-section",{"name":[1],"isOpen":[32]}],[1,"z-candybar"],[1,"z-footer-link",{"href":[1]}],[1,"z-footer-social",{"icon":[1],"href":[1],"description":[1]}],[1,"z-pagination-page",{"pageid":[1],"value":[2],"isselected":[4],"isdisabled":[4],"isvisited":[4]}],[1,"z-button",{"htmlid":[1],"name":[1],"disabled":[4],"type":[1],"variant":[1],"issmall":[4],"icon":[1]}],[1,"z-logo",{"width":[2],"height":[2],"imagealt":[1],"link":[1],"targetblank":[4]}],[1,"z-input",{"htmlid":[1],"type":[1],"name":[1],"label":[1],"value":[1025],"disabled":[4],"readonly":[4],"required":[4],"checked":[1028],"placeholder":[1],"htmltitle":[1],"status":[1],"hasmessage":[4],"message":[1],"labelafter":[4],"typingtimeout":[2],"items":[1],"autocomplete":[4],"multiple":[4],"hasclearicon":[4],"icon":[1],"isTyping":[32],"textareaWrapperHover":[32],"textareaWrapperFocus":[32],"passwordHidden":[32],"getValue":[64],"setValue":[64],"isChecked":[64]},[[4,"inputCheck","inputCheckListener"]]],[1,"z-select",{"htmlid":[1],"items":[1],"name":[1],"label":[1],"disabled":[4],"readonly":[4],"placeholder":[1],"htmltitle":[1],"status":[1],"hasmessage":[4],"message":[1],"autocomplete":[4],"multiple":[4],"noresultslabel":[1],"isOpen":[32],"selectedItems":[32],"searchString":[32],"getSelectedItems":[64],"getValue":[64],"setValue":[64]}],[1,"z-button-filter",{"filtername":[1],"isfixed":[4],"hasicon":[4],"filterid":[1],"issmall":[4]}],[1,"z-input-message",{"message":[1],"status":[1]}],[1,"z-link",{"htmlid":[1],"href":[1],"target":[1],"htmltabindex":[2],"isdisabled":[4],"isactive":[4],"iswhite":[4],"icon":[1]}],[1,"z-list-item",{"text":[1],"link":[1],"linktarget":[1],"icon":[1],"listitemid":[1],"action":[1],"underlined":[4]}],[1,"z-input-label",{"value":[1],"disabled":[4]}],[1,"z-icon",{"name":[1],"height":[2],"width":[2],"iconid":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
