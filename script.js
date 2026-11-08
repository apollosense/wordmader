var $=function(i){return document.getElementById(i)},c=$('c'),x=c.getContext('2d'),og=null,bwc=null,cur=null,dlx=null,tok=0,db=null,sel=null,tc=null,fc={}
var W={s:[1080,1080],t:[1080,1350],w:[1440,960]},P={x:0,y:0,s:1},T={x:0,y:0},top='t',CW=1080,CH=1080
var L=["nothing teaches a man about life more than his own mistakes","remember:\nin chess you can still win even after losing your queen","a negative mind will never give you a positive life","how i felt after saying 'good night' knowing damn well i won't be sleepin' anytime soon","i like people who appreciate my weird personality","i hate when people think im sad or mad just because i stop talking. i just dont have the energy to speak","how it feels having a mature mind but still act like a child","how it feels to say \"idk\" to stuff you actually know but explaining takes effort","i gotta stop talking to myself, that mf is a bad influence","i have 3 personalities:\n1. i don't talk at all\n2. i talk too much\n3. i talk to myself","i can't explain my music type, it's just every song except the ones i don't like","\"what's your taste in music?\"\nidk i just listen to whatever i like","do i love sleeping? yes\ndo i get enough sleep like a normal human being? no","i've never been talented, i'm just not good at giving up","i will never change my personality to make someone love me\nloving me is your choice and hating me is your decision","i didnt lose, i just let them win this time","im not lazy im just on energy saving mode","silence is my love language","they said be yourself so i stayed in bed","i dont overthink. i just think a normal amount, 400 times","i talk to myself because i need expert advice"]
var SN=["ok","done","fine.","there u go","peak","wow ur so deep","cinema","ok philosopher","the wall grows"]
function m(t){$('msg').textContent=t}
function sn(){return SN[Math.random()*SN.length|0]}

function mk(i){var k=Math.min(1,2400/Math.max(i.width,i.height)),w=Math.round(i.width*k),h=Math.round(i.height*k)
og=document.createElement('canvas');og.width=w;og.height=h;var o=og.getContext('2d');o.imageSmoothingQuality='high';o.drawImage(i,0,0,w,h)
bwc=document.createElement('canvas');bwc.width=w;bwc.height=h;var g=bwc.getContext('2d');g.drawImage(og,0,0)
try{var d=g.getImageData(0,0,w,h),p=d.data;for(var j=0;j<p.length;j+=4){var v=p[j]*.299+p[j+1]*.587+p[j+2]*.114;v=(v-128)*1.35+128;v=v<0?0:v>255?255:v;p[j]=p[j+1]=p[j+2]=v}g.putImageData(d,0,0)}catch(z){}
fc={};lay(1);$('dt').textContent='got it. tap to swap pic';qp()}
function ldu(u,cb){var i=new Image();i.onload=function(){mk(i);cb&&cb()};i.onerror=function(){m('pic is broken or smth')};i.src=u}
function ld(fl){if(!fl||!/^image/.test(fl.type)){m('thats not a pic bro');return}var u=URL.createObjectURL(fl);sel=null;rc();ldu(u,function(){URL.revokeObjectURL(u);m(sn())})}

function fade(src){var k=($('bw').checked?'b':'o')+($('fe').checked?1:0);if(fc[k])return fc[k];if(!$('fe').checked)return fc[k]=src
var w=src.width,h=src.height,f=document.createElement('canvas');f.width=w;f.height=h;var g=f.getContext('2d');g.drawImage(src,0,0);g.globalCompositeOperation='destination-out'
var e=Math.min(w,h)*.14,gr
gr=g.createLinearGradient(0,0,e,0);gr.addColorStop(0,'#000');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,e,h)
gr=g.createLinearGradient(w,0,w-e,0);gr.addColorStop(0,'#000');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(w-e,0,e,h)
gr=g.createLinearGradient(0,0,0,e);gr.addColorStop(0,'#000');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,w,e)
gr=g.createLinearGradient(0,h,0,h-e);gr.addColorStop(0,'#000');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,h-e,w,e)
return fc[k]=f}

function wr(g,t,mw){var o=[];String(t).split('\n').forEach(function(pp){var ws=pp.split(/\s+/),l='';ws.forEach(function(q){if(!q)return;var tt=l?l+' '+q:q;if(g.measureText(tt).width>mw&&l){o.push(l);l=q}else l=tt});o.push(l)});return o}

