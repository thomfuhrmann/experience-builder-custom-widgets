System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/setting-components"],(function(e,t){var s={},r={},i={},o={};return{setters:[function(e){s.DataSourceTypes=e.DataSourceTypes,s.Immutable=e.Immutable,s.css=e.css,s.jsx=e.jsx},function(e){r.DataSourceSelector=e.DataSourceSelector},function(e){i.ExpressionBuilder=e.ExpressionBuilder,i.ExpressionBuilderType=e.ExpressionBuilderType},function(e){o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=s},338:e=>{"use strict";e.exports=r},9342:e=>{"use strict";e.exports=i},7756:e=>{"use strict";e.exports=o}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var u={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(u),n.d(u,{default:()=>a});var e=n(8891),t=n(338),s=n(9342),r=n(7756);const i=(0,e.Immutable)([e.DataSourceTypes.FeatureLayer]),o=(0,e.Immutable)([s.ExpressionBuilderType.Attribute,s.ExpressionBuilderType.Statistics,s.ExpressionBuilderType.Expression]),a=n=>{const{onSettingChange:u,id:a,config:l,useDataSources:p}=n,{expression:d}=l;return(0,e.jsx)("div",{className:"widget-setting-use-expression jimu-widget-setting",css:c},(0,e.jsx)(r.SettingSection,{title:"Data"},(0,e.jsx)(r.SettingRow,null,(0,e.jsx)(t.DataSourceSelector,{onChange:e=>{u({id:a,useDataSources:e})},types:i,useDataSources:p,widgetId:a,mustUseDataSource:!0}))),(0,e.jsx)(r.SettingSection,{title:"Expression"},(0,e.jsx)(r.SettingRow,null,(null==p?void 0:p.length)>0?(0,e.jsx)(s.ExpressionBuilder,{className:"w-100",useDataSources:p,types:o,onChange:e=>{u({id:a,config:Object.assign(Object.assign({},l),{expression:e})})},expression:d,widgetId:a}):"Please select a data.")))},c=e.css`
  overflow-y: auto;
  height: calc(100% - 60px);
`})(),u})())}}}));