function init(){canvas=document.getElementById("canvas"),content_container=document.getElementById("content_container"),anim_container=document.getElementById("animation_container"),dom_overlay_container=document.getElementById("dom_overlay_container");var e=AdobeAn.getComposition("29E063E937B843D7BE3D76F217A6C659"),t=e.getLibrary(),i=new createjs.LoadQueue(!1);i.installPlugin(createjs.Sound),i.addEventListener("fileload",function(t){handleFileLoad(t,e)}),i.addEventListener("complete",function(t){handleComplete(t,e)});t=e.getLibrary();i.loadManifest(t.properties.manifest)}function handleFileLoad(t,e){var i=e.getImages();t&&"image"==t.item.type&&(i[t.item.id]=t.result)}function handleComplete(t,e){function n(r,c,l,p){function t(){var t=g.properties.width,e=g.properties.height,i=content_container.offsetWidth,n=content_container.offsetHeight,s=window.devicePixelRatio||1,a=i/t,o=n/e,h=1;r&&("width"==c&&w==i||"height"==c&&f==n?h=_:l?1==p?h=a:2==p&&(h=Math.max(a,o)):(i<t||n<e)&&(h=Math.min(a,o))),canvas.width=t*s*h,canvas.height=e*s*h,canvas.style.width=dom_overlay_container.style.width=anim_container.style.width=t*h+"px",canvas.style.height=anim_container.style.height=dom_overlay_container.style.height=e*h+"px",stage.scaleX=s*h,stage.scaleY=s*h,w=i,f=n,_=h,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}var w,f,_=1;window.addEventListener("resize",t),t()}var g=e.getLibrary(),s=e.getSpriteSheet(),a=t.target,o=g.ssMetadata;for(i=0;i<o.length;i++)s[o[i].name]=new createjs.SpriteSheet({images:[a.getResult(o[i].name)],frames:o[i].frames});document.getElementById("_preload_div_").style.display="none",canvas.style.display="block",exportRoot=new g._03848_clock_KB_HTML5Canvas,(stage=new g.Stage(canvas)).enableMouseOver(),fnStartAnimation=function(){stage.addChild(exportRoot),createjs.Ticker.setFPS(g.properties.fps),createjs.Ticker.addEventListener("tick",stage)},n(!0,"width",!0,1),AdobeAn.compositionLoaded(g.properties.id),fnStartAnimation()}function playSound(t,e){return createjs.Sound.play(t,{interrupt:createjs.Sound.INTERRUPT_EARLY,loop:e})}var s18_1Listener,s1_1Listener,s17_1Listener,s18_2Listener,s15_1Listener,createjs,AdobeAn,canvas,stage,exportRoot,content_container,anim_container,dom_overlay_container,fnStartAnimation;!function(w,i){function s(){var t=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return t.gotoAndStop(this.currentFrame),t.paused=this.paused,t.framerate=this.framerate,t}function t(t,e,i){var n=w.extend(t,w.MovieClip);return n.clone=s,n.nominalBounds=e,n.frameBounds=i,n}var e,n={},a={},o={};n.ssMetadata=[{name:"_playoverlay",frames:[[0,0,650,1612]]},{name:"03848_atlas_",frames:[[0,4022,128,52],[111,3951,128,52],[130,4005,111,52],[241,3951,111,52],[0,0,650,1689],[1956,0,650,1689],[1304,1691,650,1689],[0,1691,650,1689],[652,0,650,1689],[652,1691,650,1689],[1304,0,650,1689],[1221,3382,138,457],[1361,3382,138,457],[569,3834,200,253],[0,4076,66,15],[68,4076,49,13],[0,3951,109,69],[569,3382,650,450],[1501,3382,82,651],[0,3382,567,567]]}],(n.playoverlayimage=function(){this.spriteSheet=a._playoverlay,this.gotoAndStop(0)}).prototype=e=new w.Sprite,(n._6649_heroic_3=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(0)}).prototype=e=new w.Sprite,(n._6649_heroic_6=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(1)}).prototype=e=new w.Sprite,(n._6649_just_3=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(2)}).prototype=e=new w.Sprite,(n._6649_just_6=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(3)}).prototype=e=new w.Sprite,(n.clock1=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(4)}).prototype=e=new w.Sprite,(n.clock2=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(5)}).prototype=e=new w.Sprite,(n.clock3=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(6)}).prototype=e=new w.Sprite,(n.clock4=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(7)}).prototype=e=new w.Sprite,(n.clock5=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(8)}).prototype=e=new w.Sprite,(n.clock6=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(9)}).prototype=e=new w.Sprite,(n.clock7=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(10)}).prototype=e=new w.Sprite,(n.clock_botback1=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(11)}).prototype=e=new w.Sprite,(n.clock_botback2=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(12)}).prototype=e=new w.Sprite,(n.clock_topback=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(13)}).prototype=e=new w.Sprite,(n.clock_txt1=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(14)}).prototype=e=new w.Sprite,(n.clock_txt2=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(15)}).prototype=e=new w.Sprite,(n.heirsymb=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(16)}).prototype=e=new w.Sprite,(n.load=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(17)}).prototype=e=new w.Sprite,(n.pend=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(18)}).prototype=e=new w.Sprite,(n.skaia=function(){this.spriteSheet=a["03848_atlas_"],this.gotoAndStop(19)}).prototype=e=new w.Sprite,(n.playoverlay=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.playoverlayimage,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,650,1612),(n.Symbol1=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#666666").s().p("Eg3EAlWMAAAhKrMBuJAAAMAAABKrg"),this.shape.setTransform(352.5,239),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=t(n.Symbol1,new w.Rectangle(0,0,705,478),null),(n.Symbol18=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.heirsymb,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol18,new w.Rectangle(0,0,109,69),null),(n.Symbol17=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock_topback,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol17,new w.Rectangle(0,0,200,253),null),(n.Symbol16=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock_txt2,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol16,new w.Rectangle(0,0,49,13),null),(n.Symbol15=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock_botback2,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol15,new w.Rectangle(0,0,138,457),null),(n.Symbol14=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock5,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol14,new w.Rectangle(0,0,650,1689),null),(n.Symbol13=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock6,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol13,new w.Rectangle(0,0,650,1689),null),(n.Symbol12=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock7,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol12,new w.Rectangle(0,0,650,1689),null),(n.Symbol11=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock2,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol11,new w.Rectangle(0,0,650,1689),null),(n.Symbol10=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock3,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol10,new w.Rectangle(0,0,650,1689),null),(n.Symbol9=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock4,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol9,new w.Rectangle(0,0,650,1689),null),(n.Symbol8=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#000000").s().p("Eg6SBiKMAAAjEUMB0lAAAMAAADEUg"),this.shape.setTransform(333.6,1078.3),this.timeline.addTween(w.Tween.get(this.shape).wait(1)),this.instance=new n.load,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol8,new w.Rectangle(-39.4,0,746.2,1706.5),null),(n.Symbol5=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.skaia,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol5,new w.Rectangle(0,0,567,567),null),(n.Symbol4=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock_txt1,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol4,new w.Rectangle(0,0,66,15),null),(n.Symbol2=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.pend,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol2,new w.Rectangle(0,0,82,651),null),(n.Symbol1_1=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.clock_botback1,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol1_1,new w.Rectangle(0,0,138,457),null),(n.Just_6=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n._6649_just_6,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Just_6,new w.Rectangle(0,0,111,52),null),(n.just_3=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n._6649_just_3,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.just_3,new w.Rectangle(0,0,111,52),null),(n.Heroic6=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n._6649_heroic_6,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Heroic6,new w.Rectangle(0,0,128,52),null),(n.heroic_3=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n._6649_heroic_3,(this.instance.parent=this).timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.heroic_3,new w.Rectangle(0,0,128,52),null),(n.volcon5=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#CCCCCC").s().p("AggBZQAOgKALgMQARgVAGgdQACgKgBgIQgBgsgegeIgPgOIgBgJQAyASAKA1QAJApgRAmQgDAIgFAHQgIAMgKAKQgLAKgOAAg"),this.shape.setTransform(3.3,9.9),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,6.7,19.8),(n.volcon4=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#CCCCCC").s().p("AgWA/QADgJALgIQAEgEADgEQAGgLACgMQABgGAAgGIACgDQgEgkgcgWIABgGIAJgBQAXANAIAaIAEAJQAAAZgFAYQgFAXgUAKQgDABgEAAQgEAAgEgDg"),this.shape.setTransform(2.3,6.6),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,4.7,13.3),(n.volcon3=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#CCCCCC").s().p("AgNAhIAAgKIAFgEQAFgFACgFQACgFgBgJQgCgJgLgTQAMgCAHAKQAKAMgCAPIAAADIgBAAQAAAJgEAIQgGAMgMAAIgEgBg"),this.shape.setTransform(1.4,3.4),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,2.9,6.8),(n.volcon2=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#CCCCCC").s().p("AAIAbIAAgCIgBgBQgXgBgYAAIAAgDIAAgrIACAAIAAgCIAtgBIABgCIAegdIABAAQAEA2gCA7IgBACIgggfg"),this.shape.setTransform(4.1,5.8),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,8.3,11.6),(n.replay2=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#CCCCCC").s().p("AhXAAICuhjIAADHg"),this.shape.setTransform(8.8,10),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,17.5,20),(n.preload11=function(t,e,i){this.initialize(t,e,i,{}),this.shape=new w.Shape,this.shape.graphics.f("#000000").s().p("Ah9B+IAAj7ID7AAIAAD7g"),this.shape.setTransform(12.6,12.6),this.timeline.addTween(w.Tween.get(this.shape).wait(1))}).prototype=t(n.preload11,new w.Rectangle(0,0,25.3,25.3),null),(n.Symbol169=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.Symbol5,(this.instance.parent=this).instance.setTransform(283.5,283.5,1,1,0,0,0,283.5,283.5),this.timeline.addTween(w.Tween.get(this.instance).to({rotation:360},672).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,567,567),(n.Symbol6=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.Symbol169,(this.instance.parent=this).instance.setTransform(15.6,15.6,.055,.055,0,0,0,282.8,283.7),this.timeline.addTween(w.Tween.get(this.instance).wait(30))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,39,39),(n.Symbol3=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.Symbol2,(this.instance.parent=this).instance.setTransform(42.7,325.7,1,1,-.3,0,0,41,325.5),this.timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=t(n.Symbol3,new w.Rectangle(0,0,85.3,651.4),null),(n.volcon1=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.preload11,(this.instance.parent=this).instance.setTransform(12.6,12.6,1,1,0,0,0,12.6,12.6),this.instance.alpha=0,this.timeline.addTween(w.Tween.get(this.instance).wait(3).to({alpha:1},0).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,25.3,25.3),(n.replay1=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.replay2("synched",0),(this.instance.parent=this).instance.setTransform(8.8,10,1,1,0,0,0,8.8,10),this.timeline.addTween(w.Tween.get(this.instance).to({alpha:.559},14).to({alpha:1},15).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,17.5,20),(n.Symbol7=function(t,e,i){this.initialize(t,e,i,{}),this.frame_0=function(){var t=this.s6;t.shadow=new createjs.Shadow("#33FFFF",0,0,17),t.cache(-40,-40,120,120),t.updateCache()},this.frame_1=function(){var t=this.s6;t.shadow=new createjs.Shadow("#33FFFF",0,0,24),t.updateCache()},this.frame_2=function(){var t=this.s6;t.shadow=new createjs.Shadow("#33FFFF",0,0,21),t.updateCache()},this.frame_3=function(){var t=this.s6;t.shadow=new createjs.Shadow("#33FFFF",0,0,35),t.updateCache()},this.timeline.addTween(w.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1)),this.s6=new n.Symbol6,this.s6.name="s6",(this.s6.parent=this).s6.setTransform(15.6,15.6,1,1,0,0,0,15.6,15.6),this.s6.shadow=new w.Shadow("rgba(51,255,255,1)",0,0,15),this.timeline.addTween(w.Tween.get(this.s6).wait(4))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(-16,-16,71,71),(n.volumecontrolcopy=function(t,e,i){this.initialize(t,e,i,{high:1,med:9,low:19,off:29}),this.frame_1=function(){function t(){e.gotoAndStop("off")}this.stop();var e=this;currentVolume=.8,createjs.Sound.volume=currentVolume,this.button6.addEventListener("click",t)},this.frame_9=function(){function t(){e.gotoAndStop("high")}this.stop();var e=this;currentVolume=.4,createjs.Sound.volume=currentVolume,this.button14.addEventListener("click",t)},this.frame_19=function(){function t(){e.gotoAndStop("med")}this.stop();var e=this;currentVolume=.2,createjs.Sound.volume=currentVolume,this.button16.addEventListener("click",t)},this.frame_29=function(){function t(){e.gotoAndStop("low")}this.stop();var e=this;currentVolume=0,createjs.Sound.volume=currentVolume,this.button18.addEventListener("click",t)},this.timeline.addTween(w.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(8)),this.button6=new n.volcon1,this.button6.name="button6",(this.button6.parent=this).button6.setTransform(10.6,10.4,1,1,0,0,0,12.6,12.6),new w.ButtonHelper(this.button6,0,1,2,!1,new n.volcon1,3),this.button14=new n.volcon1,this.button14.name="button14",(this.button14.parent=this).button14.setTransform(10.6,10.4,1,1,0,0,0,12.6,12.6),new w.ButtonHelper(this.button14,0,1,2,!1,new n.volcon1,3),this.button16=new n.volcon1,this.button16.name="button16",(this.button16.parent=this).button16.setTransform(10.6,10.4,1,1,0,0,0,12.6,12.6),new w.ButtonHelper(this.button16,0,1,2,!1,new n.volcon1,3),this.button18=new n.volcon1,this.button18.name="button18",(this.button18.parent=this).button18.setTransform(10.6,10.4,1,1,0,0,0,12.6,12.6),new w.ButtonHelper(this.button18,0,1,2,!1,new n.volcon1,3),this.timeline.addTween(w.Tween.get({}).to({state:[]}).to({state:[{t:this.button6}]},1).to({state:[{t:this.button14}]},8).to({state:[{t:this.button16}]},10).to({state:[{t:this.button18}]},10).wait(8)),this.instance=new n.volcon5,(this.instance.parent=this).instance.setTransform(17.5,9.8,1,1,0,0,0,3.3,9.8),new w.ButtonHelper(this.instance,0,1,1),this.instance_1=new n.volcon4,(this.instance_1.parent=this).instance_1.setTransform(14.9,9.7,1,1,0,0,0,2.3,6.6),new w.ButtonHelper(this.instance_1,0,1,1),this.instance_2=new n.volcon3,(this.instance_2.parent=this).instance_2.setTransform(12.5,9.8,1,1,0,0,0,1.4,3.4),new w.ButtonHelper(this.instance_2,0,1,1),this.shape=new w.Shape,this.shape.graphics.f("#F8F8F8").s().p("AAAA6IACgBIAAACIgCgBgAgBg4IABgCIAAACg"),this.shape.setTransform(8.1,9.8),this.timeline.addTween(w.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1}]},8).to({state:[{t:this.shape},{t:this.instance_2}]},10).to({state:[]},10).wait(8)),this.instance_3=new n.volcon2,(this.instance_3.parent=this).instance_3.setTransform(4.2,9.9,1,1,0,0,0,4.2,5.8),this.instance_3._off=!0,new w.ButtonHelper(this.instance_3,0,1,1),this.timeline.addTween(w.Tween.get(this.instance_3).wait(1).to({_off:!1},0).wait(36))}).prototype=e=new w.MovieClip,e.nominalBounds=null,(n.replay3=function(t,e,i){this.initialize(t,e,i,{}),this.instance=new n.replay1,(this.instance.parent=this).instance.setTransform(8.8,10,1,1,0,0,0,8.8,10),this.timeline.addTween(w.Tween.get(this.instance).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(0,0,17.5,20),(n._03848_clock_KB_HTML5Canvas=function(t,e,i){this.initialize(t,e,i,{start:52,end:776}),this.frame_0=function(){function t(){e.playoverlay._off=!0,e.gotoAndPlay(52)}if(!0===$.browser.mobile){this.stop();var e=this;this.playoverlay.addEventListener("click",t)}else this.gotoAndPlay(52)},this.frame_52=function(){},this.frame_159=function(){function t(){s.updateCache()}function e(){o.updateCache()}function i(){var t=(new createjs.ColorMatrix).adjustColor(p.brightness,p.contrast,p.saturation,p.hue),e=new createjs.ColorMatrixFilter(t);r.filters=[e]}function n(){r.updateCache()}var s=this.s18_1,a=new w.ColorFilter(0,0,0,1,255,255,78,-255);s.filters=[a],s.cache(-5,-5,150,100);new w.Tween.get(a,{useTicks:!0}).to({alphaOffset:0},3);s18_1Listener=createjs.Ticker.on("tick",t,this);var o=this.s1_1,h=new w.ColorFilter(.47,.47,.47,1,135,59,1,0);o.filters=[h],o.updateCache();new w.Tween.get(h,{useTicks:!0}).to({redMultiplier:1,greenMultiplier:1,blueMultiplier:1,redOffset:0,greenOffset:0,blueOffset:0},22);s1_1Listener=createjs.Ticker.on("tick",e,this);var r=this.s17_1,c=(new createjs.ColorMatrix).adjustColor(100,43,0,0),l=new createjs.ColorMatrixFilter(c);r.filters=[l],r.updateCache();var p={brightness:100,contrast:43};new w.Tween.get(p,{useTicks:!0}).to({brightness:0,contrast:0},22).addEventListener("change",i);s17_1Listener=createjs.Ticker.on("tick",n,this),playSound("tick1")},this.frame_162=function(){var t=this.s18_1,e=new w.ColorFilter(0,0,0,1,255,255,78,0);t.filters=[e];new w.Tween.get(e,{useTicks:!0}).to({alphaOffset:-255},16)},this.frame_179=function(){createjs.Ticker.off("tick",s18_1Listener)},this.frame_182=function(){createjs.Ticker.off("tick",s1_1Listener)},this.frame_222=function(){playSound("tick2")},this.frame_223=function(){function t(){n.updateCache()}function e(){a.updateCache()}function i(){var t=(new createjs.ColorMatrix).adjustColor(l.brightness,l.contrast,l.saturation,l.hue),e=new createjs.ColorMatrixFilter(t);h.filters=[e]}var n=this.s18_2,s=new w.ColorFilter(0,0,0,1,255,72,255,-255);n.filters=[s],n.cache(-5,-5,150,100);new w.Tween.get(s,{useTicks:!0}).to({redOffset:204,greenOffset:0,alphaOffset:0},3);s18_2Listener=createjs.Ticker.on("tick",t,this);var a=this.s15_1,o=new w.ColorFilter(.61,.61,.61,1,82,29,99,0);a.filters=[o],a.cache(-5,-5,200,500);new w.Tween.get(o,{useTicks:!0}).to({redMultiplier:1,greenMultiplier:1,blueMultiplier:1,redOffset:0,greenOffset:0,blueOffset:0},22);s15_1Listener=createjs.Ticker.on("tick",e,this);var h=this.s17_1,r=(new createjs.ColorMatrix).adjustColor(-100,53,-50,0),c=new createjs.ColorMatrixFilter(r);h.filters=[c],h.updateCache();var l={brightness:-100,contrast:53,saturation:-50};new w.Tween.get(l,{useTicks:!0}).to({brightness:0,contrast:0,saturation:0},22).addEventListener("change",i)},this.frame_226=function(){var t=this.s18_2,e=new w.ColorFilter(0,0,0,1,204,0,255,0);t.filters=[e];new w.Tween.get(e,{useTicks:!0}).to({redOffset:255,greenOffset:72,alphaOffset:-255},16)},this.frame_243=function(){createjs.Ticker.off("tick",s18_2Listener)},this.frame_246=function(){createjs.Ticker.off("tick",s15_1Listener)},this.frame_287=function(){this.gotoAndPlay(159)},this.frame_776=function(){},this.timeline.addTween(w.Tween.get(this).call(this.frame_0).wait(52).call(this.frame_52).wait(107).call(this.frame_159).wait(3).call(this.frame_162).wait(17).call(this.frame_179).wait(3).call(this.frame_182).wait(40).call(this.frame_222).wait(1).call(this.frame_223).wait(3).call(this.frame_226).wait(17).call(this.frame_243).wait(3).call(this.frame_246).wait(41).call(this.frame_287).wait(489).call(this.frame_776).wait(683)),this.instance=new n.replay3,(this.instance.parent=this).instance.setTransform(9.8,438.6,1,1,0,0,0,8.8,10),this.instance._off=!0,new w.ButtonHelper(this.instance,0,1,1),this.timeline.addTween(w.Tween.get(this.instance).wait(776).to({_off:!1},0).to({_off:!0},682).wait(1)),!0===$.browser.mobile?(this.playoverlay=new n.playoverlay,this.playoverlay.name="playoverlay",(this.playoverlay.parent=this).playoverlay.alpha=.8,this.timeline.addTween(w.Tween.get(this.playoverlay))):(this.instance_1=new n.volumecontrolcopy,(this.instance_1.parent=this).instance_1.setTransform(2,1.5),this.timeline.addTween(w.Tween.get(this.instance_1).to({_off:!0},1458).wait(1))),this.shape=new w.Shape,this.shape.graphics.f().s("#990000").ss(1.5,1,1).p("ECpvj4SMlTdAAAQgUAAAAAUMAAAHv9QAAAUAUAAMFTdAAAQAUAAAAgUMAAAnv9QAAgUgUAAgEAN6iMmMhlaAAAQgUAAAAAUMAAAD7/QAAAUAUAAMBlaAAAQAUAAAAgUMAAAj7/QAAgUgUAAg"),this.shape.setTransform(560.6,896.9),this.shape_1=new w.Shape,this.shape_1.graphics.f("#FFFFFF").s().p("EipuD4TQgUAAAAgUMAAAnv9QAAgUAUAAMFTdAAAQAUAAAAAUMAAAHv9QAAAUgUAAgEhX0iMSMAAAD7/QAAAUAUAAMBlaAAAQAUAAAAgUMAAAj7/QAAgUgUAAMhlaAAAQgUAAAAAUg"),this.shape_1.setTransform(560.6,896.9),this.timeline.addTween(w.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1458).wait(1)),this.instance_2=new n.Symbol8,(this.instance_2.parent=this).instance_2.setTransform(323.3,223,1,1,0,0,0,325,225),this.timeline.addTween(w.Tween.get(this.instance_2).wait(52).to({alpha:0},64).to({_off:!0},1).wait(1342)),this.instance_3=new n.Symbol7,(this.instance_3.parent=this).instance_3.setTransform(316.2,145.1,1,1,0,0,0,15.6,15.6),this.instance_3._off=!0,this.timeline.addTween(w.Tween.get(this.instance_3).wait(52).to({_off:!1},0).to({_off:!0},1406).wait(1)),this.s18_1=new n.Symbol18,this.s18_1.name="s18_1",(this.s18_1.parent=this).s18_1.setTransform(316.5,513,1,1,0,0,0,54.5,34.5),this.s18_1._off=!0,this.s18_1.filters=[new w.ColorFilter(0,0,0,1,255,255,78,-255)],this.s18_1.cache(-2,-2,113,73),this.s18_2=new n.Symbol18,this.s18_2.name="s18_2",(this.s18_2.parent=this).s18_2.setTransform(316.5,513,1,1,0,0,0,54.5,34.5),this.s18_2._off=!0,this.s18_2.filters=[new w.ColorFilter(0,0,0,1,255,72,255,-255)],this.s18_2.cache(-2,-2,113,73),this.timeline.addTween(w.Tween.get(this.s18_1).wait(159).to({_off:!1},0).wait(3).to({scaleX:1.5,scaleY:1.5},16).to({_off:!0},1).wait(1280)),this.timeline.addTween(w.Tween.get(this.s18_2).wait(223).to({_off:!1},0).wait(3).to({scaleX:1.5,scaleY:1.5},16).to({_off:!0},1).wait(1216)),this.instance_4=new n.Symbol9,(this.instance_4.parent=this).instance_4.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_4._off=!0,this.instance_5=new n.Symbol12,(this.instance_5.parent=this).instance_5.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_5._off=!0,this.timeline.addTween(w.Tween.get(this.instance_4).wait(159).to({_off:!1},0).to({alpha:0},5).to({_off:!0},1).wait(1294)),this.timeline.addTween(w.Tween.get(this.instance_5).wait(223).to({_off:!1},0).to({alpha:0},5).to({_off:!0},1).wait(1230)),this.instance_6=new n.Symbol10,(this.instance_6.parent=this).instance_6.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_6._off=!0,this.instance_7=new n.Symbol13,(this.instance_7.parent=this).instance_7.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_7._off=!0,this.timeline.addTween(w.Tween.get(this.instance_6).wait(159).to({_off:!1},0).wait(3).to({alpha:0},19).to({_off:!0},1).wait(1277)),this.timeline.addTween(w.Tween.get(this.instance_7).wait(223).to({_off:!1},0).wait(3).to({alpha:0},19).to({_off:!0},1).wait(1213)),this.instance_8=new n.Symbol11,(this.instance_8.parent=this).instance_8.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_8._off=!0,this.instance_9=new n.Symbol14,(this.instance_9.parent=this).instance_9.setTransform(324.5,842,1,1,0,0,0,325,844.5),this.instance_9._off=!0,this.timeline.addTween(w.Tween.get(this.instance_8).wait(159).to({_off:!1},0).wait(43).to({alpha:.578},16).to({alpha:.199},3).to({_off:!0},1).wait(1237)),this.timeline.addTween(w.Tween.get(this.instance_9).wait(223).to({_off:!1},0).wait(43).to({alpha:.578},16).to({alpha:.199},3).to({_off:!0},1).wait(1173)),this.instance_10=new n.clock1,(this.instance_10.parent=this).instance_10.setTransform(-.5,-2.5),this.instance_10._off=!0,this.timeline.addTween(w.Tween.get(this.instance_10).wait(52).to({_off:!1},0).to({_off:!0},1406).wait(1)),this.instance_11=new n.Symbol3,(this.instance_11.parent=this).instance_11.setTransform(319.3,676.3,1,1,0,0,0,42.6,158.7),this.instance_11._off=!0,this.timeline.addTween(w.Tween.get(this.instance_11).wait(52).to({_off:!1},0).wait(106).to({regY:158.8,rotation:-1},0).wait(1).to({rotation:1},0).to({scaleX:1,scaleY:1,rotation:17,x:319.2,y:676.4},33,w.Ease.get(1)).wait(2).to({scaleX:1,scaleY:1,rotation:1,x:319.3,y:676.3},27,w.Ease.get(-1)).wait(1).to({regY:158.7,rotation:0},0).wait(1).to({rotation:-1,y:676.2},0).to({scaleX:1,scaleY:1,rotation:-17},33,w.Ease.get(1)).wait(2).to({scaleX:1,scaleY:1,rotation:-1},27,w.Ease.get(-1)).wait(1).to({rotation:0,y:676.3},0).to({_off:!0},1172).wait(1)),this.instance_12=new n.Symbol4,(this.instance_12.parent=this).instance_12.setTransform(318,410.3,1,1,0,0,0,33,7.5),this.instance_12.shadow=new w.Shadow("rgba(255,255,255,1)",0,0,6),this.instance_12._off=!0,this.instance_13=new n.Symbol16,(this.instance_13.parent=this).instance_13.setTransform(318.5,409.3,1,1,0,0,0,24.5,6.5),this.instance_13.shadow=new w.Shadow("rgba(255,255,255,1)",0,0,6),this.instance_13._off=!0,this.timeline.addTween(w.Tween.get(this.instance_12).wait(159).to({_off:!1},0).wait(35).to({alpha:0},28).to({_off:!0},1).wait(1236)),this.timeline.addTween(w.Tween.get(this.instance_13).wait(223).to({_off:!1},0).wait(35).to({alpha:0},28).to({_off:!0},1172).wait(1)),this.instance_14=new n.heroic_3,(this.instance_14.parent=this).instance_14.setTransform(319,411.5,1,1,0,0,0,64,38.5),this.instance_14.alpha=0,this.instance_14._off=!0,this.instance_15=new n.just_3,(this.instance_15.parent=this).instance_15.setTransform(319.5,410.5,1,1,0,0,0,55.5,37.5),this.instance_15.alpha=0,this.instance_15._off=!0,this.timeline.addTween(w.Tween.get(this.instance_14).wait(159).to({_off:!1},0).to({alpha:1},10).to({alpha:0},25).to({_off:!0},1).wait(1264)),this.timeline.addTween(w.Tween.get(this.instance_15).wait(223).to({_off:!1},0).to({alpha:1},9).to({alpha:0},26).to({_off:!0},1).wait(1200)),this.instance_16=new n.Heroic6,(this.instance_16.parent=this).instance_16.setTransform(319,411.5,1,1,0,0,0,64,38.5),this.instance_16._off=!0,this.instance_17=new n.Just_6,(this.instance_17.parent=this).instance_17.setTransform(319.5,410.5,1,1,0,0,0,55.5,37.5),this.instance_17._off=!0,this.timeline.addTween(w.Tween.get(this.instance_16).wait(159).to({_off:!1},0).to({alpha:0},10).to({_off:!0},1).wait(1289)),this.timeline.addTween(w.Tween.get(this.instance_17).wait(223).to({_off:!1},0).to({alpha:0},9).to({_off:!0},1).wait(1226)),this.instance_18=new n.clock_topback,(this.instance_18.parent=this).instance_18.setTransform(215.3,360.5),this.s17_1=new n.Symbol17,this.s17_1.name="s17_1",(this.s17_1.parent=this).s17_1.setTransform(315.3,487,1,1,0,0,0,100,126.5),this.s17_1._off=!0,this.s17_1.filters=[new w.ColorMatrixFilter(new w.ColorMatrix(100,43,0,0))],this.s17_1.cache(-2,-2,204,257),this.timeline.addTween(w.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},52).to({state:[{t:this.s17_1}]},107).to({state:[{t:this.s17_1}]},22).to({state:[{t:this.s17_1}]},42).to({state:[{t:this.s17_1}]},22).to({state:[]},1213).wait(1)),this.timeline.addTween(w.Tween.get(this.s17_1).wait(159).to({_off:!1},0).wait(86).to({_off:!0},1213).wait(1)),this.s1_1=new n.Symbol1_1,this.s1_1.name="s1_1",(this.s1_1.parent=this).s1_1.setTransform(318,982,1,1,0,0,0,69,228.5),this.s1_1._off=!0,this.s1_1.filters=[new w.ColorMatrixFilter(new w.ColorMatrix(-31,-63,0,122))],this.s1_1.cache(-2,-2,142,461),this.s15_1=new n.Symbol15,this.s15_1.name="s15_1",(this.s15_1.parent=this).s15_1.setTransform(318,982,1,1,0,0,0,69,228.5),this.s15_1._off=!0,this.s15_1.filters=[new w.ColorFilter(.61,.61,.61,1,82.29,29.25,99.45,0)],this.s15_1.cache(-2,-2,142,461),this.timeline.addTween(w.Tween.get(this.s1_1).wait(52).to({_off:!1},0).wait(129).to({_off:!0},42).wait(1236)),this.timeline.addTween(w.Tween.get(this.s15_1).wait(223).to({_off:!1},0).wait(22).to({_off:!0},1213).wait(1)),this.instance_19=new n.Symbol1,(this.instance_19.parent=this).instance_19.setTransform(331.4,219.3,1,6.238,0,0,0,352.4,239),this.instance_19.filters=[new w.ColorFilter(0,0,0,1,0,0,0,0)],this.instance_19.cache(-2,-2,709,482),this.timeline.addTween(w.Tween.get(this.instance_19).to({_off:!0},1458).wait(1))}).prototype=e=new w.MovieClip,e.nominalBounds=new w.Rectangle(-203.6,-465.7,2178.6,3758.7),n.properties={id:"29E063E937B843D7BE3D76F217A6C659",width:650,height:1612,fps:25,color:"#082A00",opacity:1,manifest:[{src:"_playoverlay_1612px.png",id:"_playoverlay"},{src:"03848_atlas_.png",id:"03848_atlas_"},{src:"tick1.mp3",id:"tick1"},{src:"tick2.mp3",id:"tick2"}],preloads:[]},(n.Stage=function(t){createjs.Stage.call(this,t)}).prototype=e=new createjs.Stage,e.setAutoPlay=function(t){this.tickEnabled=t},e.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},e.stop=function(t){t&&this.seek(t),this.tickEnabled=!1},e.seek=function(t){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(n.properties.fps*t/1e3)},e.getDuration=function(){return this.getChildAt(0).totalFrames/n.properties.fps*1e3},e.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/n.properties.fps*1e3},i.bootcompsLoaded=i.bootcompsLoaded||[],i.bootstrapListeners||(i.bootstrapListeners=[]),i.bootstrapCallback=function(t){if(i.bootstrapListeners.push(t),0<i.bootcompsLoaded.length)for(var e=0;e<i.bootcompsLoaded.length;++e)t(i.bootcompsLoaded[e])},i.compositions=i.compositions||{},i.compositions["29E063E937B843D7BE3D76F217A6C659"]={getStage:function(){return exportRoot.getStage()},getLibrary:function(){return n},getSpriteSheet:function(){return a},getImages:function(){return o}},i.compositionLoaded=function(t){i.bootcompsLoaded.push(t);for(var e=0;e<i.bootstrapListeners.length;e++)i.bootstrapListeners[e](t)},i.getComposition=function(t){return i.compositions[t]}}(createjs=createjs||{},AdobeAn=AdobeAn||{});