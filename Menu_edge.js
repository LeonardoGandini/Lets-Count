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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            id:'Q0-Counting',
            type:'image',
            rect:['522px','182px','469px','89px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Counting.png",'0px','0px']
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
            id:'Q0-Lets',
            type:'image',
            rect:['522px','20px','202px','76px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Let%E2%80%99s.png",'0px','0px']
         },
         {
            id:'musica',
            type:'rect',
            rect:['935','663','auto','auto','auto','auto'],
            userClass:"musica"
         },
         {
            id:'Q0-NOME',
            type:'image',
            rect:['576px','273px','362px','44px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-NOME.png",'0px','0px']
         },
         {
            id:'Q0-Nuvola',
            type:'image',
            rect:['898px','26px','144px','103px','auto','auto'],
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
            id:'Q0-Cestino-copy',
            type:'image',
            rect:['625px','641px','48px','43px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Cestino-copy.png",'0px','0px']
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
            id:'Q0-Start',
            type:'image',
            rect:['570px','99px','263px','83px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q0-Start.png",'0px','0px']
         },
         {
            id:'popuppo',
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
            id:'AudioMenuTappeto',
            symbolName:'AudioMenuTappeto'
         },
         {
            id:'popuppo',
            symbolName:'popuppo'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'cinquo',
            symbolName:'cinquo'
         },
         {
            id:'tre',
            symbolName:'tre'
         },
         {
            id:'InfoButt',
            symbolName:'InfoButt'
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
            id:'uno',
            symbolName:'uno'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Q0-Nuvola}": [
            ["style", "left", '898px'],
            ["style", "top", '26px']
         ],
         "${_Q0-NOME}": [
            ["style", "left", '576px'],
            ["style", "top", '273px']
         ],
         "${_Q0-Cespuglio}": [
            ["style", "left", '-72px'],
            ["style", "top", '503px']
         ],
         "${_Q0-Tera}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Q0-Start}": [
            ["style", "left", '570px'],
            ["style", "top", '99px']
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
            ["subproperty", "filter.drop-shadow.offsetV", '19px'],
            ["subproperty", "filter.drop-shadow.blur", '62px']
         ],
         "${_Q0-Counting}": [
            ["style", "left", '522px'],
            ["style", "top", '182px']
         ],
         "${_Q0-Cestino-copy}": [
            ["style", "left", '625px'],
            ["style", "top", '641px']
         ],
         "${_Q0-Lets}": [
            ["style", "left", '522px'],
            ["style", "top", '20px']
         ],
         "${_Q0-Cestino}": [
            ["style", "left", '560px'],
            ["style", "top", '569px']
         ],
         "${_fiore2}": [
            ["style", "top", '643px']
         ],
         "${_AudioTappeto}": [
            ["style", "opacity", '0']
         ],
         "${_Scoiattolo}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1.02703'],
            ["subproperty", "filter.drop-shadow.offsetV", '-5px'],
            ["subproperty", "filter.saturate", '1.1'],
            ["style", "top", '200px'],
            ["transform", "scaleY", '1.02703'],
            ["subproperty", "filter.drop-shadow.blur", '15px'],
            ["style", "left", '157px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px']
         ],
         "${_Q0-Splash}": [
            ["style", "left", '712px'],
            ["style", "top", '322px']
         ],
         "${_Play}": [
            ["style", "left", '236px'],
            ["style", "top", '20px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '748px'],
            ["style", "width", '1024px']
         ],
         "${_Q0-Albero}": [
            ["style", "left", '-174px'],
            ["style", "top", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 339,
         autoPlay: true,
         timeline: [
            { id: "eid11547", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetH", '23px', { fromValue: '23px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11492", tween: [ "transform", "${_popuppo}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11550", tween: [ "transform", "${_popuppo}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11562", tween: [ "style", "${_Play}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid11548", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetV", '19px', { fromValue: '19px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11549", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.blur", '62px', { fromValue: '62px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11490", tween: [ "style", "${_popuppo}", "left", '224px', { fromValue: '224px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11606", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11545", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.color", 'rgba(0,0,0,0.77)', { fromValue: 'rgba(0,0,0,0.77)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11563", tween: [ "style", "${_Play}", "left", '236px', { fromValue: '236px'}], position: 0, duration: 0 },
            { id: "eid11610", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.blur", '15px', { fromValue: '15px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11608", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11489", tween: [ "transform", "${_popuppo}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11614", tween: [ "transform", "${_Scoiattolo}", "scaleY", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11620", tween: [ "style", "${_Scoiattolo}", "top", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11613", tween: [ "transform", "${_Scoiattolo}", "scaleX", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11623", tween: [ "style", "${_Scoiattolo}", "left", '157px', { fromValue: '157px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11605", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetV", '-5px', { fromValue: '-5px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11491", tween: [ "style", "${_popuppo}", "top", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11568", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Scoiattolo}', [] ], ""], position: 0 }         ]
      }
   }
},
"fiore1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${_Q0-Fiore3}": [
            ["style", "-webkit-transform-origin", [46,48.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [46,48.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '69px']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${_Q0-Fiore2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '71px']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','189px','175px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Q0-Layer-4',
      type: 'image',
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
            ["subproperty", "filter.saturate", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "filter.drop-shadow.offsetV", '0px'],
            ["subproperty", "filter.drop-shadow.blur", '0px']
         ],
         "${_Q0-Play}": [
            ["style", "top", '76px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '26px']
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
            { id: "eid11473", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11477", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11471", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,1.00)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11478", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,0.00)', { fromValue: 'rgb(255,0,0)'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11480", tween: [ "transform", "${_Q0-Play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11463", tween: [ "transform", "${_Q0-Play}", "scaleY", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11460", tween: [ "transform", "${_Q0-Play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11462", tween: [ "transform", "${_Q0-Play}", "scaleX", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11472", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11476", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11465", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11466", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '1', { fromValue: '2'}], position: 250, duration: 158, easing: "easeInOutCirc" },
            { id: "eid11474", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '19px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutCirc" },
            { id: "eid11475", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '0px', { fromValue: '19px'}], position: 250, duration: 158, easing: "easeInOutCirc" }         ]
      }
   }
},
"InfoButt": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${_Q0-Info}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px']
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
            { id: "eid11533", tween: [ "transform", "${_Q0-Info}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11535", tween: [ "transform", "${_Q0-Info}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11532", tween: [ "transform", "${_Q0-Info}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11534", tween: [ "transform", "${_Q0-Info}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"popuppo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      id: 'Q0-PopUp',
      type: 'image',
      rect: ['-56px','-42px','700px','356px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-PopUp.png','0px','0px']
   },
   {
      userClass: 'chiudix',
      id: 'chiudix',
      type: 'rect',
      clip: ['rect(0px 119pxpx 56pxpx 0px)'],
      rect: ['570','-12','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'chiudix',
      symbolName: 'chiudix'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '308px'],
            ["style", "width", '563px']
         ],
         "${_chiudix}": [
            ["style", "clip", [0,55,56,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Q0-PopUp}": [
            ["style", "top", '-42px'],
            ["style", "left", '-56px']
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
"chiudix": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','44px','44px','auto','auto'],
      borderRadius: ['4px 4px','4px 4px','4px 4px','4px 4px'],
      boxShadow: ['',3,3,18,0,'rgba(0,0,0,0.65)'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)',[270,[['rgba(164,157,174,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   },
   {
      rect: ['16px','0px','12px','44px','auto','auto'],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      transform: [[0,0],['-45'],[],['0.84','0.84']],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['16px','0px','12px','44px','auto','auto'],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      transform: [[0,0],['45'],[],['0.84','0.84']],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-45deg'],
            ["transform", "scaleX", '0.84'],
            ["style", "left", '16px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.84'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle}": [
            ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '18px'],
            ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(164,157,174,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '45deg'],
            ["transform", "scaleX", '0.84'],
            ["style", "left", '16px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.84'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '119px']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["transform", "scaleX", '1'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
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
         duration: 586.26433484861,
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Q0-Music',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-Music.png','0px','0px']
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
         "${_Q0-Music}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
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
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"AudioMenuTappeto": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      userClass: '',
      rect: ['0px','0px','23px','23px','auto','auto'],
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
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '103px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '118px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
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
            { id: "eid11558", tween: [ "style", "${_Rectangle}", "height", '103px', { fromValue: '103px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11559", tween: [ "style", "${_Rectangle}", "width", '118px', { fromValue: '118px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11529", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11557", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" }         ]
      }
   }
},
"Scoiattolo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-206px','74px','442px','350px','auto','auto'],
      id: 'Q0-Coda',
      transform: [[],[],[],['0.529','0.529']],
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
      id: 'Q0-Testa',
      transform: [[],[],[],['1.02','1.02']],
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
            ["transform", "scaleY", '1.02'],
            ["style", "left", '131px'],
            ["transform", "scaleX", '1.02']
         ],
         "${_Q0-Braccio}": [
            ["style", "top", '194px'],
            ["style", "height", '122px'],
            ["style", "left", '148px'],
            ["style", "width", '76px']
         ],
         "${_Q0-Corpo}": [
            ["style", "top", '202px'],
            ["style", "height", '317px'],
            ["style", "left", '143px'],
            ["style", "width", '204px']
         ],
         "${_Q0-Braccio-Carota}": [
            ["style", "top", '142px'],
            ["style", "height", '164px'],
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
            { id: "eid11597", tween: [ "transform", "${_Q0-Coda}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11602", tween: [ "style", "${_Q0-Coda}", "left", '-215px', { fromValue: '-215px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11598", tween: [ "transform", "${_Q0-Coda}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11565", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 380, duration: 206, easing: "swing" },
            { id: "eid11566", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '-5deg', { fromValue: '8deg'}], position: 586, duration: 164, easing: "swing" },
            { id: "eid11567", tween: [ "transform", "${_Q0-Coda}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 750, duration: 118, easing: "swing" }         ]
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
