(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{Tgbs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Factory-Pattern.md"}});var c={_frontmatter:a},i=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,s({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"factory-pattern"},"Factory Pattern"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// Factory Pattern\n// first, create our products\ninterface Customer {\n    addPoints(): void;\n    addDiscount(): void;\n}\n\ninterface IGoldCustomer extends Customer {\n    goldOperation(): void;\n}\n\nclass GoldCustomer implements IGoldCustomer {\n    addPoints() {\n        console.log('Gold Customer - Points Added');\n    }\n\n    addDiscount() {\n        console.log('Gold Customer - Discount Added');\n    }\n\n    goldOperation() {\n        console.log('Specific Gold Customer operation');\n    }\n}\n\ninterface ISilverCustomer extends Customer {\n    silverOperation(): void;\n}\n\nclass SilverCustomer implements ISilverCustomer {\n    addPoints() {\n        console.log('Gold Customer - Points Added');\n    }\n\n    addDiscount() {\n        console.log('Gold Customer - Discount Added');\n    }\n\n    silverOperation() {\n        console.log('Specific Silver Customer operation');\n    }\n}\n\n// build a simple factory\n// ensure we use a generic for typing our createCustomer method correctly\nabstract class CustomerFactory<T extends Customer> {\n    getCustomer() {\n        const customer = this.createCustomer();\n        customer.addPoints();\n        customer.addDiscount();\n        return customer;\n    }\n\n    abstract createCustomer(): T;\n}\n\nclass GoldCustomerFactory extends CustomerFactory<IGoldCustomer> {\n    createCustomer(): GoldCustomer {\n        return new GoldCustomer();\n    }\n}\n\nclass SilverCustomerFactory extends CustomerFactory<ISilverCustomer> {\n    createCustomer(): SilverCustomer {\n        return new SilverCustomer();\n    }\n}\n\n// code in action\nconst goldCustomerFactory: GoldCustomerFactory = new GoldCustomerFactory();\nconst goldCustomer = goldCustomerFactory.getCustomer();\ngoldCustomer.goldOperation();\n\nconst silverCustomerFactory = new SilverCustomerFactory();\nconst silverCustomer = silverCustomerFactory.getCustomer();\nsilverCustomer.silverOperation();\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Factory-Pattern.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-factory-pattern-md-f30b45c4f690a42adb47.js.map