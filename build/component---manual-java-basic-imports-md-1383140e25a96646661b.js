(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{vWO2:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Java/Basic-Imports.md"}});var l={_frontmatter:r},o=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(o,s({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-java-importing"},"Basic Java Importing"),Object(a.b)("p",null,"This is a basic reminder on how to declare ",Object(a.b)("inlineCode",{parentName:"p"},"packages")," and import those packages when running Gradle tests."),Object(a.b)("h2",{id:"layout"},"Layout"),Object(a.b)("p",null,"Given the following example to test a ",Object(a.b)("inlineCode",{parentName:"p"},"Linked List")," Java class, we have the following layout for the ",Object(a.b)("inlineCode",{parentName:"p"},".java")," and test files:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-shell"}),"└── src\n    ├── main\n    │   └── java\n    │       ├── LinkedList.java\n    │       └── Node.java\n    └── test\n        └── java\n            └── LinkedListTest.java\n")),Object(a.b)("h2",{id:"file-1-srcmainjavalinkedlistjava"},"File 1: src/main/java/LinkedList.java"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-java"}),"import main.java.Node;\n\nclass LinkedList {\n    Integer size;\n    Node head;\n\n    public LinkedList() {\n        this.size = 0;\n        this.head = null;\n    }\n\n    public LinkedList(Node head) {\n        this.size = 1;\n        this.head = head;\n    }\n\n    public Integer getSize() {\n        return this.size;\n    }\n\n    public Node getFirst() {\n        return this.head;\n    }\n}\n")),Object(a.b)("h2",{id:"file-2-srcmainjavanodejava"},"File 2: src/main/java/Node.java"),Object(a.b)("p",null,"Notice here that the package itself is has the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," modifier and has the package ",Object(a.b)("inlineCode",{parentName:"p"},"main.java")," itself declared."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-java"}),"package main.java;\n\npublic class Node {\n    private Integer data;\n    private Node next;\n\n    public Node(Integer data) {\n        this.data = data;\n        this.next = null;\n    }\n\n    public Node(Integer data, Node next) {\n        this.data = data;\n        this.next = next;\n    }\n\n    public void setNext(Node next) {\n        this.next = next;\n    }\n\n    public Node getNext() {\n        return this.next;\n    }\n\n    public void setData(Integer data) {\n        this.data = data;\n    }\n\n    public Integer getData() {\n        return this.data;\n    }\n}\n")),Object(a.b)("h2",{id:"file-3-srctestjavalinkedlisttestjava"},"File 3: src/test/java/LinkedListTest.java"),Object(a.b)("p",null,"For this particular test, we also need to import the ",Object(a.b)("inlineCode",{parentName:"p"},"Node")," package to ensure we can create nodes for the LinkedList."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-java"}),"import org.junit.Ignore;\nimport org.junit.Test;\n\nimport static org.junit.Assert.assertEquals;\nimport main.java.Node;\n\npublic class LinkedListTest {\n    @Test\n    public void testGetFirst() {\n        Node n1 = new Node(2);\n        LinkedList ll = new LinkedList(n1);\n        assertEquals(ll.getFirst(), n1);\n    }\n}\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Java/Basic-Imports.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-java-basic-imports-md-1383140e25a96646661b.js.map