(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),l=a(8),i=a(7),o=a(9),u=a(0),c=a.n(u),h=a(23),d=a.n(h),s=a(16),m=a(10),f=a(13),g=a(15),v=a(11),b=function(){function e(t){var a=this,n=t.name,l=(t.from,t.to,t.backgroundColor);Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 18px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;r.width=18,r.height=l,n.font=t,n.fillStyle="white",n.strokeStyle="#878787",n.textAlign="center",n.textBaseline="middle",n.rotate(-Math.PI/2);var i=Object(v.getRotatedAxisCoordinate)(9,l/2,-Math.PI/2),o=i.x,u=i.y;return n.fillText(e,o,u),n.strokeText(e,o,u),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=Math.round(r),o=Math.round(n)-i,u=Math.round(l.width/2-20),c=Math.round(l.height/2-o/2);e.fillStyle=this._backgroundColor,e.fillRect(0,i,40,o),e.drawImage(l,u,c,40,o,0,i,40,o)}}]),e}(),y=function(){function e(t){var a=this,n=t.name,l=(t.from,t.to,t.backgroundColor);Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 12px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;return r.width=l,r.height=14,n.font=t,n.fillStyle="black",n.textAlign="center",n.textBaseline="middle",n.fillText(e,l/2,7),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"getName",value:function(){return this._name}},{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=this._backgroundColor,o=Math.round(r),u=Math.round(n)-o,c=t-40;e.fillStyle=i,e.fillRect(40,o,c,u);var h=Math.round(l.height/2-u/2);e.drawImage(l,0,h,c,u,45,o,c,u)}}]),e}(),p=["#d2b4de","#aed6f1","#a9dfbf","#f9e79f","#f5cba7"],w=["#feefce","#fffbe7"],S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=c.a.createRef(),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return c.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.useLeaves,r=e.rowHeight,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var o=0;o<t.length;o++){var u=t[o],c=new b(Object(f.a)({},u,{backgroundColor:p[o%p.length]}));c.children=[];for(var h=0;h<u.children.length;h++){var d=u.children[h],s=new y(Object(f.a)({},d,{backgroundColor:w[h%w.length]}));c.children.push(s)}i.categoryStructureClone.push(c)}}i.useLeaves!==a&&(i.useLeaves=a,i.useLeavesSet=new Set(a));var m=this.ref.current.getContext("2d");m.clearRect(0,0,n,l);for(var g=0,v=0;g<i.categoryStructureClone.length;g++){var S=i.categoryStructureClone[g],E=v,O=!0,C=!1,j=void 0;try{for(var x,k=S.children[Symbol.iterator]();!(O=(x=k.next()).done);O=!0){var _=x.value;i.useLeavesSet.has(_.getName())&&(_.draw(m,n,l,v*r,(v+1)*r),v+=1)}}catch(Y){C=!0,j=Y}finally{try{O||null==k.return||k.return()}finally{if(C)throw j}}v!==E&&S.draw(m,n,l,E*r,v*r)}}}]),t}(u.PureComponent),E=["#d2b4de","#aed6f1","#a9dfbf","#f9e79f","#f5cba7"],O=["#feefce","#fffbe7"],C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=c.a.createRef(),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return c.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.minY,r=e.maxY,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var o=0;o<t.length;o++){var u=t[o],c=new b(Object(f.a)({},u,{backgroundColor:E[o%E.length]}));c.start=u.start,c.end=u.end,c.children=[];for(var h=0;h<u.children.length;h++){var d=u.children[h],s=new y(Object(f.a)({},d,{backgroundColor:O[h%O.length]}));s.start=d.start,s.end=d.end,c.children.push(s)}i.categoryStructureClone.push(c)}}var m=this.ref.current.getContext("2d");m.clearRect(0,0,n,l);var g=!0,p=!1,w=void 0;try{for(var S,C=i.categoryStructureClone[Symbol.iterator]();!(g=(S=C.next()).done);g=!0){var j=S.value,x=!0,k=!1,_=void 0;try{for(var Y,L=j.children[Symbol.iterator]();!(x=(Y=L.next()).done);x=!0){var M=Y.value;if(!(M.end<a||M.start>r)){var N=Math.round(Object(v.toDomYCoord_Linear)(l,a,r,M.end)),I=Math.round(Object(v.toDomYCoord_Linear)(l,a,r,M.start));M.draw(m,n,l,N,I)}}}catch(D){k=!0,_=D}finally{try{x||null==L.return||L.return()}finally{if(k)throw _}}if(!(j.end<a||j.start>r)){var P=Math.round(Object(v.toDomYCoord_Linear)(l,a,r,j.end)),R=Math.round(Object(v.toDomYCoord_Linear)(l,a,r,j.start));console.log(a,r,j.end,P),j.draw(m,n,l,P,R)}}}catch(D){p=!0,w=D}finally{try{g||null==C.return||C.return()}finally{if(p)throw w}}}}]),t}(u.PureComponent);a(36);function j(e){var t=[],a=!0,r=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var o=l.value;Math.random()<.5&&t.push(o)}}catch(u){r=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}return t}var x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"a",children:[{name:"a1"},{name:"a2"}]},{name:"b",children:[{name:"b1"},{name:"b2"}]}],a.leaves=a.categoryStructure.map(function(e){return e.children}).flat().map(function(e){return e.name}),a.state={useLeaves:a.leaves,rowHeight:40,width:150,height:40},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.useLeaves,r=t.rowHeight,n=t.width,l=t.height;return c.a.createElement(c.a.Fragment,null,c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Props"),c.a.createElement("div",null,"cateogoryStructure",c.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),c.a.createElement("div",null,"useLeaves",c.a.createElement("button",{onClick:function(){return e.setState({useLeaves:j(e.leaves)})}},"randomize"),JSON.stringify(a,null," ")),c.a.createElement("div",null,"rowHeight",c.a.createElement("input",{type:"range",min:10,max:50,value:r,onChange:function(t){return e.setState({rowHeight:Number.parseInt(t.target.value)})}}),r),c.a.createElement("div",null,"width",c.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),c.a.createElement("div",null,"height",c.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Result"),c.a.createElement(S,{categoryStructure:this.categoryStructure,useLeaves:a,rowHeight:r,width:n,height:l})))}}]),t}(u.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"a",start:0,end:15,children:[{name:"a1",start:0,end:5},{name:"a2",start:5,end:15}]},{name:"b",start:15,end:80,children:[{name:"b1",start:15,end:35},{name:"b2",start:35,end:80}]}],a.state={minY:0,maxY:100,width:150,height:40},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.minY,r=t.maxY,n=t.width,l=t.height;return c.a.createElement(c.a.Fragment,null,c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Props"),c.a.createElement("div",null,"cateogoryStructure",c.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),c.a.createElement("div",null,"minY",c.a.createElement("input",{type:"range",min:0,max:r,value:a,onChange:function(t){return e.setState({minY:Number.parseInt(t.target.value)})}}),a),c.a.createElement("div",null,"maxY",c.a.createElement("input",{type:"range",min:a,max:120,value:r,onChange:function(t){return e.setState({maxY:Number.parseInt(t.target.value)})}}),r),c.a.createElement("div",null,"width",c.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),c.a.createElement("div",null,"height",c.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Result"),c.a.createElement(C,{categoryStructure:this.categoryStructure,minY:a,maxY:r,width:n,height:l})))}}]),t}(u.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(s.a,null,c.a.createElement("nav",{className:"app"},c.a.createElement(s.b,{to:"/CollapsibleYPanel"},"CollapsibleYPanel"),c.a.createElement(s.b,{to:"/LinearSpaceYPanel"},"LinearSpaceYPanel")),c.a.createElement(m.a,{path:"/CollapsibleYPanel",exact:!0,component:x}),c.a.createElement(m.a,{path:"/LinearSpaceYPanel",exact:!0,component:k}))}}]),t}(u.Component);d.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.25e48cd0.chunk.js.map