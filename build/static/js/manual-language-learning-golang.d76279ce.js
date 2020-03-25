(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{"./manual/Language-Learning/Golang.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},o="wrapper";function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(o,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"golang"},"Golang"),Object(r.b)("h2",{id:"the-why-behind-the-language"},'The "why" behind the language?'),Object(r.b)("h3",{id:"quora-top-answer"},"Quora Top Answer"),Object(r.b)("p",null,'Google has two tremendous problems. One of them is compile time. Back in the 1980\u2019s, reasonable sized projects took hours to do a clean build. There were whole server farms dedicated to recompiling. You got a new "nightly build" and made modifications to that.'),Object(r.b)("p",null,"Google builds things that are so ridiculously huge that it\u2019s still like that in 2017. It takes 5 hours to rebuild chrome from scratch even on a big fat i7 system. The pain of compile time on these builds hurts so much that Google has invented build tools that separate the dependency analysis and compiling, just to gain a few per cent in build time using conventional languages. Go is designed for quick compilation without the need for dependency checking, so it addresses the build pain."),Object(r.b)("p",null,"Google\u2019s other problem is string processing. Google reads and analyzes a lot of web pages, which are text files. They do a lot of string manipulation, so it pays for this to be really efficient. Google built a rich library of string functions into Go, Garbage collecting makes strings in Go simple to think about, and efficient in ways some other string libraries are not (I\u2019m talking to you, C++ committee)."),Object(r.b)("p",null,"Go has good concurrency support, which is essential for a language designed after 2002, and for companies who have a million servers waiting to be spun up. But it\u2019s not breaking new ground in concurrency."),Object(r.b)("p",null,"Go = C + strings + garbage collection + concurrency. If you want to build really big programs to analyze the whole freakin\u2019 internet, Go would be a pretty good choice for you."),Object(r.b)("h3",{id:"from-rob-pike-one-of-gos-creators"},"From Rob Pike, one of Go's Creators"),Object(r.b)("p",null,"The Go programming language was conceived in late 2007 as an answer to some of the problems we were seeing developing software infrastructure at Google."),Object(r.b)("p",null,"The computing landscape today is almost unrelated to the environment in which the languages being used, mostly C++, Java, and Python, had been created. The problems introduced by multicore processors, networked systems, massive computation clusters, and the web programming model were being worked around rather than addressed head-on."),Object(r.b)("p",null,"Moreover, the scale has changed: today's server programs comprise tens of millions of lines of code, are worked on by hundreds or even thousands of programmers, and are updated literally every day. To make matters worse, build times, even on large compilation clusters, have stretched to many minutes, even hours."),Object(r.b)("p",null,"Go was designed and developed to make working in this environment more productive. Besides its better-known aspects such as built-in concurrency and garbage collection, Go's design considerations include rigorous dependency management, the adaptability of software architecture as systems grow, and robustness across the boundaries between components."),Object(r.b)("p",null,"References:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.quora.com/Why-did-Google-develop-Go"}),"Quora - Why Go?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://talks.golang.org/2012/splash.article"}),"Go at Google"))),Object(r.b)("h2",{id:"pros-and-cons-of-the-language"},"Pros and cons of the language?"),Object(r.b)("h3",{id:"pros"},"Pros"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ease of use: clean and accessible syntax for newcomers and not a lot of complex functions to learn. Similarities to those proficient in C++/C#."),Object(r.b)("li",{parentName:"ul"},"Great standard library."),Object(r.b)("li",{parentName:"ul"},"Strong security built in: strongly typed, garbage collected. Lack of generics means you need to be more diligent."),Object(r.b)("li",{parentName:"ul"},"Likely to stay part of Google's architecture for a good, long time."),Object(r.b)("li",{parentName:"ul"},"Smart documentation.")),Object(r.b)("h3",{id:"cons"},"Cons"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sometimes too simplistic: lack of versitility. Some of the hottest languages pride themselves on complexity."),Object(r.b)("li",{parentName:"ul"},"Still young: has a long was to go in terms of library support."),Object(r.b)("li",{parentName:"ul"},"No virtual machine: the reason so many popular languages are based of VMs is to offer more efficient code, meaning Go file size often dwarf those of competing programming languages. Can chew through RAM."),Object(r.b)("li",{parentName:"ul"},"Hasn't quite found the niche."),Object(r.b)("li",{parentName:"ul"},"No GUI library")),Object(r.b)("p",null,"References:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/should-i-go-the-pros-and-cons-of-using-go-programming-language-8c1daf711e46"}),"Hackernoon Pros and Cons of Go"))),Object(r.b)("h2",{id:"what-are-the-use-cases"},"What are the use cases?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DevOps: Go is being used within DevOps, for writing update scripts, server maintenance software, batch processing etc."),Object(r.b)("li",{parentName:"ul"},"WASM (WebAssembly) support is new and still experimental, but I see a bright future for Go in this category, due to Go\u2019s excellent support for UTF-8, concurrency and ease of use."),Object(r.b)("li",{parentName:"ul"},"Cryptocurrency. Go has been used for the Bitcoin Lightning Network and Ethereum blockchain."),Object(r.b)("li",{parentName:"ul"},"Command Line Tools. Examples: Snappy the package manager for Linux that is taking over from APT in certain distros, is developed in Go."),Object(r.b)("li",{parentName:"ul"},"Any type of API using REST, GraphQL or gRPC. Examples are abundant, but both Dropbox, Uber and GitHub are known to have built API\u2019s in Go."),Object(r.b)("li",{parentName:"ul"},"Any server-side service, including but not limited to, pub/sub servers and clients, caching mechanisms, integration layers, high-CPU utilisation jobs such as number crunching, statistics and cryptographic algorithms, jobs involving high levels of I/O and where there are extremely high requirements for simultaneous processing of thousands or millions of HTTP requests."),Object(r.b)("li",{parentName:"ul"},"High-performance scalable database implementations. Examples: CockroachDB, InfluxDB."),Object(r.b)("li",{parentName:"ul"},"Containerisation, ie. system-level software that interacts with the OS through its public API. Examples: Docker, Kubernetes.")),Object(r.b)("h2",{id:"testing--benchmarking"},"Testing / Benchmarking"),Object(r.b)("p",null,"The built-in ",Object(r.b)("inlineCode",{parentName:"p"},"testing")," package can be used for both testing and benchmarking."),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"go test")," to run tests and ",Object(r.b)("inlineCode",{parentName:"p"},"go test -v --bench . --benchmem")," for benchmarking."),Object(r.b)("p",null,"See below."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package greeting\n\nimport "testing"\n\n// Define a function named HelloWorld that takes no arguments,\n// and returns a string.\n// In other words, define a function with the following signature:\n// HelloWorld() string\n\nfunc TestHelloWorld(t *testing.T) {\n    expected := "Hello, World!"\n    if observed := HelloWorld(); observed != expected {\n        t.Fatalf("HelloWorld() = %v, want %v", observed, expected)\n    }\n}\n\n// BenchmarkHelloWorld() is a benchmarking function. These functions follow the\n// form `func BenchmarkXxx(*testing.B)` and can be used to test the performance\n// of your implementation. They may not be present in every exercise, but when\n// they are you can run them by including the `-bench` flag with the `go test`\n// command, like so: `go test -v --bench . --benchmem`\n//\n// You will see output similar to the following:\n//\n// BenchmarkHelloWorld      2000000000           0.46 ns/op\n//\n// This means that the loop ran 2000000000 times at a speed of 0.46 ns per loop.\n//\n// While benchmarking can be useful to compare different iterations of the same\n// exercise, keep in mind that others will run the same benchmarks on different\n// machines, with different specs, so the results from these benchmark tests may\n// vary.\nfunc BenchmarkHelloWorld(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        HelloWorld()\n    }\n}\n')),Object(r.b)("h2",{id:"popular-web-servers-for-the-language"},"Popular web servers for the language?"),Object(r.b)("p",null,"Go comes with a powerful inbuilt web server."),Object(r.b)("p",null,"References:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://getgophish.com/blog/post/2018-12-02-building-web-servers-in-go/"}),"https://getgophish.com/blog/post/2018-12-02-building-web-servers-in-go/"))),Object(r.b)("h2",{id:"hello-world"},"Hello, World!"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package greeting\n\n// HelloWorld adheres to the developer norm!\nfunc HelloWorld() string {\n    return "Hello, World!"\n}\n')),Object(r.b)("h2",{id:"documentation"},"Documentation"),Object(r.b)("p",null,"The commandline tool primnts plain test docs to standard output."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"go doc fmt Println")),Object(r.b)("h2",{id:"what-are-the-nuances-of-the-language"},"What are the nuances of the language?"),Object(r.b)("p",null,"TODO"),Object(r.b)("h2",{id:"how-does-package-management-work"},"How does package management work?"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/golang/go/wiki/PackagePublishing"}),"Official Guide"),"\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/17539407/golang-how-to-import-local-packages-without-gopath"}),"StackOverflow Response")),Object(r.b)("p",null,"First, host it online."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'import "github.com/kylelemons/go-gypsy/yaml"\n             ^         ^          ^     ^\n             |         |          |     `-- Package name\n             |         |          `-------- Project name\n             |         `------------------- Author\'s handle\n             `----------------------------- Hosting site\n')),Object(r.b)("p",null,"Go >= version 1 supports subdirectories of package repositories."),Object(r.b)("p",null,"The tl;dr:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"export GO111MODULE=on\ngo mod init\ngo mod vendor # if you have vendor/ folder, will automatically integrate\ngo build\n")),Object(r.b)("p",null,"Example generated ",Object(r.b)("inlineCode",{parentName:"p"},"go.mod")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"module github.com/okeeffed/module-data-structures-go-hello-world\n\ngo 1.12\n")),Object(r.b)("p",null,"Now you can run ",Object(r.b)("inlineCode",{parentName:"p"},"go doc module-data-structures-go-hello-world HelloWorld")," to check docs for that particular package."),Object(r.b)("h2",{id:"how-does-importing-work"},"How does importing work?"),Object(r.b)("p",null,"References from the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/golangspec/import-declarations-in-go-8de0fd3ae8ff"}),"Medium article"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\nimport (\n    "fmt"\n    "math"\n)\nfunc main() {\n    fmt.Println(math.Exp2(10))  // 1024\n}\n')),Object(r.b)("p",null,"Other examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'import log "github.com/sirupsen/logrus"\n')),Object(r.b)("p",null,"With custom package names:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'# github.com/mlowicki/main.go\npackage main\nimport (\n    "fmt"\n    "github.com/mlowicki/b"\n)\nfunc main() {\n    fmt.Println(c.B)\n}\n# github.com/mlowicki/b/b.go\npackage c\nvar B = "b"\n')),Object(r.b)("h2",{id:"how-does-logging-work"},"How does logging work?"),Object(r.b)("p",null,"Some examples ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://xahlee.info/golang/golang_print.html"}),"on Golang printing")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package logexample\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, world!")\n  fmt.Printf("there are %v apples\\n", 3)\n  fmt.Printf("Name is %v, Age is %v \\n", "john", 36)\n}\n')),Object(r.b)("p",null,"Useful placeholders:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Placeholder"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"%v"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"any value printed in human readable form")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"%#v"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"print in Golang syntax")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"%+v"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"if value is struct, also show field names")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"%T"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"type of the value")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"%%"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"a literaly percent sign")))),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"%T")," is useful when learning Golang."),Object(r.b)("h2",{id:"useful-linksarticles"},"Useful links/articles"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"http://xahlee.info/golang/golang_index.html"}),"Golang tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/the-beauty-of-go-98057e3f0a7d"}),"The Beauty of Go"))),Object(r.b)("h2",{id:"useful-tips-and-tricks"},"Useful tips and tricks"),Object(r.b)("p",null,"Below are useful things to know when using the language."),Object(r.b)("h2",{id:"read-file"},"Read File"),Object(r.b)("p",null,"Read whole file:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\nimport "io/ioutil"\n\nfunc main() {\n\n    // read whole file\n    myText, myErr := ioutil.ReadFile("/Users/x/filepath")\n\n    if myErr != nil {\n        panic(myErr)\n        // panic means abort\n    }\n\n    // print it. String converts it to string\n    fmt.Print(string(myText))\n\n}\n')),Object(r.b)("p",null,"Read first X bytes:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-golang"}),'package main\n\nimport "fmt"\nimport "os"\n\n// open file. read first 200 bytes. print it.\n\nvar filePath = "/Users/xah/web/xahlee_info/golang/golang_read_file.html"\n\nfunc getHeadBytes(path string, n int) []byte {\n\n    file, err := os.Open(path) // For read access.\n    if err != nil {\n        panic(err)\n    }\n\n    defer file.Close()\n\n    headBytes := make([]byte, n)\n    m, err := file.Read(headBytes)\n    if err != nil {\n        panic(err)\n    }\n\n    return headBytes[:m]\n}\n\nfunc main() {\n\n    fmt.Printf("%q\\n", getHeadBytes(filePath, 200))\n\n}\n')),Object(r.b)("h2",{id:"write-file"},"Write File"),Object(r.b)("p",null,"First way:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "io/ioutil"\n\nfunc main() {\n\n    mytext := []byte(`mountain and river`)\n\n    outpath := "xx69447.txt"\n\n    err := ioutil.WriteFile(outpath, mytext, 0644)\n\n    if err != nil {\n        panic(err)\n    }\n}\n')),Object(r.b)("p",null,"Second way:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\nimport "os"\n\nvar path = "xxtest.txt"\n\nvar contentX = "something"\n\nfunc main() {\n\n    var fll, err = os.Create(path)\n    if err != nil {\n        panic(err)\n    }\n    defer fll.Close()\n\n    var bytesWritten, errW = fll.WriteString(contentX)\n    if errW != nil {\n        panic(errW)\n    }\n\n    fmt.Printf("bytes written: %v\\n", bytesWritten)\n\n}\n')),Object(r.b)("h2",{id:"walk-through-directory"},"Walk through directory"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"filepath.Walk(dir_path, process_func)")," from package ",Object(r.b)("inlineCode",{parentName:"p"},"path/filepath")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "os"\n    "path/filepath"\n)\n\nvar myDir = "/Users/x/web/"\n\n// go thru a dir and print all file name and extension\n\nfunc main() {\n    // the function that handles each file or dir\n    var ff = func(pathX string, infoX os.FileInfo, errX error) error {\n\n        // first thing to do, check error. and decide what to do about it\n        if errX != nil {\n            fmt.Printf("error \u300c%v\u300d at a path \u300c%q\u300d\\n", errX, pathX)\n            return errX\n        }\n\n        fmt.Printf("pathX: %v\\n", pathX)\n\n        // find out if it\'s a dir or file, if file, print info\n        if infoX.IsDir() {\n            fmt.Printf("is dir.\\n")\n        } else {\n            fmt.Printf("  dir: \u300c%v\u300d\\n", filepath.Dir(pathX))\n            fmt.Printf("  file name \u300c%v\u300d\\n", infoX.Name())\n            fmt.Printf("  extenion: \u300c%v\u300d\\n", filepath.Ext(pathX))\n        }\n\n        return nil\n    }\n\n    err := filepath.Walk(myDir, ff)\n\n    if err != nil {\n        fmt.Printf("error walking the path %q: %v\\n", myDir, err)\n    }\n}\n')),Object(r.b)("h2",{id:"check-file-exists"},"Check file exists"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\nimport "os"\n\n// fileExist. check if a file exist\nfunc fileExist(path string) bool {\n    _, err := os.Stat(path)\n    if err == nil {\n        return true\n    }\n    return false\n}\n\nfunc main() {\n    fmt.Printf("%v\\n", fileExist("/Users/x/xyz.txt"))\n}\n')),Object(r.b)("h2",{id:"system-calls"},"System calls"),Object(r.b)("p",null,"To make a system call, use ",Object(r.b)("inlineCode",{parentName:"p"},'import "os/exec"')," and use ",Object(r.b)("inlineCode",{parentName:"p"},"var cmd = exec.Command(cmdName, arg1, arg2)"),"."),Object(r.b)("p",null,"You then have several choices how you want to run it. The main choices are:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Command"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Use"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cmd.Output()")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"run it, wait, get output")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cmd.Run()")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"run it, wait for it to finish")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cmd.Start()")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"run it, don't wait ",Object(r.b)("inlineCode",{parentName:"td"},"err = cmd.Wait()")," to get result")))),Object(r.b)("p",null,"If you need to change dir before running the command, use ",Object(r.b)("inlineCode",{parentName:"p"},"os.Chdir(path)"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\n// example of calling shell command\n\n// cd to a given dir\n// call ls -al\n// print its output\n\nimport "fmt"\nimport "os"\nimport "os/exec"\n\nfunc main() {\n\n    var dirToRun = "/Users/xah/web/"\n    var err = os.Chdir(dirToRun)\n    if err != nil {\n        panic(err)\n    }\n\n    var cmdName = "ls"\n\n    var cmd = exec.Command(cmdName, "-a", "-l")\n\n    output, err := cmd.Output()\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("%v\\n", string(output))\n}\n')),Object(r.b)("h2",{id:"defer"},"Defer"),Object(r.b)("p",null,Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://xahlee.info/golang/golang_defer.html"}),"Defer")," statement is a new flow control, not in other popular languages. ",Object(r.b)("inlineCode",{parentName:"p"},"defer function_name(args)"),"."),Object(r.b)("p",null,"When this is run, the args are evaluated, but the function call is not. The function is called right before the outer function exits."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc ff(x int) int {\n    fmt.Printf("ff called. arg is %v\\n", x)\n    return x\n}\n\nfunc main() {\n\n    var x = 3\n\n    fmt.Printf("main. x is %v\\n", x)\n\n    defer ff(x)\n\n    x = 4\n\n    fmt.Printf("main. x is %v\\n", x)\n\n}\n\n// main. x is 3\n// main. x is 4\n// ff called. arg is 3\n')),Object(r.b)("p",null,"Defer is used similar to \u201cfinally\u201d in other languages, to do some clean up."),Object(r.b)("p",null,"Usually, it's used right after the file opening call, to close a file."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport "fmt"\n\nfunc CopyFile(dstName, srcName string) (written int64, err error) {\n    src, err := os.Open(srcName)\n    if err != nil {\n        return\n    }\n    defer src.Close()\n\n    dst, err := os.Create(dstName)\n    if err != nil {\n        return\n    }\n    defer dst.Close()\n\n    return io.Copy(dst, src)\n}\n\n// 2018-08-26 code from\n// https://blog.golang.org/defer-panic-and-recover\n\nfunc main() {}\n')),Object(r.b)("h2",{id:"understanding-through-programs"},"Understanding Through Programs"),Object(r.b)("p",null,"[TODO]"),Object(r.b)("p",null,"Not all need to be done (pending what the language is useful for), but here are some useful ideas to get familiar with packages and testing for real world uses:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Webserver that takes and returns JSON"),Object(r.b)("li",{parentName:"ul"},"CLI tool that parses the markdown for this file and can be used as a helper"),Object(r.b)("li",{parentName:"ul"},"A file reader/writer that parses common file types")))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Language-Learning/Golang.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-language-learning-golang.101a1afd2417ec7a4a77.js.map