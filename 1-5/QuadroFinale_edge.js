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
            id:'Q3-Tereno',
            type:'image',
            rect:['-249px','596px','1200px','605px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q3-Tereno.png",'0px','0px','101.6%','101.6%'],
            transform:[[],[],[],['1.26942','1.26942']]
         },
         {
            id:'Scoia',
            type:'rect',
            rect:['15','5','auto','auto','auto','auto']
         },
         {
            id:'uno',
            type:'rect',
            rect:['520','22','auto','auto','auto','auto'],
            userClass:"uno"
         },
         {
            id:'due',
            type:'rect',
            rect:['695','81','auto','auto','auto','auto'],
            userClass:"due"
         },
         {
            id:'tre',
            type:'rect',
            rect:['780','248','auto','auto','auto','auto'],
            userClass:"tre"
         },
         {
            id:'quattro',
            type:'rect',
            rect:['695','433','auto','auto','auto','auto'],
            userClass:"quattro"
         },
         {
            id:'cinque',
            type:'rect',
            rect:['520','512','auto','auto','auto','auto'],
            userClass:"cinque"
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
            id:'QU-well-done',
            type:'image',
            rect:['147px','7px','731px','157px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"QU-well-done.png",'0px','0px'],
            transform:[[],[],[],['0.91','0.91']]
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
            id:'QU-next-chapter',
            display:'none',
            type:'image',
            rect:['422px','570px','572px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"QU-next-chapter.png",'0px','0px'],
            userClass:"nextchapter",
            transform:[]
         },
         {
            id:'QU-downloadnow',
            display:'none',
            type:'image',
            rect:['407px','518px','600px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"QU-downloadnow.png",'0px','0px'],
            transform:[]
         },
         {
            id:'RobertaName',
            type:'rect',
            rect:['562','227','auto','auto','auto','auto'],
            userClass:"roberta"
         }],
         symbolInstances: [
         {
            id:'quattro',
            symbolName:'quattro'
         },
         {
            id:'musica',
            symbolName:'musica'
         },
         {
            id:'HOME_butt',
            symbolName:'HOME_butt'
         },
         {
            id:'tre',
            symbolName:'tre'
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
            id:'cinque',
            symbolName:'cinque'
         },
         {
            id:'uno',
            symbolName:'uno'
         },
         {
            id:'due',
            symbolName:'due'
         }
         ]
      },
   states: {
      "Base State": {
         "${_QU-next-chapter}": [
            ["style", "top", '570px'],
            ["style", "height", '48px'],
            ["style", "display", 'none'],
            ["style", "left", '422px'],
            ["style", "width", '572px']
         ],
         "${_uno}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "top", '212px'],
            ["style", "left", '452px'],
            ["transform", "scaleY", '0.88744']
         ],
         "${_cinque}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "top", '347px'],
            ["style", "left", '714px'],
            ["transform", "scaleY", '0.88744']
         ],
         "${_Scoia}": [
            ["style", "-webkit-transform-origin", [54.36,96.98], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54.36,96.98],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.80429'],
            ["transform", "scaleX", '0.80429'],
            ["style", "left", '-47px'],
            ["style", "top", '3px']
         ],
         "${_due}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "top", '212px'],
            ["style", "left", '625px'],
            ["transform", "scaleY", '0.88744']
         ],
         "${_G-Cielo-Finale}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RobertaName}": [
            ["style", "left", '541px'],
            ["style", "top", '508px']
         ],
         "${_QU-well-done}": [
            ["style", "top", '7px'],
            ["transform", "scaleX", '0.91'],
            ["transform", "scaleY", '0.91'],
            ["style", "left", '147px']
         ],
         "${_AudioTappeto}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0'],
            ["style", "left", '-267px'],
            ["style", "overflow", 'hidden']
         ],
         "${_HOME_butt}": [
            ["style", "top", '662px'],
            ["transform", "scaleY", '0.7403'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.7403'],
            ["style", "left", '831px']
         ],
         "${_QU-downloadnow}": [
            ["style", "top", '518px'],
            ["style", "display", 'none'],
            ["style", "height", '31px'],
            ["style", "left", '407px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["style", "top", '786px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(210,14,14,1.00)'],
            ["style", "left", '-272px'],
            ["style", "font-size", '40px']
         ],
         "${_Q3-Tereno}": [
            ["style", "top", '596px'],
            ["transform", "scaleY", '1.26942'],
            ["transform", "scaleX", '1.26942'],
            ["style", "background-size", [101.6,101.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-249px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_tre}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "top", '212px'],
            ["style", "left", '798px'],
            ["transform", "scaleY", '0.88744']
         ],
         "${_quattro}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "top", '347px'],
            ["style", "left", '539px'],
            ["transform", "scaleY", '0.88744']
         ],
         "${_musica}": [
            ["style", "top", '673px'],
            ["transform", "scaleX", '0.92312'],
            ["transform", "scaleY", '0.92312'],
            ["style", "left", '922px']
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
            { id: "eid541", tween: [ "style", "${_RobertaName}", "top", '508px', { fromValue: '508px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_HOME_butt}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_HOME_butt}", "left", '831px', { fromValue: '831px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "transform", "${_musica}", "scaleY", '0.92312', { fromValue: '0.92312'}], position: 0, duration: 0 },
            { id: "eid532", tween: [ "style", "${_RobertaName}", "left", '541px', { fromValue: '541px'}], position: 0, duration: 0 },
            { id: "eid517", tween: [ "style", "${_QU-next-chapter}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "transform", "${_cinque}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "transform", "${_tre}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_Scoia}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "transform", "${_quattro}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid531", tween: [ "style", "${_quattro}", "top", '347px', { fromValue: '347px'}], position: 0, duration: 0 },
            { id: "eid366", tween: [ "transform", "${_due}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid518", tween: [ "style", "${_QU-downloadnow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid528", tween: [ "style", "${_cinque}", "top", '347px', { fromValue: '347px'}], position: 0, duration: 0 },
            { id: "eid498", tween: [ "style", "${_tre}", "left", '798px', { fromValue: '798px'}], position: 0, duration: 0 },
            { id: "eid480", tween: [ "style", "${_uno}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.7403', { fromValue: '0.7403'}], position: 0, duration: 0 },
            { id: "eid527", tween: [ "style", "${_cinque}", "left", '714px', { fromValue: '714px'}], position: 0, duration: 0 },
            { id: "eid358", tween: [ "transform", "${_quattro}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "transform", "${_uno}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid530", tween: [ "style", "${_quattro}", "left", '539px', { fromValue: '539px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.7403', { fromValue: '0.7403'}], position: 0, duration: 0 },
            { id: "eid486", tween: [ "style", "${_tre}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "transform", "${_cinque}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid496", tween: [ "style", "${_due}", "left", '625px', { fromValue: '625px'}], position: 0, duration: 0 },
            { id: "eid365", tween: [ "transform", "${_due}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "transform", "${_tre}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_musica}", "top", '673px', { fromValue: '673px'}], position: 0, duration: 0 },
            { id: "eid482", tween: [ "style", "${_due}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_musica}", "left", '922px', { fromValue: '922px'}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "transform", "${_uno}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_musica}", "scaleX", '0.92312', { fromValue: '0.92312'}], position: 0, duration: 0 },
            { id: "eid495", tween: [ "style", "${_uno}", "left", '452px', { fromValue: '452px'}], position: 0, duration: 0 }         ]
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
      transform: [],
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px'],
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_1_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_2_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_3_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_4_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
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
      transform: [[0,0],[],[],['0.44285','0.44285']],
      id: '_5_col',
      type: 'image',
      rect: ['-121px','-95px','435px','340px','auto','auto'],
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
      id: 'Q2-Coda',
      type: 'image',
      rect: ['8px','293px','308px','272px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q2-Coda.png','0px','0px']
   },
   {
      rect: ['385px','222px','191px','166px','auto','auto'],
      id: 'Q2-Braccio',
      transform: [[0,0],['-12'],[],['1.00859','1.00859'],['9.5747%','88.6159%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q2-Braccio.png','0px','0px']
   },
   {
      id: 'Q2-Corpo',
      type: 'image',
      rect: ['43px','305px','464px','448px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q2-Corpo.png','0px','0px']
   },
   {
      rect: ['42px','477px','114px','200px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.84)',1,1,3],
      id: 'Q1-Carota',
      transform: [[0,0],['-15'],[],[],['42.0298%','83.957%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Carota.png','0px','0px']
   },
   {
      rect: ['88px','565px','130px','100px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.84)',1,1,3],
      id: 'Q2-CavoloBIG1',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q2-CavoloBIG1.png','0px','0px']
   },
   {
      rect: ['146px','574px','87px','109px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.84)',1,1,3],
      id: 'Q3-Pomodoro',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q3-Pomodoro.png','0px','0px']
   },
   {
      rect: ['159px','573px','100px','147px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.84)',1,1,3],
      id: 'Q4-Fragola-1',
      transform: [[0,0],[],[],['0.44523','0.44523']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-1.png','0px','0px']
   },
   {
      rect: ['209px','526px','151px','206px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.84)',1,1,3],
      id: 'Q5-MelaBella',
      transform: [[0,0],[],[],['0.50497','0.50497']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   },
   {
      rect: ['46px','603px','281px','147px','auto','auto'],
      id: 'Q2-Cestino',
      transform: [[0,0],[],['2'],['1.00632','1.05897'],['0%','0%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q2-Cestino.png','0px','0px']
   },
   {
      rect: ['166px','23px','300px','411px','auto','auto'],
      id: 'Q0-Testa',
      transform: [[0,0],['-11'],[],['1.02667','1.02667'],['64.674%','83.5499%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q0-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Fragola-1}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["transform", "scaleY", '0.44523'],
            ["style", "left", '159px'],
            ["transform", "scaleX", '0.44523'],
            ["style", "top", '573px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_Q2-CavoloBIG1}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["style", "top", '565px'],
            ["style", "left", '88px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${_Q2-Braccio}": [
            ["style", "-webkit-transform-origin", [9.57,88.62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [9.57,88.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [9.57,88.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [9.57,88.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [9.57,88.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.00859'],
            ["transform", "rotateZ", '-12deg'],
            ["transform", "scaleX", '1.00859'],
            ["style", "left", '385px'],
            ["style", "top", '222px']
         ],
         "${_Q2-Corpo}": [
            ["style", "top", '305px'],
            ["style", "left", '43px']
         ],
         "${_Q3-Pomodoro}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["style", "top", '574px'],
            ["style", "left", '146px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${_Q1-Carota}": [
            ["style", "-webkit-transform-origin", [42.03,83.96], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["style", "left", '42px'],
            ["transform", "rotateZ", '-15deg'],
            ["style", "top", '478px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_Q2-Coda}": [
            ["style", "top", '293px'],
            ["style", "left", '8px']
         ],
         "${_Q5-MelaBella}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["transform", "scaleY", '0.50497'],
            ["style", "left", '209px'],
            ["transform", "scaleX", '0.50497'],
            ["style", "top", '526px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_Q2-Cestino}": [
            ["style", "top", '603px'],
            ["transform", "scaleY", '1.05897'],
            ["transform", "skewX", '2deg'],
            ["transform", "scaleX", '1.00632'],
            ["style", "left", '46px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q0-Testa}": [
            ["style", "top", '23px'],
            ["transform", "scaleX", '1.02667'],
            ["transform", "scaleY", '1.02667'],
            ["transform", "rotateZ", '-11deg'],
            ["style", "height", '411px'],
            ["style", "-webkit-transform-origin", [64.67,83.55], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '166px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '759px'],
            ["style", "width", '577px']
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
         "${symbolSelector}": [
            ["style", "height", '44px'],
            ["style", "width", '362px']
         ],
         "${_Q0-NOME}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
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
