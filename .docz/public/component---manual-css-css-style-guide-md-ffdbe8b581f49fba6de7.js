(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"VM/A":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/CSS-Style-Guide.md"}});var c={_frontmatter:a},l=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(l,i({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"css-style-guide"},"CSS Style Guide"),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("a",{href:"#ordering"},"Ordering"),Object(r.b)("a",{href:"#structure"},"Structure"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"css-ordering"},"CSS Ordering"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-css"}),".selector {\n  /* Positioning */\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  right: 0;\n\n  /* Display & Box Model */\n  display: inline-block;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  padding: 10px;\n  border: 10px solid #333;\n  margin: 10px;\n\n  /* Color */\n  background: #000;\n  color: #fff\n  \n  /* Text */\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: right;\n\n  /* Other */\n  cursor: pointer;\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"css-structure"},"CSS Structure"),Object(r.b)("h2",{id:"one-component-per-file"},"One Component per file"),Object(r.b)("p",null,"For each component, place them in their own file."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-css"}),"/* css/components/search-form.scss */\n.search-form {\n  > .button { /* ... */ }\n  > .field { /* ... */ }\n  > .label { /* ... */ }\n\n  // variants\n  &.-small { /* ... */ }\n  &.-wide { /* ... */ }\n}\n")),Object(r.b)("h2",{id:"nesting"},"Nesting"),Object(r.b)("p",null,"Use no more than 1 level of nesting. It's easy to get lost with too much nesting."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),"/* ✗ Avoid: 3 levels of nesting */\n.image-frame {\n  > .description {\n    /* ... */\n\n    > .icon {\n      /* ... */\n    }\n  }\n}\n\n/* ✓ Better: 2 levels */\n.image-frame {\n  > .description { /* ... */ }\n  > .description > .icon { /* ... */ }\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/CSS-Style-Guide.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-css-style-guide-md-ffdbe8b581f49fba6de7.js.map