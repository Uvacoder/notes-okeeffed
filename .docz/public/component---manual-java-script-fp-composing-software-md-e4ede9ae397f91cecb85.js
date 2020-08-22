(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{"3TkA":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/FP-Composing-Software.md"}});var c={_frontmatter:l},r=o.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(r,i({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"fp-composing-software"},"FP Composing Software"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://gist.github.com/Geoff-Ford/51024380f4426d2bdca633d9217f9bcc"}),"Composing Software series - Eric Elliot")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",i({parentName:"li"},{href:"https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8"}),"Understanding Monads"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Once you understand monads, you immediately become incapable of explaining them to anyone else" Lady Monadgreen’s curse ~ Gilad Bracha (used famously by Douglas Crockford)')),Object(a.b)("h2",{id:"understanding-monads-in-js"},"Understanding Monads in JS"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A monad is a way of composing functions that require context in addition to the return value, such as computation, branching, or I/O. Monads type lift, flatten and map so that the types line up for lifting functions ",Object(a.b)("inlineCode",{parentName:"p"},"a => M(b)"),", making them composable. It's a mapping from some type ",Object(a.b)("inlineCode",{parentName:"p"},"a")," to some type ",Object(a.b)("inlineCode",{parentName:"p"},"b")," along with some computational context, hidden in the implementation details of lift, flatten, and map.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Functions map: ",Object(a.b)("inlineCode",{parentName:"li"},"a => b")),Object(a.b)("li",{parentName:"ul"},"Functors map with context: ",Object(a.b)("inlineCode",{parentName:"li"},"Functor(a) => Functor(b)")),Object(a.b)("li",{parentName:"ul"},"Monads flatten and map with context: ",Object(a.b)("inlineCode",{parentName:"li"},"Monad(Monad(a)) => Monad(b)"))),Object(a.b)("p",null,'What does "flatten", "map" and "context" mean?'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Map: Apply a function to a and return b. Given some input, return some output."),Object(a.b)("li",{parentName:"ul"},"Context: Computational detail of the monad's composition (including lift, flatten and map). The point of functors and monads is to abstract that context away so we don't have to worry about it while we're composing things. Mapping inside the context means that you apply a function from ",Object(a.b)("inlineCode",{parentName:"li"},"a => b")," to the value inside the context, and return a new value ",Object(a.b)("inlineCode",{parentName:"li"},"b")," wrapped inside the same kind of context. Ie ",Object(a.b)("inlineCode",{parentName:"li"},"Array(a) => Array(b)"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Observable(a) => Observable(b)"),"."),Object(a.b)("li",{parentName:"ul"},"Type lift: Lift a type into a context, blessing the value with an API that you can use to computer from that value, trigger contextual computations etc. ",Object(a.b)("inlineCode",{parentName:"li"},"a => F(a)"),"."),Object(a.b)("li",{parentName:"ul"},"Flatten: Unwrap the value from the context.")),Object(a.b)("p",null,"The associated example from the blog that sets ",Object(a.b)("inlineCode",{parentName:"p"},"Array")," as the context and ",Object(a.b)("inlineCode",{parentName:"p"},"x")," as the value we're mapping over:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const x = 20; // Some data of type `a`\nconst f = n => n * 2; // A function from `a` to `b`\nconst arr = Array.of(x); // The type lift.\n// JS has type lift sugar for arrays: [x]\n// .map() applies the function f to the value x\n// in the context of the array.\nconst result = arr.map(f); // [40]\n")),Object(a.b)("p",null,"The example did not include an array of arrays, but that can still be flattened:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"[[1], [2, 3], [4]].flat(); // [1, 2, 3, 4] or\n[].concat.apply([], [[1], [2, 3], [4]]); // [1, 2, 3, 4]\n")),Object(a.b)("h3",{id:"the-essence-of-monads"},"The Essence of Monads"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Functions map: ",Object(a.b)("inlineCode",{parentName:"li"},"a => b")," which lets you compose functions of type ",Object(a.b)("inlineCode",{parentName:"li"},"a => b")),Object(a.b)("li",{parentName:"ul"},"Functors map with context: ",Object(a.b)("inlineCode",{parentName:"li"},"Functor(a) => Functor(b)"),", which lets you compose functions ",Object(a.b)("inlineCode",{parentName:"li"},"F(a) => F(b)")),Object(a.b)("li",{parentName:"ul"},"Monads flatten and map with context: ",Object(a.b)("inlineCode",{parentName:"li"},"Monad(Monad(a)) => Monad(b)"),", which lets you compose lifting functions ",Object(a.b)("inlineCode",{parentName:"li"},"a => F(b)"))),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// composing functiond\ng:           a => b\nf:                b => c\nh = f(g(a)): a    =>   c\n\n// composing functors\ng:             F(a) => F(b)\nf:                     F(b) => F(c)\nh = f(g(Fa)):  F(a)    =>      F(c)\n\n// composing functions without Monads - uh oh\ng:                  a => M(b)\nf:                       b => M(c)\nh = composeM(f, g): a    =>   M(c)\n\n// f was expecting b, but got M(b)\n// so we us the flatten map process,\n// often called .bind() or .chain()\ng:             a => M(b) flattens to => b\nf:                                      b           maps to => M(c)\nh composeM(f, g):\n               a       flatten(M(b)) => b => map(b => M(c)) => M(c)\n")),Object(a.b)("p",null,"Let's go a real world example of ",Object(a.b)("inlineCode",{parentName:"p"},"compose")," vs ",Object(a.b)("inlineCode",{parentName:"p"},"composeM"),":"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// Using compose\nconst compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);\nconst trace = label => value => {\n  console.log(`${label}: ${value}`);\n  return value;\n};\n\nconst label = 'API call composition';\n// a => Promise(b)\nconst getUserById = id =>\n  id === 3 ? Promise.resolve({ name: 'Kurt', role: 'Author' }) : undefined;\n// b => Promise(c)\nconst hasPermission = ({ role }) => Promise.resolve(role === 'Author');\n// Try to compose them. Warning: this will fail.\nconst authUser = compose(\n  hasPermission,\n  getUserById,\n);\n// Oops! Always false!\nauthUser(3).then(trace(label));\n\n// Using composeM\nconst composeM = chainMethod => (...ms) =>\n  ms.reduce((f, g) => x => g(x)[chainMethod](f));\nconst composePromises = composeM('then');\nconst label = 'API call composition';\n// a => Promise(b)\nconst getUserById = id =>\n  id === 3 ? Promise.resolve({ name: 'Kurt', role: 'Author' }) : undefined;\n// b => Promise(c)\nconst hasPermission = ({ role }) => Promise.resolve(role === 'Author');\n// Compose the functions (this works!)\nconst authUser = composePromises(hasPermission, getUserById);\nauthUser(3).then(trace(label)); // true\n")),Object(a.b)("h3",{id:"what-monads-are-made-of"},"What Monads are made of"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A monad is based on a simple symmetry — A way to wrap a value into a context, and a way to unwrap the value from the context.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Lift/Unit: A type lift from some type into a Monad context ",Object(a.b)("inlineCode",{parentName:"li"},"a => M(a)"),"."),Object(a.b)("li",{parentName:"ul"},"Flatten/Join: Unwrapping the type from the context ",Object(a.b)("inlineCode",{parentName:"li"},"M(a) => a"),".")),Object(a.b)("p",null,"Since Monads are also functors, they can also map:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Map: Map with context preserved: ",Object(a.b)("inlineCode",{parentName:"li"},"M(a) -> M(b)"),".")),Object(a.b)("p",null,"Combining flatten with map, you get ",Object(a.b)("inlineCode",{parentName:"p"},"chain")," - function composition for monad-lifting functions (Kleisli composition):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"FlatMap/Chain: Flatten + map: ",Object(a.b)("inlineCode",{parentName:"li"},"M(M(a)) => M(b)"),".")),Object(a.b)("h3",{id:"identity-monad"},"Identity Monad"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// Identity monad\nconst Id = value => ({\n  // Functor mapping\n  // Preserve the wrapping for .map() by\n  // passing the mapped value into the type\n  // lift:\n  map: f => Id.of(f(value)),\n  // Monad chaining\n  // Discard one level of wrapping\n  // by omitting the .of() type lift:\n  chain: f => f(value),\n  // Just a convenient way to inspect\n  // the values:\n  toString: () => `Id(${value})`,\n});\n// The type lift for this monad is just\n// a reference to the factory.\nId.of = Id;\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/FP-Composing-Software.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-fp-composing-software-md-e4ede9ae397f91cecb85.js.map