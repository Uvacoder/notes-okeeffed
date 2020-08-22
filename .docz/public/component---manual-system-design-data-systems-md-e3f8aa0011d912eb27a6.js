(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{PCus:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return o}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var l=a("/FXl"),n=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/System-Design/Data-Systems.md"}});var s={_frontmatter:r},b=n.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(l.b)(b,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"data-systems"},"Data Systems"),Object(l.b)("h2",{id:"basics"},"Basics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The aim is to keep them: Reliable, Scalable and Maintainable"),Object(l.b)("li",{parentName:"ul"},"Data Systems knowledge includes understanding caches, search indexes, stream/batch processing")),Object(l.b)("h3",{id:"reliability"},"Reliability"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Keeping data correctness, completeness across systems, performant and resilient."),Object(l.b)("li",{parentName:"ul"},"Fault vs Failure: Fault is a system failing to adhere to a design spec whereas failure means a system failure and requires failover backup procedures."),Object(l.b)("li",{parentName:"ul"},"It's better to measure the latency in percentiles.")),Object(l.b)("h3",{id:"scalability"},"Scalability"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For many backends, the response time is dependent on the slowest server response."),Object(l.b)("li",{parentName:"ul"},"Elastic vs manual scaling: one is automated.")),Object(l.b)("p",null,"The architecture for each large scale project is highly specific. It depends on factors such as:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Volume of reads"),Object(l.b)("li",{parentName:"ol"},"Volume of writes"),Object(l.b)("li",{parentName:"ol"},"Type of data to stor"),Object(l.b)("li",{parentName:"ol"},"Data complexity"),Object(l.b)("li",{parentName:"ol"},"Response time"),Object(l.b)("li",{parentName:"ol"},"Access patterns")),Object(l.b)("p",null,"Example: You could expect 100,000 req/s @ 1kB in size vs 3 req/s @ 2GB in size which equates to the same data throughput but very different requirements."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Load parameters identify which requests are common vs which ones are rare.")),Object(l.b)("h3",{id:"maintainability"},"Maintainability"),Object(l.b)("p",null,"Remember these three principles:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Operability"),Object(l.b)("li",{parentName:"ol"},"Simplicity (- think abstractions like SQL)"),Object(l.b)("li",{parentName:"ol"},"Evolvability")),Object(l.b)("h2",{id:"data-models"},"Data Models"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Relational"),Object(l.b)("li",{parentName:"ul"},"Document"),Object(l.b)("li",{parentName:"ul"},"Graph (this is essentially a subtype of relational)")),Object(l.b)("h3",{id:"pros-of-the-document-model"},"Pros of the Document Model"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Schema flexibility"),Object(l.b)("li",{parentName:"ul"},"Better performance due to locality"),Object(l.b)("li",{parentName:"ul"},"Apps are generally closer to the data structure")),Object(l.b)("h2",{id:"storage--retrieval"},"Storage + Retrieval"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Big difference in storage engines that are optimized for transactional vs analytical (think OLTP/OLAP)"),Object(l.b)("li",{parentName:"ul"},"Indexes help find keys but generally slow down writes"),Object(l.b)("li",{parentName:"ul"},"In-memory tress: examples red-black trees, AVL trees. We can make the storage engines to use these styles of trees."),Object(l.b)("li",{parentName:"ul"},"LSM Trees can be slow when looking up keys that don't exist",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'Can be countered by "Bloom Filters" -> can tell if the key exists.')))),Object(l.b)("h3",{id:"b-trees"},"B-Trees"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Most common index used by databases."),Object(l.b)("li",{parentName:"ul"},'While log-structured indexes work in variable-size segments and written sequentially, B-Trees have fixed sized "blocks" or "pages" - this design corresponds to reflecting the underlying hardware.'),Object(l.b)("li",{parentName:"ul"},'B-Tree variant "fractal trees" borrow log-structured ideas to reduce disk seeks.')),Object(l.b)("h3",{id:"b-trees-vs-lsm-trees"},"B-Trees vs LSM-Trees"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"B-Tree more mature"),Object(l.b)("li",{parentName:"ul"},"LSM faster for writes"),Object(l.b)("li",{parentName:"ul"},"B faster for reads"),Object(l.b)("li",{parentName:"ul"},"B-Tree must write everything twice (write-ahead log and potential multi-writes to tree pages)"),Object(l.b)("li",{parentName:"ul"},'Log structured indexes also rewrite data multiple times. This is known as "write amplification" and is a concern for SSDs.'),Object(l.b)("li",{parentName:"ul"},"LSM trees compress files better")),Object(l.b)("h3",{id:"the-downsides-of-lsm-trees"},"The downsides of LSM-Trees"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Compaction process can sometimes interfere with ongoing reads/writes.")),Object(l.b)("h3",{id:"other-notes"},"Other notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Secondary index normally not unique (consider the use of ",Object(l.b)("inlineCode",{parentName:"li"},"user_id"),")"),Object(l.b)("li",{parentName:"ul"},"R-Trees normally used for optimised geospatial query efficiency."),Object(l.b)("li",{parentName:"ul"},"LSM-Trees themselves do not handle updating. They essentially can only append and remove the stale data. B-Trees can update in place.")),Object(l.b)("h3",{id:"olap-vs-oltp"},"OLAP vs OLTP"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'A transaction needn\'t adhere to all principles of ACID. "Transaction" processing mean low latency read/writes.'),Object(l.b)("li",{parentName:"ul"},"Commonly used with relational databases."),Object(l.b)("li",{parentName:"ul"},"Performance can be improved using vectorized processing (SIMD - single instruction multi data)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Column compression can also make use of the L1 cache."),Object(l.b)("li",{parentName:"ul"},"Update-in-place like what B-Trees use are not possible with column compression.")))))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/System-Design/Data-Systems.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-system-design-data-systems-md-e3f8aa0011d912eb27a6.js.map