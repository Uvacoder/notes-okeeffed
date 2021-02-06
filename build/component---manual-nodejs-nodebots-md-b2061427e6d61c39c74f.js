(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{w9G2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/Nodebots.md"}});var r={_frontmatter:i},l=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,s({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"nodebots"},"Nodebots"),Object(a.b)("p",null,"Using the Johnny-Five stater kit and Tessel 2 to create IoT using JS. He speaks to the npm ecosystem making things nice for Nodebots. It uses Tessel for the kit."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://frontendmasters.com/courses/nodebots/"}),"FE Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://github.com/stevekinney/nodebots-workshop"}),"Git Repo")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://speakerdeck.com/stevekinney/nodebots-frontend-masters"}),"Slides")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://www.sparkfun.com/products/14604"}),"Johnny-Five Inventor's Kit")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",s({parentName:"li"},{href:"https://tessel.github.io/t2-start/"}),"Tessel 2"))),Object(a.b)("h2",{id:"tasting-notes"},"Tasting Notes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All 16 pins can be used for GPIO (general purpose input/output)."),Object(a.b)("li",{parentName:"ul"},"Pins A4, A7 and all pins on the B port can be used for analog to digital input."),Object(a.b)("li",{parentName:"ul"},"Pins A5, A6, B5 and B6 support pulse-width modulation."),Object(a.b)("li",{parentName:"ul"},"Pins A0, A1, B0 and B1 support I2C serial coommunication."),Object(a.b)("li",{parentName:"ul"},"UART is available on both A5 and B5 (TX) and A6 and B6 (RX)."),Object(a.b)("li",{parentName:"ul"},"Pin B7 supports digital-to-analog conversion.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I2C is for more complicated components. The I2C protocol involves using two lines to send and receive data: a serial clock pin (SCL) that the board pulses at a regular interval, and a serial data pin (SDA) over which data is sent between the two devices. As the clock line changes from low to high (known as the rising edge of the clock pulse), a single bit of information - that will form in sequence the address of a specific device and a a command or data - is transferred from the board to the I2C device over the SDA line. When this information is sent - bit after bit -, the called upon device executes the request and transmits it's data back - if required - to the board over the same line using the clock signal still generated by the Master on SCL as timing.")),Object(a.b)("h2",{id:"getting-an-led-to-blink"},"Getting an LED to Blink"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nconst tessel = require('tessel');\n\nsetInterval(() => {\n  tessel.led[2].toggle();\n  tessel.led[3].toggle();\n}, 100);\n\nconsole.log(\"I'm blinking! Press ctrl + c to stop.\");\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/Nodebots.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-nodebots-md-b2061427e6d61c39c74f.js.map