(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{UMU0:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/S3-Lambda-Subdirectories.md"}});var i={_frontmatter:c},s=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"setting-up-a-lambdacloudfront-setup-to-fetch-subdirectories-in-s3"},"Setting up a Lambda/Cloudfront setup to fetch subdirectories in S3"),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://aws.amazon.com/blogs/compute/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/"}),"Useful blog guide")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1"}),"Serving CRA from subdirectories"))),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"1-s3-bucket"},"1. S3 Bucket"),Object(r.b)("p",null,"Set up a restricted S3 bucket. Within this bucket, have subdirectories that house their own index.html file."),Object(r.b)("h3",{id:"2-set-up-cloudfront"},"2. Set up CloudFront"),Object(r.b)("p",null,"Follow the permissions setup in the above article to know how to set up the correct event."),Object(r.b)("h3",{id:"3-this-is-the-setup-for-a-javascript-lambda-call"},"3. This is the setup for a JavaScript Lambda call."),Object(r.b)("p",null,"This must be done in a region that supports Lambda@next."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"'use strict';\nexports.handler = (event, context, callback) => {\n // Extract the request from the CloudFront event that is sent to Lambda@Edge\n var request = event.Records[0].cf.request;\n\n // Extract the URI from the request\n var olduri = request.uri;\n\n // Match any '/' that occurs at the end of a URI. Replace it with a default index\n var newuri = olduri.replace(/\\/$/, '/index.html');\n\n // Log the URI as received by CloudFront and the new URI to be used to fetch from origin\n console.log('Old URI: ' + olduri);\n console.log('New URI: ' + newuri);\n\n // Replace the received URI with the URI that includes the index page\n request.uri = newuri;\n\n // Return to CloudFront\n return callback(null, request);\n};\n")),Object(r.b)("h3",{id:"deploying-cra-app"},"Deploying CRA App"),Object(r.b)("h3",{id:"1-update-packagejson"},"1. Update package.json"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'"homepage": ".",\n')),Object(r.b)("h3",{id:"2-update-router"},"2. Update router"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"export const devRouter = () => (\n <Router history={browserHistory}>\n  <Route path={'/page-profile'} component={PageProfile} />\n  <Route path=\"*\" exact={true} component={PageHome} />\n </Router>\n);\n\nexport const prodRouter = () => (\n <Router history={browserHistory}>\n  <Route path={'/page-profile'} component={PageProfile} />\n  <Route path={'/'} component={PageHome} />\n  <Route path={'*'} exact={true} component={PageHome} />\n </Router>\n);\n\nexport const router = () =>\n process.env.NODE_ENV !== 'development' ? prodRouter() : devRouter();\n")),Object(r.b)("h3",{id:"3-update-routerpush-calls"},"3. Update router.push calls"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import Config from 'src/app.json';\nrouter.push(process.env.PUBLIC_URL + '/test');\n\n// In use\nfunction handleLink(e, d) {\n if (d.href[0] === '/') {\n  e.preventDefault();\n  const { router } = this.props;\n  router.push(Config.baseUrl + d.href);\n }\n}\n")),Object(r.b)("h3",{id:"4-set-a-baseurl-in-appjson"},"4. Set a baseUrl in app.json"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n "baseUrl": "/dato-cms-test"\n}\n')))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/S3-Lambda-Subdirectories.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-s-3-lambda-subdirectories-md-b43e28a725de2bc58dff.js.map