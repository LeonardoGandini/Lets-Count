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
            rect:['-65px','139px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.77232','0.77232']]
         },
         {
            id:'uno',
            type:'rect',
            rect:['287px','309px','auto','auto','auto','auto'],
            userClass:"uno",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'dieci',
            type:'rect',
            rect:['834px','429px','auto','auto','auto','auto'],
            userClass:"dieci",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'nove',
            type:'rect',
            rect:['713px','342px','auto','auto','auto','auto'],
            userClass:"nove",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'otto',
            type:'rect',
            rect:['568px','313px','auto','auto','auto','auto'],
            userClass:"otto",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'sette',
            type:'rect',
            rect:['423px','356px','auto','auto','auto','auto'],
            userClass:"sette",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'sei',
            type:'rect',
            rect:['308px','443px','auto','auto','auto','auto'],
            userClass:"sei",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'due',
            type:'rect',
            rect:['408px','216px','auto','auto','auto','auto'],
            userClass:"due",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'tre',
            type:'rect',
            rect:['562px','179px','auto','auto','auto','auto'],
            userClass:"tre",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'quattro',
            type:'rect',
            rect:['711px','198px','auto','auto','auto','auto'],
            userClass:"quattro",
            transform:[[],[],[],['0.69948','0.68964']]
         },
         {
            id:'cinque',
            type:'rect',
            rect:['836px','274px','auto','auto','auto','auto'],
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
         },
         {
            id:'RobertaName',
            type:'rect',
            rect:['493px','542px','auto','auto','auto','auto'],
            userClass:"roberta"
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
            id:'cinque',
            symbolName:'cinque'
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
            id:'RobertaName',
            symbolName:'RobertaName'
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
         "${_uno}": [
            ["style", "top", '309px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '287px']
         ],
         "${_cinque}": [
            ["style", "top", '274px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '836px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '662px'],
            ["transform", "scaleY", '0.7403'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.7403'],
            ["style", "left", '831px']
         ],
         "${_due}": [
            ["style", "top", '216px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '408px']
         ],
         "${_Q9-erba2}": [
            ["style", "left", '-43px'],
            ["style", "top", '562px']
         ],
         "${_dieci}": [
            ["style", "top", '429px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '834px']
         ],
         "${_nove}": [
            ["style", "top", '342px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '713px']
         ],
         "${_G-Cielo-Finale}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RobertaName}": [
            ["style", "left", '493px'],
            ["style", "top", '542px']
         ],
         "${_otto}": [
            ["style", "top", '313px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '568px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.92312'],
            ["style", "top", '673px'],
            ["style", "left", '922px'],
            ["transform", "scaleY", '0.92312']
         ],
         "${_quattro}": [
            ["style", "top", '198px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '711px']
         ],
         "${_AudioTappeto}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0'],
            ["style", "left", '-267px'],
            ["style", "overflow", 'hidden']
         ],
         "${_tre}": [
            ["style", "top", '179px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '562px']
         ],
         "${_QU-well-done2}": [
            ["style", "top", '21px'],
            ["style", "height", '144px'],
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
         "${_Q9-erba1}": [
            ["style", "top", '680px'],
            ["style", "height", '383px'],
            ["style", "left", '-31px'],
            ["style", "width", '1378px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_sei}": [
            ["style", "top", '443px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '308px']
         ],
         "${_Scoia}": [
            ["style", "-webkit-transform-origin", [54.36,96.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.77232'],
            ["transform", "scaleX", '0.77232'],
            ["style", "left", '-65px'],
            ["style", "top", '139px']
         ],
         "${_sette}": [
            ["style", "top", '356px'],
            ["transform", "scaleX", '0.69948'],
            ["transform", "scaleY", '0.68964'],
            ["style", "left", '423px']
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
            { id: "eid70", tween: [ "transform", "${__2_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid71", tween: [ "transform", "${__2_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid72", tween: [ "transform", "${__2_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid73", tween: [ "transform", "${__2_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '193px']
         ],
         "${__3_col}": [
            ["style", "top", '-95px'],
            ["transform", "scaleY", '0.44285'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.44285'],
            ["style", "left", '-121px']
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
            { id: "eid76", tween: [ "transform", "${__3_col}", "scaleX", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid77", tween: [ "transform", "${__3_col}", "scaleX", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" },
            { id: "eid78", tween: [ "transform", "${__3_col}", "scaleY", '0.6', { fromValue: '0.44285'}], position: 0, duration: 250 },
            { id: "eid79", tween: [ "transform", "${__3_col}", "scaleY", '0.44', { fromValue: '0.6'}], position: 250, duration: 370, easing: "easeOutElastic" }         ]
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
      rect: ['207px','180px','233px','110px','auto','auto'],
      id: 'Q0-bracc2',
      transform: [[],[],[],['0.88461','0.87623']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-bracc2.png','0px','0px']
   },
   {
      id: 'Q9-scoia-corpo',
      type: 'image',
      rect: ['56px','210px','233px','366px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-corpo.png','0px','0px']
   },
   {
      rect: ['77px','-94px','297px','407px','auto','auto'],
      id: 'Q0-Testa',
      transform: [[],['16']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '759px'],
            ["style", "width", '577px']
         ],
         "${_Coda}": [
            ["style", "top", '88px'],
            ["style", "height", '304px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '-96px'],
            ["style", "width", '262px']
         ],
         "${_Q0-Testa}": [
            ["style", "top", '-94px'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '407px'],
            ["style", "left", '77px'],
            ["style", "width", '297px']
         ],
         "${_Q9-scoia-corpo}": [
            ["style", "top", '210px'],
            ["style", "height", '366px'],
            ["style", "left", '56px'],
            ["style", "width", '233px']
         ],
         "${_Q0-bracc2}": [
            ["style", "top", '180px'],
            ["transform", "scaleY", '0.87623'],
            ["style", "height", '110px'],
            ["transform", "scaleX", '0.88461'],
            ["style", "left", '207px'],
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
},
"RobertaName": {
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
      id: 'Q0-NOME',
      type: 'image',
      rect: ['0px','0px','362px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-NOME.png','0px','0px']
   },
   {
      id: 'Q0-NOMECopy',
      type: 'image',
      rect: ['0px','0px','362px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q0-NOME.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-NOMECopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_Q0-NOME}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '362px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 626,
         autoPlay: false,
         timeline: [
            { id: "eid11676", tween: [ "transform", "${_Q0-NOMECopy}", "scaleY", '1.09', { fromValue: '1'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11678", tween: [ "transform", "${_Q0-NOMECopy}", "scaleY", '1', { fromValue: '1.09'}], position: 320, duration: 223, easing: "swing" },
            { id: "eid11664", tween: [ "transform", "${_Q0-NOMECopy}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11667", tween: [ "transform", "${_Q0-NOMECopy}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 320, duration: 223, easing: "easeOutBounce" },
            { id: "eid11657", tween: [ "style", "${_Q0-NOME}", "top", '-12px', { fromValue: '0px'}], position: 45, duration: 205 },
            { id: "eid11658", tween: [ "style", "${_Q0-NOME}", "top", '0px', { fromValue: '-12px'}], position: 250, duration: 376, easing: "easeOutBounce" },
            { id: "eid11661", tween: [ "style", "${_Q0-NOME}", "display", 'none', { fromValue: 'block'}], position: 45, duration: 0, easing: "easeOutBounce" },
            { id: "eid11665", tween: [ "transform", "${_Q0-NOMECopy}", "scaleX", '1.09', { fromValue: '1'}], position: 0, duration: 320, easing: "swing" },
            { id: "eid11668", tween: [ "transform", "${_Q0-NOMECopy}", "scaleX", '1', { fromValue: '1.09'}], position: 320, duration: 223, easing: "easeOutBounce" }         ]
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
