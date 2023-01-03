System.register(["jimu-core","jimu-ui"],(function(e,t){var o={},r={};return{setters:[function(e){o.DataSourceComponent=e.DataSourceComponent,o.DataSourceStatus=e.DataSourceStatus,o.classNames=e.classNames,o.css=e.css,o.jsx=e.jsx},function(e){r.Button=e.Button}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=r}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{default:()=>o});var e=s(8891),t=s(726);function o(o){return o.useDataSources&&1===o.useDataSources.length?(0,e.jsx)("div",{className:"widget-listen-selection-change",css:r},(0,e.jsx)("h3",null,"This widget shows how to listen to the selection change of a data source."),(0,e.jsx)(e.DataSourceComponent,{useDataSource:o.useDataSources[0],query:{where:"1=1"},widgetId:o.id},((o,r)=>(0,e.jsx)("div",{className:"record-list"},o&&o.getStatus()===e.DataSourceStatus.Loaded?o.getRecords().map(((r,s)=>{var a;return(0,e.jsx)(t.Button,{type:"tertiary",key:s,onClick:()=>o.selectRecordById(r.getId()),className:(0,e.classNames)({"blue-border":null===(a=o.getSelectedRecordIds())||void 0===a?void 0:a.includes(r.getId())})},r.getId())})):null)))):(0,e.jsx)("h3",null,"This widget shows how to listen to the selection change of a data source.",(0,e.jsx)("br",null),"Please configure the data source.")}const r=e.css`
  width: 100%;
  height: 100%;
  max-height: 800px;
  overflow: auto;
  .blue-border {
    border: 1px solid var(--primary-500);
  }
  .record-list {
    width: 100%;
    margin-top: 20px;
    height: calc(100% - 80px);
    overflow: auto;
  }
`})(),a})())}}}));