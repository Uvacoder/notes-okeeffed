(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{"F/lO":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return m}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var o=t("/FXl"),a=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/Webpack-Federaton-With-React.md"}});var l={_frontmatter:p},i=a.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(i,r({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"webpack-federation-with-react"},"Webpack Federation with React"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/module-federation/module-federation-examples"}),"Webpack Federation Examples"))),Object(o.b)("h2",{id:"react-app-one"},"React App One"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// App.js\nimport React from 'react';\nimport { ThemeProvider } from 'styled-components';\nimport Page from './Page';\nconst RemoteCombo = React.lazy(() => import('app2/Combo'));\n\nconst App = () => (\n  <div>\n    <ThemeProvider theme={{ main: 'royalblue' }}>\n      <h1>Basic Host-Remote</h1>\n      <h2>App 1</h2>\n      <Page />\n      <React.Suspense fallback=\"Waddup\">\n        <RemoteCombo theme={{ main: 'royalblue' }} />\n      </React.Suspense>\n    </ThemeProvider>\n  </div>\n);\n\nexport default App;\n\n// Page.js\nimport React, { useContext } from 'react';\nimport { ThemeContext } from 'styled-components';\nconst RemoteButton = React.lazy(() => import('app2/Button'));\nconst RemoteTitle = React.lazy(() => import('app2/Title'));\n\nconst Page = () => {\n  const theme = useContext(ThemeContext);\n\n  return (\n    <React.Fragment>\n      <React.Suspense fallback=\"Loading Button\">\n        <RemoteTitle theme={theme}>Styled Title</RemoteTitle>\n      </React.Suspense>\n      <React.Suspense fallback=\"Loading Button\">\n        <RemoteButton onClick={() => alert('Made it')} theme={theme}>\n          Styled Component\n        </RemoteButton>\n      </React.Suspense>\n    </React.Fragment>\n  );\n};\n\nexport default Page;\n\n// Webpack config\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { ModuleFederationPlugin } = require('webpack').container;\nconst path = require('path');\n\nmodule.exports = {\n  entry: './src/index',\n  mode: 'development',\n  devServer: {\n    contentBase: path.join(__dirname, 'dist'),\n    port: 3001,\n  },\n  output: {\n    // assuming we are running in Production\n    publicPath: 'https://federation-app.nodular.co/',\n  },\n  module: {\n    rules: [\n      {\n        test: /bootstrap\\.js$/,\n        loader: 'bundle-loader',\n        options: {\n          lazy: true,\n        },\n      },\n      {\n        test: /\\.jsx?$/,\n        loader: 'babel-loader',\n        exclude: /node_modules/,\n        options: {\n          presets: ['@babel/preset-react'],\n        },\n      },\n    ],\n  },\n  //http://localhost:3002/remoteEntry.js\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'app1',\n      remotes: {\n        app2: 'app2@https://federation.nodular.co/remoteEntry.js',\n      },\n      shared: {\n        react: { singleton: true },\n        'react-dom': { singleton: true },\n        'styled-components': { singleton: true },\n      },\n    }),\n    new HtmlWebpackPlugin({\n      template: './public/index.html',\n    }),\n  ],\n};\n")),Object(o.b)("h2",{id:"app-two"},"App Two"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// Button.js\nimport React from 'react';\nimport styled from 'styled-components';\n// Define our button, but with the use of props.theme this time\nconst Button = styled.button`\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  /* Color the border and text with theme.main */\n  color: ${(props) => props.theme.main};\n  border: 2px solid ${(props) => props.theme.main};\n\n  &:hover {\n    background-color: ${(props) => props.theme.main};\n    color: black;\n  }\n`;\n// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider\nButton.defaultProps = {\n  theme: {\n    main: 'palevioletred',\n  },\n};\n\nexport default Button;\n\n// Title.js\nimport React from 'react';\nimport styled from 'styled-components';\n\nconst Title = styled.h1`\n  font-size: 1.5em;\n  text-align: center;\n  color: ${(props) => props.theme.main};\n`;\n\nTitle.defaultProps = {\n  theme: {\n    main: 'black',\n  },\n};\n\nexport default Title;\n\n// Combo.js\nimport React from 'react';\nimport LocalButton from './Button';\nimport LocalTitle from './Title';\n\nconst App = ({ theme }) => (\n  <div>\n    <LocalTitle theme={theme}>Hello, world!</LocalTitle>\n    <LocalButton theme={theme}>Button</LocalButton>\n  </div>\n);\n\nexport default App;\n\n\n// weboack.config.js\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { ModuleFederationPlugin } = require('webpack').container;\nconst path = require('path');\n\nmodule.exports = {\n  entry: './src/index',\n  mode: 'development',\n  devServer: {\n    contentBase: path.join(__dirname, 'dist'),\n    port: 3002,\n  },\n  output: {\n    // assume we are running in production\n    publicPath: 'https://federation.nodular.co/',\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        loader: 'babel-loader',\n        exclude: /node_modules/,\n        options: {\n          presets: ['@babel/preset-react'],\n        },\n      },\n    ],\n  },\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'app2',\n      library: { type: 'var', name: 'app2' },\n      filename: 'remoteEntry.js',\n      exposes: {\n        './Button': './src/Button',\n        './Title': './src/Title',\n        './Combo': './src/Combo',\n      },\n      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },\n    }),\n    new HtmlWebpackPlugin({\n      template: './public/index.html',\n    }),\n  ],\n};\n\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/Webpack-Federaton-With-React.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-webpack-federaton-with-react-md-2b4d9fa5a2ef7934c945.js.map