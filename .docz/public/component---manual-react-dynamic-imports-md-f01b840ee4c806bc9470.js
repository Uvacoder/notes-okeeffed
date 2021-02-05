(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{aOhG:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function m(){return(m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/dynamic-imports.md"}});var p={_frontmatter:r},c=a.a;function l(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,o,a={},m=Object.keys(n);for(o=0;o<m.length;o++)t=m[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(o.b)(c,m({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"dynamic-imports-for-a-component"},"Dynamic Imports for a Component"),Object(o.b)("h2",{id:"example-code"},"Example Code"),Object(o.b)("p",null,"The key action happens by using ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," and knowledge of ",Object(o.b)("inlineCode",{parentName:"p"},"state"),":"),Object(o.b)("pre",null,Object(o.b)("code",m({parentName:"pre"},{className:"language-javascript"}),"componentDidMount() {\n    import('components/ComponentB').then((module) =>\n        this.setState({ module: module.default })\n    );\n}\n")),Object(o.b)("p",null,"Here is the full code example:"),Object(o.b)("pre",null,Object(o.b)("code",m({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\n\n/**\n * Dynamically load ComponentB.\n *\n * @class ComponentA\n * @extends {Component}\n */\nclass ComponentA extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      module: null\n    };\n  }\n\n  /**\n   * On mount, dynamically fetch ComponentB.\n   *\n   * @memberof ComponentA\n   */\n  componentDidMount() {\n    import('components/ComponentFilePond').then((module) =>\n      this.setState({ module: module.default })\n    );\n  }\n\n  /**\n   * Render ComponentA component.\n   *\n   * @memberof ComponentA\n   * @returns {ComponentA} component Basic div with dynamically loaded child\n   */\n  render() {\n    const { module: ComponentB } = this.state;\n    return (\n      <div className=\"component-image-upload\">\n        {ComponentB && <ComponentB {...this.props} />}\n      </div>\n    );\n  }\n}\n\nexport default ComponentA;\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Build")," is a series that is about short, sharp examples.")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/dynamic-imports.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-dynamic-imports-md-f01b840ee4c806bc9470.js.map