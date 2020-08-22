(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{ZfDG:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var s=t("/FXl"),r=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Web/Exploring-Service-Workers.md"}});var o={_frontmatter:i},c=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(s.b)(c,a({},o,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"exploring-service-workers"},"Exploring Service Workers"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://frontendmasters.com/courses/service-workers/"}),"Exploring Service Workers")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://github.com/FrontendMasters/service-workers-offline"}),"Service worker GitHub Materials")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://github.com/FrontendMasters/web-workers"}),"Web worker GitHub Materials")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://abookapart.com/blogs/press/going-offline-is-now-available"}),"Going Offline - Book")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://github.com/GoogleChrome/workbox"}),"Workbox - Github")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://serviceworke.rs/"}),"servieworke.rs")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",a({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim"}),"Inspective the SW Lifecycle"))),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"Service workers are not just for the web, but they should be used for every single website."),Object(s.b)("p",null,"According to Getify, Service Workers are aimed towards beginning to fix some of the issues of the web."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"We forget that customers are mobile.")),Object(s.b)("p",null,"Getify uses the example of blog posts that he wanted to read, goes into airplane mode and then they're lost."),Object(s.b)("p",null,"The other example he brings up is the issues with the timeline for the Twitter PWA."),Object(s.b)("h2",{id:"the-web-worker"},"The Web Worker"),Object(s.b)("p",null,"These were the precursors to the service workers. What the example does is show the example of counting Fibonnaci numbers."),Object(s.b)("p",null,"The use case for web workers is to process intensive functionality. It will run in a thread separate to the web page. The only guarantee for web workers is that you can at least spin up one other thread."),Object(s.b)("h3",{id:"homejs"},"home.js"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"(function Home() {\n  'use strict';\n\n  var startStopBtn;\n  var fibsList;\n  var worker;\n\n  document.addEventListener('DOMContentLoaded', ready, false);\n\n  // **********************************\n\n  function ready() {\n    startStopBtn = document.getElementById('start-stop-btn');\n    fibsList = document.getElementById('fibs');\n\n    startStopBtn.addEventListener('click', startFibs, false);\n  }\n\n  function startFibs() {\n    startStopBtn.removeEventListener('click', startFibs, false);\n    startStopBtn.addEventListener('click', stopFibs, false);\n\n    startStopBtn.innerText = 'Stop';\n    fibsList.innerHTML = '';\n\n    worker = new Worker('/js/worker.js');\n    worker.addEventListener('message', onMessage);\n    worker.postMessage({ start: true });\n  }\n\n  function stopFibs() {\n    startStopBtn.removeEventListener('click', stopFibs, false);\n    startStopBtn.addEventListener('click', startFibs, false);\n\n    startStopBtn.innerText = 'Start';\n    worker.terminate();\n    worker = null;\n  }\n\n  function renderFib(num, fib) {\n    var p = document.createElement('div');\n    p.innerText = `Fib(${num}): ${fib}`;\n    if (fibsList.childNodes.length > 0) {\n      fibsList.insertBefore(p, fibsList.childNodes[0]);\n    } else {\n      fibsList.appendChild(p);\n    }\n  }\n\n  function onMessage(evt) {\n    renderFib(evt.data.num, evt.data.fib);\n  }\n})();\n")),Object(s.b)("h3",{id:"workerjs"},"worker.js"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nvar curNum = 0;\n\nself.onmessage = onMessage;\n\n// **********************************\n\nfunction onMessage() {\n  getNextFib();\n}\n\nfunction getNextFib() {\n  var curFib = fib(curNum);\n  self.postMessage({ num: curNum, fib: curFib });\n  curNum++;\n  getNextFib();\n}\n\nfunction fib(n) {\n  if (n < 2) {\n    return n;\n  }\n  return fib(n - 1) + fib(n - 2);\n}\n")),Object(s.b)("h3",{id:"indexhtml"},"index.html"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Web Workers</title>\n    <link rel="stylesheet" href="/css/style.css" />\n  </head>\n  <body>\n    <header>\n      <h1>Web Workers</h1>\n      <nav>\n        <ul>\n          <li><a href="/">Home</a></li>\n        </ul>\n      </nav>\n    </header>\n\n    <main>\n      <p>\n        Let\'s explore Web Workers together.\n      </p>\n      <p>\n        Fibonacci Numbers:\n        <button type="button" id="start-stop-btn">Start</button>\n      </p>\n      <div id="fibs"></div>\n    </main>\n\n    <script src="/js/home.js"><\/script>\n  </body>\n</html>\n')),Object(s.b)("p",null,"For while this was okay, except there were inefficies with memory."),Object(s.b)("h2",{id:"service-workers"},"Service Workers"),Object(s.b)("p",null,"Some notes brought up on use cases and tidbits:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Service workers still obey the rules of CORS"),Object(s.b)("li",{parentName:"ul"},"Primary service worker use cases are access for the cache"),Object(s.b)("li",{parentName:"ul"},"You can intercepting requests"),Object(s.b)("li",{parentName:"ul"},"Offline use casing for background sync"),Object(s.b)("li",{parentName:"ul"},"The caching API isn't just exposed to the service worker, but there is limited functionality for the web access")),Object(s.b)("p",null,'Other bigger use cases include "push notifications". Push notifications is the use of two technologies at a time. There is "notifications" part and the "push" part. The push is how the service worker can be notified by something from the server.'),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The tab could be closed, but the server can still make an outbound push to your service worker.")),Object(s.b)("h2",{id:"serviceworkers"},"serviceworke.rs"),Object(s.b)("p",null,"A ",Object(s.b)("a",a({parentName:"p"},{href:"https://serviceworke.rs/"}),"website")," to give some awesome uses and resources to using resources."),Object(s.b)("p",null,"We begin by make sure the example blog listes to the navigator to decide if we are online:"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// blog.js\n\n(function Blog(global) {\n  'use strict';\n\n  var offlineIcon;\n  var isOnline = 'onLine' in navigator && navigator.onLine;\n  var isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || '');\n  var usingSW = 'serviceWorker' in navigator;\n  var swRegistration;\n  var svcworker;\n\n  if (usingSW) {\n    initServiceWorker().catch(console.error);\n  }\n\n  global.isBlogOnline = isBlogOnline;\n\n  document.addEventListener('DOMContentLoaded', ready, false);\n\n  // **********************************\n\n  function ready() {\n    offlineIcon = document.getElementById('connectivity-status');\n\n    if (!isOnline) {\n      offlineIcon.classList.remove('hidden');\n    }\n\n    window.addEventListener(\n      'online',\n      function online() {\n        offlineIcon.classList.add('hidden');\n        isOnline = true;\n        sendStatusUpdate();\n      },\n      false,\n    );\n    window.addEventListener(\n      'offline',\n      function offline() {\n        offlineIcon.classList.remove('hidden');\n        isOnline = false;\n        sendStatusUpdate();\n      },\n      false,\n    );\n  }\n\n  function isBlogOnline() {\n    return isOnline;\n  }\n\n  async function initServiceWorker() {\n    swRegistration = await navigator.serviceWorker.register('/sw.js', {\n      updateViaCache: 'none',\n    });\n\n    svcworker =\n      swRegistration.installing ||\n      swRegistration.waiting ||\n      swRegistration.active;\n    sendStatusUpdate(svcworker);\n\n    // listen for new service worker to take over\n    navigator.serviceWorker.addEventListener(\n      'controllerchange',\n      async function onController() {\n        svcworker = navigator.serviceWorker.controller;\n        sendStatusUpdate(svcworker);\n      },\n    );\n\n    navigator.serviceWorker.addEventListener('message', onSWMessage, false);\n  }\n\n  function onSWMessage(evt) {\n    var { data } = evt;\n    if (data.statusUpdateRequest) {\n      console.log('Status update requested from service worker, responding...');\n      sendStatusUpdate(evt.ports && evt.ports[0]);\n    } else if (data == 'force-logout') {\n      document.cookie = 'isLoggedIn=';\n      isLoggedIn = false;\n      sendStatusUpdate();\n    }\n  }\n\n  function sendStatusUpdate(target) {\n    sendSWMessage({ statusUpdate: { isOnline, isLoggedIn } }, target);\n  }\n\n  function sendSWMessage(msg, target) {\n    if (target) {\n      target.postMessage(msg);\n    } else if (svcworker) {\n      svcworker.postMessage(msg);\n    } else if (navigator.serviceWorker.controller) {\n      navigator.serviceWorker.controller.postMessage(msg);\n    }\n  }\n})(window);\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note there is an event ",Object(s.b)("inlineCode",{parentName:"p"},"document.addEventListener('online', ...);")," that can listen to when the web changes to and from online!")),Object(s.b)("h2",{id:"the-service-worker-code"},"The Service Worker Code"),Object(s.b)("p",null,"The project code the service worker. Note: This is going ahead in the course and posting the final look (in case it seems disjointed in the context of this document)."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"'use strict';\n\nimportScripts('/js/external/idb-keyval-iife.min.js');\n\nvar version = 8;\nvar isOnline = true;\nvar isLoggedIn = false;\nvar cacheName = `ramblings-${version}`;\nvar allPostsCaching = false;\n\nvar urlsToCache = {\n  loggedOut: [\n    '/',\n    '/about',\n    '/contact',\n    '/404',\n    '/login',\n    '/offline',\n    '/css/style.css',\n    '/js/blog.js',\n    '/js/home.js',\n    '/js/login.js',\n    '/js/add-post.js',\n    '/js/external/idb-keyval-iife.min.js',\n    '/images/logo.gif',\n    '/images/offline.png',\n  ],\n};\n\nself.addEventListener('install', onInstall);\nself.addEventListener('activate', onActivate);\nself.addEventListener('message', onMessage);\nself.addEventListener('fetch', onFetch);\n\nmain().catch(console.error);\n\n// ****************************\n\nasync function main() {\n  await sendMessage({ statusUpdateRequest: true });\n  await cacheLoggedOutFiles();\n  return cacheAllPosts();\n}\n\nfunction onInstall(evt) {\n  console.log(`Service Worker (v${version}) installed`);\n  self.skipWaiting();\n}\n\nfunction onActivate(evt) {\n  evt.waitUntil(handleActivation());\n}\n\nasync function handleActivation() {\n  await clearCaches();\n  await cacheLoggedOutFiles(/*forceReload=*/ true);\n  await clients.claim();\n  console.log(`Service Worker (v${version}) activated`);\n\n  // spin off background caching of all past posts (over time)\n  cacheAllPosts(/*forceReload=*/ true).catch(console.error);\n}\n\nasync function clearCaches() {\n  var cacheNames = await caches.keys();\n  var oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {\n    var [, cacheNameVersion] = cacheName.match(/^ramblings-(\\d+)$/) || [];\n    cacheNameVersion =\n      cacheNameVersion != null ? Number(cacheNameVersion) : cacheNameVersion;\n    return cacheNameVersion > 0 && version !== cacheNameVersion;\n  });\n  await Promise.all(\n    oldCacheNames.map(function deleteCache(cacheName) {\n      return caches.delete(cacheName);\n    }),\n  );\n}\n\nasync function cacheLoggedOutFiles(forceReload = false) {\n  var cache = await caches.open(cacheName);\n\n  return Promise.all(\n    urlsToCache.loggedOut.map(async function requestFile(url) {\n      try {\n        let res;\n\n        if (!forceReload) {\n          res = await cache.match(url);\n          if (res) {\n            return;\n          }\n        }\n\n        let fetchOptions = {\n          method: 'GET',\n          cache: 'no-store',\n          credentials: 'omit',\n        };\n        res = await fetch(url, fetchOptions);\n        if (res.ok) {\n          return cache.put(url, res);\n        }\n      } catch (err) {}\n    }),\n  );\n}\n\nasync function cacheAllPosts(forceReload = false) {\n  // already caching the posts?\n  if (allPostsCaching) {\n    return;\n  }\n  allPostsCaching = true;\n  await delay(5000);\n\n  var cache = await caches.open(cacheName);\n  var postIDs;\n\n  try {\n    if (isOnline) {\n      let fetchOptions = {\n        method: 'GET',\n        cache: 'no-store',\n        credentials: 'omit',\n      };\n      let res = await fetch('/api/get-posts', fetchOptions);\n      if (res && res.ok) {\n        await cache.put('/api/get-posts', res.clone());\n        postIDs = await res.json();\n      }\n    } else {\n      let res = await cache.match('/api/get-posts');\n      if (res) {\n        let resCopy = res.clone();\n        postIDs = await res.json();\n      }\n      // caching not started, try to start again (later)\n      else {\n        allPostsCaching = false;\n        return cacheAllPosts(forceReload);\n      }\n    }\n  } catch (err) {\n    console.error(err);\n  }\n\n  if (postIDs && postIDs.length > 0) {\n    return cachePost(postIDs.shift());\n  } else {\n    allPostsCaching = false;\n  }\n\n  // *************************\n\n  async function cachePost(postID) {\n    var postURL = `/post/${postID}`;\n    var needCaching = true;\n\n    if (!forceReload) {\n      let res = await cache.match(postURL);\n      if (res) {\n        needCaching = false;\n      }\n    }\n\n    if (needCaching) {\n      await delay(10000);\n      if (isOnline) {\n        try {\n          let fetchOptions = {\n            method: 'GET',\n            cache: 'no-store',\n            credentials: 'omit',\n          };\n          let res = await fetch(postURL, fetchOptions);\n          if (res && res.ok) {\n            await cache.put(postURL, res.clone());\n            needCaching = false;\n          }\n        } catch (err) {}\n      }\n\n      // failed, try caching this post again?\n      if (needCaching) {\n        return cachePost(postID);\n      }\n    }\n\n    // any more posts to cache?\n    if (postIDs.length > 0) {\n      return cachePost(postIDs.shift());\n    } else {\n      allPostsCaching = false;\n    }\n  }\n}\n\nasync function sendMessage(msg) {\n  var allClients = await clients.matchAll({ includeUncontrolled: true });\n  return Promise.all(\n    allClients.map(function sendTo(client) {\n      var chan = new MessageChannel();\n      chan.port1.onmessage = onMessage;\n      return client.postMessage(msg, [chan.port2]);\n    }),\n  );\n}\n\nfunction onMessage({ data }) {\n  if ('statusUpdate' in data) {\n    ({ isOnline, isLoggedIn } = data.statusUpdate);\n    console.log(\n      `Service Worker (v${version}) status update... isOnline:${isOnline}, isLoggedIn:${isLoggedIn}`,\n    );\n  }\n}\n\nfunction onFetch(evt) {\n  evt.respondWith(router(evt.request));\n}\n\nasync function router(req) {\n  var url = new URL(req.url);\n  var reqURL = url.pathname;\n  var cache = await caches.open(cacheName);\n\n  // request for site's own URL?\n  if (url.origin == location.origin) {\n    // are we making an API request?\n    if (/^\\/api\\/.+$/.test(reqURL)) {\n      let fetchOptions = {\n        credentials: 'same-origin',\n        cache: 'no-store',\n      };\n      let res = await safeRequest(\n        reqURL,\n        req,\n        fetchOptions,\n        /*cacheResponse=*/ false,\n        /*checkCacheFirst=*/ false,\n        /*checkCacheLast=*/ true,\n        /*useRequestDirectly=*/ true,\n      );\n      if (res) {\n        if (req.method == 'GET') {\n          await cache.put(reqURL, res.clone());\n        }\n        // clear offline-backup of successful post?\n        else if (reqURL == '/api/add-post') {\n          await idbKeyval.del('add-post-backup');\n        }\n        return res;\n      }\n\n      return notFoundResponse();\n    }\n    // are we requesting a page?\n    else if (req.headers.get('Accept').includes('text/html')) {\n      // login-aware requests?\n      if (/^\\/(?:login|logout|add-post)$/.test(reqURL)) {\n        let res;\n\n        if (reqURL == '/login') {\n          if (isOnline) {\n            let fetchOptions = {\n              method: req.method,\n              headers: req.headers,\n              credentials: 'same-origin',\n              cache: 'no-store',\n              redirect: 'manual',\n            };\n            res = await safeRequest(reqURL, req, fetchOptions);\n            if (res) {\n              if (res.type == 'opaqueredirect') {\n                return Response.redirect('/add-post', 307);\n              }\n              return res;\n            }\n            if (isLoggedIn) {\n              return Response.redirect('/add-post', 307);\n            }\n            res = await cache.match('/login');\n            if (res) {\n              return res;\n            }\n            return Response.redirect('/', 307);\n          } else if (isLoggedIn) {\n            return Response.redirect('/add-post', 307);\n          } else {\n            res = await cache.match('/login');\n            if (res) {\n              return res;\n            }\n            return cache.match('/offline');\n          }\n        } else if (reqURL == '/logout') {\n          if (isOnline) {\n            let fetchOptions = {\n              method: req.method,\n              headers: req.headers,\n              credentials: 'same-origin',\n              cache: 'no-store',\n              redirect: 'manual',\n            };\n            res = await safeRequest(reqURL, req, fetchOptions);\n            if (res) {\n              if (res.type == 'opaqueredirect') {\n                return Response.redirect('/', 307);\n              }\n              return res;\n            }\n            if (isLoggedIn) {\n              isLoggedIn = false;\n              await sendMessage('force-logout');\n              await delay(100);\n            }\n            return Response.redirect('/', 307);\n          } else if (isLoggedIn) {\n            isLoggedIn = false;\n            await sendMessage('force-logout');\n            await delay(100);\n            return Response.redirect('/', 307);\n          } else {\n            return Response.redirect('/', 307);\n          }\n        } else if (reqURL == '/add-post') {\n          if (isOnline) {\n            let fetchOptions = {\n              method: req.method,\n              headers: req.headers,\n              credentials: 'same-origin',\n              cache: 'no-store',\n            };\n            res = await safeRequest(\n              reqURL,\n              req,\n              fetchOptions,\n              /*cacheResponse=*/ true,\n            );\n            if (res) {\n              return res;\n            }\n            res = await cache.match(isLoggedIn ? '/add-post' : '/login');\n            if (res) {\n              return res;\n            }\n            return Response.redirect('/', 307);\n          } else if (isLoggedIn) {\n            res = await cache.match('/add-post');\n            if (res) {\n              return res;\n            }\n            return cache.match('/offline');\n          } else {\n            res = await cache.match('/login');\n            if (res) {\n              return res;\n            }\n            return cache.match('/offline');\n          }\n        }\n      }\n      // otherwise, just use \"network-and-cache\"\n      else {\n        let fetchOptions = {\n          method: req.method,\n          headers: req.headers,\n          cache: 'no-store',\n        };\n        let res = await safeRequest(\n          reqURL,\n          req,\n          fetchOptions,\n          /*cacheResponse=*/ false,\n          /*checkCacheFirst=*/ false,\n          /*checkCacheLast=*/ true,\n        );\n        if (res) {\n          if (!res.headers.get('X-Not-Found')) {\n            await cache.put(reqURL, res.clone());\n          } else {\n            await cache.delete(reqURL);\n          }\n          return res;\n        }\n\n        // otherwise, return an offline-friendly page\n        return cache.match('/offline');\n      }\n    }\n    // all other files use \"cache-first\"\n    else {\n      let fetchOptions = {\n        method: req.method,\n        headers: req.headers,\n        cache: 'no-store',\n      };\n      let res = await safeRequest(\n        reqURL,\n        req,\n        fetchOptions,\n        /*cacheResponse=*/ true,\n        /*checkCacheFirst=*/ true,\n      );\n      if (res) {\n        return res;\n      }\n\n      // otherwise, force a network-level 404 response\n      return notFoundResponse();\n    }\n  }\n}\n\nasync function safeRequest(\n  reqURL,\n  req,\n  options,\n  cacheResponse = false,\n  checkCacheFirst = false,\n  checkCacheLast = false,\n  useRequestDirectly = false,\n) {\n  var cache = await caches.open(cacheName);\n  var res;\n\n  if (checkCacheFirst) {\n    res = await cache.match(reqURL);\n    if (res) {\n      return res;\n    }\n  }\n\n  if (isOnline) {\n    try {\n      if (useRequestDirectly) {\n        res = await fetch(req, options);\n      } else {\n        res = await fetch(req.url, options);\n      }\n\n      if (res && (res.ok || res.type == 'opaqueredirect')) {\n        if (cacheResponse) {\n          await cache.put(reqURL, res.clone());\n        }\n        return res;\n      }\n    } catch (err) {}\n  }\n\n  if (checkCacheLast) {\n    res = await cache.match(reqURL);\n    if (res) {\n      return res;\n    }\n  }\n}\n\nfunction notFoundResponse() {\n  return new Response('', {\n    status: 404,\n    statusText: 'Not Found',\n  });\n}\n\nfunction delay(ms) {\n  return new Promise(function c(res) {\n    setTimeout(res, ms);\n  });\n}\n")),Object(s.b)("h2",{id:"creating-a-service-worker"},"Creating a Service Worker"),Object(s.b)("p",null,"The Service Worker will stay alive while the user is on the page. The browser will control the service worker lifecycle."),Object(s.b)("p",null,"It is important to note that when a service worker restarts, it doesn't rerun the installation and activation phase."),Object(s.b)("p",null,"We will also see how to start and stop the service worker in Chrome Dev Tools."),Object(s.b)("h3",{id:"sw-lifecycle"},"SW Lifecycle"),Object(s.b)("p",null,"Below is some code that will allow us to see the lifecycle playout."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// sw.js\n'use strict';\n\nvar version = 1;\n\nself.addEventListener('install', onInstall);\nself.addEventListener('activate', onActivate);\n\nmain().catch(console.error);\n\nasync function main() {\n  console.log(`Service Worker (${version}) is starting...`);\n}\n\n// an event handler\nasync function onInstall(evt) {\n  console.log(`Service Worker (${version}) has installed...`);\n  // to skip waiting phase\n  self.skipWaitng();\n}\n\n// also an event handler\nasync function onActivation(evt) {\n  console.log(`Service Worker (${version}) has activated...`);\n}\n")),Object(s.b)("p",null,"Note that there is a way to request to the browser to not shut down the service worker:"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"// omitted for brevity\nasync function onActivation(evt) {\n  // passing a promise returned from handleActivation\n  event.waitUntil(handleActivation());\n  console.log(`Service Worker (${version}) has activated...`);\n}\n\nasync function handleActivation() {\n  await clients.claim();\n}\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The service worker being activated it doesn't mean that the page talking to the old service worker knows about the new service worker. We need to tell the page to that.")),Object(s.b)("p",null,"Documentation for ",Object(s.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim"}),"clients.claim")," can be found here."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Web/Exploring-Service-Workers.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-web-exploring-service-workers-md-f10624b2634372fd41cc.js.map