(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{"./manual/Kotlin/Kotlin-Lambdas.md":function(n,e,a){"use strict";a.r(e),a.d(e,"default",function(){return r});var t=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function r(n){var e=n.components,a=Object(t.a)(n,["components"]);return Object(l.b)(i,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kotlin-lambdas"},"Kotlin Lambdas"),Object(l.b)("p",null,"Also known as anonymous functions - name deriving from lambda calculus of Alonzo Church where all functions are anonymous."),Object(l.b)("p",null,"Also synonymous with closures."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"// declaration of a var that can hold a lambda\nvar multiplyLambda: (Int, Int) -> Int\n\nmultiplyLambda = { a: Int, b: Int -> Int\n  a*b\n}\n\nval lambdaResult = multiplyLambda(4, 2) // 8\n")),Object(l.b)("h2",{id:"shorthand-syntax"},"Shorthand Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"multiplyLambda = { a, b ->\n  a*b\n}\n\n// using it keyword for argument\nvar doubleLambda = { a: Int ->\n  2*a\n}\ndoubleLambda = { 2 * it }\n\n// in declaration\nval square: (Int) -> Int = { it * it }\n")),Object(l.b)("h2",{id:"lambdas-as-arguments"},"Lambdas As Arguments"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"fun operateOnNumbers(a: Int, b: Int, operation: (Int, Int) -> Int): Int {\n  val result = operation(a, b)\n  println(result)\n  return result\n}\n\n// in use\nval addLambda = { a: Int, b: Int ->\na+b }\noperateOnNumbers(4, 2, operation = addLambda) // 6\n\n// more usual\nfun addFunction(a: Int, b:Int) = a + b\noperateOnNumbers(4, 2, operation = ::addFunction) // 6\n\n// or even\noperateOnNumbers(4, 2, operation = { a: Int, b: Int ->\n  a+b\n})\n")),Object(l.b)("h2",{id:"lambdas-with-no-meaningful-return"},"Lambdas with no meaningful return"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'var unitLambda: () -> Unit = {\n  println("Kotlin Apprentice is awesome!")\n}\nunitLambda()\n')),Object(l.b)("p",null,"If you literally want no value returnedm you need to use the ",Object(l.b)("inlineCode",{parentName:"p"},"Nothing")," type:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"var nothingLambda: () -> Nothing = { throw NullPointerException() }\n")),Object(l.b)("h2",{id:"iterating-over-collections-with-lambdas"},"Iterating over collections with lambdas"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'val values = listOf(1, 2, 3, 4, 5, 6)\nvalues.forEach {\n  println("$it: ${it * it}")\n}\n// > 1: 1\n// > 2: 4\n// > 3: 9\n// > 4: 16\n// > 5: 25\n// > 6: 36\n')),Object(l.b)("p",null,"To filter some of these out:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'var prices = listOf(1.5, 10.0, 4.99, 2.30, 8.19)\nval largePrices = prices.filter {\n  it > 5.0\n}\n\n// the above function looks like so\npublic inline fun <T> Iterable<T>.filter(predicate: (T) -> Boolean):\nList<T>\n\nval userInput = listOf("0", "11", "haha", "42")\nval numbers = userInput.map {\n  it.toIntOrNull()\n}\nprintln(numbers) // > [0, 11, null, 42]\n\n// array [1,2,3,4]\nsum = prices.reduce { a, b ->\n  a + b\n}\nprintln(sum) // 10\n\n// similar but takes initial value\nvar sum = prices.fold(0.0) { a, b -> a + b }\n')))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Kotlin/Kotlin-Lambdas.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-kotlin-kotlin-lambdas.101a1afd2417ec7a4a77.js.map