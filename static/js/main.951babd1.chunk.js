(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(3),l=a(7),i=a(6),u=a(8),c=a(0),o=a.n(c),h=a(22),d=a.n(h),s=a(14),m=a(10),g=a(15),f=a(11),v=function(){function e(t){var a=this,n=t.name,l=t.backgroundColor;Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 18px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;r.width=18,r.height=l,n.font=t,n.fillStyle="white",n.strokeStyle="#878787",n.textAlign="center",n.textBaseline="middle",n.rotate(-Math.PI/2);var i=Object(f.getRotatedAxisCoordinate)(9,l/2,-Math.PI/2),u=i.x,c=i.y;return n.fillText(e,u,c),n.strokeText(e,u,c),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=Math.round(r),u=Math.round(n)-i,c=Math.round(l.width/2-20),o=Math.round(l.height/2-u/2);e.fillStyle=this._backgroundColor,e.fillRect(0,i,40,u);try{e.drawImage(l,c,o,40,u,0,i,40,u)}catch(h){}}}]),e}(),b=function(){function e(t){var a=this,n=t.name,l=t.backgroundColor;Object(r.a)(this,e),this._getBitmap=Object(g.memoize_one)(function(){var e=a._name,t="bold 12px Sans",r=document.createElement("canvas"),n=r.getContext("2d");n.font=t;var l=n.measureText(e).width;return r.width=l,r.height=14,n.font=t,n.fillStyle="black",n.textAlign="center",n.textBaseline="middle",n.fillText(e,l/2,7),r}),this._name=n,this._backgroundColor=l}return Object(n.a)(e,[{key:"getName",value:function(){return this._name}},{key:"setBackgroundColor",value:function(e){this._backgroundColor=e}},{key:"draw",value:function(e,t,a,r,n){var l=this._getBitmap(),i=this._backgroundColor,u=Math.round(r),c=Math.round(n)-u,o=t-40;e.fillStyle=i,e.fillRect(40,u,o,c);var h=Math.round(l.height/2-c/2);e.drawImage(l,0,h,o,c,45,u,o,c)}}]),e}(),y=["#feefce","#fffbe7"],p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=o.a.createRef(),a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return o.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.useLeaves,r=e.rowHeight,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var u=0;u<t.length;u++){var c=t[u],o=new v(c);o.children=[];for(var h=0;h<c.children.length;h++){var d=c.children[h],s=new b(d);o.children.push(s)}i.categoryStructureClone.push(o)}}i.useLeaves!==a&&(i.useLeaves=a,i.useLeavesSet=new Set(a));var m=this.ref.current.getContext("2d");m.clearRect(0,0,n,l);for(var g=0,f=0;g<i.categoryStructureClone.length;g++){var p=i.categoryStructureClone[g],w=f,S=!0,C=!1,E=void 0;try{for(var O,k=p.children[Symbol.iterator]();!(S=(O=k.next()).done);S=!0){var j=O.value;i.useLeavesSet.has(j.getName())&&(j.setBackgroundColor(y[f%y.length]),j.draw(m,n,l,f*r,(f+1)*r),f+=1)}}catch(x){C=!0,E=x}finally{try{S||null==k.return||k.return()}finally{if(C)throw E}}f!==w&&p.draw(m,n,l,w*r,f*r)}}}]),t}(c.PureComponent),w=a(25),S=["#feefce","#fffbe7"],C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=o.a.createRef(),a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return o.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.minY,r=e.maxY,n=e.width,l=e.height;this.draw_memo=this.draw_memo||{};var i=this.draw_memo;if(i.categoryStructure!==t){i.categoryStructure=t,i.categoryStructureClone=[];for(var u=0,c=0;u<t.length;u++){var o=t[u],h=new v(o);h.start=o.start,h.end=o.end,h.children=[];for(var d=0;d<o.children.length;d++){var s=o.children[d],m=new b(Object(w.a)({},s,{backgroundColor:S[c%S.length]}));m.start=s.start,m.end=s.end,h.children.push(m),c+=1}i.categoryStructureClone.push(h)}}var g=this.ref.current.getContext("2d");g.clearRect(0,0,n,l);var y=!0,p=!1,C=void 0;try{for(var E,O=i.categoryStructureClone[Symbol.iterator]();!(y=(E=O.next()).done);y=!0){var k=E.value,j=!0,x=!1,_=void 0;try{for(var Y,L=k.children[Symbol.iterator]();!(j=(Y=L.next()).done);j=!0){var M=Y.value;if(!(M.end<a||M.start>r)){var N=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,M.end)),P=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,M.start));M.draw(g,n,l,N,P)}}}catch(R){x=!0,_=R}finally{try{j||null==L.return||L.return()}finally{if(x)throw _}}if(!(k.end<a||k.start>r)){var I=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,k.end)),H=Math.round(Object(f.toDomYCoord_Linear)(l,a,r,k.start));console.log(a,r,k.end,I),k.draw(g,n,l,I,H)}}}catch(R){p=!0,C=R}finally{try{y||null==O.return||O.return()}finally{if(p)throw C}}}}]),t}(c.PureComponent),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).ref=o.a.createRef(),a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height;return o.a.createElement("canvas",{ref:this.ref,width:t,height:a,style:{width:t,height:a,display:"block"}})}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props,t=e.categoryStructure,a=e.rowHeight,r=e.width,n=e.height;this.draw_memo=this.draw_memo||{};var l=this.draw_memo;if(l.categoryStructure!==t){l.categoryStructure=t,l.categoryStructureClone=[];for(var i=0;i<t.length;i++){var u=t[i],c=new v(u);c.children=[];for(var o=0;o<u.children.length;o++){var h=u.children[o],d=new b(h);c.children.push(d)}l.categoryStructureClone.push(c)}}var s=this.ref.current.getContext("2d");s.clearRect(0,0,r,n);for(var m=0,g=0;m<l.categoryStructureClone.length;m++){var f=l.categoryStructureClone[m],y=g,p=!0,w=!1,S=void 0;try{for(var C,E=f.children[Symbol.iterator]();!(p=(C=E.next()).done);p=!0){C.value.draw(s,r,n,g*a,(g+1)*a),g+=1}}catch(O){w=!0,S=O}finally{try{p||null==E.return||E.return()}finally{if(w)throw S}}g!==y&&f.draw(s,r,n,y*a,g*a)}}}]),t}(c.PureComponent);a(33);function O(e){var t=[],a=!0,r=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var u=l.value;Math.random()<.5&&t.push(u)}}catch(c){r=!0,n=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}return t}var k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"a",backgroundColor:"#efdb96",children:[{name:"a1",backgroundColor:"#fffbe8"},{name:"a2",backgroundColor:"#ffeed0"}]},{name:"b",backgroundColor:"#cface3",children:[{name:"b1",backgroundColor:"#fffbe8"},{name:"b2",backgroundColor:"#ffeed0"}]}],a.state={width:150,height:40,rowHeight:10},a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.width,r=t.height,n=t.rowHeight;return o.a.createElement(o.a.Fragment,null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Props"),o.a.createElement("div",null,"cateogoryStructure",o.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),o.a.createElement("div",null,"rowHeight",o.a.createElement("input",{type:"range",min:10,max:50,value:n,onChange:function(t){return e.setState({rowHeight:Number.parseInt(t.target.value)})}}),n),o.a.createElement("div",null,"width",o.a.createElement("input",{type:"range",min:50,max:200,value:a,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),a),o.a.createElement("div",null,"height",o.a.createElement("input",{type:"range",min:0,max:500,value:r,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),r)),o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Result"),o.a.createElement(E,{categoryStructure:this.categoryStructure,rowHeight:n,width:a,height:r})))}}]),t}(c.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"a",backgroundColor:"#efdb96",children:[{name:"a1"},{name:"a2"}]},{name:"b",backgroundColor:"#cface3",children:[{name:"b1"},{name:"b2"}]}],a.leaves=a.categoryStructure.map(function(e){return e.children}).flat().map(function(e){return e.name}),a.state={useLeaves:a.leaves,rowHeight:40,width:150,height:40},a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.useLeaves,r=t.rowHeight,n=t.width,l=t.height;return o.a.createElement(o.a.Fragment,null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Props"),o.a.createElement("div",null,"cateogoryStructure",o.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),o.a.createElement("div",null,"useLeaves",o.a.createElement("button",{onClick:function(){return e.setState({useLeaves:O(e.leaves)})}},"randomize"),JSON.stringify(a,null," ")),o.a.createElement("div",null,"rowHeight",o.a.createElement("input",{type:"range",min:10,max:50,value:r,onChange:function(t){return e.setState({rowHeight:Number.parseInt(t.target.value)})}}),r),o.a.createElement("div",null,"width",o.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),o.a.createElement("div",null,"height",o.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Result"),o.a.createElement(p,{categoryStructure:this.categoryStructure,useLeaves:a,rowHeight:r,width:n,height:l})))}}]),t}(c.Component),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).categoryStructure=[{name:"",backgroundColor:"#a8e6e3",start:0,end:15,children:[{name:"a1",start:0,end:5},{name:"a2",start:5,end:15}]},{name:"",backgroundColor:"#fb8730",start:15,end:80,children:[{name:"b1",start:15,end:35},{name:"b2",start:35,end:80}]}],a.state={minY:0,maxY:100,width:150,height:40},a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.minY,r=t.maxY,n=t.width,l=t.height;return o.a.createElement(o.a.Fragment,null,o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Props"),o.a.createElement("div",null,"cateogoryStructure",o.a.createElement("pre",null,JSON.stringify(this.categoryStructure,null," "))),o.a.createElement("div",null,"minY",o.a.createElement("input",{type:"range",min:0,max:r,value:a,onChange:function(t){return e.setState({minY:Number.parseInt(t.target.value)})}}),a),o.a.createElement("div",null,"maxY",o.a.createElement("input",{type:"range",min:a,max:120,value:r,onChange:function(t){return e.setState({maxY:Number.parseInt(t.target.value)})}}),r),o.a.createElement("div",null,"width",o.a.createElement("input",{type:"range",min:50,max:200,value:n,onChange:function(t){return e.setState({width:Number.parseInt(t.target.value)})}}),n),o.a.createElement("div",null,"height",o.a.createElement("input",{type:"range",min:0,max:500,value:l,onChange:function(t){return e.setState({height:Number.parseInt(t.target.value)})}}),l)),o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Result"),o.a.createElement(C,{categoryStructure:this.categoryStructure,minY:a,maxY:r,width:n,height:l})))}}]),t}(c.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(s.a,null,o.a.createElement("nav",{className:"app"},o.a.createElement(s.b,{to:"/StaticYPanel"},"StaticYPanel"),o.a.createElement(s.b,{to:"/CollapsibleYPanel"},"CollapsibleYPanel"),o.a.createElement(s.b,{to:"/LinearSpaceYPanel"},"LinearSpaceYPanel")),o.a.createElement(m.a,{path:"/StaticYPanel",exact:!0,component:k}),o.a.createElement(m.a,{path:"/CollapsibleYPanel",exact:!0,component:j}),o.a.createElement(m.a,{path:"/LinearSpaceYPanel",exact:!0,component:x}))}}]),t}(c.Component);d.a.render(o.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.951babd1.chunk.js.map