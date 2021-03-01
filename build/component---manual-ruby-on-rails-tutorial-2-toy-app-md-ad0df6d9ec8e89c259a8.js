(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{sIV8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return c}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby-On-Rails-Tutorial/2-Toy-App.md"}});var i={_frontmatter:s},l=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"toy-app"},"Toy App"),Object(r.b)("h2",{id:"the-users-resource"},"The Users Resource"),Object(r.b)("p",null,"We can scaffold the users resource with the following:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-s"}),"rails generate scaffold User name:string email:string\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: There is no need to create a parameter for ",Object(r.b)("inlineCode",{parentName:"p"},"id")," - it is created for you.")),Object(r.b)("p",null,"Generally speaking, it is not a great idea to get too deep into scaffolding."),Object(r.b)("p",null,"That generation will create a migration in ",Object(r.b)("inlineCode",{parentName:"p"},"db/migrate"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In Rails 6, you should use ",Object(r.b)("inlineCode",{parentName:"p"},"rails")," in place of ",Object(r.b)("inlineCode",{parentName:"p"},"rake"),".")),Object(r.b)("p",null,"That generation of the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," will create the routing for the following:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"URL"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"Action"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"Purpose"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"/users"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"index"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"page to list all users")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"/users/1"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"show"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"page to show user with id 1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"/users/new"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"new"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"page to make a new user")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"/users/1/edit"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"edit"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"page to edit user with id 1")))),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"config/routes.rb"),", this comes under ",Object(r.b)("inlineCode",{parentName:"p"},"resources :users")),Object(r.b)("h2",{id:"mvc-in-action"},"MVC in action"),Object(r.b)("p",null,"At first, the users are fetched from the Rails Router as step (1) which finds the resource in the controller and correct action to take as step (2)."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),'class UsersController < ApplicationController\n  before_action :set_user, only: %i[ show edit update destroy ]\n\n  # GET /users or /users.json\n  def index\n    @users = User.all\n  end\n\n  # GET /users/1 or /users/1.json\n  def show\n  end\n\n  # GET /users/new\n  def new\n    @user = User.new\n  end\n\n  # GET /users/1/edit\n  def edit\n  end\n\n  # POST /users or /users.json\n  def create\n    @user = User.new(user_params)\n\n    respond_to do |format|\n      if @user.save\n        format.html { redirect_to @user, notice: "User was successfully created." }\n        format.json { render :show, status: :created, location: @user }\n      else\n        format.html { render :new, status: :unprocessable_entity }\n        format.json { render json: @user.errors, status: :unprocessable_entity }\n      end\n    end\n  end\n\n  # PATCH/PUT /users/1 or /users/1.json\n  def update\n    respond_to do |format|\n      if @user.update(user_params)\n        format.html { redirect_to @user, notice: "User was successfully updated." }\n        format.json { render :show, status: :ok, location: @user }\n      else\n        format.html { render :edit, status: :unprocessable_entity }\n        format.json { render json: @user.errors, status: :unprocessable_entity }\n      end\n    end\n  end\n\n  # DELETE /users/1 or /users/1.json\n  def destroy\n    @user.destroy\n    respond_to do |format|\n      format.html { redirect_to users_url, notice: "User was successfully destroyed." }\n      format.json { head :no_content }\n    end\n  end\n\n  private\n    # Use callbacks to share common setup or constraints between actions.\n    def set_user\n      @user = User.find(params[:id])\n    end\n\n    # Only allow a list of trusted parameters through.\n    def user_params\n      params.require(:user).permit(:name, :email)\n    end\nend\n')),Object(r.b)("p",null,"For the ",Object(r.b)("inlineCode",{parentName:"p"},"index")," route, we get an instance variable assigned:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"# GET /users or /users.json\ndef index\n  @users = User.all\nend\n")),Object(r.b)("p",null,"Step (3) is to talk to the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model, which you will notice is empty (but inherits all the functionality from ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationRecord"),"):"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"class User < ApplicationRecord\nend\n")),Object(r.b)("p",null,"Step (4), the user model will then talk to the database.\nStep (5), the result is passed back to the controller.\nStep (6) is passing that data to the view.\nStep (7) returns HTML to the controller.\nStep (8) is the controller returning that HTML to the browser."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"He admits that step (8) may not happen - the view may be returned directly to the user. He likes the think the controller is in between.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It is conventional in Rails for the controller to be plural.")),Object(r.b)("p",null,"Just know, that the set of URLs that Rails supplies is known as a ",Object(r.b)("inlineCode",{parentName:"p"},"resource"),"."),Object(r.b)("h2",{id:"the-weaknesses-of-our-current-users-resource"},"The weaknesses of our current Users resource"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"No validation."),Object(r.b)("li",{parentName:"ol"},"No authentication (and no way to prevent operations)."),Object(r.b)("li",{parentName:"ol"},"No tests."),Object(r.b)("li",{parentName:"ol"},"No style or layout."),Object(r.b)("li",{parentName:"ol"},"No real understanding. If you understand the scaffold codem you probably shouldn't do this course/book.")),Object(r.b)("h2",{id:"adding-the-microposts"},"Adding the Microposts"),Object(r.b)("p",null,'We will use the scaffold again to create the microposts. Something worth noting here is that we are not going to use the "foreign key" type connection.'),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-s"}),"rails generate scaffold Micropost content:text user_id:integer\n# again, run the migration\nrails db:migrate\n")),Object(r.b)("p",null,"Note, if you mess up the initial generate, you can roll things back like so:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"# If you migrated the db\nrails db:migrate\n# Destory scaffold files\nrails destroy scaffold Micropost\n")),Object(r.b)("p",null,"We want the content to be short (140 chars). To do this, we can do this in the ",Object(r.b)("inlineCode",{parentName:"p"},"Micropost")," model:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"class Micropost < ApplicationRecord\n  validates :content, length: { maximum: 140 }\nend\n")),Object(r.b)("h2",{id:"a-user-has_many-microposts"},'A user "has_many" microposts'),Object(r.b)("p",null,"To associate, we head to the User model and let is know is has many microposts:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"# app/models/user.rb\nclass User < ApplicationRecord\n  has_many :microposts\nend\n\n# app/models/micropost.rb\nclass Micropost < ApplicationRecord\n  belongs_to :user\n  validates :content, length: { maximum: 140 }\nend\n")),Object(r.b)("p",null,"Later on, we can express that relationship through the web interface. For now, we will see how it works on the Rails Console."),Object(r.b)("p",null,"This can be accessed with ",Object(r.b)("inlineCode",{parentName:"p"},"rails console")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"rails c")," for short)."),Object(r.b)("p",null,"We can find the first user in the console with ",Object(r.b)("inlineCode",{parentName:"p"},"User.first"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: you can assign the previous result with ",Object(r.b)("inlineCode",{parentName:"p"},"_")," so ",Object(r.b)("inlineCode",{parentName:"p"},"first_user = _"),".")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),'irb(main):001:0> User.first\n   (0.6ms)  SELECT sqlite_version(*)\n  User Load (0.1ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT ?  [["LIMIT", 1]]\n=> #<User id: 1, name: "Dennis O\'Keeffe", email: "hello@dennisokeeffe.com", created_at: "2021-02-02 04:36:03.016350000 +0000", updated_at: "2021-02-02 04:36:41.666319000 +0000">\nirb(main):002:0> first_user = _\n=> #<User id: 1, name: "Dennis O\'Keeffe", email: "hello@dennisokeeffe.com", created_at: "2021-02-02 04:36:03.016350000 +0000", updated_at: "2021-02-02 04:36:41.666319000 +0000">\nirb(main):008:0> first_user.microposts\n  Micropost Load (0.2ms)  SELECT "microposts".* FROM "microposts" WHERE "microposts"."user_id" = ? /* loading for inspect */ LIMIT ?  [["user_id", 1], ["LIMIT", 11]]\n=> #<ActiveRecord::Associations::CollectionProxy [#<Micropost id: 1, content: "Hello, world!", user_id: 1, created_at: "2021-02-02 05:19:30.508188000 +0000", updated_at: "2021-02-02 05:19:30.508188000 +0000">]>\nirb(main):010:0> first_micropost = first_user.microposts.first\n  Micropost Load (0.2ms)  SELECT "microposts".* FROM "microposts" WHERE "microposts"."user_id" = ? ORDER BY "microposts"."id" ASC LIMIT ?  [["user_id", 1], ["LIMIT", 1]]\n=> #<Micropost id: 1, content: "Hello, world!", user_id: 1, created_at: "2021-02-02 05:19:30.508188000 +0000", updated_at: "2021-02-02 05:19:30.508188000 +0000">\nirb(main):011:0> first_micropost.user\n=> #<User id: 1, name: "Dennis O\'Keeffe", email: "hello@dennisokeeffe.com", created_at: "2021-02-02 04:36:03.016350000 +0000", updated_at: "2021-02-02 04:36:41.666319000 +0000">\n')),Object(r.b)("p",null,"As a final input (back in regards to our forms to create a new micropost), you can also validate that fields have a value present using ",Object(r.b)("inlineCode",{parentName:"p"},"presence")," in the data model:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-rb"}),"class Micropost < ApplicationRecord\n  belongs_to :user\n  validates :content, length: { maximum: 140 },\n                      presence: true\nend\n")),Object(r.b)("h2",{id:"inheritance-hierarchies"},"Inheritance hierarchies"),Object(r.b)("p",null,"This is mainly for those with backgrounds in OOP."),Object(r.b)("p",null,"This section just speaks to the inheritance heirarchy for the controllers, models, etc."),Object(r.b)("p",null,"For the ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationController")," that everything else inherits from, it is due to the convenience of adding things to the ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationController")," that apply to all the other controllers in the application."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby-On-Rails-Tutorial/2-Toy-App.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-on-rails-tutorial-2-toy-app-md-ad0df6d9ec8e89c259a8.js.map