(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{331:function(t,r,a){"use strict";a.r(r);var v=a(0),s=Object(v.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-我们为什么要使用自动化部署？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-我们为什么要使用自动化部署？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.我们为什么要使用自动化部署？")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("烦恼：")]),t._v("\n在我开发项目时，常常会因为产品需要测试线上环境，所以我们需要暂时部署一个未开发完善的版本，又或者是在版本更新的时候我们都需要对线上环境进行一次部署，因为本人不是专业的运维人员，部署的知识往往会忘记一些细节，往往部署的时候都需要去百度解决方案，而且就算在熟练的情况下，数据的迁移也是一个很大的工作量，在开发阶段，版本的迭代更是非常频繁，我们不可能每次版本更新都人工去操作线上环境，这样不仅容易造成线上环境变化，造成线上崩溃（本人亲身经历。。操作失误，绝望的重装了线上环境，浪费了半天时间），而且人工部署也是不可重复且不可靠的部署工作模式")])]),t._v(" "),a("h2",{attrs:{id:"所以，使用自动化部署是一个减少996，提高生产效率的必备手段！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所以，使用自动化部署是一个减少996，提高生产效率的必备手段！","aria-hidden":"true"}},[t._v("#")]),t._v(" 所以，使用自动化部署是一个减少996，提高生产效率的必备手段！")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("好处：")]),t._v("\n部署过程的每一个步骤都自动化，可以带来包括效能在内的显著的好处。你可以手工做这些事情，但是很耗时。二者的生产率差异真的很大。一般目前部署过程涉及到应用、环境和部署流程主要的模型。要实现自动化首先要做的是将需要部署的应用、环境和流程进行建模，所以还是需要一个自动化部署系统来支撑。（引用百度百科）")])]),t._v(" "),a("h2",{attrs:{id:"什么是持续集成（ci）-持续部署（cd）？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是持续集成（ci）-持续部署（cd）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是持续集成（CI）/持续部署（CD）？")]),t._v(" "),a("p",[t._v("谈到自动部署，我们自然要学到两个非常重要的计算机概念，"),a("font",{attrs:{face:"微软雅黑",color:"red",size:"5"}},[t._v("持续集成、持续部署")])],1),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("基本概念")]),t._v("\n工厂里的装配线以快速、自动化、可重复的方式从原材料生产出消费品。同样，软件交付管道以快速、自动化和可重复的方式从源代码生成发布版本。"),a("font",{attrs:{face:"微软雅黑",color:"red"}},[t._v("如何完成这项工作的总体设计称为“持续交付”（CD）。启动装配线的过程称为“持续集成”（CI）。确保质量的过程称为“持续测试”，将最终产品提供给用户的过程称为“持续部署”。")]),t._v("\n一些专家让这一切简单、顺畅、高效地运行，这些人被称为 运维开发(DevOps)践行者。")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("持续")]),t._v("，在语文上的意思是延续，继续；无间隔，连续不断。可是，在计算机中，持续是指“随时可运行”，在软件开发领域，它还有几个核心概念：")])])]),t._v(" "),a("p",[a("strong",[t._v("频繁发布")]),t._v("：在我们真实的工作中，业务需求变化可能十分迅速，我们程序员可能需要频繁的，高效的交出高质量的代码（996） 有些业务变化频繁的企业甚至几天就需要交付一次产品变更，在我大学的研发中，由于没有专业的产品业务设计，需求有时候几天就需要变化一次。在我们完成了复杂的产品开发后，还要操心业务部署问题，代码测试问题，整个人都不好了。")]),t._v(" "),a("p",[a("strong",[t._v("快速迭代")]),t._v("：版本在开发完成后，应该尽快的，通过各类测试用例，尽快交付生产环境使用")]),t._v(" "),a("h2",{attrs:{id:"devops自动上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devops自动上线","aria-hidden":"true"}},[t._v("#")]),t._v(" DevOps自动上线")]),t._v(" "),a("p",[t._v("在我们开发者推送代码到服务器后，服务器会产生一个"),a("router-link",{attrs:{to:"/guide/operation/webhook.html"}},[t._v("Webhook")]),t._v("请求CI所在的服务，触发开发者事前写好的处理逻辑脚本，如拉取代码，代码分析，打包，部署，等等操作，最后推送到服务集群")],1),t._v(" "),a("h2",{attrs:{id:"自动化部署实践-使用travisci自动化部署vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署实践-使用travisci自动化部署vuepress","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化部署实践--使用TravisCI自动化部署Vuepress")]),t._v(" "),a("p",[t._v("大家看到的这篇文章网页，实际上就是使用了自动化部署的，在我没有学会自动化部署时，每次写了博客，还要花大量的时间去解决部署问题，懒癌患者感到压力山大，写博客的动力也就没了，于是，我也就开始研究如何自动化部署")]),t._v(" "),a("h3",{attrs:{id:"思考：怎么才能实现自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考：怎么才能实现自动部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 思考：怎么才能实现自动部署")]),t._v(" "),a("p",[t._v("要实现自动化部署，我把他分为以下几个步骤")]),t._v(" "),a("ul",[a("li",[t._v("代码、文章编写")]),t._v(" "),a("li",[t._v("上传github")]),t._v(" "),a("li",[t._v("CI监听到github文件变动，开始构建最新变化与代码测试")]),t._v(" "),a("li",[t._v("CI构建完毕，将构建好的生产代码推送到生产环境/分支中")]),t._v(" "),a("li",[t._v("成功自动部署")])]),t._v(" "),a("h3",{attrs:{id:"为了实现文件监听，我们就必须使用ci工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为了实现文件监听，我们就必须使用ci工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 为了实现文件监听，我们就必须使用CI工具")]),t._v(" "),a("p",[t._v("CI工具可以让我们实现监听构建的需求，介绍几款有名的CI工具：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Jenkins")]),t._v(" "),a("font",{attrs:{color:"red"}},[t._v("免费！")]),t._v("插件丰富，基本能够实现所有开发需求，但是也存在着比较大的学习成本和服务器需求，如果你的项目足够大，服务器性能有剩余，也需要部署构建工具到自己的服务器，那么你可以考虑")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Travis CI")]),t._v("\n比较老牌的CI工具，从开源项目发展到现在的闭源项目，他对开源软件是"),a("font",{attrs:{color:"red"}},[t._v("免费！")]),t._v("的，但是对商业应用是收费的，价格在69刀到489刀，如果你的代码是开源的，那么Travis是一个不错的选择")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Circle CI")]),t._v("\nCircle CI 是一个基于 云 的工具，可自动执行集成和部署过程。它还侧重于在部署之前测试代码的每个更改，使用多种方法，如 单元测试 ，集成测试和功能测试。该工具支持容器，OSX，Linux，可以在私有云或您自己的 数据 中心内运行。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("TeamCity")]),t._v("\n来自jetbrains公司的作品，jetbrains这家公司我必须给满分，对学生，开源的支持度是最好的，java开发工具更是一绝。jetbrains牛！这款CI工具，还是"),a("font",{attrs:{color:"red"}},[t._v("免费！")]),t._v("，如果你想用专业的CI又不想付费，那么TeamCity将会是一个不错的选择")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("GitLab")]),t._v("\nGitLab CI作为GitLab的一部分免费提供，并且可以相当快速地设置。要开始使用GitLab CI，首先需要将. git lab-ci.yml文件添加到存储库的根目录，以及配置GitLab项目以使用Runner。之后，每次提交或推送都将触发具有三个阶段的CI管道：构建，测试和部署。")])])]),t._v(" "),a("h3",{attrs:{id:"使用travis自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用travis自动化部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Travis自动化部署")]),t._v(" "),a("p",[t._v("因为本博客是开源的，我也就选用了Travis作为CI工具。")])])}),[],!1,null,null,null);r.default=s.exports}}]);