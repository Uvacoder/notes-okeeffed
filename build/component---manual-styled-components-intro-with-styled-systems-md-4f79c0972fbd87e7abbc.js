(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{"5MGG":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Styled-Components/Intro-With-Styled-Systems.md"}});var l={_frontmatter:s},i=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"intro-with-styled-systems"},"Intro With Styled Systems"),Object(o.b)("p",null,"This intro is based with React."),Object(o.b)("h2",{id:"quickstart-with-typescript"},"Quickstart with TypeScript"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-shell"}),"yarn add styled-system styled-components\nyarn add --dev @types/styled-system @types/styled-components\n")),Object(o.b)("h2",{id:"typescript-setup"},"TypeScript Setup"),Object(o.b)("p",null,"With the above installed, you have one extra step to accomplish: adding ",Object(o.b)("inlineCode",{parentName:"p"},"styled.d.ts")," declartion to defined the theme and creating a theme file."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"// styled.d.ts\n// import original module declarations\nimport 'styled-components';\n\n// and extend them!\ndeclare module 'styled-components' {\n  export interface DefaultTheme {\n    borderRadius: string;\n\n    colors: {\n      main: string;\n      secondary: string;\n    };\n  }\n}\n\n// my-theme.ts\nimport { DefaultTheme } from 'styled-components';\n\nconst myTheme: DefaultTheme = {\n  borderRadius: '5px',\n\n  colors: {\n    main: 'cyan',\n    secondary: 'magenta',\n  },\n};\n\nexport { myTheme };\n")),Object(o.b)("h2",{id:"create-components"},"Create Components"),Object(o.b)("p",null,"Create a simple Box component:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-typescript"}),"import styled from 'styled-components';\nimport { color } from 'styled-system';\n\nconst Box = styled.div`\n  ${color}\n`;\n\nexport default Box;\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Styled-Components/Intro-With-Styled-Systems.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-styled-components-intro-with-styled-systems-md-4f79c0972fbd87e7abbc.js.map