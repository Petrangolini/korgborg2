import{s as mt,n as oe,o as il,e as Oe,f as Ce,r as al,h as ml,b as Ie,i as gl}from"../chunks/scheduler.3aVcoazz.js";import{S as cl,i as ul,g as h,h as d,j as v,f,k as g,l as A,a as R,s as D,m as Q,c as N,x as he,n as X,y as re,z as n,A as ve,d as V,b as Me,t as Y,o as xe,B as Bt,C as tt,r as lt,u as st,v as ot,w as nt,D as He,E as $e,p as Se}from"../chunks/index.4rhntDxI.js";import{e as pe,C as fl,D as pl,f as Ve,s as hl,M as vl}from"../chunks/Monster.oJbrJIi_.js";function yl(l){let t;return{c(){t=h("div"),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0}),v(t).forEach(f),this.h()},h(){g(t,"class","ff svelte-akjsrs"),A(t,"top",l[1]+"px"),A(t,"left",l[0]+"px")},m(e,s){R(e,t,s)},p(e,[s]){s&2&&A(t,"top",e[1]+"px"),s&1&&A(t,"left",e[0]+"px")},i:oe,o:oe,d(e){e&&f(t)}}}let jt=1;function kl(l,t,e){let{w:s=100}=t,{h:r=100}=t,o=Math.random()*s,_=Math.random()*r,i=Math.random()*2*Math.PI;function c(){e(0,o+=jt*Math.cos(i)),e(1,_+=jt*Math.sin(i)),i+=Math.random()*20*Math.PI/180-10*Math.PI/180,(o<-10||o>2*s+10)&&e(0,o=Math.random()*s),(_<-10||_>r+10)&&e(1,_=Math.random()*r)}return il(()=>{e(0,o=Math.random()*s),e(1,_=Math.random()*r);const m=setInterval(()=>{c()},100);return()=>clearInterval(m)}),l.$$set=m=>{"w"in m&&e(2,s=m.w),"h"in m&&e(3,r=m.h)},[o,_,s,r]}class bl extends cl{constructor(t){super(),ul(this,t,kl,yl,mt,{w:2,h:3})}}function Wt(l,t,e){const s=l.slice();return s[42]=t[e],s[44]=e,s}function qt(l,t,e){const s=l.slice();return s[42]=t[e],s[44]=e,s}function Gt(l,t,e){const s=l.slice();return s[45]=t[e],s[44]=e,s}function Jt(l,t,e){const s=l.slice();return s[45]=t[e],s[44]=e,s}function Kt(l,t,e){const s=l.slice();return s[49]=t[e],s[51]=e,s}function El(l){let t;return{c(){t=h("iconify-icon"),this.h()},l(e){t=d(e,"ICONIFY-ICON",{icon:!0}),v(t).forEach(f),this.h()},h(){re(t,"icon","ion:volume-high-sharp")},m(e,s){R(e,t,s)},d(e){e&&f(t)}}}function wl(l){let t;return{c(){t=h("iconify-icon"),this.h()},l(e){t=d(e,"ICONIFY-ICON",{icon:!0}),v(t).forEach(f),this.h()},h(){re(t,"icon","ion:volume-mute")},m(e,s){R(e,t,s)},d(e){e&&f(t)}}}function Qt(l){let t,e;return t=new bl({props:{w:l[13],h:l[14]}}),{c(){lt(t.$$.fragment)},l(s){st(t.$$.fragment,s)},m(s,r){ot(t,s,r),e=!0},p(s,r){const o={};r[0]&8192&&(o.w=s[13]),r[0]&16384&&(o.h=s[14]),t.$set(o)},i(s){e||(V(t.$$.fragment,s),e=!0)},o(s){Y(t.$$.fragment,s),e=!1},d(s){nt(t,s)}}}function Xt(l){let t,e;return t=new fl({props:{rounded:!0,noGravity:!0,amount:"100",duration:"800",size:"16",x:[-1,1],y:[-2,1],colorArray:["url(/blooddrop.png)"]}}),{c(){lt(t.$$.fragment)},l(s){st(t.$$.fragment,s)},m(s,r){ot(t,s,r),e=!0},i(s){e||(V(t.$$.fragment,s),e=!0)},o(s){Y(t.$$.fragment,s),e=!1},d(s){nt(t,s)}}}function Zt(l){let t,e,s;return{c(){t=h("span"),e=Q(l[4]),this.h()},l(r){t=d(r,"SPAN",{style:!0});var o=v(t);e=X(o,l[4]),o.forEach(f),this.h()},h(){A(t,"color","yellow")},m(r,o){R(r,t,o),n(t,e)},p(r,o){o[0]&16&&xe(e,r[4])},i(r){r&&(s||Ce(()=>{s=He(t,hl,{duration:2e3}),s.start()}))},o:oe,d(r){r&&f(t)}}}function xt(l){let t,e,s;return{c(){t=h("span"),e=Q(l[3]),this.h()},l(r){t=d(r,"SPAN",{style:!0});var o=v(t);e=X(o,l[3]),o.forEach(f),this.h()},h(){A(t,"color","yellow")},m(r,o){R(r,t,o),n(t,e)},p(r,o){o[0]&8&&xe(e,r[3])},i(r){r&&(s||Ce(()=>{s=He(t,hl,{duration:2e3}),s.start()}))},o:oe,d(r){r&&f(t)}}}function $t(l){let t,e;return t=new fl({props:{noGravity:!0,duration:"800",size:"15",x:[-.5,.5],y:[-.5,.5],colorArray:["#777777","#aaaaaa","#555555","#dddddd"]}}),{c(){lt(t.$$.fragment)},l(s){st(t.$$.fragment,s)},m(s,r){ot(t,s,r),e=!0},i(s){e||(V(t.$$.fragment,s),e=!0)},o(s){Y(t.$$.fragment,s),e=!1},d(s){nt(t,s)}}}function el(l){let t,e,s,r,o,_,i,c,m,u=l[45].destroy&&$t();function T(){return l[30](l[45])}return{c(){t=h("button"),e=h("iconify-icon"),r=D(),u&&u.c(),o=D(),this.h()},l(E){t=d(E,"BUTTON",{class:!0});var k=v(t);e=d(k,"ICONIFY-ICON",{icon:!0,class:!0}),v(e).forEach(f),r=N(k),u&&u.l(k),o=N(k),k.forEach(f),this.h()},h(){re(e,"icon",s=l[12][l[44]].image),re(e,"class","icon_item svelte-1lk7ge5"),t.disabled=_=rl(l[45]),g(t,"class","svelte-1lk7ge5"),$e(t,"comprato",l[45].buyed)},m(E,k){R(E,t,k),n(t,e),n(t,r),u&&u.m(t,null),n(t,o),i=!0,c||(m=ve(t,"click",T),c=!0)},p(E,k){l=E,(!i||k[0]&4096&&s!==(s=l[12][l[44]].image))&&re(e,"icon",s),l[45].destroy?u?k[0]&4096&&V(u,1):(u=$t(),u.c(),V(u,1),u.m(t,o)):u&&(Se(),Y(u,1,1,()=>{u=null}),Me()),(!i||k[0]&4096&&_!==(_=rl(l[45])))&&(t.disabled=_),(!i||k[0]&4096)&&$e(t,"comprato",l[45].buyed)},i(E){i||(V(u),i=!0)},o(E){Y(u),i=!1},d(E){E&&f(t),u&&u.d(),c=!1,m()}}}function Il(l){let t,e,s="Dungeon",r,o,_=pe(l[17]),i=[];for(let c=0;c<_.length;c+=1)i[c]=tl(qt(l,_,c));return{c(){t=h("div"),e=h("h1"),e.textContent=s,r=D();for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){t=d(c,"DIV",{class:!0});var m=v(t);e=d(m,"H1",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-1chhfi2"&&(e.textContent=s),r=N(m);for(let u=0;u<i.length;u+=1)i[u].l(m);m.forEach(f),this.h()},h(){g(e,"class","titlem2 svelte-1lk7ge5"),g(t,"class","dungeon svelte-1lk7ge5")},m(c,m){R(c,t,m),n(t,e),n(t,r);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(t,null)},p(c,m){if(m[0]&132096){_=pe(c[17]);let u;for(u=0;u<_.length;u+=1){const T=qt(c,_,u);i[u]?i[u].p(T,m):(i[u]=tl(T),i[u].c(),i[u].m(t,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=_.length}},i(c){c&&(o||Ce(()=>{o=He(t,Ve,{delay:200,duration:500}),o.start()}))},o:oe,d(c){c&&f(t),tt(i,c)}}}function Cl(l){let t,e="YOU DIED",s,r,o,_='<button class="back svelte-1lk7ge5">Return Home</button>';return{c(){t=h("div"),t.textContent=e,r=D(),o=h("a"),o.innerHTML=_,this.h()},l(i){t=d(i,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),he(t)!=="svelte-tlg8h1"&&(t.textContent=e),r=N(i),o=d(i,"A",{"data-sveltekit-preload-data":!0,href:!0,"data-svelte-h":!0}),he(o)!=="svelte-w2e32u"&&(o.innerHTML=_),this.h()},h(){g(t,"class","story svelte-1lk7ge5"),A(t,"text-align","center"),A(t,"ont-size","5rem"),A(t,"margin-top","8rem"),g(o,"data-sveltekit-preload-data","off"),g(o,"href","/")},m(i,c){R(i,t,c),R(i,r,c),R(i,o,c)},p:oe,i(i){i&&(s||Ce(()=>{s=He(t,Ve,{}),s.start()}))},o:oe,d(i){i&&(f(t),f(r),f(o))}}}function Dl(l){let t,e="Excape from fetid swamp with your money. You are alive and can live one day more",s,r,o,_='<button class="back svelte-1lk7ge5">Return Home</button>';return{c(){t=h("div"),t.textContent=e,r=D(),o=h("a"),o.innerHTML=_,this.h()},l(i){t=d(i,"DIV",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-17s4np4"&&(t.textContent=e),r=N(i),o=d(i,"A",{"data-sveltekit-preload-data":!0,href:!0,"data-svelte-h":!0}),he(o)!=="svelte-1poyg6s"&&(o.innerHTML=_),this.h()},h(){g(t,"class","story svelte-1lk7ge5"),g(o,"data-sveltekit-preload-data","off"),g(o,"href","/")},m(i,c){R(i,t,c),R(i,r,c),R(i,o,c)},p:oe,i(i){i&&(s||Ce(()=>{s=He(t,Ve,{}),s.start()}))},o:oe,d(i){i&&(f(t),f(r),f(o))}}}function Nl(l){let t,e,s;return{c(){t=h("div"),e=Q(l[16]),this.h()},l(r){t=d(r,"DIV",{class:!0});var o=v(t);e=X(o,l[16]),o.forEach(f),this.h()},h(){g(t,"class","story svelte-1lk7ge5")},m(r,o){R(r,t,o),n(t,e)},p:oe,i(r){r&&(s||Ce(()=>{s=He(t,Ve,{}),s.start()}))},o:oe,d(r){r&&f(t)}}}function Al(l){let t,e,s="Merchant",r,o,_=pe(l[12]),i=[];for(let c=0;c<_.length;c+=1)i[c]=ll(Gt(l,_,c));return{c(){t=h("div"),e=h("h1"),e.textContent=s,r=D();for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){t=d(c,"DIV",{class:!0});var m=v(t);e=d(m,"H1",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-l1einy"&&(e.textContent=s),r=N(m);for(let u=0;u<i.length;u+=1)i[u].l(m);m.forEach(f),this.h()},h(){g(e,"class","titlem2 svelte-1lk7ge5"),g(t,"class","mercato2 svelte-1lk7ge5")},m(c,m){R(c,t,m),n(t,e),n(t,r);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(t,null)},p(c,m){if(m[0]&36904){_=pe(c[12]);let u;for(u=0;u<_.length;u+=1){const T=Gt(c,_,u);i[u]?i[u].p(T,m):(i[u]=ll(T),i[u].c(),i[u].m(t,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=_.length}},i(c){c&&(o||Ce(()=>{o=He(t,Ve,{delay:200,duration:500}),o.start()}))},o:oe,d(c){c&&f(t),tt(i,c)}}}function Tl(l){let t,e;return t=new vl({props:{showEnemy:l[11],color:"yellow"}}),{c(){lt(t.$$.fragment)},l(s){st(t.$$.fragment,s)},m(s,r){ot(t,s,r),e=!0},p(s,r){const o={};r[0]&2048&&(o.showEnemy=s[11]),t.$set(o)},i(s){e||(V(t.$$.fragment,s),e=!0)},o(s){Y(t.$$.fragment,s),e=!1},d(s){nt(t,s)}}}function tl(l){let t,e,s,r,o,_=l[42].nome+"",i,c,m,u=l[42].hit+"",T,E,k,L=l[42].dmg+"",H,B,C,P=l[42].gld+"",G,y,J,Z;function x(){return l[33](l[42])}return{c(){t=h("button"),e=h("div"),s=h("iconify-icon"),r=D(),o=h("span"),i=Q(_),c=D(),m=h("span"),T=Q(u),E=D(),k=h("span"),H=Q(L),B=D(),C=h("span"),G=Q(P),y=D(),this.h()},l(S){t=d(S,"BUTTON",{class:!0});var O=v(t);e=d(O,"DIV",{class:!0});var I=v(e);s=d(I,"ICONIFY-ICON",{icon:!0,style:!0}),v(s).forEach(f),r=N(I),o=d(I,"SPAN",{class:!0,style:!0});var F=v(o);i=X(F,_),F.forEach(f),c=N(I),m=d(I,"SPAN",{class:!0});var $=v(m);T=X($,u),$.forEach(f),E=N(I),k=d(I,"SPAN",{class:!0});var W=v(k);H=X(W,L),W.forEach(f),B=N(I),C=d(I,"SPAN",{class:!0});var ne=v(C);G=X(ne,P),ne.forEach(f),I.forEach(f),y=N(O),O.forEach(f),this.h()},h(){re(s,"icon",l[42].image),A(s,"font-size","40px"),A(s,"color","white"),A(s,"background","black"),g(o,"class","nome svelte-1lk7ge5"),A(o,"width","150px"),g(m,"class","hit svelte-1lk7ge5"),g(k,"class","dmg svelte-1lk7ge5"),g(C,"class","gld svelte-1lk7ge5"),g(e,"class","c1 svelte-1lk7ge5"),g(t,"class","cont svelte-1lk7ge5"),$e(t,"myactive",l[10]==l[44]+1)},m(S,O){R(S,t,O),n(t,e),n(e,s),n(e,r),n(e,o),n(o,i),n(e,c),n(e,m),n(m,T),n(e,E),n(e,k),n(k,H),n(e,B),n(e,C),n(C,G),n(t,y),J||(Z=ve(t,"click",x),J=!0)},p(S,O){l=S,O[0]&1024&&$e(t,"myactive",l[10]==l[44]+1)},d(S){S&&f(t),J=!1,Z()}}}function ll(l){let t,e,s,r,o,_,i,c,m=l[45].nome+"",u,T,E,k=l[45].decsription+"",L,H,B,C=l[45].price+"",P,G,y,J,Z;function x(){return l[31](l[45])}return{c(){t=h("button"),e=h("div"),s=h("div"),r=h("iconify-icon"),_=D(),i=h("div"),c=h("span"),u=Q(m),T=D(),E=h("span"),L=Q(k),H=D(),B=h("span"),P=Q(C),G=D(),this.h()},l(S){t=d(S,"BUTTON",{class:!0});var O=v(t);e=d(O,"DIV",{class:!0});var I=v(e);s=d(I,"DIV",{style:!0});var F=v(s);r=d(F,"ICONIFY-ICON",{icon:!0,style:!0}),v(r).forEach(f),_=N(F),i=d(F,"DIV",{style:!0});var $=v(i);c=d($,"SPAN",{class:!0,style:!0});var W=v(c);u=X(W,m),W.forEach(f),T=N($),E=d($,"SPAN",{class:!0,style:!0});var ne=v(E);L=X(ne,k),ne.forEach(f),$.forEach(f),F.forEach(f),H=N(I),B=d(I,"SPAN",{class:!0});var De=v(B);P=X(De,C),De.forEach(f),I.forEach(f),G=N(O),O.forEach(f),this.h()},h(){re(r,"icon",o=l[45].image),A(r,"font-size","55px"),g(c,"class","nome svelte-1lk7ge5"),A(c,"width","150px"),A(c,"font-size","large"),g(E,"class","nome svelte-1lk7ge5"),A(E,"width","150px"),A(E,"font-size","x-small"),A(E,"color","gray"),A(i,"display","flex"),A(i,"flex-direction","column"),A(s,"display","flex"),g(B,"class","gld svelte-1lk7ge5"),g(e,"class","c1 svelte-1lk7ge5"),g(t,"class","cont svelte-1lk7ge5"),t.disabled=y=!(l[3]>=l[45].price&&!l[45].buyed&&l[15].Rest)},m(S,O){R(S,t,O),n(t,e),n(e,s),n(s,r),n(s,_),n(s,i),n(i,c),n(c,u),n(i,T),n(i,E),n(E,L),n(e,H),n(e,B),n(B,P),n(t,G),J||(Z=[ve(t,"click",function(){gl(l[45].effect)&&l[45].effect.apply(this,arguments)}),ve(t,"mouseenter",x),ve(t,"mouseleave",l[32])],J=!0)},p(S,O){l=S,O[0]&4096&&o!==(o=l[45].image)&&re(r,"icon",o),O[0]&4096&&m!==(m=l[45].nome+"")&&xe(u,m),O[0]&4096&&k!==(k=l[45].decsription+"")&&xe(L,k),O[0]&4096&&C!==(C=l[45].price+"")&&xe(P,C),O[0]&4104&&y!==(y=!(l[3]>=l[45].price&&!l[45].buyed&&l[15].Rest))&&(t.disabled=y)},d(S){S&&f(t),J=!1,al(Z)}}}function sl(l){let t,e,s;return e=new pl({props:{num:l[10]}}),{c(){t=h("div"),lt(e.$$.fragment)},l(r){t=d(r,"DIV",{});var o=v(t);st(e.$$.fragment,o),o.forEach(f)},m(r,o){R(r,t,o),ot(e,t,null),s=!0},p(r,o){const _={};o[0]&1024&&(_.num=r[10]),e.$set(_)},i(r){s||(V(e.$$.fragment,r),s=!0)},o(r){Y(e.$$.fragment,r),s=!1},d(r){r&&f(t),nt(e)}}}function ol(l){let t,e,s,r,o,_=l[42].nome+"",i,c,m,u=l[42].hit+"",T,E,k,L=l[42].dmg+"",H,B,C,P=l[42].gld+"",G,y,J,Z;function x(){return l[34](l[42])}return{c(){t=h("button"),e=h("div"),s=h("iconify-icon"),r=D(),o=h("span"),i=Q(_),c=D(),m=h("span"),T=Q(u),E=D(),k=h("span"),H=Q(L),B=D(),C=h("span"),G=Q(P),y=D(),this.h()},l(S){t=d(S,"BUTTON",{class:!0});var O=v(t);e=d(O,"DIV",{class:!0});var I=v(e);s=d(I,"ICONIFY-ICON",{icon:!0,style:!0}),v(s).forEach(f),r=N(I),o=d(I,"SPAN",{class:!0,style:!0});var F=v(o);i=X(F,_),F.forEach(f),c=N(I),m=d(I,"SPAN",{class:!0});var $=v(m);T=X($,u),$.forEach(f),E=N(I),k=d(I,"SPAN",{class:!0});var W=v(k);H=X(W,L),W.forEach(f),B=N(I),C=d(I,"SPAN",{class:!0});var ne=v(C);G=X(ne,P),ne.forEach(f),I.forEach(f),y=N(O),O.forEach(f),this.h()},h(){re(s,"icon",l[42].image),A(s,"font-size","40px"),A(s,"color","white"),A(s,"background","black"),g(o,"class","nome svelte-1lk7ge5"),A(o,"width","150px"),g(m,"class","hit svelte-1lk7ge5"),g(k,"class","dmg svelte-1lk7ge5"),g(C,"class","gld svelte-1lk7ge5"),g(e,"class","c1 svelte-1lk7ge5"),g(t,"class","cont svelte-1lk7ge5"),$e(t,"myactive",l[10]==l[44]+1)},m(S,O){R(S,t,O),n(t,e),n(e,s),n(e,r),n(e,o),n(o,i),n(e,c),n(e,m),n(m,T),n(e,E),n(e,k),n(k,H),n(e,B),n(e,C),n(C,G),n(t,y),J||(Z=ve(t,"click",x),J=!0)},p(S,O){l=S,O[0]&1024&&$e(t,"myactive",l[10]==l[44]+1)},d(S){S&&f(t),J=!1,Z()}}}function Pl(l){let t,e,s,r,o,_,i,c,m,u,T,E,k,L,H,B,C,P,G,y,J,Z,x,S,O,I,F,$,W,ne='<iconify-icon icon="game-icons:dungeon-gate"></iconify-icon>',De,Ke,Ne,rt='<div class="titolo svelte-1lk7ge5">FETID SWAMP</div>',et,Ae,me,ie,le,se,Qe,ye,ke,b=":",Ue,Pt=l[4],gt,ae,ze,Re,Ot=":",pt,Mt=l[3],it,Le,vt,yt,kt,Fe,bt,ee,te,Et,Ye,wt,be,at,ct,ce,ge,Be,St="Dungeon",It,Ct,Dt,Ee,Vt="Close",Te,je,Nt,Ht;function Ut(a,p){return a[1]?wl:El}let ut=Ut(l),we=ut(l),We=pe({length:20}),U=[];for(let a=0;a<We.length;a+=1)U[a]=Qt(Kt(l,We,a));const dl=a=>Y(U[a],1,1,()=>{U[a]=null});let q=l[0]&&Xt(),ue=Zt(l),fe=xt(l),qe=pe(l[12]),z=[];for(let a=0;a<qe.length;a+=1)z[a]=el(Jt(l,qe,a));const _l=a=>Y(z[a],1,1,()=>{z[a]=null}),zt=[Tl,Al,Nl,Dl,Cl,Il],Pe=[];function Rt(a,p){return a[11].nome.length>0?0:a[9]==a[15].Rest?1:a[9]==a[15].Story?2:a[9]==a[15].Win?3:a[9]==a[15].Lose?4:a[9]==a[15].Explore?5:-1}~(ee=Rt(l))&&(te=Pe[ee]=zt[ee](l));let j=l[10]>0&&sl(l),Xe=pe(l[17]),K=[];for(let a=0;a<Xe.length;a+=1)K[a]=ol(Wt(l,Xe,a));return{c(){t=h("div"),e=h("audio"),r=D(),o=h("audio"),i=D(),c=h("audio"),u=D(),T=h("audio"),k=D(),L=h("audio"),B=D(),C=h("audio"),G=D(),y=h("audio"),Z=D(),x=h("audio"),O=D(),I=h("div"),F=h("button"),we.c(),$=D(),W=h("button"),W.innerHTML=ne,De=D();for(let a=0;a<U.length;a+=1)U[a].c();Ke=D(),Ne=h("nav"),Ne.innerHTML=rt,et=D(),Ae=h("div"),me=h("div"),ie=h("div"),le=h("div"),se=h("div"),q&&q.c(),Qe=D(),ye=h("iconify-icon"),ke=h("span"),ke.textContent=b,Ue=D(),ue.c(),gt=D(),ae=h("div"),ze=h("iconify-icon"),Re=h("span"),Re.textContent=Ot,pt=D(),fe.c(),it=D(),Le=h("span"),vt=Q("/"),yt=Q(Tt),kt=D(),Fe=h("div");for(let a=0;a<z.length;a+=1)z[a].c();bt=D(),te&&te.c(),Et=D(),Ye=h("div"),j&&j.c(),wt=D(),be=h("button"),at=Q(l[6]),ct=D(),ce=h("dialog"),ge=h("div"),Be=h("h1"),Be.textContent=St,It=D();for(let a=0;a<K.length;a+=1)K[a].c();Dt=D(),Ee=h("button"),Ee.textContent=Vt,this.h()},l(a){t=d(a,"DIV",{class:!0});var p=v(t);e=d(p,"AUDIO",{src:!0,class:!0}),v(e).forEach(f),r=N(p),o=d(p,"AUDIO",{src:!0,class:!0}),v(o).forEach(f),i=N(p),c=d(p,"AUDIO",{src:!0,class:!0}),v(c).forEach(f),u=N(p),T=d(p,"AUDIO",{src:!0,class:!0}),v(T).forEach(f),k=N(p),L=d(p,"AUDIO",{src:!0,class:!0}),v(L).forEach(f),B=N(p),C=d(p,"AUDIO",{src:!0,class:!0}),v(C).forEach(f),G=N(p),y=d(p,"AUDIO",{src:!0,class:!0}),v(y).forEach(f),Z=N(p),x=d(p,"AUDIO",{src:!0,class:!0}),v(x).forEach(f),O=N(p),I=d(p,"DIV",{class:!0});var M=v(I);F=d(M,"BUTTON",{class:!0});var w=v(F);we.l(w),w.forEach(f),$=N(M),W=d(M,"BUTTON",{class:!0,"data-svelte-h":!0}),he(W)!=="svelte-1sem2s7"&&(W.innerHTML=ne),De=N(M);for(let _e=0;_e<U.length;_e+=1)U[_e].l(M);Ke=N(M),Ne=d(M,"NAV",{"data-svelte-h":!0}),he(Ne)!=="svelte-9uwn55"&&(Ne.innerHTML=rt),et=N(M),Ae=d(M,"DIV",{class:!0});var de=v(Ae);me=d(de,"DIV",{class:!0});var ft=v(me);ie=d(ft,"DIV",{});var Ze=v(ie);le=d(Ze,"DIV",{style:!0});var ht=v(le);se=d(ht,"DIV",{class:!0});var Ge=v(se);q&&q.l(Ge),Qe=N(Ge),ye=d(Ge,"ICONIFY-ICON",{class:!0,icon:!0,style:!0}),v(ye).forEach(f),ke=d(Ge,"SPAN",{style:!0,"data-svelte-h":!0}),he(ke)!=="svelte-jy0d69"&&(ke.textContent=b),Ue=N(Ge),ue.l(Ge),Ge.forEach(f),gt=N(ht),ae=d(ht,"DIV",{class:!0});var Je=v(ae);ze=d(Je,"ICONIFY-ICON",{class:!0,icon:!0,style:!0}),v(ze).forEach(f),Re=d(Je,"SPAN",{style:!0,"data-svelte-h":!0}),he(Re)!=="svelte-jy0d69"&&(Re.textContent=Ot),pt=N(Je),fe.l(Je),it=N(Je),Le=d(Je,"SPAN",{style:!0});var At=v(Le);vt=X(At,"/"),yt=X(At,Tt),At.forEach(f),Je.forEach(f),ht.forEach(f),kt=N(Ze),Fe=d(Ze,"DIV",{class:!0});var Lt=v(Fe);for(let _e=0;_e<z.length;_e+=1)z[_e].l(Lt);Lt.forEach(f),bt=N(Ze),te&&te.l(Ze),Ze.forEach(f),Et=N(ft),Ye=d(ft,"DIV",{class:!0});var Ft=v(Ye);j&&j.l(Ft),Ft.forEach(f),ft.forEach(f),de.forEach(f),wt=N(M),be=d(M,"BUTTON",{class:!0});var Yt=v(be);at=X(Yt,l[6]),Yt.forEach(f),M.forEach(f),p.forEach(f),ct=N(a),ce=d(a,"DIALOG",{class:!0});var dt=v(ce);ge=d(dt,"DIV",{class:!0});var _t=v(ge);Be=d(_t,"H1",{class:!0,"data-svelte-h":!0}),he(Be)!=="svelte-1chhfi2"&&(Be.textContent=St),It=N(_t);for(let _e=0;_e<K.length;_e+=1)K[_e].l(_t);_t.forEach(f),Dt=N(dt),Ee=d(dt,"BUTTON",{style:!0,"data-svelte-h":!0}),he(Ee)!=="svelte-e5qpax"&&(Ee.textContent=Vt),dt.forEach(f),this.h()},h(){Oe(e.src,s="/audio/dice.wav")||g(e,"src",s),g(e,"class","svelte-1lk7ge5"),Oe(o.src,_="/audio/hurt.wav")||g(o,"src",_),g(o,"class","svelte-1lk7ge5"),Oe(c.src,m="/audio/coin.wav")||g(c,"src",m),g(c,"class","svelte-1lk7ge5"),Oe(T.src,E="/audio/heartbeat.wav")||g(T,"src",E),g(T,"class","svelte-1lk7ge5"),Oe(L.src,H="/audio/monster.wav")||g(L,"src",H),g(L,"class","svelte-1lk7ge5"),Oe(C.src,P="/audio/carmack.mp3")||g(C,"src",P),g(C,"class","svelte-1lk7ge5"),Oe(y.src,J="/audio/crush.wav")||g(y,"src",J),g(y,"class","svelte-1lk7ge5"),Oe(x.src,S="/audio/rockslide.wav")||g(x,"src",S),g(x,"class","svelte-1lk7ge5"),g(F,"class","audio svelte-1lk7ge5"),g(W,"class","sm svelte-1lk7ge5"),re(ye,"class","cuore svelte-1lk7ge5"),re(ye,"icon","noto:anatomical-heart"),A(ye,"font-size","40px"),A(ke,"color","yellow"),g(se,"class","dati_info svelte-1lk7ge5"),re(ze,"class","moneta"),re(ze,"icon","twemoji:coin"),A(ze,"font-size","40px"),A(Re,"color","yellow"),A(Le,"color","yellow"),g(ae,"class","dati_info svelte-1lk7ge5"),A(le,"font-size","60px"),A(le,"text-align","center"),A(le,"margin","0px"),A(le,"font-wigth","900"),A(le,"display","flex"),A(le,"justify-content","space-around"),g(Fe,"class","azioni svelte-1lk7ge5"),g(Ye,"class","campo svelte-1lk7ge5"),g(me,"class","arena svelte-1lk7ge5"),g(Ae,"class","body svelte-1lk7ge5"),g(be,"class","next-action svelte-1lk7ge5"),be.disabled=l[7],g(I,"class","area svelte-1lk7ge5"),g(t,"class","newhtml svelte-1lk7ge5"),g(Be,"class","titlem2 svelte-1lk7ge5"),g(ge,"class","dungeon svelte-1lk7ge5"),A(Ee,"width","100%"),A(Ee,"font-size","2rem"),g(ce,"class","svelte-1lk7ge5")},m(a,p){R(a,t,p),n(t,e),l[22](e),n(t,r),n(t,o),l[23](o),n(t,i),n(t,c),l[24](c),n(t,u),n(t,T),l[25](T),n(t,k),n(t,L),l[26](L),n(t,B),n(t,C),l[27](C),n(t,G),n(t,y),l[28](y),n(t,Z),n(t,x),l[29](x),n(t,O),n(t,I),n(I,F),we.m(F,null),n(I,$),n(I,W),n(I,De);for(let M=0;M<U.length;M+=1)U[M]&&U[M].m(I,null);n(I,Ke),n(I,Ne),n(I,et),n(I,Ae),n(Ae,me),n(me,ie),n(ie,le),n(le,se),q&&q.m(se,null),n(se,Qe),n(se,ye),n(se,ke),n(se,Ue),ue.m(se,null),n(le,gt),n(le,ae),n(ae,ze),n(ae,Re),n(ae,pt),fe.m(ae,null),n(ae,it),n(ae,Le),n(Le,vt),n(Le,yt),n(ie,kt),n(ie,Fe);for(let M=0;M<z.length;M+=1)z[M]&&z[M].m(Fe,null);n(ie,bt),~ee&&Pe[ee].m(ie,null),n(me,Et),n(me,Ye),j&&j.m(Ye,null),n(I,wt),n(I,be),n(be,at),R(a,ct,p),R(a,ce,p),n(ce,ge),n(ge,Be),n(ge,It);for(let M=0;M<K.length;M+=1)K[M]&&K[M].m(ge,null);n(ce,Dt),n(ce,Ee),l[35](ce),je=!0,Nt||(Ht=[ve(F,"click",l[19]),ve(W,"click",l[20]),ve(be,"click",l[18]),ve(Ee,"click",l[21])],Nt=!0)},p(a,p){if(ut!==(ut=Ut(a))&&(we.d(1),we=ut(a),we&&(we.c(),we.m(F,null))),p[0]&24576){We=pe({length:20});let w;for(w=0;w<We.length;w+=1){const de=Kt(a,We,w);U[w]?(U[w].p(de,p),V(U[w],1)):(U[w]=Qt(de),U[w].c(),V(U[w],1),U[w].m(I,Ke))}for(Se(),w=We.length;w<U.length;w+=1)dl(w);Me()}if(a[0]?q?p[0]&1&&V(q,1):(q=Xt(),q.c(),V(q,1),q.m(se,Qe)):q&&(Se(),Y(q,1,1,()=>{q=null}),Me()),p[0]&16&&mt(Pt,Pt=a[4])?(Se(),Y(ue,1,1,oe),Me(),ue=Zt(a),ue.c(),V(ue,1),ue.m(se,null)):ue.p(a,p),p[0]&8&&mt(Mt,Mt=a[3])?(Se(),Y(fe,1,1,oe),Me(),fe=xt(a),fe.c(),V(fe,1),fe.m(ae,it)):fe.p(a,p),p[0]&4096){qe=pe(a[12]);let w;for(w=0;w<qe.length;w+=1){const de=Jt(a,qe,w);z[w]?(z[w].p(de,p),V(z[w],1)):(z[w]=el(de),z[w].c(),V(z[w],1),z[w].m(Fe,null))}for(Se(),w=qe.length;w<z.length;w+=1)_l(w);Me()}let M=ee;if(ee=Rt(a),ee===M?~ee&&Pe[ee].p(a,p):(te&&(Se(),Y(Pe[M],1,1,()=>{Pe[M]=null}),Me()),~ee?(te=Pe[ee],te?te.p(a,p):(te=Pe[ee]=zt[ee](a),te.c()),V(te,1),te.m(ie,null)):te=null),a[10]>0?j?(j.p(a,p),p[0]&1024&&V(j,1)):(j=sl(a),j.c(),V(j,1),j.m(Ye,null)):j&&(Se(),Y(j,1,1,()=>{j=null}),Me()),(!je||p[0]&64)&&xe(at,a[6]),(!je||p[0]&128)&&(be.disabled=a[7]),p[0]&132096){Xe=pe(a[17]);let w;for(w=0;w<Xe.length;w+=1){const de=Wt(a,Xe,w);K[w]?K[w].p(de,p):(K[w]=ol(de),K[w].c(),K[w].m(ge,null))}for(;w<K.length;w+=1)K[w].d(1);K.length=Xe.length}},i(a){if(!je){for(let p=0;p<We.length;p+=1)V(U[p]);V(q),V(ue),V(fe);for(let p=0;p<qe.length;p+=1)V(z[p]);V(te),V(j),a&&(Ct||Ce(()=>{Ct=He(ge,Ve,{delay:200,duration:500}),Ct.start()})),a&&Ce(()=>{je&&(Te||(Te=Bt(ce,Ve,{},!0)),Te.run(1))}),je=!0}},o(a){U=U.filter(Boolean);for(let p=0;p<U.length;p+=1)Y(U[p]);Y(q),Y(ue),Y(fe),z=z.filter(Boolean);for(let p=0;p<z.length;p+=1)Y(z[p]);Y(te),Y(j),a&&(Te||(Te=Bt(ce,Ve,{},!1)),Te.run(0)),je=!1},d(a){a&&(f(t),f(ct),f(ce)),l[22](null),l[23](null),l[24](null),l[25](null),l[26](null),l[27](null),l[28](null),l[29](null),we.d(),tt(U,a),q&&q.d(),ue.d(a),fe.d(a),tt(z,a),~ee&&Pe[ee].d(),j&&j.d(),tt(K,a),l[35](null),a&&Te&&Te.end(),Nt=!1,al(Ht)}}}let Tt=18,nl=15;function rl(l){return!(l.buyed&&l.condition())}function Ol(l,t,e){let s=!1,r=!1,o={dice:null,hurt:null,coin:null,heart:null,monster:null,soundtruck:null,crush:null},_=0,i=15,c="",m="Enter",u=!1,T;const E={Story:"Story",Rest:"Rest",Explore:"Explore",Precombat:"Precombat",Damage:"Damage",Win:"Win",Lose:"Lose"};let k=E.Story,L="You are visiting the Putrid Swamps, a hostile place, where your equipment is always at risk. When you lose a figth you lose the most expensive item of your equipment. ",H=0,B={Story:async()=>{e(6,m="Explore"),e(9,k=E.Rest)},Rest:async()=>{e(9,k=E.Explore),await S(),e(2,o.monster.volume=.1,o),o.monster.play(),e(11,P={...G[H-1]}),e(6,m="Fight"),e(9,k=E.Precombat)},Precombat:async()=>{e(10,H=-1),P.type==C.Creature&&await S(),e(6,m="Damage"),e(9,k=E.Damage)},Damage:async()=>{if(P.hit>H){let b=y[5].buyed?P.dmg-1:P.dmg;await I(),e(2,o.hurt.volume=.3,o),o.hurt.play(),e(0,s=!0),e(4,i=i-b),e(11,P.type=C.Trap,P)&&e(3,_=_+P.gld<0?0:_+P.gld),await new Promise(Ue=>setTimeout(Ue,1200))}else e(3,_=_+P.gld<0?0:_+P.gld),o.coin.play(),await new Promise(b=>setTimeout(b,600));e(11,P={nome:"",hit:0,image:"",dmg:0,gld:0,type:C.None}),e(10,H=0),e(0,s=!1),e(6,m="Explore"),e(9,k=E.Rest),_>=Tt?(e(6,m="Return Home"),e(9,k=E.Win),e(7,u=!0)):i<=0&&(e(6,m="You Died"),e(9,k=E.Lose),e(7,u=!0))}};const C={None:"None",Trap:"Trap",Creature:"Creature"};let P={nome:"",hit:0,image:"",dmg:0,gld:0,type:C.None},G=[{nome:"Acid Trap",image:"game-icons:acid",hit:0,dmg:2,gld:-4,type:C.Trap,action:[]},{nome:"Croaker",image:"game-icons:croc-jaws",hit:2,dmg:3,gld:0,type:C.Creature,action:[]},{nome:"snakefolk",image:"game-icons:snake-tongue",hit:3,dmg:3,gld:4,type:C.Creature,action:[]},{nome:"Slime",image:"game-icons:acid-blob",hit:4,dmg:1,gld:4,type:C.Creature,action:[]},{nome:"Shaman",image:"game-icons:tribal-mask",hit:4,dmg:3,gld:6,type:C.Creature,action:[]},{nome:"Hydra",image:"game-icons:hydra",hit:5,dmg:8,gld:12,type:C.Creature,action:[]}],y=[{nome:"Rope",image:"game-icons:rope-coil",price:2,condition:()=>P.type==C.Trap&&k==E.Precombat,effect:()=>{e(3,_=_-2),e(12,y[0].buyed=!0,y)},using:()=>{e(12,y[0].buyed=!1,y),e(11,P={nome:"",hit:0,image:"",dmg:0,gld:0,type:C.None}),e(10,H=0),e(0,s=!1),e(6,m="Explore"),e(9,k=E.Rest)},buyed:!1,decsription:"Avoid trap, once",destroy:!1},{nome:"Caltrop",image:"game-icons:caltrops",price:2,condition:()=>P.type==C.Creature&&k==E.Precombat,effect:()=>{e(3,_=_-2),e(12,y[1].buyed=!0,y)},using:()=>{e(12,y[1].buyed=!1,y),e(11,P={nome:"",hit:0,image:"",dmg:0,gld:0,type:C.None}),e(10,H=0),e(0,s=!1),e(6,m="Explore"),e(9,k=E.Rest)},buyed:!1,decsription:"Flee foe once",destroy:!1},{nome:"Shiled",image:"solar:shield-bold-duotone",price:3,condition:()=>k==E.Damage&&P.type==C.Creature,effect:()=>{e(3,_=_-3),e(12,y[2].buyed=!0,y)},using:()=>{e(12,y[2].buyed=!1,y),e(11,P={nome:"",hit:0,image:"",dmg:0,gld:0,type:C.None}),e(10,H=0),e(0,s=!1),e(6,m="Explore"),e(9,k=E.Rest)},buyed:!1,decsription:"Avoid damage once",destroy:!1},{nome:"Potion",image:"game-icons:health-potion",price:4,condition:()=>E.Rest,effect:()=>{e(3,_=_-4),e(12,y[3].buyed=!0,y)},using:()=>{e(4,i=i+6>nl?nl:i+6),e(12,y[3].buyed=!1,y)},buyed:!1,decsription:"Healt D6 HP",destroy:!1},{nome:"Sword",image:"vaadin:sword",price:5,condition:()=>!0,effect:()=>{e(3,_=_-5),e(12,y[4].buyed=!0,y)},using:()=>{},buyed:!1,decsription:"+1 to defeat foe",destroy:!1},{nome:"Armor",image:"game-icons:armor-vest",price:10,condition:()=>!0,effect:()=>{e(3,_=_-10),e(12,y[5].buyed=!0,y)},using:()=>{},buyed:!1,decsription:"-1 DMG",destroy:!1}],J=0,Z=0;il(()=>{e(13,J=window.innerWidth),e(14,Z=window.innerHeight),console.log(J),console.log(Z)}),ml(()=>{o.soundtruck?.pause()});async function x(){o.soundtruck?.loop==!1&&(e(2,o.soundtruck.loop=!0,o),e(2,o.soundtruck.volume=.03,o),o.soundtruck.play()),e(7,u=!0),await B[k](),O(),e(7,u=!1)}async function S(){e(10,H=0),await new Promise(b=>setTimeout(b,400)),e(10,H=Math.floor(Math.random()*6)+1),await new Promise(b=>setTimeout(b,1600))}function O(){e(12,y=[...y])}async function I(){for(let b=y.length-1;b>=0;b--)if(y[b].buyed){e(12,y[b].buyed=!1,y),e(12,y[b].destroy=!0,y),e(12,y=[...y]),e(2,o.crush.volume=.6,o),o.crush?.play(),await new Promise(Ue=>setTimeout(Ue,800)),e(12,y[b].destroy=!1,y);break}}function F(){e(1,r=!r),r?e(2,o.soundtruck.volume=0,o):e(2,o.soundtruck.volume=.03,o)}function $(){T.showModal()}function W(){T.close()}function ne(b){Ie[b?"unshift":"push"](()=>{o.dice=b,e(2,o)})}function De(b){Ie[b?"unshift":"push"](()=>{o.hurt=b,e(2,o)})}function Ke(b){Ie[b?"unshift":"push"](()=>{o.coin=b,e(2,o)})}function Ne(b){Ie[b?"unshift":"push"](()=>{o.heart=b,e(2,o)})}function rt(b){Ie[b?"unshift":"push"](()=>{o.monster=b,e(2,o)})}function et(b){Ie[b?"unshift":"push"](()=>{o.soundtruck=b,e(2,o)})}function Ae(b){Ie[b?"unshift":"push"](()=>{o.crush=b,e(2,o)})}function me(b){Ie[b?"unshift":"push"](()=>{o.rockslide=b,e(2,o)})}const ie=b=>{b.using()},le=b=>{e(5,c=b.decsription)},se=()=>{e(5,c="")},Qe=b=>{},ye=b=>{};function ke(b){Ie[b?"unshift":"push"](()=>{T=b,e(8,T)})}return[s,r,o,_,i,c,m,u,T,k,H,P,y,J,Z,E,L,G,x,F,$,W,ne,De,Ke,Ne,rt,et,Ae,me,ie,le,se,Qe,ye,ke]}class Hl extends cl{constructor(t){super(),ul(this,t,Ol,Pl,mt,{},null,[-1,-1])}}export{Hl as component};
