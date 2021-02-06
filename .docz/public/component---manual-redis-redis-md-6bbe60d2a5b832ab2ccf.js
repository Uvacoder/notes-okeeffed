(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{"6YQD":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),l=a("TjRS");a("aD51");function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Redis/Redis.md"}});var i={_frontmatter:r},c=l.a;function d(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,l={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,["components"]);return Object(n.b)(c,b({},i,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"redis"},"Redis"),Object(n.b)("h2",{id:"tldr"},"tl;dr"),Object(n.b)("h3",{id:"hash-sets"},"Hash Sets"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HGETALL"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Get all fields and values in hash"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HGETALL coin:btc")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HKEYS"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Get all fields in hash"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HKEYS coin:btc")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HGET"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Get value of hash field"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HGET coin:btc id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HMGET"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Multiple get value of hash field"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HGET coin:btc id buy sell")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HSET"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Set value of hash field"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HSET coin:btc id 1234")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"HMSET"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Multiple set value of hash field"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"HSET coin:btc id ID1234 buy 123 sell 100")))),Object(n.b)("h3",{id:"lists"},"Lists"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Example"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"RPUSH"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Push elements onto a list"),Object(n.b)("td",b({parentName:"tr"},{align:null}),'RPUSH list "one"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"LPOP"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Pop element from last on list"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"LPOP list")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"LLEN"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Get list length"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"LLEN list")))),Object(n.b)("h3",{id:"run-local-server-and-attach"},"Run local server and attach"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-shell"}),"# terminal one\nredis-server /usr/local/etc/redis.conf\n# terminal two\nredis-cli\n")),Object(n.b)("h2",{id:"command-list"},"Command list"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Install"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"brew install redis")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Run server"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"redis-server /usr/local/etc/redis.conf")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Uninstall"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"brew uninstall redis && rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Info"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"brew info redis")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Run Redis CLI client"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"redis-cli")))),Object(n.b)("h2",{id:"redis-commands"},"Redis commands"),Object(n.b)("p",null,"A full list can be found at ",Object(n.b)("a",b({parentName:"p"},{href:"https://redis.io/commands"}),"https://redis.io/commands"),"."))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Redis/Redis.md"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-redis-redis-md-6bbe60d2a5b832ab2ccf.js.map