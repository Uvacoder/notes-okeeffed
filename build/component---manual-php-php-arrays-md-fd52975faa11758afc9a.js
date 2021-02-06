(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{HepC:function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return l})),n.d(r,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),t=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/PHP/PHP-Arrays.md"}});var i={_frontmatter:l},c=t.a;function p(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"php-array-method-applications"},"PHP Array Method Applications"),Object(a.b)("p",null,"This covers the basic actions of applying a push, pop, shift and unshift function with PHP."),Object(a.b)("p",null,"These functions are incredibly useful for data structure implementations."),Object(a.b)("h2",{id:"push"},"Push"),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"array_push"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 1 element\n$arr = array("one");\n// $count will be 3 and $arr will now be array("one","two","three");\n$count = array_push($arr,"two","three");\n')),Object(a.b)("p",null,"Alternative using ",Object(a.b)("inlineCode",{parentName:"p"},"$arr[]"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 1 element\n$arr = array("one");\n// $arr will now be array("one","two");\n$arr[] = "two";\n// $arr will now be array("one","two","three");\n$arr[] = "three";\n// $count will be 3\n$count = count($arr)\n')),Object(a.b)("p",null,"Alternative using ",Object(a.b)("inlineCode",{parentName:"p"},"$array_merge()"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 1 element\n$arr = array("one");\n// alternate method using array_merge()\n$arr = array_merge($arr,array("two","three")); // $arr will now be array("one","two","three");\n$count = count($arr); // $count will be 3\n')),Object(a.b)("h2",{id:"pop"},"Pop"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 3 elements\n$arr = array("one","two","three");\n// $value will be "three" and array\'s value will now be array("one","two");\n$value = array_pop($arr);\n')),Object(a.b)("h2",{id:"shift"},"Shift"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 3 elements\n$arr = array("one","two","three");\n// $value will be "one" and array\'s value will now be array("two","three");\n$value = array_shift($arr);\n')),Object(a.b)("h2",{id:"unshift"},"Unshift"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'// create our array with 3 elements\n$arr = array("three","four","five");\n// $count will now be 5 and array will hold one - five\n$count = array_unshift($arr,"one","two");\n')),Object(a.b)("h2",{id:"example-basic-tree-implementation"},"Example: Basic Tree Implementation"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'<?php\n\nclass Tree {\n    function __construct($root = null) {\n        $this->root = $root;\n    }\n\n    public function bfs() {\n        // 1. shift val\n        // 2. if children, append to arr\n        // 3. append data to array to compare\n        if ($this->root == null) {\n            throw new Error("No tree root");\n        }\n\n        $arr = array($this->root);\n        $res = [];\n\n        while (count($arr) > 0) {\n            $x = array_shift($arr);\n            if ($x->children != null) {\n                $arr = array_merge($arr, $x->children);\n            }\n\n            array_push($res, $x->data);\n        }\n        return $res;\n    }\n\n    public function dfs() {\n        // shift from arr\n        // if children exist, unshift array\n        // add data to res array\n\n        $res = [];\n        $arr = array($this->root);\n\n        while (count($arr) > 0) {\n            $x = array_shift($arr);\n            if ($x->children != null) {\n                $arr = array_merge($x->children, $arr);\n            }\n\n            array_push($res, $x->data);\n        }\n\n        return $res;\n    }\n}\n\nclass Node {\n    function __construct($data = null, $children = null) {\n        $this->data = $data;\n        $this->children = $children;\n    }\n}\n')),Object(a.b)("h2",{id:"resources--extra-reading"},"Resources + Extra Reading"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"http://www.thecave.info/php-array-push-pop-shift-and-unshift/"}),"http://www.thecave.info/php-array-push-pop-shift-and-unshift/")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/PHP/PHP-Arrays.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-php-php-arrays-md-fd52975faa11758afc9a.js.map