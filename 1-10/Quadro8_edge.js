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
            id:'G-Cielo',
            type:'image',
            rect:['-111px','-15px','1300px','647px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"G-Cielo.png",'0px','0px']
         },
         {
            id:'NUVOLA',
            type:'rect',
            rect:['247px','38px','auto','auto','auto','auto'],
            opacity:0.95,
            userClass:"Nuvola"
         },
         {
            id:'Q7-Q8-pratobg',
            type:'image',
            rect:['-45px','129px','1154px','204px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-Q8-pratobg.png",'0px','0px']
         },
         {
            id:'Q7-Q8-prato-front',
            type:'image',
            rect:['-40px','254px','1144px','566px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-Q8-prato-front.png",'0px','0px']
         },
         {
            id:'Q8-lago',
            type:'image',
            rect:['-56px','376px','906px','406px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-lago.png",'0px','0px'],
            transform:[[],[],[],['0.97537','0.97537']]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['640px','289px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.82481','0.82481']]
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['897px','308px','140px','197px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['521px','-232px','auto','auto','auto','auto']
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','697px','auto','auto','auto','auto'],
            userClass:"menu"
         },
         {
            id:'Q8-frondematte',
            type:'image',
            rect:['-65px','32px','651px','626px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-frondematte.png",'0px','0px'],
            transform:[[],[],[],['0.85623','0.85623']]
         },
         {
            id:'Q8-fronde4',
            type:'image',
            rect:['220px','46px','105px','620px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-fronde4.png",'0px','0px']
         },
         {
            id:'Q8-fronda',
            type:'image',
            rect:['418px','208px','80px','458px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-fronda.png",'0px','0px']
         },
         {
            id:'Q8-Sciagiusta',
            type:'image',
            rect:['44px','647px','482px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-Sciagiusta.png",'0px','0px']
         },
         {
            id:'papera',
            type:'rect',
            rect:['460px','590px','auto','auto','auto','auto'],
            clip:['rect(-17.857177734375px 119px 140.607177734375px -66.9642333984375px)'],
            transform:[[],[],[],['0.5967','0.5967']]
         },
         {
            id:'Q8-fronde3',
            type:'image',
            rect:['319px','75px','199px','648px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-fronde3.png",'0px','0px']
         },
         {
            id:'Q8-fronde2',
            type:'image',
            rect:['-71px','75px','250px','622px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-fronde2.png",'0px','0px']
         },
         {
            id:'Q8-fronde1',
            type:'image',
            rect:['36px','40px','340px','691px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-fronde1.png",'0px','0px']
         },
         {
            id:'Q8-giunco',
            type:'image',
            rect:['229px','179px','89px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-giunco.png",'0px','0px']
         },
         {
            id:'Q8-loto22',
            type:'image',
            rect:['501px','407px','40px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-loto2.png",'0px','0px']
         },
         {
            id:'Q8-ninfea1',
            type:'image',
            rect:['575px','393px','69px','44px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-ninfea1.png",'0px','0px']
         },
         {
            id:'Q8-loto1',
            type:'image',
            rect:['589px','393px','42px','34px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q8-loto1.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
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
            id:'papera',
            symbolName:'papera'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Q8-fronde3}": [
            ["style", "left", '319px'],
            ["style", "top", '75px']
         ],
         "${_Q8-loto1}": [
            ["style", "left", '589px'],
            ["style", "top", '393px']
         ],
         "${_trigger-coda}": [
            ["style", "top", '308px'],
            ["style", "opacity", '0'],
            ["style", "left", '897px']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.82481'],
            ["style", "left", '640px'],
            ["transform", "scaleX", '0.82481']
         ],
         "${_Q8-fronde2}": [
            ["style", "left", '-71px'],
            ["style", "top", '75px']
         ],
         "${_Q7-Q8-pratobg}": [
            ["style", "left", '-45px'],
            ["style", "top", '129px']
         ],
         "${_Q8-frondematte}": [
            ["style", "top", '32px'],
            ["transform", "scaleY", '0.85623'],
            ["style", "left", '-65px'],
            ["transform", "scaleX", '0.85623']
         ],
         "${_Q8-Sciagiusta}": [
            ["style", "left", '44px'],
            ["style", "top", '647px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_Q8-giunco}": [
            ["style", "left", '229px'],
            ["style", "top", '179px']
         ],
         "${_Q8-loto22}": [
            ["style", "left", '501px'],
            ["style", "top", '407px']
         ],
         "${_Q7-Q8-prato-front}": [
            ["style", "left", '-40px'],
            ["style", "top", '254px']
         ],
         "${_Q8-lago}": [
            ["style", "top", '376px'],
            ["transform", "scaleY", '0.97537'],
            ["style", "height", '406px'],
            ["transform", "scaleX", '0.97537'],
            ["style", "left", '-56px'],
            ["style", "width", '906px']
         ],
         "${_Q8-fronde1}": [
            ["style", "left", '36px'],
            ["style", "top", '40px']
         ],
         "${_papera}": [
            ["style", "top", '590px'],
            ["transform", "scaleY", '0.5967'],
            ["transform", "scaleX", '0.5967'],
            ["style", "clip", [-17.857177734375,119,140.607177734375,-66.9642333984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '460px']
         ],
         "${_Q8-fronda}": [
            ["style", "left", '418px'],
            ["style", "top", '208px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_Q8-ninfea1}": [
            ["style", "left", '575px'],
            ["style", "top", '393px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_NUVOLA}": [
            ["style", "top", '-57px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '-18px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Q8-fronde4}": [
            ["style", "left", '220px'],
            ["style", "top", '46px']
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
            { id: "eid3874", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"numerazio": {
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
      id: 'numerigruppo',
      type: 'group',
      rect: ['0','0','350','281','auto','auto'],
      c: [
      {
         userClass: 'numeris',
         id: 'Num-1',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum1.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-2',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum2.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-3',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum3.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-4',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum4.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-5',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum5.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-6',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum6.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-7',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum7.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-8',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum8.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-9',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum9.svg','0px','0px']
      },
      {
         userClass: 'numeris',
         id: 'Num-10',
         type: 'image',
         rect: ['0px','0px','350px','281px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/svgNum10.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_numerigruppo}": [
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-180deg'],
            ["motion", "location", '175px 140.5px'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0']
         ],
         "${_Num-3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-9}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-10}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '350px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2427,
         autoPlay: false,
         timeline: [
            { id: "eid2424", tween: [ "transform", "${_numerigruppo}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2435", tween: [ "transform", "${_numerigruppo}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2431", tween: [ "style", "${_numerigruppo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 440, easing: "swing" },
            { id: "eid2434", tween: [ "style", "${_numerigruppo}", "opacity", '1', { fromValue: '1'}], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[175,140.5,0,0],[414.45,85.73,421.02,22.34,335.45,17.8],[639.46,213.63,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[639.5,213.45,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[639.46,213.63,0,0],[823.85,251,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[823.85,251,-67.92,329.52],[525,948.01,0,0]]], position: 2158, duration: 269 },
            { id: "eid2428", tween: [ "transform", "${_numerigruppo}", "scaleX", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2439", tween: [ "transform", "${_numerigruppo}", "scaleX", '0', { fromValue: '0.9'}], position: 1884, duration: 543 }         ]
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
      userClass: 'fumello',
      id: 'Fumello',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q8.png','0px','0px','445.97px','286.67px']
   },
   {
      rect: ['-8px','172px','466px','287px','auto','auto'],
      userClass: 'fume',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['333px','140px','auto','auto','auto','auto'],
      id: 'play',
      transform: [[],[],[],['0.84','0.84']],
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
         "${symbolSelector}": [
            ["style", "height", '287px'],
            ["style", "width", '446px']
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
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '446px']
         ],
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
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid6395", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid6396", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
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
      type: 'image',
      id: 'Fondo-Menu',
      opacity: 0.7,
      rect: ['-50px','12px','1260px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['55px','72px','auto','auto','auto','auto'],
      userClass: 'home'
   },
   {
      type: 'rect',
      id: 'NEXT',
      rect: ['1033px','82px','auto','auto','auto','auto'],
      userClass: 'next',
      transform: [[0,0],[],[],['0.58314','0.58314']]
   },
   {
      userClass: 'fumnum1',
      rect: ['17.6%','30.3%','90px','70px','auto','auto'],
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      userClass: 'fumnum2',
      rect: ['24.5%','30.3%','90px','70px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      userClass: 'fumnum3',
      rect: ['31.3%','30.3%','90px','70px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      userClass: 'fumnum4',
      rect: ['38.1%','30.3%','90px','70px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      userClass: 'fumnum5',
      rect: ['45.1%','30.3%','90px','70px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      userClass: 'fumnum6',
      id: 'Num-6',
      type: 'image',
      rect: ['606px','72px','90px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgBWNum6.svg','0px','0px']
   },
   {
      userClass: 'fumnum7',
      id: 'Num-7',
      type: 'image',
      rect: ['689px','72px','90px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgBWNum7.svg','0px','0px']
   },
   {
      userClass: 'fumnum8',
      id: 'Num-8',
      type: 'image',
      rect: ['773px','72px','90px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgBWNum8.svg','0px','0px']
   },
   {
      userClass: 'fumnum9',
      id: 'Num-9',
      type: 'image',
      rect: ['856px','72px','90px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgBWNum9.svg','0px','0px']
   },
   {
      userClass: 'fumnum10',
      id: 'Num-10',
      type: 'image',
      rect: ['938px','72px','90px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgBWNum10.svg','0px','0px']
   },
   {
      type: 'rect',
      id: 'musica',
      rect: ['76px','129px','auto','auto','auto','auto'],
      userClass: 'musica',
      transform: [[0,0],[],[],['0.65','0.65']]
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      rect: ['1013','0','auto','auto','auto','auto'],
      userClass: 'testina'
   },
   {
      type: 'rect',
      id: 'reload',
      rect: ['65px','7px','auto','auto','auto','auto'],
      userClass: 'reload',
      transform: [[0,0],[],[],['0.65','0.65']]
   },
   {
      type: 'rect',
      id: 'PREV2',
      rect: ['147px','82px','auto','auto','auto','auto'],
      userClass: 'prev',
      transform: [[0,0],[],[],['0.58929','0.57999']]
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
      id: 'PREV2',
      symbolName: 'PREV'
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
            ["style", "top", '5px'],
            ["transform", "scaleX", '0.65'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '109px']
         ],
         "${_Num-9}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '856px'],
            ["style", "width", '90px']
         ],
         "${_musica}": [
            ["style", "top", '5px'],
            ["transform", "scaleX", '0.65'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '60px']
         ],
         "${_Num-7}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '689px'],
            ["style", "width", '90px']
         ],
         "${_PREV2}": [
            ["transform", "scaleX", '0.58929'],
            ["transform", "scaleY", '0.57999'],
            ["style", "left", '147px'],
            ["style", "top", '82px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '12px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '235px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '-50px'],
            ["style", "width", '1260px']
         ],
         "${_Numero_4}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '38.1%'],
            ["style", "width", '90px']
         ],
         "${_Numero_5}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '45.11%'],
            ["style", "width", '90px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px'],
            ["style", "top", '82px']
         ],
         "${_Numero_2}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.54%'],
            ["style", "width", '90px']
         ],
         "${_Numero_3}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '31.26%'],
            ["style", "width", '90px']
         ],
         "${_Num-8}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '773px'],
            ["style", "width", '90px']
         ],
         "${_Num-6}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '606px'],
            ["style", "width", '90px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '72px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_Numero_1}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '17.6%'],
            ["style", "width", '90px']
         ],
         "${_Num-10}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '938px'],
            ["style", "width", '90px']
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
            { id: "eid3720", tween: [ "style", "${_musica}", "left", '60px', { fromValue: '60px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3731", tween: [ "style", "${_reload}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3723", tween: [ "style", "${_reload}", "left", '109px', { fromValue: '109px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3728", tween: [ "style", "${_musica}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" }         ]
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
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '0px']
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
      transform: [[0,0],[],[],['0.77','0.77']],
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
"PREV": {
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
         duration: 610,
         autoPlay: false,
         timeline: [
            { id: "eid5429", tween: [ "transform", "${_Testina}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 201, easing: "easeInOutBounce" },
            { id: "eid5430", tween: [ "transform", "${_Testina}", "rotateZ", '-15deg', { fromValue: '21deg'}], position: 201, duration: 224, easing: "easeInOutBounce" },
            { id: "eid5431", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 425, duration: 185, easing: "easeInOutBounce" }         ]
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
      userClass: 'reload',
      id: 'reload',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svg-reload.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_reload}": [
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
            { id: "eid3609", tween: [ "transform", "${_reload}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3610", tween: [ "transform", "${_reload}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid3611", tween: [ "transform", "${_reload}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3612", tween: [ "transform", "${_reload}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
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
      rect: ['0px','-10px','185px','132px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Nuvola',
      userClass: 'nuvo',
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
      rect: ['262px','-39px','231px','267px','auto','auto'],
      id: 'Coda',
      transform: [[],['-19'],[],['0.84','0.84']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      rect: ['14px','163px','148px','113px','auto','auto'],
      id: 'Q8-scoia-braccio1',
      transform: [[],['5']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q8-scoia-braccio1.png','0px','0px']
   },
   {
      id: 'Q8-scoia-corpo',
      type: 'image',
      rect: ['123px','122px','212px','314px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q8-scoia-corpo.png','0px','0px']
   },
   {
      rect: ['123px','153px','99px','160px','auto','auto'],
      id: 'Q8-scoia-braccio2',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q8-scoia-braccio2.png','0px','0px']
   },
   {
      rect: ['55px','-109px','206px','314px','auto','auto'],
      id: 'Q8-scoia-testa',
      transform: [[],[],[],['1.15027','1.15027']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q8-scoia-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q8-scoia-braccio1}": [
            ["style", "top", '163px'],
            ["style", "-webkit-transform-origin", [91.16,24.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [91.16,24.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [91.16,24.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [91.16,24.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [91.16,24.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '14px'],
            ["transform", "rotateZ", '5deg']
         ],
         "${_Q8-scoia-braccio2}": [
            ["style", "top", '153px'],
            ["style", "left", '123px'],
            ["style", "-webkit-transform-origin", [81.5,11.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [81.5,11.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [81.5,11.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [81.5,11.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [81.5,11.78],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Coda}": [
            ["style", "top", '-39px'],
            ["style", "-webkit-transform-origin", [15.02,94.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84'],
            ["transform", "rotateZ", '-19deg'],
            ["style", "height", '267px'],
            ["transform", "scaleX", '0.84'],
            ["style", "left", '262px'],
            ["style", "width", '231px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Q8-scoia-corpo}": [
            ["style", "left", '123px'],
            ["style", "top", '122px']
         ],
         "${_Q8-scoia-testa}": [
            ["style", "top", '-109px'],
            ["transform", "scaleY", '1.15027'],
            ["transform", "scaleX", '1.15027'],
            ["style", "height", '314px'],
            ["style", "-webkit-transform-origin", [51.83,81.96], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.83,81.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.83,81.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.83,81.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.83,81.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '55px'],
            ["style", "width", '206px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2339,
         autoPlay: false,
         labels: {
            "coda": 184,
            "ani": 669
         },
         timeline: [
         ]
      }
   }
},
"papera": {
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
      id: 'Q8-papera-corpo',
      type: 'image',
      rect: ['-67px','60px','119px','79px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q8-papera-corpo.png','0px','0px']
   },
   {
      rect: ['-34px','-16px','135','95','auto','auto'],
      id: 'controllotesta',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['90px','22px','35px','35px','auto','auto'],
         id: 'Q8-papera-becco1',
         transform: [[],['34']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q8-papera-becco1.png','0px','0px']
      },
      {
         rect: ['88px','56px','29px','27px','auto','auto'],
         id: 'Q8-papera-becco2',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q8-papera-becco2.png','0px','0px']
      },
      {
         rect: ['0px','0px','103px','95px','auto','auto'],
         id: 'Q8-papera-testa',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q8-papera-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q8-papera-corpo}": [
            ["style", "left", '-67px'],
            ["style", "top", '60px']
         ],
         "${_Q8-papera-testa}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '79px'],
            ["style", "width", '119px']
         ],
         "${_Q8-papera-becco2}": [
            ["style", "top", '56px'],
            ["style", "left", '88px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q8-papera-becco1}": [
            ["style", "top", '22px'],
            ["style", "-webkit-transform-origin", [18.71,76.34], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [18.71,76.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [18.71,76.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [18.71,76.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [18.71,76.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '90px'],
            ["transform", "rotateZ", '34deg']
         ],
         "${_controllotesta}": [
            ["style", "-webkit-transform-origin", [28.88,96.25], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [28.88,96.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [28.88,96.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [28.88,96.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [28.88,96.25],{valueTemplate:'@@0@@% @@1@@%'}]
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Quadro-07");
