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
            id:'QUADRO1',
            type:'image',
            rect:['-72px','-19px','1145px','847px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-QUADRO1.png",'0px','0px']
         },
         {
            id:'Fogliolina',
            type:'rect',
            rect:['311px','526px','auto','auto','auto','auto'],
            userClass:"foglina"
         },
         {
            id:'Fogliolina2',
            type:'rect',
            rect:['214px','506px','auto','auto','auto','auto'],
            userClass:"foglina",
            transform:[[],[],[],['0.68','0.68']]
         },
         {
            id:'Fogliolina3',
            type:'rect',
            rect:['115px','522px','auto','auto','auto','auto'],
            userClass:"foglina",
            transform:[[],[],[],['0.86','0.86']]
         },
         {
            id:'Fogliolina4',
            type:'rect',
            rect:['76px','450px','auto','auto','auto','auto'],
            userClass:"foglina",
            transform:[[],[],[],['1.15','1.15']]
         },
         {
            id:'Fogliolina5',
            type:'rect',
            rect:['194px','444px','auto','auto','auto','auto'],
            userClass:"foglina",
            transform:[[],[],[],['0.79','0.79']]
         },
         {
            id:'Fogliolina6',
            type:'rect',
            rect:['315px','444px','auto','auto','auto','auto'],
            userClass:"foglina",
            transform:[[],[],[],['0.89','0.89']]
         },
         {
            id:'Fogliolina7',
            type:'rect',
            rect:['407px','467px','auto','auto','auto','auto'],
            userClass:"foglina"
         },
         {
            id:'Fogliolina8',
            type:'rect',
            rect:['464px','420px','auto','auto','auto','auto'],
            userClass:"foglina"
         },
         {
            id:'Coda',
            type:'rect',
            rect:['763','243','auto','auto','auto','auto'],
            userClass:"coda"
         },
         {
            id:'Corpo',
            type:'image',
            rect:['281px','81px','996px','775px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Corpo.png",'0px','0px'],
            transform:[[],[],[],['0.37','0.37']]
         },
         {
            id:'Trigger-Coda',
            type:'rect',
            rect:['797px','243px','145px','219px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            userClass:"triggercoda"
         },
         {
            id:'TESTA',
            type:'rect',
            rect:['578','123','auto','auto','auto','auto'],
            userClass:"testa"
         },
         {
            id:'BIRD',
            type:'rect',
            rect:['66','213','auto','auto','auto','auto'],
            userClass:"uccellino",
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0.52)",2,0,10]
         },
         {
            id:'FioreAni',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreAniCopy2',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreAniCopy4',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreAniCopy5',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreAniCopy',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'CAROTA',
            type:'rect',
            rect:['466','489','auto','auto','auto','auto'],
            userClass:"carota",
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0.46)",2,0,5]
         },
         {
            id:'Cestino',
            type:'image',
            rect:['772px','490px','193px','115px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Cestino.png",'0px','0px']
         },
         {
            id:'Toppa-Carota',
            type:'image',
            rect:['446px','583px','85px','87px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Toppa-Carota.png",'0px','0px'],
            transform:[[],[],[],['1.71','1.71']]
         },
         {
            id:'Lumachina',
            type:'rect',
            rect:['96','640','auto','auto','auto','auto'],
            userClass:"lumacacontainer"
         },
         {
            id:'FioreAniCopy3',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FarfallaContainer',
            type:'rect',
            rect:['162','186','auto','auto','auto','auto']
         },
         {
            id:'MenuTutto',
            type:'rect',
            rect:['-73','696','auto','auto','auto','auto'],
            userClass:"menu"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'AudioTappeto',
            type:'rect',
            rect:['-272px','164px','60px','60px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"AudioTappetino"
         }],
         symbolInstances: [
         {
            id:'Fogliolina8',
            symbolName:'Fogliolina'
         },
         {
            id:'Fogliolina5',
            symbolName:'Fogliolina'
         },
         {
            id:'Fogliolina4',
            symbolName:'Fogliolina'
         },
         {
            id:'Fogliolina3',
            symbolName:'Fogliolina'
         },
         {
            id:'Fogliolina6',
            symbolName:'Fogliolina'
         },
         {
            id:'TESTA',
            symbolName:'TESTA'
         },
         {
            id:'FioreAniCopy2',
            symbolName:'FioreAni'
         },
         {
            id:'Fogliolina2',
            symbolName:'Fogliolina'
         },
         {
            id:'FioreAniCopy',
            symbolName:'FioreAni'
         },
         {
            id:'MenuTutto',
            symbolName:'Menu'
         },
         {
            id:'Coda',
            symbolName:'Coda'
         },
         {
            id:'FioreAniCopy3',
            symbolName:'FioreAni'
         },
         {
            id:'Lumachina',
            symbolName:'Lumachina'
         },
         {
            id:'CAROTA',
            symbolName:'CAROTA'
         },
         {
            id:'Fogliolina',
            symbolName:'Fogliolina'
         },
         {
            id:'FarfallaContainer',
            symbolName:'FarfallaContainer'
         },
         {
            id:'FioreAniCopy4',
            symbolName:'FioreAni'
         },
         {
            id:'Fogliolina7',
            symbolName:'Fogliolina'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'FioreAniCopy5',
            symbolName:'FioreAni'
         },
         {
            id:'FioreAni',
            symbolName:'FioreAni'
         },
         {
            id:'BIRD',
            symbolName:'BIRD'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_FioreAniCopy3}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '557px'],
            ["style", "left", '294px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_NUVOLA}": [
            ["style", "left", '87px']
         ],
         "${_Fogliolina4}": [
            ["style", "top", '450px'],
            ["transform", "scaleX", '1.14999'],
            ["transform", "scaleY", '1.14999'],
            ["style", "left", '76px']
         ],
         "${_Fogliolina2}": [
            ["style", "top", '506px'],
            ["transform", "scaleX", '0.68'],
            ["transform", "scaleY", '0.68'],
            ["style", "left", '214px']
         ],
         "${_Fogliolina8}": [
            ["style", "left", '464px'],
            ["style", "top", '420px']
         ],
         "${_FioreAni}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "left", '509px'],
            ["transform", "scaleY", '0.27438'],
            ["style", "top", '506px']
         ],
         "${_Corpo}": [
            ["style", "top", '81px'],
            ["transform", "scaleY", '0.37'],
            ["transform", "scaleX", '0.37'],
            ["style", "height", '775px'],
            ["style", "left", '281px'],
            ["style", "width", '996px']
         ],
         "${_FioreAniCopy2}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '569px'],
            ["style", "left", '-8px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_Trigger-Coda}": [
            ["style", "top", '243px'],
            ["style", "height", '219px'],
            ["style", "opacity", '0'],
            ["style", "left", '797px'],
            ["style", "width", '145px']
         ],
         "${_Toppa-Carota}": [
            ["style", "top", '583px'],
            ["transform", "scaleY", '1.71'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '87px'],
            ["transform", "scaleX", '1.71'],
            ["style", "left", '446px'],
            ["style", "width", '85px']
         ],
         "${_Cestino}": [
            ["style", "height", '115px'],
            ["style", "top", '490px'],
            ["style", "left", '772px'],
            ["style", "width", '193px']
         ],
         "${_FioreAniCopy}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '569px'],
            ["style", "left", '738px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_Fogliolina5}": [
            ["style", "top", '444px'],
            ["transform", "scaleX", '0.79'],
            ["transform", "scaleY", '0.79'],
            ["style", "left", '194px']
         ],
         "${_Fogliolina7}": [
            ["style", "left", '407px'],
            ["style", "top", '467px']
         ],
         "${_QUADRO1}": [
            ["style", "height", '847px'],
            ["style", "top", '-19px'],
            ["style", "left", '-72px'],
            ["style", "width", '1145px']
         ],
         "${_FioreAniCopy5}": [
            ["transform", "scaleX", '0.21695'],
            ["style", "top", '456px'],
            ["style", "left", '888px'],
            ["transform", "scaleY", '0.21695']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-206px']
         ],
         "${_AudioTappeto}": [
            ["style", "opacity", '0']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Fogliolina6}": [
            ["style", "top", '444px'],
            ["transform", "scaleX", '0.89'],
            ["transform", "scaleY", '0.89'],
            ["style", "left", '315px']
         ],
         "${_FioreAniCopy4}": [
            ["transform", "scaleX", '0.18'],
            ["style", "top", '289px'],
            ["style", "left", '879px'],
            ["transform", "scaleY", '0.18']
         ],
         "${_TESTA}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '581px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '124px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_CAROTA}": [
            ["style", "top", '478px'],
            ["subproperty", "filter.drop-shadow.blur", '5px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.46)'],
            ["style", "left", '465px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px']
         ],
         "${_Fogliolina3}": [
            ["style", "top", '522px'],
            ["transform", "scaleX", '0.86'],
            ["transform", "scaleY", '0.86'],
            ["style", "left", '115px']
         ],
         "${_BIRD}": [
            ["style", "top", '232px'],
            ["transform", "scaleY", '0.53906'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["transform", "scaleX", '0.53906'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.52)'],
            ["style", "left", '60px'],
            ["subproperty", "filter.drop-shadow.blur", '10px']
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
            { id: "eid4191", tween: [ "transform", "${_TESTA}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2393", tween: [ "transform", "${_FioreAniCopy}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2436", tween: [ "style", "${_FioreAniCopy4}", "left", '879px', { fromValue: '879px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid86", tween: [ "style", "${_CAROTA}", "top", '478px', { fromValue: '478px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
            { id: "eid2395", tween: [ "transform", "${_FioreAniCopy}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2457", tween: [ "style", "${_FioreAniCopy3}", "top", '557px', { fromValue: '557px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid5084", tween: [ "style", "${_BIRD}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
            { id: "eid2456", tween: [ "style", "${_FioreAniCopy3}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid23", tween: [ "style", "${_BIRD}", "top", '232px', { fromValue: '232px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2411", tween: [ "transform", "${_FioreAniCopy3}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2459", tween: [ "style", "${_FioreAni}", "top", '506px', { fromValue: '506px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2490", tween: [ "style", "${_FioreAniCopy}", "left", '738px', { fromValue: '738px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2444", tween: [ "transform", "${_FioreAniCopy5}", "scaleX", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4192", tween: [ "transform", "${_TESTA}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2455", tween: [ "style", "${_FioreAniCopy2}", "top", '569px', { fromValue: '569px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid13", tween: [ "transform", "${_BIRD}", "scaleX", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4196", tween: [ "style", "${_TESTA}", "left", '581px', { fromValue: '581px'}], position: 0, duration: 0 },
            { id: "eid2449", tween: [ "style", "${_FioreAniCopy5}", "top", '456px', { fromValue: '456px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2389", tween: [ "transform", "${_FioreAni}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2437", tween: [ "style", "${_FioreAniCopy4}", "top", '289px', { fromValue: '289px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2405", tween: [ "transform", "${_FioreAniCopy2}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4194", tween: [ "style", "${_TESTA}", "top", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid2445", tween: [ "transform", "${_FioreAniCopy5}", "scaleY", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2458", tween: [ "style", "${_FioreAni}", "left", '509px', { fromValue: '509px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2451", tween: [ "style", "${_FioreAniCopy}", "top", '569px', { fromValue: '569px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2388", tween: [ "transform", "${_FioreAni}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid3899", tween: [ "transform", "${_FioreAniCopy4}", "scaleX", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid5023", tween: [ "style", "${_FUMELLO}", "top", '-206px', { fromValue: '-206px'}], position: 0, duration: 0 },
            { id: "eid2448", tween: [ "style", "${_FioreAniCopy5}", "left", '888px', { fromValue: '888px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2409", tween: [ "transform", "${_FioreAniCopy3}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2403", tween: [ "transform", "${_FioreAniCopy2}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2454", tween: [ "style", "${_FioreAniCopy2}", "left", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid14", tween: [ "transform", "${_BIRD}", "scaleY", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid3900", tween: [ "transform", "${_FioreAniCopy4}", "scaleY", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2119", tween: [ "style", "${_CAROTA}", "left", '465px', { fromValue: '465px'}], position: 0, duration: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CAROTA}', [] ], ""], position: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 },
            { id: "eid5758", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Coda}', [] ], ""], position: 0 }         ]
      }
   }
},
"Fogliolina": {
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
      id: 'Foglia',
      type: 'image',
      rect: ['0px','0px','60px','42px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Foglia.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Foglia}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '42px'],
            ["style", "-webkit-transform-origin", [49,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '60px']
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
            { id: "eid2", tween: [ "transform", "${_Foglia}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 127, easing: "swing" },
            { id: "eid3", tween: [ "transform", "${_Foglia}", "rotateZ", '-15deg', { fromValue: '10deg'}], position: 127, duration: 99, easing: "swing" },
            { id: "eid7", tween: [ "transform", "${_Foglia}", "rotateZ", '22deg', { fromValue: '-15deg'}], position: 226, duration: 87, easing: "swing" },
            { id: "eid8", tween: [ "transform", "${_Foglia}", "rotateZ", '-11deg', { fromValue: '22deg'}], position: 313, duration: 119, easing: "swing" },
            { id: "eid5", tween: [ "transform", "${_Foglia}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 432, duration: 318, easing: "swing" }         ]
      }
   }
},
"BIRD": {
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
      id: 'Gambe-Bird',
      type: 'image',
      rect: ['29px','74px','52px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Bird-Gambe.png','0px','0px']
   },
   {
      id: 'Bird',
      type: 'image',
      rect: ['0px','0px','130px','114px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Bird.png','0px','0px']
   },
   {
      transform: [[0,0],['-12']],
      id: 'Nota',
      type: 'image',
      rect: ['114px','-51px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      transform: [[0,0],['18']],
      id: 'NotaCopy',
      type: 'image',
      rect: ['134px','-102px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      transform: [[0,0],['35']],
      id: 'NotaCopy2',
      type: 'image',
      rect: ['178px','-129px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nota}": [
            ["style", "top", '-51px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-12deg'],
            ["style", "height", '40px'],
            ["style", "opacity", '0'],
            ["style", "left", '114px'],
            ["style", "width", '32px']
         ],
         "${_NotaCopy}": [
            ["style", "top", '-102px'],
            ["style", "height", '40px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '18deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '134px'],
            ["style", "width", '32px']
         ],
         "${_Bird}": [
            ["style", "-webkit-transform-origin", [57.09,96.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '91px'],
            ["style", "top", '-8px'],
            ["style", "left", '-10px'],
            ["style", "width", '130px']
         ],
         "${_NotaCopy2}": [
            ["style", "top", '-129px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '35deg'],
            ["style", "height", '40px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '178px'],
            ["style", "width", '32px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '130px']
         ],
         "${_Gambe-Bird}": [
            ["style", "top", '74px'],
            ["style", "height", '40px'],
            ["style", "left", '29px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1625,
         autoPlay: false,
         timeline: [
            { id: "eid5103", tween: [ "transform", "${_Nota}", "scaleY", '1.19', { fromValue: '1'}], position: 197, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5099", tween: [ "transform", "${_Nota}", "scaleY", '1.18', { fromValue: '1.19'}], position: 389, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5101", tween: [ "transform", "${_Nota}", "scaleY", '1', { fromValue: '1.18'}], position: 833, duration: 216, easing: "easeInOutQuart" },
            { id: "eid5041", tween: [ "style", "${_Bird}", "-webkit-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid5999", tween: [ "style", "${_Bird}", "-moz-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6000", tween: [ "style", "${_Bird}", "-ms-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6001", tween: [ "style", "${_Bird}", "msTransformOrigin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6002", tween: [ "style", "${_Bird}", "-o-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid5116", tween: [ "style", "${_NotaCopy2}", "opacity", '0.99', { fromValue: '0.000000'}], position: 724, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5117", tween: [ "style", "${_NotaCopy2}", "opacity", '1', { fromValue: '0.990000'}], position: 916, duration: 456, easing: "easeInOutQuart" },
            { id: "eid5118", tween: [ "style", "${_NotaCopy2}", "opacity", '0', { fromValue: '1'}], position: 1372, duration: 204, easing: "easeInOutQuart" },
            { id: "eid5039", tween: [ "style", "${_Bird}", "height", '91px', { fromValue: '91px'}], position: 0, duration: 0 },
            { id: "eid5110", tween: [ "transform", "${_NotaCopy}", "scaleY", '1.19', { fromValue: '1'}], position: 461, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5111", tween: [ "transform", "${_NotaCopy}", "scaleY", '1.18', { fromValue: '1.19'}], position: 653, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5112", tween: [ "transform", "${_NotaCopy}", "scaleY", '1', { fromValue: '1.18'}], position: 1097, duration: 216, easing: "easeInOutQuart" },
            { id: "eid5036", tween: [ "style", "${_Bird}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
            { id: "eid5107", tween: [ "style", "${_NotaCopy}", "opacity", '0.99', { fromValue: '0.000000'}], position: 461, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5108", tween: [ "style", "${_NotaCopy}", "opacity", '1', { fromValue: '0.990000'}], position: 653, duration: 456, easing: "easeInOutQuart" },
            { id: "eid5109", tween: [ "style", "${_NotaCopy}", "opacity", '0', { fromValue: '1'}], position: 1109, duration: 204, easing: "easeInOutQuart" },
            { id: "eid5096", tween: [ "transform", "${_Nota}", "scaleX", '1.19', { fromValue: '1'}], position: 197, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5098", tween: [ "transform", "${_Nota}", "scaleX", '1.18', { fromValue: '1.19'}], position: 389, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5100", tween: [ "transform", "${_Nota}", "scaleX", '1', { fromValue: '1.18'}], position: 833, duration: 216, easing: "easeInOutQuart" },
            { id: "eid5113", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1.19', { fromValue: '1'}], position: 724, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5114", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1.18', { fromValue: '1.19'}], position: 916, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5115", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1', { fromValue: '1.18'}], position: 1360, duration: 216, easing: "easeInOutQuart" },
            { id: "eid29", tween: [ "style", "${_Nota}", "opacity", '0.99', { fromValue: '0.000000'}], position: 197, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5093", tween: [ "style", "${_Nota}", "opacity", '1', { fromValue: '0.990000'}], position: 389, duration: 456, easing: "easeInOutQuart" },
            { id: "eid5094", tween: [ "style", "${_Nota}", "opacity", '0', { fromValue: '1'}], position: 845, duration: 204, easing: "easeInOutQuart" },
            { id: "eid5104", tween: [ "transform", "${_NotaCopy}", "scaleX", '1.19', { fromValue: '1'}], position: 461, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5105", tween: [ "transform", "${_NotaCopy}", "scaleX", '1.18', { fromValue: '1.19'}], position: 653, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5106", tween: [ "transform", "${_NotaCopy}", "scaleX", '1', { fromValue: '1.18'}], position: 1097, duration: 216, easing: "easeInOutQuart" },
            { id: "eid25", tween: [ "transform", "${_Bird}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 0, duration: 660, easing: "easeInOutQuart" },
            { id: "eid26", tween: [ "transform", "${_Bird}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 660, duration: 965, easing: "easeInOutQuart" },
            { id: "eid5040", tween: [ "style", "${_Bird}", "top", '-8px', { fromValue: '-8px'}], position: 0, duration: 0 },
            { id: "eid5119", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1.19', { fromValue: '1'}], position: 724, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5120", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1.18', { fromValue: '1.19'}], position: 916, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5121", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1', { fromValue: '1.18'}], position: 1360, duration: 216, easing: "easeInOutQuart" }         ]
      }
   }
},
"CAROTA": {
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
      id: 'Numero1ColAnimato',
      type: 'image',
      rect: ['-233px','-435px','290px','227px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   },
   {
      id: 'Carota',
      type: 'image',
      rect: ['0px','0px','67px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Carota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Carota}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '132px'],
            ["style", "left", '0px'],
            ["style", "width", '67px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '67px']
         ],
         "${_Numero1ColAnimato}": [
            ["style", "top", '-446px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '227px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '-148px'],
            ["style", "width", '290px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4575,
         autoPlay: true,
         labels: {
            "Parte Testa": 1205,
            "Show 1": 2052
         },
         timeline: [
            { id: "eid53", tween: [ "transform", "${_Carota}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 246, easing: "easeInOutQuart" },
            { id: "eid54", tween: [ "transform", "${_Carota}", "rotateZ", '-10deg', { fromValue: '5deg'}], position: 246, duration: 221, easing: "easeInOutQuart" },
            { id: "eid55", tween: [ "transform", "${_Carota}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 467, duration: 221, easing: "easeInOutQuart" },
            { id: "eid72", tween: [ "transform", "${_Carota}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1205, duration: 751, easing: "easeOutCirc" },
            { id: "eid76", tween: [ "transform", "${_Carota}", "rotateZ", '698deg', { fromValue: '360deg'}], position: 2867, duration: 841, easing: "easeOutBounce" },
            { id: "eid1094", tween: [ "style", "${_Numero1ColAnimato}", "left", '-329px', { fromValue: '-148px'}], position: 1541, duration: 511, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Numero1ColAnimato}", "left", '-141px', { fromValue: '-329px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1137", tween: [ "style", "${_Numero1ColAnimato}", "top", '-435px', { fromValue: '-446px'}], position: 1541, duration: 511, easing: "easeOutBounce" },
            { id: "eid1087", tween: [ "style", "${_Numero1ColAnimato}", "top", '472px', { fromValue: '-435px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid58", tween: [ "style", "${_Carota}", "top", '12px', { fromValue: '0px'}], position: 467, duration: 479, easing: "easeInOutQuart" },
            { id: "eid61", tween: [ "style", "${_Carota}", "top", '-398px', { fromValue: '12px'}], position: 1132, duration: 920, easing: "swing" },
            { id: "eid70", tween: [ "style", "${_Carota}", "top", '-28px', { fromValue: '-398px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid1103", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1104", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1108", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1089", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "style", "${_Carota}", "left", '0px', { fromValue: '0px'}], position: 467, duration: 0, easing: "easeInOutQuart" },
            { id: "eid62", tween: [ "style", "${_Carota}", "left", '-33px', { fromValue: '0px'}], position: 1132, duration: 920, easing: "easeInOutQuad" },
            { id: "eid69", tween: [ "style", "${_Carota}", "left", '335px', { fromValue: '-33px'}], position: 2867, duration: 1043, easing: "easeOutBounce" }         ]
      }
   }
},
"TESTA": {
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
      rect: ['-141px','-245px','427px','522px','auto','auto'],
      id: 'Testa',
      transform: [[0,0],[],[],['0.5','0.5']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Testa}": [
            ["style", "top", '-245px'],
            ["style", "-webkit-transform-origin", [66,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "height", '522px'],
            ["style", "left", '-141px'],
            ["style", "width", '427px']
         ],
         "${symbolSelector}": [
            ["style", "height", '261px'],
            ["style", "width", '213px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3959,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${_Testa}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 0, duration: 457, easing: "easeInOutSine" },
            { id: "eid89", tween: [ "transform", "${_Testa}", "rotateZ", '23deg', { fromValue: '23deg'}], position: 457, duration: 2543, easing: "easeInSine" },
            { id: "eid90", tween: [ "transform", "${_Testa}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 3000, duration: 959, easing: "easeOutSine" }         ]
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
      rect: ['0px','0px','446px','287px','auto','auto'],
      id: 'Fumello',
      userClass: 'fumello',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q1.png','0px','0px','445.97px','286.67px']
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
            { id: "eid6003", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid6004", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid6005", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid6006", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
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
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px'],
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
         duration: 406,
         autoPlay: false,
         timeline: [
            { id: "eid355", tween: [ "transform", "${_HOME}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 218 },
            { id: "eid357", tween: [ "transform", "${_HOME}", "scaleY", '1', { fromValue: '0.81'}], position: 218, duration: 146 },
            { id: "eid354", tween: [ "transform", "${_HOME}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 218 },
            { id: "eid356", tween: [ "transform", "${_HOME}", "scaleX", '1', { fromValue: '0.81'}], position: 218, duration: 146 }         ]
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
      rect: ['0px','21px','1160px','217px','auto','auto'],
      id: 'Fondo-Menu',
      opacity: 0.7,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      userClass: 'home',
      rect: ['93px','95px','auto','auto','auto','auto']
   },
   {
      rect: ['997px','99px','auto','auto','auto','auto'],
      id: 'NEXT',
      transform: [[0,0],[],[],['0.7','0.7']],
      type: 'rect',
      userClass: 'next'
   },
   {
      rect: ['225px','98px','auto','auto','auto','auto'],
      id: 'PREV',
      transform: [[0,0],[],[],['0.7','0.7']],
      type: 'rect',
      userClass: 'prev'
   },
   {
      rect: ['27.2%','33.2%','125px','98px','auto','auto'],
      userClass: 'uno',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   },
   {
      rect: ['38.6%','33.2%','124px','97px','auto','auto'],
      userClass: 'due',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   },
   {
      rect: ['49.8%','33.2%','124px','97px','auto','auto'],
      userClass: 'tre',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
   },
   {
      rect: ['61%','33.2%','124px','97px','auto','auto'],
      userClass: 'quattro',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
   },
   {
      rect: ['72%','33.2%','124px','97px','auto','auto'],
      userClass: 'cinque',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/5_col.png','0px','0px']
   },
   {
      rect: ['95px','118px','auto','auto','auto','auto'],
      id: 'musica',
      transform: [[0,0],[],[],['0.74','0.74']],
      type: 'rect',
      userClass: 'musica'
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      userClass: 'testina',
      rect: ['1013','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'PREV',
      symbolName: 'PREV'
   },
   {
      id: 'Testina-Menu',
      symbolName: 'testina'
   },
   {
      id: 'musica',
      symbolName: 'musica'
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
            ["transform", "scaleX", '0.7'],
            ["style", "top", '98px'],
            ["transform", "scaleY", '0.7'],
            ["style", "left", '225px']
         ],
         "${_Numero_4}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '61.01%'],
            ["style", "width", '124px']
         ],
         "${_Numero_5}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '72.02%'],
            ["style", "width", '124px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '84px']
         ],
         "${_NEXT}": [
            ["style", "top", '99px'],
            ["style", "left", '997px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7']
         ],
         "${_Numero_1}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "opacity", '1'],
            ["style", "left", '27.18%'],
            ["style", "width", '125px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.74'],
            ["style", "top", '118px'],
            ["style", "left", '95px'],
            ["transform", "scaleY", '0.74']
         ],
         "${_Numero_2}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '38.55%'],
            ["style", "width", '124px']
         ],
         "${_Numero_3}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '49.77%'],
            ["style", "width", '124px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '217px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '0px'],
            ["style", "width", '1160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 415,
         autoPlay: false,
         timeline: [
            { id: "eid454", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.59344', { fromValue: '0.59344'}], position: 415, duration: 0 },
            { id: "eid455", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.59344', { fromValue: '0.59344'}], position: 415, duration: 0 },
            { id: "eid459", tween: [ "style", "${_HOME_butt}", "left", '84px', { fromValue: '84px'}], position: 415, duration: 0 },
            { id: "eid460", tween: [ "style", "${_HOME_butt}", "top", '52px', { fromValue: '52px'}], position: 415, duration: 0 }         ]
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
      transform: [[0,0],[],[],['0.77','0.77']],
      type: 'image',
      id: 'NextImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
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
         duration: 140,
         autoPlay: false,
         timeline: [
            { id: "eid1367", tween: [ "transform", "${_NextImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1368", tween: [ "transform", "${_NextImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1369", tween: [ "transform", "${_NextImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1370", tween: [ "transform", "${_NextImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"Lumachina": {
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
      rect: ['0px','0px','66px','49px','auto','auto'],
      id: 'Lumaca',
      userClass: 'Lumachina',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Lumaca.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Lumaca}": [
            ["style", "top", '-25px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '49px'],
            ["style", "left", '-422px'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '66px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 62500,
         autoPlay: false,
         timeline: [
            { id: "eid1624", tween: [ "style", "${_Lumaca}", "left", '-180px', { fromValue: '-422px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1684", tween: [ "style", "${_Lumaca}", "left", '238px', { fromValue: '-180px'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3381", tween: [ "style", "${_Lumaca}", "left", '467px', { fromValue: '238px'}], position: 26154, duration: 7827, easing: "easeInOutQuad" },
            { id: "eid3383", tween: [ "style", "${_Lumaca}", "left", '1005px', { fromValue: '467px'}], position: 33981, duration: 28519, easing: "easeInOutQuad" },
            { id: "eid1626", tween: [ "style", "${_Lumaca}", "top", '33px', { fromValue: '-25px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1685", tween: [ "style", "${_Lumaca}", "top", '6px', { fromValue: '33px'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3382", tween: [ "style", "${_Lumaca}", "top", '-16px', { fromValue: '6px'}], position: 26154, duration: 7827, easing: "easeInQuad" },
            { id: "eid3384", tween: [ "style", "${_Lumaca}", "top", '24px', { fromValue: '-16px'}], position: 33981, duration: 28519, easing: "easeInQuad" },
            { id: "eid3385", tween: [ "transform", "${_Lumaca}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3387", tween: [ "transform", "${_Lumaca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3388", tween: [ "transform", "${_Lumaca}", "rotateZ", '-8deg', { fromValue: '-3deg'}], position: 26154, duration: 7827, easing: "easeInOutQuad" },
            { id: "eid3389", tween: [ "transform", "${_Lumaca}", "rotateZ", '13deg', { fromValue: '-8deg'}], position: 33981, duration: 21019, easing: "easeInOutQuad" },
            { id: "eid3390", tween: [ "transform", "${_Lumaca}", "rotateZ", '7deg', { fromValue: '13deg'}], position: 55000, duration: 7500, easing: "easeInOutQuad" }         ]
      }
   }
},
"FarfallaContainer": {
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
      rect: ['959px','71px','56px','49px','auto','auto'],
      id: 'Farfalla',
      userClass: 'farfalla',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Farfalla.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Farfalla}": [
            ["style", "top", '380px'],
            ["transform", "rotateZ", '-63deg'],
            ["style", "height", '49px'],
            ["style", "left", '918px'],
            ["style", "width", '56px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid2274", tween: [ "transform", "${_Farfalla}", "rotateZ", '-105deg', { fromValue: '-63deg'}], position: 1805, duration: 10195, easing: "easeInOutQuad" },
            { id: "eid2272", tween: [ "style", "${_Farfalla}", "left", '649px', { fromValue: '918px'}], position: 1805, duration: 3068, easing: "easeInQuad" },
            { id: "eid2476", tween: [ "style", "${_Farfalla}", "left", '-410px', { fromValue: '649px'}], position: 4873, duration: 7127, easing: "easeOutQuad" },
            { id: "eid2273", tween: [ "style", "${_Farfalla}", "top", '450px', { fromValue: '380px'}], position: 1805, duration: 3068, easing: "easeInQuad" },
            { id: "eid2477", tween: [ "style", "${_Farfalla}", "top", '-31px', { fromValue: '450px'}], position: 4873, duration: 7127, easing: "easeOutQuad" }         ]
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
      fill: ['rgba(0,0,0,0)','images/Q1-Fiore-Gambo.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.88','0.88']],
      id: 'Fiore-Petali',
      type: 'image',
      rect: ['-3px','25px','189px','189px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Fiore-Petali.png','0px','0px']
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
      transform: [[0,0],['-5'],[],['0.37','0.37']],
      id: 'CodaInterna',
      type: 'image',
      rect: ['-10px','-321px','469px','576px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q1-Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CodaInterna}": [
            ["style", "top", '-321px'],
            ["style", "-webkit-transform-origin", [9,92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.37'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '576px'],
            ["transform", "scaleX", '0.37'],
            ["style", "left", '-10px'],
            ["style", "width", '469px']
         ],
         "${symbolSelector}": [
            ["style", "height", '228px'],
            ["style", "width", '191px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: false,
         labels: {
            "animaziocoda": 7000
         },
         timeline: [
            { id: "eid4202", tween: [ "transform", "${_CodaInterna}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 7000, duration: 366, easing: "easeInOutQuad" },
            { id: "eid4203", tween: [ "transform", "${_CodaInterna}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 7366, duration: 39, easing: "easeInQuad" },
            { id: "eid4204", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-17deg', { fromValue: '11deg'}], position: 7404, duration: 64, easing: "easeOutQuad" },
            { id: "eid4225", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-5deg', { fromValue: '-17deg'}], position: 7468, duration: 164, easing: "easeOutQuad" }         ]
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
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"Menu": {
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
      id: 'MENUz',
      type: 'rect',
      rect: ['427px','-62px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'MENUz',
      symbolName: 'MENUz'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_MENUz}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 384,
         autoPlay: false,
         timeline: [
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '-121px', { fromValue: '0px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '-2px', { fromValue: '-121px'}], position: 223, duration: 161, easing: "easeInOutQuad" }         ]
      }
   }
},
"testina": {
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
      id: 'Testina',
      type: 'image',
      rect: ['0px','0px','84px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Testina.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Testina}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '97px'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '84px']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '84px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 610.08352906305,
         autoPlay: false,
         timeline: [
            { id: "eid5429", tween: [ "transform", "${_Testina}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 201, easing: "easeInOutBounce" },
            { id: "eid5430", tween: [ "transform", "${_Testina}", "rotateZ", '-15deg', { fromValue: '21deg'}], position: 201, duration: 224, easing: "easeInOutBounce" },
            { id: "eid5431", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 425, duration: 185, easing: "easeInOutBounce" }         ]
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
      transform: [[0,0],[],[],['0.77','0.77']],
      type: 'image',
      id: 'NextImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      clip: ['rect(-8px 79px 107px -14px)'],
      fill: ['rgba(0,0,0,0)','images/G-Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_NextImg}": [
            ["style", "top", '-11px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "left", '-8px'],
            ["style", "clip", [-8,79,107,-14], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
         duration: 140,
         autoPlay: false,
         timeline: [
            { id: "eid1367", tween: [ "transform", "${_NextImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1368", tween: [ "transform", "${_NextImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1369", tween: [ "transform", "${_NextImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1370", tween: [ "transform", "${_NextImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
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
})(jQuery, AdobeEdge, "Quadro01");
