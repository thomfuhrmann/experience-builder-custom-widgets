System.register(["jimu-core","jimu-ui/advanced/data-source-selector"],(function(e,t){var s={},a={};return{setters:[function(e){s.DataSourceTypes=e.DataSourceTypes,s.Immutable=e.Immutable,s.React=e.React},function(e){a.DataSourceSelector=e.DataSourceSelector,a.FieldSelector=e.FieldSelector}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=s},338:e=>{"use strict";e.exports=a}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{default:()=>s});var e=r(8891),t=r(338);class s extends e.React.PureComponent{constructor(){super(...arguments),this.supportedTypes=(0,e.Immutable)([e.DataSourceTypes.FeatureLayer]),this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onFieldSelected=(e,t)=>{this.props.onSettingChange({id:this.props.id,useDataSources:[Object.assign(Object.assign({},this.props.useDataSources[0]),{fields:e.map((e=>e.jimuName))})]})}}render(){return e.React.createElement("div",{className:"use-feature-layer-setting p-2"},e.React.createElement(t.DataSourceSelector,{types:this.supportedTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:this.props.useDataSourcesEnabled,onToggleUseDataEnabled:this.onToggleUseDataEnabled,onChange:this.onDataSourceChange,widgetId:this.props.id}),this.props.useDataSources&&this.props.useDataSources.length>0&&e.React.createElement("div",{className:"mt-2"},"Please choose a Field to display:",e.React.createElement(t.FieldSelector,{useDataSources:this.props.useDataSources,onChange:this.onFieldSelected,selectedFields:this.props.useDataSources[0].fields||(0,e.Immutable)([])})))}}})(),o})())}}}));