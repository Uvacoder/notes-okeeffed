(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{jOOA:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/ESLint/Adding-a-new-rule.md"}});var i={_frontmatter:l},s=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(s,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"adding-a-new-lint-rule"},"Adding a new lint rule"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://astexplorer.net/"}),"AST Explorer")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://eslint.org/docs/developer-guide/working-with-rules"}),"ESLint Docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://create-react-app.dev/docs/setting-up-your-editor/#experimental-extending-the-eslint-config"}),"Extending ESLint Config")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://create-react-app.dev/docs/advanced-configuration/"}),"Advanced Config"))),Object(a.b)("h2",{id:"intro"},"Intro"),Object(a.b)("p",null,"The best way to do this is to jump onto AST Explorer and set ",Object(a.b)("inlineCode",{parentName:"p"},"babel-eslint")," for the Parser and use ",Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," for the transform."),Object(a.b)("p",null,"Add the following in:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"import AnotherPackage from 'ratchet';\nimport _ from 'lodash';\nimport LastPackage from 'last-package';\nconst _ = require('lodash');\n")),Object(a.b)("h2",{id:"the-replace-function"},"The replace function"),Object(a.b)("p",null,"With the above code, let's block Lodash from being used:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"export default function(context) {\n  return {\n    ImportDeclaration(node) {\n      if (node.source.value === 'lodash') {\n        context.report({\n          node,\n          message: 'Do not use Lodash',\n          fix: function(fixer) {\n            return fixer.replaceText(node, '');\n          },\n        });\n      }\n    },\n    CallExpression(node) {\n      if (\n        node.callee.name === 'require' &&\n        node.arguments.some(arg => arg.value === 'lodash')\n      ) {\n        context.report({\n          node,\n          message: 'Do not use Lodash',\n          fix: function(fixer) {\n            // node.parent.parent to replace the entire line\n            return fixer.replaceText(node.parent.parent, '');\n          },\n        });\n      }\n    },\n  };\n}\n")),Object(a.b)("h2",{id:"within-the-actual-rule-package"},"Within the actual rule package"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),"mkdir eslint-plugin-no-lodash\ncd eslint-plugin-no-lodash\nyarn init -y\nmkdir lib lib/rules\ntouch index.js lib/rules/no-lodash.js\n")),Object(a.b)("p",null,"Make sure ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," has the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "name": "eslint-plugin-no-lodash",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT"\n}\n')),Object(a.b)("p",null,"Inside of ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"const noLodash = require('./lib/rules/no-lodash');\n\nmodule.exports = {\n  rules: {\n    'no-lodash': noLodash,\n  },\n};\n")),Object(a.b)("p",null,"Inside of ",Object(a.b)("inlineCode",{parentName:"p"},"lib/rules/no-lodash.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"/**\n * @fileoverview Rule to disallow Lodash\n * @author Dennis O'Keeffe\n */\n\n'use strict';\n\n//------------------------------------------------------------------------------\n// Rule Definition\n//------------------------------------------------------------------------------\n\nmodule.exports = {\n  meta: {\n    type: 'suggestion',\n\n    docs: {\n      description: 'disallow Lodash',\n      category: 'Possible Errors',\n      recommended: true,\n    },\n    fixable: 'code',\n    schema: [], // no options\n  },\n  create: function(context) {\n    return {\n      ImportDeclaration(node) {\n        if (node.source.value === 'lodash') {\n          context.report({\n            node,\n            message: 'Do not use Lodash',\n            fix: function(fixer) {\n              return fixer.replaceText(node, '');\n            },\n          });\n        }\n      },\n      CallExpression(node) {\n        if (\n          node.callee.name === 'require' &&\n          node.arguments.some(arg => arg.value === 'lodash')\n        ) {\n          context.report({\n            node,\n            message: 'Do not use Lodash',\n            fix: function(fixer) {\n              // node.parent.parent to replace the entire line\n              return fixer.replaceText(node.parent.parent, '');\n            },\n          });\n        }\n      },\n    };\n  },\n};\n")),Object(a.b)("h2",{id:"adding-to-cra"},"Adding to CRA"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'When set to true, user provided ESLint configs will be used by eslint-loader. Note that any rules set to "error" will stop the application from building.')),Object(a.b)("p",null,"In a CRA app, add ",Object(a.b)("inlineCode",{parentName:"p"},".eslintrc")," and add the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "eslintConfig": {\n    "extends": "react-app",\n    "rules": {\n      "no-lodash/no-lodash": "warn"\n    },\n    "plugins": ["no-lodash"]\n  }\n}\n')),Object(a.b)("p",null,"Finally, to test the rule add ",Object(a.b)("inlineCode",{parentName:"p"},"import _ from 'lodash'")," into ",Object(a.b)("inlineCode",{parentName:"p"},"src/app.jsx"),"."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"EXTEND_ESLINT=true yarn start"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/ESLint/Adding-a-new-rule.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-es-lint-adding-a-new-rule-md-ad28d6375f9e3377345e.js.map