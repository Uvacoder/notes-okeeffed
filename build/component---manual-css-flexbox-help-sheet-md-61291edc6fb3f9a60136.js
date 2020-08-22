(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{XDAD:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/Flexbox-Help-Sheet.md"}});var o={_frontmatter:i},c=a.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(c,l({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"flexbox-help-sheet"},"Flexbox Help Sheet"),Object(r.b)("p",null,"Sources:"),Object(r.b)("p",null,Object(r.b)("a",l({parentName:"p"},{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"CSS Tricks")),Object(r.b)("h2",{id:"terminology"},"Terminology"),Object(r.b)("h4",{id:"flex-container-parent"},"Flex Container (parent)"),Object(r.b)("p",null,"Properties of the parent:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-css"}),".container {\n  display: flex; /* or inline-flex */\n  flex-direction: row | row-reverse | column | column-reverse;\n  flex-wrap: nowrap | wrap | wrap-reverse;\n  flex-flow: <‘flex-direction’> || <‘flex-wrap’>; //shorthand code\n  justify-content: flex-start | flex-end | center | space-between | space-around;\n  align-items: flex-start | flex-end | center | baseline | stretch;\n  align-content: flex-start | flex-end | center | space-between | space-around | stretch;\n}\n")),Object(r.b)("h4",{id:"flex-items-child"},"Flex Items (child)"),Object(r.b)("p",null,"Properties of the child:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-css"}),".item {\n    order: <integer>;\n    flex-grow: <number>; /* default 0 */\n    flex-shrink: <number>; /* default 1 */\n    flex-basis: <length> | auto; /* default auto */\n    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];\n    align-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-css"}),".parent {\n  display: flex;\n  height: 300px; /* Or whatever */\n}\n\n.child {\n  width: 100px;  /* Or whatever */\n  height: 100px; /* Or whatever */\n  margin: auto;  /* Magic! */\n}\n\n.flex-container {\n  /* We first create a flex layout context */\n  display: flex;\n\n  /* Then we define the flow direction and if we allow the items to wrap\n   * Remember this is the same as:\n   * flex-direction: row;\n   * flex-wrap: wrap;\n   */\n  flex-flow: row wrap;\n\n  /* Then we define how is distributed the remaining space */\n  justify-content: space-around;\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/Flexbox-Help-Sheet.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-flexbox-help-sheet-md-61291edc6fb3f9a60136.js.map