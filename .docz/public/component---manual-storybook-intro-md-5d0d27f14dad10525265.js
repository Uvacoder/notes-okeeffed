(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{"3OJt":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return s}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var n=o("/FXl"),r=o("TjRS");o("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Storybook/intro.md"}});var b={_frontmatter:i},c=r.a;function s(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(n.b)(c,a({},b,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("hr",null),Object(n.b)("p",null,"Author: Dennis O'Keeffe"),Object(n.b)("h2",{id:"section-storybook"},"Section: Storybook"),Object(n.b)("h1",{id:"storybook-intro"},"Storybook Intro"),Object(n.b)("h2",{id:"intro"},"Intro"),Object(n.b)("p",null,"Storybook can be used to add documentation, READMEs and explore components."),Object(n.b)("p",null,"This section will give examples on how to add docs, how to add knobs and how to integrate Redux components that require a store."),Object(n.b)("h2",{id:"basics"},"Basics"),Object(n.b)("p",null,"Below is a basic example of creating a React component story for Storybook. More complex examples are in the following sections. Best practise for a component is to add ",Object(n.b)("inlineCode",{parentName:"p"},"[componentName].storybook.js")," to the component folder."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nconst Component = () => <h1>Hello world!</h1>;\n\nconst story = () =>\n    storiesOf('Using Storybook').add('Intro Component', <Component />);\n\nexport default story;\n")),Object(n.b)("h2",{id:"importing-it-into-the-storybook"},"Importing it into the storybook"),Object(n.b)("p",null,"Head to ",Object(n.b)("inlineCode",{parentName:"p"},"/stories/index.js")," and import the file. An example below."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{}),"import Storybook from 'path/to/[componentName].storybook.js';\nStorybook();\n")),Object(n.b)("h2",{id:"styles"},"Styles"),Object(n.b)("p",null,"Note: If projects overwrite basics like typography etc, it will override the base Storybook styling as well."))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/intro.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-storybook-intro-md-5d0d27f14dad10525265.js.map