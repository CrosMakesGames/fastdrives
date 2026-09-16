var Rn=Object.defineProperty;var Un=(s,e,t)=>e in s?Rn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var q=(s,e,t)=>(Un(s,typeof e!="symbol"?e+"":e,t),t);import{f as js,s as Ke,n as ve,h as At,i as zr,r as at,c as Ce,o as nt,b as St,j as On,k as Ci,l as Vn}from"./scheduler.05185c5f.js";import{S as Xe,i as Qe,g as _,s as k,e as De,h as b,j as C,f as g,c as I,y as W,k as f,l as ae,a as P,x as c,z as F,A as bt,m as ee,n as te,B as R,o as be,H as qr,C as Fr,d as j,t as ie,r as Ne,u as xe,v as Re,w as Ue,p as qe,b as Fe,D as Ys,E as Wl,F as ei,G as Vs,I as Hs,J as Gr,K as Br}from"./index.2e86b85f.js";import{V as mi,E as Hn,O as fs,G as Be,a as ne,A as hs,I as Le,M as rt,L as jl,T as Je,b as qt,S as Ar,D as zn,c as $i,d as Di,e as qn,l as Ft,f as Et,g as Es,h as Oi,C as As,i as Js,n as Yl,j as Wr,N as Fn,k as Gn,m as Bn,o as jr,p as pi,q as Wt,r as Kl,B as Yr,F as es,s as Wn,t as Xl,P as jn,R as Io,u as Yn,v as Kn,W as Xn,w as Qn,x as Kt,y as Kr,z as Ql,H as Zl,J as Jl,K as Zn,Q as Tr,U as Xr,X as $l,Y as en,Z as tn,_ as sn,$ as rn,a0 as Qr,a1 as Pr,a2 as Li,a3 as Ks,a4 as _s,a5 as Jn,a6 as $n,a7 as ed,a8 as td,a9 as id,aa as sd,ab as on,ac as an,ad as ln,ae as rd,af as od,ag as ad,ah as Mo,ai as ld}from"./conifers.3f25b06c.js";import{C as Ae,P as xi,u as Eo,F as ot,I as nd,N as dd,R as nn,a as dn,T as Ao,H as cd,O as hd,D as fd,b as To,c as Ai,S as zs,d as Xi,e as Mi,f as ud}from"./SettingsManager.e5e730af.js";import{V as H,a as ys,C as ni,G as _e,L as di,c as cn,E as Po,M as Me,I as hn,b as We,R as qs,S as Nr,i as Zr,d as Jr,e as Dr,s as xr,f as Rr,P as Ge,W as Ve,g as fn,h as un,j as vn,u as Ss,k as us,p as vd,v as md,l as gd,m as $s,H as pd,A as _d,n as bd,o as wd,D as yd,q as bs,r as vi,U as No,t as Ei,w as Ts,x as Sd,y as Dd,z as $r,B as Ri,F as Qt,J as xo,K as ti,N as Xs,O as mn,Q as Qs,T as gn,X as Ur,Y as pn,Z as Ro,_ as Uo,$ as it,a0 as Bs,a1 as Lr,a2 as Ld,a3 as Ds,a4 as Cd,a5 as kd,a6 as Or,a7 as Vr,a8 as Id,a9 as $t,aa as Md,ab as _t,ac as Ni,ad as Ed,ae as Oo,af as Qi,ag as Ad,ah as Td,ai as Pd,aj as Nd,ak as _n,al as Vo}from"./DevMidlineGenerator.7a22a0a2.js";import{Q as bn,a as ts}from"./DriftmasMidlineGenerator.dc1165d0.js";import"./IsStaticRoute.ed7acde0.js";import{w as xd}from"./index.205d685d.js";import{e as Oe}from"./each.e59479a4.js";const Ho=["Chase","ChaseFar","FirstPerson","Bonnet","Bumper"],zo={pitch:{near:.25,far:.15},yOffset:{near:1,far:2},posOffset:new mi(0,0,0),range:{min:2,near:7,far:10,max:50},hasCollisions:!1,farSpeed:45,smoothFactor:1.25,nearPlane:.35,yawLimit:0,minPitch:0,maxPitch:1.57,invertDrag:!1,firstPerson:!1},Rd=new mi(-4,3,0),Ud=68;let Ti=.95,Zi=1-Ti,ws=Zi/4,Cr=1-ws;const qo=()=>{};class Od{constructor(e){q(this,"container");q(this,"cameraWrapper");q(this,"seatPosition",0);q(this,"seatHeight",0);q(this,"orientation",new Hn(0,0,0,"YXZ"));q(this,"vCenter",new mi);q(this,"camFwd",new mi);q(this,"uLerpA",0);q(this,"uLerpB",0);q(this,"uDist",0);q(this,"uSmoothA",0);q(this,"uSmoothB",0);q(this,"uH",0);q(this,"w",1);q(this,"h",1);q(this,"driverSide",1);q(this,"mode",zo);q(this,"minGroundPitch",0);q(this,"groundPitchUpdateTimer",0);q(this,"vehicleYaw",0);q(this,"vehiclePitch",0);q(this,"vehicleTargets",{x:0,y:0,z:0});q(this,"userYaw",0);q(this,"userYawTarget",0);q(this,"userPitch",0);q(this,"userPitchTarget",0);q(this,"userSmooth",.8);q(this,"userSmoothA",1-this.userSmooth);q(this,"userZoom",0);q(this,"userZoomTarget",0);q(this,"groundPitch",0);q(this,"dragSense",2.5);q(this,"tppDragSense",2);q(this,"fppDragSense",.8);q(this,"yawSense",3);q(this,"pitchSense",2);q(this,"isCinecam",!1);q(this,"cinecam",{targetPos:new mi,targetRot:new mi,uiWasHidden:!1,baseSpeed:120,boostFactor:2,speed:20,verticalSpeed:20,smoothMode:!1,sense:.001,zoomSense:4,targetZoom:1,curZoom:1,maxZoom:Math.sqrt(8),minZoom:Math.sqrt(.75)});q(this,"profileGeneration",0);q(this,"tHeading");q(this,"tDif");q(this,"smoothSpeed",0);q(this,"isRotated",!1);q(this,"fovTarget",0);q(this,"fovLerped",0);q(this,"lockChangeAlertBound",this.lockChangeAlert.bind(this));q(this,"onMouseMoveBound",this.onMouseMove.bind(this));q(this,"onDriverSideBound",this.onDriverSide.bind(this));q(this,"onNextCameraModeBound",this.onNextCameraMode.bind(this));this.cameraWrapper=new fs,this.camera=Ae,this.cameraWrapper.add(this.camera),this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.rotation.y=Math.PI,this.container=new fs,this.container.add(this.cameraWrapper),this.container.rotation.order="ZYX",Ae.rotation.order="ZYX",e.requestPointerLock=e.requestPointerLock||e.mozRequestPointerLock,document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||qo,this.cinecam.canvas=e,H.addListener(ys.Reset,this.reset.bind(this)),H.addListener(ys.Ready,this.refreshSettings.bind(this)),H.addListener(ys.ModelChanged,this.onVehicleChanged.bind(this)),Be.addListener("verticalFov",this.setFov.bind(this)),Be.addListener("fovEffectStrength",this.setFovEffectStrength.bind(this)),ne.addListener("cameraMode",this.onCameraModeChanged.bind(this)),ne.addListener("hideUI",()=>this.onToggleUI()),ne.addListener("touchscreen",()=>this.setSize(this.w,this.h)),ne.addListener("seatPosition",this.onSeatPosChanged.bind(this)),ne.addListener("seatHeight",this.onSeatPosChanged.bind(this)),ne.addListener("driverSide",this.onDriverSideBound),xi.addListener(this.refreshSettings.bind(this)),ni.set("isCinecam",!1),_e.addListener("CameraMode",this.onNextCameraModeBound),_e.addListener("ToggleCinecam",this.onCinecamChanged.bind(this)),di.addListener(t=>{t==1&&this.refreshSettings(!0)}),cn.subscribe(t=>{t>0&&this.onNextCameraMode()})}init(){this.reset(),hs.hasInit?this.initAudio():hs.addInitListener(this.initAudio.bind(this))}initAudio(){this.camera.add(hs.listener)}refreshSettings(e=!1){!e&&this.profileGeneration==xi.value||(this.profileGeneration=xi.value,this.setFov(Be.verticalFov),this.setFovEffectStrength(Be.verticalFov),this.onCameraModeChanged(ne.cameraMode),this.onToggleUI(ne.hideUI),this.setSize(this.w,this.h),this.onSeatPosChanged(),this.onDriverSide(ne.driverSide),this.isCinecam&&this.onCinecamChanged())}reset(){let e=0;isNaN(this.vehicleYaw+this.vehicleTargets.y)||(e=this.vehicleTargets.y-this.vehicleYaw),e%=Math.TAU,this.smoothSpeed=H.speed,this.uLerpA=this.smoothLerp(H.speed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x,this.vehicleTargets.y=H.heading+Math.HALFPI,this.vehicleYaw=this.vehicleTargets.y,this.vehicleTargets.y-=e,this.vehicleTargets.z=0,this.mode.rollFactor&&(this.vehicleTargets.z=H.roll*this.mode.rollFactor),this.orientation.x=this.vehiclePitch,this.orientation.y=this.vehicleYaw,this.orientation.z=this.vehicleTargets.z,this.updateVehicleVisibility(),this.updateFov(!0),this.updateNear(),di.value>=1&&this.update(.1),this.orientation.x-=this.groundPitch,this.groundPitch=0,this.camera.updateProjectionMatrix()}updateVehicleVisibility(){H.container.visible=!this.mode.hideVehicle||ni.isCinecam}handleInput(e){(_e.signal.CameraLeft>0||_e.signal.CameraRight>0)&&(this.mode.isInterior?this.userYawTarget+=(_e.signal.CameraLeft-_e.signal.CameraRight)*this.yawSense*e*.5:this.userYawTarget+=(_e.signal.CameraLeft-_e.signal.CameraRight)*this.yawSense*e),(_e.signal.CameraUp>0||_e.signal.CameraDown>0)&&(this.mode.isInterior?this.userPitchTarget+=(_e.signal.CameraDown-_e.signal.CameraUp)*this.pitchSense*e*.3:this.userPitchTarget+=(_e.signal.CameraDown-_e.signal.CameraUp)*this.pitchSense*e,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Le.drag.x!=0&&(this.userYawTarget!==0||Math.abs(Le.drag.x)>.003)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userYawTarget+=Le.drag.x*this.yawSense*this.dragSense:this.userYawTarget-=Le.drag.x*this.yawSense*this.dragSense),this.userYawTarget<-Math.PI?(this.userYawTarget+=Math.TAU,this.userYaw+=Math.TAU):this.userYawTarget>Math.PI&&(this.userYawTarget-=Math.TAU,this.userYaw-=Math.TAU),Le.drag.y!=0&&(this.userPitchTarget!==0||Math.abs(Le.drag.y)>.005)&&(this.mode.static||(document.body.style.cursor="grabbing"),this.mode.isInterior?this.userPitchTarget-=Le.drag.y*this.pitchSense*this.dragSense:this.userPitchTarget+=Le.drag.y*this.pitchSense*this.dragSense,this.userPitchTarget=Math.min(Math.max(this.mode.minPitch+this.minGroundPitch,this.userPitchTarget),this.mode.maxPitch)),Le.mouseEnabled&&Le.scroll!==0&&Le.scrollLock=="cam"&&(this.userZoomTarget+=Le.scrollDelta*Math.max(.1,Math.sqrt((this.userZoomTarget-this.mode.range.min)/(this.mode.range.max-this.mode.range.min))*3),this.userZoomTarget=Math.min(Math.max(this.mode.range.min,this.userZoomTarget),this.mode.range.max)),this.mode.yawLimit>=0&&(this.userYawTarget=Math.min(Math.max(-this.mode.yawLimit,this.userYawTarget),this.mode.yawLimit)),this.userYaw=this.userYaw*this.userSmooth+this.userYawTarget*this.userSmoothA,this.userPitch=this.userPitch*this.userSmooth+this.userPitchTarget*this.userSmoothA,this.userZoom=this.userZoom*this.userSmooth+this.userZoomTarget*this.userSmoothA}update(e){if(di.value<1)return;if(ni.isCinecam)return this.updateCinecam(e);if(rt.useMouse||this.handleInput(e),this.mode.isInterior)return this.updateFirstPerson(e);this.smoothSpeed=this.smoothSpeed*.9+H.speed*.1,this.uLerpA=this.smoothLerp(this.smoothSpeed/this.mode.farSpeed),this.uLerpB=1-this.uLerpA,this.uSmoothA=Math.min(e/(Be.cameraSmoothing*this.mode.smoothFactor),1),this.uSmoothC=this.uSmoothA/2,this.uSmoothB=1-this.uSmoothA,this.uSmoothD=1-this.uSmoothC,this.vCenter.set(this.mode.posOffset.x,this.mode.posOffset.y,this.mode.posOffset.z*this.driverSide).applyQuaternion(H.quaternion).add(H.position),this.vCenter.y+=this.mode.yOffset.near*this.uLerpA+this.mode.yOffset.far*this.uLerpB,this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tHeading>Math.PI&&(this.tHeading-=Math.TAU),this.mHeading=Math.atan2(H.motionDir.z,-H.motionDir.x)-Math.HALFPI,this.mHeading<-Math.PI&&(this.mHeading+=Math.TAU);let t=this.mHeading-this.tHeading;if(t<-Math.PI?t+=Math.TAU:t>Math.PI&&(t-=Math.TAU),H.speed<2){if(H.speed>1){let i=(H.speed-1)*Be.motionDirBlend;this.tHeading=this.mHeading*i+(1-i)*this.tHeading,this.tHeading-=t*Be.steerDirBlend*(H.speed-1)}}else this.tHeading-=t*Be.steerDirBlend,this.tHeading=this.tHeading*(1-Be.motionDirBlend)+Be.motionDirBlend*this.mHeading;if(this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleYaw=this.vehicleTargets.y*this.uSmoothA+this.vehicleYaw*this.uSmoothB,this.vehicleTargets.x=this.mode.pitch.near*this.uLerpA+this.mode.pitch.far*this.uLerpB-H.pitch,this.vehiclePitch=this.vehicleTargets.x*this.uSmoothC+this.vehiclePitch*this.uSmoothD,this.vehicleTargets.z=H.roll*this.mode.rollFactor,this.orientation.z=this.vehicleTargets.z*this.uSmoothA+this.orientation.z*this.uSmoothB,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.uDist=this.mode.range.near*this.uLerpA+this.mode.range.far*this.uLerpB+this.userZoom,this.mode.hasCollisions){let r=Po.getXZ(Ae.worldPos.x,Ae.worldPos.z,Me.vehicleNode)-this.vCenter.y+1+this.uDist/10;this.minGroundPitch=Math.atan(r/this.uDist),this.groundContact=!1,this.orientation.x<this.minGroundPitch?(this.groundContact=!0,this.groundPitch=this.groundPitch*.9+.1*(this.minGroundPitch-this.orientation.x)):this.groundPitch*=.9,this.orientation.x+=this.groundPitch}this.updateWrapperState(),this.cameraWrapper.position.add(this.camFwd.multiplyScalar(-this.uDist)),this.cameraWrapper.getWorldDirection(this.camFwd),!this.isCinecam&&Be.fovEffectStrength>0&&this.updateFov(),this.updateCamState()}updateCinecam(e){this.cinecam.dx=Math.cos(-Ae.rotation.y-Math.PI/2),this.cinecam.dz=Math.sin(-Ae.rotation.y-Math.PI/2),this.cinecam.useVehicleHeading&&(this.cinecam.dx=Math.cos(-H.rotation.y),this.cinecam.dz=Math.sin(-H.rotation.y));let t=Po.getXZ(Ae.worldPos.x,Ae.worldPos.z),r=(Ae.worldPos.y-t)/100;r<.01&&(r=.01),r>1&&(r=1),Le.key.Digit1?(this.cinecam.baseSpeed/=2,Le.key.Digit1=!1,this.cinecam.useVehicleSpeed=!1):Le.key.Digit3?(this.cinecam.baseSpeed*=2,Le.key.Digit3=!1,this.cinecam.useVehicleSpeed=!1):Le.key.CapsLock?(Le.key.CapsLock=!1,this.cinecam.useVehicleSpeed=!this.cinecam.useVehicleSpeed):Le.key.Tab&&(Le.key.Tab=!1,this.cinecam.smoothMode=!this.cinecam.smoothMode,this.cinecam.smoothMode?Ti=.95:Ti=.8,Zi=1-Ti,ws=Zi/2,Cr=1-ws),this.cinecam.useVehicleSpeed?(this.cinecam.baseSpeed=H.speed,this.cinecam.speed=this.cinecam.baseSpeed):this.cinecam.speed=Math.max(.1,r)*this.cinecam.baseSpeed,this.cinecam.smoothMode?this.cinecam.verticalSpeed=this.cinecam.speed/2:this.cinecam.verticalSpeed=this.cinecam.speed,_e.signal.Boost&&(this.cinecam.speed*=this.cinecam.boostFactor);let a=0,o=0;_e.signal.Forward&&(a=this.cinecam.dx,o=this.cinecam.dz),_e.signal.Backward&&(a-=this.cinecam.dx,o-=this.cinecam.dz),_e.signal.Left&&(this.cinecam.useVehicleHeading?(a+=this.cinecam.dz*.4,o-=this.cinecam.dx*.4):(a+=this.cinecam.dz,o-=this.cinecam.dx)),_e.signal.Right&&(this.cinecam.useVehicleHeading?(a-=this.cinecam.dz*.4,o+=this.cinecam.dx*.4):(a-=this.cinecam.dz,o+=this.cinecam.dx));let n=Math.sqrt(a*a+o*o);n>0&&(a=a/n,o=o/n,this.cinecam.targetPos.x+=a*e*this.cinecam.speed,this.cinecam.targetPos.z+=o*e*this.cinecam.speed),_e.signal.CinecamUp&&(this.cinecam.targetPos.y+=e*this.cinecam.verticalSpeed),_e.signal.CinecamDown&&(this.cinecam.targetPos.y-=e*this.cinecam.verticalSpeed),Ae.rotation.x=Ae.rotation.x*Ti+this.cinecam.targetRot.x*Zi,Ae.rotation.y=Ae.rotation.y*Ti+this.cinecam.targetRot.y*Zi,_e.signal.CameraZoom!=0&&(this.cinecam.targetZoom-=this.cinecam.zoomSense*e*_e.signal.CinecamZoom,this.cinecam.targetZoom=Math.max(Math.min(this.cinecam.maxZoom,this.cinecam.targetZoom),this.cinecam.minZoom)),this.cinecam.curZoom=this.cinecam.curZoom*.95+this.cinecam.targetZoom*.05,this.cinecam.curZoom!=Ae.zoom&&(Ae.zoom=this.cinecam.curZoom*this.cinecam.curZoom,Ae.near=.1+(Ae.zoom-.75),Ae.updateProjectionMatrix()),Ae.position.x=Ae.position.x*Ti+this.cinecam.targetPos.x*Zi,this.cinecam.useVehicleHeading?Ae.position.y=Ae.position.y*Cr+(H.position.y+this.cinecam.targetPos.y)*ws:Ae.position.y=Ae.position.y*Cr+this.cinecam.targetPos.y*ws,Ae.position.z=Ae.position.z*Ti+this.cinecam.targetPos.z*Zi,this.updateWrapperState(),this.updateCamState()}updateFirstPerson(e){this.vCenter.set(this.mode.posOffset.x+this.seatPosition,this.mode.posOffset.y+this.seatHeight,this.mode.posOffset.z*this.driverSide-H.roll*this.mode.rollFactor*.5).applyQuaternion(H.quaternion).add(H.position),this.cameraWrapper.position.copy(this.vCenter),this.tHeading=H.heading+Math.HALFPI,this.tDif=this.tHeading-this.vehicleTargets.y,this.tDif<-Math.PI?(this.vehicleTargets.y-=Math.TAU,this.vehicleYaw-=Math.TAU):this.tDif>Math.PI&&(this.vehicleTargets.y+=Math.TAU,this.vehicleYaw+=Math.TAU),this.vehicleTargets.y=this.tHeading,this.vehicleTargets.x=-H.pitch+this.mode.pitch.near,this.vehicleYaw=this.vehicleTargets.y*.2+this.vehicleYaw*.8,this.vehiclePitch=this.vehicleTargets.x*.1+this.vehiclePitch*.9,this.orientation.x=this.vehiclePitch+this.userPitch,this.orientation.y=this.vehicleYaw+this.userYaw,this.orientation.z=this.orientation.z*.9+H.roll*this.mode.rollFactor*.1,this.updateWrapperState(),this.updateCamState()}updateWrapperState(){this.cameraWrapper.setRotationFromEuler(this.orientation),this.cameraWrapper.getWorldDirection(this.camFwd)}updateCamState(){Ae.fwd.copy(this.camFwd).normalize().negate(),Ae.speed=H.speed,Ae.updateMatrixWorld(),Ae.worldPos.setFromMatrixPosition(Ae.matrixWorld)}setSize(e,t){this.w=e,this.h=t,e<t&&ne.touchscreen?(this.camera.rotation.z=-Math.PI/2,this.isRotated=!0):(this.isRotated=!1,this.camera.rotation.z=0),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setFovEffectStrength(e){e==0&&this.setFov(Be.verticalFov)}updateFov(e=!1){Be.fovEffectStrength==0||hn?this.fovLerped=0:(this.fovTarget=(1-this.smoothLerp(H.speedLerp))*H.tuning.topSpeed*this.mode.fovFactor,e?this.fovLerped=this.fovTarget:this.fovLerped=this.fovLerped*.95+this.fovTarget*.05),this.setFov(Be.verticalFov+this.fovLerped*Be.fovEffectStrength)}setFov(e){this.camera.aspect<1?(e*=Math.D2R,e=2*Math.atan(Math.tan(e/2)/this.camera.aspect),e*=Math.R2D,Eo(e,this.camera.far,1/this.camera.aspect)):Eo(e,this.camera.far,this.camera.aspect),this.camera.fov=e,this.updateNear(),this.camera.updateProjectionMatrix()}updateNear(){this.mode.isInterior?this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/1e3:this.camera.near=this.mode.nearPlane+(100-this.camera.fov)/200}onToggleUI(){this.isCinecam&&!ne.hideUI&&document.exitPointerLock(),ne.hideUI&&this.isCinecam&&this.cinecam.canvas.requestPointerLock()}onCinecamChanged(){this.isCinecam=!this.isCinecam,ni.set("isCinecam",this.isCinecam),Ae.isCinecam=this.isCinecam,this.isCinecam?(this.hadMouseControl=rt.useMouse,rt.set("useMouse",!1)):this.hadMouseControl&&rt.set("useMouse",!0),this.isCinecam?(this.setFov(Ud),this.cameraWrapper.remove(Ae),this.container.add(Ae),this.cinecam.uiWasHidden=ne.hideUI,ne.set("hideUI",!0),this.cinecam.curZoom=1,this.cinecam.targetZoom=1,this.cinecam.targetPos.copy(Rd).applyQuaternion(H.quaternion).add(H.position),this.cinecam.targetRot.x=-.25,this.cinecam.targetRot.y=H.heading-1.57,this.cinecam.useVehicleSpeed=!1,this.cinecam.useVehicleHeading=!1,Ae.position.copy(this.cinecam.targetPos),Ae.rotation.x=this.cinecam.targetRot.x,Ae.rotation.y=this.cinecam.targetRot.y,this.cinecam.canvas.onclick=e=>{e.target.id=="ui-fixed"&&this.cinecam.canvas.requestPointerLock()},document.addEventListener("pointerlockchange",this.lockChangeAlertBound,!1)):(this.setFov(Be.verticalFov),this.cinecam.uiWasHidden||ne.set("hideUI",!1),document.exitPointerLock(),this.cinecam.canvas.onclick=qo,document.removeEventListener("pointerlockchange",this.lockChangeAlertBound),document.removeEventListener("mousemove",this.onMouseMoveBound),this.container.remove(Ae),this.cameraWrapper.add(Ae),this.camera.zoom=1,this.camera.updateProjectionMatrix(),Ae.position.set(0,0,0),Ae.rotation.set(0,Math.PI,0),this.reset()),this.updateVehicleVisibility()}lockChangeAlert(){document.pointerLockElement===this.cinecam.canvas||document.mozPointerLockElement===this.cinecam.canvas?document.addEventListener("mousemove",this.onMouseMoveBound,!1):document.removeEventListener("mousemove",this.onMouseMoveBound,!1)}onMouseMove(e){this.cinecam.targetRot.y-=e.movementX*this.cinecam.sense/this.cinecam.curZoom,this.cinecam.targetRot.x-=e.movementY*this.cinecam.sense*Ae.aspect/this.cinecam.curZoom}onCameraModeChanged(){let e=H.cameras[Ho[ne.cameraMode]];e?this.mode={...e}:this.mode={...zo},this.mode.posOffset=new mi().fromArray(this.mode.posOffset),this.mode.isInterior?(ni.set("isInterior",!0),this.dragSense=this.fppDragSense):(ni.set("isInterior",!1),this.dragSense=this.tppDragSense),this.mode.firstPerson&&(this.dragSense=this.fppDragSense),this.mode.invertDrag&&(this.dragSense*=-1),this.mode.range.max?Le.lockScroll("cam"):Le.unlockScroll("cam"),this.updateFov(),this.updateNear(),this.camera.updateProjectionMatrix(),this.reset()}onVehicleChanged(){this.onCameraModeChanged()}onSeatPosChanged(){this.seatHeight=(ne.seatHeight-.5)*.1,this.seatPosition=(ne.seatPosition-.5)*.2}onDriverSide(){this.driverSide=ne.driverSide*2-1}onNextCameraMode(){if(!ni.isCinecam){if(this.userPitchTarget!==0||this.userYawTarget!==0||this.userZoomTarget!==0){this.userPitchTarget=0,this.userYawTarget=0,this.userZoomTarget=0;return}ne.set("cameraMode",(ne.cameraMode+1)%Ho.length)}}smoothLerp(e){return e=Math.min(1,e),-1*(3-e*2)*e*e+1}}const Te={None:0,Intro:1,Reset:2,Boost:3,UTurn:4,Onward:5};let Ws=!!localStorage.getItem("skip-controls");localStorage.setItem("skip-controls",!1);const tt=new jl(Ws?Te.None:Te.Intro);function wn(s,e=5e3){setTimeout(()=>{tt.value==s&&tt.set(Te.None)},e)}Ws||di.addListener(s=>{!Ws&&s==1&&(tt.set(Te.Intro),wn(Te.Intro,7e3),Ws=!0)});const Vd=20*20,Hd=120*120,vt={};class zd{constructor(){q(this,"targetVehicleNodeIndex",0);q(this,"wrongWay",!1);q(this,"isRogue",!1);q(this,"hasAutodrive",!1);q(this,"prompts",{reset:{timerStarted:!1,didPrompt:!1,startTime:null},boost:{didPrompt:!1}});q(this,"profileGeneration",0);q(this,"hasInit",!1);q(this,"sceneReady",!1);q(this,"maxPhysDT",.05);q(this,"minPhysDT",.001);q(this,"physDT",0);q(this,"canDisableAutodrive",!0);q(this,"nodeCheckFrame",0);q(this,"reversingTooFar",!1);q(this,"update",this.updatePending);Je.addSlowListener(this.updateUI.bind(this)),H.addListener(ys.Reset,this.onReset.bind(this)),H.addListener(ys.Ready,this.onVehicleReady.bind(this)),We.addListener("mode",H.setDriveMode.bind(H),!0),We.addListener("speedControl",this.updateSpeedControl.bind(this)),We.addListener("speedControlTarget",this.updateSpeedControl.bind(this)),We.addListener("speedControlMode",this.updateSpeedControl.bind(this)),qt.addListener(this.onAutodrive.bind(this)),ni.addListener("isInterior",H.onCameraInteriorChangedBound),ni.addListener("isCinecam",H.onCameraInteriorChangedBound),ne.addListener("touchscreen",this.updateSpeedControl.bind(this)),ne.addListener("units",this.updateSpeedControl.bind(this)),ne.addListener("showWheel",H.setShowWheel.bind(H)),ne.addListener("driverSide",H.setDriverSide.bind(H)),ne.addListener("gripFactor",this.updateGripFactor.bind(this)),ne.addListener("speedFactor",this.updateSpeedFactor.bind(this)),ne.addListener("driveLane",this.updateDriveLane.bind(this)),qs.addListener("lanes",this.updateDriveLane.bind(this))}applySettings(){this.profileGeneration!=xi.value&&(this.profileGeneration=xi.value,H.setDriveMode(We.mode),this.updateSpeedControl(),H.onCameraInteriorChanged(),H.setShowWheel(ne.showWheel),H.setDriverSide(ne.driverSide),console.log("Apply settings",ne.driverSide),this.updateGripFactor(ne.gripFactor),this.updateSpeedFactor(ne.speedFactor),this.updateDriveLane())}updateGripFactor(e){H.setGripFactor(e)}updateSpeedFactor(e){H.setSpeedFactor(e)}updateSpeedControl(){H.hasSpeedControl=We.speedControl&&!ne.touchscreen,H.hasCruiseTarget=H.hasSpeedControl&&We.speedControlMode==Nr.Cruise,H.hasSpeedLimit=H.hasSpeedControl&&We.speedControlMode==Nr.Max,H.speedControlTarget=We.speedControlTarget/3.6,H.speedControlTarget*=Ar[ne.units],H.speedControlTarget/=5,H.speedControlTarget=Math.round(H.speedControlTarget),H.speedControlTarget*=5,H.speedControlTarget/=Ar[ne.units],We.set("speedControlTargetMS",H.speedControlTarget)}updateDriveLane(){qs.lanes<=1||ne.driveLane==zn.CENTER?H.driveLaneOffset=0:H.driveLaneOffset=(ne.driveLane*2-1)*qs.width/2,qs.lanes>1&&H.inAutodrive&&Me.vehicleNode&&this.reset()}onAutodrive(e){this.hasAutodrive=e,H.setAutodrive(this.hasAutodrive)}init(){this.targetVehicleNodeIndex=Me.vehicleIndex,this.hasInit?(this.applySettings(),this.reset()):(We.addListener("type",H.setVehicle.bind(H)),this.sceneReady=!0,this.hasInit=!0)}onSceneLoading(){this.sceneReady=!1,this.update=this.updatePending}onSceneReady(){this.sceneReady=!0,H.setVehicle(We.type)}onVehicleReady(){this.applySettings()}updatePending(e,t){H.hasInit&&this.sceneReady&&(this.update=this.updateLive,this.update(e,t))}updateLive(e,t){_e.signal.Reset&&(ot.hasUsedReset||(ot.set("hasUsedReset",!0),tt.value==Te.Reset&&tt.set(Te.None)),this.reset()),_e.signal.Headlights&&H.setHeadlights(!H.headlights,!0),_e.signal.Autodrive?Le.key.ShiftLeft||Le.key.ShiftRight?ne.set("autodriveMode",(ne.autodriveMode+1)%3):(qt.set(!this.hasAutodrive),this.canDisableAutodrive=!1):this.hasAutodrive&&(!_e.hasScreenInput&&!ni.isCinecam&&(ne.autodriveMode==$i.STEER&&(_e.signal.Left||_e.signal.Right)||ne.autodriveMode==$i.FULL&&(_e.gamepadSignal.Forward||_e.gamepadSignal.Backward||_e.signal.Forward||_e.signal.Backward||_e.signal.Left||_e.signal.Right))?this.canDisableAutodrive&&(this.hasAutodrive=!1,qt.set(this.hasAutodrive),H.setAutodrive(this.hasAutodrive)):this.canDisableAutodrive||(this.canDisableAutodrive=!0)),_e.signal.ToggleSpeedControl&&We.set("speedControl",!We.speedControl),H.hasSpeedControl&&Le.scrollDelta!=0&&Le.scrollLock==null&&(Le.scrollDelta<0?Zr():Jr(),Le.scrollDelta=0),!ot.hasUsedReset&&!H.onRoad?this.prompts.reset.timerStarted?!this.prompts.reset.didPrompt&&Je.appTime-this.prompts.reset.startTime>3&&(this.prompts.reset.didPrompt=!0,tt.set(Te.Reset)):(this.prompts.reset.timerStarted=!0,this.prompts.reset.startTime=Je.appTime):this.prompts.reset.timerStarted&&(this.prompts.reset.timerStarted=!1,this.prompts.reset.didPrompt=!1),tt.value==Te.None?!H.inAutodrive&&!ot.hasUsedBoost&&H.pitch>.12&&H.onRoad&&H.speed>5&&!this.prompts.boost.didPrompt&&(this.prompts.boost.didPrompt=!0,tt.set(Te.Boost),wn(Te.Boost,3e3)):tt.value==Te.Reset&&H.onRoad&&H.onRoad&&tt.set(Te.None),H.update(e,t),this.updateProgress(),this.updateVehicleState(e),this.updateUI()}updateProgress(){if(Me.vehicleNodeDidChange=!1,Me.vehicleNode.i<this.targetVehicleNodeIndex){this.wrongWay=!1,Me.vehicleNode=Me.vehicleNode.next,Me.vehicleIndex=Me.vehicleNode.i,Me.vehicleNodeDidChange=!0;return}vt.d1=H.position.distanceToSquared(Me.vehicleNode.p),vt.d2=H.position.distanceToSquared(Me.vehicleNode.next.next.p),H.isRogue=!1,vt.d2>Hd?(H.isRogue=!0,this.nodeCheckFrame--,this.nodeCheckFrame<=0&&(this.nodeCheckFrame=60,vt.closest=Dr(H.position.x,H.position.z,Me.vehicleNode),vt.closest.n.i>Me.vehicleNode.i&&vt.closest.n.i<Me.vehicleNode.i+100&&(this.targetVehicleNodeIndex!==vt.closest.n.i&&Di.add("VEHICLE: Leaping ahead to node "+vt.closest.n.i),this.targetVehicleNodeIndex=vt.closest.n.i))):vt.d2<vt.d1?(this.wrongWay=!1,(tt.value==Te.UTurn||tt.value==Te.Onward)&&tt.set(Te.None),Me.vehicleNode=Me.vehicleNode.next,Me.vehicleIndex=Me.vehicleNode.i,Me.vehicleNodeDidChange=!0):vt.d1>Vd&&H.onRoad?(H.isRogue=!0,vt.closest=Dr(H.position.x,H.position.z,Me.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),this.wrongWay?vt.alignment<.5&&(this.wrongWay=!1,tt.value==Te.UTurn&&tt.set(Te.None)):vt.alignment>1.8&&(this.wrongWay=!0,tt.set(Te.UTurn)),!this.wrongWay&&vt.alignment<1&&H.direction<0&&H.speed>5&&(this.reversingTooFar=!0,tt.set(Te.Onward)),this.reversingTooFar&&H.direction>0&&(this.reversingTooFar=!1,tt.set(Te.None))):this.wrongWay?(vt.closest=Dr(H.position.x,H.position.z,Me.vehicleNode),vt.alignment=Math.abs(vt.closest.n.a+H.heading),vt.alignment<1?(this.wrongWay=!1,tt.value==Te.UTurn&&tt.set(Te.None)):H.isRogue=!0):this.reversingTooFar&&(this.reversingTooFar=!1,tt.value==Te.Onward&&tt.set(Te.None))}updateVehicleState(e){H.dS=Math.sqrt((H.pPosition.x-H.position.x)**2+(H.pPosition.z-H.position.z)**2),H.speed=H.dS/e,H.speedLerp=Math.min(H.speed/H.tuning.topSpeed),H.velocity.subVectors(H.position,H.pPosition).multiplyScalar(1/e),H.accel.subVectors(H.velocity,H.pVelocity).multiplyScalar(1/e),H.motionDir.copy(H.velocity).normalize(),H.motionHeading=Math.atan2(H.motionDir.z,H.motionDir.x),H.pitch=H.rotation.z,H.roll=H.rotation.x,H.pPosition.copy(H.position),H.pVelocity.copy(H.velocity)}updateUI(){H.hasSpeedControl&&Math.abs(H.speed-H.speedControlTarget)<Math.max(.1,H.speed*.004)?xr.set(H.speedControlTarget):xr.set(H.speed),ne.odomMode==qn.TOTAL?Rr.set((Ge.totalDist+Ge.sr1Distance)/1e3):Rr.set((Me.vehicleNode.i-Me.initIndex)/100+Ve.accumulatedDistance),fn.set(H.hasBoost),!ot.hasUsedBoost&&H.hasBoost&&(ot.set("hasUsedBoost",!0),tt.value==Te.Boost&&tt.set(Te.None)),un.set(_e.toggled.Handbrake),vn.set(_e.toggled.StickySteer),Me.vehicleNodeDidChange&&Ss(Me.vehicleNode.i),rt.useMouse&&rt.set("currentSteer",_e.gamepadSignal.Left-_e.gamepadSignal.Right)}onCrash(){}reset(){H.reset()}onReset(){this.wrongWay=!1,tt.set(Te.None),Ss(Me.vehicleNode.i,!0),this.updateVehicleState(1)}}var Ls=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var r=(performance||Date).now(),a=r,o=0,n=t(new Ls.Panel("FPS","#0ff","#002")),l=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-r,200),h>=a+1e3&&(n.update(o*1e3/(h-a),100),a=h,o=0,d)){var u=performance.memory;d.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:e,setMode:i}};Ls.Panel=function(s,e,t){var i=1/0,r=0,a=Math.round,o=a(window.devicePixelRatio||1),n=80*o,l=48*o,d=3*o,h=2*o,u=3*o,m=15*o,p=74*o,v=30*o,w=document.createElement("canvas");w.width=n,w.height=l,w.style.cssText="width:80px;height:48px";var y=w.getContext("2d");return y.font="bold "+9*o+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,n,l),y.fillStyle=e,y.fillText(s,d,h),y.fillRect(u,m,p,v),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(u,m,p,v),{dom:w,update:function(D,L){i=Math.min(i,D),r=Math.max(r,D),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,n,m),y.fillStyle=e,y.fillText(a(D)+" "+s+" ("+a(i)+"-"+a(r)+")",d,h),y.drawImage(w,u+o,m,p-o,v,u,m,p-o,v),y.fillRect(u+p-o,m,o,v),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(u+p-o,m,o,a((1-D/L)*v))}}};const qd=Ls,Fd=`
    uniform float time;
    uniform vec3 camPos;
    uniform float shelfHeight0;
    uniform float shelfHeight1;
    uniform float skyScale0;
    uniform float skyScale1;
    uniform float altitude;

    varying vec4 wPos;
    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;

    varying float dist;

`,Gd=`
    wPos = modelMatrix * vec4( position, 1.0 );

    // Distance (height) from camera to virtual plane
    // Big hmm here, these values may intersect with road on rare occasions, could min them
    float h0 = shelfHeight0 - camPos.y;

    // Distance from camera to image plane
    float h1 = shelfHeight1 - camPos.y;

    vUv = uv;

    // First shelf...
    vUUv.x = wPos.x + time;
    vUUv.y = wPos.z + time;
    vUUv /= skyScale0 * altitude;

    float scale1 = skyScale1 * altitude;
    float lowerScale = scale1 * h1 / h0;
    float motionScale = (h1 - h0) / h0;

    // Second shelf
    vUUUv.x = ((wPos.x + camPos.x * motionScale ) / lowerScale) + time / scale1;
    vUUUv.y = ((wPos.z + camPos.z * motionScale ) / lowerScale) + time / scale1;


    // Offset copy of second shelf used for shading?
    vUUUUv.x = vUUUv.x + 0.001;
    vUUUUv.y = vUUUv.y - 0.001;


    //// EXPERIMENT
    // float h2 = ((shelfHeight0 + shelfHeight1) / 2.0) - camPos.y;
    // float scale2 = ((skyScale0 + skyScale1) / 2.0) * altitude;
    // float midScale = scale2 * h2 / h0;
    // float motionScale2 = (h2 - h0) / h0;
    // vUUUUv.x = ((wPos.x + camPos.x * motionScale2 ) / midScale);// + (time) / scale1;
    // vUUUUv.y = ((wPos.z + camPos.z * motionScale2 ) / midScale);// + (time) / scale1;


    // Mid-point experimentation
    // vUUUUv.x = (vUUUv.x + vUUv.x) / 2.0;
    // vUUUUv.y = (vUUUv.y + vUUv.y) / 2.0);


    // Use UVs to  look up  distance from camera...
    float vX = (uv.x - 0.5) * 2.0;
    float vY = (uv.y - 0.5) * 2.0;
    dist = max(0.0, 1.0 - sqrt((vX * vX) + (vY * vY)));
`,Bd=`

    transformed.z += (1.0 - dist)*(1.0 - dist) * altitude;

    vec4 mvPosition = vec4( transformed, 1.0 );

    #ifdef USE_BATCHING

        mvPosition = batchingMatrix * mvPosition;

    #endif

    #ifdef USE_INSTANCING

        mvPosition = instanceMatrix * mvPosition;

    #endif

    mvPosition = modelViewMatrix * mvPosition;

    gl_Position = projectionMatrix * mvPosition;
`,Wd=`
#ifdef USE_FOG

	varying float vFogDepth;
    varying float vFogBlend;
    varying vec3 vFogPos;
    uniform float fogFar;
    varying float vHaze;

    #ifdef FOG_EXP2
        uniform float fogDensity;
    #endif

    uniform float fogNear;
    uniform float hazeHeight;
    uniform float hazeIntensity;

#endif
`,jd=`
    #ifdef USE_FOG

        vFogDepth = fogFar;

        vFogPos = (modelMatrix * vec4(transformed, 1.0)).xyz;

        vHaze = 0.0;

        vFogBlend = 1.0;
        float fogAvg = (fogFar + fogNear) / 2.0;
        if(fogAvg < 500.0) {
            if(fogAvg <  50.0) {
                vFogBlend = 0.0;
            } else {
                vFogBlend = (fogAvg-50.0) / 450.0;
            }
        }
        if(hazeHeight < 0.0) {
            vFogBlend *= (1.0 - hazeIntensity);
        }

        #ifdef FOG_EXP2
            vFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));
        #endif

        #ifdef FOG_EXP2

            vFogDepth = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

        #else

            vFogDepth = smoothstep( fogNear, fogFar, vFogDepth );

        #endif

    #endif
`,Yd=`
    uniform vec3 highlight;
    uniform vec3 lowlight;
    uniform float mode;

    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;
    varying float dist;

    highp float random(vec2 coords) {
        return (fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.2) - 0.1;
    }

    float remap(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }
`,Kd=`

    vec4 c1 = texture2D(map, vUUv);
    vec4 c2 = texture2D(map, vUUUv);

    vec4 cloudCol = c1;

    //////////////////////////// BLEND MODES ///////////////////////////

    //// MAX

    // vec4 cloudCol = max(c1, c2);

    //// MIN

    // vec4 cloudCol = min(c1, c2);

    //// MULTIPLY

    // vec4 cloudCol = c1 * c2;

    /// ADD

    // vec4 cloudCol = c1 + c2;

    //// AVERAGE

    // vec4 cloudCol = (c1 + c2) / 2.0;

    //// SCREEN

    // vec4 ic1 = vec4(1.0) - c1;
    // vec4 ic2 = vec4(1.0) - c2;
    // cloudCol = vec4(1.0) - (ic1 * ic2);

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * (1.0-fogDepth));

    ///////////////////// ITERATIONS /////////////////////////

    if(mode == 0.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        // Remapping makes them a little sharper
        // c1.a = remap(c1.a, 0.0, 0.9, 0.0, 1.0);
        // c1.a = min(1.0, max(c1.a, 0.0));
        // c1.a = sqrt(c1.a);
        // c2.a = remap(c2.a, 0.0, 0.9, 0.0, 1.0);
        // c2.a = min(1.0, max(c2.a, 0.0));
        // c2.a = sqrt(c2.a);

        // Testing density

        // Density works like this kind of - might need to transition lowlight into highlighy as density lowers though
        // Also should use this to affect the blend between fog/cloud colour. At -1 density, should be full cloud.
        // float density = -0.5;

        // if(density > 0.0) {
        //     c1.a = remap(c1.a, density, 1.0, 0.0, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, density, 1.0, 0.0, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, density, 1.0, 0.0, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // } else {
        //     c1.a = remap(c1.a, 0.0, 1.0, -density, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, 0.0, 1.0, -density, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, 0.0, 1.0, -density, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // }


        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        float ic = 1.0 - ic1 * ic2;

        // ic *= c1.a * c3.a;// * c2.a;
        ic *= c3.a;

        cloudCol = vec4(lowlight, ic);

        cloudCol.rgb = mix(cloudCol.rgb, highlight, c3.a * ic);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 1.0)  {

        vec4 c3 = texture2D(map, vUUUUv);

        cloudCol.rgb = lowlight;

        // Screen alpha
        cloudCol.a = 1.0 - (1.0 - c1.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight,  c1.a * cloudCol.a * c3.a);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);

    } else if(mode == 2.0) {
        vec4 c3 = texture2D(map, vUUUUv);

        // Two-tone

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.25, 1.0);
        c3.a = remap(c3.a, 0.0, 1.0, 0.0, 0.5);

        c2.a *= c1.a;
        c3.a *= c1.a;

        cloudCol.rgb = lowlight;

        // Screen blend the initial alpha
        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        cloudCol.a = 1.0 - (ic1 * ic2);

        cloudCol.rgb = mix(cloudCol.rgb, highlight*1.5, c3.a * (dist * 2.0)); // More pink above


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 3.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        float c23 = 1.0 - (1.0 - c3.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight, min(c2.a, c3.a));

        cloudCol.a = max(c2.a, c1.a * c3.a);


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);
    } else if(mode == 4.0) {


    }



    //// FAR HIGHLIGHT THING SUNSET

    /*

        vec4 highlight = vec4(1.0,0.7,0.4,1.0);

        c1 *= highlight;
        c2 *= highlight;

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.0, 1.0);

        vec4 cloudCol = (c1 + c2) / 2.0;

        if(cloudCol.a > 0.25) {
            cloudCol = mix(cloudCol, highlight*8.0, (cloudCol.a - 0.25) * (0.5 - (dist*dist)));
            cloudCol.a = min(1.0, cloudCol.a);
        }

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist);

    */

    //// CIRRUS/MIN

    // c1 = remap(c1, 0.0, 1.0, 0.0, 1.0);
    // c2 = remap(c2, 0.0, 1.0, 0.0, 1.0);

    // cloudCol = max(vec4(c1), vec4(c2));
    // cloudCol /= 2;

    // cloudCol2.a = cloudCol.a;
    // if(cloudCol.a > 0.75) {
    //     // cloudCol = mix(cloudCol, cloudCol2, (cloudCol.a - 0.75) * 4.0);
    // }

    // vec4 cloudCol = texture2D( map, vUUv ) * texture2D(map, vUUUv); // MULTIPLY
    // vec4 cloudCol = (texture2D(map, vUUv) + texture2D( map, vUUUv )) / 2.0; // AVERAGE

    // Apply colour if we have it?

    /////////////////////// FINAL COLOUR APPLICATION //////////////////////////////////

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb * vec3(1.0,0.7,0.4) * 1.0 * cloudCol.a, cloudCol.a * dist);


    // diffuseColor = vec4(0.5,0.6,0.8,);

`,Xd=`

attribute float roadProximity;
attribute float treeMask;
attribute vec2 roadUv;
attribute float overlap;

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

float wuvSize = 800.0;

uniform sampler2D displacementMap;
uniform sampler2D fadeFine;
uniform float sinkDist;
uniform float vehicleIndex;
uniform float shadowFactor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

float distSquared( vec3 A, vec3 B ) {
    vec3 C = A - B;
    return dot( C, C );
}

vec3 upvec = vec3(0.0,1.0,0.0);

`,Qd=`

vec4 wPos = modelMatrix * vec4( position, 1.0 );

vFresnelPos = wPos.xyz;
vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

height = wPos.y;

// Set UVs from world pos
vUv.x = wPos.x / 10.0;
vUv.y = wPos.z / 10.0;

vUUv.x = vUv.x / 8.0;
vUUv.y = vUv.y / 8.0;

// 0 is perfectly flat, 1 is 90 degrees
steepness = 1.0 - dot(normal, upvec);
steepness = clamp(steepness * 1.25, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

rUv = roadUv;


//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;



//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (20.0 + fade1 * 40.0))/160.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
if(roadProximity > 0.0 && roadProximity < 0.5 + fade1) {
  vLightGrass *= roadProximity / (0.5 + fade1);
}

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

//// ROAD PROX

roadProx = roadProximity;

// Prevent rocks forming below the road, e.g. at bridges.
// Not perfect...
if(roadProx < 0.0) {
  steepness = 0.0;
}



//// SHADOW

vShadow = min(1.0, treeMask * min(1.0, max(0.0, height / 4.0)));


//// TREE MASK

vTreeMask = vShadow;

if(vTreeMask > 0.1) {
  vTreeMask = max(0.2, vTreeMask);
} else {
  vTreeMask = 0.0;
}

// if(roadProx > 0.0 && roadProx < 2.0) {
//   vTreeMask *= roadProx / 2.0;
// } else if(roadProx < 0.0) {
//   vTreeMask = 0.0;
// }

// Experimenting with displacement map
if(roadProx > 0.0 && roadProx < 20.0) {
  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vUv ).x - 0.3) * steepness * 3.0 );
}

//// MV POSITION

vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

//// OVERLAP SINK

// TODO Use actual distance probably?

//// Curvature
// float ddist = -mvPosition.z;
// float ssink = ddist / 1000.0;
// ssink *= ssink;
// transformed.y -= ssink * 50.0;
// // Recalc mvPosition
//   mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

if(overlap > 0.0) {

    float overlapDist = overlap - vehicleIndex;

    if(overlapDist > 0.0) {

      if(overlapDist < sinkDist) {

          float halfSinkDist = sinkDist * 0.75;

          if(overlapDist < halfSinkDist) {
            transformed.y -= 20.0;
          } else {
            transformed.y -= 20.0 * (sinkDist - overlapDist) / (sinkDist - halfSinkDist);
          }
      }

    } else {

      float fSinkDist = -sinkDist/2.0;

      if(overlapDist > fSinkDist) {

        float halfSinkDist = fSinkDist / 2.0;

        if(overlapDist > halfSinkDist) {
          transformed.y -= 20.0;
        } else {
          transformed.y -= 20.0 * (fSinkDist - overlapDist) / halfSinkDist;
        }

      }

    }

    // Recalc mvPosition
    mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
}

gl_Position = projectionMatrix * mvPosition;

vCamDepth = -mvPosition.z;

// vLightGrass = 0.0;
// vDarkGrass = 0.0;

 vShadow *= shadowFactor;


`,Zd=`

varying float height;
varying float steepness;
varying float roadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 rUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vShadow;
varying float vCamDepth;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D roadMap;

uniform sampler2D fadeFine;

uniform vec3 roadCol;

uniform vec3 grassColA;
uniform vec3 grassColB;
uniform vec3 peakColA;
uniform vec3 peakColB;

uniform vec3 fieldDiscolouration;

uniform float radiance;

vec4 rockTex;

vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {

  // Perform the blending

  float ma = max(tx1.a + w1, tx2.a + w2) - depth;
  float b1 = max(tx1.a + w1 - ma, 0.0);
  float b2 = max(tx2.a + w2 - ma, 0.0);

  return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);
}

// the ws are the height of that texture; biggest w wins
// The depth is the transition between them? maybe?

// The height goes in the alpha channel of the textures 1 and 2
// the w is the weight? the weight should be the transition?
// depth is.. I don't know, a weird offset? No idea tbh

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

`,Jd=`

// if(vFresnelPos.y < 0.0) {
//   discard;
// }

// TODO Pack multiple resolutions into one to prevent this nonsense
float fade0 = texture2D(fadeFine, vUv).r;
float fade1 = texture2D(fadeFine, vUUv).r;
float fade2 = texture2D(fadeFine, vWv).r;

//// PREP MAP

vec4 texelColor = texture2D( grassMap, vUv );

//// SCALED TEXTURE

float blendVal = fade2 * (0.5 + vLightGrass);

float depthLerp = 0.0;
if(vCamDepth > 500.0) {
  depthLerp = 1.0;
} else {
  depthLerp = 0.5 + (vCamDepth / 2.0) / 500.0;
}

texelColor *= 1.0 - (blendVal * depthLerp);

//// GRASS BASE

// Blend them into two colours

float grassBlend = (screen(fade1, fade0) + vDarkGrass) / 2.0;

vec3 grassCol = mix(
  mix(grassColA, grassColB, grassBlend),
  mix(peakColA, peakColB, grassBlend),
  vLightGrass
);

//// APPLY GRASS COLOUR

texelColor.rgb *= grassCol;

texelColor.r = max(0.0, min(1.0, texelColor.r));
texelColor.g = max(0.0, min(1.0, texelColor.g));
texelColor.b = max(0.0, min(1.0, texelColor.b));

//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv);
forestCol.a = forestCol.r * 2.0 * fade2;

float fTreeMask = min(1.0, vTreeMask);

if(fTreeMask > 0.0) {
  // texelColor.a = texelColor.g - 0.2;
  texelColor = terrainBlend(
    texelColor,
    1.0-fTreeMask,
    forestCol,
    fTreeMask,
    0.1 + (1.0 - fTreeMask) * fade0 * 0.9
  );
  // texelColor = mix(texelColor, forestCol, fTreeMask);

  texelColor.a = 1.0;
}


//// SAND BLEND

float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

if(vHeight < 4.0) {

  float dark = 1.0;

  if(vHeight < 0.0) {
    texelColor = texture2D(sandMap, vUv) * 0.75;
  } else {

    if(vHeight < 2.0) {

      // Darken toward water
      dark = min(dark, 1.0 - (2.0 - vHeight) / 8.0);

    } else if(vHeight > 2.5) {

      // Darken into the grass
      dark = 1.0 - (vHeight-2.5) / 2.0;

    }

    // Lerp from grass to thingy
    float lerp = max(0.0, (vHeight - 1.0) / 3.0);

    vec4 sandCol = texture2D(sandMap, vUv);

    texelColor.a = texelColor.r;

    sandCol.a = sandCol.r;

    // Apply shading based on water/grass proximity
    sandCol.rgb *= dark;

    texelColor = terrainBlend(
      texelColor,
      lerp,
      sandCol,
      1.0 - lerp,
      0.05
    );


    // texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);

    // texelColor = terrainBlend(
    //   texture2D(sandMap, vUv) * dark,
    //   dark,
    //   texelColor,
    //   texelColor.g,
    //   height / 4.0
    // );
  }
}

//// ROAD GRAVEL

if(seasonIndex < 3) {

  if(roadProx != 0.0 && roadProx < 0.25 + fade0 * 2.0) {

    float rp = roadProx / (0.25 + fade0 * 2.0);

    // Mix into forest colour if we're under trees
    if(seasonIndex == 2 && vShadow > 0.0) {

      texelColor = mix(

        mix(texture2D(gravelMap, vUv*2.0), forestCol, min(1.0, vShadow * 2.0)),

        texelColor,
        smoothstep(
          rp + 0.35,
          rp - 0.35,
          1.0 - texelColor.g
        )
      );

    } else {

      texelColor = mix(
        texture2D(gravelMap, vUv*2.0),
        texelColor,
        smoothstep(
          0.0,
          1.0,
          rp
        )
      );

    }

  }

}

//// ROAD SURFACE?

if(roadProx < 0.0) {

  vec4 roadSurface = texture2D(roadMap, rUv);

  if(roadProx < -1.0) {
    texelColor = mix(texelColor, roadSurface, roadSurface.a);
  } else {
    texelColor = mix(texelColor, roadSurface, roadSurface.a * abs(roadProx));//roadSurface.a * (abs(roadProx)); / -0.5));
  }
}

//// STEEPNESS CLIFF


// Oh here's where I do the distance thing?
if(roadProx == 0.0) {
  rockTex = texture2D(rockMap, vWv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = (1.0 - texture2D(rockMapBump, vWv).r) * 0.95;
} else {
  rockTex = texture2D(rockMap, vUv) * (1.0 - fTreeMask * 0.5);
  rockTex.a = texture2D(rockMapBump, vUv).r;
}


  texelColor.a = 0.2 + fade2 * 0.2;
texelColor = terrainBlend(texelColor,0.6, rockTex, steepness, 0.05);
texelColor.a = 1.0;

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?


totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor.rgb = vNormal.rgb;

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort

// diffuseColor.r = min(max(0.0, diffuseColor.r), 1.0);
// diffuseColor.g = min(max(0.0, diffuseColor.g), 1.0);
// diffuseColor.b = min(max(0.0, diffuseColor.b), 1.0);



`,$d=`
    uniform sampler2D noiseMap;
	uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
	uniform float shadowFactor;
	uniform float discolourationFactor;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    float distanceSqFlat(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,ec=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;

	// SPECIAL HANDLING FOR CYPRESS TO AVOID IT BEING TOO DARK
	if(vMapUv.x > 0.76) {
	  discolouration = (discolouration / 2.0) + 0.5;
	}
`,tc=`

	// Cone effect on the shadow
	// TODO - set up different parameters for different trees, they have different coniness.

	// Heightlerp controls how high up the effect takes hold
	float shadowRadius = 3.2 - max(0.2,heightLerp*1.4) * 1.8;
	vShadow = shadowRadius - centerDist;

	// Assume trunk sunk, handle it specially
	if(heightLerp < 0.0 && centerDist < 0.5) {
		vShadow = 0.5;
	}

	// vShadow *= shadowFactor;
`,ic=`

	// Note - can use instance matrix 1, 1 for scale proxy?

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    // Assumes trees are 10m tall
    // float heightLerp = min(1.0, (position.y - instanceMatrix[1][1]) / 10.0);
	float heightLerp = position.y / 10.0;

    float centerDist = sqrt(position.x*position.x + position.z*position.z);

	// Angled upwards in a constant cone
	if(centerDist < 0.0001) {
		// Trunk
		vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, 1.0, position.z));
	} else {
	    if(position.y < 0.0) {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x,0.0, position.z));
		} else {
			vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(position.x, max(0.5, heightLerp*1.5)*centerDist, position.z));
		}
	}

	if(heightLerp > 1.0) { heightLerp = 1.0; }

	// Straight up
	// vCenterNormal = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0,1.0,0.0));


`+tc+`



`+ec+`

    // IF WEIGHED DOWN BY SNOW UNCOMMENT THIS!?
	// if(centerDist > 0.1) {
	// 	transformed.y -= centerDist / 2.0 + heightLerp * 1.0;
	// }

    // Need to get mvPosition here
    #include <project_vertex>



    if(-mvPosition.z < dissolveNear) {
        vDissolve = 0.0;
    } else {
        if(-mvPosition.z > dissolveFar) {
            vDissolve = 1.0;
        } else {
            vDissolve = (-mvPosition.z - dissolveNear) / dissolveInterval;
        }

    }

`,sc=`

    uniform sampler2D noiseMap;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;

    float fShadow;

`,rc=`

if(vMapUv.x > 0.125) {
	diffuseColor.g *= discolouration;
	// if(diffuseColor.g > diffuseColor.r) {
}

`,oc=`

	diffuseColor.g *= discolouration;

`,ac=`

	if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
		discard;
	}

    fShadow = max(0.0, min(1.0, vShadow));

	fShadow = sqrt(fShadow) * 0.65;


`+rc+`

	diffuseColor.rgb *= 1.0 - fShadow;
	// totalEmissiveRadiance = vec3(0.5, diffuseColor.gb * 8.0);//diffuseColor.rgb;

`,lc=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// spot lights shine through the shadow
		directLight.color *= 1.0 + fShadow;

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // if(fShadow > 0.5) {
            // directLight.color *= 1.0 - fShadow;
        // }

        // Normal dot comparison

        //// Even normal (bit weak)
        // directLight.color *= max(0.0, 1.0-((dot(directLight.direction, vCenterNormal) + 1.0) / 2.0));

        //// 1.2x normal (about right?)
        // float dotDirLightFactor = min(1.0, max(0.0, -dot(directLight.direction, vCenterNormal) + 0.2));
        // directLight.color *= min(1.0, dotDirLightFactor + 0.0);


        //// Cross vecs - idea is to mix to tangent by dot factor
        // vec3 cross1 = cross(vCenterNormal, geometry.normal);
        // vec3 cross2 = cross(cross1, vCenterNormal);
        // geometry.normal = mix(geometry.normal, cross2, min(1.0, max(0.0, ddot * -2.0)));


        //// WORKING SQUASH - ONLY IF DOT < 0
        // When the dot is 1, it's in shadow
        // When the dot is -1, it's in full light
        // So when the dot is > 0.0 we want to reduce the amount of light by dot * 2.0
        // which means multiplying by 1.0 - dot * 2.0
        // Oh -- If we use the cylinder test for centernormal, with overhead light, the dot here will never be > 0

        // Problem is we still want it lit up to like -0.1 dot

        // directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * -2.0));

        // directLight.color *= max(0.0, min(1.0, dot(directLight.direction, vCenterNormal) + 0.25));


        // Direct normal (bit severe)
        directLight.color *= max(0.0, dot(directLight.direction, vCenterNormal));

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

    //// SHADOW EFFECT ON AMBIENT

	if(fShadow > 0.25) {
		// irradiance *= 1.25 - fShadow;
	}

	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nc=`

float faceDirection = gl_FrontFacing ? 1.0 :  1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vCenterNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;
`,dc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( min(1.0, dot( geometry.normal, directLight.direction ) + 0.25) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,cc=`
    uniform sampler2D noiseMap;
    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float shadowFactor;
    uniform float discolourationFactor;
    uniform float alphaTest;
    // uniform float time;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;
    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;

    float distanceSq(vec3 a, vec3 b) {
        return (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y) + (b.z - a.z)*(b.z - a.z);
    }

    // vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
    //     return vec2(
    //         cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
    //         cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    //     );
    // }

`,yn=`
    discolouration = 1.0 + (texture2D(noiseMap, vec2(wPos.x/256.0,wPos.z/256.0)).r - 0.5) * discolourationFactor;
`,hc=`
    // Get the direction to the center, in a pill shape to preserve the trunk normals?

    #if defined(USE_INSTANCING)

        // INSTANCED VERSION USED FOR LIVE

        if(vMapUv.y > 0.25) {
            vCenterNormal =  normalMatrix * mat3(modelMatrix * instanceMatrix) * normalize(position - vec3(0.0, min(position.y, 5.0), 0.0));
        } else {
            vCenterNormal = normalMatrix * mat3(instanceMatrix) * normalize(position - vec3(0.0, 7.0, 0.0));
        }

    #else

        // NON-INSTANCE VERSION USED FOR IMPOSTER GENERATION

        if(vMapUv.y > 0.25) {
            vCenterNormal = normalMatrix * normalize(vec3(0.0, 5.0, 0.0) - position);
        } else {
            // Trunk - test against leaf center
        }

    #endif

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);


`,fc=`

    vec4 wPos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);

    vShadow = 0.0;
    // What if we say all trees are 10m tall by default? center at 5.0?

    // Fake shadow by testing against direction to center..?
    // Works nicely but not great for directional light and normal light

    float distToCenter = distanceSq(position, vec3(0.0, 5.0, 0.0));//min(position.y, 5.0), 0.0));

    if(distToCenter < 36.0) {
        if(distToCenter < 8.0) {
            vShadow = 1.0;
        } else {
            // distToCenter = sqrt(distToCenter);
            // vShadow = 1.0 - (distToCenter - 3.0) / 3.0;
            vShadow = 1.0 - (distToCenter - 8.0) / 28.0;
        }
    }
    if(position.y < 1.0) {
        vShadow = min(1.0, 1.0 - position.y);
    }


`+hc+`
`+yn+`


    // if(uv.y > 0.25) {
    //     vec4 wPos2 = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    //     float angleToCamera = atan(wPos2.x - cameraPosition.x, wPos2.z - cameraPosition.z);
    //     transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));
    // }

    // ANIMATION TESTING
    // vec4 wPos2 = modelMatrix * instanceMatrix * vec4(position, 1.0);
    // float tt = time * 0.01;
    // vec2 blowUV = vec2(wPos2.x / 20.0 + tt, wPos2.z / 80.0 + tt / 4.0);
    // if(uv.y > 0.26) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += sin(blow) * 2.0 * uv.x;//sin(blow) * 0.2;
    //     transformed.y += sin(blow) * 2.0;
    //     transformed.z += cos(blow) * 2.0 * (1.0 - uv.x);//cos(blow) * 0.2;
    // }

    // Need to get mvPosition here
    #include <project_vertex>


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 0.0;
    } else {

        if(-mvPosition.z > dissolveFar) {
            vDissolve = 1.0;
        } else {
            vDissolve = (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // Dynamic alpha test... just testing for now? can't decide if it's worthwhile
    vAlphaTest = alphaTest;
    if(dissolveFar > 200.0) {
        if(-mvPosition.z < dissolveFar) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (dissolveFar + dissolveInterval)));
        }
    } else {
        if(-mvPosition.z < 200.00) {
            // Second term is 0 at dissolveFar, 0.5 at half way to dissolve...
            vAlphaTest = max(0.3, alphaTest * (1.0 + mvPosition.z / (300.0)));
        }
    }


    float vShadowFade = 0.0;

    if(-mvPosition.z < 25.0) {
        vShadowFade = 1.0;
    } else {
        vShadowFade = 1.0 - (-mvPosition.z - 25.0) / 125.0;
    }

    vShadow *= vShadowFade * shadowFactor;



`,uc=`

    uniform sampler2D noiseMap;
    uniform float radiance;
    uniform bool hasSnow;

    varying float discolouration;
    varying float vShadow;
    varying float vDissolve;

    varying vec3 vCenterNormal;
    varying vec3 vCameraUp;
    varying float vAlphaTest;


`,vc=`

    if(vDissolve == 1.0 || texture2D(noiseMap, vMapUv).r < vDissolve) {
        discard;
    }

    if(diffuseColor.g > diffuseColor.b * 1.5) {
        // We have a leaf? Not very reliable.. might need a leafmap eventually

        // Recolour...
        diffuseColor.rg *= discolouration;

        // Emissive...
        totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
    }
`,mc=`
    if(diffuseColor.a < vAlphaTest) discard;
`,gc=`

    // Use the normal to blend with snow colours

    // ONLY DO THIS ON SNOW VIBES
    if(hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        if(dotUp > 0.1) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(min(1.0, 0.5 + dotUp)), min(1.0, (dotUp - 0.1) * 8.0));
        }
    }


`,pc=`

    if(vType < 0.5) {
        // We have a leaf
        // if(diffuseColor.g > diffuseColor.b * 1.5) { // For some reason it looks better if it's darker than regular tree?
            diffuseColor.rg *= discolouration;
            // Emissive... unclear why this needs to be different to the regular tree emissive. Suspicious. Just a shadowmap diff?
            totalEmissiveRadiance = vec3(diffuseColor.rg * 8.0, 0.5) * radiance;
        // }
    } else {
        `+oc+`
    }
`,_c=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

    geometry.normal = normalize((normal));// + vCenterNormal) / 2.0);

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

        // TODO Could have some fun here to improve the night lighting?
		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        // if(vShadow > 0.5) {
            directLight.color *= vShadow;
        // }

		RE_DirectSpot( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

    geometry.normal = normal;

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		//// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        if(vMapUv.y > 0.25) {
            directLight.color *= 1.0 - vShadow * 0.5;
        }

        // Normal dot comparison

        //// Even normal (bit weak)
        // directLight.color *= max(0.0, 1.0-((dot(directLight.direction, vCenterNormal) + 1.0) / 2.0));

        //// 1.2x normal (about right?)
        // float dotDirLightFactor = min(1.0, max(0.0, -dot(directLight.direction, vCenterNormal) + 0.2));
        // directLight.color *= min(1.0, dotDirLightFactor + 0.0);


        //// Cross vecs - idea is to mix to tangent by dot factor
        // vec3 cross1 = cross(vCenterNormal, geometry.normal);
        // vec3 cross2 = cross(cross1, vCenterNormal);
        // geometry.normal = mix(geometry.normal, cross2, min(1.0, max(0.0, ddot * -2.0)));



        //// WORKING SQUASH - ONLY IF DOT < 0
        // When the dot is 1, it's in shadow
        // When the dot is -1, it's in full light
        // So when the dot is > 0.0 we want to reduce the amount of light by dot * 2.0
        // which means multiplying by 1.0 - dot * 2.0
        // Oh -- If we use the cylinder test for centernormal, with overhead light, the dot here will never be > 0


        directLight.color *= min(1.0, max(0.25, dot(directLight.direction, vCenterNormal) * 2.0));


        // Direct normal (bit severe)
        // directLight.color *= max(0.0, -dot(directLight.direction, vCenterNormal));

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif


		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

    //// SHADOW EFFECT ON AMBIENT
	if(vShadow > 0.5) {
		irradiance *= 1.5 - vShadow;
	}
	////

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,bc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

    // Scale and square to keep the txture and detail in the leaves in headlights

    float dotty = (max(-0.5, -0.5 + dot( geometry.normal, directLight.direction )));// / 2.0 ) + 0.25;
	float dotNL = saturate( dotty );
    dotNL = max(0.1, dotNL);
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}


void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_DirectSpot           RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert

`,wc=`

    uniform sampler2D noiseMap;

    attribute float variant;
    attribute float type;
    attribute float orientation;
    attribute float dissolve;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

    varying float discolouration;

    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float discolourationFactor;

    vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
        return vec2(
            cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
            cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
        );
    }
`,yc=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Sc=`

    vUv = uv;

    vType = type;

`+yn,Dc=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,Lc=`


    // Rotate the vertices to face the camera
    transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));

    // Account for rotational offset in model
    angleToCamera -= orientation;

    // Normalise to inverval [-PI, PI]
    if(angleToCamera > PI) {
        angleToCamera -= PI*2.0;
    } else if(angleToCamera < -PI) {
        angleToCamera += PI*2.0;
    }

    // Choose tile from texture based on angle
    float tileIndex = (angleToCamera + PI) / (PI * 2.0 / 16.0);

    // Should be 0 when angle is exactly face-on, 1 when exactly betwen tiles
    // Note that this should be scaled to the alphaTest value?



    vUvOffset.x = (1.0 / 16.0) * floor(tileIndex);

    // Set vertical offset by variant type
    vUvOffset.y = variant / 4.0;

    // Need to get mvPosition here
    #include <project_vertex>

    if(-mvPosition.z > 500.0) {
        vAngleBlend = 0.0;
    } else {
        vAngleBlend = (tileIndex - floor(tileIndex));
    }


    if(-mvPosition.z < dissolveNear) {
        vDissolve = 1.0;
    } else {
        if(-mvPosition.z > dissolveFar) {
            vDissolve = 0.0;
        } else {
            vDissolve = 1.0 - (-mvPosition.z - dissolveNear) / dissolveInterval;
        }
    }

    // vDist = min(0.75, max(0.4, 1.0 - -mvPosition.z / 1000.0));

    vDissolve *= dissolve;

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);
`,Cc=`

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    // varying float vDist;

    varying float discolouration;

    uniform sampler2D noiseMap;
    uniform sampler2D mapB;
    uniform sampler2D normalMapB;
    uniform float radiance;
    uniform bool hasSnow;
`,kc=`


    vec4 texelColor;

    if(vType < 0.5) {
        texelColor = texture2D( map, vUv + vUvOffset );
    } else {
        // Map B
        texelColor = texture2D( mapB, vUv + vUvOffset );
    }

    // Transform uvs to square to  sample from noise texture
    float blendNoise = texture2D(noiseMap, vec2(vUv.x*5.33*4.0, vUv.y*4.0)).r;

    // Blend to next texture by angle offset?
    if(blendNoise < vAngleBlend) {
        vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);
        if(blendUV.x > 1.0) {
            blendUV.x -= 1.0;
        }

        if(vType < 0.5) {
            texelColor = textureGrad(map, blendUV, dFdx(vUv), dFdy(vUv));
        } else {
            texelColor = textureGrad(mapB, blendUV, dFdx(vUv), dFdy(vUv));
        }
    }

    if(blendNoise < vDissolve) {
        texelColor.a = 0.0;
    }

    diffuseColor *= texelColor;

`+pc,Ic=`
    vec2 vNormalMapUvOffset = vNormalMapUv + vUvOffset;

    #ifdef USE_NORMALMAP_OBJECTSPACE

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }

        // vNormalMapUvOffset.x = min(max(vNormalMapUvOffset.x, 0.0), 1.0);

        // normal = texture2D( normalMap, vNormalMapUvOffset ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

        if(vType < 0.5) {
            normal = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            normal = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif

        normal = normalize( normal );

        diffuseColor.rgb = vec3(normal.x);

    #elif defined( USE_NORMALMAP_TANGENTSPACE )

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }


        vec3 mapN;

        if(vType < 0.5) {
            mapN = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            mapN = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        mapN.xy *= normalScale;

        normal = normalize( tbn * mapN );

    #elif defined( USE_BUMPMAP )

        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

    #endif

    // SNOW
    if(vType < 0.5 && hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        // Note that we use different parameters to the regular trees
        if(dotUp > 0.0) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), min(1.0, dotUp * 8.0));
        }
    }
`,Mc=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

        reflectedLight.directSpecular = reflectedLight.directDiffuse;

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        //// SR EDIT - FAKE DIM SPOTLIGHTS ON IMPOSTERS
        directLight.color *= 0.2;
        ////

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Ec=`
    // attribute float variant;
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    // Must match the ground shader
    float wuvSize = 800.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Ac=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

    vFresnelPos = wPos.xyz;
    vFresnelPos.y -= 1.5; // Subtract the sprite midpoint to get the ground position?

    vFresnelNorm = groundNormal;

    // Grass colouration UVs
    vGv.x = wPos.x / 10.0;
    vGv.y = wPos.z / 10.0;

    vGGv.x = vGv.x / 16.0;
    vGGv.y = vGv.y / 16.0;

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    vWWv.x = vWv.x / 8.0;
    vWWv.y = vWv.y / 8.0;



    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vRoadProx = roadProx;

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    // Get uvLookup  from variant
    /* Indexed into the texture as such:

        2 | 3
        - + -
        0 | 1

    */

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;
    float fade1 = texture2D(noiseMap, vWWv).r;
    float v = texture2D(noiseMap, vGGv).r;

    float variant = 1.0;

    // CHECK HEATHER - has to match the ground function
    // Might want to find something cheaper to do here?
    float heather = smoothstep(0.4, 1.0, ((wPos.y + fade1 * 350.0) - 60.0) / 500.0);
    heather *= screen(fade1, fade0);
    // heather = smoothstep(0.3, 0.6, heather);
    if(vShadow < 0.1 && heather > 0.4 + v / 5.0 ) {
        variant = 3.0;

        if(roadProx > 1.0) {
            transformed.y -= v * 0.2;
        } else {
            transformed.y -= v * 0.2 * roadProx;
        }
    }


    if(vRoadProx < v * 2.0 + 0.2) {
        // Little grass
        variant = 0.0;
    } else if(variant < 3.0 && ( wPos.y > 100.0 && v + fade0 > 1.75 - (wPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

       // big grass

        variant = 2.0;
    } else if(variant == 3.0) {
        transformed.xyz *= 0.5 + fade0 * 1.5;
    }



    doDiscard = 0.0;
    doColor = 0.0;
    if(variant < 3.0) {
        doColor = 1.0;

        // SET UP GRASS COLOURATION PARAMS


        float heightVal = min(1.0, max(0.0, (wPos.y - (20.0 + fade1 * 40.0))/160.0));

        vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

        vDarkGrass =  min( max( 0.0, (fade1 - 0.25) * 2.0), 1.0);

        if(vRoadProx < 0.5 + fade1) {
            vLightGrass *= max(0.5, vRoadProx / (0.5 + fade1));
        }
    }

    vUvOffset.x = variant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition




    // Limit darkness by thingy
    // darkness = min(0.5, -tPos.z / sproutNear);

    //// MODIFY MV POSITION

    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);

    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / (sproutFar - sproutNear) * 0.5;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }

    #include <project_vertex>


    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }

    vShadow *= shadowFactor;

`,Tc=`

    uniform sampler2D noiseMap;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    uniform vec3 grassColA;
    uniform vec3 grassColB;
    uniform vec3 peakColA;
    uniform vec3 peakColB;

    uniform float radiance;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Pc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Nc=`

    // Don't draw grass beyond view dist
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    // Limit darkness by distance?
    // texelColor.rgb = vec3(max(texelColor.r, darkness));

    if(doColor > 0.5) {

        // Shared with ground.glsl - TODO share a chunk instead?

        float grassBlend = (screen(texture2D(noiseMap, vGv).r, texture2D(noiseMap, vGGv).r) + vDarkGrass) / 2.0;

        vec3 grassCol = mix(
            mix(grassColA, grassColB, grassBlend),
            mix(peakColA, peakColB, grassBlend),
            vLightGrass
        );

        texelColor.rgb *= grassCol;

    } else if(texelColor.a < 0.98) {
        // Lazy fix for heather white pixels
        discard;
        // texelColor.rgb = vec3(0.05, 0.04, 0.03);
    }

    diffuseColor *= texelColor;


    //// PREP EMISSIVE?

    // NOTE this must match the ground. Ideally share a chunk?
    totalEmissiveRadiance = texelColor.rgb * radiance;


`,xc=`
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float variant;
    // attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform float sproutMargin;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;

    varying vec2 vUv;
    varying vec2 vWv;


    varying float vAlphaTest;
    varying float vShadow;
    varying float doDiscard;

    varying float vAO;

    varying vec2 vUvOffset;

    float wuvSize = 512.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Rc=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    vAO = max(0.0, min(0.5, position.y)) * 2.0;

    // Get uvLookup  from variant

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;

    // The fade is normally distributed; look up the variant from type thingy whatsit
    float vVariant = variant;

    // If variant is unset in the buffer, set it procedurally
    if(vVariant == 0.0) {
        if(vShadow > 0.1) {
            // Higher chance of fern
            if(fade0 > 0.41) {
                if(fade0 > 0.52) {
                    vVariant = 2.0;
                } else {
                    vVariant = 1.0;
                }
            }
        } else {
            // Lower chance for ferns
            if(fade0 > 0.46) {
                if(fade0 > 0.54) {
                    vVariant = 1.0;
                } else {
                    vVariant = 2.0;
                }
            }

            // Also check for gorse
            // if(wPos.y > 150.0) {
            //     if(wPos.y > 200.0) {
            //         if(wPos.y > 230.0) {
            //             vVariant = 3.0;
            //         } else {
            //             // Really high up, bushes must be gorse or generic?
            //             if(vVariant < 2.0) {
            //                 vVariant = 0.0;
            //             } else {
            //                 vVariant = 3.0;
            //             }
            //         }
            //     } else if(vVariant == 2.0) {
            //         vVariant = 3.0;
            //     }
            // }
        }
    }

    vShadow *= shadowFactor;

    // Thinking about rules...
    //  - Gorse higher up
    //  - Soft things alongside the road regardless of elevation
    //  - Ferns only close to trees

    // Should I add more variants?
    //  - nettles and brambles
    //  - cow parsley and generic
    //  - ferns
    //  - two types of gorse
    //  - dock
    //  - ..?

    // Could do variant-specific things here like flattening ferns?
    if(vVariant == 2.0) {
        transformed.y -= 0.1;
    }

    vUvOffset.x = vVariant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition

    //// MODIFY MV POSITION

    doDiscard = 0.0;

    // TODO can this be done once somewhere?
    float dist = (wPos.x - cameraPosition.x)*(wPos.x - cameraPosition.x) + (wPos.z - cameraPosition.z)*(wPos.z - cameraPosition.z);
    if(dist > sproutNear) {

        transformed.y -= (dist - sproutNear) / sproutMargin;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }


    #include <project_vertex>

    // Keeping this here as a maybe.
    if(-mvPosition.z < 10.0) {
        vAlphaTest = 0.5;
    } else {
        vAlphaTest = max(0.2, 0.5 - (-mvPosition.z-10.0) / 110.0);
    }

    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }


`,Uc=`

    uniform sampler2D noiseMap;
    uniform float radiance;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vAlphaTest;

    varying float vShadow;
    varying float vAO;
    varying float doDiscard;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,Oc=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Vc=`

    // Don't draw beyond view dist?
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    if(texelColor.a < vAlphaTest) {
        discard;
    }

    diffuseColor *= texelColor;

    //// PREP EMISSIVE?

    totalEmissiveRadiance = texelColor.rgb * radiance * vAO;//texelColor.rgb * 2.0; // * (1.0 - vLightGrass * 0.8);

`,eo=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,Hc=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,to=`

    uniform float fresnelIntensity;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,io=`
    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );

    if(fresnel > 0.75) {

        // Highlights

        fresnel = (fresnel - 0.75) * 4.0;
        fresnel *= fresnel * fresnel;

        diffuseColor.rgb *= 1.0 + fresnel * fresnelIntensity * (1.0 - vShadow);

    } else {

        // Lowlights

        // fresnel = 1.0 - max(0.0, (fresnel - 0.25) * 2.0);

        fresnel = 1.0 - fresnel * 1.3333;

        // fresnel *= fresnel;

        fresnel *= fresnelIntensity;

        if(fresnel > 0.25) {
            fresnel = 0.25 + (fresnel - 0.25) * 0.5;
            if(fresnel > 0.5) {
                fresnel = 0.5;
            }
        }

        diffuseColor.rgb *= 1.0 - fresnel;

    }
`,zc=`
    attribute float bridge;
    varying float vBridge;
`,qc=`
    vBridge = bridge;
`,Fc=`
    uniform sampler2D shadowMap;
    uniform bool useShadowBlend;
    uniform sampler2D bridgeMap;
    uniform bool useBridgeBlend;

    varying float vBridge;
`,Gc=`

#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vMapUv );

    if(useBridgeBlend && vBridge > 0.0) {
        texelColor = mix(texelColor, texture2D( bridgeMap, vMapUv), vBridge);
    }

    if(useShadowBlend && vShadow > 0.0) {
        texelColor = mix(texelColor, texture2D(shadowMap, vMapUv), vShadow);
    }

    totalEmissiveRadiance = texelColor.rgb * radiance;

	diffuseColor *= texelColor;

#endif
`,Sn=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight, float blend ) {

	// Might be something more intelligent I could do here?

	//saturate( (0.1 - abs(dot( geometry.normal, directLight.direction )) * 0.1 ) * blend );

	float dotNL = 0.1 + (1.0 - abs(dot( geometry.normal, directLight.direction ))) * 0.1;
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_Direct_Spot          RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,Dn=`

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		// Could darken it at the bottom...
		// directLight.color *= vUv.y*2.0;

		// Could also pass this in so we know what to do with the normal?

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// - max(0.0, (1.0 - vRoadProx)) * (1.0 - vUv.y)
		RE_Direct_Spot( directLight, geometry, material, reflectedLight, 1.0);

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

        //// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // TODO - might be best to change the underlying fragment for the scene?

        directLight.color *= 1.0 - vShadow;

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Bc=""+new URL("./noise_fine.9cdaf478.webp",import.meta.url).href,Wc=""+new URL("./noise_finer.56c77b62.webp",import.meta.url).href,Ui="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",jc=""+new URL("./sea_waves.63ff8729.webp",import.meta.url).href,Fo=""+new URL("./signs.c90afd62.webp",import.meta.url).href,Yc="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",Kc=`

uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Rt=Ft(Ui),Ms=Ft(Bc,4,void 0,Wr),Xc=Ft(Wc,4,void 0,Wr);Ft(Yc,1);const ke=new Et({map:Ft(Ui),displacementMap:Ft(Ui),fog:!0});ke.needsCameraPosition=!0;ke.userData.grassMap={value:null};ke.userData.sandMap={value:null};ke.userData.rockMap={value:null};ke.userData.rockMapBump={value:null};ke.userData.gravelMap={value:null};ke.userData.roadMap={value:null};ke.userData.forestMap={value:null};ke.userData.fadeFine={value:Ms};ke.userData.roadCol={value:[]};ke.userData.fresnelIntensity={value:.5};ke.userData.radiance={value:0};ke.userData.grassColA={value:[]};ke.userData.grassColB={value:[]};ke.userData.peakColA={value:[]};ke.userData.peakColB={value:[]};ke.userData.vehicleIndex={value:0};ke.userData.sinkDist={value:400};ke.userData.seasonIndex={value:1};ke.onBeforeCompile=s=>(s.uniforms.grassMap=ke.userData.grassMap,s.uniforms.sandMap=ke.userData.sandMap,s.uniforms.rockMap=ke.userData.rockMap,s.uniforms.rockMapBump=ke.userData.rockMapBump,s.uniforms.gravelMap=ke.userData.gravelMap,s.uniforms.roadMap=ke.userData.roadMap,s.uniforms.forestMap=ke.userData.forestMap,s.uniforms.fadeFine=ke.userData.fadeFine,s.uniforms.grassColA=ke.userData.grassColA,s.uniforms.grassColB=ke.userData.grassColB,s.uniforms.peakColA=ke.userData.peakColA,s.uniforms.peakColB=ke.userData.peakColB,s.uniforms.roadCol=ke.userData.roadCol,s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.sinkDist=ke.userData.sinkDist,s.uniforms.vehicleIndex=ke.userData.vehicleIndex,s.uniforms.shadowFactor=us,s.uniforms.seasonIndex=ke.userData.seasonIndex,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",Xd+eo),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",Qd),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",Zd+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Jd+io),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const gi=new Et({map:Ft(Ui),alphaTest:.75});gi.needsCameraPosition=!0;gi.userData.shadowMap={value:Rt};gi.userData.bridgeMap={value:Rt};gi.userData.useShadowBlend={value:!1};gi.userData.useBridgeBlend={value:!1};gi.onBeforeCompile=s=>(s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowMap=gi.userData.shadowMap,s.uniforms.useShadowBlend=gi.userData.useShadowBlend,s.uniforms.bridgeMap=gi.userData.bridgeMap,s.uniforms.useBridgeBlend=gi.userData.useBridgeBlend,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+zc+vd+eo),s.vertexShader=s.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+qc+md+Hc),s.fragmentShader=s.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+Fc+gd+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Gc+io),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),s);const Qc=new Es({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0});Qc.needsCameraPosition=!0;const lt=new Es({depthTest:!1,fog:!0,map:Rt,toneMapped:!0,side:Oi});lt.needsCameraPosition=!0;lt.userData.highlight={value:new As(16777215)};lt.userData.lowlight={value:new As(15658734)};lt.userData.hasClouds={value:!0};lt.userData.camPos={value:new mi};lt.userData.time={value:0};lt.userData.shelfHeight0={value:1e3};lt.userData.shelfHeight1={value:1200};lt.userData.skyScale0={value:6e3};lt.userData.skyScale1={value:3e3};lt.userData.mode={value:0};lt.userData.altitude={value:200};lt.customProgramCacheKey=()=>"clouds";lt.onBeforeCompile=s=>(s.uniforms.highlight=lt.userData.highlight,s.uniforms.lowlight=lt.userData.lowlight,s.uniforms.hasClouds=lt.userData.hasClouds,s.uniforms.camPos=lt.userData.camPos,s.uniforms.time=lt.userData.time,s.uniforms.shelfHeight0=lt.userData.shelfHeight0,s.uniforms.shelfHeight1=lt.userData.shelfHeight1,s.uniforms.skyScale0=lt.userData.skyScale0,s.uniforms.skyScale1=lt.userData.skyScale1,s.uniforms.mode=lt.userData.mode,s.uniforms.altitude=lt.userData.altitude,s.vertexShader=s.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+Fd),s.vertexShader=s.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+Gd),s.vertexShader=s.vertexShader.replace("#include <fog_pars_vertex>",Wd),s.vertexShader=s.vertexShader.replace("#include <fog_vertex>",jd),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",Bd),s.fragmentShader=s.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Yd),s.fragmentShader=s.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+Kd),s);let ms=new Es({});ms.userData.camPos={value:new mi};ms.userData.waves={value:Ft(jc,4,void 0,Fn)};ms.userData.body={value:new As};ms.userData.highlight={value:new As};ms.userData.time={value:0};ms.needsCameraPosition=!0;const Yt={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function Go(s=!1){let e=new Et({map:Rt,normalMap:s?null:Rt,alphaMap:s?Rt:null,alphaTest:s?.4:.5,side:Oi,normalMapType:s?null:Js,forceSinglePass:!0,customProgramCacheKey:()=>"tree"});return e.needsCameraPosition=!0,s?e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:Ms},t.uniforms.dissolveNear=Yt.dissolveNear,t.uniforms.dissolveFar=Yt.dissolveFar,t.uniforms.dissolveInterval=Yt.dissolveInterval,t.uniforms.discolourationFactor=Yt.discolourationFactor,t.uniforms.shadowFactor=us,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+$d),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",ic),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",nc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+sc),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+ac),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",dc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",lc),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t):e.onBeforeCompile=t=>(t.uniforms.noiseMap={value:Ms},t.uniforms.dissolveNear=Yt.dissolveNear,t.uniforms.dissolveFar=Yt.dissolveFar,t.uniforms.dissolveInterval=Yt.dissolveInterval,t.uniforms.radiance=Yt.radiance,t.uniforms.discolourationFactor=Yt.discolourationFactor,t.uniforms.shadowFactor=us,t.uniforms.hasSnow=Yt.hasSnow,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+cc),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",fc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",Yl),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_fragment>",mc),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+uc),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+vc),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+gc),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",bc),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",_c),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t),e}Go(),Go(!0);new Et({map:Rt,alphaTest:.25,side:Oi,forceSinglePass:!0});new Et({color:110832});const zt=new Et({map:Ft(Ui,0,Gn),normalMap:Ft(Ui,0,void 0,Wr),normalMapType:Js,alphaTest:.5,forceSinglePass:!0});zt.needsCameraPosition=!0;zt.userData.noiseMap={value:Ms};zt.userData.mapB={value:Ft(Ui)};zt.userData.normalMapB={value:Ft(Ui)};zt.userData.dissolveNear={value:100};zt.userData.dissolveFar={value:200};zt.userData.dissolveInterval={value:100};zt.onBeforeCompile=s=>{s.uniforms.noiseMap=zt.userData.noiseMap,s.uniforms.mapB=zt.userData.mapB,s.uniforms.normalMapB=zt.userData.normalMapB,s.uniforms.dissolveNear=zt.userData.dissolveNear,s.uniforms.dissolveFar=zt.userData.dissolveFar,s.uniforms.dissolveInterval=zt.userData.dissolveInterval,s.uniforms.radiance=Yt.radiance,s.uniforms.discolourationFactor=Yt.discolourationFactor,s.uniforms.hasSnow=Yt.hasSnow,s.vertexShader=s.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+wc),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Sc),s.vertexShader=s.vertexShader.replace("#include <beginnormal_vertex>",yc+`
`+Dc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",Lc),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Yl),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_maps>",Ic),s.fragmentShader=s.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Cc),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",kc),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Mc),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let Zc=.25;const _i=new Et({map:Rt,alphaTest:Zc,side:Oi,forceSinglePass:!0});_i.needsCameraPosition=!0;_i.userData.noiseMap={value:Ms};_i.userData.sproutNear={value:100*100};_i.userData.sproutFar={value:200*200};_i.customProgramCacheKey=()=>"grass";_i.onBeforeCompile=s=>{s.uniforms.noiseMap=_i.userData.noiseMap,s.uniforms.sproutNear=_i.userData.sproutNear,s.uniforms.sproutFar=_i.userData.sproutFar,s.uniforms.grassColA=ke.userData.grassColA,s.uniforms.grassColB=ke.userData.grassColB,s.uniforms.peakColA=ke.userData.peakColA,s.uniforms.peakColB=ke.userData.peakColB,s.uniforms.fresnelIntensity=ke.userData.fresnelIntensity,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+Ec+eo),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+Ac),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Tc+to),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Nc+`
`+io),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Pc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Sn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Dn),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let Jc=.5;const Xt=new Et({map:Rt,alphaTest:Jc,side:Oi,forceSinglePass:!0});Xt.needsCameraPosition=!0;Xt.userData.noiseMap={value:Xc};Xt.userData.sproutNear={value:100*100};Xt.userData.sproutFar={value:200*200};Xt.userData.sproutMargin={value:Xt.userData.sproutFar.value-Xt.userData.sproutNear.value};Xt.onBeforeCompile=s=>{s.uniforms.noiseMap=Xt.userData.noiseMap,s.uniforms.sproutNear=Xt.userData.sproutNear,s.uniforms.sproutFar=Xt.userData.sproutFar,s.uniforms.sproutMargin=Xt.userData.sproutMargin,s.uniforms.radiance=ke.userData.radiance,s.uniforms.shadowFactor=us,s.vertexShader=s.vertexShader.replace("#include <common>","#include <common>"+xc),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",""+Rc),s.fragmentShader=s.fragmentShader.replace("#include <common>","#include <common>"+Uc),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",Vc),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Oc),s.fragmentShader=s.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Sn),s.fragmentShader=s.fragmentShader.replace("#include <lights_fragment_begin>",Dn),s.fragmentShader=s.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const Ln=new Et({map:Rt,normalMap:Rt,alphaTest:.5,side:Oi,normalMapType:Js,forceSinglePass:!0,customProgramCacheKey:()=>"barrier"});Ln.onBeforeCompile=$s();Ln.needsCameraPosition=!0;const Cn=new Et({map:Rt,flatShading:!0});Cn.onBeforeCompile=$s();Cn.needsCameraPosition=!0;const kn=new Et({map:Rt,normalMap:Rt,flatShading:!0,alphaTest:.25,side:Oi,normalMapType:Js,forceSinglePass:!0,customProgramCacheKey:()=>"fence"});kn.onBeforeCompile=$s();kn.needsCameraPosition=!0;const In=new Et({map:Rt,flatShading:!0});In.onBeforeCompile=$s();In.needsCameraPosition=!0;const $c=new Et({map:Rt,flatShading:!0,side:Oi});$c.needsCameraPosition=!0;const so={white:new Et({color:16777215,emissive:16777215,emissiveIntensity:.2}),black:new Et({color:3355443,flatShading:!0}),reflect:new Et({color:16720418,emissive:16720418,emissiveIntensity:.2})};so.white.needsCameraPosition=!0;so.black.needsCameraPosition=!0;so.reflect.needsCameraPosition=!0;const ro=new Et({map:Ft(Fo,4),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:Ft(Fo,4),emissiveIntensity:0});ro.onBeforeCompile=s=>(s.fragmentShader=s.fragmentShader.replace("#include <lights_pars_begin>",Kc),s);ro.needsCameraPosition=!0;const eh=new Et({map:Rt,color:12303291,flatShading:!0});eh.needsCameraPosition=!0;const th=new Es({color:0,transparent:!0,opacity:.4});th.needsCameraPosition=!0;let Bo,Wo=16,ih=0,Ki=5e3,kr=11,jo=4,sh=2,gs=1e4,Ir=.8,ps=4e3;const S={id:0},Lt={},Ct={};class rh extends pd{constructor(t={}){super(t);q(this,"debug",!0);q(this,"config",{seed:"a",scale:1,offset:0,resolution:5,upresFactor:2,depth:3,depthHeightFactor:1,layerResolutions:[],squared:!1,temper:!1,temperBelow:100,temperMin:.25,spiralise:!0,maxCached:32,tileScaleRandom:0,tileSize:3e3,repeated:!1});q(this,"distortMap");this.config={...this.config,...t},this.config.layerResolutions.length?this.config.depth=this.config.layerResolutions.length:this.generateLayerResolutions()}generateLayerResolutions(){let t=this.config.resolution;for(let i=0;i<this.config.depth;i++)this.layerResolutions.push(t),t=t+this.config.upresFactor*(i+1)}generateTile(t,i){let r=[],a=new window.alea(this.config.seed+"#"+this.curLayer[t<0?0:1]+"#"+t+"#"+i),o=1+a()*this.config.tileScaleRandom-this.config.tileScaleRandom/2,n,l,d,h=this.config.depthHeightFactor;for(n=0;n<this.config.depth;n++){l=this.config.layerResolutions[n],d=this.config.resolution/l*h,h*=this.config.depthHeightFactor;let u=[],m=1/l,p;for(Lt.i=0;Lt.i<l;Lt.i++){for(p=[],Lt.j=0;Lt.j<l;Lt.j++)Lt.h=a()*2-1,this.config.squared&&(Lt.h<0?Lt.h*=-(Lt.h*(1+Lt.h))*4:Lt.h*=Lt.h*(1-Lt.h)*4),Lt.h*=d,p.push({x:(Lt.i+.5)/l,y:Lt.h*this.config.scale*o,z:(Lt.j+.5)/l,r:m,r2:m*m});u.push(p)}r.push(u)}return r}getRoadBlendedXZ(t,i,r){return Ct.h=0,r.h=r.n.h+r.t*(r.n.next.h-r.n.h),r.gfa=r.n.gfa+r.t*(r.n.next.gfa-r.n.gfa),r.ga=Math.max(Math.abs(r.g),Math.abs(r.h))/3.6,r.w=Bo+ih+r.ga,r.y-=.01+.01*r.gfa,r.ga=1-r.ga*r.ga,Ct.rm=Wo*.25+Wo*Math.min(.75,Math.max(.4,r.ga)),r.d<r.w+S.rm?r.d<Bo&&!r.n.bridge?r.y:(Ct.lt=Math.max(0,Math.min(1,2*(r.d-r.w)/S.rm)),Ct.lt=this.roadLerp(Ct.lt),Ct.h=this.getXZ(t,i),r.n.bridge&&Ct.h<0&&(Ct.h>-r.y?Ct.lt=Math.max(Ct.lt,Ct.h/-r.y):Ct.lt=1),Ct.h*Ct.lt+r.y*(1-Ct.lt)):this.getXZ(t,i)}roadLerp(t){return t>.3333?(Ct.lerp=1-(t-.3333)/.6667,1-Ct.lerp*Ct.lerp*.5):t*1.5}getCurvature(t,i){return 0}getTile(t,i){return this.config.repeated?super.getTile(0,0):super.getTile(t,i)}getXZ(t,i,r=null,a=!1){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),r=r||this.config.depth,S.depth=0;for(S.layer of S.tile){if(S.depth==r)break;S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.temper=1,this.config.temper&&S.depth>0&&(S.temper=Math.min(Math.max(this.config.temperMin,(S.h+this.config.offset+this.config.temperBase)/this.config.temperBelow),1)),S.h+=S.th*S.temper,S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1}return S.h+this.config.offset}getXZLayer(t,i,r,a=this.config.depth){S.d=0,S.h=0,S.heightFactor=1,S.sq=this.config.layerResolutions[0],S.sqb=S.sq-1,S.wx=t/this.config.tileSize,S.wz=i/this.config.tileSize,S.ox=Math.floor(S.wx),S.oz=Math.floor(S.wz),S.px=S.wx-S.ox,S.pz=S.wz-S.oz,S.tile=this.getTile(S.ox,S.oz),a=a||this.config.depth,S.depth=0,S.i=0;for(S.layer of S.tile){if(S.depth==a)break;if(S.i++!==r){S.depth++,S.sq=this.config.layerResolutions[S.depth],S.sqb=S.sq-1;continue}S.ix=Math.floor(S.px*S.sq-.5),S.iz=Math.floor(S.pz*S.sq-.5),S.th=0,S.ix>=0?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz+1,this.getTile(S.ox-1,S.oz-1)[S.depth][S.sqb][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px+1,S.pz,this.getTile(S.ox-1,S.oz)[S.depth][S.sqb][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px+1,S.pz-1,this.getTile(S.ox-1,S.oz+1)[S.depth][S.sqb][0])),S.ix<S.sqb?(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz]):S.th+=this.lerpHeight(S.d,S.px,S.pz+1,this.getTile(S.ox,S.oz-1)[S.depth][S.ix+1][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px,S.pz,S.layer[S.ix+1][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px,S.pz-1,this.getTile(S.ox,S.oz+1)[S.depth][S.ix+1][0])):(S.iz>=0?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz+1,this.getTile(S.ox+1,S.oz-1)[S.depth][0][S.sqb]),S.iz<S.sqb?S.th+=this.lerpHeight(S.d,S.px-1,S.pz,this.getTile(S.ox+1,S.oz)[S.depth][0][S.iz+1]):S.th+=this.lerpHeight(S.d,S.px-1,S.pz-1,this.getTile(S.ox+1,S.oz+1)[S.depth][0][0])),S.h+=S.th*S.temper;break}return S.h+this.config.offset}lerpHeight(t,i,r,a){return t=(a.x-i)*(a.x-i)+(a.z-r)*(a.z-r),t<a.r2?this.smootherLerp(t/a.r2)*a.y:0}}const ui=new Bn,ks=class ks extends nd{constructor(t){super(t);q(this,"container",new fs);q(this,"treeMesh");q(this,"instanceVariant");q(this,"instanceOrientation");q(this,"instanceDissolve");q(this,"maxCount",Ki);q(this,"curIndex",0);q(this,"isFull",!1);this.treeMesh=new jr(ks.protoGeo.clone(),zt,Ki),this.treeMesh.renderOrder=20,this.treeMesh.geometry.setAttribute("variant",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("orientation",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("dissolve",new pi(new Float32Array(Ki),1)),this.treeMesh.geometry.setAttribute("type",new pi(new Float32Array(Ki),1)),this.instanceVariant=this.treeMesh.geometry.attributes.variant,this.instanceVariant.setUsage(Wt),this.instanceOrientation=this.treeMesh.geometry.attributes.orientation,this.instanceOrientation.setUsage(Wt),this.instanceDissolve=this.treeMesh.geometry.attributes.dissolve,this.instanceDissolve.setUsage(Wt),this.instanceType=this.treeMesh.geometry.attributes.type,this.instanceType.setUsage(Wt),this.instanceMatrix=this.treeMesh.instanceMatrix,this.treeMesh.instanceMatrix.setUsage(Wt),this.treeMesh.boundingSphere=new Kl,this.treeMesh.computeBoundingSphere=()=>{},this.treeMesh.geometry.computeBoundingSphere=()=>{},this.container.add(this.treeMesh)}reset(){this.curIndex=0,this.treeMesh.count=0,this.isFull=!1}retire(){super.retire(),this.reset()}destroy(){super.destroy(),this.treeMesh.geometry.dispose(),delete this.instanceVariant,delete this.instanceOrientation,delete this.instanceDissolve,delete this.instanceType,delete this.instanceMatrix}setBoundingSphere(t){this.treeMesh.boundingSphere.center.copy(t.center),this.treeMesh.boundingSphere.radius=t.radius}addInstance(t,i,r,a=0,o=0){this.isFull||(this.treeMesh.setMatrixAt(this.curIndex,t),this.instanceVariant.array[this.curIndex]=i,this.instanceOrientation.array[this.curIndex]=r,this.instanceType.array[this.curIndex]=a,this.instanceDissolve.array[this.curIndex]=o,this.curIndex++,this.isFull=this.curIndex>=Ki)}hideInstance(t){this.treeMesh.getMatrixAt(t,ui),ui.setPosition(ui.elements[12],-1e5,ui.elements[14]),this.treeMesh.setMatrixAt(t,ui),this.instanceMatrix.needsUpdate=!0}prepCellInstance(t,i,r){this.treeMesh.getMatrixAt(t,ui),ui.setPosition(ui.elements[12],i,ui.elements[14]),this.treeMesh.setMatrixAt(t,ui),r?this.instanceDissolve.array[t]=1:this.instanceDissolve.array[t]=0}finalise(){this.instanceMatrix.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.instanceOrientation.needsUpdate=!0,this.instanceType.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0,this.treeMesh.count=Math.min(this.maxCount,Math.max(0,this.curIndex)),this.treeMesh.count==0?this.treeMesh.visible=!1:this.treeMesh.visible=!0}finaliseChunk(){this.instanceMatrix.needsUpdate=!0,this.instanceDissolve.needsUpdate=!0}static makeProtoGeo(){let t=new Yr,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0]);t.setAttribute("position",new es(i,3));let r=new Float32Array([.0625,0,.0625,1/jo-.002,0,1/jo-.002,0,0]);t.setAttribute("uv",new es(r,2));let a=[0,1,2,0,2,3];return t.setIndex(a),t.scale(kr,kr,kr),t}};q(ks,"protoGeo",ks.makeProtoGeo());let Yo=ks;const oh=3,ah=20,lh=Math.PI*2,Ko=2,he={};class nh{constructor(e=oh,t=ah,i="perlin"){q(this,"layers",[]);q(this,"amplitudeFactor",1);this.depth=e,this.res=t;let r=new _d(i);for(let n=0;n<e;n++){let l=[];for(let d=0;d<t;d++){let h=[];for(let u=0;u<t;u++){let m=r.next()*lh;h.push({x:Math.cos(m),y:Math.sin(m)})}h.push({...h[0]}),l.push(h)}l.push([...l[0]]),this.layers.push(l),t*=Ko}let a=0,o=1;for(let n=0;n<e;n++)a+=o,o/=2;this.amplitudeFactor=1/a,this.amplitudeFactor=.5+this.amplitudeFactor*.5}get(e,t){he.x=e-Math.floor(e),he.z=t-Math.floor(t),he.res=this.res,he.v=0,he.a=this.amplitudeFactor;for(he.l of this.layers)he.sx=he.x*he.res,he.sz=he.z*he.res,he.ix=Math.floor(he.sx),he.ix1=he.ix+1,he.iz=Math.floor(he.sz),he.iz1=he.iz+1,he.qx=he.sx-he.ix,he.qz=he.sz-he.iz,he.n0=this.dotGridGradient(he.l[he.ix][he.iz],he.ix,he.iz,he.sx,he.sz),he.n1=this.dotGridGradient(he.l[he.ix1][he.iz],he.ix1,he.iz,he.sx,he.sz),he.int0=this.smoothLerp(he.n0,he.n1,he.qx),he.n2=this.dotGridGradient(he.l[he.ix][he.iz1],he.ix,he.iz1,he.sx,he.sz),he.n3=this.dotGridGradient(he.l[he.ix1][he.iz1],he.ix1,he.iz1,he.sx,he.sz),he.int1=this.smoothLerp(he.n2,he.n3,he.qx),he.v+=this.smoothLerp(he.int0,he.int1,he.qz)*he.a,he.a/=2,he.res*=Ko;return he.v+.5}dotGridGradient(e,t,i,r,a){return(r-t)*e.x+(a-i)*e.y}smootherLerp(e,t,i){return(t-e)*((i*(i*6-15)+10)*i*i*i)+e}smoothLerp(e,t,i){return e+(t-e)*(i*i*(3-2*i))}}const Xo=new jl([0,0]);let Qo=[[[5.28,8.81],[4.07,4.7],[8.36,8.29],[.73,6.62]],[[4.81,3.69],[2.11,6.46],[8.58,2.78],[7.66,8.88]],[[2.04,2.85],[5.76,7.39],[6.07,2.44],[3.46,5.57]],[[3.91,7.36],[3.93,2.11],[7.27,9.11],[7.9,4.54]],[[4.81,7.08],[1.42,8.06],[1.36,4.91],[8.31,7.76]],[[4.77,4.89],[1.14,2.74],[7.4,2.45],[7.49,9.23]],[[1.64,8.36],[5.85,2.37],[6.85,7.86],[2.42,2.18]],[[7.25,6.91],[3.67,4.08],[7.77,2.79],[2.88,6.94]]],Zo=[[[.97,1.21],[4.37,1.4],[3.03,1.17],[.33,1.77]],[[1.91,1.11],[5.23,1.17],[5.35,1.08],[2.88,1.51]],[[4.78,1.12],[5.24,1.27],[.42,1.48],[1.46,1.51]],[[3.26,1.16],[1.42,1.3],[6.06,1.34],[.08,1.48]]],Jo=[[1,3,0,0],[0,2,1,0],[2,3,1,2],[3,1,3,2],[2,0,3,0],[3,3,0,1]];const dh=[[[0,0,1,0],[0,3,0,0],[0,0,0,0],[0,0,2,0]],[[1,3,1,1],[1,3,1,0],[3,1,0,1],[0,1,1,1]],[[2,2,0,2],[1,2,2,2],[2,3,2,2],[2,2,2,2]],[[3,1,3,3],[0,3,3,3],[3,0,2,3],[1,3,3,3]]];let ch=[[[2,2,2,1],[2,0,2,2],[2,2,2,2],[0,2,2,2]],[[3,0,3,3],[3,3,3,0],[1,3,3,3],[3,3,3,3]],[[0,0,1,0],[1,0,0,0],[2,0,0,0],[0,0,0,0]],[[1,0,1,0],[0,1,3,1],[1,1,3,1],[1,1,1,1]]],hh=.46,fh=.58,uh=.7,vh=.46,mh=.58,gh=.7,ph=4;const Cs=[];for(let s=0;s<sh;s++){let e=[];for(let t=0;t<Qo.length;t++)for(let i=0;i<Zo.length;i++)for(let r=0;r<Jo.length;r++)e.push({t:Qo[t],p:Zo[i],v:Jo[r]});Cs.push(e)}const $o=Cs[0].length,ea=new nh(4,4),ta=new bn("slowroads",$o*3,$o),ia=new bn("slowroads",31,ph),_h=new ts("slowroads",101),Se={get:{i:0,a:[],c:0,t:0},vs:[0,0,0,0]};class bh{constructor(){q(this,"map");q(this,"onHeightmapLayersChangedBound",this.onHeightmapLayersChanged.bind(this));Xo.addListener(this.onHeightmapLayersChangedBound)}onHeightmapLayersChanged(e){this.map&&this.map.setLayers(e)}init(e,t){this.map=new rh({seed:e,...t}),this.map.setLayers(Xo.value),this.typeMap=new bd({seed:e,scale:1,resolution:11,depth:4,upscale:2,offset:.45})}getDensityAt(e,t){return 1-Math.max(Math.min(1,this.map.getXZ(e,t)),0)}getShadowDensityAt(e,t){return Se.d=1-Math.max(Math.min(1,this.map.getXZ(e,t)),0),Se.d>.05?Math.min(1,Se.d*1.5+.3):0}getTypeAt(e,t){return Math.max(Math.min(1,Math.round(this.typeMap.getXZ(e,t))),0)}getTreesAt(e,t){return Se.get.d=this.getDensityAt(e,t),Se.dd=(Se.get.d-.001)*4,Se.ddd=Se.dd%1,Se.dd*=.8,Se.dd=Math.floor(Se.dd),_h.next()<Se.ddd&&Se.dd++,Se.get.c=Se.dd,Se.get.c<=0?(Se.get.c=0,Se.get):(Be.detail<2&&Se.get.c>2?Se.get.c=2:Se.get.c>3&&(Se.get.c=3),Se.get.i=ta.next(),Se.get.y=this.getTypeAt(e,t),Se.get.a=Cs[Se.get.y][Se.get.i],Se.get.y==0?(Se.pn=ea.get(e/1e3,t/1e3),Se.vn=0,Se.pn>hh&&(Se.pn<fh?Se.vn=1:Se.pn<uh?Se.vn=2:Se.vn=3),Se.get.v=dh[Se.vn][ia.next()]):(Se.pn=ea.get(e/2e3,t/2e3),Se.get.c<2&&Be.detail>0&&(Se.get.c=2),Se.vn=0,Se.pn>vh&&(Se.pn<mh?Se.vn=1:Se.pn<gh?Se.vn=2:Se.vn=3),Se.get.v=ch[Se.vn][ia.next()]),Se.get.t=0,Se.get)}getArrangementIndex(e,t){return 0}getArrangement(e,t=0){return Cs[t][e]}getTreesForDensity(e,t=0){return e<.2?[]:Cs[t][ta.next()]}addExtraTree(e,t,i,r,a,o,n){return-1}removeExtraTree(e,t,i){}}new bh;new ts("slowroads",119,Math.PI*2);new ts("slowroads",97,.4,-.8);new dd;const Pi=new fs;Pi.rotation.order="XZY";const Ji=class Ji extends nn{constructor(){super(...arguments);q(this,"matrixNeedsUpdate",!1)}init(t){this.maxCount=gs,this.mesh=new jr(Ji.protoGeo.clone(),_i,gs),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("groundNormal",new pi(new Float32Array(gs*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Wt),this.mesh.geometry.setAttribute("shadow",new pi(new Float32Array(gs*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Wt),this.mesh.geometry.setAttribute("roadProx",new pi(new Float32Array(gs*1),1)),this.instanceRoadProx=this.mesh.geometry.attributes.roadProx,this.instanceRoadProx.setUsage(Wt),this.mesh.instanceMatrix.setUsage(Wt),this.mesh.receiveShadow=!0,t.add(this.mesh),this.reset(),this.postInit()}addGrass(t,i,r,a,o,n,l,d,h,u,m){this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=r),m>this.retireIndex&&(this.retireIndex=m),Pi.position.set(t-this.ox,i,r-this.oz),this.instanceNormal.array[this.curIndex*3]=a,this.instanceNormal.array[this.curIndex*3+1]=o,this.instanceNormal.array[this.curIndex*3+2]=n,this.instanceShadow.array[this.curIndex]=h,this.instanceRoadProx.array[this.curIndex]=u,Pi.rotation.y=l,Pi.rotation.z=-Math.asin(a),Pi.rotation.x=Math.asin(n),Pi.scale.set(d,d,d),Pi.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,Pi.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,r-this.oz)}update(){super.update(),this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceRoadProx.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix())}static makeProtoGeo(){let t=new Yr,i=new Float32Array([-.5,0,0,-.5,1,0,.5,1,0,.5,0,0,0,0,.5,0,1,.5,0,1,-.5,0,0,-.5]);t.setAttribute("position",new es(i,3));let r=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);t.setAttribute("normal",new es(r,3));let a=new Float32Array([.01,0,.01,.99,.24,.99,.24,0,.01,0,.01,.99,.24,.99,.24,0]);t.setAttribute("uv",new es(a,2));let o=[0,1,2,0,2,3,4,5,6,4,6,7];return t.setIndex(o),t.scale(Ir,Ir,Ir),t.computeBoundingSphere=()=>{},t.boundingSphere=new Kl,t}destroy(){Ji.protoGeo&&Ji.protoGeo.dispose(),this.mesh.geometry.dispose()}};q(Ji,"protoGeo",Ji.makeProtoGeo());let Hr=Ji;class wh extends dn{addGrass(e,t,i,r,a,o,n,l,d,h,u){this.curInstance.addGrass(e,t,i,r,a,o,n,l,d,h,u),this.checkCycleInstances()}}new wh(Hr,3,"grass");const yh="data:model/obj;base64,IyBCbGVuZGVyIDMuNi4yCiMgd3d3LmJsZW5kZXIub3JnCm8gQ3ViZQp2IDAuMDAwMDAwIC0wLjI1OTQ1MiAtMC4wMDQwNjcKdiAtMC41MDY4ODcgMS4wNzIzOTIgLTAuNzE5MTk1CnYgMC41MDkzMDMgMS4yMTM2NTYgMC43MTU5ODYKdiAwLjAwMDAwMCAtMC4yMzE4ODggLTAuMDA0MDY4CnYgLTAuNjg5MjEyIDEuMDY4NjAxIDAuNTc1ODA0CnYgMC42ODkyMTIgMS4wNjg2MDAgLTAuNTgzOTM5CnYgMC40ODU3MDggMS4wMzYzNDQgMC40MDA5MDIKdiAtMC4wNDY2MTkgMC44OTM1ODMgLTAuNjMxODEzCnYgMC4wNzgwMjAgLTAuMjg5ODA3IC0wLjEwMzM5Nwp2IC0wLjUzNjYzOCAwLjg4MzQ0OSAwLjI1MTQwNwp2IDAuMDUwMTA0IDAuODc2MDc5IC0wLjYyODgwNgp2IC0wLjEzMjYxNCAtMC4yMjQ3NjkgLTAuMDIxODc5CnYgLTAuNjc5MDg2IDAuOTI3NDgwIDAuMjg0ODUzCnYgMC42Njc2MTYgMS4wNTI2NDEgMC4yODU3NjcKdiAwLjA0NDc4MyAtMC4zNzk2MTQgMC4wNTkyODkKdm4gLTAuODE2MSAtMC4wMDAzIDAuNTc3OQp2biAwLjY0MzggLTAuMDAwMCAwLjc2NTIKdm4gMC44ODk4IC0wLjEwNDYgLTAuNDQ0Mgp2biAwLjgyMTMgMC4xNjQ4IDAuNTQ2MQp2biAwLjAxNDQgLTAuMTYyMyAwLjk4NjYKdnQgMC4wMzIzOTggMC44NzA2NjkKdnQgMC4wMDAxMTQgMC4wMDE1NTYKdnQgMC4yMTc3NjUgMC4xMjkyODUKdnQgMC4wNjg5NjQgMC43MjQwNjkKdnQgMC4xODA2NDQgMC4yNzQ4NTgKdnQgMC4yNTEzNjQgMS4wMDI3MDEKcyAwCmYgMi8xLzEgMS8yLzEgMy8zLzEKZiA1LzEvMiA0LzIvMiA2LzMvMgpmIDgvNC8zIDcvNS8zIDkvNi8zCmYgMTEvNC80IDEwLzUvNCAxMi82LzQKZiAxNC80LzUgMTMvNS81IDE1LzYvNQo=",ds=new fs;ds.rotation.order="XZY";const Sh=new Wn;let Dh=0;const li=class li extends nn{constructor(){super();q(this,"matrixNeedsUpdate",!1);q(this,"parent");q(this,"hasInit",!1);this.id=Dh++,li.protoGeo===void 0&&li.makeProtoGeo()}init(t){this.parent=t,this.hasInit&&(this.maxCount=ps,this.mesh=new jr(li.protoGeo.clone(),Xt,ps),this.mesh.matrixAutoUpdate=!1,this.mesh.geometry.setAttribute("variant",new pi(new Float32Array(ps),1)),this.instanceVariant=this.mesh.geometry.attributes.variant,this.instanceVariant.setUsage(Wt),this.mesh.geometry.setAttribute("groundNormal",new pi(new Float32Array(ps*3),3)),this.instanceNormal=this.mesh.geometry.attributes.groundNormal,this.instanceNormal.setUsage(Wt),this.mesh.geometry.setAttribute("shadow",new pi(new Float32Array(ps*1),1)),this.instanceShadow=this.mesh.geometry.attributes.shadow,this.instanceShadow.setUsage(Wt),this.mesh.instanceMatrix.setUsage(Wt),t.add(this.mesh),this.reset(),this.postInit())}addBush(t,i,r,a,o,n,l,d,h,u,m=0){this.hasInit||(this.hasInit=!0,this.init(this.parent)),this.curIndex==0&&(this.matrixNeedsUpdate=!0,this.ox=t,this.oz=r),u>this.retireIndex&&(this.retireIndex=u),ds.position.set(t-this.ox,i,r-this.oz),this.instanceNormal.array[this.curIndex*3]=a,this.instanceNormal.array[this.curIndex*3+1]=o,this.instanceNormal.array[this.curIndex*3+2]=n,this.instanceShadow.array[this.curIndex]=h,this.instanceVariant.array[this.curIndex]=m,ds.rotation.y=l,ds.scale.set(d,d,d),ds.updateMatrix(),this.mesh.setMatrixAt(this.curIndex,ds.matrix),this.curIndex++,this.isFull=this.curIndex>=this.maxCount,this.updateBounds(t-this.ox,i,r-this.oz)}update(){this.hasInit&&(this.instanceNormal.needsUpdate=!0,this.instanceShadow.needsUpdate=!0,this.instanceVariant.needsUpdate=!0,this.matrixNeedsUpdate&&(this.matrixNeedsUpdate=!1,this.mesh.position.x=this.ox,this.mesh.position.z=this.oz,this.mesh.updateMatrix()),super.update())}static makeProtoGeo(){li.protoGeo===void 0&&(li.protoGeo=null,Sh.load(yh,t=>{let i=t.children[0].geometry;i.computeBoundingSphere(),li.protoGeo=i}))}destroy(){li.protoGeo&&li.protoGeo.dispose(),this.mesh&&this.mesh.geometry.dispose()}};q(li,"protoGeo");let Zs=li;class Lh extends dn{constructor(){super(...arguments);q(this,"bushesAwaiting",[]);q(this,"addBush",this.addBushLoading)}addBushLoading(...t){if(this.bushesAwaiting.push(t),Zs.protoGeo){this.addBush=this.addBushLive;for(let i of this.bushesAwaiting)this.addBush(...i);delete this.bushesAwaiting}}addBushLive(t,i,r,a,o,n,l,d,h,u,m){this.curInstance.addBush(t,i,r,a,o,n,l,d,h,u,m),this.checkCycleInstances()}}new Lh(Zs,3,"bush");new ts(Ve.seed,251);new ts;const sa={Left:0,Right:1,LeftDouble:2,RightDouble:3,Uphill15:4,Uphill20:5,Downhill15:6,Downhill20:7,ChevronLeft:8,ChevronRight:9},Bt=1/6,kt=1/2,Fs=.7,ri=.7/2,Mr=-.2,oi=1.8,It=.04,Is=class Is{constructor(){q(this,"mesh");this.geo=Is.protoGeo.clone(),this.uvs=this.geo.attributes.uv.array,this.mesh=new Xl(this.geo,ro),this.curVariant=null}static makeProtoGeo(){let e=[-ri,oi+Fs,It,ri,oi+Fs,It,-ri,oi,It,ri,oi,It,ri,oi+Fs,It,-ri,oi+Fs,It,ri,oi,It,-ri,oi,It,It,oi+ri,It-.01,-It,oi+ri,It-.01,0,oi+ri,-It,It,Mr,It-.01,-It,Mr,It-.01,0,Mr,-It],t=[Bt,kt*2,Bt*2,kt*2,Bt,kt,Bt*2,kt,0,kt*2,Bt,kt*2,0,kt,Bt,kt,.06,.48,.08,.48,.1,.48,.06,0,.08,0,.1,0],i=[0,2,1,1,2,3,4,6,5,5,6,7,8,9,11,11,9,12,9,10,12,12,10,13,10,8,13,13,8,11],r=new Yr;return r.setAttribute("position",new es(e,3)),r.setAttribute("uv",new es(t,2)),r.attributes.uv.setUsage(Wt),r.setIndex(i),r}setVariant(e){if(e==this.curVariant)return;let t,i;e%2==0?i=1:i=0,t=1+Math.floor(e/2),this.uvs[0]=Bt*t,this.uvs[1]=kt*(i+1),this.uvs[2]=Bt*(t+1),this.uvs[3]=kt*(i+1),this.uvs[4]=Bt*t,this.uvs[5]=kt*i,this.uvs[6]=Bt*(t+1),this.uvs[7]=kt*i,e==sa.ChevronLeft||e==sa.ChevronRight?(this.uvs[8]=0,this.uvs[9]=kt,this.uvs[10]=Bt,this.uvs[11]=kt,this.uvs[12]=0,this.uvs[13]=0,this.uvs[14]=Bt,this.uvs[15]=0):(this.uvs[8]=0,this.uvs[9]=kt*2,this.uvs[10]=Bt,this.uvs[11]=kt*2,this.uvs[12]=0,this.uvs[13]=kt,this.uvs[14]=Bt,this.uvs[15]=kt),this.curVariant=e,this.geo.attributes.uv.needsUpdate=!0}};q(Is,"protoGeo",Is.makeProtoGeo());let ra=Is;new ts;new ts("wall",31,.2,.1);new mi;new As(0);const Mn=new xd,Ch=""+new URL("./noentry.71ff3d6f.webp",import.meta.url).href;class kh extends fs{constructor(){super();q(this,"d");q(this,"opacity",0);ni.addListener("isCinecam",()=>{})}init(){this.matrixAutoUpdate=!1,this.mesh=new Xl(new jn(2.4,2.4,1,1),new Es({map:Ft(Ch),transparent:!0,opacity:0})),this.mesh.material.needsCameraPosition=!0,this.mesh.position.y=1.3,this.add(this.mesh),this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix()}update(){this.position.copy(Me.head.p),this.rotation.y=-Me.head.a+Math.PI/2,this.updateMatrix()}updateVisibility(){this.visible&&(this.d=this.position.distanceToSquared(H.position),this.d<1e4?this.d<2500?(this.mesh.material.opacity=1,this.opacity=1):(this.mesh.material.opacity=Math.max(0,1-(Math.sqrt(this.d)-50)/50),this.opacity=this.mesh.material.opacity):this.mesh.material.opacity!=this.opacity&&(this.mesh.material.opacity=0,this.opacity=0))}}const Gs=new kh,cs=new wd({fps:!1,hwa:!1});function En(){return(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))!=-1?"Opera":navigator.userAgent.indexOf("Edg")!=-1?"Edge":navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Safari")!=-1?"Safari":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":navigator.userAgent.indexOf("MSIE")!=-1||document.documentMode?"IE":"Unknown"}const oa=[cd,hd,fd];class Ih{constructor(){q(this,"canvas");q(this,"dom");q(this,"renderScene");q(this,"renderer");q(this,"debug",!1);q(this,"scene");q(this,"curSettings",{});q(this,"subs",[]);q(this,"stats");q(this,"hasInit",!1);q(this,"confirmHWA",!1);q(this,"updatePixelRatio",()=>{Be.useNativeRenderScale?(this.renderer.setPixelRatio(window.devicePixelRatio),Di.add("Setting device pixel ratio "+window.devicePixelRatio)):(this.renderer.setPixelRatio(Io[Be.renderScale]),Di.add("Setting device pixel ratio "+Io[Be.renderScale]))});q(this,"updateMaxFramerate",()=>{Be.maxFramerate>0&&(this.targetFrameTime=1e3/Yn[Be.maxFramerate])});q(this,"pausedInterval",null);q(this,"onTickerStateBound",this.onTickerState.bind(this));q(this,"onWorldSettingsChangedBound",this.onWorldSettingsChanged.bind(this));q(this,"frameCounter",0);q(this,"targetFrameTime",1e3/60);q(this,"updateBound",this.rawUpdate.bind(this));q(this,"update",()=>{});q(this,"maxPhysDT",.05);q(this,"minPhysDT",.001);q(this,"physDT",0);q(this,"debugUpdateTimer",.1);q(this,"debugFrameTimer",1);q(this,"debugFrame",0);q(this,"lastTimeCheck",Date.now());q(this,"lastVehicleIndexCheck",0);q(this,"driveTimer",0);q(this,"driveStartIndex",0);q(this,"onSceneInit");q(this,"profileGeneration",0);Math.TAU=Math.PI*2,Math.HALFPI=Math.PI/2,Math.D2R=Math.PI/180,Math.R2D=180/Math.PI,Math.getHeading=(e,t)=>{}}onMount(e,t,i){var r,a;this.canvas=e,this.dom=t,this.uiDom=i,this.renderScene=new Kn,this.renderScene.add(yd),this.cameraController=new Od(t),this.camera=Ae,this.renderScene.add(this.cameraController.container),this.vehicleManager=new zd,this.renderScene.add(H),this.stats=new qd,this.stats.dom.style.left="282px",this.stats.dom.style.zIndex="9999",document.body.appendChild(this.stats.dom),ne.addListener("showDebug",o=>{this.stats&&(this.stats.dom.style.display=o?"block":"none")}),ne.addListener("roadWidth",o=>{var n;if(this.initLoad(),js(bs)){this.setScene(Ve.scene);return}(n=this.scene)==null||n.onRoadWidthChanged(),this.vehicleManager.reset()},!0),ne.addListener("fullscreen",o=>{o?t.requestFullscreen&&t.requestFullscreen():document.fullscreenElement&&document.exitFullscreen()},!0),ne.set("fullscreen",!1),this.renderer=new Xn({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!1}),this.renderer.setClearColor(4473924),this.toneMapped=!0,this.renderer.toneMapping=Qn,this.renderer.shadowMap.enabled=!0,Be.addListener("renderScale",this.updatePixelRatio),Be.addListener("useNativeRenderScale",this.updatePixelRatio),Be.addListener("viewDistance",this.onGraphicsSettingsChanged.bind(this),!0),Be.addListener("detail",this.onGraphicsSettingsChanged.bind(this),!0),Be.addListener("maxFramerate",this.updateMaxFramerate),Je.init(),Je.addListener(this.updateBound),Le.init(t,e,i),_e.initialise(),_e.addListener(vi.NextScene,()=>{var o;(o=this.scene)==null||o.nextStyle()}),_e.addListener(vi.PrevScene,()=>{var o;(o=this.scene)==null||o.prevStyle()}),_e.addListener(vi.ToggleUI,()=>{ne.set("hideUI",!ne.hideUI)}),_e.addListener(vi.Pause,()=>{Je.toggle()}),_e.addListener(vi.IncSpeedControl,()=>Zr()),_e.addListener(vi.DecSpeedControl,()=>Jr()),_e.addListener(vi.ToggleSpeedControlMode,()=>{We.set("speedControlMode",(We.speedControlMode+1)%2)}),_e.addListener(vi.AutodriveMode,()=>{ne.set("autodriveMode",(ne.autodriveMode+1)%3)}),Je.addStateListener(this.onTickerStateBound),No.onMount(),No.registerAction(this.onBeforeUnload.bind(this)),di.addListener(o=>{o<1?Le.lockKeys("load"):(Le.unlockKeys("load"),this.vehicleManager.onSceneReady(),this.prevRender=performance.now(),this.update=this.updateLive,this.render=this.renderLive,bs.set(!1))}),Ei.onInitialiseFinished=()=>{this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera),!Kt&&!ot.hasSeenHWAWarning&&(this.confirmHWA=!0,this.confirmHWATime=performance.now(),this.confirmHWACount=5),ot.hasSeenSettings||this.initFPSCheck(),Ei.addJob(()=>Je.initSample(),0,"Ticket.initSample")},Ve.addListener("any",this.onWorldSettingsChangedBound),Ss(Ve.startNode),Gs.init(),this.renderScene.add(Gs),setInterval(this.onMinutePassed.bind(this),6e4),this.hasInit=!0,Ts.set(!0),Di.add("HW: Browser is "+En()),Di.add("HW: Screen res is "+((r=window.screen)==null?void 0:r.width)+" x "+((a=window.screen)==null?void 0:a.height))}initComp(){this.initLoad(),this.setScene(Sd.Driftmas)}initFPSCheck(){clearTimeout(this.fpsTimeout),this.fpsTimeout=setTimeout(()=>{Je.paused||Je.blurred||ot.hasSeenSettings||this.fps*Je.speedFactor<40&&cs.set("fps",!0)},1e4)}onTickerState(e){clearInterval(this.pausedInterval),e&&(this.pausedInterval=setInterval(()=>{_e.update(.01)},10)),this.fpsTimeout&&(clearTimeout(this.fpsTimeout),this.initFPSCheck())}onWorldSettingsChanged(e){this.hasInit&&this.onCheckJourney(),this.initLoad(),bs.set(!0),this.curSettings.scene!=e.scene?this.setScene(Ve.scene):this.curSettings.roadStyle!=e.roadStyle||this.curSettings.seed!=e.seed?this.setScene(Ve.scene):this.curSettings.startNode!=e.startNode&&this.setScene(Ve.scene),this.curSettings={...e}}onGraphicsSettingsChanged(){var e;if(this.initLoad(),js(bs)){this.setScene(Ve.scene);return}(e=this.scene)==null||e.onGraphicsSettingsChanged()}initLoad(){this.update=this.updateLoad,this.render=this.renderLoad,Ei.reset(),clearTimeout(this.fpsTimeout)}setScene(e){if(e>=oa.length){console.error("Attempting to load unknown scene ",e);return}let t=oa[e];this.scene&&(this.scene.destroy(),Dd(this.scene.container),this.renderScene.remove(this.scene.container),delete this.scene),this.scene=new t(this.renderer,this.renderScene),this.renderScene.add(this.scene.container),this.scene.initialise(this.onMidlineReady.bind(this),this.onSceneReady.bind(this)),this.vehicleManager.onSceneLoading(),Ss(Ve.startNode)}render(){}renderLive(){if(Be.maxFramerate>0){if(this.renderDT=performance.now()-this.prevRender,this.frameCounter+this.renderDT<this.targetFrameTime)return;this.frameCounter=this.frameCounter+this.renderDT-this.targetFrameTime,this.frameCounter%=this.targetFrameTime}this.prevRender=performance.now(),this.renderer.render(this.renderScene,this.camera)}renderLoad(){}rawUpdate(e){this.update(Je.smoothDT),ne.showDebug&&this.stats.update()}updateLoad(e){try{Ei.update(e*1e3),this.scene.updateLoad(e)}catch(t){this.onCrash("SCENE LOAD",t)}}updateScene(e){this.scene.update(e)}onCrash(e,t){this.update=()=>{},Je.destroy(),this.vehicleManager.onCrash(),console.error(e),console.error(t),console.log(Di.get()),Mn.set({type:e,msg:t.message,log:Di.get()})}updateLive(e,t){if(this.confirmHWA){let i=performance.now()-this.confirmHWATime;i>100?(this.confirmHWACount++,i>250&&this.confirmHWACount++):(this.confirmHWACount--,i<30&&this.confirmHWACount--),this.confirmHWACount<0?(this.confirmHWA=!1,ot.set("hasSeenHWAWarning",!0)):this.confirmHWACount>10&&(this.confirmHWA=!1,ot.set("hasSeenHWAWarning",!0),cs.set("hwa",!0),Je.lock()),this.confirmHWATime=performance.now()}_e.update(e);try{this.vehicleManager.update(e,t)}catch(i){this.onCrash("VEHICLE UPDATE",i);return}try{this.cameraController.update(e)}catch(i){this.onCrash("CAMERA UPDATE",i);return}try{this.updateScene(e)}catch(i){this.onCrash("SCENE UPDATE",i);return}if(this.render(),this.debugFrameTimer-=e,this.debugFrameTimer<0&&(this.fps=this.renderer.info.render.frame-this.debugFrame,this.vehicleManager.fps=this.fps,Kr.set(this.renderer.info.render.frame-this.debugFrame),this.debugFrame=this.renderer.info.render.frame,this.debugFrameTimer+=1),this.debugUpdateTimer-=e,this.debugUpdateTimer<0){Ql.set(this.renderer.info.render.calls),Zl.set(Math.floor(this.renderer.info.render.triangles)),Jl.set(this.renderer.info.memory.geometries),Zn.set(this.renderer.info.memory.textures),Tr.set(Ei.priority.length),Xr.set(Me.vehicleNode),$l.set(Me.tail),en.set(Me.head),tn.set(H.position.x.toFixed(1)+", "+H.position.y.toFixed(1)+", "+H.position.z.toFixed(1));let i=H.position.x/Ao,r=Math.floor(i),a=Math.floor((i-r)*To),o=H.position.z/Ao,n=Math.floor(o),l=Math.floor((o-n)*To);sn.set(r+", "+n),rn.set(a+", "+l),Qr.set(Ei.queue.length),Tr.set(Ei.priority.length),this.debugUpdateTimer=.1}try{Ei.update(e*1e3)}catch(i){this.onCrash("SCENE LOAD",i)}this.postUpdate()}postUpdate(){Le.resetState(),Me.vehicleNodeDidChange&&this.onVehicleNodeChanged(),(!H.onRoad||H.isRogue)&&Gs.updateVisibility(),Me.vehicleNodeDidChange=!1}onMinutePassed(){let e=Math.min(61e4,Date.now()-this.lastTimeCheck);H.speed>0&&(qt.value?Ge.set("autodriveTime",Ge.autodriveTime+e):Ge.set("manualTime",Ge.manualTime+e),Ge.set("totalTime",Ge.autodriveTime+Ge.manualTime),this.driveTimer+=e),this.lastTimeCheck=Date.now()}onVehicleNodeChanged(){qt.value?Ge.set("autodriveDist",Ge.autodriveDist+(Me.vehicleNode.i-this.lastVehicleIndexCheck)*10):Ge.set("manualDist",Ge.manualDist+(Me.vehicleNode.i-this.lastVehicleIndexCheck)*10),Ge.set("totalDist",Ge.manualDist+Ge.autodriveDist),this.onCheckJourney(),Ss(Me.vehicleNode.i),Gs.update(),this.lastVehicleIndexCheck=Me.vehicleNode.i}onCheckJourney(){let e=this.driveTimer,t=(this.lastVehicleIndexCheck-this.driveStartIndex)*10;e>Ge.longestDrive&&Ge.set("longestDrive",e),t>Ge.furthestDrive&&Ge.set("furthestDrive",t)}onBeforeUnload(){this.onCheckJourney()}onMidlineReady(){return Di.add("Midline ready"),!0}onSceneReady(){return this.vehicleManager.init(),this.cameraController.init(),this.update=this.updateLive,localStorage.removeItem("loading-flag"),this.profileGeneration!==xi.value&&(this.updatePixelRatio(),this.updateMaxFramerate(),this.profileGeneration=xi.value),this.driveStartTime=Date.now(),this.driveStartIndex=Ve.startNode,this.driveTimer=0,this.lastVehicleIndexCheck=Ve.startNode,!0}setSize(e,t){this.cameraController.setSize(e,t),this.renderer.setSize(e,t),Le.setSize(e,t),this.render()}onDestroy(){for(;this.renderScene.children.length;)this.renderScene.remove(this.renderScene.children[this.renderScene.children.length-1]);for(this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());this.subs.length;)this.subs.pop()();Je.destroy(),Le.destroy()}}function Mh(s,e,t){const i=s.slice();return i[3]=e[t],i[5]=t,i}function Eh(s,e,t){const i=s.slice();return i[6]=e[t],i}function Ah(s){let e=s[3].version+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,r){P(i,t,r)},d(i){i&&g(t)}}}function Th(s){let e,t=s[3].version+"",i;return{c(){e=_("a"),i=ee(t),this.h()},l(r){e=b(r,"A",{class:!0,href:!0});var a=C(e);i=te(a,t),a.forEach(g),this.h()},h(){f(e,"class","changelog-version-number-link svelte-bsztam"),f(e,"href",s[3].permalink)},m(r,a){P(r,e,a),c(e,i)},d(r){r&&g(e)}}}function Ph(s){let e,t,i="-",r,a,o,n;return{c(){e=_("div"),t=_("span"),t.textContent=i,r=k(),a=_("span"),o=ee(s[6]),n=k(),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);t=b(d,"SPAN",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-zrnetw"&&(t.textContent=i),r=I(d),a=b(d,"SPAN",{});var h=C(a);o=te(h,s[6]),h.forEach(g),n=I(d),d.forEach(g),this.h()},h(){f(t,"class","list-dot svelte-bsztam"),f(e,"class","changelog-list-item svelte-bsztam")},m(l,d){P(l,e,d),c(e,t),c(e,r),c(e,a),c(a,o),c(e,n)},p:ve,d(l){l&&g(e)}}}function Nh(s){let e,t,i,r,a,o=s[3].date+"",n,l,d,h;function u(y,D){return y[3].permalink&&!Pr?Th:Ah}let p=u(s)(s),v=Oe(s[3].changes),w=[];for(let y=0;y<v.length;y+=1)w[y]=Ph(Eh(s,v,y));return{c(){e=_("div"),t=_("div"),i=_("div"),p.c(),r=k(),a=_("div"),n=ee(o),l=k(),d=_("div");for(let y=0;y<w.length;y+=1)w[y].c();h=k(),this.h()},l(y){e=b(y,"DIV",{class:!0});var D=C(e);t=b(D,"DIV",{class:!0});var L=C(t);i=b(L,"DIV",{class:!0});var E=C(i);p.l(E),E.forEach(g),r=I(L),a=b(L,"DIV",{class:!0});var A=C(a);n=te(A,o),A.forEach(g),L.forEach(g),l=I(D),d=b(D,"DIV",{class:!0});var T=C(d);for(let x=0;x<w.length;x+=1)w[x].l(T);T.forEach(g),h=I(D),D.forEach(g),this.h()},h(){f(i,"class","changelog-version-number svelte-bsztam"),R(i,"changelog-version-new",Ri&&s[5]==0),f(a,"class","changelog-date svelte-bsztam"),f(t,"class","changelog-title svelte-bsztam"),f(d,"class","changelog-list svelte-bsztam"),f(e,"class","changelog "+(Ri&&s[5]==0?"new-version":"")+" svelte-bsztam")},m(y,D){P(y,e,D),c(e,t),c(t,i),p.m(i,null),c(t,r),c(t,a),c(a,n),c(e,l),c(e,d);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(d,null);c(e,h)},p:ve,d(y){y&&g(e),p.d(),bt(w,y)}}}function aa(s){let e,t,i;return{c(){e=_("div"),this.h()},l(r){e=b(r,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","splash-changelog-close svelte-bsztam")},m(r,a){P(r,e,a),t||(i=F(e,"mousedown",s[1]),t=!0)},p:ve,d(r){r&&g(e),t=!1,i()}}}function xh(s){let e,t,i,r,a="Close",o,n,l,d,h=Oe($r),u=[];for(let p=0;p<h.length;p+=1)u[p]=Nh(Mh(s,h,p));let m=s[0]&&aa(s);return{c(){e=_("div"),t=_("div");for(let p=0;p<u.length;p+=1)u[p].c();i=k(),r=_("div"),r.textContent=a,o=k(),m&&m.c(),n=De(),this.h()},l(p){e=b(p,"DIV",{id:!0,style:!0,class:!0});var v=C(e);t=b(v,"DIV",{class:!0});var w=C(t);for(let y=0;y<u.length;y+=1)u[y].l(w);w.forEach(g),i=I(v),r=b(v,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-1la5l1i"&&(r.textContent=a),v.forEach(g),o=I(p),m&&m.l(p),n=De(),this.h()},h(){f(t,"class","changelog-scrollable svelte-bsztam"),f(r,"class","changelog-close svelte-bsztam"),f(e,"id","splash-changelog"),ae(e,"transform","translateX("+(s[0]?0:100)+"%)"),f(e,"class","svelte-bsztam")},m(p,v){P(p,e,v),c(e,t);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(t,null);c(e,i),c(e,r),P(p,o,v),m&&m.m(p,v),P(p,n,v),l||(d=F(r,"click",s[1]),l=!0)},p(p,[v]){v&1&&ae(e,"transform","translateX("+(p[0]?0:100)+"%)"),p[0]?m?m.p(p,v):(m=aa(p),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null)},i:ve,o:ve,d(p){p&&(g(e),g(o),g(n)),bt(u,p),m&&m.d(p),l=!1,d()}}}function Rh(s,e,t){let{showChangelog:i=!1}=e,{onShowChangelog:r=()=>{}}=e;function a(){t(0,i=!1),r(!1)}return s.$$set=o=>{"showChangelog"in o&&t(0,i=o.showChangelog),"onShowChangelog"in o&&t(2,r=o.onShowChangelog)},[i,a,r]}class An extends Xe{constructor(e){super(),Qe(this,e,Rh,xh,Ke,{showChangelog:0,onShowChangelog:2})}}function Uh(s){let e;return{c(){e=ee("-")},l(t){e=te(t,"-")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Oh(s){let e,t="+";return{c(){e=_("span"),e.textContent=t,this.h()},l(i){e=b(i,"SPAN",{style:!0,"data-svelte-h":!0}),W(e)!=="svelte-1y249x7"&&(e.textContent=t),this.h()},h(){ae(e,"transform","rotate(45deg)")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function la(s){let e,t;return{c(){e=_("div"),t=new qr(!1),this.h()},l(i){e=b(i,"DIV",{class:!0});var r=C(e);t=Fr(r,!1),r.forEach(g),this.h()},h(){t.a=null,f(e,"class","faq-a svelte-1yu3ye")},m(i,r){P(i,e,r),t.m(s[1],e)},p(i,r){r&2&&t.p(i[1])},d(i){i&&g(e)}}}function Vh(s){let e,t,i,r,a,o,n;function l(m,p){return m[2]?Oh:Uh}let d=l(s),h=d(s),u=!s[2]&&la(s);return{c(){e=_("div"),t=_("div"),i=ee(s[0]),r=_("div"),h.c(),a=k(),u&&u.c(),this.h()},l(m){e=b(m,"DIV",{class:!0});var p=C(e);t=b(p,"DIV",{class:!0});var v=C(t);i=te(v,s[0]),r=b(v,"DIV",{class:!0});var w=C(r);h.l(w),w.forEach(g),v.forEach(g),a=I(p),u&&u.l(p),p.forEach(g),this.h()},h(){f(r,"class","faq-expand svelte-1yu3ye"),f(t,"class","faq-q svelte-1yu3ye"),f(e,"class","faq-qa svelte-1yu3ye")},m(m,p){P(m,e,p),c(e,t),c(t,i),c(t,r),h.m(r,null),c(e,a),u&&u.m(e,null),o||(n=F(t,"mousedown",s[3]),o=!0)},p(m,[p]){p&1&&be(i,m[0]),d!==(d=l(m))&&(h.d(1),h=d(m),h&&(h.c(),h.m(r,null))),m[2]?u&&(u.d(1),u=null):u?u.p(m,p):(u=la(m),u.c(),u.m(e,null))},i:ve,o:ve,d(m){m&&g(e),h.d(),u&&u.d(),o=!1,n()}}}function Hh(s,e,t){let{q:i="Question?"}=e,{a:r="Answer"}=e,a=!0;const o=()=>t(2,a=!a);return s.$$set=n=>{"q"in n&&t(0,i=n.q),"a"in n&&t(1,r=n.a)},[i,r,a,o]}class zh extends Xe{constructor(e){super(),Qe(this,e,Hh,Vh,Ke,{q:0,a:1})}}const qh=[{q:"Why do I get such a poor performance?",a:"Make sure you have hardware acceleration enabled in your browser, and in your OS settings if necessary. If you're on a laptop, check power settings to make sure your browser performance isn't being throttled."},{q:"How much will the Steam version cost?",a:"It depends on how many extra features are added, but probably between $8 and $16. Could be lower, could be higher - you'll know nearer to release."},{q:"When will the Steam version be released?",a:"I'm aiming to release it in Summer 2026 but can't be certain; solo development is just too unpredictable."},{q:"Will the web version still be freely available?",a:"Yes! The Steam version will have extra features and higher-quality assets, but the web version will continue to get the same core updates."},{q:"Can I transfer my progress from the web version to the Steam version?",a:"Yes, you'll be able to export your profile from the web version into the full game to keep track of your distance travelled and other stats"},{q:"Is there an offline version of the web game that I can play without an internet connection?",a:"Yes, it's called Slow Roads: Web Edition and is available on itch.io for a small price. Find it on the <a style='color: #418fa4' href='https://topographinteractive.itch.io/slow-roads'>Slow Roads itch.io page</a>"},{q:"What's the background on the game's development?",a:"I wanted a simple, relaxing driving game to play while listening to podcasts or music, but the existing options were too serious and ended too soon. At the time I had been working on a vehicle physics engine in a separate project, and at some point became interested in the idea of procedurally-generated environments. I realised I could combine the two, and within a week I had a basic version of Slow Roads working."},{q:"Who's the developer?",a:"Hi, I'm Anslo, a creative generalist developer interested in graphics programming, procedural generation, and 3D design. Slow Roads began as one of my hobby projects, and I'm developing it solo. You can find some details on my other projects at anslo.dev. The Slow Roads property is owned by my independent, solo-owned company, Topograph Interactive Ltd, for the purpose of publishing via Steam."},{q:"How and why is the web version free, and without ads?",a:"Slow Roads is a game about escapism and peace, letting you take a break from the stress of the modern world, and intrusive ads don't belong in this context. In general I think web advertising has spiralled into something of a capitalist hellscape which makes everyone's experience online worse, all in the name of greed. It's unfortunate that so many talented creators depend on these broken systems to earn revenue for their work, and I think there's a lot of room for reform in online advertising. I want to use this small platform to remind people that there is a better way - it can be a choice, and there can be a simpler, more human-centric approach. If you'd like to support me, aside from wishlisting/purchasing the Steam version you can also pay an optional price for the Web Edition on itch.io"},{q:"Have you thought about adding a competitive or rally mode?",a:"Yes, I've run multiple community rally events over the past few winters - check out driftmas.slowroads.io. I may bring more competitive modes in future, especially to the Steam version."},{q:"Why can I drive through trees, or glitch into the sky by going backwards?",a:"The game engine only really works on the assumption that you stay on the road and follow it in the correct direction. Making that assumption allows for critical performance savings for rendering, environment generation, and physics calculations. I decided it would be no fun to force-reset people for driving offroad, though; sometimes glitches are the best part of a game."},{q:"Why are all the cars electric?",a:"They're a lot more peaceful and simple to drive, which suits the context of the game. Combustion engines are complex to code and design audio for, and are quickly becoming old-fashioned - EVs are just how cars are nowadays. That said, combustion engines are a highly-requested feature, so are available as an option in the Steam version."},{q:"Can you add a radio or music player, or connect to Spotify etc.?",a:"I don't have any plans to add a radio or music player to teh web version for now, to avoid the complexity of licensing or API integration, but a simple music player is planned for the Steam version."},{q:"I have a great idea for a feature, how can I tell you?",a:"It's probably already on the list - I have a lot of things I want to work on already, so it's unlikely I'll be adding new things to the list now, sorry. If you think it's something I truly haven't thought of, you can mention it in the Discord and I'm sure someone will let you know."},{q:"Can I contribute to the development of the game?",a:"This is still mostly a hobby project for me, so I'm not looking for contributors at this stage. In the future I might be looking for certain specialists, so make sure you follow on social media for updates there."},{q:"Can I have permission to host the game on my own site, make an app of the game with a web-view, or otherwise distribute the game myself?",a:"No, sorry. Unfortunately many are abusing the BY-NC-ND license and I now prefer people not to rehost the game in any context. However, if you would like to purchase a commercial license, please email hello@topograph.io"},{q:"Will you make it open-source?",a:"There are no plans at this stage to open-source the game, but I may look into supporting mods for the Steam version in future."},{q:"Which tech/language was used to make Slow Roads?",a:"The whole thing is written in plain JavaScript, using Three.js as a rendering library and SvelteKit as an SPA framework. It all runs client-side, in a WebGL canvas. The core engine is custom-written to be optimised for efficient environment generation, realistic road generation, and minimal physics computation. As for why - I think the browser is underrated as a platform for interactive 3D apps, and I wanted to make a point of that with Slow Roads. Plus JS dev is super accessible and flexible, and that suits my style."},{q:"How does the environment generation algorithm work?",a:"It uses a modified noise generator, similar to Perlin Noise, and then traces a road in 10m increments by testing gradients and choosing the best direction to go at each step. That decision is weighted by a lot of factors, like curvature, gradient, progress, water avoidance, self-intersection avoidance, and so on. There's a lot more complexity to it, but that's the gist - one day I'll get around to writing some proper devlogs!"},{q:"I miss the old slow roads - is there a way to still play it?",a:"Yes, it's still live at old.slowroads.io"},{q:"I miss a specific previous version - is there a way to still play it?",a:"Yes, click the version number in the lower-right of the main splash page to open the changelog, then click the version number for the version you wish to play. It will link to the specific version on slowroads-io.pages.dev. You may receive a warning from your browser about navigating to this page, but it is safe to do so."},{q:"Will there ever be an SR3?",a:"At present I don't plan to make any significant changes to the underlying engine, so updates for the foreseeable future will simple be expansions of version 2."}];function Fh(s,e,t){const i=s.slice();return i[16]=e[t],i}function na(s,e,t){const i=s.slice();return i[19]=e[t],i}function da(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){f(e,"id","splash-error"),f(e,"class","svelte-1umr92q")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function Gh(s){let e,t,i,r,a,o,n,l,d,h,u="See full details",m,p,v=Oe(s[3]),w=[];for(let y=0;y<v.length;y+=1)w[y]=ca(na(s,v,y));return{c(){e=_("div"),t=ee("New version - "),i=ee(Qt),r=k(),a=_("hr"),o=k();for(let y=0;y<w.length;y+=1)w[y].c();n=k(),l=_("hr"),d=k(),h=_("div"),h.textContent=u,this.h()},l(y){e=b(y,"DIV",{class:!0});var D=C(e);t=te(D,"New version - "),i=te(D,Qt),r=I(D),a=b(D,"HR",{class:!0}),o=I(D);for(let L=0;L<w.length;L+=1)w[L].l(D);n=I(D),l=b(D,"HR",{class:!0}),d=I(D),h=b(D,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-5v1n0f"&&(h.textContent=u),D.forEach(g),this.h()},h(){f(a,"class","svelte-1umr92q"),f(l,"class","svelte-1umr92q"),f(h,"class","splash-version-see-more svelte-1umr92q"),f(e,"class","splash-new-version svelte-1umr92q")},m(y,D){P(y,e,D),c(e,t),c(e,i),c(e,r),c(e,a),c(e,o);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(e,null);c(e,n),c(e,l),c(e,d),c(e,h),m||(p=F(h,"click",s[9]),m=!0)},p(y,D){if(D&8){v=Oe(y[3]);let L;for(L=0;L<v.length;L+=1){const E=na(y,v,L);w[L]?w[L].p(E,D):(w[L]=ca(E),w[L].c(),w[L].m(e,n))}for(;L<w.length;L+=1)w[L].d(1);w.length=v.length}},d(y){y&&g(e),bt(w,y),m=!1,p()}}}function ca(s){let e,t=s[19]+"",i;return{c(){e=_("div"),i=ee(t),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=C(e);i=te(a,t),a.forEach(g),this.h()},h(){f(e,"class","splash-version-change svelte-1umr92q")},m(r,a){P(r,e,a),c(e,i)},p(r,a){a&8&&t!==(t=r[19]+"")&&be(i,t)},d(r){r&&g(e)}}}function Bh(s){let e,t;return e=new An({props:{showChangelog:s[2],onShowChangelog:s[10]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&4&&(a.showChangelog=i[2]),r&4&&(a.onShowChangelog=i[10]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Wh(s){let e,t='<span style="font-size: 1.2rem; color: var(--sr-primary)">Prefer the old version?</span> <br/> <span style="font-size: 0.9rem">Find it at <a class="splash-smallprint-link svelte-1umr92q" href="https://old.slowroads.io">old.slowroads.io</a></span>',i,r;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(a){e=b(a,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-fgyrc"&&(e.innerHTML=t),this.h()},h(){f(e,"class","splash-old svelte-1umr92q")},m(a,o){P(a,e,o),i||(r=F(e,"mouseover",s[11]),i=!0)},p:ve,d(a){a&&g(e),i=!1,r()}}}function jh(s){let e,t,i=`<img src="./icon_discord.svg" alt="" class="splash-main-button-icon svelte-1umr92q"/> <br/>
                    Join the Discord`,r,a,o='<span style="font-size: 1.5rem">About</span> <br/> <span style="font-size: 2rem">▾</span>',n,l,d,h="Demo now live!",u,m,p,v,w,y,D,L;return{c(){e=_("div"),t=_("a"),t.innerHTML=i,r=k(),a=_("a"),a.innerHTML=o,n=k(),l=_("a"),d=_("div"),d.textContent=h,u=k(),m=_("img"),v=k(),w=_("br"),y=ee(`\r
                    Wishlist on Steam`),this.h()},l(E){e=b(E,"DIV",{class:!0});var A=C(e);t=b(A,"A",{target:!0,rel:!0,href:!0,alt:!0,class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1vmj15d"&&(t.innerHTML=i),r=I(A),a=b(A,"A",{href:!0,class:!0,style:!0,"data-svelte-h":!0}),W(a)!=="svelte-16do8f5"&&(a.innerHTML=o),n=I(A),l=b(A,"A",{target:!0,rel:!0,href:!0,alt:!0,class:!0,style:!0});var T=C(l);d=b(T,"DIV",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-13q38uc"&&(d.textContent=h),u=I(T),m=b(T,"IMG",{src:!0,alt:!0,class:!0}),v=I(T),w=b(T,"BR",{}),y=te(T,`\r
                    Wishlist on Steam`),T.forEach(g),A.forEach(g),this.h()},h(){f(t,"target","_blank"),f(t,"rel","noopener noreferrer"),f(t,"href","https://discord.gg/TNf9bBrZmR"),f(t,"alt",""),f(t,"class","splash-main-button svelte-1umr92q"),f(a,"href","#about"),f(a,"class","splash-main-button svelte-1umr92q"),ae(a,"padding-top","2rem"),f(d,"class","splash-main-steam-notice svelte-1umr92q"),At(m.src,p="./icon_steam_white.svg")||f(m,"src",p),f(m,"alt",""),f(m,"class","splash-main-button-icon steam-icon svelte-1umr92q"),f(l,"target","_blank"),f(l,"rel","noopener noreferrer"),f(l,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),f(l,"alt",""),f(l,"class","splash-steam-button svelte-1umr92q"),ae(l,"background-image","url("+s[4]+")"),f(e,"class","splash-main-buttons svelte-1umr92q")},m(E,A){P(E,e,A),c(e,t),c(e,r),c(e,a),c(e,n),c(e,l),c(l,d),c(l,u),c(l,m),c(l,v),c(l,w),c(l,y),D||(L=F(l,"mousedown",s[12]),D=!0)},p(E,A){A&16&&ae(l,"background-image","url("+E[4]+")")},d(E){E&&g(e),D=!1,L()}}}function Yh(s){let e,t;return e=new zh({props:{q:s[16].q,a:s[16].a}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function ha(s){let e,t,i;return{c(){e=_("div"),t=k(),i=_("div"),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=I(r),i=b(r,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-1umr92q"),f(i,"id","splash-bg"),f(i,"class","svelte-1umr92q")},m(r,a){P(r,e,a),P(r,t,a),P(r,i,a)},d(r){r&&(g(e),g(t),g(i))}}}function Kh(s){let e,t,i,r,a,o,n,l,d="endless driving zen",h,u,m=s[6]?"continue":"begin",p,v,w,y,D,L,E,A,T,x,Y="CC BY-NC-ND 4.0 International License",X,O,$,Z,U,B=`from <a class="splash-smallprint-link svelte-1umr92q" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2026 	
                <span style="margin: 0 0.5rem;">·</span> <a class="splash-smallprint-link svelte-1umr92q" href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> <span style="margin: 0 0.5rem;">·</span> <a class="splash-smallprint-link svelte-1umr92q" href="https://topograph.io/slowroads" target="_blank" rel="noopener noreferrer">press kit</a>`,V,z,M,N,G='<div class="splash-body-wrapper svelte-1umr92q" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-1umr92q"></div> <div class="splash-blurb-corner-tr svelte-1umr92q"></div> <div class="splash-blurb svelte-1umr92q"><strong>Slow Roads</strong> is a casual driving game designed for long, cathartic journeys on quiet, scenic roads. Simply chase the horizon through endless, procedurally-generated landscapes, with no ads, distractions, or goals. Set the weather to suit your mood, throw on some music, and <strong>just drive.</strong></div> <div class="splash-blurb-corner-bl svelte-1umr92q"></div> <div class="splash-blurb-corner-br svelte-1umr92q"></div></div>',se,oe,le=`<div class="splash-body-wrapper svelte-1umr92q" style="color: var(--sr-secondary)"><div class="splash-body-header svelte-1umr92q" style="color: #6dcff6; text-shadow: 0 0 1rem #6dcff688">Coming soon to Steam!
                        <a class="splash-visit-steam svelte-1umr92q" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/"><img src="./icon_steam_white.svg" class="splash-body-steam-icon svelte-1umr92q" alt=""/>
                            Visit store page</a></div> <img src="./about_zen_01.jpg" class="steam-banner svelte-1umr92q"/> <div class="splash-body-text svelte-1umr92q">While Slow Roads is fundamentally designed as a lightweight web experience, and the web version will remain freely available, there&#39;s a lot of potential to go beyond the limits of the browser.
                        Over the years I&#39;ve also had a lot of requests for features which would break the core design of Slow Roads as a simple, quick get-away, and which would demand more time than I can give as a hobby.
                        That&#39;s why I&#39;m soon to be releasing an expanded version on Steam, featuring all the things that wouldn&#39;t belong in the web.</div> <div class="splash-body-subheader svelte-1umr92q" style="color: #6dcff6; position: relative">Steam-exclusive features:
                        <a class="splash-try-demo svelte-1umr92q" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/"><img src="./icon_steam_white.svg" class="splash-body-steam-icon svelte-1umr92q" alt=""/>
                            Try the demo</a></div> <div class="splash-body-bullets svelte-1umr92q"><div class="splash-body-bullet svelte-1umr92q">More locations</div> <div class="splash-body-bullet svelte-1umr92q">More vehicles</div> <div class="splash-body-bullet svelte-1umr92q">More road styles, including off-road trails and multi-lane highways</div> <img src="./about_road.jpg" class="steam-banner svelte-1umr92q"/> <div class="splash-body-bullet svelte-1umr92q">Combustion engines and manual transmission</div> <div class="splash-body-bullet svelte-1umr92q">Vehicle tuning</div> <div class="splash-body-bullet svelte-1umr92q">Vehicle customisation</div> <img src="./about_veh_05.jpg" class="steam-banner svelte-1umr92q"/> <div class="splash-body-bullet svelte-1umr92q">A music interface for playing local tracks or public radio streams</div> <div class="splash-body-bullet svelte-1umr92q">Improved graphics options and detail</div> <div class="splash-body-bullet svelte-1umr92q">Configurable traffic modes</div> <img src="./about_traffic.jpg" class="steam-banner svelte-1umr92q"/> <div class="splash-body-bullet svelte-1umr92q">Achievements and bumper stickers</div> <div class="splash-body-bullet svelte-1umr92q">High-resolution assets</div> <div class="splash-body-bullet svelte-1umr92q">And more to be added in future updates</div></div> <div class="splash-body-text svelte-1umr92q">This first release is targeted for <strong>Summer 2026</strong> - the goal is to get a simple version out soon and then, like the web version, continue to iterate long into the future. Solo dev can be unpredictable, though, so this date could easily slip to later in the year. Check the #dev-log channel on the discord server for the latest news!</div> <img src="./about_dev_04.jpg" class="steam-banner svelte-1umr92q"/> <div class="splash-body-subheader svelte-1umr92q" style="color: #6dcff6;">Longer-term targets:</div> <div class="splash-body-bullets svelte-1umr92q"><div class="splash-body-bullet svelte-1umr92q">A custom world editing tool</div> <div class="splash-body-bullet svelte-1umr92q">Improved lighting and weather effects</div> <div class="splash-body-bullet svelte-1umr92q">Mod support for vehicles and environments</div> <div class="splash-body-bullet svelte-1umr92q">Extra graphics settings, including added features like post-processing effects</div> <div class="splash-body-bullet svelte-1umr92q">Extra locations and vehicles not available in the web version</div> <div class="splash-body-bullet svelte-1umr92q">Multiplayer game modes</div> <div class="splash-body-bullet svelte-1umr92q">Competitive/rally game modes (check out <a class="splash-body-link svelte-1umr92q" href="https://driftmas.slowroads.io">driftmas.slowroads.io</a>!)</div></div> <div class="splash-body-text svelte-1umr92q">If this sounds good to you, please support me by <a class="splash-body-link svelte-1umr92q" href="https://store.steampowered.com/app/3431300/Slow_Roads/" target="_blank" rel="noopener noreferrer">wishlisting Slow Roads on Steam!</a></div> <div class="splash-body-header svelte-1umr92q" style="text-align: left; position: relative; color: #6dcff6; margin-top: 2rem; text-shadow: 0 0 1rem #6dcff688">Slow Roads: Web Edition
                        <a class="splash-visit-steam svelte-1umr92q" style="top:-0.5rem;" target="_blank" rel="noopener noreferrer" href="https://topographinteractive.itch.io/slow-roads"><img src="./icon_itch_white.svg" class="splash-body-steam-icon svelte-1umr92q" style="width: 1.5rem; margin-left: 0.5rem;" alt=""/>
                            Purchase here</a></div> <div class="splash-body-text svelte-1umr92q">In the meantime, if you want to play the web version offline, you can find the downloadable Slow Roads: Web Edition available for a small price on the <a class="splash-body-link svelte-1umr92q" href="https://topographinteractive.itch.io/slow-roads" target="_blank" rel="noopener noreferrer">Slow Roads page on itch.io</a>. This version won&#39;t receive the Steam-exclusive features, but does include the high-resolution textures unavailable on the web. Available for Windows, Linux, and MacOS.
                        <br/> <br/>
                        If you want to transfer your progress and settings from slowroads.io to the Web Edition, you can download your save file from the Profile settings and upload that in the app.</div></div>`,pe,we,me='<div class="splash-body-wrapper svelte-1umr92q"><div class="splash-body-header svelte-1umr92q">Background</div> <div class="splash-body-text svelte-1umr92q">Hey, I&#39;m <a class="splash-body-link svelte-1umr92q" href="https://anslo.dev">Anslo</a>, a creative generalist interested in 3D graphics and procedural generation. Slow Roads began as my hobby project to generate endless scenic landscapes, packaged as a chill driving game. I made it partly as an experiment in procedural generation, partly to show how capable browsers can be with 3D, and partly to scratch a very specific itch to mindlessly drive forever, as a kind of active meditation.</div> <div class="splash-body-text svelte-1umr92q">I started the project in July 2021, released a rough version 1.0 in October 2022, rewrote the whole engine over the next two years, and am now busy developing all sorts of new features. The original goal has always been to support dozens of different locations, I expect to keep working on the game until I fulfil that. But, ultimately, my hope is that those in need of a simple escape will find it here.</div></div>',Q,re,ce='<div class="splash-body-wrapper svelte-1umr92q"><div class="splash-body-header svelte-1umr92q">Development Roadmap</div> <div class="splash-body-text svelte-1umr92q">Slow Roads is a living project under continuous development. Here&#39;s a look at what&#39;s coming in the next few months. As a solo developer, it&#39;s impossible to estimate when these features will be finished, but know that I&#39;m working on the game every week. I post regular updates to the #dev-log channel in the <a class="splash-body-link svelte-1umr92q" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Discord server</a>, so check there for the latest.</div> <div class="splash-body-subheader svelte-1umr92q">Next up:</div> <div class="splash-body-bullets svelte-1umr92q"><div class="splash-body-bullet svelte-1umr92q">Development and release of the Steam version</div></div> <div class="splash-body-subheader svelte-1umr92q">Future goals:</div> <div class="splash-body-bullets svelte-1umr92q"><div class="splash-body-bullet svelte-1umr92q">Improved weather effects, including rain</div> <div class="splash-body-bullet svelte-1umr92q">Continued environmental detail upgrades, such as structures, buildings, and wildlife</div> <div class="splash-body-bullet svelte-1umr92q">Development of new locations</div> <div class="splash-body-bullet svelte-1umr92q">Development of new vehicles</div> <div class="splash-body-bullet svelte-1umr92q">Regular community events</div></div> <div class="splash-body-text svelte-1umr92q"><a class="splash-body-link svelte-1umr92q" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the Discord</a> or <a class="splash-body-link svelte-1umr92q" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">follow slowroads.io on Bluesky</a> to keep updated and share feedback!</div></div>',K,de,J,ge,Ee="FAQ",ze,He,Ze,$e=`<div class="splash-body-wrapper svelte-1umr92q"><div class="splash-body-header svelte-1umr92q">Contact</div> <div class="splash-body-text svelte-1umr92q" style="text-align:center; user-select: default;">Email
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white); user-select: all;">hello@slowroads.io</span> <br/> <br/>
                        Discord
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-1umr92q" href="https://discord.gg/TNf9bBrZmR" target="_blank" rel="noopener noreferrer">Join the server here</a></span> <br/> <br/>
                        Bluesky
                        <br/> <span style="font-size: 1.2rem; font-weight: 400; color: var(--sr-white)"><a class="splash-body-link svelte-1umr92q" href="https://bsky.app/profile/slowroads.io" target="_blank" rel="noopener noreferrer">Follow slowroads.io here</a></span></div></div>`,dt,et,ci=`<div class="splash-body-wrapper svelte-1umr92q"><div class="splash-body-header svelte-1umr92q">Attributions</div> <div class="splash-body-text svelte-1umr92q" style="text-align: center">Rendering library - <a class="splash-body-link svelte-1umr92q" href="https://threejs.org/">three.js</a> <br/>
                        Brand design - <a class="splash-body-link svelte-1umr92q" href="https://benj-design.com">benj-design.com</a> <br/>
                        Off-world textures - <a class="splash-body-link svelte-1umr92q" href="https://mars.nasa.gov/mars2020/multimedia/raw-images/">Nasa Perseverance</a> <br/>
                        Brake audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/WavJunction.com/sounds/456764/">WavJunction.com on freesound.org</a> <br/>
                        Ambient audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/InspectorJ/sounds/401543/">InspectorJ on freesound.org</a> <br/>
                        Tyre audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/fractanimal/sounds/614627/">fractanimal on freesound.org</a> <br/>
                        Gravel audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/seth-m/sounds/341069/">seth-m on freesound.org</a> <br/>
                        Boost audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/YleArkisto/sounds/342892/">YleArkisto on freesound.org</a> <br/>
                        Suspension audio - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/ingudios/sounds/119468/">ingudios on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/jakobthiesen/sounds/174836/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/jakobthiesen/sounds/174837/">jakobthiesen on freesound.org</a> <br/>
                        Collision sounds - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/SubwaySandwitch420/sounds/538947/">SubwaySandwitch420 on freesound.org</a> <br/>
                        Barrier scrape sound - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/eyenorth/sounds/464846/">eyenorth on freesound.org</a> <br/>
                        Misc sound effects - <a class="splash-body-link svelte-1umr92q" href="https://freesound.org/people/HECKFRICKER/sounds/625312/">HECKFRICKER on freesound.org</a> <br/></div></div>`,Vt,ye,st='<div class="splash-body-wrapper svelte-1umr92q"><div class="splash-body-header svelte-1umr92q" style="font-size: 1rem">Thank you for playing</div></div>',Pt,Dt,Zt,jt,hi,ht=s[1]&&da(),wt=!Kt&&Ri&&Gh(s),ft=!Kt&&Bh(s),Gt=xo&&Wh(s),yt=!Kt&&jh(s),fi=Oe(qh),pt=[];for(let je=0;je<fi.length;je+=1)pt[je]=Yh(Fh(s,fi,je));let mt=!s[6]&&ha();return{c(){e=_("div"),t=_("div"),i=_("div"),r=_("div"),a=_("img"),n=k(),l=_("div"),l.textContent=d,h=k(),u=_("div"),p=ee(m),v=k(),ht&&ht.c(),w=k(),y=_("div"),D=_("span"),L=ee(Qt),E=k(),A=_("br"),T=ee(`\r
                This work is licensed under a `),x=_("a"),x.textContent=Y,X=k(),wt&&wt.c(),O=k(),ft&&ft.c(),$=k(),Gt&&Gt.c(),Z=k(),U=_("div"),U.innerHTML=B,V=k(),yt&&yt.c(),z=k(),M=_("div"),N=_("div"),N.innerHTML=G,se=k(),oe=_("div"),oe.innerHTML=le,pe=k(),we=_("div"),we.innerHTML=me,Q=k(),re=_("div"),re.innerHTML=ce,K=k(),de=_("div"),J=_("div"),ge=_("div"),ge.textContent=Ee,ze=k();for(let je=0;je<pt.length;je+=1)pt[je].c();He=k(),Ze=_("div"),Ze.innerHTML=$e,dt=k(),et=_("div"),et.innerHTML=ci,Vt=k(),ye=_("div"),ye.innerHTML=st,Pt=k(),mt&&mt.c(),this.h()},l(je){e=b(je,"DIV",{id:!0,class:!0});var Ye=C(e);t=b(Ye,"DIV",{id:!0,class:!0});var Ut=C(t);i=b(Ut,"DIV",{id:!0,class:!0});var ct=C(i);r=b(ct,"DIV",{id:!0,class:!0});var Ht=C(r);a=b(Ht,"IMG",{class:!0,src:!0,alt:!0}),n=I(Ht),l=b(Ht,"DIV",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1fl8x43"&&(l.textContent=d),h=I(Ht),u=b(Ht,"DIV",{id:!0,class:!0});var ki=C(u);p=te(ki,m),ki.forEach(g),v=I(Ht),ht&&ht.l(Ht),Ht.forEach(g),w=I(ct),y=b(ct,"DIV",{class:!0});var Ot=C(y);D=b(Ot,"SPAN",{class:!0});var Jt=C(D);L=te(Jt,Qt),Jt.forEach(g),E=I(Ot),A=b(Ot,"BR",{}),T=te(Ot,`\r
                This work is licensed under a `),x=b(Ot,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),W(x)!=="svelte-u8p6bq"&&(x.textContent=Y),Ot.forEach(g),X=I(ct),wt&&wt.l(ct),O=I(ct),ft&&ft.l(ct),$=I(ct),Gt&&Gt.l(ct),Z=I(ct),U=b(ct,"DIV",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-1os97po"&&(U.innerHTML=B),V=I(ct),yt&&yt.l(ct),ct.forEach(g),z=I(Ut),M=b(Ut,"DIV",{id:!0,class:!0});var gt=C(M);N=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(N)!=="svelte-ys1kki"&&(N.innerHTML=G),se=I(gt),oe=b(gt,"DIV",{class:!0,"data-svelte-h":!0}),W(oe)!=="svelte-b5dx86"&&(oe.innerHTML=le),pe=I(gt),we=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(we)!=="svelte-ziz0uw"&&(we.innerHTML=me),Q=I(gt),re=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(re)!=="svelte-1ghmk4k"&&(re.innerHTML=ce),K=I(gt),de=b(gt,"DIV",{class:!0,style:!0});var ii=C(de);J=b(ii,"DIV",{class:!0});var si=C(J);ge=b(si,"DIV",{class:!0,"data-svelte-h":!0}),W(ge)!=="svelte-1oguvct"&&(ge.textContent=Ee),ze=I(si);for(let bi=0;bi<pt.length;bi+=1)pt[bi].l(si);si.forEach(g),ii.forEach(g),He=I(gt),Ze=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(Ze)!=="svelte-15699nf"&&(Ze.innerHTML=$e),dt=I(gt),et=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(et)!=="svelte-1krubna"&&(et.innerHTML=ci),Vt=I(gt),ye=b(gt,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(ye)!=="svelte-18ds10l"&&(ye.innerHTML=st),gt.forEach(g),Pt=I(Ut),mt&&mt.l(Ut),Ut.forEach(g),Ye.forEach(g),this.h()},h(){f(a,"class","splash-logo svelte-1umr92q"),At(a.src,o="./logo-stacked.svg")||f(a,"src",o),f(a,"alt",""),f(l,"class","splash-subtitle svelte-1umr92q"),f(u,"id","splash-begin"),f(u,"class","svelte-1umr92q"),f(r,"id","splash-title"),f(r,"class","svelte-1umr92q"),f(D,"class","splash-smallprint-link svelte-1umr92q"),f(x,"rel","license noopener noreferrer"),f(x,"class","splash-smallprint-link svelte-1umr92q"),f(x,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),f(x,"target","_blank"),f(y,"class","splash-smallprint splash-lr svelte-1umr92q"),f(U,"class","splash-smallprint splash-ll svelte-1umr92q"),f(i,"id","splash-main"),f(i,"class","svelte-1umr92q"),f(N,"class","splash-body-section svelte-1umr92q"),ae(N,"background","none"),f(oe,"class","splash-body-section splash-steam-bg svelte-1umr92q"),f(we,"class","splash-body-section svelte-1umr92q"),ae(we,"background","none"),f(re,"class","splash-body-section svelte-1umr92q"),ae(re,"background","var(--sr-primary-50)"),f(ge,"class","splash-body-header svelte-1umr92q"),f(J,"class","splash-body-wrapper svelte-1umr92q"),f(de,"class","splash-body-section svelte-1umr92q"),ae(de,"background","none"),f(Ze,"class","splash-body-section svelte-1umr92q"),ae(Ze,"background","var(--sr-primary-50)"),f(et,"class","splash-body-section svelte-1umr92q"),ae(et,"background","none"),f(ye,"class","splash-body-section svelte-1umr92q"),ae(ye,"background","var(--sr-primary)"),f(M,"id","about"),f(M,"class","svelte-1umr92q"),f(t,"id",Dt=s[5]?"splash-dynamic":"splash-fixed"),f(t,"class","svelte-1umr92q"),f(e,"id","splash"),f(e,"class","svelte-1umr92q")},m(je,Ye){P(je,e,Ye),c(e,t),c(t,i),c(i,r),c(r,a),c(r,n),c(r,l),c(r,h),c(r,u),c(u,p),c(r,v),ht&&ht.m(r,null),c(i,w),c(i,y),c(y,D),c(D,L),c(y,E),c(y,A),c(y,T),c(y,x),c(i,X),wt&&wt.m(i,null),c(i,O),ft&&ft.m(i,null),c(i,$),Gt&&Gt.m(i,null),c(i,Z),c(i,U),c(i,V),yt&&yt.m(i,null),c(t,z),c(t,M),c(M,N),c(M,se),c(M,oe),c(M,pe),c(M,we),c(M,Q),c(M,re),c(M,K),c(M,de),c(de,J),c(J,ge),c(J,ze);for(let Ut=0;Ut<pt.length;Ut+=1)pt[Ut]&&pt[Ut].m(J,null);c(M,He),c(M,Ze),c(M,dt),c(M,et),c(M,Vt),c(M,ye),c(t,Pt),mt&&mt.m(t,null),Zt=!0,jt||(hi=[F(u,"touchstart",s[7],{passive:!0}),F(u,"click",function(){zr(s[0])&&s[0].apply(this,arguments)}),F(D,"click",s[8])],jt=!0)},p(je,[Ye]){s=je,(!Zt||Ye&64)&&m!==(m=s[6]?"continue":"begin")&&be(p,m),s[1]?ht||(ht=da(),ht.c(),ht.m(r,null)):ht&&(ht.d(1),ht=null),!Kt&&Ri&&wt.p(s,Ye),Kt||ft.p(s,Ye),xo&&Gt.p(s,Ye),Kt||yt.p(s,Ye),s[6]?mt&&(mt.d(1),mt=null):mt||(mt=ha(),mt.c(),mt.m(t,null)),(!Zt||Ye&32&&Dt!==(Dt=s[5]?"splash-dynamic":"splash-fixed"))&&f(t,"id",Dt)},i(je){if(!Zt){j(ft);for(let Ye=0;Ye<fi.length;Ye+=1)j(pt[Ye]);Zt=!0}},o(je){ie(ft),pt=pt.filter(Boolean);for(let Ye=0;Ye<pt.length;Ye+=1)ie(pt[Ye]);Zt=!1},d(je){je&&g(e),ht&&ht.d(),wt&&wt.d(),ft&&ft.d(),Gt&&Gt.d(),yt&&yt.d(),bt(pt,je),mt&&mt.d(),jt=!1,at(hi)}}}function Xh(s,e,t){let i,r;Ce(s,ti,E=>t(5,i=E)),Ce(s,Ts,E=>t(6,r=E));let{toggleSplash:a=()=>{}}=e,{webglError:o=!1}=e,n=!1,l=[],d=Ri&&Xs[2]==Qt[2];for(let E of $r)if(mn(E.version,Xs)>0)E.quickChanges&&(E.version[4]==0||d)&&l.push(...E.quickChanges);else break;l.length>12&&(l=l.slice(0,12));const h=["./about_zen_01.jpg","./about_road.jpg","./about_veh_05.jpg","./about_traffic.jpg","./about_dev_04.jpg"];let u=Math.floor(Math.random()*h.length),m=h[u];setInterval(()=>{u=(u+1)%h.length,t(4,m=h[u])},2e3);const p=()=>{ne.set("touchscreen",!0)},v=()=>t(2,n=!n),w=()=>t(2,n=!n),y=E=>t(2,n=E),D=()=>{localStorage.setItem("hasSeenOld",!0)},L=()=>{localStorage.setItem("hasClickedSteam",!0)};return s.$$set=E=>{"toggleSplash"in E&&t(0,a=E.toggleSplash),"webglError"in E&&t(1,o=E.webglError)},[a,o,n,l,m,i,r,p,v,w,y,D,L]}class Qh extends Xe{constructor(e){super(),Qe(this,e,Xh,Kh,Ke,{toggleSplash:0,webglError:1})}}function Zh(s){let e,t,i,r,a,o,n,l,d,h,u,m,p,v,w,y="RESET",D,L;return{c(){e=_("div"),t=_("div"),i=k(),r=_("div"),a=k(),o=_("div"),n=k(),l=_("div"),d=_("div"),h=k(),u=_("div"),m=k(),p=_("div"),v=k(),w=_("div"),w.textContent=y,this.h()},l(E){e=b(E,"DIV",{class:!0});var A=C(e);t=b(A,"DIV",{class:!0,style:!0});var T=C(t);T.forEach(g),i=I(A),r=b(A,"DIV",{class:!0}),C(r).forEach(g),a=I(A),o=b(A,"DIV",{class:!0,style:!0}),C(o).forEach(g),A.forEach(g),n=I(E),l=b(E,"DIV",{class:!0});var x=C(l);d=b(x,"DIV",{class:!0,style:!0});var Y=C(d);Y.forEach(g),h=I(x),u=b(x,"DIV",{class:!0}),C(u).forEach(g),m=I(x),p=b(x,"DIV",{class:!0,style:!0}),C(p).forEach(g),x.forEach(g),v=I(E),w=b(E,"DIV",{class:!0,"data-svelte-h":!0}),W(w)!=="svelte-jv83gf"&&(w.textContent=y),this.h()},h(){f(t,"class","steer-slider-thumb svelte-1fln1t4"),ae(t,"top",s[0]*100+"%"),R(t,"steer-dragging",s[4]),f(r,"class","steer-slider-track svelte-1fln1t4"),f(o,"class","steer-slider-zero svelte-1fln1t4"),ae(o,"top",Mt*100+"%"),f(e,"class","steer-slider left-steer svelte-1fln1t4"),f(d,"class","steer-slider-thumb svelte-1fln1t4"),ae(d,"top",s[1]*100+"%"),R(d,"steer-dragging",s[5]),f(u,"class","steer-slider-track svelte-1fln1t4"),f(p,"class","steer-slider-zero svelte-1fln1t4"),ae(p,"top",Mt*100+"%"),f(l,"class","steer-slider right-steer svelte-1fln1t4"),f(w,"class","touch-reset svelte-1fln1t4")},m(E,A){P(E,e,A),c(e,t),c(e,i),c(e,r),c(e,a),c(e,o),s[12](e),P(E,n,A),P(E,l,A),c(l,d),c(l,h),c(l,u),c(l,m),c(l,p),s[15](l),P(E,v,A),P(E,w,A),D||(L=[F(e,"mousedown",s[13]),F(e,"touchstart",s[14]),F(l,"mousedown",s[16]),F(l,"touchstart",s[17]),F(w,"click",s[18])],D=!0)},p(E,A){A[0]&1&&ae(t,"top",E[0]*100+"%"),A[0]&16&&R(t,"steer-dragging",E[4]),A[0]&2&&ae(d,"top",E[1]*100+"%"),A[0]&32&&R(d,"steer-dragging",E[5])},i:ve,o:ve,d(E){E&&(g(e),g(n),g(l),g(v),g(w)),s[12](null),s[15](null),D=!1,at(L)}}}const Mt=.9;function fa(s=[],e){for(let t of s)if(t.target==e)return t;return null}function Jh(s,e,t){let{enabled:i=!0}=e,r=null,a=null,o=0,n=0,l=!1,d=!1,h=Mt,u=Mt,m,p,v=window.innerWidth<window.innerHeight;function w(){v=window.innerWidth<window.innerHeight}function y(V){fa(V.changedTouches,r)&&(t(4,l=!0),m=r.getBoundingClientRect(),A(V))}function D(V){fa(V.changedTouches,a)&&(t(5,d=!0),p=a.getBoundingClientRect(),A(V))}function L(V,z){}function E(V){t(4,l=!1),h>Mt&&t(0,h=Mt),t(5,d=!1),u>Mt&&t(1,u=Mt)}function A(V){if(i){for(let z of V.changedTouches)l&&z.target==r&&(v?t(0,h=Math.max(Math.min(1,(m.right-z.clientX)/m.width),0)):t(0,h=Math.max(Math.min(1,(z.clientY-m.top)/m.height),0))),d&&z.target==a&&(v?t(1,u=Math.max(Math.min(1,(p.right-z.clientX)/p.width),0)):t(1,u=Math.max(Math.min(1,(z.clientY-p.top)/p.height),0)));V.preventDefault(),V.stopImmediatePropagation()}}function T(V){for(let z of V.changedTouches)l&&z.target==r&&(t(4,l=!1),h>Mt&&t(0,h=Mt)),d&&z.target==a&&(t(5,d=!1),u>Mt&&t(1,u=Mt))}function x(V){l?t(0,h=Math.max(Math.min(1,(V.clientY-m.top)/m.height),0)):d&&t(1,u=Math.max(Math.min(1,(V.clientY-p.top)/p.height),0))}nt(()=>(window.addEventListener("mousemove",x),window.addEventListener("mouseup",E),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",T),window.addEventListener("resize",w),Qs.set(!0),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",E),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",T),window.removeEventListener("resize",w),Qs.set(!1)}));function Y(V){St[V?"unshift":"push"](()=>{r=V,t(2,r)})}const X=V=>{},O=V=>{y(V)};function $(V){St[V?"unshift":"push"](()=>{a=V,t(3,a)})}const Z=V=>{},U=V=>{D(V)},B=()=>{t(0,h=Mt),t(1,u=Mt),pn.update(V=>V+1)};return s.$$set=V=>{"enabled"in V&&t(9,i=V.enabled)},s.$$.update=()=>{s.$$.dirty[0]&3075&&(t(10,o=(Mt-h)/Mt),t(11,n=(Mt-u)/Mt),gn.set((o+n)/2),Ur.set(o-n))},[h,u,r,a,l,d,y,D,L,i,o,n,Y,X,O,$,Z,U,B]}class $h extends Xe{constructor(e){super(),Qe(this,e,Jh,Zh,Ke,{enabled:9},null,[-1,-1])}}function ef(s){let e,t,i,r,a,o,n,l,d,h,u,m='<div class="steer-thumb svelte-if0uoq"></div>',p,v,w="",y,D,L="RESET",E,A,T="BRAKE",x,Y,X="BOOST",O,$,Z="CAM",U,B;return{c(){e=_("div"),t=_("div"),i=_("div"),r=k(),a=_("div"),o=k(),n=_("div"),l=k(),d=_("div"),h=_("div"),u=_("div"),u.innerHTML=m,p=k(),v=_("div"),v.innerHTML=w,y=k(),D=_("div"),D.textContent=L,E=k(),A=_("div"),A.textContent=T,x=k(),Y=_("div"),Y.textContent=X,O=k(),$=_("div"),$.textContent=Z,this.h()},l(V){e=b(V,"DIV",{class:!0});var z=C(e);t=b(z,"DIV",{class:!0});var M=C(t);i=b(M,"DIV",{class:!0,style:!0});var N=C(i);N.forEach(g),r=I(M),a=b(M,"DIV",{class:!0}),C(a).forEach(g),o=I(M),n=b(M,"DIV",{class:!0,style:!0}),C(n).forEach(g),M.forEach(g),l=I(z),d=b(z,"DIV",{class:!0});var G=C(d);h=b(G,"DIV",{class:!0});var se=C(h);u=b(se,"DIV",{class:!0,"data-svelte-h":!0}),W(u)!=="svelte-htckc0"&&(u.innerHTML=m),p=I(se),v=b(se,"DIV",{class:!0,"data-svelte-h":!0}),W(v)!=="svelte-1npfju5"&&(v.innerHTML=w),se.forEach(g),G.forEach(g),y=I(z),D=b(z,"DIV",{class:!0,"data-svelte-h":!0}),W(D)!=="svelte-leux23"&&(D.textContent=L),E=I(z),A=b(z,"DIV",{class:!0,"data-svelte-h":!0}),W(A)!=="svelte-10pe3fz"&&(A.textContent=T),x=I(z),Y=b(z,"DIV",{class:!0,"data-svelte-h":!0}),W(Y)!=="svelte-6q7fx7"&&(Y.textContent=X),O=I(z),$=b(z,"DIV",{class:!0,"data-svelte-h":!0}),W($)!=="svelte-cjqwr0"&&($.textContent=Z),z.forEach(g),this.h()},h(){f(i,"class","slider-thumb svelte-if0uoq"),ae(i,"top",s[0]*100+"%"),R(i,"slider-dragging",s[4]),f(a,"class","accel-slider-track svelte-if0uoq"),f(n,"class","accel-slider-zero svelte-if0uoq"),ae(n,"top",ai*100+"%"),f(t,"class","accel-slider svelte-if0uoq"),f(u,"class","steer-thumb-container svelte-if0uoq"),f(v,"class","steer-bar-zero svelte-if0uoq"),f(h,"class","steer-bar svelte-if0uoq"),f(d,"class","steer svelte-if0uoq"),f(D,"class","touch-btn touch-reset svelte-if0uoq"),f(A,"class","touch-btn touch-brake svelte-if0uoq"),f(Y,"class","touch-btn touch-boost svelte-if0uoq"),f($,"class","touch-btn touch-cam svelte-if0uoq"),f(e,"class","touch-visible svelte-if0uoq"),R(e,"touch-hidden",s[5])},m(V,z){P(V,e,z),c(e,t),c(t,i),c(t,r),c(t,a),c(t,o),c(t,n),s[13](t),c(e,l),c(e,d),c(d,h),c(h,u),s[16](u),c(h,p),c(h,v),s[17](d),c(e,y),c(e,D),c(e,E),c(e,A),c(e,x),c(e,Y),c(e,O),c(e,$),U||(B=[F(t,"mousedown",s[14]),F(t,"touchstart",s[15]),F(d,"mousedown",s[18]),F(d,"touchstart",s[19]),F(D,"click",s[20]),F(A,"touchstart",s[21],{passive:!0}),F(A,"touchend",s[22],{passive:!0}),F(Y,"touchstart",s[23],{passive:!0}),F(Y,"touchend",s[24],{passive:!0}),F($,"click",s[25])],U=!0)},p(V,z){z[0]&1&&ae(i,"top",V[0]*100+"%"),z[0]&16&&R(i,"slider-dragging",V[4]),z[0]&32&&R(e,"touch-hidden",V[5])},i:ve,o:ve,d(V){V&&g(e),s[13](null),s[16](null),s[17](null),U=!1,at(B)}}}const ai=.9;function ua(s=[],e){for(let t of s)if(t.target==e)return t;return null}function tf(s,e,t){let{enabled:i=!0}=e;const r=Math.PI/4,a=Math.PI/2;let o=null,n=null,l=null,d=0,h=0,u=!1,m=!1,p=ai,v,w,y=window.innerWidth<window.innerHeight;function D(){y=window.innerWidth<window.innerHeight}function L(Q){O(),ua(Q.changedTouches,o)&&(t(4,u=!0),v=o.getBoundingClientRect(),x(Q))}function E(Q){O(),ua(Q.changedTouches,n)&&(m=!0,w=n.getBoundingClientRect(),x(Q))}function A(Q,re){}function T(Q){t(4,u=!1),p>ai&&t(0,p=ai),m=!1,Ai.sticky||(t(12,h=0),t(3,l.style.transform="rotate(-"+r+"rad)",l))}function x(Q){if(i){for(let re of Q.changedTouches)if(u&&re.target==o&&(y?t(0,p=Math.max(Math.min(1,(v.right-re.clientX)/v.width),0)):t(0,p=Math.max(Math.min(1,(re.clientY-v.top)/v.height),0))),m&&re.target==n){let ce,K;y?(ce=(w.bottom-re.clientY)/w.width,K=(re.clientX-w.left)/w.width):(ce=(w.right-re.clientX)/w.height,K=1-(re.clientY-w.top)/w.height);let de=Math.atan2(K,ce);de=Math.min(Math.max(0,de),a),t(12,h=(de-r)/r),t(3,l.style.transform="rotate(-"+(a-de)+"rad)",l)}Q.preventDefault(),Q.stopImmediatePropagation()}}function Y(Q){for(let re of Q.changedTouches)u&&re.target==o&&(t(4,u=!1),p>ai&&t(0,p=ai)),m&&re.target==n&&(m=!1,Ai.sticky||(t(12,h=0),t(3,l.style.transform="rotate(-"+r+"rad)",l)))}function X(Q){u&&t(0,p=Math.max(Math.min(1,(Q.clientY-v.top)/v.height),0))}function O(){hs.hasInit||hs.init()}let $=!1;function Z(Q){t(5,$=qt.value&&ne.autodriveMode==$i.FULL),qt.value&&ne.autodriveMode!=$i.STEER&&t(0,p=ai)}nt(()=>(window.addEventListener("mousemove",X),window.addEventListener("mouseup",T),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",Y),window.addEventListener("resize",D),qt.addListener(Z),ne.addListener("autodriveMode",Z),Qs.set(!0),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",T),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",Y),window.removeEventListener("resize",D),qt.removeListener(Z),ne.removeListener("autodriveMode",Z),Qs.set(!1)}));function U(Q){St[Q?"unshift":"push"](()=>{o=Q,t(1,o)})}const B=Q=>{},V=Q=>{L(Q)};function z(Q){St[Q?"unshift":"push"](()=>{l=Q,t(3,l)})}function M(Q){St[Q?"unshift":"push"](()=>{n=Q,t(2,n)})}const N=Q=>{},G=Q=>{E(Q)},se=()=>{O(),Ai.resetMaintainsAccel||t(0,p=ai),pn.update(Q=>Q+1)},oe=()=>{O(),Ro.set(1)},le=()=>Ro.set(0),pe=()=>{O(),Uo.set(1)},we=()=>Uo.set(0),me=()=>{O(),cn.update(Q=>Q+1)};return s.$$set=Q=>{"enabled"in Q&&t(10,i=Q.enabled)},s.$$.update=()=>{s.$$.dirty[0]&2049&&(t(11,d=(ai-p)/ai),d<0?t(11,d*=ai*10):t(11,d=d*d),gn.set(d)),s.$$.dirty[0]&4096&&(h<0?Ur.set(h*h*-(1-Ai.linearity)+h*Ai.linearity):Ur.set(h*h*(1-Ai.linearity)+h*Ai.linearity))},[p,o,n,l,u,$,L,E,A,O,i,d,h,U,B,V,z,M,N,G,se,oe,le,pe,we,me]}class sf extends Xe{constructor(e){super(),Qe(this,e,tf,ef,Ke,{enabled:10},null,[-1,-1])}}function va(s,e,t){const i=s.slice();return i[5]=e[t],i}function ma(s){let e,t,i,r,a,o;function n(){return s[3](s[5])}return{c(){e=_("div"),t=_("img"),r=k(),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);t=b(d,"IMG",{class:!0,src:!0}),r=I(d),d.forEach(g),this.h()},h(){f(t,"class","option-icon svelte-lk6ame"),At(t.src,i=s[5].icon)||f(t,"src",i),R(t,"option-icon-selected",s[2]==s[5].key),f(e,"class","style-selection-option svelte-lk6ame"),R(e,"style-selection-option-selected",s[2]==s[5].key)},m(l,d){P(l,e,d),c(e,t),c(e,r),a||(o=F(e,"mousedown",n),a=!0)},p(l,d){s=l,d&1&&!At(t.src,i=s[5].icon)&&f(t,"src",i),d&5&&R(t,"option-icon-selected",s[2]==s[5].key),d&5&&R(e,"style-selection-option-selected",s[2]==s[5].key)},d(l){l&&g(e),a=!1,o()}}}function rf(s){let e,t=Oe(s[0].options),i=[];for(let r=0;r<t.length;r+=1)i[r]=ma(va(s,t,r));return{c(){e=_("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=b(r,"DIV",{class:!0});var a=C(e);for(let o=0;o<i.length;o+=1)i[o].l(a);a.forEach(g),this.h()},h(){f(e,"class","style-selection svelte-lk6ame")},m(r,a){P(r,e,a);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,[a]){if(a&7){t=Oe(r[0].options);let o;for(o=0;o<t.length;o+=1){const n=va(r,t,o);i[o]?i[o].p(n,a):(i[o]=ma(n),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},i:ve,o:ve,d(r){r&&g(e),bt(i,r)}}}function of(s,e,t){let{meta:i}=e,{live:r}=e,a="";function o(l){t(2,a=l)}nt(()=>(t(2,a=r[i.key]),r.addListener(i.key,o),()=>{r.removeListener(i.key,o)}));const n=l=>r.set(i.key,l.key);return s.$$set=l=>{"meta"in l&&t(0,i=l.meta),"live"in l&&t(1,r=l.live)},[i,r,a,n]}class af extends Xe{constructor(e){super(),Qe(this,e,of,rf,Ke,{meta:0,live:1})}}function ga(s,e,t){const i=s.slice();return i[5]=e[t],i}function lf(s){let e,t,i=s[5].type+"",r;return{c(){e=_("div"),t=ee("Unrecognised type "),r=ee(i)},l(a){e=b(a,"DIV",{});var o=C(e);t=te(o,"Unrecognised type "),r=te(o,i),o.forEach(g)},m(a,o){P(a,e,o),c(e,t),c(e,r)},p(a,o){o&1&&i!==(i=a[5].type+"")&&be(r,i)},i:ve,o:ve,d(a){a&&g(e)}}}function nf(s){let e,t;return e=new af({props:{meta:s[5],live:s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.meta=i[5]),r&2&&(a.live=i[1]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function pa(s){let e,t,i=s[5].readable+"",r,a,o,n,l,d;const h=[nf,lf],u=[];function m(p,v){return p[5].type==Li.Selection?0:1}return o=m(s),n=u[o]=h[o](s),{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),n.c(),l=k(),this.h()},l(p){e=b(p,"DIV",{class:!0});var v=C(e);t=b(v,"DIV",{class:!0});var w=C(t);r=te(w,i),w.forEach(g),a=I(v),n.l(v),l=I(v),v.forEach(g),this.h()},h(){f(t,"class","style-subtitle svelte-p9ui73"),f(e,"class","style-group svelte-p9ui73")},m(p,v){P(p,e,v),c(e,t),c(t,r),c(e,a),u[o].m(e,null),c(e,l),d=!0},p(p,v){(!d||v&1)&&i!==(i=p[5].readable+"")&&be(r,i);let w=o;o=m(p),o===w?u[o].p(p,v):(qe(),ie(u[w],1,1,()=>{u[w]=null}),Fe(),n=u[o],n?n.p(p,v):(n=u[o]=h[o](p),n.c()),j(n,1),n.m(e,l))},i(p){d||(j(n),d=!0)},o(p){ie(n),d=!1},d(p){p&&g(e),u[o].d()}}}function df(s){let e,t,i=Oe(s[0]),r=[];for(let o=0;o<i.length;o+=1)r[o]=pa(ga(s,i,o));const a=o=>ie(r[o],1,1,()=>{r[o]=null});return{c(){e=_("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var n=C(e);for(let l=0;l<r.length;l+=1)r[l].l(n);n.forEach(g),this.h()},h(){f(e,"class","style-main svelte-p9ui73")},m(o,n){P(o,e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,[n]){if(n&3){i=Oe(o[0]);let l;for(l=0;l<i.length;l+=1){const d=ga(o,i,l);r[l]?(r[l].p(d,n),j(r[l],1)):(r[l]=pa(d),r[l].c(),j(r[l],1),r[l].m(e,null))}for(qe(),l=i.length;l<r.length;l+=1)a(l);Fe()}},i(o){if(!t){for(let n=0;n<i.length;n+=1)j(r[n]);t=!0}},o(o){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)ie(r[n]);t=!1},d(o){o&&g(e),bt(r,o)}}}function cf(s,e,t){let i=[],r;function a(n){let l=[];for(let d in n)d!="presets"&&l.push(n[d]);t(0,i=l)}function o(n){t(1,r=n)}return nt(()=>(zs.addListener("metaConfig",a),zs.addListener("liveConfig",o),()=>{zs.removeListener("metaConfig",a),zs.removeListener("liveConfig",o)})),[i,r]}class hf extends Xe{constructor(e){super(),Qe(this,e,cf,df,Ke,{})}}function _a(s,e,t){const i=s.slice();return i[9]=e[t],i[11]=t,i}function ff(s){let e=s[9].label+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,r){P(i,t,r)},p(i,r){r&1&&e!==(e=i[9].label+"")&&be(t,e)},d(i){i&&g(t)}}}function uf(s){let e,t;return{c(){e=_("img"),this.h()},l(i){e=b(i,"IMG",{class:!0,src:!0}),this.h()},h(){f(e,"class","enum-option-icon svelte-1ey7984"),At(e.src,t=s[9].icon)||f(e,"src",t),R(e,"icon-selected",s[2]==s[11]&&!s[1])},m(i,r){P(i,e,r)},p(i,r){r&1&&!At(e.src,t=i[9].icon)&&f(e,"src",t),r&6&&R(e,"icon-selected",i[2]==i[11]&&!i[1])},d(i){i&&g(e)}}}function ba(s){let e,t,i,r;function a(d,h){return d[9].icon?uf:ff}let o=a(s),n=o(s);function l(){return s[7](s[11])}return{c(){e=_("div"),n.c(),t=k(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);n.l(h),t=I(h),h.forEach(g),this.h()},h(){f(e,"class","enum-option svelte-1ey7984"),R(e,"selected",s[2]==s[11]&&!s[1])},m(d,h){P(d,e,h),n.m(e,null),c(e,t),i||(r=F(e,"click",l),i=!0)},p(d,h){s=d,o===(o=a(s))&&n?n.p(s,h):(n.d(1),n=o(s),n&&(n.c(),n.m(e,t))),h&6&&R(e,"selected",s[2]==s[11]&&!s[1])},d(d){d&&g(e),n.d(),i=!1,r()}}}function vf(s){let e,t=Oe(s[0]),i=[];for(let r=0;r<t.length;r+=1)i[r]=ba(_a(s,t,r));return{c(){e=_("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=b(r,"DIV",{class:!0});var a=C(e);for(let o=0;o<i.length;o+=1)i[o].l(a);a.forEach(g),this.h()},h(){f(e,"class","enum-container svelte-1ey7984")},m(r,a){P(r,e,a);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,[a]){if(a&15){t=Oe(r[0]);let o;for(o=0;o<t.length;o+=1){const n=_a(r,t,o);i[o]?i[o].p(n,a):(i[o]=ba(n),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},i:ve,o:ve,d(r){r&&g(e),bt(i,r)}}}function mf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:a}=e,{options:o}=e,{disabled:n=!1}=e,l=i[r];const d=m=>{t(2,l=m)},h=m=>{i.set(r,m)};nt(()=>(i.addListener(r,d),()=>{i.removeListener(r,d)}));const u=m=>{h(m)};return s.$$set=m=>{"liveSetting"in m&&t(4,i=m.liveSetting),"settingKey"in m&&t(5,r=m.settingKey),"settingLabel"in m&&t(6,a=m.settingLabel),"options"in m&&t(0,o=m.options),"disabled"in m&&t(1,n=m.disabled)},[o,n,l,h,i,r,a,u]}class gf extends Xe{constructor(e){super(),Qe(this,e,mf,vf,Ke,{liveSetting:4,settingKey:5,settingLabel:6,options:0,disabled:1})}}function pf(s){let e,t,i="▲",r,a,o=(s[3]?"1.0":s[4].toFixed(s[2]))+"",n,l,d,h,u="▼",m,p;return{c(){e=_("div"),t=_("div"),t.textContent=i,r=k(),a=_("div"),n=ee(o),l=ee("x"),d=k(),h=_("div"),h.textContent=u,this.h()},l(v){e=b(v,"DIV",{class:!0});var w=C(e);t=b(w,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-iy1368"&&(t.textContent=i),r=I(w),a=b(w,"DIV",{class:!0});var y=C(a);n=te(y,o),l=te(y,"x"),y.forEach(g),d=I(w),h=b(w,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-cd1zbb"&&(h.textContent=u),w.forEach(g),this.h()},h(){f(t,"class","range-arrow svelte-zwoxeg"),f(a,"class","range-value svelte-zwoxeg"),f(h,"class","range-arrow svelte-zwoxeg"),f(e,"class","range-container svelte-zwoxeg")},m(v,w){P(v,e,w),c(e,t),c(e,r),c(e,a),c(a,n),c(a,l),c(e,d),c(e,h),m||(p=[F(t,"mousedown",s[8]),F(h,"mousedown",s[9])],m=!0)},p(v,[w]){w&28&&o!==(o=(v[3]?"1.0":v[4].toFixed(v[2]))+"")&&be(n,o)},i:ve,o:ve,d(v){v&&g(e),m=!1,at(p)}}}function _f(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:a}=e,{min:o=0}=e,{max:n=1}=e,{precision:l=1}=e,{disabled:d=!1}=e,h=i[r];const u=v=>{t(4,h=v)};nt(()=>(i.addListener(r,u),()=>{i.removeListener(r,u)}));const m=()=>i.set(r,h+1/Math.pow(10,l)),p=()=>i.set(r,h-1/Math.pow(10,l));return s.$$set=v=>{"liveSetting"in v&&t(0,i=v.liveSetting),"settingKey"in v&&t(1,r=v.settingKey),"settingLabel"in v&&t(5,a=v.settingLabel),"min"in v&&t(6,o=v.min),"max"in v&&t(7,n=v.max),"precision"in v&&t(2,l=v.precision),"disabled"in v&&t(3,d=v.disabled)},[i,r,l,d,h,a,o,n,m,p]}class bf extends Xe{constructor(e){super(),Qe(this,e,_f,pf,Ke,{liveSetting:0,settingKey:1,settingLabel:5,min:6,max:7,precision:2,disabled:3})}}function wa(s,e,t){const i=s.slice();return i[3]=e[t],i}function wf(s){let e,t,i=it[s[3]].label+"",r,a,o,n,l;return o=new bf({props:{liveSetting:We,settingKey:s[3],settingLabel:it[s[3]].label,min:it[s[3]].min,max:it[s[3]].max,precision:it[s[3]].precision,disabled:it[s[3]].disabledForBike&&s[1]==2}}),{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),Ne(o.$$.fragment),n=k(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);r=te(u,i),u.forEach(g),a=I(h),xe(o.$$.fragment,h),n=I(h),h.forEach(g),this.h()},h(){f(t,"class","config-group-title svelte-yoqhax"),f(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",it[s[3]].disabledForBike&&s[1]==2)},m(d,h){P(d,e,h),c(e,t),c(t,r),c(e,a),Re(o,e,null),c(e,n),l=!0},p(d,h){(!l||h&1)&&i!==(i=it[d[3]].label+"")&&be(r,i);const u={};h&1&&(u.settingKey=d[3]),h&1&&(u.settingLabel=it[d[3]].label),h&1&&(u.min=it[d[3]].min),h&1&&(u.max=it[d[3]].max),h&1&&(u.precision=it[d[3]].precision),h&3&&(u.disabled=it[d[3]].disabledForBike&&d[1]==2),o.$set(u),(!l||h&3)&&R(e,"config-group-disabled",it[d[3]].disabledForBike&&d[1]==2)},i(d){l||(j(o.$$.fragment,d),l=!0)},o(d){ie(o.$$.fragment,d),l=!1},d(d){d&&g(e),Ue(o)}}}function yf(s){let e,t,i=it[s[3]].label+"",r,a,o,n,l;return o=new gf({props:{liveSetting:We,settingKey:s[3],settingLabel:it[s[3]].label,options:it[s[3]].options,disabled:it[s[3]].disabledForBike&&s[1]==2}}),{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),Ne(o.$$.fragment),n=k(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);r=te(u,i),u.forEach(g),a=I(h),xe(o.$$.fragment,h),n=I(h),h.forEach(g),this.h()},h(){f(t,"class","config-group-title svelte-yoqhax"),f(e,"class","config-group svelte-yoqhax"),R(e,"config-group-disabled",it[s[3]].disabledForBike&&s[1]==2)},m(d,h){P(d,e,h),c(e,t),c(t,r),c(e,a),Re(o,e,null),c(e,n),l=!0},p(d,h){(!l||h&1)&&i!==(i=it[d[3]].label+"")&&be(r,i);const u={};h&1&&(u.settingKey=d[3]),h&1&&(u.settingLabel=it[d[3]].label),h&1&&(u.options=it[d[3]].options),h&3&&(u.disabled=it[d[3]].disabledForBike&&d[1]==2),o.$set(u),(!l||h&3)&&R(e,"config-group-disabled",it[d[3]].disabledForBike&&d[1]==2)},i(d){l||(j(o.$$.fragment,d),l=!0)},o(d){ie(o.$$.fragment,d),l=!1},d(d){d&&g(e),Ue(o)}}}function ya(s){let e,t,i,r;const a=[yf,wf],o=[];function n(l,d){return it[l[3]].type==Li.Enum?0:it[l[3]].type==Li.Range?1:-1}return~(e=n(s))&&(t=o[e]=a[e](s)),{c(){t&&t.c(),i=De()},l(l){t&&t.l(l),i=De()},m(l,d){~e&&o[e].m(l,d),P(l,i,d),r=!0},p(l,d){let h=e;e=n(l),e===h?~e&&o[e].p(l,d):(t&&(qe(),ie(o[h],1,1,()=>{o[h]=null}),Fe()),~e?(t=o[e],t?t.p(l,d):(t=o[e]=a[e](l),t.c()),j(t,1),t.m(i.parentNode,i)):t=null)},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),~e&&o[e].d(l)}}}function Sf(s){let e,t,i=Oe(s[0]),r=[];for(let o=0;o<i.length;o+=1)r[o]=ya(wa(s,i,o));const a=o=>ie(r[o],1,1,()=>{r[o]=null});return{c(){e=_("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var n=C(e);for(let l=0;l<r.length;l+=1)r[l].l(n);n.forEach(g),this.h()},h(){f(e,"class","config-main svelte-yoqhax")},m(o,n){P(o,e,n);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,[n]){if(n&3){i=Oe(o[0]);let l;for(l=0;l<i.length;l+=1){const d=wa(o,i,l);r[l]?(r[l].p(d,n),j(r[l],1)):(r[l]=ya(d),r[l].c(),j(r[l],1),r[l].m(e,null))}for(qe(),l=i.length;l<r.length;l+=1)a(l);Fe()}},i(o){if(!t){for(let n=0;n<i.length;n+=1)j(r[n]);t=!0}},o(o){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)ie(r[n]);t=!1},d(o){o&&g(e),bt(r,o)}}}function Df(s,e,t){let i=[],r=0;return nt(()=>{t(0,i=Object.keys(it));const a=o=>{t(1,r=o)};return We.addListener("type",a),()=>{We.removeListener("type",a)}}),[i,r]}class Lf extends Xe{constructor(e){super(),Qe(this,e,Df,Sf,Ke,{})}}function Sa(s){let e,t,i;return{c(){e=_("div"),this.h()},l(r){e=b(r,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","conf-mouseover svelte-101otrq")},m(r,a){P(r,e,a),t||(i=[F(e,"mouseenter",s[30]),F(e,"mouseleave",s[31])],t=!0)},p:ve,d(r){r&&g(e),t=!1,at(i)}}}function Cf(s){let e,t;return e=new Lf({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function kf(s){let e,t;return e=new hf({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function If(s){let e,t,i,r,a="LOCATION",o,n,l,d,h="◂",u,m,p="▸",v,w=Or[s[2]]+"",y,D,L,E,A="ROAD STYLE",T,x,Y,X,O="◂",$,Z,U="▸",B,V=Vr[s[3]]+"",z,M,N,G,se,oe,le,pe="GENERATE",we,me,Q=s[6]&&Da(s),re=s[19]==!1&&La(s);return{c(){e=_("div"),t=_("div"),i=_("div"),r=_("div"),r.textContent=a,o=k(),n=_("div"),l=_("div"),d=_("div"),d.textContent=h,u=k(),m=_("div"),m.textContent=p,v=k(),y=ee(w),D=k(),L=_("div"),E=_("div"),E.textContent=A,T=k(),x=_("div"),Y=_("div"),X=_("div"),X.textContent=O,$=k(),Z=_("div"),Z.textContent=U,B=k(),z=ee(V),M=k(),Q&&Q.c(),N=k(),G=_("div"),se=_("div"),re&&re.c(),oe=k(),le=_("div"),le.textContent=pe,this.h()},l(ce){e=b(ce,"DIV",{class:!0});var K=C(e);t=b(K,"DIV",{class:!0});var de=C(t);i=b(de,"DIV",{class:!0});var J=C(i);r=b(J,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-1qs4nti"&&(r.textContent=a),o=I(J),n=b(J,"DIV",{class:!0});var ge=C(n);l=b(ge,"DIV",{class:!0});var Ee=C(l);d=b(Ee,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(d)!=="svelte-hdk0bx"&&(d.textContent=h),u=I(Ee),m=b(Ee,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(m)!=="svelte-smravs"&&(m.textContent=p),Ee.forEach(g),v=I(ge),y=te(ge,w),ge.forEach(g),J.forEach(g),D=I(de),L=b(de,"DIV",{class:!0});var ze=C(L);E=b(ze,"DIV",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-19ddluq"&&(E.textContent=A),T=I(ze),x=b(ze,"DIV",{class:!0});var He=C(x);Y=b(He,"DIV",{class:!0});var Ze=C(Y);X=b(Ze,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(X)!=="svelte-zkw8xm"&&(X.textContent=O),$=I(Ze),Z=b(Ze,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(Z)!=="svelte-1bfzabd"&&(Z.textContent=U),Ze.forEach(g),B=I(He),z=te(He,V),He.forEach(g),ze.forEach(g),M=I(de),Q&&Q.l(de),de.forEach(g),N=I(K),G=b(K,"DIV",{class:!0});var $e=C(G);se=b($e,"DIV",{class:!0});var dt=C(se);re&&re.l(dt),dt.forEach(g),oe=I($e),le=b($e,"DIV",{class:!0,"data-svelte-h":!0}),W(le)!=="svelte-1usevhp"&&(le.textContent=pe),$e.forEach(g),K.forEach(g),this.h()},h(){f(r,"class","wld-option-label svelte-101otrq"),f(d,"class","wld-option-arrow svelte-101otrq"),ae(d,"text-align","left"),f(m,"class","wld-option-arrow svelte-101otrq"),ae(m,"text-align","right"),f(l,"class","wld-option-arrows svelte-101otrq"),f(n,"class","wld-option-tile svelte-101otrq"),R(n,"wld-option-tile-changed",s[14]),f(i,"class","wld-option svelte-101otrq"),f(E,"class","wld-option-label svelte-101otrq"),f(X,"class","wld-option-arrow svelte-101otrq"),ae(X,"text-align","left"),f(Z,"class","wld-option-arrow svelte-101otrq"),ae(Z,"text-align","right"),f(Y,"class","wld-option-arrows svelte-101otrq"),f(x,"class","wld-option-tile svelte-101otrq"),R(x,"wld-option-tile-changed",s[13]),f(L,"class","wld-option svelte-101otrq"),f(t,"class","wld-options svelte-101otrq"),f(se,"class","wld-hash-box svelte-101otrq"),f(le,"class","ui-btn"),R(le,"ui-btn-active",s[11]),f(G,"class","wld-generate svelte-101otrq"),f(e,"class","wld-main svelte-101otrq")},m(ce,K){P(ce,e,K),c(e,t),c(t,i),c(i,r),c(i,o),c(i,n),c(n,l),c(l,d),c(l,u),c(l,m),c(n,v),c(n,y),c(t,D),c(t,L),c(L,E),c(L,T),c(L,x),c(x,Y),c(Y,X),c(Y,$),c(Y,Z),c(x,B),c(x,z),c(t,M),Q&&Q.m(t,null),c(e,N),c(e,G),c(G,se),re&&re.m(se,null),c(G,oe),c(G,le),we||(me=[F(d,"click",s[43]),F(m,"click",s[44]),F(X,"click",s[45]),F(Z,"click",s[46]),F(le,"click",s[28])],we=!0)},p(ce,K){K[0]&4&&w!==(w=Or[ce[2]]+"")&&be(y,w),K[0]&16384&&R(n,"wld-option-tile-changed",ce[14]),K[0]&8&&V!==(V=Vr[ce[3]]+"")&&be(z,V),K[0]&8192&&R(x,"wld-option-tile-changed",ce[13]),ce[6]?Q?Q.p(ce,K):(Q=Da(ce),Q.c(),Q.m(t,null)):Q&&(Q.d(1),Q=null),ce[19]==!1?re?re.p(ce,K):(re=La(ce),re.c(),re.m(se,null)):re&&(re.d(1),re=null),K[0]&2048&&R(le,"ui-btn-active",ce[11])},i:ve,o:ve,d(ce){ce&&g(e),Q&&Q.d(),re&&re.d(),we=!1,at(me)}}}function Da(s){let e,t,i,r,a="randomise",o,n,l,d,h=s[5]?"Invalid seed":"",u,m,p;return{c(){e=_("div"),t=_("div"),i=ee("SEED"),r=_("span"),r.textContent=a,o=k(),n=_("input"),l=k(),d=_("div"),u=ee(h),this.h()},l(v){e=b(v,"DIV",{class:!0});var w=C(e);t=b(w,"DIV",{class:!0});var y=C(t);i=te(y,"SEED"),r=b(y,"SPAN",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-nkzfel"&&(r.textContent=a),y.forEach(g),o=I(w),n=b(w,"INPUT",{type:!0,maxlength:!0,onkeydown:!0,class:!0}),l=I(w),d=b(w,"DIV",{class:!0});var D=C(d);u=te(D,h),D.forEach(g),w.forEach(g),this.h()},h(){f(r,"class","wld-option-label-btn svelte-101otrq"),f(t,"class","wld-option-label svelte-101otrq"),f(n,"type","text"),f(n,"maxlength","16"),f(n,"onkeydown","return /[a-z]|[0-9]/i.test(event.key)"),f(n,"class","wld-option-tile wld-option-seed svelte-101otrq"),n.value=s[4],R(n,"wld-option-tile-changed",s[12]),f(d,"class","seed-warn svelte-101otrq"),f(e,"class","wld-option svelte-101otrq")},m(v,w){P(v,e,w),c(e,t),c(t,i),c(t,r),c(e,o),c(e,n),c(e,l),c(e,d),c(d,u),m||(p=[F(r,"click",s[22]),F(n,"input",s[23]),F(n,"focus",s[26]),F(n,"blur",s[27])],m=!0)},p(v,w){w[0]&16&&n.value!==v[4]&&(n.value=v[4]),w[0]&4096&&R(n,"wld-option-tile-changed",v[12]),w[0]&32&&h!==(h=v[5]?"Invalid seed":"")&&be(u,h)},d(v){v&&g(e),m=!1,at(p)}}}function La(s){let e,t,i,r,a="COPY",o,n,l,d,h=s[10]&&Ca();return{c(){e=ee(`CODE:\r
                        `),t=_("input"),i=k(),r=_("div"),r.textContent=a,o=k(),h&&h.c(),n=De(),this.h()},l(u){e=te(u,`CODE:\r
                        `),t=b(u,"INPUT",{type:!0,disable:!0,maxlength:!0,class:!0,id:!0,key:!0}),i=I(u),r=b(u,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-1fyfy5j"&&(r.textContent=a),o=I(u),h&&h.l(u),n=De(),this.h()},h(){f(t,"type","text"),f(t,"disable",s[19]),f(t,"maxlength","26"),f(t,"class","wld-hash svelte-101otrq"),f(t,"id",s[7]),f(t,"key",s[7]),t.value=s[7],R(t,"wld-hash-invalid",s[8]),R(t,"wld-hash-changed",s[9]&&!s[8]),f(r,"class","wld-hash-copy svelte-101otrq")},m(u,m){P(u,e,m),P(u,t,m),P(u,i,m),P(u,r,m),P(u,o,m),h&&h.m(u,m),P(u,n,m),l||(d=[F(t,"keydown",s[32]),F(t,"input",s[24]),F(t,"focus",s[26]),F(t,"blur",s[27]),F(r,"click",s[25])],l=!0)},p(u,m){m[0]&524288&&f(t,"disable",u[19]),m[0]&128&&f(t,"id",u[7]),m[0]&128&&f(t,"key",u[7]),m[0]&128&&t.value!==u[7]&&(t.value=u[7]),m[0]&256&&R(t,"wld-hash-invalid",u[8]),m[0]&768&&R(t,"wld-hash-changed",u[9]&&!u[8]),u[10]?h||(h=Ca(),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null)},d(u){u&&(g(e),g(t),g(i),g(r),g(o),g(n)),h&&h.d(u),l=!1,at(d)}}}function Ca(s){let e,t="copied";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1y72z4c"&&(e.textContent=t),this.h()},h(){f(e,"class","wld-hash-copied svelte-101otrq")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function Mf(s){let e,t,i,r,a,o,n="-",l,d,h="-",u,m,p,v,w,y,D="-",L,E,A="-",T,x,Y,X,O,$,Z="-",U,B,V="-",z,M,N,G,se,oe,le,pe,we,me=s[19]==!1&&Sa(s);const Q=[If,kf,Cf],re=[];function ce(K,de){return K[1]==0?0:K[1]==1?1:K[1]==2?2:-1}return~(se=ce(s))&&(oe=re[se]=Q[se](s)),{c(){me&&me.c(),e=k(),t=_("div"),i=_("div"),r=_("div"),a=_("div"),o=_("span"),o.textContent=n,l=ee(" WORLD "),d=_("span"),d.textContent=h,u=k(),m=_("div"),p=k(),v=_("div"),w=_("div"),y=_("span"),y.textContent=D,L=ee(" STYLE "),E=_("span"),E.textContent=A,T=k(),x=_("div"),Y=k(),X=_("div"),O=_("div"),$=_("span"),$.textContent=Z,U=ee(" VEHICLE "),B=_("span"),B.textContent=V,z=k(),M=_("div"),N=k(),G=_("div"),oe&&oe.c(),this.h()},l(K){me&&me.l(K),e=I(K),t=b(K,"DIV",{class:!0});var de=C(t);i=b(de,"DIV",{class:!0});var J=C(i);r=b(J,"DIV",{class:!0});var ge=C(r);a=b(ge,"DIV",{class:!0,style:!0});var Ee=C(a);o=b(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-1rdtb9c"&&(o.textContent=n),l=te(Ee," WORLD "),d=b(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-1rdtb9c"&&(d.textContent=h),Ee.forEach(g),u=I(ge),m=b(ge,"DIV",{class:!0}),C(m).forEach(g),ge.forEach(g),p=I(J),v=b(J,"DIV",{class:!0});var ze=C(v);w=b(ze,"DIV",{class:!0,style:!0});var He=C(w);y=b(He,"SPAN",{class:!0,"data-svelte-h":!0}),W(y)!=="svelte-1krg1xv"&&(y.textContent=D),L=te(He," STYLE "),E=b(He,"SPAN",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-1krg1xv"&&(E.textContent=A),He.forEach(g),T=I(ze),x=b(ze,"DIV",{class:!0}),C(x).forEach(g),ze.forEach(g),Y=I(J),X=b(J,"DIV",{class:!0});var Ze=C(X);O=b(Ze,"DIV",{class:!0,style:!0});var $e=C(O);$=b($e,"SPAN",{class:!0,"data-svelte-h":!0}),W($)!=="svelte-1n9h5xc"&&($.textContent=Z),U=te($e," VEHICLE "),B=b($e,"SPAN",{class:!0,"data-svelte-h":!0}),W(B)!=="svelte-1n9h5xc"&&(B.textContent=V),$e.forEach(g),z=I(Ze),M=b(Ze,"DIV",{class:!0}),C(M).forEach(g),Ze.forEach(g),J.forEach(g),N=I(de),G=b(de,"DIV",{class:!0});var dt=C(G);oe&&oe.l(dt),dt.forEach(g),de.forEach(g),this.h()},h(){f(o,"class","svelte-101otrq"),R(o,"invisible",!s[17]),f(d,"class","svelte-101otrq"),R(d,"invisible",!s[17]),f(a,"class","conf-tab-header-label svelte-101otrq"),ae(a,"opacity",s[18]?"1":"0"),f(m,"class","conf-tab-pip svelte-101otrq"),R(m,"pip-selected",s[17]),f(r,"class","conf-tab-header svelte-101otrq"),R(r,"tab-selected",s[17]),f(y,"class","svelte-101otrq"),R(y,"invisible",!s[16]),f(E,"class","svelte-101otrq"),R(E,"invisible",!s[16]),f(w,"class","conf-tab-header-label svelte-101otrq"),ae(w,"opacity",s[18]?"1":"0"),f(x,"class","conf-tab-pip svelte-101otrq"),R(x,"pip-selected",s[16]),f(v,"class","conf-tab-header svelte-101otrq"),R(v,"tab-selected",s[16]),f($,"class","svelte-101otrq"),R($,"invisible",!s[15]),f(B,"class","svelte-101otrq"),R(B,"invisible",!s[15]),f(O,"class","conf-tab-header-label svelte-101otrq"),ae(O,"opacity",s[18]?"1":"0"),f(M,"class","conf-tab-pip svelte-101otrq"),R(M,"pip-selected",s[15]),f(X,"class","conf-tab-header svelte-101otrq"),R(X,"tab-selected",s[15]),f(i,"class","conf-header svelte-101otrq"),R(i,"conf-header-visible",s[0]),f(G,"class","conf-body svelte-101otrq"),R(G,"conf-body-open",s[0]),f(t,"class","conf-main svelte-101otrq"),R(t,"conf-main-active",s[0])},m(K,de){me&&me.m(K,de),P(K,e,de),P(K,t,de),c(t,i),c(i,r),c(r,a),c(a,o),c(a,l),c(a,d),c(r,u),c(r,m),c(i,p),c(i,v),c(v,w),c(w,y),c(w,L),c(w,E),c(v,T),c(v,x),c(i,Y),c(i,X),c(X,O),c(O,$),c(O,U),c(O,B),c(X,z),c(X,M),c(t,N),c(t,G),~se&&re[se].m(G,null),le=!0,pe||(we=[F(r,"mousedown",s[40]),F(v,"mousedown",s[41]),F(X,"mousedown",s[42]),F(t,"mouseenter",s[30]),F(t,"mouseleave",s[31])],pe=!0)},p(K,de){K[19]==!1?me?me.p(K,de):(me=Sa(K),me.c(),me.m(e.parentNode,e)):me&&(me.d(1),me=null),(!le||de[0]&131072)&&R(o,"invisible",!K[17]),(!le||de[0]&131072)&&R(d,"invisible",!K[17]),(!le||de[0]&262144)&&ae(a,"opacity",K[18]?"1":"0"),(!le||de[0]&131072)&&R(m,"pip-selected",K[17]),(!le||de[0]&131072)&&R(r,"tab-selected",K[17]),(!le||de[0]&65536)&&R(y,"invisible",!K[16]),(!le||de[0]&65536)&&R(E,"invisible",!K[16]),(!le||de[0]&262144)&&ae(w,"opacity",K[18]?"1":"0"),(!le||de[0]&65536)&&R(x,"pip-selected",K[16]),(!le||de[0]&65536)&&R(v,"tab-selected",K[16]),(!le||de[0]&32768)&&R($,"invisible",!K[15]),(!le||de[0]&32768)&&R(B,"invisible",!K[15]),(!le||de[0]&262144)&&ae(O,"opacity",K[18]?"1":"0"),(!le||de[0]&32768)&&R(M,"pip-selected",K[15]),(!le||de[0]&32768)&&R(X,"tab-selected",K[15]),(!le||de[0]&1)&&R(i,"conf-header-visible",K[0]);let J=se;se=ce(K),se===J?~se&&re[se].p(K,de):(oe&&(qe(),ie(re[J],1,1,()=>{re[J]=null}),Fe()),~se?(oe=re[se],oe?oe.p(K,de):(oe=re[se]=Q[se](K),oe.c()),j(oe,1),oe.m(G,null)):oe=null),(!le||de[0]&1)&&R(G,"conf-body-open",K[0]),(!le||de[0]&1)&&R(t,"conf-main-active",K[0])},i(K){le||(j(oe),le=!0)},o(K){ie(oe),le=!1},d(K){K&&(g(e),g(t)),me&&me.d(K),~se&&re[se].d(),pe=!1,at(we)}}}function Ef(s,e,t){let i,r,a,o,n,l,d,h,u;Ce(s,ti,ye=>t(19,u=ye));let{showConfig:m}=e,{openConfig:p}=e,{closeConfig:v}=e,w=!0,y=!1,D=Ks.value,L=0,E=Ve.scene;function A(ye){js(Lr)||(E+ye>1?t(2,E=-1):E+ye<0&&t(2,E=2)),t(2,E=Ve._sanitise("scene",E+ye)),z()}let T=Ve.roadStyle;function x(ye){t(3,T=Ve._sanitise("roadStyle",T+ye)),z()}let Y=Ve.seed,X=Y,O=!1,$=!1,Z=Ve.startNode,U=Ve.startNode==0?-1:Ve.startNode,B=!1;function V(){t(4,Y=Ld()),X=Y,t(5,O=!1),z()}function z(){var ye,st,Pt,Dt;(st=(ye=Ds.history[E])==null?void 0:ye[T])!=null&&st[Y]?(t(38,Z=(Dt=(Pt=Ds.history[E])==null?void 0:Pt[T])==null?void 0:Dt[Y].startNode),U=Z):(t(38,Z=0),U=-1),t(7,G=Bs(E,T,Y,U)),t(8,oe=!1),t(9,le=!1),t(10,we=!1)}function M(ye){N(ye.target.value)}function N(ye){let st=Ve._sanitise("seed",ye);if(!js(Lr)&&st.toLowerCase()=="unlockdriftmas"){Lr.set(!0),console.log("Enabling driftmas scene and vehicle");return}if(!Ve._validate("seed",st)){t(5,O=!0),t(4,Y=X),z();return}t(5,O=!1),t(4,Y=st),X=Y,z()}let G=Bs(E,T,Y,Me.vehicleIndex),se="",oe=!1,le=!1,pe=!1,we=!1;function me(ye){let st=Id(ye);if(!st){t(8,oe=!0);return}t(2,E=st.scene),t(3,T=st.roadStyle),t(4,Y=st.seed),t(38,Z=st.startNode)}function Q(ye){let st=Cd(ye.target.value);t(8,oe=!st),!oe&&(me(ye.target.value),se=ye.target.value,t(9,le=se!==G))}function re(ye){G&&(navigator.clipboard.writeText(G),t(10,we=!0))}function ce(){Le.lockKeys("config")}function K(){Le.unlockKeys("config")}function de(){O||B||(v(),kd(),Ve.setMany({...Ve._value,scene:E,seed:Y,startNode:Z,roadStyle:T}),_e.unlockMouse(!0))}function J(ye){if(ot.set("hasSeenConfig",!0),ye==L&&m){v();return}ot.set("hasSeenConfig",!0),t(35,w=!1),p(),t(1,L=ye)}nt(()=>{Ve.addListener("any",ye=>{t(4,Y=Ve.seed),t(11,h=!1),t(5,O=!1)}),di.addListener(ye=>{B=ye<1}),ne.addListener("touchscreen",ye=>{t(6,$=!ye)}),Ks.addListener(ye=>{t(37,D=ye)}),setTimeout(()=>{ot.hasSeenConfig&&t(35,w=!1)},1e4)});const ge=()=>{t(36,y=!0),_e.lockMouse()},Ee=()=>{t(36,y=!1),_e.unlockMouse(!1)},ze=ye=>{(ye.code=="Enter"||ye.code=="NumpadEnter")&&de()},He=()=>{J(0)},Ze=()=>{J(1)},$e=()=>{J(2)},dt=()=>{A(-1)},et=()=>{A(1)},ci=()=>{x(-1)},Vt=()=>{x(1)};return s.$$set=ye=>{"showConfig"in ye&&t(0,m=ye.showConfig),"openConfig"in ye&&t(33,p=ye.openConfig),"closeConfig"in ye&&t(34,v=ye.closeConfig)},s.$$.update=()=>{s.$$.dirty[0]&1&&(m||K()),s.$$.dirty[0]&1|s.$$.dirty[1]&112&&t(18,i=w||y||m||D),s.$$.dirty[0]&3&&t(17,r=L==0&&m),s.$$.dirty[0]&3&&t(16,a=L==1&&m),s.$$.dirty[0]&3&&t(15,o=L==2&&m),s.$$.dirty[0]&1&&m==!1&&(t(4,Y=Ve.seed),t(2,E=Ve.scene),t(3,T=Ve.roadStyle),t(5,O=!1)),s.$$.dirty[0]&4&&t(14,n=E!=Ve.scene),s.$$.dirty[0]&8&&t(13,l=T!=Ve.roadStyle),s.$$.dirty[0]&48&&t(12,d=Y!=Ve.seed&&!O),s.$$.dirty[0]&60|s.$$.dirty[1]&128&&t(11,h=E!=Ve.scene||Y!=Ve.seed&&!O||T!=Ve.roadStyle||Z!==Ve.startNode),s.$$.dirty[0]&29|s.$$.dirty[1]&256&&m&&(pe&&(t(7,G=Bs(E,T,Y,Me.vehicleIndex)),t(8,oe=!1),t(9,le=!1)),t(39,pe=!1)),s.$$.dirty[0]&1&&(m||t(39,pe=!0))},[m,L,E,T,Y,O,$,G,oe,le,we,h,d,l,n,o,a,r,i,u,A,x,V,M,Q,re,ce,K,de,J,ge,Ee,ze,p,v,w,y,D,Z,pe,He,Ze,$e,dt,et,ci,Vt]}class Af extends Xe{constructor(e){super(),Qe(this,e,Ef,Mf,Ke,{showConfig:0,openConfig:33,closeConfig:34},null,[-1,-1])}}function Tt(s,{delay:e=0,duration:t=400,easing:i=On}={}){const r=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:i,css:a=>`opacity: ${a*r}`}}function Tf(s){let e,t,i,r,a,o,n,l="",d,h;return{c(){e=_("div"),t=_("div"),i=ee(s[2]),r=k(),a=_("div"),o=_("div"),n=_("div"),n.innerHTML=l,this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,title:!0});var p=C(t);i=te(p,s[2]),p.forEach(g),r=I(m),a=b(m,"DIV",{class:!0});var v=C(a);o=b(v,"DIV",{class:!0});var w=C(o);n=b(w,"DIV",{class:!0,"data-svelte-h":!0}),W(n)!=="svelte-1h4l4io"&&(n.innerHTML=l),w.forEach(g),v.forEach(g),m.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[3]),R(t,"setting-help",!!s[3]),f(n,"class","bool-fill svelte-1ik2n8h"),R(n,"bool-filled",s[5]),f(o,"class","bool-box svelte-1ik2n8h"),f(a,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(u,m){P(u,e,m),c(e,t),c(t,i),c(e,r),c(e,a),c(a,o),c(o,n),d||(h=F(o,"click",s[6]),d=!0)},p(u,[m]){m&4&&be(i,u[2]),m&8&&f(t,"title",u[3]),m&8&&R(t,"setting-help",!!u[3]),m&32&&R(n,"bool-filled",u[5]),m&16&&R(e,"setting-disabled",u[4])},i:ve,o:ve,d(u){u&&g(e),d=!1,h()}}}function Pf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:a}=e,{settingDesc:o=""}=e,{disabled:n=!1}=e,l=i[r];const d=u=>{t(5,l=u)};nt(()=>(i.addListener(r,d),()=>{i.removeListener(r,d)}));const h=()=>i.set(r,!l);return s.$$set=u=>{"liveSetting"in u&&t(0,i=u.liveSetting),"settingKey"in u&&t(1,r=u.settingKey),"settingLabel"in u&&t(2,a=u.settingLabel),"settingDesc"in u&&t(3,o=u.settingDesc),"disabled"in u&&t(4,n=u.disabled)},[i,r,a,o,n,l,h]}class Tn extends Xe{constructor(e){super(),Qe(this,e,Pf,Tf,Ke,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4})}}function Nf(s){let e,t,i,r,a,o,n,l,d,h,u,m,p,v=s[6][s[7]]+"",w,y,D;return{c(){e=_("div"),t=_("div"),i=ee(s[2]),r=k(),a=_("div"),o=_("div"),n=_("div"),l=_("div"),d=ee("◂"),h=k(),u=_("div"),m=ee("▸"),p=k(),w=ee(v),this.h()},l(L){e=b(L,"DIV",{class:!0});var E=C(e);t=b(E,"DIV",{class:!0,title:!0});var A=C(t);i=te(A,s[2]),A.forEach(g),r=I(E),a=b(E,"DIV",{class:!0});var T=C(a);o=b(T,"DIV",{class:!0});var x=C(o);n=b(x,"DIV",{class:!0});var Y=C(n);l=b(Y,"DIV",{class:!0,style:!0});var X=C(l);d=te(X,"◂"),X.forEach(g),h=I(Y),u=b(Y,"DIV",{class:!0,style:!0});var O=C(u);m=te(O,"▸"),O.forEach(g),Y.forEach(g),p=I(x),w=te(x,v),x.forEach(g),T.forEach(g),E.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[3]),R(t,"setting-help",!!s[3]),f(l,"class","enum-arrow svelte-71g5t7"),ae(l,"text-align","left"),ae(l,"opacity",!s[5]&&s[7]==0?"0":"1"),f(u,"class","enum-arrow svelte-71g5t7"),ae(u,"text-align","right"),ae(u,"opacity",!s[5]&&s[7]==s[6].length-1?"0":"1"),f(n,"class","enum-arrows svelte-71g5t7"),f(o,"class","enum-container svelte-71g5t7"),f(a,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[4])},m(L,E){P(L,e,E),c(e,t),c(t,i),c(e,r),c(e,a),c(a,o),c(o,n),c(n,l),c(l,d),c(n,h),c(n,u),c(u,m),c(o,p),c(o,w),y||(D=[F(l,"click",s[8]),F(u,"click",s[9])],y=!0)},p(L,[E]){E&4&&be(i,L[2]),E&8&&f(t,"title",L[3]),E&8&&R(t,"setting-help",!!L[3]),E&160&&ae(l,"opacity",!L[5]&&L[7]==0?"0":"1"),E&224&&ae(u,"opacity",!L[5]&&L[7]==L[6].length-1?"0":"1"),E&192&&v!==(v=L[6][L[7]]+"")&&be(w,v),E&16&&R(e,"setting-disabled",L[4])},i:ve,o:ve,d(L){L&&g(e),y=!1,at(D)}}}function xf(s,e,t){let{liveSetting:i}=e,{settingKey:r}=e,{settingLabel:a}=e,{settingDesc:o=""}=e,{disabled:n=!1}=e,{wraparound:l=!0}=e,{labels:d}=e,h=i[r];const u=v=>{t(7,h=v)};nt(()=>(i.addListener(r,u),()=>{i.removeListener(r,u)}));const m=()=>{l?i.set(r,h-1<0?d.length-1:h-1):h>0&&i.set(r,h-1)},p=()=>{l?i.set(r,(h+1)%d.length):h<d.length-1&&i.set(r,h+1)};return s.$$set=v=>{"liveSetting"in v&&t(0,i=v.liveSetting),"settingKey"in v&&t(1,r=v.settingKey),"settingLabel"in v&&t(2,a=v.settingLabel),"settingDesc"in v&&t(3,o=v.settingDesc),"disabled"in v&&t(4,n=v.disabled),"wraparound"in v&&t(5,l=v.wraparound),"labels"in v&&t(6,d=v.labels)},[i,r,a,o,n,l,d,h,m,p]}class Pn extends Xe{constructor(e){super(),Qe(this,e,xf,Nf,Ke,{liveSetting:0,settingKey:1,settingLabel:2,settingDesc:3,disabled:4,wraparound:5,labels:6})}}function Rf(s){let e,t,i,r,a,o,n,l,d,h,u,m,p,v,w,y;return{c(){e=_("div"),t=_("div"),i=ee(s[0]),r=k(),a=_("div"),o=_("div"),n=_("input"),l=k(),d=_("div"),h=_("div"),u=k(),m=_("div"),p=k(),v=_("div"),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0,title:!0});var E=C(t);i=te(E,s[0]),E.forEach(g),r=I(L),a=b(L,"DIV",{class:!0});var A=C(a);o=b(A,"DIV",{class:!0});var T=C(o);n=b(T,"INPUT",{class:!0,type:!0}),l=I(T),d=b(T,"DIV",{class:!0});var x=C(d);h=b(x,"DIV",{class:!0,style:!0}),C(h).forEach(g),u=I(x),m=b(x,"DIV",{class:!0}),C(m).forEach(g),p=I(x),v=b(x,"DIV",{class:!0,style:!0}),C(v).forEach(g),x.forEach(g),T.forEach(g),A.forEach(g),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(t,"title",s[1]),R(t,"setting-help",!!s[1]),n.disabled=s[6],f(n,"class","slider-val svelte-9omzwl"),f(n,"type","number"),f(h,"class","slider-left svelte-9omzwl"),ae(h,"flex-basis",s[5]+"%"),ae(h,"margin-right",s[5]==0?"0":"4px"),R(h,"touch-track",s[6]),f(m,"class","slider-handle svelte-9omzwl"),R(m,"touch-track",s[6]),f(v,"class","slider-right svelte-9omzwl"),ae(v,"flex-basis",100-s[5]+"%"),ae(v,"margin-left",s[5]==100?"0":"4px"),R(v,"touch-track",s[6]),f(d,"class","slider-track svelte-9omzwl"),R(d,"touch-track",s[6]),f(o,"class","slider-cont svelte-9omzwl"),f(a,"class","setting-element"),f(e,"class","setting-row"),R(e,"setting-disabled",s[2])},m(D,L){P(D,e,L),c(e,t),c(t,i),c(e,r),c(e,a),c(a,o),c(o,n),Ys(n,s[3]),c(o,l),c(o,d),c(d,h),c(d,u),c(d,m),c(d,p),c(d,v),s[17](d),w||(y=[F(n,"input",s[16]),F(n,"change",s[10]),F(d,"mousedown",s[7]),F(d,"touchstart",s[8]),F(d,"touchmove",s[9])],w=!0)},p(D,[L]){L&1&&be(i,D[0]),L&2&&f(t,"title",D[1]),L&2&&R(t,"setting-help",!!D[1]),L&64&&(n.disabled=D[6]),L&8&&Wl(n.value)!==D[3]&&Ys(n,D[3]),L&32&&ae(h,"flex-basis",D[5]+"%"),L&32&&ae(h,"margin-right",D[5]==0?"0":"4px"),L&64&&R(h,"touch-track",D[6]),L&64&&R(m,"touch-track",D[6]),L&32&&ae(v,"flex-basis",100-D[5]+"%"),L&32&&ae(v,"margin-left",D[5]==100?"0":"4px"),L&64&&R(v,"touch-track",D[6]),L&64&&R(d,"touch-track",D[6]),L&4&&R(e,"setting-disabled",D[2])},i:ve,o:ve,d(D){D&&g(e),s[17](null),w=!1,at(y)}}}function Uf(s,e,t){let i,r;Ce(s,ti,N=>t(6,r=N));let{liveSetting:a}=e,{settingKey:o}=e,{settingLabel:n}=e,{settingDesc:l=""}=e,{disabled:d=!1}=e,{min:h=0}=e,{max:u=100}=e,{precision:m=1}=e,p=u-h,v=a[o];v.toFixed&&(v=v.toFixed(m));let w,y,D,L,E;const A=N=>{t(3,v=N)};let T=!1;const x=N=>{T=N};nt(()=>{a.addListener(o,A),window.addEventListener("touchend",U);let N=ti.subscribe(x);return()=>{a.removeListener(o,A),window.removeEventListener("mousemove",X),window.removeEventListener("touchmove",X),window.removeEventListener("touchend",U),N()}});let Y;const X=N=>{let G;!T||window.innerWidth>window.innerHeight?G=Math.max(Math.min(1,(N.clientX-y)/D),0):G=Math.max(Math.min(1,(N.clientY-L)/E),0),G=G*p+h,G=Math.round(G*10**m)/10**m,a.set(o,G)},O=N=>{window.removeEventListener("mousemove",X)},$=N=>{Y=w.getBoundingClientRect(),y=Y.left,D=Y.width-10,L=Y.top,E=Y.height-10,X(N),window.addEventListener("mousemove",X),window.addEventListener("mouseup",O,{once:!0})},Z=N=>{window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",U),Y=w.getBoundingClientRect(),y=Y.left,D=Y.width-10,L=Y.top,E=Y.height-10,B(N)},U=N=>{window.removeEventListener("touchmove",B),window.removeEventListener("touchend",U)},B=N=>{N.changedTouches.length&&(N.clientX=N.changedTouches[0].clientX,N.clientY=N.changedTouches[0].clientY,N.preventDefault(),N.stopPropagation(),X(N))},V=N=>{let G=N.target.value;G=Math.round(G*10**m)/10**m,G=Math.min(Math.max(h,G),u),G=""+G,G=parseFloat(G.replace(",",".")),a._validate(o,G)?a.set(o,G):N.target.value=Math.min(Math.max(h,v),u)};function z(){v=Wl(this.value),t(3,v)}function M(N){St[N?"unshift":"push"](()=>{w=N,t(4,w)})}return s.$$set=N=>{"liveSetting"in N&&t(11,a=N.liveSetting),"settingKey"in N&&t(12,o=N.settingKey),"settingLabel"in N&&t(0,n=N.settingLabel),"settingDesc"in N&&t(1,l=N.settingDesc),"disabled"in N&&t(2,d=N.disabled),"min"in N&&t(13,h=N.min),"max"in N&&t(14,u=N.max),"precision"in N&&t(15,m=N.precision)},s.$$.update=()=>{s.$$.dirty&24584&&t(5,i=Math.max(Math.min(100,(v-h)/(u-h)*100),0))},[n,l,d,v,w,i,r,$,Z,B,V,a,o,h,u,m,z,M]}class Nn extends Xe{constructor(e){super(),Qe(this,e,Uf,Rf,Ke,{liveSetting:11,settingKey:12,settingLabel:0,settingDesc:1,disabled:2,min:13,max:14,precision:15})}}function ka(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Ia(s,e,t){const i=s.slice();return i[7]=e[t][0],i[8]=e[t][1],i}function Ma(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Of(s){let e,t,i=Oe(Object.entries(s[1])),r=[];for(let o=0;o<i.length;o+=1)r[o]=Aa(ka(s,i,o));const a=o=>ie(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=De()},l(o){for(let n=0;n<r.length;n+=1)r[n].l(o);e=De()},m(o,n){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,n);P(o,e,n),t=!0},p(o,n){if(n&23){i=Oe(Object.entries(o[1]));let l;for(l=0;l<i.length;l+=1){const d=ka(o,i,l);r[l]?(r[l].p(d,n),j(r[l],1)):(r[l]=Aa(d),r[l].c(),j(r[l],1),r[l].m(e.parentNode,e))}for(qe(),l=i.length;l<r.length;l+=1)a(l);Fe()}},i(o){if(!t){for(let n=0;n<i.length;n+=1)j(r[n]);t=!0}},o(o){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)ie(r[n]);t=!1},d(o){o&&g(e),bt(r,o)}}}function Vf(s){let e,t,i=Oe(Object.entries(s[1])),r=[];for(let o=0;o<i.length;o+=1)r[o]=xa(Ia(s,i,o));const a=o=>ie(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=De()},l(o){for(let n=0;n<r.length;n+=1)r[n].l(o);e=De()},m(o,n){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,n);P(o,e,n),t=!0},p(o,n){if(n&63){i=Oe(Object.entries(o[1]));let l;for(l=0;l<i.length;l+=1){const d=Ia(o,i,l);r[l]?(r[l].p(d,n),j(r[l],1)):(r[l]=xa(d),r[l].c(),j(r[l],1),r[l].m(e.parentNode,e))}for(qe(),l=i.length;l<r.length;l+=1)a(l);Fe()}},i(o){if(!t){for(let n=0;n<i.length;n+=1)j(r[n]);t=!0}},o(o){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)ie(r[n]);t=!1},d(o){o&&g(e),bt(r,o)}}}function Ea(s){let e,t,i,r;const a=[qf,zf,Hf],o=[];function n(l,d){return l[12].type==Li.Boolean?0:l[12].type==Li.Enum?1:l[12].type==Li.Range?2:-1}return~(e=n(s))&&(t=o[e]=a[e](s)),{c(){t&&t.c(),i=De()},l(l){t&&t.l(l),i=De()},m(l,d){~e&&o[e].m(l,d),P(l,i,d),r=!0},p(l,d){let h=e;e=n(l),e===h?~e&&o[e].p(l,d):(t&&(qe(),ie(o[h],1,1,()=>{o[h]=null}),Fe()),~e?(t=o[e],t?t.p(l,d):(t=o[e]=a[e](l),t.c()),j(t,1),t.m(i.parentNode,i)):t=null)},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),~e&&o[e].d(l)}}}function Hf(s){let e,t;return e=new Nn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&2&&(a.min=i[12].min),r&2&&(a.max=i[12].max),r&2&&(a.precision=i[12].precision),r&6&&(a.disabled=i[2].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function zf(s){let e,t;return e=new Pn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&2&&(a.labels=i[12].labels),r&2&&(a.wraparound=i[12].wraparound),r&6&&(a.disabled=i[2].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function qf(s){let e,t;return e=new Tn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&6&&(a.disabled=i[2].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Aa(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&Ea(s);return{c(){i&&i.c(),e=De()},l(r){i&&i.l(r),e=De()},m(r,a){i&&i.m(r,a),P(r,e,a),t=!0},p(r,a){!r[4]||!r[12].hideForTouchscreen?i?(i.p(r,a),a&18&&j(i,1)):(i=Ea(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(qe(),ie(i,1,1,()=>{i=null}),Fe())},i(r){t||(j(i),t=!0)},o(r){ie(i),t=!1},d(r){r&&g(e),i&&i.d(r)}}}function Ta(s){let e,t=s[7]+"",i,r,a,o="reset",n,l,d,h,u;function m(){return s[6](s[7])}let p=Oe(Object.entries(s[8])),v=[];for(let y=0;y<p.length;y+=1)v[y]=Na(Ma(s,p,y));const w=y=>ie(v[y],1,1,()=>{v[y]=null});return{c(){e=_("div"),i=ee(t),r=k(),a=_("div"),a.textContent=o,n=k();for(let y=0;y<v.length;y+=1)v[y].c();l=De(),this.h()},l(y){e=b(y,"DIV",{class:!0});var D=C(e);i=te(D,t),r=I(D),a=b(D,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-1buwq7v"&&(a.textContent=o),D.forEach(g),n=I(y);for(let L=0;L<v.length;L+=1)v[L].l(y);l=De(),this.h()},h(){f(a,"class","setting-section-header-reset"),f(e,"class","setting-section-header")},m(y,D){P(y,e,D),c(e,i),c(e,r),c(e,a),P(y,n,D);for(let L=0;L<v.length;L+=1)v[L]&&v[L].m(y,D);P(y,l,D),d=!0,h||(u=F(a,"click",m),h=!0)},p(y,D){if(s=y,(!d||D&2)&&t!==(t=s[7]+"")&&be(i,t),D&31){p=Oe(Object.entries(s[8]));let L;for(L=0;L<p.length;L+=1){const E=Ma(s,p,L);v[L]?(v[L].p(E,D),j(v[L],1)):(v[L]=Na(E),v[L].c(),j(v[L],1),v[L].m(l.parentNode,l))}for(qe(),L=p.length;L<v.length;L+=1)w(L);Fe()}},i(y){if(!d){for(let D=0;D<p.length;D+=1)j(v[D]);d=!0}},o(y){v=v.filter(Boolean);for(let D=0;D<v.length;D+=1)ie(v[D]);d=!1},d(y){y&&(g(e),g(n),g(l)),bt(v,y),h=!1,u()}}}function Pa(s){let e,t,i,r;const a=[Bf,Gf,Ff],o=[];function n(l,d){return l[12].type==Li.Boolean?0:l[12].type==Li.Enum?1:l[12].type==Li.Range?2:-1}return~(e=n(s))&&(t=o[e]=a[e](s)),{c(){t&&t.c(),i=De()},l(l){t&&t.l(l),i=De()},m(l,d){~e&&o[e].m(l,d),P(l,i,d),r=!0},p(l,d){let h=e;e=n(l),e===h?~e&&o[e].p(l,d):(t&&(qe(),ie(o[h],1,1,()=>{o[h]=null}),Fe()),~e?(t=o[e],t?t.p(l,d):(t=o[e]=a[e](l),t.c()),j(t,1),t.m(i.parentNode,i)):t=null)},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),~e&&o[e].d(l)}}}function Ff(s){let e,t;return e=new Nn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,min:s[12].min,max:s[12].max,precision:s[12].precision,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&2&&(a.min=i[12].min),r&2&&(a.max=i[12].max),r&2&&(a.precision=i[12].precision),r&14&&(a.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Gf(s){let e,t;return e=new Pn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,labels:s[12].labels,wraparound:s[12].wraparound,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&2&&(a.labels=i[12].labels),r&2&&(a.wraparound=i[12].wraparound),r&14&&(a.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Bf(s){let e,t;return e=new Tn({props:{liveSetting:s[0],settingKey:s[11],settingLabel:s[12].readable,settingDesc:s[12].desc,disabled:s[2].includes(s[11])||s[3].includes(s[11])}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.liveSetting=i[0]),r&2&&(a.settingKey=i[11]),r&2&&(a.settingLabel=i[12].readable),r&2&&(a.settingDesc=i[12].desc),r&14&&(a.disabled=i[2].includes(i[11])||i[3].includes(i[11])),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Na(s){let e,t,i=(!s[4]||!s[12].hideForTouchscreen)&&Pa(s);return{c(){i&&i.c(),e=De()},l(r){i&&i.l(r),e=De()},m(r,a){i&&i.m(r,a),P(r,e,a),t=!0},p(r,a){!r[4]||!r[12].hideForTouchscreen?i?(i.p(r,a),a&18&&j(i,1)):(i=Pa(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(qe(),ie(i,1,1,()=>{i=null}),Fe())},i(r){t||(j(i),t=!0)},o(r){ie(i),t=!1},d(r){r&&g(e),i&&i.d(r)}}}function xa(s){let e,t,i=(!s[4]||!s[8].hideForTouchscreen)&&Ta(s);return{c(){i&&i.c(),e=De()},l(r){i&&i.l(r),e=De()},m(r,a){i&&i.m(r,a),P(r,e,a),t=!0},p(r,a){!r[4]||!r[8].hideForTouchscreen?i?(i.p(r,a),a&18&&j(i,1)):(i=Ta(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(qe(),ie(i,1,1,()=>{i=null}),Fe())},i(r){t||(j(i),t=!0)},o(r){ie(i),t=!1},d(r){r&&g(e),i&&i.d(r)}}}function Wf(s){let e,t,i,r;const a=[Vf,Of],o=[];function n(l,d){return l[1].oneSection?1:0}return t=n(s),i=o[t]=a[t](s),{c(){e=_("div"),i.c(),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);i.l(d),d.forEach(g),this.h()},h(){f(e,"class","settings-list")},m(l,d){P(l,e,d),o[t].m(e,null),r=!0},p(l,[d]){let h=t;t=n(l),t===h?o[t].p(l,d):(qe(),ie(o[h],1,1,()=>{o[h]=null}),Fe(),i=o[t],i?i.p(l,d):(i=o[t]=a[t](l),i.c()),j(i,1),i.m(e,null))},i(l){r||(j(i),r=!0)},o(l){ie(i),r=!1},d(l){l&&g(e),o[t].d()}}}function jf(s,e,t){let i;Ce(s,ti,h=>t(4,i=h));let{liveSetting:r}=e,{settingsMeta:a}=e,o=[],n=[];nt(()=>{let h=[],u=[];for(let m in a)for(let p in a[m]){if(a[m][p].overrides){let v=w=>{t(2,o=w?a[m][p].overrides:[])};h.push([p,v]),r.addListener(p,v)}if(a[m][p].enables){let v=w=>{t(3,n=w?[]:a[m][p].enables)};u.push([p,v]),r.addListener(p,v)}}return()=>{for(let m of h)r.removeListener(m[0],m[1]);h.length=0;for(let m of u)r.removeListener(m[0],m[1]);u.length=0}});function l(h){if(!(h in a)){console.warn("Cannot reset unknown section to default: "+h);return}for(let u in a[h])u!="hideForTouchscreen"&&r.set(u)}const d=h=>l(h);return s.$$set=h=>{"liveSetting"in h&&t(0,r=h.liveSetting),"settingsMeta"in h&&t(1,a=h.settingsMeta)},[r,a,o,n,i,l,d]}class is extends Xe{constructor(e){super(),Qe(this,e,jf,Wf,Ke,{liveSetting:0,settingsMeta:1})}}function Ra(s){let e,t,i,r,a,o;return{c(){e=_("div"),t=_("div"),i=k(),r=_("div"),this.h()},l(n){e=b(n,"DIV",{class:!0});var l=C(e);t=b(l,"DIV",{class:!0,style:!0}),C(t).forEach(g),i=I(l),r=b(l,"DIV",{class:!0}),C(r).forEach(g),l.forEach(g),this.h()},h(){f(t,"class","audio-slider-handle svelte-1hs4ew6"),ae(t,"right",(100-s[4]*100)*.8+"%"),f(r,"class","audio-slider-track svelte-1hs4ew6"),f(e,"class","audio-slider svelte-1hs4ew6")},m(n,l){P(n,e,l),c(e,t),c(e,i),c(e,r),s[10](e),a||(o=[F(e,"mousedown",s[8]),F(e,"touchstart",s[8]),F(e,"touchmove",s[9])],a=!0)},p(n,l){l&16&&ae(t,"right",(100-n[4]*100)*.8+"%")},d(n){n&&g(e),s[10](null),a=!1,at(o)}}}function Yf(s){let e,t,i,r,a,o,n=s[1]&&Ra(s);return{c(){e=_("div"),t=_("img"),r=k(),n&&n.c(),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);t=b(d,"IMG",{class:!0,src:!0}),r=I(d),n&&n.l(d),d.forEach(g),this.h()},h(){f(t,"class","ui-settings-bar-icon"),At(t.src,i="./ico_volume_"+(s[3]?"off":"on")+".svg")||f(t,"src",i),f(e,"class","audio-control svelte-1hs4ew6")},m(l,d){P(l,e,d),c(e,t),c(e,r),n&&n.m(e,null),a||(o=[F(t,"click",s[7]),F(e,"mouseenter",s[11]),F(e,"mouseleave",s[12])],a=!0)},p(l,[d]){d&8&&!At(t.src,i="./ico_volume_"+(l[3]?"off":"on")+".svg")&&f(t,"src",i),l[1]?n?n.p(l,d):(n=Ra(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:ve,o:ve,d(l){l&&g(e),n&&n.d(),a=!1,at(o)}}}function Kf(s,e,t){let i=!1,r=!1,a=!1,o=.5,n=.5,l=!1,d,h,u=!1;const m=x=>{u=x};let{onHasFocus:p=()=>{}}=e;nt(()=>{_s.addListener("master",Y=>{t(3,a=Y==0),t(4,n=Y)}),_e.addListener(vi.Mute,v);let x=ti.subscribe(m);return()=>{_e.removeListener(vi.Mute,v),x()}});const v=()=>{a?_s.set("master",o):(o=n,_s.set("master",0))},w=x=>{h=d.getBoundingClientRect(),t(5,l=!0),y(x),window.addEventListener("mousemove",L),window.addEventListener("mouseup",D,{once:!0})},y=x=>{var Y;(Y=x.changedTouches)!=null&&Y.length&&(x.clientX=x.changedTouches[0].clientX,x.clientY=x.changedTouches[0].clientY),x.preventDefault(),x.stopPropagation(),L(x)},D=x=>{t(5,l=!1),r||t(1,i=!1),p(i),window.removeEventListener("mousemove",L)},L=x=>{let Y;!u||window.innerWidth>window.innerHeight?Y=(x.clientX-h.left-h.width*.2)/(h.width*.8):Y=(x.clientY-h.top-h.height*.2)/(h.height*.8),_s.set("master",Y)};function E(x){St[x?"unshift":"push"](()=>{d=x,t(6,d)})}const A=()=>{p(!0),t(2,r=!0),t(1,i=!0)},T=()=>{t(2,r=!1),t(1,i=l),p(i)};return s.$$set=x=>{"onHasFocus"in x&&t(0,p=x.onHasFocus)},[p,i,r,a,n,l,d,v,w,y,E,A,T]}class Xf extends Xe{constructor(e){super(),Qe(this,e,Kf,Yf,Ke,{onHasFocus:0})}}const vs={Forward:"Forwards",Backward:"Backwards",Left:"Left",Right:"Right",Boost:"Boost",Handbrake:"Handbrake",ToggleHandbrake:"Toggle handbrake",Autodrive:"Toggle autodrive",AutodriveMode:"Toggle autodrive mode",Reset:"Reset",Headlights:"Toggle headlights",StickySteer:"Locked steering",NextScene:"Next scene",PrevScene:"Prev scene",CameraMode:"Change camera",Mute:"Mute",Pause:"Pause",ToggleUI:"Toggle UI",ToggleCinecam:"Toggle cinecam",ToggleDebug:"Toggle debug overlay",ToggleSpeedControl:"Toggle cruise control",ToggleSpeedControlMode:"Toggle cruise control mode",IncSpeedControl:"Cruise control increase",DecSpeedControl:"Cruise control decrease",CameraLeft:"Camera left",CameraRight:"Camera right",CameraUp:"Camera up",CameraDown:"Camera down"};function Ua(s,e,t){const i=s.slice();return i[11]=e[t][0],i[12]=e[t][1],i}function Qf(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Zf(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Oa(s){let e,t="+",i,r;function a(...o){return s[7](s[11],...o)}return{c(){e=_("div"),e.textContent=t,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){f(e,"class","map-element-delete")},m(o,n){P(o,e,n),i||(r=F(e,"click",a),i=!0)},p(o,n){s=o},d(o){o&&g(e),i=!1,r()}}}function Va(s){let e=(s[11]==s[0]?"Press a key":s[12].replace("Key",""))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,r){P(i,t,r)},p(i,r){r&5&&e!==(e=(i[11]==i[0]?"Press a key":i[12].replace("Key",""))+"")&&be(t,e)},d(i){i&&g(t)}}}function Ha(s){let e,t,i=vs[s[11]]+"",r,a,o,n,l,d,h,u,m=s[12]&&s[0]!=s[11]&&Oa(s),p=(s[12]||s[0]==s[11])&&Va(s);function v(){return s[8](s[11])}return{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),o=_("div"),n=_("div"),m&&m.c(),l=k(),p&&p.c(),d=k(),this.h()},l(w){e=b(w,"DIV",{class:!0});var y=C(e);t=b(y,"DIV",{class:!0});var D=C(t);r=te(D,i),D.forEach(g),a=I(y),o=b(y,"DIV",{class:!0});var L=C(o);n=b(L,"DIV",{class:!0});var E=C(n);m&&m.l(E),l=I(E),p&&p.l(E),E.forEach(g),L.forEach(g),d=I(y),y.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(n,"class","map-element"),R(n,"map-element-mapping",s[11]==s[0]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(w,y){P(w,e,y),c(e,t),c(t,r),c(e,a),c(e,o),c(o,n),m&&m.m(n,null),c(n,l),p&&p.m(n,null),c(e,d),h||(u=F(o,"click",v),h=!0)},p(w,y){s=w,y&4&&i!==(i=vs[s[11]]+"")&&be(r,i),s[12]&&s[0]!=s[11]?m?m.p(s,y):(m=Oa(s),m.c(),m.m(n,l)):m&&(m.d(1),m=null),s[12]||s[0]==s[11]?p?p.p(s,y):(p=Va(s),p.c(),p.m(n,null)):p&&(p.d(1),p=null),y&5&&R(n,"map-element-mapping",s[11]==s[0])},d(w){w&&g(e),m&&m.d(),p&&p.d(),h=!1,u()}}}function Jf(s){let e,t,i,r,a,o,n;function l(p,v){return p[1]?Zf:Qf}let d=l(s),h=d(s),u=Oe(Object.entries(s[2])),m=[];for(let p=0;p<u.length;p+=1)m[p]=Ha(Ua(s,u,p));return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),r=_("div"),h.c(),a=k();for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=b(p,"DIV",{class:!0,style:!0});var v=C(e);t=b(v,"DIV",{class:!0});var w=C(t);i=te(w,`Mapping\r
        `),r=b(w,"DIV",{class:!0});var y=C(r);h.l(y),y.forEach(g),w.forEach(g),a=I(v);for(let D=0;D<m.length;D+=1)m[D].l(v);v.forEach(g),this.h()},h(){f(r,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),ae(e,"padding-top","1rem")},m(p,v){P(p,e,v),c(e,t),c(t,i),c(t,r),h.m(r,null),c(e,a);for(let w=0;w<m.length;w+=1)m[w]&&m[w].m(e,null);o||(n=F(r,"click",s[6]),o=!0)},p(p,[v]){if(d!==(d=l(p))&&(h.d(1),h=d(p),h&&(h.c(),h.m(r,null))),v&29){u=Oe(Object.entries(p[2]));let w;for(w=0;w<u.length;w+=1){const y=Ua(p,u,w);m[w]?m[w].p(y,v):(m[w]=Ha(y),m[w].c(),m[w].m(e,null))}for(;w<m.length;w+=1)m[w].d(1);m.length=u.length}},i:ve,o:ve,d(p){p&&g(e),h.d(),bt(m,p),o=!1,n()}}}function $f(s,e,t){let i=null;function r(p){if(i!=null){for(let v in $t.mapping)$t.mapping[v]==p.code&&($t.mapping[v]=null);$t.set("mapping",{...$t.mapping,[i]:p.code}),t(0,i=null),Le.unlockKeys("keymap")}}function a(p){if(i==p){t(0,i=null),window.removeEventListener("keydown",r),Le.unlockKeys("keymap");return}i==null&&(window.addEventListener("keydown",r,{once:!0}),Le.lockKeys("keymap")),t(0,i=p)}function o(p){$t.set("mapping",{...$t.mapping,[p]:null})}let n=!1;function l(){n?($t.set("mapping",{...Md}),t(1,n=!1)):t(1,n=!0)}let d=$t.mapping;return nt(()=>($t.addListener("mapping",p=>{t(2,d=p)}),()=>{window.removeEventListener("keydown",r),Le.unlockKeys("keymap")})),[i,n,d,a,o,l,()=>l(),(p,v)=>{o(p),v.stopPropagation()},p=>a(p)]}class eu extends Xe{constructor(e){super(),Qe(this,e,$f,Jf,Ke,{})}}function za(s,e,t){const i=s.slice();return i[25]=e[t][0],i[26]=e[t][1],i}function tu(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function iu(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function su(s){let e,t=Oe(Object.entries(s[3])),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ba(za(s,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=De()},l(r){for(let a=0;a<i.length;a+=1)i[a].l(r);e=De()},m(r,a){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,a);P(r,e,a)},p(r,a){if(a&32462){t=Oe(Object.entries(r[3]));let o;for(o=0;o<t.length;o+=1){const n=za(r,t,o);i[o]?i[o].p(n,a):(i[o]=Ba(n),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&g(e),bt(i,r)}}}function ru(s){let e,t,i=s[4]+1+"",r,a;return{c(){e=_("div"),t=ee("Controller "),r=ee(i),a=ee(" not detected"),this.h()},l(o){e=b(o,"DIV",{style:!0});var n=C(e);t=te(n,"Controller "),r=te(n,i),a=te(n," not detected"),n.forEach(g),this.h()},h(){ae(e,"font-weight","600"),ae(e,"text-align","center"),ae(e,"font-style","italic")},m(o,n){P(o,e,n),c(e,t),c(e,r),c(e,a)},p(o,n){n&16&&i!==(i=o[4]+1+"")&&be(r,i)},d(o){o&&g(e)}}}function qa(s){let e,t="+",i,r,a,o;function n(...d){return s[16](s[25],...d)}let l=s[26].type==Ni.Axis&&Fa(s);return{c(){e=_("div"),e.textContent=t,i=k(),l&&l.c(),r=De(),this.h()},l(d){e=b(d,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-14ayu74"&&(e.textContent=t),i=I(d),l&&l.l(d),r=De(),this.h()},h(){f(e,"class","map-element-delete")},m(d,h){P(d,e,h),P(d,i,h),l&&l.m(d,h),P(d,r,h),a||(o=F(e,"click",n),a=!0)},p(d,h){s=d,s[26].type==Ni.Axis?l?l.p(s,h):(l=Fa(s),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(d){d&&(g(e),g(i),g(r)),l&&l.d(d),a=!1,o()}}}function Fa(s){let e,t,i,r;function a(d,h){return d[26].sign<0?au:ou}let o=a(s),n=o(s);function l(...d){return s[17](s[26],...d)}return{c(){e=_("div"),n.c(),this.h()},l(d){e=b(d,"DIV",{class:!0,title:!0});var h=C(e);n.l(h),h.forEach(g),this.h()},h(){f(e,"class","axis-mode-toggle svelte-6wmc2y"),f(e,"title",t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])},m(d,h){P(d,e,h),n.m(e,null),i||(r=F(e,"click",l),i=!0)},p(d,h){s=d,o===(o=a(s))&&n?n.p(s,h):(n.d(1),n=o(s),n&&(n.c(),n.m(e,null))),h&8&&t!==(t=s[26].sign<0?s[14][s[26].mode??0]:s[13][s[26].mode??0])&&f(e,"title",t)},d(d){d&&g(e),n.d(),i=!1,r()}}}function ou(s){let e,t=s[11][s[26].mode??0]+"",i;return{c(){e=new qr(!1),i=De(),this.h()},l(r){e=Fr(r,!1),i=De(),this.h()},h(){e.a=i},m(r,a){e.m(t,r,a),P(r,i,a)},p(r,a){a&8&&t!==(t=r[11][r[26].mode??0]+"")&&e.p(t)},d(r){r&&(g(i),e.d())}}}function au(s){let e,t=s[12][s[26].mode??0]+"",i;return{c(){e=new qr(!1),i=De(),this.h()},l(r){e=Fr(r,!1),i=De(),this.h()},h(){e.a=i},m(r,a){e.m(t,r,a),P(r,i,a)},p(r,a){a&8&&t!==(t=r[12][r[26].mode??0]+"")&&e.p(t)},d(r){r&&(g(i),e.d())}}}function Ga(s){let e=(s[25]==s[1]?"Press an input":s[9](s[26]))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,r){P(i,t,r)},p(i,r){r&10&&e!==(e=(i[25]==i[1]?"Press an input":i[9](i[26]))+"")&&be(t,e)},d(i){i&&g(t)}}}function Ba(s){let e,t,i=vs[s[25]]+"",r,a,o,n,l,d,h,u,m,p,v=s[26]&&s[1]!=s[25]&&qa(s),w=(s[26]||s[1]==s[25])&&Ga(s);function y(){return s[18](s[25])}return{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),o=_("div"),n=_("div"),v&&v.c(),l=k(),w&&w.c(),d=k(),h=_("div"),u=k(),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0});var E=C(t);r=te(E,i),E.forEach(g),a=I(L),o=b(L,"DIV",{class:!0});var A=C(o);n=b(A,"DIV",{class:!0});var T=C(n);v&&v.l(T),l=I(T),w&&w.l(T),d=I(T),h=b(T,"DIV",{class:!0,style:!0}),C(h).forEach(g),T.forEach(g),A.forEach(g),u=I(L),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(h,"class","gamepad-value svelte-6wmc2y"),ae(h,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),f(n,"class","map-element"),R(n,"map-element-mapping",s[25]==s[1]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(D,L){P(D,e,L),c(e,t),c(t,r),c(e,a),c(e,o),c(o,n),v&&v.m(n,null),c(n,l),w&&w.m(n,null),c(n,d),c(n,h),c(e,u),m||(p=F(o,"click",y),m=!0)},p(D,L){s=D,L&8&&i!==(i=vs[s[25]]+"")&&be(r,i),s[26]&&s[1]!=s[25]?v?v.p(s,L):(v=qa(s),v.c(),v.m(n,l)):v&&(v.d(1),v=null),s[26]||s[1]==s[25]?w?w.p(s,L):(w=Ga(s),w.c(),w.m(n,d)):w&&(w.d(1),w=null),L&12&&ae(h,"width",((s[26]&&s[2][s[25]])??0)*100+"%"),L&10&&R(n,"map-element-mapping",s[25]==s[1])},d(D){D&&g(e),v&&v.d(),w&&w.d(),m=!1,p()}}}function lu(s){let e,t,i,r,a,o,n;function l(v,w){return v[5]?iu:tu}let d=l(s),h=d(s);function u(v,w){return v[0]==null?ru:su}let m=u(s),p=m(s);return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),r=_("div"),h.c(),a=k(),p.c(),this.h()},l(v){e=b(v,"DIV",{class:!0,style:!0});var w=C(e);t=b(w,"DIV",{class:!0});var y=C(t);i=te(y,`Mapping\r
        `),r=b(y,"DIV",{class:!0});var D=C(r);h.l(D),D.forEach(g),y.forEach(g),a=I(w),p.l(w),w.forEach(g),this.h()},h(){f(r,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),ae(e,"padding-top","1rem")},m(v,w){P(v,e,w),c(e,t),c(t,i),c(t,r),h.m(r,null),c(e,a),p.m(e,null),o||(n=F(r,"click",s[15]),o=!0)},p(v,[w]){d!==(d=l(v))&&(h.d(1),h=d(v),h&&(h.c(),h.m(r,null))),m===(m=u(v))&&p?p.p(v,w):(p.d(1),p=m(v),p&&(p.c(),p.m(e,null)))},i:ve,o:ve,d(v){v&&g(e),h.d(),p.d(),o=!1,n()}}}function nu(s,e,t){let i=[],r=null,a=null,o;function n(U){if(a==U){t(1,a=null);return}t(1,a=U),o={axes:[...r.axes],buttons:r.buttons.map(B=>({pressed:B.pressed,value:B.value}))}}function l(U){_t.set("mapping",{..._t.mapping,[U]:null})}let d={},h=_t.mapping;function u(U,B=!1){t(3,h=U)}let m=_t.controllerIndex;function p(U){t(4,m=U)}let v=!1;function w(){var U;if(i=((U=navigator.getGamepads)==null?void 0:U.call(navigator))||[],!v&&i.length){if(i[m])v=!0;else for(let B=0;B<i.length;B++)if(i[B]){v=!0,_t.controllerIndexWasSet||_t.set("controllerIndex",B);break}}if(t(0,r=i[_t.controllerIndex]),!r){t(1,a=!1);return}if(a){let B;for(B=0;B<r.axes.length;B++)if(o.axes[B]-r.axes[B]>.15){let V=0;o.axes[B]>.5&&(V=2),_t.set("mapping",{..._t.mapping,[a]:{type:Ni.Axis,index:B,sign:-1,max:1,mode:V}}),t(1,a=null);break}else if(o.axes[B]-r.axes[B]<-.15){let V=0;o.axes[B]<-.5&&(V=2),_t.set("mapping",{..._t.mapping,[a]:{type:Ni.Axis,index:B,sign:1,max:1,mode:V}}),t(1,a=null);break}if(a){for(B=0;B<r.buttons.length;B++)if(o.buttons[B].pressed!=r.buttons[B].pressed||Math.abs(o.buttons[B].value-r.buttons[B].value)>.2){_t.set("mapping",{..._t.mapping,[a]:{type:Ni.Button,index:B}}),t(1,a=null);break}}}else{let B={},V,z;for(V in h)if(z=h[V],z)if(z.type==Ni.Axis){let M=r.axes[z.index];z.sign<0?z.mode==2?M=1-Math.max(0,M):z.mode==1?M=1-(M+1)/2:M=Math.min(1,Math.max(0,-M)):z.mode==2?M=Math.max(0,-M):z.mode==1?M=(M+1)/2:M=Math.max(0,Math.min(1,M)),B[V]=M}else z.type==Ni.Button&&(B[V]=r.buttons[z.index].value);else B[V]=0;t(2,d=B)}}nt(()=>{_t.addListener("mapping",u),_t.addListener("controllerIndex",p),_e.lockGamepad();let U=setInterval(w,25);return()=>{clearInterval(U),_t.removeListener("mapping",u),_t.removeListener("controllerIndex",p),_e.unlockGamepad()}});let y=!1;function D(){y?(_t.set("mapping",{...Ed}),t(5,y=!1)):t(5,y=!0)}function L(U){return U.type==Ni.Axis?"Axis "+U.index+(U.sign<0?" [-]":" [+]"):"Button "+U.index}function E(U){U.mode?U.mode=(U.mode+1)%3:U.mode=1,_t.set("mapping",h,!1,!0)}return[r,a,d,h,m,y,n,l,D,L,E,["0 &#9698; 1","-1 &#9698; 1","-1 &#9698; 0"],["0 &#9698; -1","1 &#9698; -1","1 &#9698; 0"],["Axis range begins at 0 and ends at 1","Axis range begins at -1 and ends at 1","Axis range begins at -1 and ends at 0"],["Axis range begins at 0 and ends at -1","Axis range begins at 1 and ends at -1","Axis range begins at 1 and ends at 0"],()=>D(),(U,B)=>{l(U),B.stopPropagation()},(U,B)=>{E(U),B.stopPropagation()},U=>n(U)]}class du extends Xe{constructor(e){super(),Qe(this,e,nu,lu,Ke,{})}}function Wa(s,e,t){const i=s.slice();return i[46]=e[t],i}function ja(s,e,t){const i=s.slice();return i[49]=e[t][0],i[50]=e[t][1],i}function Ya(s,e,t){const i=s.slice();return i[53]=e[t],i}function Ka(s){let e,t,i,r="+ New profile",a,o,n=Oe(s[1]),l=[];for(let d=0;d<n.length;d+=1)l[d]=Xa(Ya(s,n,d));return{c(){e=_("div");for(let d=0;d<l.length;d+=1)l[d].c();t=k(),i=_("div"),i.textContent=r,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);for(let u=0;u<l.length;u+=1)l[u].l(h);t=I(h),i=b(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(i)!=="svelte-1c7vjvm"&&(i.textContent=r),h.forEach(g),this.h()},h(){f(i,"class","profile-select-list-item svelte-iyvwtm"),ae(i,"font-style","italic"),ae(i,"color","var(--sr-primary-75)"),f(e,"class","profile-select-list svelte-iyvwtm")},m(d,h){P(d,e,h);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);c(e,t),c(e,i),a||(o=F(i,"click",s[29]),a=!0)},p(d,h){if(h[0]&262146){n=Oe(d[1]);let u;for(u=0;u<n.length;u+=1){const m=Ya(d,n,u);l[u]?l[u].p(m,h):(l[u]=Xa(m),l[u].c(),l[u].m(e,t))}for(;u<l.length;u+=1)l[u].d(1);l.length=n.length}},d(d){d&&g(e),bt(l,d),a=!1,o()}}}function Xa(s){let e,t=s[53]+"",i,r,a;function o(...n){return s[28](s[53],...n)}return{c(){e=_("div"),i=ee(t),this.h()},l(n){e=b(n,"DIV",{class:!0});var l=C(e);i=te(l,t),l.forEach(g),this.h()},h(){f(e,"class","profile-select-list-item svelte-iyvwtm")},m(n,l){P(n,e,l),c(e,i),r||(a=F(e,"click",o),r=!0)},p(n,l){s=n,l[0]&2&&t!==(t=s[53]+"")&&be(i,t)},d(n){n&&g(e),r=!1,a()}}}function cu(s){let e,t,i="Error: Please load a valid .roads file",r,a,o="DISMISS",n,l;return{c(){e=_("div"),t=_("div"),t.textContent=i,r=k(),a=_("div"),a.textContent=o,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-fngkdw"&&(t.textContent=i),r=I(h),a=b(h,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-jftli3"&&(a.textContent=o),h.forEach(g),this.h()},h(){f(t,"class","profile-msg-msg svelte-iyvwtm"),f(a,"class","profile-msg-action svelte-iyvwtm"),f(e,"class","profile-msg svelte-iyvwtm")},m(d,h){P(d,e,h),c(e,t),c(e,r),c(e,a),n||(l=F(a,"click",s[25]),n=!0)},p:ve,d(d){d&&g(e),n=!1,l()}}}function hu(s){let e,t,i,r,a,o,n,l,d="OVERWRITE",h,u,m="CANCEL",p,v;return{c(){e=_("div"),t=_("div"),i=ee("Overwrite existing profile "),r=_("span"),a=ee(s[8]),o=ee("?"),n=k(),l=_("div"),l.textContent=d,h=k(),u=_("div"),u.textContent=m,this.h()},l(w){e=b(w,"DIV",{class:!0});var y=C(e);t=b(y,"DIV",{class:!0});var D=C(t);i=te(D,"Overwrite existing profile "),r=b(D,"SPAN",{style:!0});var L=C(r);a=te(L,s[8]),L.forEach(g),o=te(D,"?"),D.forEach(g),n=I(y),l=b(y,"DIV",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-ayc6iv"&&(l.textContent=d),h=I(y),u=b(y,"DIV",{class:!0,"data-svelte-h":!0}),W(u)!=="svelte-1hop0aj"&&(u.textContent=m),y.forEach(g),this.h()},h(){ae(r,"font-weight","1000"),f(t,"class","profile-msg-msg svelte-iyvwtm"),f(l,"class","profile-msg-action svelte-iyvwtm"),f(u,"class","profile-msg-action svelte-iyvwtm"),f(e,"class","profile-msg svelte-iyvwtm")},m(w,y){P(w,e,y),c(e,t),c(t,i),c(t,r),c(r,a),c(t,o),c(e,n),c(e,l),c(e,h),c(e,u),p||(v=[F(l,"click",s[24]),F(u,"click",s[25])],p=!0)},p(w,y){y[0]&256&&be(a,w[8])},d(w){w&&g(e),p=!1,at(v)}}}function Qa(s){let e,t,i=s[50].readable+"",r,a,o,n=s[50].convert(s[2][s[49]])+"",l;return{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),o=_("div"),l=ee(n),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0});var u=C(t);r=te(u,i),u.forEach(g),a=I(h),o=b(h,"DIV",{class:!0,style:!0});var m=C(o);l=te(m,n),m.forEach(g),h.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(o,"class","setting-value"),ae(o,"font-family","Sono"),f(e,"class","setting-row")},m(d,h){P(d,e,h),c(e,t),c(t,r),c(e,a),c(e,o),c(o,l)},p(d,h){h[0]&4&&n!==(n=d[50].convert(d[2][d[49]])+"")&&be(l,n)},d(d){d&&g(e)}}}function Za(s){let e,t="Worlds",i,r;function a(l,d){return l[10].length?uu:fu}let o=a(s),n=o(s);return{c(){e=_("div"),e.textContent=t,i=k(),n.c(),r=De(),this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1ak7xmu"&&(e.textContent=t),i=I(l),n.l(l),r=De(),this.h()},h(){f(e,"class","setting-section-header")},m(l,d){P(l,e,d),P(l,i,d),n.m(l,d),P(l,r,d)},p(l,d){o===(o=a(l))&&n?n.p(l,d):(n.d(1),n=o(l),n&&(n.c(),n.m(r.parentNode,r)))},d(l){l&&(g(e),g(i),g(r)),n.d(l)}}}function fu(s){let e,t="No worlds yet driven";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-viu36h"&&(e.textContent=t),this.h()},h(){f(e,"class","setting-row"),ae(e,"text-align","center"),ae(e,"font-style","italic")},m(i,r){P(i,e,r)},p:ve,d(i){i&&g(e)}}}function uu(s){let e,t=Oe(s[10]),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ja(Wa(s,t,r));return{c(){e=_("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=b(r,"DIV",{class:!0});var a=C(e);for(let o=0;o<i.length;o+=1)i[o].l(a);a.forEach(g),this.h()},h(){f(e,"class","worlds svelte-iyvwtm")},m(r,a){P(r,e,a);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,a){if(a[0]&4203520){t=Oe(r[10]);let o;for(o=0;o<t.length;o+=1){const n=Wa(r,t,o);i[o]?i[o].p(n,a):(i[o]=Ja(n),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(r){r&&g(e),bt(i,r)}}}function Ja(s){let e,t,i=s[46].key+"",r,a,o=s[46].dist+"",n,l,d,h,u=s[46].hash+"",m,p,v,w;function y(...D){return s[35](s[46],...D)}return{c(){e=_("div"),t=_("div"),r=ee(i),a=ee(" ("),n=ee(o),l=ee(")"),d=k(),h=_("div"),m=ee(u),p=k(),this.h()},l(D){e=b(D,"DIV",{class:!0});var L=C(e);t=b(L,"DIV",{class:!0});var E=C(t);r=te(E,i),a=te(E," ("),n=te(E,o),l=te(E,")"),E.forEach(g),d=I(L),h=b(L,"DIV",{class:!0,style:!0});var A=C(h);m=te(A,u),A.forEach(g),p=I(L),L.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(h,"class","setting-value"),ae(h,"font-family","Sono"),f(e,"class","setting-row copiable svelte-iyvwtm"),R(e,"copied",s[46].i==s[13])},m(D,L){P(D,e,L),c(e,t),c(t,r),c(t,a),c(t,n),c(t,l),c(e,d),c(e,h),c(h,m),c(e,p),v||(w=F(e,"click",y),v=!0)},p(D,L){s=D,L[0]&1024&&i!==(i=s[46].key+"")&&be(r,i),L[0]&1024&&o!==(o=s[46].dist+"")&&be(n,o),L[0]&1024&&u!==(u=s[46].hash+"")&&be(m,u),L[0]&9216&&R(e,"copied",s[46].i==s[13])},d(D){D&&g(e),v=!1,w()}}}function vu(s){let e,t,i,r,a,o,n="≡",l,d,h,u,m,p,v,w,y,D,L,E,A="Overview",T,x,Y,X,O=s[11]&&Ka(s);function $(M,N){if(M[7])return hu;if(M[9])return cu}let Z=$(s),U=Z&&Z(s),B=Oe(Object.entries(Oo)),V=[];for(let M=0;M<B.length;M+=1)V[M]=Qa(ja(s,B,M));let z=s[14]==!1&&Za(s);return{c(){e=_("div"),t=_("div"),i=_("input"),r=k(),a=_("div"),o=_("div"),o.textContent=n,l=k(),O&&O.c(),d=k(),h=_("div"),u=ee(`Export\r
            `),m=_("a"),p=k(),v=_("div"),w=ee(`Load\r
            `),y=_("input"),D=k(),U&&U.c(),L=k(),E=_("div"),E.textContent=A,T=k();for(let M=0;M<V.length;M+=1)V[M].c();x=k(),z&&z.c(),this.h()},l(M){e=b(M,"DIV",{class:!0});var N=C(e);t=b(N,"DIV",{class:!0});var G=C(t);i=b(G,"INPUT",{class:!0,placeholder:!0}),r=I(G),a=b(G,"DIV",{class:!0});var se=C(a);o=b(se,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(o)!=="svelte-edkqep"&&(o.textContent=n),l=I(se),O&&O.l(se),se.forEach(g),d=I(G),h=b(G,"DIV",{class:!0,title:!0});var oe=C(h);u=te(oe,`Export\r
            `),m=b(oe,"A",{download:!0,target:!0,rel:!0,style:!0}),C(m).forEach(g),oe.forEach(g),p=I(G),v=b(G,"DIV",{class:!0,title:!0});var le=C(v);w=te(le,`Load\r
            `),y=b(le,"INPUT",{style:!0,type:!0,accept:!0}),le.forEach(g),G.forEach(g),D=I(N),U&&U.l(N),L=I(N),E=b(N,"DIV",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-jc27zg"&&(E.textContent=A),T=I(N);for(let pe=0;pe<V.length;pe+=1)V[pe].l(N);x=I(N),z&&z.l(N),N.forEach(g),this.h()},h(){f(i,"class","profile-name profile-name-input svelte-iyvwtm"),f(i,"placeholder","Name your profile"),R(i,"profile-name-invalid",s[3]),f(o,"class","profile-btn-symbol svelte-iyvwtm"),ae(o,"font-size","1.8rem"),f(a,"class","profile-btn profile-select svelte-iyvwtm"),R(a,"profile-select-active",s[11]),f(m,"download",""),f(m,"target","_blank"),f(m,"rel","noopener noreferrer"),ae(m,"display","none"),f(h,"class","profile-btn profile-export svelte-iyvwtm"),f(h,"title","Export profile file to disk"),ae(y,"display","none"),f(y,"type","file"),f(y,"accept",".roads"),f(v,"class","profile-btn profile-export svelte-iyvwtm"),f(v,"title","Load profile file from disk"),f(t,"class","profile-selection svelte-iyvwtm"),f(E,"class","setting-section-header"),f(e,"class","settings-list")},m(M,N){P(M,e,N),c(e,t),c(t,i),Ys(i,s[0]),c(t,r),c(t,a),c(a,o),c(a,l),O&&O.m(a,null),s[32](a),c(t,d),c(t,h),c(h,u),c(h,m),s[33](m),c(t,p),c(t,v),c(v,w),c(v,y),s[34](y),c(e,D),U&&U.m(e,null),c(e,L),c(e,E),c(e,T);for(let G=0;G<V.length;G+=1)V[G]&&V[G].m(e,null);c(e,x),z&&z.m(e,null),Y||(X=[F(i,"focus",s[23]),F(i,"blur",s[16]),F(i,"keydown",mu),F(i,"input",s[15]),F(i,"input",s[27]),F(a,"click",s[17]),F(a,"mouseenter",s[30]),F(a,"mouseleave",s[31]),F(h,"click",s[19]),F(y,"change",s[21]),F(v,"click",s[20])],Y=!0)},p(M,N){if(N[0]&1&&i.value!==M[0]&&Ys(i,M[0]),N[0]&8&&R(i,"profile-name-invalid",M[3]),M[11]?O?O.p(M,N):(O=Ka(M),O.c(),O.m(a,null)):O&&(O.d(1),O=null),N[0]&2048&&R(a,"profile-select-active",M[11]),Z===(Z=$(M))&&U?U.p(M,N):(U&&U.d(1),U=Z&&Z(M),U&&(U.c(),U.m(e,L))),N[0]&4){B=Oe(Object.entries(Oo));let G;for(G=0;G<B.length;G+=1){const se=ja(M,B,G);V[G]?V[G].p(se,N):(V[G]=Qa(se),V[G].c(),V[G].m(e,x))}for(;G<V.length;G+=1)V[G].d(1);V.length=B.length}M[14]==!1?z?z.p(M,N):(z=Za(M),z.c(),z.m(e,null)):z&&(z.d(1),z=null)},i:ve,o:ve,d(M){M&&g(e),O&&O.d(),s[32](null),s[33](null),s[34](null),U&&U.d(),bt(V,M),z&&z.d(),Y=!1,at(X)}}}const mu=s=>{s.code=="Enter"&&s.target.blur()};function gu(s,e,t){let i;Ce(s,ti,J=>t(14,i=J));let r=[],a={};const o=()=>{let J=[Ge.name];for(let ge in Mi)J.push(ge);t(1,r=J)};let n=Ge.name,l=!1,d,h,u=null,m=Ge.name,p=!1,v="What",w=null,y=!1;nt(()=>{const J=ge=>{t(2,a=Ge.getCopy()),ge!==n&&(t(0,n=ge),m=ge)};return Xi.saveCurrentProgress(),o(),Ge.addListener("name",J),Ds.addListener("any",L),window.addEventListener("mouseup",$),()=>{Ge.removeListener("name",J),Ds.removeListener("any",L),window.removeEventListener("mouseup",$)}});let D=[];function L(){let J=Ds.history,ge=[],Ee=Object.keys(J),ze=0;for(let He of Ee){let Ze=Object.keys(J[He]);for(let $e of Ze){let dt=Object.keys(J[He][$e]);for(let et of dt)ge.push({i:ze++,key:Or[He]+" - "+Vr[$e]+" - "+et,dist:Jn(J[He][$e][et].startNode*10),hash:Bs(He,$e,et,J[He][$e][et].startNode)})}}t(10,D=ge)}const E=()=>(t(3,l=n.length<=0||n in Mi),l),A=()=>{E()?Ge.set("name",m,!1,!0):Ge.set("name",n),o(),G()};let T=!1;const x=()=>{t(11,T=!T)},Y=(J,ge)=>{J.stopPropagation(),J.preventDefault(),X(ge)},X=J=>{t(11,T=!1);let ge=J===void 0;if(J!=Ge.name){if(Xi.storeCurrentProfile(),ge){let Ee=r.length+1;do J="Profile "+Ee,Ee++;while(r.indexOf(J)>=0)}Xi.loadStoredProfile(J),o()}};let O=!1;const $=J=>{O||t(11,T=!1)};function Z(J){{let ge="data:text/json;charset=utf-8,"+encodeURIComponent(Xi.getSaveFile());d.setAttribute("href",ge),d.setAttribute("download",n+".roads"),d.click()}}function U(){h.click()}function B(J){let ge=J.target.files[0],Ee=new FileReader;Ee.onload=ze=>{try{V(JSON.parse(ze.target.result))}catch(He){console.error("Failed to load profile"),console.error(He),t(9,y=!0)}},Ee.readAsText(ge)}function V(J){if(!J.profile||!J.profile.name||!J.settings||!J.version)throw new Error("Invalid file structure");let ge=J.profile.name;r.indexOf(ge)>=0?(t(8,v=ge),t(7,p=!0),w=J):(t(26,Mi[ge]=J,Mi),X(ge))}let z=-1;function M(J,ge,Ee){t(13,z=ge),navigator.clipboard.writeText(Ee)}function N(){Le.lockKeys("profile")}function G(){Le.unlockKeys("profile")}function se(){if(!p)return;let J=w.profile.name;t(26,Mi[J]=w,Mi),J!==Ge.name&&Xi.storeCurrentProfile(),Xi.loadStoredProfile(J),o(),oe()}function oe(){t(7,p=!1),t(8,v=null),w=null,t(9,y=!1)}function le(){n=this.value,t(0,n)}const pe=(J,ge)=>Y(ge,J),we=J=>Y(J,void 0),me=()=>t(12,O=!0),Q=()=>t(12,O=!1);function re(J){St[J?"unshift":"push"](()=>{u=J,t(6,u)})}function ce(J){St[J?"unshift":"push"](()=>{d=J,t(4,d)})}function K(J){St[J?"unshift":"push"](()=>{h=J,t(5,h)})}const de=(J,ge)=>M(ge,J.i,J.hash);return s.$$.update=()=>{s.$$.dirty[0]&67108865&&t(3,l=n.length<=0||n in Mi)},[n,r,a,l,d,h,u,p,v,y,D,T,O,z,i,E,A,x,Y,Z,U,B,M,N,se,oe,Mi,le,pe,we,me,Q,re,ce,K,de]}class pu extends Xe{constructor(e){super(),Qe(this,e,gu,vu,Ke,{},null,[-1,-1])}}function $a(s,e,t){const i=s.slice();return i[14]=e[t][0],i[15]=e[t][1],i}function _u(s){let e;return{c(){e=ee("reset")},l(t){e=te(t,"reset")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function bu(s){let e;return{c(){e=ee("confirm")},l(t){e=te(t,"confirm")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function el(s){let e,t="+",i,r;function a(...o){return s[8](s[14],...o)}return{c(){e=_("div"),e.textContent=t,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-14ayu74"&&(e.textContent=t),this.h()},h(){f(e,"class","map-element-delete")},m(o,n){P(o,e,n),i||(r=F(e,"click",a),i=!0)},p(o,n){s=o},d(o){o&&g(e),i=!1,r()}}}function tl(s){let e=(s[14]==s[0]?"Click a mouse button":sl(s[15]))+"",t;return{c(){t=ee(e)},l(i){t=te(i,e)},m(i,r){P(i,t,r)},p(i,r){r&5&&e!==(e=(i[14]==i[0]?"Click a mouse button":sl(i[15]))+"")&&be(t,e)},d(i){i&&g(t)}}}function il(s){let e,t,i=vs[s[14]]+"",r,a,o,n,l,d,h,u,m=s[15]!==null&&s[0]!=s[14]&&el(s),p=(s[15]!==null||s[0]==s[14])&&tl(s);function v(){return s[9](s[14])}function w(){return s[10](s[14])}return{c(){e=_("div"),t=_("div"),r=ee(i),a=k(),o=_("div"),n=_("div"),m&&m.c(),l=k(),p&&p.c(),d=k(),this.h()},l(y){e=b(y,"DIV",{class:!0});var D=C(e);t=b(D,"DIV",{class:!0});var L=C(t);r=te(L,i),L.forEach(g),a=I(D),o=b(D,"DIV",{class:!0});var E=C(o);n=b(E,"DIV",{class:!0});var A=C(n);m&&m.l(A),l=I(A),p&&p.l(A),A.forEach(g),E.forEach(g),d=I(D),D.forEach(g),this.h()},h(){f(t,"class","setting-label"),f(n,"class","map-element"),R(n,"map-element-mapping",s[14]==s[0]),f(o,"class","setting-element"),f(e,"class","setting-row")},m(y,D){P(y,e,D),c(e,t),c(t,r),c(e,a),c(e,o),c(o,n),m&&m.m(n,null),c(n,l),p&&p.m(n,null),c(e,d),h||(u=[F(o,"mousedown",v),F(o,"click",w)],h=!0)},p(y,D){s=y,D&4&&i!==(i=vs[s[14]]+"")&&be(r,i),s[15]!==null&&s[0]!=s[14]?m?m.p(s,D):(m=el(s),m.c(),m.m(n,l)):m&&(m.d(1),m=null),s[15]!==null||s[0]==s[14]?p?p.p(s,D):(p=tl(s),p.c(),p.m(n,null)):p&&(p.d(1),p=null),D&5&&R(n,"map-element-mapping",s[14]==s[0])},d(y){y&&g(e),m&&m.d(),p&&p.d(),h=!1,at(u)}}}function wu(s){let e,t,i,r,a,o,n;function l(p,v){return p[1]?bu:_u}let d=l(s),h=d(s),u=Oe(Object.entries(s[2])),m=[];for(let p=0;p<u.length;p+=1)m[p]=il($a(s,u,p));return{c(){e=_("div"),t=_("div"),i=ee(`Mapping\r
        `),r=_("div"),h.c(),a=k();for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=b(p,"DIV",{class:!0,style:!0});var v=C(e);t=b(v,"DIV",{class:!0});var w=C(t);i=te(w,`Mapping\r
        `),r=b(w,"DIV",{class:!0});var y=C(r);h.l(y),y.forEach(g),w.forEach(g),a=I(v);for(let D=0;D<m.length;D+=1)m[D].l(v);v.forEach(g),this.h()},h(){f(r,"class","setting-section-header-reset"),f(t,"class","setting-section-header"),f(e,"class","settings-list"),ae(e,"padding-top","1rem")},m(p,v){P(p,e,v),c(e,t),c(t,i),c(t,r),h.m(r,null),c(e,a);for(let w=0;w<m.length;w+=1)m[w]&&m[w].m(e,null);o||(n=F(r,"click",s[7]),o=!0)},p(p,[v]){if(d!==(d=l(p))&&(h.d(1),h=d(p),h&&(h.c(),h.m(r,null))),v&61){u=Oe(Object.entries(p[2]));let w;for(w=0;w<u.length;w+=1){const y=$a(p,u,w);m[w]?m[w].p(y,v):(m[w]=il(y),m[w].c(),m[w].m(e,null))}for(;w<m.length;w+=1)m[w].d(1);m.length=u.length}},i:ve,o:ve,d(p){p&&g(e),h.d(),bt(m,p),o=!1,n()}}}function sl(s){return s===null?null:s==0?"Left click":s==1?"Middle click":s==2?"Right click":"Button "+s}function yu(s,e,t){let i=null;function r(y){if(i!=null){for(let D in rt.mapping)rt.mapping[D]==y.button&&(rt.mapping[D]=null);rt.set("mapping",{...rt.mapping,[i]:y.button}),t(0,i=null),y.preventDefault(),y.stopPropagation()}}let a=!1;function o(y){i!=null?a=!0:a=!1}function n(y){if(!a){if(i==y){t(0,i=null),window.removeEventListener("mousedown",r);return}i==null&&window.addEventListener("mousedown",r,{once:!0}),t(0,i=y)}}function l(y){rt.set("mapping",{...rt.mapping,[y]:null})}let d=!1;function h(){d?(rt.set("mapping",{...$n}),t(1,d=!1)):t(1,d=!0)}let u=rt.mapping;return nt(()=>(rt.addListener("mapping",y=>{t(2,u=y)}),()=>{window.removeEventListener("mousedown",r)})),[i,d,u,o,n,l,h,()=>h(),(y,D)=>{l(y),D.stopPropagation()},y=>o(),y=>n(y)]}class Su extends Xe{constructor(e){super(),Qe(this,e,yu,wu,Ke,{})}}function rl(s){let e,t,i,r="HOME",a,o,n,l="GAMEPLAY",d,h,u="GRAPHICS",m,p,v="CONTROLS",w,y,D="AUDIO",L,E,A="PROFILE",T,x,Y,X,O,$,Z,U,B="COPY DEBUG LOG",V,z,M,N="CLOSE",G,se,oe,le;const pe=[Iu,ku,Cu,Lu,Du],we=[];function me(Q,re){return Q[7]==0?0:Q[7]==1?1:Q[7]==2?2:Q[7]==3?3:Q[7]==4?4:-1}return~(X=me(s))&&(O=we[X]=pe[X](s)),{c(){e=_("div"),t=_("div"),i=_("div"),a=ee(r),o=k(),n=_("div"),n.textContent=l,d=k(),h=_("div"),h.textContent=u,m=k(),p=_("div"),p.textContent=v,w=k(),y=_("div"),y.textContent=D,L=k(),E=_("div"),E.textContent=A,T=k(),x=_("div"),Y=_("div"),O&&O.c(),$=k(),Z=_("div"),U=_("div"),U.textContent=B,V=k(),z=k(),M=_("div"),M.textContent=N,this.h()},l(Q){e=b(Q,"DIV",{id:!0,class:!0});var re=C(e);t=b(re,"DIV",{id:!0,class:!0});var ce=C(t);i=b(ce,"DIV",{class:!0,style:!0});var K=C(i);a=te(K,r),K.forEach(g),o=I(ce),n=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),W(n)!=="svelte-d9155r"&&(n.textContent=l),d=I(ce),h=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-1gh8wl0"&&(h.textContent=u),m=I(ce),p=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),W(p)!=="svelte-1t0y255"&&(p.textContent=v),w=I(ce),y=b(ce,"DIV",{class:!0,"data-svelte-h":!0}),W(y)!=="svelte-95vled"&&(y.textContent=D),L=I(ce),E=b(ce,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(E)!=="svelte-1i1kut5"&&(E.textContent=A),ce.forEach(g),T=I(re),x=b(re,"DIV",{id:!0,class:!0});var de=C(x);Y=b(de,"DIV",{id:!0,class:!0});var J=C(Y);O&&O.l(J),J.forEach(g),de.forEach(g),$=I(re),Z=b(re,"DIV",{id:!0,class:!0});var ge=C(Z);U=b(ge,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(U)!=="svelte-19upzay"&&(U.textContent=B),V=I(ge),z=I(ge),M=b(ge,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(M)!=="svelte-172h0kq"&&(M.textContent=N),ge.forEach(g),re.forEach(g),this.h()},h(){f(i,"class","settings-header svelte-1vatkls"),ae(i,"flex-basis","20%"),f(n,"class","settings-header svelte-1vatkls"),R(n,"settings-selected",s[7]==0),f(h,"class","settings-header svelte-1vatkls"),R(h,"settings-selected",s[7]==1),f(p,"class","settings-header svelte-1vatkls"),R(p,"settings-selected",s[7]==2),f(y,"class","settings-header svelte-1vatkls"),R(y,"settings-selected",s[7]==3),f(E,"class","settings-header svelte-1vatkls"),ae(E,"flex-basis","20%"),ae(E,"text-align","right"),R(E,"settings-selected",s[7]==4),f(t,"id","ui-settings-header"),f(t,"class","svelte-1vatkls"),R(t,"ui-settings-hidden",s[12]),f(Y,"id","ui-settings-body-content"),f(Y,"class","svelte-1vatkls"),f(x,"id","ui-settings-body"),f(x,"class","svelte-1vatkls"),R(x,"ui-settings-hidden",s[12]),f(U,"class","ui-btn ui-btn-active"),ae(U,"background","none"),ae(U,"border-color","var(--sr-primary-50)"),ae(U,"color","var(--sr-primary)"),ae(U,"line-height","1rem"),ae(U,"font-size","0.8rem"),f(M,"class","ui-btn ui-btn-active"),ae(M,"line-height","1rem"),ae(M,"font-size","0.8rem"),f(Z,"id","ui-settings-footer"),f(Z,"class","svelte-1vatkls"),R(Z,"ui-settings-hidden",s[12]),f(e,"id","ui-settings"),f(e,"class","svelte-1vatkls")},m(Q,re){P(Q,e,re),c(e,t),c(t,i),c(i,a),c(t,o),c(t,n),c(t,d),c(t,h),c(t,m),c(t,p),c(t,w),c(t,y),c(t,L),c(t,E),c(e,T),c(e,x),c(x,Y),~X&&we[X].m(Y,null),s[28](x),c(e,$),c(e,Z),c(Z,U),c(Z,V),c(Z,z),c(Z,M),se=!0,oe||(le=[F(i,"click",s[19]),F(n,"click",s[20]),F(h,"click",s[21]),F(p,"click",s[22]),F(y,"click",s[23]),F(E,"click",s[24]),F(x,"scrollend",s[15]),F(U,"click",s[16]),F(M,"click",function(){zr(s[2])&&s[2].apply(this,arguments)}),F(e,"mouseenter",s[29]),F(e,"mouseleave",s[30])],oe=!0)},p(Q,re){s=Q,(!se||re[0]&128)&&R(n,"settings-selected",s[7]==0),(!se||re[0]&128)&&R(h,"settings-selected",s[7]==1),(!se||re[0]&128)&&R(p,"settings-selected",s[7]==2),(!se||re[0]&128)&&R(y,"settings-selected",s[7]==3),(!se||re[0]&128)&&R(E,"settings-selected",s[7]==4),(!se||re[0]&4096)&&R(t,"ui-settings-hidden",s[12]);let ce=X;X=me(s),X===ce?~X&&we[X].p(s,re):(O&&(qe(),ie(we[ce],1,1,()=>{we[ce]=null}),Fe()),~X?(O=we[X],O?O.p(s,re):(O=we[X]=pe[X](s),O.c()),j(O,1),O.m(Y,null)):O=null),(!se||re[0]&4096)&&R(x,"ui-settings-hidden",s[12]),(!se||re[0]&4096)&&R(Z,"ui-settings-hidden",s[12])},i(Q){se||(j(O),Q&&Ci(()=>{se&&(G||(G=ei(e,Tt,{duration:100},!0)),G.run(1))}),se=!0)},o(Q){ie(O),Q&&(G||(G=ei(e,Tt,{duration:100},!1)),G.run(0)),se=!1},d(Q){Q&&g(e),~X&&we[X].d(),s[28](null),Q&&G&&G.end(),oe=!1,at(le)}}}function Du(s){let e,t;return e=new pu({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Lu(s){let e,t;return e=new is({props:{liveSetting:_s,settingsMeta:ed}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Cu(s){let e,t,i,r;const a=[Eu,Mu],o=[];function n(l,d){return l[13]?0:1}return e=n(s),t=o[e]=a[e](s),{c(){t.c(),i=De()},l(l){t.l(l),i=De()},m(l,d){o[e].m(l,d),P(l,i,d),r=!0},p(l,d){let h=e;e=n(l),e===h?o[e].p(l,d):(qe(),ie(o[h],1,1,()=>{o[h]=null}),Fe(),t=o[e],t?t.p(l,d):(t=o[e]=a[e](l),t.c()),j(t,1),t.m(i.parentNode,i))},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),o[e].d(l)}}}function ku(s){let e,t,i,r;function a(l,d){return Nu}let n=a()(s);return i=new is({props:{liveSetting:Be,settingsMeta:td}}),{c(){e=_("div"),n.c(),t=k(),Ne(i.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);n.l(d),d.forEach(g),t=I(l),xe(i.$$.fragment,l),this.h()},h(){f(e,"class","settings-blurb svelte-1vatkls")},m(l,d){P(l,e,d),n.m(e,null),P(l,t,d),Re(i,l,d),r=!0},p:ve,i(l){r||(j(i.$$.fragment,l),r=!0)},o(l){ie(i.$$.fragment,l),r=!1},d(l){l&&(g(e),g(t)),n.d(),Ue(i,l)}}}function Iu(s){let e,t;return e=new is({props:{liveSetting:ne,settingsMeta:id}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Mu(s){let e,t,i="Keyboard",r,a,o="Mouse",n,l,d="Controller",h,u,m,p,v,w,y;const D=[Pu,Tu,Au],L=[];function E(A,T){return A[8]==0?0:A[8]==1?1:2}return u=E(s),m=L[u]=D[u](s),{c(){e=_("div"),t=_("div"),t.textContent=i,r=k(),a=_("div"),a.textContent=o,n=k(),l=_("div"),l.textContent=d,h=k(),m.c(),p=De(),this.h()},l(A){e=b(A,"DIV",{class:!0});var T=C(e);t=b(T,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-ugcogi"&&(t.textContent=i),r=I(T),a=b(T,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-1c4vzu2"&&(a.textContent=o),n=I(T),l=b(T,"DIV",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-14igtfd"&&(l.textContent=d),T.forEach(g),h=I(A),m.l(A),p=De(),this.h()},h(){f(t,"class","settings-tab svelte-1vatkls"),R(t,"tab-selected",s[8]==0),f(a,"class","settings-tab svelte-1vatkls"),R(a,"tab-selected",s[8]==1),f(l,"class","settings-tab svelte-1vatkls"),R(l,"tab-selected",s[8]==2),f(e,"class","settings-tabs svelte-1vatkls")},m(A,T){P(A,e,T),c(e,t),c(e,r),c(e,a),c(e,n),c(e,l),P(A,h,T),L[u].m(A,T),P(A,p,T),v=!0,w||(y=[F(t,"click",s[25]),F(a,"click",s[26]),F(l,"click",s[27])],w=!0)},p(A,T){(!v||T[0]&256)&&R(t,"tab-selected",A[8]==0),(!v||T[0]&256)&&R(a,"tab-selected",A[8]==1),(!v||T[0]&256)&&R(l,"tab-selected",A[8]==2);let x=u;u=E(A),u!==x&&(qe(),ie(L[x],1,1,()=>{L[x]=null}),Fe(),m=L[u],m||(m=L[u]=D[u](A),m.c()),j(m,1),m.m(p.parentNode,p))},i(A){v||(j(m),v=!0)},o(A){ie(m),v=!1},d(A){A&&(g(e),g(h),g(p)),L[u].d(A),w=!1,at(y)}}}function Eu(s){let e,t;return e=new is({props:{liveSetting:Ai,settingsMeta:ud}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Au(s){let e,t,i,r;return e=new is({props:{liveSetting:_t,settingsMeta:Ad}}),i=new du({}),{c(){Ne(e.$$.fragment),t=k(),Ne(i.$$.fragment)},l(a){xe(e.$$.fragment,a),t=I(a),xe(i.$$.fragment,a)},m(a,o){Re(e,a,o),P(a,t,o),Re(i,a,o),r=!0},i(a){r||(j(e.$$.fragment,a),j(i.$$.fragment,a),r=!0)},o(a){ie(e.$$.fragment,a),ie(i.$$.fragment,a),r=!1},d(a){a&&g(t),Ue(e,a),Ue(i,a)}}}function Tu(s){let e,t,i,r;return e=new is({props:{liveSetting:rt,settingsMeta:sd}}),i=new Su({}),{c(){Ne(e.$$.fragment),t=k(),Ne(i.$$.fragment)},l(a){xe(e.$$.fragment,a),t=I(a),xe(i.$$.fragment,a)},m(a,o){Re(e,a,o),P(a,t,o),Re(i,a,o),r=!0},i(a){r||(j(e.$$.fragment,a),j(i.$$.fragment,a),r=!0)},o(a){ie(e.$$.fragment,a),ie(i.$$.fragment,a),r=!1},d(a){a&&g(t),Ue(e,a),Ue(i,a)}}}function Pu(s){let e,t,i,r;return e=new is({props:{liveSetting:$t,settingsMeta:Td}}),i=new eu({}),{c(){Ne(e.$$.fragment),t=k(),Ne(i.$$.fragment)},l(a){xe(e.$$.fragment,a),t=I(a),xe(i.$$.fragment,a)},m(a,o){Re(e,a,o),P(a,t,o),Re(i,a,o),r=!0},i(a){r||(j(e.$$.fragment,a),j(i.$$.fragment,a),r=!0)},o(a){ie(e.$$.fragment,a),ie(i.$$.fragment,a),r=!1},d(a){a&&g(t),Ue(e,a),Ue(i,a)}}}function Nu(s){let e;return{c(){e=ee("For good performance, ensure that your browser has hardware acceleration enabled")},l(t){e=te(t,"For good performance, ensure that your browser has hardware acceleration enabled")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function ol(s){let e,t,i,r,a,o,n,l,d,h,u=s[0]&&al(s),m=!s[9]&&!s[13]&&!Pr&&ll(s);return r=new Xf({props:{onHasFocus:s[36]}}),{c(){u&&u.c(),e=k(),t=_("div"),m&&m.c(),i=k(),Ne(r.$$.fragment),a=k(),o=_("img"),this.h()},l(p){u&&u.l(p),e=I(p),t=b(p,"DIV",{id:!0,class:!0});var v=C(t);m&&m.l(v),i=I(v),xe(r.$$.fragment,v),a=I(v),o=b(v,"IMG",{class:!0,src:!0}),v.forEach(g),this.h()},h(){f(o,"class","ui-settings-bar-icon svelte-1vatkls"),At(o.src,n="./ico_settings.svg")||f(o,"src",n),R(o,"ui-settings-bar-icon-prompt",s[0]),f(t,"id","ui-settings-bar"),f(t,"class","svelte-1vatkls")},m(p,v){u&&u.m(p,v),P(p,e,v),P(p,t,v),m&&m.m(t,null),c(t,i),Re(r,t,null),c(t,a),c(t,o),l=!0,d||(h=[F(o,"click",s[37]),F(t,"mouseenter",s[38]),F(t,"mouseleave",s[39])],d=!0)},p(p,v){p[0]?u?(u.p(p,v),v[0]&1&&j(u,1)):(u=al(p),u.c(),j(u,1),u.m(e.parentNode,e)):u&&(qe(),ie(u,1,1,()=>{u=null}),Fe()),!p[9]&&!p[13]&&!Pr?m?m.p(p,v):(m=ll(p),m.c(),m.m(t,i)):m&&(m.d(1),m=null);const w={};v[0]&512&&(w.onHasFocus=p[36]),r.$set(w),(!l||v[0]&1)&&R(o,"ui-settings-bar-icon-prompt",p[0])},i(p){l||(j(u),j(r.$$.fragment,p),l=!0)},o(p){ie(u),ie(r.$$.fragment,p),l=!1},d(p){p&&(g(e),g(t)),u&&u.d(p),m&&m.d(),Ue(r),d=!1,at(h)}}}function al(s){let e,t='<span style="font-weight: 600">Low framerate?</span> <br/> <span style="font-size: 0.9rem">Adjust graphics settings here</span>',i,r,a,o;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-e8bk2z"&&(e.innerHTML=t),this.h()},h(){f(e,"class","ui-settings-bar-prompt svelte-1vatkls")},m(n,l){P(n,e,l),r=!0,a||(o=F(e,"click",s[31]),a=!0)},p:ve,i(n){r||(n&&Ci(()=>{r&&(i||(i=ei(e,Tt,{delay:0,duration:500},!0)),i.run(1))}),r=!0)},o(n){n&&(i||(i=ei(e,Tt,{delay:0,duration:500},!1)),i.run(0)),r=!1},d(n){n&&g(e),n&&i&&i.end(),a=!1,o()}}}function ll(s){let e,t,i,r,a,o,n,l=s[17]&&xu(s),d=!s[11]&&dl();return{c(){l&&l.c(),e=k(),t=_("a"),d&&d.c(),i=k(),r=_("img"),this.h()},l(h){l&&l.l(h),e=I(h),t=b(h,"A",{id:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var u=C(t);d&&d.l(u),i=I(u),r=b(u,"IMG",{id:!0,src:!0,alt:!0,class:!0}),u.forEach(g),this.h()},h(){f(r,"id","ui-settings-steam-icon"),At(r.src,a="./icon_steam_white.svg")||f(r,"src",a),f(r,"alt",""),f(r,"class","svelte-1vatkls"),f(t,"id","ui-settings-steam"),f(t,"target","_blank"),f(t,"rel","noopener noreferrer"),f(t,"href","https://store.steampowered.com/app/3431300/Slow_Roads/"),f(t,"alt",""),f(t,"class","svelte-1vatkls")},m(h,u){l&&l.m(h,u),P(h,e,u),P(h,t,u),d&&d.m(t,null),c(t,i),c(t,r),o||(n=F(t,"mouseup",s[35]),o=!0)},p(h,u){h[17]&&l.p(h,u),h[11]?d&&(d.d(1),d=null):d||(d=dl(),d.c(),d.m(t,i))},d(h){h&&(g(e),g(t)),l&&l.d(h),d&&d.d(),o=!1,n()}}}function xu(s){let e,t,i,r,a,o,n=!s[10]&&nl();return{c(){e=_("a"),n&&n.c(),t=k(),i=_("img"),this.h()},l(l){e=b(l,"A",{id:!0,style:!0,target:!0,rel:!0,href:!0,alt:!0,class:!0});var d=C(e);n&&n.l(d),t=I(d),i=b(d,"IMG",{id:!0,src:!0,alt:!0,class:!0}),d.forEach(g),this.h()},h(){f(i,"id","ui-settings-steam-icon"),At(i.src,r="./icon_itch_white.svg")||f(i,"src",r),f(i,"alt",""),f(i,"class","svelte-1vatkls"),f(e,"id","ui-settings-steam"),ae(e,"margin-right","1rem"),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"href","https://topographinteractive.itch.io/slow-roads"),f(e,"alt",""),f(e,"class","svelte-1vatkls")},m(l,d){P(l,e,d),n&&n.m(e,null),c(e,t),c(e,i),a||(o=[F(e,"mouseenter",s[32]),F(e,"mouseleave",s[33]),F(e,"mouseup",s[34])],a=!0)},p(l,d){l[10]?n&&(n.d(1),n=null):n||(n=nl(),n.c(),n.m(e,t))},d(l){l&&g(e),n&&n.d(),a=!1,at(o)}}}function nl(s){let e;return{c(){e=ee("WEB EDITION")},l(t){e=te(t,"WEB EDITION")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function dl(s){let e;return{c(){e=ee("STEAM DEMO")},l(t){e=te(t,"STEAM DEMO")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Ru(s){let e,t,i,r=s[1]&&rl(s),a=s[5]&&!s[14]&&ol(s);return{c(){r&&r.c(),e=k(),a&&a.c(),t=De()},l(o){r&&r.l(o),e=I(o),a&&a.l(o),t=De()},m(o,n){r&&r.m(o,n),P(o,e,n),a&&a.m(o,n),P(o,t,n),i=!0},p(o,n){o[1]?r?(r.p(o,n),n[0]&2&&j(r,1)):(r=rl(o),r.c(),j(r,1),r.m(e.parentNode,e)):r&&(qe(),ie(r,1,1,()=>{r=null}),Fe()),o[5]&&!o[14]?a?(a.p(o,n),n[0]&16416&&j(a,1)):(a=ol(o),a.c(),j(a,1),a.m(t.parentNode,t)):a&&(qe(),ie(a,1,1,()=>{a=null}),Fe())},i(o){i||(j(r),j(a),i=!0)},o(o){ie(r),ie(a),i=!1},d(o){o&&(g(e),g(t)),r&&r.d(o),a&&a.d(o)}}}function Uu(s,e,t){let i,r,a;Ce(s,Qi,K=>t(12,i=K)),Ce(s,ti,K=>t(13,r=K)),Ce(s,bs,K=>t(14,a=K));let{showSettings:o=!1}=e,{showPrompt:n=!1}=e,{closeSettings:l=()=>{}}=e,{openSettings:d=()=>{}}=e,{onShowSplash:h=K=>{}}=e,{showBar:u=!0}=e,m,p=0;function v(K){t(18,p=K.target.scrollTop)}let w=0,y=_e.hasGamepadInput?2:rt.useMouse?1:0,D=!1;const L=()=>{navigator.clipboard.writeText("```\n"+Di.get()+"\n```"),console.log("Copied log to clipboard - paste & send in discord!")};let E=Ge.totalVisits>10,A=!1,T=!1;const x=()=>{t(10,A=ot.hasSeenItch),ot.hasSeenSteam,t(11,T=ot.hasSeenDemo)};nt(()=>(ot.addListener("any",x),()=>{ot.removeListener("any",x)}));const Y=K=>{h(K)},X=()=>{t(7,w=0)},O=()=>{t(7,w=1)},$=()=>{t(7,w=2)},Z=()=>{t(7,w=3)},U=()=>{t(7,w=4)},B=()=>{t(8,y=0)},V=()=>{t(8,y=1)},z=()=>{t(8,y=2)};function M(K){St[K?"unshift":"push"](()=>{m=K,t(6,m),t(18,p)})}const N=()=>{_e.lockMouse(),Le.lockScroll("settings")},G=()=>{_e.unlockMouse(!1),Le.unlockScroll("settings")},se=()=>{t(0,n=!1),t(7,w=0)},oe=()=>{t(10,A=!1)},le=()=>{t(10,A=ot.hasSeenItch)},pe=()=>{ot.set("hasSeenItch",!0)},we=()=>{ot.set("hasSeenDemo",!0)},me=K=>{t(9,D=K)},Q=()=>{o?l():d()},re=()=>_e.lockMouse(),ce=()=>_e.unlockMouse(!1);return s.$$set=K=>{"showSettings"in K&&t(1,o=K.showSettings),"showPrompt"in K&&t(0,n=K.showPrompt),"closeSettings"in K&&t(2,l=K.closeSettings),"openSettings"in K&&t(3,d=K.openSettings),"onShowSplash"in K&&t(4,h=K.onShowSplash),"showBar"in K&&t(5,u=K.showBar)},s.$$.update=()=>{s.$$.dirty[0]&262208&&m&&t(6,m.scrollTop=p,m),s.$$.dirty[0]&1&&n==!0&&t(7,w=1)},[n,o,l,d,h,u,m,w,y,D,A,T,i,r,a,v,L,E,p,Y,X,O,$,Z,U,B,V,z,M,N,G,se,oe,le,pe,we,me,Q,re,ce]}class Ou extends Xe{constructor(e){super(),Qe(this,e,Uu,Ru,Ke,{showSettings:1,showPrompt:0,closeSettings:2,openSettings:3,onShowSplash:4,showBar:5},null,[-1,-1])}}function cl(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function hl(s,e,t){const i=s.slice();return i[18]=e[t][0],i[19]=e[t][1],i}function fl(s){let e,t,i=s[18]+"",r,a,o=s[19]+"",n;return{c(){e=_("div"),t=_("div"),r=ee(i),a=_("div"),n=ee(o),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);t=b(d,"DIV",{class:!0});var h=C(t);r=te(h,i),h.forEach(g),a=b(d,"DIV",{class:!0});var u=C(a);n=te(u,o),u.forEach(g),d.forEach(g),this.h()},h(){f(t,"class","debug-label svelte-1yramsp"),f(a,"class","debug-val svelte-1yramsp"),f(e,"class","debug-row svelte-1yramsp")},m(l,d){P(l,e,d),c(e,t),c(t,r),c(e,a),c(a,n)},p(l,d){d&65536&&i!==(i=l[18]+"")&&be(r,i),d&65536&&o!==(o=l[19]+"")&&be(n,o)},d(l){l&&g(e)}}}function ul(s){let e,t,i=s[18]+"",r,a,o=(s[19].toFixed?s[19].toFixed(2):s[19])+"",n;return{c(){e=_("div"),t=_("div"),r=ee(i),a=_("div"),n=ee(o),this.h()},l(l){e=b(l,"DIV",{class:!0});var d=C(e);t=b(d,"DIV",{class:!0});var h=C(t);r=te(h,i),h.forEach(g),a=b(d,"DIV",{class:!0});var u=C(a);n=te(u,o),u.forEach(g),d.forEach(g),this.h()},h(){f(t,"class","debug-label svelte-1yramsp"),f(a,"class","debug-val svelte-1yramsp"),f(e,"class","debug-row svelte-1yramsp")},m(l,d){P(l,e,d),c(e,t),c(t,r),c(e,a),c(a,n)},p(l,d){d&131072&&i!==(i=l[18]+"")&&be(r,i),d&131072&&o!==(o=(l[19].toFixed?l[19].toFixed(2):l[19])+"")&&be(n,o)},d(l){l&&g(e)}}}function Vu(s){let e,t,i,r="hash",a,o,n,l,d,h="pos",u,m,p,v,w,y="tile",D,L,E,A,T,x="cell",Y,X,O,$,Z="midline",U,B,V,z="vehicle index",M,N=s[4].i+"",G,se,oe,le,pe="head",we,me=s[5].i+"",Q,re,ce,K,de="tail",J,ge=s[6].i+"",Ee,ze,He,Ze="performance",$e,dt,et,ci="view dist",Vt,ye,st,Pt,Dt,Zt="detail",jt,hi,ht,wt,ft,Gt="sim speed",yt,fi,pt,mt,je,Ye,Ut="fps",ct,Ht,ki,Ot,Jt,gt="draw calls",ii,si,bi,wi,yi,fe="triangles",ut,Ps,er,Vi,Hi,oo="geometries",ss,Ns,tr,zi,ao="queue",ir,qi,Fi,lo="jobs",rs,xs,sr,Gi,Bi,no="priority jobs",os,Rs,rr,Wi,co="scene",or,Us,ji,ho="vehicle",ar,Os,Si,fo="Press F4 to hide this panel",as=Oe(Object.entries(s[16])),Nt=[];for(let Ie=0;Ie<as.length;Ie+=1)Nt[Ie]=fl(hl(s,as,Ie));let ls=Oe(Object.entries(s[17])),xt=[];for(let Ie=0;Ie<ls.length;Ie+=1)xt[Ie]=ul(cl(s,ls,Ie));return{c(){e=_("div"),t=_("div"),i=_("div"),i.textContent=r,a=_("div"),o=ee(s[0]),n=k(),l=_("div"),d=_("div"),d.textContent=h,u=_("div"),m=ee(s[1]),p=k(),v=_("div"),w=_("div"),w.textContent=y,D=_("div"),L=ee(s[2]),E=k(),A=_("div"),T=_("div"),T.textContent=x,Y=_("div"),X=ee(s[3]),O=k(),$=_("div"),$.textContent=Z,U=k(),B=_("div"),V=_("div"),V.textContent=z,M=_("div"),G=ee(N),se=k(),oe=_("div"),le=_("div"),le.textContent=pe,we=_("div"),Q=ee(me),re=k(),ce=_("div"),K=_("div"),K.textContent=de,J=_("div"),Ee=ee(ge),ze=k(),He=_("div"),He.textContent=Ze,$e=k(),dt=_("div"),et=_("div"),et.textContent=ci,Vt=_("div"),ye=ee(s[7]),st=k(),Pt=_("div"),Dt=_("div"),Dt.textContent=Zt,jt=_("div"),hi=ee(s[8]),ht=k(),wt=_("div"),ft=_("div"),ft.textContent=Gt,yt=_("div"),fi=ee(s[9]),pt=ee("x"),mt=k(),je=_("div"),Ye=_("div"),Ye.textContent=Ut,ct=_("div"),Ht=ee(s[10]),ki=k(),Ot=_("div"),Jt=_("div"),Jt.textContent=gt,ii=_("div"),si=ee(s[11]),bi=k(),wi=_("div"),yi=_("div"),yi.textContent=fe,ut=_("div"),Ps=ee(s[12]),er=k(),Vi=_("div"),Hi=_("div"),Hi.textContent=oo,ss=_("div"),Ns=ee(s[13]),tr=k(),zi=_("div"),zi.textContent=ao,ir=k(),qi=_("div"),Fi=_("div"),Fi.textContent=lo,rs=_("div"),xs=ee(s[14]),sr=k(),Gi=_("div"),Bi=_("div"),Bi.textContent=no,os=_("div"),Rs=ee(s[15]),rr=k(),Wi=_("div"),Wi.textContent=co,or=k();for(let Ie=0;Ie<Nt.length;Ie+=1)Nt[Ie].c();Us=k(),ji=_("div"),ji.textContent=ho,ar=k();for(let Ie=0;Ie<xt.length;Ie+=1)xt[Ie].c();Os=k(),Si=_("div"),Si.textContent=fo,this.h()},l(Ie){e=b(Ie,"DIV",{class:!0});var ue=C(e);t=b(ue,"DIV",{class:!0});var Pe=C(t);i=b(Pe,"DIV",{class:!0,"data-svelte-h":!0}),W(i)!=="svelte-1wk88r1"&&(i.textContent=r),a=b(Pe,"DIV",{class:!0});var Ii=C(a);o=te(Ii,s[0]),Ii.forEach(g),Pe.forEach(g),n=I(ue),l=b(ue,"DIV",{class:!0});var lr=C(l);d=b(lr,"DIV",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-1g3ewex"&&(d.textContent=h),u=b(lr,"DIV",{class:!0});var uo=C(u);m=te(uo,s[1]),uo.forEach(g),lr.forEach(g),p=I(ue),v=b(ue,"DIV",{class:!0});var nr=C(v);w=b(nr,"DIV",{class:!0,"data-svelte-h":!0}),W(w)!=="svelte-1jksrql"&&(w.textContent=y),D=b(nr,"DIV",{class:!0});var vo=C(D);L=te(vo,s[2]),vo.forEach(g),nr.forEach(g),E=I(ue),A=b(ue,"DIV",{class:!0});var dr=C(A);T=b(dr,"DIV",{class:!0,"data-svelte-h":!0}),W(T)!=="svelte-l9fhq9"&&(T.textContent=x),Y=b(dr,"DIV",{class:!0});var mo=C(Y);X=te(mo,s[3]),mo.forEach(g),dr.forEach(g),O=I(ue),$=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),W($)!=="svelte-1fe9op8"&&($.textContent=Z),U=I(ue),B=b(ue,"DIV",{class:!0});var cr=C(B);V=b(cr,"DIV",{class:!0,"data-svelte-h":!0}),W(V)!=="svelte-nhrrjr"&&(V.textContent=z),M=b(cr,"DIV",{class:!0});var go=C(M);G=te(go,N),go.forEach(g),cr.forEach(g),se=I(ue),oe=b(ue,"DIV",{class:!0});var hr=C(oe);le=b(hr,"DIV",{class:!0,"data-svelte-h":!0}),W(le)!=="svelte-19s95zn"&&(le.textContent=pe),we=b(hr,"DIV",{class:!0});var po=C(we);Q=te(po,me),po.forEach(g),hr.forEach(g),re=I(ue),ce=b(ue,"DIV",{class:!0});var fr=C(ce);K=b(fr,"DIV",{class:!0,"data-svelte-h":!0}),W(K)!=="svelte-145fhfv"&&(K.textContent=de),J=b(fr,"DIV",{class:!0});var _o=C(J);Ee=te(_o,ge),_o.forEach(g),fr.forEach(g),ze=I(ue),He=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),W(He)!=="svelte-m5yv1e"&&(He.textContent=Ze),$e=I(ue),dt=b(ue,"DIV",{class:!0});var ur=C(dt);et=b(ur,"DIV",{class:!0,"data-svelte-h":!0}),W(et)!=="svelte-pok5e0"&&(et.textContent=ci),Vt=b(ur,"DIV",{class:!0});var bo=C(Vt);ye=te(bo,s[7]),bo.forEach(g),ur.forEach(g),st=I(ue),Pt=b(ue,"DIV",{class:!0});var vr=C(Pt);Dt=b(vr,"DIV",{class:!0,"data-svelte-h":!0}),W(Dt)!=="svelte-1e1xn7y"&&(Dt.textContent=Zt),jt=b(vr,"DIV",{class:!0});var wo=C(jt);hi=te(wo,s[8]),wo.forEach(g),vr.forEach(g),ht=I(ue),wt=b(ue,"DIV",{class:!0});var mr=C(wt);ft=b(mr,"DIV",{class:!0,"data-svelte-h":!0}),W(ft)!=="svelte-zjyrxb"&&(ft.textContent=Gt),yt=b(mr,"DIV",{class:!0});var gr=C(yt);fi=te(gr,s[9]),pt=te(gr,"x"),gr.forEach(g),mr.forEach(g),mt=I(ue),je=b(ue,"DIV",{class:!0});var pr=C(je);Ye=b(pr,"DIV",{class:!0,"data-svelte-h":!0}),W(Ye)!=="svelte-1r6mdog"&&(Ye.textContent=Ut),ct=b(pr,"DIV",{class:!0});var yo=C(ct);Ht=te(yo,s[10]),yo.forEach(g),pr.forEach(g),ki=I(ue),Ot=b(ue,"DIV",{class:!0});var _r=C(Ot);Jt=b(_r,"DIV",{class:!0,"data-svelte-h":!0}),W(Jt)!=="svelte-1a9hcos"&&(Jt.textContent=gt),ii=b(_r,"DIV",{class:!0});var So=C(ii);si=te(So,s[11]),So.forEach(g),_r.forEach(g),bi=I(ue),wi=b(ue,"DIV",{class:!0});var br=C(wi);yi=b(br,"DIV",{class:!0,"data-svelte-h":!0}),W(yi)!=="svelte-1l1j0g6"&&(yi.textContent=fe),ut=b(br,"DIV",{class:!0});var Do=C(ut);Ps=te(Do,s[12]),Do.forEach(g),br.forEach(g),er=I(ue),Vi=b(ue,"DIV",{class:!0});var wr=C(Vi);Hi=b(wr,"DIV",{class:!0,"data-svelte-h":!0}),W(Hi)!=="svelte-13w33n5"&&(Hi.textContent=oo),ss=b(wr,"DIV",{class:!0});var Lo=C(ss);Ns=te(Lo,s[13]),Lo.forEach(g),wr.forEach(g),tr=I(ue),zi=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),W(zi)!=="svelte-1gkc7zn"&&(zi.textContent=ao),ir=I(ue),qi=b(ue,"DIV",{class:!0});var yr=C(qi);Fi=b(yr,"DIV",{class:!0,"data-svelte-h":!0}),W(Fi)!=="svelte-veharl"&&(Fi.textContent=lo),rs=b(yr,"DIV",{class:!0});var Co=C(rs);xs=te(Co,s[14]),Co.forEach(g),yr.forEach(g),sr=I(ue),Gi=b(ue,"DIV",{class:!0});var Sr=C(Gi);Bi=b(Sr,"DIV",{class:!0,"data-svelte-h":!0}),W(Bi)!=="svelte-1fnad0n"&&(Bi.textContent=no),os=b(Sr,"DIV",{class:!0});var ko=C(os);Rs=te(ko,s[15]),ko.forEach(g),Sr.forEach(g),rr=I(ue),Wi=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),W(Wi)!=="svelte-7gmbxc"&&(Wi.textContent=co),or=I(ue);for(let Yi=0;Yi<Nt.length;Yi+=1)Nt[Yi].l(ue);Us=I(ue),ji=b(ue,"DIV",{class:!0,"data-svelte-h":!0}),W(ji)!=="svelte-zzbumo"&&(ji.textContent=ho),ar=I(ue);for(let Yi=0;Yi<xt.length;Yi+=1)xt[Yi].l(ue);Os=I(ue),Si=b(ue,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(Si)!=="svelte-19369qr"&&(Si.textContent=fo),ue.forEach(g),this.h()},h(){f(i,"class","debug-label svelte-1yramsp"),f(a,"class","debug-val svelte-1yramsp"),f(t,"class","debug-row svelte-1yramsp"),f(d,"class","debug-label svelte-1yramsp"),f(u,"class","debug-val svelte-1yramsp"),f(l,"class","debug-row svelte-1yramsp"),f(w,"class","debug-label svelte-1yramsp"),f(D,"class","debug-val svelte-1yramsp"),f(v,"class","debug-row svelte-1yramsp"),f(T,"class","debug-label svelte-1yramsp"),f(Y,"class","debug-val svelte-1yramsp"),f(A,"class","debug-row svelte-1yramsp"),f($,"class","debug-section svelte-1yramsp"),f(V,"class","debug-label svelte-1yramsp"),f(M,"class","debug-val svelte-1yramsp"),f(B,"class","debug-row svelte-1yramsp"),f(le,"class","debug-label svelte-1yramsp"),f(we,"class","debug-val svelte-1yramsp"),f(oe,"class","debug-row svelte-1yramsp"),f(K,"class","debug-label svelte-1yramsp"),f(J,"class","debug-val svelte-1yramsp"),f(ce,"class","debug-row svelte-1yramsp"),f(He,"class","debug-section svelte-1yramsp"),f(et,"class","debug-label svelte-1yramsp"),f(Vt,"class","debug-val svelte-1yramsp"),f(dt,"class","debug-row svelte-1yramsp"),f(Dt,"class","debug-label svelte-1yramsp"),f(jt,"class","debug-val svelte-1yramsp"),f(Pt,"class","debug-row svelte-1yramsp"),f(ft,"class","debug-label svelte-1yramsp"),f(yt,"class","debug-val svelte-1yramsp"),f(wt,"class","debug-row svelte-1yramsp"),f(Ye,"class","debug-label svelte-1yramsp"),f(ct,"class","debug-val svelte-1yramsp"),f(je,"class","debug-row svelte-1yramsp"),f(Jt,"class","debug-label svelte-1yramsp"),f(ii,"class","debug-val svelte-1yramsp"),f(Ot,"class","debug-row svelte-1yramsp"),f(yi,"class","debug-label svelte-1yramsp"),f(ut,"class","debug-val svelte-1yramsp"),f(wi,"class","debug-row svelte-1yramsp"),f(Hi,"class","debug-label svelte-1yramsp"),f(ss,"class","debug-val svelte-1yramsp"),f(Vi,"class","debug-row svelte-1yramsp"),f(zi,"class","debug-section svelte-1yramsp"),f(Fi,"class","debug-label svelte-1yramsp"),f(rs,"class","debug-val svelte-1yramsp"),f(qi,"class","debug-row svelte-1yramsp"),f(Bi,"class","debug-label svelte-1yramsp"),f(os,"class","debug-val svelte-1yramsp"),f(Gi,"class","debug-row svelte-1yramsp"),f(Wi,"class","debug-section svelte-1yramsp"),f(ji,"class","debug-section svelte-1yramsp"),f(Si,"class","debug-row debug-label svelte-1yramsp"),ae(Si,"font-style","italic"),ae(Si,"margin-top","1rem"),f(e,"class","debug-cont svelte-1yramsp")},m(Ie,ue){P(Ie,e,ue),c(e,t),c(t,i),c(t,a),c(a,o),c(e,n),c(e,l),c(l,d),c(l,u),c(u,m),c(e,p),c(e,v),c(v,w),c(v,D),c(D,L),c(e,E),c(e,A),c(A,T),c(A,Y),c(Y,X),c(e,O),c(e,$),c(e,U),c(e,B),c(B,V),c(B,M),c(M,G),c(e,se),c(e,oe),c(oe,le),c(oe,we),c(we,Q),c(e,re),c(e,ce),c(ce,K),c(ce,J),c(J,Ee),c(e,ze),c(e,He),c(e,$e),c(e,dt),c(dt,et),c(dt,Vt),c(Vt,ye),c(e,st),c(e,Pt),c(Pt,Dt),c(Pt,jt),c(jt,hi),c(e,ht),c(e,wt),c(wt,ft),c(wt,yt),c(yt,fi),c(yt,pt),c(e,mt),c(e,je),c(je,Ye),c(je,ct),c(ct,Ht),c(e,ki),c(e,Ot),c(Ot,Jt),c(Ot,ii),c(ii,si),c(e,bi),c(e,wi),c(wi,yi),c(wi,ut),c(ut,Ps),c(e,er),c(e,Vi),c(Vi,Hi),c(Vi,ss),c(ss,Ns),c(e,tr),c(e,zi),c(e,ir),c(e,qi),c(qi,Fi),c(qi,rs),c(rs,xs),c(e,sr),c(e,Gi),c(Gi,Bi),c(Gi,os),c(os,Rs),c(e,rr),c(e,Wi),c(e,or);for(let Pe=0;Pe<Nt.length;Pe+=1)Nt[Pe]&&Nt[Pe].m(e,null);c(e,Us),c(e,ji),c(e,ar);for(let Pe=0;Pe<xt.length;Pe+=1)xt[Pe]&&xt[Pe].m(e,null);c(e,Os),c(e,Si)},p(Ie,[ue]){if(ue&1&&be(o,Ie[0]),ue&2&&be(m,Ie[1]),ue&4&&be(L,Ie[2]),ue&8&&be(X,Ie[3]),ue&16&&N!==(N=Ie[4].i+"")&&be(G,N),ue&32&&me!==(me=Ie[5].i+"")&&be(Q,me),ue&64&&ge!==(ge=Ie[6].i+"")&&be(Ee,ge),ue&128&&be(ye,Ie[7]),ue&256&&be(hi,Ie[8]),ue&512&&be(fi,Ie[9]),ue&1024&&be(Ht,Ie[10]),ue&2048&&be(si,Ie[11]),ue&4096&&be(Ps,Ie[12]),ue&8192&&be(Ns,Ie[13]),ue&16384&&be(xs,Ie[14]),ue&32768&&be(Rs,Ie[15]),ue&65536){as=Oe(Object.entries(Ie[16]));let Pe;for(Pe=0;Pe<as.length;Pe+=1){const Ii=hl(Ie,as,Pe);Nt[Pe]?Nt[Pe].p(Ii,ue):(Nt[Pe]=fl(Ii),Nt[Pe].c(),Nt[Pe].m(e,Us))}for(;Pe<Nt.length;Pe+=1)Nt[Pe].d(1);Nt.length=as.length}if(ue&131072){ls=Oe(Object.entries(Ie[17]));let Pe;for(Pe=0;Pe<ls.length;Pe+=1){const Ii=cl(Ie,ls,Pe);xt[Pe]?xt[Pe].p(Ii,ue):(xt[Pe]=ul(Ii),xt[Pe].c(),xt[Pe].m(e,Os))}for(;Pe<xt.length;Pe+=1)xt[Pe].d(1);xt.length=ls.length}},i:ve,o:ve,d(Ie){Ie&&g(e),bt(Nt,Ie),bt(xt,Ie)}}}function Hu(s,e,t){let i,r,a,o,n,l,d,h,u,m,p,v,w,y,D,L,E,A;return Ce(s,on,T=>t(0,i=T)),Ce(s,tn,T=>t(1,r=T)),Ce(s,sn,T=>t(2,a=T)),Ce(s,rn,T=>t(3,o=T)),Ce(s,Xr,T=>t(4,n=T)),Ce(s,en,T=>t(5,l=T)),Ce(s,$l,T=>t(6,d=T)),Ce(s,an,T=>t(7,h=T)),Ce(s,ln,T=>t(8,u=T)),Ce(s,rd,T=>t(9,m=T)),Ce(s,Kr,T=>t(10,p=T)),Ce(s,Ql,T=>t(11,v=T)),Ce(s,Zl,T=>t(12,w=T)),Ce(s,Jl,T=>t(13,y=T)),Ce(s,Qr,T=>t(14,D=T)),Ce(s,Tr,T=>t(15,L=T)),Ce(s,od,T=>t(16,E=T)),Ce(s,ad,T=>t(17,A=T)),[i,r,a,o,n,l,d,h,u,m,p,v,w,y,D,L,E,A]}class zu extends Xe{constructor(e){super(),Qe(this,e,Hu,Vu,Ke,{})}}function qu(s){let e,t,i,r,a;return{c(){e=_("div"),t=Vs("svg"),i=Vs("g"),r=Vs("polyline"),a=Vs("circle"),this.h()},l(o){e=b(o,"DIV",{id:!0,style:!0,class:!0});var n=C(e);t=Hs(n,"svg",{viewBox:!0,width:!0,height:!0});var l=C(t);i=Hs(l,"g",{transform:!0});var d=C(i);r=Hs(d,"polyline",{style:!0,points:!0,transform:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,fill:!0}),C(r).forEach(g),a=Hs(d,"circle",{fill:!0,r:!0}),C(a).forEach(g),d.forEach(g),l.forEach(g),n.forEach(g),this.h()},h(){ae(r,"filter","drop-shadow( 0px 0px 6px var(--sr-white) )"),f(r,"points",""),f(r,"transform","translate(0 0)"),f(r,"stroke","var(--sr-white)"),f(r,"stroke-width",10),f(r,"stroke-linecap","round"),f(r,"fill","none"),f(a,"fill","var(--sr-primary)"),f(a,"r","2"),f(i,"transform","translate(80 96) scale(-0.5 -0.5)"),f(t,"viewBox","0 0 160 160"),f(t,"width","100%"),f(t,"height","100%"),f(e,"id","upcoming-container"),ae(e,"opacity",s[1]?"1":"0"),f(e,"class","svelte-1wl5x4o"),R(e,"upcoming-top",s[0]==1),R(e,"upcoming-bottom",s[0]==0)},m(o,n){P(o,e,n),c(e,t),c(t,i),c(i,r),s[5](r),c(i,a),s[6](a),s[7](t)},p(o,[n]){n&2&&ae(e,"opacity",o[1]?"1":"0"),n&1&&R(e,"upcoming-top",o[0]==1),n&1&&R(e,"upcoming-bottom",o[0]==0)},i:ve,o:ve,d(o){o&&g(e),s[5](null),s[6](null),s[7](null)}}}const Er=16,ns=16;function Fu(s,e,t){let{position:i=1}=e,r=!0,a,o,n,l;const d=1/ns;class h{constructor(D,L,E,A){q(this,"svg");q(this,"lineDOM");q(this,"underlineDOM");q(this,"points");q(this,"origin",{x:0,z:0});q(this,"seenIndex",0);q(this,"loadedNode",null);q(this,"baseA");q(this,"subNode",0);q(this,"angles",[]);q(this,"pos",{x:0,y:0});q(this,"ticking",!1);q(this,"onLoadProgressBound",this.onLoadProgress.bind(this));q(this,"lerp");q(this,"i");q(this,"l");q(this,"l1");q(this,"p");q(this,"pA");q(this,"tA");q(this,"transform");q(this,"progressCounter",0);q(this,"tickTimer",0);q(this,"onTickBound",this.tick.bind(this));this.svg=D,this.underlineDOM=L,this.lineDOM=E,this.points=this.lineDOM.points,this.circleDOM=A,this.loadedNode=Me.vehicleNode,this.seenIndex=Me.vehicleNode.i,this.baseA=Me.vehicleNode.a,this.angles.push(this.baseA),this.pA=this.baseA,this.pos.x=this.loadedNode.p.x,this.pos.y=this.loadedNode.p.z,di.addListener(this.onLoadProgressBound),this.onLoadProgress(di.value)}onLoadProgress(D){D<1&&this.ticking?(Je.removeSlowListener(this.onTickBound),this.ticking=!1):this.ticking||(Je.addSlowListener(this.onTickBound),this.ticking=!0)}makePoint(D,L){let E=this.svg.createSVGPoint();return E.x=D,E.y=L,E}destroy(){Je.removeSlowListener(this.onTickBound),di.removeListener(this.onLoadProgressBound)}tick(){if(this.lerp=Math.floor(Pd(H.position.x,H.position.z,Me.vehicleNode)*ns),!(this.loadedNode.i==Me.vehicleNode.i+Er&&this.lerp<=this.subNode)){for(;this.loadedNode.i<Me.vehicleNode.i+Er;){for(this.i=this.subNode;this.i<ns;this.i++)this.l=this.i/ns,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*d,this.angles.push(this.baseA);this.loadedNode=this.loadedNode.next,this.progressCounter++,this.progressCounter>100&&Math.abs(this.loadedNode.a-this.baseA)<.1&&(this.baseA=this.loadedNode.a,this.progressCounter=0),this.subNode=0}for(this.i=this.subNode;this.i<this.lerp;this.i++)this.l=this.i/ns,this.l1=1-this.l,this.p=this.makePoint(this.loadedNode.p.x*this.l1+this.loadedNode.next.p.x*this.l,this.loadedNode.p.z*this.l1+this.loadedNode.next.p.z*this.l),this.points.appendItem(this.p),this.baseA-=this.loadedNode.next.da*d,this.angles.push(this.baseA);for(this.subNode=this.lerp;this.points.length>Er*ns;)this.points.removeItem(0),this.angles.shift(),this.pos=this.points.getItem(0)}this.pA=this.pA*.95+this.angles[0]*.05,this.transform="rotate("+(90-this.pA*180/Math.PI)+")",this.transform+=" translate("+this.pos.x*-1+" "+this.pos.y*-1+")",this.lineDOM.setAttribute("transform",this.transform),this.circleDOM.setAttribute("cx",this.pos.x),this.circleDOM.setAttribute("cy",this.pos.y),this.circleDOM.setAttribute("transform",this.transform)}}function u(){t(1,r=ne.showUpcomingRoad==Mo.ALWAYS||ne.showUpcomingRoad==Mo.MANUAL&&!qt.value)}let m=null;nt(()=>(m||(m=new h(a,o,n,l)),ne.addListener("showUpcomingRoad",u),qt.addListener(u),()=>{m&&m.destroy(),ne.removeListener("showUpcomingRoad",u),qt.addListener(u)}));function p(y){St[y?"unshift":"push"](()=>{n=y,t(3,n)})}function v(y){St[y?"unshift":"push"](()=>{l=y,t(4,l)})}function w(y){St[y?"unshift":"push"](()=>{a=y,t(2,a)})}return s.$$set=y=>{"position"in y&&t(0,i=y.position)},[i,r,a,n,l,p,v,w]}class Gu extends Xe{constructor(e){super(),Qe(this,e,Fu,qu,Ke,{position:0})}}function vl(s){let e,t,i,r,a,o=s[1]==!1&&ml(s),n=s[0]==Te.UTurn&&bl(),l=s[0]==Te.Onward&&wl();return{c(){e=_("div"),o&&o.c(),t=k(),n&&n.c(),i=k(),l&&l.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);o&&o.l(h),t=I(h),n&&n.l(h),i=I(h),l&&l.l(h),h.forEach(g),this.h()},h(){f(e,"class","prompt-main svelte-1bwut3z")},m(d,h){P(d,e,h),o&&o.m(e,null),c(e,t),n&&n.m(e,null),c(e,i),l&&l.m(e,null),a=!0},p(d,h){d[1]==!1?o?o.p(d,h):(o=ml(d),o.c(),o.m(e,t)):o&&(o.d(1),o=null),d[0]==Te.UTurn?n||(n=bl(),n.c(),n.m(e,i)):n&&(n.d(1),n=null),d[0]==Te.Onward?l||(l=wl(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(d){a||(d&&Ci(()=>{a&&(r||(r=ei(e,Tt,{duration:500},!0)),r.run(1))}),a=!0)},o(d){d&&(r||(r=ei(e,Tt,{duration:500},!1)),r.run(0)),a=!1},d(d){d&&g(e),o&&o.d(),n&&n.d(),l&&l.d(),d&&r&&r.end()}}}function ml(s){let e,t,i,r=s[0]==Te.Intro&&gl(s),a=s[0]==Te.Reset&&pl(),o=s[0]==Te.Boost&&_l();return{c(){r&&r.c(),e=k(),a&&a.c(),t=k(),o&&o.c(),i=De()},l(n){r&&r.l(n),e=I(n),a&&a.l(n),t=I(n),o&&o.l(n),i=De()},m(n,l){r&&r.m(n,l),P(n,e,l),a&&a.m(n,l),P(n,t,l),o&&o.m(n,l),P(n,i,l)},p(n,l){n[0]==Te.Intro?r||(r=gl(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),n[0]==Te.Reset?a||(a=pl(),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),n[0]==Te.Boost?o||(o=_l(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(n){n&&(g(e),g(t),g(i)),r&&r.d(n),a&&a.d(n),o&&o.d(n)}}}function gl(s){let e,t,i='<div class="prompt-intro-key-group svelte-1bwut3z" style="margin-top: -5.5rem; margin-bottom: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">W</div></div> <div class="prompt-intro-key-group svelte-1bwut3z" style="gap: 0.2rem"><div class="prompt-indicator prompt-key svelte-1bwut3z">A</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">S</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">D</div></div> <div class="prompt-label svelte-1bwut3z">Drive</div>',r,a,o,n='<div class="prompt-intro-key-group svelte-1bwut3z"><div class="prompt-indicator prompt-key svelte-1bwut3z">Q</div> <div class="prompt-indicator prompt-key svelte-1bwut3z">E</div></div> <div class="prompt-label svelte-1bwut3z">Change scene</div>';function l(u,m){return Bu}let h=l()(s);return{c(){e=_("div"),t=_("div"),t.innerHTML=i,r=k(),h.c(),a=k(),o=_("div"),o.innerHTML=n,this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1bhx1mg"&&(t.innerHTML=i),r=I(m),h.l(m),a=I(m),o=b(m,"DIV",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-ipq03a"&&(o.innerHTML=n),m.forEach(g),this.h()},h(){f(t,"class","prompt-intro-group svelte-1bwut3z"),f(o,"class","prompt-intro-group svelte-1bwut3z"),f(e,"class","prompt-intro svelte-1bwut3z")},m(u,m){P(u,e,m),c(e,t),c(e,r),h.m(e,null),c(e,a),c(e,o)},d(u){u&&g(e),h.d()}}}function Bu(s){let e,t='<div class="prompt-indicator prompt-key svelte-1bwut3z">F</div> <div class="prompt-label svelte-1bwut3z">Autodrive</div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-14wluom"&&(e.innerHTML=t),this.h()},h(){f(e,"class","prompt-intro-group svelte-1bwut3z")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function pl(s){let e,t="R",i,r,a="Return to the road";return{c(){e=_("div"),e.textContent=t,i=k(),r=_("div"),r.textContent=a,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-10ltmgr"&&(e.textContent=t),i=I(o),r=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-191j6e8"&&(r.textContent=a),this.h()},h(){f(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),f(r,"class","prompt-label svelte-1bwut3z")},m(o,n){P(o,e,n),P(o,i,n),P(o,r,n)},d(o){o&&(g(e),g(i),g(r))}}}function _l(s){let e,t="Shift",i,r,a="Hold to boost";return{c(){e=_("div"),e.textContent=t,i=k(),r=_("div"),r.textContent=a,this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-1io7xvc"&&(e.textContent=t),i=I(o),r=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-x75hd1"&&(r.textContent=a),this.h()},h(){f(e,"class","prompt-indicator prompt-key svelte-1bwut3z"),ae(e,"max-width","100%"),f(r,"class","prompt-label svelte-1bwut3z")},m(o,n){P(o,e,n),P(o,i,n),P(o,r,n)},d(o){o&&(g(e),g(i),g(r))}}}function bl(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="./ico_uturn.svg"/>',i,r,a="Turn back";return{c(){e=_("div"),e.innerHTML=t,i=k(),r=_("div"),r.textContent=a,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1d3i2xq"&&(e.innerHTML=t),i=I(o),r=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-138exdi"&&(r.textContent=a),this.h()},h(){f(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),f(r,"class","prompt-label svelte-1bwut3z")},m(o,n){P(o,e,n),P(o,i,n),P(o,r,n)},d(o){o&&(g(e),g(i),g(r))}}}function wl(s){let e,t='<img class="prompt-icon-img svelte-1bwut3z" alt="" src="./ico_onwards.svg"/>',i,r,a="Ever onward";return{c(){e=_("div"),e.innerHTML=t,i=k(),r=_("div"),r.textContent=a,this.h()},l(o){e=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1jx2teq"&&(e.innerHTML=t),i=I(o),r=b(o,"DIV",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-miq92b"&&(r.textContent=a),this.h()},h(){f(e,"class","prompt-indicator prompt-icon svelte-1bwut3z"),f(r,"class","prompt-label svelte-1bwut3z")},m(o,n){P(o,e,n),P(o,i,n),P(o,r,n)},d(o){o&&(g(e),g(i),g(r))}}}function Wu(s){let e,t=s[0]>Te.None&&vl(s);return{c(){t&&t.c(),e=De()},l(i){t&&t.l(i),e=De()},m(i,r){t&&t.m(i,r),P(i,e,r)},p(i,[r]){i[0]>Te.None?t?(t.p(i,r),r&1&&j(t,1)):(t=vl(i),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(qe(),ie(t,1,1,()=>{t=null}),Fe())},i(i){j(t)},o(i){ie(t)},d(i){i&&g(e),t&&t.d(i)}}}function ju(s,e,t){let i;Ce(s,ti,a=>t(1,i=a));let r=Te.None;return nt(()=>{function a(o){t(0,r=o)}return tt.addListener(a),()=>{tt.removeListener(a)}}),[r,i]}class Yu extends Xe{constructor(e){super(),Qe(this,e,ju,Wu,Ke,{})}}function Ku(s){let e,t=`<br class="svelte-nq8k2y"/>
                        The live event has now ended and leaderboards are disabled.<br class="svelte-nq8k2y"/><br class="svelte-nq8k2y"/>
                        Join the Discord server to be notified of the next one!`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1r85705"&&(e.innerHTML=t),this.h()},h(){f(e,"class","splash-minititle svelte-nq8k2y")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function yl(s){let e,t,i;return{c(){e=_("div"),t=k(),i=_("div"),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=I(r),i=b(r,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-nq8k2y"),f(i,"id","splash-bg"),f(i,"class","svelte-nq8k2y")},m(r,a){P(r,e,a),P(r,t,a),P(r,i,a)},d(r){r&&(g(e),g(t),g(i))}}}function Xu(s){let e,t,i,r,a,o,n,l,d,h,u="Driftmas 2025",m,p,v,w=s[6]?"continue":"begin",y,D,L,E,A,T,x,Y,X,O,$="CC BY-NC-ND 4.0 International License",Z,U,B='from <a class="splash-smallprint-link svelte-nq8k2y" href="https://topograph.io" target="_blank" rel="noopener noreferrer">topograph.io</a> © 2025',V,z,M=`<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TNf9bBrZmR" alt="" class="splash-main-button svelte-nq8k2y"><img src="./icon_discord_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Join the Discord</a> <a href="#about" class="splash-main-button svelte-nq8k2y" style="padding-top: 2rem;"><span style="font-size: 1.5rem" class="svelte-nq8k2y">Rules &amp; Prizes</span> <br class="svelte-nq8k2y"/> <span style="font-size: 2rem" class="svelte-nq8k2y">▾</span></a> <a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/3431300/Slow_Roads/" alt="" class="splash-main-button svelte-nq8k2y"><img src="./icon_steam_white.svg" alt="" class="splash-main-button-icon svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                    Wishlist on Steam</a>`,N,G,se=`<div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black);"><div class="splash-body-wrapper svelte-nq8k2y" style="margin: 5rem 0"><div class="splash-blurb-corner-tl svelte-nq8k2y"></div> <div class="splash-blurb-corner-tr svelte-nq8k2y"></div> <div class="splash-blurb svelte-nq8k2y"><strong class="svelte-nq8k2y">Driftmas</strong> is the annual Slow Roads winter rally event. Compete to set the fastest time on the extra-slippery 5km track for a chance to win prizes and immortalisation in the game!</div> <div class="splash-blurb-corner-bl svelte-nq8k2y"></div> <div class="splash-blurb-corner-br svelte-nq8k2y"></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">The event is now over!</div> <div class="splash-body-text svelte-nq8k2y">Congratulations to the winners! This year&#39;s event was by far the biggest, with <strong class="svelte-nq8k2y">over 3,800</strong> taking part, completing <strong class="svelte-nq8k2y">over 8,500</strong> runs, and making <strong class="svelte-nq8k2y">over 75,000</strong> attempts. Thanks to all for taking part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        The server will remain active for the rest of January, at which point this page will be retired to an offline version.
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        More community events are planned for the future - make sure you join the Discord server to be notified and take part!
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                        You can try the previous events here:
                        <br class="svelte-nq8k2y"/> <br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas24.slowroads.io">Driftmas 2024</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas23.slowroads.io">Driftmas 2023</a><br class="svelte-nq8k2y"/>
                         - <a class="splash-body-link svelte-nq8k2y" href="https://driftmas22.slowroads.io">Driftmas 2022</a><br class="svelte-nq8k2y"/></div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black)"><div class="splash-body-wrapper svelte-nq8k2y" style="text-align: center; font-size: 1.1rem;"><div class="splash-body-header svelte-nq8k2y">Champions</div> <div class="splash-two-cols svelte-nq8k2y"><div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">GAMEPAD</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">NIIOH</span><br class="svelte-nq8k2y"/>03:23:946</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">meehdrescherstudios</span><br class="svelte-nq8k2y"/>03:25:640</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">mattsg</span><br class="svelte-nq8k2y"/>03:27:633</span></div></div> <div class="splash-col svelte-nq8k2y"><div class="splash-body-text lb-header svelte-nq8k2y">KEYBOARD + MOUSE</div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #f5d442">- 1st Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">drift__</span><br class="svelte-nq8k2y"/>03:25:274</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #cdd1d4">- 2nd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">AccountableMenace</span><br class="svelte-nq8k2y"/>03:27:321</span></div> <div class="splash-body-text svelte-nq8k2y"><div class="splash-prize svelte-nq8k2y" style="color: #e37c2d">- 3rd Place -</div> <span class="lb-time svelte-nq8k2y"><span class="lb-name svelte-nq8k2y">Ena</span><br class="svelte-nq8k2y"/>03:28:909</span></div></div></div> <br class="svelte-nq8k2y"/> <div class="splash-body-text svelte-nq8k2y" style="font-style: italic; font-size: 0.9rem;">Champions receive Discord Nitro and the top 20 receive keys for the Steam release of Slow Roads!</div></div></div> <div class="splash-body-section svelte-nq8k2y" style="background: var(--sr-black-50)"><div class="splash-body-wrapper svelte-nq8k2y"><div class="splash-body-header svelte-nq8k2y">Tips &amp; Tricks</div> <div class="splash-body-bullets svelte-nq8k2y"><div class="splash-body-bullet svelte-nq8k2y">Deep snow will drag your wheels - try to stay central in the road and avoid berms</div> <div class="splash-body-bullet svelte-nq8k2y">Try to drive slowly and steadily to minimise crashes</div> <div class="splash-body-bullet svelte-nq8k2y">Avoid braking while turning - brake early and accelerate through the corner</div> <div class="splash-body-bullet svelte-nq8k2y">Tap the handbrake to kick the rear out into a turn</div> <div class="splash-body-bullet svelte-nq8k2y">Combine the handbrake with regular braking to slow more quickly</div> <div class="splash-body-bullet svelte-nq8k2y">Braking early and steering around a corner is usually faster than skidding</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget you can tweak control settings to your liking</div> <div class="splash-body-bullet svelte-nq8k2y">Don&#39;t forget there is a boost button</div> <div class="splash-body-bullet svelte-nq8k2y">If you make a mistake, complete the run anyway; the best practice is through repetition of the whole route</div> <div class="splash-body-bullet svelte-nq8k2y">If you keep crashing, focus on completing entire runs slowly and carefully before gradually increasing speed</div> <div class="splash-body-bullet svelte-nq8k2y">Different camera angles or settings may feel easier to control - try a few alternatives</div> <div class="splash-body-bullet svelte-nq8k2y">Different weathers do not have different physics conditions but can affect visibility - see which you prefer (use Q and E to switch)</div> <div class="splash-body-bullet svelte-nq8k2y">Bored of the normal route? Add #samtfird to the end of the URL and refresh the page for an inverted route. You can also try #nosnow or #allsnow.</div></div></div></div>`,oe,le,pe,we,me=Ku(),Q=!s[6]&&yl();return{c(){e=_("div"),t=_("div"),i=_("div"),r=_("canvas"),a=k(),o=_("div"),n=_("img"),d=k(),h=_("div"),h.textContent=u,m=k(),p=k(),v=_("div"),y=ee(w),D=k(),me&&me.c(),L=k(),E=_("div"),A=_("span"),T=ee(Qt),x=k(),Y=_("br"),X=ee(`\r
                This work is licensed under a `),O=_("a"),O.textContent=$,Z=k(),U=_("div"),U.innerHTML=B,V=k(),z=_("div"),z.innerHTML=M,N=k(),G=_("div"),G.innerHTML=se,oe=k(),Q&&Q.c(),this.h()},l(re){e=b(re,"DIV",{id:!0,class:!0});var ce=C(e);t=b(ce,"DIV",{id:!0,class:!0});var K=C(t);i=b(K,"DIV",{id:!0,class:!0});var de=C(i);r=b(de,"CANVAS",{id:!0,class:!0}),C(r).forEach(g),a=I(de),o=b(de,"DIV",{id:!0,class:!0});var J=C(o);n=b(J,"IMG",{class:!0,src:!0,alt:!0}),d=I(J),h=b(J,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-fudtz6"&&(h.textContent=u),m=I(J),p=I(J),v=b(J,"DIV",{id:!0,class:!0});var ge=C(v);y=te(ge,w),ge.forEach(g),D=I(J),me&&me.l(J),J.forEach(g),L=I(de),E=b(de,"DIV",{class:!0});var Ee=C(E);A=b(Ee,"SPAN",{class:!0});var ze=C(A);T=te(ze,Qt),ze.forEach(g),x=I(Ee),Y=b(Ee,"BR",{class:!0}),X=te(Ee,`\r
                This work is licensed under a `),O=b(Ee,"A",{rel:!0,class:!0,href:!0,target:!0,"data-svelte-h":!0}),W(O)!=="svelte-u8p6bq"&&(O.textContent=$),Ee.forEach(g),Z=I(de),U=b(de,"DIV",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-1078k7q"&&(U.innerHTML=B),V=I(de),z=b(de,"DIV",{class:!0,"data-svelte-h":!0}),W(z)!=="svelte-k9wub"&&(z.innerHTML=M),de.forEach(g),N=I(K),G=b(K,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(G)!=="svelte-1cn4vpt"&&(G.innerHTML=se),oe=I(K),Q&&Q.l(K),K.forEach(g),ce.forEach(g),this.h()},h(){f(r,"id","splash-canvas"),f(r,"class","svelte-nq8k2y"),f(n,"class","splash-logo svelte-nq8k2y"),At(n.src,l="./logo-stacked-white.svg")||f(n,"src",l),f(n,"alt",""),f(h,"class","splash-subtitle svelte-nq8k2y"),f(v,"id","splash-begin"),f(v,"class","svelte-nq8k2y"),R(v,"dm-disabled",!s[4]),f(o,"id","splash-title"),f(o,"class","svelte-nq8k2y"),f(A,"class","splash-smallprint-link svelte-nq8k2y"),f(Y,"class","svelte-nq8k2y"),f(O,"rel","license noopener noreferrer"),f(O,"class","splash-smallprint-link svelte-nq8k2y"),f(O,"href","http://creativecommons.org/licenses/by-nc-nd/4.0/"),f(O,"target","_blank"),f(E,"class","splash-smallprint splash-lr svelte-nq8k2y"),f(U,"class","splash-smallprint splash-ll svelte-nq8k2y"),f(z,"class","splash-main-buttons svelte-nq8k2y"),f(i,"id","splash-main"),f(i,"class","svelte-nq8k2y"),f(G,"id","about"),f(G,"class","svelte-nq8k2y"),f(t,"id",le=s[5]?"splash-dynamic":"splash-fixed"),f(t,"class","svelte-nq8k2y"),f(e,"id","splash"),f(e,"class","svelte-nq8k2y")},m(re,ce){P(re,e,ce),c(e,t),c(t,i),c(i,r),s[7](r),c(i,a),c(i,o),c(o,n),c(o,d),c(o,h),c(o,m),c(o,p),c(o,v),c(v,y),s[9](v),c(o,D),me&&me.m(o,null),c(i,L),c(i,E),c(E,A),c(A,T),c(E,x),c(E,Y),c(E,X),c(E,O),c(i,Z),c(i,U),c(i,V),c(i,z),c(t,N),c(t,G),c(t,oe),Q&&Q.m(t,null),pe||(we=[F(v,"touchstart",s[10],{passive:!0}),F(v,"click",s[11])],pe=!0)},p(re,[ce]){ce&64&&w!==(w=re[6]?"continue":"begin")&&be(y,w),ce&16&&R(v,"dm-disabled",!re[4]),re[6]?Q&&(Q.d(1),Q=null):Q||(Q=yl(),Q.c(),Q.m(t,null)),ce&32&&le!==(le=re[5]?"splash-dynamic":"splash-fixed")&&f(t,"id",le)},i:ve,o:ve,d(re){re&&g(e),s[7](null),s[9](null),me&&me.d(),Q&&Q.d(),pe=!1,at(we)}}}function Qu(s,e,t){let i,r;Ce(s,ti,D=>t(5,i=D)),Ce(s,Ts,D=>t(6,r=D));let{toggleSplash:a=()=>{}}=e,o,n="Player",l,d=!0;function h(D){D.code=="Enter"&&o.click()}let u;nt(()=>{window.addEventListener("keydown",h),t(3,l.width=window.innerWidth,l),t(3,l.height=window.innerHeight,l);let D=window.innerWidth,L=window.innerHeight;u=l.getContext("2d"),u.globalAlpha=.8,u.globalCompositeOperation="lighter",u.fillStyle="white";const E=()=>{t(3,l.width=window.innerWidth,l),t(3,l.height=window.innerHeight,l),D=window.innerWidth,L=window.innerHeight};window.addEventListener("resize",E);let A=[],T=.5,x=.04+T*.06,Y=.1+T*.3;for(let Z=0;Z<20+T*230;Z++)A.push({x:Math.random()*D,y:Math.random()*L,s:.5+Math.random()*4,t:Math.random()*Math.PI});let X=Date.now(),O;const $=()=>{if(!l)return;O=requestAnimationFrame(()=>$());let Z=Date.now()-X;X=Date.now(),u.clearRect(0,0,l.width,l.height);for(let U of A)U.y+=Z*U.s*x,U.x+=Z*U.s*Math.sin(U.t*U.s)*(Y/10)+Z*Y,U.t+=Z*.001,U.y>l.height&&(U.y-=l.height),U.x>l.width&&(U.x-=l.width),u.fillStyle="#fffb",u.beginPath(),u.arc(U.x,U.y,U.s,0,Math.PI*2),u.fill()};return $(),()=>{window.removeEventListener("keydown",h),cancelAnimationFrame(O),window.removeEventListener("resize",E)}});function m(D){St[D?"unshift":"push"](()=>{l=D,t(3,l)})}function p(){n=this.value,t(1,n)}function v(D){St[D?"unshift":"push"](()=>{o=D,t(2,o)})}const w=()=>{ne.set("touchscreen",!0)},y=()=>{d&&a()};return s.$$set=D=>{"toggleSplash"in D&&t(0,a=D.toggleSplash)},s.$$.update=()=>{s.$$.dirty&2&&(t(4,d=(n==null?void 0:n.length)>1),Nd.set("username",n),localStorage.setItem("username",n))},[a,n,o,l,d,i,r,m,p,v,w,y]}class Zu extends Xe{constructor(e){super(),Qe(this,e,Qu,Xu,Ke,{toggleSplash:0})}}function Sl(s,e,t){const i=s.slice();return i[13]=e[t],i}function Dl(s){let e,t="Progress is saved automatically";return{c(){e=_("span"),e.textContent=t,this.h()},l(i){e=b(i,"SPAN",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-f6s17h"&&(e.textContent=t),this.h()},h(){f(e,"class","splash-quit-msg svelte-bt03iy")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function Ll(s){let e,t="Failed to initialise - please ensure your system supports WebGL2";return{c(){e=_("div"),e.textContent=t,this.h()},l(i){e=b(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(e)!=="svelte-jv3955"&&(e.textContent=t),this.h()},h(){f(e,"id","splash-error"),f(e,"class","svelte-bt03iy")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function Ju(s){let e,t,i,r,a,o,n,l,d,h,u="See full details",m,p,v=Oe(s[3]),w=[];for(let y=0;y<v.length;y+=1)w[y]=Cl(Sl(s,v,y));return{c(){e=_("div"),t=ee("New version - "),i=ee(Qt),r=k(),a=_("hr"),o=k();for(let y=0;y<w.length;y+=1)w[y].c();n=k(),l=_("hr"),d=k(),h=_("div"),h.textContent=u,this.h()},l(y){e=b(y,"DIV",{class:!0});var D=C(e);t=te(D,"New version - "),i=te(D,Qt),r=I(D),a=b(D,"HR",{class:!0}),o=I(D);for(let L=0;L<w.length;L+=1)w[L].l(D);n=I(D),l=b(D,"HR",{class:!0}),d=I(D),h=b(D,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-5v1n0f"&&(h.textContent=u),D.forEach(g),this.h()},h(){f(a,"class","svelte-bt03iy"),f(l,"class","svelte-bt03iy"),f(h,"class","splash-version-see-more svelte-bt03iy"),f(e,"class","splash-new-version svelte-bt03iy")},m(y,D){P(y,e,D),c(e,t),c(e,i),c(e,r),c(e,a),c(e,o);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(e,null);c(e,n),c(e,l),c(e,d),c(e,h),m||(p=F(h,"click",s[8]),m=!0)},p(y,D){if(D&8){v=Oe(y[3]);let L;for(L=0;L<v.length;L+=1){const E=Sl(y,v,L);w[L]?w[L].p(E,D):(w[L]=Cl(E),w[L].c(),w[L].m(e,n))}for(;L<w.length;L+=1)w[L].d(1);w.length=v.length}},d(y){y&&g(e),bt(w,y),m=!1,p()}}}function Cl(s){let e,t=s[13]+"",i;return{c(){e=_("div"),i=ee(t),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=C(e);i=te(a,t),a.forEach(g),this.h()},h(){f(e,"class","splash-version-change svelte-bt03iy")},m(r,a){P(r,e,a),c(e,i)},p(r,a){a&8&&t!==(t=r[13]+"")&&be(i,t)},d(r){r&&g(e)}}}function $u(s){let e,t;return e=new An({props:{showChangelog:s[2],onShowChangelog:s[9]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r&4&&(a.showChangelog=i[2]),r&4&&(a.onShowChangelog=i[9]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function ev(s){let e,t,i=`<img src="./icon_discord.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Join the Discord`,r,a,o=`<img src="./icon_steam.svg" alt="" class="splash-main-button-icon svelte-bt03iy"/> <br/>
                    Wishlist the Steam edition`,n,l;return{c(){e=_("div"),t=_("div"),t.innerHTML=i,r=k(),a=_("div"),a.innerHTML=o,this.h()},l(d){e=b(d,"DIV",{class:!0});var h=C(e);t=b(h,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-x64jut"&&(t.innerHTML=i),r=I(h),a=b(h,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-3mnzb7"&&(a.innerHTML=o),h.forEach(g),this.h()},h(){f(t,"class","splash-main-button svelte-bt03iy"),f(a,"class","splash-main-button svelte-bt03iy"),f(e,"class","splash-main-buttons svelte-bt03iy")},m(d,h){P(d,e,h),c(e,t),c(e,r),c(e,a),n||(l=[F(t,"click",s[10]),F(a,"click",s[11])],n=!0)},p:ve,d(d){d&&g(e),n=!1,at(l)}}}function kl(s){let e,t,i;return{c(){e=_("div"),t=k(),i=_("div"),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0}),C(e).forEach(g),t=I(r),i=b(r,"DIV",{id:!0,class:!0}),C(i).forEach(g),this.h()},h(){f(e,"id","splash-bg-overlay"),f(e,"class","svelte-bt03iy"),f(i,"id","splash-bg"),f(i,"class","svelte-bt03iy")},m(r,a){P(r,e,a),P(r,t,a),P(r,i,a)},d(r){r&&(g(e),g(t),g(i))}}}function tv(s){let e,t,i,r,a,o,n,l,d="web edition",h,u,m,p=s[4]?"continue":"begin",v,w,y,D="quit",L,E,A,T,x,Y,X,O,$,Z,U,B=`from <strong>topograph.io</strong> © 2026 	
                <span style="margin: 0 0.5rem;">·</span>
                All rights reserved`,V,z,M,N,G,se=s[4]&&Dl(),oe=s[1]&&Ll(),le=!Kt&&Ri&&Ju(s),pe=!Kt&&$u(s),we=!Kt&&ev(s),me=!s[4]&&kl();return{c(){e=_("div"),t=_("div"),i=_("div"),r=_("div"),a=_("img"),n=k(),l=_("div"),l.textContent=d,h=k(),u=_("div"),m=_("div"),v=ee(p),w=k(),y=_("div"),y.textContent=D,L=k(),se&&se.c(),E=k(),oe&&oe.c(),A=k(),T=_("div"),x=_("span"),Y=ee("Version "),X=ee(Qt),O=k(),le&&le.c(),$=k(),pe&&pe.c(),Z=k(),U=_("div"),U.innerHTML=B,V=k(),we&&we.c(),z=k(),me&&me.c(),this.h()},l(Q){e=b(Q,"DIV",{id:!0,class:!0});var re=C(e);t=b(re,"DIV",{id:!0,class:!0});var ce=C(t);i=b(ce,"DIV",{id:!0,class:!0});var K=C(i);r=b(K,"DIV",{id:!0,class:!0});var de=C(r);a=b(de,"IMG",{class:!0,src:!0,alt:!0}),n=I(de),l=b(de,"DIV",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-szn3l"&&(l.textContent=d),h=I(de),u=b(de,"DIV",{class:!0});var J=C(u);m=b(J,"DIV",{class:!0});var ge=C(m);v=te(ge,p),ge.forEach(g),w=I(J),y=b(J,"DIV",{class:!0,"data-svelte-h":!0}),W(y)!=="svelte-1i9wxa8"&&(y.textContent=D),L=I(J),se&&se.l(J),E=I(J),oe&&oe.l(J),J.forEach(g),de.forEach(g),A=I(K),T=b(K,"DIV",{class:!0});var Ee=C(T);x=b(Ee,"SPAN",{class:!0,tabindex:!0});var ze=C(x);Y=te(ze,"Version "),X=te(ze,Qt),ze.forEach(g),Ee.forEach(g),O=I(K),le&&le.l(K),$=I(K),pe&&pe.l(K),Z=I(K),U=b(K,"DIV",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-1p526yl"&&(U.innerHTML=B),V=I(K),we&&we.l(K),K.forEach(g),z=I(ce),me&&me.l(ce),ce.forEach(g),re.forEach(g),this.h()},h(){f(a,"class","splash-logo svelte-bt03iy"),At(a.src,o="./logo-stacked.svg")||f(a,"src",o),f(a,"alt",""),f(l,"class","splash-subtitle svelte-bt03iy"),f(m,"class","splash-btn svelte-bt03iy"),f(y,"class","splash-btn splash-btn-outline svelte-bt03iy"),f(u,"class","splash-btns svelte-bt03iy"),f(r,"id","splash-title"),f(r,"class","svelte-bt03iy"),f(x,"class","splash-smallprint-link svelte-bt03iy"),f(x,"tabindex",-1),f(T,"class","splash-smallprint splash-lr svelte-bt03iy"),f(U,"class","splash-smallprint splash-ll svelte-bt03iy"),f(i,"id","splash-main"),f(i,"class","svelte-bt03iy"),f(t,"id","splash-fixed"),f(t,"class","svelte-bt03iy"),f(e,"id","splash"),f(e,"class","svelte-bt03iy")},m(Q,re){P(Q,e,re),c(e,t),c(t,i),c(i,r),c(r,a),c(r,n),c(r,l),c(r,h),c(r,u),c(u,m),c(m,v),c(u,w),c(u,y),c(u,L),se&&se.m(u,null),c(u,E),oe&&oe.m(u,null),c(i,A),c(i,T),c(T,x),c(x,Y),c(x,X),c(i,O),le&&le.m(i,null),c(i,$),pe&&pe.m(i,null),c(i,Z),c(i,U),c(i,V),we&&we.m(i,null),c(t,z),me&&me.m(t,null),M=!0,N||(G=[F(m,"click",function(){zr(s[0])&&s[0].apply(this,arguments)}),F(y,"click",s[5]),F(x,"click",s[7])],N=!0)},p(Q,[re]){s=Q,(!M||re&16)&&p!==(p=s[4]?"continue":"begin")&&be(v,p),s[4]?se||(se=Dl(),se.c(),se.m(u,E)):se&&(se.d(1),se=null),s[1]?oe||(oe=Ll(),oe.c(),oe.m(u,null)):oe&&(oe.d(1),oe=null),!Kt&&Ri&&le.p(s,re),Kt||pe.p(s,re),Kt||we.p(s,re),s[4]?me&&(me.d(1),me=null):me||(me=kl(),me.c(),me.m(t,null))},i(Q){M||(j(pe),M=!0)},o(Q){ie(pe),M=!1},d(Q){Q&&g(e),se&&se.d(),oe&&oe.d(),le&&le.d(),pe&&pe.d(),we&&we.d(),me&&me.d(),N=!1,at(G)}}}function iv(s,e,t){let i;Ce(s,Ts,y=>t(4,i=y));let{toggleSplash:r=()=>{}}=e,{webglError:a=!1}=e;const o=()=>{window.api?(console.log("Quitting"),window.api.quit()):console.log("No API to quit! Please press Ctrl+W to exit")};let n=!1,l=[],d=Ri&&Xs[2]==Qt[2];for(let y of $r)if(mn(y.version,Xs)>0)y.quickChanges&&(Qt[4]==0||d)&&l.push(...y.quickChanges);else break;l.length>12&&(l=l.slice(0,12)),nt(()=>{const y=D=>{D.code=="Enter"&&r()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}});const h=y=>{window.api&&window.api.openExternal(y)},u=()=>t(2,n=!n),m=()=>t(2,n=!n),p=y=>t(2,n=y),v=()=>h("https://discord.gg/TNf9bBrZmR"),w=()=>h("https://store.steampowered.com/app/3431300/Slow_Roads/");return s.$$set=y=>{"toggleSplash"in y&&t(0,r=y.toggleSplash),"webglError"in y&&t(1,a=y.webglError)},[r,a,n,l,i,o,h,u,m,p,v,w]}class sv extends Xe{constructor(e){super(),Qe(this,e,iv,tv,Ke,{toggleSplash:0,webglError:1})}}function Il(s){let e,t,i,r,a;return{c(){e=_("div"),t=_("div"),i=_("div"),r=k(),a=_("div"),this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0});var n=C(e);t=b(n,"DIV",{class:!0,style:!0});var l=C(t);i=b(l,"DIV",{class:!0}),C(i).forEach(g),l.forEach(g),r=I(n),a=b(n,"DIV",{class:!0}),C(a).forEach(g),n.forEach(g),this.h()},h(){f(i,"class","ui-mouse-marker svelte-1mw879"),f(t,"class","ui-mouse-marker-container svelte-1mw879"),ae(t,"transform","translateX("+s[1]+"%)"),f(a,"class","ui-mouse-center svelte-1mw879"),f(e,"class","ui-mouse svelte-1mw879"),ae(e,"width",s[0]*100+"%")},m(o,n){P(o,e,n),c(e,t),c(t,i),c(e,r),c(e,a)},p(o,n){n&2&&ae(t,"transform","translateX("+o[1]+"%)"),n&1&&ae(e,"width",o[0]*100+"%")},d(o){o&&g(e)}}}function rv(s){let e,t,i="RESET",r,a,o=s[2]&&!s[3]&&Il(s);return{c(){o&&o.c(),e=k(),t=_("div"),t.textContent=i,this.h()},l(n){o&&o.l(n),e=I(n),t=b(n,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-xx5os6"&&(t.textContent=i),this.h()},h(){f(t,"class","ui-mouse-reset svelte-1mw879"),R(t,"ui-mouse-reset-interior",s[3])},m(n,l){o&&o.m(n,l),P(n,e,l),P(n,t,l),r||(a=F(t,"click",s[4]),r=!0)},p(n,[l]){n[2]&&!n[3]?o?o.p(n,l):(o=Il(n),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),l&8&&R(t,"ui-mouse-reset-interior",n[3])},i:ve,o:ve,d(n){n&&(g(e),g(t)),o&&o.d(n),r=!1,a()}}}function ov(s,e,t){let i;Ce(s,_n,u=>t(3,i=u));let r=0;function a(u){t(0,r=u)}let o=0;function n(u){t(1,o=100-(u+1)/2*100)}let l=!1;function d(u){t(2,l=u)}return nt(()=>(rt.addListener("steerBarWidth",a),rt.addListener("currentSteer",n),rt.addListener("showSteerIndicator",d),()=>{rt.removeListener("steerBarWidth",a),rt.removeListener("currentSteer",n),rt.removeListener("showSteerIndicator",d)})),[r,o,l,i,()=>_e.resetByMouse()]}class av extends Xe{constructor(e){super(),Qe(this,e,ov,rv,Ke,{})}}function Ml(s){let e,t="<",i,r;return{c(){e=_("div"),e.textContent=t,this.h()},l(a){e=b(a,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-140lecd"&&(e.textContent=t),this.h()},h(){f(e,"class","dash-autodrive-mode-arrow svelte-itei5"),ae(e,"left","-0.5rem")},m(a,o){P(a,e,o),i||(r=F(e,"click",s[6]),i=!0)},p:ve,d(a){a&&g(e),i=!1,r()}}}function El(s){let e,t=">",i,r;return{c(){e=_("div"),e.textContent=t,this.h()},l(a){e=b(a,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-1dqn5zw"&&(e.textContent=t),this.h()},h(){f(e,"class","dash-autodrive-mode-arrow svelte-itei5"),ae(e,"right","-0.5rem")},m(a,o){P(a,e,o),i||(r=F(e,"click",s[7]),i=!0)},p:ve,d(a){a&&g(e),i=!1,r()}}}function lv(s){let e,t,i,r,a,o,n,l,d,h,u,m=s[2]&&s[0]&&Ml(s),p=s[2]&&s[0]&&El(s);return{c(){e=_("div"),m&&m.c(),t=k(),i=_("div"),r=k(),a=_("div"),o=ee(s[1]),n=k(),l=_("div"),d=k(),p&&p.c(),this.h()},l(v){e=b(v,"DIV",{id:!0,class:!0});var w=C(e);m&&m.l(w),t=I(w),i=b(w,"DIV",{class:!0,style:!0}),C(i).forEach(g),r=I(w),a=b(w,"DIV",{class:!0});var y=C(a);o=te(y,s[1]),y.forEach(g),n=I(w),l=b(w,"DIV",{class:!0,style:!0}),C(l).forEach(g),d=I(w),p&&p.l(w),w.forEach(g),this.h()},h(){f(i,"class","dash-autodrive-bracket svelte-itei5"),ae(i,"border-right","none"),R(i,"dash-autodrive-bracket-active",s[0]),f(a,"class","dash-autodrive-text svelte-itei5"),f(l,"class","dash-autodrive-bracket svelte-itei5"),ae(l,"border-left","none"),R(l,"dash-autodrive-bracket-active",s[0]),f(e,"id","dash-autodrive"),f(e,"class","svelte-itei5"),R(e,"dash-autodrive-active",s[0])},m(v,w){P(v,e,w),m&&m.m(e,null),c(e,t),c(e,i),c(e,r),c(e,a),c(a,o),c(e,n),c(e,l),c(e,d),p&&p.m(e,null),h||(u=[F(e,"click",s[8]),F(e,"mouseenter",s[3]),F(e,"mouseleave",s[4])],h=!0)},p(v,[w]){v[2]&&v[0]?m?m.p(v,w):(m=Ml(v),m.c(),m.m(e,t)):m&&(m.d(1),m=null),w&1&&R(i,"dash-autodrive-bracket-active",v[0]),w&2&&be(o,v[1]),w&1&&R(l,"dash-autodrive-bracket-active",v[0]),v[2]&&v[0]?p?p.p(v,w):(p=El(v),p.c(),p.m(e,null)):p&&(p.d(1),p=null),w&1&&R(e,"dash-autodrive-active",v[0])},i:ve,o:ve,d(v){v&&g(e),m&&m.d(),p&&p.d(),h=!1,at(u)}}}function nv(s,e,t){let i=!1,r="AUTODRIVE",a=!1;function o(v){t(0,i=v)}function n(v){v==$i.FULL?t(1,r="AUTODRIVE"):v==$i.SPEED?t(1,r="AUTOSPEED"):v==$i.STEER&&t(1,r="AUTOSTEER")}function l(){t(2,a=!0)}function d(){t(2,a=!1)}function h(v){let y=ne.autodriveMode+v;y<0?y=2:y>2&&(y=0),ne.set("autodriveMode",y)}return nt(()=>(qt.addListener(o),ne.addListener("autodriveMode",n),()=>{qt.removeListener(o),ne.removeListener("autodriveMode",n)})),[i,r,a,l,d,h,v=>{v.preventDefault(),v.stopPropagation(),h(-1)},v=>{v.preventDefault(),v.stopPropagation(),h(1)},()=>qt.set(!i)]}class xn extends Xe{constructor(e){super(),Qe(this,e,nv,lv,Ke,{})}}function Al(s){let e,t,i,r;const a=[hv,cv,dv],o=[];function n(l,d){return 2}return e=n(),t=o[e]=a[e](s),{c(){t.c(),i=De()},l(l){t.l(l),i=De()},m(l,d){o[e].m(l,d),P(l,i,d),r=!0},p(l,d){t.p(l,d)},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),o[e].d(l)}}}function dv(s){let e,t;return e=new Qh({props:{toggleSplash:s[53],webglError:s[5]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&32785&&(a.toggleSplash=i[53]),r[0]&32&&(a.webglError=i[5]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function cv(s){let e,t;return e=new Zu({props:{toggleSplash:s[52]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&1&&(a.toggleSplash=i[52]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function hv(s){let e,t;return e=new sv({props:{toggleSplash:s[51],webglError:s[5]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&32785&&(a.toggleSplash=i[51]),r[0]&32&&(a.webglError=i[5]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Tl(s){let e,t,i,r="Low Performance Detected",a,o,n,l="Dismiss",d,h;function u(v,w){return fv}let p=u()(s);return{c(){e=_("div"),t=_("div"),i=_("div"),i.textContent=r,a=k(),p.c(),o=k(),n=_("div"),n.textContent=l,this.h()},l(v){e=b(v,"DIV",{class:!0});var w=C(e);t=b(w,"DIV",{class:!0});var y=C(t);i=b(y,"DIV",{class:!0,"data-svelte-h":!0}),W(i)!=="svelte-13a2ixe"&&(i.textContent=r),a=I(y),p.l(y),o=I(y),n=b(y,"DIV",{class:!0,"data-svelte-h":!0}),W(n)!=="svelte-6a9fjy"&&(n.textContent=l),y.forEach(g),w.forEach(g),this.h()},h(){f(i,"class","hwa-title svelte-bgj4yc"),f(n,"class","hwa-dismiss svelte-bgj4yc"),f(t,"class","hwa-main svelte-bgj4yc"),f(e,"class","hwa-container svelte-bgj4yc")},m(v,w){P(v,e,w),c(e,t),c(t,i),c(t,a),p.m(t,null),c(t,o),c(t,n),d||(h=F(n,"click",s[47]),d=!0)},p:ve,d(v){v&&g(e),p.d(),d=!1,h()}}}function fv(s){let e,t='Make sure you have <span style="font-weight: 600">hardware acceleration</span> enabled in your browser and OS settings, then restart your browser.';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1tdhr9z"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hwa-body svelte-bgj4yc")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function uv(s){let e,t="PAUSED",i,r;return{c(){e=_("div"),e.textContent=t,this.h()},l(a){e=b(a,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-fhlkwc"&&(e.textContent=t),this.h()},h(){f(e,"class","paused svelte-bgj4yc")},m(a,o){P(a,e,o),r=!0},p:ve,i(a){r||(a&&Ci(()=>{r&&(i||(i=ei(e,Tt,{duration:100},!0)),i.run(1))}),r=!0)},o(a){a&&(i||(i=ei(e,Tt,{duration:100},!1)),i.run(0)),r=!1},d(a){a&&g(e),a&&i&&i.end()}}}function vv(s){let e,t,i="Error",r,a,o,n=s[28].type+"",l,d,h,u=s[28].msg+"",m,p,v,w,y,D="Reload",L,E,A,T,x,Y="COPY LOG",X,O;function $(V,z){return mv}let U=$()(s),B=s[29]==!1&&Pl(s);return{c(){e=_("div"),t=_("div"),t.textContent=i,r=k(),a=_("div"),o=_("div"),l=ee(n),d=k(),h=_("div"),m=ee(u),p=k(),v=_("div"),w=ee(`Sorry, something went wrong - please try reloading.
                    
                    
                    `),y=_("div"),y.textContent=D,L=k(),U.c(),E=k(),A=_("div"),B&&B.c(),T=k(),x=_("div"),x.textContent=Y,this.h()},l(V){e=b(V,"DIV",{class:!0});var z=C(e);t=b(z,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-et9hky"&&(t.textContent=i),r=I(z),a=b(z,"DIV",{class:!0});var M=C(a);o=b(M,"DIV",{class:!0});var N=C(o);l=te(N,n),N.forEach(g),d=I(M),h=b(M,"DIV",{class:!0});var G=C(h);m=te(G,u),G.forEach(g),M.forEach(g),p=I(z),v=b(z,"DIV",{class:!0});var se=C(v);w=te(se,`Sorry, something went wrong - please try reloading.
                    
                    
                    `),y=b(se,"DIV",{class:!0,"data-svelte-h":!0}),W(y)!=="svelte-tpxv7y"&&(y.textContent=D),L=I(se),U.l(se),se.forEach(g),E=I(z),A=b(z,"DIV",{class:!0});var oe=C(A);B&&B.l(oe),T=I(oe),x=b(oe,"DIV",{class:!0,"data-svelte-h":!0}),W(x)!=="svelte-131fhbm"&&(x.textContent=Y),oe.forEach(g),z.forEach(g),this.h()},h(){f(t,"class","error-title svelte-bgj4yc"),f(o,"class","error-type svelte-bgj4yc"),f(h,"class","error-msg svelte-bgj4yc"),f(a,"class","error-display svelte-bgj4yc"),f(y,"class","ui-btn ui-btn-active error-reload svelte-bgj4yc"),f(v,"class","error-watdo svelte-bgj4yc"),f(x,"class","error-log-copy svelte-bgj4yc"),f(A,"class","error-log svelte-bgj4yc"),f(e,"class","error svelte-bgj4yc"),R(e,"error-touch",s[29])},m(V,z){P(V,e,z),c(e,t),c(e,r),c(e,a),c(a,o),c(o,l),c(a,d),c(a,h),c(h,m),c(e,p),c(e,v),c(v,w),c(v,y),c(v,L),U.m(v,null),c(e,E),c(e,A),B&&B.m(A,null),c(A,T),c(A,x),X||(O=[F(y,"click",s[48]),F(x,"click",s[55])],X=!0)},p(V,z){z[0]&268435456&&n!==(n=V[28].type+"")&&be(l,n),z[0]&268435456&&u!==(u=V[28].msg+"")&&be(m,u),U.p(V,z),V[29]==!1?B?B.p(V,z):(B=Pl(V),B.c(),B.m(A,T)):B&&(B.d(1),B=null),z[0]&536870912&&R(e,"error-touch",V[29])},i:ve,o:ve,d(V){V&&g(e),U.d(),B&&B.d(),X=!1,at(O)}}}function mv(s){let e,t,i="click here",r,a,o;return{c(){e=ee("If this keeps happening, "),t=_("a"),t.textContent=i,r=ee(" to try a different seed."),this.h()},l(n){e=te(n,"If this keeps happening, "),t=b(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),W(t)!=="svelte-9g2e47"&&(t.textContent=i),r=te(n," to try a different seed."),this.h()},h(){f(t,"href","#"),f(t,"class","ui-link svelte-bgj4yc")},m(n,l){P(n,e,l),P(n,t,l),P(n,r,l),a||(o=F(t,"click",s[54]),a=!0)},p:ve,d(n){n&&(g(e),g(t),g(r)),a=!1,o()}}}function Pl(s){let e,t=s[28].log+"",i;return{c(){e=_("pre"),i=ee(t),this.h()},l(r){e=b(r,"PRE",{id:!0,class:!0});var a=C(e);i=te(a,t),a.forEach(g),this.h()},h(){f(e,"id","error-log-content"),f(e,"class","svelte-bgj4yc")},m(r,a){P(r,e,a),c(e,i)},p(r,a){a[0]&268435456&&t!==(t=r[28].log+"")&&be(i,t)},d(r){r&&g(e)}}}function Nl(s){let e,t;return e=new zu({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function gv(s){let e,t=`<span style="font-size: 1.25rem">UNLICENSED EMBED</span> <br/>
                Play the original ad-free on <a class="ui-mb-a svelte-bgj4yc" href="https://slowroads.io">slowroads.io</a>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-hmosml"&&(e.innerHTML=t),this.h()},h(){f(e,"class","ui-mb svelte-bgj4yc")},m(i,r){P(i,e,r)},d(i){i&&g(e)}}}function pv(s){let e,t,i,r,a,o,n,l,d,h,u;e=new Yu({});let m=s[26]&&xl(),p=bv(s),v=s[9]&&Ul(s),w=s[15]&&Ol(s);const y=[Dv,Sv],D=[];function L(A,T){return A[37]==!1||A[27]?0:A[29]==!0?1:-1}~(n=L(s))&&(l=D[n]=y[n](s));let E=(s[29]||s[8]==1)&&Gl();return{c(){Ne(e.$$.fragment),t=k(),m&&m.c(),i=k(),p&&p.c(),r=k(),v&&v.c(),a=k(),w&&w.c(),o=k(),l&&l.c(),d=k(),E&&E.c(),h=De()},l(A){xe(e.$$.fragment,A),t=I(A),m&&m.l(A),i=I(A),p&&p.l(A),r=I(A),v&&v.l(A),a=I(A),w&&w.l(A),o=I(A),l&&l.l(A),d=I(A),E&&E.l(A),h=De()},m(A,T){Re(e,A,T),P(A,t,T),m&&m.m(A,T),P(A,i,T),p&&p.m(A,T),P(A,r,T),v&&v.m(A,T),P(A,a,T),w&&w.m(A,T),P(A,o,T),~n&&D[n].m(A,T),P(A,d,T),E&&E.m(A,T),P(A,h,T),u=!0},p(A,T){A[26]?m?T[0]&67108864&&j(m,1):(m=xl(),m.c(),j(m,1),m.m(i.parentNode,i)):m&&(qe(),ie(m,1,1,()=>{m=null}),Fe()),p.p(A,T),A[9]?v?v.p(A,T):(v=Ul(A),v.c(),v.m(a.parentNode,a)):v&&(v.d(1),v=null),A[15]?w?(w.p(A,T),T[0]&32768&&j(w,1)):(w=Ol(A),w.c(),j(w,1),w.m(o.parentNode,o)):w&&(qe(),ie(w,1,1,()=>{w=null}),Fe());let x=n;n=L(A),n===x?~n&&D[n].p(A,T):(l&&(qe(),ie(D[x],1,1,()=>{D[x]=null}),Fe()),~n?(l=D[n],l?l.p(A,T):(l=D[n]=y[n](A),l.c()),j(l,1),l.m(d.parentNode,d)):l=null),A[29]||A[8]==1?E||(E=Gl(),E.c(),E.m(h.parentNode,h)):E&&(E.d(1),E=null)},i(A){u||(j(e.$$.fragment,A),j(m),j(p),j(w),j(l),u=!0)},o(A){ie(e.$$.fragment,A),ie(m),ie(p),ie(w),ie(l),u=!1},d(A){A&&(g(t),g(i),g(r),g(a),g(o),g(d),g(h)),Ue(e,A),m&&m.d(A),p&&p.d(A),v&&v.d(A),w&&w.d(A),~n&&D[n].d(A),E&&E.d(A)}}}function _v(s){let e,t,i,r,a=s[30]&&Bl(s);return{c(){e=_("div"),a&&a.c(),this.h()},l(o){e=b(o,"DIV",{class:!0});var n=C(e);a&&a.l(n),n.forEach(g),this.h()},h(){f(e,"class","load-bar svelte-bgj4yc"),R(e,"load-bar-init",s[7])},m(o,n){P(o,e,n),a&&a.m(e,null),r=!0},p(o,n){o[30]?a?a.p(o,n):(a=Bl(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null),(!r||n[0]&128)&&R(e,"load-bar-init",o[7])},i(o){r||(o&&Ci(()=>{r&&(i&&i.end(1),t=Gr(e,Tt,{duration:100}),t.start())}),r=!0)},o(o){t&&t.invalidate(),o&&(i=Br(e,Tt,{delay:100,duration:300})),r=!1},d(o){o&&g(e),a&&a.d(),o&&i&&i.end()}}}function xl(s){let e,t;return e=new av({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function bv(s){let e,t,i=s[13]==1&&Rl(s);return{c(){i&&i.c(),e=De()},l(r){i&&i.l(r),e=De()},m(r,a){i&&i.m(r,a),P(r,e,a),t=!0},p(r,a){r[13]==1?i?(i.p(r,a),a[0]&8192&&j(i,1)):(i=Rl(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(qe(),ie(i,1,1,()=>{i=null}),Fe())},i(r){t||(j(i),t=!0)},o(r){ie(i),t=!1},d(r){r&&g(e),i&&i.d(r)}}}function Rl(s){let e,t,i,r,a,o;return t=new Af({props:{showConfig:s[9],openConfig:s[60],closeConfig:s[61]}}),{c(){e=_("div"),Ne(t.$$.fragment),r=k(),a=De()},l(n){e=b(n,"DIV",{});var l=C(e);xe(t.$$.fragment,l),l.forEach(g),r=I(n),a=De()},m(n,l){P(n,e,l),Re(t,e,null),P(n,r,l),P(n,a,l),o=!0},p(n,l){const d={};l[0]&512&&(d.showConfig=n[9]),l[0]&512&&(d.openConfig=n[60]),l[0]&512&&(d.closeConfig=n[61]),t.$set(d)},i(n){o||(j(t.$$.fragment,n),n&&Ci(()=>{o&&(i||(i=ei(e,Tt,{duration:100},!0)),i.run(1))}),o=!0)},o(n){ie(t.$$.fragment,n),n&&(i||(i=ei(e,Tt,{duration:100},!1)),i.run(0)),o=!1},d(n){n&&(g(e),g(r),g(a)),Ue(t),n&&i&&i.end()}}}function Ul(s){let e,t,i;return{c(){e=_("div"),this.h()},l(r){e=b(r,"DIV",{id:!0,class:!0}),C(e).forEach(g),this.h()},h(){f(e,"id","config-close"),f(e,"class","svelte-bgj4yc")},m(r,a){P(r,e,a),t||(i=F(e,"click",s[62]),t=!0)},p:ve,d(r){r&&g(e),t=!1,i()}}}function Ol(s){let e,t,i,r;const a=[yv,wv],o=[];function n(l,d){return 0}return e=n(),t=o[e]=a[e](s),{c(){t.c(),i=De()},l(l){t.l(l),i=De()},m(l,d){o[e].m(l,d),P(l,i,d),r=!0},p(l,d){t.p(l,d)},i(l){r||(j(t),r=!0)},o(l){ie(t),r=!1},d(l){l&&g(i),o[e].d(l)}}}function wv(s){let e,t;return e=new $h({props:{enabled:!s[9]&&!s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&514&&(a.enabled=!i[9]&&!i[1]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function yv(s){let e,t;return e=new sf({props:{enabled:!s[9]&&!s[1]}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&514&&(a.enabled=!i[9]&&!i[1]),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Sv(s){let e,t;return e=new xn({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p:ve,i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Dv(s){let e,t,i,r,a,o,n,l,d,h=(s[41]*s[21]).toFixed(1)+"",u,m,p,v,w,y,D,L=(s[42]*s[22]).toFixed(1)+"",E,A,T,x,Y,X,O,$=s[38]&&Vl(),Z=s[39]&&Hl(),U=s[37]==!1&&zl(s),B=Lv(),V=s[29]==!1&&ql(s),z=s[40]&&!s[29]&&Fl();return{c(){e=_("div"),$&&$.c(),t=k(),Z&&Z.c(),i=k(),U&&U.c(),r=k(),B&&B.c(),a=k(),o=_("div"),V&&V.c(),n=k(),l=_("div"),z&&z.c(),d=k(),u=ee(h),m=k(),p=_("div"),v=ee(s[23]),w=k(),y=_("div"),D=_("div"),E=ee(L),A=k(),T=_("div"),x=ee(s[24]),Y=k(),X=_("div"),this.h()},l(M){e=b(M,"DIV",{class:!0});var N=C(e);$&&$.l(N),t=I(N),Z&&Z.l(N),N.forEach(g),i=I(M),U&&U.l(M),r=I(M),B&&B.l(M),a=I(M),o=b(M,"DIV",{class:!0});var G=C(o);V&&V.l(G),n=I(G),l=b(G,"DIV",{class:!0});var se=C(l);z&&z.l(se),d=I(se),u=te(se,h),se.forEach(g),m=I(G),p=b(G,"DIV",{class:!0});var oe=C(p);v=te(oe,s[23]),oe.forEach(g),G.forEach(g),w=I(M),y=b(M,"DIV",{class:!0});var le=C(y);D=b(le,"DIV",{class:!0});var pe=C(D);E=te(pe,L),pe.forEach(g),A=I(le),T=b(le,"DIV",{class:!0});var we=C(T);x=te(we,s[24]),we.forEach(g),le.forEach(g),Y=I(M),X=b(M,"DIV",{class:!0}),C(X).forEach(g),this.h()},h(){f(e,"class","dash-icons svelte-bgj4yc"),R(e,"dash-icons-bottom",s[8]!=1),R(e,"dash-icons-top",s[29]||s[8]==1),f(l,"class","stat-value svelte-bgj4yc"),f(p,"class","stat-unit svelte-bgj4yc"),f(o,"class","stat speed svelte-bgj4yc"),R(o,"speed-touch",s[29]),R(o,"stat-bottom",s[8]!=1),R(o,"stat-top",s[29]||s[8]==1),f(D,"class","stat-value svelte-bgj4yc"),f(T,"class","stat-unit svelte-bgj4yc"),f(y,"class","stat distance svelte-bgj4yc"),R(y,"distance-touch",s[29]),R(y,"stat-bottom",s[8]==0),R(y,"stat-top",s[29]),f(X,"class","stat-underlay svelte-bgj4yc"),R(X,"underlay-top",s[29]||s[8]==1)},m(M,N){P(M,e,N),$&&$.m(e,null),c(e,t),Z&&Z.m(e,null),P(M,i,N),U&&U.m(M,N),P(M,r,N),B&&B.m(M,N),P(M,a,N),P(M,o,N),V&&V.m(o,null),c(o,n),c(o,l),z&&z.m(l,null),c(l,d),c(l,u),c(o,m),c(o,p),c(p,v),P(M,w,N),P(M,y,N),c(y,D),c(D,E),c(y,A),c(y,T),c(T,x),P(M,Y,N),P(M,X,N),O=!0},p(M,N){M[38]?$?N[1]&128&&j($,1):($=Vl(),$.c(),j($,1),$.m(e,t)):$&&(qe(),ie($,1,1,()=>{$=null}),Fe()),M[39]?Z?N[1]&256&&j(Z,1):(Z=Hl(),Z.c(),j(Z,1),Z.m(e,null)):Z&&(qe(),ie(Z,1,1,()=>{Z=null}),Fe()),(!O||N[0]&256)&&R(e,"dash-icons-bottom",M[8]!=1),(!O||N[0]&536871168)&&R(e,"dash-icons-top",M[29]||M[8]==1),M[37]==!1?U?(U.p(M,N),N[1]&64&&j(U,1)):(U=zl(M),U.c(),j(U,1),U.m(r.parentNode,r)):U&&(qe(),ie(U,1,1,()=>{U=null}),Fe()),M[29]==!1?V?V.p(M,N):(V=ql(M),V.c(),V.m(o,n)):V&&(V.d(1),V=null),M[40]&&!M[29]?z?N[0]&536870912|N[1]&512&&j(z,1):(z=Fl(),z.c(),j(z,1),z.m(l,d)):z&&(qe(),ie(z,1,1,()=>{z=null}),Fe()),(!O||N[0]&2097152|N[1]&1024)&&h!==(h=(M[41]*M[21]).toFixed(1)+"")&&be(u,h),(!O||N[0]&8388608)&&be(v,M[23]),(!O||N[0]&536870912)&&R(o,"speed-touch",M[29]),(!O||N[0]&256)&&R(o,"stat-bottom",M[8]!=1),(!O||N[0]&536871168)&&R(o,"stat-top",M[29]||M[8]==1),(!O||N[0]&4194304|N[1]&2048)&&L!==(L=(M[42]*M[22]).toFixed(1)+"")&&be(E,L),(!O||N[0]&16777216)&&be(x,M[24]),(!O||N[0]&536870912)&&R(y,"distance-touch",M[29]),(!O||N[0]&256)&&R(y,"stat-bottom",M[8]==0),(!O||N[0]&536870912)&&R(y,"stat-top",M[29]),(!O||N[0]&536871168)&&R(X,"underlay-top",M[29]||M[8]==1)},i(M){O||(j($),j(Z),j(U),j(B),j(z),O=!0)},o(M){ie($),ie(Z),ie(U),ie(B),ie(z),O=!1},d(M){M&&(g(e),g(i),g(r),g(a),g(o),g(w),g(y),g(Y),g(X)),$&&$.d(),Z&&Z.d(),U&&U.d(M),B&&B.d(M),V&&V.d(),z&&z.d()}}}function Vl(s){let e,t,i,r,a;return{c(){e=_("img"),this.h()},l(o){e=b(o,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){f(e,"class","dash-icon svelte-bgj4yc"),ae(e,"right","3rem"),At(e.src,t="./ico_steer_lock.svg")||f(e,"src",t)},m(o,n){P(o,e,n),a=!0},i(o){a||(o&&Ci(()=>{a&&(r&&r.end(1),i=Gr(e,Tt,{duration:100}),i.start())}),a=!0)},o(o){i&&i.invalidate(),o&&(r=Br(e,Tt,{duration:400})),a=!1},d(o){o&&g(e),o&&r&&r.end()}}}function Hl(s){let e,t,i,r;return{c(){e=_("img"),this.h()},l(a){e=b(a,"IMG",{class:!0,style:!0,src:!0}),this.h()},h(){f(e,"class","dash-icon svelte-bgj4yc"),ae(e,"right","0rem"),At(e.src,t="./ico_brake.svg")||f(e,"src",t)},m(a,o){P(a,e,o),r=!0},i(a){r||(a&&Ci(()=>{r&&(i||(i=ei(e,Tt,{duration:200},!0)),i.run(1))}),r=!0)},o(a){a&&(i||(i=ei(e,Tt,{duration:200},!1)),i.run(0)),r=!1},d(a){a&&g(e),a&&i&&i.end()}}}function zl(s){let e,t;return e=new Gu({props:{position:s[29]?1:0}}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},p(i,r){const a={};r[0]&536870912&&(a.position=i[29]?1:0),e.$set(a)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function Lv(s){let e,t;return e=new xn({}),{c(){Ne(e.$$.fragment)},l(i){xe(e.$$.fragment,i)},m(i,r){Re(e,i,r),t=!0},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){ie(e.$$.fragment,i),t=!1},d(i){Ue(e,i)}}}function ql(s){let e,t,i,r,a,o,n="▲",l,d,h,u,m="▼",p,v,w,y="▲",D,L,E,A,T="▼",x,Y;return{c(){e=_("div"),t=_("img"),r=k(),a=_("div"),o=_("div"),o.textContent=n,l=k(),d=ee(s[19]),h=k(),u=_("div"),u.textContent=m,p=k(),v=_("div"),w=_("div"),w.textContent=y,D=k(),L=ee(s[18]),E=k(),A=_("div"),A.textContent=T,this.h()},l(X){e=b(X,"DIV",{class:!0});var O=C(e);t=b(O,"IMG",{class:!0,alt:!0,src:!0}),r=I(O),a=b(O,"DIV",{class:!0});var $=C(a);o=b($,"DIV",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-178mwg7"&&(o.textContent=n),l=I($),d=te($,s[19]),h=I($),u=b($,"DIV",{class:!0,"data-svelte-h":!0}),W(u)!=="svelte-1kexe0n"&&(u.textContent=m),$.forEach(g),p=I(O),v=b(O,"DIV",{class:!0});var Z=C(v);w=b(Z,"DIV",{class:!0,"data-svelte-h":!0}),W(w)!=="svelte-1nsidbo"&&(w.textContent=y),D=I(Z),L=te(Z,s[18]),E=I(Z),A=b(Z,"DIV",{class:!0,"data-svelte-h":!0}),W(A)!=="svelte-uwpd61"&&(A.textContent=T),Z.forEach(g),O.forEach(g),this.h()},h(){f(t,"class","sc-icon svelte-bgj4yc"),f(t,"alt",""),At(t.src,i=s[17]?"./ico_lock_closed.svg":"./ico_lock_open.svg")||f(t,"src",i),R(t,"sc-icon-active",s[17]),f(o,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),R(o,"sc-hidden",!s[20]),f(u,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),R(u,"sc-hidden",!s[20]),f(a,"class","sc-val svelte-bgj4yc"),R(a,"sc-hidden",!s[17]),f(w,"class","sc-arrow sc-arrow-up svelte-bgj4yc"),f(A,"class","sc-arrow sc-arrow-down svelte-bgj4yc"),f(v,"class","sc-label svelte-bgj4yc"),R(v,"sc-hidden",!s[20]||!s[17]),f(e,"class","sc-main svelte-bgj4yc")},m(X,O){P(X,e,O),c(e,t),c(e,r),c(e,a),c(a,o),c(a,l),c(a,d),c(a,h),c(a,u),c(e,p),c(e,v),c(v,w),c(v,D),c(v,L),c(v,E),c(v,A),x||(Y=[F(t,"click",s[45]),F(o,"click",Zr),F(u,"click",Jr),F(w,"click",s[63]),F(A,"click",s[64]),F(e,"mouseenter",s[65]),F(e,"mouseleave",s[66])],x=!0)},p(X,O){O[0]&131072&&!At(t.src,i=X[17]?"./ico_lock_closed.svg":"./ico_lock_open.svg")&&f(t,"src",i),O[0]&131072&&R(t,"sc-icon-active",X[17]),O[0]&1048576&&R(o,"sc-hidden",!X[20]),O[0]&524288&&be(d,X[19]),O[0]&1048576&&R(u,"sc-hidden",!X[20]),O[0]&131072&&R(a,"sc-hidden",!X[17]),O[0]&262144&&be(L,X[18]),O[0]&1179648&&R(v,"sc-hidden",!X[20]||!X[17])},d(X){X&&g(e),x=!1,at(Y)}}}function Fl(s){let e,t,i,r,a;return{c(){e=_("img"),this.h()},l(o){e=b(o,"IMG",{class:!0,src:!0}),this.h()},h(){f(e,"class","stat-icon svelte-bgj4yc"),At(e.src,t="./ico_boost.svg")||f(e,"src",t)},m(o,n){P(o,e,n),a=!0},i(o){a||(o&&Ci(()=>{a&&(r&&r.end(1),i=Gr(e,Tt,{duration:100}),i.start())}),a=!0)},o(o){i&&i.invalidate(),o&&(r=Br(e,Tt,{duration:400})),a=!1},d(o){o&&g(e),o&&r&&r.end()}}}function Gl(s){let e;return{c(){e=_("div"),this.h()},l(t){e=b(t,"DIV",{class:!0}),C(e).forEach(g),this.h()},h(){f(e,"class","menu-underlay svelte-bgj4yc")},m(t,i){P(t,e,i)},d(t){t&&g(e)}}}function Bl(s){let e,t,i="LOADING",r,a,o,n,l,d=(s[14]??"")+"",h;return{c(){e=_("div"),t=_("div"),t.textContent=i,r=k(),a=_("div"),o=_("div"),n=k(),l=_("div"),h=ee(d),this.h()},l(u){e=b(u,"DIV",{class:!0});var m=C(e);t=b(m,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1mn9znm"&&(t.textContent=i),r=I(m),a=b(m,"DIV",{class:!0});var p=C(a);o=b(p,"DIV",{class:!0,style:!0}),C(o).forEach(g),p.forEach(g),n=I(m),l=b(m,"DIV",{class:!0});var v=C(l);h=te(v,d),v.forEach(g),m.forEach(g),this.h()},h(){f(t,"class","load-bar-prog svelte-bgj4yc"),f(o,"class","load-bar-bar-fill svelte-bgj4yc"),ae(o,"width",s[13]*100+"%"),f(a,"class","load-bar-bar svelte-bgj4yc"),f(l,"class","load-bar-stage svelte-bgj4yc"),f(e,"class","load-bar-main svelte-bgj4yc")},m(u,m){P(u,e,m),c(e,t),c(e,r),c(e,a),c(a,o),c(e,n),c(e,l),c(l,h)},p(u,m){m[0]&8192&&ae(o,"width",u[13]*100+"%"),m[0]&16384&&d!==(d=(u[14]??"")+"")&&be(h,d)},d(u){u&&g(e)}}}function Cv(s){let e,t,i,r,a,o,n,l,d,h,u,m,p,v,w,y,D,L,E,A,T=s[0]&&Al(s),x=s[11]&&Tl(s);const Y=[vv,uv],X=[];function O(M,N){return M[28]?0:M[25]&&!M[1]?1:-1}~(a=O(s))&&(o=X[a]=Y[a](s));let $=s[12]&&Nl(),Z=s[44]&&gv();h=new Ou({props:{showSettings:s[1],showPrompt:s[10],openSettings:s[56],closeSettings:s[57],showBar:s[6],onShowSplash:s[58]}});let U=hn;const B=[_v,pv],V=[];function z(M,N){return M[13]<1?0:M[6]&&!M[25]&&!M[1]&&!M[2]?1:-1}return~(p=z(s))&&(v=V[p]=B[p](s)),{c(){T&&T.c(),e=k(),x&&x.c(),t=k(),i=_("div"),r=_("div"),o&&o.c(),n=k(),$&&$.c(),l=k(),Z&&Z.c(),d=k(),Ne(h.$$.fragment),u=k(),m=k(),v&&v.c(),y=k(),D=_("canvas"),this.h()},l(M){T&&T.l(M),e=I(M),x&&x.l(M),t=I(M),i=b(M,"DIV",{id:!0,tabindex:!0,autofocus:!0,class:!0});var N=C(i);r=b(N,"DIV",{id:!0,class:!0});var G=C(r);o&&o.l(G),n=I(G),$&&$.l(G),l=I(G),Z&&Z.l(G),d=I(G),xe(h.$$.fragment,G),u=I(G),m=I(G),v&&v.l(G),G.forEach(g),y=I(N),D=b(N,"CANVAS",{class:!0}),C(D).forEach(g),N.forEach(g),this.h()},h(){f(r,"id",w=s[15]?"ui-dynamic":"ui-fixed"),f(r,"class","svelte-bgj4yc"),f(D,"class","svelte-bgj4yc"),R(D,"canvas-paused",s[25]||s[1]||s[2]),f(i,"id","main"),f(i,"tabindex",-1),f(i,"autofocus",""),f(i,"class","svelte-bgj4yc")},m(M,N){T&&T.m(M,N),P(M,e,N),x&&x.m(M,N),P(M,t,N),P(M,i,N),c(i,r),~a&&X[a].m(r,null),c(r,n),$&&$.m(r,null),c(r,l),Z&&Z.m(r,null),c(r,d),Re(h,r,null),c(r,u),c(r,m),~p&&V[p].m(r,null),s[67](r),c(i,y),c(i,D),s[68](D),s[69](i),L=!0,i.focus(),E||(A=F(i,"contextmenu",kv),E=!0)},p(M,N){M[0]?T?(T.p(M,N),N[0]&1&&j(T,1)):(T=Al(M),T.c(),j(T,1),T.m(e.parentNode,e)):T&&(qe(),ie(T,1,1,()=>{T=null}),Fe()),M[11]?x?x.p(M,N):(x=Tl(M),x.c(),x.m(t.parentNode,t)):x&&(x.d(1),x=null);let G=a;a=O(M),a===G?~a&&X[a].p(M,N):(o&&(qe(),ie(X[G],1,1,()=>{X[G]=null}),Fe()),~a?(o=X[a],o?o.p(M,N):(o=X[a]=Y[a](M),o.c()),j(o,1),o.m(r,n)):o=null),M[12]?$?N[0]&4096&&j($,1):($=Nl(),$.c(),j($,1),$.m(r,l)):$&&(qe(),ie($,1,1,()=>{$=null}),Fe());const se={};N[0]&2&&(se.showSettings=M[1]),N[0]&1024&&(se.showPrompt=M[10]),N[0]&2&&(se.openSettings=M[56]),N[0]&2&&(se.closeSettings=M[57]),N[0]&64&&(se.showBar=M[6]),h.$set(se);let oe=p;p=z(M),p===oe?~p&&V[p].p(M,N):(v&&(qe(),ie(V[oe],1,1,()=>{V[oe]=null}),Fe()),~p?(v=V[p],v?v.p(M,N):(v=V[p]=B[p](M),v.c()),j(v,1),v.m(r,null)):v=null),(!L||N[0]&32768&&w!==(w=M[15]?"ui-dynamic":"ui-fixed"))&&f(r,"id",w),(!L||N[0]&33554438)&&R(D,"canvas-paused",M[25]||M[1]||M[2])},i(M){L||(j(T),j(o),j($),j(h.$$.fragment,M),j(U),j(v),L=!0)},o(M){ie(T),ie(o),ie($),ie(h.$$.fragment,M),ie(U),ie(v),L=!1},d(M){M&&(g(e),g(t),g(i)),T&&T.d(M),x&&x.d(M),~a&&X[a].d(),$&&$.d(),Z&&Z.d(),Ue(h),~p&&V[p].d(),s[67](null),s[68](null),s[69](null),E=!1,A()}}}const kv=s=>{s.stopPropagation(),s.preventDefault()};function Iv(s,e,t){let i,r,a,o,n,l,d,h,u,m,p,v,w,y,D,L;Ce(s,Qi,fe=>t(50,i=fe)),Ce(s,Mn,fe=>t(28,r=fe)),Ce(s,ti,fe=>t(29,a=fe)),Ce(s,Ts,fe=>t(30,o=fe)),Ce(s,on,fe=>t(31,n=fe)),Ce(s,an,fe=>t(32,l=fe)),Ce(s,ln,fe=>t(33,d=fe)),Ce(s,Xr,fe=>t(34,h=fe)),Ce(s,Qr,fe=>t(35,u=fe)),Ce(s,Kr,fe=>t(36,m=fe)),Ce(s,_n,fe=>t(37,p=fe)),Ce(s,vn,fe=>t(38,v=fe)),Ce(s,un,fe=>t(39,w=fe)),Ce(s,fn,fe=>t(40,y=fe)),Ce(s,xr,fe=>t(41,D=fe)),Ce(s,Rr,fe=>t(42,L=fe));const E=["KILOMETERS PER HOUR","MILES PER HOUR"],A=["KILOMETERS","MILES"],T=En(),x=window.self!==window.top;let Y=!1,X=!0,O=i,$=!0,Z=ne.hudPosition,U=!1,B=!1,V=!1,z=!1,M=!1,N=ne.showDebug,G=0,se="",oe=Ks.value,le,pe,we,me,Q=null,re=!0,ce="CRUISE",K=80,de=!1;function J(){t(17,re=We.speedControl),re&&(t(18,ce=We.speedControlMode==Nr.Cruise?"CRUISE":"MAX"),t(19,K=Math.round(Math.round(We.speedControlTarget*et/5)*5)))}function ge(){We.set("speedControl",!We.speedControl)}function Ee(fe){We.set("speedControlMode",(We.speedControlMode+fe+2)%2)}let ze=0,He=()=>{Q.onMount(le,pe,we),pe.focus(),me=new ResizeObserver(ut=>{Q.setSize(pe.offsetWidth,pe.offsetHeight)}),me.observe(pe),Le.addListener("Escape",()=>{M?(t(2,M=!1),Je.resume()):O&&st?Qi.set(!O):!B&&st?Je.resume():t(1,B=!B)}),Le.addListener($t.mapping.ToggleDebug,()=>{ne.set("showDebug",!ne.showDebug)});const fe=ut=>{ti.set(ut)};ne.addListener("touchscreen",fe),ne.addListener("showDebug",ut=>{t(12,N=ut)}),ne.addListener("hideUI",ut=>{t(6,X=!ut)}),ne.addListener("hudPosition",ut=>{t(8,Z=ut)}),We.addListener("speedControl",J),We.addListener("speedControlMode",J),We.addListener("speedControlTarget",J),xi.addListener(ut=>{ut!=ze&&(J(),fe(ne.touchscreen),t(12,N=ne.showDebug),t(6,X=!ne.hideUI),t(8,Z=ne.hudPosition),ze=ut)}),ot.hasSeenSettings||(cs.addListener("fps",ut=>{ut&&!ot.hasSeenSettings&&t(10,V=!0)}),cs.addListener("hwa",ut=>{ut&&!ot.hasSeenHWAWarning&&t(11,z=!0)}))};function Ze(fe){t(13,G=fe),fe>=1&&t(7,$=!1)}function $e(fe){t(14,se=fe)}let dt=1,et=1,ci=E[0],Vt=A[0];function ye(fe){t(21,dt=Ar[ne.units]),t(22,et=ld[ne.units]),t(23,ci=E[ne.units]),t(24,Vt=A[ne.units]),J()}let st=!1;function Pt(fe){t(25,st=fe)}let Dt=!1;function Zt(fe){t(26,Dt=fe)}function jt(fe){fe&&t(11,z=!0)}let hi=!1;function ht(fe){t(27,hi=fe)}nt(()=>(Q&&He(),di.addListener(Ze),Vo.addListener($e),ne.addListener("units",ye),ne.addListener("showInteriorHud",ht),Je.addStateListener(Pt),rt.addListener("useMouse",Zt),Ks.addListener(fe=>t(15,oe=fe)),cs.addListener("hwa",jt),()=>{di.removeListener(Ze),Vo.removeListener($e),ne.removeListener("units",ye),ne.removeListener("showInteriorHud",ht),rt.removeListener("useMouse",Zt),cs.removeListener("hwa",jt),Je.removeStateListener(Pt),Je.destroy()})),Vn(()=>{Q&&(Q.onDestroy(),me.disconnect())});function wt(){t(11,z=!1),Je.unlock()}function ft(){location.reload()}const Gt=fe=>{O&&oe&&pe.requestFullscreen&&pe.requestFullscreen(),Qi.set(!O)},yt=fe=>{hs.init(),Qi.set(!O)},fi=fe=>{O&&oe&&pe.requestFullscreen&&pe.requestFullscreen(),Qi.set(!O)},pt=()=>{Xi.forceNewSeed(),ft()},mt=fe=>{navigator.clipboard.writeText("```\n"+document.getElementById("error-log-content").innerHTML+"\n```")},je=()=>t(1,B=!0),Ye=()=>t(1,B=!1),Ut=fe=>{Qi.set(!0),document.fullscreenElement&&document.exitFullscreen()},ct=fe=>t(2,M=fe),Ht=()=>t(9,U=!0),ki=()=>t(9,U=!1),Ot=()=>t(9,U=!1),Jt=()=>Ee(1),gt=()=>Ee(-1),ii=()=>{t(20,de=!0)},si=()=>{t(20,de=!1)};function bi(fe){St[fe?"unshift":"push"](()=>{we=fe,t(16,we)})}function wi(fe){St[fe?"unshift":"push"](()=>{le=fe,t(3,le)})}function yi(fe){St[fe?"unshift":"push"](()=>{pe=fe,t(4,pe)})}return s.$$.update=()=>{if(s.$$.dirty[1]&524288&&t(0,O=i),s.$$.dirty[0]&2&&B&&(ot.set("hasSeenSettings",!0),t(10,V=!1),Je.pause(),Le.setMouseEnabled(!1)),s.$$.dirty[0]&2&&(B||(Je.resume(),Le.setMouseEnabled(!0))),s.$$.dirty[0]&4&&M&&(Je.pause(),Le.setMouseEnabled(!1)),s.$$.dirty[0]&4&&(M||(Je.resume(),Le.setMouseEnabled(!0))),s.$$.dirty[0]&25|s.$$.dirty[1]&262144&&!O&&!Q)try{t(49,Q=new Ih),le&&pe&&He()}catch{console.log("Failed to initialise game"),t(5,Y=!0),t(0,O=!0)}},[O,B,M,le,pe,Y,X,$,Z,U,V,z,N,G,se,oe,we,re,ce,K,de,dt,et,ci,Vt,st,Dt,hi,r,a,o,n,l,d,h,u,m,p,v,w,y,D,L,T,x,ge,Ee,wt,ft,Q,i,Gt,yt,fi,pt,mt,je,Ye,Ut,ct,Ht,ki,Ot,Jt,gt,ii,si,bi,wi,yi]}class Vv extends Xe{constructor(e){super(),Qe(this,e,Iv,Cv,Ke,{},null,[-1,-1,-1])}}export{Vv as component};
