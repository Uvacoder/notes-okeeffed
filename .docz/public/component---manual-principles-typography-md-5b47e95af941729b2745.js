(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{vGnY:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Principles/Typography.md"}});var l={_frontmatter:s},i=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(i,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"fonts-cli"},"Fonts CLI"),Object(o.b)("p",null,"This tool is a wrapper to help download/rename fonts to fit with the font naming conventions."),Object(o.b)("h2",{id:"conventions"},"Conventions"),Object(o.b)("p",null,"For naming files, ensure that names are in lowercase format and that the numerals are replaced with common weight names (the renaming can be done with code)."),Object(o.b)("p",null,"We keep things lower case for purposes of serving on web, and replacing the numerals with the common font name is just an addition."),Object(o.b)("p",null,"To see the conventional name for font weights, ",Object(o.b)("a",a({parentName:"p"},{href:"https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e"}),"Mozilla has a reference here.")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",a({parentName:"tr"},{align:null}),"Example name"),Object(o.b)("th",a({parentName:"tr"},{align:null}),"After renaming"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",a({parentName:"tr"},{align:null}),"SourceSansPro-200.ttf"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"source-sans-pro-extra-light.ttf")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",a({parentName:"tr"},{align:null}),"SourceSansPro-200italic.ttf"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"source-sans-pro-extra-light-italic.ttf")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",a({parentName:"tr"},{align:null}),"SourceSansPro-regular.ttf"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"source-sans-pro-regular.ttf")))),Object(o.b)("h2",{id:"renaming"},"Renaming"),Object(o.b)("p",null,"Running the rename function will find the path of the fonts and return it in the condition we require for the convention."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const oldNames = [\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-200.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-200italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-300.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-300italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-600.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-600italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-700.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-700italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-900.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-900italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-italic.ttf',\n  '/Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/SourceSansPro-regular.ttf'\n];\n\n/*\n    // ! after renaming oldNames through function\n\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-extra-light.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-extra-light-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-light.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-light-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-semi-bold.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-semi-bold-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-bold.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-bold-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-black.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-black-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-italic.ttf\n    /Users/okeeffe_d/Project-Imposter/hello-gfi/fonts/source-sans-pro-regular.ttf\n*/\n")),Object(o.b)("p",null,"You can use something like the following to do this:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const fs = require('fs-extra');\nconst cwd = process.cwd();\nconst recursive = require('recursive-readdir');\nconst kebabCase = require('lodash.kebabcase');\n\n/**\n * Replace names of fonts found within directory\n * with naming convention.\n *\n */\nconst updateFontNames = async() => {\n    /**\n     * ! Replace numeral with comment name - hack job.\n     *\n     * @param {string} name Name of the font to update\n     */\n    const commentWeightName = name => {\n        name = name.replace('100', 'thin');\n        name = name.replace('200', 'extra-light');\n        name = name.replace('300', 'light');\n        name = name.replace('400', 'normal');\n        name = name.replace('500', 'medium');\n        name = name.replace('600', 'semi-bold');\n        name = name.replace('700', 'bold');\n        name = name.replace('800', 'extra-bold');\n        name = name.replace('900', 'black');\n        return name;\n    }\n\n    const fontFiles = await recursive(cwd, ['node_modules', '!*.ttf']);\n    for (const fontPath of fontFiles) {\n        try {\n            const fontDirArr = fontPath.split('/');\n            const fontNameFull = fontDirArr.pop();\n            const font = fontNameFull.replace('.ttf', '');\n            const fontDir = fontDirArr.join('/');\n            let kebabFontName = kebabCase(font);\n            const newFontName = commentWeightName(kebabFontName);\n            const outputFilePath = fontDir + '/' + newFontName + '.ttf';\n            fs.moveSync(fontPath, outputFilePath, {overwrite: true});\n        } catch (err) {\n            console.error(err);\n        }\n    }\n};\n")),Object(o.b)("h2",{id:"convention-usage-for-web"},"Convention usage for Web"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-scss"}),"/* open sans - light */\n@font-face {\n    font-family: 'open-sans-regular';\n    font-style: normal;\n    font-weight: 300;\n    // local() just checks for local files first\n    src: local('OpenSans Regular'), local('OpenSans-Regular'),\n        url('/path/to/fonts/open-sans-regular.ttf') format('truetype'); /* Safari, Android, iOS */\n}\n\n// Font mixins\n@mixin f-opensans-regular {\n    font: {\n        family: 'open-sans-regular', sans-serif;\n    }\n}\n\n// optional - flexible usage\n@mixin f-primary-regular {\n    // option a)\n    @include f-opensans-regular;\n    // option b) - don't include the above mixin for this\n    font: {\n        family: 'open-sans-regular', sans-serif;\n    }\n}\n\n// usage for standard base class\np,\nli {\n    @include f-primary-regular;\n    font-size: 1.5rem;\n    line-height: 1.4;\n    margin-bottom: 10px;\n}\n")),Object(o.b)("h2",{id:"convention-usage-for-react-native-not-expo"},"Convention usage for React Native (not Expo)"),Object(o.b)("p",null,"For React Native, fonts MUST be kept at the root in ",Object(o.b)("inlineCode",{parentName:"p"},"assets/fonts"),"."),Object(o.b)("p",null,"Using the convention here can be a little different. You need to use the full name of the font which can be found on Font Book (even when refencing the font file)."),Object(o.b)("p",null,Object(o.b)("a",a({parentName:"p"},{href:"https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e"}),"Check here for more information on what to do.")),Object(o.b)("h2",{id:"convention-usage-for-expo"},"Convention usage for Expo"),Object(o.b)("p",null,"For React Native, fonts MUST be kept at the root in ",Object(o.b)("inlineCode",{parentName:"p"},"assets/fonts"),"."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { Font } from 'expo';\n\nexport default class App extends React.Component {\n  componentDidMount() {\n    Font.loadAsync({\n      'open-sans-regular': require('./assets/fonts/open-sans-regular.ttf'),\n    });\n  }\n\n  // ...\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Principles/Typography.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-principles-typography-md-5b47e95af941729b2745.js.map