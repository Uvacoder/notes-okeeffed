(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{cdBy:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Testing/UI-Testing-Web.md"}});var s={_frontmatter:i},c=r.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(c,a({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ui-testing-web"},"UI Testing Web"),Object(o.b)("p",null,"For web, we can test UI elements by making the most of Puppeteer and both the Emitter and Recorder JS packages from Kratos and the ",Object(o.b)("inlineCode",{parentName:"p"},"json-server")," js-controller package from Kratos."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-shell"}),"kratos install js-controllers json-server\nkratos install js Emitter\nkratos install js Recorder\n# install puppeteer, mocha, json-server etc if required - should be bootstrappable\n")),Object(o.b)("h2",{id:"setting-up-for-the-tests"},"Setting up for the tests"),Object(o.b)("p",null,"Within the component module you want to target, create a ",Object(o.b)("inlineCode",{parentName:"p"},".puppeteer.js")," file and a ",Object(o.b)("inlineCode",{parentName:"p"},"db.json")," file."),Object(o.b)("h2",{id:"the-component-file"},"The component file"),Object(o.b)("p",null,"We use the ",Object(o.b)("inlineCode",{parentName:"p"},"Emitter")," module to emit events to our file, which in turn will - if config is in ",Object(o.b)("inlineCode",{parentName:"p"},"debug")," mode, pass on to JSON Server to generate our event emission file."),Object(o.b)("p",null,"The component could look like this for example:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport Emitter from 'common/Emitter';\nimport Config from 'src/app.json';\nimport Waypoint from 'react-waypoint';\n\n/**\n * Render the Component component\n *\n * @class Component\n * @extends {Component}\n */\nclass Component extends Component {\n  /**\n   * Handle primary button click event.\n   *\n   * @memberof Component\n   */\n  handlePrimaryClick = (e) => {\n    Emitter.emit('event', {\n      event: 'Component.handlePrimaryClick',\n      e: e.target\n    });\n\n    if (Config.debug) {\n      e.preventDefault();\n      return;\n    }\n\n    const { router } = this.props;\n    router.push(Config.baseUrl + '/test');\n  };\n\n  /**\n   * Handle component enter event.\n   *\n   * @memberof Component\n   */\n  handleWaypointEnter = (e) => {\n    Emitter.emit('event', { event: 'Component.handleWaypointEnter' });\n  };\n\n  /**\n   * Handle component exit event.\n   *\n   * @memberof Component\n   */\n  handleWaypointExit = (e) => {\n    Emitter.emit('event', { event: 'Component.handleWaypointExit' });\n  };\n\n  /**\n   * Render Component component\n   * @memberof Component\n   * @var {function} render Render Component component\n   * @returns {Object} component\n   */\n  render() {\n    const {\n      title,\n      subtitle,\n      buttonPrimary,\n      buttonSecondary,\n      imageMain\n    } = this.props.copy;\n\n    return (\n      <Waypoint\n        onEnter={this.handleWaypointEnter}\n        onLeave={this.handleWaypointExit}\n      >\n        <div className=\"component\">\n          <div className=\"container content\">\n            <button\n              onClick={this.handlePrimaryClick}\n              className=\"button primary f-primary cta animate\"\n            >\n              {buttonPrimary}\n            </button>\n          </div>\n        </div>\n      </Waypoint>\n    );\n  }\n}\n\nexport default Component;\n")),Object(o.b)("h2",{id:"recording-the-events-manually-on-the-web"},"Recording the events manually on the web"),Object(o.b)("p",null,"Use the Puppeteer recorder to do a runthrough of the events you want to cover. ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/checkly/puppeteer-recorder"}),"Check here")," for more info."),Object(o.b)("p",null,"After running through with the recorder, we should be able to modify the Puppeteer template. The end result could look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"/**\n * ComponentALLandingOne tests\n */\nconst puppeteer = require('puppeteer');\nconst json = require('./db.json');\nconst fs = require('fs-extra');\nconst cwd = process.cwd();\nconst server = require(cwd + '/controllers/json-server');\nconst wait = require('waait');\nconst Recorder = require(cwd + '/src/common/Recorder').default;\nlet dbJson;\nserver.listen(4444, () => console.log('JSON DB server started'));\n\ndescribe('ComponentALLandingFive UI functionality', () => {\n  describe('ComponentALLandingFive events', () => {\n    beforeEach(() => {\n      dbJson = fs.readJsonSync(cwd + '/db.json');\n      dbJson.events.map((e) => Recorder.delete(e.id));\n    });\n\n    it('Events emitted equals prerecording', async () => {\n      const browser = await puppeteer.launch();\n      const page = await browser.newPage();\n\n      await page.goto('http://localhost:3000/ComponentALLandingFive');\n      await page.waitForSelector(\n        '.grid > .item > .flex > .block-info > .primary'\n      );\n      await page.click('.grid > .item > .flex > .block-info > .primary');\n\n      await page.goto('http://localhost:3000/ComponentALLandingFive');\n\n      await browser.close();\n\n      await wait(300);\n      dbJson = fs.readJsonSync(cwd + '/db.json');\n\n      expect(dbJson).to.deep.equal(json);\n    });\n  });\n});\n")),Object(o.b)("h2",{id:"init-the-component-dbjson-file"},"Init the component db.json file"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "events": []\n}\n')),Object(o.b)("h2",{id:"first-run-through-of-the-file"},"First run through of the file"),Object(o.b)("p",null,"If we decide to run that Puppeteer test"))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Testing/UI-Testing-Web.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-testing-ui-testing-web-md-84b63301abce29024870.js.map