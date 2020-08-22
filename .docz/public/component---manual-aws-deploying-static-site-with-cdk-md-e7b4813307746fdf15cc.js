(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{duB7:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return a})),n.d(e,"default",(function(){return u}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/Deploying-Static-Site-with-CDK.md"}});var s={_frontmatter:a},c=o.a;function u(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["components"]);return Object(i.b)(c,r({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"deploying-a-static-site-with-the-aws-cdk"},"Deploying a static site with the AWS CDK"),Object(i.b)("p",null,"Use the resource to add more detail. More to come."),Object(i.b)("h2",{id:"indexts"},"index.ts"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-ts"}),"#!/usr/bin/env node\nimport cdk = require('@aws-cdk/core');\nimport { StaticSite } from './static-site';\n\n/**\n * This stack relies on getting the domain name from CDK context.\n * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www'\n * Or add the following to cdk.json:\n * {\n *   \"context\": {\n *     \"domain\": \"mystaticsite.com\",\n *     \"subdomain\": \"www\"\n *   }\n * }\n **/\nclass MyStaticSiteStack extends cdk.Stack {\n  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {\n    super(parent, name, props);\n\n    new StaticSite(this, 'StaticSite', {\n      domainName: this.node.tryGetContext('domain'),\n      siteSubDomain: this.node.tryGetContext('subdomain'),\n    });\n  }\n}\n\nconst app = new cdk.App();\n\nnew MyStaticSiteStack(app, 'MyStaticSite', {\n  env: {\n    // Stack must be in us-east-1, because the ACM certificate for a\n    // global CloudFront distribution must be requested in us-east-1.\n    region: 'us-east-1',\n  },\n});\n\napp.synth();\n")),Object(i.b)("h2",{id:"s3-stack"},"S3 Stack"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-ts"}),"#!/usr/bin/env node\nimport cloudfront = require('@aws-cdk/aws-cloudfront');\nimport route53 = require('@aws-cdk/aws-route53');\nimport s3 = require('@aws-cdk/aws-s3');\nimport s3deploy = require('@aws-cdk/aws-s3-deployment');\nimport acm = require('@aws-cdk/aws-certificatemanager');\nimport cdk = require('@aws-cdk/core');\nimport targets = require('@aws-cdk/aws-route53-targets/lib');\nimport { Construct } from '@aws-cdk/core';\n\nexport interface StaticSiteProps {\n  domainName: string;\n  siteSubDomain: string;\n}\n\n/**\n * Static site infrastructure, which deploys site content to an S3 bucket.\n *\n * The site redirects from HTTP to HTTPS, using a CloudFront distribution,\n * Route53 alias record, and ACM certificate.\n */\nexport class StaticSite extends Construct {\n  constructor(parent: Construct, name: string, props: StaticSiteProps) {\n    super(parent, name);\n\n    const zone = route53.HostedZone.fromLookup(this, 'Zone', {\n      domainName: props.domainName,\n    });\n    const siteDomain = props.siteSubDomain + '.' + props.domainName;\n    new cdk.CfnOutput(this, 'Site', { value: 'https://' + siteDomain });\n\n    // Content bucket\n    const siteBucket = new s3.Bucket(this, 'SiteBucket', {\n      bucketName: siteDomain,\n      websiteIndexDocument: 'index.html',\n      websiteErrorDocument: 'error.html',\n      publicReadAccess: true,\n\n      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete\n      // the new bucket, and it will remain in your account until manually deleted. By setting the policy to\n      // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.\n      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code\n    });\n    new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });\n\n    // TLS certificate\n    const certificateArn = new acm.DnsValidatedCertificate(\n      this,\n      'SiteCertificate',\n      {\n        domainName: siteDomain,\n        hostedZone: zone,\n        region: 'us-east-1', // Cloudfront only checks this region for certificates.\n      },\n    ).certificateArn;\n    new cdk.CfnOutput(this, 'Certificate', { value: certificateArn });\n\n    // CloudFront distribution that provides HTTPS\n    const distribution = new cloudfront.CloudFrontWebDistribution(\n      this,\n      'SiteDistribution',\n      {\n        aliasConfiguration: {\n          acmCertRef: certificateArn,\n          names: [siteDomain],\n          sslMethod: cloudfront.SSLMethod.SNI,\n          securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,\n        },\n        originConfigs: [\n          {\n            s3OriginSource: {\n              s3BucketSource: siteBucket,\n            },\n            behaviors: [{ isDefaultBehavior: true }],\n          },\n        ],\n      },\n    );\n    new cdk.CfnOutput(this, 'DistributionId', {\n      value: distribution.distributionId,\n    });\n\n    // Route53 alias record for the CloudFront distribution\n    new route53.ARecord(this, 'SiteAliasRecord', {\n      recordName: siteDomain,\n      target: route53.RecordTarget.fromAlias(\n        new targets.CloudFrontTarget(distribution),\n      ),\n      zone,\n    });\n\n    // Deploy site contents to S3 bucket\n    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {\n      sources: [s3deploy.Source.asset('./site-contents')],\n      destinationBucket: siteBucket,\n      distribution,\n      distributionPaths: ['/*'],\n    });\n  }\n}\n")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",r({parentName:"li"},{href:"https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/static-site"}),"AWS Samples - statis site"))))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/Deploying-Static-Site-with-CDK.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-deploying-static-site-with-cdk-md-e7b4813307746fdf15cc.js.map