"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[704],{12944:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var d=i(61758),r=i(58790);const l={class:"text-h6"};function n(e,t,i,n,a,o){const s=(0,d.g2)("q-input"),c=(0,d.g2)("q-card-section"),u=(0,d.g2)("monaco-editor"),h=(0,d.g2)("q-banner"),m=(0,d.g2)("q-btn"),p=(0,d.g2)("q-card-actions"),b=(0,d.g2)("q-card"),v=(0,d.g2)("q-expansion-item"),f=(0,d.g2)("q-icon"),g=(0,d.g2)("q-td"),_=(0,d.g2)("q-table"),y=(0,d.g2)("q-page");return(0,d.uX)(),(0,d.Wv)(y,{padding:""},{default:(0,d.k6)((()=>[(0,d.bF)(v,{"expand-separator":"",icon:"sym_s_add_circle","expand-icon":"sym_s_unfold_more","expanded-icon":"sym_s_unfold_less",label:(e.isUpdate?"Update":"Add")+" Curation","header-class":"bg-primary text-white",modelValue:e.expanded,"onUpdate:modelValue":t[3]||(t[3]=t=>e.expanded=t)},{default:(0,d.k6)((()=>[(0,d.bF)(b,{style:{height:"60vh"},class:"bg-surface column"},{default:(0,d.k6)((()=>[(0,d.bF)(c,null,{default:(0,d.k6)((()=>[(0,d.bF)(s,{dense:"",filled:"",label:"ID",modelValue:e.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.id=t)},null,8,["modelValue"])])),_:1}),(0,d.bF)(u,{modelValue:e.overrideJson,"onUpdate:modelValue":t[1]||(t[1]=t=>e.overrideJson=t)},null,8,["modelValue"]),e.jsonError?((0,d.uX)(),(0,d.Wv)(h,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:(0,d.k6)((()=>[(0,d.eW)(" Invalid Format: "+(0,r.v_)(e.jsonError),1)])),_:1})):(0,d.Q3)("",!0),(0,d.bF)(p,{align:"right",class:"bg-primary"},{default:(0,d.k6)((()=>[(0,d.bF)(m,{size:"md",padding:"sm lg",unelevated:"",color:"primary",disable:!e.isValid,onClick:t[2]||(t[2]=t=>e.createOverride())},{default:(0,d.k6)((()=>[(0,d.eW)((0,r.v_)(e.isUpdate?"Update":"Add")+" Curation",1)])),_:1},8,["disable"])])),_:1})])),_:1})])),_:1},8,["label","modelValue"]),(0,d.bF)(_,{class:"q-mt-md",title:"Curations",flat:"",bordered:"",filter:e.filter,rows:e.$store.state.node.data.overrides,columns:e.columns,"row-key":"id","visible-columns":["query","match","includes","excludes","actions"]},{"top-left":(0,d.k6)((()=>[(0,d.Lk)("div",l,[(0,d.bF)(f,{size:"md",name:"sym_s_low_priority"}),t[5]||(t[5]=(0,d.eW)(" Curations"))])])),"top-right":(0,d.k6)((()=>[(0,d.bF)(s,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),placeholder:"Search"},{append:(0,d.k6)((()=>[(0,d.bF)(f,{name:"sym_s_search"})])),_:1},8,["modelValue"])])),"body-cell-actions":(0,d.k6)((t=>[(0,d.bF)(g,{class:"text-right"},{default:(0,d.k6)((()=>[(0,d.bF)(m,{flat:"",onClick:i=>e.editOverride(t.row),icon:"sym_s_edit",title:"Edit"},null,8,["onClick"]),(0,d.bF)(m,{flat:"",color:"negative",onClick:i=>e.deleteOverride(t.row.id),icon:"sym_s_delete_forever",title:"Delete"},null,8,["onClick"])])),_:2},1024)])),_:1},8,["filter","rows","columns"])])),_:1})}var a=i(78685),o=i(74701),s=function(e,t,i,d){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,l){function n(e){try{o(d.next(e))}catch(e){l(e)}}function a(e){try{o(d["throw"](e))}catch(e){l(e)}}function o(e){e.done?i(e.value):r(e.value).then(n,a)}o((d=d.apply(e,t||[])).next())}))};const c={rule:{query:"apple",match:"exact"},includes:[{id:"422",position:1},{id:"54",position:2}],excludes:[{id:"287"}]},u=(0,d.pM)({components:{MonacoEditor:o.A},name:"Overrides",data(){return{id:(0,a.Ak)(),override:c,jsonError:null,expanded:0===this.$store.state.node.data.overrides.length,filter:"",columns:[{label:"ID",name:"id",field:"id"},{label:"Query",name:"query",field:e=>e.rule.query,sortable:!0,align:"left"},{label:"Match",name:"match",field:e=>e.rule.match,sortable:!0,align:"left"},{label:"Includes",name:"includes",field:e=>{var t;return null===(t=e.includes)||void 0===t?void 0:t.length}},{label:"Excludes",name:"excludes",field:e=>{var t;return null===(t=e.excludes)||void 0===t?void 0:t.length}},{label:"Actions",name:"actions",align:"right"}]}},computed:{isValid(){return this.id.length>0&&!this.jsonError},isUpdate(){return this.$store.state.node.data.overrides.map((e=>e.id)).includes(this.id)},overrideJson:{get(){return JSON.stringify(this.override,null,2)},set(e){try{this.override=JSON.parse(e),this.jsonError=null}catch(e){this.jsonError=e.message}}}},methods:{createOverride(){return s(this,void 0,void 0,(function*(){yield this.$store.dispatch("node/createOverride",{id:this.id,override:JSON.parse(JSON.stringify(this.override))}),this.id=(0,a.Ak)(),this.override=c,this.expanded=!1}))},editOverride(e){this.override=JSON.parse(JSON.stringify(e)),this.id=e.id||(0,a.Ak)(),this.expanded=!0},deleteOverride(e){this.$q.dialog({title:"Confirm",message:`Delete curation with id: ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteOverride",e)}))}}});var h=i(12807),m=i(77716),p=i(9459),b=i(23316),v=i(44189),f=i(39270),g=i(46868),_=i(62669),y=i(1693),k=i(39942),x=i(50492),A=i(45262),q=i(98582),O=i.n(q);const C=(0,h.A)(u,[["render",n]]),F=C;O()(u,"components",{QPage:m.A,QExpansionItem:p.A,QCard:b.A,QCardSection:v.A,QInput:f.A,QBanner:g.A,QCardActions:_.A,QBtn:y.A,QTable:k.A,QIcon:x.A,QTd:A.A})}}]);