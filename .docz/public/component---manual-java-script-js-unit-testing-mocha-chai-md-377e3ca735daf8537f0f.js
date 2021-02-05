(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{vuMX:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/JS-Unit-Testing-Mocha-Chai.md"}});var c={_frontmatter:o},s=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(s,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"mocha-and-chai"},"Mocha and Chai"),Object(a.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(a.b)("a",{href:"#section"},"title"),"---- ",Object(a.b)("a",{href:"#subsection"},"title"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"BDD - Behaviour Driven Development "),Object(a.b)("p",null,"We want to put the test code in a file separate from the other code."),Object(a.b)("p",null,"After install the dev dependency of mocha and chai, you can write a test.js file and then run `mocha test.js' and it will simply run the test!"),Object(a.b)("p",null,"To start making these tests, we ",Object(a.b)("strong",{parentName:"p"},"NEED")," to make a ",Object(a.b)("inlineCode",{parentName:"p"},"test")," file in the same directory as ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")),Object(a.b)("h2",{id:"building-a-test-suite"},"Building a test suite"),Object(a.b)("p",null,"Write a test that will run the test using the npm task ",Object(a.b)("inlineCode",{parentName:"p"},"test")," and just reply an assertion to be true."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"const expect = require('chai').expect;\n\n// Test suite\ndescribe('Mocha', () => {\n\n    // Test spec (unit test)\n    it('should run our test using npm', () => {\n        expect(true).to.be.ok;\n    });\n\n});\n")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"spec")," looks very similar to a ",Object(a.b)("inlineCode",{parentName:"p"},"suite"),". It takes 2 arguments."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A string describing the desired behaviour."),Object(a.b)("li",{parentName:"ol"},"A function that wraps all the expectations together.")),Object(a.b)("p",null,"It's important to start guessing what the function might expect etc."),Object(a.b)("p",null,"We do a lot of the guess work for setting the spec itself. It may feel awkward at the start, but it will help get some bearings."),Object(a.b)("p",null,"Once the spec is written, if we actually get ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," returned, that is likely because the function hasn't been written and/or does not return anything."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"let expect = require('chai').expect;\n\ndescribe('checkForShip', () => {\n    const checkForShip = require('../path/to/src').checkForShip;\n    \n    // this is the test spec\n    it('should correctly report no ship at a given player's coordinate',  () => { \n\n        player = {\n            ships: [\n                {\n                    locations: [[0,0]]\n                }\n            ]\n        }\n\n        expect(checkForShip(player, [9, 9])).to.be.false;\n    });\n\n    it('should handle ships located at more than one coordinate',  () => { \n\n        player = {\n            ships: [\n                {\n                    locations: [[0,0], [0,1]]\n                }\n            ]\n        }\n\n        expect(checkForShip(player, [0, 1])).to.be.true;\n        expect(checkForShip(player, [9, 9])).to.be.false;\n    });\n\n    it('should handle ships located at more than one coordinate',  () => { \n\n        player = {\n            ships: [\n                {\n                    locations: [[0,0], [0,1]]\n                }\n            ]\n        }\n\n        expect(checkForShip(player, [0, 1])).to.be.true;\n        expect(checkForShip(player, [9, 9])).to.be.false;\n    });\n});\n")),Object(a.b)("p",null,"// example in the /src/js/ship_methods.js"),Object(a.b)("p",null,"function checkForShip (player, coordinates) {"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"var shipPresent, ship;\n\nfor (var i = 0; i < player.ships.length; i++) {\n    ship = player.ships[i];\n\n    shipPresent = ship.locations.filter( (actualCoordinate) => {\n        return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);\n    })[0];\n\n    if (!shipPresent) {\n        return false;\n    }\n}\n")),Object(a.b)("p",null,"}"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/JS-Unit-Testing-Mocha-Chai.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-js-unit-testing-mocha-chai-md-377e3ca735daf8537f0f.js.map