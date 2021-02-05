(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{OVNB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/GitHub/NPM-Packages.md"}});var i={_frontmatter:r},c=o.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hosting-npm-packages-on-github"},"Hosting NPM packages on GitHub"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/Codertocat/hello-world-npm"}),"Example repo")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://docs.github.com/en/packages/publishing-and-managing-packages/about-github-packages"}),"About GitHub Packages"))),Object(a.b)("h2",{id:"create-an-access-token-on-github"},"Create an Access Token on GitHub"),Object(a.b)("p",null,"On GitHub, head to ",Object(a.b)("inlineCode",{parentName:"p"},"Settings > Developer > Personal Access Tokens")," and create a new one with:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Repo access"),Object(a.b)("li",{parentName:"ol"},"Read package access"),Object(a.b)("li",{parentName:"ol"},"Write package access"),Object(a.b)("li",{parentName:"ol"},"Delete package access (optional)")),Object(a.b)("p",null,"Copy the token and add it to ",Object(a.b)("inlineCode",{parentName:"p"},"~/.npmrc")," with the value ",Object(a.b)("inlineCode",{parentName:"p"},"//npm.pkg.github.com/:_authToken=add-token-here"),"."),Object(a.b)("p",null,"Now log into the registry:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-s"}),"$ npm login --registry=https://npm.pkg.github.com\n> Username: YOU_GITHUB_USERNAME\n> Password: YOUR_GITHUB_TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")),Object(a.b)("h2",{id:"publishing-the-first-package"},"Publishing the first package"),Object(a.b)("p",null,"Head to the ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/Codertocat/hello-world-npm"}),"hello-world-npm repo")," and fork it into your own GitHub account."),Object(a.b)("p",null,"Once forked, let's clone it into your local. That should be ",Object(a.b)("inlineCode",{parentName:"p"},"git clone https://github.com/your-username/hello-world-npm.git"),"."),Object(a.b)("p",null,"Change into that directory and open it up into an editor. We want to make some changes to ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "name": "@your-username/hello-world-npm",\n  "version": "1.0.2",\n  "description": "A simple npm package to demonstrate GitHub Package Registry",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/your-username/hello-world-npm.git"\n  },\n  "author": "Your name",\n  "license": "ISC",\n  "bugs": {\n    "url": "https://github.com/your-username/hello-world-npm/issues"\n  },\n  "homepage": "https://github.com/your-username/hello-world-npm#readme",\n  "publishConfig": {\n    "registry": "https://npm.pkg.github.com/"\n  }\n}\n')),Object(a.b)("p",null,"Save and let's commit this and push back up."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-s"}),'git add package.json\ngit commit -m "feat: Updating package details"\ngit push\n')),Object(a.b)("p",null,"Finally, let's publish the package!"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-s"}),"npm publish\n")),Object(a.b)("p",null,"Bingo! We should be ready to roll."),Object(a.b)("h2",{id:"installing-the-package"},"Installing the package"),Object(a.b)("p",null,"Let's start a new Nodejs project."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-s"}),"mkdir hello-first-pkg\ncd hello-first-pkg\n# init with basic details\nyarn init -y\ntouch index.js .npmrc\n")),Object(a.b)("p",null,"We need to add ",Object(a.b)("inlineCode",{parentName:"p"},"@your-username:registry=https://npm.pkg.github.com")," to the ",Object(a.b)("inlineCode",{parentName:"p"},".npmrc")," file to tell it to look for your packages."),Object(a.b)("p",null,"Then run ",Object(a.b)("inlineCode",{parentName:"p"},"nnpm i @your-username/hello-world-npm"),"."),Object(a.b)("p",null,"This should successfully install. Once happy, let's test it out! Add the following inside ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const myPackage = require('@your-username/hello-world-npm');\nmyPackage.helloWorld();\n")),Object(a.b)("p",null,"We are now all set to try it out! Run ",Object(a.b)("inlineCode",{parentName:"p"},"node index.js")," and we'll get our glorious response!"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-s"}),"> node index.js\nHello World!\n")),Object(a.b)("p",null,"The important part from all of this is to ensure that you have correctly configured ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," for your NPM packages."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/GitHub/NPM-Packages.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-git-hub-npm-packages-md-373df819c74ccd95fd40.js.map