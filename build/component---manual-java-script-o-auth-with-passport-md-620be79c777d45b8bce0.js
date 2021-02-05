(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{"1lvt":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/JavaScript/O-Auth-With-Passport.md"}});var b={_frontmatter:s},l=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,o({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OAUTH AND PASSPORT FOR EXPRESS"),Object(r.b)("p",null,"/////////////////////////////////////////////////////////"),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"What is OAuth?"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"It is authorization, not authentication."),Object(r.b)("p",null,"Authorization is used for what you can do."),Object(r.b)("p",null,"You usually get tokens..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Access Token"),Object(r.b)("li",{parentName:"ul"},"Refresh Token")),Object(r.b)("p",null,"/",Object(r.b)("strong",{parentName:"p"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****"))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{}),"                    *\n")),Object(r.b)("ol",o({parentName:"li"},{start:2}),Object(r.b)("li",{parentName:"ol"},"Setting up Passport"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{}),"                    *\n")),Object(r.b)("strong",{parentName:"li"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},Object(r.b)("strong",{parentName:"strong"},"****")))))),"/")),Object(r.b)("p",null,"// THE SETUP STRATERGY"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Strategy"),Object(r.b)("li",{parentName:"ol"},"Create 'Application' on OAuth Provider"),Object(r.b)("li",{parentName:"ol"},"Configure Strategy"),Object(r.b)("li",{parentName:"ol"},"Create routes for the provider")),Object(r.b)("p",null,"// installing Github auth"),Object(r.b)("p",null,"npm install passport-github --save"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"from here you can register the application on Github in settings"),Object(r.b)("li",{parentName:"ul"},"grab tokens")),Object(r.b)("p",null,"|||||||||||||||||||||||||||||||||||||||||||||"),Object(r.b)("p",null,"npm install passport --save\nnpm install express-session --save"),Object(r.b)("p",null,"We'll use persistent session store with mongoDB to keep the login persistent"),Object(r.b)("p",null,"// in app.js"),Object(r.b)("p",null,"var passport = require('passport');\nvar GitHubStrategy = require('passport-github').Strategy;\nvar FacebookStrategy = require('passport-facebook').Strategy;\nvar session = require('express-session');\nvar MongoStore = require('connect-mongo')(session);"),Object(r.b)("p",null,"function generateOrFindUser (accessToken, refreshToken, profile, done) {\nUser.findOneAndUpdate({\nemail: profile.emails","[0]",".value\n}, {\nname: profile.displayName || profile.username,\nemail: profile.emails","[0]",".value,\nphoto: profile.photos","[0]",'.value\n}, {\nupsert: true\n},\ndone);\n} else {\nvar noEmailError = new Error("Your email privacy settings prevent you from signing into bookworm!");\ndone(noEmailError, null);\n}\n}'),Object(r.b)("p",null,'// config the strategy\npassport.use(new GitHubStrategy({\n// do not enter your actual ID and Key here!\nclientID: process.env.GITHUB_CLIENT_ID,\nclientSecret: process.env.GITHUB_CLIENT_SECRET,\ncallbackURL: "',Object(r.b)("a",o({parentName:"p"},{href:"http://localhost:3000/auth/github/return"}),"http://localhost:3000/auth/github/return"),'"\n}, generateOrFindUser));'),Object(r.b)("p",null,'passport.use(new FacebookStrategy({\n// do not enter your actual ID and Key here!\nclientID: process.env.FACEBOOK_APP_ID,\nclientSecret: process.env.FACEBOOK_APP_SECRET,\ncallbackURL: "',Object(r.b)("a",o({parentName:"p"},{href:"http://localhost:3000/auth/facebook/return%22"}),'http://localhost:3000/auth/facebook/return"'),",\nprofileFields: ","['id', 'displayName', 'photos', 'email']","\n}), generateOrFindUser);"),Object(r.b)("p",null,"passport.serializeUser(function (user, done) {\ndone(null, user._id);\n});"),Object(r.b)("p",null,"passport.deserializeUser(function(userId, done) {\nUser.findById(userId, done); // done is a callback function\n});"),Object(r.b)("p",null,"..."),Object(r.b)("p",null,"var auth = require('./routes/auth');"),Object(r.b)("p",null,"..."),Object(r.b)("p",null,"// after db connection\n// Session config for Passport and MongoDB"),Object(r.b)("p",null,'var sessionOptions = {\nsecret: "this is a super secret dadada",\nresave: true,\nsaveUninitialized: true,\nstore: new MongoStore({\nmongooseConnection: db\n})\n}'),Object(r.b)("p",null,"app.use(session(sessionOptions));"),Object(r.b)("p",null,"// Init Passport\napp.use(passport.initialize());"),Object(r.b)("p",null,"// Restore Session\napp.use(passport.session());"),Object(r.b)("p",null,"app.use('/auth', auth);"),Object(r.b)("p",null,"// in routes > auth.js"),Object(r.b)("p",null,"var express = require('express');\nvar router = express.Router();\nvar passport = require('passport');"),Object(r.b)("p",null,"// Get /auth/login/github"),Object(r.b)("p",null,"router.get('/login/github',\npassport.authenticate('github'));"),Object(r.b)("p",null,"// Get /auth/github/return"),Object(r.b)("p",null,"router.get('/github/return',\npassport.authenticate('github', {failedRedirect: '/'}),\nfunction(req, res) {\n//Succes Auth, redirect to page for now\nres.redirect('/profile');\n});"),Object(r.b)("p",null,"// Get /auth/login/facebook"),Object(r.b)("p",null,"router.get('/login/facebook',\npassport.authenticate('facebook', { scope: ",'["email"]',"}));"),Object(r.b)("p",null,"// Get /auth/facebook/return"),Object(r.b)("p",null,"router.get('/facebook/return',\npassport.authenticate('facebook', {failedRedirect: '/'}),\nfunction(req, res) {\n//Succes Auth, redirect to page for now\nres.redirect('/profile');\n});"),Object(r.b)("p",null,"// GET /auth/logout"),Object(r.b)("p",null,"router.get('/logout', function(req, res) {\nreq.logout();\nres.redirect('/');\n})"),Object(r.b)("p",null,"module.exports = router;"),Object(r.b)("p",null,"// to use vars in command line..."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GITHUB_CLIENT_ID=123432 GITHUB_CLIENT_SECRET=892u3rw9u ./bin/www")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/JavaScript/O-Auth-With-Passport.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-script-o-auth-with-passport-md-620be79c777d45b8bce0.js.map