(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a3fdb38"],{"0780":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"portfolio-container"},[s("div",{attrs:{id:"proyectos"}},[t._m(0),s("div",{staticClass:"portfolio-container__desk"},[s("div",{staticClass:"portfolio-container__desk__container"},t._l(t.projects,(function(i,a){return s("div",{key:a,staticClass:"Desk-Folio-Item",attrs:{id:i.id,"data-index":a}},[s("figure",{staticClass:"Desk-folio-image"},[s("a",{on:{click:function(s){return t.projectModal(i)}}},[s("img",{staticClass:"lazy-img",attrs:{src:i.img,alt:"","src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}}),s("div",{staticClass:"img-overlay"},[t._v(" "+t._s(t.$t("message.portfolio.view"))+" ")])])]),s("div",{staticClass:"Desk-folio-description",attrs:{"data-aos-duration":"500","data-aos":"zoom-in"}},[s("a",{staticClass:"details",on:{click:function(s){return t.projectModal(i)}}},[t._v(" "+t._s(t.$t("message.portfolio.details"))+" ")]),s("a",{staticClass:"name",on:{click:function(s){return t.projectModal(i)}}},[t._v(" "+t._s(i.titulo)+" ")]),s("div",{staticClass:"skills-span"},t._l(i.skills,(function(i,a){return s("span",{key:a},[t._v(t._s(i)+", ")])})),0)])])})),0)]),s("div",{staticClass:"portfolio-container__mobile"},t._l(t.projects,(function(i,a){return s("div",{key:a,staticClass:"portfolio-container__mobile--item"},[s("figure",{staticClass:"portfolio-container__mobile--item--img"},[s("img",{staticClass:"lazy-img",attrs:{src:i.img,alt:"","src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}})]),s("div",{staticClass:"portfolio-container__mobile--item--links"},[s("div",{staticClass:"name"},[t._v(t._s(i.titulo))]),s("div",{staticClass:"skills-span"},t._l(i.skills,(function(i,a){return s("span",{key:a},[t._v(t._s(i)+", ")])})),0)]),s("div",{staticClass:"portfolio-container__mobile--item--btn"},[s("a",{staticClass:"mobileProBtn",attrs:{href:i.linkSitio,target:"_blank"}},[s("font-awesome-icon",{staticClass:"mobileProBtn-icon",attrs:{icon:["fas","link"]}}),t._v("demo ")],1),s("a",{staticClass:"mobileProBtn",attrs:{href:i.linkGithub,target:"_blank"}},[s("font-awesome-icon",{staticClass:"mobileProBtn-icon",attrs:{icon:["fab","github"]}}),t._v("source ")],1)])])})),0)]),s("transition",{attrs:{name:"projectModalAppear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showProjectModal,expression:"showProjectModal"}],staticClass:"projectDetailsModal"},[t.currentProjectModal?s("div",{staticClass:"modalContent"},[s("div",{staticClass:"modalCloseBtn"},[s("div",{staticClass:"close-btn",on:{click:t.closeModalProject}},[s("div",{staticClass:"line"}),s("div",{staticClass:"line"}),s("div",{staticClass:"line"})])]),s("div",{staticClass:"desktModal-title"},[t._v(t._s(t.currentProjectModal.titulo))]),s("div",{staticClass:"desktModal-description"},[s("div",{staticClass:"modalProjectDetails"},[t._v(" "+t._s(t.currentProjectModal.details)+" ")]),s("div",{staticClass:"modalToolsLabels"},t._l(t.currentProjectModal.herramientas,(function(i,a){return s("span",{key:a,staticClass:"tool"},[t._v(t._s(i)+" ")])})),0),s("div",{staticClass:"modalButtons"},[s("a",{staticClass:"modalButton-1",attrs:{href:t.currentProjectModal.linkSitio,target:"_blank"}},[s("font-awesome-icon",{staticClass:"modalButton-icon",attrs:{icon:["fas","link"]}}),t._v("view live ")],1),s("a",{staticClass:"modalButton-2",attrs:{href:t.currentProjectModal.linkGithub,target:"_blank"}},[s("font-awesome-icon",{staticClass:"modalButton-icon",attrs:{icon:["fab","github"]}}),t._v("view on github ")],1)])])]):t._e()])]),s("Footer")],1)},o=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"portfolio-container__head"},[s("h1",[t._v("React projects")])])}],e=[{img:"https://i.imgur.com/IhguKsY.jpg",id:"4",titulo:"Gatsby site",linkGithub:"https://github.com/nzml906/gatsby_01",linkSitio:"https://gatsbytour.gatsbyjs.io/",skills:["react js","gatsby","pre-rendering","SSG","SSR"]},{img:"https://i.imgur.com/wFZgaN1.png",id:"3",titulo:"Next Js blog",linkGithub:"https://github.com/nzml906/neo_next",linkSitio:"https://neo-next.vercel.app/",skills:["react js","next js","pre-rendering","SSG","SSR"]},{img:"https://i.imgur.com/nskjLXC.png",id:"1",titulo:"COVID-19-react",linkGithub:"https://github.com/nzml906/COVID-19-react",linkSitio:"https://nzml906.github.io/COVID-19-react/",skills:["react js","axios","chart js","react chart-js","react metarial UI","restful-webservices"]},{img:"https://i.imgur.com/8pPuuGv.png",id:"2",titulo:"react-todo",linkGithub:"https://github.com/nzml906/react-ToDo",linkSitio:"https://nzml906.github.io/react-ToDo/",skills:["react js","javascript","material-ui"]},{img:"https://i.imgur.com/p6wRDQl.jpg",id:"5",titulo:"emoji-search",linkGithub:"https://github.com/nzml906/react-emoji-search",linkSitio:"https://boring-booth-af175e.netlify.app/",skills:["react js","javascript"]}],l=e,n=s("fd2d"),c={components:{Footer:n["a"]},data:function(){return{currentProjectModal:null,showProjectModal:!1,projects:l}},methods:{projectModal:function(t){this.currentProjectModal=t,this.showProjectModal=!0},closeModalProject:function(){this.showProjectModal=!1}},created:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},r=c,d=s("2877"),m=Object(d["a"])(r,a,o,!1,null,null,null);i["default"]=m.exports},fd2d:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"footer"},[s("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],staticClass:"up-btn",attrs:{id:"upButton","data-aos-duration":"500","data-aos":"zoom-in"}},[s("div",{staticClass:"up-btn--icon"})]),t._m(0),s("nav",{staticClass:"footer__social-icons"},[s("a",{staticClass:"icon-link",attrs:{href:"https://twitter.com/sajib906",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),s("a",{staticClass:"icon-link",attrs:{href:"https://www.facebook.com/sajib906",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),s("a",{staticClass:"icon-link",attrs:{href:"https://github.com/nzml906",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),s("a",{staticClass:"icon-link",attrs:{href:"https://www.linkedin.com/in/nazmul-ahmed/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])},o=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"footer__details text-center text-light"},[t._v(" Designed by Nazmul Ahmed, 2020.   "),s("a",[t._v("sajib906@gmail.com")])])}],e=s("2877"),l={},n=Object(e["a"])(l,a,o,!1,null,null,null);i["a"]=n.exports}}]);
//# sourceMappingURL=chunk-4a3fdb38.b11cdeb2.js.map