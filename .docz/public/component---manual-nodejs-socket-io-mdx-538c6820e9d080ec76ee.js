(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{uSwk:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Nodejs/SocketIO.mdx"}});var i={_frontmatter:c},s=o.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(s,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"socketio"},"Socket.io"),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"yarn add socket.io\n")),Object(r.b)("h2",{id:"server-code"},"Server code"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"var app = require('express')();\nvar http = require('http').Server(app);\nvar io = require('socket.io')(http);\n\napp.get('/', function(req, res) {\n  res.sendFile(__dirname + '/index.html');\n});\n\nio.on('connection', function(socket) {\n  console.log('a user connected');\n});\n\nhttp.listen(3000, function() {\n  console.log('listening on *:3000');\n});\n")),Object(r.b)("h2",{id:"client-server"},"Client server"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"var app = require('express')();\nvar http = require('http').Server(app);\nvar io = require('socket.io-client');\nvar socket = io.connect(\n  '<address>',\n  {\n    reconnection: true\n  }\n);\n\nsocket.on('connect', function() {\n  console.log('connected to localhost:3000');\n  socket.on('clientEvent', function(data) {\n    console.log('message from the server:', data);\n    socket.emit('serverEvent', \"thanks server! for sending '\" + data + \"'\");\n  });\n});\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Nodejs/SocketIO.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-nodejs-socket-io-mdx-538c6820e9d080ec76ee.js.map