(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{395:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、组件化开发-mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、组件化开发-mvvm"}},[t._v("#")]),t._v(" 一、组件化开发  MVVM")]),t._v(" "),a("p",[t._v("核心概念："),a("strong",[t._v("数据驱动视图")])]),t._v(" "),a("p",[t._v("M => "),a("strong",[t._v("模型")])]),t._v(" "),a("p",[t._v("V => "),a("strong",[t._v("view")])]),t._v(" "),a("p",[t._v("VM => "),a("strong",[t._v("viewModel")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--V--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("templete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("templete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"二、vue的响应式是如何实现的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、vue的响应式是如何实现的？"}},[t._v("#")]),t._v(" 二、Vue的响应式是如何实现的？")]),t._v(" "),a("h3",{attrs:{id:"核心api-object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心api-object-defineproperty"}},[t._v("#")]),t._v(" 核心API: Object.defineProperty")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'陌上青夏'")]),t._v("\n\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msqx'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 陌上青夏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set")]),t._v("\n")])])]),a("h2",{attrs:{id:"三、object-defineproperty的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、object-defineproperty的缺点"}},[t._v("#")]),t._v(" 三、Object.defineProperty的缺点")]),t._v(" "),a("ul",[a("li",[t._v("不满足监听的情况 => 复杂对象，数组")]),t._v(" "),a("li",[t._v("为了保证深度监听需要大量的递归循环，计算量非常大")]),t._v(" "),a("li",[t._v("新增属性，删除属性监听不到，为此产生了$set,$delete")]),t._v(" "),a("li",[t._v("不能监听数组的变化，需要使用以下代码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新定义数组原型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oldArrayProperty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建新对象，不影响原型方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrProto "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldArrayProperty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、虚拟dom"}},[t._v("#")]),t._v(" 四、虚拟DOM")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("ul",[a("li",[t._v("vdom是实现vue和React的重要基石")]),t._v(" "),a("li",[t._v("diff算法是vdom中最核心、最关键的部分")]),t._v(" "),a("li",[t._v("vdom就是找出需要修改的最小部分")]),t._v(" "),a("li",[t._v("虚拟DOM实际上就是一个js对象")])])]),t._v(" "),a("h3",{attrs:{id:"①-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#①-背景"}},[t._v("#")]),t._v(" ① 背景")]),t._v(" "),a("ul",[a("li",[t._v("DOM操作是非常耗费性能的，以前用JQ可以自行控制DOM操作时机，手动调整")]),t._v(" "),a("li",[t._v("vue和React都是数据驱动视图")]),t._v(" "),a("li",[t._v("DOM引擎、js引擎相互独立，但是他们是工作在同一个线程之中，js代码调用DOM-API会挂起JS引擎，转换传入的参数数据，激活DOM引擎，DOM重绘完成后再转换可能有的返回值，最后再重新激活JS引擎，这是十分消耗性能的过程，")]),t._v(" "),a("li",[t._v("虚拟DOM生成后不会马上进行排版重绘，而是进行diff运算，确定真实DOM中需要修改的部分，减少过多的DOM节点排版与重绘损耗")]),t._v(" "),a("li",[t._v("跨端需求，当我们有了虚拟DOM后，我们可以将虚拟DOM编译打包成各种平台的代码，实现跨端开发")])]),t._v(" "),a("h3",{attrs:{id:"②-用js模仿dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#②-用js模仿dom"}},[t._v("#")]),t._v(" ② 用js模仿DOM")]),t._v(" "),a("p",[a("code",[t._v("vue中生成树")]),t._v(" "),a("img",{attrs:{src:"/vdom.png",alt:"image text"}})]),t._v(" "),a("h2",{attrs:{id:"五、diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、diff算法"}},[t._v("#")]),t._v(" 五、diff算法")]),t._v(" "),a("p",[t._v("树的时间复杂度是O（n^3)")]),t._v(" "),a("h3",{attrs:{id:"①-我们一直在循环中用的key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#①-我们一直在循环中用的key"}},[t._v("#")]),t._v(" ① 我们一直在循环中用的key")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("不要使用循环的index作为key，这样会导致key值不稳定，也就失去了意义")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a 0          b 0\nb 1  删除a=>  c 1\nc 2\n")])])]),a("p",[t._v("上述例子中，key值是不稳定的，当key变化时，就会出发DOM的重新渲染")])])}),[],!1,null,null,null);s.default=e.exports}}]);