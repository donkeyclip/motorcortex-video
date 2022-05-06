!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@kissmybutton/motorcortex-video"]=e(t.MotorCortex)}(this,(function(t){"use strict";class e extends t.BrowserClip{get html(){this.width=this.attrs.width||640,this.height=this.attrs.height||360,this.startFrom=this.attrs.startFrom||0;const t="width:".concat(this.width,"px;height:").concat(this.height,"px;"),e=this.attrs.sources.map((t=>'<source src="'.concat(t,"#t=").concat(this.startFrom,'"></source>'))).join("\n");return'\n      <div>\n          <video id="video" style="'.concat(t,'" preload="auto" playsinline>\n              ').concat(e,'\n          </video>\n          <canvas id="canvas"></canvas>\n      </div>\n    ')}get css(){return"\n      #video{\n        display:none;\n      }\n    "}setVolume(t){this.video.volume=t}onAfterRender(){const t=this.context.getElements("video")[0];this.video=t;const e=this.context.getElements("canvas")[0],i=e.getContext("2d");if(t.addEventListener("loadedmetadata",(()=>{const i=this.width/t.videoWidth,n=this.width/t.videoWidth;e.style.transform="scale(".concat(i,", ").concat(n,")"),e.width=t.videoWidth,e.height=t.videoHeight}),{once:!0}),this.setCustomEntity("video",{video:t,canvas:e,ctx:i,startFrom:this.startFrom}),!1===this.attrs.audio)t.muted=!0;else{const e=this;setTimeout((()=>{t.crossOrigin="anonymous";const i=e.DescriptiveIncident.volumeChangeSubscribe(e.id,e.setVolume.bind(e));e.setVolume(i)}),0)}}}class i extends t.MediaPlayback{play(){const t=this.element.entity.video;return t.play(),!0!==this.hasSetWaitingListener&&(t.addEventListener("waiting",this.waitingHandler.bind(this)),this.hasSetWaitingListener=!0),!0!==this.hasSetCanplayListener&&(t.addEventListener("canplay",this.canplayHandler.bind(this)),this.hasSetCanplayListener=!0),this.drawFrame(t),!0}drawFrame(t){this.element.entity.ctx.drawImage(t,0,0),this.timeout=setTimeout((()=>{this.drawFrame(t)}),10)}waitingHandler(){this.setBlock("Video loading")}canplayHandler(){this.unblock()}stop(){this.element.entity.video.pause(),clearTimeout(this.timeout)}onProgress(t){const e=t+this.element.entity.startFrom;this.element.entity.video.currentTime=(e+t)/1e3,this.element.entity.ctx.drawImage(this.element.entity.video,0,0)}}var n={filter:["blur","brightness","contrast","drop-shadow","grayscale","hue-rotate","invert","opacity","saturate","sepia"]};const s=n.filter,a={opacity:"",contrast:"",saturate:"",brightness:"",blur:"px",sepia:"",invert:"",grayscale:"","hue-rotate":"deg"};class o extends t.Effect{getScratchValue(){return{opacity:1,contrast:1,saturate:1,brightness:1,blur:0,sepia:0,invert:0,grayscale:0,"hue-rotate":0}}objToFilterValue(t){let e="";for(const i in t)e+="".concat(i,"(").concat(t[i]).concat(a[i],") ");return e}onProgress(t){const e=this.getFraction(t),i=Object.assign({},this.initialValue);for(const t in s){const n=s[t];this.initialValue[n]!==this.targetValue[n]&&(i[n]=e*(this.targetValue[n]-this.initialValue[n])+this.initialValue[n])}this.element.entity.ctx.filter=this.objToFilterValue(i)}}return{npm_name:"@kissmybutton/motorcortex-video",version:"2.2.0",incidents:[{exportable:i,name:"Playback"},{exportable:o,name:"VideoEffect",attributesValidationRules:{animatedAttrs:{type:"object",props:{filter:{type:"object",props:{blur:{type:"number",min:0,optional:!0},brightness:{type:"number",min:0,max:1,optional:!0},contrast:{type:"number",min:0,optional:!0},grayscale:{type:"number",min:0,max:1,optional:!0},"hue-rotate":{type:"number",optional:!0},invert:{type:"number",min:0,max:1,optional:!0},opacity:{type:"number",min:0,max:1,optional:!0},saturate:{type:"number",min:0,optional:!0},sepia:{type:"number",min:0,max:1,optional:!0}}}}}}}],compositeAttributes:n,Clip:{exportable:e,attributesValidationRules:{sources:{optional:!1,type:"array",min:1,items:{type:"string"}},width:{optional:!0,type:"number",integer:!0,positive:!0},height:{optional:!0,type:"number",integer:!0,positive:!0},startFrom:{optional:!0,type:"number",integer:!0,min:0},audio:{optional:!0,type:"boolean",default:!0}}},capabilities:{speed:!1,preview:!1},audio:"on"}}));
