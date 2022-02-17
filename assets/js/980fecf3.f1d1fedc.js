"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[4339],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(a),c=i,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1703:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"metadata-integration-external-databases",sidebar_label:"Metadata & External Databases",title:"Using input metadata and integrating with external databases"},l=void 0,d={unversionedId:"metadata-integration-external-databases",id:"metadata-integration-external-databases",title:"Using input metadata and integrating with external databases",description:"Metadata",source:"@site/docs/metadata-integration-external-databases.md",sourceDirName:".",slug:"/metadata-integration-external-databases",permalink:"/qaboard/docs/metadata-integration-external-databases",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/docs/metadata-integration-external-databases.md",tags:[],version:"current",frontMatter:{id:"metadata-integration-external-databases",sidebar_label:"Metadata & External Databases",title:"Using input metadata and integrating with external databases"},sidebar:"docs",previous:{title:"Debugging with IDEs",permalink:"/qaboard/docs/debugging-runs-with-an-IDE"},next:{title:"APIs",permalink:"/qaboard/docs/apis"}},p=[{value:"Metadata",id:"metadata",children:[{value:"Creating metadata",id:"creating-metadata",children:[],level:3},{value:"Using metadata to filter batches of inputs",id:"using-metadata-to-filter-batches-of-inputs",children:[],level:3}],level:2},{value:"Integrating with external input databases",id:"integrating-with-external-input-databases",children:[],level:2}],u={toc:p};function m(t){var e=t.components,a=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Input metadata are useful to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Filter")," and ",(0,r.kt)("strong",{parentName:"li"},"group")," inputs"),(0,r.kt)("li",{parentName:"ul"},"Decide ",(0,r.kt)("strong",{parentName:"li"},"what metrics to compute")," on your outputs")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"QA-Board will forward metadata to your ",(0,r.kt)("inlineCode",{parentName:"p"},"run(ctx)")," function as ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.input_metadata"),".")),(0,r.kt)("h3",{id:"creating-metadata"},"Creating metadata"),(0,r.kt)("p",null,"To enable metadata support in QA-Board, you have 2 options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill the metadata as part of your ",(0,r.kt)("inlineCode",{parentName:"li"},"run"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},"def run(context):\n  context.input_metadata = {}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Implement in your project's entrypoint a function that returns metadata as a dict. Here is an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},"import yaml\n\ndef metadata(absolute_input_path, database, input_path):\n  metadata_file = absolute_input_path.with_suffix('.metadata.yaml')\n  if not metadata_file.exists():\n    return {}\n  with metadata_file.open() as f:\n    return yaml.load(f, Loader=yaml.SafeLoader)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you define ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.label")," it will be used in the UI instead of the input path."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"QA-Board will compares runs with different input if they have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.id"),". A common use-case is comparing images from different sensors taken in the same conditions."))),(0,r.kt)("h3",{id:"using-metadata-to-filter-batches-of-inputs"},"Using metadata to filter batches of inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qa/batches.yaml"',title:'"qa/batches.yaml"'},"inputs-filtered-using-metadata:\n  only: # only run tests matching all those conditions\n    PD pattern: 4PD\n    Model             # mulitple options are OK\n      - 2T7\n      - XXX\n    Binning: '1:*'    # wildcards are supported\n    Bad pixels: False # as well as Booleans, numbers\u2026\n    Distance: '>1'    # also >=, =,==, <, <=\n\n  exclude: # don't run on tests matching all the filters below\n    Location: Outdoor\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qa batch inputs-filtered-using-metadata\n# => run only on inputs with 4PD as PD pattern, etc.\n")),(0,r.kt)("h2",{id:"integrating-with-external-input-databases"},"Integrating with external input databases"),(0,r.kt)("p",null,'Inputs are not always existing files. In some cases you will want to use a "proper" database to organize them. If your inputs are the names of unit tests, you\'ll list them with something like ',(0,r.kt)("inlineCode",{parentName:"p"},"gtest_project --gtest_list_tests"),"."),(0,r.kt)("p",null,"To enable this with QA-Board, implement in your project's entrypoint a function that iterates over inputs given a query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},'def iter_inputs(path, database, only, exclude, inputs_settings):\n  # TODO: Maybe here connect to an SQL database\n  #       and execute something like\n  #       f"SELECT test, metadata from tests where path LIKE {path} and database={database}"\n  # OPTIONALLY: return filtered inputs using only/exclude\n  #             even if you don\'t do it, qa-board will always re-filter\n  #             but doing it yourself in SQL can be much more efficient\n  return ({"absolute_input_path": database / p.path, "metadata": p.metadata} for p in inputs)\n\n# Note: path=None should match all inputs in the database\n# Note: inputs_settings is a dict with information on how inputs should be found: file globs, use_parent, or anything else you put in qaboard.yaml\'s inputs.\n')))}m.isMDXComponent=!0}}]);