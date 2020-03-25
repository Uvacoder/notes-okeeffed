(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"./manual/Design-Patterns/Prototype-Pattern.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(s,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"prototype-pattern"},"Prototype Pattern"),Object(o.b)("p",null,'GoF defines prototype pattern as "Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype."'),Object(o.b)("p",null,"The components used in this pattern:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Prototype: An interface or abstract classes that defined the method to clone itself."),Object(o.b)("li",{parentName:"ul"},"ConcretePrototype: This is the concrete class that will clone itself."),Object(o.b)("li",{parentName:"ul"},"Client: The application object that needs the cloned copies of the object.")),Object(o.b)("h2",{id:"in-code"},"In code"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"interface PersonPrototype {\n    name: string;\n    clone(): PersonPrototype;\n}\n\nclass Tom implements PersonPrototype {\n    private _name:string = 'Tom';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Tom();\n    }\n}\n\nclass Dick implements PersonPrototype {\n    private _name:string = 'Dick';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Dick();\n    }\n}\n\nclass Harry implements PersonPrototype {\n    private _name:string = 'Harry';\n\n    get name() {\n        return this._name;\n    }\n\n    clone(): PersonPrototype {\n        return new Harry();\n    }\n}\n\n// create factory\nabstract class PersonFactory {\n    abstract createPerson(person: string): PersonPrototype;\n}\n\n// concrete factories\nclass PlayerPersonFactory extends PersonFactory {\n    private players: { [player: string]: PersonPrototype; } = {};\n\n    constructor() {\n        super();\n        this.players['Tom'] = new Tom();\n        this.players['Dick'] = new Dick();\n        this.players['Harry'] = new Harry();\n    }\n\n    createPerson(player: string): PersonPrototype {\n        return this.players[player].clone();\n    }\n}\n\n(function main() {\n    const factory = new PlayerPersonFactory();\n    const prototypes = ['Tom', 'Dick', 'Harry'].map((player) => {\n        return factory.createPerson(player)\n    });\n    console.log(prototypes);\n})();\n")),Object(o.b)("h2",{id:"references-and-resources"},"References And Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://www.codeproject.com/Articles/476807/Understanding-and-Implementing-Prototype-Pattern-i"}),"Understanding The Prototype Design Pattern"))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Prototype-Pattern.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-design-patterns-prototype-pattern.101a1afd2417ec7a4a77.js.map