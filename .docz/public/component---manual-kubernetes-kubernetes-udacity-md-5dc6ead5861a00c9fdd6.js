(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{CCqN:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Kubernetes-Udacity.md"}});var r={_frontmatter:l},s=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kubernetes-udacity-course"},"Kubernetes Udacity Course"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#kubernetes-udacity-course"}),"Kubernetes Udacity Course"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#introduction-to-microservices"}),"Introduction to Microservices"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#the-evolution-of-applications"}),"The Evolution of Applications")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#microservices"}),"Microservices")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#the-app-on-google-cloud"}),"The app on Google Cloud")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#12-factor-apps"}),"12 factor apps")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#refactor-to-msa"}),"Refactor to MSA")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#json-web-tokens"}),"JSON Web Tokens")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#lesson-2-building-the-containers-with-docker"}),"Lesson 2: Building the Containers with Docker"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#what-is-docker"}),"What is Docker?")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#lesson-3-kubernetes"}),"Lesson 3: Kubernetes"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#how-to-learn-k8s"}),"How to learn k8s")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#kubernetes-intro"}),"Kubernetes Intro")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#pods"}),"Pods")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#monitoring-and-health-checks"}),"Monitoring and Health Checks")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#app-config-and-security-overview"}),"App Config and Security Overview")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#create-a-service"}),"Create a service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#adding-labels-to-pods"}),"Adding labels to pods")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#lesson-4-deploying-microservices"}),"Lesson 4: Deploying Microservices"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#deployment"}),"Deployment"))))))),Object(a.b)("h2",{id:"introduction-to-microservices"},"Introduction to Microservices"),Object(a.b)("p",null,'Microservices helps the method for "always on" apps.'),Object(a.b)("p",null,"Distributed systems will be taught to add ontop of tools we may already use like Chef etc."),Object(a.b)("p",null,"Order:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Understanding the basics"),Object(a.b)("li",{parentName:"ol"},"How to package and distribute apps"),Object(a.b)("li",{parentName:"ol"},"Running applications using a distributed platform that can scale")),Object(a.b)("h3",{id:"the-evolution-of-applications"},"The Evolution of Applications"),Object(a.b)("p",null,"Why was it designed this way?"),Object(a.b)("p",null,"Years ago, applications were huge and it would take hours just for a build. Typically you would release software infrequently."),Object(a.b)("p",null,"Recently, the idea of microservices is to break down these large applications which allow for faster deployments."),Object(a.b)("p",null,"The main reason for microservices is to speed up development. Breaking things down into microservices allow you have many releases or few releases."),Object(a.b)("p",null,"If we think of a simple setup being done through things like Chef. Co-ordination of many things will need to compose them all together like a Docker compose or a kubernetes setup."),Object(a.b)("h3",{id:"microservices"},"Microservices"),Object(a.b)("p",null,"What does it mean? It's just an architectual approach. It's goes for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Modularity"),Object(a.b)("li",{parentName:"ul"},"Scalability"),Object(a.b)("li",{parentName:"ul"},"Ease of deployment")),Object(a.b)("p",null,"The design pattern applies to any application. It just refers to rapid deployments and continuous delivery. it pushes the automation tools to their limits."),Object(a.b)("h3",{id:"the-app-on-google-cloud"},"The app on Google Cloud"),Object(a.b)("p",null,"The app on the Gcloud console is a basic server which gives a JWT and allows you to use this to access a secure route."),Object(a.b)("h3",{id:"12-factor-apps"},"12 factor apps"),Object(a.b)("p",null,"You can think of the 12 factors as quintessential to building an app that deals with ",Object(a.b)("inlineCode",{parentName:"p"},"portability"),", ",Object(a.b)("inlineCode",{parentName:"p"},"deployability")," and ",Object(a.b)("inlineCode",{parentName:"p"},"scalability"),"."),Object(a.b)("p",null,"The 12 factor manifesto can be found (here)","[https://12factor.net/]","."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"I. Codebase\nOne codebase tracked in revision control, many deploys\n\nII. Dependencies\nExplicitly declare and isolate dependencies\n\nIII. Config\nStore config in the environment\n\nIV. Backing services\nTreat backing services as attached resources\n\nV. Build, release, run\nStrictly separate build and run stages\n\nVI. Processes\nExecute the app as one or more stateless processes\n\nVII. Port binding\nExport services via port binding\n\nVIII. Concurrency\nScale out via the process model\n\nIX. Disposability\nMaximize robustness with fast startup and graceful shutdown\n\nX. Dev/prod parity\nKeep development, staging, and production as similar as possible\n\nXI. Logs\nTreat logs as event streams\n\nXII. Admin processes\nRun admin/management tasks as one-off processes\n")),Object(a.b)("h3",{id:"refactor-to-msa"},"Refactor to MSA"),Object(a.b)("p",null,"All the monolithic stuff we wish to break down into smaller systems."),Object(a.b)("p",null,"Splitting up the application doubles the complexity. This complexity is what drives the use of management systems like Kubernetes."),Object(a.b)("p",null,"The idea is that the MSA will deal with ",Object(a.b)("inlineCode",{parentName:"p"},"tightly coupled components")," and ",Object(a.b)("inlineCode",{parentName:"p"},"maintenance"),"."),Object(a.b)("h3",{id:"json-web-tokens"},"JSON Web Tokens"),Object(a.b)("p",null,"JWTs (pronounced lie jot). Super useful and compact means to encode and decode. The fact that they can be signed is for things like auth."),Object(a.b)("p",null,"Since they can be signed, you can ensure safety and that things are not being tampered with."),Object(a.b)("p",null,"They work through a client/server relationship. The server knows a client cannot be trusted - it only wants to give something to someone they trust. As the client sends data, the server replies with a token. The client then stores the data and sends it along with the JWT."),Object(a.b)("p",null,"So the server verifies the token and checks that it hasn't been tampered with."),Object(a.b)("h2",{id:"lesson-2-building-the-containers-with-docker"},"Lesson 2: Building the Containers with Docker"),Object(a.b)("p",null,"The packaging of things seems like a bunch of difficult work."),Object(a.b)("p",null,"We use container images, as it is a packaging format that knows and has all of your dependencies."),Object(a.b)("p",null,"Things like Docker make container service APIs nice and easy to run on your own servers."),Object(a.b)("h3",{id:"what-is-docker"},"What is Docker?"),Object(a.b)("p",null,"Opensournce tool that builds container images with all the dependencies already installed on it. They startup and shutdown quickly and benef"),Object(a.b)("h2",{id:"lesson-3-kubernetes"},"Lesson 3: Kubernetes"),Object(a.b)("p",null,'If you look at the history of large systems in the data center, you\'d buy, depreciate them etc etc. What we want to do is essentially the "cow paddock" where we want to know that if the cattle goes, we still have milk.'),Object(a.b)("p",null,"If we think of this as herds of machines, containers come in nicely. We could use VMs, but that take plenty of setup and config time."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"serverless")," also comes from this idea of running a container from start to finish and shutting down again."),Object(a.b)("p",null,"One of the problems that people come into is keeping older practises or organisations."),Object(a.b)("p",null,"Because you also know a bunch of automation is required, logging etc becomes super important."),Object(a.b)("h3",{id:"how-to-learn-k8s"},"How to learn k8s"),Object(a.b)("p",null,"Info overload, so many tools - what is the fastest way to become productive? The reply was Kubernetes. Kubernetes was an abstraction of containers that made sense."),Object(a.b)("p",null,"So what is Kubernetes?"),Object(a.b)("p",null,"Packaging the containers is like 5% of the problem. We still need to deal with:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"App configuration"),Object(a.b)("li",{parentName:"ol"},"Service discovery"),Object(a.b)("li",{parentName:"ol"},"Managing updates"),Object(a.b)("li",{parentName:"ol"},"Monitoring")),Object(a.b)("p",null,"While we build all those things on Docker, we're better off leveraging a platform to manage all that complexity for us."),Object(a.b)("p",null,"Kubernetes provides a new set of abstractions and allow you to focus on the big picture. You can treat the cluster like a single, logical machine."),Object(a.b)("p",null,"We can describe a set of applications with Kubernetes and let it do the hardwork."),Object(a.b)("h3",{id:"kubernetes-intro"},"Kubernetes Intro"),Object(a.b)("p",null,"The easiest way to start is to use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"kubectl run nginx --image=nginx:1.10.0\nkubectl get pods\nkubectl export deployments nginx --port 80 --type LoadBalancer\nkubectl get services\n")),Object(a.b)("p",null,"Kubernetes just creating a load balancer and exposed it to port 80."),Object(a.b)("h3",{id:"pods"},"Pods"),Object(a.b)("p",null,"Pods are a logical application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"one of more containers eg. having an nginx and monolith containers"),Object(a.b)("li",{parentName:"ul"},"volumes that are data divs, they can be used by any containers in the pod - this allows the containers within the pod to communicate with each other."),Object(a.b)("li",{parentName:"ul"},"there is also one IP per pod")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating Pods")),Object(a.b)("p",null,"You can use a .yaml pod configuration file."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# files contain specs like containers, ports expose etc.\n...\nspec:\n    containers:\n        ...\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe pods monolith")," commands like this will give you information for troubleshooting."),Object(a.b)("p",null,"Pods by default are giving a private IP - use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl port-forward <pod> 10080:80")," to forward this on."),Object(a.b)("h3",{id:"monitoring-and-health-checks"},"Monitoring and Health Checks"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Readiness")," checks will check if something is ready to be added to the load balancer."),Object(a.b)("p",null,"On a node we have a Pod with an app and a Kubelet. Since the Kubelet is responsible for making sure that a pod is healthy, it will perform the live check."),Object(a.b)("p",null,"If in the example, the app is dead, the Kubelet will restart the container and check again. If the response is then successful, then we are ready to roll."),Object(a.b)("h3",{id:"app-config-and-security-overview"},"App Config and Security Overview"),Object(a.b)("p",null,"One problem is that people want to bake in their configs and put onto Docker. Don't do it. There are Configmaps and Secrets to deal with these problems."),Object(a.b)("p",null,"Creating Secrets is an easy problem. We can use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl create secret")," - such as ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl create secret generic tls-certs --from-file=tls/"),"."),Object(a.b)("p",null,"The Kubernets Master will then know the secret. Now we a pod is created, the secret is then also mounted onto the pod."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating Secrets")),Object(a.b)("p",null,"Before we can serve HTTPS we need a self-signed TLS cert. So give the certs that we have (in the .pem files) can be used to secure traffic on the monolith server with other keys to secure traffic. Another can be used by HTTP clients as a CA to trust."),Object(a.b)("p",null,"Assuming the four ",Object(a.b)("inlineCode",{parentName:"p"},".pem")," files (ca-key.pem, ca.pem, cert.pem, key.pem) are stored in a ",Object(a.b)("inlineCode",{parentName:"p"},"./tls")," folder we can run ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl create secret generic tls-certs --from-file=tls")," to store the certs."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"kubectl")," will create a key for each dile. We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe secrets tls-certs"),"."),Object(a.b)("p",null,"We can also then create a ",Object(a.b)("inlineCode",{parentName:"p"},"configmap")," usin ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl create configmap nginx-proxy-conf --from-file nginx/proxy.conf"),". Again, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl describe config map nginx-proxy-conf")," to get more details about it after. At this point, we are ready to attach these things to the monolith pod."),Object(a.b)("p",null,"In creating a .yaml file for configuration, you can add these certs and conf files we added as a secret and configmap using ",Object(a.b)("inlineCode",{parentName:"p"},"volumeMounts")," when decribing a container."),Object(a.b)("p",null,"Something to note is that forwarding of ",Object(a.b)("inlineCode",{parentName:"p"},"10080")," and ",Object(a.b)("inlineCode",{parentName:"p"},"10443")," is not by accidenta and relates to http and https."),Object(a.b)("h3",{id:"create-a-service"},"Create a service"),Object(a.b)("p",null,"We create a Kubernetes service to expose things such as the logs. We can use ",Object(a.b)("inlineCode",{parentName:"p"},"nodePort")," to help forward on these new details. If we allow traffic to the expose tcp:31000 port, we should be able to hit it from outside the cluster."),Object(a.b)("h3",{id:"adding-labels-to-pods"},"Adding labels to pods"),Object(a.b)("p",null,"Currently, the service does not have any in ports. ",Object(a.b)("inlineCode",{parentName:"p"},'kubectl label pods secure-monolith "secure=enabled"')," allows us to add labels and then we will be able to try hitting the exposed port."),Object(a.b)("h2",{id:"lesson-4-deploying-microservices"},"Lesson 4: Deploying Microservices"),Object(a.b)("h3",{id:"deployment"},"Deployment"),Object(a.b)("p",null,"What we are interested in is production."),Object(a.b)("p",null,"Deployments drive current state towards desired state."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubernetes-Udacity.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-kubernetes-udacity-md-5dc6ead5861a00c9fdd6.js.map