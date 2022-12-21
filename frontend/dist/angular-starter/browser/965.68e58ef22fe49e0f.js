"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[965],{7230:(Z,_,l)=>{l.r(_),l.d(_,{CitiesFormModule:()=>i});var g=l(6895),a=l(433),d=l(7905),C=l(8433),t=l(1571);function v(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1," Name is required. "),t.qZA())}function f(n,o){if(1&n&&(t.TgZ(0,"div",33),t.YNc(1,v,2,0,"div",34),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.name.errors.required)}}class u extends C.i{constructor(o){super(o)}initialize(){this.endpoint="cities",this.titleForm="City Form",this.icon="fas fa-city",super.initialize()}createForm(){this.form=this.fb.group({id:null,name:[null,[a.kI.required]],capital:null,wikipediaLink:null}),super.createForm()}resetForm(){this.item.id=null,this.item.name=null,this.item.capital=null,this.item.wikipediaLink=null,super.resetForm()}setFormValue(o){this.form.controls.id.setValue(o.id),this.form.controls.name.setValue(o.name),this.form.controls.capital.setValue(o.capital),this.form.controls.wikipediaLink.setValue(o.wikipediaLink),super.setFormValue(o)}get name(){return this.form.get("name")}}u.\u0275fac=function(o){return new(o||u)(t.Y36(t.zs3))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-cities-form"]],features:[t.qOj],decls:54,vars:21,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col"],[1,"d-flex","md-form","form-group","mt-0"],[1,"disabled","clearfix","d-none","d-md-block","pt-2","ml-4"],[1,"text-primary","font-weight-bold","mr-4"],[1,"navbar-btn","waves-effect","waves-light","ml-auto","px-3","pt-2"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-plus","fa-lg"],[1,"fas","fa-save","fa-lg"],[1,"fas","fa-copy","fa-lg"],[1,"fas","fa-trash-alt","fa-lg"],[1,"form-row"],[1,"form-group","col-md-2"],["for","id",1,"text-info"],["type","text","formControlName","id","placeholder","","id","id","readonly","",1,"text-info","form-control"],[1,"form-group","col-md-6"],["for","name",1,"text-primary","font-weight-bold"],["type","text","formControlName","name","placeholder","","id","name",1,"text-primary","form-control","font-weight-bold"],["class","alert alert-primary mt-2",4,"ngIf"],[1,"form-check"],["formControlName","capital","type","checkbox","id","capital",1,"form-check-input"],["for","capital",1,"form-check-label"],["for","wikipediaLink",1,"text-success"],[1,"input-group"],[1,"input-group-prepend"],["id","wikipediaLinkGroupPrepend",1,"input-group-text"],[3,"href"],[1,"text-success","fab","fa-wikipedia-w"],["type","text","formControlName","wikipediaLink","placeholder","","id","wikipediaLink","aria-describedby","wikipediaLinkGroupPrepend",1,"text-success","form-control"],[1,"alert","alert-primary","mt-2"],[4,"ngIf"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",0)(6,"div",5)(7,"div",6)(8,"div",7),t._UZ(9,"i"),t.TgZ(10,"span",8),t._uU(11),t.qZA(),t._UZ(12,"i"),t.TgZ(13,"span"),t._uU(14,"Datesource : "),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"a",9)(18,"button",10),t.NdJ("click",function(){return e.onCreate()}),t._UZ(19,"i",11),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return e.onUpdate()}),t._UZ(21,"i",12),t.qZA(),t.TgZ(22,"button",10),t.NdJ("click",function(){return e.onCopy()}),t._UZ(23,"i",13),t.qZA(),t.TgZ(24,"button",10),t.NdJ("click",function(){return e.onDelete()}),t._UZ(25,"i",14),t.qZA()()()()(),t.TgZ(26,"div",0)(27,"div",5)(28,"div",15)(29,"div",16)(30,"label",17),t._uU(31,"Id"),t.qZA(),t._UZ(32,"input",18),t.qZA(),t.TgZ(33,"div",19)(34,"label",20),t._uU(35,"Name"),t.qZA(),t._UZ(36,"input",21),t.YNc(37,f,2,1,"div",22),t.qZA()(),t.TgZ(38,"div",15)(39,"div",16)(40,"div",23),t._UZ(41,"input",24),t.TgZ(42,"label",25),t._uU(43," Capital "),t.qZA()()()(),t.TgZ(44,"div",15)(45,"div",19)(46,"label",26),t._uU(47,"wikipedia"),t.qZA(),t.TgZ(48,"div",27)(49,"div",28)(50,"span",29)(51,"a",30),t._UZ(52,"i",31),t.qZA()()(),t._UZ(53,"input",32),t.qZA()()()()()()()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",e.form),t.xp6(5),t.Gre("",e.icon," text-primary mr-2"),t.xp6(2),t.Oqu(e.titleForm),t.xp6(1),t.Gre("fas fa-database ",e.datasourceColor," mr-2 ml-4 mr-2"),t.xp6(1),t.Gre("",e.datasourceColor," ml-2"),t.xp6(2),t.Gre("",e.datasourceColor," ml-2"),t.xp6(1),t.Oqu(e.datasource),t.xp6(2),t.Q6J("disabled",!e.api),t.xp6(2),t.Q6J("disabled",e.form.invalid||!e.api),t.xp6(2),t.Q6J("disabled",e.form.invalid||!e.api||null==e.item.id),t.xp6(2),t.Q6J("disabled",e.form.invalid||!e.api||null==e.item.id),t.xp6(13),t.Q6J("ngIf",e.name.invalid),t.xp6(14),t.MGl("href","https://en.wikipedia.org/wiki/",e.form.value.wikipediaLink,"",t.LSH))},dependencies:[g.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u]});const s=[{path:"",component:u}];class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.Bz.forChild(s),d.Bz]});class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,r,a.UX,a.u5]})},8568:(Z,_,l)=>{l.d(_,{L:()=>f});var g=l(529),a=l(9646),d=l(262),C=l(4004),t=l(1571);const v={headers:new g.WM({"Content-Type":"application/json"})};class f{constructor(s){this.http=s}filterJsonItem(s,r){let i=null;return s.map((n,o,e)=>{const m=parseInt(r,10);e[o].id===m&&(i=e[o])}),i}filterJsonItemsCount(s,r){let i=0;if(void 0!==r&&null!=r){const n=r.toString().toLowerCase();i=s.filter(e=>0===e.name.toLowerCase().indexOf(n)).length}else i=s.length;return{count:i}}filterJsonItems(s,r,i,n){let o;if(void 0!==r&&null!=r){const c=r.toString().toLowerCase();o=s.filter(p=>0===p.name.toLowerCase().indexOf(c))}else o=s;const e=i*(n-1),m=i*(n-1)+i-1,h=[];return o.map((c,p)=>{p>=e&&p<=m&&h.push(o[p])}),h}getItemsCount(s,r,i){let n="";void 0!==i&&""!==i&&null!==i&&(n="?q="+i);const o=(r+=s?"/count":".json")+n;let e;return e=s?this.http.get(o).pipe((0,d.K)(this.handleError("getItems",[]))):this.http.get(o).pipe((0,C.U)(m=>this.filterJsonItemsCount(m,i)),(0,d.K)(this.handleError("getItems",[]))),e}getItems(s,r,i,n,o){s||(r+=".json");let e="";if(void 0!==i||void 0!==n||void 0!==o){const c=i;let p;p=0,0===n&&(n=1),void 0!==n&&(p=(n-1)*i),void 0!==o&&""!==o&&null!==o&&(e="?q="+o),e=""!==e?e+"&limit="+c+"&offset="+p:"?limit="+c+"&offset="+p}const m=r+e;let h;return h=s?this.http.get(m).pipe((0,d.K)(this.handleError("getItems",[]))):this.http.get(m).pipe((0,C.U)(c=>this.filterJsonItems(c,o,i,n)),(0,d.K)(this.handleError("getItems",[]))),h}getItem(s,r,i){s||(r+=".json");let n={};return void 0!==i&&(n=s?this.http.get(r+"/"+i).pipe((0,d.K)(this.handleError(`getItem id=${i}`))):this.http.get(r).pipe((0,C.U)(e=>this.filterJsonItem(e,i)),(0,d.K)(this.handleError("getItems",[])))),n}addItem(s,r){const i=JSON.stringify(r);return this.http.post(s,i,v).pipe((0,d.K)(this.handleError("addItem")))}updateItem(s,r,i){return this.http.put(i+"/"+r,s,v).pipe((0,d.K)(this.handleError("updateItem")))}deleteItem(s,r){return this.http.delete(s+"/"+r,v).pipe((0,d.K)(this.handleError("deleteItem")))}handleError(s="operation",r){return i=>(console.error(`${s} failed: ${i.message}`),(0,a.of)(r))}}f.\u0275fac=function(s){return new(s||f)(t.LFG(g.eN))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}}]);