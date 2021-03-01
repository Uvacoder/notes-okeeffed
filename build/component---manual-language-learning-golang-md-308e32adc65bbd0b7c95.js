(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{xKIO:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Language-Learning/Golang.md"}});var l={_frontmatter:i},s=r.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(s,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"golang"},"Golang"),Object(a.b)("h2",{id:"the-why-behind-the-language"},'The "why" behind the language?'),Object(a.b)("h3",{id:"quora-top-answer"},"Quora Top Answer"),Object(a.b)("p",null,'Google has two tremendous problems. One of them is compile time. Back in the 1980’s, reasonable sized projects took hours to do a clean build. There were whole server farms dedicated to recompiling. You got a new "nightly build" and made modifications to that.'),Object(a.b)("p",null,"Google builds things that are so ridiculously huge that it’s still like that in 2017. It takes 5 hours to rebuild chrome from scratch even on a big fat i7 system. The pain of compile time on these builds hurts so much that Google has invented build tools that separate the dependency analysis and compiling, just to gain a few per cent in build time using conventional languages. Go is designed for quick compilation without the need for dependency checking, so it addresses the build pain."),Object(a.b)("p",null,"Google’s other problem is string processing. Google reads and analyzes a lot of web pages, which are text files. They do a lot of string manipulation, so it pays for this to be really efficient. Google built a rich library of string functions into Go, Garbage collecting makes strings in Go simple to think about, and efficient in ways some other string libraries are not (I’m talking to you, C++ committee)."),Object(a.b)("p",null,"Go has good concurrency support, which is essential for a language designed after 2002, and for companies who have a million servers waiting to be spun up. But it’s not breaking new ground in concurrency."),Object(a.b)("p",null,"Go = C + strings + garbage collection + concurrency. If you want to build really big programs to analyze the whole freakin’ internet, Go would be a pretty good choice for you."),Object(a.b)("h3",{id:"from-rob-pike-one-of-gos-creators"},"From Rob Pike, one of Go's Creators"),Object(a.b)("p",null,"The Go programming language was conceived in late 2007 as an answer to some of the problems we were seeing developing software infrastructure at Google."),Object(a.b)("p",null,"The computing landscape today is almost unrelated to the environment in which the languages being used, mostly C++, Java, and Python, had been created. The problems introduced by multicore processors, networked systems, massive computation clusters, and the web programming model were being worked around rather than addressed head-on."),Object(a.b)("p",null,"Moreover, the scale has changed: today's server programs comprise tens of millions of lines of code, are worked on by hundreds or even thousands of programmers, and are updated literally every day. To make matters worse, build times, even on large compilation clusters, have stretched to many minutes, even hours."),Object(a.b)("p",null,"Go was designed and developed to make working in this environment more productive. Besides its better-known aspects such as built-in concurrency and garbage collection, Go's design considerations include rigorous dependency management, the adaptability of software architecture as systems grow, and robustness across the boundaries between components."),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.quora.com/Why-did-Google-develop-Go"}),"Quora - Why Go?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://talks.golang.org/2012/splash.article"}),"Go at Google"))),Object(a.b)("h2",{id:"pros-and-cons-of-the-language"},"Pros and cons of the language?"),Object(a.b)("h3",{id:"pros"},"Pros"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ease of use: clean and accessible syntax for newcomers and not a lot of complex functions to learn. Similarities to those proficient in C++/C#."),Object(a.b)("li",{parentName:"ul"},"Great standard library."),Object(a.b)("li",{parentName:"ul"},"Strong security built in: strongly typed, garbage collected. Lack of generics means you need to be more diligent."),Object(a.b)("li",{parentName:"ul"},"Likely to stay part of Google's architecture for a good, long time."),Object(a.b)("li",{parentName:"ul"},"Smart documentation.")),Object(a.b)("h3",{id:"cons"},"Cons"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sometimes too simplistic: lack of versitility. Some of the hottest languages pride themselves on complexity."),Object(a.b)("li",{parentName:"ul"},"Still young: has a long was to go in terms of library support."),Object(a.b)("li",{parentName:"ul"},"No virtual machine: the reason so many popular languages are based of VMs is to offer more efficient code, meaning Go file size often dwarf those of competing programming languages. Can chew through RAM."),Object(a.b)("li",{parentName:"ul"},"Hasn't quite found the niche."),Object(a.b)("li",{parentName:"ul"},"No GUI library")),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://hackernoon.com/should-i-go-the-pros-and-cons-of-using-go-programming-language-8c1daf711e46"}),"Hackernoon Pros and Cons of Go"))),Object(a.b)("h2",{id:"what-are-the-use-cases"},"What are the use cases?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DevOps: Go is being used within DevOps, for writing update scripts, server maintenance software, batch processing etc."),Object(a.b)("li",{parentName:"ul"},"WASM (WebAssembly) support is new and still experimental, but I see a bright future for Go in this category, due to Go’s excellent support for UTF-8, concurrency and ease of use."),Object(a.b)("li",{parentName:"ul"},"Cryptocurrency. Go has been used for the Bitcoin Lightning Network and Ethereum blockchain."),Object(a.b)("li",{parentName:"ul"},"Command Line Tools. Examples: Snappy the package manager for Linux that is taking over from APT in certain distros, is developed in Go."),Object(a.b)("li",{parentName:"ul"},"Any type of API using REST, GraphQL or gRPC. Examples are abundant, but both Dropbox, Uber and GitHub are known to have built API’s in Go."),Object(a.b)("li",{parentName:"ul"},"Any server-side service, including but not limited to, pub/sub servers and clients, caching mechanisms, integration layers, high-CPU utilisation jobs such as number crunching, statistics and cryptographic algorithms, jobs involving high levels of I/O and where there are extremely high requirements for simultaneous processing of thousands or millions of HTTP requests."),Object(a.b)("li",{parentName:"ul"},"High-performance scalable database implementations. Examples: CockroachDB, InfluxDB."),Object(a.b)("li",{parentName:"ul"},"Containerisation, ie. system-level software that interacts with the OS through its public API. Examples: Docker, Kubernetes.")),Object(a.b)("h2",{id:"testing--benchmarking"},"Testing / Benchmarking"),Object(a.b)("p",null,"The built-in ",Object(a.b)("inlineCode",{parentName:"p"},"testing")," package can be used for both testing and benchmarking."),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"go test")," to run tests and ",Object(a.b)("inlineCode",{parentName:"p"},"go test -v --bench . --benchmem")," for benchmarking."),Object(a.b)("p",null,"See below."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package greeting\n\nimport "testing"\n\n// Define a function named HelloWorld that takes no arguments,\n// and returns a string.\n// In other words, define a function with the following signature:\n// HelloWorld() string\n\nfunc TestHelloWorld(t *testing.T) {\n    expected := "Hello, World!"\n    if observed := HelloWorld(); observed != expected {\n        t.Fatalf("HelloWorld() = %v, want %v", observed, expected)\n    }\n}\n\n// BenchmarkHelloWorld() is a benchmarking function. These functions follow the\n// form `func BenchmarkXxx(*testing.B)` and can be used to test the performance\n// of your implementation. They may not be present in every exercise, but when\n// they are you can run them by including the `-bench` flag with the `go test`\n// command, like so: `go test -v --bench . --benchmem`\n//\n// You will see output similar to the following:\n//\n// BenchmarkHelloWorld      2000000000           0.46 ns/op\n//\n// This means that the loop ran 2000000000 times at a speed of 0.46 ns per loop.\n//\n// While benchmarking can be useful to compare different iterations of the same\n// exercise, keep in mind that others will run the same benchmarks on different\n// machines, with different specs, so the results from these benchmark tests may\n// vary.\nfunc BenchmarkHelloWorld(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        HelloWorld()\n    }\n}\n')),Object(a.b)("h2",{id:"popular-web-servers-for-the-language"},"Popular web servers for the language?"),Object(a.b)("p",null,"Go comes with a powerful inbuilt web server."),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://getgophish.com/blog/post/2018-12-02-building-web-servers-in-go/"}),"https://getgophish.com/blog/post/2018-12-02-building-web-servers-in-go/"))),Object(a.b)("h2",{id:"hello-world"},"Hello, World!"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package greeting\n\n// HelloWorld adheres to the developer norm!\nfunc HelloWorld() string {\n    return "Hello, World!"\n}\n')),Object(a.b)("h2",{id:"documentation"},"Documentation"),Object(a.b)("p",null,"The commandline tool primnts plain test docs to standard output."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"go doc fmt Println")),Object(a.b)("h2",{id:"what-are-the-nuances-of-the-language"},"What are the nuances of the language?"),Object(a.b)("p",null,"TODO"),Object(a.b)("h2",{id:"how-does-package-management-work"},"How does package management work?"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/golang/go/wiki/PackagePublishing"}),"Official Guide"),"\n",Object(a.b)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/17539407/golang-how-to-import-local-packages-without-gopath"}),"StackOverflow Response")),Object(a.b)("p",null,"First, host it online."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-text"}),'import "github.com/kylelemons/go-gypsy/yaml"\n             ^         ^          ^     ^\n             |         |          |     `-- Package name\n             |         |          `-------- Project name\n             |         `------------------- Author\'s handle\n             `----------------------------- Hosting site\n')),Object(a.b)("p",null,"Go >= version 1 supports subdirectories of package repositories."),Object(a.b)("p",null,"The tl;dr:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"export GO111MODULE=on\ngo mod init\ngo mod vendor # if you have vendor/ folder, will automatically integrate\ngo build\n")),Object(a.b)("p",null,"Example generated ",Object(a.b)("inlineCode",{parentName:"p"},"go.mod")," file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"module github.com/okeeffed/module-data-structures-go-hello-world\n\ngo 1.12\n")),Object(a.b)("p",null,"Now you can run ",Object(a.b)("inlineCode",{parentName:"p"},"go doc module-data-structures-go-hello-world HelloWorld")," to check docs for that particular package."),Object(a.b)("h2",{id:"how-does-importing-work"},"How does importing work?"),Object(a.b)("p",null,"References from the ",Object(a.b)("a",o({parentName:"p"},{href:"https://medium.com/golangspec/import-declarations-in-go-8de0fd3ae8ff"}),"Medium article"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\nimport (\n    "fmt"\n    "math"\n)\nfunc main() {\n    fmt.Println(math.Exp2(10))  // 1024\n}\n')),Object(a.b)("p",null,"Other examples:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'import log "github.com/sirupsen/logrus"\n')),Object(a.b)("p",null,"With custom package names:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'# github.com/mlowicki/main.go\npackage main\nimport (\n    "fmt"\n    "github.com/mlowicki/b"\n)\nfunc main() {\n    fmt.Println(c.B)\n}\n# github.com/mlowicki/b/b.go\npackage c\nvar B = "b"\n')),Object(a.b)("h2",{id:"how-does-logging-work"},"How does logging work?"),Object(a.b)("p",null,"Some examples ",Object(a.b)("a",o({parentName:"p"},{href:"http://xahlee.info/golang/golang_print.html"}),"on Golang printing")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package logexample\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, world!")\n  fmt.Printf("there are %v apples\\n", 3)\n  fmt.Printf("Name is %v, Age is %v \\n", "john", 36)\n}\n')),Object(a.b)("p",null,"Useful placeholders:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Placeholder"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"%v"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"any value printed in human readable form")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"%#v"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"print in Golang syntax")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"%+v"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"if value is struct, also show field names")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"%T"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"type of the value")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"%%"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"a literaly percent sign")))),Object(a.b)("p",null,"Note: ",Object(a.b)("inlineCode",{parentName:"p"},"%T")," is useful when learning Golang."),Object(a.b)("h2",{id:"useful-linksarticles"},"Useful links/articles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"http://xahlee.info/golang/golang_index.html"}),"Golang tutorial")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://hackernoon.com/the-beauty-of-go-98057e3f0a7d"}),"The Beauty of Go"))),Object(a.b)("h2",{id:"useful-tips-and-tricks"},"Useful tips and tricks"),Object(a.b)("p",null,"Below are useful things to know when using the language."),Object(a.b)("h2",{id:"read-file"},"Read File"),Object(a.b)("p",null,"Read whole file:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\nimport "io/ioutil"\n\nfunc main() {\n\n    // read whole file\n    myText, myErr := ioutil.ReadFile("/Users/x/filepath")\n\n    if myErr != nil {\n        panic(myErr)\n        // panic means abort\n    }\n\n    // print it. String converts it to string\n    fmt.Print(string(myText))\n\n}\n')),Object(a.b)("p",null,"Read first X bytes:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\nimport "os"\n\n// open file. read first 200 bytes. print it.\n\nvar filePath = "/Users/xah/web/xahlee_info/golang/golang_read_file.html"\n\nfunc getHeadBytes(path string, n int) []byte {\n\n    file, err := os.Open(path) // For read access.\n    if err != nil {\n        panic(err)\n    }\n\n    defer file.Close()\n\n    headBytes := make([]byte, n)\n    m, err := file.Read(headBytes)\n    if err != nil {\n        panic(err)\n    }\n\n    return headBytes[:m]\n}\n\nfunc main() {\n\n    fmt.Printf("%q\\n", getHeadBytes(filePath, 200))\n\n}\n')),Object(a.b)("h2",{id:"write-file"},"Write File"),Object(a.b)("p",null,"First way:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "io/ioutil"\n\nfunc main() {\n\n    mytext := []byte(`mountain and river`)\n\n    outpath := "xx69447.txt"\n\n    err := ioutil.WriteFile(outpath, mytext, 0644)\n\n    if err != nil {\n        panic(err)\n    }\n}\n')),Object(a.b)("p",null,"Second way:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\nimport "os"\n\nvar path = "xxtest.txt"\n\nvar contentX = "something"\n\nfunc main() {\n\n    var fll, err = os.Create(path)\n    if err != nil {\n        panic(err)\n    }\n    defer fll.Close()\n\n    var bytesWritten, errW = fll.WriteString(contentX)\n    if errW != nil {\n        panic(errW)\n    }\n\n    fmt.Printf("bytes written: %v\\n", bytesWritten)\n\n}\n')),Object(a.b)("h2",{id:"walk-through-directory"},"Walk through directory"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"filepath.Walk(dir_path, process_func)")," from package ",Object(a.b)("inlineCode",{parentName:"p"},"path/filepath")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "os"\n    "path/filepath"\n)\n\nvar myDir = "/Users/x/web/"\n\n// go thru a dir and print all file name and extension\n\nfunc main() {\n    // the function that handles each file or dir\n    var ff = func(pathX string, infoX os.FileInfo, errX error) error {\n\n        // first thing to do, check error. and decide what to do about it\n        if errX != nil {\n            fmt.Printf("error 「%v」 at a path 「%q」\\n", errX, pathX)\n            return errX\n        }\n\n        fmt.Printf("pathX: %v\\n", pathX)\n\n        // find out if it\'s a dir or file, if file, print info\n        if infoX.IsDir() {\n            fmt.Printf("is dir.\\n")\n        } else {\n            fmt.Printf("  dir: 「%v」\\n", filepath.Dir(pathX))\n            fmt.Printf("  file name 「%v」\\n", infoX.Name())\n            fmt.Printf("  extenion: 「%v」\\n", filepath.Ext(pathX))\n        }\n\n        return nil\n    }\n\n    err := filepath.Walk(myDir, ff)\n\n    if err != nil {\n        fmt.Printf("error walking the path %q: %v\\n", myDir, err)\n    }\n}\n')),Object(a.b)("h2",{id:"check-file-exists"},"Check file exists"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\nimport "os"\n\n// fileExist. check if a file exist\nfunc fileExist(path string) bool {\n    _, err := os.Stat(path)\n    if err == nil {\n        return true\n    }\n    return false\n}\n\nfunc main() {\n    fmt.Printf("%v\\n", fileExist("/Users/x/xyz.txt"))\n}\n')),Object(a.b)("h2",{id:"system-calls"},"System calls"),Object(a.b)("p",null,"To make a system call, use ",Object(a.b)("inlineCode",{parentName:"p"},'import "os/exec"')," and use ",Object(a.b)("inlineCode",{parentName:"p"},"var cmd = exec.Command(cmdName, arg1, arg2)"),"."),Object(a.b)("p",null,"You then have several choices how you want to run it. The main choices are:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Use"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"cmd.Output()")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"run it, wait, get output")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"cmd.Run()")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"run it, wait for it to finish")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"cmd.Start()")),Object(a.b)("td",o({parentName:"tr"},{align:null}),"run it, don't wait ",Object(a.b)("inlineCode",{parentName:"td"},"err = cmd.Wait()")," to get result")))),Object(a.b)("p",null,"If you need to change dir before running the command, use ",Object(a.b)("inlineCode",{parentName:"p"},"os.Chdir(path)"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\n// example of calling shell command\n\n// cd to a given dir\n// call ls -al\n// print its output\n\nimport "fmt"\nimport "os"\nimport "os/exec"\n\nfunc main() {\n\n    var dirToRun = "/Users/xah/web/"\n    var err = os.Chdir(dirToRun)\n    if err != nil {\n        panic(err)\n    }\n\n    var cmdName = "ls"\n\n    var cmd = exec.Command(cmdName, "-a", "-l")\n\n    output, err := cmd.Output()\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("%v\\n", string(output))\n}\n')),Object(a.b)("h2",{id:"defer"},"Defer"),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"http://xahlee.info/golang/golang_defer.html"}),"Defer")," statement is a new flow control, not in other popular languages. ",Object(a.b)("inlineCode",{parentName:"p"},"defer function_name(args)"),"."),Object(a.b)("p",null,"When this is run, the args are evaluated, but the function call is not. The function is called right before the outer function exits."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc ff(x int) int {\n    fmt.Printf("ff called. arg is %v\\n", x)\n    return x\n}\n\nfunc main() {\n\n    var x = 3\n\n    fmt.Printf("main. x is %v\\n", x)\n\n    defer ff(x)\n\n    x = 4\n\n    fmt.Printf("main. x is %v\\n", x)\n\n}\n\n// main. x is 3\n// main. x is 4\n// ff called. arg is 3\n')),Object(a.b)("p",null,"Defer is used similar to “finally” in other languages, to do some clean up."),Object(a.b)("p",null,"Usually, it's used right after the file opening call, to close a file."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc CopyFile(dstName, srcName string) (written int64, err error) {\n    src, err := os.Open(srcName)\n    if err != nil {\n        return\n    }\n    defer src.Close()\n\n    dst, err := os.Create(dstName)\n    if err != nil {\n        return\n    }\n    defer dst.Close()\n\n    return io.Copy(dst, src)\n}\n\n// 2018-08-26 code from\n// https://blog.golang.org/defer-panic-and-recover\n\nfunc main() {}\n')),Object(a.b)("h2",{id:"understanding-through-programs"},"Understanding Through Programs"),Object(a.b)("p",null,"[TODO]"),Object(a.b)("p",null,"Not all need to be done (pending what the language is useful for), but here are some useful ideas to get familiar with packages and testing for real world uses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Webserver that takes and returns JSON"),Object(a.b)("li",{parentName:"ul"},"CLI tool that parses the markdown for this file and can be used as a helper"),Object(a.b)("li",{parentName:"ul"},"A file reader/writer that parses common file types")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Language-Learning/Golang.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-language-learning-golang-md-308e32adc65bbd0b7c95.js.map