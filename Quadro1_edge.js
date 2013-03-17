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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
            id:'QUADRO1',
            type:'image',
            rect:['-72px','-19px','1145px','847px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"QUADRO1.png",'0px','0px']
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
            fill:["rgba(0,0,0,0)",im+"Corpo.png",'0px','0px'],
            transform:[[],[],[],['0.37','0.37']]
         },
         {
            id:'TESTA',
            type:'rect',
            rect:['578','123','auto','auto','auto','auto']
         },
         {
            id:'CAROTA',
            type:'rect',
            rect:['466','489','auto','auto','auto','auto'],
            userClass:"carota"
         },
         {
            id:'Cestino',
            type:'image',
            rect:['772px','490px','193px','115px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Cestino.png",'0px','0px']
         },
         {
            id:'Toppa-Carota',
            type:'image',
            rect:['446px','583px','85px','87px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Toppa-Carota.png",'0px','0px'],
            transform:[[],['0deg'],[],['1.71','1.71']]
         },
         {
            id:'BIRD',
            type:'rect',
            rect:['66','213','auto','auto','auto','auto'],
            userClass:"uccellino"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'FioreAni',
            type:'rect',
            rect:['430','430','auto','auto','auto','auto'],
            userClass:"fioreani"
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
            id:'CodaCopy',
            type:'rect',
            rect:['763','243','auto','auto','auto','auto'],
            userClass:"codadummy"
         },
         {
            id:'MENUz',
            type:'rect',
            rect:['354','634','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Coda',
            symbolName:'Coda'
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
            id:'Lumachina',
            symbolName:'Lumachina'
         },
         {
            id:'Fogliolina8',
            symbolName:'Fogliolina'
         },
         {
            id:'FioreAniCopy2',
            symbolName:'FioreAni'
         },
         {
            id:'FioreAniCopy',
            symbolName:'FioreAni'
         },
         {
            id:'BIRD',
            symbolName:'BIRD'
         },
         {
            id:'FioreAniCopy4',
            symbolName:'FioreAni'
         },
         {
            id:'CodaCopy',
            symbolName:'Coda'
         },
         {
            id:'CAROTA',
            symbolName:'CAROTA'
         },
         {
            id:'FioreAniCopy3',
            symbolName:'FioreAni'
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
            id:'MENUz',
            symbolName:'MENUz'
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
            id:'Fogliolina2',
            symbolName:'Fogliolina'
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
            ["style", "top", '556.91px'],
            ["style", "left", '293.56px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_NUVOLA}": [
            ["style", "left", '87px']
         ],
         "${_Fogliolina4}": [
            ["style", "top", '450.17px'],
            ["transform", "scaleX", '1.14999'],
            ["transform", "scaleY", '1.14999'],
            ["style", "left", '76.17px']
         ],
         "${_Fogliolina2}": [
            ["style", "top", '505.87px'],
            ["transform", "scaleX", '0.68'],
            ["transform", "scaleY", '0.68'],
            ["style", "left", '213.57px']
         ],
         "${_Fogliolina8}": [
            ["style", "left", '464px'],
            ["style", "top", '420.33px']
         ],
         "${_FioreAni}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "left", '509.43px'],
            ["transform", "scaleY", '0.27438'],
            ["style", "top", '506.07px']
         ],
         "${_BIRD}": [
            ["style", "top", '232.22px'],
            ["style", "left", '57.2px'],
            ["transform", "scaleY", '0.53906'],
            ["transform", "scaleX", '0.53906']
         ],
         "${_FioreAniCopy2}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '568.91px'],
            ["style", "left", '-7.57px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_CodaCopy}": [
            ["style", "overflow", 'hidden'],
            ["style", "opacity", '0']
         ],
         "${_Cestino}": [
            ["style", "height", '115.28333282471px'],
            ["style", "top", '490px'],
            ["style", "left", '772.02px'],
            ["style", "width", '193px']
         ],
         "${_Fogliolina3}": [
            ["style", "top", '522.02px'],
            ["transform", "scaleX", '0.86'],
            ["transform", "scaleY", '0.86'],
            ["style", "left", '114.77px']
         ],
         "${_Fogliolina5}": [
            ["style", "top", '444px'],
            ["transform", "scaleX", '0.79'],
            ["transform", "scaleY", '0.79'],
            ["style", "left", '194.07px']
         ],
         "${_Fogliolina7}": [
            ["style", "left", '406.7px'],
            ["style", "top", '467px']
         ],
         "${_Corpo}": [
            ["style", "top", '80.95px'],
            ["transform", "scaleY", '0.37'],
            ["transform", "scaleX", '0.37'],
            ["style", "height", '774.77474728146px'],
            ["style", "left", '280.72px'],
            ["style", "width", '996.02705602341px']
         ],
         "${_FioreAniCopy5}": [
            ["transform", "scaleX", '0.21695'],
            ["style", "top", '456.33px'],
            ["style", "left", '888px'],
            ["transform", "scaleY", '0.21695']
         ],
         "${_Toppa-Carota}": [
            ["style", "top", '583.22px'],
            ["transform", "scaleY", '1.71'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '86.928677795492px'],
            ["transform", "scaleX", '1.71'],
            ["style", "left", '446.27px'],
            ["style", "width", '85.335893909834px']
         ],
         "${_Fogliolina6}": [
            ["style", "top", '443.95px'],
            ["transform", "scaleX", '0.89'],
            ["transform", "scaleY", '0.89'],
            ["style", "left", '315.02px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522.19658526344px'],
            ["style", "top", '-42px'],
            ["style", "left", '-10.72px'],
            ["style", "width", '1049.6411743164px']
         ],
         "${_MENUz}": [
            ["style", "left", '-73px'],
            ["style", "top", '696.47px']
         ],
         "${_FioreAniCopy4}": [
            ["transform", "scaleX", '0.18'],
            ["style", "top", '289.33px'],
            ["style", "left", '878.78px'],
            ["transform", "scaleY", '0.18']
         ],
         "${_TESTA}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '580.5px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '124.05px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_CAROTA}": [
            ["style", "top", '478px'],
            ["style", "left", '465px']
         ],
         "${_QUADRO1}": [
            ["style", "height", '847.12731933594px'],
            ["style", "top", '-19.18px'],
            ["style", "left", '-72.25px'],
            ["style", "width", '1145.3399254676px']
         ],
         "${_FioreAniCopy}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '568.91px'],
            ["style", "left", '738.12px'],
            ["transform", "scaleY", '0.27438']
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
            { id: "eid4191", tween: [ "transform", "${_TESTA}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2393", tween: [ "transform", "${_FioreAniCopy}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2436", tween: [ "style", "${_FioreAniCopy4}", "left", '878.78px', { fromValue: '878.78px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid86", tween: [ "style", "${_CAROTA}", "top", '478px', { fromValue: '478px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
            { id: "eid2395", tween: [ "transform", "${_FioreAniCopy}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2457", tween: [ "style", "${_FioreAniCopy3}", "top", '556.91px', { fromValue: '556.91px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid20", tween: [ "style", "${_BIRD}", "left", '57.2px', { fromValue: '57.2px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2456", tween: [ "style", "${_FioreAniCopy3}", "left", '293.56px', { fromValue: '293.56px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2449", tween: [ "style", "${_FioreAniCopy5}", "top", '456.33px', { fromValue: '456.33px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2411", tween: [ "transform", "${_FioreAniCopy3}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2459", tween: [ "style", "${_FioreAni}", "top", '506.07px', { fromValue: '506.07px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid23", tween: [ "style", "${_BIRD}", "top", '232.22px', { fromValue: '232.22px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2448", tween: [ "style", "${_FioreAniCopy5}", "left", '888px', { fromValue: '888px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2444", tween: [ "transform", "${_FioreAniCopy5}", "scaleX", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4192", tween: [ "transform", "${_TESTA}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2455", tween: [ "style", "${_FioreAniCopy2}", "top", '568.91px', { fromValue: '568.91px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4196", tween: [ "style", "${_TESTA}", "left", '580.5px', { fromValue: '580.5px'}], position: 0, duration: 0 },
            { id: "eid2403", tween: [ "transform", "${_FioreAniCopy2}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2409", tween: [ "transform", "${_FioreAniCopy3}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2389", tween: [ "transform", "${_FioreAni}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2437", tween: [ "style", "${_FioreAniCopy4}", "top", '289.33px', { fromValue: '289.33px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2490", tween: [ "style", "${_FioreAniCopy}", "left", '738.12px', { fromValue: '738.12px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4857", tween: [ "style", "${_CodaCopy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '575px', { fromValue: '696.47px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '694px', { fromValue: '575px'}], position: 223, duration: 116, easing: "easeInOutQuad" },
            { id: "eid2458", tween: [ "style", "${_FioreAni}", "left", '509.43px', { fromValue: '509.43px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2451", tween: [ "style", "${_FioreAniCopy}", "top", '568.91px', { fromValue: '568.91px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2388", tween: [ "transform", "${_FioreAni}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2405", tween: [ "transform", "${_FioreAniCopy2}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2445", tween: [ "transform", "${_FioreAniCopy5}", "scaleY", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid3900", tween: [ "transform", "${_FioreAniCopy4}", "scaleY", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3899", tween: [ "transform", "${_FioreAniCopy4}", "scaleX", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4194", tween: [ "style", "${_TESTA}", "top", '124.05px', { fromValue: '124.05px'}], position: 0, duration: 0 },
            { id: "eid2454", tween: [ "style", "${_FioreAniCopy2}", "left", '-7.57px', { fromValue: '-7.57px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid14", tween: [ "transform", "${_BIRD}", "scaleY", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid13", tween: [ "transform", "${_BIRD}", "scaleX", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2119", tween: [ "style", "${_CAROTA}", "left", '465px', { fromValue: '465px'}], position: 0, duration: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CAROTA}', [] ], ""], position: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"Fogliolina": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','60px','42px','auto','auto'],
      id: 'Foglia',
      userClass: '',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Foglia.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Foglia}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '42.384871264009px'],
            ["style", "-webkit-transform-origin", [49,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0.01px'],
            ["style", "width", '60.299999237061px']
         ],
         "${symbolSelector}": [
            ["style", "height", '42.383335113525px'],
            ["style", "width", '60.299999237061px']
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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Gambe-Bird',
      type: 'image',
      rect: ['44px','74px','52px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Gambe-Bird.png','0px','0px']
   },
   {
      id: 'Bird',
      type: 'image',
      rect: ['0px','0px','130px','114px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Bird.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['-12deg']],
      id: 'Nota',
      type: 'image',
      rect: ['114px','-51px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Nota.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['-12deg']],
      id: 'NotaCopy2',
      type: 'image',
      rect: ['114px','-51px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Nota.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['-12deg'],{},['0.84','0.84']],
      id: 'NotaCopy3',
      type: 'image',
      rect: ['114px','-51px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Nota.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['-12deg'],{},['0.58','0.58']],
      id: 'NotaCopy4',
      type: 'image',
      rect: ['114px','-51px','32px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Nota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nota}": [
            ["style", "top", '-50.73px'],
            ["transform", "rotateZ", '-12deg'],
            ["style", "height", '39.933334350586px'],
            ["style", "opacity", '0'],
            ["style", "left", '113.8px'],
            ["style", "width", '31.946667480469px']
         ],
         "${_NotaCopy3}": [
            ["style", "top", '-160.81px'],
            ["style", "height", '39.933334350586px'],
            ["transform", "scaleY", '0.84'],
            ["transform", "rotateZ", '47deg'],
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '193.8px'],
            ["style", "width", '31.946667480469px']
         ],
         "${symbolSelector}": [
            ["style", "height", '113.93333435059px'],
            ["style", "width", '130.18333435059px']
         ],
         "${_Bird}": [
            ["style", "-webkit-transform-origin", [45,71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [45,71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [45,71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [45,71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [45,71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '113.91666412354px'],
            ["style", "top", '0.01px'],
            ["style", "left", '0px'],
            ["style", "width", '130.18431758642px']
         ],
         "${_NotaCopy2}": [
            ["style", "top", '-96.82px'],
            ["style", "height", '39.933334350586px'],
            ["transform", "scaleY", '0.92'],
            ["transform", "rotateZ", '13deg'],
            ["transform", "scaleX", '0.92'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '153.8px'],
            ["style", "width", '31.946667480469px']
         ],
         "${_NotaCopy4}": [
            ["style", "top", '-203.21px'],
            ["transform", "scaleX", '0.57999'],
            ["transform", "scaleY", '0.57999'],
            ["transform", "rotateZ", '-15deg'],
            ["style", "height", '39.933334350586px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '263.87px'],
            ["style", "width", '31.946667480469px']
         ],
         "${_Gambe-Bird}": [
            ["style", "top", '74.01px'],
            ["style", "height", '39.939865174585px'],
            ["style", "left", '43.97px'],
            ["style", "width", '52.353607053173px']
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
            { id: "eid25", tween: [ "transform", "${_Bird}", "rotateZ", '-28deg', { fromValue: '0deg'}], position: 0, duration: 660, easing: "easeInOutQuart" },
            { id: "eid26", tween: [ "transform", "${_Bird}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 660, duration: 965, easing: "easeInOutQuart" },
            { id: "eid32", tween: [ "style", "${_NotaCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 469, duration: 128, easing: "easeInOutQuart" },
            { id: "eid33", tween: [ "style", "${_NotaCopy2}", "opacity", '0', { fromValue: '1'}], position: 918, duration: 119, easing: "easeInOutQuart" },
            { id: "eid50", tween: [ "transform", "${_NotaCopy4}", "rotateZ", '-15deg', { fromValue: '-15deg'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid39", tween: [ "style", "${_NotaCopy3}", "left", '193.8px', { fromValue: '193.8px'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid36", tween: [ "style", "${_NotaCopy2}", "left", '153.8px', { fromValue: '153.8px'}], position: 392, duration: 0, easing: "easeInOutQuart" },
            { id: "eid34", tween: [ "style", "${_NotaCopy3}", "opacity", '1', { fromValue: '0.000000'}], position: 677, duration: 128, easing: "easeInOutQuart" },
            { id: "eid35", tween: [ "style", "${_NotaCopy3}", "opacity", '0', { fromValue: '1'}], position: 1125, duration: 119, easing: "easeInOutQuart" },
            { id: "eid40", tween: [ "style", "${_NotaCopy3}", "top", '-160.81px', { fromValue: '-160.81px'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid41", tween: [ "transform", "${_NotaCopy3}", "rotateZ", '47deg', { fromValue: '47deg'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid29", tween: [ "style", "${_Nota}", "opacity", '1', { fromValue: '0.000000'}], position: 236, duration: 128, easing: "easeInOutQuart" },
            { id: "eid31", tween: [ "style", "${_Nota}", "opacity", '0', { fromValue: '1'}], position: 685, duration: 119, easing: "easeInOutQuart" },
            { id: "eid46", tween: [ "style", "${_NotaCopy4}", "top", '-203.21px', { fromValue: '-203.21px'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid49", tween: [ "style", "${_NotaCopy4}", "left", '263.87px', { fromValue: '263.87px'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid47", tween: [ "style", "${_NotaCopy4}", "opacity", '1', { fromValue: '0.000000'}], position: 932, duration: 128, easing: "easeInOutQuart" },
            { id: "eid48", tween: [ "style", "${_NotaCopy4}", "opacity", '0', { fromValue: '1'}], position: 1381, duration: 119, easing: "easeInOutQuart" },
            { id: "eid37", tween: [ "style", "${_NotaCopy2}", "top", '-96.82px', { fromValue: '-96.82px'}], position: 392, duration: 0, easing: "easeInOutQuart" }         ]
      }
   }
},
"CAROTA": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
      fill: ['rgba(0,0,0,0)','Numeri/1_col.png','0px','0px']
   },
   {
      id: 'Carota',
      type: 'image',
      rect: ['0px','0px','67px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Carota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Carota}": [
            ["style", "top", '0.01px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '132.2393951416px'],
            ["style", "left", '0px'],
            ["style", "width", '67.288916400381px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132.23333740234px'],
            ["style", "width", '67.283332824707px']
         ],
         "${_Numero1ColAnimato}": [
            ["style", "top", '-446px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '227.07038541216px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '-148.34px'],
            ["style", "width", '290.49211120605px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3910,
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
            { id: "eid1094", tween: [ "style", "${_Numero1ColAnimato}", "left", '-328.51px', { fromValue: '-148.34px'}], position: 1541, duration: 511, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Numero1ColAnimato}", "left", '-140.71px', { fromValue: '-328.51px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1137", tween: [ "style", "${_Numero1ColAnimato}", "top", '-435.21px', { fromValue: '-446px'}], position: 1541, duration: 511, easing: "easeOutBounce" },
            { id: "eid1087", tween: [ "style", "${_Numero1ColAnimato}", "top", '471.81px', { fromValue: '-435.21px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid58", tween: [ "style", "${_Carota}", "top", '12px', { fromValue: '0.01px'}], position: 467, duration: 479, easing: "easeInOutQuart" },
            { id: "eid61", tween: [ "style", "${_Carota}", "top", '-397.99px', { fromValue: '12px'}], position: 1132, duration: 920, easing: "swing" },
            { id: "eid70", tween: [ "style", "${_Carota}", "top", '-27.78px', { fromValue: '-397.99px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid1103", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1104", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1108", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1089", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "style", "${_Carota}", "left", '0px', { fromValue: '0px'}], position: 467, duration: 0, easing: "easeInOutQuart" },
            { id: "eid62", tween: [ "style", "${_Carota}", "left", '-33.28px', { fromValue: '0px'}], position: 1132, duration: 920, easing: "easeInOutQuad" },
            { id: "eid69", tween: [ "style", "${_Carota}", "left", '335.12px', { fromValue: '-33.28px'}], position: 2867, duration: 1043, easing: "easeOutBounce" }         ]
      }
   }
},
"TESTA": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'Testa',
      rect: ['-141px','-245px','427px','522px','auto','auto'],
      transform: [{1:0,0:0},['0deg'],{},['0.5','0.5']],
      fill: ['rgba(0,0,0,0)','images/Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Testa}": [
            ["style", "top", '-245.34px'],
            ["style", "-webkit-transform-origin", [66,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [66,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.5'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.5'],
            ["style", "height", '522.01266320542px'],
            ["style", "left", '-140.85px'],
            ["style", "width", '426.85678100586px']
         ],
         "${symbolSelector}": [
            ["style", "height", '261px'],
            ["style", "width", '213.42500305176px']
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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
      fill: ['rgba(0,0,0,0)','images/Fumello.png','0px','0px','445.97px','286.67px']
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
            ["style", "top", '-68.67px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Fumello}": [
            ["style", "top", '-8px'],
            ["style", "height", '286.6718028641px'],
            ["style", "left", '0.01px'],
            ["style", "width", '445.97930908203px']
         ],
         "${symbolSelector}": [
            ["style", "height", '286.66665649414px'],
            ["style", "width", '445.96667480469px']
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
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172.27px', { fromValue: '-68.67px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-64.75px', { fromValue: '172.27px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '176.99px', { fromValue: '-8px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '176.99px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid99", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4974", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4975", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4976", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4977", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"NUVOLA": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
            ["style", "height", '132.23333740234px'],
            ["style", "top", '22.01px'],
            ["style", "left", '-180px'],
            ["style", "width", '184.80026214442px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132.23333740234px'],
            ["style", "width", '184.80000305176px']
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
            { id: "eid183", tween: [ "style", "${_Nuvola}", "left", '1002.66px', { fromValue: '-180px'}], position: 0, duration: 105000, easing: "swing" },
            { id: "eid185", tween: [ "style", "${_Nuvola}", "top", '-82.93px', { fromValue: '22.01px'}], position: 0, duration: 105000, easing: "swing" }         ]
      }
   }
},
"HOME_butt": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: {},
      fill: ['rgba(0,0,0,0)','images/HOME.png','0px','0px'],
      id: 'HOME',
      type: 'image',
      rect: ['0px','0px','103px','97px','auto','auto'],
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
            ["style", "width", '102.78525590057px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '96.766670227051px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)']
         ],
         "${symbolSelector}": [
            ["style", "height", '96.766670227051px'],
            ["style", "width", '102.78333282471px']
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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','21px','1160px','217px','auto','auto'],
      id: 'Menu',
      opacity: 0.7,
      type: 'image',
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
      userClass: 'next',
      id: 'NEXT',
      type: 'rect',
      transform: [{1:0,0:0},{},{},['0.69','0.69']],
      rect: ['1031px','103px','auto','auto','auto','auto']
   },
   {
      rect: ['23.7%','29.5%','125px','98px','auto','auto'],
      userClass: 'uno',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/1_col.png','0px','0px']
   },
   {
      rect: ['35.1%','29.5%','124px','97px','auto','auto'],
      userClass: 'due',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/2_col.png','0px','0px']
   },
   {
      rect: ['46.3%','29.5%','124px','97px','auto','auto'],
      userClass: 'tre',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/3_col.png','0px','0px']
   },
   {
      rect: ['57.5%','29.5%','124px','97px','auto','auto'],
      userClass: 'quattro',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/4_col.png','0px','0px']
   },
   {
      rect: ['68.6%','29.5%','124px','97px','auto','auto'],
      userClass: 'cinque',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Numeri/5_col.png','0px','0px']
   }],
   symbolInstances: [
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
         "${_Testina}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.768676206525px'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1013.4px'],
            ["style", "width", '83.979522705078px']
         ],
         "${_Numero_4}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '57.53%'],
            ["style", "width", '123.83183013084px']
         ],
         "${_Menu}": [
            ["style", "top", '20.57px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '217.36829376221px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '0px'],
            ["style", "width", '1159.7165441837px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '61.18px'],
            ["transform", "scaleY", '0.71726'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.71726'],
            ["style", "left", '79.44px']
         ],
         "${_NEXT}": [
            ["style", "top", '103px'],
            ["transform", "scaleY", '0.69'],
            ["transform", "scaleX", '0.69']
         ],
         "${_Numero_3}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '46.32%'],
            ["style", "width", '123.83183013084px']
         ],
         "${symbolSelector}": [
            ["style", "height", '237.93334197998px'],
            ["style", "width", '1159.6999511719px']
         ],
         "${_Numero_1}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97.920092201506px'],
            ["style", "opacity", '1'],
            ["style", "left", '23.74%'],
            ["style", "width", '125.28031496841px']
         ],
         "${_Numero_5}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '68.57%'],
            ["style", "width", '123.83183013084px']
         ],
         "${_Numero_2}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '35.1%'],
            ["style", "width", '123.83183013084px']
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
            { id: "eid459", tween: [ "style", "${_HOME_butt}", "left", '79.44px', { fromValue: '79.44px'}], position: 415, duration: 0 },
            { id: "eid487", tween: [ "transform", "${_Testina}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 65, easing: "easeOutBounce" },
            { id: "eid488", tween: [ "transform", "${_Testina}", "rotateZ", '-8deg', { fromValue: '10deg'}], position: 65, duration: 44, easing: "easeOutBounce" },
            { id: "eid489", tween: [ "transform", "${_Testina}", "rotateZ", '5deg', { fromValue: '-8deg'}], position: 108, duration: 47, easing: "easeOutBounce" },
            { id: "eid490", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 156, duration: 49, easing: "easeOutBounce" },
            { id: "eid500", tween: [ "transform", "${_Testina}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 500, duration: 129 },
            { id: "eid501", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 629, duration: 92 },
            { id: "eid454", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid455", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid460", tween: [ "style", "${_HOME_butt}", "top", '61.18px', { fromValue: '61.18px'}], position: 415, duration: 0 }         ]
      }
   }
},
"PREV": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},{},{},['0.77','0.77']],
      type: 'image',
      id: 'PrevImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      clip: ['rect(-12px 81px 110px -7px)'],
      fill: ['rgba(0,0,0,0)','images/Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '75.46px'],
            ["style", "width", '55.44px']
         ],
         "${_PrevImg}": [
            ["style", "top", '-11.27px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-12,81,110,-7], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8.28px'],
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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},{},{},['0.77','0.77']],
      type: 'image',
      id: 'NextImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      clip: ['rect(-8px 79px 107px -14px)'],
      fill: ['rgba(0,0,0,0)','images/Next.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_NextImg}": [
            ["style", "top", '-11.28px'],
            ["style", "height", '98.083274663881px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-8,79,107,-14], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8.31px'],
            ["style", "width", '72.283332824707px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75.511332550049px'],
            ["style", "width", '55.658166275025px']
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
"Lumachina": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      userClass: 'Lumachina',
      id: 'Lumaca',
      type: 'image',
      rect: ['0px','0px','66px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Lumaca.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Lumaca}": [
            ["style", "top", '-24.73px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '48.740411547203px'],
            ["style", "left", '-421.99px'],
            ["style", "width", '66.184348311465px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48.733333587646px'],
            ["style", "width", '66.183334350586px']
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
            { id: "eid1624", tween: [ "style", "${_Lumaca}", "left", '-180.45px', { fromValue: '-421.99px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1684", tween: [ "style", "${_Lumaca}", "left", '238.12px', { fromValue: '-180.45px'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3381", tween: [ "style", "${_Lumaca}", "left", '466.96px', { fromValue: '238.12px'}], position: 26154, duration: 7827, easing: "easeInOutQuad" },
            { id: "eid3383", tween: [ "style", "${_Lumaca}", "left", '1005.49px', { fromValue: '466.96px'}], position: 33981, duration: 28519, easing: "easeInOutQuad" },
            { id: "eid1626", tween: [ "style", "${_Lumaca}", "top", '32.99px', { fromValue: '-24.73px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1685", tween: [ "style", "${_Lumaca}", "top", '6.13px', { fromValue: '32.99px'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3382", tween: [ "style", "${_Lumaca}", "top", '-16.38px', { fromValue: '6.13px'}], position: 26154, duration: 7827, easing: "easeInQuad" },
            { id: "eid3384", tween: [ "style", "${_Lumaca}", "top", '24px', { fromValue: '-16.38px'}], position: 33981, duration: 28519, easing: "easeInQuad" },
            { id: "eid3385", tween: [ "transform", "${_Lumaca}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3387", tween: [ "transform", "${_Lumaca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3388", tween: [ "transform", "${_Lumaca}", "rotateZ", '-8deg', { fromValue: '-3deg'}], position: 26154, duration: 7827, easing: "easeInOutQuad" },
            { id: "eid3389", tween: [ "transform", "${_Lumaca}", "rotateZ", '13deg', { fromValue: '-8deg'}], position: 33981, duration: 21019, easing: "easeInOutQuad" },
            { id: "eid3390", tween: [ "transform", "${_Lumaca}", "rotateZ", '7deg', { fromValue: '13deg'}], position: 55000, duration: 7500, easing: "easeInOutQuad" }         ]
      }
   }
},
"FarfallaContainer": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
      fill: ['rgba(0,0,0,0)','Animalini/Farfalla.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Farfalla}": [
            ["style", "top", '380.15px'],
            ["transform", "rotateZ", '-63deg'],
            ["style", "height", '48.740411547203px'],
            ["style", "left", '917.83px'],
            ["style", "width", '55.555808077109px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48.733333587646px'],
            ["style", "width", '55.549999237061px']
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
            { id: "eid2272", tween: [ "style", "${_Farfalla}", "left", '649.18px', { fromValue: '917.83px'}], position: 1805, duration: 3068, easing: "easeInQuad" },
            { id: "eid2476", tween: [ "style", "${_Farfalla}", "left", '-410.4px', { fromValue: '649.18px'}], position: 4873, duration: 7127, easing: "easeOutQuad" },
            { id: "eid2273", tween: [ "style", "${_Farfalla}", "top", '450.35px', { fromValue: '380.15px'}], position: 1805, duration: 3068, easing: "easeInQuad" },
            { id: "eid2477", tween: [ "style", "${_Farfalla}", "top", '-30.79px', { fromValue: '450.35px'}], position: 4873, duration: 7127, easing: "easeOutQuad" }         ]
      }
   }
},
"FioreAni": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
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
      transform: [{1:0,0:0},['0deg'],{},['0.88','0.88']],
      id: 'Fiore-Petali',
      type: 'image',
      rect: ['-3px','25px','189px','189px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Fiore-Petali.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Fiore-Petali}": [
            ["style", "top", '24.53px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "left", '-3.34px'],
            ["style", "height", '189px']
         ],
         "${_Fiore-Gambo}": [
            ["style", "left", '72px'],
            ["style", "top", '134.02px']
         ],
         "${symbolSelector}": [
            ["style", "height", '229.01666259766px'],
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
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},['-5deg'],{},['0.37','0.37']],
      id: 'CodaInterna',
      type: 'image',
      rect: ['-10px','-321px','469px','576px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '227.55692786255px'],
            ["style", "width", '191.39435376221px']
         ],
         "${_CodaInterna}": [
            ["style", "top", '-321.05px'],
            ["style", "-webkit-transform-origin", [9,92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [9,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.37'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '576.35418956763px'],
            ["transform", "scaleX", '0.37'],
            ["style", "left", '-9.53px'],
            ["style", "width", '468.8480491152px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 633,
         autoPlay: false,
         timeline: [
            { id: "eid4202", tween: [ "transform", "${_CodaInterna}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 0, duration: 366, easing: "easeInOutQuad" },
            { id: "eid4203", tween: [ "transform", "${_CodaInterna}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 366, duration: 39, easing: "easeInQuad" },
            { id: "eid4204", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-17deg', { fromValue: '11deg'}], position: 404, duration: 64, easing: "easeOutQuad" },
            { id: "eid4225", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-5deg', { fromValue: '-17deg'}], position: 468, duration: 164, easing: "easeOutQuad" }         ]
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
