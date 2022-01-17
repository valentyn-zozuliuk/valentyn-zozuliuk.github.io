"use strict";(self.webpackChunkmiddle_promotion_project=self.webpackChunkmiddle_promotion_project||[]).push([[909],{9418:(j,C,o)=>{o.d(C,{po:()=>c,xq:()=>p,Ub:()=>h});var c=(()=>{return(e=c||(c={})).PRODUCTIVITY="PRODUCTIVITY",e.MEDIA="MEDIA",e.BUSINESS="BUSINESS",c;var e})(),p=(()=>{return(e=p||(p={})).PRODUCTIVITY="PRODUCTIVITY",e.MEDIA="MEDIA",e.BUSINESS="BUSINESS",e.ALL="ALL",p;var e})(),h=(()=>{return(e=h||(h={})).DESC="DESC",e.ASC="ASC",h;var e})()},2722:(j,C,o)=>{o.d(C,{J:()=>U});var c=o(9947),p=o(6921),h=o(8889),e=o(9985),v=o(4499),b=o(4753),x=o(9417),y=o(7384),T=o(3067),S=o(2997),M=o(2835),Z=o(9433),m=o(9418),A=o(3668),D=o(4522),F=o(7942);let U=(()=>{class g{constructor(n,s){this.http=n,this.messages=s,this.articlesSubject=new v.X(null),this.singleArticleSubject=new v.X(void 0),this.applyDebounce=!1,this.articles$=this.articlesSubject.asObservable().pipe((0,b.U)(a=>a&&this.applyFiltersForArticles(a)),function(g){return(0,c.e)((O,n)=>{let s=!1,a=null,u=null;const t=()=>{if(null==u||u.unsubscribe(),u=null,s){s=!1;const l=a;a=null,n.next(l)}};O.subscribe(new h.Q(n,l=>{null==u||u.unsubscribe(),s=!0,a=l,u=new h.Q(n,t,p.Z),(0,e.Xf)(g()).subscribe(u)},()=>{t(),n.complete()},void 0,()=>{a=u=null}))})}(()=>(0,x.H)(this.applyDebounce?300:0))),this.singleArticle$=this.singleArticleSubject.asObservable(),this.currentFilters={type:m.xq.ALL,order:m.Ub.ASC,query:""},this.fetchedArticles=[],this.getArticles()}getArticles(){this.fetchArtciles().subscribe()}fetchArtciles(){return this.http.get("https://middle-promotion-project-default-rtdb.europe-west1.firebasedatabase.app/articles.json").pipe((0,b.U)(n=>this.mapArticlesToArray(n)),(0,y.b)(n=>{this.fetchedArticles=n.slice(),this.articlesSubject.next(n)}))}deleteArticle(n){n&&(this.http.delete(`https://middle-promotion-project-default-rtdb.europe-west1.firebasedatabase.app/articles/${n}.json`).subscribe(),this.fetchedArticles=this.fetchedArticles.filter(s=>s.uid!==n),this.articlesSubject.next(this.fetchedArticles))}updateArticle(n,s){return s?this.http.put(`https://middle-promotion-project-default-rtdb.europe-west1.firebasedatabase.app/articles/${s}.json`,n).pipe((0,y.b)(()=>{this.fetchedArticles=this.fetchedArticles.map(a=>a.uid===s?Object.assign(Object.assign({},n),{uid:s}):a),this.articlesSubject.next(this.fetchedArticles)}),(0,T.w)(()=>(0,S.of)(this.fetchedArticles)),(0,M.K)(a=>(this.messages.showErrors("Error occured while editing the Article. Please try again later."),(0,Z._)(()=>new Error(a))))):this.addArticle(n)}addArticle(n){return this.http.post("https://middle-promotion-project-default-rtdb.europe-west1.firebasedatabase.app/articles.json",n).pipe((0,T.w)(()=>this.fetchArtciles()),(0,M.K)(s=>(this.messages.showErrors("Error occured while adding a new Article. Please try again later."),(0,Z._)(()=>new Error(s)))))}mapArticlesToArray(n){const s=[];for(let a in n)n[a].uid=a,s.push(n[a]);return s}applyFiltersForArticles(n){return n.filter(s=>{let a=!0;return this.currentFilters.type!==m.xq.ALL&&(a=s.type===this.currentFilters.type),""!==this.currentFilters.query&&a&&(a=s.title.toLowerCase().includes(this.currentFilters.query.toLowerCase())),a}).sort((s,a)=>this.currentFilters.order===m.Ub.ASC?a.updatedDate-s.updatedDate:s.updatedDate-a.updatedDate)}updateOrderFilter(n){this.applyDebounce=!1,this.currentFilters.order=n,this.articlesSubject.next(this.fetchedArticles)}updateTypeFilter(n){this.applyDebounce=!1,this.currentFilters.type=n,this.articlesSubject.next(this.fetchedArticles)}updateQueryFilter(n){this.applyDebounce=!0,this.currentFilters.query=n,this.articlesSubject.next(this.fetchedArticles)}resetFilters(){this.currentFilters.order=m.Ub.ASC,this.currentFilters.type=m.xq.ALL}getArtcleById(n){this.applyDebounce=!1,this.singleArticleSubject.next(this.fetchedArticles.find(s=>s.uid===n))}updateAuthorsArticles(n){this.fetchedArticles.forEach(s=>s.createdBy.uid===n.id&&this.updateAuthorsData(s,n)),this.http.put("https://middle-promotion-project-default-rtdb.europe-west1.firebasedatabase.app/articles.json",this.prepareArticlesForUpdate()).subscribe()}updateAuthorsData(n,s){n.createdBy.image=s.image?s.image:"",n.createdBy.name=s.name}prepareArticlesForUpdate(){return this.fetchedArticles.reduce((s,a,u)=>Object.assign(Object.assign({},s),{[a.uid?a.uid:""]:Object.assign(Object.assign({},a),{uid:void 0})}),{})}}return g.\u0275fac=function(n){return new(n||g)(A.LFG(D.eN),A.LFG(F.K))},g.\u0275prov=A.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},1909:(j,C,o)=>{o.r(C),o.d(C,{UserConsoleModule:()=>u});var c=o(3886),p=o(6263),h=o(8014),e=o(3668),P=o(952),v=o(6019),b=o(9112);const x=function(t){return{link:t}};let y=(()=>{class t{constructor(r){this.router=r,this.logout=new e.vpe,this.isDashboard=!1}ngOnInit(){}navigateToDashboard(){this.router.navigate(["/user-console/articles"])}logoutHandler(){this.logout.emit()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-menu-side"]],inputs:{isDashboard:"isDashboard"},outputs:{logout:"logout"},decls:15,vars:3,consts:[[1,"image-wrapper"],["src","assets/images/logo_black.png","alt","Logoipsum",1,"logo-image",3,"click"],[1,"menu-content"],[1,"menu-list"],[1,"menu-header"],[1,"menu-item",3,"ngClass","click"],[1,"menu-item-icon"],[1,"menu-divider"],[1,"menu-logout",3,"click"],[1,"logout-icon"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"img",1),e.NdJ("click",function(){return i.navigateToDashboard()}),e.qZA(),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"p",4),e._uU(5,"Main menu"),e.qZA(),e.TgZ(6,"p",5),e.NdJ("click",function(){return i.navigateToDashboard()}),e.TgZ(7,"mat-icon",6),e._uU(8,"speedometer"),e.qZA(),e._uU(9," Dashboard "),e.qZA(),e._UZ(10,"hr",7),e.qZA(),e.TgZ(11,"button",8),e.NdJ("click",function(){return i.logoutHandler()}),e.TgZ(12,"mat-icon",9),e._uU(13,"input"),e.qZA(),e._uU(14," Logout "),e.qZA(),e.qZA()),2&r&&(e.xp6(6),e.Q6J("ngClass",e.VKq(1,x,i.isDashboard)))},directives:[v.mk,b.Hw],styles:["[_nghost-%COMP%]{display:block;width:270px;height:100vh;border-right:1px solid #EAEDF3}.image-wrapper[_ngcontent-%COMP%]{padding-left:20px;border-bottom:1px solid #EAEDF3}.image-wrapper[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]{position:relative;right:20px;height:100px;width:auto;margin-bottom:0;cursor:pointer}.menu-content[_ngcontent-%COMP%]{padding-top:20px}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]{color:#6f7c8b80;padding:0;font-size:14px;margin-bottom:30px}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]{padding-left:40px;padding-right:40px;margin-bottom:20px}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{position:relative;padding-left:75px;padding-top:3px;padding-bottom:3px;cursor:pointer}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-item-icon[_ngcontent-%COMP%]{position:absolute;left:40px;top:4px;font-size:20px}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-item.link[_ngcontent-%COMP%]{border-left:2px solid #4C6FFF}.menu-content[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-divider[_ngcontent-%COMP%]{margin:20px 23px;color:#eaedf3;opacity:1}.menu-content[_ngcontent-%COMP%]   .menu-logout[_ngcontent-%COMP%]{display:block;padding:8px;width:calc(100% - 40px);border:none;border-radius:3px;margin-left:20px;margin-right:20px}.menu-content[_ngcontent-%COMP%]   .menu-logout[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%]{font-size:18px;color:#6f7c8b;vertical-align:middle;height:21px}"]}),t})();var T=o(9673),S=o(2722),M=o(9133);function Z(t,l){1&t&&(e.TgZ(0,"mat-icon",9),e._uU(1,"keyboard_arrow_down"),e.qZA())}function m(t,l){1&t&&(e.TgZ(0,"mat-icon",9),e._uU(1,"keyboard_arrow_up"),e.qZA())}function A(t,l){if(1&t){const r=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"div",11),e.NdJ("click",function(d){return e.CHM(r),e.oxw().navigateToPage("/user-console/edit-profile",d)}),e._uU(2," Edit profile "),e.qZA(),e.qZA()}}const D=function(t){return{"image-not-default":t}};let F=(()=>{class t extends h.F{constructor(r,i,d){super(),this.router=r,this.globalEventsService=i,this.articlesService=d,this.user=null,this.isDashboard=!1,this.showMenu=!1,this.articleQuery=""}ngOnInit(){this.globalEventsService.globalClickHandler$.pipe((0,p.R)(this.destroy$)).subscribe(()=>this.showMenu=!1)}toggleMenu(r){r.stopPropagation(),this.showMenu=!this.showMenu}navigateToPage(r,i){i.stopPropagation(),this.router.navigate([r]),this.showMenu=!1}changeArticleQuery(){this.articlesService.updateQueryFilter(this.articleQuery)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(c.F0),e.Y36(T.h),e.Y36(S.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-menu-header"]],inputs:{user:"user",isDashboard:"isDashboard"},features:[e.qOj],decls:12,vars:10,consts:[["type","text","placeholder","Find articles...",1,"search-articles-input",3,"disabled","ngModel","ngModelChange","input"],[1,"search-icon"],[1,"user-info",3,"click"],[1,"avatar-wrapper"],[1,"user-avatar"],["alt","image",1,"avatar-image",3,"ngClass","src"],[1,"user-name"],["class","user-profile-icon",4,"ngIf"],["class","menu",4,"ngIf"],[1,"user-profile-icon"],[1,"menu"],[1,"menu-item",3,"click"]],template:function(r,i){1&r&&(e.TgZ(0,"input",0),e.NdJ("ngModelChange",function(f){return i.articleQuery=f})("input",function(){return i.changeArticleQuery()}),e.qZA(),e.TgZ(1,"mat-icon",1),e._uU(2,"search"),e.qZA(),e.TgZ(3,"div",2),e.NdJ("click",function(f){return i.toggleMenu(f)}),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e._UZ(6,"img",5),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e._uU(8),e.qZA(),e.YNc(9,Z,2,0,"mat-icon",7),e.YNc(10,m,2,0,"mat-icon",7),e.qZA(),e.YNc(11,A,3,0,"div",8)),2&r&&(e.Q6J("disabled",!i.isDashboard)("ngModel",i.articleQuery),e.xp6(6),e.Q6J("ngClass",e.VKq(8,D,null==i.user?null:i.user.image))("src",null!=i.user&&i.user.image?null==i.user?null:i.user.image:"assets/images/no-avatar-img.png",e.LSH),e.xp6(2),e.hij(" ",null!=i.user&&i.user.name?null==i.user?null:i.user.name:"Name missing"," "),e.xp6(1),e.Q6J("ngIf",!i.showMenu),e.xp6(1),e.Q6J("ngIf",i.showMenu),e.xp6(1),e.Q6J("ngIf",i.showMenu))},directives:[M.Fj,M.JJ,M.On,b.Hw,v.mk,v.O5],styles:["[_nghost-%COMP%]{display:flex;position:relative;height:101px;background-color:#fff;border-bottom:1px solid #EAEDF3;padding:25px}input[_ngcontent-%COMP%]{height:51px;border-radius:200px;padding-left:65px;width:365px}input[_ngcontent-%COMP%]:disabled:hover{border:1px solid transparent}.search-icon[_ngcontent-%COMP%]{position:absolute;top:40px;left:50px;color:#6f7c8b}.user-info[_ngcontent-%COMP%]{position:relative;margin-left:auto;align-self:center;display:flex;align-items:center;cursor:pointer}.user-info[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]{height:52px;width:52px;border-radius:50%;display:flex;justify-content:center;align-items:center}.user-info[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{position:relative;height:48px;width:48px;border-radius:50%;overflow:hidden}.user-info[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]{height:48px;width:48px}.user-info[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .avatar-image.image-not-default[_ngcontent-%COMP%]{position:absolute;width:74px;height:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin-right:20px;margin-left:10px;color:#52575c}.user-info[_ngcontent-%COMP%]   .user-profile-icon[_ngcontent-%COMP%]{color:#6f7c8b}.user-info[_ngcontent-%COMP%]:hover   .avatar-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(46,91,255,.6)}.user-info[_ngcontent-%COMP%]:hover   .user-name[_ngcontent-%COMP%]{color:#2e5bff}.menu[_ngcontent-%COMP%]{bottom:-19px;right:28px}"]}),t})(),U=(()=>{class t extends h.F{constructor(r,i){super(),this.auth=r,this.router=i,this.routerDashboard=!1,this.userInfo=null}ngOnInit(){this.routerDashboard="/user-console/articles"===this.router.url,this.router.events.pipe((0,p.R)(this.destroy$)).subscribe(r=>{r instanceof c.m2&&(this.routerDashboard="/user-console/articles"===r.url||"/user-console/articles"===r.urlAfterRedirects)}),this.auth.user.pipe((0,p.R)(this.destroy$)).subscribe(r=>{this.userInfo=r})}onLogoutEvent(){this.auth.logout()}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(P.e),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-console"]],features:[e.qOj],decls:6,vars:3,consts:[[1,"user-console-page"],[3,"isDashboard","logout"],[1,"content-wrapper"],[3,"isDashboard","user"],[1,"main-content"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"app-menu-side",1),e.NdJ("logout",function(){return i.onLogoutEvent()}),e.qZA(),e.TgZ(2,"div",2),e._UZ(3,"app-menu-header",3),e.TgZ(4,"div",4),e._UZ(5,"router-outlet"),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(1),e.Q6J("isDashboard",i.routerDashboard),e.xp6(2),e.Q6J("isDashboard",i.routerDashboard)("user",i.userInfo))},directives:[y,F,c.lC],styles:[".user-console-page[_ngcontent-%COMP%]{display:flex;font-size:14px}.user-console-page[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{height:100vh;overflow:scroll;flex-grow:1;background-color:#f5f6f7}.user-console-page[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:25px 35px}"]}),t})();var g=o(9468),O=o(4753);let n=(()=>{class t{constructor(r,i){this.auth=r,this.router=i}canActivate(r,i){return this.auth.user.pipe((0,g.q)(1),(0,O.U)(d=>!!d||this.router.createUrlTree(["/auth/login"])))}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(P.e),e.LFG(c.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=o(1382);const a=[{path:"",component:U,canActivate:[n],children:[{path:"",redirectTo:"articles",pathMatch:"full"},{path:"articles",loadChildren:()=>Promise.all([o.e(592),o.e(561)]).then(o.bind(o,3561)).then(t=>t.ArticlesModule)},{path:"edit-profile",loadChildren:()=>Promise.all([o.e(592),o.e(226)]).then(o.bind(o,226)).then(t=>t.EditProfileModule)}]}];let u=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(a),s.m]]}),t})()}}]);