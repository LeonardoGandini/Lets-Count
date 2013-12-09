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
            id:'Text',
            display:'none',
            type:'text',
            rect:['-272px','786px','321px','72px','auto','auto'],
            text:"Quadro Finale!",
            align:"center",
            font:['Arial, Helvetica, sans-serif',40,"rgba(210,14,14,1.00)","normal","none",""]
         },
         {
            id:'G-Cielo-Finale',
            type:'image',
            rect:['0px','0px','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"G-Cielo-Finale.png",'0px','0px']
         },
         {
            id:'Q9-erba2',
            type:'image',
            rect:['-43px','562px','1300px','334px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba2.png",'0px','0px']
         },
         {
            id:'Q9-erba1',
            type:'image',
            rect:['-31px','680px','1378px','383px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba1.png",'0px','0px']
         },
         {
            id:'Scoia',
            type:'rect',
            rect:['6px','106px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.77232','0.77232']]
         },
         {
            id:'uno',
            type:'rect',
            rect:['343px','298px','auto','auto','auto','auto'],
            userClass:"uno",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'dieci',
            type:'rect',
            rect:['845px','432px','auto','auto','auto','auto'],
            userClass:"dieci",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'nove',
            type:'rect',
            rect:['768px','334px','auto','auto','auto','auto'],
            userClass:"nove",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'otto',
            type:'rect',
            rect:['633px','282px','auto','auto','auto','auto'],
            userClass:"otto",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'sette',
            type:'rect',
            rect:['494px','317px','auto','auto','auto','auto'],
            userClass:"sette",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'sei',
            type:'rect',
            rect:['383px','425px','auto','auto','auto','auto'],
            userClass:"sei",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'due',
            type:'rect',
            rect:['432px','205px','auto','auto','auto','auto'],
            userClass:"due",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'tre',
            type:'rect',
            rect:['573px','159px','auto','auto','auto','auto'],
            userClass:"tre",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'quattro',
            type:'rect',
            rect:['718px','157px','auto','auto','auto','auto'],
            userClass:"quattro",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'cinque',
            type:'rect',
            rect:['853px','229px','auto','auto','auto','auto'],
            userClass:"cinque",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'HOME_butt',
            type:'rect',
            rect:['93px','95px','auto','auto','auto','auto'],
            userClass:"home"
         },
         {
            id:'musica',
            type:'rect',
            rect:['95px','118px','auto','auto','auto','auto'],
            userClass:"musica",
            transform:[[],[],[],['0.74','0.74']]
         },
         {
            id:'QU-well-done2',
            type:'image',
            rect:['197px','21px','700px','144px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"QU-well-done.png",'0px','0px']
         },
         {
            id:'AudioTappeto',
            type:'rect',
            rect:['-267px','172px','60px','60px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"AudioMenuTappeto"
         }],
         symbolInstances: [
         {
            id:'quattro',
            symbolName:'quattro'
         },
         {
            id:'nove',
            symbolName:'nove'
         },
         {
            id:'musica',
            symbolName:'musica'
         },
         {
            id:'sette',
            symbolName:'sette'
         },
         {
            id:'sei',
            symbolName:'sei'
         },
         {
            id:'tre',
            symbolName:'tre'
         },
         {
            id:'HOME_butt',
            symbolName:'HOME_butt'
         },
         {
            id:'cinque',
            symbolName:'cinque'
         },
         {
            id:'Scoia',
            symbolName:'Scoia'
         },
         {
            id:'dieci',
            symbolName:'dieci'
         },
         {
            id:'uno',
            symbolName:'uno'
         },
         {
            id:'due',
            symbolName:'due'
         },
         {
            id:'otto',
            symbolName:'otto'
         }
         ]
      },
   states: {
      "Base State": {
         "${_tre}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '573px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '159px']
         ],
         "${_quattro}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '718px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '157px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '662px'],
            ["transform", "scaleY", '0.7403'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.7403'],
            ["style", "left", '831px']
         ],
         "${_due}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '432px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '205px']
         ],
         "${_Q9-erba2}": [
            ["style", "left", '-43px'],
            ["style", "top", '562px']
         ],
         "${_dieci}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '845px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '432px']
         ],
         "${_nove}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '768px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '334px']
         ],
         "${_G-Cielo-Finale}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_otto}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '633px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '282px']
         ],
         "${_sette}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '494px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '317px']
         ],
         "${_musica}": [
            ["style", "top", '673px'],
            ["transform", "scaleY", '0.92312'],
            ["style", "left", '922px'],
            ["transform", "scaleX", '0.92312']
         ],
         "${_AudioTappeto}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0'],
            ["style", "left", '-267px'],
            ["style", "overflow", 'hidden']
         ],
         "${_uno}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '343px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '298px']
         ],
         "${_QU-well-done2}": [
            ["style", "height", '144px'],
            ["style", "top", '21px'],
            ["style", "left", '197px'],
            ["style", "width", '700px']
         ],
         "${_Text}": [
            ["style", "top", '786px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(210,14,14,1.00)'],
            ["style", "left", '-272px'],
            ["style", "font-size", '40px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Q9-erba1}": [
            ["style", "height", '383px'],
            ["style", "top", '680px'],
            ["style", "left", '-31px'],
            ["style", "width", '1378px']
         ],
         "${_sei}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '383px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '425px']
         ],
         "${_cinque}": [
            ["transform", "scaleX", '0.69948'],
            ["style", "left", '853px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '229px']
         ],
         "${_Scoia}": [
            ["style", "-webkit-transform-origin", [54.36,96.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.77232'],
            ["transform", "scaleX", '0.77232'],
            ["style", "left", '6px'],
            ["style", "top", '106px']
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
            { id: "eid63", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" }         ]
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
      userClass: 'musicasvg',
      id: 'Q0-Music',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svg-music.svg','0px','0px']
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
         "${_Q0-Music}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
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
"uno": {
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
      id: '_1_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__1_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid27", tween: [ "transform", "${__1_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid31", tween: [ "transform", "${__1_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid28", tween: [ "transform", "${__1_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid29", tween: [ "transform", "${__1_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid26", tween: [ "transform", "${__1_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid30", tween: [ "transform", "${__1_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
      }
   }
},
"due": {
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
      id: '_2_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__2_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid74", tween: [ "transform", "${__2_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid75", tween: [ "transform", "${__2_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid72", tween: [ "transform", "${__2_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid73", tween: [ "transform", "${__2_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid70", tween: [ "transform", "${__2_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid71", tween: [ "transform", "${__2_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
      }
   }
},
"tre": {
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
      id: '_3_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__3_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid80", tween: [ "transform", "${__3_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid81", tween: [ "transform", "${__3_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid78", tween: [ "transform", "${__3_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid79", tween: [ "transform", "${__3_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid76", tween: [ "transform", "${__3_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid77", tween: [ "transform", "${__3_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
      }
   }
},
"quattro": {
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
      id: '_4_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum4.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__4_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid84", tween: [ "transform", "${__4_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid85", tween: [ "transform", "${__4_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid82", tween: [ "transform", "${__4_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid83", tween: [ "transform", "${__4_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid86", tween: [ "transform", "${__4_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid87", tween: [ "transform", "${__4_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
      }
   }
},
"cinque": {
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
      id: '_5_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum5.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
      }
   }
},
"Scoia": {
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
      rect: ['-96px','88px','262px','304px','auto','auto'],
      id: 'Coda',
      transform: [[],[],[],['-1']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      id: 'Q0-bracc2',
      type: 'image',
      rect: ['240px','167px','233px','110px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-bracc2.png','0px','0px']
   },
   {
      id: 'Q10-Scoiattolo-Corpo',
      type: 'image',
      rect: ['61px','210px','262px','397px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Corpo.png','0px','0px']
   },
   {
      rect: ['35px','225px','113px','166px','auto','auto'],
      id: 'Q10-Scoiattolo-Braccio-DX',
      transform: [[],['-21']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Braccio-DX.png','0px','0px']
   },
   {
      rect: ['106px','-116px','240px','456px','auto','auto'],
      id: 'Q9-scoia-testa',
      transform: [[],['-6'],[],['0.96905','0.96905']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Coda}": [
            ["style", "top", '88px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '304px'],
            ["style", "left", '-96px'],
            ["style", "width", '262px']
         ],
         "${_Q9-scoia-testa}": [
            ["style", "-webkit-transform-origin", [42.69,80.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.69,80.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.69,80.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.69,80.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.69,80.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '0.96905'],
            ["transform", "scaleY", '0.96905'],
            ["transform", "rotateZ", '-6deg'],
            ["style", "height", '456px'],
            ["style", "top", '-116px'],
            ["style", "left", '106px'],
            ["style", "width", '240px']
         ],
         "${symbolSelector}": [
            ["style", "height", '759px'],
            ["style", "width", '577px']
         ],
         "${_Q10-Scoiattolo-Braccio-DX}": [
            ["style", "-webkit-transform-origin", [88.55,12.13], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [88.55,12.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [88.55,12.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [88.55,12.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [88.55,12.13],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-21deg'],
            ["style", "height", '166px'],
            ["style", "top", '225px'],
            ["style", "left", '35px'],
            ["style", "width", '113px']
         ],
         "${_Q10-Scoiattolo-Corpo}": [
            ["style", "top", '210px'],
            ["style", "height", '397px'],
            ["style", "left", '61px'],
            ["style", "width", '262px']
         ],
         "${_Q0-bracc2}": [
            ["style", "top", '167px'],
            ["style", "height", '110px'],
            ["style", "left", '240px'],
            ["style", "width", '233px']
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
      type: 'image',
      id: '_5_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum6.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_5_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svgNum7.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
      type: 'image',
      id: '_5_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum8.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
      type: 'image',
      id: '_5_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum9.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
      type: 'image',
      id: '_5_col',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
      transform: [[0,0],[],[],['0.44285','0.44285']],
      fill: ['rgba(0,0,0,0)','images/svgNum10.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__5_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 620,
         autoPlay: false,
         timeline: [
            { id: "eid88", tween: [ "transform", "${__5_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid89", tween: [ "transform", "${__5_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${__5_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "transform", "${__5_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid92", tween: [ "transform", "${__5_col}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid93", tween: [ "transform", "${__5_col}", "rotateZ", '0deg', { fromValue: '16deg'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
})(jQuery, AdobeEdge, "QuadroFinale");
