function init(){canvas=document.getElementById("canvas"),content_container=document.getElementById("content_container"),anim_container=document.getElementById("animation_container"),dom_overlay_container=document.getElementById("dom_overlay_container");var e=AdobeAn.getComposition("CD6EB5E20BAF4854A557FCA9371032AC"),t=e.getLibrary(),n=new createjs.LoadQueue(!1);n.addEventListener("fileload",function(t){handleFileLoad(t,e)}),n.addEventListener("complete",function(t){handleComplete(t,e)});t=e.getLibrary();n.loadManifest(t.properties.manifest)}function handleFileLoad(t,e){var n=e.getImages();t&&"image"==t.item.type&&(n[t.item.id]=t.result)}function handleComplete(t,e){function n(h,c,l,p){function t(){var t=_.properties.width,e=_.properties.height,n=content_container.offsetWidth,i=content_container.offsetHeight,s=window.devicePixelRatio||1,a=n/t,o=i/e,r=1;h&&("width"==c&&d==n||"height"==c&&m==i?r=w:l?1==p?r=a:2==p&&(r=Math.max(a,o)):(n<t||i<e)&&(r=Math.min(a,o))),canvas.width=t*s*r,canvas.height=e*s*r,canvas.style.width=dom_overlay_container.style.width=anim_container.style.width=t*r+"px",canvas.style.height=anim_container.style.height=dom_overlay_container.style.height=e*r+"px",stage.scaleX=s*r,stage.scaleY=s*r,d=n,m=i,w=r,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}var d,m,w=1;window.addEventListener("resize",t),t()}var _=e.getLibrary(),s=e.getSpriteSheet(),a=t.target,o=_.ssMetadata;for(i=0;i<o.length;i++)s[o[i].name]=new createjs.SpriteSheet({images:[a.getResult(o[i].name)],frames:o[i].frames});document.getElementById("_preload_div_").style.display="none",canvas.style.display="block",exportRoot=new _._05134_charsel10_KB_HTML5Canvas,stage=new _.Stage(canvas),createjs.Touch.enable(stage),stage.enableMouseOver(),fnStartAnimation=function(){stage.addChild(exportRoot),createjs.Ticker.setFPS(_.properties.fps),createjs.Ticker.addEventListener("tick",stage)},n(!0,"width",!0,1),AdobeAn.compositionLoaded(_.properties.id),fnStartAnimation()}var createjs,AdobeAn,canvas,stage,exportRoot,content_container,anim_container,dom_overlay_container,fnStartAnimation;$(document).ready(function(){!0===$.browser.mobile&&$(".o-story_text").prepend("[Tap the icons to highlight selected character.  Press icon to select.]<br><br>")}),function(s,n){function a(){var t=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return t.gotoAndStop(this.currentFrame),t.paused=this.paused,t.framerate=this.framerate,t}function t(t,e,n){var i=s.extend(t,s.MovieClip);return i.clone=a,i.nominalBounds=e,i.frameBounds=n,i}var e,i={},o={},r={};i.ssMetadata=[{name:"05134_atlas_",frames:[[615,560,129,134],[0,710,177,160],[1384,0,632,371],[1384,373,632,371],[0,0,748,558],[0,560,613,148],[179,710,148,148],[750,0,632,371],[750,373,632,371],[329,710,342,18]]}],(i.AHflip1=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(0)}).prototype=e=new s.Sprite,(i.AHflip2=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(1)}).prototype=e=new s.Sprite,(i.Bitmap129=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(2)}).prototype=e=new s.Sprite,(i.Bitmap130=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(3)}).prototype=e=new s.Sprite,(i.charsel_back=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(4)}).prototype=e=new s.Sprite,(i.charsel_chars3=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(5)}).prototype=e=new s.Sprite,(i.charsel_cursor=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(6)}).prototype=e=new s.Sprite,(i.charselpanels=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(7)}).prototype=e=new s.Sprite,(i.charselpanels2=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(8)}).prototype=e=new s.Sprite,(i.choose_your_character=function(){this.spriteSheet=o["05134_atlas_"],this.gotoAndStop(9)}).prototype=e=new s.Sprite,(i.Symbol1=function(t,e,n){this.initialize(t,e,n,{}),this.shape=new s.Shape,this.shape.graphics.f("#666666").s().p("Eg3EAlWMAAAhKrMBuJAAAMAAABKrg"),this.shape.setTransform(352.5,239),this.timeline.addTween(s.Tween.get(this.shape).wait(1))}).prototype=t(i.Symbol1,new s.Rectangle(0,0,705,478),null),(i.Symbol43=function(t,e,n){this.initialize(t,e,n,{}),this.text=new s.Text("PANELS AREN'T DONE!","bold 14px 'Courier New'"),this.text.textAlign="center",this.text.lineHeight=18,this.text.lineWidth=242,(this.text.parent=this).text.setTransform(123,2),this.timeline.addTween(s.Tween.get(this.text).wait(1))}).prototype=t(i.Symbol43,new s.Rectangle(0,0,246,37.7),null),(i.Symbol41=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.AHflip2,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1).to({x:-1,y:1},0).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,177,160),(i.Symbol40=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.AHflip1,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1).to({x:1,y:-1},0).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,129,134),(i.Symbol12=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.choose_your_character,(this.instance.parent=this).instance.setTransform(-12,-1,.5,.5),this.timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=t(i.Symbol12,new s.Rectangle(-12,-1,171,9),null),(i.Symbol6=function(t,e,n){this.initialize(t,e,n,{}),this.shape=new s.Shape,this.shape.graphics.f("#000000").s().p("AroLpIAA3RIXRAAIAAXRg"),this.shape.setTransform(74.5,74.5),this.timeline.addTween(s.Tween.get(this.shape).wait(4))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,149.1,149.1),(i.Symbol5=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.charsel_chars3,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,613,148),(i.Symbol3=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.charsel_back,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,748,558),(i.Symbol42=function(t,e,n){this.initialize(t,e,n,{}),this.instance=new i.Symbol43,(this.instance.parent=this).instance.setTransform(123,18.9,1,1,0,0,0,123,18.9),this.instance.filters=[new s.ColorFilter(0,0,0,1,255,0,0,0)],this.instance.cache(-2,-2,250,42),this.timeline.addTween(s.Tween.get(this.instance).wait(2))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,246,37.7),(i.Symbol13=function(t,e,n){this.initialize(t,e,n,{}),this.frame_0=function(){var t=this.s12;t.cache(-25,-5,250,50);var e=new s.ColorFilter(0,0,0,1,255,11,0,0);t.filters=[e],t.updateCache()},this.frame_1=function(){var t=this.s12,e=new s.ColorFilter(0,0,0,1,255,204,0,0);t.filters=[e],t.updateCache()},this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1)),this.s12=new i.Symbol12,this.s12.name="s12",(this.s12.parent=this).s12.setTransform(66,4.5,1,1,0,0,0,66,4.5),this.s12.filters=[new s.ColorFilter(0,0,0,1,255,11,0,0)],this.s12.cache(-14,-3,175,13),this.timeline.addTween(s.Tween.get(this.s12).wait(2))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(-12,-1,171,9),(i._05134_charsel10_KB_HTML5Canvas=function(t,e,n){this.initialize(t,e,n,{start:2,end:44}),this.frame_0=function(){},this.frame_2=function(){},this.frame_8=function(){function t(t){!0===$.browser.mobile&&"pressup"==t.type&&(l=+new Date,p=l-c),(!0!==$.browser.mobile||200<p)&&d.gotoAndStop(8)}function e(t){!0===$.browser.mobile&&"pressup"==t.type&&(l=+new Date,p=l-c),(!0!==$.browser.mobile||200<p)&&(d.gotoAndStop(8),window.location="./5138")}function n(t){!0===$.browser.mobile&&"pressup"==t.type&&(l=+new Date,p=l-c),(!0!==$.browser.mobile||200<p)&&(d.gotoAndStop(8),window.location="./5151")}function i(t){!0===$.browser.mobile&&"pressup"==t.type&&(l=+new Date,p=l-c),(!0!==$.browser.mobile||200<p)&&(d.gotoAndStop(8),window.location="./5176")}function s(t){!0===$.browser.mobile&&"pressup"==t.type&&(l=+new Date,p=l-c),(!0!==$.browser.mobile||200<p)&&(d.gotoAndStop(8),window.location="./5187")}function a(t){"mousedown"==t.type&&(c=+new Date),d.gotoAndStop(9)}function o(t){"mousedown"==t.type&&(c=+new Date),d.gotoAndStop(10)}function r(t){"mousedown"==t.type&&(c=+new Date),d.gotoAndStop(11)}function h(t){"mousedown"==t.type&&(c=+new Date),d.gotoAndStop(12)}this.stop();var c,l,p,d=this,m=this.s6_1,w=this.s6_2,_=this.s6_3,f=this.s6_4;m.addEventListener("mouseover",a),m.addEventListener("mouseout",t),m.addEventListener("rollover",a),m.addEventListener("rollout",t),m.addEventListener("mousedown",a),m.addEventListener("pressup",e),w.addEventListener("mouseover",o),w.addEventListener("mouseout",t),w.addEventListener("rollover",o),w.addEventListener("rollout",t),w.addEventListener("mousedown",o),w.addEventListener("pressup",n),_.addEventListener("mouseover",r),_.addEventListener("mouseout",t),_.addEventListener("rollover",r),_.addEventListener("rollout",t),_.addEventListener("mousedown",r),_.addEventListener("pressup",i),f.addEventListener("mouseover",h),f.addEventListener("mouseout",t),f.addEventListener("rollover",h),f.addEventListener("rollout",t),f.addEventListener("mousedown",h),f.addEventListener("pressup",s)},this.frame_15=function(){},this.frame_19=function(){},this.frame_21=function(){},this.frame_44=function(){},this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(6).call(this.frame_8).wait(7).call(this.frame_15).wait(4).call(this.frame_19).wait(2).call(this.frame_21).wait(23).call(this.frame_44).wait(4022)),this.instance=new i.Symbol42,(this.instance.parent=this).instance.setTransform(329.5,443,1,1,0,0,0,123,18.9),this.instance._off=!0,this.timeline.addTween(s.Tween.get(this.instance).wait(19).to({_off:!1},0).to({_off:!0},28).wait(4019)),this.instance_1=new i.Symbol41,(this.instance_1.parent=this).instance_1.setTransform(444.3,312.3,1,1,0,0,0,88.5,80),this.instance_2=new i.Symbol40,(this.instance_2.parent=this).instance_2.setTransform(273.3,354.3,1,1,0,0,0,64.5,67),this.timeline.addTween(s.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},19).wait(4047)),this.shape=new s.Shape,this.shape.graphics.f().s("#990000").ss(1.5,1,1).p("EAyugjjMhlbAAAQgUAAAAAUMAAABGfQAAAUAUAAMBlbAAAQAUAAAAgUMAAAhGfQAAgUgUAAg"),this.shape.setTransform(324.6,224.6),this.shape_1=new s.Shape,this.shape_1.graphics.f("#FFFFFF").s().p("EipuCdiQgUAAAAgUMAAAk6cQAAgTAUAAMFTdAAAQAUAAAAATMAAAE6cQAAAUgUAAgEhX0gxhMAAABGdQAAAVAUgBMBlaAAAQAUABAAgVMAAAhGdQAAgVgUABMhlaAAAQgUgBAAAVg"),this.shape_1.setTransform(560.1,316.1),this.timeline.addTween(s.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4066)),this.s13=new i.Symbol13,this.s13.name="s13",this.s13.parent=this,!0===$.browser.mobile?this.s13.setTransform(183,5.5,2,2,0,0,0,0,0):this.s13.setTransform(329,9.5,1,1,0,0,0,66,4.5),this.timeline.addTween(s.Tween.get(this.s13).wait(4066)),this.s6_4=new i.Symbol6,this.s6_4.name="s6_4",(this.s6_4.parent=this).s6_4.setTransform(555,152.8,1,1,0,0,0,74.5,74.5),this.s6_4.alpha=0,new s.ButtonHelper(this.s6_4,0,1,2,!1,new i.Symbol6,3),this.s6_3=new i.Symbol6,this.s6_3.name="s6_3",(this.s6_3.parent=this).s6_3.setTransform(401,152.8,1,1,0,0,0,74.5,74.5),this.s6_3.alpha=0,new s.ButtonHelper(this.s6_3,0,1,2,!1,new i.Symbol6,3),this.s6_2=new i.Symbol6,this.s6_2.name="s6_2",(this.s6_2.parent=this).s6_2.setTransform(245,152.8,1,1,0,0,0,74.5,74.5),this.s6_2.alpha=0,new s.ButtonHelper(this.s6_2,0,1,2,!1,new i.Symbol6,3),this.s6_1=new i.Symbol6,this.s6_1.name="s6_1",(this.s6_1.parent=this).s6_1.setTransform(91,152.8,1,1,0,0,0,74.5,74.5),this.s6_1.alpha=0,new s.ButtonHelper(this.s6_1,0,1,2,!1,new i.Symbol6,3),this.timeline.addTween(s.Tween.get({}).to({state:[]}).to({state:[{t:this.s6_1},{t:this.s6_2},{t:this.s6_3},{t:this.s6_4}]},6).wait(4060)),this.instance_3=new i.charsel_cursor,(this.instance_3.parent=this).instance_3.setTransform(17,78),this.instance_3._off=!0,this.timeline.addTween(s.Tween.get(this.instance_3).wait(9).to({_off:!1},0).wait(1).to({x:172},0).wait(1).to({x:327},0).wait(1).to({x:482},0).to({_off:!0},1).wait(4053)),this.instance_4=new i.Symbol5("synched",0),(this.instance_4.parent=this).instance_4.setTransform(323,452.3,1,1,0,0,0,306.5,74),this.instance_4._off=!0,this.timeline.addTween(s.Tween.get(this.instance_4).wait(3).to({_off:!1},0).to({x:323.5,y:147},2).wait(1).to({y:152},0).wait(4060)),this.instance_5=new i.charselpanels,(this.instance_5.parent=this).instance_5.setTransform(8,71),this.instance_6=new i.Bitmap129,(this.instance_6.parent=this).instance_6.setTransform(8,71),this.instance_7=new i.charselpanels2,(this.instance_7.parent=this).instance_7.setTransform(8,71),this.instance_8=new i.Bitmap130,(this.instance_8.parent=this).instance_8.setTransform(8,71),this.timeline.addTween(s.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(4053)),this.instance_9=new i.Symbol3("synched",0),(this.instance_9.parent=this).instance_9.setTransform(323.5,224,1,1,0,0,0,374,279),this.timeline.addTween(s.Tween.get(this.instance_9).wait(4066)),this.instance_10=new i.Symbol1,(this.instance_10.parent=this).instance_10.setTransform(341.4,229,1,1,0,0,0,352.4,239),this.instance_10.filters=[new s.ColorFilter(0,0,0,1,255,255,255,0)],this.instance_10.cache(-2,-2,709,482),this.timeline.addTween(s.Tween.get(this.instance_10).wait(4066))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(-203.1,-467.2,2176.6,2016.5),i.properties={id:"CD6EB5E20BAF4854A557FCA9371032AC",width:650,height:450,fps:25,color:"#FFFFFF",opacity:1,manifest:[{src:"05134_atlas_.png",id:"05134_atlas_"}],preloads:[]},(i.Stage=function(t){createjs.Stage.call(this,t)}).prototype=e=new createjs.Stage,e.setAutoPlay=function(t){this.tickEnabled=t},e.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},e.stop=function(t){t&&this.seek(t),this.tickEnabled=!1},e.seek=function(t){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(i.properties.fps*t/1e3)},e.getDuration=function(){return this.getChildAt(0).totalFrames/i.properties.fps*1e3},e.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/i.properties.fps*1e3},n.bootcompsLoaded=n.bootcompsLoaded||[],n.bootstrapListeners||(n.bootstrapListeners=[]),n.bootstrapCallback=function(t){if(n.bootstrapListeners.push(t),0<n.bootcompsLoaded.length)for(var e=0;e<n.bootcompsLoaded.length;++e)t(n.bootcompsLoaded[e])},n.compositions=n.compositions||{},n.compositions.CD6EB5E20BAF4854A557FCA9371032AC={getStage:function(){return exportRoot.getStage()},getLibrary:function(){return i},getSpriteSheet:function(){return o},getImages:function(){return r}},n.compositionLoaded=function(t){n.bootcompsLoaded.push(t);for(var e=0;e<n.bootstrapListeners.length;e++)n.bootstrapListeners[e](t)},n.getComposition=function(t){return n.compositions[t]}}(createjs=createjs||{},AdobeAn=AdobeAn||{});