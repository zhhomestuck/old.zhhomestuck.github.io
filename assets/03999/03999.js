function init(){canvas=document.getElementById("canvas"),content_container=document.getElementById("content_container"),anim_container=document.getElementById("animation_container"),dom_overlay_container=document.getElementById("dom_overlay_container");var e=AdobeAn.getComposition("95A8EA04CAA846D9B3982DD7022EF9CB"),t=e.getLibrary(),i=new createjs.LoadQueue(!1);i.addEventListener("fileload",function(t){handleFileLoad(t,e)}),i.addEventListener("complete",function(t){handleComplete(t,e)});t=e.getLibrary();i.loadManifest(t.properties.manifest)}function handleFileLoad(t,e){var i=e.getImages();t&&"image"==t.item.type&&(i[t.item.id]=t.result)}function handleComplete(t,e){function n(h,c,l,p){function t(){var t=w.properties.width,e=w.properties.height,i=content_container.offsetWidth,n=content_container.offsetHeight,s=window.devicePixelRatio||1,a=i/t,o=n/e,r=1;h&&("width"==c&&d==i||"height"==c&&f==n?r=m:l?1==p?r=a:2==p&&(r=Math.max(a,o)):(i<t||n<e)&&(r=Math.min(a,o))),canvas.width=t*s*r,canvas.height=e*s*r,canvas.style.width=dom_overlay_container.style.width=anim_container.style.width=t*r+"px",canvas.style.height=anim_container.style.height=dom_overlay_container.style.height=e*r+"px",stage.scaleX=s*r,stage.scaleY=s*r,d=i,f=n,m=r,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}var d,f,m=1;window.addEventListener("resize",t),t()}var w=e.getLibrary(),s=e.getSpriteSheet(),a=t.target,o=w.ssMetadata;for(i=0;i<o.length;i++)s[o[i].name]=new createjs.SpriteSheet({images:[a.getResult(o[i].name)],frames:o[i].frames});document.getElementById("_preload_div_").style.display="none",canvas.style.display="block",exportRoot=new w._03999_scrapbook5_KB_HTML5Canvas,(stage=new w.Stage(canvas)).enableMouseOver(),fnStartAnimation=function(){stage.addChild(exportRoot),createjs.Ticker.setFPS(w.properties.fps),createjs.Ticker.addEventListener("tick",stage)},n(!0,"width",!0,1),AdobeAn.compositionLoaded(w.properties.id),fnStartAnimation()}var createjs,AdobeAn,canvas,stage,exportRoot,content_container,anim_container,dom_overlay_container,fnStartAnimation;!function(s,i){function a(){var t=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return t.gotoAndStop(this.currentFrame),t.paused=this.paused,t.framerate=this.framerate,t}function t(t,e,i){var n=s.extend(t,s.MovieClip);return n.clone=a,n.nominalBounds=e,n.frameBounds=i,n}var e,n={},o={},r={};n.ssMetadata=[{name:"03999_atlas_",frames:[[0,0,800,600],[0,602,525,345],[527,602,132,9]]}],(n.backgifcopy=function(){this.spriteSheet=o["03999_atlas_"],this.gotoAndStop(0)}).prototype=e=new s.Sprite,(n.panel1=function(){this.spriteSheet=o["03999_atlas_"],this.gotoAndStop(1)}).prototype=e=new s.Sprite,(n.photos1_TXT=function(){this.spriteSheet=o["03999_atlas_"],this.gotoAndStop(2)}).prototype=e=new s.Sprite,(n.Symbol1=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new s.Shape,this.shape.graphics.f("#666666").s().p("Eg3EAlWMAAAhKrMBuJAAAMAAABKrg"),this.shape.setTransform(352.5,239),this.timeline.addTween(s.Tween.get(this.shape).wait(1))}).prototype=t(n.Symbol1,new s.Rectangle(0,0,705,478),null),(n.Symbol12=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.photos1_TXT,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol12,new s.Rectangle(0,0,132,9),null),(n.Symbol2=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.panel1,(this.instance.parent=this).timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol2,new s.Rectangle(0,0,525,345),null),(n.replay2=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new s.Shape,this.shape.graphics.f("#CCCCCC").s().p("AhXAAICuhjIAADHg"),this.shape.setTransform(8.8,10),this.timeline.addTween(s.Tween.get(this.shape).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,17.5,20),(n.preload11=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new s.Shape,this.shape.graphics.f("#000000").s().p("Ah9B+IAAj7ID7AAIAAD7g"),this.shape.setTransform(12.6,12.6),this.timeline.addTween(s.Tween.get(this.shape).wait(1))}).prototype=t(n.preload11,new s.Rectangle(0,0,25.3,25.3),null),(n.Symbol13=function(t,e,i){this.initialize(t,e,i,{}),this.frame_0=function(){var t=this.s12;t.cache(-5,-5,150,50);var e=new s.ColorFilter(0,0,0,1,255,11,0,0);t.filters=[e],t.updateCache()},this.frame_1=function(){var t=this.s12,e=new s.ColorFilter(0,0,0,1,255,204,0,0);t.filters=[e],t.updateCache()},this.timeline.addTween(s.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1)),this.s12=new n.Symbol12,this.s12.name="s12",(this.s12.parent=this).s12.setTransform(66,4.5,1,1,0,0,0,66,4.5),this.s12.filters=[new s.ColorFilter(0,0,0,1,255,11,0,0)],this.s12.cache(-2,-2,136,13),this.timeline.addTween(s.Tween.get(this.s12).wait(2))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,132,9),(n.Symbol11=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.Symbol2,(this.instance.parent=this).instance.setTransform(153,167.5,1,1,0,0,0,153,167.5),this.timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol11,new s.Rectangle(0,0,525,345),null),(n.s14=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.preload11,(this.instance.parent=this).instance.setTransform(12.6,12.6,1,1,0,0,0,12.6,12.6),this.instance.alpha=0,this.timeline.addTween(s.Tween.get(this.instance).wait(3).to({alpha:1},0).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,25.3,25.3),(n.replay1=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.replay2("synched",0),(this.instance.parent=this).instance.setTransform(8.8,10,1,1,0,0,0,8.8,10),this.timeline.addTween(s.Tween.get(this.instance).to({alpha:.559},14).to({alpha:1},15).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,17.5,20),(n.replay3=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.replay1,(this.instance.parent=this).instance.setTransform(8.8,10,1,1,0,0,0,8.8,10),this.timeline.addTween(s.Tween.get(this.instance).wait(1))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(0,0,17.5,20),(n._03999_scrapbook5_KB_HTML5Canvas=function(t,e,i){this.initialize(t,e,i,{start:2,end:776}),this.frame_2=function(){function t(){window.location="./4003"}function e(){var t=(new createjs.ColorMatrix).adjustColor(0,38,0,0),e=new createjs.ColorMatrixFilter(t);n.filters=[e],n.updateCache()}function i(){var t=(new createjs.ColorMatrix).adjustColor(0,0,0,0),e=new createjs.ColorMatrixFilter(t);n.filters=[e],n.updateCache()}var n=this.s11;n.cache(-5,-5,550,400);var s=this.b11;s.addEventListener("mouseover",e),s.addEventListener("mouseout",i),s.addEventListener("touchstart",e),s.addEventListener("touchend",i),s.addEventListener("click",t)},this.frame_50=function(){this.stop()},this.frame_59=function(){},this.frame_108=function(){},this.frame_114=function(){},this.frame_156=function(){},this.frame_159=function(){},this.frame_202=function(){},this.frame_209=function(){},this.frame_257=function(){},this.frame_776=function(){},this.timeline.addTween(s.Tween.get(this).wait(2).call(this.frame_2).wait(48).call(this.frame_50).wait(9).call(this.frame_59).wait(49).call(this.frame_108).wait(6).call(this.frame_114).wait(42).call(this.frame_156).wait(3).call(this.frame_159).wait(43).call(this.frame_202).wait(7).call(this.frame_209).wait(48).call(this.frame_257).wait(519).call(this.frame_776).wait(682)),this.instance=new n.replay3,(this.instance.parent=this).instance.setTransform(9.8,438.6,1,1,0,0,0,8.8,10),this.instance._off=!0,new s.ButtonHelper(this.instance,0,1,1),this.timeline.addTween(s.Tween.get(this.instance).wait(776).to({_off:!1},0).wait(682)),this.shape=new s.Shape,this.shape.graphics.f().s("#990000").ss(1.5,1,1).p("EAyugjjMhlbAAAQgUAAAAAUMAAABGfQAAAUAUAAMBlbAAAQAUAAAAgUMAAAhGfQAAgUgUAAg"),this.shape.setTransform(324.6,224.6),this.shape_1=new s.Shape,this.shape_1.graphics.f("#FFFFFF").s().p("EipuCdiQgUAAAAgUMAAAk6cQAAgTAUAAMFTdAAAQAUAAAAATMAAAE6cQAAAUgUAAgEhX0gxhMAAABGdQAAAVAUgBMBlaAAAQAUABAAgVMAAAhGdQAAgVgUABMhlaAAAQgUgBAAAVg"),this.shape_1.setTransform(560.1,316.1),this.timeline.addTween(s.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1458)),this.s13=new n.Symbol13,this.s13.name="s13",this.s13.parent=this,!0===$.browser.mobile?this.s13.setTransform(197,5.5,2,2,0,0,0,0,0):this.s13.setTransform(329,10,1,1,0,0,0,66,4.5),this.s13._off=!0,this.timeline.addTween(s.Tween.get(this.s13).wait(18).to({_off:!1},0).wait(1440)),this.instance_1=new n.Symbol1,(this.instance_1.parent=this).instance_1.setTransform(322.4,219,1,1,0,0,0,352.4,239),this.instance_1.filters=[new s.ColorFilter(0,0,0,1,0,0,0,0)],this.instance_1.cache(-2,-2,709,482),this.timeline.addTween(s.Tween.get(this.instance_1).wait(15).to({_off:!0},1).wait(1442)),this.b11=new n.s14,this.b11.name="b11",(this.b11.parent=this).b11.setTransform(68,58.5,20.792,13.663),this.b11._off=!0,new s.ButtonHelper(this.b11,0,1,2,!1,new n.s14,3),this.timeline.addTween(s.Tween.get(this.b11).wait(2).to({_off:!1},0).wait(1456)),this.s11=new n.Symbol11,this.s11.name="s11",(this.s11.parent=this).s11.setTransform(221,226,1,1,0,0,0,153,167.5),this.s11._off=!0,this.timeline.addTween(s.Tween.get(this.s11).wait(2).to({_off:!1},0).wait(1456)),this.instance_2=new n.backgifcopy,(this.instance_2.parent=this).instance_2.setTransform(-81.5,-81),this.instance_2._off=!0,this.timeline.addTween(s.Tween.get(this.instance_2).wait(2).to({_off:!1},0).wait(1456)),this.instance_3=new n.Symbol1,(this.instance_3.parent=this).instance_3.setTransform(322.4,219,1,1,0,0,0,352.4,239),this.instance_3.filters=[new s.ColorFilter(0,0,0,1,0,0,0,0)],this.instance_3.cache(-2,-2,709,482),this.timeline.addTween(s.Tween.get(this.instance_3).wait(1458))}).prototype=e=new s.MovieClip,e.nominalBounds=new s.Rectangle(-203.1,-467.2,2176.6,2016.5),n.properties={id:"95A8EA04CAA846D9B3982DD7022EF9CB",width:650,height:450,fps:25,color:"#FFFFFF",opacity:1,manifest:[{src:"03999_atlas_.png",id:"03999_atlas_"}],preloads:[]},(n.Stage=function(t){createjs.Stage.call(this,t)}).prototype=e=new createjs.Stage,e.setAutoPlay=function(t){this.tickEnabled=t},e.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},e.stop=function(t){t&&this.seek(t),this.tickEnabled=!1},e.seek=function(t){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(n.properties.fps*t/1e3)},e.getDuration=function(){return this.getChildAt(0).totalFrames/n.properties.fps*1e3},e.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/n.properties.fps*1e3},i.bootcompsLoaded=i.bootcompsLoaded||[],i.bootstrapListeners||(i.bootstrapListeners=[]),i.bootstrapCallback=function(t){if(i.bootstrapListeners.push(t),0<i.bootcompsLoaded.length)for(var e=0;e<i.bootcompsLoaded.length;++e)t(i.bootcompsLoaded[e])},i.compositions=i.compositions||{},i.compositions["95A8EA04CAA846D9B3982DD7022EF9CB"]={getStage:function(){return exportRoot.getStage()},getLibrary:function(){return n},getSpriteSheet:function(){return o},getImages:function(){return r}},i.compositionLoaded=function(t){i.bootcompsLoaded.push(t);for(var e=0;e<i.bootstrapListeners.length;e++)i.bootstrapListeners[e](t)},i.getComposition=function(t){return i.compositions[t]}}(createjs=createjs||{},AdobeAn=AdobeAn||{});