(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{x877:function(r,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return d})),e.d(n,"default",(function(){return l}));e("1c7q"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3"),e("2mQt"),e("mXGw");var a=e("/FXl"),o=e("TjRS");e("aD51");function t(){return(t=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r}).apply(this,arguments)}var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/CSS/css-gradients-cheat-sheet.md"}});var i={_frontmatter:d},g=o.a;function l(r){var n=r.components,e=function(r,n){if(null==r)return{};var e,a,o={},t=Object.keys(r);for(a=0;a<t.length;a++)e=t[a],n.indexOf(e)>=0||(o[e]=r[e]);return o}(r,["components"]);return Object(a.b)(g,t({},i,e,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"css-gradient-syntax"},"CSS Gradient Syntax"),Object(a.b)("pre",null,Object(a.b)("code",t({parentName:"pre"},{className:"language-css"}),"// CREATE A TRIANGLE\n\n.arrow-down {\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid #f00;\n}\n\nbackground: linear-gradient(direction, color-stop1, color-stop2, ...);\n\n// TOP TO BOTTOM (RED TO YELLOW)\n\n#grad {\n    background: red; /* For browsers that do not support gradients */\n    background: -webkit-linear-gradient(red, yellow); /* For Safari 5.1 to 6.0 */\n    background: -o-linear-gradient(red, yellow); /* For Opera 11.1 to 12.0 */\n    background: -moz-linear-gradient(red, yellow); /* For Firefox 3.6 to 15 */\n    background: linear-gradient(red, yellow); /* Standard syntax */\n}\n\n// WITH DIRECTIONS eg. LEFT TO RIGHT\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(left, red , yellow); /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(right, red, yellow); /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(right, red, yellow); /* For Firefox 3.6 to 15 */\n  background: linear-gradient(to right, red , yellow); /* Standard syntax */\n}\n\n// DIAGONAL\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(left top, red, yellow); /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(bottom right, red, yellow); /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(bottom right, red, yellow); /* For Firefox 3.6 to 15 */\n  background: linear-gradient(to bottom right, red, yellow); /* Standard syntax */\n}\n")),Object(a.b)("h3",{id:"css-using-angles"},"CSS Using Angles"),Object(a.b)("pre",null,Object(a.b)("code",t({parentName:"pre"},{className:"language-css"}),"background: linear-gradient(angle, color-stop1, color-stop2);\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(-90deg, red, yellow); /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(-90deg, red, yellow); /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(-90deg, red, yellow); /* For Firefox 3.6 to 15 */\n  background: linear-gradient(-90deg, red, yellow); /* Standard syntax */\n}\n\n// MULTIPLE COLOURS\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(red, yellow, green); /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(red, yellow, green); /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(red, yellow, green); /* For Firefox 3.6 to 15 */\n  background: linear-gradient(red, yellow, green); /* Standard syntax */\n}\n\n// MULTIPLE COLOURS IN DIFFERENT DIRECTIONS\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  background: -webkit-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);\n  /* For Opera 11.1 to 12.0 */\n  background: -o-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);\n  /* For Fx 3.6 to 15 */\n  background: -moz-linear-gradient(left,red,orange,yellow,green,blue,indigo,violet);\n  /* Standard syntax */\n  background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);\n}\n\n// USING TRANSPARENCY\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255,0,0,1)); /*Safari 5.1-6*/\n  background: -o-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /*Opera 11.1-12*/\n  background: -moz-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /*Fx 3.6-15*/\n  background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); /*Standard*/\n}\n\n// REPEATING A LINEAR Gradient\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  /* Safari 5.1 to 6.0 */\n  background: -webkit-repeating-linear-gradient(red, yellow 10%, green 20%);\n  /* Opera 11.1 to 12.0 */\n  background: -o-repeating-linear-gradient(red, yellow 10%, green 20%);\n  /* Firefox 3.6 to 15 */\n  background: -moz-repeating-linear-gradient(red, yellow 10%, green 20%);\n  /* Standard syntax */\n  background: repeating-linear-gradient(red, yellow 10%, green 20%);\n}\n")),Object(a.b)("h3",{id:"css-radial-gradients"},"CSS Radial Gradients"),Object(a.b)("pre",null,Object(a.b)("code",t({parentName:"pre"},{className:"language-css"}),"background: radial-gradient(shape size at position, start-color, ..., last-color);\n\n// EVENLY COLOURED SPACING\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-radial-gradient(red, yellow, green); /* Safari 5.1 to 6.0 */\n  background: -o-radial-gradient(red, yellow, green); /* For Opera 11.6 to 12.0 */\n  background: -moz-radial-gradient(red, yellow, green); /* For Firefox 3.6 to 15 */\n  background: radial-gradient(red, yellow, green); /* Standard syntax */\n}\n\n// DIFFERENT SPACING\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-radial-gradient(red 5%, yellow 15%, green 60%); /* Safari 5.1-6.0 */\n  background: -o-radial-gradient(red 5%, yellow 15%, green 60%); /* For Opera 11.6-12.0 */\n  background: -moz-radial-gradient(red 5%, yellow 15%, green 60%); /* For Firefox 3.6-15 */\n  background: radial-gradient(red 5%, yellow 15%, green 60%); /* Standard syntax */\n}\n\n// SET SHAPE\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  background: -webkit-radial-gradient(circle, red, yellow, green); /* Safari */\n  background: -o-radial-gradient(circle, red, yellow, green); /* Opera 11.6 to 12.0 */\n  background: -moz-radial-gradient(circle, red, yellow, green); /* Firefox 3.6 to 15 */\n  background: radial-gradient(circle, red, yellow, green); /* Standard syntax */\n}\n\n// USING DIFFERENT SIZE KEYWORDS\n\n#grad1 {\n  background: red; /* For browsers that do not support gradients */\n  /* Safari 5.1 to 6.0 */\n  background: -webkit-radial-gradient(60% 55%, closest-side, red, yellow, black);\n  /* For Opera 11.6 to 12.0 */\n  background: -o-radial-gradient(60% 55%, closest-side, red, yellow, black);\n  /* For Firefox 3.6 to 15 */\n  background: -moz-radial-gradient(60% 55%, closest-side, red, yellow, black);\n  /* Standard syntax */\n  background: radial-gradient(closest-side at 60% 55%, red, yellow, black);\n}\n\n#grad2 {\n  /* Safari 5.1 to 6.0 */\n  background: -webkit-radial-gradient(60% 55%, farthest-side, red, yellow, black);\n  /* Opera 11.6 to 12.0 */\n  background: -o-radial-gradient(60% 55%, farthest-side, red, yellow, black);\n  /* For Firefox 3.6 to 15 */\n  background: -moz-radial-gradient(60% 55%, farthest-side, red, yellow, black);\n  /* Standard syntax */\n  background: radial-gradient(farthest-side at 60% 55%, red, yellow, black);\n}\n\n// REPEATING COLOUR GRADIENTS\n\n#grad {\n  background: red; /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  background: -webkit-repeating-radial-gradient(red, yellow 10%, green 15%);\n  /* For Opera 11.6 to 12.0 */\n  background: -o-repeating-radial-gradient(red, yellow 10%, green 15%);\n  /* For Firefox 3.6 to 15 */\n  background: -moz-repeating-radial-gradient(red, yellow 10%, green 15%);\n  /* Standard syntax */\n  background: repeating-radial-gradient(red, yellow 10%, green 15%);\n}\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/CSS/css-gradients-cheat-sheet.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-css-css-gradients-cheat-sheet-md-3710df638bd5ca99e78b.js.map