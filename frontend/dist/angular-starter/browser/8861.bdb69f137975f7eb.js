"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[8861],{8861:(T,r,n)=>{n.r(r),n.d(r,{MoviesModule:()=>i});var p=n(6895),m=n(7905),u=n(7507),e=n(1571),h=n(2767),f=n(341),v=n(2329),x=n(7747);function C(o,l){if(1&o&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-search-result",4),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("searchField",t.searchField)("found",t.found)("creation",t.creation)("link",t.link)}}function M(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",5)(2,"app-pagination",6),e.NdJ("changePage",function(c){e.CHM(t);const d=e.oxw();return e.KtG(d.onChangePage(c))}),e.qZA(),e._UZ(3,"app-grid",7),e.TgZ(4,"app-pagination",6),e.NdJ("changePage",function(c){e.CHM(t);const d=e.oxw();return e.KtG(d.onChangePage(c))}),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("count",t.itemsCount)("page",t.itemsPage)("perPage",t.itemsPerPage),e.xp6(1),e.Q6J("items",t.items)("columns",t.columns)("link",t.link),e.xp6(1),e.Q6J("count",t.itemsCount)("page",t.itemsPage)("perPage",t.itemsPerPage)}}class s extends u._{constructor(l){super(l)}initialize(){this.endpoint="movies",this.link="movies",this.placeholder="movies...",this.results="Movies",this.found="movies",this.creation="Movie",this.loaded=!1,this.icon="fas fa-film",this.itemsCount=0,this.itemsPerPage=5,this.linkRoute="movies",this.columns=[{type:"num",title:{caption:"N\xb0",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"N\xb0",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{type:"pos",title:{caption:"Pos",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"Pos",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{title:{caption:"Id",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"id",class:"text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{type:"wiki",title:{caption:"Wiki",class:"text-center text-success"},data:{field:"wikipediaLink",class:"text-center text-success"}},{type:"smallimg",title:{caption:"Img",class:"font-weight-bold text-center"},data:{field:"image",class:"font-weight-bold text-center",height:129,width:90}},{title:{caption:"Name",class:"text-primary font-weight-bold text-center"},data:{field:"name",class:"text-primary font-weight-bold text-center"}},{title:{caption:"Date",class:"font-weight-bold text-center"},data:{field:"releaseDate",class:"text-center"}}],super.initialize()}}s.\u0275fac=function(l){return new(l||s)(e.Y36(e.zs3))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-movies"]],features:[e.qOj],decls:3,vars:7,consts:[[3,"searchField","itemsCount","icon","results","placeholder","search"],["class","row",4,"ngIf"],[1,"row"],[1,"col"],[3,"searchField","found","creation","link"],[1,"col","mt-4"],[3,"count","page","perPage","changePage"],[3,"items","columns","link"]],template:function(l,t){1&l&&(e.TgZ(0,"app-search-bar",0),e.NdJ("search",function(c){return t.onSearch(c)}),e.qZA(),e.YNc(1,C,3,4,"div",1),e.YNc(2,M,5,9,"div",1)),2&l&&(e.Q6J("searchField",t.searchField)("itemsCount",t.itemsCount)("icon",t.icon)("results",t.results)("placeholder",t.placeholder),e.xp6(1),e.Q6J("ngIf",t.loaded&&0===t.itemsCount),e.xp6(1),e.Q6J("ngIf",t.loaded&&0!==t.itemsCount))},dependencies:[p.O5,h.M,f.Q,v.N,x.B],styles:["th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{text-align:center;cursor:pointer}"]});const P=[{path:"",component:s}];class a{}a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(P),m.Bz]});var b=n(2912),y=n(3226),J=n(7550),F=n(5199);class i{}i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,a,b.z,y.u,J.B,F.p]})}}]);