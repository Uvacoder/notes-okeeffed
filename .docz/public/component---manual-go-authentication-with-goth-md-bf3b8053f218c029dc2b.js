(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{Aw2G:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return h}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Go/Authentication-With-Goth.md"}});var s={_frontmatter:a},c=o.a;function h(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["components"]);return Object(r.b)(c,i({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"authentication-with-goth"},"Authentication with Goth"),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",i({parentName:"li"},{href:"https://github.com/markbates/goth/blob/master/examples/main.go"}),"Auth"))),Object(r.b)("h2",{id:"example-with-github"},"Example with GitHub"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "html/template"\n    "net/http"\n    "os"\n\n    "sort"\n\n  "log"\n  "github.com/joho/godotenv"\n\n  "github.com/gin-gonic/gin"\n\n    "github.com/markbates/goth"\n    "github.com/markbates/goth/gothic"\n    "github.com/markbates/goth/providers/github"\n)\n\nfunc main() {\n    goth.UseProviders(\n        github.New(os.Getenv("GITHUB_KEY"), os.Getenv("GITHUB_SECRET"), "http://localhost:3000/auth/github/callback"),\n    )\n\n    // OpenID Connect is based on OpenID Connect Auto Discovery URL (https://openid.net/specs/openid-connect-discovery-1_0-17.html)\n    // because the OpenID Connect provider initialize it self in the New(), it can return an error which should be handled or ignored\n    // ignore the error for now\n    openidConnect, _ := openidConnect.New(os.Getenv("OPENID_CONNECT_KEY"), os.Getenv("OPENID_CONNECT_SECRET"), "http://localhost:3000/auth/openid-connect/callback", os.Getenv("OPENID_CONNECT_DISCOVERY_URL"))\n    if openidConnect != nil {\n        goth.UseProviders(openidConnect)\n    }\n\n    m := make(map[string]string)\n    m["github"] = "Github"\n\n    var keys []string\n    for k := range m {\n        keys = append(keys, k)\n    }\n    sort.Strings(keys)\n\n    providerIndex := &ProviderIndex{Providers: keys, ProvidersMap: m}\n\n    // load .env file\n  err := godotenv.Load()\n  if err != nil {\n    log.Fatal("Error loading .env file")\n  }\n\n  // set up server\n  r := gin.Default()\n    r.GET("/auth/{provider}/callback", func(c *gin.Context) {\n\n        user, err := gothic.CompleteUserAuth(res, req)\n        if err != nil {\n            fmt.Fprintln(res, err)\n            return\n    }\n\n        c.JSON(200, gin.H{\n        user\n    })\n    })\n\n    r.GET("/logout/{provider}", func(res http.ResponseWriter, req *http.Request) {\n        gothic.Logout(res, req)\n        c.JSON(200, gin.H{\n      "success": true\n    })\n    })\n\n    r.GET("/auth/{provider}", func(res http.ResponseWriter, req *http.Request) {\n        // try to get the user without re-authenticating\n        if gothUser, err := gothic.CompleteUserAuth(res, req); err == nil {\n            c.JSON(200, gin.H{\n        gothUser\n      })\n        } else {\n            gothic.BeginAuthHandler(res, req)\n        }\n    })\n\n\n    log.Println("listening on localhost:8080")\n    r.Run(":8080")\n}\n\ntype ProviderIndex struct {\n    Providers    []string\n    ProvidersMap map[string]string\n}\n')))}h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Go/Authentication-With-Goth.md"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-go-authentication-with-goth-md-bf3b8053f218c029dc2b.js.map