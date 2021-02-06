(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{ufaV:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Programming-Languages/Code-Transformation-and-Linting-with-ASTs.md"}});var i={_frontmatter:s},l=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(l,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"code-transformation-and-lintings-with-asts"},"Code Transformation and Lintings with ASTs"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://frontendmasters.com/courses/linting-asts/"}),"FE Masters Course")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/kentcdodds/asts-workshop"}),"Workshop Git Repo")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://slides.com/kentcdodds/asts-workshop#/"}),"Workshop Slides")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://openbase.io/js/babel-plugin-module-resolver"}),"Module Resolver")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://astexplorer.net/#/gist/fc5316331bd7d36af6ce9b23c5e5d861/latest"}),"AST Explorer in JS")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://resources.jointjs.com/demos/rappid/apps/Ast/index.html"}),"JS AST Visualizers")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://eslint.org/docs/developer-guide/working-with-rules#the-context-object"}),"ESLint Context Object")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-types"}),"Babel plugins")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/codemod-js/codemod"}),"Babel codemod"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This chat is about Abstract Syntax Trees and why that is important."),Object(o.b)("p",null,"If you want to follow the workshop, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),'git clone https://github.com/kentcdodds/asts-workshop.git\ncd asts-workshop\nyarn run setup --silent\nnode scripts/autofill-feedback-email.js YOUR_EMAIL@DOMAIN.COM\ngit commit -am "ready to go"\n')),Object(o.b)("h2",{id:"examples-of-asts"},"Examples of ASTs"),Object(o.b)("p",null,"Babel enhances the dev experience AND user experience by enables syntax to transform to something useful. An example is the module resolver babel transformer."),Object(o.b)("p",null,"ESLint is a linter for JS, and can be very plugable. The example he shows is ",Object(o.b)("inlineCode",{parentName:"p"},"eslint-plugin-import")," that ensures that paths resolve during imports."),Object(o.b)("p",null,"Codemods are better than find/replace. You can use them for things that transfer from things like one test framework to another etc."),Object(o.b)("h2",{id:"asts"},"ASTs"),Object(o.b)("p",null,"ASTs for JavaScript are basically just one big JS object. The resources given for the explorer and visualizer are great tools to understand how ASTs work."),Object(o.b)("p",null,"For JavaScript, the course will use ",Object(o.b)("inlineCode",{parentName:"p"},"espree"),"."),Object(o.b)("h3",{id:"eslint"},"ESLint"),Object(o.b)("p",null,"This is great for style issues but also logical issues."),Object(o.b)("p",null,"The example we are doing in the ",Object(o.b)("inlineCode",{parentName:"p"},"astexplorer")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"babel-eslint")," with a Transformation turned on."),Object(o.b)("p",null,"The example here is to ensure all if statements have a block."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// invalid\nif (something > 3) console.log('something is greather than three');\n\n// valid\nif (something > 3) {\n  console.log('something is greather than three');\n}\n")),Object(o.b)("p",null,"ESLint uses the Visitor pattern. This pattern makes it easier for you to traverse your AST."),Object(o.b)("p",null,'Without the Visitor pattern, you need to know every Node type and there is a lot of complexity. Visitor allows us to say "we only care about this Node type". With the visitor pattern, we only need to specific the node type that we care about. In this case, it will be ',Object(o.b)("inlineCode",{parentName:"p"},"IfStatement"),"."),Object(o.b)("p",null,"As for the ESLint function, we end up with this."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  meta: {\n    docs: {\n      descripton: 'disallow IfStatements without blocks',\n      category: 'Stylistic Issues',\n      recommended: true,\n    },\n    fixable: 'code',\n    schema: [], // no options\n  },\n  create(context) {\n    return {\n      // visitor\n      IfStatement(node) {\n        console.log(node);\n      },\n    };\n  },\n};\n")),Object(o.b)("p",null,"With the above code, we will log out the two Nodes for the two if statements in our code block we are testing."),Object(o.b)("p",null,"For our example, we can see the ",Object(o.b)("inlineCode",{parentName:"p"},"consequent")," are different. One is a ",Object(o.b)("inlineCode",{parentName:"p"},"BlockStatement"),", the other is a ",Object(o.b)("inlineCode",{parentName:"p"},"BinaryExpression"),"."),Object(o.b)("p",null,"To ensure we have the block statement, we can update our code for the following:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  meta: {\n    docs: {\n      descripton: 'disallow IfStatements without blocks',\n      category: 'Stylistic Issues',\n      recommended: true,\n    },\n    fixable: 'code',\n    schema: [], // no options\n  },\n  create(context) {\n    return {\n      // visitor\n      IfStatement(node) {\n        if (node.consequent.type === 'BlockStatement') {\n          return;\n        }\n        context.report({\n          node: node,\n          message: 'y u no block',\n        });\n      },\n    };\n  },\n};\n")),Object(o.b)("p",null,"Running this is the AST Explorer will show us the problem! If we want it to be covering ",Object(o.b)("inlineCode",{parentName:"p"},"else")," statements as well, we need to update the ",Object(o.b)("inlineCode",{parentName:"p"},"consequent")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"alternate"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The context is the ESLint API. See ",Object(o.b)("a",r({parentName:"p"},{href:"https://eslint.org/docs/developer-guide/working-with-rules#the-context-object"}),"ESLint docs")," for more info.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  meta: {\n    docs: {\n      descripton: 'disallow IfStatements without blocks',\n      category: 'Stylistic Issues',\n      recommended: true,\n    },\n    fixable: 'code',\n    schema: [], // no options\n  },\n  create(context) {\n    return {\n      // visitor\n      IfStatement(node) {\n        if (isBlock(node.consequent) && isBlock(node.alternate)) {\n          return;\n        }\n\n        if (!isBlock(consequent)) {\n          context.report({\n            node: node,\n            message: 'y u no block',\n          });\n        } else (!isBlock(alternate)) {\n          context.report({\n            node: node,\n            message: 'y u no block',\n          });\n        }\n      },\n    };\n  },\n};\n\nfunction isBlock(node) {\n  if !node || node.block === 'BlockStatement'\n}\n")),Object(o.b)("h2",{id:"making-a-plugin"},"Making a plugin"),Object(o.b)("p",null,"With the provided code, you can write test code using ",Object(o.b)("inlineCode",{parentName:"p"},"RuleTester")," from ",Object(o.b)("inlineCode",{parentName:"p"},"eslint"),"."),Object(o.b)("p",null,"An example:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const { RuleTester } = require('eslint');\nconst rule = require('./01_eslint');\n\nconst ruleTester = new RuleTester();\nruleTester.run('no-console', rule, {\n  valid: ['foo.console()', 'console()', 'info()'],\n  invalid: [\n    {\n      code: `console.log()`,\n      errors: [\n        {\n          message: 'Using console is not allowed',\n          type: 'MemberExpression',\n        },\n      ],\n    },\n  ],\n});\n")),Object(o.b)("p",null,"The code to make this pass:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  meta: {\n    docs: {\n      description: 'Disallow use of console',\n      category: 'Best Practices',\n      recommended: true,\n    },\n  },\n  create(context) {\n    return {\n      MemberExpression(node) {\n        if (node.object.name === 'console') {\n          context.report({\n            node,\n            message: 'Using console is not allowed',\n          });\n        }\n      },\n    };\n  },\n};\n")),Object(o.b)("p",null,"[TODO - add the other challenges + solutions]"),Object(o.b)("h2",{id:"babel-plugin-and-ast"},"Babel Plugin and AST"),Object(o.b)("p",null,"Again from the AST explorer, we are using the parser ",Object(o.b)("inlineCode",{parentName:"p"},"babylon6")," and transformer ",Object(o.b)("inlineCode",{parentName:"p"},"babelv6"),"."),Object(o.b)("p",null,"Babel plugins will be transformed by Babel, so you can use whatever the babelrc is configured with. For babel, we export a function that is called with a utility library."),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-types"}),"Here is a list")," of the ",Object(o.b)("inlineCode",{parentName:"p"},"types")," that Babel has. It can really useful for Babel plugins."),Object(o.b)("p",null,"The below code can be logged just to understand more about the ",Object(o.b)("inlineCode",{parentName:"p"},"RegExpLiteral")," path that we will be using to parse our code and hoist the RegExpLiteral."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// base code\ngetVersion('3.4.5');\n\nfunction getVersion(versionString) {\n  const versionRegex = /(\\d+)\\.(\\d+)\\.(\\d+)/;\n  const [, major, minor, patch] = versionRegex.exec(versionString);\n  return { major, minor, patch };\n}\n\n// babel plugin code\nexport default function(babel) {\n  const { types: t } = babel;\n\n  return {\n    name: 'regexHoister', // not required\n    visitor: {\n      // visitor\n      RegExpLiteral(path) {\n        const newIdentifier = path.scope.generateUidIdentifier();\n        // we'll see a new Node from this\n        console.log(newIdentifier);\n      },\n    },\n  };\n}\n")),Object(o.b)("p",null,"What we want to do is find any ",Object(o.b)("inlineCode",{parentName:"p"},"RegExpLiteral")," and hoist it. Luckily for us, Babel ",Object(o.b)("inlineCode",{parentName:"p"},"types")," allow us to create new nodes. The code will end up like the following:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// babel function\nexport default function(babel) {\n  const { types: t } = babel;\n\n  return {\n    name: 'regexHoister', // not required\n    visitor: {\n      // visitor\n      RegExpLiteral(path) {\n        console.log(path.parent.id.name); // the name of the variable from the tree want versionRegex\n        // arg can help name generated ID.\n        // Babel also understands scope of entire file to ensure no clashes.\n        const newIdentifier = path.scope.generateUidIdentifier(\n          path.parent.id.name,\n        );\n        // we'll see a new Node from this\n        console.log(newIdentifier);\n        const variableDeclaration = t.variableDeclaration('const', [\n          t.variableDeclarator(newIdentifier, path.node),\n        ]);\n        path.scope.rename;\n        console.log(variableDeclaration);\n        const program = path.findParent(t.isProgram);\n        // if you want to see the program itself!\n        console.log(program.node.body);\n        program.node.body.unshift(variableDeclaration);\n        path.parentPath.remove();\n      },\n    },\n  };\n}\n\n// takes this...\ngetVersion('3.4.5');\n\nfunction getVersion(versionString) {\n  const versionRegex = /(\\d+)\\.(\\d+)\\.(\\d+)/;\n  const [, major, minor, patch] = versionRegex.exec(versionString);\n  return { major, minor, patch };\n}\n\n// and transforms it to this...\nconst _versionRegex = /(\\d+)\\.(\\d+)\\.(\\d+)/;\ngetVersion('3.4.5');\n\nfunction getVersion(versionString) {\n  const [, major, minor, patch] = versionRegex.exec(versionString);\n  return { major, minor, patch };\n}\n")),Object(o.b)("h3",{id:"example-on-testing-for-an-eslint-plugin"},"Example on testing for an ESLint plugin"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// the plugin\nexport default devPlugin;\n\nfunction devPlugin({ types: t }) {\n  return {\n    name: 'line-plugin',\n    visitor: {\n      Identifier(path) {\n        const {\n          node: { name },\n        } = path;\n        if (name === '__DEV__') {\n          path.replaceWith(\n            t.booleanLiteral(process.env.NODE_ENV === 'development'),\n          );\n        }\n      },\n    },\n  };\n}\n\n// the tests\nimport { stripIndent } from 'common-tags';\nimport * as babel from 'babel-core';\nimport devPlugin from './05_babel';\n\nconst env = process.env.NODE_ENV;\n\nafterEach(() => {\n  process.env.NODE_ENV = env;\n});\n\ntest('transpiles __DEV__ to false', () => {\n  process.env.NODE_ENV = 'production';\n  const source = stripIndent`\n    if (__DEV__) {\n      console.log('You are in dev mode!')\n    }\n  `;\n  const { code } = babel.transform(source, {\n    babelrc: false,\n    plugins: [devPlugin],\n  });\n  expect(code).not.toContain('__DEV__');\n  expect(code).toMatchSnapshot();\n});\n\ntest('transpiles __DEV__ to true', () => {\n  process.env.NODE_ENV = 'development';\n  const source = stripIndent`\n    if (__DEV__) {\n      console.log('You are in dev mode!')\n    }\n  `;\n  const { code } = babel.transform(source, {\n    babelrc: false,\n    plugins: [devPlugin],\n  });\n  expect(code).not.toContain('__DEV__');\n  expect(code).toMatchSnapshot();\n});\n")),Object(o.b)("h2",{id:"codemods"},"Codemods"),Object(o.b)("p",null,"The example of an API is when you change everything from callbacks to promises. It is an easy way to make this modification completely feasible."),Object(o.b)("p",null,"For this, the parser we will use is ",Object(o.b)("inlineCode",{parentName:"p"},"recast")," and ",Object(o.b)("inlineCode",{parentName:"p"},"jscodeshift")," is the transformer."),Object(o.b)("p",null,"The base code that you get for the ",Object(o.b)("inlineCode",{parentName:"p"},"jscodeshift"),". This transformer does not use the Visitor pattern. It is possible to use Babel, and there is a CLI tool that can use a babel transform that you can see on GitHub ",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/codemod-js/codemod"}),"here"),"."),Object(o.b)("p",null,"Codemods are designed to change the source code it uses as input."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// Press ctrl+space for code completion\nexport default function transformer(file, api) {\n  const j = api.jscodeshift;\n\n  return j(file.source)\n    .find(j.Identifier)\n    .forEach(path => {\n      j(path).replaceWith(\n        j.identifier(\n          path.node.name\n            .split('')\n            .reverse()\n            .join(''),\n        ),\n      );\n    })\n    .toSource();\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Programming-Languages/Code-Transformation-and-Linting-with-ASTs.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-programming-languages-code-transformation-and-linting-with-as-ts-md-5fca4e9128b29946cea3.js.map