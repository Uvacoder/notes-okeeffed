(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{ZdNy:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Express/Rate-Limiting.md"}});var c={_frontmatter:s},o=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(o,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"rate-limiting"},"Rate Limiting"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/nfriedly/express-rate-limit"}),"Express Rate Limit")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.npmjs.com/package/rate-limit-redis"}),"Rate limit Redis")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/NodeRedis/node-redis"}),"Node Redis docs"))),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\nconst port = 8080;\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n});\napp.use(limiter);\n\napp.get('/', (_, res) => res.send('RESPONSE_SUCCESS'));\n\napp.listen(port, () => console.log('Server started'));\n")),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"index.test.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const execa = require('execa');\n\ndescribe('rate limiter server', () => {\n  test('expects GET / to return \"Success\"', async () => {\n    const { stdout } = await execa('ab', [\n      '-n',\n      '200',\n      '-v',\n      '3',\n      'http://localhost:8080/',\n    ]);\n    const matches = stdout.match(/RESPONSE_SUCCESS/g);\n    expect(matches.length).toEqual(100);\n  });\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Express/Rate-Limiting.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-express-rate-limiting-md-0afa6739cdff0d9b2e05.js.map