function lay(onlyPic){var s=W[$('sh').value];CW=s[0];CH=s[1];var sd=$('sd').value,src=og
var ib=sd=='r'?[0,0,CW*.54,CH]:sd=='l'?[CW*.46,0,CW*.54,CH]:[0,CH*.38,CW,CH*.62]
if(src){var mg=CW*.03,k=Math.min((ib[2]-mg*2)/src.width,(ib[3]-mg*2)/src.height);P.s=k;P.x=ib[0]+ib[2]/2;P.y=ib[1]+ib[3]-src.height*k/2;$('zm').value=100}
if(onlyPic)return
var tb=sd=='r'?[CW*.54,0,CW*.46,CH]:sd=='l'?[0,0,CW*.46,CH]:[0,0,CW,CH*.38];T.x=tb[0]+tb[2]/2;T.y=tb[1]+tb[3]/2;$('tw').value=Math.round(tb[2]/CW*84)}

function tl(){var my=++tok,cr=+$('cr').value,f=1/(1+cr*.45),k=CW/720,mwf=CW*$('tw').value/100,fz=+$('sz').value*k*f
var fn=$('fn').value.split(',').map(function(q){return /\s/.test(q)?'"'+q+'"':q}).join(','),bo=$('bo').checked?'700 ':'400 '
var g0=document.createElement('canvas').getContext('2d');g0.font=bo+fz+'px '+fn;var ls=wr(g0,$('tx').value,mwf*f),lh=fz*1.08,tw=0
ls.forEach(function(l){tw=Math.max(tw,g0.measureText(l).width)});tw=Math.ceil(tw+fz*.6);var th=Math.ceil(ls.length*lh+fz*.5)
var s=document.createElement('canvas');s.width=Math.max(4,tw);s.height=Math.max(4,th);var g=s.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,s.width,s.height);g.font=bo+fz+'px '+fn;g.fillStyle='#000';g.textAlign='center';g.textBaseline='middle'
ls.forEach(function(l,i){g.fillText(l,s.width/2,fz*.25+lh/2+i*lh)})
var u=document.createElement('canvas');u.width=Math.round(s.width/f);u.height=Math.round(s.height/f);var ux=u.getContext('2d');ux.imageSmoothingEnabled=cr<5;ux.drawImage(s,0,0,u.width,u.height)
var im=new Image();im.onload=function(){if(my!=tok)return;var o=document.createElement('canvas');o.width=u.width;o.height=u.height;var ox2=o.getContext('2d');ox2.drawImage(im,0,0)
try{var d=ox2.getImageData(0,0,o.width,o.height),p=d.data;for(var j=0;j<p.length;j+=4){var v=p[j]*.299+p[j+1]*.587+p[j+2]*.114;p[j+3]=v>232?0:Math.min(255,(232-v)*1.1);p[j]=p[j+1]=p[j+2]=0}ox2.putImageData(d,0,0)}catch(z){}
tc=o;qp()};im.src=u.toDataURL('image/jpeg',Math.max(.03,.7-cr*.068))}

function pb(){var src=og;if(!src)return null;var k=P.s*$('zm').value/100,w=src.width*k,h=src.height*k;return[P.x-w/2,P.y-h/2,w,h]}
function tbx(){if(!tc)return null;return[T.x-tc.width/2,T.y-tc.height/2,tc.width,tc.height]}
function dp(){var b=pb();if(b){var src=fade($('bw').checked?bwc:og);x.save();x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.globalCompositeOperation='multiply';if($('fl').checked){x.translate(b[0]+b[2],b[1]);x.scale(-1,1);x.drawImage(src,0,0,b[2],b[3])}else x.drawImage(src,b[0],b[1],b[2],b[3]);x.restore()}
else{x.save();x.fillStyle='#999';x.font=CW/27+'px Arial';x.textAlign='center';x.textBaseline='middle';x.fillText('no pic lol',CW*.27,CH/2);x.restore()}}
function dt(){var b=tbx();if(!b)return;x.save();x.imageSmoothingEnabled=false;x.drawImage(tc,b[0],b[1]);x.restore()}
function qp(){if(c.width!=CW)c.width=CW;if(c.height!=CH)c.height=CH;x.fillStyle='#fff';x.fillRect(0,0,CW,CH);if(top=='t'){dp();dt()}else{dt();dp()}}
var dt0;function dd(){clearTimeout(dt0);dt0=setTimeout(tl,40)}

