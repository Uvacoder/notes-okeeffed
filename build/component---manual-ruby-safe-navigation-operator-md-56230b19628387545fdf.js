(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{Zn1G:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return s})),a.d(n,"default",(function(){return l}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var i=a("/FXl"),r=a("TjRS");a("aD51");function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Safe-Navigation-Operator.md"}});var o={_frontmatter:s},b=r.a;function l(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(i.b)(b,t({},o,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"safe-navigation-operator"},"Safe Navigation Operator"),Object(i.b)("p",null,"Looking through the docs:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),'REGEX = /(ruby) is (\\w+)/i\n"Ruby is awesome!".match(REGEX).values_at(1, 2)\n# => ["Ruby", "awesome"]\n"Python is fascinating!".match(REGEX).values_at(1, 2)\n# NoMethodError: undefined method `values_at\' for nil:NilClass\n"Python is fascinating!".match(REGEX)&.values_at(1, 2)\n# => nil\n')),Object(i.b)("p",null,"It is necessary in longer chained calls to continue to use the safety operator:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),"\"Python is fascinating!\".match(REGEX)&.values_at(1, 2).join(' - ')\n# NoMethodError: undefined method `join' for nil:NilClass\n\"Python is fascinating!\".match(REGEX)&.values_at(1, 2)&.join(' - ')\n# => nil\n")),Object(i.b)("p",null,"It allows you to help with safety checking:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),"irb(main):035:0> hash = {:a => { :b => {:c => 2 } } }\n=> {:a=>{:b=>{:c=>2}}}\nirb(main):036:0> hash[:a] && hash[:a][:b] && hash[:a][:b][:c]\n=> 2\nirb(main):037:0> hash[:a] && hash[:a][:b] && hash[:a][:b][:d]\n=> nil\n# the above two equate to the following two\nirb(main):038:0> hash&.[](:a)&.[](:b)&.[](:c)\n=> 2\nirb(main):039:0> hash&.[](:a)&.[](:b)&.[](:d)\n=> nil\n# changing up the chain\nirb(main):040:0> hash[:a] && hash[:a][:d] && hash[:a][:d][:c]\n=> nil\n# same as\nirb(main):041:0> hash&.[](:a)&.[](:d)&.[](:c)\n=> nil\n")),Object(i.b)("p",null,"There is a prerequisite you need to know about accessing a hash value in Ruby to help with undersanding the ",Object(i.b)("inlineCode",{parentName:"p"},"&.[](:symbol)")," syntax."),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),"irb(main):014:0> deep_hash = {:one => {:two => {:three => true } } }\n=> {:one=>{:two=>{:three=>true}}}\n# This here\nirb(main):015:0> deep_hash[:one][:two][:three]\n=> true\n# Is equivalent to this\nirb(main):016:0> deep_hash.[](:one).[](:two).[](:three)\n=> true\n")),Object(i.b)("p",null,"Usage with Hash:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),"irb(main):021:0> a = { :b => { :c => 3 } }\n=> {:b=>{:c=>3}}\nirb(main):024:0> a[:b]&.[](:c)\n=> 3\nirb(main):025:0> a[:c]&.[](:c)\n=> nil\nirb(main):026:0> a[:c][:c]\nTraceback (most recent call last):\n        4: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `<main>'\n        3: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `load'\n        2: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/lib/ruby/gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>'\n        1: from (irb):26\nNoMethodError (undefined method `[]' for nil:NilClass)\n")),Object(i.b)("p",null,"It cannot be used with a struct property. Usage with Struct:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),'irb(main):001:0> Person = Struct.new(:details)\n=> Person\nirb(main):003:0> person_a = Person.new({:name => "Dennis", :city => "Cremorne"})\n=> #<struct Person details={:name=>"Dennis", :city=>"Cremorne"}>\nirb(main):004:0> person_a[:details]&.[](:name)\n=> "Dennis"\nirb(main):005:0> person_a[:incorrect]&.[](:name)\nTraceback (most recent call last):\n        5: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `<main>\'\n        4: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `load\'\n        3: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/lib/ruby/gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>\'\n        2: from (irb):5\n        1: from (irb):5:in `[]\'\nNameError (no member \'incorrect\' in struct)\n')),Object(i.b)("p",null,"It can, however, be used in a deep hash assigned to the value:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),'irb(main):001:0> Person = Struct.new(:details)\n=> Person\nirb(main):007:0>  person_b = Person.new({:meta => {:name => "Dennis", :city => "Cremorne"}})\n=> #<struct Person details={:meta=>{:name=>"Dennis", :city=>"Cremorne"}}>\nirb(main):008:0> person_b.details&.[](:meta).[](:name)\n=> "Dennis"\nirb(main):010:0> person_b.details&.[](:incorrect)\n=> nil\nirb(main):011:0> person_b.details&.[](:incorrect)&.[](:name)\n=> nil\n# When not using the safe navigation operator for the last property\nirb(main):009:0> person_b.details&.[](:incorrect).[](:name)\nTraceback (most recent call last):\n        4: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `<main>\'\n        3: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `load\'\n        2: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/lib/ruby/gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>\'\n        1: from (irb):9\nNoMethodError (undefined method `[]\' for nil:NilClass)\n')),Object(i.b)("p",null,"Finally, we can see it in action with classes:"),Object(i.b)("pre",null,Object(i.b)("code",t({parentName:"pre"},{className:"language-rb"}),'irb(main):009:0> class Person\nirb(main):010:1> def initialize(meta)\nirb(main):011:2> @meta = meta\nirb(main):012:2> end\nirb(main):013:1> def meta\nirb(main):014:2> #meta\nirb(main):015:2> @meta\nirb(main):016:2> end\nirb(main):017:1> end\n=> :meta\nirb(main):018:0> Dennis = Person.new({:a => { :b => \'Hello!\' } })\n=> #<Person:0x00007fad170c11f8 @meta={:a=>{:b=>"Hello!"}}>\nirb(main):019:0> Dennis.meta\n=> {:a=>{:b=>"Hello!"}}\nirb(main):020:0> Dennis.meta&.[](:a)&.[](:b)\n=> "Hello!"\nirb(main):021:0> Dennis.meta&.[](:c)\n=> nil\nirb(main):022:0> Dennis.meta[:a][:b]\n=> "Hello!"\n# does not work with undefined methods\nirb(main):023:0> Dennis&.not_real\nTraceback (most recent call last):\n        4: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `<main>\'\n        3: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/bin/irb:23:in `load\'\n        2: from /Users/dennis.okeeffe/.asdf/installs/ruby/2.6.2/lib/ruby/gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>\'\n        1: from (irb):23\nNoMethodError (undefined method `not_real\' for #<Person:0x00007fad170c11f8 @meta={:a=>{:b=>"Hello!"}}>)\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Safe-Navigation-Operator.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-safe-navigation-operator-md-56230b19628387545fdf.js.map