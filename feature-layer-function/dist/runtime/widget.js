System.register(["jimu-core"],(function(e,t){var a={};return{setters:[function(e){a.DataSourceComponent=e.DataSourceComponent,a.DataSourceManager=e.DataSourceManager,a.DataSourceStatus=e.DataSourceStatus,a.React=e.React}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=a}},t={};function r(a){var u=t[a];if(void 0!==u)return u.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var u={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(u),r.d(u,{default:()=>c});var e=r(8891);const{useState:t,useEffect:a,useRef:o}=e.React;function c(r){const[u,c]=t(null),n=o(null);a((()=>{l()}),[]);const s=()=>!(!r.useDataSources||1!==r.useDataSources.length||!r.useDataSources[0].fields||1!==r.useDataSources[0].fields.length),l=()=>{if(!s())return;const e=r.useDataSources[0].fields[0],t=n.current&&n.current.value?`${e} like '%${n.current.value}%'`:"1=1";c({where:t,outFields:["*"],pageSize:10})};return s()?e.React.createElement("div",{className:"widget-use-feature-layer",style:{width:"100%",height:"100%",maxHeight:"800px",overflow:"auto"}},e.React.createElement("h3",null,"This widget shows how to use a feature layer as a data source."),e.React.createElement(e.DataSourceComponent,{useDataSource:r.useDataSources[0],query:u,widgetId:r.id,queryCount:!0},((t,a)=>{const u=r.useDataSources[0].fields[0];return e.React.createElement(e.React.Fragment,null,e.React.createElement("div",null,e.React.createElement("input",{placeholder:"Query value",ref:n}),e.React.createElement("button",{onClick:l},"Query")),e.React.createElement("div",null,"Query state: ",a.status),e.React.createElement("div",null,"Count: ",t.count),e.React.createElement("div",{className:"record-list",style:{width:"100%",marginTop:"20px",height:"calc(100% - 80px)",overflow:"auto"}},t&&t.getStatus()===e.DataSourceStatus.Loaded?t.getRecords().map(((t,a)=>e.React.createElement("div",{key:a},t.getData()[u]))):null))}))):e.React.createElement("h3",null,"This widget demonstrates how to use a feature layer as a data source.",e.React.createElement("br",null),"Configure the data source.")}})(),u})())}}}));