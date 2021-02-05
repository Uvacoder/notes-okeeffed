(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{"73Wp":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/TypeScript/Duck-Typing.md"}});var c={_frontmatter:a},l=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(l,i({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"duck-typing-in-typescript"},"Duck Typing in TypeScript"),Object(r.b)("p",null,"This is an example of typing in TS:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-ts"}),"interface Vehicle {\n  model: number;\n}\n\ninterface StrVehicle {\n  model: string;\n}\n\nclass Car {\n  model;\n\n  constructor(model) {\n    this.model = model;\n  }\n\n  getModel() {\n    return this.model;\n  }\n}\n\nconst otherCar: Vehicle = new Car(4);\notherCar.model;\n\nconst strCar: StrVehicle = new Car('mitsubishi');\nstrCar.model;\n\nclass StrictCar implements Vehicle {\n  model: number;\n\n  constructor(props) {\n    this.model = model;\n  }\n\n  getModel() {\n    return this.model;\n  }\n}\n\nconst otherCar2: Vehicle = new StrictCar(4);\notherCar.model;\n\n// Throws error: `StrVehicle not assignable to StrictCar`\nconst strCar2: StrVehicle = new StrictCar('mitsubishi');\nstrCar.model;\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/TypeScript/Duck-Typing.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-type-script-duck-typing-md-0364579ee9df689a0b96.js.map