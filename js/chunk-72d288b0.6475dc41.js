(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d288b0"],{1148:function(t,e,i){"use strict";var n=i("a691"),s=i("577e"),r=i("1d80");t.exports=function(t){var e=s(r(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},"115b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card",class:t.item.class},[i("a",{attrs:{href:t.item.url,target:t.item.target,rel:"noreferrer"}},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[t.item.logo?i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:t.item.logo,alt:t.item.name+" logo"}})])]):t._e(),t.item.icon?i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("i",{class:["fa-fw",t.item.icon],staticStyle:{"font-size":"35px"}})])]):t._e(),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"subtitle is-6"},[t.item.subtitle?[t._v(" "+t._s(t.item.subtitle)+" ")]:t.stats?[t._v(" "+t._s(t.percentage)+"% blocked ")]:t._e()],2)]),i("div",{staticClass:"status",class:t.protection},[t._v(" "+t._s(t.protection)+" ")])]),t.item.tag?i("div",{staticClass:"tag",class:t.item.tagstyle},[i("strong",{staticClass:"tag-text"},[t._v("#"+t._s(t.item.tag))])]):t._e()])])])])},s=[],r=i("1da1"),a=(i("96cf"),i("b680"),i("d3b7"),{name:"AdGuardHome",props:{item:Object},data:function(){return{status:null,stats:null}},computed:{percentage:function(){return this.stats?(100*this.stats.num_blocked_filtering/this.stats.num_dns_queries).toFixed(2):""},protection:function(){return this.status?this.status.protection_enabled?"enabled":"disabled":"unknown"}},created:function(){this.fetchStatus(),this.item.subtitle||this.fetchStats()},methods:{fetchStatus:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.item.url,"/control/status"),{credentials:"include"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}));case 2:this.status=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchStats:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.item.url,"/control/stats"),{credentials:"include"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}));case 2:this.stats=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),c=a,o=(i("a84c"),i("2877")),u=Object(o["a"])(c,n,s,!1,null,"4c1b556c",null);e["default"]=u.exports},3881:function(t,e,i){},"408a":function(t,e){var i=1..valueOf;t.exports=function(t){return i.call(t)}},a84c:function(t,e,i){"use strict";i("3881")},b680:function(t,e,i){"use strict";var n=i("23e7"),s=i("a691"),r=i("408a"),a=i("1148"),c=i("d039"),o=1..toFixed,u=Math.floor,l=function(t,e,i){return 0===e?i:e%2===1?l(t,e-1,i*t):l(t*t,e/2,i)},f=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},d=function(t,e,i){var n=-1,s=i;while(++n<6)s+=e*t[n],t[n]=s%1e7,s=u(s/1e7)},h=function(t,e){var i=6,n=0;while(--i>=0)n+=t[i],t[i]=u(n/e),n=n%e*1e7},m=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var n=String(t[e]);i=""===i?n:i+a.call("0",7-n.length)+n}return i},g=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));n({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,i,n,c,o=r(this),u=s(t),g=[0,0,0,0,0,0],p="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(p="-",o=-o),o>1e-21)if(e=f(o*l(2,69,1))-69,i=e<0?o*l(2,-e,1):o/l(2,e,1),i*=4503599627370496,e=52-e,e>0){d(g,0,i),n=u;while(n>=7)d(g,1e7,0),n-=7;d(g,l(10,n,1),0),n=e-1;while(n>=23)h(g,1<<23),n-=23;h(g,1<<n),d(g,1,1),h(g,2),v=m(g)}else d(g,0,i),d(g,1<<-e,0),v=m(g)+a.call("0",u);return u>0?(c=v.length,v=p+(c<=u?"0."+a.call("0",u-c)+v:v.slice(0,c-u)+"."+v.slice(c-u))):v=p+v,v}})}}]);
//# sourceMappingURL=chunk-72d288b0.6475dc41.js.map