System.register(["jimu-core","jimu-ui"],(function(e,t){var s={},o={};return{setters:[function(e){s.FormattedMessage=e.FormattedMessage,s.React=e.React,s.css=e.css,s.defaultMessages=e.defaultMessages,s.jsx=e.jsx,s.styled=e.styled},function(e){o.Button=e.Button,o.Tab=e.Tab,o.Tabs=e.Tabs}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=s},726:e=>{"use strict";e.exports=o}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,r),l.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>o});var e=r(8891),t=r(726);const s={_widgetLabel:"Demo (Class)",widgetProperties:"Widget Properties",widgetFunctions:"Widget Functions",widgetName:"widget name:",widgetProps:"widget props:"};class o extends e.React.PureComponent{constructor(){super(...arguments),this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:s[e]}):e}render(){const o=e.css`
      color: ${this.props.theme.colors.danger};
      font-size: 1.25rem;
    `,r={backgroundColor:this.props.theme.colors.palette.light[500],padding:"1rem"},l=e.styled.button`
      color: white;
      background-color: ${this.props.theme.colors.primary};
      transition: 0.15s ease-in all;
      &:hover {
        background-color: ${this.props.theme.colors.danger};
      }
    `,i=(0,e.styled)(t.Button)`
      background-color: hotpink !important;
      border: 0 !important;
      transition: 0.15s ease-in all;
      &:hover {
        background-color: purple !important;
      }
    `,n=e.css`
      border: solid 1px;
      width: 100px;
      padding-left: 20px;
    `,a=Object.keys(this.props).map(((t,s)=>["manifest","user","intl"].indexOf(t)>-1||"string"==typeof this.props[t]?(0,e.jsx)("tr",{key:s},(0,e.jsx)("td",null,t),(0,e.jsx)("td",null,this.props[t]&&this.props[t].toString())):(0,e.jsx)("tr",{key:s},(0,e.jsx)("td",null,t),(0,e.jsx)("td",null,JSON.stringify(this.props[t],null,2)))));return(0,e.jsx)("div",{className:"widget-demo jimu-widget",style:{overflow:"auto"}},(0,e.jsx)(t.Tabs,null,(0,e.jsx)(t.Tab,{id:"widgetProperties",title:this.nls("widgetProperties"),defaultActive:!0},(0,e.jsx)("div",{className:"title font-weight-bold"},"NLS messages from jimu-core (OK)"),(0,e.jsx)("div",{className:"content"},(0,e.jsx)(e.FormattedMessage,{id:"ok",defaultMessage:e.defaultMessages.ok})),(0,e.jsx)("hr",null),(0,e.jsx)("div",{css:o},(0,e.jsx)("span",{css:r},"Theme danger color")),(0,e.jsx)("br",null),(0,e.jsx)(l,null,"A styled HTML Button"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)(i,null,"A Re-styled Button Component"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)("div",{css:n},"right to left demo"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)("style",null,"\n      .danger-color {\n        color: red;\n      }\n    "),(0,e.jsx)("p",{className:"danger-color"},"Text color is from a named CSS class"),(0,e.jsx)("div",{className:"title font-weight-bold"},(0,e.jsx)(e.FormattedMessage,{id:"widgetName",defaultMessage:s.widgetName})),(0,e.jsx)("div",{className:"content"},this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:s._widgetLabel})),(0,e.jsx)("div",{className:"title font-weight-bold"},(0,e.jsx)(e.FormattedMessage,{id:"widgetProps",defaultMessage:s.widgetProps})),(0,e.jsx)("div",{className:"content"},(0,e.jsx)("table",null,(0,e.jsx)("tbody",null,a)))),(0,e.jsx)(t.Tab,{id:"widgetFunctions",title:this.nls("widgetFunctions")},(0,e.jsx)("p",null,"TODO"))))}}})(),l})())}}}));