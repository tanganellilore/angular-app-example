"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[3549],{3549:(Z,m,a)=>{a.r(m),a.d(m,{ExerciceModule:()=>l});var p=a(6895),n=a(433),d=a(7905),e=a(1571);class i{transform(t,...r){return JSON.stringify(t,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}function f(o,t){if(1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"input",21),e.qZA()()),2&o){const r=t.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.s9C("id",r),e.Q6J("formControlName",r)}}i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"prettyjson",type:i,pure:!0});class s{constructor(t){this.fb=t,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],characters:this.fb.array([this.fb.control("Iron Man"),this.fb.control("Thanos"),this.fb.control("Hulk"),this.fb.control("Captain America")])})}ngOnInit(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019"})}addCharacter(){this.characters.push(this.fb.control("New Character"))}get characters(){return this.exampleForm.get("characters")}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame patchValue",releaseDate:"26/04/2019 patchValue"})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null})}}s.\u0275fac=function(t){return new(t||s)(e.Y36(n.qu))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-form-array"]],decls:53,vars:9,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-primary"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-9"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"form-group","col-md-3"],["for","releaseDate"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],[1,"card","p-4"],[1,"card-title","text-center","text-info"],["formArrayName","characters"],["type","submit",1,"btn","btn-primary","mr-2",3,"click"],[1,"table","table-sm","table-bordered"],[4,"ngFor","ngForOf"],[1,"col-5"],[3,"innerHTML"],["type","text",1,"form-control",3,"id","formControlName"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"FormArray"),e.qZA(),e.TgZ(6,"form",5)(7,"div",6)(8,"div",7)(9,"label",8),e._uU(10,"Name"),e.qZA(),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",10)(13,"label",11),e._uU(14,"Date"),e.qZA(),e._UZ(15,"input",12),e.qZA()(),e.TgZ(16,"div",13)(17,"h5",14),e._uU(18,"Arrays"),e.qZA(),e.TgZ(19,"div",6)(20,"div",15)(21,"button",16),e.NdJ("click",function(){return r.addCharacter()}),e._uU(22,"Add"),e.qZA(),e.TgZ(23,"button",16),e.NdJ("click",function(){return r.updateControls()}),e._uU(24,"Delete"),e.qZA(),e.TgZ(25,"table",17)(26,"thead")(27,"tr")(28,"th"),e._uU(29,"Id"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Name"),e.qZA()()(),e.TgZ(32,"tbody"),e.YNc(33,f,5,3,"tr",18),e.qZA()()()()(),e.TgZ(34,"button",16),e.NdJ("click",function(){return r.resetControls()}),e._uU(35,"Reset Controls"),e.qZA(),e.TgZ(36,"button",16),e.NdJ("click",function(){return r.updateControls()}),e._uU(37,"Update Controls"),e.qZA()()(),e.TgZ(38,"div",19)(39,"h5",4),e._uU(40,"FormArray Result"),e.qZA(),e.TgZ(41,"strong"),e._uU(42,"Valid"),e.qZA(),e._uU(43),e._UZ(44,"br"),e.TgZ(45,"strong"),e._uU(46,"Form Value"),e.qZA(),e._UZ(47,"div",20),e.ALo(48,"prettyjson"),e.TgZ(49,"strong"),e._uU(50,"Array Value"),e.qZA(),e._UZ(51,"div",20),e.ALo(52,"prettyjson"),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("formGroup",r.exampleForm),e.xp6(27),e.Q6J("ngForOf",r.characters.controls),e.xp6(10),e.hij(" : ",r.exampleForm.valid,""),e.xp6(4),e.Q6J("innerHTML",e.lcZ(48,5,r.exampleForm.value),e.oJD),e.xp6(4),e.Q6J("innerHTML",e.lcZ(52,7,r.exampleForm.value.characters),e.oJD))},dependencies:[p.sg,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,n.CE,i]});const h=[{path:"",component:s,children:[]}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[d.Bz.forChild(h),d.Bz]});class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[p.ez,c,n.u5,n.UX]})}}]);