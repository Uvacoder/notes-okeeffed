(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{BbkA:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return c}));o("1c7q"),o("abGl"),o("gZHo"),o("Fdmb"),o("Ir+3"),o("2mQt"),o("mXGw");var n=o("/FXl"),r=o("TjRS");o("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Storybook/integrating-redux.md"}});var s={_frontmatter:i},m=r.a;function c(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,["components"]);return Object(n.b)(m,a({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("hr",null),Object(n.b)("p",null,"Author: Dennis O'Keeffe"),Object(n.b)("h2",{id:"section-storybook"},"Section: Storybook"),Object(n.b)("h1",{id:"integrating-redux-with-storybook"},"Integrating Redux with Storybook"),Object(n.b)("p",null,"Ensure that if you wish to use the same ",Object(n.b)("inlineCode",{parentName:"p"},"store")," variable as within the app that you export it as a constant from the appropriate file. See ",Object(n.b)("inlineCode",{parentName:"p"},"import { store } from 'src/App';")," below."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\n// Basic addons\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\n// README addons\nimport { withReadme, withDocs } from 'storybook-readme';\nimport PageFormTestReadme from './README.md';\nimport PageFormTestDocs from './DOCS.md';\n\n// Knob addons\nimport { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';\n\n// Backgrounds\nimport backgrounds from '@storybook/addon-backgrounds';\nimport PageFormTest from './index.js';\n\nimport { store } from 'src/App';\nimport { Provider } from 'react-redux';\n\nconst story = () =>\n    storiesOf('Page Form Test')\n        // This is the main decorator to take note of\n        .addDecorator((story) => <Provider store={store}>{story()}</Provider>)\n        .addDecorator(withReadme(PageFormTestReadme))\n        .addDecorator(withKnobs)\n        .addDecorator(\n            backgrounds([\n                { name: 'white', value: '#ffffff', default: true },\n                { name: 'twitter', value: '#00aced' },\n                { name: 'facebook', value: '#3b5998' }\n            ])\n        )\n        .add('Default', () => {\n            return <PageFormTest store={store} />;\n        })\n        .add(\n            'Docs',\n            withDocs(PageFormTestDocs, () => {\n                return (\n                    <WithComments el={'PageFormTest'}>\n                        <PageFormTest />\n                    </WithComments>\n                );\n            })\n        );\n\nexport default story;\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Storybook/integrating-redux.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-storybook-integrating-redux-md-6252722f653707e68b5e.js.map