var pts={},d0=null,grab=null
function cp(e){var r=c.getBoundingClientRect();return{x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height}}
function inb(p,b){return b&&p.x>=b[0]&&p.x<=b[0]+b[2]&&p.y>=b[1]&&p.y<=b[1]+b[3]}
function hit(p){var a=top=='t'?['t','p']:['p','t'];for(var i=0;i<2;i++){if(a[i]=='t'&&inb(p,tbx()))return't';if(a[i]=='p'&&inb(p,pb()))return'p'}return null}
c.addEventListener('pointerdown',function(e){var p=cp(e);if(!Object.keys(pts).length){grab=hit(p);if(!grab)return;top=grab;qp()}c.setPointerCapture(e.pointerId);pts[e.pointerId]=p;c.classList.add('dg');d0=null})
c.addEventListener('pointermove',function(e){if(!pts[e.pointerId]||!grab)return;var p=cp(e),ks=Object.keys(pts),o=grab=='t'?T:P
if(ks.length==1){o.x+=p.x-pts[e.pointerId].x;o.y+=p.y-pts[e.pointerId].y;pts[e.pointerId]=p;qp();return}
pts[e.pointerId]=p;var a=pts[ks[0]],b2=pts[ks[1]],dd2=Math.hypot(a.x-b2.x,a.y-b2.y)
if(d0){if(grab=='p'){$('zm').value=Math.max(20,Math.min(400,+$('zm').value*dd2/d0));qp()}else{$('sz').value=Math.max(20,Math.min(110,+$('sz').value*dd2/d0));dd()}}d0=dd2})
function up(e){delete pts[e.pointerId];d0=null;if(!Object.keys(pts).length){c.classList.remove('dg');grab=null}}
c.addEventListener('pointerup',up);c.addEventListener('pointercancel',up)
c.addEventListener('wheel',function(e){var g=hit(cp(e));if(!g)return;e.preventDefault();var f=e.deltaY<0?1.06:.94;if(g=='p'){$('zm').value=Math.max(20,Math.min(400,+$('zm').value*f));qp()}else{$('sz').value=Math.max(20,Math.min(110,+$('sz').value*f));dd()}},{passive:false})

function gw(){try{return JSON.parse(localStorage.getItem('memeslop_wall')||'[]')}catch(z){return[]}}
function sw(a){try{localStorage.setItem('memeslop_wall',JSON.stringify(a));return true}catch(z){return false}}
function rw(){var a=gw(),wl=$('wall');wl.innerHTML='';if(!a.length){wl.innerHTML='<p class=no>nothing here. make something</p>';return}
a.slice().reverse().forEach(function(u,i){var n=a.length-1-i,im=document.createElement('img');im.src=u;im.onclick=function(){op(n)};wl.appendChild(im)})}
function op(i){var a=gw();cur=i;$('ovi').src=a[i];$('ov').classList.add('on');$('cf').classList.remove('on');$('ovbt').style.display=''}
function cl(){$('ov').classList.remove('on');cur=null}

var mem=[]
function odb(cb){try{var r=indexedDB.open('memeslop',1);r.onupgradeneeded=function(){r.result.createObjectStore('ch',{keyPath:'id',autoIncrement:true})};r.onsuccess=function(){db=r.result;cb()};r.onerror=function(){cb()}}catch(z){cb()}}
function gch(cb){if(!db){cb(mem);return}try{var o=[],q=db.transaction('ch').objectStore('ch').openCursor();q.onsuccess=function(){var k=q.result;if(k){o.push(k.value);k.continue()}else cb(o)};q.onerror=function(){cb(mem)}}catch(z){cb(mem)}}
function ach(bl,cb){if(!db){mem.push({id:Date.now(),b:bl});cb();return}try{var t=db.transaction('ch','readwrite');t.objectStore('ch').add({b:bl});t.oncomplete=cb;t.onerror=function(){mem.push({id:Date.now(),b:bl});cb()}}catch(z){mem.push({id:Date.now(),b:bl});cb()}}
function dch(id,cb){mem=mem.filter(function(q){return q.id!=id});if(!db){cb();return}try{var t=db.transaction('ch','readwrite');t.objectStore('ch').delete(id);t.oncomplete=cb}catch(z){cb()}}
function rc(){gch(function(a){var l=$('chl');l.innerHTML=''
for(var n=1;n<=49;n++)(function(n){var d=document.createElement('div'),im=document.createElement('img'),u='chars/'+n+'.jpg';d.className='ch'+(sel=='p'+n?' on':'');im.src=u
d.onclick=function(){sel='p'+n;ldu(u,function(){m('character loaded')});[].forEach.call(l.children,function(z){z.classList.remove('on')});d.classList.add('on')};d.appendChild(im);l.appendChild(d)})(n)
a.forEach(function(q){var d=document.createElement('div'),im=document.createElement('img'),u=URL.createObjectURL(q.b),xx=document.createElement('i');d.className='ch'+(sel==q.id?' on':'');im.src=u;xx.textContent='×'
d.onclick=function(){sel=q.id;ldu(u,function(){m('character loaded')});[].forEach.call(l.children,function(z){z.classList.remove('on')});d.classList.add('on')}
xx.onclick=function(e){e.stopPropagation();dch(q.id,function(){if(sel==q.id)sel=null;rc();m('character deleted')})}
d.appendChild(im);d.appendChild(xx);l.appendChild(d)})})}
$('chs').onclick=function(){if(!og){m('upload a pic first');return}og.toBlob(function(bl){if(!bl){m('couldnt save that');return}ach(bl,function(){rc();m('saved as character')})},'image/jpeg',.92)}

