System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"],(function(e,t){var o={},a={},r={};return{setters:[function(e){o.Immutable=e.Immutable,o.JimuFieldType=e.JimuFieldType,o.jsx=e.jsx},function(e){a.AllDataSourceTypes=e.AllDataSourceTypes,a.DataSourceSelector=e.DataSourceSelector,a.FieldSelector=e.FieldSelector},function(e){r.SettingRow=e.SettingRow,r.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=o},338:e=>{"use strict";e.exports=a},7756:e=>{"use strict";e.exports=r}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var s={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(s),i.d(s,{default:()=>a});var e=i(8891),t=i(338),o=i(7756);function a(a){const r=(0,e.Immutable)([t.AllDataSourceTypes.FeatureLayer]),i=(0,e.Immutable)([e.JimuFieldType.String]);return(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"widget-setting-get-map-coordinates"},(0,e.jsx)(o.SettingSection,{className:"data-source-selector-section",title:a.intl.formatMessage({id:"dataSourceSelectorLabel",defaultMessage:"Select Feature Layer Data Source"})},(0,e.jsx)(o.SettingRow,null,(0,e.jsx)(t.DataSourceSelector,{types:r,useDataSourcesEnabled:!0,mustUseDataSource:!0,useDataSources:a.useDataSources,onChange:e=>{e&&a.onSettingChange({id:a.id,useDataSources:e})},widgetId:a.id,hideDataView:!0}))),a.useDataSources&&a.useDataSources.length>0&&(0,e.jsx)(o.SettingSection,{className:"attribute-selector-section",title:a.intl.formatMessage({id:"chooseAttributeSelectorLabel",defaultMessage:"Choose attribute to filter on (string)"})},(0,e.jsx)(o.SettingRow,null,(0,e.jsx)(t.FieldSelector,{useDataSources:a.useDataSources,types:i,onChange:e=>{e&&1===e.length&&a.onSettingChange({id:a.id,config:a.config.set("filterField",e[0].name)})},selectedFields:(0,e.Immutable)([a.config.filterField]),isMultiple:!1,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0})))))}})(),s})())}}}));