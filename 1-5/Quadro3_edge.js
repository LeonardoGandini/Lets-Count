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
            id:'Tereno',
            type:'image',
            rect:['-6px','266px','1035px','522px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q3-Tereno.png",'0px','0px']
         },
         {
            id:'Pianta2',
            type:'image',
            rect:['912px','181px','172px','247px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q3-Pianta.png",'0px','0px']
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
            id:'AlberoPomodoro2',
            type:'image',
            rect:['214px','167px','390px','491px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q3-AlberoPomodoro.png",'0px','0px']
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
            rect:['448','622','auto','auto','auto','auto'],
            userClass:"talpine"
         },
         {
            id:'Talpona',
            type:'rect',
            rect:['59','615','auto','auto','auto','auto'],
            userClass:"Talpona"
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['572','229','auto','auto','auto','auto'],
            userClass:"scoiattolo"
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['782px','377px','172px','193px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Coda.png",'0px','0px'],
            userClass:"codatrigger"
         },
         {
            id:'Pomodori-Statici',
            type:'rect',
            rect:['249','195','auto','auto','auto','auto']
         },
         {
            id:'PomodoroG-3',
            type:'rect',
            rect:['297','428','auto','auto','auto','auto'],
            userClass:"PomodoroG-3"
         },
         {
            id:'PomodoroG-2',
            type:'rect',
            rect:['442px','325px','auto','auto','auto','auto'],
            userClass:"PomodoroG-2"
         },
         {
            id:'PomodoroG-1',
            type:'rect',
            rect:['272px','304px','auto','auto','auto','auto']
         },
         {
            id:'pomotrigger1',
            type:'ellipse',
            rect:['277px','313px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'pomotrigger2',
            type:'ellipse',
            rect:['429px','325px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'pomotrigger3',
            type:'ellipse',
            rect:['285px','422px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'Cestino',
            type:'image',
            rect:['736px','580px','194px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q3-Cestino.png",'0px','0px']
         },
         {
            id:'LadybirdVolante',
            type:'rect',
            rect:['-149','256','auto','auto','auto','auto']
         },
         {
            id:'Ladybird-Coda',
            type:'rect',
            rect:['874','325','auto','auto','auto','auto'],
            userClass:"lbcoda"
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['20','36','auto','auto','auto','auto']
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226px','auto','auto','auto','auto']
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-68px','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'PomodoroG-2',
            symbolName:'PomodoroG-2'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
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
            id:'Pomodori-Statici',
            symbolName:'Pomodori-Statici'
         },
         {
            id:'Ladybird-Coda',
            symbolName:'Ladybird-Coda'
         },
         {
            id:'LadybirdVolante',
            symbolName:'LadybirdVolante'
         },
         {
            id:'Talpine',
            symbolName:'Talpine'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'PomodoroG-1',
            symbolName:'PomodoroG-1'
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
            id:'Talpona',
            symbolName:'Talpona'
         },
         {
            id:'PomodoroG-3',
            symbolName:'PomodoroG-3'
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
            ["style", "top", '6px']
         ],
         "${_codatrigger}": [
            ["style", "top", '377px'],
            ["style", "height", '193px'],
            ["style", "opacity", '0'],
            ["style", "left", '782px'],
            ["style", "width", '172px']
         ],
         "${_pomotrigger2}": [
            ["style", "top", '325px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '429px'],
            ["style", "width", '96px']
         ],
         "${_Viola}": [
            ["transform", "scaleX", '0.68068'],
            ["style", "top", '353px'],
            ["transform", "scaleY", '0.68068'],
            ["style", "left", '11px']
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
         "${_Pomodori-Statici}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)'],
            ["subproperty", "filter.hue-rotate", '-17deg'],
            ["subproperty", "filter.drop-shadow.blur", '7px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${_Giallo}": [
            ["transform", "scaleX", '0.69006'],
            ["style", "top", '331px'],
            ["transform", "scaleY", '0.6647'],
            ["style", "left", '70px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_PomodoroG-1}": [
            ["style", "left", '272px'],
            ["style", "top", '304px']
         ],
         "${_AlberoPomodoro2}": [
            ["style", "height", '491px'],
            ["style", "top", '167px'],
            ["style", "left", '214px'],
            ["style", "width", '390px']
         ],
         "${_FUMELLO}": [
            ["style", "left", '552px'],
            ["style", "top", '-226px']
         ],
         "${_pomotrigger3}": [
            ["style", "top", '422px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '285px'],
            ["style", "width", '96px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_pomotrigger1}": [
            ["style", "top", '313px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '277px'],
            ["style", "width", '96px']
         ],
         "${_Cestino}": [
            ["style", "height", '103px'],
            ["style", "top", '580px'],
            ["style", "left", '736px'],
            ["style", "width", '194px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
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
            { id: "eid8772", tween: [ "transform", "${_ViolaCopy}", "scaleY", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8764", tween: [ "style", "${_Viola}", "left", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
            { id: "eid8873", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.offsetV", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid8875", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.color", 'rgba(0,0,0,0.36)', { fromValue: 'rgba(0,0,0,0.36)'}], position: 0, duration: 0 },
            { id: "eid8868", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.hue-rotate", '-17deg', { fromValue: '-17deg'}], position: 0, duration: 0 },
            { id: "eid8759", tween: [ "transform", "${_Viola}", "scaleY", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8762", tween: [ "style", "${_Giallo}", "left", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid8766", tween: [ "style", "${_Viola}", "top", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
            { id: "eid9649", tween: [ "style", "${_NUVOLA}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid8872", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.offsetH", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid8874", tween: [ "subproperty", "${_Pomodori-Statici}", "filter.drop-shadow.blur", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid8785", tween: [ "subproperty", "${_ViolaCopy}", "filter.saturate", '2.1538461538462', { fromValue: '2.1538461538462'}], position: 0, duration: 0 },
            { id: "eid8777", tween: [ "style", "${_ViolaCopy}", "left", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid9711", tween: [ "style", "${_FUMELLO}", "top", '-226px', { fromValue: '-226px'}], position: 0, duration: 0 },
            { id: "eid8784", tween: [ "subproperty", "${_ViolaCopy}", "filter.hue-rotate", '-98deg', { fromValue: '-98deg'}], position: 0, duration: 0 },
            { id: "eid8771", tween: [ "transform", "${_ViolaCopy}", "scaleX", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8758", tween: [ "transform", "${_Viola}", "scaleX", '0.68068', { fromValue: '0.68068'}], position: 0, duration: 0 },
            { id: "eid8754", tween: [ "transform", "${_Giallo}", "scaleX", '0.69006', { fromValue: '0.69006'}], position: 0, duration: 0 },
            { id: "eid8755", tween: [ "transform", "${_Giallo}", "scaleY", '0.6647', { fromValue: '0.6647'}], position: 0, duration: 0 },
            { id: "eid8776", tween: [ "style", "${_ViolaCopy}", "top", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
            { id: "eid8790", tween: [ "style", "${_Giallo}", "top", '331px', { fromValue: '331px'}], position: 0, duration: 0 },
            { id: "eid9632", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
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
      type: 'image',
      id: 'Fumello',
      rect: ['0px','0px','446px','287px','auto','auto'],
      userClass: 'fumello',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q3.png','0px','0px','445.97px','286.67px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['-8px','172px','466px','287px','auto','auto'],
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
            { id: "eid9778", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9779", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9780", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9781", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid9697", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid9698", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
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
"Giallo": {
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
      id: 'Fiore-Giallo',
      type: 'image',
      rect: ['0px','0px','67px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q2-Fiore-Giallo.png','0px','0px']
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
         duration: 978,
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
      id: 'Fiore-Viola',
      type: 'image',
      rect: ['0px','0px','57px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q2-Fiore-Viola.png','0px','0px']
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
         duration: 978,
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
      id: 'Coda',
      type: 'image',
      rect: ['0px','0px','237px','209px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q2-Coda.png','0px','0px']
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
      id: 'Coda',
      rect: ['0px','0px','194px','239px','auto','auto'],
      transform: [[0,0],['13']],
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
            ["transform", "rotateZ", '13deg'],
            ["style", "height", '239px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
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
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Pomodori-Statici": {
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
      id: 'PomoStaticoCopy4',
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
      id: 'PomoStatico',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy3',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy4',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy2',
      symbolName: 'PomoStatico'
   },
   {
      id: 'PomoStaticoCopy',
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
         "${symbolSelector}": [
            ["style", "height", '396px'],
            ["style", "width", '297px']
         ],
         "${_PomoStaticoCopy}": [
            ["style", "left", '280px'],
            ["style", "top", '318px']
         ],
         "${_PomoStaticoCopy4}": [
            ["style", "left", '173px'],
            ["style", "top", '247px']
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
            { id: "eid8954", tween: [ "style", "${_PomoStaticoCopy2}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9194", tween: [ "style", "${_PomoStaticoCopy}", "left", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
            { id: "eid9214", tween: [ "style", "${_PomoStaticoCopy4}", "top", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
            { id: "eid8957", tween: [ "style", "${_PomoStaticoCopy3}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid8955", tween: [ "style", "${_PomoStaticoCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9213", tween: [ "style", "${_PomoStaticoCopy4}", "left", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
            { id: "eid8956", tween: [ "style", "${_PomoStaticoCopy3}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9195", tween: [ "style", "${_PomoStaticoCopy}", "top", '318px', { fromValue: '318px'}], position: 0, duration: 0 }         ]
      }
   }
},
"PomoStatico": {
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
      rect: ['-2px','-4px','70px','87px','auto','auto'],
      transform: [[0,0],[],[],['0.9','0.9']],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'PomodoroStatico',
      userClass: 'pomodostatico',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q3-Pomodoro.png','0px','0px']
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
      id: 'Talpa-Grande',
      type: 'image',
      rect: ['55px','40px','115px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Talpa-Grande.png','0px','0px']
   },
   {
      id: 'ToppaBucaSX',
      type: 'image',
      rect: ['0px','0px','226px','173px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-ToppaBucaSX.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Mani-Talpa-Grande',
      rect: ['124px','67px','49px','29px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/Q3-Mani-Talpa-Grande.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
         "${_ToppaBucaSX}": [
            ["style", "top", '0px'],
            ["style", "height", '173px'],
            ["style", "left", '0px'],
            ["style", "width", '226px']
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
},
"CodaAni": {
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
         ],
         "${symbolSelector}": [
            ["style", "height", '252px'],
            ["style", "width", '228px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 35000,
         autoPlay: false,
         labels: {
            "animaziocoda": 750
         },
         timeline: [
            { id: "eid9030", tween: [ "transform", "${_Coda2}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 750, duration: 363, easing: "easeInCirc" },
            { id: "eid9163", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '-13deg'}], position: 1113, duration: 166, easing: "easeOutCirc" },
            { id: "eid9031", tween: [ "transform", "${_Coda2}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 1279, duration: 221, easing: "easeInOutCirc" }         ]
      }
   }
},
"Talpine": {
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
      id: 'Talpa-Piccola-1',
      type: 'image',
      rect: ['23px','38px','71px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Talpa-Piccola-1.png','0px','0px']
   },
   {
      id: 'Talpa-Piccola-2',
      type: 'image',
      rect: ['51px','18px','66px','98px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Talpa-Piccola-2.png','0px','0px']
   },
   {
      id: 'Talpa-Piccola-3',
      type: 'image',
      rect: ['77px','42px','79px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Talpa-Piccola-3.png','0px','0px']
   },
   {
      id: 'ToppaBucaDX',
      type: 'image',
      rect: ['0px','26px','172px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-ToppaBucaDX.png','0px','0px']
   },
   {
      id: 'Mani-Talpa-Piccole',
      type: 'image',
      rect: ['8px','51px','53px','28px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Mani-Talpa-Piccole.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Talpa-Piccola-2}": [
            ["style", "-webkit-transform-origin", [66,88], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [66,88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [66,88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [66,88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [66,88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '98px'],
            ["style", "top", '18px'],
            ["style", "left", '51px'],
            ["style", "width", '66px']
         ],
         "${_Talpa-Piccola-1}": [
            ["style", "-webkit-transform-origin", [67,95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [67,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [67,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [67,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [67,95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '76px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "top", '38px'],
            ["style", "left", '23px'],
            ["style", "width", '71px']
         ],
         "${symbolSelector}": [
            ["style", "height", '166px'],
            ["style", "width", '172px']
         ],
         "${_ToppaBucaDX}": [
            ["style", "top", '26px'],
            ["style", "height", '140px'],
            ["style", "left", '0px'],
            ["style", "width", '172px']
         ],
         "${_Mani-Talpa-Piccole}": [
            ["style", "top", '61px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '23px'],
            ["style", "left", '57px'],
            ["style", "width", '48px']
         ],
         "${_Talpa-Piccola-3}": [
            ["style", "-webkit-transform-origin", [76,96], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [76,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [76,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [76,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [76,96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '72px'],
            ["style", "top", '42px'],
            ["style", "left", '77px'],
            ["style", "width", '79px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1816,
         autoPlay: false,
         timeline: [
            { id: "eid9073", tween: [ "style", "${_Talpa-Piccola-2}", "top", '-19px', { fromValue: '18px'}], position: 349, duration: 796, easing: "easeInOutQuart" },
            { id: "eid9079", tween: [ "style", "${_Talpa-Piccola-2}", "top", '18px', { fromValue: '-19px'}], position: 1146, duration: 670, easing: "easeInOutQuart" },
            { id: "eid9060", tween: [ "style", "${_Talpa-Piccola-1}", "top", '-2px', { fromValue: '38px'}], position: 0, duration: 855, easing: "easeInOutQuart" },
            { id: "eid9062", tween: [ "style", "${_Talpa-Piccola-1}", "top", '38px', { fromValue: '-2px'}], position: 855, duration: 592, easing: "easeInOutQuart" },
            { id: "eid9059", tween: [ "style", "${_Talpa-Piccola-1}", "left", '-1px', { fromValue: '23px'}], position: 0, duration: 855, easing: "easeInOutQuart" },
            { id: "eid9066", tween: [ "style", "${_Talpa-Piccola-1}", "left", '23px', { fromValue: '-1px'}], position: 855, duration: 592, easing: "easeInOutQuart" },
            { id: "eid9208", tween: [ "style", "${_Mani-Talpa-Piccole}", "width", '48px', { fromValue: '48px'}], position: 250, duration: 0 },
            { id: "eid9061", tween: [ "transform", "${_Talpa-Piccola-1}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 855, easing: "easeInOutQuart" },
            { id: "eid9064", tween: [ "transform", "${_Talpa-Piccola-1}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 855, duration: 592, easing: "easeInOutQuart" },
            { id: "eid9074", tween: [ "transform", "${_Talpa-Piccola-2}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 349, duration: 796, easing: "easeInOutQuart" },
            { id: "eid9080", tween: [ "transform", "${_Talpa-Piccola-2}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1146, duration: 670, easing: "easeInOutQuart" },
            { id: "eid9092", tween: [ "transform", "${_Mani-Talpa-Piccole}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 250, duration: 727, easing: "easeInOutBack" },
            { id: "eid9093", tween: [ "transform", "${_Mani-Talpa-Piccole}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 977, duration: 469, easing: "easeInOutBack" },
            { id: "eid9205", tween: [ "style", "${_Mani-Talpa-Piccole}", "height", '23px', { fromValue: '23px'}], position: 250, duration: 0 },
            { id: "eid9084", tween: [ "style", "${_Talpa-Piccola-3}", "left", '56px', { fromValue: '77px'}], position: 250, duration: 768, easing: "easeInOutQuart" },
            { id: "eid9087", tween: [ "style", "${_Talpa-Piccola-3}", "left", '77px', { fromValue: '56px'}], position: 1018, duration: 639, easing: "easeInOutQuart" },
            { id: "eid9085", tween: [ "style", "${_Talpa-Piccola-3}", "top", '15px', { fromValue: '42px'}], position: 250, duration: 768, easing: "easeInOutQuart" },
            { id: "eid9089", tween: [ "style", "${_Talpa-Piccola-3}", "top", '42px', { fromValue: '15px'}], position: 1018, duration: 639, easing: "easeInOutQuart" },
            { id: "eid9072", tween: [ "style", "${_Talpa-Piccola-2}", "left", '20px', { fromValue: '51px'}], position: 349, duration: 796, easing: "easeInOutQuart" },
            { id: "eid9078", tween: [ "style", "${_Talpa-Piccola-2}", "left", '51px', { fromValue: '20px'}], position: 1146, duration: 670, easing: "easeInOutQuart" },
            { id: "eid9086", tween: [ "transform", "${_Talpa-Piccola-3}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 250, duration: 768, easing: "easeInOutQuart" },
            { id: "eid9088", tween: [ "transform", "${_Talpa-Piccola-3}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 1018, duration: 639, easing: "easeInOutQuart" }         ]
      }
   }
},
"Ladybird-Coda": {
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
      id: 'LB-in-Piedi',
      type: 'image',
      rect: ['0px','0px','46px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-LB-in-Piedi.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_LB-in-Piedi}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '59px'],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '46px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1387,
         autoPlay: false,
         timeline: [
            { id: "eid9134", tween: [ "style", "${_LB-in-Piedi}", "top", '-8px', { fromValue: '0px'}], position: 0, duration: 400, easing: "swing" },
            { id: "eid9136", tween: [ "style", "${_LB-in-Piedi}", "top", '-29px', { fromValue: '-8px'}], position: 400, duration: 440, easing: "swing" },
            { id: "eid9139", tween: [ "style", "${_LB-in-Piedi}", "top", '0px', { fromValue: '-29px'}], position: 841, duration: 545, easing: "swing" },
            { id: "eid9140", tween: [ "transform", "${_LB-in-Piedi}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 0, duration: 401, easing: "swing" },
            { id: "eid9141", tween: [ "transform", "${_LB-in-Piedi}", "rotateZ", '-5deg', { fromValue: '11deg'}], position: 401, duration: 361, easing: "swing" },
            { id: "eid9142", tween: [ "transform", "${_LB-in-Piedi}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 762, duration: 624, easing: "swing" },
            { id: "eid9133", tween: [ "style", "${_LB-in-Piedi}", "left", '16px', { fromValue: '0px'}], position: 0, duration: 400, easing: "swing" },
            { id: "eid9135", tween: [ "style", "${_LB-in-Piedi}", "left", '-7px', { fromValue: '16px'}], position: 400, duration: 440, easing: "swing" },
            { id: "eid9137", tween: [ "style", "${_LB-in-Piedi}", "left", '29px', { fromValue: '-7px'}], position: 841, duration: 309, easing: "swing" },
            { id: "eid9138", tween: [ "style", "${_LB-in-Piedi}", "left", '0px', { fromValue: '29px'}], position: 1150, duration: 237, easing: "swing" }         ]
      }
   }
},
"PomodoroG-2": {
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
      userClass: 'pomodoro1',
      id: 'Pomodoro',
      type: 'image',
      rect: ['0px','0px','70px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Pomodoro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Pomodoro}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '87px'],
            ["style", "-webkit-transform-origin", [53,35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2422,
         autoPlay: false,
         timeline: [
            { id: "eid9375", tween: [ "style", "${_Pomodoro}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9376", tween: [ "style", "${_Pomodoro}", "left", '127px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9377", tween: [ "style", "${_Pomodoro}", "left", '397px', { fromValue: '127px'}], position: 1867, duration: 426 },
            { id: "eid9378", tween: [ "style", "${_Pomodoro}", "left", '413px', { fromValue: '397px'}], position: 2293, duration: 78 },
            { id: "eid9388", tween: [ "style", "${_Pomodoro}", "left", '404px', { fromValue: '413px'}], position: 2371, duration: 51 },
            { id: "eid9370", tween: [ "style", "${_Pomodoro}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9371", tween: [ "style", "${_Pomodoro}", "top", '-275px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9372", tween: [ "style", "${_Pomodoro}", "top", '238px', { fromValue: '-275px'}], position: 1867, duration: 426 },
            { id: "eid9373", tween: [ "style", "${_Pomodoro}", "top", '227px', { fromValue: '238px'}], position: 2293, duration: 78 },
            { id: "eid9387", tween: [ "style", "${_Pomodoro}", "top", '239px', { fromValue: '227px'}], position: 2371, duration: 51 },
            { id: "eid9380", tween: [ "transform", "${_Pomodoro}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 256 },
            { id: "eid9381", tween: [ "transform", "${_Pomodoro}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 256, duration: 215 },
            { id: "eid9382", tween: [ "transform", "${_Pomodoro}", "rotateZ", '29deg', { fromValue: '-13deg'}], position: 471, duration: 154 },
            { id: "eid9383", tween: [ "transform", "${_Pomodoro}", "rotateZ", '355deg', { fromValue: '29deg'}], position: 625, duration: 375 },
            { id: "eid9384", tween: [ "transform", "${_Pomodoro}", "rotateZ", '341deg', { fromValue: '355deg'}], position: 1867, duration: 426 },
            { id: "eid9385", tween: [ "transform", "${_Pomodoro}", "rotateZ", '367deg', { fromValue: '341deg'}], position: 2293, duration: 78 },
            { id: "eid9389", tween: [ "transform", "${_Pomodoro}", "rotateZ", '358deg', { fromValue: '367deg'}], position: 2371, duration: 51 }         ]
      }
   }
},
"PomodoroG-3": {
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
      userClass: 'pomodoro1',
      id: 'PomodoroCopy',
      type: 'image',
      rect: ['0px','0px','70px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Pomodoro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '70px']
         ],
         "${_PomodoroCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [53,35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2418.4802956314,
         autoPlay: false,
         timeline: [
            { id: "eid9444", tween: [ "style", "${_PomodoroCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9445", tween: [ "style", "${_PomodoroCopy}", "left", '247px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9446", tween: [ "style", "${_PomodoroCopy}", "left", '510px', { fromValue: '247px'}], position: 1868, duration: 426 },
            { id: "eid9447", tween: [ "style", "${_PomodoroCopy}", "left", '514px', { fromValue: '510px'}], position: 2294, duration: 78 },
            { id: "eid9457", tween: [ "style", "${_PomodoroCopy}", "left", '525px', { fromValue: '514px'}], position: 2372, duration: 46 },
            { id: "eid9439", tween: [ "style", "${_PomodoroCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9440", tween: [ "style", "${_PomodoroCopy}", "top", '-374px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9441", tween: [ "style", "${_PomodoroCopy}", "top", '153px', { fromValue: '-374px'}], position: 1868, duration: 426 },
            { id: "eid9442", tween: [ "style", "${_PomodoroCopy}", "top", '123px', { fromValue: '153px'}], position: 2294, duration: 78 },
            { id: "eid9456", tween: [ "style", "${_PomodoroCopy}", "top", '147px', { fromValue: '123px'}], position: 2372, duration: 46 },
            { id: "eid9449", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 256 },
            { id: "eid9450", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 256, duration: 215 },
            { id: "eid9451", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '29deg', { fromValue: '-13deg'}], position: 471, duration: 154 },
            { id: "eid9452", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '355deg', { fromValue: '29deg'}], position: 625, duration: 375 },
            { id: "eid9453", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '341deg', { fromValue: '355deg'}], position: 1868, duration: 426 },
            { id: "eid9454", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '367deg', { fromValue: '341deg'}], position: 2294, duration: 78 },
            { id: "eid9458", tween: [ "transform", "${_PomodoroCopy}", "rotateZ", '356deg', { fromValue: '367deg'}], position: 2372, duration: 46 }         ]
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
      id: 'Braccio',
      type: 'image',
      rect: ['0px','177px','136px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Braccio.png','0px','0px']
   },
   {
      id: 'Testa',
      type: 'image',
      rect: ['86px','0px','216px','230px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Testa.png','0px','0px']
   },
   {
      id: 'CodaAni',
      type: 'rect',
      userClass: 'codaani',
      rect: ['172px','131px','auto','auto','auto','auto']
   },
   {
      id: 'Corpo',
      type: 'image',
      rect: ['50px','192px','308px','263px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Corpo.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'CodaAni',
      symbolName: 'CodaAni'
   }   ]
   },
   states: {
      "Base State": {
         "${_Testa}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '230px'],
            ["style", "-webkit-transform-origin", [31,98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31,98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31,98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31,98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31,98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '86px'],
            ["style", "width", '216px']
         ],
         "${_CodaAni}": [
            ["style", "top", '117px'],
            ["style", "left", '174px']
         ],
         "${symbolSelector}": [
            ["style", "height", '455px'],
            ["style", "width", '402px']
         ],
         "${_Corpo}": [
            ["style", "top", '192px'],
            ["style", "height", '263px'],
            ["style", "left", '50px'],
            ["style", "width", '308px']
         ],
         "${_Braccio}": [
            ["style", "top", '177px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '66px'],
            ["style", "-webkit-transform-origin", [96,83], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [96,83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [96,83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [96,83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [96,83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid9334", tween: [ "transform", "${_Braccio}", "rotateZ", '25deg', { fromValue: '0deg'}], position: 0, duration: 434, easing: "easeInOutCubic" },
            { id: "eid9335", tween: [ "transform", "${_Braccio}", "rotateZ", '-7deg', { fromValue: '25deg'}], position: 434, duration: 306, easing: "easeInOutCubic" },
            { id: "eid9336", tween: [ "transform", "${_Braccio}", "rotateZ", '20deg', { fromValue: '-7deg'}], position: 740, duration: 246, easing: "easeInOutCubic" },
            { id: "eid9337", tween: [ "transform", "${_Braccio}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 985, duration: 265, easing: "easeInOutCubic" },
            { id: "eid9339", tween: [ "transform", "${_Testa}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 421, easing: "easeInOutQuad" },
            { id: "eid9340", tween: [ "transform", "${_Testa}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 421, duration: 329, easing: "easeInQuad" },
            { id: "eid9341", tween: [ "transform", "${_Testa}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid9720", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_CodaAni}', [] ], ""], position: 0 }         ]
      }
   }
},
"LadybirdVolante": {
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
      id: 'LadyBird',
      rect: ['0px','0px','76px','55px','auto','auto'],
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/LadyBird.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '55px'],
            ["style", "width", '76px']
         ],
         "${_LadyBird}": [
            ["motion", "location", '38px 27.5px'],
            ["style", "height", '55px'],
            ["style", "width", '76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 60000,
         autoPlay: true,
         timeline: [
            { id: "eid9651", tween: [ "motion", "${_LadyBird}", [[38,27.5,0,0],[190.57,-121.87,372.96,-9.48]]], position: 2500, duration: 689 },
            { id: "eid9652", tween: [ "motion", "${_LadyBird}", [[190.57,-121.87,259.28,-6.59],[532.66,143.98,352.32,26.14]]], position: 3189, duration: 993 },
            { id: "eid9653", tween: [ "motion", "${_LadyBird}", [[532.66,143.98,184.22,13.67],[680.57,-0.55,187.43,-12.1]]], position: 4182, duration: 601 },
            { id: "eid9654", tween: [ "motion", "${_LadyBird}", [[680.57,-0.55,79.91,-5.16],[761.97,85.62,80.3,-3.85]]], position: 4783, duration: 251 },
            { id: "eid9655", tween: [ "motion", "${_LadyBird}", [[761.97,85.62,190.21,-9.13],[928.05,-91.31,181.58,-20.72]]], position: 5034, duration: 579 },
            { id: "eid9656", tween: [ "motion", "${_LadyBird}", [[928.05,-91.31,724.71,-82.69],[1389.69,-6.84,0,0]]], position: 5613, duration: 1387 }         ]
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
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px'],
      id: 'HOME',
      transform: [],
      type: 'image',
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
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
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
      rect: ['953px','83px','auto','auto','auto','auto'],
      id: 'NEXT',
      transform: [[],[],[],['0.58314','0.58314']],
      type: 'rect',
      userClass: 'next'
   },
   {
      rect: ['176px','83px','auto','auto','auto','auto'],
      id: 'PREV',
      transform: [[],[],[],['0.58314','0.58314']],
      type: 'rect',
      userClass: 'prev'
   },
   {
      rect: ['24.2%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum1',
      id: 'Numero_1Copy',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      rect: ['35.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum2',
      id: 'Numero_2Copy',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      rect: ['46.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum3',
      id: 'Numero_3Copy',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      rect: ['57.4%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum4',
      id: 'Numero_4Copy',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      rect: ['68.8%','30.7%','95px','74px','auto','auto'],
      userClass: 'fumnum5',
      id: 'Numero_5Copy',
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
      id: 'PREV',
      symbolName: 'PREV'
   },
   {
      id: 'Testina-Menu',
      symbolName: 'testina'
   },
   {
      id: 'musica',
      symbolName: 'musica_1'
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
         "${_PREV}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.58314'],
            ["transform", "scaleX", '0.58314'],
            ["style", "left", '176px'],
            ["style", "display", 'block']
         ],
         "${_Numero_3Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '46.38%'],
            ["style", "width", '95px']
         ],
         "${_Numero_4Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '57.44%'],
            ["style", "width", '95px']
         ],
         "${_reload}": [
            ["style", "top", '5px'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '109px'],
            ["transform", "scaleX", '0.65']
         ],
         "${_musica}": [
            ["style", "top", '5px'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleX", '0.65']
         ],
         "${_HOME_butt}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_NEXT}": [
            ["style", "top", '83px'],
            ["transform", "scaleX", '0.58314'],
            ["style", "left", '953px'],
            ["transform", "scaleY", '0.58314']
         ],
         "${_Numero_2Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '35.39%'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Numero_1Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.15%'],
            ["style", "width", '95px']
         ],
         "${_Numero_5Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '68.77%'],
            ["style", "width", '95px']
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
            { id: "eid3731", tween: [ "style", "${_reload}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3723", tween: [ "style", "${_reload}", "left", '109px', { fromValue: '109px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3728", tween: [ "style", "${_musica}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3720", tween: [ "style", "${_musica}", "left", '60px', { fromValue: '60px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3812", tween: [ "style", "${_PREV}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3845", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_PREV}', [] ], ""], position: 0 }         ]
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
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
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
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      transform: [[],[],[],['0.77','0.77']],
      id: 'NextImg',
      type: 'image',
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
"musica_1": {
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
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-1',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum1.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-2',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum2.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-3',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum3.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-4',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum4.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-5',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum5.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Num-5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
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
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '350px']
         ],
         "${_Num-1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
            { id: "eid2428", tween: [ "transform", "${_numerigruppo}", "scaleX", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2439", tween: [ "transform", "${_numerigruppo}", "scaleX", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[397.4,386.81,0,0],[290.55,219.64,-393.62,-151.07,-249.12,-95.61],[163.48,96.24,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[725.82,117.6,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[163.48,96.24,0,0],[140.52,447.32,680.83,53.63]]], position: 1884, duration: 274 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[140.52,447.32,335.41,26.42],[525,948.01,0,0]]], position: 2158, duration: 269 },
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 }         ]
      }
   }
},
"PomodoroG-1": {
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
      userClass: 'pomodoro1',
      id: 'Pomodoro',
      type: 'image',
      rect: ['0px','0px','70px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q3-Pomodoro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Pomodoro}": [
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [53,35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53,35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '70px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2452.1829980187,
         autoPlay: false,
         timeline: [
            { id: "eid9375", tween: [ "style", "${_Pomodoro}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9376", tween: [ "style", "${_Pomodoro}", "left", '127px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9377", tween: [ "style", "${_Pomodoro}", "left", '481px', { fromValue: '127px'}], position: 1839, duration: 426 },
            { id: "eid9378", tween: [ "style", "${_Pomodoro}", "left", '479px', { fromValue: '481px'}], position: 2265, duration: 78 },
            { id: "eid9388", tween: [ "style", "${_Pomodoro}", "left", '488px', { fromValue: '479px'}], position: 2343, duration: 51 },
            { id: "eid9370", tween: [ "style", "${_Pomodoro}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9371", tween: [ "style", "${_Pomodoro}", "top", '-275px', { fromValue: '0px'}], position: 625, duration: 446 },
            { id: "eid9372", tween: [ "style", "${_Pomodoro}", "top", '262px', { fromValue: '-275px'}], position: 1839, duration: 426 },
            { id: "eid9373", tween: [ "style", "${_Pomodoro}", "top", '223px', { fromValue: '262px'}], position: 2265, duration: 78 },
            { id: "eid9387", tween: [ "style", "${_Pomodoro}", "top", '260px', { fromValue: '223px'}], position: 2343, duration: 51 },
            { id: "eid9380", tween: [ "transform", "${_Pomodoro}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 256 },
            { id: "eid9381", tween: [ "transform", "${_Pomodoro}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 256, duration: 215 },
            { id: "eid9382", tween: [ "transform", "${_Pomodoro}", "rotateZ", '29deg', { fromValue: '-13deg'}], position: 471, duration: 154 },
            { id: "eid9383", tween: [ "transform", "${_Pomodoro}", "rotateZ", '355deg', { fromValue: '29deg'}], position: 625, duration: 375 },
            { id: "eid9384", tween: [ "transform", "${_Pomodoro}", "rotateZ", '341deg', { fromValue: '355deg'}], position: 1839, duration: 426 },
            { id: "eid9385", tween: [ "transform", "${_Pomodoro}", "rotateZ", '367deg', { fromValue: '341deg'}], position: 2265, duration: 78 },
            { id: "eid9389", tween: [ "transform", "${_Pomodoro}", "rotateZ", '358deg', { fromValue: '367deg'}], position: 2343, duration: 51 }         ]
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
})(jQuery, AdobeEdge, "Quadro03");
