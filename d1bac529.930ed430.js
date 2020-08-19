(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(114)),o={id:"local-multiprocessing",title:"Local Multiprocessing",sidebar_label:"Local Multiprocessing"},l={unversionedId:"local-multiprocessing",id:"local-multiprocessing",isDocsHomePage:!1,title:"Local Multiprocessing",description:"By default, if you don't configure an async task queue, QA-Board will use joblib and local multiprocessing to run your batches.",source:"@site/docs/local-multiprocessing.md",permalink:"/qaboard/docs/local-multiprocessing",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/local-multiprocessing.md",sidebar_label:"Local Multiprocessing",sidebar:"docs",previous:{title:"LSF Integration",permalink:"/qaboard/docs/lsf-integration"},next:{title:"Where is the data saved?",permalink:"/qaboard/docs/storage/where-is-the-data"}},i=[{value:"Running batches locally",id:"running-batches-locally",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"By default, if you don't configure an async task queue, QA-Board will use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/"}),Object(c.b)("inlineCode",{parentName:"a"},"joblib"))," and ",Object(c.b)("strong",{parentName:"p"},"local")," multiprocessing to run your batches."),Object(c.b)("h2",{id:"running-batches-locally"},"Running batches locally"),Object(c.b)("p",null,"If you configured an another runner, you can always:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qa batch --runner=local my-batch\n")),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("p",null,"There is only 1 option: ",Object(c.b)("inlineCode",{parentName:"p"},"concurrency"),". You have multiple options to set it up:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Per batch:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qa/batches.yaml"',title:'"qa/batches.yaml"'}),"my-batch:\n  inputs:\n  - image.jpg\n  local:\n    concurrency: -1 # 1 concurrent run per CPUs, default\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Globally:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"runners:\n  default: local  # default\n  local:\n    concurrency: 1 # serially\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On the CLI:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"qa batch --local-concurrency 1\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"via the ",Object(c.b)("inlineCode",{parentName:"li"},"QA_BATCH_CONCURRENCY")," environment variable")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Read ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html"}),"joblib's docs")))))}u.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);