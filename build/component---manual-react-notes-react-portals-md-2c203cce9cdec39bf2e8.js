(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{dZMd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-Portals.md"}});var l={_frontmatter:c},i=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"react-portals"},"React Portals"),Object(n.b)("h2",{id:"why-portals"},"Why Portals?"),Object(n.b)("p",null,"A great use case for portals is for use with things like React modals. Anything that uses a stack context can obscure the css position for something like a modal."),Object(n.b)("p",null,"The tl;dr is to make a React component a descendent of a HTML element other than ",Object(n.b)("inlineCode",{parentName:"p"},'id="root"'),";"),Object(n.b)("h2",{id:"creating-a-portal"},"Creating a Portal"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst Modal = (props) => {\n  return ReactDOM.createPortal(\n    <div className=\"modal\">\n      <div className=\"modal-body\" />\n    </div>,\n    document.querySelector('#modal')\n  );\n};\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Portals.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-portals-md-2c203cce9cdec39bf2e8.js.map