(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{UbOK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var r=n("/FXl"),a=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Stripe/Rails-Stripe-Configuration.md"}});var i={_frontmatter:o},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"rails-stripe-configuration"},"Rails Stripe Configuration"),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"https://guides.rubyonrails.org/api_app.html"}),"Using Rails for API only")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"https://github.com/stripe/stripe-ruby"}),"Stripe Ruby Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"https://github.com/bkeepers/dotenv"}),"Dotenv Ruby Github")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"http://www.xyzpub.com/en/ruby-on-rails/3.2/scaffold_anlegen.html"}),"Scaffolding routes")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"https://thoughtbot.com/blog/back-to-basics-http-requests"}),"HTTP Requests in Rails Apps")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",l({parentName:"li"},{href:"https://guides.rubyonrails.org/v5.2/action_controller_overview.html"}),"Action Controlller Overview"))),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"Assuming you have Rails installed, run the following:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails new ruby-rails-stripe\ncd ruby-rails-stripe\n")),Object(r.b)("p",null,"Add the following to the top of your ",Object(r.b)("inlineCode",{parentName:"p"},"Gemfile")," for us to read local dotenv values and bundle Stripe."),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"gem 'dotenv-rails', groups: [:development, :test]\ngem 'stripe'\n")),Object(r.b)("p",null,"On the console, run ",Object(r.b)("inlineCode",{parentName:"p"},"bundle"),"."),Object(r.b)("h2",{id:"scaffolding-the-charges-route"},"Scaffolding the Charges Route"),Object(r.b)("p",null,"From the console run:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails generate controller Charges create\n")),Object(r.b)("p",null,"This will scaffold our ",Object(r.b)("inlineCode",{parentName:"p"},"app/controllers/charges_controller.rb")," controller."),Object(r.b)("p",null,"Inside that, let's update the code:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"require 'stripe'\n\nclass ChargesController < ApplicationController\n  # POST /charge\n  # POST /charge.json\n  def create\n    # `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token\n    charge = Stripe::Charge.create({\n      amount: params[:amount],\n      currency: 'aud',\n      source: 'tok_amex',\n      receipt_email: params[:receipt_email],\n      description: 'My First Test Charge (created for API docs)',\n    })\n    render json: charge\n  end\nend\n")),Object(r.b)("p",null,"This code will make a charge to Stripe using the JSON body params ",Object(r.b)("inlineCode",{parentName:"p"},"amount")," and ",Object(r.b)("inlineCode",{parentName:"p"},"receipt_email"),"."),Object(r.b)("p",null,"If the charge is successful, it will return the charge information as JSON."),Object(r.b)("h2",{id:"updating-configroutesrb"},"Updating config/routes.rb"),Object(r.b)("p",null,"Ensure routes has the following for POST:"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"Rails.application.routes.draw do\n  # ... the rest is omitted for brevity\n  post 'charges/create'\n  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\nend\n")),Object(r.b)("p",null,"This ensures that we can send a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:PORT/charges/create")," when we run the server."),Object(r.b)("h2",{id:"running-the-code"},"Running the code"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"rails server")," to get our server up and running (defaulting to 3000), then call ",Object(r.b)("inlineCode",{parentName:"p"},"http POST http://localhost:3000/charges/create amount:=1700 receipt_email=hello_rails@example.com")," (using HTTPie) and we will get back our charge results sent as JSON. Hooray!"))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Stripe/Rails-Stripe-Configuration.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-stripe-rails-stripe-configuration-md-c5bbedc6d17c514ca237.js.map