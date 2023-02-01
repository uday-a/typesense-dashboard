"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[576],{22576:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var t=l(83673),n=l(62323);const s={class:"text-h6"};function i(e,a,l,i,o,d){const c=(0,t.up)("q-input"),r=(0,t.up)("q-select"),m=(0,t.up)("q-card-section"),u=(0,t.up)("q-btn"),p=(0,t.up)("q-card-actions"),h=(0,t.up)("q-card"),_=(0,t.up)("q-expansion-item"),f=(0,t.up)("q-icon"),g=(0,t.up)("q-td"),b=(0,t.up)("q-table"),w=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(w,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{"expand-separator":"",icon:"sym_s_add_circle","expand-icon":"sym_s_unfold_more","expanded-icon":"sym_s_unfold_less",label:(e.isUpdate?"Update":"Add")+" Alias","header-class":"bg-primary text-white",modelValue:e.expanded,"onUpdate:modelValue":a[3]||(a[3]=a=>e.expanded=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{class:"bg-grey-3 column"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{modelValue:e.alias.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.alias.name=a),label:"Alias name",filled:"","bg-color":"white",rules:[a=>!e.collectionNames.includes(a)||"Must not be a collection name"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{modelValue:e.alias.collection_name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.alias.collection_name=a),label:"Target Collection",filled:"","bg-color":"white",options:e.collectionNames},null,8,["modelValue","options"])])),_:1}),(0,t.Wm)(p,{align:"right",class:"bg-primary"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{size:"md",padding:"sm lg",unelevated:"",color:"primary",onClick:a[2]||(a[2]=a=>e.createAlias())},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.isUpdate?"Update":"Add")+" Alias",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["label","modelValue"]),(0,t.Wm)(b,{class:"q-mt-md",title:"Aliases",flat:"",bordered:"",filter:e.filter,rows:e.$store.state.node.data.aliases,columns:e.columns,"row-key":"name","visible-columns":["name","collection_name","actions"],pagination:{rowsPerPage:50,sortBy:"name"}},{"top-left":(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(f,{size:"md",name:"sym_s_call_split"}),(0,t.Uk)(" Aliases")])])),"top-right":(0,t.w5)((()=>[(0,t.Wm)(c,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[4]||(a[4]=a=>e.filter=a),placeholder:"Search"},{append:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"sym_s_search"})])),_:1},8,["modelValue"])])),"body-cell-actions":(0,t.w5)((a=>[(0,t.Wm)(g,{class:"text-right"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",color:"primary",onClick:l=>e.editAlias(a.row),icon:"sym_s_edit",title:"Edit"},null,8,["onClick"]),(0,t.Wm)(u,{flat:"",color:"negative",onClick:l=>e.deleteAlias(a.row.name),icon:"sym_s_delete_forever",title:"Delete"},null,8,["onClick"])])),_:2},1024)])),_:1},8,["filter","rows","columns"])])),_:1})}var o=function(e,a,l,t){function n(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,s){function i(e){try{d(t.next(e))}catch(a){s(a)}}function o(e){try{d(t["throw"](e))}catch(a){s(a)}}function d(e){e.done?l(e.value):n(e.value).then(i,o)}d((t=t.apply(e,a||[])).next())}))};const d=(0,t.aZ)({name:"Aliases",data(){return{alias:{name:"",collection_name:""},expanded:0===this.$store.state.node.data.aliases.length,filter:"",columns:[{label:"Alias Name",name:"name",field:"name",align:"left",sortable:!0},{label:"Collection Name",name:"collection_name",field:"collection_name",align:"left",sortable:!0},{label:"Actions",name:"actions",align:"right"}]}},computed:{collectionNames(){return this.$store.state.node.data.collections.map((e=>e.name))},isUpdate(){return this.$store.state.node.data.aliases.map((e=>e.name)).includes(this.alias.name)}},methods:{createAlias(){return o(this,void 0,void 0,(function*(){yield this.$store.dispatch("node/createAlias",{name:this.alias.name,collection_name:this.alias.collection_name}),this.alias={name:"",collection_name:""},this.expanded=!1}))},editAlias(e){this.alias=JSON.parse(JSON.stringify(e)),this.expanded=!0},deleteAlias(e){this.$q.dialog({title:"Confirm",message:`Delete alias ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteAlias",e)}))}}});var c=l(74260),r=l(24379),m=l(64615),u=l(10151),p=l(25589),h=l(34842),_=l(68516),f=l(99367),g=l(48240),b=l(83243),w=l(24554),y=l(83884),A=l(7518),x=l.n(A);const W=(0,c.Z)(d,[["render",i]]),k=W;x()(d,"components",{QPage:r.Z,QExpansionItem:m.Z,QCard:u.Z,QCardSection:p.Z,QInput:h.Z,QSelect:_.Z,QCardActions:f.Z,QBtn:g.Z,QTable:b.Z,QIcon:w.Z,QTd:y.Z})}}]);