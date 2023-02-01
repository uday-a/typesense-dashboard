"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[452],{35452:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var o=t(83673),l=t(62323);const s={class:"text-h6"};function a(e,n,t,a,i,d){const y=(0,o.up)("q-input"),m=(0,o.up)("q-option-group"),r=(0,o.up)("q-select"),u=(0,o.up)("q-card-section"),c=(0,o.up)("q-btn"),p=(0,o.up)("q-card-actions"),h=(0,o.up)("q-card"),f=(0,o.up)("q-expansion-item"),b=(0,o.up)("q-icon"),_=(0,o.up)("q-td"),g=(0,o.up)("q-table"),w=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(w,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{"expand-separator":"",icon:"sym_s_add_circle","expand-icon":"sym_s_unfold_more","expanded-icon":"sym_s_unfold_less",label:(e.isUpdate?"Update":"Add")+" Synonym","header-class":"bg-primary text-white",modelValue:e.expanded,"onUpdate:modelValue":n[5]||(n[5]=n=>e.expanded=n)},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"bg-grey-3 column"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{label:"ID",modelValue:e.id,"onUpdate:modelValue":n[0]||(n[0]=n=>e.id=n),filled:"","bg-color":"white",class:"q-mb-md"},null,8,["modelValue"]),(0,o.Wm)(m,{filled:"","bg-color":"white",modelValue:e.type,"onUpdate:modelValue":n[1]||(n[1]=n=>e.type=n),options:e.typeOptions,color:"primary",inline:"",class:"q-mb-md"},null,8,["modelValue","options"]),e.type===e.types.ONE_WAY?((0,o.wg)(),(0,o.j4)(y,{key:0,filled:"","bg-color":"white",label:"Root",modelValue:e.synonym.root,"onUpdate:modelValue":n[2]||(n[2]=n=>e.synonym.root=n),class:"q-mb-md"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(r,{filled:"","bg-color":"white",modelValue:e.synonym.synonyms,"onUpdate:modelValue":n[3]||(n[3]=n=>e.synonym.synonyms=n),multiple:"","use-chips":"","use-input":"","new-value-mode":"add","stack-label":"","hide-dropdown-icon":"",label:"Synonyms"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(p,{align:"right",class:"bg-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{size:"md",padding:"sm lg",unelevated:"",color:"primary",disable:!e.isValid,onClick:n[4]||(n[4]=n=>e.createSynonym())},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.isUpdate?"Update":"Add")+" Synonym",1)])),_:1},8,["disable"])])),_:1})])),_:1})])),_:1},8,["label","modelValue"]),(0,o.Wm)(g,{class:"q-mt-md",title:"Synonyms",flat:"",bordered:"",filter:e.filter,rows:e.$store.state.node.data.synonyms,columns:e.columns,"row-key":"id","visible-columns":["id","type","root","synonyms","actions"],pagination:{rowsPerPage:50,sortBy:"name"}},{"top-left":(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.Wm)(b,{size:"md",name:"sym_s_dataset_linked"}),(0,o.Uk)(" Synonyms")])])),"top-right":(0,o.w5)((()=>[(0,o.Wm)(y,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":n[6]||(n[6]=n=>e.filter=n),placeholder:"Search"},{append:(0,o.w5)((()=>[(0,o.Wm)(b,{name:"sym_s_search"})])),_:1},8,["modelValue"])])),"body-cell-actions":(0,o.w5)((n=>[(0,o.Wm)(_,{class:"text-right"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{flat:"",color:"primary",onClick:t=>e.editSynonym(n.row),icon:"sym_s_edit",title:"Edit"},null,8,["onClick"]),(0,o.Wm)(c,{flat:"",color:"negative",onClick:t=>e.deleteSynonym(n.row.id),icon:"sym_s_delete_forever",title:"Delete"},null,8,["onClick"])])),_:2},1024)])),_:1},8,["filter","rows","columns"])])),_:1})}var i,d=t(79696),y=function(e,n,t,o){function l(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,s){function a(e){try{d(o.next(e))}catch(n){s(n)}}function i(e){try{d(o["throw"](e))}catch(n){s(n)}}function d(e){e.done?t(e.value):l(e.value).then(a,i)}d((o=o.apply(e,n||[])).next())}))};(function(e){e["ONE_WAY"]="one-way",e["MULTI_WAY"]="multi-way"})(i||(i={}));const m=(0,o.aZ)({name:"Synonyms",data(){return{expanded:0===this.$store.state.node.data.synonyms.length,filter:"",type:i.MULTI_WAY,types:i,typeOptions:[{label:"Multi-way synonyms",value:i.MULTI_WAY},{label:"One-way synonym",value:i.ONE_WAY}],synonym:{root:"",synonyms:[]},id:(0,d.x0)(),columns:[{label:"ID",name:"id",field:"id",align:"left"},{label:"Type",name:"type",align:"left",field:e=>e.root?i.ONE_WAY:i.MULTI_WAY,sortable:!0},{label:"Root",name:"root",field:"root",align:"left",sortable:!0},{label:"Synonyms",name:"synonyms",field:e=>JSON.stringify(e.synonyms),align:"left",sortable:!0},{label:"Actions",name:"actions",align:"right"}]}},computed:{isValid(){return this.synonym.synonyms.length>0&&this.id.length>0},isUpdate(){return this.$store.state.node.data.synonyms.map((e=>e.id)).includes(this.id)}},methods:{createSynonym(){return y(this,void 0,void 0,(function*(){const e={synonyms:JSON.parse(JSON.stringify(this.synonym.synonyms))};this.type===this.types.ONE_WAY&&(e.root=this.synonym.root),yield this.$store.dispatch("node/createSynonym",{id:this.id,synonym:e}),this.id=(0,d.x0)(),this.synonym={root:"",synonyms:[]},this.expanded=!1}))},editSynonym(e){this.id=e.id||(0,d.x0)(),this.synonym=JSON.parse(JSON.stringify(e)),this.type=this.synonym.root?i.ONE_WAY:i.MULTI_WAY,this.expanded=!0},deleteSynonym(e){this.$q.dialog({title:"Confirm",message:`Delete synonym with id: ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteSynonym",e)}))}}});var r=t(74260),u=t(24379),c=t(64615),p=t(10151),h=t(25589),f=t(34842),b=t(28758),_=t(68516),g=t(99367),w=t(48240),W=t(83243),S=t(24554),V=t(83884),q=t(7518),x=t.n(q);const U=(0,r.Z)(m,[["render",a]]),k=U;x()(m,"components",{QPage:u.Z,QExpansionItem:c.Z,QCard:p.Z,QCardSection:h.Z,QInput:f.Z,QOptionGroup:b.Z,QSelect:_.Z,QCardActions:g.Z,QBtn:w.Z,QTable:W.Z,QIcon:S.Z,QTd:V.Z})}}]);