function dtb(u){var p=u.split(','),bs=atob(p[1]),n=bs.length,ab=new Uint8Array(n);while(n--)ab[n]=bs.charCodeAt(n);return new Blob([ab],{type:/jpeg/.test(p[0])?'image/jpeg':'image/png'})}
function sv(u,nm){if(dlx){dlx.save({filename:nm,data:dtb(u)}).then(function(){m('saved')}).catch(function(e){if(e&&e.code=='declined')m('ok dont save it then');else fb(u,nm)});return}fb(u,nm)}
function fb(u,nm){try{var a=document.createElement('a');a.href=u;a.download=nm;document.body.appendChild(a);a.click();a.remove();m('downloading. if not, hold the pic')}catch(z){m('cant download here, hold the pic')}
if(cur===null){$('ovi').src=u;$('ov').classList.add('on');$('ovbt').style.display='none'}}

$('f').onchange=function(){ld(this.files[0]);this.value=''}
var dpz=$('drop');['dragover','dragenter'].forEach(function(e){dpz.addEventListener(e,function(v){v.preventDefault();dpz.classList.add('on')})})
dpz.addEventListener('dragleave',function(){dpz.classList.remove('on')})
dpz.addEventListener('drop',function(v){v.preventDefault();dpz.classList.remove('on');ld(v.dataTransfer.files[0])})
document.addEventListener('paste',function(e){var it=(e.clipboardData||{}).items||[];for(var i=0;i<it.length;i++)if(/^image/.test(it[i].type)){ld(it[i].getAsFile());e.preventDefault();break}})
;['tx','fn','sz','bo','cr','tw'].forEach(function(i){$(i).addEventListener('input',dd);$(i).addEventListener('change',dd)})
;['bw','fl','zm','fe'].forEach(function(i){$(i).addEventListener('input',qp);$(i).addEventListener('change',qp)})
;['sh','sd'].forEach(function(i){$(i).addEventListener('change',function(){lay();tl()})})
$('rs').onclick=function(){lay();tl();m('back to normal')}
$('rnd').onclick=function(){var t;do{t=L[Math.random()*L.length|0]}while(t==$('tx').value&&L.length>1);$('tx').value=t;tl()}
$('mk').onclick=function(){var t=document.createElement('canvas'),k=Math.min(1,720/c.width);t.width=c.width*k;t.height=c.height*k;var g=t.getContext('2d');g.imageSmoothingQuality='high';g.drawImage(c,0,0,t.width,t.height)
var a=gw();a.push(t.toDataURL('image/jpeg',.85));while(a.length>20)a.shift()
if(!sw(a)){a.shift();a.shift();if(!sw(a)){m('wall is full or ur browser hates me');return}}
rw();m(sn())}
$('dl').onclick=function(){cur=null;sv(c.toDataURL('image/png'),'wordmader_'+Date.now()%100000+'.png')}
$('ovx').onclick=cl;$('ov').onclick=function(e){if(e.target==this)cl()}
$('ovd').onclick=function(){var u=$('ovi').src;sv(u,'wordmader_'+Date.now()%100000+(u.indexOf('image/jpeg')>-1?'.jpg':'.png'))}
$('ovr').onclick=function(){if(cur===null){cl();return}$('cfb').innerHTML='<button class=b id=cy>yes delete</button><button class="b alt" id=cn>no keep</button>';$('cf').classList.add('on');$('ovbt').style.display='none'
$('cy').onclick=function(){var a=gw();a.splice(cur,1);sw(a);cl();rw();m('gone')}
$('cn').onclick=function(){$('cf').classList.remove('on');$('ovbt').style.display=''}}

if(window.claude&&claude.use)claude.use('downloads').then(function(d){dlx=d}).catch(function(){})
sel='p1';lay();tl();rw();odb(rc);ldu('chars/1.jpg',function(){m('drag the pic or the text. they can overlap')})
