(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{"4rXm":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Notes/React-Hooks.md"}});var l={_frontmatter:r},b=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-hooks"},"React Hooks"),Object(a.b)("p",null,"Hooks introduces ",Object(a.b)("inlineCode",{parentName:"p"},"State")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Lifecycle Methods")," to function-based components."),Object(a.b)("p",null,"Hooks make it really easy to share logic between components."),Object(a.b)("h2",{id:"some-basic-hooks"},"Some Basic Hooks"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",c({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",c({parentName:"tr"},{align:null}),"Function"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",c({parentName:"tr"},{align:null}),"useState"),Object(a.b)("td",c({parentName:"tr"},{align:null}),"Component-level state")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",c({parentName:"tr"},{align:null}),"useEffect"),Object(a.b)("td",c({parentName:"tr"},{align:null}),"Use 'lifecycle methods'")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",c({parentName:"tr"},{align:null}),"useContext"),Object(a.b)("td",c({parentName:"tr"},{align:null}),"Allow use of context system")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",c({parentName:"tr"},{align:null}),"useRef"),Object(a.b)("td",c({parentName:"tr"},{align:null}),"Allow func component to use ref system")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",c({parentName:"tr"},{align:null}),"useReducer"),Object(a.b)("td",c({parentName:"tr"},{align:null}),"Allow func component to store data through a 'reducer'")))),Object(a.b)("h2",{id:"before-hooks"},"Before Hooks"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"// components/App.js\nimport React from 'react';\n\nexport default App extends React.Component {\n    state = {\n        counter: 0\n    }\n\n    handleClick = () => this.setState({counter: this.state.counter++})\n\n    render() {\n        return <div>\n            <button onClick={this.handleClick}>{this.state.counter}</button>\n        </div>\n    }\n}\n")),Object(a.b)("h2",{id:"after-hooks"},"After Hooks"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"// components/App.js\nimport React, {useState, useEffect} from 'react';\n\nconst App = () => {\n    const [counter, setCounter] = useState(0);\n\n    const updateCounter = () => setCounter(counter++)\n\n    useEffect(() => {\n        console.log('Counter updated!');\n    }, [counter]);\n\n    return <div>\n        <button onClick={updateCounter}>{counter}</button>\n    </div>\n}\n")),Object(a.b)("h2",{id:"lifecycles-with-useeffect"},"Lifecycles with useEffect"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," allows us to effectively use a combined version of ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount")," and ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"."),Object(a.b)("p",null,"Notes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"useEffect argument function cannot be an async func.")),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-javascript"}),"import React, {useEffect} from 'react';\n\n// second argument controls whether or not the arrow function is called\nuseEffect(() => {\n    console.log('Counter updated!');\n}, [counter]);\n")),Object(a.b)("h2",{id:"code-reuse-example"},"Code Reuse Example"),Object(a.b)("p",null,"Believe it or not, what we can actually do is abstract the useEffect outside of the function component. "),Object(a.b)("p",null,"This is incredibly useful to create reuseable effects."))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Notes/React-Hooks.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-notes-react-hooks-md-aa42c34d17d8cc09e324.js.map