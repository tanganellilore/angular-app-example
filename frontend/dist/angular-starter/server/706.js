"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=706,exports.ids=[706],exports.modules={56795:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ConfigService});var environment=__webpack_require__(97354);class Config{constructor(){this.api=!1,this.url=""}}__name(Config,"Config");var core=__webpack_require__(40305);class ConfigService{constructor(){this.config=new Config,this.config.api=environment.N.config.api,this.config.url=environment.N.config.url}}__name(ConfigService,"ConfigService"),ConfigService.\u0275fac=__name(function(t){return new(t||ConfigService)},"ConfigService_Factory"),ConfigService.\u0275prov=core.Yz7({token:ConfigService,factory:ConfigService.\u0275fac})},75706:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TutorialModule:()=>TutorialModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305);class TutorialComponent{}__name(TutorialComponent,"TutorialComponent"),TutorialComponent.\u0275fac=__name(function(t){return new(t||TutorialComponent)},"TutorialComponent_Factory"),TutorialComponent.\u0275cmp=core.Xpm({type:TutorialComponent,selectors:[["app-example-crud"]],decls:80,vars:0,consts:[[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col-3","d-none","d-lg-inline-block","d-xl-inline-block"],[1,"row"],[1,"col","mb-2"],[1,"ml-4","text-primary"],[1,"col"],["id","accordionItems",1,"accordion"],[1,"card","nga-card-menu"],[1,"card-header"],["data-bs-toggle","collapse","data-parent","#accordionItems","href","#collapseItems","aria-expanded","true"],[1,"card-item"],[1,"fas","fa-film","me-2"],["id","collapseItems","aria-labelledby","headingOne","data-parent","#accordionItems",1,"collapse","show"],[1,"card-body"],[1,"list-group","text-dark"],[1,"list-group-item"],["routerLink","/crud/shows-images"],[1,"fas","fa-desktop","me-2"],["routerLink","/crud/movies-images"],["routerLink","/crud/shows"],["routerLink","/crud/movies"],["routerLink","/crud/shows/0"],["routerLink","/crud/movies/0"],["data-bs-toggle","collapse","data-parent","#accordionMovies","href","#collapseMovies","aria-expanded","true"],[1,"fas","fa-tools","me-2"],["id","collapseMovies","aria-labelledby","headingOne","data-parent","#accordionMovies",1,"collapse"],["routerLink","/crud/continents"],[1,"fas","fa-globe","me-2"],["routerLink","/crud/countries"],[1,"far","fa-flag","me-2"],["routerLink","/crud/cities"],[1,"fas","fa-city","me-2"],["routerLink","/crud/continents/0"],["routerLink","/crud/countries/0"],["routerLink","/crud/cities/0"],[1,"col-12","col-sm-12","col-md-12","col-lg-9","col-xl-9"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5)(6,"strong"),core._uU(7,"Features List"),core.qZA()()()(),core.TgZ(8,"div",3)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"a",10)(14,"div",11),core._UZ(15,"i",12),core._uU(16,"Movies / Shows "),core.qZA()()(),core.TgZ(17,"div",13)(18,"div",14)(19,"ul",15)(20,"li",16)(21,"a",17),core._UZ(22,"i",18),core._uU(23," Shows Image "),core.qZA()(),core.TgZ(24,"li",16)(25,"a",19),core._UZ(26,"i",12),core._uU(27," Movies Image "),core.qZA()(),core.TgZ(28,"li",16)(29,"a",20),core._UZ(30,"i",18),core._uU(31," Shows List "),core.qZA()(),core.TgZ(32,"li",16)(33,"a",21),core._UZ(34,"i",12),core._uU(35," Movies List "),core.qZA()(),core.TgZ(36,"li",16)(37,"a",22),core._UZ(38,"i",18),core._uU(39," New Show "),core.qZA()(),core.TgZ(40,"li",16)(41,"a",23),core._UZ(42,"i",12),core._uU(43," New Movie "),core.qZA()()()()()(),core.TgZ(44,"div",8)(45,"div",9)(46,"a",24)(47,"div",11),core._UZ(48,"i",25),core._uU(49,"Generics "),core.qZA()()(),core.TgZ(50,"div",26)(51,"div",14)(52,"ul",15)(53,"li",16)(54,"a",27),core._UZ(55,"i",28),core._uU(56," Continents List "),core.qZA()(),core.TgZ(57,"li",16)(58,"a",29),core._UZ(59,"i",30),core._uU(60," Countries List "),core.qZA()(),core.TgZ(61,"li",16)(62,"a",31),core._UZ(63,"i",32),core._uU(64," Cities List "),core.qZA()(),core.TgZ(65,"li",16)(66,"a",33),core._UZ(67,"i",28),core._uU(68," New Continent "),core.qZA()(),core.TgZ(69,"li",16)(70,"a",34),core._UZ(71,"i",30),core._uU(72," New Country "),core.qZA()(),core.TgZ(73,"li",16)(74,"a",35),core._UZ(75,"i",32),core._uU(76," New City "),core.qZA()()()()()()()()()(),core.TgZ(77,"div",36)(78,"div",3),core._UZ(79,"router-outlet"),core.qZA()()()())},"TutorialComponent_Template"),dependencies:[router.lC,router.rH],styles:[".nga-btn-shows[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;padding:.5rem;font-size:.81rem;border:0;border-radius:.125rem}.nga-btn-shows[_ngcontent-%COMP%]:hover, .nga-btn-shows[_ngcontent-%COMP%]:active, .nga-btn-shows[_ngcontent-%COMP%]:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;outline:0}.nga-btn-shows-outline-primary[_ngcontent-%COMP%]{border:2px solid #4285f4!important;color:#4285f4!important;background-color:transparent!important}.nga-card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:gray;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.nga-card-movie-date[_ngcontent-%COMP%]{padding:.05rem;position:relative;font-size:9px;border:0px solid #ddd;border-radius:.25rem;transition:all .2s ease-in-out;color:gray;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:transparent}.nga-card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000;text-decoration:underline}.nga-card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3f729b;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.nga-card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3f729b;text-decoration:underline}.nga-card-movie-text[_ngcontent-%COMP%]{padding:.05rem;position:relative;background-color:transparent;border:0px solid #ddd;border-radius:.25rem;transition:all .2s ease-in-out;color:#3f729b;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nga-card-movie-img[_ngcontent-%COMP%]{opacity:1}.nga-card-movie-img[_ngcontent-%COMP%]:hover{opacity:.9}.nga-card-menu[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;font-weight:500}.list-group-item[_ngcontent-%COMP%]{padding:3px 10px}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:3px 10px;color:#000;text-decoration:none}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0d6efd}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#0d6efd}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]{color:#000}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0d6efd}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card-item[_ngcontent-%COMP%]{text-decoration:none;color:#0d6efd}"]});const routes=[{path:"",component:TutorialComponent,children:[{path:"continents",loadChildren:()=>__webpack_require__.e(545).then(__webpack_require__.bind(__webpack_require__,34545)).then(mod=>mod.ContinentsModule)},{path:"countries",loadChildren:()=>__webpack_require__.e(496).then(__webpack_require__.bind(__webpack_require__,22496)).then(mod=>mod.CountriesModule)},{path:"cities",loadChildren:()=>__webpack_require__.e(881).then(__webpack_require__.bind(__webpack_require__,85881)).then(mod=>mod.CitiesModule)},{path:"shows",loadChildren:()=>__webpack_require__.e(54).then(__webpack_require__.bind(__webpack_require__,49054)).then(mod=>mod.ShowsModule)},{path:"movies",loadChildren:()=>__webpack_require__.e(983).then(__webpack_require__.bind(__webpack_require__,99983)).then(mod=>mod.MoviesModule)},{path:"shows-images",loadChildren:()=>__webpack_require__.e(865).then(__webpack_require__.bind(__webpack_require__,24865)).then(mod=>mod.ShowsImagesModule)},{path:"movies-images",loadChildren:()=>__webpack_require__.e(493).then(__webpack_require__.bind(__webpack_require__,5493)).then(mod=>mod.MoviesImagesModule)},{path:"continents/:id",loadChildren:()=>__webpack_require__.e(651).then(__webpack_require__.bind(__webpack_require__,59651)).then(mod=>mod.ContinentsFormModule)},{path:"countries/:id",loadChildren:()=>__webpack_require__.e(484).then(__webpack_require__.bind(__webpack_require__,88484)).then(mod=>mod.CountriesFormModule)},{path:"cities/:id",loadChildren:()=>__webpack_require__.e(226).then(__webpack_require__.bind(__webpack_require__,78226)).then(mod=>mod.CitiesFormModule)},{path:"shows/:id",loadChildren:()=>__webpack_require__.e(356).then(__webpack_require__.bind(__webpack_require__,91356)).then(mod=>mod.ShowsFormModule)},{path:"movies/:id",loadChildren:()=>__webpack_require__.e(313).then(__webpack_require__.bind(__webpack_require__,94313)).then(mod=>mod.MoviesFormModule)},{path:"",loadChildren:()=>__webpack_require__.e(493).then(__webpack_require__.bind(__webpack_require__,5493)).then(mod=>mod.MoviesImagesModule)}]}];class TutorialRoutingModule{}__name(TutorialRoutingModule,"TutorialRoutingModule"),TutorialRoutingModule.\u0275fac=__name(function(t){return new(t||TutorialRoutingModule)},"TutorialRoutingModule_Factory"),TutorialRoutingModule.\u0275mod=core.oAB({type:TutorialRoutingModule}),TutorialRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});var http=__webpack_require__(48664),config_service=__webpack_require__(56795);class TutorialModule{}__name(TutorialModule,"TutorialModule"),TutorialModule.\u0275fac=__name(function(t){return new(t||TutorialModule)},"TutorialModule_Factory"),TutorialModule.\u0275mod=core.oAB({type:TutorialModule}),TutorialModule.\u0275inj=core.cJS({providers:[config_service.E],imports:[common.ez,TutorialRoutingModule,http.JF]})}};