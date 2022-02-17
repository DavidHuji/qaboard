"use strict";(self.webpackChunkApache_2_0=self.webpackChunkApache_2_0||[]).push([[6133],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3325:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return c},default:function(){return g}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(4996),l=["components"],s={title:"Creating and viewing flame graphs with QA-Board",tags:["performance","engineering","visualization"],image:"https://samsung.github.io/qaboard/img/slides/flame-graphs.jpg",authors:["arthurf"],hide_table_of_contents:!1},p=void 0,m={permalink:"/qaboard/blog/2020/06/24/flame-graphs",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/blog/blog/2020-06-24-flame-graphs.md",source:"@site/blog/2020-06-24-flame-graphs.md",title:"Creating and viewing flame graphs with QA-Board",description:"Many tools exist to investigate software performance. QA-Board can now use flame graphs to help identify bottlenecks, and pointpoint why regressions happened thanks to differential frame graphs.",date:"2020-06-24T00:00:00.000Z",formattedDate:"June 24, 2020",tags:[{label:"performance",permalink:"/qaboard/blog/tags/performance"},{label:"engineering",permalink:"/qaboard/blog/tags/engineering"},{label:"visualization",permalink:"/qaboard/blog/tags/visualization"}],readingTime:3.165,truncated:!0,authors:[{name:"Arthur Flam",title:"Algo engineering at Samsung",url:"https://shapescience.xyz/",imageURL:"https://avatars.githubusercontent.com/u/2649055",key:"arthurf"}],frontMatter:{title:"Creating and viewing flame graphs with QA-Board",tags:["performance","engineering","visualization"],image:"https://samsung.github.io/qaboard/img/slides/flame-graphs.jpg",authors:["arthurf"],hide_table_of_contents:!1},prevItem:{title:"Introducing QA-Board",permalink:"/qaboard/blog/2020/08/10/introducing-QA-Board"}},u={authorsImageUrls:[void 0]},c=[{value:"System requirements",id:"system-requirements",children:[],level:2},{value:"Requirements for C/C++",id:"requirements-for-cc",children:[],level:2},{value:"Using <code>perf</code> to instrument a command",id:"using-perf-to-instrument-a-command",children:[],level:2},{value:"Flame graphs at last!",id:"flame-graphs-at-last",children:[],level:2},{value:"Visualizing flame graphs in QA-Board",id:"visualizing-flame-graphs-in-qa-board",children:[],level:2}],d={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55"},"Many tools")," exist to investigate software performance. QA-Board can now use flame graphs to help identify bottlenecks, and pointpoint why regressions happened thanks to differential frame graphs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are not familiar with flame graphs ",(0,o.kt)("a",{parentName:"p",href:"http://www.brendangregg.com/flamegraphs.html"},"read this"),"!")),(0,o.kt)("h2",{id:"system-requirements"},"System requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"perf"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# debian\nsudo apt-get install -y linux-tools-generic linux-tools-$(uname -r)\n# maybe also            linux-tools-common\n\n# from source\ngit clone https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git\ncd linux/tools/perf\nmake\n\n# install somewhere in your PATH\ncp perf /somewhere/bin\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"FlameGraph"),". It turns ",(0,o.kt)("inlineCode",{parentName:"li"},"perf")," recording into flame graphs:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/brendangregg/FlameGraph\ncd FlameGraph\n\n# make the scripts accessible easily\nexport PATH=$(pwd):$PATH\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"burn")," transforms the output from ",(0,o.kt)("inlineCode",{parentName:"li"},"FlameGraph"),' into a "portable" json.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# other options at https://github.com/spiermar/burn#getting-started\ncurl -L "https://dl.bintray.com/mspier/binaries/burn/1.0.1/linux/amd64/burn" -o burn\nchmod +x burn\n\n# install somewhere in your PATH\ncp burn /somewhere/bin\n')),(0,o.kt)("h2",{id:"requirements-for-cc"},"Requirements for C/C++"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your program needs to be compiled with symbols (",(0,o.kt)("inlineCode",{parentName:"li"},"gcc -g"),", otherwise, have fun making sense of the adresses). If your're not sure call ",(0,o.kt)("inlineCode",{parentName:"li"},"file your-binary"),",  it will tell you:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ file my-binary\nmy-binary: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/l, for GNU/Linux 2.6.32, with debug_info, not stripped\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Ideally, compile with ",(0,o.kt)("inlineCode",{parentName:"li"},"gcc -fno-omit-frame-pointer")," as frame pointers help create good stack traces. If you can't do it, ",(0,o.kt)("inlineCode",{parentName:"li"},"perf --call-graph dwarf")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"perf --call-graph lbr")," ",(0,o.kt)("a",{parentName:"li",href:"http://www.brendangregg.com/perf.html"},"may be workarounds"),"...")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's also possible to build flame graphs for java, node...")),(0,o.kt)("h2",{id:"using-perf-to-instrument-a-command"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"perf")," to instrument a command"),(0,o.kt)("p",null,"Read this ",(0,o.kt)("a",{parentName:"p",href:"http://www.brendangregg.com/perf.html"},"article by Brendan Gregg")," to get an overview of ",(0,o.kt)("inlineCode",{parentName:"p"},"perf"),"'s many uses and commands.\nTo profile a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"perf record -F 99 -ag -- your-command\n# -a: all CPUs\n# -g: capture call graphs (stack traces)\n# -F99: sample at 99 Hertz\n\n# view a report with\nperf report\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"perf")," may warn about you not having permissions to collect stats from the kernel. If it happens, either run as root with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," or follow the instructions, likely involving ",(0,o.kt)("inlineCode",{parentName:"p"},"CAP_SYS_ADMIN")," permissions for your users, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"<=2")," policy in ",(0,o.kt)("em",{parentName:"p"},"/proc/sys/kernel/perf_event_paranoid"),"..."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.man7.org/linux/man-pages/man1/perf-record.1.html"},"Read the docs")," to tweak profiles to your use case."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As-is, ",(0,o.kt)("inlineCode",{parentName:"p"},"perf"),"'s reports are great. The issue is that if you're investigating multiple feature flags, compilation options or code versions, you need a way to organize all this data. And obviously still have good investigation and debugging tools. That's the promise of ",(0,o.kt)("a",{parentName:"p",href:"https://samsung.github.io/qaboard"},"QA-Board"),"!")),(0,o.kt)("h2",{id:"flame-graphs-at-last"},"Flame graphs at last!"),(0,o.kt)("p",null,"Create a flame graph involves lots of format conversion. You can create an SVG flame graph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# use a text-based format for the perf recordings\nperf script > out.perf\n\n# this format makes filtering super-easy\nstackcollapse-perf.pl out.perf > out.perf-folded\n\n# create an SVG plot, already viewable\nflamegraph.pl out.perf-folded > perf.svg\n")),(0,o.kt)("p",null,"If you only care about some functions (e.g. what's under your ",(0,o.kt)("inlineCode",{parentName:"p"},"main()"),"), you can filter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat out.perf-folded \\\n  # our software has a bunch of irrelevant setup code\n  | grep 'CCDECmdLineSim::RunChain' \\\n  # remove common frame prefixes\n  | sed 's/;\\[unknown\\];__libc_start_main;main;CCDECmdLineSim::Run//g' \\\n  | tee out.filtered.perf-folded \\\n  # tons of options.. https://github.com/brendangregg/FlameGraph#options\n  | flamegraph.pl --color hot --hash --cp \\\n  > perf.svg\n\n# cleanup\nrm out.perf out.perf-folded\n")),(0,o.kt)("p",null,'QA-Board\'s viewer needs a more "portable" format, not an "finished" SVG:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"burn convert --type=folded out.filtered.perf-folded --output=perf.flame.json\n")),(0,o.kt)("h2",{id:"visualizing-flame-graphs-in-qa-board"},"Visualizing flame graphs in QA-Board"),(0,o.kt)("p",null,"QA-Board integrates Martin Spier's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spiermar/d3-flame-graph"},(0,o.kt)("inlineCode",{parentName:"a"},"d3-flame-graph")),". At a glance, you can check where you code spends its CPU cycles, and use ",(0,o.kt)("a",{parentName:"p",href:"(http://www.brendangregg.com/blog/2014-11-09/differential-flame-graphs.html)"},"differential flame graphs")," to debug regressions. What do you need to do?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wrap calls to ",(0,o.kt)("inlineCode",{parentName:"li"},"perf")," & cie in your ",(0,o.kt)("inlineCode",{parentName:"li"},"run()")," function:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'},"def run(context):\n    # run perf -- /some/binary\n    # run stackcollapse.pl && burl -o {context.output_dir}/perf.flame.json\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Tell you expect to view flame graphs:\nQA-Board")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'},"outputs:\n  visualizations:\n  - path: perf.flame.json\n")),(0,o.kt)("img",{alt:"Flame graph viewer",src:(0,i.Z)("img/slides/flame-graphs.jpg")}),(0,o.kt)("img",{alt:"Flame graph viewer",src:"/img/slides/flame-graphs.jpg"}))}g.isMDXComponent=!0}}]);