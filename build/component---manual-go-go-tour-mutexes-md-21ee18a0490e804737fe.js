(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{kgrZ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Go-Tour-Mutexes.md"}});var i={_frontmatter:r},u=a.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(u,c({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"go-tour-mutexes"},"Go Tour Mutexes"),Object(o.b)("h2",{id:"syncmutex"},"sync.Mutex"),Object(o.b)("p",null,"We've seen how channels are great for communication among goroutines."),Object(o.b)("p",null,"But what if we don't need communication? What if we just want to make sure only one goroutine can access a variable at a time to avoid conflicts?"),Object(o.b)("p",null,"This concept is called mutual exclusion, and the conventional name for the data structure that provides it is mutex."),Object(o.b)("p",null,"Go's standard library provides mutual exclusion with ",Object(o.b)("inlineCode",{parentName:"p"},"sync.Mutex")," and its two methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lock"),Object(o.b)("li",{parentName:"ul"},"Unlock")),Object(o.b)("p",null,"We can define a block of code to be executed in mutual exclusion by surrounding it with a call to ",Object(o.b)("inlineCode",{parentName:"p"},"Lock")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Unlock")," as shown on the Inc method."),Object(o.b)("p",null,"We can also use ",Object(o.b)("inlineCode",{parentName:"p"},"defer")," to ensure the mutex will be unlocked as in the ",Object(o.b)("inlineCode",{parentName:"p"},"Value")," method."),Object(o.b)("h2",{id:"basic-mutex-example"},"Basic Mutex Example"),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n)\n\n// SafeCounter is safe to use concurrently.\ntype SafeCounter struct {\n    v   map[string]int\n    mux sync.Mutex\n}\n\n// Inc increments the counter for the given key.\nfunc (c *SafeCounter) Inc(key string) {\n    c.mux.Lock()\n    // Lock so only one goroutine at a time can access the map c.v.\n    c.v[key]++\n    c.mux.Unlock()\n}\n\n// Value returns the current value of the counter for the given key.\nfunc (c *SafeCounter) Value(key string) int {\n    c.mux.Lock()\n    // Lock so only one goroutine at a time can access the map c.v.\n    defer c.mux.Unlock()\n    return c.v[key]\n}\n\nfunc main() {\n    c := SafeCounter{v: make(map[string]int)}\n    fmt.Println(c.v) // map[]\n\n    for i := 0; i < 1000; i++ {\n        go c.Inc("somekey")\n    }\n\n    time.Sleep(time.Second) // delay during async goroutine\n    fmt.Println(c.Value("somekey")) // 1000\n}\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Go-Tour-Mutexes.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-go-tour-mutexes-md-21ee18a0490e804737fe.js.map