/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['luckiest-guy, sans-serif']='<script src=\"http://use.edgefonts.net/luckiest-guy:n4:all.js\"></script>';


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
            id:'FioreAniCopy',
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
            id:'FUMELLO',
            type:'rect',
            rect:['49px','-226','auto','auto','auto','auto']
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
            id:'Menu',
            type:'rect',
            rect:['-68px','697px','auto','auto','auto','auto'],
            userClass:"menu"
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
            id:'BIRD',
            symbolName:'BIRD'
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
            id:'FioreAniCopy4',
            symbolName:'FioreAni'
         },
         {
            id:'FioreAniCopy',
            symbolName:'FioreAni'
         },
         {
            id:'Fogliolina6',
            symbolName:'Fogliolina'
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
            id:'FioreAniCopy2',
            symbolName:'FioreAni'
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
            id:'Fogliolina7',
            symbolName:'Fogliolina'
         },
         {
            id:'Menu',
            symbolName:'Menu'
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
            ["style", "top", '557px'],
            ["transform", "scaleY", '0.27438'],
            ["style", "left", '294px'],
            ["transform", "scaleX", '0.27438']
         ],
         "${_NUVOLA}": [
            ["style", "left", '87px']
         ],
         "${_BIRD}": [
            ["style", "top", '232px'],
            ["transform", "scaleY", '0.53906'],
            ["subproperty", "filter.drop-shadow.blur", '10px'],
            ["transform", "scaleX", '0.53906'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.52)'],
            ["style", "left", '60px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px']
         ],
         "${_Fogliolina2}": [
            ["transform", "scaleX", '0.68'],
            ["style", "left", '214px'],
            ["transform", "scaleY", '0.68'],
            ["style", "top", '506px']
         ],
         "${_Fogliolina8}": [
            ["style", "left", '464px'],
            ["style", "top", '420px']
         ],
         "${_FioreAni}": [
            ["transform", "scaleX", '0.27438'],
            ["style", "top", '506px'],
            ["style", "left", '509px'],
            ["transform", "scaleY", '0.27438']
         ],
         "${_Fogliolina3}": [
            ["transform", "scaleX", '0.86'],
            ["style", "left", '115px'],
            ["transform", "scaleY", '0.86'],
            ["style", "top", '522px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_FioreAniCopy2}": [
            ["style", "top", '569px'],
            ["transform", "scaleY", '0.27438'],
            ["style", "left", '-8px'],
            ["transform", "scaleX", '0.27438']
         ],
         "${_Trigger-Coda}": [
            ["style", "top", '243px'],
            ["style", "height", '219px'],
            ["style", "opacity", '0'],
            ["style", "left", '797px'],
            ["style", "width", '145px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-226px'],
            ["style", "left", '49px']
         ],
         "${_TESTA}": [
            ["transform", "scaleX", '1'],
            ["style", "top", '124px'],
            ["style", "left", '581px'],
            ["transform", "scaleY", '1']
         ],
         "${_FioreAniCopy}": [
            ["style", "top", '569px'],
            ["transform", "scaleY", '0.27438'],
            ["style", "left", '738px'],
            ["transform", "scaleX", '0.27438']
         ],
         "${_Fogliolina5}": [
            ["transform", "scaleX", '0.79'],
            ["style", "left", '194px'],
            ["transform", "scaleY", '0.79'],
            ["style", "top", '444px']
         ],
         "${_Fogliolina7}": [
            ["style", "left", '407px'],
            ["style", "top", '467px']
         ],
         "${_Corpo}": [
            ["style", "top", '81px'],
            ["transform", "scaleY", '0.37'],
            ["transform", "scaleX", '0.37'],
            ["style", "height", '775px'],
            ["style", "left", '281px'],
            ["style", "width", '996px']
         ],
         "${_FioreAniCopy5}": [
            ["style", "top", '456px'],
            ["transform", "scaleY", '0.21695'],
            ["style", "left", '888px'],
            ["transform", "scaleX", '0.21695']
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
         "${_AudioTappeto}": [
            ["style", "opacity", '0']
         ],
         "${_Cielo2}": [
            ["style", "top", '-42px'],
            ["style", "height", '522px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Cestino}": [
            ["style", "top", '490px'],
            ["style", "height", '115px'],
            ["style", "left", '772px'],
            ["style", "width", '193px']
         ],
         "${_FioreAniCopy4}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.18'],
            ["style", "left", '879px'],
            ["transform", "scaleX", '0.18']
         ],
         "${_Fogliolina6}": [
            ["transform", "scaleX", '0.89'],
            ["style", "left", '315px'],
            ["transform", "scaleY", '0.89'],
            ["style", "top", '444px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_CAROTA}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.46)'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "top", '478px'],
            ["style", "left", '465px'],
            ["subproperty", "filter.drop-shadow.blur", '5px']
         ],
         "${_QUADRO1}": [
            ["style", "top", '-19px'],
            ["style", "height", '847px'],
            ["style", "left", '-72px'],
            ["style", "width", '1145px']
         ],
         "${_Fogliolina4}": [
            ["transform", "scaleX", '1.14999'],
            ["style", "left", '76px'],
            ["transform", "scaleY", '1.14999'],
            ["style", "top", '450px']
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
            { id: "eid2395", tween: [ "transform", "${_FioreAniCopy}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2457", tween: [ "style", "${_FioreAniCopy3}", "top", '557px', { fromValue: '557px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid5084", tween: [ "style", "${_BIRD}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
            { id: "eid2456", tween: [ "style", "${_FioreAniCopy3}", "left", '294px', { fromValue: '294px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2449", tween: [ "style", "${_FioreAniCopy5}", "top", '456px', { fromValue: '456px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2445", tween: [ "transform", "${_FioreAniCopy5}", "scaleY", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2490", tween: [ "style", "${_FioreAniCopy}", "left", '738px', { fromValue: '738px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2403", tween: [ "transform", "${_FioreAniCopy2}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4192", tween: [ "transform", "${_TESTA}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid2455", tween: [ "style", "${_FioreAniCopy2}", "top", '569px', { fromValue: '569px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid13", tween: [ "transform", "${_BIRD}", "scaleX", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2459", tween: [ "style", "${_FioreAni}", "top", '506px', { fromValue: '506px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid14", tween: [ "transform", "${_BIRD}", "scaleY", '0.53906', { fromValue: '0.53906'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid2389", tween: [ "transform", "${_FioreAni}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2437", tween: [ "style", "${_FioreAniCopy4}", "top", '289px', { fromValue: '289px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4194", tween: [ "style", "${_TESTA}", "top", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid2411", tween: [ "transform", "${_FioreAniCopy3}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid3900", tween: [ "transform", "${_FioreAniCopy4}", "scaleY", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2444", tween: [ "transform", "${_FioreAniCopy5}", "scaleX", '0.21695', { fromValue: '0.21695'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2451", tween: [ "style", "${_FioreAniCopy}", "top", '569px', { fromValue: '569px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2388", tween: [ "transform", "${_FioreAni}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2448", tween: [ "style", "${_FioreAniCopy5}", "left", '888px', { fromValue: '888px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid6413", tween: [ "style", "${_FUMELLO}", "top", '-226px', { fromValue: '-226px'}], position: 0, duration: 0 },
            { id: "eid3899", tween: [ "transform", "${_FioreAniCopy4}", "scaleX", '0.18', { fromValue: '0.18'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid2409", tween: [ "transform", "${_FioreAniCopy3}", "scaleX", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2458", tween: [ "style", "${_FioreAni}", "left", '509px', { fromValue: '509px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2454", tween: [ "style", "${_FioreAniCopy2}", "left", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid4196", tween: [ "style", "${_TESTA}", "left", '581px', { fromValue: '581px'}], position: 0, duration: 0 },
            { id: "eid2405", tween: [ "transform", "${_FioreAniCopy2}", "scaleY", '0.27438', { fromValue: '0.27438'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid23", tween: [ "style", "${_BIRD}", "top", '232px', { fromValue: '232px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CAROTA}', [] ], ""], position: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 },
            { id: "eid5758", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Coda}', [] ], ""], position: 0 }         ]
      }
   }
},
"Fogliolina": {
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
         "${symbolSelector}": [
            ["style", "height", '42px'],
            ["style", "width", '60px']
         ],
         "${_Foglia}": [
            ["style", "-webkit-transform-origin", [49,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '42px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
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
            ["style", "height", '40px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-12deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '114px'],
            ["style", "width", '32px']
         ],
         "${_NotaCopy}": [
            ["style", "top", '-102px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '18deg'],
            ["style", "height", '40px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '134px'],
            ["style", "width", '32px']
         ],
         "${_Bird}": [
            ["style", "top", '-8px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '91px'],
            ["style", "-webkit-transform-origin", [57.09,96.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57.09,96.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-10px'],
            ["style", "width", '130px']
         ],
         "${_NotaCopy2}": [
            ["style", "top", '-129px'],
            ["style", "height", '40px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '35deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '178px'],
            ["style", "width", '32px']
         ],
         "${_Gambe-Bird}": [
            ["style", "height", '40px'],
            ["style", "top", '74px'],
            ["style", "left", '29px'],
            ["style", "width", '52px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '130px']
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
            { id: "eid6612", tween: [ "style", "${_Bird}", "-moz-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6613", tween: [ "style", "${_Bird}", "-ms-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6614", tween: [ "style", "${_Bird}", "msTransformOrigin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
            { id: "eid6615", tween: [ "style", "${_Bird}", "-o-transform-origin", [57.09,96.95], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.09,96.95]}], position: 0, duration: 0 },
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
            { id: "eid5119", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1.19', { fromValue: '1'}], position: 724, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5120", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1.18', { fromValue: '1.19'}], position: 916, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5121", tween: [ "transform", "${_NotaCopy2}", "scaleY", '1', { fromValue: '1.18'}], position: 1360, duration: 216, easing: "easeInOutQuart" },
            { id: "eid5096", tween: [ "transform", "${_Nota}", "scaleX", '1.19', { fromValue: '1'}], position: 197, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5098", tween: [ "transform", "${_Nota}", "scaleX", '1.18', { fromValue: '1.19'}], position: 389, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5100", tween: [ "transform", "${_Nota}", "scaleX", '1', { fromValue: '1.18'}], position: 833, duration: 216, easing: "easeInOutQuart" },
            { id: "eid29", tween: [ "style", "${_Nota}", "opacity", '0.99', { fromValue: '0.000000'}], position: 197, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5093", tween: [ "style", "${_Nota}", "opacity", '1', { fromValue: '0.990000'}], position: 389, duration: 456, easing: "easeInOutQuart" },
            { id: "eid5094", tween: [ "style", "${_Nota}", "opacity", '0', { fromValue: '1'}], position: 845, duration: 204, easing: "easeInOutQuart" },
            { id: "eid5040", tween: [ "style", "${_Bird}", "top", '-8px', { fromValue: '-8px'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "transform", "${_Bird}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 0, duration: 660, easing: "easeInOutQuart" },
            { id: "eid26", tween: [ "transform", "${_Bird}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 660, duration: 965, easing: "easeInOutQuart" },
            { id: "eid5104", tween: [ "transform", "${_NotaCopy}", "scaleX", '1.19', { fromValue: '1'}], position: 461, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5105", tween: [ "transform", "${_NotaCopy}", "scaleX", '1.18', { fromValue: '1.19'}], position: 653, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5106", tween: [ "transform", "${_NotaCopy}", "scaleX", '1', { fromValue: '1.18'}], position: 1097, duration: 216, easing: "easeInOutQuart" },
            { id: "eid5113", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1.19', { fromValue: '1'}], position: 724, duration: 192, easing: "easeInOutQuart" },
            { id: "eid5114", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1.18', { fromValue: '1.19'}], position: 916, duration: 444, easing: "easeInOutQuart" },
            { id: "eid5115", tween: [ "transform", "${_NotaCopy2}", "scaleX", '1', { fromValue: '1.18'}], position: 1360, duration: 216, easing: "easeInOutQuart" }         ]
      }
   }
},
"CAROTA": {
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
      id: 'Numero1ColAnimato',
      type: 'image',
      rect: ['-233px','-435px','290px','227px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgNum1.svg','0px','0px']
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
         "${_Numero1ColAnimato}": [
            ["style", "top", '-446px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '227px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '-148px'],
            ["style", "width", '290px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '67px']
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
            "Parte Testa": 1205
         },
         timeline: [
            { id: "eid53", tween: [ "transform", "${_Carota}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 246, easing: "easeInOutQuart" },
            { id: "eid54", tween: [ "transform", "${_Carota}", "rotateZ", '-10deg', { fromValue: '5deg'}], position: 246, duration: 221, easing: "easeInOutQuart" },
            { id: "eid55", tween: [ "transform", "${_Carota}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 467, duration: 221, easing: "easeInOutQuart" },
            { id: "eid72", tween: [ "transform", "${_Carota}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1205, duration: 751, easing: "easeOutCirc" },
            { id: "eid76", tween: [ "transform", "${_Carota}", "rotateZ", '698deg', { fromValue: '360deg'}], position: 2867, duration: 841, easing: "easeOutBounce" },
            { id: "eid58", tween: [ "style", "${_Carota}", "top", '12px', { fromValue: '0px'}], position: 467, duration: 479, easing: "easeInOutQuart" },
            { id: "eid61", tween: [ "style", "${_Carota}", "top", '-398px', { fromValue: '12px'}], position: 1132, duration: 920, easing: "swing" },
            { id: "eid70", tween: [ "style", "${_Carota}", "top", '-28px', { fromValue: '-398px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid1137", tween: [ "style", "${_Numero1ColAnimato}", "top", '-435px', { fromValue: '-446px'}], position: 1541, duration: 511, easing: "easeOutBounce" },
            { id: "eid1087", tween: [ "style", "${_Numero1ColAnimato}", "top", '472px', { fromValue: '-435px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1094", tween: [ "style", "${_Numero1ColAnimato}", "left", '-329px', { fromValue: '-148px'}], position: 1541, duration: 511, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Numero1ColAnimato}", "left", '-431px', { fromValue: '-329px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
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
   },
   {
      rect: ['333px','140px','auto','auto','auto','auto'],
      id: 'play',
      transform: [[0,0],[],[],['0.84','0.84']],
      type: 'rect',
      userClass: 'playvoce'
   }],
   symbolInstances: [
   {
      id: 'play',
      symbolName: 'play'
   }   ]
   },
   states: {
      "Base State": {
         "${_play}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "left", '333px'],
            ["style", "top", '136px']
         ],
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
            ["style", "height", '287px'],
            ["style", "top", '-8px'],
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
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid6395", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid6396", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"NUVOLA": {
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
      userClass: 'nuvo',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Nuvola',
      rect: ['0px','-10px','185px','132px','auto','auto'],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Nuvola.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nuvola}": [
            ["style", "top", '22px'],
            ["style", "height", '132px'],
            ["style", "width", '185px'],
            ["style", "left", '-180px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px']
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
            { id: "eid185", tween: [ "style", "${_Nuvola}", "top", '-83px', { fromValue: '22px'}], position: 0, duration: 105000, easing: "swing" },
            { id: "eid183", tween: [ "style", "${_Nuvola}", "left", '1003px', { fromValue: '-180px'}], position: 0, duration: 105000, easing: "swing" }         ]
      }
   }
},
"Lumachina": {
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
      userClass: 'Lumachina',
      rect: ['0px','0px','66px','49px','auto','auto'],
      display: 'none',
      id: 'Lumaca',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Lumaca.png','0px','0px']
   },
   {
      transform: [[0,0],['41']],
      userClass: 'Lumachina',
      rect: ['-209px','-12px','66px','49px','auto','auto'],
      id: 'LumacaCopy',
      type: 'image',
      autoOrient: 'true',
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
            ["style", "display", 'none'],
            ["style", "left", '-422px'],
            ["style", "width", '66px']
         ],
         "${_LumacaCopy}": [
            ["style", "height", '49px'],
            ["style", "width", '66px'],
            ["motion", "location", '-176.10120418231px 12.188608274055px'],
            ["transform", "rotateZ", '41deg']
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
         duration: 70000,
         autoPlay: false,
         timeline: [
            { id: "eid6456", tween: [ "style", "${_Lumaca}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1624", tween: [ "style", "${_Lumaca}", "left", '-180px', { fromValue: '-422px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1684", tween: [ "style", "${_Lumaca}", "left", '1005px', { fromValue: '-180px'}], position: 5282, duration: 57218, easing: "easeInOutQuad" },
            { id: "eid1626", tween: [ "style", "${_Lumaca}", "top", '33px', { fromValue: '-25px'}], position: 0, duration: 5282, easing: "easeInOutQuad" },
            { id: "eid1685", tween: [ "style", "${_Lumaca}", "top", '6px', { fromValue: '33px'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3382", tween: [ "style", "${_Lumaca}", "top", '24px', { fromValue: '6px'}], position: 26154, duration: 36346, easing: "easeInOutQuad" },
            { id: "eid6458", tween: [ "motion", "${_LumacaCopy}", [[-176.1,12.19,0,0],[-12.85,39.63,267.71,-5.88,373.71,-8.2],[297.41,31.57,194.33,-19.02,340.31,-33.3],[495.14,-1.74,172.47,-11.2,198.81,-12.91],[690.72,34.36,686.42,-36.15,163.14,-8.59],[1077.3,-28.34,0,0]]], position: 0, duration: 64000 },
            { id: "eid3385", tween: [ "transform", "${_Lumaca}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3387", tween: [ "transform", "${_Lumaca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 5282, duration: 20872, easing: "easeInOutQuad" },
            { id: "eid3388", tween: [ "transform", "${_Lumaca}", "rotateZ", '-8deg', { fromValue: '-3deg'}], position: 26154, duration: 13846, easing: "easeInOutQuad" },
            { id: "eid3389", tween: [ "transform", "${_Lumaca}", "rotateZ", '13deg', { fromValue: '-8deg'}], position: 40000, duration: 15000, easing: "easeInOutQuad" },
            { id: "eid3390", tween: [ "transform", "${_Lumaca}", "rotateZ", '7deg', { fromValue: '13deg'}], position: 55000, duration: 7500, easing: "easeInOutQuad" }         ]
      }
   }
},
"FarfallaContainer": {
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
      userClass: 'farfalla',
      type: 'image',
      id: 'Farfalla',
      rect: ['918px','380px','56px','49px','auto','auto'],
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/Q1-Farfalla.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Farfalla}": [
            ["style", "height", '49px'],
            ["transform", "rotateZ", '-63deg'],
            ["motion", "location", '946px 404.5px'],
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
         duration: 32445.667034969,
         autoPlay: true,
         timeline: [
            { id: "eid6048", tween: [ "motion", "${_Farfalla}", [[946,404.5,0,0],[726.78,248.53,-244.5,-89.14,-390.54,-142.39],[365.82,286.26,-410.27,-122.96,-311.85,-93.46],[85.57,51.69,-198.41,-650.9,-66,-216.54],[-372.3,-76.14,0,0]]], position: 2130, duration: 7500, easing: "easeInOutQuad" }         ]
      }
   }
},
"FioreAni": {
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
         "${_Fiore-Gambo}": [
            ["style", "left", '72px'],
            ["style", "top", '134px']
         ],
         "${_Fiore-Petali}": [
            ["style", "top", '25px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "left", '-3px'],
            ["style", "height", '189px']
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
      type: 'image',
      id: 'CodaInterna',
      rect: ['-10px','-321px','469px','576px','auto','auto'],
      transform: [[0,0],['-5'],[],['0.37','0.37']],
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
         duration: 22000,
         autoPlay: false,
         labels: {
            "animaziocoda": 5000
         },
         timeline: [
            { id: "eid4202", tween: [ "transform", "${_CodaInterna}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 5000, duration: 366, easing: "easeInOutQuad" },
            { id: "eid4203", tween: [ "transform", "${_CodaInterna}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 5366, duration: 39, easing: "easeInQuad" },
            { id: "eid4204", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-17deg', { fromValue: '11deg'}], position: 5404, duration: 64, easing: "easeOutQuad" },
            { id: "eid4225", tween: [ "transform", "${_CodaInterna}", "rotateZ", '-5deg', { fromValue: '-17deg'}], position: 5468, duration: 164, easing: "easeOutQuad" }         ]
      }
   }
},
"play": {
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
      id: 'Q0-Play',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svg-play.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Play}": [
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
            { id: "eid11553", tween: [ "transform", "${_Q0-Play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Play}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Play}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"MENUz": {
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
      rect: ['-50px','12px','1260px','235px','auto','auto'],
      id: 'Fondo-Menu',
      opacity: 0.7,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      userClass: 'home',
      rect: ['55px','71px','auto','auto','auto','auto']
   },
   {
      rect: ['1033px','83px','auto','auto','auto','auto'],
      id: 'NEXT',
      transform: [[],[],[],['0.58314','0.58314']],
      type: 'rect',
      userClass: 'next'
   },
   {
      rect: ['24.2%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum1',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      rect: ['35.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum2',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      rect: ['46.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum3',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      rect: ['57.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum4',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      rect: ['68.8%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum5',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      rect: ['76px','129px','auto','auto','auto','auto'],
      id: 'musica',
      transform: [[],[],[],['0.65','0.65']],
      type: 'rect',
      userClass: 'musica'
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      userClass: 'testina',
      rect: ['1013','0','auto','auto','auto','auto']
   },
   {
      rect: ['65px','7px','auto','auto','auto','auto'],
      id: 'reload',
      transform: [[],[],[],['0.65','0.65']],
      type: 'rect',
      userClass: 'reload'
   }],
   symbolInstances: [
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
      id: 'reload',
      symbolName: 'reload'
   },
   {
      id: 'HOME_butt',
      symbolName: 'HOME_butt'
   }   ]
   },
   states: {
      "Base State": {
         "${_reload}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '109px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_Numero_5}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '68.77%'],
            ["style", "width", '95px']
         ],
         "${_Numero_4}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '57.44%'],
            ["style", "width", '95px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_Numero_3}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '46.38%'],
            ["style", "width", '95px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px']
         ],
         "${_Numero_1}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.15%'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Numero_2}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '35.39%'],
            ["style", "width", '95px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '12px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '235px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '-50px'],
            ["style", "width", '1260px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 196,
         autoPlay: false,
         timeline: [
            { id: "eid3728", tween: [ "style", "${_musica}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3731", tween: [ "style", "${_reload}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3723", tween: [ "style", "${_reload}", "left", '109px', { fromValue: '109px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3720", tween: [ "style", "${_musica}", "left", '60px', { fromValue: '60px'}], position: 196, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Menu": {
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
         "${_MENUz}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 384,
         autoPlay: false,
         labels: {
            "chiusura": 223
         },
         timeline: [
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '-86px', { fromValue: '0px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '-2px', { fromValue: '-86px'}], position: 223, duration: 161, easing: "easeInOutQuad" }         ]
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
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"reload": {
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
      id: 'reload',
      userClass: 'reload',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svg-reload.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_reload}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '0px']
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
            { id: "eid3609", tween: [ "transform", "${_reload}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3610", tween: [ "transform", "${_reload}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid3611", tween: [ "transform", "${_reload}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3612", tween: [ "transform", "${_reload}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"testina": {
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
            ["transform", "rotateZ", '0deg'],
            ["style", "overflow", 'hidden'],
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
         duration: 610,
         autoPlay: false,
         timeline: [
            { id: "eid5429", tween: [ "transform", "${_Testina}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 201, easing: "easeInOutBounce" },
            { id: "eid5430", tween: [ "transform", "${_Testina}", "rotateZ", '-15deg', { fromValue: '21deg'}], position: 201, duration: 224, easing: "easeInOutBounce" },
            { id: "eid5431", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 425, duration: 185, easing: "easeInOutBounce" }         ]
      }
   }
},
"NEXT": {
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
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      transform: [[],[],[],['0.77','0.77']],
      id: 'NextImg',
      type: 'image',
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
},
"HOME_butt": {
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
      rect: ['0px','0px','103px','97px','auto','auto'],
      boxShadow: ['inset',8,3,18,6,'rgba(0,0,0,0.648438)'],
      id: 'HOME',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HOME}": [
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '103px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '0px']
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
