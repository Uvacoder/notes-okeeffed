(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{Nlm1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby-On-Rails-Tutorial/From-Zero-To-Deploy.md"}});var i={_frontmatter:l},b=o.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"1-from-zero-to-deploy"},"1) From Zero To Deploy"),Object(a.b)("h2",{id:"prereq"},"Prereq"),Object(a.b)("p",null,"Some interesting tidbits about Ruby functions that you should know to understand syntax such as ",Object(a.b)("inlineCode",{parentName:"p"},'render html: "hello, world!"'),". Putting that is the same as passing ",Object(a.b)("inlineCode",{parentName:"p"},'{:html => "hello, world!"}')," as the first arg ie ",Object(a.b)("inlineCode",{parentName:"p"},'render({:html => "hello, world!"})')),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),"irb(main):018:0> def test(obj)\nirb(main):019:1> obj[:to]\nirb(main):020:1> end\n=> :test\nirb(main):021:0> test to: 'hello'\n=> \"hello\"\n")),Object(a.b)("p",null,"See ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.howtogeek.com/howto/programming/ruby/ruby-function-method-syntax/"}),"this post")," for more information."),Object(a.b)("p",null,"As for the fact that you can alias ",Object(a.b)("inlineCode",{parentName:"p"},"root")," in the router as ",Object(a.b)("inlineCode",{parentName:"p"},"root to: 'controller#action'"),", this is because of how they handle the argument in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/rails/rails/blob/main/actionpack/lib/action_dispatch/routing/mapper.rb#L1680"}),"source code"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),'def root(path, options = {})\n  if path.is_a?(String)\n    options[:to] = path\n  elsif path.is_a?(Hash) && options.empty?\n    options = path\n  else\n    raise ArgumentError, "must be called with a path and/or options"\n  end\n  # the rest is omitted for brevity\n  options\nend\n\nirb(main):072:0> root \'override\'\n=> {:to=>"override"}\nirb(main):038:0> root path: \'testing\'\n=> {:path=>"testing"}\nirb(main):039:0> root to: \'testing\'\n=> {:to=>"testing"}\n')),Object(a.b)("p",null,"You could use ",Object(a.b)("a",r({parentName:"p"},{href:"https://thoughtbot.com/blog/ruby-2-keyword-arguments"}),"keywords args")," to explore/enforce the explicit use of ",Object(a.b)("inlineCode",{parentName:"p"},"path:")," in the call."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),'def root(path:, options = {})\n  if path.is_a?(String)\n    options[:to] = path\n  elsif path.is_a?(Hash) && options.empty?\n    options = path\n  else\n    raise ArgumentError, "must be called with a path and/or options"\n  end\n  # the rest is omitted for brevity\n  options\nend\n\n# Note that the first call is now considered a string\nirb(main):024:0> root path: \'testing\'\n=> {:to=>"testing"}\nirb(main):026:0> root path: {:to => \'testing\'}\n=> {:to=>"testing"}\n')),Object(a.b)("h2",{id:"up-and-running"},"Up and Running"),Object(a.b)("p",null,"You have the choice of getting up and running with Cloud9 or locally."),Object(a.b)("p",null,"For local, run ",Object(a.b)("inlineCode",{parentName:"p"},"bundle init"),". It will create a ",Object(a.b)("inlineCode",{parentName:"p"},"Gemfile")," in the current directory."),Object(a.b)("p",null,"Change ",Object(a.b)("inlineCode",{parentName:"p"},"Gemfile")," to install Rails and then run ",Object(a.b)("inlineCode",{parentName:"p"},"bundle install")," to grab the required gems."),Object(a.b)("p",null,"You can confirm Rails has installed with ",Object(a.b)("inlineCode",{parentName:"p"},"rails -v")," and create a new rails app into ",Object(a.b)("inlineCode",{parentName:"p"},"hello_app")," by running ",Object(a.b)("inlineCode",{parentName:"p"},"rails _6.1.0_ new hello_app")," where ",Object(a.b)("inlineCode",{parentName:"p"},"_6.1.0_")," is the optional version to use to scaffold the app. You will see the response in the console for a number of files being created and a Gem installation happening."),Object(a.b)("p",null,"The scaffolded files include:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"File/Directory"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Purpose"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"app/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Core application (app) code, including models, views, controllers, and helpers")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"app/assets"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Applications assets such as Cascading Style Sheets (CSS) and images")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"bin/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Binary executable files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"config/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Application configuration")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"db/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Database files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"doc/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Documentation for the application")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"lib/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Library modules")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"log/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Application log files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"public/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Data accessible to the public (e.g., via web browsers), such as error pages")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"bin/rails"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"A program for generating code, opening console sessions, or starting a local server")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"test/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Application tests")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"tmp/"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Temporary files")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"README.md"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"A brief description of the application")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Gemfile"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Gem requirements for this app")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"Gemfile.lock"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"A list of gems used to ensure that all copies of the app use the same gem versions")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"config.ru"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"A configuration file for Rack middleware")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),".gitignore"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Patterns for files that should be ignored by Git")))),Object(a.b)("p",null,"Change into the scaffolded folder ",Object(a.b)("inlineCode",{parentName:"p"},"cd hello_app"),"."),Object(a.b)("p",null,"In the app we are using, there is going to be an explicit Gemfile that we wish to use:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),"source 'https://rubygems.org'\ngit_source(:github) { |repo| \"https://github.com/#{repo}.git\" }\n\ngem 'rails',      '6.1.0'\ngem 'puma',       '5.0.4'\ngem 'sass-rails', '6.0.0'\ngem 'webpacker',  '4.2.2'\ngem 'turbolinks', '5.2.1'\ngem 'jbuilder',   '2.10.0'\ngem 'bootsnap',   '1.4.6', require: false\n\ngroup :development, :test do\n  gem 'sqlite3', '1.4.2'\n  gem 'byebug',  '11.1.3', platforms: [:mri, :mingw, :x64_mingw]\nend\n\ngroup :development do\n  gem 'web-console',           '4.1.0'\n  gem 'listen',                '3.2.1'\n  gem 'spring',                '2.1.1'\n  gem 'spring-watcher-listen', '2.0.1'\nend\n\ngroup :test do\n  gem 'capybara',           '3.32.2'\n  gem 'selenium-webdriver', '3.142.7'\n  gem 'webdrivers',         '4.3.0'\nend\n\n# Windows does not include zoneinfo files, so bundle the tzinfo-data gem\n# Uncomment the following line if you're running Rails\n# on a native Windows system:\n# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]\n")),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"bundle install")," to install those gems. You may get a message requiring ",Object(a.b)("inlineCode",{parentName:"p"},"bundle update")," if you have conflicts with the Gem lockfile ",Object(a.b)("inlineCode",{parentName:"p"},"Gemfile.lock"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: When adding the above, I ran into startup server issues, so I reverted back to the defaults given when scaffolding a new application.")),Object(a.b)("h2",{id:"rails-server"},"rails server"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"rails server")," command will get a webserver up and running. Run that to get things up and running."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There is also a short command ",Object(a.b)("inlineCode",{parentName:"p"},"rails s"),".")),Object(a.b)("p",null,"Once running, if you head to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," you will get the welcome page."),Object(a.b)("p",null,"The welcome page includes the Rails version, as well as the Ruby version on your system."),Object(a.b)("h2",{id:"model-view-controller-mvc"},"Model-View-Controller (MVC)"),Object(a.b)("p",null,"This follows the MVC pattern which conveniently alligns with subfolders of ",Object(a.b)("inlineCode",{parentName:"p"},"app/")," aptly named ",Object(a.b)("inlineCode",{parentName:"p"},"models"),", ",Object(a.b)("inlineCode",{parentName:"p"},"views")," and ",Object(a.b)("inlineCode",{parentName:"p"},"controllers"),"."),Object(a.b)("p",null,"For a short excerpt overview of interaction with the Rails application, we have the following:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"When interacting with a Rails application, a browser sends a request, which is received by a webserver and passed on to a Rails controller, which is in charge of what to do next. In some cases, the controller will immediately render a view, which is a template that gets converted to HTML and sent back to the browser. More commonly for dynamic sites, the controller interacts with a model, which is a Ruby object that represents an element of the site (such as a user) and is in charge of communicating with the database. After invoking the model, the controller then renders the view and returns the complete web page to the browser as HTML."'))),Object(a.b)("p",null,"When creating a new project, you only start with one controller: the ",Object(a.b)("inlineCode",{parentName:"p"},"application")," controller. You can confirm this by running ",Object(a.b)("inlineCode",{parentName:"p"},"ls app/controllers/*_controller.rb"),"."),Object(a.b)("p",null,"Update the controller to take a new ",Object(a.b)("inlineCode",{parentName:"p"},"hello")," method:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),'class ApplicationController < ActionController::Base\n  def hello\n    render html: "hello, world!"\n  end\nend\n')),Object(a.b)("p",null,"Now that we have the action to return the desired stringm we need to tell Rails to use that action instead of the default page. We will need to edit the ",Object(a.b)("inlineCode",{parentName:"p"},"router")," (which sits in front of the controller)"),Object(a.b)("p",null,"We will need to head to ",Object(a.b)("inlineCode",{parentName:"p"},"config/routes.rb")," where it can direct us to the ",Object(a.b)("a",r({parentName:"p"},{href:"https://guides.rubyonrails.org/routing.html"}),"routing guide")," on the Rails website to learn more about routing."),Object(a.b)("p",null,"On the webpage under ",Object(a.b)("a",r({parentName:"p"},{href:"https://guides.rubyonrails.org/routing.html#using-root"}),"#using-root"),", it informs us that you can specify where ",Object(a.b)("inlineCode",{parentName:"p"},"/")," should route to with the ",Object(a.b)("inlineCode",{parentName:"p"},"root")," method."),Object(a.b)("p",null,"We can do this with ",Object(a.b)("inlineCode",{parentName:"p"},"root to: 'controller_name#action_name")," which in shorthand is ",Object(a.b)("inlineCode",{parentName:"p"},"root 'controller_name#action_name'"),"."),Object(a.b)("p",null,"And so, we update the page like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),'Rails.application.routes.draw do\n  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html\n  root "application#hello"\nend\n')),Object(a.b)("p",null,"For future reference, you can also specify a root within a ",Object(a.b)("inlineCode",{parentName:"p"},"namespace")," like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),'namespace :admin do\n  root to: "admin#index"\nend\n')),Object(a.b)("h2",{id:"deploying-on-heroku"},"Deploying on Heroku"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are having issues, ensure to just follow the ",Object(a.b)("a",r({parentName:"p"},{href:"https://devcenter.heroku.com/articles/getting-started-with-rails6#add-the-pg-gem"}),"Heroku docs"),". I ended up just downloading the Postgres Docker image, running ",Object(a.b)("inlineCode",{parentName:"p"},"docker run --name hello-postgres -d -e POSTGRES_PASSWORD=password -v /var/run/postgresql:/var/run/postgresql -p 5432:5432 postgres")," and following the docs which failed, so I used the local Postgres and had to run a few things that I found from ",Object(a.b)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/13410686/postgres-could-not-connect-to-server"}),"StackOverflow"),". It was painful.\nUpdate: The solution for the whole issue I had with Heroku with Rails 6.1 was to ",Object(a.b)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/36394297/heroku-push-error-could-not-detect-rake-tasks/65333470#65333470"}),"downgrade bundler"),"... wow.")),Object(a.b)("p",null,"Heroku uses PostgreSQL, so we need to add the PostgreSQL gem for production use:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rb"}),"group :production do\n  gem 'pg', '1.2.3'\nend\n")),Object(a.b)("p",null,"You should also move the ",Object(a.b)("inlineCode",{parentName:"p"},"sqlite3")," gem to ",Object(a.b)("inlineCode",{parentName:"p"},":development")," to ensure it is not included in the production environment."),Object(a.b)("p",null,"To bundle without production gems, you run ",Object(a.b)("inlineCode",{parentName:"p"},"bundle install --without production"),". More recent versions of Bundler will ask you to run ",Object(a.b)("inlineCode",{parentName:"p"},"bundle config set without 'production' && bundle install"),"."),Object(a.b)("p",null,"For the deployment of Heroku, you will to have a Heroku account and setup the Heroku CLI. On MacOS you can do this via Brew ",Object(a.b)("inlineCode",{parentName:"p"},"brew install heroku/brew/heroku"),"."),Object(a.b)("p",null,"Once installed, run ",Object(a.b)("inlineCode",{parentName:"p"},"heroku login --interactive")," for the interactive login process."),Object(a.b)("p",null,"After logging in, create a new application with ",Object(a.b)("inlineCode",{parentName:"p"},"heroku create"),"."),Object(a.b)("p",null,"To run the deploy, we need to use Git to push the master branch to Heroku with ",Object(a.b)("inlineCode",{parentName:"p"},"git push heroku main")," (or master if you are using master)."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: ensure that your version of Ruby uses the ",Object(a.b)("a",r({parentName:"p"},{href:"https://devcenter.heroku.com/articles/ruby-support#supported-runtimes"}),"supported Ruby runtimes"),".\nIf you also run into an issue asking if you can detect rake tasks, try ",Object(a.b)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/36394297/heroku-push-error-could-not-detect-rake-tasks/36394839"}),"precompiling the assets")," with ",Object(a.b)("inlineCode",{parentName:"p"},"RAILS_ENV=production bundle exec rake assets:precompile"))),Object(a.b)("p",null,"Finally, run ",Object(a.b)("inlineCode",{parentName:"p"},"heroku apps:info")," to get the information and web URL for your deployment!"),Object(a.b)("h3",{id:"heroku-commands"},"Heroku Commands"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Command"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Outcome"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"heroku rename rails-tutorial-hello")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Renames the local Heroku app to ",Object(a.b)("inlineCode",{parentName:"td"},"rails-tutorial-hello"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"heroku help")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"See list of Heroku commands")))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby-On-Rails-Tutorial/From-Zero-To-Deploy.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-on-rails-tutorial-from-zero-to-deploy-md-2cb32fc5bd4b4f8a5346.js.map