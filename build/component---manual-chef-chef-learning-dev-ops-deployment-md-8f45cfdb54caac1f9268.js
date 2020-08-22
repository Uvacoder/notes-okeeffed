(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{D2YC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var o=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Chef/Chef-Learning-Dev-Ops-Deployment.md"}});var l={_frontmatter:i},s=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"learning-chef-devops-deployment"},"Learning Chef DevOps Deployment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#learning-chef-devops-deployment"}),"Learning Chef DevOps Deployment"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-1-introduction-to-chef"}),"CHEFOPS-1: Introduction to Chef"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-11-chef-head-first-build-and-deploy-a-motd-recipe"}),"CHEFOPS-1.1: Chef Head first! Build and Deploy a MOTD Recipe.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-12-what-is-devops-and-its-relation-to-chef"}),"CHEFOPS-1.2: What is DevOps and it's relation to Chef?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-13-what-is-chef"}),"CHEFOPS-1.3: What is Chef?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-14-common-chef-terminology"}),"CHEFOPS-1.4: Common Chef Terminology")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-15-chef-server"}),"CHEFOPS-1.5: Chef Server")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-2-building-the-webserver-cookbook"}),"CHEFOPS-2: Building the Webserver Cookbook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-3-node-object-and-search"}),"CHEFOPS-3: Node Object and Search")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-4-data-bags"}),"CHEFOPS-4: Data-Bags")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-5-chef-environments"}),"CHEFOPS-5: Chef Environments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-6-roles"}),"CHEFOPS-6: Roles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-7-extending-chef"}),"CHEFOPS-7: Extending Chef")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-8-deploying-nodes-in-production"}),"CHEFOPS-8: Deploying Nodes in Production")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#chefops-9-using-opensource-chef-server"}),"CHEFOPS-9: Using OpenSource Chef Server"))))),Object(o.b)("h2",{id:"chefops-1-introduction-to-chef"},"CHEFOPS-1: Introduction to Chef"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After this, you should know")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Understand DevOps and Chef"),Object(o.b)("li",{parentName:"ol"},"Know the role of workstations, nodes, and Chef server"),Object(o.b)("li",{parentName:"ol"},"Deploy and automate configurations of nodes"),Object(o.b)("li",{parentName:"ol"},"Understanding of writing Recipes and Cookbooks"),Object(o.b)("li",{parentName:"ol"},"Understand the Chef work flow"),Object(o.b)("li",{parentName:"ol"},"Use Chef to automate the deployment of your infrastructure")),Object(o.b)("p",null,"Starting with single nodes."),Object(o.b)("p",null,"Learn the concepts and then cook Cookbooks and then start bootstrapping nodes. You will also learn about the LAMP stack."),Object(o.b)("p",null,'Have at least one "node" to touch base with.'),Object(o.b)("p",null,"You will know how to deploy out other applications and be able to use it in your own deployment environments."),Object(o.b)("h3",{id:"chefops-11-chef-head-first-build-and-deploy-a-motd-recipe"},"CHEFOPS-1.1: Chef Head first! Build and Deploy a MOTD Recipe."),Object(o.b)("p",null,"Have a lab server set up that will be a workstation. The workstation will be where the DevOp uses this to write the scripts and send this up to Chef."),Object(o.b)("p",null,"Each DevOps engineer has a Workstation that they work on (generally your computer)."),Object(o.b)("p",null,"In the Node"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"sudo su\ncd /etc/ssh\nnano sshd_config\n")),Object(o.b)("p",null,"Here, you can change ",Object(o.b)("inlineCode",{parentName:"p"},"PermitRootLogin")," to allow. To apply, you need to use ",Object(o.b)("inlineCode",{parentName:"p"},"service ssh restart")," (for Ubuntu -> check online for others)"),Object(o.b)("p",null,"We'll use the free tier with Chef to be able to learn and test."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Chef")),Object(o.b)("p",null,"In the management console, we need to create an Organisation. This will keep our policies seperate to other applications and environments."),Object(o.b)("p",null,"Download the StarterKit, then you can move the files across to the workstation using a client like FileZilla."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In FileZilla")),Object(o.b)("p",null,"Connect using SFTP with the correct port if you are using NAT."),Object(o.b)("p",null,"Once this is done, you can upload the ChefStarterKit to that workstation."),Object(o.b)("p",null,"Move it to root and ",Object(o.b)("inlineCode",{parentName:"p"},"unzip"),"."),Object(o.b)("p",null,"Whenever you're working on policies, cookbooks etc. we will be inside of this repo in order to do work."),Object(o.b)("p",null,"We want to be installing the software the workstation as well."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"curl -L https://www.opscode.com/chef/install.sh | bash\n")),Object(o.b)("p",null,"This will run the bash command and install everything."),Object(o.b)("p",null,"Now, let's go ahead and Bootstrap a node."),Object(o.b)("p",null,"Currently for our organisation, we're going to bootstrap our first node!"),Object(o.b)("p",null,"We can use ",Object(o.b)("inlineCode",{parentName:"p"},"knife")," on the workstation to configure these things."),Object(o.b)("p",null,"eg. ",Object(o.b)("inlineCode",{parentName:"p"},"knife bootstrap 127.0.0.1 -p 3302 -x username -P password -N testnode")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"knife bootstrap ADDRESS --ssh-port  PORT --ssh-user USERNAME --ssh-password 'PASSWORD' --sudo --use-sudo-password --node-name NODENAME\n")),Object(o.b)("p",null,"In a Production environment, we are also going to require -N to specify a Node name."),Object(o.b)("p",null,"A Node can be anything that can run the Chef client. This can be linux systems like Ubuntu, Android etc."),Object(o.b)("p",null,"If the Node can communicate with the Chef Server, then our Workstation will upload policies to the Chef Server and the Node will communicate with the Chef Server."),Object(o.b)("p",null,'Now, in the "Node" instance, can run ',Object(o.b)("inlineCode",{parentName:"p"},"chef-client")," and see if we can actually communicate with the Chef Client."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To create a cookbook")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"knife cookbook create motd\n")),Object(o.b)("p",null,"you can now move into cookbooks and see motd. In ",Object(o.b)("inlineCode",{parentName:"p"},"motd")," we are going to jump over a lot of things and seeing how things are being done."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"cd recipes")," and you will see the ",Object(o.b)("inlineCode",{parentName:"p"},"default.rb")," file. Edit the file."),Object(o.b)("p",null,"Note: chef NEEDS to work as root, so you need to give those root details!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In recipes/default.rb")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-ruby"}),"// this will create a template\n// set the permissions to write read read\n\ntemplate `/etc/motd` do\n    source 'motd.erb'\n    mode '0644'\nend\n")),Object(o.b)("p",null,"Now, cd from ",Object(o.b)("inlineCode",{parentName:"p"},"recipes")," into ",Object(o.b)("inlineCode",{parentName:"p"},"templates")," and head into the ",Object(o.b)("inlineCode",{parentName:"p"},"default")," directory."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nano motd.erb")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In templates/default/motd.erb")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'// ensure you put the = sign to say\n// evaluate the attr here\n// denoted by node["motd"]["author"]\n\nThis is an MOTD created by <%= node["motd"]["author"] %>\n')),Object(o.b)("p",null,"Head to the ",Object(o.b)("inlineCode",{parentName:"p"},"attributes")," folder and create ",Object(o.b)("inlineCode",{parentName:"p"},"default.rb")," and define an attribute. We need to set the precedence for importance."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"in attributes/default.rb")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'default["motd"]["author"] = "Dennis"\n')),Object(o.b)("p",null,"After this is done, we need to upload this to the chef enterprise. We have to upload and tell the node to run it."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"knife cookbook upload motd\n")),Object(o.b)("p",null,"After uploading, we can head to the Chef Enterprise and under policies we can see the motd cookbook. Under recipes, we will be able to see our recipe!"),Object(o.b)("p",null,"We need to tell our node to run our recipe!"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),'knife node run_list add [nodename] "recipe[motd]""\n')),Object(o.b)("p",null,"If you use the default.rb file, we name it ",Object(o.b)("inlineCode",{parentName:"p"},"motd")," (we used the default file in the recipe cookbook). There can be multiple cookbooks in a recipe but we don't run all of our recipes."),Object(o.b)("p",null,"We can now run ",Object(o.b)("inlineCode",{parentName:"p"},"chef-client")," to run a convergence. Afterwards, we can change to our /etc file and cat our ",Object(o.b)("inlineCode",{parentName:"p"},"motd")," file. If there was an existing ",Object(o.b)("inlineCode",{parentName:"p"},"motd")," file already, it would create a back up of that file."),Object(o.b)("p",null,"If we head to ",Object(o.b)("inlineCode",{parentName:"p"},"/var/chef"),", we can find a backup file and we can find the backup file. It even creates a back up of the backup just in case we need to back it up."),Object(o.b)("h3",{id:"chefops-12-what-is-devops-and-its-relation-to-chef"},"CHEFOPS-1.2: What is DevOps and it's relation to Chef?"),Object(o.b)("p",null,"DevOps is how well people work together and how streamlined our projects actually are."),Object(o.b)("p",null,"You split the teams into Development teams and Operations teams. They are essentially in separate environments."),Object(o.b)("p",null,"The Ops team are system engineers who take care of the underlying OS that these run on."),Object(o.b)("p",null,"DevOps is a bridge between these two teams. A new term from over the last couple of years. Building things like automated tests etc."),Object(o.b)("p",null,"If you think DevOps, think automation. Continuous integration! You can run on cycles. DevOps is Infrastructure as nodes. It runs through the entire LAMP deployment. This entire automation for Chef is working closely Infrastructure as code."),Object(o.b)("p",null,"This is even more the case when you're running on AWS etc."),Object(o.b)("p",null,"We can deploy all these things like ELBs, DBs etc and we work with system teams to deploy this in an optimal way."),Object(o.b)("p",null,"DevOps is essentially becoming a role for everybody. Doing things like patch updates, server updates etc with just a single piece of code."),Object(o.b)("p",null,"As SysAdmins it's about being able to deploy and manage infrastructures using code."),Object(o.b)("p",null,"DevOps is one of the biggest requests right now."),Object(o.b)("h3",{id:"chefops-13-what-is-chef"},"CHEFOPS-1.3: What is Chef?"),Object(o.b)("p",null,"Chef turns Infrastructure into code."),Object(o.b)("p",null,"You can let the cookbook dictate things like what packages we need to download etc."),Object(o.b)("p",null,"This means when you deploy, you need it to touch base with the chef enterprise."),Object(o.b)("p",null,"Recipes themselves are built with the Ruby language. Chef also relies on 'resources' - the resource defined the /etc change for ",Object(o.b)("inlineCode",{parentName:"p"},"motd")," before. Here we can define what packages to get, what directories to make etc. What services to start and at what level."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is Chef?")),Object(o.b)("p",null,"Chef relies on either OpenSource Chef server or Chef enterprise to host configuration recipes, cookbooks and node auth for your infrastructure."),Object(o.b)("p",null,"With Chef enterprise, we don't have to configure the OpenSource server."),Object(o.b)("p",null,"Nodes when performing a convergence will check in with the enterprise server and check it has everything it needs to have, download the required config and run the recipe instructions."),Object(o.b)("p",null,"As we learn how to write recipes, we will learn how to automate the process so that the chef-client is run every 30 minutes."),Object(o.b)("p",null,"Chef itself eventually works like so:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"Work Station\n    |\n    |\nChef Server\n    |\n    |\n  Nodes\n(Web Server, Cisco Router, Varnish Server, DB Server)\n")),Object(o.b)("p",null,"We can have chef jump into these servers and update certain things."),Object(o.b)("h3",{id:"chefops-14-common-chef-terminology"},"CHEFOPS-1.4: Common Chef Terminology"),Object(o.b)("p",null,"If you understand this, it will click quicker."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Recipes")),Object(o.b)("p",null,"These are the fundamental configuration element. They are created using the Ruby language using patterns with Ruby code. It is required to cover everything that is part of a system."),Object(o.b)("p",null,"Recipes need to be added to a ",Object(o.b)("inlineCode",{parentName:"p"},"run list")," before being executed and run in order. This is done with the ",Object(o.b)("inlineCode",{parentName:"p"},"knife node run_list")," command."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cookbook")),Object(o.b)("p",null,"Defines a scenario and is the fundamental unit of configuration and policy distribution."),Object(o.b)("p",null,"It is made up of recipes. We have the ability to set attributes for reusable sets of resources and helpers using Ruby code."),Object(o.b)("p",null,"We can specify things like versions, metadata and more of our data in the cookbook for our recipes."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Chef-Client")),Object(o.b)("p",null,"Agent that runs locally on the node that is registered with the chef server."),Object(o.b)("p",null,"This will register and authenticate when it is first run. It will sync the cookbooks and take appropriate action to align with what the cookbook says."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Convergence")),Object(o.b)("p",null,"Occurs when chef-client configures the system/node based off the information collected from chef-server."),Object(o.b)("p",null,"When we run the convergence, the node will be up to date."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Configuration Drift")),Object(o.b)("p",null,"Occurs when the node state does not reflect the updated state of polices/configurations on the chef server."),Object(o.b)("p",null,"Recipes are primarily made up of resources and the CD and it configures in liason with the element."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Resources")),Object(o.b)("p",null,"A statement of configuration policay within a recipe."),Object(o.b)("p",null,"Describes the desired state of an element in the infrastructure and steps needed to configure."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Provider")),Object(o.b)("p",null,"Defines the steps that are needed to bring the piece of the system from its current state to the desired state."),Object(o.b)("p",null,"This works with resources and brings the piece of the system from the current state to the desired state."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Attributes")),Object(o.b)("p",null,"Specific details about the node, used by chef-client to understand current state of the node, the state of the node on the previous chef-client run, and the state of the node at the end of the client run."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data-bags")),Object(o.b)("p",null,"A global variables stored as JSON data and is accessible from the Chef server."),Object(o.b)("p",null,"We can use these when defining local users on our system."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Workstation")),Object(o.b)("p",null,"A computer configured with Knife and used to sync with chef-repo and interact with chef server."),Object(o.b)("p",null,"The workstation is what we are going to work on our recipes on. We can configure out Chef server for our node state and server state from the workstation."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Chef Server")),Object(o.b)("p",null,"Chef server is the hub for all configuration data, stores cookbooks, and the policies applied to the node."),Object(o.b)("p",null,"The node communicates with the Chef Server and our work to build out policies is done on the workstation and sent to the server and the Node converges with the Chef Client."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Knife")),Object(o.b)("p",null,"Command line tool which provides an interface between the local chef-repo and chef-server."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"client.rb")),Object(o.b)("p",null,"Config file for chef_client located at /etc/chef/client.rb on each node."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Ohai")),Object(o.b)("p",null,"Tool used to detect attributes on a node and then provide attributes to chef-client at the start of every chef-client run."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We will use all the above tools to automate our infrastructure.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Node Object")),Object(o.b)("p",null,"Consists of run-list and node attributes that describe states of the node."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Chef-Repo")),Object(o.b)("p",null,"Located on the workstation and installed with the starter kit, should be synchronised with a version control system and stores Cookbooks, roles, data bags, environments, and config files."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Organisation")),Object(o.b)("p",null,"Used in chef enterprise server to restrict access to objects, nodes environments, roles, data-bags etc."),Object(o.b)("p",null,"An organisation is used to make sure that your Chef infrastructure or organisation is separate from others."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Environments")),Object(o.b)("p",null,"Used to organise environments (Prod/Staging/Dev/QA) generally used with cookbook ",Object(o.b)("em",{parentName:"p"},"versions")),Object(o.b)("p",null,"You can name things like which versions to use etc."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Idempotence")),Object(o.b)("p",null,"Means a recipe can run multiple times on the same system and the results will always be identical."),Object(o.b)("p",null,"If we continue to run a recipe over and over again, it will give the same results based on our policy."),Object(o.b)("h3",{id:"chefops-15-chef-server"},"CHEFOPS-1.5: Chef Server"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Two Types of Chef Server")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"OpenSource Chef-server")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Free version of Chef"),Object(o.b)("li",{parentName:"ul"},"Each instance of the server must be configured and managed locally (includes all aspects of managing the server, updates, migrations, scalability etc.)")),Object(o.b)("p",null,"The limitations with this is that it is not inherently scalable by default. Organisations also cannot communicate with each other."),Object(o.b)("p",null,"Enterprise, however, is scalable by design."),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Chef-server Enterprise (hosted)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Scalable by design"),Object(o.b)("li",{parentName:"ul"},"Available organisations"),Object(o.b)("li",{parentName:"ul"},"Always available"),Object(o.b)("li",{parentName:"ul"},"Resource-based access control")),Object(o.b)("p",null,"This is always available. It is inherently another back up of our set up."),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Chef-server enterprise (on-premise)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Scalable by design"),Object(o.b)("li",{parentName:"ul"},"Available organisations"),Object(o.b)("li",{parentName:"ul"},"Hosted on-premise behind your firewall"),Object(o.b)("li",{parentName:"ul"},"Managed yourself")),Object(o.b)("p",null,"Onus is on the user to deal with organisations and policies."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Chef Enterprise")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allows the creation of organisations - Organisations separate the infrastructure, policies and cookbooks - Nodes are registered in organisations - Nothing shared between organisations - Enterprise chef server can contain many different organisations - OpenSource chef the local individual server acts as an organisation and does not allow creation of organisations. - Organisations can represent different companies, department, infrastructures, applications and so forth."),Object(o.b)("li",{parentName:"ul"},"For each organisation in order to start bootstrapping nodes you need to download the starter kit."),Object(o.b)("li",{parentName:"ul"},"Starter kit provides security credentials (validation.pem keys) to authenticate each node to the chef server."),Object(o.b)("li",{parentName:"ul"},"Chef enterprise scales by design to handle thousands of nodes and different organisations.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Role of the server")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stores system config information (policies for nodes)"),Object(o.b)("li",{parentName:"ul"},"Authenticates workstations and nodes"),Object(o.b)("li",{parentName:"ul"},"Delivers configurations to nodes"),Object(o.b)("li",{parentName:"ul"},"Chef server holds the config and the node check-ins to receive instructions on its desired state"),Object(o.b)("li",{parentName:"ul"},"The node downloads config instructions from the server and does all of the work")),Object(o.b)("p",null,"In the Chef Server website, we can see the policies of what's required and see things like content to see what files are there and what it requires."),Object(o.b)("p",null,"Again, the node communicates back with the chef server to figure out how it should become configured."),Object(o.b)("p",null,"Ohai will populate attributes about information for the node."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Summary")),Object(o.b)("p",null,"Everything we stored on our Chef Workstation is backed up on the Chef Server, and the Node will converge with the Chef server. When the info on the server is different to the Node, that is a convergence drift resolved by the convergence."),Object(o.b)("p",null,"On the Chef Server GUI, we can actually configure things like the Run List etc without having to use the ",Object(o.b)("inlineCode",{parentName:"p"},"knife")," commands, even though we can."),Object(o.b)("p",null,"Everytime you download a Starter Kit, it overrides the keys etc. Always download it everytime you create a new organisation."),Object(o.b)("p",null,"For AWS, Chef Solo is used. Check the web or upcoming docs for how to use and its relation."),Object(o.b)("h2",{id:"chefops-2-building-the-webserver-cookbook"},"CHEFOPS-2: Building the Webserver Cookbook"),Object(o.b)("h2",{id:"chefops-3-node-object-and-search"},"CHEFOPS-3: Node Object and Search"),Object(o.b)("h2",{id:"chefops-4-data-bags"},"CHEFOPS-4: Data-Bags"),Object(o.b)("h2",{id:"chefops-5-chef-environments"},"CHEFOPS-5: Chef Environments"),Object(o.b)("h2",{id:"chefops-6-roles"},"CHEFOPS-6: Roles"),Object(o.b)("h2",{id:"chefops-7-extending-chef"},"CHEFOPS-7: Extending Chef"),Object(o.b)("h2",{id:"chefops-8-deploying-nodes-in-production"},"CHEFOPS-8: Deploying Nodes in Production"),Object(o.b)("h2",{id:"chefops-9-using-opensource-chef-server"},"CHEFOPS-9: Using OpenSource Chef Server"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Chef/Chef-Learning-Dev-Ops-Deployment.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-chef-chef-learning-dev-ops-deployment-md-8f45cfdb54caac1f9268.js.map