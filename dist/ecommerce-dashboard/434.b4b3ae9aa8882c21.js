"use strict";(self.webpackChunkecommerce_dashboard=self.webpackChunkecommerce_dashboard||[]).push([[434],{5434:(B,d,i)=>{i.r(d),i.d(d,{UserModule:()=>Q});var m=i(6895),r=i(671),u=i(7766),p=i(5259),t=i(4650),f=i(9625),h=i(5938),g=i(7009),c=i(8729),C=i(1572),x=i(6308);function v(e,o){1&e&&(t.TgZ(0,"th",20)(1,"span"),t._uU(2,"S.No"),t.qZA()())}function _(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n._id)}}function y(e,o){1&e&&(t.TgZ(0,"th",22)(1,"span"),t._uU(2,"First Name"),t.qZA()())}function U(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.image)}}function Z(e,o){1&e&&(t.TgZ(0,"th",22)(1,"span"),t._uU(2,"Last Name"),t.qZA()())}function T(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.colour.join(", "))}}function O(e,o){1&e&&(t.TgZ(0,"th",22)(1,"span"),t._uU(2,"Email"),t.qZA()())}function D(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(null==n?null:n.productName)}}function b(e,o){1&e&&(t.TgZ(0,"th",22)(1,"span"),t._uU(2,"Last Active"),t.qZA()())}function L(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.stock)}}function M(e,o){1&e&&t._UZ(0,"tr",23)}function N(e,o){1&e&&t._UZ(0,"tr",24)}function P(e,o){1&e&&(t.TgZ(0,"div",25),t._UZ(1,"mat-spinner",26),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",50))}function Y(e,o){1&e&&(t.TgZ(0,"div",27)(1,"p",28),t._uU(2),t.qZA()()),2&e&&(t.xp6(2),t.Oqu("No data available"))}let A=(()=>{class e{constructor(n,s,a,l){this.api=n,this.dialog=s,this.snackbar=a,this.router=l,this.dataSource=new r.by([]),this.columnsToDisplay=["s.no","firstName","lastName","email","last"],this.noData=!1}ngOnInit(){this.getInventoryList()}edit(n,s){this.router.navigate(["/inventory/"+n,s])}getInventoryList(){this.noData=!0}delete(n){this.dialog.open(u.$,{width:"250px",data:{from:"delete"}}).afterClosed().subscribe(a=>{a&&this.api.apiDeleteCall(n,"Product/deleteProduct").subscribe(l=>{l.message.includes("Successfully")&&(this.snackbar.openFromComponent(p.h,{data:l.message}),this.getInventoryList())})})}applyFilter(n){this.dataSource.filter=n.trim().toLowerCase()}applyTypeFilter(){this.selectedColourValue?.length||this.selectedValue?.length?this.filteredData=this.dataSource.data.filter(n=>!(this.selectedValue?.length&&!this.selectedValue?.includes(n.category[0])||this.selectedColourValue?.length&&!this.selectedColourValue?.includes(n.colour[0]))):(this.filteredData=[],this.dataSource.data=this.inventoryList)}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(f.s),t.Y36(h.uw),t.Y36(g.ux),t.Y36(c.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-list"]],decls:28,vars:5,consts:[[1,"container"],[1,"card"],[1,"row",2,"display","flex","flex-direction","row","align-items","center"],[1,"section-b","col-md-3"],["type","text","name","Search","placeholder","Search...",1,"input","m-3",3,"keyup"],[1,"col-md-6",2,"display","flex","justify-content","flex-start","gap","10px"],[1,"add-coupon","col-md-3"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","s.no"],["class","first","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","lastName"],["matColumnDef","email"],["matColumnDef","last"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","spinner-container",4,"ngIf"],["class","no_data",4,"ngIf"],["mat-header-cell","",1,"first"],["mat-cell",""],["mat-header-cell",""],["mat-header-row",""],["mat-row",""],[1,"spinner-container"],[3,"diameter"],[1,"no_data"],[2,"color","white"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("keyup",function(I){return a.applyFilter(I.target.value)}),t.qZA()(),t._UZ(5,"div",5)(6,"div",6),t.qZA()(),t.TgZ(7,"div",1)(8,"table",7),t.ynx(9,8),t.YNc(10,v,3,0,"th",9),t.YNc(11,_,2,1,"td",10),t.BQk(),t.ynx(12,11),t.YNc(13,y,3,0,"th",12),t.YNc(14,U,2,1,"td",10),t.BQk(),t.ynx(15,13),t.YNc(16,Z,3,0,"th",12),t.YNc(17,T,2,1,"td",10),t.BQk(),t.ynx(18,14),t.YNc(19,O,3,0,"th",12),t.YNc(20,D,2,1,"td",10),t.BQk(),t.ynx(21,15),t.YNc(22,b,3,0,"th",12),t.YNc(23,L,2,1,"td",10),t.BQk(),t.YNc(24,M,1,0,"tr",16),t.YNc(25,N,1,0,"tr",17),t.qZA(),t.YNc(26,P,2,1,"div",18),t.YNc(27,Y,3,1,"div",19),t.qZA()()),2&s&&(t.xp6(8),t.Q6J("dataSource",null!=a.filteredData&&a.filteredData.length?a.filteredData:a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.columnsToDisplay),t.xp6(1),t.Q6J("matRowDefColumns",a.columnsToDisplay),t.xp6(1),t.Q6J("ngIf",!(null!=a.dataSource.data&&a.dataSource.data.length||a.noData)),t.xp6(1),t.Q6J("ngIf",!(null!=a.dataSource.data&&a.dataSource.data.length)&&a.noData))},dependencies:[m.O5,C.Ou,x.YE,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk],styles:[".section-b[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{padding:15px;border:none;border-radius:10px;background:#111111;color:#fff;width:100%;border:#111111;line-height:24px}.add-coupon[_ngcontent-%COMP%]{font-size:16px}.add-coupon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:500;color:#fff;text-decoration:none}.no_data[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.card[_ngcontent-%COMP%]{background-color:#2e2e2e;height:90%;border-radius:10px;box-shadow:0 2px 5px #0000001a;padding:5px;text-align:center;margin:10px}.disFlex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{position:relative}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .normal-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{border:none;height:2.375rem;padding-left:2.5rem;padding-right:1.25rem;background-color:#f3f3f9;box-shadow:none;border-radius:1.875rem;outline:0}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .normal-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;font-size:1rem;line-height:2.375rem;left:.813rem;top:0;color:#74788d}.mat-table[_ngcontent-%COMP%]{width:100%}.displayicon[_ngcontent-%COMP%]{display:flex}.first[_ngcontent-%COMP%]{border-bottom-left-radius:15px;border-top-left-radius:15px}.last[_ngcontent-%COMP%]{border-bottom-right-radius:15px;border-top-right-radius:15px}"]})}return e})(),S=(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:1,vars:0,template:function(s,a){1&s&&t._UZ(0,"router-outlet")},dependencies:[c.lC]})}return e})();var w=i(4006),q=i(6554);const F=[{path:"",component:S,children:[{path:"list",component:A}]}];let Q=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[m.ez,q.q,w.UX,c.Bz.forChild(F)]})}return e})()}}]);