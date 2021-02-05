(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"3fTy":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/App-Mesh.md"}});var o={_frontmatter:r},c=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,l({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"app-mesh-workshop"},"App Mesh Workshop"),Object(n.b)("p",null,"Aim: Blueprint deploy with App Mesh."),Object(n.b)("p",null,"The session is all about ",Object(n.b)("inlineCode",{parentName:"p"},"observability")," over a distributed application."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"When the impact of the change is small, velocity can increase.")),Object(n.b)("p",null,"Of course, microservices come with their own downsides."),Object(n.b)("p",null,"Image a pacman game runs inside a monolith, if something wild like a cosmic ray burns the CPU, all fails. In the microservices, you have multiple points of failure."),Object(n.b)("h2",{id:"how-do-we-monitor-and-control-all-of-the-microservices"},"How do we monitor and control all of the microservices?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create culture of innovation by organising into small DevOps teams"),Object(n.b)("li",{parentName:"ul"},"Build trust by automating security and compliance"),Object(n.b)("li",{parentName:"ul"},"Control Over Service to Service Communication"),Object(n.b)("li",{parentName:"ul"},"Visibility into Service to Service Communication ie Observability")),Object(n.b)("h2",{id:"application-level-communication"},"Application-level communication"),Object(n.b)("p",null,"Communicating between components:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed endpoints at specific address"),Object(n.b)("li",{parentName:"ul"},"Firewall to allow or block connection attempts"),Object(n.b)("li",{parentName:"ul"},"How do we define these security policies?")),Object(n.b)("p",null,"Service Discovery:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Real-time map of service availability"),Object(n.b)("li",{parentName:"ul"},"Applications accept or reject calls"),Object(n.b)("li",{parentName:"ul"},"How do we dynamically change this at scale?")),Object(n.b)("h2",{id:"what-is-needed"},"What is needed?"),Object(n.b)("p",null,"New ways to connect, monitor, control and debug distributed applications:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Consistent communications management: Know what talks to what Traffic patterns and flow"),Object(n.b)("li",{parentName:"ul"},"Complete visability: App-level metrics not just infrastructure metrics"),Object(n.b)("li",{parentName:"ul"},"Failure isolations and protection: Traffic Shaping, Circuit Breaking, Timeouts and Retries"),Object(n.b)("li",{parentName:"ul"},"Fine-grained deployment controls: Service independence")),Object(n.b)("h2",{id:"service-mesh-defintion"},"Service Mesh defintion"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A service mesh is a boundary for communcation for microservices, implemented as an infrastructure layer, that simplifies the management of service-to-service communcation and provides control, visibility and security.")),Object(n.b)("p",null,"Examples with Istio helps with TLS/SSL, tracing etc."),Object(n.b)("h2",{id:"aws-app-mesh-offerings"},"AWS App Mesh Offerings"),Object(n.b)("p",null,"Observability and traffic control:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Easily export logs metrics and traces"),Object(n.b)("li",{parentName:"ul"},"Client-side load balancing"),Object(n.b)("li",{parentName:"ul"},"Routing")),Object(n.b)("p",null,"AWS container services compatibility:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Amazon Container Service (Amazon ECS)"),Object(n.b)("li",{parentName:"ul"},"Amazon Elastic Container Service for Kubernetes (Amazon EKS)"),Object(n.b)("li",{parentName:"ul"},"AWS Fargate")),Object(n.b)("p",null,"EC2 compatibility:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Integrate with services running directly on EC2 instances")),Object(n.b)("h2",{id:"under-the-hood"},"Under The Hood"),Object(n.b)("p",null,"App Mesh uses Envoy proxy:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"OSS project"),Object(n.b)("li",{parentName:"ul"},"Wide community support numerous integrations"),Object(n.b)("li",{parentName:"ul"},"Stable and production-proven"),Object(n.b)("li",{parentName:"ul"},'"Graduated Project" in Cloud Native Computing Foundation'),Object(n.b)("li",{parentName:"ul"},"Started at Lyft in 2016"),Object(n.b)("li",{parentName:"ul"},"Operates as a network proxy")),Object(n.b)("h3",{id:"implementation-options"},"Implementation options"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"In-process (SDK)"),Object(n.b)("li",{parentName:"ol"},"Out-of-process (sidecar proxy)")),Object(n.b)("p",null,"Sidecar proxy runs as a container. Setup to handle all egress and ingress calls heading towards to container."),Object(n.b)("h2",{id:"the-side-car-proxy"},"The Side-car proxy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Decouples install/upgrade"),Object(n.b)("li",{parentName:"ul"},"Configurable - separates business logic from operations"),Object(n.b)("li",{parentName:"ul"},"Minimises inconsistencies")),Object(n.b)("h2",{id:"how-do-we-tell-every-proxy-what-to-do"},"How do we tell every proxy what to do?"),Object(n.b)("p",null,"Compute cycles are charged as part of the setup, but not for App Mesh itself."),Object(n.b)("p",null,"Configuring lots of proxies is hard, which is where App Mesh comes in."),Object(n.b)("p",null,"The control plane is App Mesh, whereas the Envoy proxy is the data plane. Once you tell the control plane what you want, it is no longer involved in communication between microservices. It goes through the proxy."),Object(n.b)("p",null,"You can think of it as a distributed configuration manager."),Object(n.b)("h2",{id:"application-observability"},"Application Observability"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Logging:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"HTTP access logging"),Object(n.b)("li",{parentName:"ul"},"Amazon CloudWatch Logs"),Object(n.b)("li",{parentName:"ul"},"Available as container logs on Amazon ECS, EKS, Fargate"))),Object(n.b)("li",{parentName:"ul"},"Metrics:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"CloudWatch metrics"),Object(n.b)("li",{parentName:"ul"},"StatsD (with tags)"),Object(n.b)("li",{parentName:"ul"},"Prometheus"))),Object(n.b)("li",{parentName:"ul"},"Tracing:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"AWS X-Ray"),Object(n.b)("li",{parentName:"ul"},"Other Envoy tracing drivers")))),Object(n.b)("p",null,"Also the benefits of IAM."),Object(n.b)("h2",{id:"client-side-traffic-management"},"Client-side Traffic Management"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Traffic shaping:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Load balancing"),Object(n.b)("li",{parentName:"ul"},"Weight targets"),Object(n.b)("li",{parentName:"ul"},"Service discovery (DNS + AWS Cloud Map)"),Object(n.b)("li",{parentName:"ul"},"Health checks"),Object(n.b)("li",{parentName:"ul"},"Retries (coming)"),Object(n.b)("li",{parentName:"ul"},"Timeouts (coming)"),Object(n.b)("li",{parentName:"ul"},"Circuit breakers (coming)"))),Object(n.b)("li",{parentName:"ul"},"Routing controls:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Path-based"),Object(n.b)("li",{parentName:"ul"},"Header-based (coming)"),Object(n.b)("li",{parentName:"ul"},"Cookie-based (coming)"),Object(n.b)("li",{parentName:"ul"},"Host-based (coming)"),Object(n.b)("li",{parentName:"ul"},"Protocols support (HTTP, TCP, gRPC (coming))")))),Object(n.b)("h2",{id:"load-balancer-vs-app-mesh"},"Load Balancer vs App Mesh"),Object(n.b)("p",null,"Ingress & egress traffic between your microservices inside your security-controlled boundary (via App Mesh)."),Object(n.b)("h2",{id:"app-mesh-concepts"},"App Mesh concepts"),Object(n.b)("p",null,"Create and manage these in App Mesh API, CLI, SDK, CDK or AWS Management Console."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Term"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Mesh"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Entire communication boundary of your app")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Virtual node"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Represent versions of a service that can interact")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Virtual router and routes"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Model communication required between services")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Virtual service"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Represents the actual service - provided by a virtual node or indirectly by means of a virtual router")))),Object(n.b)("p",null,"For Proxies, Services and Service Discovery: Configure and run proxies and services on Amazon ECS, Fagate, Amazon EKS, Amazon EC2."),Object(n.b)("p",null,"Service discovery happens with AWS Cloud Map (resource discovery service)."),Object(n.b)("h2",{id:"virtual-node"},"Virtual Node"),Object(n.b)("p",null,"There are three parts to the virtual node:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Listeners: Policies to handle incoming traffic."),Object(n.b)("li",{parentName:"ol"},"Service Discovery: Describes how its callers can locate this node (DNS hostname or AWS Cloud Map namespace, serviced and selectors, registers the node) - tells proxy how to reach microservice."),Object(n.b)("li",{parentName:"ol"},"Backends: Set of destinations that this node will communicate with (hostnames). By default, no egress traffic is not allowed from one node to any other node.")),Object(n.b)("h2",{id:"virtual-router"},"Virtual Router"),Object(n.b)("p",null,"Map to a set of services names or nodes."),Object(n.b)("p",null,"Traffic is routed based on a weighting and a path."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"Service Name")," is the name that clients will use to connect to the service."))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/App-Mesh.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-app-mesh-md-b0ebe0cddbd7575db390.js.map