(this.webpackJsonpassign=this.webpackJsonpassign||[]).push([[0],{16:function(e,a,t){},24:function(e,a,t){e.exports=t(35)},35:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(17),s=t.n(l),c=t(9);function i(){return r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/"},"Users")))))}var o=t(19),m=t(20),d=t(8),u=t(23),b=t(22),h=(t(16),function(e){var a=e.handleClose,t=e.show,n=e.children,l=t?"modal display-block":"modal display-none";return r.a.createElement("div",{className:l},r.a.createElement("section",{className:"modal-main"},r.a.createElement("div",{className:"modal-body mx-auto"},n,r.a.createElement("button",{className:"btn btn-danger btn-block my-1",onClick:a},"close"))))}),v=t(21),p=(t(34),function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).showModal=function(a){e.setState({show:!0}),e.setState({nameOfUser:a.real_name})},e.hideModal=function(){e.setState({show:!1})},e.setCalendar=function(a){var t=Date.parse(a.start_time.replace("PM","").replace("AM","")),n=Date.parse(a.end_time.replace("PM","").replace("AM",""));e.setState((function(){return{date:[new Date(t),new Date(n)]}}))},e.state={users:{},show:!1,nameOfUser:""},e.showModal=e.showModal.bind(Object(d.a)(e)),e.hideModal=e.hideModal.bind(Object(d.a)(e)),e.setCalendar=e.setCalendar.bind(Object(d.a)(e)),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/listUsers").then((function(e){return e.json()})).then((function(a){return e.setState((function(){return{users:a}}))}))}},{key:"render",value:function(){var e=this,a=this.state.users.members;if(a){var t=a.find((function(a){return a.real_name===e.state.nameOfUser}));return r.a.createElement("div",{className:"container-sm"},r.a.createElement("h4",{className:"font-weight-light text-center"},"List of Users: click respective button to view Time Range"),a.map((function(a){return r.a.createElement("div",{className:"container-sm",key:a.id},r.a.createElement("button",{className:"btn btn-primary btn-block",value:a.real_name,onClick:e.showModal.bind(e,a)},"Name of the User: ",a.real_name," | Location of User: ",a.tz," | Id of User: ",a.id),r.a.createElement("hr",null))})),t?r.a.createElement(h,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("h6",null,"User: ",t.real_name,"(Click on the time range to view in Calendar)",r.a.createElement("hr",null),t.activity_periods.map((function(a){return r.a.createElement("div",{key:t.activity_periods.indexOf(a)},r.a.createElement("div",{className:"btn-group",onClick:e.setCalendar.bind(e,a)},r.a.createElement("button",{className:"btn btn-primary my-1"},"Start Time: ",a.start_time),r.a.createElement("button",{className:"btn btn-primary my-1"},"End Time: ",a.end_time)))}))),this.state.date?r.a.createElement("div",{className:"container-sm my-1 bg-light"},r.a.createElement(v.a,{value:this.state.date,selectRange:!0})):null):null)}return null}}]),t}(r.a.Component)),E=t(2);var f=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:p}))))};s.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dc2d57fb.chunk.js.map