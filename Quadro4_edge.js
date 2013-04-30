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
            id:'Cielo2',
            type:'image',
            rect:['-11px','-42px','1050px','522px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"G-Cielo.png",'0px','0px'],
            transform:[]
         },
         {
            id:'NUVOLA',
            type:'rect',
            rect:['87','78','auto','auto','auto','auto'],
            userClass:"Nuvola"
         },
         {
            id:'Q4-Albero-Sfondo',
            type:'image',
            rect:['859px','139px','180px','174px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Albero-Sfondo.png",'0px','0px']
         },
         {
            id:'Q4-prato',
            type:'image',
            rect:['-11px','270px','1058px','556px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-prato.png",'0px','0px']
         },
         {
            id:'Cespuglio-Giuncoso',
            type:'rect',
            rect:['196','61','auto','auto','auto','auto']
         },
         {
            id:'Q4-Terra',
            type:'image',
            rect:['465px','558px','539px','84px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Terra.png",'0px','0px']
         },
         {
            id:'Q4-Pianta-Fragole',
            type:'image',
            rect:['489px','302px','504px','317px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Pianta-Fragole.png",'0px','0px']
         },
         {
            id:'Q4-Riccio-piccolo',
            type:'image',
            rect:['160px','642px','125px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Riccio-piccolo.png",'0px','0px']
         },
         {
            id:'Q4-Riccio-Grande',
            type:'image',
            rect:['284px','614px','185px','118px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Riccio-Grande.png",'0px','0px']
         },
         {
            id:'Q4-Roccia',
            type:'image',
            rect:['-38px','558px','256px','173px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Roccia.png",'0px','0px']
         },
         {
            id:'Q4-Piantalella',
            type:'image',
            rect:['-17px','436px','139px','304px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Piantalella.png",'0px','0px']
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'pomo3trigger',
            type:'ellipse',
            rect:['285px','428px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"pomo3trigger"
         },
         {
            id:'pomo2trigger',
            type:'ellipse',
            rect:['433px','324px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"pomo2trigger"
         },
         {
            id:'MENUz',
            type:'rect',
            rect:['354','634','auto','auto','auto','auto']
         },
         {
            id:'Coda',
            type:'rect',
            rect:['103px','169px','auto','auto','auto','auto'],
            userClass:"codaani",
            transform:[]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['159px','-81px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.814','0.814']]
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['99px','215px','202px','231px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"Q1-Coda.png",'0px','0px'],
            userClass:"codatrigger",
            transform:[[],['-5'],[],['-1.035']]
         },
         {
            id:'FragoleStatiche',
            type:'rect',
            rect:['752','287','auto','auto','auto','auto']
         },
         {
            id:'Fragola-1',
            type:'rect',
            rect:['642','329','auto','auto','auto','auto']
         },
         {
            id:'Fragola-2',
            type:'rect',
            rect:['642','329','auto','auto','auto','auto']
         },
         {
            id:'Fragola-3',
            type:'rect',
            rect:['642','329','auto','auto','auto','auto']
         },
         {
            id:'Fragola-4',
            type:'rect',
            rect:['642','329','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Fragole',
            type:'rect',
            rect:['567','314','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy',
            type:'rect',
            rect:['567','314','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy2',
            type:'rect',
            rect:['567','314','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy3',
            type:'rect',
            rect:['567','314','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Q4-Cestino',
            type:'image',
            rect:['315px','438px','215px','158px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Cestino.png",'0px','0px'],
            transform:[[],['9'],[],['1.03','1.03']]
         },
         {
            id:'Q4-Libellula-Laterale',
            type:'image',
            rect:['195px','122px','130px','118px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Libellula-Laterale.png",'0px','0px']
         },
         {
            id:'Q4-Libellula-Top',
            type:'image',
            rect:['579px','59px','108px','84px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Libellula-Top.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'Fiore-FragoleCopy3',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Coda',
            symbolName:'Coda'
         },
         {
            id:'Fiore-FragoleCopy2',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Fiore-FragoleCopy',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Fragola-2',
            symbolName:'Fragola-1'
         },
         {
            id:'Fiore-Fragole',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Fragola-4',
            symbolName:'Fragola-1'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'Fragola-1',
            symbolName:'Fragola-1'
         },
         {
            id:'Fragola-3',
            symbolName:'Fragola-1'
         },
         {
            id:'FragoleStatiche',
            symbolName:'FragoleStatiche'
         },
         {
            id:'MENUz',
            symbolName:'MENUz'
         },
         {
            id:'Cespuglio-Giuncoso',
            symbolName:'Cespuglio-Giuncoso'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Q4-Riccio-piccolo}": [
            ["style", "top", '642px'],
            ["style", "height", '90px'],
            ["style", "left", '160px'],
            ["style", "width", '125px']
         ],
         "${_NUVOLA}": [
            ["style", "left", '80px'],
            ["style", "top", '-15px']
         ],
         "${_codatrigger}": [
            ["style", "top", '215px'],
            ["transform", "scaleX", '-1.03488'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '231px'],
            ["style", "opacity", '0'],
            ["style", "left", '99px'],
            ["style", "width", '202px']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '-81px'],
            ["transform", "scaleY", '0.81363'],
            ["style", "left", '159px'],
            ["transform", "scaleX", '0.81363']
         ],
         "${_Q4-Libellula-Top}": [
            ["style", "top", '59px'],
            ["style", "height", '84px'],
            ["style", "left", '579px'],
            ["style", "width", '108px']
         ],
         "${_Q4-prato}": [
            ["style", "top", '270px'],
            ["style", "height", '556px'],
            ["style", "left", '-11px'],
            ["style", "width", '1058px']
         ],
         "${_Fragola-3}": [
            ["style", "left", '727px'],
            ["style", "top", '501px']
         ],
         "${_Coda}": [
            ["style", "top", '169px'],
            ["style", "left", '103px']
         ],
         "${_Q4-Terra}": [
            ["style", "top", '558px'],
            ["style", "height", '84px'],
            ["style", "left", '465px'],
            ["style", "width", '539px']
         ],
         "${_Q4-Roccia}": [
            ["style", "top", '558px'],
            ["style", "height", '173px'],
            ["style", "left", '-38px'],
            ["style", "width", '256px']
         ],
         "${_Fiore-FragoleCopy2}": [
            ["style", "left", '524px'],
            ["style", "top", '497px']
         ],
         "${_Q4-Riccio-Grande}": [
            ["style", "top", '614px'],
            ["style", "height", '118px'],
            ["style", "left", '284px'],
            ["style", "width", '185px']
         ],
         "${_FragoleStatiche}": [
            ["subproperty", "filter.grayscale", '1'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_Cespuglio-Giuncoso}": [
            ["style", "top", '90px'],
            ["transform", "scaleY", '0.65801'],
            ["style", "left", '-120px'],
            ["transform", "scaleX", '0.67486']
         ],
         "${_Q4-Cestino}": [
            ["style", "-webkit-transform-origin", [3,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1.03'],
            ["transform", "scaleY", '1.03'],
            ["transform", "rotateZ", '9deg'],
            ["style", "height", '158px'],
            ["style", "top", '438px'],
            ["style", "left", '315px'],
            ["style", "width", '215px']
         ],
         "${_Fragola-2}": [
            ["style", "left", '529px'],
            ["style", "top", '370px']
         ],
         "${_Q4-Pianta-Fragole}": [
            ["style", "top", '302px'],
            ["style", "height", '317px'],
            ["style", "left", '489px'],
            ["style", "width", '504px']
         ],
         "${_Q4-Albero-Sfondo}": [
            ["style", "left", '859px'],
            ["style", "top", '139px']
         ],
         "${_Q4-Libellula-Laterale}": [
            ["style", "top", '122px'],
            ["style", "height", '118px'],
            ["style", "left", '195px'],
            ["style", "width", '130px']
         ],
         "${_pomo2trigger}": [
            ["style", "top", '324px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '433px'],
            ["style", "width", '96px']
         ],
         "${_Q4-Piantalella}": [
            ["style", "top", '436px'],
            ["style", "height", '304px'],
            ["style", "left", '-17px'],
            ["style", "width", '139px']
         ],
         "${_Fragola-4}": [
            ["style", "left", '899px'],
            ["style", "top", '354px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Fiore-FragoleCopy}": [
            ["style", "left", '840px'],
            ["style", "top", '293px']
         ],
         "${_pomo3trigger}": [
            ["style", "top", '428px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '285px'],
            ["style", "width", '96px']
         ],
         "${_MENUz}": [
            ["style", "left", '-73px'],
            ["style", "top", '696px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Fiore-FragoleCopy3}": [
            ["style", "left", '908px'],
            ["style", "top", '469px']
         ],
         "${_FUMELLO}": [
            ["style", "left", '552px'],
            ["style", "top", '-227px']
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
            { id: "eid9578", tween: [ "style", "${_Cespuglio-Giuncoso}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
            { id: "eid9618", tween: [ "style", "${_Fragola-4}", "top", '354px', { fromValue: '354px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9602", tween: [ "style", "${_Fiore-FragoleCopy}", "top", '293px', { fromValue: '293px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9615", tween: [ "style", "${_Fragola-3}", "left", '727px', { fromValue: '727px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9614", tween: [ "style", "${_Fragola-2}", "top", '370px', { fromValue: '370px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9577", tween: [ "style", "${_Cespuglio-Giuncoso}", "left", '-120px', { fromValue: '-120px'}], position: 0, duration: 0 },
            { id: "eid9642", tween: [ "subproperty", "${_FragoleStatiche}", "filter.grayscale", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9617", tween: [ "style", "${_Fragola-4}", "left", '899px', { fromValue: '899px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9601", tween: [ "style", "${_Fiore-FragoleCopy}", "left", '840px', { fromValue: '840px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9609", tween: [ "style", "${_Fiore-FragoleCopy3}", "left", '908px', { fromValue: '908px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8862", tween: [ "style", "${_NUVOLA}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid9573", tween: [ "transform", "${_Cespuglio-Giuncoso}", "scaleX", '0.67486', { fromValue: '0.67486'}], position: 0, duration: 0 },
            { id: "eid4941", tween: [ "style", "${_NUVOLA}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '575px', { fromValue: '696px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '694px', { fromValue: '575px'}], position: 223, duration: 116, easing: "easeInOutQuad" },
            { id: "eid9613", tween: [ "style", "${_Fragola-2}", "left", '529px', { fromValue: '529px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9616", tween: [ "style", "${_Fragola-3}", "top", '501px', { fromValue: '501px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9641", tween: [ "subproperty", "${_FragoleStatiche}", "filter.saturate", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9574", tween: [ "transform", "${_Cespuglio-Giuncoso}", "scaleY", '0.65801', { fromValue: '0.65801'}], position: 0, duration: 0 },
            { id: "eid9606", tween: [ "style", "${_Fiore-FragoleCopy2}", "top", '497px', { fromValue: '497px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9610", tween: [ "style", "${_Fiore-FragoleCopy3}", "top", '469px', { fromValue: '469px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9605", tween: [ "style", "${_Fiore-FragoleCopy2}", "left", '524px', { fromValue: '524px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"FUMELLO": {
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
      userClass: 'fumello',
      id: 'Fumello',
      type: 'image',
      rect: ['0px','0px','446px','287px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Fumello-Q4.png','0px','0px','445.97px','286.67px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['-8px','172px','466px','287px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '-69px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Fumello}": [
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
            ["style", "left", '0px'],
            ["style", "width", '446px']
         ],
         "${symbolSelector}": [
            ["style", "height", '287px'],
            ["style", "width", '446px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         labels: {
            "ENTRATA": 0,
            "USCITA": 1000
         },
         timeline: [
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid99", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9671", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9672", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9673", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9674", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"NUVOLA": {
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
      id: 'Nuvola',
      type: 'image',
      rect: ['0px','-10px','185px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Nuvola.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nuvola}": [
            ["style", "height", '132px'],
            ["style", "top", '22px'],
            ["style", "left", '-180px'],
            ["style", "width", '185px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '185px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 105000,
         autoPlay: false,
         timeline: [
            { id: "eid183", tween: [ "style", "${_Nuvola}", "left", '1003px', { fromValue: '-180px'}], position: 0, duration: 105000, easing: "swing" },
            { id: "eid185", tween: [ "style", "${_Nuvola}", "top", '-83px', { fromValue: '22px'}], position: 0, duration: 105000, easing: "swing" }         ]
      }
   }
},
"HOME_butt": {
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
      type: 'image',
      boxShadow: ['inset',8,3,18,6,'rgba(0,0,0,0.648438)'],
      id: 'HOME',
      rect: ['0px','0px','103px','97px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HOME}": [
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '103px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '103px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: false,
         timeline: [
            { id: "eid355", tween: [ "transform", "${_HOME}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid357", tween: [ "transform", "${_HOME}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid354", tween: [ "transform", "${_HOME}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid356", tween: [ "transform", "${_HOME}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"MENUz": {
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
      type: 'image',
      id: 'Menu',
      opacity: 0.7,
      rect: ['0px','21px','1160px','217px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'Testina',
      type: 'image',
      rect: ['1013px','0px','84px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Testina.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['93px','95px','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],[],[],['0.69','0.69']],
      id: 'PREV',
      userClass: 'prev',
      rect: ['212px','103px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.69','0.69']],
      id: 'NEXT',
      userClass: 'next',
      rect: ['1031px','103px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      userClass: 'uno',
      rect: ['27.7%','29.5%','125px','98px','auto','auto'],
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   },
   {
      userClass: 'due',
      rect: ['39.1%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   },
   {
      userClass: 'tre',
      rect: ['50.3%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
   },
   {
      userClass: 'quattro',
      rect: ['61.5%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
   },
   {
      userClass: 'cinque',
      rect: ['72.5%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/5_col.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'PREV',
      symbolName: 'PREV'
   },
   {
      id: 'NEXT',
      symbolName: 'NEXT'
   },
   {
      id: 'HOME_butt',
      symbolName: 'HOME_butt'
   }   ]
   },
   states: {
      "Base State": {
         "${_PREV}": [
            ["style", "top", '103px'],
            ["transform", "scaleY", '0.69'],
            ["transform", "scaleX", '0.69']
         ],
         "${_Testina}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1013px'],
            ["style", "width", '84px']
         ],
         "${_Numero_4}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '61.5%'],
            ["style", "width", '124px']
         ],
         "${_Menu}": [
            ["style", "top", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '217px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '0px'],
            ["style", "width", '1160px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '61px'],
            ["transform", "scaleY", '0.71726'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.71726'],
            ["style", "left", '79px']
         ],
         "${_NEXT}": [
            ["style", "top", '103px'],
            ["transform", "scaleY", '0.69'],
            ["transform", "scaleX", '0.69']
         ],
         "${_Numero_3}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '50.29%'],
            ["style", "width", '124px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Numero_1}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "opacity", '1'],
            ["style", "left", '27.71%'],
            ["style", "width", '125px']
         ],
         "${_Numero_5}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '72.54%'],
            ["style", "width", '124px']
         ],
         "${_Numero_2}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '39.1%'],
            ["style", "width", '124px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 721,
         autoPlay: false,
         timeline: [
            { id: "eid459", tween: [ "style", "${_HOME_butt}", "left", '79px', { fromValue: '79px'}], position: 415, duration: 0 },
            { id: "eid487", tween: [ "transform", "${_Testina}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 65, easing: "easeOutBounce" },
            { id: "eid488", tween: [ "transform", "${_Testina}", "rotateZ", '-8deg', { fromValue: '10deg'}], position: 65, duration: 44, easing: "easeOutBounce" },
            { id: "eid489", tween: [ "transform", "${_Testina}", "rotateZ", '5deg', { fromValue: '-8deg'}], position: 108, duration: 47, easing: "easeOutBounce" },
            { id: "eid490", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 156, duration: 49, easing: "easeOutBounce" },
            { id: "eid500", tween: [ "transform", "${_Testina}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 500, duration: 129 },
            { id: "eid501", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 629, duration: 92 },
            { id: "eid454", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid455", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid460", tween: [ "style", "${_HOME_butt}", "top", '61px', { fromValue: '61px'}], position: 415, duration: 0 }         ]
      }
   }
},
"PREV": {
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
      type: 'image',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'PrevImg',
      transform: [[0,0],[],[],['0.77','0.77']],
      clip: ['rect(-12px 81px 110px -7px)'],
      fill: ['rgba(0,0,0,0)','images/G-Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PrevImg}": [
            ["style", "top", '-11px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-12,81,110,-7], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8px'],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: false,
         timeline: [
            { id: "eid1365", tween: [ "transform", "${_PrevImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1366", tween: [ "transform", "${_PrevImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1363", tween: [ "transform", "${_PrevImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1364", tween: [ "transform", "${_PrevImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"NEXT": {
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
      type: 'image',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'NextImg',
      transform: [[0,0],[],[],['0.77','0.77']],
      clip: ['rect(-8px 79px 107px -14px)'],
      fill: ['rgba(0,0,0,0)','images/G-Next.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_NextImg}": [
            ["style", "top", '-11px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-8,79,107,-14], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8px'],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: false,
         timeline: [
            { id: "eid1367", tween: [ "transform", "${_NextImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1368", tween: [ "transform", "${_NextImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1369", tween: [ "transform", "${_NextImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1370", tween: [ "transform", "${_NextImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"Coda": {
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
      rect: ['156px','33px','194px','239px','auto','auto'],
      id: 'Coda',
      transform: [[],['-8'],[],['-1.013']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [13,90], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '-1.0129'],
            ["transform", "rotateZ", '-8deg'],
            ["style", "height", '239px'],
            ["style", "top", '33px'],
            ["style", "left", '156px'],
            ["style", "width", '194px']
         ],
         "${symbolSelector}": [
            ["style", "height", '239px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 661.07822385364,
         autoPlay: false,
         timeline: [
            { id: "eid9656", tween: [ "transform", "${_Coda}", "rotateZ", '-14deg', { fromValue: '-8deg'}], position: 0, duration: 154, easing: "easeInOutQuad" },
            { id: "eid9657", tween: [ "transform", "${_Coda}", "rotateZ", '9deg', { fromValue: '-14deg'}], position: 154, duration: 284, easing: "easeInOutQuad" },
            { id: "eid9658", tween: [ "transform", "${_Coda}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 438, duration: 223, easing: "easeInOutQuad" }         ]
      }
   }
},
"CodaAni": {
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
      id: 'Coda2',
      type: 'rect',
      rect: ['4px','-20px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Coda2',
      symbolName: 'Coda'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '252px'],
            ["style", "width", '228px']
         ],
         "${_Coda2}": [
            ["style", "top", '-10px'],
            ["transform", "scaleY", '0.91213'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.93814'],
            ["style", "left", '-2px'],
            ["style", "-webkit-transform-origin", [12,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [12,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [12,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [12,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [12,91],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid9030", tween: [ "transform", "${_Coda2}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 363, easing: "easeInCirc" },
            { id: "eid9163", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '-13deg'}], position: 363, duration: 166, easing: "easeOutCirc" },
            { id: "eid9031", tween: [ "transform", "${_Coda2}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 529, duration: 221, easing: "easeInOutCirc" }         ]
      }
   }
},
"Cespuglio-Giuncoso": {
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
      id: 'Q4-Giunco',
      type: 'image',
      rect: ['251px','-122px','118px','462px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      rect: ['163px','-87px','118px','462px','auto','auto'],
      id: 'Q4-GiuncoCopy2',
      transform: [[],['-12']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      rect: ['57px','-87px','118px','462px','auto','auto'],
      id: 'Q4-GiuncoCopy',
      transform: [[],[],[],['-1.034']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      id: 'Q4-Cespuglio',
      type: 'image',
      rect: ['0px','10px','560px','398px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Cespuglio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-GiuncoCopy}": [
            ["style", "top", '-87px'],
            ["transform", "scaleX", '-1.0339'],
            ["style", "left", '57px']
         ],
         "${symbolSelector}": [
            ["style", "height", '462px'],
            ["style", "width", '560px']
         ],
         "${_Q4-Giunco}": [
            ["style", "left", '251px'],
            ["style", "top", '-122px']
         ],
         "${_Q4-GiuncoCopy2}": [
            ["style", "top", '-87px'],
            ["style", "left", '163px'],
            ["transform", "rotateZ", '-12deg']
         ],
         "${_Q4-Cespuglio}": [
            ["style", "left", '0px'],
            ["style", "top", '10px']
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
         ]
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
      rect: ['250px','437px','180px','74px','auto','auto'],
      id: 'Q4-Braccio',
      transform: [[],['9'],[],['0.86','0.86']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Braccio.png','0px','0px']
   },
   {
      rect: ['62px','367px','366px','422px','auto','auto'],
      id: 'Q4-Corpo',
      transform: [[],['9']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Corpo.png','0px','0px']
   },
   {
      rect: ['58px','34px','289px','461px','auto','auto'],
      id: 'Q4-Testa',
      transform: [[],['20'],[],['0.95','0.95']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Testa}": [
            ["style", "-webkit-transform-origin", [55,84], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.95'],
            ["transform", "rotateZ", '20deg'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '58px'],
            ["style", "top", '34px']
         ],
         "${_Q4-Corpo}": [
            ["style", "top", '367px'],
            ["style", "left", '62px'],
            ["transform", "rotateZ", '9deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '642px'],
            ["style", "width", '439px']
         ],
         "${_Q4-Braccio}": [
            ["style", "-webkit-transform-origin", [1,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.86'],
            ["transform", "rotateZ", '9deg'],
            ["transform", "scaleX", '0.86'],
            ["style", "left", '250px'],
            ["style", "top", '437px']
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
"Fiore-Fragole": {
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
      id: 'Q4-Fiore-Fragole',
      type: 'image',
      rect: ['0px','0px','55px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fiore-Fragole.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '55px']
         ],
         "${_Q4-Fiore-Fragole}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '56px'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 719.93372872324,
         autoPlay: false,
         timeline: [
            { id: "eid9600", tween: [ "transform", "${_Q4-Fiore-Fragole}", "rotateZ", '365deg', { fromValue: '0deg'}], position: 0, duration: 720, easing: "easeInOutQuad" }         ]
      }
   }
},
"FragoleStatiche": {
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
      id: 'FragStat',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy2',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy3',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FragStatCopy2',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStatCopy3',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStat',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStatCopy',
      symbolName: 'FragStat'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '168px'],
            ["style", "width", '202px']
         ],
         "${_FragStatCopy}": [
            ["style", "left", '17px'],
            ["style", "top", '114px']
         ],
         "${_FragStatCopy2}": [
            ["style", "left", '-134px'],
            ["style", "top", '161px']
         ],
         "${_FragStatCopy3}": [
            ["style", "left", '63px'],
            ["style", "top", '215px']
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
            { id: "eid9635", tween: [ "style", "${_FragStatCopy3}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9632", tween: [ "style", "${_FragStatCopy2}", "top", '161px', { fromValue: '161px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9630", tween: [ "style", "${_FragStatCopy}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9629", tween: [ "style", "${_FragStatCopy}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9636", tween: [ "style", "${_FragStatCopy3}", "top", '215px', { fromValue: '215px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9631", tween: [ "style", "${_FragStatCopy2}", "left", '-134px', { fromValue: '-134px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fragola-1": {
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
      id: 'Q4-Fragola-2',
      type: 'image',
      rect: ['0px','0px','55px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '55px']
         ],
         "${_Q4-Fragola-2}": [
            ["style", "height", '67px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
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
"FragStat": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','46px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '46px']
         ],
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '68px'],
            ["style", "-webkit-transform-origin", [53,28], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 827.54309611912,
         autoPlay: false,
         timeline: [
            { id: "eid9626", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 0, duration: 280, easing: "easeInOutQuad" },
            { id: "eid9627", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-29deg', { fromValue: '19deg'}], position: 280, duration: 283, easing: "easeInOutQuad" },
            { id: "eid9628", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 563, duration: 265, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "Quadro02");
