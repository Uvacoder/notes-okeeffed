(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{mupz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),b=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/ReasonML/Reason-Hello-World.md"}});var c={_frontmatter:r},i=b.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(i,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"reasonml-hello-world"},"ReasonML Hello World"),Object(n.b)("h2",{id:"tldr"},"tl;dr"),Object(n.b)("p",null,"Reason comes by default with ",Object(n.b)("inlineCode",{parentName:"p"},"BuckleScript"),"."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-shell"}),"npm install -g bs-platform\nbsb -init my-new-project -theme basic-reason\ncd my-new-project\nyarn build # or npm run build, for npm\nnode src/Demo.bs.js\n")),Object(n.b)("h2",{id:"let-binding"},"Let Binding"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"const x = 5;")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let x = 5;"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"var x = y;")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"No equivalent (thankfully)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let x = 5; x = x + 1;")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let x = ref(5); x := x^ + 1;"))))),Object(n.b)("h2",{id:"string--char"},"String & Char"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'"Hello world!"')),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"'Hello world!'")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Strings must use ",Object(n.b)("inlineCode",{parentName:"td"},'"'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Characters are strings"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"'a'"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'"hello " + "world"')),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'"hello " ++ "world"'))))),Object(n.b)("h2",{id:"boolean"},"Boolean"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"true"),", ",Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"!true")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"`"),Object(n.b)("td",l({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"a === b"),", ",Object(n.b)("inlineCode",{parentName:"td"},"a !== b")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"No deep equality (recursive compare)"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"a == b"),", ",Object(n.b)("inlineCode",{parentName:"td"},"a != b"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"a == b")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"No equality with implicit casting (thankfully)")))),Object(n.b)("h2",{id:"number"},"Number"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"3")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"3.1415")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"3 + 4")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"3.0 + 4.5")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"3.0 +. 4.5"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"5 % 3")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"5 mod 3"))))),Object(n.b)("p",null,"*"," JS has no distinction between integer and float."),Object(n.b)("h2",{id:"objectrecord"},"Object/Record"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"no static types"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"type point = {x: int, mutable y: int}"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"{x: 30, y: 20}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"point.x")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"point.y = 30;")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"{...point, x: 30}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")))),Object(n.b)("p",null,"*"," This is the Reason spiritual equivalent; it doesn't mean it compiles to JS' object! To compile to the latter, see ",Object(n.b)("a",l({parentName:"p"},{href:"object.md#tip-tricks"}),"here"),"."),Object(n.b)("h2",{id:"array"},"Array"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"[1, 2, 3]")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"`[")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"myArray[1] = 10")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'[1, "Bob", true]')," ","*"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'(1, "Bob", true)'))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"No immutable list"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"[1, 2, 3]"))))),Object(n.b)("p",null,"*"," We can simulate tuples in JavaScript with arrays, because JavaScript arrays can contain multiple types of elements."),Object(n.b)("h2",{id:"null"},"Null"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"null"),", ",Object(n.b)("inlineCode",{parentName:"td"},"undefined")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"None")," ","*")))),Object(n.b)("p",null,"*"," Again, only a spiritual equivalent; Reason doesn't have nulls, nor null bugs! But it does have ",Object(n.b)("a",l({parentName:"p"},{href:"newcomer-examples.md#using-the-option-type"}),"an option type")," for when you actually need nullability."),Object(n.b)("h2",{id:"function"},"Function"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arg => retVal")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"(arg) => retVal"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"function named(arg) {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let named = (arg) => ..."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"const f = function(arg) {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let f = (arg) => ..."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"add(4, add(5, 6))")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")))),Object(n.b)("h3",{id:"blocks"},"Blocks"),Object(n.b)("p",null,"JavaScript:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const myFun = (x, y) => {\n  const doubleX = x + x;\n  const doubleY = y + y;\n  return doubleX + doubleY;\n};\n")),Object(n.b)("p",null,"Reason:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-reason"}),"let myFun = (x, y) => {\n  let doubleX = x + x;\n  let doubleY = y + y;\n  doubleX + doubleY\n};\n")),Object(n.b)("h3",{id:"currying"},"Currying"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let add = a => b => a + b")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let add = (a, b) => a + b"))))),Object(n.b)("p",null,"Both JavaScript and Reason support currying, but Reason currying is ",Object(n.b)("strong",{parentName:"p"},"built-in and optimized to avoid intermediate function allocation & calls"),", whenever possible."),Object(n.b)("h2",{id:"if-else"},"If-else"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"if (a) {b} else {c}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same ","*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"a ? b : c")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"switch")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"switch")," but ",Object(n.b)("a",l({parentName:"td"},{href:"pattern-matching.md"}),"super-powered!"))))),Object(n.b)("p",null,"*"," Reason conditionals are always expressions!"),Object(n.b)("h2",{id:"destructuring"},"Destructuring"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"const {a, b} = data")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let {a, b} = data"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"const [a, b] = data")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"`let [")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"const {a: aa, b: bb} = data")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"let {a: aa, b: bb} = data"))))),Object(n.b)("p",null,"*"," Gives good compiler warning that ",Object(n.b)("inlineCode",{parentName:"p"},"data")," might not be of length 2. Switch to pattern-matching instead."),Object(n.b)("h2",{id:"loop"},"Loop"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"for (let i = 0; i <= 10; i++) {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"for (i in 0 to 10) {...}"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"for (let i = 10; i >= 0; i--) {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"for (i in 10 downto 0) {...}"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"while (true) {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")))),Object(n.b)("h2",{id:"jsx"},"JSX"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'<Foo bar=1 baz="hi" onClick={bla} />')),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"<Foo bar=bar />")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"<Foo bar />")," ","*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"<input checked />")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"<input checked=true />"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"No children spread"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"<Foo>...children</Foo>"))))),Object(n.b)("p",null,"*"," Argument punning!"),Object(n.b)("h2",{id:"exception"},"Exception"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"throw new SomeError(...)")),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"raise(SomeError(...))"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"try {a} catch (Err) {...} finally {...}")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"`try (a) {")))),Object(n.b)("p",null,"*"," No finally."),Object(n.b)("h2",{id:"blocks-1"},"Blocks"),Object(n.b)("p",null,'In Reason, "sequence expressions" are created with ',Object(n.b)("inlineCode",{parentName:"p"},"{}")," and evaluate to their last statement. In JavaScript, this can be simulated via an immediately-invoked function expression (since function bodies have their own local scope)."),Object(n.b)("p",null,"JavaScript:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"const myFun = (x, y) => {\n  const doubleX = x + x;\n  const doubleY = y + y;\n  return doubleX + doubleY;\n};\n")),Object(n.b)("p",null,"Reason:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-reason"}),"let myFun = (x, y) => {\n  let doubleX = x + x;\n  let doubleY = y + y;\n  doubleX + doubleY\n};\n")),Object(n.b)("h2",{id:"comments"},"Comments"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"JavaScript"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reason"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"/* Comment */")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Same")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"// Line comment")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Coming soon")))))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/ReasonML/Reason-Hello-World.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-reason-ml-reason-hello-world-md-15204e43b82b57dc4e6a.js.map