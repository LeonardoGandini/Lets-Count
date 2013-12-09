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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
            id:'Q9-Cespuglio12',
            type:'image',
            rect:['502px','574px','338px','206px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-Cespuglio12.png",'0px','0px']
         },
         {
            id:'fiore2',
            type:'rect',
            rect:['0','643px','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'fiore2Copy',
            type:'rect',
            rect:['0','643px','auto','auto','auto','auto'],
            userClass:"fioreani",
            transform:[[],['63'],[],['1.06849','1.06849']]
         },
         {
            id:'fiore2Copy3',
            type:'rect',
            rect:['659px','624px','auto','auto','auto','auto'],
            userClass:"fioreani",
            transform:[[],['63'],[],['0.83333','0.83333']]
         },
         {
            id:'fiore2Copy5',
            type:'rect',
            rect:['726px','688px','auto','auto','auto','auto'],
            userClass:"fioreani",
            transform:[[],['63'],[],['0.83333','0.83333']]
         },
         {
            id:'fiore2Copy4',
            type:'rect',
            rect:['571px','673px','auto','auto','auto','auto'],
            userClass:"fioreani",
            transform:[[],['63'],[],['0.83333','0.83333']]
         },
         {
            id:'fiore2Copy2',
            type:'rect',
            rect:['0','643px','auto','auto','auto','auto'],
            userClass:"fioreani",
            transform:[[],['-28'],[],['0.9589','0.9589']]
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
            id:'sei',
            type:'rect',
            rect:['519','551','auto','auto','auto','auto'],
            userClass:"sei"
         },
         {
            id:'sette',
            type:'rect',
            rect:['562','500','auto','auto','auto','auto'],
            userClass:"sette"
         },
         {
            id:'otto',
            type:'rect',
            rect:['624','444','auto','auto','auto','auto'],
            userClass:"otto"
         },
         {
            id:'nove',
            type:'rect',
            rect:['696','410','auto','auto','auto','auto'],
            userClass:"nove"
         },
         {
            id:'dieci',
            type:'rect',
            rect:['791px','389px','auto','auto','auto','auto'],
            userClass:"dieci",
            transform:[]
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
            id:'fiore2Copy4',
            symbolName:'fiore2'
         },
         {
            id:'fiore2Copy',
            symbolName:'fiore2'
         },
         {
            id:'fiore2Copy5',
            symbolName:'fiore2'
         },
         {
            id:'sei',
            symbolName:'sei'
         },
         {
            id:'AudioMenuTappeto',
            symbolName:'AudioMenuTappeto'
         },
         {
            id:'RobertaName',
            symbolName:'RobertaName'
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
            id:'fiore2Copy3',
            symbolName:'fiore2'
         },
         {
            id:'nove',
            symbolName:'nove'
         },
         {
            id:'sette',
            symbolName:'sette'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
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
            id:'musica',
            symbolName:'musica'
         },
         {
            id:'dieci',
            symbolName:'dieci'
         },
         {
            id:'InfoButt',
            symbolName:'InfoButt'
         },
         {
            id:'fiore2Copy2',
            symbolName:'fiore2'
         },
         {
            id:'otto',
            symbolName:'otto'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Q0-Nuvola}": [
            ["style", "top", '18px'],
            ["style", "left", '898px']
         ],
         "${_Q0-Splash}": [
            ["style", "left", '712px'],
            ["style", "top", '322px']
         ],
         "${_fiore2Copy3}": [
            ["style", "top", '624px'],
            ["transform", "scaleY", '0.83333'],
            ["transform", "rotateZ", '63deg'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '659px']
         ],
         "${_Play}": [
            ["style", "left", '262px'],
            ["style", "top", '18px']
         ],
         "${_Q0-Cespuglio}": [
            ["style", "left", '-72px'],
            ["style", "top", '503px']
         ],
         "${_Q0-Tera}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Q0-Albero}": [
            ["style", "left", '-174px'],
            ["style", "top", '23px']
         ],
         "${_fiore2Copy5}": [
            ["style", "top", '688px'],
            ["transform", "scaleY", '0.83333'],
            ["transform", "rotateZ", '63deg'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '726px']
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_fiore2Copy}": [
            ["style", "top", '565px'],
            ["transform", "scaleY", '1.06849'],
            ["transform", "rotateZ", '63deg'],
            ["transform", "scaleX", '1.06849'],
            ["style", "left", '44px']
         ],
         "${_fiore2}": [
            ["style", "top", '660px'],
            ["style", "left", '8px']
         ],
         "${_fiore2Copy4}": [
            ["style", "top", '673px'],
            ["transform", "scaleY", '0.83333'],
            ["transform", "rotateZ", '63deg'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '571px']
         ],
         "${_Q9-Cespuglio12}": [
            ["style", "height", '206px'],
            ["style", "top", '574px'],
            ["style", "left", '502px'],
            ["style", "width", '338px']
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
         "${_fiore2Copy2}": [
            ["style", "top", '679px'],
            ["transform", "scaleY", '0.9589'],
            ["transform", "rotateZ", '-28deg'],
            ["transform", "scaleX", '0.9589'],
            ["style", "left", '107px']
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
            { id: "eid11614", tween: [ "transform", "${_Scoiattolo}", "scaleY", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11492", tween: [ "transform", "${_popuppo}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11550", tween: [ "transform", "${_popuppo}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11675", tween: [ "style", "${_Play}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11623", tween: [ "style", "${_Scoiattolo}", "left", '157px', { fromValue: '157px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11549", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.blur", '62px', { fromValue: '62px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11490", tween: [ "style", "${_popuppo}", "left", '224px', { fromValue: '224px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11606", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11545", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.color", 'rgba(0,0,0,0.77)', { fromValue: 'rgba(0,0,0,0.77)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11605", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.offsetV", '-5px', { fromValue: '-5px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11640", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.blur", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
            { id: "eid11608", tween: [ "subproperty", "${_Scoiattolo}", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11489", tween: [ "transform", "${_popuppo}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11673", tween: [ "style", "${_popuppo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11674", tween: [ "style", "${_Play}", "left", '262px', { fromValue: '262px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid11547", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetH", '23px', { fromValue: '23px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11613", tween: [ "transform", "${_Scoiattolo}", "scaleX", '1.02703', { fromValue: '1.02703'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11548", tween: [ "subproperty", "${_popuppo}", "filter.drop-shadow.offsetV", '19px', { fromValue: '19px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11620", tween: [ "style", "${_Scoiattolo}", "top", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid11491", tween: [ "style", "${_popuppo}", "top", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutCirc" },
            { id: "eid11568", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Scoiattolo}', [] ], ""], position: 0 }         ]
      }
   }
},
"Play": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
            { id: "eid11460", tween: [ "transform", "${_Q0-Play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11462", tween: [ "transform", "${_Q0-Play}", "scaleX", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11480", tween: [ "transform", "${_Q0-Play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11463", tween: [ "transform", "${_Q0-Play}", "scaleY", '1', { fromValue: '0.8'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11471", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,1.00)', { fromValue: 'rgba(0,0,0,0)'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11478", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.color", 'rgba(255,0,0,0.00)', { fromValue: 'rgb(255,0,0)'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11465", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '2', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11466", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.saturate", '1', { fromValue: '2'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11472", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11476", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetH", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11473", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '3px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11477", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.offsetV", '0px', { fromValue: '3px'}], position: 250, duration: 158, easing: "easeOutCirc" },
            { id: "eid11474", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '19px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutCirc" },
            { id: "eid11475", tween: [ "subproperty", "${_Q0-Layer-4}", "filter.drop-shadow.blur", '0px', { fromValue: '19px'}], position: 250, duration: 158, easing: "easeOutCirc" }         ]
      }
   }
},
"InfoButt": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      fill: ['rgba(0,0,0,0)','images/svg-info.svg','0px','0px']
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      transform: [],
      id: 'Q0-PopUp',
      type: 'image',
      rect: ['-56px','-42px','700px','373px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-PopUp.png','0px','0px']
   },
   {
      userClass: 'chiudix',
      rect: ['556px','-66px','145px','111px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.3594)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['274px','191px','322px','41px','auto','auto'],
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
"musica": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','80px','80px','auto','auto'],
      id: 'Q0-Music',
      userClass: 'musicasvg',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svg-music.svg','0px','0px']
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
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"AudioMenuTappeto": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      rect: ['152px','236px','189px','294px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Corpo.png','0px','0px']
   },
   {
      rect: ['131px','6px','219px','300px','auto','auto'],
      transform: [[],[],[],['1.02','1.02']],
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
            ["style", "height", '294px'],
            ["style", "top", '236px'],
            ["style", "left", '152px'],
            ["style", "width", '189px']
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
},
"dieci": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_10',
      type: 'image',
      rect: ['0px','0px','134px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/10.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__10}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '134px']
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
            { id: "eid11773", tween: [ "transform", "${__10}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11774", tween: [ "transform", "${__10}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11775", tween: [ "transform", "${__10}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11770", tween: [ "transform", "${__10}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11771", tween: [ "transform", "${__10}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11772", tween: [ "transform", "${__10}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"sei": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_6',
      type: 'image',
      rect: ['0px','0px','134px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/6.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__6}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '134px']
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
            { id: "eid11746", tween: [ "transform", "${__6}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11747", tween: [ "transform", "${__6}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11748", tween: [ "transform", "${__6}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11749", tween: [ "transform", "${__6}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11750", tween: [ "transform", "${__6}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11751", tween: [ "transform", "${__6}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"nove": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_9',
      type: 'image',
      rect: ['0px','0px','134px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/9.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__9}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '134px']
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
            { id: "eid11764", tween: [ "transform", "${__9}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11765", tween: [ "transform", "${__9}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11766", tween: [ "transform", "${__9}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11767", tween: [ "transform", "${__9}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11768", tween: [ "transform", "${__9}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11769", tween: [ "transform", "${__9}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"otto": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_8',
      type: 'image',
      rect: ['0px','0px','134px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/8.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__8}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '134px']
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
            { id: "eid11758", tween: [ "transform", "${__8}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11759", tween: [ "transform", "${__8}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11760", tween: [ "transform", "${__8}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11761", tween: [ "transform", "${__8}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11762", tween: [ "transform", "${__8}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11763", tween: [ "transform", "${__8}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"sette": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: '_7',
      type: 'image',
      rect: ['0px','0px','134px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/7.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__7}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '103px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '134px']
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
            { id: "eid11752", tween: [ "transform", "${__7}", "scaleX", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11753", tween: [ "transform", "${__7}", "scaleX", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11754", tween: [ "transform", "${__7}", "scaleX", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" },
            { id: "eid11755", tween: [ "transform", "${__7}", "scaleY", '0.65', { fromValue: '1'}], position: 0, duration: 320, easing: "easeOutCirc" },
            { id: "eid11756", tween: [ "transform", "${__7}", "scaleY", '1.18', { fromValue: '0.65'}], position: 320, duration: 148, easing: "easeOutCirc" },
            { id: "eid11757", tween: [ "transform", "${__7}", "scaleY", '1', { fromValue: '1.18'}], position: 468, duration: 118, easing: "easeOutCirc" }         ]
      }
   }
},
"fiore2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      fill: ['rgba(0,0,0,0)','images/Q10-fiore.png','0px','0px']
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
