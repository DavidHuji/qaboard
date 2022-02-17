"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[1612],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(k,c(c({ref:t},i),{},{components:r})):a.createElement(k,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3945:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),c=["components"],s={id:"host-upgrades",sidebar_label:"Host Upgrades",title:"Upgrading the QA-Board host"},l=void 0,p={unversionedId:"backend-admin/host-upgrades",id:"backend-admin/host-upgrades",title:"Upgrading the QA-Board host",description:"First connect to the QA-Board host:",source:"@site/docs/backend-admin/host-upgrades.md",sourceDirName:"backend-admin",slug:"/backend-admin/host-upgrades",permalink:"/qaboard/docs/backend-admin/host-upgrades",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/backend-admin/host-upgrades.md",tags:[],version:"current",frontMatter:{id:"host-upgrades",sidebar_label:"Host Upgrades",title:"Upgrading the QA-Board host"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/qaboard/docs/backend-admin/troubleshooting"}},i=[{value:"Make sure backups are enabled",id:"make-sure-backups-are-enabled",children:[],level:2},{value:"Check the latest daily backup",id:"check-the-latest-daily-backup",children:[],level:2},{value:"Stop the server and create a backup",id:"stop-the-server-and-create-a-backup",children:[],level:2},{value:"Maintenance Period",id:"maintenance-period",children:[],level:2},{value:"Restart",id:"restart",children:[],level:2},{value:"Restoring from a backup",id:"restoring-from-a-backup",children:[],level:2}],d={toc:i};function u(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First connect to the QA-Board host:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh qa\n")),(0,o.kt)("h2",{id:"make-sure-backups-are-enabled"},"Make sure backups are enabled"),(0,o.kt)("p",null,"In ",(0,o.kt)("em",{parentName:"p"},"production.yml")," you should uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"cron-backup-db")," service to enable daily backups, and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"/WHERE/TO/SAVE/BACKUPS")," with a (backup'ed!)location on the host."),(0,o.kt)("h2",{id:"check-the-latest-daily-backup"},"Check the latest daily backup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# check the latest backup worked\nls -lht /WHERE/BACKUPS/ARE/SAVED/ | head\n# copy the latest somewhere to make sure nothing can go wrong\ncp /WHERE/BACKUPS/ARE/SAVED/latest.dump .\n\n")),(0,o.kt)("h2",{id:"stop-the-server-and-create-a-backup"},"Stop the server and create a backup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# disconnect clients to avoid anyone writing\ndocker-compose -f docker-compose.yml -f production.yml stop\n# we need the database to create a backup\ndocker-compose -f docker-compose.yml -f production.yml up -d db\n\n# manually start a backup\ndocker-compose -f docker-compose.yml -f production.yml run cron-backup-db /etc/periodic/daily/backup before-upgrade.dump\n")),(0,o.kt)("h2",{id:"maintenance-period"},"Maintenance Period"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CPU/Memory/Storage upgrade...")),(0,o.kt)("h2",{id:"restart"},"Restart"),(0,o.kt)("p",null,"After the boot, make sure everything is up:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yml -f production.yml up -d\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Checks"),":"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","you can access the web application"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","the logs are all right"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","the logs are all right")),(0,o.kt)("h2",{id:"restoring-from-a-backup"},"Restoring from a backup"),(0,o.kt)("p",null,"In case of issues, recover from a backup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# disconnect clients\ndocker-compose -f docker-compose.yml -f production.yml stop\n# we need the database to restore a backup\ndocker-compose -f docker-compose.yml -f production.yml up -d db\n\n# now restore\ndocker-compose -f docker-compose.yml -f production.yml exec db /opt/restore /backups/before-upgrade.dump\n\n# and restart\ndocker-compose -f docker-compose.yml -f production.yml up -d\n")))}u.isMDXComponent=!0}}]);