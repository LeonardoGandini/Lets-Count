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
            fill:["rgba(0,0,0,0)",im+"Cielo.png",'0px','0px'],
            transform:[]
         },
         {
            id:'NUVOLA',
            type:'rect',
            rect:['87','78','auto','auto','auto','auto'],
            userClass:"Nuvola"
         },
         {
            id:'Tereno',
            type:'image',
            rect:['-6px','266px','1035px','522px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Tereno.png','0px','0px']
         },
         {
            id:'Pianta2',
            type:'image',
            rect:['912px','181px','172px','247px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Pianta2.png",'0px','0px']
         },
         {
            id:'Giallo',
            type:'rect',
            rect:['670','288','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'Viola',
            type:'rect',
            rect:['576','296','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['133px','266px','252px','222px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Coda.png','0px','0px'],
            userClass:"codatrigger"
         },
         {
            id:'AlberoPomodoro2',
            type:'image',
            rect:['214px','167px','390px','491px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/AlberoPomodoro.png','0px','0px']
         },
         {
            id:'ViolaCopy',
            type:'rect',
            rect:['576','296','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'Talpine',
            type:'rect',
            rect:['470','601','auto','auto','auto','auto']
         },
         {
            id:'ToppaBucaDX',
            type:'image',
            rect:['448px','648px','172px','140px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/ToppaBucaDX.png','0px','0px']
         },
         {
            id:'Mani-Talpa-Piccole',
            type:'image',
            rect:['456px','673px','53px','28px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Mani-Talpa-Piccole.png','0px','0px']
         },
         {
            id:'Talpona',
            type:'rect',
            rect:['59','615','auto','auto','auto','auto'],
            userClass:"Talpona"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'Braccio',
            type:'image',
            rect:['572px','406px','136px','66px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Braccio.png','0px','0px']
         },
         {
            id:'Testa',
            type:'image',
            rect:['658px','229px','216px','230px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Testa.png','0px','0px']
         },
         {
            id:'Coda2',
            type:'rect',
            rect:['748','340','auto','auto','auto','auto']
         },
         {
            id:'Corpo',
            type:'image',
            rect:['622px','421px','308px','263px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Corpo.png','0px','0px']
         },
         {
            id:'Pomodori-Statici',
            type:'rect',
            rect:['249','195','auto','auto','auto','auto']
         },
         {
            id:'Pomodori-Giusti',
            type:'rect',
            rect:['285','289','auto','auto','auto','auto']
         },
         {
            id:'Cestino',
            type:'image',
            rect:['736px','580px','194px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi-Quadro3/Cestino.png','0px','0px']
         },
         {
            id:'MENUz',
            type:'rect',
            rect:['354','634','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Pomodori-Giusti',
            symbolName:'Pomodori-Giusti'
         },
         {
            id:'Giallo',
            symbolName:'Giallo'
         },
         {
            id:'Viola',
            symbolName:'Viola'
         },
         {
            id:'Talpine',
            symbolName:'Talpine'
         },
         {
            id:'Coda2',
            symbolName:'Coda'
         },
         {
            id:'MENUz',
            symbolName:'MENUz'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'Talpona',
            symbolName:'Talpona'
         },
         {
            id:'Pomodori-Statici',
            symbolName:'Pomodori-Statici'
         },
         {
            id:'ViolaCopy',
            symbolName:'Viola'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_ViolaCopy}": [
            ["style", "top", '353px'],
            ["transform", "scaleY", '0.68068'],
            ["transform", "scaleX", '0.68068'],
            ["subproperty", "filter.hue-rotate", '-98deg'],
            ["style", "left", '139px'],
            ["subproperty", "filter.saturate", '2.1538461538462']
         ],
         "${_NUVOLA}": [
            ["style", "left", '80px'],
            ["style", "top", '-15px']
         ],
         "${_codatrigger}": [
            ["style", "top", '266px'],
            ["style", "height", '222px'],
            ["style", "opacity", '0'],
            ["style", "left", '133px'],
            ["style", "width", '252px']
         ],
         "${_ToppaBucaDX}": [
            ["style", "height", '140px'],
            ["style", "top", '648px'],
            ["style", "left", '448px'],
            ["style", "width", '172px']
         ],
         "${_Viola}": [
            ["style", "top", '353px'],
            ["transform", "scaleX", '0.68068'],
            ["style", "left", '11px'],
            ["transform", "scaleY", '0.68068']
         ],
         "${_Tereno}": [
            ["style", "height", '522px'],
            ["style", "top", '266px'],
            ["style", "left", '-6px'],
            ["style", "width", '1035px']
         ],
         "${_Pianta2}": [
            ["style", "height", '247px'],
            ["style", "top", '181px'],
            ["style", "left", '912px'],
            ["style", "width", '172px']
         ],
         "${_Cestino}": [
            ["style", "height", '103px'],
            ["style", "top", '580px'],
            ["style", "left", '736px'],
            ["style", "width", '194px']
         ],
         "${_Corpo}": [
            ["style", "height", '263px'],
            ["style", "top", '421px'],
            ["style", "left", '622px'],
            ["style", "width", '308px']
         ],
         "${_Pomodori-Statici}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)'],
            ["subproperty", "filter.hue-rotate", '-17deg'],
            ["subproperty", "filter.drop-shadow.blur", '7px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${_Giallo}": [
            ["style", "top", '331px'],
            ["transform", "scaleX", '0.69006'],
            ["style", "left", '70px'],
            ["transform", "scaleY", '0.6647']
         ],
         "${_Mani-Talpa-Piccole}": [
            ["style", "height", '28px'],
            ["style", "top", '673px'],
            ["style", "left", '456px'],
            ["style", "width", '53px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_AlberoPomodoro2}": [
            ["style", "height", '491px'],
            ["style", "top", '167px'],
            ["style", "left", '214px'],
            ["style", "width", '390px']
         ],
         "${_Pomodori-Giusti}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(23,2,2,0.80)'],
            ["subproperty", "filter.drop-shadow.blur", '7px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px']
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
         "${_FUMELLO}": [
            ["style", "left", '552px'],
            ["style", "top", '-227px']
         ],
         "${_Braccio}": [
            ["style", "height", '66px'],
            ["style", "top", '406px'],
            ["style", "left", '572px'],
            ["style", "width", '136px']
         ],
         "${_Testa}": [
            ["style", "height", '230px'],
            ["style", "top", '229px'],
            ["style", "left", '658px'],
            ["style", "width", '216px']
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
            { id: "eid8772", tween: [ "transform", "${_ViolaCopy}", "scaleY", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8764", tween: [ "style", "${_Viola}", "left", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
            { id: "eid8758", tween: [ "transform", "${_Viola}", "scaleX", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8879", tween: [ "subproperty", "${_Pomodori-Giusti}", "filter.drop-shadow.color", 'rgba(23,2,2,0.80)', { fromValue: 'rgba(23,2,2,0.80)'}], position: 0, duration: 0 },
            { id: "eid8875", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)', { fromValue: 'rgba(0,0,0,0.36)'}], position: 0, duration: 0 },
            { id: "eid8868", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.hue-rotate", '-17deg', { fromValue: '-17deg'}], position: 0, duration: 0 },
            { id: "eid8759", tween: [ "transform", "${_Viola}", "scaleY", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8762", tween: [ "style", "${_Giallo}", "left", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid8766", tween: [ "style", "${_Viola}", "top", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
            { id: "eid8862", tween: [ "style", "${_NUVOLA}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid8872", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.offsetH", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid8876", tween: [ "subproperty", "${_Pomodori-Giusti}", "filter.drop-shadow.offsetH", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid4941", tween: [ "style", "${_NUVOLA}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '575px', { fromValue: '696px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '694px', { fromValue: '575px'}], position: 223, duration: 116, easing: "easeInOutQuad" },
            { id: "eid8877", tween: [ "subproperty", "${_Pomodori-Giusti}", "filter.drop-shadow.offsetV", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid8785", tween: [ "subproperty", "${_ViolaCopy}", "filter.saturate", '2.1538461538462', { fromValue: '2.1538461538462'}], position: 0, duration: 0 },
            { id: "eid8777", tween: [ "style", "${_ViolaCopy}", "left", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid8873", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.offsetV", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid8784", tween: [ "subproperty", "${_ViolaCopy}", "filter.hue-rotate", '-98deg', { fromValue: '-98deg'}], position: 0, duration: 0 },
            { id: "eid8790", tween: [ "style", "${_Giallo}", "top", '331px', { fromValue: '331px'}], position: 0, duration: 0 },
            { id: "eid8771", tween: [ "transform", "${_ViolaCopy}", "scaleX", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8755", tween: [ "transform", "${_Giallo}", "scaleY", '0.6647', { fromValue: '0.6647'}], position: 0, duration: 0 },
            { id: "eid8754", tween: [ "transform", "${_Giallo}", "scaleX", '0.69006', { fromValue: '0.69006'}], position: 0, duration: 0 },
            { id: "eid8874", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.blur", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid8776", tween: [ "style", "${_ViolaCopy}", "top", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
            { id: "eid8880", tween: [ "subproperty", "${_Pomodori-Giusti}", "filter.drop-shadow.blur", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
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
      fill: ['rgba(0,0,0,0)','images/Fumello-Q3.png','0px','0px','445.97px','286.67px']
   },
   {
      rect: ['-8px','172px','466px','287px','auto','auto'],
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
            { id: "eid9018", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9019", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9020", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9021", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
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
      fill: ['rgba(0,0,0,0)','images/Nuvola.png','0px','0px']
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
      fill: ['rgba(0,0,0,0)','images/HOME.png','0px','0px'],
      id: 'HOME',
      rect: ['0px','0px','103px','97px','auto','auto'],
      transform: [],
      boxShadow: ['inset',8,3,18,6,'rgba(0,0,0,0.648438)']
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
      fill: ['rgba(0,0,0,0)','images/Menu.png','0px','0px']
   },
   {
      id: 'Testina',
      type: 'image',
      rect: ['1013px','0px','84px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Testina.png','0px','0px']
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
      fill: ['rgba(0,0,0,0)','Numeri/1_col.png','0px','0px']
   },
   {
      userClass: 'due',
      rect: ['39.1%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/2_col.png','0px','0px']
   },
   {
      userClass: 'tre',
      rect: ['50.3%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/3_col.png','0px','0px']
   },
   {
      userClass: 'quattro',
      rect: ['61.5%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/4_col.png','0px','0px']
   },
   {
      userClass: 'cinque',
      rect: ['72.5%','29.5%','124px','97px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/5_col.png','0px','0px']
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
      fill: ['rgba(0,0,0,0)','images/Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '55px']
         ],
         "${_PrevImg}": [
            ["style", "top", '-11px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-12,81,110,-7], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8px'],
            ["style", "width", '72px']
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
      fill: ['rgba(0,0,0,0)','images/Next.png','0px','0px']
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
"FioreAni": {
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
      id: 'Fiore-Gambo',
      type: 'image',
      rect: ['72px','134px','43px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Fiore-Gambo.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Fiore-Petali',
      rect: ['-3px','25px','189px','189px','auto','auto'],
      transform: [[0,0],['0'],[],['0.88','0.88']],
      fill: ['rgba(0,0,0,0)','Animalini/Fiore-Petali.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Fiore-Petali}": [
            ["style", "top", '25px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "left", '-3px'],
            ["style", "height", '189px']
         ],
         "${_Fiore-Gambo}": [
            ["style", "left", '72px'],
            ["style", "top", '134px']
         ],
         "${symbolSelector}": [
            ["style", "height", '229px'],
            ["style", "width", '189px']
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
            { id: "eid2309", tween: [ "transform", "${_Fiore-Petali}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeInOutSine" },
            { id: "eid2313", tween: [ "transform", "${_Fiore-Petali}", "scaleY", '1.1', { fromValue: '0.88'}], position: 11, duration: 425, easing: "easeInOutSine" },
            { id: "eid2315", tween: [ "transform", "${_Fiore-Petali}", "scaleY", '0.88', { fromValue: '1.1'}], position: 436, duration: 564, easing: "easeInOutSine" },
            { id: "eid2312", tween: [ "transform", "${_Fiore-Petali}", "scaleX", '1.1', { fromValue: '0.88'}], position: 11, duration: 425, easing: "easeInOutSine" },
            { id: "eid2314", tween: [ "transform", "${_Fiore-Petali}", "scaleX", '0.88', { fromValue: '1.1'}], position: 436, duration: 564, easing: "easeInOutSine" }         ]
      }
   }
},
"Giallo": {
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
      id: 'Fiore-Giallo',
      type: 'image',
      rect: ['0px','0px','67px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Fiore-Giallo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '67px']
         ],
         "${_Fiore-Giallo}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '63px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '67px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 978.25241766603,
         autoPlay: false,
         timeline: [
            { id: "eid5521", tween: [ "transform", "${_Fiore-Giallo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 978, easing: "easeOutQuad" },
            { id: "eid5526", tween: [ "transform", "${_Fiore-Giallo}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 477, easing: "easeOutQuad" },
            { id: "eid5527", tween: [ "transform", "${_Fiore-Giallo}", "scaleX", '1', { fromValue: '1.1'}], position: 477, duration: 501, easing: "easeOutQuad" },
            { id: "eid5528", tween: [ "transform", "${_Fiore-Giallo}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 477, easing: "easeOutQuad" },
            { id: "eid5529", tween: [ "transform", "${_Fiore-Giallo}", "scaleY", '1', { fromValue: '1.1'}], position: 477, duration: 501, easing: "easeOutQuad" }         ]
      }
   }
},
"Viola": {
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
      id: 'Fiore-Viola',
      type: 'image',
      rect: ['0px','0px','57px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Fiore-Viola.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Fiore-Viola}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '47px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '57px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '57px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 978.25241766603,
         autoPlay: false,
         timeline: [
            { id: "eid5536", tween: [ "transform", "${_Fiore-Viola}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 477, easing: "easeOutQuad" },
            { id: "eid5537", tween: [ "transform", "${_Fiore-Viola}", "scaleY", '1', { fromValue: '1.1'}], position: 477, duration: 501, easing: "easeOutQuad" },
            { id: "eid5538", tween: [ "transform", "${_Fiore-Viola}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 978, easing: "easeOutQuad" },
            { id: "eid5534", tween: [ "transform", "${_Fiore-Viola}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 477, easing: "easeOutQuad" },
            { id: "eid5535", tween: [ "transform", "${_Fiore-Viola}", "scaleX", '1', { fromValue: '1.1'}], position: 477, duration: 501, easing: "easeOutQuad" }         ]
      }
   }
},
"ContenitoreCoda": {
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
      id: 'Coda',
      type: 'image',
      rect: ['0px','0px','237px','209px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '209px'],
            ["style", "width", '237px']
         ],
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [92,93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '209px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '237px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid7498", tween: [ "transform", "${_Coda}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 0, duration: 222, easing: "easeInQuad" },
            { id: "eid7499", tween: [ "transform", "${_Coda}", "rotateZ", '-12deg', { fromValue: '14deg'}], position: 222, duration: 155, easing: "easeInQuad" },
            { id: "eid7500", tween: [ "transform", "${_Coda}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 377, duration: 123, easing: "easeInQuad" }         ]
      }
   }
},
"Talpine": {
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
      id: 'Talpa-Piccola-1',
      type: 'image',
      rect: ['5px','51px','71px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Talpa-Piccola-1.png','0px','0px']
   },
   {
      id: 'Talpa-Piccola-2',
      type: 'image',
      rect: ['33px','32px','66px','98px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Talpa-Piccola-2.png','0px','0px']
   },
   {
      id: 'Talpa-Piccola-3',
      type: 'image',
      rect: ['59px','62px','79px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Talpa-Piccola-3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Talpa-Piccola-2}": [
            ["style", "top", '32px'],
            ["style", "height", '98px'],
            ["style", "left", '33px'],
            ["style", "width", '66px']
         ],
         "${_Talpa-Piccola-1}": [
            ["style", "top", '51px'],
            ["style", "height", '76px'],
            ["style", "left", '5px'],
            ["style", "width", '71px']
         ],
         "${_Talpa-Piccola-3}": [
            ["style", "top", '62px'],
            ["style", "height", '72px'],
            ["style", "left", '59px'],
            ["style", "width", '79px']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '132px']
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
      type: 'image',
      id: 'Coda',
      rect: ['0px','0px','194px','239px','auto','auto'],
      transform: [[0,0],['13']],
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '239px'],
            ["style", "width", '194px']
         ],
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [13,90], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '13deg'],
            ["style", "height", '239px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '194px']
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
"Pomodori-Statici": {
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
      id: 'PomoStatico',
      type: 'rect',
      userClass: 'pomostatico',
      rect: ['190','40','auto','auto','auto','auto']
   },
   {
      id: 'PomoStaticoCopy',
      type: 'rect',
      userClass: 'pomostatico',
      rect: ['190','40','auto','auto','auto','auto']
   },
   {
      id: 'PomoStaticoCopy2',
      type: 'rect',
      userClass: 'pomostatico',
      rect: ['190','40','auto','auto','auto','auto']
   },
   {
      id: 'PomoStaticoCopy3',
      type: 'rect',
      userClass: 'pomostatico',
      rect: ['190','40','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'PomoStaticoCopy',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy2',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStatico',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy3',
      symbolName: 'PomoStatico'
   }   ]
   },
   states: {
      "Base State": {
         "${_PomoStaticoCopy3}": [
            ["style", "top", '334px'],
            ["style", "left", '17px']
         ],
         "${_PomoStaticoCopy2}": [
            ["style", "left", '17px'],
            ["style", "top", '0px']
         ],
         "${_PomoStaticoCopy}": [
            ["style", "left", '242px'],
            ["style", "top", '274px']
         ],
         "${symbolSelector}": [
            ["style", "height", '396px'],
            ["style", "width", '297px']
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
            { id: "eid8953", tween: [ "style", "${_PomoStaticoCopy}", "top", '274px', { fromValue: '274px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8957", tween: [ "style", "${_PomoStaticoCopy3}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8955", tween: [ "style", "${_PomoStaticoCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8952", tween: [ "style", "${_PomoStaticoCopy}", "left", '242px', { fromValue: '242px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8956", tween: [ "style", "${_PomoStaticoCopy3}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8954", tween: [ "style", "${_PomoStaticoCopy2}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Pomodori-Giusti": {
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
      id: 'Pomodoro',
      rect: ['0px','0px','70px','87px','auto','auto'],
      userClass: 'pomodoro1',
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Pomodoro.png','0px','0px']
   },
   {
      type: 'image',
      id: 'PomodoroCopy2',
      rect: ['162px','43px','70px','87px','auto','auto'],
      userClass: 'pomodoro1',
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Pomodoro.png','0px','0px']
   },
   {
      type: 'image',
      id: 'PomodoroCopy3',
      rect: ['13px','117px','70px','87px','auto','auto'],
      userClass: 'pomodoro1',
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Pomodoro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Pomodoro}": [
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ],
         "${_PomodoroCopy2}": [
            ["style", "height", '87px'],
            ["style", "top", '43px'],
            ["style", "left", '162px'],
            ["style", "width", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '204px'],
            ["style", "width", '232px']
         ],
         "${_PomodoroCopy3}": [
            ["style", "height", '87px'],
            ["style", "top", '117px'],
            ["style", "left", '13px'],
            ["style", "width", '70px']
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
"PomoStatico": {
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
      rect: ['-2px','-4px','70px','87px','auto','auto'],
      transform: [[0,0],[],[],['0.9','0.9']],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'PomodoroStatico',
      userClass: 'pomodostatico',
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Pomodoro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PomodoroStatico}": [
            ["style", "-webkit-transform-origin", [57,27], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57,27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57,27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57,27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57,27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.9'],
            ["style", "left", '-3px'],
            ["style", "width", '70px'],
            ["style", "top", '-4px'],
            ["transform", "scaleY", '0.9'],
            ["style", "height", '87px'],
            ["subproperty", "filter.sepia", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '63px']
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
            { id: "eid8892", tween: [ "transform", "${_PomodoroStatico}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid8893", tween: [ "transform", "${_PomodoroStatico}", "rotateZ", '-12deg', { fromValue: '11deg'}], position: 250, duration: 151, easing: "easeInOutQuad" },
            { id: "eid8894", tween: [ "transform", "${_PomodoroStatico}", "rotateZ", '11deg', { fromValue: '-12deg'}], position: 401, duration: 158, easing: "easeInOutQuad" },
            { id: "eid8915", tween: [ "transform", "${_PomodoroStatico}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 559, duration: 191, easing: "easeInOutQuad" }         ]
      }
   }
},
"Talpona": {
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
      id: 'Talpa-Grande',
      type: 'image',
      rect: ['55px','40px','115px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Talpa-Grande.png','0px','0px']
   },
   {
      id: 'ToppaBucaSX',
      type: 'image',
      rect: ['0px','0px','226px','173px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/ToppaBucaSX.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Mani-Talpa-Grande',
      rect: ['124px','67px','49px','29px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','Pezzi-Quadro3/Mani-Talpa-Grande.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ToppaBucaSX}": [
            ["style", "top", '0px'],
            ["style", "height", '173px'],
            ["style", "left", '0px'],
            ["style", "width", '226px']
         ],
         "${_Talpa-Grande}": [
            ["style", "top", '40px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '106px'],
            ["style", "-webkit-transform-origin", [34,87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [34,87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [34,87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [34,87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [34,87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '55px'],
            ["style", "width", '115px']
         ],
         "${_Mani-Talpa-Grande}": [
            ["style", "top", '67px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '29px'],
            ["style", "-webkit-transform-origin", [18,29], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [18,29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [18,29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [18,29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [18,29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '124px'],
            ["style", "width", '49px']
         ],
         "${symbolSelector}": [
            ["style", "height", '173px'],
            ["style", "width", '226px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 838,
         autoPlay: false,
         timeline: [
            { id: "eid8966", tween: [ "style", "${_Talpa-Grande}", "left", '62px', { fromValue: '55px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid8975", tween: [ "style", "${_Talpa-Grande}", "left", '55px', { fromValue: '62px'}], position: 648, duration: 190, easing: "easeOutQuad" },
            { id: "eid8967", tween: [ "style", "${_Talpa-Grande}", "top", '-2px', { fromValue: '40px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid8969", tween: [ "style", "${_Talpa-Grande}", "top", '-11px', { fromValue: '-2px'}], position: 250, duration: 397, easing: "easeOutQuad" },
            { id: "eid8976", tween: [ "style", "${_Talpa-Grande}", "top", '40px', { fromValue: '-11px'}], position: 648, duration: 190, easing: "easeOutQuad" },
            { id: "eid8979", tween: [ "transform", "${_Mani-Talpa-Grande}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid8980", tween: [ "transform", "${_Mani-Talpa-Grande}", "rotateZ", '6deg', { fromValue: '5deg'}], position: 250, duration: 397, easing: "easeOutQuad" },
            { id: "eid8981", tween: [ "transform", "${_Mani-Talpa-Grande}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 647, duration: 191, easing: "easeOutQuad" },
            { id: "eid8968", tween: [ "transform", "${_Talpa-Grande}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid8970", tween: [ "transform", "${_Talpa-Grande}", "rotateZ", '11deg', { fromValue: '6deg'}], position: 250, duration: 397, easing: "easeOutQuad" },
            { id: "eid8977", tween: [ "transform", "${_Talpa-Grande}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 648, duration: 190, easing: "easeOutQuad" }         ]
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
