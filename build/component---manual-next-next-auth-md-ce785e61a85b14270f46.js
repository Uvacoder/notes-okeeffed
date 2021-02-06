(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{yDEX:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Next/Next-Auth.md"}});var s={_frontmatter:l},i=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nextjs.org/docs/getting-started"}),"Next.js - Getting Started")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://next-auth.js.org/providers/credentials"}),"Next Auth")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/"}),"Set up a GitHub OAuth Application")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://pagekite.net/"}),"Ngrok alternative - PageKite")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://hub.docker.com/r/mysql/mysql-server/"}),"Docker - mysql/mysql-server"))),Object(a.b)("h2",{id:"setting-up-mysql-with-docker"},"Setting up MySQL with Docker"),Object(a.b)("p",null,"This example demonstrates a setup and expects you to understand some basics behind Docker containers."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"docker pull mysql/mysql-server\ndocker run --name sql-test -e MYSQL_ROOT_PASSWORD=password -p 6000:3306 -d mysql/mysql-server:latest\n# confirm container running\ndocker ps\n")),Object(a.b)("p",null,"You should see something like the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),'CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                            PORTS                               NAMES\n30be83a35610        mysql/mysql-server:latest   "/entrypoint.sh mysq…"   6 seconds ago       Up 2 seconds (health: starting)   33060/tcp, 0.0.0.0:6000->3306/tcp   sql-test\n')),Object(a.b)("p",null,"We have the server port forwarding from 3306 on the container to 6000 for us to access on localhost."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),"# where 30be83a35610 is there CONTAINER ID\ndocker exec 30be83a35610 -it /bin/bash\n")),Object(a.b)("p",null,"This will take you into the Docker container shell, where we can login into MySQL."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),'mysql -u root -p\n# enter "password" when prompted\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can go straight into mysql from the docker exec, but I thought going the long way might be more fun for those playing around with containers.")),Object(a.b)("p",null,"Now we can create a database to use for this example."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sql"}),'create database next_auth;\nshow databases;\n-- you should now be able to see "next_auth"\n')),Object(a.b)("p",null,"In order to get things going, you may need to make some changes. I had to do the following."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sql"}),"UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='root';\nALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';\nFLUSH PRIVILEGES;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Using the root isn't a great idea, but this is simply for demonstration purposes and to get things up and running.")),Object(a.b)("p",null,"For here, you can ",Object(a.b)("inlineCode",{parentName:"p"},"exit")," the MySQL shell and run ",Object(a.b)("inlineCode",{parentName:"p"},"exit")," it again to leave the Docker container."),Object(a.b)("h3",{id:"setting-up-nextjs"},"Setting up Next.js"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"npx create-next-app\n")),Object(a.b)("p",null,"Fill out the defaults for it and get it loading."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn add next-auth mysql dotenv\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'We are using "dotenv" for loading a local ',Object(a.b)("inlineCode",{parentName:"p"},".env")," file for local development.")),Object(a.b)("p",null,"Here, we are just going to use ",Object(a.b)("a",r({parentName:"p"},{href:"https://next-auth.js.org/providers/github"}),"GitHub OAuth")," for logging in."),Object(a.b)("h2",{id:"setting-up-next-auth-in-the-application"},"Setting up Next Auth in the application"),Object(a.b)("p",null,"Create a file ",Object(a.b)("inlineCode",{parentName:"p"},"pages/api/auth/[...nextauth].js"),"."),Object(a.b)("p",null,"Add the following:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import NextAuth from 'next-auth';\nimport Providers from 'next-auth/providers';\n\nrequire('dotenv').config();\n\nconst options = {\n  site: process.env.SITE || 'http://localhost:3000',\n\n  // Configure one or more authentication providers\n  providers: [\n    Providers.GitHub({\n      clientId: process.env.GITHUB_ID,\n      clientSecret: process.env.GITHUB_SECRET,\n    }),\n  ],\n\n  // A database is optional, but required to persist accounts in a database\n  database: process.env.DATABASE_URL,\n};\n\nexport default (req, res) => NextAuth(req, res, options);\n")),Object(a.b)("p",null,"Create a page ",Object(a.b)("inlineCode",{parentName:"p"},"pages/index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { useSession } from 'next-auth/client';\n\nexport default () => {\n  const [session, loading] = useSession();\n\n  return (\n    <p>\n      {!session && (\n        <>\n          Not signed in <br />\n          <a href=\"/api/auth/signin\">Sign in</a>\n        </>\n      )}\n      {session && (\n        <>\n          Signed in as {session.user.email} <br />\n          <a href=\"/api/auth/signout\">Sign out</a>\n        </>\n      )}\n    </p>\n  );\n};\n")),Object(a.b)("p",null,"That is all we need to do for the application! We won't start running anything just yet"),Object(a.b)("h2",{id:"setting-up-ngrok"},"Setting up ngrok"),Object(a.b)("p",null,"We are using tunneling to forward our localhost address out to the big, bad world."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-s"}),"ngrok http 3000 # will forward 3000 out\n")),Object(a.b)("p",null,"Once you run that, you will get an address to use."),Object(a.b)("h2",{id:"setting-up-github-oauth"},"Setting up GitHub OAuth"),Object(a.b)("p",null,"Follow the guide on how to set up a ",Object(a.b)("a",r({parentName:"p"},{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/"}),"GitHub OAuth Application")),Object(a.b)("p",null,"We will need to grab both the ID and the token given back."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: For the authentication callback, you will need to keep the format ",Object(a.b)("inlineCode",{parentName:"p"},"{server}/api/auth/callback/{provider}"),". This will be the ngrok server address.")),Object(a.b)("h2",{id:"env-variables"},"Env Variables"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"GITHUB_ID=<from-github>\nGITHUB_SECRET=<from-github>\n# The MySQL database being forwarded from Docker,\n# where 'next_auth' is the database we created\nDATABASE_URL=\"mysql://root:password@127.0.0.1:6000/next_auth?synchronize=true\"\nSITE=<ngrok-server>\n")),Object(a.b)("h2",{id:"running-dev"},"Running Dev"),Object(a.b)("p",null,"Now is the fun part."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"yarn dev\n")),Object(a.b)("p",null,"If we head to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),", we will see the application, however we want to head to the ngrok address instead in our case."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Next/Next-Auth.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-next-next-auth-md-ce785e61a85b14270f46.js.map