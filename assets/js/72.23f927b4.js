(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{383:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"react中的虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的虚拟dom"}},[t._v("#")]),t._v(" react中的虚拟DOM")]),t._v(" "),s("ol",[s("li",[t._v("State 数据")]),t._v(" "),s("li",[t._v("JSX 数据")]),t._v(" "),s("li",[t._v("数据和模板结合，生成真实DOM")]),t._v(" "),s("li",[t._v("数据 + 模板生成虚拟DOM => 虚拟DOM就是一个JS对象，用它来描述虚拟DOM "),s("strong",[t._v("(消耗了性能，但是比生成真实DOM小)")]),t._v("\n例如，")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("生成的虚拟DOM就是:")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("['div',{id:\"xxx\"},['span',{class:\"xxx\"},'hello world']]")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("state发生改变")])]),t._v(" "),s("p",[t._v("6.数据 + 模板 "),s("code",[t._v("生成新的虚拟DOM")]),t._v(" =>")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("['div',{id:\"xxx\"},['span',{class:\"xxx\"},'change']]")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("(节约了性能)")])]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("比较虚拟DOM之间的差异 "),s("strong",[t._v("(节约了性能，js对象比较比DOM比较性能消耗小)")])]),t._v(" "),s("li",[t._v("直接操作DOM，生成新的真实DOM")])]),t._v(" "),s("h2",{attrs:{id:"jsx转换成虚拟dom对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx转换成虚拟dom对象"}},[t._v("#")]),t._v(" JSX转换成虚拟DOM对象")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("原理： 调用"),s("code",[t._v("React.createElement")]),t._v("方法\n"),s("code",[t._v("JSX")]),t._v(" => "),s("code",[t._v("createElement对象")]),t._v(" => "),s("code",[t._v("vdom")]),t._v(" => "),s("code",[t._v("真实DOM")])])]),t._v(" "),s("h2",{attrs:{id:"虚拟dom的有点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom的有点"}},[t._v("#")]),t._v(" 虚拟DOM的有点")]),t._v(" "),s("ul",[s("li",[t._v("提高了性能")]),t._v(" "),s("li",[t._v("可以开发原生应用 "),s("code",[t._v("react native")])])]),t._v(" "),s("h2",{attrs:{id:"react虚拟dom的diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react虚拟dom的diff算法"}},[t._v("#")]),t._v(" react虚拟DOM的diff算法")]),t._v(" "),s("ul",[s("li",[t._v("多次setState只会进行一次比对")]),t._v(" "),s("li",[t._v("一次只进行同层比对，如果第一层不一致，就会重新生成所有子元 素")])])])}),[],!1,null,null,null);a.default=n.exports}}]);