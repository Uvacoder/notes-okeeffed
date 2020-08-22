(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{bO2Z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/EKS-Deploy-Stateful-EBS-App.md"}});var o={_frontmatter:l},p=s.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(p,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"deploying-a-stateful-app"},"Deploying a stateful app"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#deploying-a-stateful-app"}),"Deploying a stateful app"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#the-app"}),"The app"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#frontend"}),"Frontend")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#backend"}),"Backend")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#the-ebs-volumes"}),"The EBS Volumes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#creating-the-namespace"}),"Creating the Namespace")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#creating-the-storage-class"}),"Creating the storage class")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#creating-the-persistent-volume-claim-pvc"}),"Creating the persistent volume claim (PVC)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#deploying-mysql"}),"Deploying MySQL")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#deployment-vs-statefulset-by-using-storageclass-for-ebs"}),"Deployment vs StatefulSet by using storageclass for EBS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#wordpress-as-a-deployment"}),"Wordpress as a Deployment")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#wordpress-as-a-stateful-set"}),"Wordpress as a Stateful Set")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"#cleanup-of-resource"}),"Cleanup of resource"))))),Object(n.b)("h2",{id:"the-app"},"The app"),Object(n.b)("p",null,Object(n.b)("img",{alt:"App layout",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548289711/eks-course/Screen_Shot_2019-01-24_at_11.28.22_am.png"})),Object(n.b)("h3",{id:"frontend"},"Frontend"),Object(n.b)("p",null,"Wordpress with:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Persistent volume (EBS) to store HTML"),Object(n.b)("li",{parentName:"ul"},"Public facing ELB")),Object(n.b)("h3",{id:"backend"},"Backend"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Persistent volume (EBS) to store MySQL data")),Object(n.b)("h2",{id:"the-ebs-volumes"},"The EBS Volumes"),Object(n.b)("p",null,"The EBS volumes are tied to an Availability Zone. Re-created pods can only be started in the AZ of the previous volume."),Object(n.b)("p",null,"To properly deploy WordPress, we need a shared volume between all the pods (specific to Wordpress)."),Object(n.b)("p",null,"We want to deploy our pods in multiple AZ."),Object(n.b)("p",null,"Therefore the shared volume MUST BE Amazon EFS (Elastic File System)."),Object(n.b)("p",null,"For this app, EBS is used to demo how things work for stateful apps that do leverage EBS (like MySQL)."),Object(n.b)("h2",{id:"creating-the-namespace"},"Creating the Namespace"),Object(n.b)("p",null,"This is best practice to separate the workloads."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Separation examples can be project, client, team, environment."),Object(n.b)("li",{parentName:"ul"},"Namespaces can also give resource quotas, access controls etc.")),Object(n.b)("p",null,"Let's create our own Wordpress stateful app."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl create namespace ns-eks-course\n")),Object(n.b)("h2",{id:"creating-the-storage-class"},"Creating the storage class"),Object(n.b)("p",null,"We can see there are no storage classes by running the following:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl get storageClass --all-namespaces\n")),Object(n.b)("p",null,"We can create the storage class by applying the following YAML file:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yml"}),"# gp2-storage-class.yaml\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: gp2\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp2\nreclaimPolicy: Retain\nmountOptions:\n  - debug\n")),Object(n.b)("p",null,"After applying with ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl"),", we will have the EBS class created."),Object(n.b)("p",null,"We need to set this to default, which we can do by running ",Object(n.b)("inlineCode",{parentName:"p"},'kubectl patch sc gp2 -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\' --namespace=ns-eks-course')),Object(n.b)("h2",{id:"creating-the-persistent-volume-claim-pvc"},"Creating the persistent volume claim (PVC)"),Object(n.b)("p",null,"Here we are creating two persistent volume claims for both MySQL and WordPress."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# pvcs.yml\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mysql-pv-claim\n  labels:\n    app: wordpress\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: wp-pv-claim\n  labels:\n    app: wordpress\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi\n")),Object(n.b)("p",null,"After applying with ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl apply -f pvcs.yaml --namespace=ns-eks-course"),", we can see the pvcs there running ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl get pvc --namespace=<NS>"),"."),Object(n.b)("h2",{id:"deploying-mysql"},"Deploying MySQL"),Object(n.b)("p",null,"First we need to create a secret. We can just pass a literal secret by running ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl create secret generic mysql-pass --from-literal=password=password --namespace=ns-eks-course"),"."),Object(n.b)("p",null,"We can deploy SQL with the following:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yml"}),"# mysql.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: wordpress-mysql\n  labels:\n    app: wordpress\nspec:\n  ports:\n    - port: 3306\n  selector:\n    app: wordpress\n    tier: mysql\n  # Ensures no dedicated cluster IP and to remain private\n  clusterIP: None\n---\napiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2\nkind: Deployment\nmetadata:\n  name: wordpress-mysql\n  labels:\n    app: wordpress\nspec:\n  selector:\n    matchLabels:\n      app: wordpress\n      tier: mysql\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: wordpress\n        tier: mysql\n    spec:\n      containers:\n        - image: mysql:5.6\n          name: mysql\n          env:\n            - name: MYSQL_ROOT_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: mysql-pass\n                  key: password\n          ports:\n            - containerPort: 3306\n              name: mysql\n          volumeMounts:\n            - name: mysql-persistent-storage\n              mountPath: /var/lib/mysql\n      volumes:\n        - name: mysql-persistent-storage\n          persistentVolumeClaim:\n            claimName: mysql-pv-claim\n")),Object(n.b)("p",null,"Apply the file and we should get what we want:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl get pods\n# NAME                              READY   STATUS              RESTARTS   AGE\n# wordpress-mysql-565494758-9p4zm   0/1     ContainerCreating   0          13s\n")),Object(n.b)("p",null,"Using the dashboard or AWS console, we should now be able to confirm after the pod is ready that the volume has successfully attached to the pod."),Object(n.b)("h2",{id:"deployment-vs-statefulset-by-using-storageclass-for-ebs"},"Deployment vs StatefulSet by using storageclass for EBS"),Object(n.b)("p",null,"One of the issues we face is that if we deploy with EBS, the EBS volume will at most attach only to one node. This is very important to understand!"),Object(n.b)("p",null,"As for a ",Object(n.b)("inlineCode",{parentName:"p"},"StatefulSet")," with an EBS volume, it is used to ",Object(n.b)("strong",{parentName:"p"},"attach to a pod")," (used for things like ZooKeeper, Kafka etc)."),Object(n.b)("h2",{id:"wordpress-as-a-deployment"},"Wordpress as a Deployment"),Object(n.b)("p",null,"We will launch the Wordpress app as a ",Object(n.b)("inlineCode",{parentName:"p"},"Deployment"),", and what that means is that each pod launched will refer to the same Persistent Volume!"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yml"}),"# deploy-wordpress-as-deployment.yml\napiVersion: v1\nkind: Service\nmetadata:\n  name: wordpress\n  labels:\n    app: wordpress\nspec:\n  ports:\n    - port: 80\n  selector:\n    app: wordpress\n    tier: frontend\n  type: LoadBalancer\n---\napiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2\nkind: Deployment\nmetadata:\n  name: wordpress\n  labels:\n    app: wordpress\nspec:\n  selector:\n    matchLabels:\n      app: wordpress\n      tier: frontend\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: wordpress\n        tier: frontend\n    spec:\n      containers:\n        - image: wordpress:4.8-apache\n          name: wordpress\n          env:\n            - name: WORDPRESS_DB_HOST\n              value: wordpress-mysql\n            - name: WORDPRESS_DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: mysql-pass\n                  key: password\n          ports:\n            - containerPort: 80\n              name: wordpress\n          volumeMounts:\n            - name: wordpress-persistent-storage\n              mountPath: /var/www/html\n      volumes:\n        - name: wordpress-persistent-storage\n          persistentVolumeClaim:\n            claimName: wp-pv-claim\n")),Object(n.b)("h2",{id:"wordpress-as-a-stateful-set"},"Wordpress as a Stateful Set"),Object(n.b)("p",null,"In this case for understanding Stateful Sets, we can use this example to show each pod deploying with it's own PVC. In the case of WordPress, this would be an issue given that an image uploaded to one pod would not be available to another -- but this is for the sake of demonstration."),Object(n.b)("p",null,"Ensure you always go for a stateful set when it is the right choice (Zookeeper etc). Remember - WordPress is ",Object(n.b)("strong",{parentName:"p"},"NOT")," that."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: wordpress-statefulset\n  labels:\n    app: wordpress-statefulset\nspec:\n  ports:\n    - port: 80\n  selector:\n    app: wordpress-statefulset\n    tier: frontend\n  type: LoadBalancer\n---\napiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2\nkind: StatefulSet\nmetadata:\n  name: wordpress-statefulset\n  labels:\n    app: wordpress-statefulset\nspec:\n  selector:\n    matchLabels:\n      app: wordpress-statefulset\n      tier: frontend\n  replicas: 1\n  serviceName: wordpress-statefulset-frontend\n  template:\n    metadata:\n      labels:\n        app: wordpress-statefulset\n        tier: frontend\n    spec:\n      containers:\n        - image: wordpress:4.8-apache\n          name: wordpress\n          env:\n            - name: WORDPRESS_DB_HOST\n              value: wordpress-mysql\n            - name: WORDPRESS_DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: mysql-pass\n                  key: password\n          volumeMounts:\n            - name: wordpress-persistent-storage\n              mountPath: /var/www/html\n          ports:\n            - containerPort: 80\n              name: wordpress\n  volumeClaimTemplates:\n    - metadata:\n        name: wordpress-persistent-storage\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 10Gi\n        storageClassName: gp2\n")),Object(n.b)("h2",{id:"cleanup-of-resource"},"Cleanup of resource"),Object(n.b)("p",null,"To delete all the frontend, the backend and the EBS volumes resources, run the applicable kubectl delete on all of the yaml files we have used. This should includes deployments, pods, secrets, pvcs etc."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"kubectl delete -f NAME.yaml --namespace=ns-course\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/EKS-Deploy-Stateful-EBS-App.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-eks-deploy-stateful-ebs-app-md-2bd83e2725c1771071c8.js.map