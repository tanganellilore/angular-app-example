"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[7649],{7649:(A,d,l)=>{l.r(d),l.d(d,{CountriesModule:()=>s});var r=l(6895),p=l(433),u=l(7905),m=l(7507),e=l(1571),f=l(2767),g=l(341),x=l(2329),h=l(7747);function b(n,o){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-search-result",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("searchField",t.searchField)("found",t.found)("creation",t.creation)("link",t.link)}}function C(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",5)(2,"app-pagination",6),e.NdJ("changePage",function(c){e.CHM(t);const Z=e.oxw();return e.KtG(Z.onChangePage(c))}),e.qZA(),e._UZ(3,"app-grid",7),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("count",t.itemsCount)("page",t.itemsPage)("perPage",t.itemsPerPage),e.xp6(1),e.Q6J("items",t.items)("columns",t.columns)("link",t.link)}}class i extends m._{constructor(o){super(o)}initialize(){this.endpoint="countries",this.link="countries",this.placeholder="countries...",this.results="Countries",this.found="countries",this.creation="Country",this.loaded=!1,this.icon="far fa-flag",this.itemsCount=0,this.itemsPerPage=20,this.linkRoute="countries",this.columns=[{type:"num",title:{caption:"N\xb0",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"N\xb0",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{type:"pos",title:{caption:"Pos",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"Pos",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{title:{caption:"Id",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"id",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{type:"wiki",title:{caption:"Wiki",class:"text-center text-success"},data:{field:"wikipediaLink",class:"text-center text-success"}},{title:{caption:"Name",class:"text-primary font-weight-bold text-center"},data:{field:"name",class:"text-primary font-weight-bold text-center"}},{type:"img",title:{caption:"Flag",class:"font-weight-bold text-center"},data:{field:"image",class:"font-weight-bold text-center"}},{title:{caption:"Iso2",class:"text-center"},data:{field:"isoAlpha2",class:"text-center"}},{title:{caption:"Iso3",class:"text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"isoAlpha3",class:"text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{title:{caption:"Iso",class:"text-center d-none d-lg-table-cell d-xl-table-cell"},data:{field:"isoNumeric",class:"text-center d-none d-lg-table-cell d-xl-table-cell"}},{type:"subfield",title:{caption:"Continent",class:"text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell"},data:{field:"continent",subfield:"name",class:"text-secondary text-center d-none d-lg-table-cell d-xl-table-cell"}},{type:"subfield",title:{caption:"Code",class:"text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell"},data:{field:"continent",subfield:"code",class:"text-secondary text-center d-none d-lg-table-cell d-xl-table-cell"}}],super.initialize()}}i.\u0275fac=function(o){return new(o||i)(e.Y36(e.zs3))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-countries"]],features:[e.qOj],decls:3,vars:7,consts:[[3,"searchField","itemsCount","icon","results","placeholder","search"],["class","row",4,"ngIf"],[1,"row"],[1,"col"],[3,"searchField","found","creation","link"],[1,"col","mt-4"],[3,"count","page","perPage","changePage"],[3,"items","columns","link"]],template:function(o,t){1&o&&(e.TgZ(0,"app-search-bar",0),e.NdJ("search",function(c){return t.onSearch(c)}),e.qZA(),e.YNc(1,b,3,4,"div",1),e.YNc(2,C,4,6,"div",1)),2&o&&(e.Q6J("searchField",t.searchField)("itemsCount",t.itemsCount)("icon",t.icon)("results",t.results)("placeholder",t.placeholder),e.xp6(1),e.Q6J("ngIf",t.loaded&&0===t.itemsCount),e.xp6(1),e.Q6J("ngIf",t.loaded&&0!==t.itemsCount))},dependencies:[r.O5,f.M,g.Q,x.N,h.B]});const v=[{path:"",component:i}];class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.Bz.forChild(v),u.Bz]});var y=l(2912),P=l(3226),F=l(7550),J=l(5199);class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[r.ez,p.u5,a,y.z,P.u,F.B,J.p]})}}]);