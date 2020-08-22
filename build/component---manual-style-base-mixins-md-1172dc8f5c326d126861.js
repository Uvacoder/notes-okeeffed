(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{BPDB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var i=t("/FXl"),a=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Style/base-mixins.md"}});var r={_frontmatter:o},c=a.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(c,l({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"styles--base--mixins"},"Styles > Base > Mixins"),Object(i.b)("p",null,"The mixins file is the place to store all of the functional Sass mixins used throughout the project."),Object(i.b)("h2",{id:"inline-block-list"},"inline-block-list"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"// inline-block list\n@mixin inline-block-list($padding: false) {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    @include clearfix;\n\n    li {\n        list-style-type: none;\n        @include inline-block();\n        white-space: nowrap;\n        @if $padding {\n            padding: {\n                left: $padding;\n                right: $padding;\n            }\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"omega-reset"},"omega-reset"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin omega-reset($nth) {\n    &:nth-child(#{$nth}) {\n        margin-right: flex-gutter();\n    }\n    &:nth-child(#{$nth} + 1) {\n        clear: none;\n    }\n}\n")),Object(i.b)("h2",{id:"font-size"},"font-size"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin font-size($fontSize, $lineHeight: null) {\n    font-size: $fontSize;\n    font-size: rem($fontSize) / 0.625;\n\n    @if ($lineHeight) {\n        line-height: em($lineHeight, $fontSize);\n    } @else {\n        line-height: inherit;\n    }\n}\n")),Object(i.b)("h2",{id:"inline-block"},"inline-block"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"// inline-block for old browsers\n@mixin inline-block() {\n    display: inline-block;\n    *zoom: 1;\n    *display: inline;\n}\n")),Object(i.b)("h2",{id:"reset-box-model"},"reset-box-model"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin reset-box-model {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n")),Object(i.b)("h2",{id:"absolute-fill"},"absolute-fill"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin absolute-fill {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n")),Object(i.b)("h2",{id:"headings"},"headings"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin headings($from: 1, $to: 6) {\n    @for $i from $from through $to {\n        h#{$i} {\n            @content;\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"background-image"},"background-image"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin background-image($path) {\n    background-image: url(../img/#{$path}.png);\n    background-image: linear-gradient(transparent, transparent), url(../img/#{$path}.svg);\n}\n")),Object(i.b)("h2",{id:"reset-ul"},"reset-ul"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"/* Reset unordered list style */\n@mixin reset-ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n}\n")),Object(i.b)("h2",{id:"hide-text"},"hide-text"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin hide-text {\n    overflow: hidden;\n    text-indent: 101%;\n    white-space: nowrap;\n}\n")),Object(i.b)("h2",{id:"_neat-parse-media"},"_","neat-parse-media"),Object(i.b)("p",null,"Swaps neat 2.0 to desktop first"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),'@function _neat-parse-media($media) {\n    @if type-of($media) == number {\n        @return "only screen and (max-width: #{$media})";\n    } @else if type-of($media) == string {\n        @return "#{$media}";\n    }\n}\n')),Object(i.b)("h2",{id:"background-color"},"background-color"),Object(i.b)("p",null,"Set default background-color transition."),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin background-color$color, $lighten: false) {\n    background-color: $color;\n    transition: background-color 600ms ease-in;\n\n    &:hover,\n    &:active {\n        @if $lighten {\n            background-color: lighten($color, 30%);\n        } @else {\n            background-color: darken($color, 30%);\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"color"},"color"),Object(i.b)("pre",null,Object(i.b)("code",l({parentName:"pre"},{className:"language-css"}),"@mixin color($color, $lighten: false) {\n    color: $color;\n    transition: color 600ms ease-in;\n\n    &:hover,\n    &:active {\n        @if $lighten {\n            color: lighten($color, 30%);\n        } @else {\n            color: darken($color, 30%);\n        }\n    }\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Style/base-mixins.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-style-base-mixins-md-1172dc8f5c326d126861.js.map