(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),c=(a(0),a(181)),o={id:"start-server",title:"Starting a QA-Board server",sidebar_label:"Starting the Server"},b={id:"start-server",title:"Starting a QA-Board server",description:"For now QA-Board expects that you use Gitlab. We're working on removing that requirement.",source:"@site/docs/start-server.md",permalink:"/qaboard/docs/start-server",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/start-server.md",sidebar_label:"Starting the Server",sidebar:"docs",previous:{title:"Installing QA-Board's CLI",permalink:"/qaboard/docs/installation"},next:{title:"Adding QA-Board to your project",permalink:"/qaboard/docs/project-init"}},i=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Starting the server",id:"starting-the-server",children:[]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Development",id:"development",children:[]},{value:"SSL / hosting behind a reverse proxy",id:"ssl--hosting-behind-a-reverse-proxy",children:[]}],l={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"For now")," QA-Board expects that you use Gitlab. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues/1"}),"We're working on removing that requirement"),".  "))),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"qa")," executable will need to send updates to a central server, that tracks and displays results."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Please ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues"}),"fill issues"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://spectrum.chat/qaboard"}),"chat")," or ",Object(c.b)("a",{href:"mailto:arthur.flam@samsung.com"},"send an email")," to maintainers if you run into issues. ")),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/"}),Object(c.b)("inlineCode",{parentName:"a"},"docker"))," and ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),Object(c.b)("inlineCode",{parentName:"a"},"docker-compose")),"."),Object(c.b)("li",{parentName:"ol"},"Get the code with:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:Samsung/qaboard.git\ncd qaboard\n")),Object(c.b)("h2",{id:"starting-the-server"},"Starting the server"),Object(c.b)("p",null,"To start or restart the QA-Board server:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up\n#=> the application is live at localhost:8080\n\n# To have the server start in the background and restart itself \ndocker-compose -f docker-compose.yml -f production.yml up -d\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We're considering offering a hosted solution to help users get started. If your're interested, contact the ",Object(c.b)("a",{href:"mailto:arthur@fl.am"},"maintainers"),". "))),Object(c.b)("h2",{id:"environment-variables"},"Environment variables"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can edit an ",Object(c.b)("inlineCode",{parentName:"p"},".env")," file to set them, ",Object(c.b)("inlineCode",{parentName:"p"},"A=B")," on each line, or add ",Object(c.b)("inlineCode",{parentName:"p"},"environment:")," keys to ",Object(c.b)("inlineCode",{parentName:"p"},"backend")," service in one of the ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ENV Variable"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"GITLAB_ACCESS_TOKEN")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Required")," ",Object(c.b)("em",{parentName:"td"},"for now"),", to get info on git repos")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_PORT_HTTP")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port mapped to the app on the host")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_DB_HOST")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"db"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect the backend to a non-default database host (e.g. instead of dev'ing with prod dumps, connect directly to it)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_DB_PORT")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5432"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect to a non-default database port")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_NAME")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/triggering-third-party-tool"}),"trigger jenkins jobs")," (",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/triggering-third-party-tools#example-jenkins-integration-via-webhooks"}),"how-to-get-it?"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_TOKEN")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_CRUMB")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_START")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1g"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting memory for the image server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_MAX")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2g"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max memory for the image server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"UWSGI_PROCESSS")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default: 1g")))),Object(c.b)("h2",{id:"development"},"Development"),Object(c.b)("p",null,"If you are doing development, you can interact with the individual services with e.g."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# development.yml adds ENV variables to be more verbose, tweak it!\ndocker-compose -f docker-compose.yml -f development.yml -f sirc.yml build backend\ndocker-compose -f docker-compose.yml -f development.yml -f sirc.yml up backend\n\n# you can get a shell on the various services:\ndocker-compose -f docker-compose.yml -f development.yml -f sirc.yml run proxy /bin/ash\n# or with the docker-compose conventions, if the service is up:\ndocker exec -it qaboard_proxy_1 bash\n\n# This said, to dev on the frontend, it's best to\n#   cd webapp && npm install && npm start\n#   and edit webapp/src/setupProxy.js to have your dev version talk to either the prod/dev backend\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Refer to the examples in ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"docker-compose.yml"}),"docker-compose.yml"))," or to the ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose")," docs.")),Object(c.b)("h2",{id:"ssl--hosting-behind-a-reverse-proxy"},"SSL / hosting behind a reverse proxy"),Object(c.b)("p",null,"What we do is directly change the ",Object(c.b)("inlineCode",{parentName:"p"},"nginx")," confix:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx",metastring:'title="services/nginx/conf.d/qaboard.conf"',title:'"services/nginx/conf.d/qaboard.conf"'}),"server {\n  # ...\n  listen 443 ssl;\n  ssl_certificate_key /ssl/cert.key;\n  ssl_certificate /ssl/cert.pem;\n  # ...\n}\n")),Object(c.b)("p",null,"And mount keys with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'proxy:\n  volumes:\n  - "somewhere/cert.key:/ssl/cert.key"\n  - "somewhere/cert.pem:/ssl/cert.pem"\n')),Object(c.b)("p",null,"If you want to use your own reverse proxy, with ",Object(c.b)("inlineCode",{parentName:"p"},"nginx")," for instance you can set ",Object(c.b)("inlineCode",{parentName:"p"},"QABOARD_PORT_HTTP=8080")," and: "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n  listen 80;\n  server_name default_server;\n  location / {\n    proxy_pass http://localhost:8080/;\n  }\n}\n")))}d.isMDXComponent=!0},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,O=s["".concat(o,".").concat(m)]||s[m]||p[m]||c;return a?r.a.createElement(O,b({ref:t},l,{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);