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
            id:'SOLE',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"SOLE"
         },
         {
            id:'Trattore2',
            type:'rect',
            rect:['-84px','129','auto','auto','auto','auto']
         },
         {
            id:'BG',
            type:'image',
            rect:['-18px','210px','1060px','577px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Layer-0.png','0px','0px']
         },
         {
            id:'Giallo',
            type:'rect',
            rect:['670','288','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'GialloCopy',
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
            id:'ViolaCopy',
            type:'rect',
            rect:['576','296','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'Terra',
            type:'image',
            rect:['293px','448px','565px','196px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Terra.png','0px','0px']
         },
         {
            id:'SCOIATTOLO',
            type:'rect',
            rect:['141','79','auto','auto','auto','auto']
         },
         {
            id:'Sole_Button',
            type:'ellipse',
            rect:['385px','-14px','243px','234px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"Sole_Button"
         },
         {
            id:'Casa-APi',
            type:'image',
            rect:['781px','176px','174px','196px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Casa-APi.png','0px','0px'],
            userClass:"casaapi"
         },
         {
            id:'Casa-APiCopy',
            type:'image',
            rect:['946px','201px','152px','171px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Casa-APi.png','0px','0px']
         },
         {
            id:'Cavolino',
            type:'rect',
            rect:['493px','442px','auto','auto','auto','auto'],
            userClass:"cavolini"
         },
         {
            id:'CavolinoCopy',
            type:'rect',
            rect:['587px','428px','auto','auto','auto','auto'],
            userClass:"cavolini",
            transform:[[],[],[],['0.857','0.794']]
         },
         {
            id:'CavolinoCopy2',
            type:'rect',
            rect:['689px','447px','auto','auto','auto','auto'],
            userClass:"cavolini",
            transform:[[],[],[],['0.726','0.618']]
         },
         {
            id:'CAVOLO_BIG_1',
            type:'rect',
            rect:['466','489','auto','auto','auto','auto'],
            userClass:"CAVOLO_BIG_1"
         },
         {
            id:'CAVOLO_BIG_2',
            type:'rect',
            rect:['701px','488px','auto','auto','auto','auto'],
            userClass:"CAVOLO_BIG_2"
         },
         {
            id:'Cavolo_Trigger',
            type:'ellipse',
            rect:['648px','509px','126px','113px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            userClass:"cavolo2trigger"
         },
         {
            id:'Cestino',
            type:'image',
            rect:['173px','522px','209px','110px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Cestino.png','0px','0px'],
            userClass:"cestino"
         },
         {
            id:'Api',
            type:'rect',
            rect:['806','219','auto','auto','auto','auto'],
            userClass:"api"
         },
         {
            id:'Albero',
            type:'image',
            rect:['-119px','-51px','361px','759px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Albero.png','0px','0px']
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['133px','266px','252px','222px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Pezzi%20Quadro%202/Coda.png','0px','0px'],
            userClass:"codatrigger"
         },
         {
            id:'Formiche',
            type:'rect',
            rect:['80','644','auto','auto','auto','auto']
         },
         {
            id:'Api_Button',
            type:'rect',
            rect:['768px','186px','333px','188px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"apibutton"
         },
         {
            id:'Innaffiatoio',
            type:'rect',
            rect:['764','499','auto','auto','auto','auto'],
            userClass:"innaffia"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'MENUz',
            type:'rect',
            rect:['354','634','auto','auto','auto','auto']
         },
         {
            id:'APONA',
            type:'rect',
            rect:['-162','129','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'CAVOLO_BIG_1',
            symbolName:'Cavolo'
         },
         {
            id:'GialloCopy',
            symbolName:'Giallo'
         },
         {
            id:'SCOIATTOLO',
            symbolName:'SCOIATTOLO'
         },
         {
            id:'Innaffiatoio',
            symbolName:'Innaffiatoio'
         },
         {
            id:'Cavolino',
            symbolName:'Cavolino'
         },
         {
            id:'Trattore2',
            symbolName:'Trattore'
         },
         {
            id:'APONA',
            symbolName:'APONA'
         },
         {
            id:'Viola',
            symbolName:'Viola'
         },
         {
            id:'CAVOLO_BIG_2',
            symbolName:'Cavolo_2'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         },
         {
            id:'SOLE',
            symbolName:'SOLE'
         },
         {
            id:'Giallo',
            symbolName:'Giallo'
         },
         {
            id:'MENUz',
            symbolName:'MENUz'
         },
         {
            id:'Api',
            symbolName:'Api'
         },
         {
            id:'CavolinoCopy2',
            symbolName:'Cavolino'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'Formiche',
            symbolName:'Formiche'
         },
         {
            id:'ViolaCopy',
            symbolName:'Viola'
         },
         {
            id:'CavolinoCopy',
            symbolName:'Cavolino'
         }
         ]
      },
   states: {
      "Base State": {
         "${_ViolaCopy}": [
            ["style", "top", '305.52px'],
            ["style", "left", '511px'],
            ["transform", "scaleY", '0.89452'],
            ["transform", "scaleX", '0.89452']
         ],
         "${_SOLE}": [
            ["style", "left", '385px'],
            ["style", "top", '-24px']
         ],
         "${_NUVOLA}": [
            ["style", "left", '80.1px'],
            ["style", "top", '34.9px']
         ],
         "${_codatrigger}": [
            ["style", "top", '265.92px'],
            ["style", "height", '222.08337402344px'],
            ["style", "opacity", '0'],
            ["style", "left", '133px'],
            ["style", "width", '252px']
         ],
         "${_Viola}": [
            ["transform", "scaleX", '0.89452'],
            ["style", "top", '305.52px'],
            ["transform", "scaleY", '0.89452'],
            ["style", "left", '644px']
         ],
         "${_BG}": [
            ["style", "top", '210px'],
            ["style", "height", '577.18615722656px'],
            ["style", "left", '-18px'],
            ["style", "width", '1059.8549905279px']
         ],
         "${_Giallo}": [
            ["transform", "scaleX", '0.90684'],
            ["style", "top", '285px'],
            ["transform", "scaleY", '0.87352'],
            ["style", "left", '710.87px']
         ],
         "${_CavolinoCopy}": [
            ["transform", "scaleX", '0.85742'],
            ["transform", "scaleY", '0.79446'],
            ["style", "left", '587.49px'],
            ["style", "top", '428.41px']
         ],
         "${_Albero}": [
            ["style", "top", '-50.87px'],
            ["style", "height", '759.44284370355px'],
            ["style", "left", '-119.18px'],
            ["style", "width", '361.19647216797px']
         ],
         "${_Casa-APi}": [
            ["style", "top", '176.3px'],
            ["style", "height", '195.7166595459px'],
            ["style", "left", '781.12px'],
            ["style", "width", '173.87328236444px']
         ],
         "${_CavolinoCopy2}": [
            ["transform", "scaleX", '0.72581'],
            ["style", "top", '446.5px'],
            ["transform", "scaleY", '0.61837'],
            ["style", "left", '689.48px']
         ],
         "${_Api_Button}": [
            ["style", "top", '186.02px'],
            ["style", "height", '188.04997253418px'],
            ["style", "opacity", '0'],
            ["style", "left", '768.03px'],
            ["style", "width", '332.6833190918px']
         ],
         "${_MENUz}": [
            ["style", "left", '-73px'],
            ["style", "top", '696.47px']
         ],
         "${_Innaffiatoio}": [
            ["style", "top", '558.45px'],
            ["style", "left", '764px']
         ],
         "${_CAVOLO_BIG_2}": [
            ["style", "left", '701px'],
            ["style", "top", '488px']
         ],
         "${_Cestino}": [
            ["style", "top", '522.22px'],
            ["style", "height", '109.76667022705px'],
            ["style", "left", '173px'],
            ["style", "width", '208.8px']
         ],
         "${_Cavolino}": [
            ["style", "top", '442.1px'],
            ["transform", "scaleX", '0.73938'],
            ["style", "left", '493.14px'],
            ["transform", "scaleY", '0.73938']
         ],
         "${_FUMELLO}": [
            ["style", "left", '552px'],
            ["style", "top", '-227px']
         ],
         "${_Trattore2}": [
            ["style", "left", '-84px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522.19658526344px'],
            ["style", "top", '-42px'],
            ["style", "left", '-10.72px'],
            ["style", "width", '1049.6411743164px']
         ],
         "${_Sole_Button}": [
            ["style", "top", '-13.88px'],
            ["style", "opacity", '0'],
            ["style", "left", '385.47px']
         ],
         "${_Cavolo_Trigger}": [
            ["style", "opacity", '0']
         ],
         "${_GialloCopy}": [
            ["style", "top", '276px'],
            ["style", "left", '567.87px'],
            ["transform", "scaleY", '0.87352'],
            ["transform", "scaleX", '0.90684']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_CAVOLO_BIG_1}": [
            ["style", "top", '487.61px'],
            ["style", "left", '560.72px']
         ],
         "${_Terra}": [
            ["style", "top", '448.25px'],
            ["style", "height", '195.72412109375px'],
            ["style", "left", '293.45px'],
            ["style", "width", '564.53760097789px']
         ],
         "${_Casa-APiCopy}": [
            ["style", "top", '201.28px'],
            ["style", "height", '170.98995391006px'],
            ["style", "left", '946.28px'],
            ["style", "width", '151.91340894896px']
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
            { id: "eid5546", tween: [ "transform", "${_ViolaCopy}", "scaleY", '0.89452', { fromValue: '0.89452'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5565", tween: [ "style", "${_Viola}", "left", '644px', { fromValue: '644px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5539", tween: [ "transform", "${_Viola}", "scaleX", '0.89452', { fromValue: '0.89452'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5563", tween: [ "style", "${_GialloCopy}", "top", '276px', { fromValue: '276px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5562", tween: [ "style", "${_GialloCopy}", "left", '567.87px', { fromValue: '567.87px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5554", tween: [ "transform", "${_GialloCopy}", "scaleX", '0.90684', { fromValue: '0.90684'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5540", tween: [ "transform", "${_Viola}", "scaleY", '0.89452', { fromValue: '0.89452'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5559", tween: [ "style", "${_Giallo}", "left", '710.87px', { fromValue: '710.87px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5564", tween: [ "style", "${_Viola}", "top", '305.52px', { fromValue: '305.52px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid4940", tween: [ "style", "${_NUVOLA}", "top", '34.9px', { fromValue: '34.9px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid5566", tween: [ "style", "${_ViolaCopy}", "left", '511px', { fromValue: '511px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid4941", tween: [ "style", "${_NUVOLA}", "left", '80.1px', { fromValue: '80.1px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '575px', { fromValue: '696.47px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '694px', { fromValue: '575px'}], position: 223, duration: 116, easing: "easeInOutQuad" },
            { id: "eid5553", tween: [ "transform", "${_GialloCopy}", "scaleY", '0.87352', { fromValue: '0.87352'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5560", tween: [ "style", "${_Giallo}", "top", '285px', { fromValue: '285px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5549", tween: [ "style", "${_ViolaCopy}", "top", '305.52px', { fromValue: '305.52px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5673", tween: [ "style", "${_SOLE}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5531", tween: [ "transform", "${_Giallo}", "scaleY", '0.87352', { fromValue: '0.87352'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid8633", tween: [ "style", "${_Innaffiatoio}", "top", '558.45px', { fromValue: '558.45px'}], position: 0, duration: 0 },
            { id: "eid5530", tween: [ "transform", "${_Giallo}", "scaleX", '0.90684', { fromValue: '0.90684'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5548", tween: [ "transform", "${_ViolaCopy}", "scaleX", '0.89452', { fromValue: '0.89452'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid5672", tween: [ "style", "${_SOLE}", "left", '385px', { fromValue: '385px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid8632", tween: [ "style", "${_Innaffiatoio}", "left", '764px', { fromValue: '764px'}], position: 0, duration: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 },
            { id: "eid6423", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CavolinoCopy}', [] ], ""], position: 0 },
            { id: "eid6390", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Cavolino}', [] ], ""], position: 0 },
            { id: "eid5375", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Trattore2}', [] ], ""], position: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CAVOLO_BIG_1}', [] ], ""], position: 0 },
            { id: "eid6424", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CavolinoCopy2}', [] ], ""], position: 0 },
            { id: "eid7296", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_CAVOLO_BIG_2}', [] ], ""], position: 0 }         ]
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
            { id: "eid37", tween: [ "style", "${_NotaCopy2}", "top", '-96.82px', { fromValue: '-96.82px'}], position: 392, duration: 0, easing: "easeInOutQuart" },
            { id: "eid50", tween: [ "transform", "${_NotaCopy4}", "rotateZ", '-15deg', { fromValue: '-15deg'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid39", tween: [ "style", "${_NotaCopy3}", "left", '193.8px', { fromValue: '193.8px'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid36", tween: [ "style", "${_NotaCopy2}", "left", '153.8px', { fromValue: '153.8px'}], position: 392, duration: 0, easing: "easeInOutQuart" },
            { id: "eid40", tween: [ "style", "${_NotaCopy3}", "top", '-160.81px', { fromValue: '-160.81px'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid34", tween: [ "style", "${_NotaCopy3}", "opacity", '1', { fromValue: '0.000000'}], position: 677, duration: 128, easing: "easeInOutQuart" },
            { id: "eid35", tween: [ "style", "${_NotaCopy3}", "opacity", '0', { fromValue: '1'}], position: 1125, duration: 119, easing: "easeInOutQuart" },
            { id: "eid41", tween: [ "transform", "${_NotaCopy3}", "rotateZ", '47deg', { fromValue: '47deg'}], position: 265, duration: 0, easing: "easeInOutQuart" },
            { id: "eid29", tween: [ "style", "${_Nota}", "opacity", '1', { fromValue: '0.000000'}], position: 236, duration: 128, easing: "easeInOutQuart" },
            { id: "eid31", tween: [ "style", "${_Nota}", "opacity", '0', { fromValue: '1'}], position: 685, duration: 119, easing: "easeInOutQuart" },
            { id: "eid46", tween: [ "style", "${_NotaCopy4}", "top", '-203.21px', { fromValue: '-203.21px'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid49", tween: [ "style", "${_NotaCopy4}", "left", '263.87px', { fromValue: '263.87px'}], position: 530, duration: 0, easing: "easeInOutQuart" },
            { id: "eid47", tween: [ "style", "${_NotaCopy4}", "opacity", '1', { fromValue: '0.000000'}], position: 932, duration: 128, easing: "easeInOutQuart" },
            { id: "eid48", tween: [ "style", "${_NotaCopy4}", "opacity", '0', { fromValue: '1'}], position: 1381, duration: 119, easing: "easeInOutQuart" },
            { id: "eid32", tween: [ "style", "${_NotaCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 469, duration: 128, easing: "easeInOutQuart" },
            { id: "eid33", tween: [ "style", "${_NotaCopy2}", "opacity", '0', { fromValue: '1'}], position: 918, duration: 119, easing: "easeInOutQuart" }         ]
      }
   }
},
"Cavolo": {
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
      id: 'CavoloBig1',
      type: 'image',
      rect: ['0px','0px','129px','111px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/CavoloBIG1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Numero1ColAnimato}": [
            ["style", "top", '-446px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '227.07038541216px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '-148.34px'],
            ["style", "width", '290.49211120605px']
         ],
         "${_CavoloBig1}": [
            ["style", "top", '21.45px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleY", '0.8'],
            ["style", "overflow", 'visible'],
            ["style", "height", '110.56658935547px'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-61.93px'],
            ["style", "width", '128.94983673096px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132.23333740234px'],
            ["style", "width", '67.283332824707px']
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
            { id: "eid1103", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1137", tween: [ "style", "${_Numero1ColAnimato}", "top", '-475.2px', { fromValue: '-446px'}], position: 1541, duration: 511, easing: "easeOutBounce" },
            { id: "eid1087", tween: [ "style", "${_Numero1ColAnimato}", "top", '471.81px', { fromValue: '-475.2px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid6112", tween: [ "style", "${_CavoloBig1}", "left", '-33.28px', { fromValue: '-61.93px'}], position: 0, duration: 2052 },
            { id: "eid69", tween: [ "style", "${_CavoloBig1}", "left", '-398.98px', { fromValue: '-33.28px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid1094", tween: [ "style", "${_Numero1ColAnimato}", "left", '-328.51px', { fromValue: '-148.34px'}], position: 1541, duration: 511, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Numero1ColAnimato}", "left", '-140.71px', { fromValue: '-328.51px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid6113", tween: [ "style", "${_CavoloBig1}", "top", '21.68px', { fromValue: '21.45px'}], position: 0, duration: 467 },
            { id: "eid58", tween: [ "style", "${_CavoloBig1}", "top", '12px', { fromValue: '21.68px'}], position: 467, duration: 479, easing: "easeInOutQuart" },
            { id: "eid61", tween: [ "style", "${_CavoloBig1}", "top", '-397.99px', { fromValue: '12px'}], position: 946, duration: 1106, easing: "swing" },
            { id: "eid70", tween: [ "style", "${_CavoloBig1}", "top", '2.02px', { fromValue: '-397.99px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 246, easing: "easeInOutQuart" },
            { id: "eid54", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '-10deg', { fromValue: '5deg'}], position: 246, duration: 221, easing: "easeInOutQuart" },
            { id: "eid55", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 467, duration: 221, easing: "easeInOutQuart" },
            { id: "eid72", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1034, duration: 903, easing: "easeOutCirc" },
            { id: "eid76", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '698deg', { fromValue: '360deg'}], position: 2867, duration: 841, easing: "easeOutBounce" },
            { id: "eid5889", tween: [ "transform", "${_CavoloBig1}", "scaleX", '0.92', { fromValue: '0.8'}], position: 946, duration: 88 },
            { id: "eid5885", tween: [ "transform", "${_CavoloBig1}", "scaleX", '1', { fromValue: '0.92'}], position: 1034, duration: 594 },
            { id: "eid5864", tween: [ "transform", "${_CavoloBig1}", "scaleX", '0.66', { fromValue: '1'}], position: 2867, duration: 808 },
            { id: "eid1104", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1108", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1089", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid5881", tween: [ "transform", "${_CavoloBig1}", "scaleY", '0.86', { fromValue: '0.8'}], position: 0, duration: 467 },
            { id: "eid5882", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1', { fromValue: '0.86'}], position: 467, duration: 479 },
            { id: "eid5888", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1.45', { fromValue: '1'}], position: 946, duration: 88 },
            { id: "eid5884", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1', { fromValue: '1.45'}], position: 1034, duration: 594 },
            { id: "eid5865", tween: [ "transform", "${_CavoloBig1}", "scaleY", '0.66', { fromValue: '1'}], position: 2867, duration: 808 }         ]
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
      transform: [{1:0,0:0},['0deg'],{},['0.5','0.5']],
      id: 'Testa',
      type: 'image',
      rect: ['-141px','-245px','427px','522px','auto','auto'],
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
      type: 'image',
      id: 'Fumello',
      rect: ['0px','0px','446px','287px','auto','auto'],
      userClass: 'fumello',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Fumellos.png','0px','0px','445.97px','286.67px']
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
            { id: "eid8716", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid8717", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid8718", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid8719", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
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
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '102.78525590057px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '96.766670227051px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '0px']
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
      type: 'rect',
      id: 'PREV',
      rect: ['212px','103px','auto','auto','auto','auto'],
      userClass: 'prev',
      transform: [{1:0,0:0},{},{},['0.69','0.69']]
   },
   {
      type: 'rect',
      id: 'NEXT',
      rect: ['1031px','103px','auto','auto','auto','auto'],
      userClass: 'next',
      transform: [{1:0,0:0},{},{},['0.69','0.69']]
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
            ["style", "left", '61.5%'],
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
            ["style", "left", '50.29%'],
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
            ["style", "left", '27.71%'],
            ["style", "width", '125.28031496841px']
         ],
         "${_Numero_5}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '72.54%'],
            ["style", "width", '123.83183013084px']
         ],
         "${_Numero_2}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '96.766670227051px'],
            ["style", "opacity", '1'],
            ["style", "left", '39.1%'],
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
},
"SCOIATTOLO": {
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
      id: 'ContenitoreCoda',
      type: 'rect',
      userClass: 'coda',
      rect: ['0','203','auto','auto','auto','auto']
   },
   {
      id: 'ContenitoreBraccio',
      type: 'rect',
      userClass: 'braccio',
      rect: ['284','172','auto','auto','auto','auto']
   },
   {
      id: 'Corpo',
      type: 'image',
      rect: ['27px','220px','345px','333px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Corpo.png','0px','0px']
   },
   {
      id: 'contenitoretesta',
      type: 'rect',
      userClass: 'testa',
      rect: ['101','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'ContenitoreBraccio',
      symbolName: 'Braccio'
   },
   {
      id: 'ContenitoreCoda',
      symbolName: 'ContenitoreCoda'
   },
   {
      id: 'contenitoretesta',
      symbolName: 'contenitoretesta'
   }   ]
   },
   states: {
      "Base State": {
         "${_Corpo}": [
            ["style", "height", '333.13668507543px'],
            ["style", "top", '219.5px'],
            ["style", "left", '27.45px'],
            ["style", "width", '345.03442382812px']
         ],
         "${symbolSelector}": [
            ["style", "height", '552.65000915527px'],
            ["style", "width", '436.41665649414px']
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
"SOLE": {
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
      rect: ['0px','0px','243px','234px','auto','auto'],
      id: 'Sole',
      transform: [{},['0deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Sole.png','0px','0px']
   },
   {
      id: 'Sole_corpo',
      type: 'image',
      rect: ['0px','0','243px','234px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Sole%20corpo.png','0px','0px']
   },
   {
      id: 'sorriso-sole',
      type: 'image',
      rect: ['81px','94px','59px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/sorriso-sole.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Sole}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '234px'],
            ["style", "width", '243px']
         ],
         "${_sorriso-sole}": [
            ["style", "top", '94px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '81px']
         ],
         "${_Sole_corpo}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2288,
         autoPlay: false,
         timeline: [
            { id: "eid8666", tween: [ "transform", "${_Sole_corpo}", "scaleX", '1.06', { fromValue: '1'}], position: 0, duration: 1112, easing: "easeInOutExpo" },
            { id: "eid8668", tween: [ "transform", "${_Sole_corpo}", "scaleX", '1', { fromValue: '1.06'}], position: 1112, duration: 1176, easing: "easeInOutExpo" },
            { id: "eid5001", tween: [ "transform", "${_Sole}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 84, duration: 1582, easing: "easeInOutQuart" },
            { id: "eid8667", tween: [ "transform", "${_Sole_corpo}", "scaleY", '1.06', { fromValue: '1'}], position: 0, duration: 1112, easing: "easeInOutExpo" },
            { id: "eid8669", tween: [ "transform", "${_Sole_corpo}", "scaleY", '1', { fromValue: '1.06'}], position: 1112, duration: 1176, easing: "easeInOutExpo" },
            { id: "eid8673", tween: [ "transform", "${_sorriso-sole}", "scaleY", '1.06', { fromValue: '1'}], position: 84, duration: 1028, easing: "easeInOutExpo" },
            { id: "eid8675", tween: [ "transform", "${_sorriso-sole}", "scaleY", '1', { fromValue: '1.06'}], position: 1112, duration: 1176, easing: "easeInOutExpo" },
            { id: "eid8672", tween: [ "transform", "${_sorriso-sole}", "scaleX", '1.06', { fromValue: '1'}], position: 84, duration: 1028, easing: "easeInOutExpo" },
            { id: "eid8674", tween: [ "transform", "${_sorriso-sole}", "scaleX", '1', { fromValue: '1.06'}], position: 1112, duration: 1176, easing: "easeInOutExpo" },
            { id: "eid5003", tween: [ "style", "${_sorriso-sole}", "opacity", '1', { fromValue: '0.000000'}], position: 84, duration: 1498, easing: "easeInOutExpo" },
            { id: "eid5006", tween: [ "style", "${_sorriso-sole}", "opacity", '0', { fromValue: '1.0000001428579919'}], position: 1582, duration: 706, easing: "easeInOutExpo" }         ]
      }
   }
},
"Trattore": {
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
      id: 'Group3',
      type: 'group',
      rect: ['-73','-21','157','157','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'Trattore',
         rect: ['73px','21px','146px','113px','auto','auto'],
         transform: [{1:0,0:0},['-6deg']],
         fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Trattore.png','0px','0px']
      },
      {
         id: 'Fumo',
         type: 'rect',
         userClass: 'fumo',
         rect: ['113','21','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'Fumo',
      symbolName: 'Fumo'
   }   ]
   },
   states: {
      "Base State": {
         "${_Group3}": [
            ["style", "top", '-21px'],
            ["style", "left", '-72.51px'],
            ["transform", "rotateZ", '-6deg']
         ],
         "${_Trattore}": [
            ["style", "top", '36.32px'],
            ["style", "left", '5.5px'],
            ["transform", "rotateZ", '-6deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '113px'],
            ["style", "width", '146px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 28581.500760502,
         autoPlay: false,
         timeline: [
            { id: "eid5117", tween: [ "style", "${_Group3}", "top", '-36px', { fromValue: '-21px'}], position: 0, duration: 3970 },
            { id: "eid5118", tween: [ "style", "${_Group3}", "top", '-29px', { fromValue: '-36px'}], position: 3970, duration: 2176 },
            { id: "eid5119", tween: [ "style", "${_Group3}", "top", '-24px', { fromValue: '-29px'}], position: 6146, duration: 8557 },
            { id: "eid5120", tween: [ "style", "${_Group3}", "top", '-35.8px', { fromValue: '-24px'}], position: 14702, duration: 5513 },
            { id: "eid5121", tween: [ "style", "${_Group3}", "top", '-46.7px', { fromValue: '-35.81px'}], position: 20216, duration: 3105 },
            { id: "eid5122", tween: [ "style", "${_Group3}", "top", '-40.72px', { fromValue: '-46.7px'}], position: 23321, duration: 2158 },
            { id: "eid5123", tween: [ "style", "${_Group3}", "top", '12.28px', { fromValue: '-40.72px'}], position: 25479, duration: 3102 },
            { id: "eid5124", tween: [ "style", "${_Group3}", "left", '133.49px', { fromValue: '-72.51px'}], position: 0, duration: 3970 },
            { id: "eid5125", tween: [ "style", "${_Group3}", "left", '194.49px', { fromValue: '133.49px'}], position: 3970, duration: 2176 },
            { id: "eid5126", tween: [ "style", "${_Group3}", "left", '324.49px', { fromValue: '194.49px'}], position: 6146, duration: 3786 },
            { id: "eid5127", tween: [ "style", "${_Group3}", "left", '527.49px', { fromValue: '324.49px'}], position: 9931, duration: 4771 },
            { id: "eid5128", tween: [ "style", "${_Group3}", "left", '747.49px', { fromValue: '527.49px'}], position: 14702, duration: 5513 },
            { id: "eid5129", tween: [ "style", "${_Group3}", "left", '867.28px', { fromValue: '747.49px'}], position: 20216, duration: 3105 },
            { id: "eid5130", tween: [ "style", "${_Group3}", "left", '945.49px', { fromValue: '867.28px'}], position: 23321, duration: 2158 },
            { id: "eid5131", tween: [ "style", "${_Group3}", "left", '1117.49px', { fromValue: '945.49px'}], position: 25479, duration: 3102 },
            { id: "eid5132", tween: [ "transform", "${_Group3}", "rotateZ", '-1deg', { fromValue: '-6deg'}], position: 0, duration: 3970 },
            { id: "eid5133", tween: [ "transform", "${_Group3}", "rotateZ", '2deg', { fromValue: '-1deg'}], position: 3970, duration: 2176 },
            { id: "eid5134", tween: [ "transform", "${_Group3}", "rotateZ", '-5deg', { fromValue: '2deg'}], position: 6146, duration: 3786 },
            { id: "eid5135", tween: [ "transform", "${_Group3}", "rotateZ", '2deg', { fromValue: '-5deg'}], position: 9931, duration: 4771 },
            { id: "eid5136", tween: [ "transform", "${_Group3}", "rotateZ", '-8deg', { fromValue: '2deg'}], position: 14702, duration: 5513 },
            { id: "eid5137", tween: [ "transform", "${_Group3}", "rotateZ", '9deg', { fromValue: '-8deg'}], position: 20216, duration: 5263 }         ]
      }
   }
},
"Fumo": {
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
      rect: ['-43px','-21px','52px','42px','auto','auto'],
      transform: [{1:0,0:0},['-139deg'],{},['0','0']],
      id: 'Nuvola-trattore',
      opacity: 0.7,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Nuvola-trattore.png','0px','0px']
   },
   {
      rect: ['-69px','-49px','32px','26px','auto','auto'],
      transform: [{1:0,0:0},['-124deg'],{},['0','0']],
      id: 'Nuvola-trattoreCopy4',
      opacity: 0.6,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Nuvola-trattore.png','0px','0px']
   },
   {
      rect: ['-106px','-69px','33px','27px','auto','auto'],
      transform: [{1:0,0:0},['-160deg'],{},['0','0']],
      id: 'Nuvola-trattoreCopy5',
      opacity: 0.5,
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Nuvola-trattore.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nuvola-trattoreCopy4}": [
            ["style", "top", '-48.62px'],
            ["style", "height", '25.926030528191px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-124deg'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0.6'],
            ["style", "left", '-69.17px'],
            ["style", "width", '32.098894939665px']
         ],
         "${_Nuvola-trattoreCopy5}": [
            ["style", "top", '-69.25px'],
            ["style", "height", '26.668980149691px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-106.33px'],
            ["style", "width", '33.020106102718px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Nuvola-trattore}": [
            ["style", "top", '4px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-139deg'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0.7'],
            ["style", "left", '-23.6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid5475", tween: [ "style", "${_Nuvola-trattore}", "left", '-42.63px', { fromValue: '-23.6px'}], position: 0, duration: 482, easing: "easeInSine" },
            { id: "eid5441", tween: [ "transform", "${_Nuvola-trattoreCopy5}", "scaleX", '1', { fromValue: '0'}], position: 587, duration: 320, easing: "easeInSine" },
            { id: "eid5442", tween: [ "transform", "${_Nuvola-trattoreCopy5}", "scaleX", '0', { fromValue: '1'}], position: 907, duration: 343, easing: "easeInSine" },
            { id: "eid5433", tween: [ "transform", "${_Nuvola-trattoreCopy4}", "scaleX", '1', { fromValue: '0'}], position: 406, duration: 320, easing: "easeInSine" },
            { id: "eid5434", tween: [ "transform", "${_Nuvola-trattoreCopy4}", "scaleX", '0', { fromValue: '1'}], position: 726, duration: 343, easing: "easeInSine" },
            { id: "eid5476", tween: [ "style", "${_Nuvola-trattore}", "top", '-21px', { fromValue: '4px'}], position: 0, duration: 482, easing: "easeInSine" },
            { id: "eid5435", tween: [ "transform", "${_Nuvola-trattoreCopy4}", "scaleY", '1', { fromValue: '0'}], position: 406, duration: 320, easing: "easeInSine" },
            { id: "eid5436", tween: [ "transform", "${_Nuvola-trattoreCopy4}", "scaleY", '0', { fromValue: '1'}], position: 726, duration: 343, easing: "easeInSine" },
            { id: "eid5164", tween: [ "transform", "${_Nuvola-trattore}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInSine" },
            { id: "eid5165", tween: [ "transform", "${_Nuvola-trattore}", "scaleY", '0', { fromValue: '1'}], position: 482, duration: 518, easing: "easeInSine" },
            { id: "eid5443", tween: [ "transform", "${_Nuvola-trattoreCopy5}", "scaleY", '1', { fromValue: '0'}], position: 587, duration: 320, easing: "easeInSine" },
            { id: "eid5444", tween: [ "transform", "${_Nuvola-trattoreCopy5}", "scaleY", '0', { fromValue: '1'}], position: 907, duration: 343, easing: "easeInSine" },
            { id: "eid5169", tween: [ "transform", "${_Nuvola-trattore}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 482, easing: "easeInSine" },
            { id: "eid5170", tween: [ "transform", "${_Nuvola-trattore}", "scaleX", '0', { fromValue: '1'}], position: 482, duration: 518, easing: "easeInSine" }         ]
      }
   }
},
"Giallo": {
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
            ["style", "height", '63.25px'],
            ["style", "width", '67.266670227051px']
         ],
         "${_Fiore-Giallo}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '63.250749616481px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '67.266670227051px']
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
            ["style", "width", '56.894736842105px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '56.883335113525px']
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
"contenitoretesta": {
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
      rect: ['0px','0px','237px','337px','auto','auto'],
      transform: [{1:0,0:0},['1deg'],{},['0.97','0.97']],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Testa}": [
            ["style", "-webkit-transform-origin", [58,78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [58,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [58,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [58,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [58,78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '0.97'],
            ["transform", "scaleY", '0.97'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '336.51241991972px'],
            ["style", "top", '0.01px'],
            ["style", "left", '0.01px'],
            ["style", "width", '236.88333129883px']
         ],
         "${symbolSelector}": [
            ["style", "height", '336.5px'],
            ["style", "width", '236.88333129883px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3039,
         autoPlay: false,
         timeline: [
            { id: "eid6065", tween: [ "transform", "${_Testa}", "rotateZ", '-13deg', { fromValue: '1deg'}], position: 0, duration: 686 },
            { id: "eid6067", tween: [ "transform", "${_Testa}", "rotateZ", '1deg', { fromValue: '-13deg'}], position: 2139, duration: 900 }         ]
      }
   }
},
"Cavolo_2": {
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
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   },
   {
      id: 'CavoloBig1',
      type: 'image',
      rect: ['0px','0px','129px','111px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/CavoloBIG2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '132.23333740234px'],
            ["style", "width", '67.283332824707px']
         ],
         "${_CavoloBig1}": [
            ["style", "top", '21.45px'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleY", '0.8'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '110.56658935547px'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-61.93px'],
            ["style", "width", '128.94983673096px']
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
            { id: "eid1103", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1107", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1088", tween: [ "transform", "${_Numero1ColAnimato}", "scaleX", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid5889", tween: [ "transform", "${_CavoloBig1}", "scaleX", '0.92', { fromValue: '0.8'}], position: 946, duration: 88 },
            { id: "eid5885", tween: [ "transform", "${_CavoloBig1}", "scaleX", '1', { fromValue: '0.92'}], position: 1034, duration: 594 },
            { id: "eid5864", tween: [ "transform", "${_CavoloBig1}", "scaleX", '0.66', { fromValue: '1'}], position: 2867, duration: 808 },
            { id: "eid6112", tween: [ "style", "${_CavoloBig1}", "left", '-33.28px', { fromValue: '-61.93px'}], position: 0, duration: 2052 },
            { id: "eid69", tween: [ "style", "${_CavoloBig1}", "left", '-506.58px', { fromValue: '-33.28px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid1094", tween: [ "style", "${_Numero1ColAnimato}", "left", '-328.51px', { fromValue: '-148.34px'}], position: 1541, duration: 511, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_Numero1ColAnimato}", "left", '-140.71px', { fromValue: '-328.51px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid6113", tween: [ "style", "${_CavoloBig1}", "top", '21.68px', { fromValue: '21.45px'}], position: 0, duration: 467 },
            { id: "eid58", tween: [ "style", "${_CavoloBig1}", "top", '12px', { fromValue: '21.68px'}], position: 467, duration: 479, easing: "easeInOutQuart" },
            { id: "eid61", tween: [ "style", "${_CavoloBig1}", "top", '-397.99px', { fromValue: '12px'}], position: 946, duration: 1106, easing: "swing" },
            { id: "eid70", tween: [ "style", "${_CavoloBig1}", "top", '16.06px', { fromValue: '-397.99px'}], position: 2867, duration: 1043, easing: "easeOutBounce" },
            { id: "eid5881", tween: [ "transform", "${_CavoloBig1}", "scaleY", '0.86', { fromValue: '0.8'}], position: 0, duration: 467 },
            { id: "eid5882", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1', { fromValue: '0.86'}], position: 467, duration: 479 },
            { id: "eid5888", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1.45', { fromValue: '1'}], position: 946, duration: 88 },
            { id: "eid5884", tween: [ "transform", "${_CavoloBig1}", "scaleY", '1', { fromValue: '1.45'}], position: 1034, duration: 594 },
            { id: "eid5865", tween: [ "transform", "${_CavoloBig1}", "scaleY", '0.66', { fromValue: '1'}], position: 2867, duration: 808 },
            { id: "eid1137", tween: [ "style", "${_Numero1ColAnimato}", "top", '-475.2px', { fromValue: '-446px'}], position: 1541, duration: 511, easing: "easeOutBounce" },
            { id: "eid1087", tween: [ "style", "${_Numero1ColAnimato}", "top", '471.81px', { fromValue: '-475.2px'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid1104", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1.28', { fromValue: '0'}], position: 1541, duration: 415, easing: "easeInOutQuad" },
            { id: "eid1108", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '1', { fromValue: '1.28'}], position: 1956, duration: 96, easing: "easeInOutQuad" },
            { id: "eid1089", tween: [ "transform", "${_Numero1ColAnimato}", "scaleY", '0.2', { fromValue: '1'}], position: 2779, duration: 601, easing: "easeInOutQuad" },
            { id: "eid53", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 246, easing: "easeInOutQuart" },
            { id: "eid54", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '-10deg', { fromValue: '5deg'}], position: 246, duration: 221, easing: "easeInOutQuart" },
            { id: "eid55", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 467, duration: 221, easing: "easeInOutQuart" },
            { id: "eid72", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1034, duration: 903, easing: "easeOutCirc" },
            { id: "eid76", tween: [ "transform", "${_CavoloBig1}", "rotateZ", '698deg', { fromValue: '360deg'}], position: 2867, duration: 841, easing: "easeOutBounce" }         ]
      }
   }
},
"Cavolino": {
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
      id: 'CavoloSmall1',
      type: 'image',
      rect: ['0px','0px','91px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/CavoloSmall1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CavoloSmall1}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [51,85], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,85],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 725,
         autoPlay: true,
         timeline: [
            { id: "eid6327", tween: [ "transform", "${_CavoloSmall1}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 0, duration: 170, easing: "easeInOutSine" },
            { id: "eid6329", tween: [ "transform", "${_CavoloSmall1}", "rotateZ", '11deg', { fromValue: '-15deg'}], position: 170, duration: 242, easing: "easeInOutSine" },
            { id: "eid6328", tween: [ "transform", "${_CavoloSmall1}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 412, duration: 313, easing: "easeInOutSine" },
            { id: "eid6330", tween: [ "style", "${_CavoloSmall1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid6334", tween: [ "style", "${_CavoloSmall1}", "left", '1.32px', { fromValue: '0px'}], position: 170, duration: 138, easing: "easeInOutSine" },
            { id: "eid6337", tween: [ "style", "${_CavoloSmall1}", "left", '0px', { fromValue: '1.32px'}], position: 308, duration: 417, easing: "easeInOutSine" },
            { id: "eid6331", tween: [ "style", "${_CavoloSmall1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid6335", tween: [ "style", "${_CavoloSmall1}", "top", '-16.46px', { fromValue: '0px'}], position: 170, duration: 138, easing: "easeInOutSine" },
            { id: "eid6336", tween: [ "style", "${_CavoloSmall1}", "top", '0px', { fromValue: '-16.46px'}], position: 308, duration: 417, easing: "easeInOutSine" },
            { id: "eid6326", tween: [ "style", "${_CavoloSmall1}", "-webkit-transform-origin", [51,85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,85]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8720", tween: [ "style", "${_CavoloSmall1}", "-moz-transform-origin", [51,85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,85]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8721", tween: [ "style", "${_CavoloSmall1}", "-ms-transform-origin", [51,85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,85]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8722", tween: [ "style", "${_CavoloSmall1}", "msTransformOrigin", [51,85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,85]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8723", tween: [ "style", "${_CavoloSmall1}", "-o-transform-origin", [51,85], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51,85]}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Api": {
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
      id: 'ApeSmall1',
      type: 'image',
      rect: ['20px','-9px','80px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   },
   {
      id: 'Ape2-copy2',
      type: 'image',
      rect: ['97px','-7px','31px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   },
   {
      id: 'ApeSmall1Copy2',
      type: 'image',
      rect: ['20px','-9px','80px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   },
   {
      id: 'Ape2-copy2Copy',
      type: 'image',
      rect: ['97px','-7px','31px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   },
   {
      id: 'ApeSmall1Copy3',
      type: 'image',
      rect: ['20px','-9px','80px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   },
   {
      id: 'Ape2-copy2Copy2',
      type: 'image',
      rect: ['97px','-7px','31px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape2-copy.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ApeSmall1Copy2}": [
            ["style", "top", '-9.33px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '19.81px']
         ],
         "${_Ape2-copy2}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '140deg'],
            ["style", "height", '31.73046875px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '51px'],
            ["style", "width", '30.859375px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '80px']
         ],
         "${_ApeSmall1Copy3}": [
            ["style", "top", '-9.33px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '19.81px']
         ],
         "${_ApeSmall1}": [
            ["style", "top", '-9.33px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '19.81px']
         ],
         "${_Ape2-copy2Copy2}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '140deg'],
            ["style", "height", '31.73046875px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '51px'],
            ["style", "width", '30.859375px']
         ],
         "${_Ape2-copy2Copy}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '140deg'],
            ["style", "height", '31.73046875px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '51px'],
            ["style", "width", '30.859375px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3365,
         autoPlay: false,
         timeline: [
            { id: "eid6884", tween: [ "transform", "${_ApeSmall1Copy2}", "scaleY", '0.55', { fromValue: '0'}], position: 202, duration: 532 },
            { id: "eid6863", tween: [ "transform", "${_Ape2-copy2Copy}", "scaleY", '1.12', { fromValue: '0'}], position: 202, duration: 464 },
            { id: "eid6741", tween: [ "transform", "${_ApeSmall1}", "scaleY", '0.55', { fromValue: '0'}], position: 0, duration: 532 },
            { id: "eid6746", tween: [ "style", "${_ApeSmall1}", "top", '-53.55px', { fromValue: '-9.33px'}], position: 0, duration: 532 },
            { id: "eid6750", tween: [ "style", "${_ApeSmall1}", "top", '-34.32px', { fromValue: '-53.55px'}], position: 532, duration: 200 },
            { id: "eid6752", tween: [ "style", "${_ApeSmall1}", "top", '-69.53px', { fromValue: '-34.32px'}], position: 732, duration: 176 },
            { id: "eid6754", tween: [ "style", "${_ApeSmall1}", "top", '-5.32px', { fromValue: '-69.53px'}], position: 908, duration: 170 },
            { id: "eid6755", tween: [ "style", "${_ApeSmall1}", "top", '-44.34px', { fromValue: '-5.32px'}], position: 1078, duration: 175 },
            { id: "eid6758", tween: [ "style", "${_ApeSmall1}", "top", '-10.25px', { fromValue: '-44.34px'}], position: 1253, duration: 143 },
            { id: "eid6760", tween: [ "style", "${_ApeSmall1}", "top", '-52.08px', { fromValue: '-10.25px'}], position: 1396, duration: 74 },
            { id: "eid6762", tween: [ "style", "${_ApeSmall1}", "top", '-78.53px', { fromValue: '-52.08px'}], position: 1470, duration: 136 },
            { id: "eid6745", tween: [ "style", "${_ApeSmall1}", "left", '-88.29px', { fromValue: '19.81px'}], position: 0, duration: 532 },
            { id: "eid6749", tween: [ "style", "${_ApeSmall1}", "left", '-169.53px', { fromValue: '-88.29px'}], position: 532, duration: 200 },
            { id: "eid6751", tween: [ "style", "${_ApeSmall1}", "left", '-238.65px', { fromValue: '-169.53px'}], position: 732, duration: 176 },
            { id: "eid6753", tween: [ "style", "${_ApeSmall1}", "left", '-562.26px', { fromValue: '-238.65px'}], position: 908, duration: 170 },
            { id: "eid6756", tween: [ "style", "${_ApeSmall1}", "left", '-667.87px', { fromValue: '-562.26px'}], position: 1078, duration: 175 },
            { id: "eid6757", tween: [ "style", "${_ApeSmall1}", "left", '-690.95px', { fromValue: '-667.87px'}], position: 1253, duration: 143 },
            { id: "eid6759", tween: [ "style", "${_ApeSmall1}", "left", '-693.95px', { fromValue: '-690.95px'}], position: 1396, duration: 74 },
            { id: "eid6761", tween: [ "style", "${_ApeSmall1}", "left", '-997.72px', { fromValue: '-693.95px'}], position: 1470, duration: 136 },
            { id: "eid6808", tween: [ "style", "${_Ape2-copy2}", "left", '-32.91px', { fromValue: '51px'}], position: 0, duration: 464 },
            { id: "eid6960", tween: [ "style", "${_Ape2-copy2}", "left", '64.85px', { fromValue: '-32.91px'}], position: 464, duration: 260 },
            { id: "eid6810", tween: [ "style", "${_Ape2-copy2}", "left", '-15.41px', { fromValue: '64.85px'}], position: 724, duration: 577 },
            { id: "eid6812", tween: [ "style", "${_Ape2-copy2}", "left", '154.62px', { fromValue: '-15.41px'}], position: 1301, duration: 646 },
            { id: "eid6814", tween: [ "style", "${_Ape2-copy2}", "left", '-100.1px', { fromValue: '154.62px'}], position: 1947, duration: 325 },
            { id: "eid6816", tween: [ "style", "${_Ape2-copy2}", "left", '89.23px', { fromValue: '-100.1px'}], position: 2272, duration: 560 },
            { id: "eid6958", tween: [ "style", "${_Ape2-copy2}", "left", '303.36px', { fromValue: '89.23px'}], position: 2832, duration: 533 },
            { id: "eid6819", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '139deg', { fromValue: '140deg'}], position: 0, duration: 449 },
            { id: "eid6820", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '246deg', { fromValue: '139deg'}], position: 449, duration: 15 },
            { id: "eid6962", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '226deg', { fromValue: '246deg'}], position: 464, duration: 329 },
            { id: "eid6821", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '294deg', { fromValue: '226deg'}], position: 793, duration: 411 },
            { id: "eid6822", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '337deg', { fromValue: '294deg'}], position: 1204, duration: 705 },
            { id: "eid6823", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '253deg', { fromValue: '337deg'}], position: 1909, duration: 363 },
            { id: "eid6824", tween: [ "transform", "${_Ape2-copy2}", "rotateZ", '400deg', { fromValue: '253deg'}], position: 2272, duration: 159 },
            { id: "eid6870", tween: [ "transform", "${_Ape2-copy2Copy}", "scaleX", '1.12', { fromValue: '0'}], position: 202, duration: 464 },
            { id: "eid6891", tween: [ "transform", "${_ApeSmall1Copy2}", "scaleX", '0.55', { fromValue: '0'}], position: 202, duration: 532 },
            { id: "eid6800", tween: [ "transform", "${_Ape2-copy2}", "scaleX", '1.12', { fromValue: '0'}], position: 0, duration: 464 },
            { id: "eid6858", tween: [ "style", "${_Ape2-copy2Copy}", "top", '172.15px', { fromValue: '13px'}], position: 202, duration: 724 },
            { id: "eid6859", tween: [ "style", "${_Ape2-copy2Copy}", "top", '305.85px', { fromValue: '172.15px'}], position: 927, duration: 577 },
            { id: "eid6860", tween: [ "style", "${_Ape2-copy2Copy}", "top", '290.92px', { fromValue: '305.85px'}], position: 1504, duration: 646 },
            { id: "eid6861", tween: [ "style", "${_Ape2-copy2Copy}", "top", '355.83px', { fromValue: '290.92px'}], position: 2150, duration: 325 },
            { id: "eid6862", tween: [ "style", "${_Ape2-copy2Copy}", "top", '333.23px', { fromValue: '355.83px'}], position: 2474, duration: 533 },
            { id: "eid6892", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-88.29px', { fromValue: '19.81px'}], position: 202, duration: 532 },
            { id: "eid6893", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-171.58px', { fromValue: '-88.29px'}], position: 734, duration: 200 },
            { id: "eid6963", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-169.57px', { fromValue: '-171.58px'}], position: 934, duration: 319 },
            { id: "eid6965", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-292.88px', { fromValue: '-169.57px'}], position: 1253, duration: 396 },
            { id: "eid6967", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-617.14px', { fromValue: '-292.88px'}], position: 1649, duration: 501 },
            { id: "eid6969", tween: [ "style", "${_ApeSmall1Copy2}", "left", '-1028.63px', { fromValue: '-617.14px'}], position: 2150, duration: 531 },
            { id: "eid6747", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-74deg', { fromValue: '0deg'}], position: 0, duration: 67 },
            { id: "eid6748", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-84deg', { fromValue: '-74deg'}], position: 202, duration: 247 },
            { id: "eid6763", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-43deg', { fromValue: '-84deg'}], position: 449, duration: 83 },
            { id: "eid6764", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-121deg', { fromValue: '-43deg'}], position: 532, duration: 436 },
            { id: "eid6766", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-50deg', { fromValue: '-121deg'}], position: 1057, duration: 171 },
            { id: "eid6768", tween: [ "transform", "${_ApeSmall1}", "rotateZ", '-84deg', { fromValue: '-50deg'}], position: 1470, duration: 136 },
            { id: "eid6864", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '139deg', { fromValue: '140deg'}], position: 202, duration: 449 },
            { id: "eid6865", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '226deg', { fromValue: '139deg'}], position: 651, duration: 344 },
            { id: "eid6866", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '294deg', { fromValue: '226deg'}], position: 995, duration: 411 },
            { id: "eid6867", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '337deg', { fromValue: '294deg'}], position: 1406, duration: 705 },
            { id: "eid6868", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '253deg', { fromValue: '337deg'}], position: 2111, duration: 363 },
            { id: "eid6869", tween: [ "transform", "${_Ape2-copy2Copy}", "rotateZ", '400deg', { fromValue: '253deg'}], position: 2474, duration: 159 },
            { id: "eid6876", tween: [ "style", "${_ApeSmall1Copy2}", "top", '-53.55px', { fromValue: '-9.33px'}], position: 202, duration: 532 },
            { id: "eid6877", tween: [ "style", "${_ApeSmall1Copy2}", "top", '74.47px', { fromValue: '-53.55px'}], position: 734, duration: 200 },
            { id: "eid6964", tween: [ "style", "${_ApeSmall1Copy2}", "top", '62.49px', { fromValue: '74.47px'}], position: 934, duration: 319 },
            { id: "eid6966", tween: [ "style", "${_ApeSmall1Copy2}", "top", '62.87px', { fromValue: '62.49px'}], position: 1253, duration: 396 },
            { id: "eid6968", tween: [ "style", "${_ApeSmall1Copy2}", "top", '14.83px', { fromValue: '62.87px'}], position: 1649, duration: 501 },
            { id: "eid6970", tween: [ "style", "${_ApeSmall1Copy2}", "top", '100.15px', { fromValue: '14.83px'}], position: 2150, duration: 531 },
            { id: "eid6885", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-74deg', { fromValue: '0deg'}], position: 202, duration: 67 },
            { id: "eid6886", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-84deg', { fromValue: '-74deg'}], position: 405, duration: 247 },
            { id: "eid6887", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-43deg', { fromValue: '-84deg'}], position: 651, duration: 83 },
            { id: "eid6888", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-121deg', { fromValue: '-43deg'}], position: 734, duration: 436 },
            { id: "eid6889", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-50deg', { fromValue: '-121deg'}], position: 1259, duration: 171 },
            { id: "eid6890", tween: [ "transform", "${_ApeSmall1Copy2}", "rotateZ", '-84deg', { fromValue: '-50deg'}], position: 1672, duration: 136 },
            { id: "eid6809", tween: [ "style", "${_Ape2-copy2}", "top", '108.72px', { fromValue: '13px'}], position: 0, duration: 464 },
            { id: "eid6961", tween: [ "style", "${_Ape2-copy2}", "top", '172.15px', { fromValue: '108.72px'}], position: 464, duration: 260 },
            { id: "eid6811", tween: [ "style", "${_Ape2-copy2}", "top", '317.92px', { fromValue: '172.15px'}], position: 724, duration: 577 },
            { id: "eid6813", tween: [ "style", "${_Ape2-copy2}", "top", '375.57px', { fromValue: '317.92px'}], position: 1301, duration: 646 },
            { id: "eid6815", tween: [ "style", "${_Ape2-copy2}", "top", '239.34px', { fromValue: '375.57px'}], position: 1947, duration: 325 },
            { id: "eid6817", tween: [ "style", "${_Ape2-copy2}", "top", '195.88px', { fromValue: '239.34px'}], position: 2272, duration: 362 },
            { id: "eid6959", tween: [ "style", "${_Ape2-copy2}", "top", '333.23px', { fromValue: '195.88px'}], position: 2633, duration: 731 },
            { id: "eid6871", tween: [ "style", "${_Ape2-copy2Copy}", "left", '64.85px', { fromValue: '51px'}], position: 202, duration: 724 },
            { id: "eid6872", tween: [ "style", "${_Ape2-copy2Copy}", "left", '92.6px', { fromValue: '64.85px'}], position: 927, duration: 577 },
            { id: "eid6873", tween: [ "style", "${_Ape2-copy2Copy}", "left", '112.6px', { fromValue: '92.6px'}], position: 1504, duration: 646 },
            { id: "eid6874", tween: [ "style", "${_Ape2-copy2Copy}", "left", '-45.1px', { fromValue: '112.6px'}], position: 2150, duration: 325 },
            { id: "eid6875", tween: [ "style", "${_Ape2-copy2Copy}", "left", '303.36px', { fromValue: '-45.1px'}], position: 2474, duration: 533 },
            { id: "eid6801", tween: [ "transform", "${_Ape2-copy2}", "scaleY", '1.12', { fromValue: '0'}], position: 0, duration: 464 },
            { id: "eid6740", tween: [ "transform", "${_ApeSmall1}", "scaleX", '0.55', { fromValue: '0'}], position: 0, duration: 532 }         ]
      }
   }
},
"Braccio": {
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
      id: 'Braccio',
      type: 'image',
      rect: ['0px','-9px','152px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Braccio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Braccio}": [
            ["style", "top", '-9px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '132.23333740234px'],
            ["style", "-webkit-transform-origin", [5,89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [5,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [5,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [5,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [5,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '152.14799664968px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132.23333740234px'],
            ["style", "width", '152.13333129883px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 956,
         autoPlay: false,
         timeline: [
            { id: "eid7140", tween: [ "transform", "${_Braccio}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 269, easing: "easeInOutQuad" },
            { id: "eid7141", tween: [ "transform", "${_Braccio}", "rotateZ", '-11deg', { fromValue: '18deg'}], position: 269, duration: 260, easing: "easeInOutQuad" },
            { id: "eid7142", tween: [ "transform", "${_Braccio}", "rotateZ", '30deg', { fromValue: '-11deg'}], position: 529, duration: 210, easing: "easeInOutQuad" },
            { id: "eid7143", tween: [ "transform", "${_Braccio}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 740, duration: 216, easing: "easeInOutQuad" }         ]
      }
   }
},
"Innaffiatoio": {
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
      rect: ['-43px','-57px','261px','221px','auto','auto'],
      id: 'Innaffiatoio',
      transform: [{1:0,0:0},{},{},['0.8','0.8']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Innaffiatoio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Innaffiatoio}": [
            ["style", "top", '-57.25px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-42.53px'],
            ["style", "-webkit-transform-origin", [60,96], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [60,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [60,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [60,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [60,96],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '176.8px'],
            ["style", "width", '208.8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 479,
         autoPlay: false,
         timeline: [
            { id: "eid7205", tween: [ "transform", "${_Innaffiatoio}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 0, duration: 266, easing: "easeInOutQuad" },
            { id: "eid7206", tween: [ "transform", "${_Innaffiatoio}", "rotateZ", '-8deg', { fromValue: '6deg'}], position: 266, duration: 82, easing: "easeInOutQuad" },
            { id: "eid7207", tween: [ "transform", "${_Innaffiatoio}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 348, duration: 70, easing: "easeInOutQuad" },
            { id: "eid7200", tween: [ "style", "${_Innaffiatoio}", "left", '-42.53px', { fromValue: '-42.53px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7203", tween: [ "style", "${_Innaffiatoio}", "top", '-77.25px', { fromValue: '-57.25px'}], position: 0, duration: 266, easing: "easeInOutQuad" },
            { id: "eid7204", tween: [ "style", "${_Innaffiatoio}", "top", '-57px', { fromValue: '-77.25px'}], position: 266, duration: 213, easing: "easeInOutQuad" }         ]
      }
   }
},
"APONA": {
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
      id: 'Ape1',
      type: 'image',
      rect: ['0px','0px','67px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Pezzi%20Quadro%202/Ape1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ape1}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '81.156483092784px'],
            ["style", "left", '-0.01px'],
            ["style", "width", '67.28358px']
         ],
         "${symbolSelector}": [
            ["style", "height", '81.150001525879px'],
            ["style", "width", '67.283332824707px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8500,
         autoPlay: true,
         timeline: [
            { id: "eid7251", tween: [ "style", "${_Ape1}", "left", '198.26px', { fromValue: '-0.01px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid7253", tween: [ "style", "${_Ape1}", "left", '197.25px', { fromValue: '198.26px'}], position: 1000, duration: 175, easing: "easeInOutQuad" },
            { id: "eid7254", tween: [ "style", "${_Ape1}", "left", '182.25px', { fromValue: '197.25px'}], position: 1175, duration: 133, easing: "easeInOutQuad" },
            { id: "eid7257", tween: [ "style", "${_Ape1}", "left", '184.29px', { fromValue: '182.25px'}], position: 1308, duration: 226, easing: "easeInOutQuad" },
            { id: "eid7259", tween: [ "style", "${_Ape1}", "left", '194.28px', { fromValue: '184.29px'}], position: 1534, duration: 98, easing: "easeInOutQuad" },
            { id: "eid7261", tween: [ "style", "${_Ape1}", "left", '489.54px', { fromValue: '194.28px'}], position: 1632, duration: 3368, easing: "easeInQuad" },
            { id: "eid7263", tween: [ "style", "${_Ape1}", "left", '1299.55px', { fromValue: '489.54px'}], position: 5000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid7252", tween: [ "style", "${_Ape1}", "top", '-13px', { fromValue: '0px'}], position: 0, duration: 1175, easing: "easeInOutQuad" },
            { id: "eid7255", tween: [ "style", "${_Ape1}", "top", '0px', { fromValue: '-13px'}], position: 1175, duration: 133, easing: "easeInOutQuad" },
            { id: "eid7256", tween: [ "style", "${_Ape1}", "top", '-22px', { fromValue: '0px'}], position: 1308, duration: 122, easing: "easeInOutQuad" },
            { id: "eid7258", tween: [ "style", "${_Ape1}", "top", '-6.92px', { fromValue: '-22px'}], position: 1430, duration: 104, easing: "easeInOutQuad" },
            { id: "eid7260", tween: [ "style", "${_Ape1}", "top", '-8.92px', { fromValue: '-6.92px'}], position: 1534, duration: 98, easing: "easeInOutQuad" },
            { id: "eid7262", tween: [ "style", "${_Ape1}", "top", '269.85px', { fromValue: '-8.92px'}], position: 1632, duration: 2368, easing: "easeInQuad" },
            { id: "eid7264", tween: [ "style", "${_Ape1}", "top", '215.25px', { fromValue: '269.85px'}], position: 4000, duration: 4500, easing: "easeOutQuad" },
            { id: "eid7281", tween: [ "transform", "${_Ape1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 910, easing: "easeInQuad" },
            { id: "eid7282", tween: [ "transform", "${_Ape1}", "rotateZ", '4deg', { fromValue: '-10deg'}], position: 910, duration: 520, easing: "easeInQuad" },
            { id: "eid7284", tween: [ "transform", "${_Ape1}", "rotateZ", '2deg', { fromValue: '4deg'}], position: 1430, duration: 202, easing: "easeInQuad" },
            { id: "eid7285", tween: [ "transform", "${_Ape1}", "rotateZ", '17deg', { fromValue: '2deg'}], position: 1632, duration: 2368, easing: "easeInQuad" },
            { id: "eid7286", tween: [ "transform", "${_Ape1}", "rotateZ", '-11deg', { fromValue: '17deg'}], position: 4000, duration: 1000, easing: "easeInQuad" },
            { id: "eid7287", tween: [ "transform", "${_Ape1}", "rotateZ", '10deg', { fromValue: '-11deg'}], position: 5000, duration: 2907, easing: "easeInQuad" }         ]
      }
   }
},
"ContenitoreCoda": {
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
            ["style", "height", '209.19999694824px'],
            ["style", "width", '236.88333129883px']
         ],
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [92,93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [92,93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '209.20377732714px'],
            ["style", "top", '0.01px'],
            ["style", "left", '0px'],
            ["style", "width", '236.89605712891px']
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
"Formiche": {
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
      userClass: 'formica',
      id: 'Formica',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.85','0.85']],
      userClass: 'formica',
      id: 'FormicaCopy8',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.95','0.95']],
      userClass: 'formica',
      id: 'FormicaCopy9',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.75','0.75']],
      userClass: 'formica',
      id: 'FormicaCopy10',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.95','0.95']],
      userClass: 'formica',
      id: 'FormicaCopy11',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.8','0.8']],
      userClass: 'formica',
      id: 'FormicaCopy12',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.95','0.95']],
      userClass: 'formica',
      id: 'FormicaCopy13',
      type: 'image',
      rect: ['-15px','0px','51px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Animalini/Formica.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_FormicaCopy11}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.95'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${_FormicaCopy8}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.85'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.85'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${_FormicaCopy10}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.75'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${symbolSelector}": [
            ["style", "height", '43.066665649414px'],
            ["style", "width", '50.866664886475px']
         ],
         "${_FormicaCopy9}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.95'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${_FormicaCopy12}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${_FormicaCopy13}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '0.95'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ],
         "${_Formica}": [
            ["style", "top", '43.44px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '1deg'],
            ["style", "height", '43.081177850469px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-186.72px'],
            ["style", "width", '50.883280925751px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 72000,
         autoPlay: true,
         timeline: [
            { id: "eid8240", tween: [ "transform", "${_FormicaCopy9}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 3000, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8241", tween: [ "transform", "${_FormicaCopy9}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 17237, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8242", tween: [ "transform", "${_FormicaCopy9}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 27915, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8243", tween: [ "style", "${_FormicaCopy10}", "top", '0px', { fromValue: '43.44px'}], position: 4601, duration: 34000 },
            { id: "eid8245", tween: [ "transform", "${_FormicaCopy10}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 4601, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8246", tween: [ "transform", "${_FormicaCopy10}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 18838, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8247", tween: [ "transform", "${_FormicaCopy10}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 29516, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8238", tween: [ "style", "${_FormicaCopy9}", "top", '0px', { fromValue: '43.44px'}], position: 3000, duration: 34000 },
            { id: "eid8254", tween: [ "style", "${_FormicaCopy12}", "left", '981.58px', { fromValue: '-186.72px'}], position: 7601, duration: 34000 },
            { id: "eid8255", tween: [ "transform", "${_FormicaCopy12}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 7601, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8256", tween: [ "transform", "${_FormicaCopy12}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 21838, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8257", tween: [ "transform", "${_FormicaCopy12}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 32516, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8260", tween: [ "transform", "${_FormicaCopy13}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 9000, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8261", tween: [ "transform", "${_FormicaCopy13}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 23237, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8262", tween: [ "transform", "${_FormicaCopy13}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 33915, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid7638", tween: [ "transform", "${_Formica}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 0, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid7640", tween: [ "transform", "${_Formica}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 14237, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid7641", tween: [ "transform", "${_Formica}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 24915, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8239", tween: [ "style", "${_FormicaCopy9}", "left", '972.57px', { fromValue: '-186.72px'}], position: 3000, duration: 34000 },
            { id: "eid8213", tween: [ "style", "${_Formica}", "top", '0px', { fromValue: '43.44px'}], position: 0, duration: 34000 },
            { id: "eid8244", tween: [ "style", "${_FormicaCopy10}", "left", '981.57px', { fromValue: '-186.72px'}], position: 4601, duration: 34000 },
            { id: "eid8233", tween: [ "style", "${_FormicaCopy8}", "top", '0px', { fromValue: '43.44px'}], position: 1394, duration: 34000 },
            { id: "eid8234", tween: [ "style", "${_FormicaCopy8}", "left", '981.57px', { fromValue: '-186.72px'}], position: 1394, duration: 34000 },
            { id: "eid8248", tween: [ "style", "${_FormicaCopy11}", "top", '0px', { fromValue: '43.44px'}], position: 6000, duration: 34000 },
            { id: "eid8253", tween: [ "style", "${_FormicaCopy12}", "top", '0px', { fromValue: '43.44px'}], position: 7601, duration: 34000 },
            { id: "eid8212", tween: [ "style", "${_Formica}", "left", '983.13px', { fromValue: '-186.72px'}], position: 0, duration: 34000 },
            { id: "eid8250", tween: [ "transform", "${_FormicaCopy11}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 6000, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8251", tween: [ "transform", "${_FormicaCopy11}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 20237, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8252", tween: [ "transform", "${_FormicaCopy11}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 30915, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8258", tween: [ "style", "${_FormicaCopy13}", "top", '0px', { fromValue: '43.44px'}], position: 9000, duration: 34000 },
            { id: "eid8235", tween: [ "transform", "${_FormicaCopy8}", "rotateZ", '-6deg', { fromValue: '1deg'}], position: 1394, duration: 14237, easing: "easeInOutQuint" },
            { id: "eid8236", tween: [ "transform", "${_FormicaCopy8}", "rotateZ", '2deg', { fromValue: '-6deg'}], position: 15632, duration: 10678, easing: "easeInOutQuint" },
            { id: "eid8237", tween: [ "transform", "${_FormicaCopy8}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 26310, duration: 9085, easing: "easeInOutQuint" },
            { id: "eid8249", tween: [ "style", "${_FormicaCopy11}", "left", '981.58px', { fromValue: '-186.72px'}], position: 6000, duration: 34000 },
            { id: "eid8259", tween: [ "style", "${_FormicaCopy13}", "left", '981.58px', { fromValue: '-186.72px'}], position: 9000, duration: 34000 }         ]
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
