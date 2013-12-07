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
            id:'Q7-Q8-cespuglio',
            type:'image',
            rect:['427px','208px','223px','111px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-Q8-cespuglio.png",'0px','0px']
         },
         {
            id:'Q7-Q8-prato-front',
            type:'image',
            rect:['-40px','254px','1144px','566px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-Q8-prato-front.png",'0px','0px']
         },
         {
            id:'Q7-lago',
            type:'image',
            rect:['-70px','409px','1228px','376px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-lago.png",'0px','0px'],
            transform:[[],[],[],['0.91695','0.91695']]
         },
         {
            id:'Q7-erba-fioreCopy',
            type:'image',
            rect:['37px','472px','97px','106px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px'],
            transform:[[],[],[],['-1','1.01974']]
         },
         {
            id:'Q7-rocce-acqua',
            type:'image',
            rect:['47px','497px','300px','176px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-rocce-acqua.png",'0px','0px']
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['605px','382px','140px','197px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Q7-erbetta',
            type:'image',
            rect:['579px','321px','140px','120px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erbetta.png",'0px','0px'],
            transform:[[],[],[],['0.4885','0.4885']]
         },
         {
            id:'Pecora',
            type:'rect',
            rect:['-5px','31px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.82448','0.82448']]
         },
         {
            id:'Q7-ninfea-small',
            type:'image',
            rect:['269px','452px','174px','81px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-ninfea-small.png",'0px','0px'],
            transform:[[],[],[],['0.55628','0.55628']]
         },
         {
            id:'Q7-ninfea-smallCopy',
            type:'image',
            rect:['534px','434px','174px','81px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-ninfea-small.png",'0px','0px'],
            transform:[[],[],[],['0.55628','0.55628']]
         },
         {
            id:'Q7-fiore-small',
            type:'image',
            rect:['619px','406px','155px','123px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-fiore-small.png",'0px','0px'],
            transform:[[],[],[],['0.47493','0.47493']]
         },
         {
            id:'Q7-fiore-smallCopy',
            type:'image',
            rect:['363px','406px','155px','123px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-fiore-small.png",'0px','0px'],
            transform:[[],[],[],['0.47493','0.47493']]
         },
         {
            id:'giuncamento',
            type:'rect',
            rect:['660','42','auto','auto','auto','auto']
         },
         {
            id:'Q7-erba-fiore',
            type:'image',
            rect:['165px','638px','97px','106px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px']
         },
         {
            id:'rana3',
            type:'rect',
            rect:['898px','593px','auto','auto','auto','auto'],
            userClass:"ranas3"
         },
         {
            id:'rana4',
            type:'rect',
            rect:['820px','539px','auto','auto','auto','auto'],
            userClass:"ranas4"
         },
         {
            id:'rana5',
            type:'rect',
            rect:['737px','553px','auto','auto','auto','auto'],
            userClass:"ranas5"
         },
         {
            id:'rana7',
            type:'rect',
            rect:['593px','508px','auto','auto','auto','auto'],
            userClass:"ranas7"
         },
         {
            id:'rana6',
            type:'rect',
            rect:['505px','502px','auto','auto','auto','auto'],
            userClass:"ranas6"
         },
         {
            id:'rana2',
            type:'rect',
            rect:['404px','507px','auto','auto','auto','auto'],
            userClass:"ranas2"
         },
         {
            id:'rana1',
            type:'rect',
            rect:['333px','536px','auto','auto','auto','auto'],
            userClass:"ranas1"
         },
         {
            id:'ninfeabig2-water',
            type:'rect',
            rect:['729','663','auto','auto','auto','auto']
         },
         {
            id:'ninfeabig1-water',
            type:'rect',
            rect:['333','632','auto','auto','auto','auto']
         },
         {
            id:'Q7-ninfea-big2',
            type:'image',
            rect:['486px','435px','749px','376px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-ninfea-big2.png",'0px','0px'],
            transform:[[],[],[],['0.36106','0.36106']]
         },
         {
            id:'Q7-ninfea-big',
            type:'image',
            rect:['105px','400px','854px','417px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-ninfea-big.png",'0px','0px'],
            transform:[[],[],[],['0.46605','0.46605']]
         },
         {
            id:'Q7-fiore-fiore',
            type:'image',
            rect:['605px','521px','186px','162px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-fiore-fiore.png",'0px','0px'],
            transform:[[],[],[],['0.43207','0.43207']]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['6px','45px','auto','auto','auto','auto']
         },
         {
            id:'Q7-fiore-fioreCopy',
            type:'image',
            rect:['773px','586px','224px','194px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-fiore-fiore.png",'0px','0px'],
            transform:[[],[],[],['0.43207','0.43207']]
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'TriggerRana1',
            type:'rect',
            rect:['333px','497px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana2',
            type:'rect',
            rect:['415px','470px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana3',
            type:'rect',
            rect:['915px','573px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana4',
            type:'rect',
            rect:['834px','504px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana5',
            type:'rect',
            rect:['741px','514px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana6',
            type:'rect',
            rect:['519px','462px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'TriggerRana7',
            type:'rect',
            rect:['605px','472px','74px','83px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'Trigger-Coda',
            type:'rect',
            rect:['71px','225px','62px','76px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['521px','-232px','auto','auto','auto','auto']
         },
         {
            id:'Trigger-Pecora',
            type:'rect',
            rect:['8px','20px','152px','111px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'triggerwater1',
            type:'rect',
            rect:['412px','567px','226px','146px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'triggerwater2',
            type:'rect',
            rect:['737px','615px','201px','79px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'rana2',
            symbolName:'rana2'
         },
         {
            id:'ninfeabig1-water',
            symbolName:'ninfeabig-water'
         },
         {
            id:'rana3',
            symbolName:'rana3'
         },
         {
            id:'rana6',
            symbolName:'rana6'
         },
         {
            id:'Pecora',
            symbolName:'Pecora'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'rana7',
            symbolName:'rana7'
         },
         {
            id:'rana4',
            symbolName:'rana4'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'rana5',
            symbolName:'rana5'
         },
         {
            id:'giuncamento',
            symbolName:'giuncamento'
         },
         {
            id:'rana1',
            symbolName:'rana1'
         },
         {
            id:'ninfeabig2-water',
            symbolName:'ninfeabig2-water'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_TriggerRana5}": [
            ["style", "top", '514px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '741px'],
            ["style", "width", '74px']
         ],
         "${_TriggerRana2}": [
            ["style", "top", '470px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '415px'],
            ["style", "width", '74px']
         ],
         "${_trigger-coda}": [
            ["style", "top", '382px'],
            ["style", "opacity", '0']
         ],
         "${_Scoiattolo}": [
            ["style", "left", '6px'],
            ["style", "top", '45px']
         ],
         "${_Q7-fiore-smallCopy}": [
            ["style", "top", '406px'],
            ["transform", "scaleY", '0.47493'],
            ["style", "left", '363px'],
            ["transform", "scaleX", '0.47493']
         ],
         "${_TriggerRana3}": [
            ["style", "top", '573px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '915px'],
            ["style", "width", '74px']
         ],
         "${_Q7-Q8-pratobg}": [
            ["style", "left", '-45px'],
            ["style", "top", '129px']
         ],
         "${_rana5}": [
            ["style", "left", '737px'],
            ["style", "top", '553px']
         ],
         "${_TriggerRana1}": [
            ["style", "top", '497px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '333px'],
            ["style", "width", '74px']
         ],
         "${_Q7-ninfea-big2}": [
            ["style", "top", '435px'],
            ["transform", "scaleY", '0.36106'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.36106'],
            ["style", "left", '486px']
         ],
         "${_Q7-ninfea-smallCopy}": [
            ["style", "top", '434px'],
            ["transform", "scaleY", '0.55628'],
            ["transform", "scaleX", '0.55628'],
            ["style", "height", '81px'],
            ["style", "left", '534px'],
            ["style", "width", '174px']
         ],
         "${_rana3}": [
            ["style", "left", '898px'],
            ["style", "top", '593px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_Q7-erbetta}": [
            ["style", "top", '321px'],
            ["transform", "scaleY", '0.4885'],
            ["transform", "scaleX", '0.4885'],
            ["style", "height", '120px'],
            ["style", "left", '579px'],
            ["style", "width", '140px']
         ],
         "${_Q7-erba-fiore}": [
            ["style", "height", '106px'],
            ["style", "top", '638px'],
            ["style", "left", '165px'],
            ["style", "width", '97px']
         ],
         "${_Q7-ninfea-big}": [
            ["transform", "scaleX", '0.46605'],
            ["style", "top", '400px'],
            ["style", "left", '105px'],
            ["transform", "scaleY", '0.46605']
         ],
         "${_Q7-fiore-fiore}": [
            ["style", "top", '521px'],
            ["transform", "scaleY", '0.43207'],
            ["transform", "scaleX", '0.43207'],
            ["style", "height", '162px'],
            ["style", "left", '605px'],
            ["style", "width", '186px']
         ],
         "${_Trigger-Pecora}": [
            ["style", "opacity", '0']
         ],
         "${_rana2}": [
            ["style", "left", '404px'],
            ["style", "top", '507px']
         ],
         "${_Q7-ninfea-small}": [
            ["style", "top", '452px'],
            ["transform", "scaleY", '0.55628'],
            ["transform", "scaleX", '0.55628'],
            ["style", "height", '81px'],
            ["style", "left", '269px'],
            ["style", "width", '174px']
         ],
         "${_rana4}": [
            ["style", "left", '820px'],
            ["style", "top", '539px']
         ],
         "${_Q7-fiore-small}": [
            ["transform", "scaleX", '0.47493'],
            ["style", "top", '406px'],
            ["style", "left", '619px'],
            ["transform", "scaleY", '0.47493']
         ],
         "${_TriggerRana7}": [
            ["style", "top", '472px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '605px'],
            ["style", "width", '74px']
         ],
         "${_Q7-rocce-acqua}": [
            ["style", "top", '497px'],
            ["style", "left", '47px']
         ],
         "${_rana6}": [
            ["style", "top", '502px'],
            ["style", "left", '505px']
         ],
         "${_rana1}": [
            ["style", "left", '333px'],
            ["style", "top", '536px']
         ],
         "${_Trigger-Coda}": [
            ["style", "top", '225px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '76px'],
            ["style", "opacity", '0'],
            ["style", "left", '71px'],
            ["style", "width", '62px']
         ],
         "${_triggerwater1}": [
            ["style", "top", '567px'],
            ["style", "opacity", '0'],
            ["style", "left", '412px'],
            ["style", "height", '146px']
         ],
         "${_triggerwater2}": [
            ["style", "top", '615px'],
            ["style", "height", '79px'],
            ["style", "opacity", '0'],
            ["style", "left", '737px'],
            ["style", "width", '201px']
         ],
         "${_Q7-Q8-cespuglio}": [
            ["style", "left", '427px'],
            ["style", "top", '208px']
         ],
         "${_Q7-erba-fioreCopy}": [
            ["style", "top", '472px'],
            ["transform", "scaleY", '1.01974'],
            ["style", "height", '106px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '37px'],
            ["style", "width", '97px']
         ],
         "${_TriggerRana6}": [
            ["style", "top", '462px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '519px'],
            ["style", "width", '74px']
         ],
         "${_Pecora}": [
            ["transform", "scaleX", '0.82448'],
            ["style", "top", '29px'],
            ["style", "left", '-16px'],
            ["transform", "scaleY", '0.82448']
         ],
         "${_rana7}": [
            ["style", "left", '593px'],
            ["style", "top", '508px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_TriggerRana4}": [
            ["style", "top", '504px'],
            ["style", "height", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '834px'],
            ["style", "width", '74px']
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
         "${_Q7-fiore-fioreCopy}": [
            ["style", "top", '586px'],
            ["transform", "scaleY", '0.43207'],
            ["transform", "scaleX", '0.43207'],
            ["style", "height", '194px'],
            ["style", "left", '773px'],
            ["style", "width", '224px']
         ],
         "${_Q7-lago}": [
            ["style", "-webkit-transform-origin", [101.02,50.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [101.02,50.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [101.02,50.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [101.02,50.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [101.02,50.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.91695'],
            ["style", "top", '409px'],
            ["style", "height", '376px'],
            ["transform", "scaleX", '0.91695'],
            ["style", "left", '-70px'],
            ["style", "width", '1228px']
         ],
         "${_Q7-Q8-prato-front}": [
            ["style", "left", '-40px'],
            ["style", "top", '254px']
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
      userClass: 'fumello',
      rect: ['0px','0px','446px','287px','auto','auto'],
      id: 'Fumello',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q7.png','0px','0px','445.97px','286.67px']
   },
   {
      userClass: 'fume',
      rect: ['-8px','172px','466px','287px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      id: 'play',
      rect: ['333px','140px','auto','auto','auto','auto'],
      userClass: 'playvoce',
      transform: [[0,0],[],[],['0.84','0.84']]
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
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
            ["style", "opacity", '1'],
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
      transform: [[0,0],['7'],[],['-0.88538','0.84166']],
      id: 'Coda',
      type: 'image',
      rect: ['139px','72px','231px','267px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      transform: [[0,0],['3']],
      id: 'Q7-scoiattolo-braccio-steso',
      type: 'image',
      rect: ['290px','264px','114px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-braccio-steso.png','0px','0px']
   },
   {
      id: 'Q7-scoiattolo-corpo',
      type: 'image',
      rect: ['119px','233px','187px','267px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-corpo.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q7-scoiattolo-testa',
      type: 'image',
      rect: ['185px','0px','176px','315px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-testa.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q7-scoiattolo-braccio-piegato',
      type: 'image',
      rect: ['170px','224px','103px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-braccio-piegato.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-scoiattolo-testa}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '315px'],
            ["style", "-webkit-transform-origin", [43.94,78.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '185px'],
            ["style", "width", '176px']
         ],
         "${_Coda}": [
            ["style", "top", '72px'],
            ["style", "-webkit-transform-origin", [15.02,94.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84166'],
            ["transform", "rotateZ", '7deg'],
            ["style", "height", '267px'],
            ["transform", "scaleX", '-0.88538'],
            ["style", "left", '139px'],
            ["style", "width", '231px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Q7-scoiattolo-braccio-steso}": [
            ["style", "top", '264px'],
            ["style", "-webkit-transform-origin", [-3.31,15.54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '290px'],
            ["transform", "rotateZ", '3deg']
         ],
         "${_Q7-scoiattolo-corpo}": [
            ["style", "left", '119px'],
            ["style", "top", '233px']
         ],
         "${_Q7-scoiattolo-braccio-piegato}": [
            ["style", "-webkit-transform-origin", [22.2,44.11], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [22.2,44.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [22.2,44.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [22.2,44.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [22.2,44.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '170px'],
            ["style", "top", '224px']
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
            { id: "eid4105", tween: [ "transform", "${_Q7-scoiattolo-braccio-steso}", "rotateZ", '-28deg', { fromValue: '3deg'}], position: 805, duration: 356, easing: "easeInOutQuad" },
            { id: "eid4106", tween: [ "transform", "${_Q7-scoiattolo-braccio-steso}", "rotateZ", '6deg', { fromValue: '-28deg'}], position: 1161, duration: 259, easing: "easeInOutQuad" },
            { id: "eid4107", tween: [ "transform", "${_Q7-scoiattolo-braccio-steso}", "rotateZ", '-33deg', { fromValue: '6deg'}], position: 1420, duration: 246, easing: "easeInOutQuad" },
            { id: "eid4108", tween: [ "transform", "${_Q7-scoiattolo-braccio-steso}", "rotateZ", '3deg', { fromValue: '-33deg'}], position: 1667, duration: 277, easing: "easeInOutQuad" },
            { id: "eid4103", tween: [ "transform", "${_Q7-scoiattolo-testa}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 805, duration: 885, easing: "easeInOutQuad" },
            { id: "eid4104", tween: [ "transform", "${_Q7-scoiattolo-testa}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 1690, duration: 560, easing: "easeInOutQuad" },
            { id: "eid4052", tween: [ "transform", "${_Coda}", "rotateZ", '11deg', { fromValue: '7deg'}], position: 184, duration: 125, easing: "easeInOutQuad" },
            { id: "eid4053", tween: [ "transform", "${_Coda}", "rotateZ", '-4deg', { fromValue: '11deg'}], position: 309, duration: 112, easing: "easeInOutQuad" },
            { id: "eid4054", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 421, duration: 79, easing: "easeInOutQuad" },
            { id: "eid4109", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 1045, duration: 272, easing: "easeInOutQuad" },
            { id: "eid4110", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 1317, duration: 350, easing: "easeInOutQuad" },
            { id: "eid4111", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 1667, duration: 203, easing: "easeInOutQuad" }         ]
      }
   }
},
"Pecora": {
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
      transform: [[0,0],[],[],['0.34811','0.34811']],
      id: 'Q7-pecora-corpo',
      type: 'image',
      rect: ['-131px','-103px','401px','339px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-pecora-corpo.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.34811','0.34811']],
      id: 'Q7-pecora-testa',
      type: 'image',
      rect: ['-23px','-77px','303px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-pecora-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-pecora-corpo}": [
            ["style", "top", '-103px'],
            ["transform", "scaleY", '0.34811'],
            ["style", "left", '-131px'],
            ["transform", "scaleX", '0.34811']
         ],
         "${_Q7-pecora-testa}": [
            ["style", "top", '-77px'],
            ["transform", "scaleY", '0.34811'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.34811'],
            ["style", "left", '-23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '182px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid4120", tween: [ "transform", "${_Q7-pecora-testa}", "rotateZ", '29deg', { fromValue: '0deg'}], position: 0, duration: 870, easing: "easeInOutQuad" },
            { id: "eid4121", tween: [ "transform", "${_Q7-pecora-testa}", "rotateZ", '2deg', { fromValue: '29deg'}], position: 870, duration: 609, easing: "easeInOutQuad" },
            { id: "eid4122", tween: [ "transform", "${_Q7-pecora-testa}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1478, duration: 522, easing: "easeInOutQuad" }         ]
      }
   }
},
"rana1": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         transform: [[0,0],[],[],['0.29664','0.29664']],
         id: 'Q7-rana-salto',
         type: 'image',
         rect: ['-116px','19px','327px','335px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.28756','0.28756']],
         type: 'image',
         id: 'Q7-rana-seduta',
         display: 'none',
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.24964','0.24964']],
         id: 'Q7-rana-testa',
         type: 'image',
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "top", '19px'],
            ["style", "left", '-116px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 28 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 28, duration: 117 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 28 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 28, duration: 117 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.78,56.01],[49.05,17.8,-8.54,55.32]]], position: 253, duration: 51 },
            { id: "eid4314", tween: [ "motion", "${_animatoreRana}", [[49.05,17.8,-3.8,24.61],[46.95,49.68,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"rana2": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         transform: [[0,0],[],[],['0.29664','0.29664']],
         id: 'Q7-rana-salto',
         type: 'image',
         rect: ['-116px','19px','327px','335px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.28756','0.28756']],
         type: 'image',
         id: 'Q7-rana-seduta',
         display: 'none',
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.24964','0.24964']],
         id: 'Q7-rana-testa',
         type: 'image',
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "top", '19px'],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "display", 'block'],
            ["style", "left", '-116px'],
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 23 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 23, duration: 122 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 23 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 23, duration: 122 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.81,56.23],[48.11,20.78,-9.55,58.29]]], position: 253, duration: 51 },
            { id: "eid4315", tween: [ "motion", "${_animatoreRana}", [[48.11,20.78,-4.19,25.6],[45.78,53.18,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"rana3": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         rect: ['-116px','19px','327px','335px','auto','auto'],
         id: 'Q7-rana-salto',
         transform: [[],[],[],['0.29664','0.29664']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         transform: [[],[],[],['0.28756','0.28756']],
         id: 'Q7-rana-seduta',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         id: 'Q7-rana-testa',
         transform: [[],[],[],['0.24964','0.24964']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "top", '19px'],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-116px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 23 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 23, duration: 122 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 449, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 554, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 23 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 23, duration: 122 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.53,54.22],[48.45,-9.6,-9.69,32.56]]], position: 253, duration: 51 },
            { id: "eid4320", tween: [ "motion", "${_animatoreRana}", [[48.45,-9.6,-4.77,16.04],[44.78,27.18,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"rana4": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         transform: [[0,0],[],[],['0.29664','0.29664']],
         id: 'Q7-rana-salto',
         type: 'image',
         rect: ['-116px','19px','327px','335px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.28756','0.28756']],
         type: 'image',
         id: 'Q7-rana-seduta',
         display: 'none',
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.24964','0.24964']],
         id: 'Q7-rana-testa',
         type: 'image',
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "display", 'block'],
            ["style", "left", '-116px'],
            ["style", "top", '19px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 282, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 292, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 282, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 292, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 31 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 31, duration: 114 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 31 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 31, duration: 114 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-3.58,25.77],[53.55,16.1,-5.8,71.69]]], position: 253, duration: 29 },
            { id: "eid4319", tween: [ "motion", "${_animatoreRana}", [[53.55,16.1,-1.66,20.53],[52.88,43.93,-1.68,18.39]]], position: 282, duration: 10 },
            { id: "eid4124", tween: [ "motion", "${_animatoreRana}", [[52.88,43.93,-3.93,43.02],[49.17,52.05,-3.34,11.47]]], position: 292, duration: 8 }         ]
      }
   }
},
"rana5": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         transform: [[0,0],[],[],['0.29664','0.29664']],
         id: 'Q7-rana-salto',
         type: 'image',
         rect: ['-116px','19px','327px','335px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.28756','0.28756']],
         type: 'image',
         id: 'Q7-rana-seduta',
         display: 'none',
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.24964','0.24964']],
         id: 'Q7-rana-testa',
         type: 'image',
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "top", '19px'],
            ["style", "left", '-116px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 32 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 32, duration: 113 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 32 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 32, duration: 113 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.72,55.58],[53.25,2.3,-9.61,49.77]]], position: 253, duration: 51 },
            { id: "eid4318", tween: [ "motion", "${_animatoreRana}", [[53.25,2.3,-4.38,22.7],[45.78,43.17,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"rana6": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         transform: [[0,0],[],[],['0.29664','0.29664']],
         id: 'Q7-rana-salto',
         type: 'image',
         rect: ['-116px','19px','327px','335px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.28756','0.28756']],
         type: 'image',
         id: 'Q7-rana-seduta',
         display: 'none',
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.24964','0.24964']],
         id: 'Q7-rana-testa',
         type: 'image',
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "top", '19px'],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "display", 'block'],
            ["style", "left", '-116px'],
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 26 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 26, duration: 119 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 26 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 26, duration: 119 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.81,56.23],[48.11,20.8,-9.55,58.29]]], position: 253, duration: 51 },
            { id: "eid4316", tween: [ "motion", "${_animatoreRana}", [[48.11,20.8,-4.2,25.6],[45.78,53.18,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"rana7": {
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
      id: 'animatoreRana',
      type: 'group',
      rect: ['-15px','-5px','97','144','auto','auto'],
      c: [
      {
         rect: ['-116px','19px','327px','335px','auto','auto'],
         id: 'Q7-rana-salto',
         transform: [[],[],[],['0.29664','0.29664']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-salto.png','0px','0px']
      },
      {
         rect: ['-80px','-13px','256px','174px','auto','auto'],
         transform: [[],[],[],['0.28756','0.28756']],
         id: 'Q7-rana-seduta',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-seduta.png','0px','0px']
      },
      {
         rect: ['-89px','-176px','274px','234px','auto','auto'],
         id: 'Q7-rana-testa',
         transform: [[],[],[],['0.24964','0.24964']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q7-rana-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '97px']
         ],
         "${_animatoreRana}": [
            ["motion", "location", '48.504944317582px 72.423294343806px']
         ],
         "${_Q7-rana-testa}": [
            ["style", "top", '-176px'],
            ["transform", "scaleY", '0.24964'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24964'],
            ["style", "left", '-89px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q7-rana-seduta}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.28756'],
            ["transform", "scaleX", '0.28756'],
            ["style", "left", '-80px'],
            ["style", "display", 'none']
         ],
         "${_Q7-rana-salto}": [
            ["style", "top", '19px'],
            ["transform", "scaleY", '0.01'],
            ["transform", "scaleX", '0.01'],
            ["style", "-webkit-transform-origin", [50.44,10.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.44,10.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-116px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 851,
         autoPlay: false,
         timeline: [
            { id: "eid3990", tween: [ "style", "${_Q7-rana-salto}", "display", 'block', { fromValue: 'block'}], position: 304, duration: 0 },
            { id: "eid3991", tween: [ "style", "${_Q7-rana-salto}", "display", 'none', { fromValue: 'block'}], position: 313, duration: 0 },
            { id: "eid3994", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3992", tween: [ "style", "${_Q7-rana-seduta}", "display", 'none', { fromValue: 'none'}], position: 304, duration: 0 },
            { id: "eid3993", tween: [ "style", "${_Q7-rana-seduta}", "display", 'block', { fromValue: 'none'}], position: 313, duration: 0 },
            { id: "eid3986", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.24797', { fromValue: '0.01'}], position: 0, duration: 26 },
            { id: "eid3997", tween: [ "transform", "${_Q7-rana-salto}", "scaleX", '0.25', { fromValue: '0.24797'}], position: 26, duration: 119 },
            { id: "eid4000", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 552, duration: 105 },
            { id: "eid4001", tween: [ "transform", "${_Q7-rana-testa}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 657, duration: 152 },
            { id: "eid3987", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.24797', { fromValue: '0.01'}], position: 0, duration: 26 },
            { id: "eid3998", tween: [ "transform", "${_Q7-rana-salto}", "scaleY", '0.25', { fromValue: '0.24797'}], position: 26, duration: 119 },
            { id: "eid3980", tween: [ "motion", "${_animatoreRana}", [[48.5,72.43,0,0],[45.7,-39.65,11.55,-143.07]]], position: 0, duration: 119 },
            { id: "eid3995", tween: [ "motion", "${_animatoreRana}", [[45.7,-39.65,7.43,-92.06],[61.78,-92.07,0,0]]], position: 119, duration: 62 },
            { id: "eid3981", tween: [ "motion", "${_animatoreRana}", [[61.78,-92.06,0,0],[59.51,-33.81,-12.68,91.28]]], position: 181, duration: 72 },
            { id: "eid3996", tween: [ "motion", "${_animatoreRana}", [[59.51,-33.81,-7.72,55.58],[48.22,-7.7,-9.61,49.79]]], position: 253, duration: 51 },
            { id: "eid4317", tween: [ "motion", "${_animatoreRana}", [[48.22,-7.7,-4.38,22.71],[45.8,39.24,0,0]]], position: 304, duration: 9 }         ]
      }
   }
},
"giunco": {
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
      transform: [[0,0],['3'],[],['0.50386','0.50386']],
      id: 'Q7-giunco',
      type: 'image',
      rect: ['-18px','-433px','70px','872px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-giunco.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-giunco}": [
            ["style", "top", '-433px'],
            ["transform", "scaleY", '0.50386'],
            ["transform", "rotateZ", '2deg'],
            ["transform", "scaleX", '0.50386'],
            ["style", "left", '-18px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '441px'],
            ["style", "width", '58px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4337,
         autoPlay: false,
         timeline: [
            { id: "eid4060", tween: [ "transform", "${_Q7-giunco}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 0, duration: 2000, easing: "easeInExpo" },
            { id: "eid4061", tween: [ "transform", "${_Q7-giunco}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 2000, duration: 2337, easing: "easeOutBack" }         ]
      }
   }
},
"giuncamento": {
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
      transform: [[0,0],['-2'],[],['1.04376','1.04376']],
      id: 'Q7-erbaacqua',
      type: 'image',
      rect: ['121px','17px','271px','445px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-erbaacqua.png','0px','0px']
   },
   {
      id: 'giunco',
      type: 'rect',
      rect: ['153px','12px','auto','auto','auto','auto']
   },
   {
      id: 'giuncodue',
      type: 'rect',
      rect: ['192px','12px','auto','auto','auto','auto'],
      transform: []
   },
   {
      transform: [[0,0],[],[],['0.52163','0.52163']],
      id: 'Q7-giuncame',
      type: 'image',
      rect: ['-182px','-212px','763px','928px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-giuncame.png','0px','0px']
   },
   {
      id: 'giunco3',
      type: 'rect',
      rect: ['281px','50px','auto','auto','auto','auto'],
      transform: []
   },
   {
      id: 'giuncame-water',
      type: 'rect',
      rect: ['143','473','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'giuncodue',
      symbolName: 'giunco'
   },
   {
      id: 'giuncame-water',
      symbolName: 'giuncame-water'
   },
   {
      id: 'giunco',
      symbolName: 'giunco'
   },
   {
      id: 'giunco3',
      symbolName: 'giunco'
   }   ]
   },
   states: {
      "Base State": {
         "${_Q7-erbaacqua}": [
            ["style", "-webkit-transform-origin", [40.21,95.67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.21,95.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.21,95.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.21,95.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.21,95.67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.04376'],
            ["transform", "rotateZ", '-8deg'],
            ["transform", "scaleX", '1.04376'],
            ["style", "left", '121px'],
            ["style", "top", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '494px'],
            ["style", "width", '398px']
         ],
         "${_giunco}": [
            ["style", "top", '6px'],
            ["style", "-webkit-transform-origin", [50.77,101.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.77,101.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.77,101.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.77,101.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.77,101.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '162px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_giuncodue}": [
            ["style", "top", '1px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '192px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_Q7-giuncame}": [
            ["style", "top", '-212px'],
            ["transform", "scaleY", '0.52163'],
            ["style", "left", '-183px'],
            ["transform", "scaleX", '0.52163']
         ],
         "${_giunco3}": [
            ["style", "top", '50px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '281px'],
            ["transform", "rotateZ", '2deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14250,
         autoPlay: false,
         labels: {
            "soffiogiunchiuno": 2667,
            "soffiogiunchidue": 8676
         },
         timeline: [
            { id: "eid4090", tween: [ "transform", "${_giunco3}", "rotateZ", '-19deg', { fromValue: '2deg'}], position: 8853, duration: 2172, easing: "easeInOutQuad" },
            { id: "eid4093", tween: [ "transform", "${_giunco3}", "rotateZ", '15deg', { fromValue: '-19deg'}], position: 11025, duration: 1570, easing: "easeInOutQuad" },
            { id: "eid4095", tween: [ "transform", "${_giunco3}", "rotateZ", '2deg', { fromValue: '15deg'}], position: 12595, duration: 1082, easing: "easeInOutQuad" },
            { id: "eid4113", tween: [ "transform", "${_Q7-erbaacqua}", "rotateZ", '-15deg', { fromValue: '-8deg'}], position: 2667, duration: 2292, easing: "easeInOutQuad" },
            { id: "eid4114", tween: [ "transform", "${_Q7-erbaacqua}", "rotateZ", '-8deg', { fromValue: '-15deg'}], position: 4958, duration: 2292, easing: "easeInOutQuad" },
            { id: "eid4116", tween: [ "transform", "${_Q7-erbaacqua}", "rotateZ", '-32deg', { fromValue: '-8deg'}], position: 8695, duration: 1805, easing: "easeInOutQuad" },
            { id: "eid4117", tween: [ "transform", "${_Q7-erbaacqua}", "rotateZ", '10deg', { fromValue: '-32deg'}], position: 10500, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid4118", tween: [ "transform", "${_Q7-erbaacqua}", "rotateZ", '-8deg', { fromValue: '10deg'}], position: 12000, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid4089", tween: [ "transform", "${_giunco}", "rotateZ", '-32deg', { fromValue: '-11deg'}], position: 8853, duration: 2172, easing: "easeInOutQuad" },
            { id: "eid4092", tween: [ "transform", "${_giunco}", "rotateZ", '2deg', { fromValue: '-32deg'}], position: 11025, duration: 1570, easing: "easeInOutQuad" },
            { id: "eid4097", tween: [ "transform", "${_giunco}", "rotateZ", '-11deg', { fromValue: '2deg'}], position: 12595, duration: 1082, easing: "easeInOutQuad" },
            { id: "eid4091", tween: [ "transform", "${_giuncodue}", "rotateZ", '-19deg', { fromValue: '2deg'}], position: 9250, duration: 2172, easing: "easeInOutQuad" },
            { id: "eid4094", tween: [ "transform", "${_giuncodue}", "rotateZ", '15deg', { fromValue: '-19deg'}], position: 11422, duration: 1570, easing: "easeInOutQuad" },
            { id: "eid4096", tween: [ "transform", "${_giuncodue}", "rotateZ", '2deg', { fromValue: '15deg'}], position: 12992, duration: 1082, easing: "easeInOutQuad" },
            { id: "eid4321", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_giuncame-water}', [] ], ""], position: 2626 },
            { id: "eid4080", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_giunco}', [] ], ""], position: 2666.8212687686 },
            { id: "eid4082", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_giuncodue}', [] ], ""], position: 2750 },
            { id: "eid4081", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_giunco3}', [] ], ""], position: 2750 },
            { id: "eid4168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_giuncame-water}', [] ], ""], position: 8676 }         ]
      }
   }
},
"giuncame-water": {
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
      id: 'Q7-giuncame-water',
      rect: ['-5px','-1px','198px','34px','auto','auto'],
      transform: [[0,0],[],[],['0.93411','0.93411']],
      fill: ['rgba(0,0,0,0)','images/Q7-giuncame-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-giuncame-waterCopy',
      rect: ['-5px','-1px','198px','34px','auto','auto'],
      transform: [[0,0],[],[],['0.93411','0.93411']],
      fill: ['rgba(0,0,0,0)','images/Q7-giuncame-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-giuncame-waterCopy2',
      rect: ['-5px','-1px','198px','34px','auto','auto'],
      transform: [[0,0],[],[],['0.93411','0.93411']],
      fill: ['rgba(0,0,0,0)','images/Q7-giuncame-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-giuncame-waterCopy3',
      rect: ['-5px','-1px','198px','34px','auto','auto'],
      transform: [[0,0],[],[],['0.93411','0.93411']],
      fill: ['rgba(0,0,0,0)','images/Q7-giuncame-water.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-giuncame-waterCopy3}": [
            ["style", "-webkit-transform-origin", [40.14,27.93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.93411'],
            ["motion", "location", '74.23px 8.87px'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0.93411'],
            ["style", "width", '198px']
         ],
         "${_Q7-giuncame-water}": [
            ["style", "-webkit-transform-origin", [40.14,27.93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.93411'],
            ["style", "height", '34px'],
            ["motion", "location", '74.234152095543px 8.8999847680479px'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '0.93411'],
            ["style", "width", '198px']
         ],
         "${_Q7-giuncame-waterCopy2}": [
            ["style", "-webkit-transform-origin", [40.14,27.93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.93411'],
            ["style", "height", '34px'],
            ["motion", "location", '74.236419270833px 8.8677166033222px'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '0.93411'],
            ["style", "width", '198px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '185px']
         ],
         "${_Q7-giuncame-waterCopy}": [
            ["style", "-webkit-transform-origin", [40.14,27.93], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.14,27.93],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.93411'],
            ["motion", "location", '74.236419270833px 8.8677166033222px'],
            ["style", "height", '34px'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '0.93411'],
            ["style", "width", '198px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3078.0321459984,
         autoPlay: false,
         timeline: [
            { id: "eid4143", tween: [ "transform", "${_Q7-giuncame-waterCopy2}", "scaleX", '1.59', { fromValue: '0.93411'}], position: 1250, duration: 1589, easing: "easeInOutQuad" },
            { id: "eid4139", tween: [ "motion", "${_Q7-giuncame-waterCopy}", [[74.24,8.87,0,0],[69.77,27.69,0,0]]], position: 500, duration: 1560, easing: "easeInOutQuad" },
            { id: "eid4141", tween: [ "style", "${_Q7-giuncame-waterCopy2}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 1589, easing: "easeInOutQuad" },
            { id: "eid4140", tween: [ "motion", "${_Q7-giuncame-waterCopy2}", [[74.24,8.87,0,0],[69.77,27.69,0,0]]], position: 1250, duration: 1589, easing: "easeInOutQuad" },
            { id: "eid4132", tween: [ "transform", "${_Q7-giuncame-water}", "scaleY", '1.59', { fromValue: '0.93411'}], position: 0, duration: 1596, easing: "easeInOutQuad" },
            { id: "eid4137", tween: [ "style", "${_Q7-giuncame-waterCopy}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1560, easing: "easeInOutQuad" },
            { id: "eid4136", tween: [ "transform", "${_Q7-giuncame-waterCopy}", "scaleX", '1.59', { fromValue: '0.93411'}], position: 500, duration: 1560, easing: "easeInOutQuad" },
            { id: "eid4166", tween: [ "style", "${_Q7-giuncame-waterCopy3}", "opacity", '1', { fromValue: '0'}], position: 2634, duration: 205, easing: "easeInOutQuad" },
            { id: "eid4133", tween: [ "style", "${_Q7-giuncame-water}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1596, easing: "easeInOutQuad" },
            { id: "eid4131", tween: [ "transform", "${_Q7-giuncame-water}", "scaleX", '1.59', { fromValue: '0.93411'}], position: 0, duration: 1596, easing: "easeInOutQuad" },
            { id: "eid4138", tween: [ "transform", "${_Q7-giuncame-waterCopy}", "scaleY", '1.59', { fromValue: '0.93411'}], position: 500, duration: 1560, easing: "easeInOutQuad" },
            { id: "eid4135", tween: [ "motion", "${_Q7-giuncame-water}", [[74.23,8.9,0,0],[69.77,27.68,0,0]]], position: 0, duration: 1596, easing: "easeInOutQuad" },
            { id: "eid4142", tween: [ "transform", "${_Q7-giuncame-waterCopy2}", "scaleY", '1.59', { fromValue: '0.93411'}], position: 1250, duration: 1589, easing: "easeInOutQuad" }         ]
      }
   }
},
"ninfeabig-water": {
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
      id: 'Q7-ninfea-big-water',
      rect: ['0px','0px','387px','82px','auto','auto'],
      transform: [[0,0],[],[],[],['47.5858%','73.7898%']],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-ninfea-big-waterCopy',
      rect: ['0px','0px','387px','82px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-ninfea-big-waterCopy2',
      rect: ['0px','0px','387px','82px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big-water.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-ninfea-big-waterCopy}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [47.59,73.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "height", '82px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '387px']
         ],
         "${_Q7-ninfea-big-water}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [47.59,73.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '82px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '387px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '387px']
         ],
         "${_Q7-ninfea-big-waterCopy2}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [47.59,73.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.59,73.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '82px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '387px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: false,
         timeline: [
            { id: "eid4179", tween: [ "style", "${_Q7-ninfea-big-water}", "top", '48px', { fromValue: '0px'}], position: 0, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4185", tween: [ "transform", "${_Q7-ninfea-big-waterCopy}", "scaleX", '1.24', { fromValue: '1'}], position: 500, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4186", tween: [ "style", "${_Q7-ninfea-big-waterCopy}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4187", tween: [ "style", "${_Q7-ninfea-big-waterCopy}", "left", '-13px', { fromValue: '0px'}], position: 500, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4178", tween: [ "style", "${_Q7-ninfea-big-water}", "left", '-13px', { fromValue: '0px'}], position: 0, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4183", tween: [ "style", "${_Q7-ninfea-big-waterCopy}", "top", '48px', { fromValue: '0px'}], position: 500, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4177", tween: [ "transform", "${_Q7-ninfea-big-water}", "scaleY", '1.24', { fromValue: '1'}], position: 0, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4184", tween: [ "transform", "${_Q7-ninfea-big-waterCopy}", "scaleY", '1.24', { fromValue: '1'}], position: 500, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4189", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleY", '1.24', { fromValue: '1'}], position: 1000, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4195", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleY", '1.24', { fromValue: '1.24'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4202", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleY", '1', { fromValue: '1.24'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4188", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "top", '48px', { fromValue: '0px'}], position: 1000, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4197", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "top", '48px', { fromValue: '48px'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4200", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "top", '0px', { fromValue: '48px'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4191", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4203", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4192", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "left", '-13px', { fromValue: '0px'}], position: 1000, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4198", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "left", '-13px', { fromValue: '-13px'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4199", tween: [ "style", "${_Q7-ninfea-big-waterCopy2}", "left", '0px', { fromValue: '-13px'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4190", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleX", '1.24', { fromValue: '1'}], position: 1000, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4196", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleX", '1.24', { fromValue: '1.24'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4201", tween: [ "transform", "${_Q7-ninfea-big-waterCopy2}", "scaleX", '1', { fromValue: '1.24'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4180", tween: [ "style", "${_Q7-ninfea-big-water}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid4176", tween: [ "transform", "${_Q7-ninfea-big-water}", "scaleX", '1.24', { fromValue: '1'}], position: 0, duration: 1750, easing: "easeInOutQuad" }         ]
      }
   }
},
"ninfeabig2-water": {
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
      id: 'Q7-ninfea-big2-water',
      rect: ['0px','0px','243px','38px','auto','auto'],
      transform: [[0,0],[],[],[],['50.7461%','33.644%']],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big2-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-ninfea-big2-waterCopy',
      rect: ['0px','0px','243px','38px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big2-water.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q7-ninfea-big2-waterCopy2',
      rect: ['0px','0px','243px','38px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/Q7-ninfea-big2-water.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '38px'],
            ["style", "width", '243px']
         ],
         "${_Q7-ninfea-big2-waterCopy}": [
            ["style", "-webkit-transform-origin", [50.75,33.64], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '243px']
         ],
         "${_Q7-ninfea-big2-water}": [
            ["style", "-webkit-transform-origin", [50.75,33.64], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '38px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '243px']
         ],
         "${_Q7-ninfea-big2-waterCopy2}": [
            ["style", "-webkit-transform-origin", [50.75,33.64], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.75,33.64],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '38px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '243px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid4216", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy}", "scaleY", '1.35', { fromValue: '1'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4221", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleY", '1.35', { fromValue: '1'}], position: 500, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4226", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleY", '1.35', { fromValue: '1.35'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4233", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleY", '1', { fromValue: '1.35'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4222", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleX", '1.35', { fromValue: '1'}], position: 500, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4227", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleX", '1.35', { fromValue: '1.35'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4232", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy2}", "scaleX", '1', { fromValue: '1.35'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4220", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "top", '54px', { fromValue: '0px'}], position: 500, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4228", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "top", '54px', { fromValue: '54px'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4231", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "top", '0px', { fromValue: '54px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4212", tween: [ "transform", "${_Q7-ninfea-big2-water}", "scaleX", '1.35', { fromValue: '1'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4217", tween: [ "transform", "${_Q7-ninfea-big2-waterCopy}", "scaleX", '1.35', { fromValue: '1'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4219", tween: [ "style", "${_Q7-ninfea-big2-waterCopy}", "left", '-2px', { fromValue: '0px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4218", tween: [ "style", "${_Q7-ninfea-big2-waterCopy}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4224", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "left", '-2px', { fromValue: '0px'}], position: 500, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4229", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "left", '-2px', { fromValue: '-2px'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4230", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "left", '0px', { fromValue: '-2px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid4223", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4234", tween: [ "style", "${_Q7-ninfea-big2-waterCopy2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid4210", tween: [ "style", "${_Q7-ninfea-big2-water}", "left", '-2px', { fromValue: '0px'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4215", tween: [ "style", "${_Q7-ninfea-big2-waterCopy}", "top", '54px', { fromValue: '0px'}], position: 250, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4213", tween: [ "transform", "${_Q7-ninfea-big2-water}", "scaleY", '1.35', { fromValue: '1'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4214", tween: [ "style", "${_Q7-ninfea-big2-water}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1250, easing: "easeInOutQuad" },
            { id: "eid4211", tween: [ "style", "${_Q7-ninfea-big2-water}", "top", '54px', { fromValue: '0px'}], position: 0, duration: 1250, easing: "easeInOutQuad" }         ]
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
