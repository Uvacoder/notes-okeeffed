(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{pRqu:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return a})),t.d(e,"default",(function(){return s}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),o=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Design-Patterns/Bridge-Pattern.md"}});var c={_frontmatter:a},l=o.a;function s(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["components"]);return Object(r.b)(l,i({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bridge-pattern"},"Bridge Pattern"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"interface Executive {\n  operate(): void;\n}\n\nclass Pilot implements Executive {\n  operate(): void {\n    console.log('Fly');\n  }\n}\n\nclass Soldier implements Executive {\n  operate(): void {\n    console.log('Shoot');\n  }\n}\n\nclass Commander {\n  executeObject: Executive;\n\n  constructor(executeObject: Executive) {\n    this.executeObject = executeObject;\n  }\n\n  order(): void {\n    this.executeObject.operate();\n  }\n}\n\nclass AirForceCommander extends Commander {\n  order(): void {\n    console.log('Air Force commander make order');\n    // extra logics here\n    super.order();\n  }\n}\n\nclass SpecialForceCommander extends Commander {\n  order(): void {\n    console.log('Special Force commander make order');\n    // extra logics here\n    super.order();\n  }\n}\n\n(function main() {\n  const commanderA = new AirForceCommander(new Pilot());\n  const commanderB = new SpecialForceCommander(new Soldier());\n\n  commanderA.order();\n  commanderB.order();\n})();\n")),Object(r.b)("h2",{id:"c-example"},"C# Example"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-csharp"}),'// Helps in providing truly decoupled architecture\npublic interface IBridge\n{\n    void Function1();\n    void Function2();\n}\n\npublic class Bridge1 : IBridge\n{\n    public void Function1()\n    {\n        Console.WriteLine("Bridge1.Function1");\n    }\n\n    public void Function2()\n    {\n        Console.WriteLine("Bridge1.Function2");\n    }\n}\n\npublic class Bridge2 : IBridge\n{\n    public void Function1()\n    {\n        Console.WriteLine("Bridge2.Function1");\n    }\n\n    public void Function2()\n    {\n        Console.WriteLine("Bridge2.Function2");\n    }\n}\n\npublic interface IAbstractBridge\n{\n    void CallMethod1();\n    void CallMethod2();\n}\n\npublic class AbstractBridge : IAbstractBridge\n{\n    public IBridge bridge;\n\n    public AbstractBridge(IBridge bridge)\n    {\n        this.bridge = bridge;\n    }\n\n    public void CallMethod1()\n    {\n        this.bridge.Function1();\n    }\n\n    public void CallMethod2()\n    {\n        this.bridge.Function2();\n    }\n}\n')),Object(r.b)("h2",{id:"java-example"},"Java Example"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-java"}),'// Logger has two implementations: info and warning\ninterface Logger {\n  public void log(String message);\n\n  static Logger info() {\n    return message -> System.out.println("info: " + message);\n  }\n  static Logger warning() {\n    return message -> System.out.println("warning: " + message);\n  }\n}\n\nabstract class AbstractAccount {\n  private Logger logger = Logger.info();\n\n  public void setLogger(Logger logger) {\n    this.logger = logger;\n  }\n\n  // the logging part is delegated to the Logger implementation\n  protected void operate(String message, boolean result) {\n    logger.log(message + " result " + result);\n  }\n}\n\nclass SimpleAccount extends AbstractAccount {\n  private int balance;\n\n  public SimpleAccount(int balance) {\n    this.balance = balance;\n  }\n\n  public boolean isBalanceLow() {\n    return balance < 50;\n  }\n\n  public void withdraw(int amount) {\n    boolean shouldPerform = balance >= amount;\n    if (shouldPerform) {\n      balance -= amount;\n    }\n    operate("withdraw " + amount, shouldPerform);\n  }\n}\n\npublic class BridgeDemo {\n  public static void main(String[] args) {\n    SimpleAccount account = new SimpleAccount(100);\n    account.withdraw(75);\n\n    if (account.isBalanceLow()) {\n      // you can also change the Logger implementation at runtime\n      account.setLogger(Logger.warning());\n    }\n\n    account.withdraw(10);\n    account.withdraw(100);\n  }\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Design-Patterns/Bridge-Pattern.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-design-patterns-bridge-pattern-md-c809ea17ace8e126ac9d.js.map