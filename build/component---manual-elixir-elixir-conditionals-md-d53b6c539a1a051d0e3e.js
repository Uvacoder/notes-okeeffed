(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{PW7v:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Elixir/Elixir-Conditionals.md"}});var o={_frontmatter:r},s=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(s,l({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"elixir-conditionals"},"Elixir Conditionals"),Object(a.b)("h2",{id:"if"},"If"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> if String.valid?("Hello") do\n...>   "Valid string!"\n...> else\n...>   "Invalid string."\n...> end\n"Valid string!"\n\niex> if "a string value" do\n...>   "Truthy"\n...> end\n"Truthy"\n')),Object(a.b)("h2",{id:"unless"},"Unless"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> unless is_integer("hello") do\n...>   "Not an Int"\n...> end\n"Not an Int"\n')),Object(a.b)("h2",{id:"case"},"Case"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> case {:ok, "Hello World"} do\n...>   {:ok, result} -> result\n...>   {:error} -> "Uh oh!"\n...>   _ -> "Catch all"\n...> end\n"Hello World"\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"_")," is an important inclusion too:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> case :even do\n...>   :odd -> "Odd"\n...> end\n** (CaseClauseError) no case clause matching: :even\n\niex> case :even do\n...>   :odd -> "Odd"\n...>   _ -> "Not Odd"\n...> end\n"Not Odd"\n')),Object(a.b)("p",null,"With pinning:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),'iex> pie = 3.14\n 3.14\niex> case "cherry pie" do\n...>   ^pie -> "Not so tasty"\n...>   pie -> "I bet #{pie} is tasty"\n...> end\n"I bet cherry pie is tasty"\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Elixir/Elixir-Conditionals.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-elixir-elixir-conditionals-md-d53b6c539a1a051d0e3e.js.map