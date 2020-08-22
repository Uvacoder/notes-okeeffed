(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{JWkD:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/PHP/PHP-Unit-Tests.md"}});var p={_frontmatter:i},o=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(o,s({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"php-unit-testing"},"PHP Unit Testing"),Object(a.b)("p",null,"This is simply a basic example of the layout."),Object(a.b)("p",null,"Ensure ",Object(a.b)("inlineCode",{parentName:"p"},"phpunit")," is downloaded and add it to your ",Object(a.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(a.b)("p",null,"From, here run ",Object(a.b)("inlineCode",{parentName:"p"},"phpunit.phar path/to/test.php"),"."),Object(a.b)("h2",{id:"basic-example"},"Basic example"),Object(a.b)("h3",{id:"anagram-function-to-test"},"Anagram function to test"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-php"}),'<?php\n// anagrams.php\n\nfunction anagrams($a, $b)\n{\n    $regA = preg_replace("/[^a-z]/i", "", $a);\n    $regB = preg_replace("/[^a-z]/i", "", $b);\n\n    $regA = strtolower($regA);\n    $splitA = str_split($regA);\n    sort($splitA);\n\n    $regB = strtolower($regB);\n    $splitB = str_split($regB);\n    sort($splitB);\n\n    $resA = implode("", $splitA);\n    $resB = implode("", $splitB);\n\n    return $resA == $resB;\n}\n')),Object(a.b)("h3",{id:"running-the-test"},"Running the test"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"phpunit.phar anagrams_test.php")),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-php"}),'<?php\n// anagrams_test.php\nrequire "anagrams.php";\n\nclass AnagramsTest extends PHPUnit\\Framework\\TestCase\n{\n    public function testAnagramsBasic()\n    {\n        $a = "tokyo";\n        $b = "kyoto";\n        $this->assertEquals(true, anagrams($a,$b));\n    }\n\n\n    public function testAnagramsWithCapitals()\n    {\n        // $this->markTestSkipped(\'Skipped.\');\n        $a = "Tokyo";\n        $b = "kyoto";\n        $this->assertEquals(true, anagrams($a,$b));\n    }\n\n    public function testAnagramsWithPunctuation()\n    {\n        // $this->markTestSkipped(\'Skipped.\');\n        $a = "To  35k 2@4yo";\n        $b = "kYoTo223!!";\n        $this->assertEquals(true, anagrams($a,$b));\n    }\n}\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/PHP/PHP-Unit-Tests.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-php-php-unit-tests-md-5c6ef23e9ea03346615b.js.map