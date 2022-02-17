"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[8251],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),s=["components"],c={id:"references-and-milestones",title:"References & Milestones",sidebar_label:"References & Milestones"},l=void 0,m={unversionedId:"references-and-milestones",id:"references-and-milestones",title:"References & Milestones",description:"when looking at results, it is important to compare them to a reference.  It could to a previous version, results from a benchmark",source:"@site/docs/references-and-milestones.md",sourceDirName:".",slug:"/references-and-milestones",permalink:"/qaboard/docs/references-and-milestones",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/references-and-milestones.md",tags:[],version:"current",frontMatter:{id:"references-and-milestones",title:"References & Milestones",sidebar_label:"References & Milestones"},sidebar:"docs",previous:{title:"QA CLI Tips",permalink:"/qaboard/docs/using-the-qa-cli"},next:{title:"Tuning from QA-Board",permalink:"/qaboard/docs/tuning-from-the-webapp"}},p=[{value:"Comparing versus a reference",id:"comparing-versus-a-reference",children:[],level:2},{value:"Project References",id:"project-references",children:[],level:2},{value:"Defining Milestones from QA-Board",id:"defining-milestones-from-qa-board",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"when looking at results, it is important to ",(0,i.kt)("em",{parentName:"p"},"compare")," them to a reference.  It could to a previous version, results from a benchmark"),(0,i.kt)("h2",{id:"comparing-versus-a-reference"},"Comparing versus a reference"),(0,i.kt)("p",null,"In results pages, QA-Board always compares the commit you selected (labeled ",(0,i.kt)("inlineCode",{parentName:"p"},"new"),") versus a reference (",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),"):"),(0,i.kt)("img",{alt:"new-vs-reference",src:(0,o.Z)("img/comparing-new-and-reference.png")}),(0,i.kt)("p",null,"The reference is by default the latest commit from the project's reference branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'},"project:\n    reference_branch: master\n")),(0,i.kt)("p",null,"To change the selected ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," commit, you can edit the commit ID field in the navbar. Hovering it gives you a menu with other options:"),(0,i.kt)("img",{alt:"commit-select-menu.png",src:(0,o.Z)("img/commit-select-menu.png")}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Clicking on the branch name in the navbar will select the latest commit on the branch."))),(0,i.kt)("h2",{id:"project-references"},"Project References"),(0,i.kt)("p",null,"You can also list in ",(0,i.kt)("em",{parentName:"p"},"qaboard.yaml")," other versions as milestones."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{4-7} title=""qaboard.yaml"',"{4-7}":!0,title:'""qaboard.yaml"'},"project:\n    reference_branch: master\n    milestones:\n    - release/v1.0.0      # tag\n    - feature/better-perf # branch\n    - e45123a3565         # commit id\n")),(0,i.kt)("h2",{id:"defining-milestones-from-qa-board"},"Defining Milestones from QA-Board"),(0,i.kt)("p",null,"Every user can save milestones with the \u201cstar\u201d icon in each commit navbar:"),(0,i.kt)("img",{alt:"save-as-milestone",src:(0,o.Z)("img/save-as-milestone.png")}),(0,i.kt)("p",null,"If needed, you can give them a name and leave notes:"),(0,i.kt)("img",{alt:"milestone-details",src:(0,o.Z)("img/milestone-details.png")}),(0,i.kt)("p",null,"You'll now be able to select them in the commit ID hover menu."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Milestones can be shared with everybody - or kept private."))))}u.isMDXComponent=!0}}]);