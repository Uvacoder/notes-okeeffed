(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{"X93+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/Kubernetes-Admin.md"}});var i={_frontmatter:o},s=l.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(s,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"4-kubernetes-administration"},"4. Kubernetes Administration"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/etcd-io/etcd/issues/2512"}),"Why etcd is etcd?"))),Object(n.b)("h2",{id:"administration"},"Administration"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Kubernetes Master Overview",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1540175278/Screen_Shot_2018-10-22_at_1.26.57_pm.png"})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When you deploy a new Pod, the information is stored in ",Object(n.b)("inlineCode",{parentName:"li"},"etcd"),". (etcd = ",Object(n.b)("inlineCode",{parentName:"li"},"/etc")," config folder and ",Object(n.b)("inlineCode",{parentName:"li"},"d")," = distributed)"),Object(n.b)("li",{parentName:"ul"},"Schedular talks to REST api."),Object(n.b)("li",{parentName:"ul"},"REST api is used to handle tasks.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Interfaces with Kubelets on the nodes.")))),Object(n.b)("h2",{id:"41-resource-quotas"},"4.1 Resource Quotas"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Resource management is useful when giving access to a person or a team."),Object(n.b)("li",{parentName:"ul"},"You don't want one person or team ",Object(n.b)("strong",{parentName:"li"},"taking up all the resources")," (e.g. CPU/Memory) of the cluster."),Object(n.b)("li",{parentName:"ul"},"You can divide the cluster into ",Object(n.b)("strong",{parentName:"li"},"namespaces")," and enable resource quotas on it.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can do this using the ",Object(n.b)("strong",{parentName:"li"},"ResourceQuota")," and ",Object(n.b)("strong",{parentName:"li"},"ObjectQuota")," objects."))),Object(n.b)("li",{parentName:"ul"},"Each container can specify ",Object(n.b)("strong",{parentName:"li"},"request capacity")," and ",Object(n.b)("strong",{parentName:"li"},"capacity limits"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Request capacity")," is an ",Object(n.b)("strong",{parentName:"li"},"explicit request")," for resources.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The scheduler can use the ",Object(n.b)("strong",{parentName:"li"},"request capacity")," to make decisions on where to put the pod on."),Object(n.b)("li",{parentName:"ul"},"You can see it as a ",Object(n.b)("strong",{parentName:"li"},"minimum amount of resources the pod needs"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Resource limit")," is a limit imposed to the container.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Container will not be able to utilize more resources than specified.")))))),Object(n.b)("h3",{id:"resource-quota-examples"},"Resource Quota Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You run a ",Object(n.b)("strong",{parentName:"li"},"deployment")," with a ",Object(n.b)("strong",{parentName:"li"},"pod")," with a ",Object(n.b)("strong",{parentName:"li"},"CPU resource")," request of ",Object(n.b)("strong",{parentName:"li"},"200m"),". (200 millicpu/milliocores)."),Object(n.b)("li",{parentName:"ul"},"200m = 0.2 = 20% of CPU core of running node.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If node has 2 cores, still 20% of a single core."))),Object(n.b)("li",{parentName:"ul"},"You can also put a limit eg 400m."),Object(n.b)("li",{parentName:"ul"},"Memory quotes defined in MB or GB."),Object(n.b)("li",{parentName:"ul"},"Each pod needs the capacity quota defined during creation.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Admin can specify default request values for pods that don't specify any values for capacity."),Object(n.b)("li",{parentName:"ul"},"The same is valid for limit quotas."))),Object(n.b)("li",{parentName:"ul"},"If resource is requested more than the allowed capacity, the server API will give an error 403 FORBIDDEN and ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl")," will show an error.")),Object(n.b)("h3",{id:"resource-quote-options"},"Resource Quote options"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Resource"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"requests.cpu"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sum of CPU reqs of all pos cannot exceed this value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"requests.mem"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sum of MEM reqs of all pods cannot exceed this value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"requests.storage"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sum of storage reqs of all persistent volume claims cannot exceed this value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"limits.cpu"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sum of CPU limits of all pods cannot exceed this value")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"limits.memory"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sum of MEM limits of all pods cannot exceed this value")))),Object(n.b)("p",null,"You can also set limits on:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"configmaps"),Object(n.b)("li",{parentName:"ul"},"persistentvolumeclaims"),Object(n.b)("li",{parentName:"ul"},"pods"),Object(n.b)("li",{parentName:"ul"},"replicationcontrollers"),Object(n.b)("li",{parentName:"ul"},"resourcequotas"),Object(n.b)("li",{parentName:"ul"},"services"),Object(n.b)("li",{parentName:"ul"},"services.loadbalancer"),Object(n.b)("li",{parentName:"ul"},"services.nodeports"),Object(n.b)("li",{parentName:"ul"},"secrets")),Object(n.b)("h2",{id:"42-namespaces"},"4.2 Namespaces"),Object(n.b)("p",null,"Namespaces allow you to create ",Object(n.b)("strong",{parentName:"p"},"virtual clusters")," within the same physical cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Namespaces ",Object(n.b)("strong",{parentName:"li"},"logically separates")," your cluster."),Object(n.b)("li",{parentName:"ul"},"The standard namespace is called ",Object(n.b)("strong",{parentName:"li"},'"default"')," and that's where all the resources are launched by default.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"There is also ",Object(n.b)("strong",{parentName:"li"},"kube-system")," - a namespace for kubernetes specific resources."))),Object(n.b)("li",{parentName:"ul"},"Namespaces are intended when you have ",Object(n.b)("strong",{parentName:"li"},"multiple teams/projects")," using the Kubernetes cluster."),Object(n.b)("li",{parentName:"ul"},"Resource names within namespace must be unique."),Object(n.b)("li",{parentName:"ul"},"You can divide resources of a Kubernetes cluster using namespaces.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can limit resources on a per namespace basis."),Object(n.b)("li",{parentName:"ul"},"E.g. Marketing team can only use a maximum of 10GiB of memory, 2 loadbalancers, 2 CPU cores.")))),Object(n.b)("h3",{id:"namespace-commands"},"Namespace commands"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ kubectl create namespace myspace # create namespace myspace\n$ kubectl get namespaces # list all namespaces\n# Set default namespace to launch resources in\n$ export CONTEXT=$(kubectl config view | awk '/current-context/{print $2}')\n$ kubectl config set-context $CONTEXT --namespace=myspace\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: 1\nkind: ResourceQuota\nmetadata:\n  name: objects-counts\nnamespace: myspace\nspec:\n  hard:\n    configmaps: '10'\npersistentvolumesclaim: '4'\nreplicationcontrollers: '20'\nsecrets: '10'\nservices: '10'\nservices.loadbalancers: '2'\n")),Object(n.b)("h3",{id:"demo-resourcequotas"},"Demo ResourceQuotas"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# resourcequota.yml\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: myspace\n---\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: compute-quota\n  namespace: myspace\nspec:\n  hard:\n    requests.cpu: '1'\n    requests.memory: 1Gi\n    limits.cpu: '2'\n    limits.memory: 2Gi\n---\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: object-quota\n  namespace: myspace\nspec:\n  hard:\n    configmaps: '10'\n    persistentvolumeclaims: '4'\n    replicationcontrollers: '20'\n    secrets: '10'\n    services: '10'\n    services.loadbalancers: '2'\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# helloworld-with-quotas.yaml\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: helloworld-deployment\n  namespace: myspace\nspec:\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: helloworld\n    spec:\n      containers:\n        - name: k8s-demo\n          image: wardviaene/k8s-demo\n          ports:\n            - name: nodejs-port\n              containerPort: 3000\n          resources:\n            requests:\n              cpu: 200m\n              memory: 0.5Gi\n            limits:\n              cpu: 400m\n              memory: 1Gi\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# helloworld-no-quotas.yaml\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: helloworld-deployment\n  namespace: myspace\nspec:\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: helloworld\n    spec:\n      containers:\n        - name: k8s-demo\n          image: wardviaene/k8s-demo\n          ports:\n            - name: nodejs-port\n              containerPort: 3000\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# default.yaml\napiVersion: v1\nkind: LimitRange\nmetadata:\n  name: limits\n  namespace: myspace\nspec:\n  limits:\n    - default:\n        cpu: 200m\n        memory: 512Mi\n      defaultRequest:\n        cpu: 100m\n        memory: 256Mi\n      type: Container\n")),Object(n.b)("p",null,"The following commands can be used to get check resources:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ kubectl get <% pod_name %> --namespace=myspace\n$ kubectl describe <% pod_name %> --namespace=myspace\n")),Object(n.b)("h2",{id:"43-user-management"},"4.3 User Management"),Object(n.b)("p",null,"There are two user types:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Normal user (used to access the cluster externally) ie through kubctl."),Object(n.b)("li",{parentName:"ol"},"Service user (which is managed by an object in Kubernetes).",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Used to authenticate within the cluster ie from inside pod of kubelet."),Object(n.b)("li",{parentName:"ul"},"These creds are managed like ",Object(n.b)("strong",{parentName:"li"},"secrets"),".")))),Object(n.b)("h3",{id:"normal-users"},"Normal Users"),Object(n.b)("p",null,"Auth strategies include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Client certificates"),Object(n.b)("li",{parentName:"ul"},"Bearer Tokens"),Object(n.b)("li",{parentName:"ul"},"Authentication Proxy"),Object(n.b)("li",{parentName:"ul"},"HTTP Basic Authentication"),Object(n.b)("li",{parentName:"ul"},"OpenID"),Object(n.b)("li",{parentName:"ul"},"Webhooks")),Object(n.b)("p",null,"They have the following attributes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Username (e.g. user123 or email@email.com)"),Object(n.b)("li",{parentName:"ul"},"A UID"),Object(n.b)("li",{parentName:"ul"},"Groups"),Object(n.b)("li",{parentName:"ul"},"Extra fields to store extra info")),Object(n.b)("p",null,"After a normal user authenticates, it was hav access to everything."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To limit, you need to configure auth."),Object(n.b)("li",{parentName:"ul"},"There are multiple offerings:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"AlwaysAllow / AlwaysDeny"),Object(n.b)("li",{parentName:"ul"},"ABAC (Attribute-Based Access Control)"),Object(n.b)("li",{parentName:"ul"},"RBAC (Role Based Access Control)"),Object(n.b)("li",{parentName:"ul"},"Webhook (auth by remote service)")))),Object(n.b)("h3",{id:"service-users"},"Service Users"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Service Users are using ",Object(n.b)("strong",{parentName:"li"},"Service Account Tokens"),"."),Object(n.b)("li",{parentName:"ul"},"They are stored as ",Object(n.b)("strong",{parentName:"li"},"credentials using Secrets"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Those Secrets are also mounted in pods to allow communication between the services."))),Object(n.b)("li",{parentName:"ul"},"Service Users are ",Object(n.b)("strong",{parentName:"li"},"specific to a namespace"),"."),Object(n.b)("li",{parentName:"ul"},"They are created automatically by the API or manually using ",Object(n.b)("strong",{parentName:"li"},"objects"),"."),Object(n.b)("li",{parentName:"ul"},"Any API call ",Object(n.b)("strong",{parentName:"li"},"not authenticated")," is considered as an ",Object(n.b)("strong",{parentName:"li"},"anonymous")," user.")),Object(n.b)("h3",{id:"other-notes-on-user-management"},"Other notes on User Management"),Object(n.b)("p",null,"Auth is still a work in progress. The demo itself shows the creation of a asymmetric key and updating Minikube to allow that as the user."),Object(n.b)("h2",{id:"44-rbac-role-based-access-control"},"4.4 RBAC (Role Based Access Control)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Regulates access using ",Object(n.b)("strong",{parentName:"li"},"roles"),"."),Object(n.b)("li",{parentName:"ul"},"Allows admins to dynamically configure permission policies."),Object(n.b)("li",{parentName:"ul"},"This is what I'll use in the demo.")),Object(n.b)("p",null,"You add RBAC resources with ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," from a yaml format file."),Object(n.b)("p",null,"First, define a role, then assign users/groups to that role."),Object(n.b)("p",null,"You can create roles limited to a namespace or that applies across all namespaces."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Role")," (single namespace) and ",Object(n.b)("strong",{parentName:"li"},"ClusterRole")," (cluster-wide)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"RoleBinding")," (single namespace) and ",Object(n.b)("strong",{parentName:"li"},"ClusterRoleBinding")," (cluster-wide).")),Object(n.b)("h2",{id:"45-networking"},"4.5 Networking"),Object(n.b)("p",null,"Communication topics already covered:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Container to container: communication within a pod.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Through ",Object(n.b)("strong",{parentName:"li"},"localhost")," and the ",Object(n.b)("strong",{parentName:"li"},"port number"),"."))),Object(n.b)("li",{parentName:"ul"},"Pod-To-Service comms",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Using ",Object(n.b)("strong",{parentName:"li"},"NodePort")," and ",Object(n.b)("strong",{parentName:"li"},"DNS"),"."))),Object(n.b)("li",{parentName:"ul"},"External-To-Service",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Using ",Object(n.b)("strong",{parentName:"li"},"LoadBalancer"),", ",Object(n.b)("strong",{parentName:"li"},"NodePort"),".")))),Object(n.b)("h3",{id:"pods"},"Pods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The pod should always be routable."),Object(n.b)("li",{parentName:"ul"},"Kubernetes assumes that pods should be able to communicate to other pods, regardless of which node they are running."),Object(n.b)("li",{parentName:"ul"},"Kubernetes assumes that pods should be able to communicate to other pods, regardless of which node they are running.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Every pod has its ",Object(n.b)("strong",{parentName:"li"},"own IP address"),"."),Object(n.b)("li",{parentName:"ul"},"Pods on different nodes need to be able to communicate to each other using those IP addresses.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This is implemented differently depending on your networking setup."),Object(n.b)("li",{parentName:"ul"},"On AWS: kubenet networking (kops default).")))))),Object(n.b)("h3",{id:"kubenet-networking"},"Kubenet Networking"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Every pod can get an IP that is ",Object(n.b)("strong",{parentName:"li"},"routable")," using the AWS Virtual Private Network (VPC)."),Object(n.b)("li",{parentName:"ul"},"The kubernetes master allocates a /24 subnet to each node (254 IP addresses)."),Object(n.b)("li",{parentName:"ul"},"The subnet is added to the VPCs route table."),Object(n.b)("li",{parentName:"ul"},"There is a limit of ",Object(n.b)("strong",{parentName:"li"},"50 entries"),", which means you can't have more than 50 nodes in a single AWS cluster.")),Object(n.b)("h3",{id:"vpc-alternatives"},"VPC Alternatives"),Object(n.b)("p",null,"Not every cloud provider has VPC-tech (GCE and Azure do)."),Object(n.b)("p",null,"The alternatives for things like on-prem etc are:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Container Network Interface (CNI)"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Software that provides libraries/plugins for network interfaces within containers.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Popular solutions are ",Object(n.b)("strong",{parentName:"p"},"Calico, Weave")," (standalone or with CNI).")))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"An Overlay Network"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Flannel")," is an easy and popular way.")))),Object(n.b)("h2",{id:"46-node-maintenance"},"4.6 Node Maintenance"),Object(n.b)("p",null,"It is the ",Object(n.b)("strong",{parentName:"p"},"Node Controller")," that is responsible for managing the Node object."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"It assigns ",Object(n.b)("strong",{parentName:"li"},"IP Space")," to the node when a new node is launched."),Object(n.b)("li",{parentName:"ul"},"It keeps the ",Object(n.b)("strong",{parentName:"li"},"node list")," up to date with the available machines."),Object(n.b)("li",{parentName:"ul"},"The node controller is also monitoring the ",Object(n.b)("strong",{parentName:"li"},"health of the node"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If a node is ",Object(n.b)("strong",{parentName:"li"},"unhealthy it gets deleted"),"."),Object(n.b)("li",{parentName:"ul"},"Pods running on the unhealthy node will then get ",Object(n.b)("strong",{parentName:"li"},"rescheduled"),".")))),Object(n.b)("h3",{id:"adding-a-new-node"},"Adding a new node"),Object(n.b)("p",null,"When adding a new node, the ",Object(n.b)("strong",{parentName:"p"},"kubelet")," will attempt to register itself. This is called ",Object(n.b)("strong",{parentName:"p"},"self-registration")," and is the default behaviour."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"It allows you to ",Object(n.b)("strong",{parentName:"li"},"easily add more nodes")," to the cluster without making API changes yourself."),Object(n.b)("li",{parentName:"ul"},"A new node object is ",Object(n.b)("strong",{parentName:"li"},"automatically")," created with:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The metadata (with a name: IP or hostname)."),Object(n.b)("li",{parentName:"ul"},"Labels (e.g. cloud region / availability zone / instance size)."))),Object(n.b)("li",{parentName:"ul"},"Has ",Object(n.b)("strong",{parentName:"li"},"node condition")," (e.g. Ready, OutOfDisk)."),Object(n.b)("li",{parentName:"ul"},"When you want to ",Object(n.b)("strong",{parentName:"li"},"decomission")," a node, you want to do it gracefully.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Drain a node before you shut it down or take it out of the cluster.")))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"# drain a node\n$ kubectl drain nodename --grace-period=600\n\n# if node runs pods not managed by a controller but just a single pod\n$ kubectl drain nodename --force\n")),Object(n.b)("p",null,Object(n.b)("img",{alt:"Terminal draining",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1540183374/Screen_Shot_2018-10-22_at_3.42.29_pm.png"})),Object(n.b)("h2",{id:"47-high-availability"},"4.7 High Availability"),Object(n.b)("p",null,"If you are running in prod, you willwant all master services in ",Object(n.b)("strong",{parentName:"p"},"high availability"),"."),Object(n.b)("h3",{id:"setup"},"Setup"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Clustering etcd:")," at least run 3 etcd nodes."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Replicated API servers:")," with a a LoadBalancer"),Object(n.b)("li",{parentName:"ol"},"Running multiple instances of the ",Object(n.b)("strong",{parentName:"li"},"scheduler")," and the ",Object(n.b)("strong",{parentName:"li"},"controllers"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"only one of them will be the leader, the others are on stand-by.")))),Object(n.b)("p",null,Object(n.b)("img",{alt:"HA Overview",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1540183580/Screen_Shot_2018-10-22_at_3.46.05_pm.png"})),Object(n.b)("p",null,Object(n.b)("img",{alt:"HA diagram",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1540183671/Screen_Shot_2018-10-22_at_3.46.52_pm.png"})),Object(n.b)("h3",{id:"kops-with-multiple-masters-for-ha"},"Kops with multiple masters for HA"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"kops create cluster --name=... --zones=eu-west-1a,eu-west-1b,eu-west-1c --master-zones=eu-west-1a,eu-west-1b,eu-west-1c\n")),Object(n.b)("p",null,"This becomes more complex for volumes since EBS volumes are based within zones."),Object(n.b)("h2",{id:"48-tls-on-elb-using-annotations"},"4.8 TLS on ELB using Annotations"),Object(n.b)("p",null,"You can setup ",Object(n.b)("strong",{parentName:"p"},"cloud specific features")," (like TLS termination) on AWS LoadBalancers that you create in Kubernetes using services of type LoadBalancer."),Object(n.b)("p",null,"You can do this using ",Object(n.b)("strong",{parentName:"p"},"annotations")," to pass some flags for cloud configuration eg aws-load-balancer-ssl-cert, aws-load-balancer-backend-protocol etc."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# helloworld-elb-tls-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: helloworld-service\n  annotations:\n    service.beta.kubernetes.io/aws-load-balancer-ssl-cert: 'arn:aws:acm:region:accountid:certificate/...' #replace this value\n    service.beta.kubernetes.io/aws-load-balancer-backend-protocol: 'http'\n    service.beta.kubernetes.io/aws-load-balancer-ssl-ports: '443'\n    service.beta.kubernetes.io/aws-load-balancer-connection-draining-enabled: 'true'\n    service.beta.kubernetes.io/aws-load-balancer-connection-draining-timeout: '60'\n    service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: 'environment=dev,app=helloworld'\nspec:\n  ports:\n    - name: http\n      port: 80\n      targetPort: nodejs-port\n      protocol: TCP\n    - name: https\n      port: 443\n      targetPort: nodejs-port\n      protocol: TCP\n  selector:\n    app: helloworld\n  type: LoadBalancer\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/Kubernetes-Admin.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-kubernetes-admin-md-396b26216d5b623b9a33.js.map