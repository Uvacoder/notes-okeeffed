(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{whi1:function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return c})),t.d(r,"default",(function(){return u}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var n=t("/FXl"),a=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Pulling-From-Docker-Hub.md"}});var i={_frontmatter:c},l=a.a;function u(e){var r=e.components,t=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(n.b)(l,o({},i,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"pulling-from-docker-hub"},"Pulling from Docker Hub"),Object(n.b)("p",null,"Reference from here ",Object(n.b)("a",o({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"}),"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"),"."),Object(n.b)("h2",{id:"tldr"},"tl;dr"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'kubectl create secret docker-registry regcred --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>\n# Checking the credentials\nkubectl get secret regcred --output=yaml\nkubectl get secret regcred --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),Object(n.b)("p",null,"To create a pod using the creds, ensure the Pod has ",Object(n.b)("inlineCode",{parentName:"p"},"imagePullSecrets"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"# pods/private-reg-pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n    - name: private-reg-container\n      image: <your-private-image>\n  imagePullSecrets:\n    - name: regcred\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Pulling-From-Docker-Hub.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-pulling-from-docker-hub-md-a0941cdcb64e6b0eac95.js.map