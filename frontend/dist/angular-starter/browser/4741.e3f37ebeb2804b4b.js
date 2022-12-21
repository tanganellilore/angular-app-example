"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[4741],{575:(g,s,n)=>{n.d(s,{E:()=>i});var r=n(2340);class a{constructor(){this.api=!1,this.url=""}}var o=n(1571);class i{constructor(){this.config=new a,this.config.api=r.N.config.api,this.config.url=r.N.config.url}}i.\u0275fac=function(d){return new(d||i)},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac})},4741:(g,s,n)=>{n.r(s),n.d(s,{TutorialModule:()=>l});var r=n(6895),a=n(7905),o=n(1571);class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-example-crud"]],decls:80,vars:0,consts:[[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col-3","d-none","d-lg-inline-block","d-xl-inline-block"],[1,"row"],[1,"col","mb-2"],[1,"ml-4","text-primary"],[1,"col"],["id","accordionItems",1,"accordion"],[1,"card","nga-card-menu"],[1,"card-header"],["data-bs-toggle","collapse","data-parent","#accordionItems","href","#collapseItems","aria-expanded","true"],[1,"card-item"],[1,"fas","fa-film","me-2"],["id","collapseItems","aria-labelledby","headingOne","data-parent","#accordionItems",1,"collapse","show"],[1,"card-body"],[1,"list-group","text-dark"],[1,"list-group-item"],["routerLink","/crud/shows-images"],[1,"fas","fa-desktop","me-2"],["routerLink","/crud/movies-images"],["routerLink","/crud/shows"],["routerLink","/crud/movies"],["routerLink","/crud/shows/0"],["routerLink","/crud/movies/0"],["data-bs-toggle","collapse","data-parent","#accordionMovies","href","#collapseMovies","aria-expanded","true"],[1,"fas","fa-tools","me-2"],["id","collapseMovies","aria-labelledby","headingOne","data-parent","#accordionMovies",1,"collapse"],["routerLink","/crud/continents"],[1,"fas","fa-globe","me-2"],["routerLink","/crud/countries"],[1,"far","fa-flag","me-2"],["routerLink","/crud/cities"],[1,"fas","fa-city","me-2"],["routerLink","/crud/continents/0"],["routerLink","/crud/countries/0"],["routerLink","/crud/cities/0"],[1,"col-12","col-sm-12","col-md-12","col-lg-9","col-xl-9"]],template:function(e,C){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5)(6,"strong"),o._uU(7,"Features List"),o.qZA()()()(),o.TgZ(8,"div",3)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"a",10)(14,"div",11),o._UZ(15,"i",12),o._uU(16,"Movies / Shows "),o.qZA()()(),o.TgZ(17,"div",13)(18,"div",14)(19,"ul",15)(20,"li",16)(21,"a",17),o._UZ(22,"i",18),o._uU(23," Shows Image "),o.qZA()(),o.TgZ(24,"li",16)(25,"a",19),o._UZ(26,"i",12),o._uU(27," Movies Image "),o.qZA()(),o.TgZ(28,"li",16)(29,"a",20),o._UZ(30,"i",18),o._uU(31," Shows List "),o.qZA()(),o.TgZ(32,"li",16)(33,"a",21),o._UZ(34,"i",12),o._uU(35," Movies List "),o.qZA()(),o.TgZ(36,"li",16)(37,"a",22),o._UZ(38,"i",18),o._uU(39," New Show "),o.qZA()(),o.TgZ(40,"li",16)(41,"a",23),o._UZ(42,"i",12),o._uU(43," New Movie "),o.qZA()()()()()(),o.TgZ(44,"div",8)(45,"div",9)(46,"a",24)(47,"div",11),o._UZ(48,"i",25),o._uU(49,"Generics "),o.qZA()()(),o.TgZ(50,"div",26)(51,"div",14)(52,"ul",15)(53,"li",16)(54,"a",27),o._UZ(55,"i",28),o._uU(56," Continents List "),o.qZA()(),o.TgZ(57,"li",16)(58,"a",29),o._UZ(59,"i",30),o._uU(60," Countries List "),o.qZA()(),o.TgZ(61,"li",16)(62,"a",31),o._UZ(63,"i",32),o._uU(64," Cities List "),o.qZA()(),o.TgZ(65,"li",16)(66,"a",33),o._UZ(67,"i",28),o._uU(68," New Continent "),o.qZA()(),o.TgZ(69,"li",16)(70,"a",34),o._UZ(71,"i",30),o._uU(72," New Country "),o.qZA()(),o.TgZ(73,"li",16)(74,"a",35),o._UZ(75,"i",32),o._uU(76," New City "),o.qZA()()()()()()()()()(),o.TgZ(77,"div",36)(78,"div",3),o._UZ(79,"router-outlet"),o.qZA()()()())},dependencies:[a.lC,a.rH],styles:[".nga-btn-shows[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;padding:.5rem;font-size:.81rem;border:0;border-radius:.125rem}.nga-btn-shows[_ngcontent-%COMP%]:hover, .nga-btn-shows[_ngcontent-%COMP%]:active, .nga-btn-shows[_ngcontent-%COMP%]:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;outline:0}.nga-btn-shows-outline-primary[_ngcontent-%COMP%]{border:2px solid #4285f4!important;color:#4285f4!important;background-color:transparent!important}.nga-card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:gray;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.nga-card-movie-date[_ngcontent-%COMP%]{padding:.05rem;position:relative;font-size:9px;border:0px solid #ddd;border-radius:.25rem;transition:all .2s ease-in-out;color:gray;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:transparent}.nga-card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#000;text-decoration:underline}.nga-card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3f729b;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.nga-card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3f729b;text-decoration:underline}.nga-card-movie-text[_ngcontent-%COMP%]{padding:.05rem;position:relative;background-color:transparent;border:0px solid #ddd;border-radius:.25rem;transition:all .2s ease-in-out;color:#3f729b;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nga-card-movie-img[_ngcontent-%COMP%]{opacity:1}.nga-card-movie-img[_ngcontent-%COMP%]:hover{opacity:.9}.nga-card-menu[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;font-weight:500}.list-group-item[_ngcontent-%COMP%]{padding:3px 10px}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:3px 10px;color:#000;text-decoration:none}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0d6efd}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#0d6efd}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]{color:#000}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0d6efd}.nga-card-menu[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card-item[_ngcontent-%COMP%]{text-decoration:none;color:#0d6efd}"]});const c=[{path:"",component:i,children:[{path:"continents",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(9333)]).then(n.bind(n,9333)).then(t=>t.ContinentsModule)},{path:"countries",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(7649)]).then(n.bind(n,7649)).then(t=>t.CountriesModule)},{path:"cities",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(9483)]).then(n.bind(n,9483)).then(t=>t.CitiesModule)},{path:"shows",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(7197)]).then(n.bind(n,7197)).then(t=>t.ShowsModule)},{path:"movies",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(8861)]).then(n.bind(n,8861)).then(t=>t.MoviesModule)},{path:"shows-images",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(4623)]).then(n.bind(n,4623)).then(t=>t.ShowsImagesModule)},{path:"movies-images",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(5211)]).then(n.bind(n,5211)).then(t=>t.MoviesImagesModule)},{path:"continents/:id",loadChildren:()=>Promise.all([n.e(433),n.e(8592),n.e(9960)]).then(n.bind(n,1647)).then(t=>t.ContinentsFormModule)},{path:"countries/:id",loadChildren:()=>Promise.all([n.e(433),n.e(8592),n.e(8629)]).then(n.bind(n,589)).then(t=>t.CountriesFormModule)},{path:"cities/:id",loadChildren:()=>Promise.all([n.e(433),n.e(8592),n.e(965)]).then(n.bind(n,7230)).then(t=>t.CitiesFormModule)},{path:"shows/:id",loadChildren:()=>Promise.all([n.e(433),n.e(8592),n.e(1914)]).then(n.bind(n,2956)).then(t=>t.ShowsFormModule)},{path:"movies/:id",loadChildren:()=>Promise.all([n.e(433),n.e(8592),n.e(4566)]).then(n.bind(n,5666)).then(t=>t.MoviesFormModule)},{path:"",loadChildren:()=>Promise.all([n.e(433),n.e(8062),n.e(8592),n.e(5211)]).then(n.bind(n,5211)).then(t=>t.MoviesImagesModule)}]}];class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[a.Bz.forChild(c),a.Bz]});var h=n(529),m=n(575);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({providers:[m.E],imports:[r.ez,d,h.JF]})}}]);