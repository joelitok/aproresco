(this.webpackJsonpaproresco=this.webpackJsonpaproresco||[]).push([[35],{154:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return a}));var c="https://meet.appui.io:8443",a={GRANT_TYPE:"client_credentials",CLIENT_ID:"1095225836707-p73rgbikb2dbniu8pjdgso14slpir3nf.apps.googleusercontent.com",CLIENT_SECRET:"QBkD6wvItNsLttKtucXjWV1V"}},155:function(t,n,e){"use strict";e.d(n,"F",(function(){return r})),e.d(n,"E",(function(){return u})),e.d(n,"x",(function(){return i})),e.d(n,"L",(function(){return s})),e.d(n,"z",(function(){return l})),e.d(n,"y",(function(){return f})),e.d(n,"w",(function(){return d})),e.d(n,"G",(function(){return h})),e.d(n,"K",(function(){return g})),e.d(n,"B",(function(){return b})),e.d(n,"D",(function(){return p})),e.d(n,"r",(function(){return m})),e.d(n,"p",(function(){return j})),e.d(n,"q",(function(){return O})),e.d(n,"s",(function(){return S})),e.d(n,"t",(function(){return v})),e.d(n,"A",(function(){return D})),e.d(n,"v",(function(){return I})),e.d(n,"C",(function(){return N})),e.d(n,"i",(function(){return x})),e.d(n,"c",(function(){return y})),e.d(n,"b",(function(){return C})),e.d(n,"d",(function(){return k})),e.d(n,"m",(function(){return E})),e.d(n,"u",(function(){return T})),e.d(n,"n",(function(){return A})),e.d(n,"h",(function(){return z})),e.d(n,"j",(function(){return M})),e.d(n,"k",(function(){return w})),e.d(n,"g",(function(){return J})),e.d(n,"e",(function(){return P})),e.d(n,"f",(function(){return F})),e.d(n,"O",(function(){return L})),e.d(n,"M",(function(){return B})),e.d(n,"N",(function(){return q})),e.d(n,"J",(function(){return H})),e.d(n,"I",(function(){return _})),e.d(n,"a",(function(){return R})),e.d(n,"P",(function(){return U})),e.d(n,"o",(function(){return G})),e.d(n,"l",(function(){return V})),e.d(n,"H",(function(){return Y}));var c=e(59),a=e.n(c),o=e(154),r=(btoa(o.a.CLIENT_ID+":"+o.a.CLIENT_SECRET),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"availabilityId";return a.a.get("".concat(o.b,"/search/student-bookings?").concat(n,"=").concat(t)).then((function(t){return console.log(t.data),t.data})).catch((function(t){}))}),u=function(t,n,e,c,r,u){return a.a.get("".concat(o.b,"/search/student-bookings?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(e,"&size=").concat(c,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},i=function(t,n,e,c,r,u){return a.a.get("".concat(o.b,"/search/student-parents?page=").concat(e,"&size=").concat(c,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},s=function(t){return a.a.get("".concat(o.b,"/tenant-profile/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},l=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/schedules?gradeMin=").concat(t,"&gradeMax=").concat(n,"&startDate=").concat(e,"&endDate=").concat(c,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},f=function(t){JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id));return a.a.get("".concat(o.b,"/search/schedules?gradeMin=",0,"&gradeMax=",100,"&page=").concat(0,"&size=").concat(100,"&sort=").concat("startDate",",").concat("asc")).then((function(t){return t.data}))},d=function(){return a.a.get("http://ip-api.com/json").then((function(t){return t.data}))},h=function(t,n,e,c,r,u){return a.a.get("".concat(o.b,"/search/student-profiles?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(e,"&size=").concat(c,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},g=function(t,n,e,c,r,u){return a.a.get("".concat(o.b,"/search/teacher-profiles?startDate=").concat(t,"&endDate=").concat(n,"page=").concat(e,"&size=").concat(c,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},b=function(t,n,e,c,r,u,i){return a.a.get("".concat(o.b,"/search/customer-messages?category=").concat(t,"&startDate=").concat(n,"&endDate=").concat(e,"&page=").concat(c,"&size=").concat(r,"&sort=").concat(u,",").concat(i||"asc")).then((function(t){return t.data})).catch((function(t){}))},p=function(t){return a.a.get("".concat(o.b,"/student-bookings/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},m=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/student-bookings?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(e,"&page=").concat(c,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},j=function(t,n,e,c,r,u,i){return a.a.get("".concat(o.b,"/search/student-parents?email=").concat(t,"&page=").concat(c,"&size=").concat(r,"&sort=").concat(u,",").concat(i||"asc")).then((function(t){return t.data})).catch((function(t){}))},O=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/schedules?gradeMin=").concat(t,"&gradeMax=").concat(n,"&startDate=").concat(e,"&endDate=").concat(c,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},S=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/student-profiles?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(e,"&page=").concat(c,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},v=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/teacher-profiles?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(e,"&page=").concat(c,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},D=function(t,n,e,c,r,u,i,s){return a.a.get("".concat(o.b,"/search/customer-messages?category=").concat(t,"&firstName=").concat(n,"&startDate=").concat(e,"&endDate=").concat(c,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},I=function(t){return a.a.get("".concat(o.b,"/search/student-profiles?parentId=").concat(t)).then((function(t){return t.data}))},N=function(t,n,e,c,r){return a.a.get("".concat(o.b,"/search/customer-message-templates?category=").concat(t,"&page=").concat(n,"&size=").concat(e)).then((function(t){return t.data})).catch((function(t){}))},x=function(t){return a.a.get("".concat(o.b,"/student-bookings/disable/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},y=function(t,n){var e=[];n.split(",").forEach((function(t){var n={};n.id=t,e.push(n)}));var c={studentBookings:e};return a.a.patch("".concat(o.b,"/teacher-availability/").concat(t),c).then((function(t){return t.data})).catch((function(t){}))},C=function(t,n){var e={teacherProfile:{conferenceUrl:n}};return a.a.patch("".concat(o.b,"/teacher-availability/").concat(t),e).then((function(t){return t.data})).catch((function(t){}))},k=function(t){return a.a.get("".concat(o.b,"/bridge?open=").concat(t)).then((function(t){return t.data})).catch((function(t){}))},E=function(t,n){return a.a.get("".concat(o.b,"/student-bookings/update/").concat(t,"?subject=").concat(n)).then((function(t){return t})).catch((function(t){}))},T=function(t){return a.a.get("".concat(o.b,"/student-booking/").concat(t)).then((function(t){return t})).catch((function(t){}))},A=function(t,n,e){return a.a.get("".concat(o.b,"/teachers_availabilities/update/").concat(t,"?subjects=").concat(n,"&grades=").concat(e)).then((function(t){return t})).catch((function(t){}))},z=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},M=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},w=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},J=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/student-parent?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},P=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/teacher-availability?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},F=function(t){var n=t.split(","),e="";return n.forEach((function(t,c){c==n.length-1?e+="id="+t:e+="id="+t+"&"})),a.a.delete("".concat(o.b,"/student-booking?").concat(e)).then((function(t){return t})).catch((function(t){return console.log(t)}))},L=function(t){return a.a.post("".concat(o.b,"/message\u200b/").concat(t,"/students")).then((function(t){return t})).catch((function(t){return console.log(t)}))},B=function(t){return a.a.post("".concat(o.b,"/message/").concat(t,"/bookings")).then((function(t){return t})).catch((function(t){return console.log(t)}))},q=function(t,n){return a.a.post("".concat(o.b,"/message/booking/").concat(t),n,{headers:{"Content-Length":0,"Content-Type":"text/plain"},responseType:"text"}).then((function(t){return t})).catch((function(t){return console.log(t)}))},H=function(t,n,e,c){return a.a.get("".concat(o.b,"/search/tags?page=").concat(t,"&size=").concat(n,"&sort=").concat(e,",").concat(c||"asc")).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},_=function(t){return a.a.get("".concat(o.b,"/search/tags?name=").concat(t)).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},R=function(t){return a.a.post("".concat(o.b,"/tag"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},U=function(t,n){return a.a.patch("".concat(o.b,"/tag/").concat(t),n).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},G=function(t){return a.a.post("".concat(o.b,"/tag/enable"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},V=function(t){return a.a.post("".concat(o.b,"/tag/disable"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},Y=function(t,n,e,c,r,u){return a.a.get("".concat(o.b,"/search/tags?page=").concat(t,"&size=").concat(n,"&sort=").concat(e,",").concat(c,"&name=").concat(r,"&createDate=").concat(u)).then((function(t){return t.data})).catch((function(t){return console.log(t)}))}},160:function(t,n,e){"use strict";e.d(n,"r",(function(){return u})),e.d(n,"p",(function(){return i})),e.d(n,"q",(function(){return s})),e.d(n,"t",(function(){return l})),e.d(n,"n",(function(){return f})),e.d(n,"l",(function(){return d})),e.d(n,"j",(function(){return h})),e.d(n,"s",(function(){return g})),e.d(n,"m",(function(){return b})),e.d(n,"k",(function(){return p})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return j})),e.d(n,"B",(function(){return O})),e.d(n,"h",(function(){return S})),e.d(n,"C",(function(){return v})),e.d(n,"E",(function(){return D})),e.d(n,"i",(function(){return I})),e.d(n,"d",(function(){return N})),e.d(n,"z",(function(){return x})),e.d(n,"a",(function(){return y})),e.d(n,"D",(function(){return C})),e.d(n,"c",(function(){return k})),e.d(n,"y",(function(){return E})),e.d(n,"b",(function(){return T})),e.d(n,"x",(function(){return A})),e.d(n,"f",(function(){return z})),e.d(n,"A",(function(){return M})),e.d(n,"e",(function(){return w})),e.d(n,"v",(function(){return J})),e.d(n,"u",(function(){return P})),e.d(n,"w",(function(){return F}));var c=e(8),a=e(59),o=e.n(a),r=e(154),u=function(t,n){var e=JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id)),c={roles:["supervisor"],tenant:{key:e}};return n?o.a.post("".concat(r.b,"/teacher-profile/").concat(t,"/roles"),c).then((function(t){return t.data})):o.a.delete("".concat(r.b,"/teacher-profile/").concat(t,"/tenant/").concat(e,"/role/supervisor")).then((function(t){return t.data}))},i=function(t,n){var e=JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id)),c={roles:["admin"],tenant:{key:e}};return n?o.a.post("".concat(r.b,"/teacher-profile/").concat(t,"/roles"),c).then((function(t){return t.data})):o.a.delete("".concat(r.b,"/teacher-profile/").concat(t,"/tenant/").concat(e,"/role/admin")).then((function(t){return t.data}))},s=function(t,n){var e={tenants:[{tenant:{key:JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id))}}]};return n?o.a.post("".concat(r.b,"/teacher-profile/").concat(t,"/approval"),e).then((function(t){return t.data})):o.a.delete("".concat(r.b,"/teacher-profile/").concat(t,"/approval"),e).then((function(t){return t.data}))},l=function(t){var n={key:t},e=JSON.parse(localStorage.getItem("id"));return o.a.post("".concat(r.b,"/teacher-profile/").concat(e,"/tenant"),n).then((function(t){return t.data}))},f=function(t,n,e,c,a,u){return o.a.get("".concat(r.b,"/search/tenant-profiles?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(e,"&size=").concat(c,"&sort=").concat(a,",").concat(u||"asc")).then((function(t){return t.data}))},d=function(t,n,e,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"firstName",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"asc";if(null==t||null==n){var i=new Date;i.setDate(i.getDate()-1);var s=i.getDate()<10?"0"+i.getDate():i.getDate(),l=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,f=i.getFullYear(),d=i.getHours().toString().padStart(2,"0"),h=i.getMinutes().toString().padStart(2,"0");null!=localStorage.getItem("startDate")&&null!=localStorage.getItem("toStart")||(localStorage.setItem("startDate",f+"-"+l+"-"+s),localStorage.setItem("toStart",l+"%2F"+s+"%2F"+f+"%20"+d+":"+h+":00 -0500"),t=l+"%2F"+s+"%2F"+f+"%20"+d+":"+h+":00 -0500"),null==localStorage.getItem("startTime")&&localStorage.setItem("startTime",i.getHours().toString().padStart(2,"0")+":"+i.getMinutes().toString().padStart(2,"0")),(i=new Date).setDate(i.getDate()+1),s=i.getDate()<10?"0"+i.getDate():i.getDate(),l=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,f=i.getFullYear(),d=i.getHours().toString().padStart(2,"0"),h=i.getMinutes().toString().padStart(2,"0"),null!=localStorage.getItem("endDate")&&null!=localStorage.getItem("toEnd")||(localStorage.setItem("endDate",f+"-"+l+"-"+s),localStorage.setItem("toEnd",l+"%2F"+s+"%2F"+f+"%20"+d+":"+h+":00 -0500"),n=l+"%2F"+s+"%2F"+f+"%20"+d+":"+h+":00 -0500"),null==localStorage.getItem("endTime")&&localStorage.setItem("endTime",i.getHours().toString().padStart(2,"0")+":"+i.getMinutes().toString().padStart(2,"0"))}return o.a.get("".concat(r.b,"/search/teacher-availabilities?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(e,"&size=").concat(c,"&sort=").concat(a,",").concat(u||"asc"),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"GET, POST, OPTIONS, DELETE, PATCH","Access-Control-Allow-Credentials":"true"}}).then((function(t){return t.data})).catch((function(t){}))},h=function(t){return o.a.get("".concat(r.b,"/teacher-availabilities/disable/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},g=function(t,n){return o.a.get("".concat(r.b,"/teacher-availabilities/update/").concat(t,"?present=").concat(n)).then((function(t){return t.data})).catch((function(t){}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t=null==t?JSON.parse(localStorage.getItem("email")):t,o.a.get("".concat(r.b,"/teacher-profile/email/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},p=function(t,n,e,c,a,u,i,s){return o.a.get("".concat(r.b,"/search/teacher-availabilities?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(e,"&page=").concat(c,"&size=").concat(a,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc"),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"GET, POST, OPTIONS, DELETE, PATCH","Access-Control-Allow-Credentials":"true"}}).then((function(t){return t.data}))},m=function(t){var n=new FormData;n.append("token",t),n.append("provider","google");var e={token:t,provider:"google"};return o.a.post("".concat(r.b,"/oauth/verify"),e).then((function(t){localStorage.setItem("token",JSON.stringify(t.data));var n=new Date;return n.setDate(n.getDate()+30),localStorage.setItem("expireAt",n),t}))},j=function(t){return o.a.post("".concat(r.b,"/schedule"),t).then((function(t){return t})).catch((function(t){return console.log(t)}))},O=function(t,n){return o.a.patch("".concat(r.b,"/schedule/").concat(t),n).then((function(t){return t})).catch((function(t){return console.log(t)}))},S=function(t,n,e,c,a,u,i,s){var l={firstName:t,lastName:n,email:e,schoolName:c,schoolBoard:a,grade:u,parent:{email:i},tags:s};return o.a.post("".concat(r.b,"/student-profile"),l).then((function(t){return t})).catch((function(t){return console.log(t)}))},v=function(t,n,e,c,a,u,i,s,l){var f={firstName:n,lastName:e,email:c,schoolName:a,schoolBoard:u,grade:i,parent:{email:s},tags:l};return o.a.patch("".concat(r.b,"/student-profile/").concat(t),f).then((function(t){return t})).catch((function(t){return console.log(t)}))},D=function(t,n,e,c,a,u,i,s){var l={conferenceUrlPrefix:e,displayName:n,key:t,staticWelcomeUrl:i,videoServerUrl:u,maxTeacherPerSupervisor:c,primaryContact:s,supportUrl:a};return o.a.patch("".concat(r.b,"/tenant-profile/").concat(t),l).then((function(t){return t})).catch((function(t){return console.log(t)}))},I=function(t,n,e,c,a,u,i,s,l,f){var d={firstName:t,lastName:n,externalEmail:e,schoolName:c,schoolBoard:a,grades:u,phoneNumber:s,subjects:i,tags:l,tenants:f};return o.a.post("".concat(r.b,"/teacher-profile/register"),d).then((function(t){return t})).catch((function(t){return console.log(t)}))},N=function(t,n){var e={content:n,commenter:{id:JSON.parse(localStorage.getItem("user")).id},tenant:{key:JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id))}};return o.a.post("".concat(r.b,"/student-booking/").concat(t,"/teacher-comment"),e).then((function(t){return t})).catch((function(t){return console.log(t)}))},x=function(t,n){var e={content:n};return o.a.patch("".concat(r.b,"/teacher-comment/").concat(t),e).then((function(t){return t})).catch((function(t){return console.log(t)}))},y=function(t){var n=Object(c.a)(Object(c.a)({},t),{},{approver:{id:JSON.parse(localStorage.getItem("user")).id}});return o.a.post("".concat(r.b,"/teacher-comment/").concat(t.id,"/approval"),n).then((function(t){return t})).catch((function(t){return console.log(t)}))},C=function(t,n,e,c,a,u,i,s,l,f){var d={firstName:n,lastName:e,schoolName:s,schoolBoard:l,externalEmail:c,grades:a,phoneNumber:i,subjects:u,tags:f};return o.a.patch("".concat(r.b,"/teacher-profile/update/").concat(t),d).then((function(t){return t})).catch((function(t){return console.log(t)}))},k=function(t,n,e){var c={studentProfile:t,schedule:n,studentComment:e};return o.a.post("".concat(r.b,"/student-booking"),c).then((function(t){return t})).catch((function(t){return console.log(t)}))},E=function(t,n,e,c){var a={studentProfile:n,schedule:e,studentComment:c};return o.a.patch("".concat(r.b,"/student-booking/").concat(t),a).then((function(t){return t})).catch((function(t){return console.log(t)}))},T=function(t,n){var e={teacherProfile:t,schedule:n};return o.a.post("".concat(r.b,"/teacher-availability"),e).then((function(t){return t})).catch((function(t){return console.log(t)}))},A=function(t,n,e){var c={teacherProfile:n,schedule:e};return o.a.patch("".concat(r.b,"/teacher-availability/").concat(t),c).then((function(t){return t})).catch((function(t){return console.log(t)}))},z=function(t,n,e,c,a){var u={phoneNumber:e,countryCode:c,firstName:t,lastName:n,email:a,tenants:[{key:JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id))}]};return o.a.post("".concat(r.b,"/student-parent"),u).then((function(t){return t})).catch((function(t){return console.log(t)}))},M=function(t,n,e,c,a,u){var i={phoneNumber:c,countryCode:a,firstName:n,lastName:e,email:u};return o.a.patch("".concat(r.b,"/student-parent/").concat(t),i).then((function(t){return t})).catch((function(t){return console.log(t)}))},w=function(t,n,e,c,a,u,i,s){var l="StudentProfile"==t?"reminder/students":"reminder/teachers";return o.a.get("".concat(r.b,"/").concat(l,"?message=").concat(c,"&subject=").concat(a,"&firstName=").concat(s,"&async=").concat(u,"&saveAstemplate=").concat(i)).then((function(t){return t})).catch((function(t){return console.log(t)}))},J=function(t){return o.a.post("".concat(r.b,"/message\u200b/").concat(t,"/teachers")).then((function(t){return t})).catch((function(t){return console.log(t)}))},P=function(t){return o.a.post("".concat(r.b,"/message/").concat(t,"/availabilities")).then((function(t){return t})).catch((function(t){return console.log(t)}))},F=function(t,n){return o.a.put("".concat(r.b,"/teacher-availability/").concat(t,"/assistants"),n).then((function(t){return t})).catch((function(t){return console.log(t)}))}},164:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c=e(44),a=e(74),o=e(8),r=(e(104),e(11)),u=(e(164),e(544)),i=e(545),s=e(546),l=e(168),f=e(212),d=e(0),h=e.n(d),g=e(160),b=e(155),p=e(278),m=e(279),j=e(277),O=e(449),S=e.n(O),v=e(2),D=function(t,n){return Object(o.a)(Object(o.a)({},t),{},Object(a.a)({},n.name,n.value))};n.default=function(t){var n=Object(r.g)(),e=t.match.params,a=Object(d.useState)(!1),O=Object(c.a)(a,2),I=O[0],N=O[1],x=Object(d.useState)(!1),y=Object(c.a)(x,2),C=y[0],k=y[1],E=Object(d.useState)(null),T=Object(c.a)(E,2),A=T[0],z=T[1],M=Object(d.useState)(null),w=Object(c.a)(M,2),J=w[0],P=(w[1],Object(d.useState)(null)),F=Object(c.a)(P,2),L=F[0],B=(F[1],Object(d.useState)(!1)),q=Object(c.a)(B,2),H=q[0],_=q[1],R=Object(d.useState)(!1),U=Object(c.a)(R,2),G=(U[0],U[1]),V=Object(d.useState)(!1),Y=Object(c.a)(V,2),K=(Y[0],Y[1]),W=Object(d.useState)(!1),Q=Object(c.a)(W,2),X=Q[0],Z=(Q[1],Object(d.useState)(null)),$=Object(c.a)(Z,2),tt=$[0],nt=$[1],et=Object(d.useState)(""),ct=Object(c.a)(et,2),at=ct[0],ot=ct[1],rt=Object(d.useReducer)(D,{}),ut=Object(c.a)(rt,2),it=(ut[0],ut[1],Object(d.useState)([])),st=Object(c.a)(it,2),lt=st[0],ft=st[1],dt=Object(d.useState)(null),ht=Object(c.a)(dt,2),gt=ht[0],bt=ht[1],pt=u.a.useForm(),mt=Object(c.a)(pt,1)[0],jt=Object(d.useState)(!1),Ot=Object(c.a)(jt,2),St=Ot[0],vt=Ot[1];Object(d.useEffect)((function(){It()}),[]);var Dt=function(){null!=gt&&null!=tt&&null!=A?(vt(!0),Object(g.e)(e.id,J,L,tt,A,X,H,at).then((function(t){n.push("/short-messages/".concat(e.id))})).catch((function(t){alert("Error occured when saving data, please retry!"),console.log(t)})).finally((function(){return vt(!1)}))):alert("Fill the form")},It=function(){k(!0),Object(b.C)(e.id,0,100,"firstName","asc").then((function(t){t&&t.content&&ft(t.content)})).finally((function(){return k(!1)}))};return Object(v.jsx)("div",{children:Object(v.jsx)(i.a,{ghost:!1,title:Object(v.jsx)("p",{style:{fontSize:"3em",textAlign:"center",marginTop:"20px",marginBottom:"20px"},children:"Create Message"}),extra:[],children:Object(v.jsxs)(u.a,{form:mt,autoComplete:"off",onFinish:Dt,layout:"vertical",style:{width:"80%",marginLeft:"10%"},children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(v.jsx)(u.a.Item,{label:"Message Template",required:!0,style:{flex:1,marginRight:"10px"},children:Object(v.jsx)(m.a,{id:"asynchronous-search",options:lt,size:"small",inputValue:gt,onInputChange:function(t,n){bt(n)},onChange:function(t,n){var e;bt(e=n),z(e.subject),nt(e.body)},open:I,onOpen:function(){N(!0)},onClose:function(){N(!1)},loading:C,getOptionLabel:function(t){return t.name},renderInput:function(t){return Object(v.jsx)(p.a,Object(o.a)(Object(o.a)({},t),{},{variant:"outlined",InputProps:Object(o.a)(Object(o.a)({},t.InputProps),{},{endAdornment:Object(v.jsxs)(h.a.Fragment,{children:[C?Object(v.jsx)(j.a,{color:"inherit",size:20}):null,t.InputProps.endAdornment]})})}))}})}),Object(v.jsx)(u.a.Item,{label:"Subject",required:!0,style:{flex:1,marginLeft:"10px"},children:Object(v.jsx)(s.a,{type:"text",name:"subject",value:A,onChange:function(t){return z(t.target.value)}})})]}),Object(v.jsx)(u.a.Item,{label:"Name",required:!0,style:{flex:1,marginLeft:"10px"},children:Object(v.jsx)(s.a,{type:"text",name:"name",value:at,onChange:function(t){return ot(t.target.value)}})}),Object(v.jsx)(u.a.Item,{label:"Body",required:!0,children:Object(v.jsx)(S.a,{type:"text",name:"body",value:tt,onChange:function(t){return nt(t.target.value)}})}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[Object(v.jsx)(u.a.Item,{label:"Save as template",required:!0,children:Object(v.jsx)(l.a,{onChange:function(t){return _(t.target.checked)}})}),Object(v.jsx)(u.a.Item,{label:"send as SMS",required:!0,children:Object(v.jsx)(l.a,{onChange:function(t){return G(t.target.checked)}})}),Object(v.jsx)(u.a.Item,{label:"send as Email",required:!0,children:Object(v.jsx)(l.a,{onChange:function(t){return K(t.target.checked)}})})]}),Object(v.jsx)(u.a.Item,{children:Object(v.jsx)(f.a,{onClick:function(){return Dt},disabled:St,type:"primary",size:"large",htmlType:"submit",children:St?"Loading...":"Create a Message"})})]})})})}}}]);
//# sourceMappingURL=35.c319a60f.chunk.js.map