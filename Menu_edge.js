/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Q0-Tera',
            type:'image',
            rect:['0px','0px','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Tera.png",'0px','0px']
         },
         {
            id:'AudioTappeto',
            type:'rect',
            rect:['-272px','164px','60px','60px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"AudioTappetino"
         },
         {
            id:'Q0-Albero',
            type:'image',
            rect:['-174px','23px','411px','562px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Albero.png",'0px','0px']
         },
         {
            id:'Q0-Cespuglio',
            type:'image',
            rect:['-72px','503px','298px','281px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Cespuglio.png",'0px','0px']
         },
         {
            id:'Q0-Cestino',
            type:'image',
            rect:['560px','569px','183px','154px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Cestino.png",'0px','0px']
         },
         {
            id:'fiore2',
            type:'rect',
            rect:['0','643px','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'fiore3',
            type:'rect',
            rect:['93','671','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'fiore1',
            type:'rect',
            rect:['51','556','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'InfoButt',
            type:'rect',
            rect:['858','663','auto','auto','auto','auto'],
            userClass:"InfoButt"
         },
         {
            id:'musica',
            type:'rect',
            rect:['935','663','auto','auto','auto','auto'],
            userClass:"musica"
         },
         {
            id:'RobertaName',
            type:'rect',
            rect:['562','227','auto','auto','auto','auto'],
            userClass:"roberta"
         },
         {
            id:'Q0-Nuvola',
            type:'image',
            rect:['898px','18px','144px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Nuvola.png",'0px','0px']
         },
         {
            id:'Play',
            type:'rect',
            rect:['269','10','auto','auto','auto','auto'],
            userClass:"play"
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['149','209','auto','auto','auto','auto'],
            userClass:"scoiattolo",
            filter:[0,0,1,1.1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'Q0-Splash',
            type:'image',
            rect:['712px','322px','292px','246px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Splash.png",'0px','0px']
         },
         {
            id:'uno',
            type:'rect',
            rect:['617','596','auto','auto','auto','auto'],
            userClass:"uno"
         },
         {
            id:'due',
            type:'rect',
            rect:['663','545','auto','auto','auto','auto'],
            userClass:"due"
         },
         {
            id:'tre',
            type:'rect',
            rect:['710','486','auto','auto','auto','auto'],
            userClass:"tre"
         },
         {
            id:'quattro',
            type:'rect',
            rect:['775','443','auto','auto','auto','auto'],
            userClass:"quattro"
         },
         {
            id:'cinquo',
            type:'rect',
            rect:['844','410','auto','auto','auto','auto'],
            userClass:"cinquo"
         },
         {
            id:'letscountsymbolo',
            type:'rect',
            rect:['558','43','auto','auto','auto','auto'],
            userClass:"letscount"
         },
         {
            id:'popuppo',
            display:'none',
            type:'rect',
            rect:['78','272','auto','auto','auto','auto'],
            userClass:"popuppo"
         },
         {
            id:'AudioMenuTappeto',
            type:'rect',
            rect:['-283','11','auto','auto','auto','auto'],
            userClass:"AudioMenuTappeto"
         }],
         symbolInstances: [
         {
            id:'fiore3',
            symbolName:'fiore3'
         },
         {
            id:'AudioMenuTappeto',
            symbolName:'AudioMenuTappeto'
         },
         {
            id:'quattro',
            symbolName:'quattro'
         },
         {
            id:'musica',
            symbolName:'musica'
         },
         {
            id:'fiore1',
            symbolName:'fiore1'
         },
         {
            id:'popuppo',
            symbolName:'popuppo'
         },
         {
            id:'letscountsymbolo',
            symbolName:'letscountsymbolo'
         },
         {
            id:'cinquo',
            symbolName:'cinquo'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'tre',
            symbolName:'tre'
         },
         {
            id:'RobertaName',
            symbolName:'RobertaName'
         },
         {
            id:'uno',
            symbolName:'uno'
         },
         {
            id:'due',
            symbolName:'due'
         },
         {
            id:'fiore2',
            symbolName:'fiore2'
         },
         {
            id:'Play',
            symbolName:'Play'
         },
         {
            id:'InfoButt',
            symbolName:'InfoButt'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Q0-Nuvola}": [
            ["style", "top", '18px'],
            ["style", "left", '898px']
         ],
         "${_Play}": [
            ["style", "left", '262px'],
            ["style", "top", '18px']
         ],
         "${_tre}": [
            ["style", "left", '719px'],
            ["style", "top", '476px']
         ],
         "${_Scoiattolo}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1.02703'],
            ["subproperty", "filter.drop-shadow.offsetV", '-5px'],
            ["subproperty", "filter.saturate", '1.1'],
            ["style", "top", '200px'],
            ["transform", "scaleY", '1.02703'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px'],
            ["style", "left", '157px'],
            ["subproperty", "filter.drop-shadow.blur", '16px']
         ],
         "${_Q0-Albero}": [
            ["style", "left", '-174px'],
            ["style", "top", '23px']
         ],
         "${_popuppo}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.77)'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '224px'],
            ["subproperty", "filter.drop-shadow.offsetH", '23px'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["subproperty", "filter.drop-shadow.blur", '62px'],
            ["subproperty", "filter.drop-shadow.offsetV", '19px']
         ],
         "${_due}": [
            ["style", "top", '510px'],
            ["style", "left", '651px']
         ],
         "${_fiore3}": [
            ["style", "left", '102px'],
            ["style", "top", '652px']
         ],
         "${_Q0-Cestino}": [
            ["style", "left", '560px'],
            ["style", "top", '569px']
         ],
         "${_fiore2}": [
            ["style", "top", '663px'],
            ["style", "left", '4px']
         ],
         "${_AudioTappeto}": [
            ["style", "opacity", '0']
         ],
         "${_Q0-Splash}": [
            ["style", "left", '712px'],
            ["style", "top", '322px']
         ],
         "${_Q0-Tera}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_uno}": [
            ["style", "left", '598px'],
            ["style", "top", '559px']
         ],
         "${_Q0-Cespuglio}": [
            ["style", "left", '-72px'],
            ["style", "top", '503px']
         ],
         "${_quattro}": [
            ["style", "left", '773px'],
            ["style", "top", '435px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid11631", tween: [ "style", "${_quattro}", "top", '435px', { fromValue: '435px'}], position: 0, duration: 0 },
            { id: "eid11629", tween: [ "style", "${_tre}", "top", '476px', { fromValue: '476px'}], position: 0, duration: 0 },
            { id: "eid11492", tween: [ "transform", "${_popuppo}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11550", tween: [ "transform", "${_popuppo}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11675", tween: [ "style", "${_Play}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11548", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetV", '19px', { fromValue: '19px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11549", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.blur", '62px', { fromValue: '62px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11490", tween: [ "style", "${_popuppo}", "left", '224px', { fromValue: '224px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11491", tween: [ "style", "${_popuppo}", "top", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11628", tween: [ "style", "${_tre}", "left", '719px', { fromValue: '719px'}], position: 0, duration: 0 },
            { id: "eid11545", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.color", 'rgba(0,0,0,0.77)', { fromValue: 'rgba(0,0,0,0.77)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11637", tween: [ "style", "${_uno}", "top", '559px', { fromValue: '559px'}], position: 0, duration: 0 },
            { id: "eid11673", tween: [ "style", "${_popuppo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11681", tween: [ "style", "${_fiore3}", "left", '102px', { fromValue: '102px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11623", tween: [ "style", "${_Scoiattolo}", "left", '157px', { fromValue: '157px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11674", tween: [ "style", "${_Play}", "left", '262px', { fromValue: '262px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11679", tween: [ "style", "${_fiore2}", "top", '663px', { fromValue: '663px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11547", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetH", '23px', { fromValue: '23px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11614", tween: [ "transform", "${_Scoiattolo}", "scaleY", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11640", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.blur", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
            { id: "eid11605", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetV", '-5px', { fromValue: '-5px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11608", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11489", tween: [ "transform", "${_popuppo}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11638", tween: [ "style", "${_due}", "left", '651px', { fromValue: '651px'}], position: 0, duration: 0 },
            { id: "eid11620", tween: [ "style", "${_Scoiattolo}", "top", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11680", tween: [ "style", "${_fiore2}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11630", tween: [ "style", "${_quattro}", "left", '773px', { fromValue: '773px'}], position: 0, duration: 0 },
            { id: "eid11606", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11613", tween: [ "transform", "${_Scoiattolo}", "scaleX", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11639", tween: [ "style", "${_due}", "top", '510px', { fromValue: '510px'}], position: 0, duration: 0 },
            { id: "eid11682", tween: [ "style", "${_fiore3}", "top", '652px', { fromValue: '652px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11636", tween: [ "style", "${_uno}", "left", '598px', { fromValue: '598px'}], position: 0, duration: 0 },
            { id: "eid11568", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Scoiattolo}', [] ], ""], position: 0 }         ]
      }
   }
},
"fiore1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Fiore3',
      type: 'image',
      rect: ['0px','0px','69px','73px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Fiore3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '69px']
         ],
         "${_Q0-Fiore3}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [46,48.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid11451", tween: [ "transform", "${_Q0-Fiore3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInOutCirc" },
            { id: "eid11453", tween: [ "style", "${_Q0-Fiore3}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 }         ]
      }
   }
},
"fiore2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Fiore',
      type: 'image',
      rect: ['0px','0px','73px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Fiore.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Fiore}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '73px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid11455", tween: [ "style", "${_Q0-Fiore}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid11456", tween: [ "transform", "${_Q0-Fiore}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInOutCirc" }         ]
      }
   }
},
"fiore3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Fiore2',
      type: 'image',
      rect: ['0px','0px','71px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Fiore2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '71px']
         ],
         "${_Q0-Fiore2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid11457", tween: [ "style", "${_Q0-Fiore2}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid11458", tween: [ "transform", "${_Q0-Fiore2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInOutCirc" }         ]
      }
   }
},
"Play": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Q0-Layer-4',
      rect: ['0px','0px','189px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Layer-4.png','0px','0px']
   },
   {
      id: 'Q0-Play',
      type: 'image',
      rect: ['26px','76px','140px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Play.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Layer-4}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
            ["subproperty", "filter.drop-shadow.blur", '0px'],
            ["subproperty", "filter.drop-shadow.offsetV", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Q0-Play}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '26px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '175px'],
            ["style", "width", '189px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 408,
         autoPlay: false,
         timeline: [
            { id: "eid11473", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11477", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11480", tween: [ "transform", "${_Q0-Play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11463", tween: [ "transform", "${_Q0-Play}", "scaleY", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11471", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,1.00)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11478", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,0.00)', { fromValue: 'rgb(255,0,0)'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11460", tween: [ "transform", "${_Q0-Play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11462", tween: [ "transform", "${_Q0-Play}", "scaleX", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11472", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11476", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11465", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11466", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '1', { fromValue: '2'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11474", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '19px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11475", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '0px', { fromValue: '19px'}], position: 250, duration: 158, easing: "easeOutCirc" }         ]
      }
   }
},
"InfoButt": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Info',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Info.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ],
         "${_Q0-Info}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 393,
         autoPlay: false,
         timeline: [
            { id: "eid11533", tween: [ "transform", "${_Q0-Info}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11535", tween: [ "transform", "${_Q0-Info}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11532", tween: [ "transform", "${_Q0-Info}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11534", tween: [ "transform", "${_Q0-Info}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"popuppo": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      userClass: 'chiudix',
      rect: ['-43%','-82.7%','1055px','803px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.36)',[50,50,'true','farthest-corner',[['rgba(0,0,0,0.69)',0],['rgba(0,0,0,0.00)',100]]]]
   },
   {
      rect: ['-56px','-42px','700px','373px','auto','auto'],
      id: 'Q0-PopUp',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-PopUp.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['556px','-66px','145px','111px','auto','auto'],
      userClass: 'chiudix',
      id: 'Rectangle2',
      opacity: 0,
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(0,0,0,0.3594)']
   },
   {
      rect: ['274px','191px','322px','41px','auto','auto'],
      opacity: 0,
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.3594)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "opacity", '0']
         ],
         "${_Q0-PopUp}": [
            ["style", "top", '-42px'],
            ["style", "left", '-56px'],
            ["style", "height", '373px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,0.36)'],
            ["style", "top", '-82.67%'],
            ["style", "height", '803px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(0,0,0,0.69)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '-42.98%'],
            ["style", "width", '1055px']
         ],
         "${symbolSelector}": [
            ["style", "height", '308px'],
            ["style", "width", '563px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '-66px'],
            ["style", "opacity", '0'],
            ["style", "left", '556px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"cinquo": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-5',
      type: 'image',
      rect: ['0px','0px','51px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-5.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-5}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '51px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 586.26433484861,
         autoPlay: false,
         timeline: [
            { id: "eid11502", tween: [ "transform", "${_Q0-5}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11501", tween: [ "transform", "${_Q0-5}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11504", tween: [ "transform", "${_Q0-5}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11497", tween: [ "transform", "${_Q0-5}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11500", tween: [ "transform", "${_Q0-5}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11503", tween: [ "transform", "${_Q0-5}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"quattro": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-4',
      type: 'image',
      rect: ['0px','0px','60px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-4.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-4}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 586,
         autoPlay: false,
         timeline: [
            { id: "eid11505", tween: [ "transform", "${_Q0-4}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11506", tween: [ "transform", "${_Q0-4}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11507", tween: [ "transform", "${_Q0-4}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11508", tween: [ "transform", "${_Q0-4}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11509", tween: [ "transform", "${_Q0-4}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11510", tween: [ "transform", "${_Q0-4}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"tre": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-3',
      type: 'image',
      rect: ['0px','0px','52px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-3}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 586.26433484861,
         autoPlay: false,
         timeline: [
            { id: "eid11511", tween: [ "transform", "${_Q0-3}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11512", tween: [ "transform", "${_Q0-3}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11513", tween: [ "transform", "${_Q0-3}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11514", tween: [ "transform", "${_Q0-3}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11515", tween: [ "transform", "${_Q0-3}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11516", tween: [ "transform", "${_Q0-3}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"due": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-2',
      type: 'image',
      rect: ['0px','0px','56px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-2}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 586.26433484861,
         autoPlay: false,
         timeline: [
            { id: "eid11517", tween: [ "transform", "${_Q0-2}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11518", tween: [ "transform", "${_Q0-2}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11519", tween: [ "transform", "${_Q0-2}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11520", tween: [ "transform", "${_Q0-2}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11521", tween: [ "transform", "${_Q0-2}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11522", tween: [ "transform", "${_Q0-2}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"uno": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-1',
      type: 'image',
      rect: ['0px','0px','50px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-1}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 586.26433484861,
         autoPlay: false,
         timeline: [
            { id: "eid11523", tween: [ "transform", "${_Q0-1}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11524", tween: [ "transform", "${_Q0-1}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11525", tween: [ "transform", "${_Q0-1}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11526", tween: [ "transform", "${_Q0-1}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11527", tween: [ "transform", "${_Q0-1}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11528", tween: [ "transform", "${_Q0-1}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"musica": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'Q0-Music',
      rect: ['0px','0px','80px','80px','auto','auto'],
      userClass: 'musicanrm',
      fill: ['rgba(0,0,0,0)','images/Q0-Music.png','0px','0px']
   },
   {
      userClass: 'musicagray',
      fill: ['rgba(0,0,0,0)','images/Q0-Music-Gray.png','0px','0px','100%','100%'],
      display: 'none',
      id: 'Q0-MusicGray',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Music}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Q0-MusicGray}": [
            ["subproperty", "boxShadow.inset", ''],
            ["subproperty", "boxShadow.blur", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0)']
         ],
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 393,
         autoPlay: false,
         timeline: [
            { id: "eid11641", tween: [ "transform", "${_Q0-MusicGray}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11642", tween: [ "transform", "${_Q0-MusicGray}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11649", tween: [ "style", "${_Q0-MusicGray}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11648", tween: [ "style", "${_Q0-MusicGray}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11643", tween: [ "transform", "${_Q0-MusicGray}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11644", tween: [ "transform", "${_Q0-MusicGray}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"AudioMenuTappeto": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','23px','23px','auto','auto'],
      userClass: '',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '118px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '103px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '118px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid11557", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11529", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11559", tween: [ "style", "${_Rectangle}", "width", '118px', { fromValue: '118px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11558", tween: [ "style", "${_Rectangle}", "height", '103px', { fromValue: '103px'}], position: 0, duration: 0, easing: "swing" }         ]
      }
   }
},
"Scoiattolo": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-206px','74px','442px','350px','auto','auto'],
      id: 'Q0-Coda',
      transform: [[0,0],[],[],['0.529','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-Coda.png','0px','0px']
   },
   {
      id: 'Q0-Braccio-Carota',
      type: 'image',
      rect: ['251px','142px','189px','164px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Braccio-Carota.png','0px','0px']
   },
   {
      id: 'Q0-Corpo',
      type: 'image',
      rect: ['143px','202px','204px','317px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Corpo.png','0px','0px']
   },
   {
      rect: ['131px','6px','219px','300px','auto','auto'],
      transform: [[0,0],[],[],['1.02','1.02']],
      id: 'Q0-Testa',
      userClass: 'testona',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-Testa.png','0px','0px']
   },
   {
      id: 'Q0-Braccio',
      type: 'image',
      rect: ['148px','194px','76px','122px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Braccio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Braccio}": [
            ["style", "height", '122px'],
            ["style", "top", '194px'],
            ["style", "left", '148px'],
            ["style", "width", '76px']
         ],
         "${_Q0-Coda}": [
            ["style", "-webkit-transform-origin", [96.04,80.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [96.04,80.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [96.04,80.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [96.04,80.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [96.04,80.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "left", '-215px'],
            ["style", "top", '74px']
         ],
         "${symbolSelector}": [
            ["style", "height", '517px'],
            ["style", "width", '438px']
         ],
         "${_Q0-Testa}": [
            ["style", "top", '6px'],
            ["transform", "scaleX", '1.02'],
            ["transform", "scaleY", '1.02'],
            ["style", "left", '131px']
         ],
         "${_Q0-Corpo}": [
            ["style", "height", '317px'],
            ["style", "top", '202px'],
            ["style", "left", '143px'],
            ["style", "width", '204px']
         ],
         "${_Q0-Braccio-Carota}": [
            ["style", "height", '164px'],
            ["style", "top", '142px'],
            ["style", "left", '251px'],
            ["style", "width", '189px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: false,
         timeline: [
            { id: "eid11565", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 380, duration: 206, easing: "swing" },
            { id: "eid11566", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '-5deg', { fromValue: '8deg'}], position: 586, duration: 164, easing: "swing" },
            { id: "eid11567", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 750, duration: 118, easing: "swing" },
            { id: "eid11602", tween: [ "style", "${_Q0-Coda}", "left", '-215px', { fromValue: '-215px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11598", tween: [ "transform", "${_Q0-Coda}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11597", tween: [ "transform", "${_Q0-Coda}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "swing" }         ]
      }
   }
},
"RobertaName": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-NOME',
      type: 'image',
      rect: ['0px','0px','362px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-NOME.png','0px','0px']
   },
   {
      id: 'Q0-NOMECopy',
      type: 'image',
      rect: ['0px','0px','362px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-NOME.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-NOMECopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_Q0-NOME}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '362px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 626,
         autoPlay: false,
         timeline: [
            { id: "eid11676", tween: [ "transform", "${_Q0-NOMECopy}", "scaleY", '1.09', { fromValue: '1'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11678", tween: [ "transform", "${_Q0-NOMECopy}", "scaleY", '1', { fromValue: '1.09'}], position: 320, duration: 223, easing: "swing" },
            { id: "eid11664", tween: [ "transform", "${_Q0-NOMECopy}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11667", tween: [ "transform", "${_Q0-NOMECopy}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 320, duration: 223, easing: "easeOutBounce" },
            { id: "eid11657", tween: [ "style", "${_Q0-NOME}", "top", '-12px', { fromValue: '0px'}], position: 45, duration: 205 },
            { id: "eid11658", tween: [ "style", "${_Q0-NOME}", "top", '0px', { fromValue: '-12px'}], position: 250, duration: 376, easing: "easeOutBounce" },
            { id: "eid11661", tween: [ "style", "${_Q0-NOME}", "display", 'none', { fromValue: 'block'}], position: 45, duration: 0, easing: "easeOutBounce" },
            { id: "eid11665", tween: [ "transform", "${_Q0-NOMECopy}", "scaleX", '1.09', { fromValue: '1'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11668", tween: [ "transform", "${_Q0-NOMECopy}", "scaleX", '1', { fromValue: '1.09'}], position: 320, duration: 223, easing: "easeOutBounce" }         ]
      }
   }
},
"letscountsymbolo": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Counting',
      type: 'image',
      rect: ['32px','77px','347px','98px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Counting.png','0px','0px']
   },
   {
      id: 'Q0-Lets',
      type: 'image',
      rect: ['0px','0px','202px','73px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Lets.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Counting}": [
            ["style", "top", '77px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '98px'],
            ["style", "left", '32px'],
            ["style", "width", '347px']
         ],
         "${_Q0-Lets}": [
            ["style", "height", '73px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '175px'],
            ["style", "width", '379px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 581.09375,
         autoPlay: false,
         timeline: [
            { id: "eid11685", tween: [ "transform", "${_Q0-Lets}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid11688", tween: [ "transform", "${_Q0-Lets}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 335, duration: 246, easing: "easeInOutQuad" },
            { id: "eid11686", tween: [ "transform", "${_Q0-Counting}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 335, easing: "easeInOutQuad" },
            { id: "eid11687", tween: [ "transform", "${_Q0-Counting}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 335, duration: 246, easing: "easeInOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Menu");
