(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{Y1bC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return m}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Git/Removing-Files-From-Repo-History.md"}});var c={_frontmatter:a},l=i.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(r.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"removing-files-from-repo-history"},"Removing Files From Repo History"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",o({parentName:"li"},{href:"https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository"}),"GitHub Docs"))),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),'git filter-branch --force --index-filter \\\n  "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \\\n  --prune-empty --tag-name-filter cat -- --all\ngit push origin --force --all\n')))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Git/Removing-Files-From-Repo-History.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-git-removing-files-from-repo-history-md-a2093c6e6d946e34923d.js.map