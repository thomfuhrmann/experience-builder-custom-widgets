System.register(["jimu-core","jimu-ui"],(function(e,t){var a={},l={};return{setters:[function(e){a.React=e.React,a.ReactRedux=e.ReactRedux,a.WidgetManager=e.WidgetManager,a.WidgetState=e.WidgetState,a.appActions=e.appActions,a.getAppStore=e.getAppStore},function(e){l.Button=e.Button,l.Col=e.Col,l.Label=e.Label,l.Option=e.Option,l.Row=e.Row,l.Select=e.Select}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=l}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(i),o.d(i,{default:()=>m});var e=o(8891),t=o(726);const a="Control the Widget State",l="Collapsible sidebar widget:",n="Select a sidebar widget",r="Sidebar",c="Widget within controller widget:",s="Select a widget controller widget",p="Toggle Open",{useState:d,useEffect:g}=e.React,{useSelector:u}=e.ReactRedux;function m(o){const[i,m]=d([]),[S,R]=d(null),[v,b]=d(null),f=u((e=>{var t;return null===(t=e.widgetsState)||void 0===t?void 0:t[S]})),w=u((e=>{var t,a;return null===(a=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[v])||void 0===a?void 0:a.state}));g((()=>{const t=(0,e.getAppStore)().getState().appConfig.widgets;m(Object.values(t))}),[]);const h=t=>{var a,l;if(t)return(null===(l=null===(a=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===a?void 0:a[t])||void 0===l?void 0:l.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)};return e.React.createElement("div",{className:"widget-control-the-widget-state jimu-widget m-2",style:{width:"100%",height:"100%",maxHeight:"800px",padding:"0.5em"}},e.React.createElement("h6",{title:a},a),i&&i.length>0&&e.React.createElement(t.Row,{className:"p-2 justify-content-between align-items-center"},e.React.createElement(t.Col,{className:"col-sm-6"},e.React.createElement(t.Label,{title:l},l),e.React.createElement(t.Select,{defaultValue:"",onChange:e=>{R(e.currentTarget.value)},placeholder:n,title:n},i.filter((e=>"widgets/layout/sidebar/"===e.uri)).map((a=>e.React.createElement(t.Option,{value:a.id},a.label))))),S&&e.React.createElement(t.Col,{className:"col-sm-6"},e.React.createElement(t.Button,{onClick:()=>{f&&!0===f.collapse?(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(S,"collapse",!1)):f&&!1===f.collapse?(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(S,"collapse",!0)):alert("You must select a collapsable sidebar widget.")},htmlType:"submit",type:"primary",title:r},r))),i&&i.length>0&&e.React.createElement(t.Row,{className:"p-2 justify-content-between align-items-center"},e.React.createElement(t.Col,{className:"col-sm-6"},e.React.createElement(t.Label,{title:c},c),e.React.createElement(t.Select,{defaultValue:"",onChange:e=>{b(e.currentTarget.value)},placeholder:s,title:s},i.map((a=>e.React.createElement(t.Option,{value:a.id},a.label))))),v&&e.React.createElement(t.Col,{className:"col-sm-6"},e.React.createElement(t.Button,{onClick:()=>{(()=>{if(w===e.WidgetState.Opened){const t=e.appActions.closeWidget(v);h(v).then((()=>{(0,e.getAppStore)().dispatch(t)}))}else{const t=e.appActions.openWidget(v);h(v).then((()=>{(0,e.getAppStore)().dispatch(t)}))}})()},htmlType:"submit",type:"primary",title:p},p))))}})(),i})())}}}));