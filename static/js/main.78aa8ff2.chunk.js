(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),l=a(8),i=a(7),o=a(9),u=a(0),c=a.n(u),h=a(22),s=a.n(h),d=a(15),m=a(10),g=a(14),f=a(11),v=function(){function e(t){var a=this,n=t.name,l=t.backgroundColor;Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 18px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;r.width=18,r.height=l,n.font=t,n.fillStyle="white",n.strokeStyle="#878787",n.textAlign="center",n.textBaseline="middle",n.rotate(-Math.PI/2);var i=Object(f.getRotatedAxisCoordinate)(9,l/2,-Math.PI/2),o=i.x,u=i.y;return n.fillText(e,o,u),n.strokeText(e,o,u),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=Math.round(r),o=Math.round(n)-i,u=Math.round(l.width/2-20),c=Math.round(l.height/2-o/2);e.fillStyle=this._backgroundColor,e.fillRect(0,i,40,o);try{e.drawImage(l,u,c,40,o,0,i,40,o)}catch(h){}}}]),e}(),b=function(){function e(t){var a=this,n=t.name,l=t.backgroundColor;Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 12px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;return r.width=l,r.height=14,n.font=t,n.fillStyle="black",n.textAlign="center",n.textBaseline="middle",n.fillText(e,l/2,7),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"getName",value:function(){return this._name}},{key:"setBackgroundColor",value:function(e){this._backgroundColor=e}},{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=this._backgroundColor,o=Math.round(r),u=Math.round(n)-o,c=t-40;e.fillStyle=i,e.fillRect(40,o,c,u);var h=Math.round(l.height/2-u/2);e.drawImage(l,0,h,c,u,45,o,c,u)}}]),e}(),y=["#feefce","#fffbe7"],p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=c.a.createRef(),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return c.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.useLeaves,r=e.rowHeight,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var o=0;o<t.length;o++){var u=t[o],c=new v(u);c.children=[];for(var h=0;h<u.children.length;h++){var s=u.children[h],d=new b(s);c.children.push(d)}i.categoryStructureClone.push(c)}}i.useLeaves!==a&&(i.useLeaves=a,i.useLeavesSet=new Set(a));var m=this.ref.current.getContext("2d");m.clearRect(0,0,n,l);for(var g=0,f=0;g<i.categoryStructureClone.length;g++){var p=i.categoryStructureClone[g],w=f,S=!0,C=!1,E=void 0;try{for(var O,j=p.children[Symbol.iterator]();!(S=(O=j.next()).done);S=!0){var k=O.value;i.useLeavesSet.has(k.getName())&&(k.setBackgroundColor(y[f%y.length]),k.draw(m,n,l,f*r,(f+1)*r),f+=1)}}catch(x){C=!0,E=x}finally{try{S||null==j.return||j.return()}finally{if(C)throw E}}f!==w&&p.draw(m,n,l,w*r,f*r)}}}]),t}(u.PureComponent),w=a(25),S=["#feefce","#fffbe7"],C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=c.a.createRef(),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return c.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.minY,r=e.maxY,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var o=0,u=0;o<t.length;o++){var c=t[o],h=new v(c);h.start=c.start,h.end=c.end,h.children=[];for(var s=0;s<c.children.length;s++){var d=c.children[s],m=new b(Object(w.a)({},d,{backgroundColor:S[u%S.length]}));m.start=d.start,m.end=d.end,h.children.push(m),u+=1}i.categoryStructureClone.push(h)}}var g=this.ref.current.getContext("2d");g.clearRect(0,0,n,l);var y=!0,p=!1,C=void 0;try{for(var E,O=i.categoryStructureClone[Symbol.iterator]();!(y=(E=O.next()).done);y=!0){var j=E.value,k=!0,x=!1,_=void 0;try{for(var Y,L=j.children[Symbol.iterator]();!(k=(Y=L.next()).done);k=!0){var M=Y.value;if(!(M.end<a||M.start>r)){var N=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,M.end)),I=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,M.start));M.draw(g,n,l,N,I),1}}}catch(R){x=!0,_=R}finally{try{k||null==L.return||L.return()}finally{if(x)throw _}}if(!(j.end<a||j.start>r)){var P=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,j.end)),B=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,j.start));console.log(a,r,j.end,P),j.draw(g,n,l,P,B)}}}catch(R){p=!0,C=R}finally{try{y||null==O.return||O.return()}finally{if(p)throw C}}}}]),t}(u.PureComponent);a(33);function E(e){var t=[],a=!0,r=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var o=l.value;Math.random()<.5&&t.push(o)}}catch(u){r=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}return t}var O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"a",backgroundColor:"#efdb96",children:[{name:"a1"},{name:"a2"}]},{name:"b",backgroundColor:"#cface3",children:[{name:"b1"},{name:"b2"}]}],a.leaves=a.categoryStructure.map(function(e){return e.children}).flat().map(function(e){return e.name}),a.state={useLeaves:a.leaves,rowHeight:40,width:150,height:40},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.useLeaves,r=t.rowHeight,n=t.width,l=t.height;return c.a.createElement(c.a.Fragment,null,c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Props"),c.a.createElement("div",null,"cateogoryStructure",c.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),c.a.createElement("div",null,"useLeaves",c.a.createElement("button",{onClick:function(){return e.setState({useLeaves:E(e.leaves)})}},"randomize"),JSON.stringify(a,null," ")),c.a.createElement("div",null,"rowHeight",c.a.createElement("input",{type:"range",min:10,max:50,value:r,onChange:function(t){return e.setState({rowHeight:Number.parseInt(t.target.value)})}}),r),c.a.createElement("div",null,"width",c.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),c.a.createElement("div",null,"height",c.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Result"),c.a.createElement(p,{categoryStructure:this.categoryStructure,useLeaves:a,rowHeight:r,width:n,height:l})))}}]),t}(u.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"",backgroundColor:"#a8e6e3",start:0,end:15,children:[{name:"a1",start:0,end:5},{name:"a2",start:5,end:15}]},{name:"",backgroundColor:"#fb8730",start:15,end:80,children:[{name:"b1",start:15,end:35},{name:"b2",start:35,end:80}]}],a.state={minY:0,maxY:100,width:150,height:40},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.minY,r=t.maxY,n=t.width,l=t.height;return c.a.createElement(c.a.Fragment,null,c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Props"),c.a.createElement("div",null,"cateogoryStructure",c.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),c.a.createElement("div",null,"minY",c.a.createElement("input",{type:"range",min:0,max:r,value:a,onChange:function(t){return e.setState({minY:Number.parseInt(t.target.value)})}}),a),c.a.createElement("div",null,"maxY",c.a.createElement("input",{type:"range",min:a,max:120,value:r,onChange:function(t){return e.setState({maxY:Number.parseInt(t.target.value)})}}),r),c.a.createElement("div",null,"width",c.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),c.a.createElement("div",null,"height",c.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Result"),c.a.createElement(C,{categoryStructure:this.categoryStructure,minY:a,maxY:r,width:n,height:l})))}}]),t}(u.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("nav",{className:"app"},c.a.createElement(d.b,{to:"/CollapsibleYPanel"},"CollapsibleYPanel"),c.a.createElement(d.b,{to:"/LinearSpaceYPanel"},"LinearSpaceYPanel")),c.a.createElement(m.a,{path:"/CollapsibleYPanel",exact:!0,component:O}),c.a.createElement(m.a,{path:"/LinearSpaceYPanel",exact:!0,component:j}))}}]),t}(u.Component);s.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.78aa8ff2.chunk.js.map