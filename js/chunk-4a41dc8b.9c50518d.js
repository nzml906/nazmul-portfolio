(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a41dc8b"],{"3c02":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"portfolio-container"},[i("div",{attrs:{id:"proyectos"}},[t._m(0),i("div",{staticClass:"portfolio-container__desk"},[i("div",{staticClass:"portfolio-container__desk__container"},t._l(t.projects,(function(s,o){return i("div",{key:o,staticClass:"Desk-Folio-Item",attrs:{id:s.id,"data-index":o}},[i("figure",{staticClass:"Desk-folio-image"},[i("a",{on:{click:function(i){return t.projectModal(s)}}},[i("img",{staticClass:"lazy-img",attrs:{src:s.img,alt:"","src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}}),i("div",{staticClass:"img-overlay"},[t._v(" "+t._s(t.$t("message.portfolio.view"))+" ")])])]),i("div",{staticClass:"Desk-folio-description",attrs:{"data-aos-duration":"500","data-aos":"zoom-in"}},[i("a",{staticClass:"details",on:{click:function(i){return t.projectModal(s)}}},[t._v(" "+t._s(t.$t("message.portfolio.details"))+" ")]),i("a",{staticClass:"name",on:{click:function(i){return t.projectModal(s)}}},[t._v(" "+t._s(s.titulo)+" ")]),i("div",{staticClass:"skills-span"},t._l(s.skills,(function(s,o){return i("span",{key:o},[t._v(t._s(s)+", ")])})),0)])])})),0)]),i("div",{staticClass:"portfolio-container__mobile"},t._l(t.projects,(function(s,o){return i("div",{key:o,staticClass:"portfolio-container__mobile--item"},[i("figure",{staticClass:"portfolio-container__mobile--item--img"},[i("img",{staticClass:"lazy-img",attrs:{src:s.img,alt:"","src-placeholder":"https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"}})]),i("div",{staticClass:"portfolio-container__mobile--item--links"},[i("div",{staticClass:"name"},[t._v(t._s(s.titulo))]),i("div",{staticClass:"skills-span"},t._l(s.skills,(function(s,o){return i("span",{key:o},[t._v(t._s(s)+", ")])})),0)]),i("div",{staticClass:"portfolio-container__mobile--item--btn"},[i("a",{staticClass:"mobileProBtn",attrs:{href:s.linkSitio,target:"_blank"}},[i("font-awesome-icon",{staticClass:"mobileProBtn-icon",attrs:{icon:["fas","link"]}}),t._v("demo ")],1),i("a",{staticClass:"mobileProBtn",attrs:{href:s.linkGithub,target:"_blank"}},[i("font-awesome-icon",{staticClass:"mobileProBtn-icon",attrs:{icon:["fab","github"]}}),t._v("source ")],1)])])})),0)]),i("transition",{attrs:{name:"projectModalAppear"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showProjectModal,expression:"showProjectModal"}],staticClass:"projectDetailsModal"},[t.currentProjectModal?i("div",{staticClass:"modalContent"},[i("div",{staticClass:"modalCloseBtn"},[i("div",{staticClass:"close-btn",on:{click:t.closeModalProject}},[i("div",{staticClass:"line"}),i("div",{staticClass:"line"}),i("div",{staticClass:"line"})])]),i("div",{staticClass:"desktModal-title"},[t._v(t._s(t.currentProjectModal.titulo))]),i("div",{staticClass:"desktModal-description"},[i("div",{staticClass:"modalProjectDetails"},[t._v(" "+t._s(t.currentProjectModal.details)+" ")]),i("div",{staticClass:"modalToolsLabels"},t._l(t.currentProjectModal.herramientas,(function(s,o){return i("span",{key:o,staticClass:"tool"},[t._v(t._s(s)+" ")])})),0),i("div",{staticClass:"modalButtons"},[i("a",{staticClass:"modalButton-1",attrs:{href:t.currentProjectModal.linkSitio,target:"_blank"}},[i("font-awesome-icon",{staticClass:"modalButton-icon",attrs:{icon:["fas","link"]}}),t._v("view live ")],1),i("a",{staticClass:"modalButton-2",attrs:{href:t.currentProjectModal.linkGithub,target:"_blank"}},[i("font-awesome-icon",{staticClass:"modalButton-icon",attrs:{icon:["fab","github"]}}),t._v("view on github ")],1)])])]):t._e()])]),i("Footer")],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"portfolio-container__head"},[i("h1",[t._v("PSD to HTML projects")])])}],e=[{img:"https://i.imgur.com/RyyOFUo.png",id:"9",titulo:"PSD to HTML",linkGithub:"https://github.com/nzml906/PSD2HTML_Natours_",linkSitio:"https://nzml906.github.io/natours-vue/",skills:["html","css","scss","Web-UI","Figma design","PSD to HTML"]},{img:"https://i.imgur.com/kJ7osgJ.png",id:"8",titulo:"PSD to HTML",linkGithub:"https://github.com/nzml906/PSD2HTML_Trillo_",linkSitio:"https://nzml906.github.io/trillo-ui/",skills:["html","css","scss","Web-UI","Figma design","PSD to HTML"]},{img:"https://i.imgur.com/aQvEdsf.png",id:"1",titulo:"nexter-real-estate",linkGithub:"https://github.com/nzml906/nexter-real-estate",linkSitio:"https://nzml906.github.io/nexter-real-estate/#/",skills:["Sass","Css Grid","Css Flexbox","Responsive Design"]},{img:"https://i.imgur.com/dl4jBVn.png",id:"10",titulo:"bootstrap-ui-portfolio",linkGithub:"https://github.com/nzml906/bootstrap-ui-portfolio",linkSitio:"https://nzml906.github.io/bootstrap-ui-portfolio/#/",skills:["bootstrap4","html","css","scss","Web-UI","Figma design","PSD to HTML"]},{img:"https://i.imgur.com/XH6PTqR.png",id:"10",titulo:"TechForing Landing page",linkGithub:"https://github.com/nzml906/foring",linkSitio:"https://nzml906.github.io/foring/",skills:["Bootstrap 4.5","scss","PSD to HTML"]}],l=e,n=i("fd2d"),c={components:{Footer:n["a"]},data:function(){return{currentProjectModal:null,showProjectModal:!1,projects:l}},methods:{projectModal:function(t){this.currentProjectModal=t,this.showProjectModal=!0},closeModalProject:function(){this.showProjectModal=!1}},created:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},r=c,d=i("2877"),m=Object(d["a"])(r,o,a,!1,null,null,null);s["default"]=m.exports},fd2d:function(t,s,i){"use strict";var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer"},[i("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],staticClass:"up-btn",attrs:{id:"upButton","data-aos-duration":"500","data-aos":"zoom-in"}},[i("div",{staticClass:"up-btn--icon"})]),t._m(0),i("nav",{staticClass:"footer__social-icons"},[i("a",{staticClass:"icon-link",attrs:{href:"https://twitter.com/sajib906",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),i("a",{staticClass:"icon-link",attrs:{href:"https://www.facebook.com/sajib906",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),i("a",{staticClass:"icon-link",attrs:{href:"https://github.com/nzml906",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),i("a",{staticClass:"icon-link",attrs:{href:"https://www.linkedin.com/in/nazmul-ahmed/",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"footer__details text-center text-light"},[t._v(" Designed by Nazmul Ahmed, 2020.   "),i("a",[t._v("sajib906@gmail.com")])])}],e=i("2877"),l={},n=Object(e["a"])(l,o,a,!1,null,null,null);s["a"]=n.exports}}]);
//# sourceMappingURL=chunk-4a41dc8b.9c50518d.js.map