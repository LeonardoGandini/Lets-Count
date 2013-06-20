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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
            font:['luckiest-guy, sans-serif',40,"rgba(210,14,14,1.00)","normal","none",""]
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
            rect:['-249px','582px','1200px','605px','auto','auto'],
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
            id:'WellDone',
            type:'text',
            rect:['64px','15px','900px','118px','auto','auto'],
            text:"Well done,<br>you can count to 5 !",
            align:"center",
            userClass:"welldone",
            font:['luckiest-guy, sans-serif',68,"rgba(255,0,0,1.00)","400","none","normal"],
            textShadow:["rgba(232,255,14,1.00)",3,3,10],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            transform:[]
         },
         {
            id:'next',
            type:'text',
            rect:['408px','504px','602px','36px','auto','auto'],
            text:"download now the next chapter:",
            align:"center",
            userClass:"next",
            font:['luckiest-guy, sans-serif',31,"rgba(6,0,222,1.00)","400","none","normal"],
            textShadow:["rgba(255,255,255,1.00)",3,3,2],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            transform:[]
         },
         {
            id:'nextCopy',
            type:'text',
            rect:['408px','572px','602px','46px','auto','auto'],
            text:"\"Let's Count! 6-10\"",
            align:"center",
            userClass:"next",
            font:['luckiest-guy, sans-serif',54,"rgba(6,0,222,1.00)","400","none","normal"],
            textShadow:["rgba(255,255,255,1.00)",3,3,2],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],
            transform:[]
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
            id:'tre',
            symbolName:'tre'
         },
         {
            id:'musica',
            symbolName:'musica'
         },
         {
            id:'quattro',
            symbolName:'quattro'
         },
         {
            id:'Scoia',
            symbolName:'Scoia'
         },
         {
            id:'due',
            symbolName:'due'
         },
         {
            id:'uno',
            symbolName:'uno'
         },
         {
            id:'cinque',
            symbolName:'cinque'
         },
         {
            id:'HOME_butt',
            symbolName:'HOME_butt'
         }
         ]
      },
   states: {
      "Base State": {
         "${_nextCopy}": [
            ["style", "line-height", '40px'],
            ["color", "color", 'rgba(6,0,222,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '408px'],
            ["transform", "scaleY", '1'],
            ["style", "word-spacing", '12px'],
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '54px'],
            ["style", "top", '572px'],
            ["style", "text-decoration", 'none'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '46px'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "width", '602px']
         ],
         "${_WellDone}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "text-decoration", 'none'],
            ["color", "color", 'rgba(255,0,0,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '64px'],
            ["style", "width", '900px'],
            ["style", "top", '15px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "font-size", '68px'],
            ["style", "line-height", '75px'],
            ["subproperty", "textShadow.color", 'rgba(232,255,14,1.00)'],
            ["style", "word-spacing", '12px'],
            ["style", "font-weight", '400']
         ],
         "${_next}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "color", 'rgba(6,0,222,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '408px'],
            ["transform", "scaleY", '1'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "textShadow.blur", '2px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '31px'],
            ["style", "top", '504px'],
            ["style", "word-spacing", '12px'],
            ["style", "font-weight", 'normal'],
            ["style", "height", '36px'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '602px'],
            ["style", "line-height", '43px']
         ],
         "${_uno}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "left", '429px'],
            ["transform", "scaleY", '0.88744'],
            ["style", "top", '182px']
         ],
         "${_tre}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "left", '775px'],
            ["transform", "scaleY", '0.88744'],
            ["style", "top", '182px']
         ],
         "${_cinque}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "left", '516px'],
            ["transform", "scaleY", '0.88744'],
            ["style", "top", '316px']
         ],
         "${_quattro}": [
            ["transform", "scaleX", '0.90011'],
            ["style", "left", '691px'],
            ["transform", "scaleY", '0.88744'],
            ["style", "top", '316px']
         ],
         "${_musica}": [
            ["style", "top", '673px'],
            ["transform", "scaleY", '0.92312'],
            ["style", "left", '922px'],
            ["transform", "scaleX", '0.92312']
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
            ["style", "left", '602px'],
            ["transform", "scaleY", '0.88744'],
            ["style", "top", '182px']
         ],
         "${_Text}": [
            ["style", "top", '786px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(210,14,14,1.00)'],
            ["style", "font-family", 'luckiest-guy, sans-serif'],
            ["style", "left", '-272px'],
            ["style", "font-size", '40px']
         ],
         "${_Q3-Tereno}": [
            ["style", "top", '582px'],
            ["transform", "scaleY", '1.26942'],
            ["transform", "scaleX", '1.26942'],
            ["style", "background-size", [101.6,101.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-249px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '662px'],
            ["transform", "scaleY", '0.7403'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.7403'],
            ["style", "left", '831px']
         ],
         "${_AudioTappeto}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0'],
            ["style", "left", '-267px'],
            ["style", "overflow", 'hidden']
         ],
         "${_G-Cielo-Finale}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            { id: "eid369", tween: [ "style", "${_tre}", "top", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_HOME_butt}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_HOME_butt}", "left", '831px', { fromValue: '831px'}], position: 0, duration: 0 },
            { id: "eid363", tween: [ "style", "${_due}", "top", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "transform", "${_Scoia}", "scaleX", '0.80429', { fromValue: '0.80429'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid345", tween: [ "transform", "${_cinque}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "transform", "${_tre}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_quattro}", "left", '691px', { fromValue: '691px'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "transform", "${_quattro}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid383", tween: [ "style", "${_quattro}", "top", '316px', { fromValue: '316px'}], position: 0, duration: 0 },
            { id: "eid366", tween: [ "transform", "${_due}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Scoia}", "-webkit-transform-origin", [54.36,96.98], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.36,96.98]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid465", tween: [ "style", "${_Scoia}", "-moz-transform-origin", [54.36,96.98], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.36,96.98]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid466", tween: [ "style", "${_Scoia}", "-ms-transform-origin", [54.36,96.98], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.36,96.98]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid467", tween: [ "style", "${_Scoia}", "msTransformOrigin", [54.36,96.98], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.36,96.98]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid468", tween: [ "style", "${_Scoia}", "-o-transform-origin", [54.36,96.98], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.36,96.98]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid382", tween: [ "style", "${_cinque}", "top", '316px', { fromValue: '316px'}], position: 0, duration: 0 },
            { id: "eid375", tween: [ "style", "${_tre}", "left", '775px', { fromValue: '775px'}], position: 0, duration: 0 },
            { id: "eid359", tween: [ "style", "${_uno}", "top", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.7403', { fromValue: '0.7403'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_Scoia}", "left", '-47px', { fromValue: '-47px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid358", tween: [ "transform", "${_quattro}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "transform", "${_uno}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid367", tween: [ "style", "${_due}", "left", '602px', { fromValue: '602px'}], position: 0, duration: 0 },
            { id: "eid387", tween: [ "style", "${_cinque}", "left", '516px', { fromValue: '516px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "transform", "${_Scoia}", "scaleY", '0.80429', { fromValue: '0.80429'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid164", tween: [ "style", "${_Scoia}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid346", tween: [ "transform", "${_cinque}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_musica}", "scaleX", '0.92312', { fromValue: '0.92312'}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "transform", "${_uno}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "transform", "${_tre}", "scaleY", '0.88744', { fromValue: '0.88744'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "transform", "${_musica}", "scaleY", '0.92312', { fromValue: '0.92312'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_musica}", "left", '922px', { fromValue: '922px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_musica}", "top", '673px', { fromValue: '673px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.7403', { fromValue: '0.7403'}], position: 0, duration: 0 },
            { id: "eid365", tween: [ "transform", "${_due}", "scaleX", '0.90011', { fromValue: '0.90011'}], position: 0, duration: 0 },
            { id: "eid360", tween: [ "style", "${_uno}", "left", '429px', { fromValue: '429px'}], position: 0, duration: 0 }         ]
      }
   }
},
"musica": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
"HOME_butt": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      fill: ['rgba(0,0,0,0)','images/5_col.png','0px','0px']
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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
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
      type: 'image',
      id: 'Q2-Braccio',
      rect: ['385px','222px','191px','166px','auto','auto'],
      transform: [[0,0],['-12'],[],['1.00859','1.00859'],['9.5747%','88.6159%']],
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
      type: 'image',
      id: 'Q2-Cestino',
      rect: ['46px','603px','281px','147px','auto','auto'],
      transform: [[0,0],[],['2'],['1.00632','1.05897'],['0%','0%']],
      fill: ['rgba(0,0,0,0)','images/Q2-Cestino.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q0-Testa',
      rect: ['166px','23px','300px','411px','auto','auto'],
      transform: [[0,0],['-11'],[],['1.02667','1.02667'],['64.674%','83.5499%']],
      fill: ['rgba(0,0,0,0)','images/Q0-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Fragola-1}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["transform", "scaleY", '0.44523'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["transform", "scaleX", '0.44523'],
            ["style", "top", '573px'],
            ["style", "left", '159px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${_Q2-CavoloBIG1}": [
            ["style", "top", '565px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["style", "left", '88px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
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
         "${_Q2-Coda}": [
            ["style", "top", '293px'],
            ["style", "left", '8px']
         ],
         "${_Q0-Testa}": [
            ["style", "top", '23px'],
            ["style", "height", '411px'],
            ["transform", "scaleY", '1.02667'],
            ["transform", "rotateZ", '-11deg'],
            ["transform", "scaleX", '1.02667'],
            ["style", "-webkit-transform-origin", [64.67,83.55], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [64.67,83.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '166px'],
            ["style", "width", '300px']
         ],
         "${_Q1-Carota}": [
            ["style", "-webkit-transform-origin", [42.03,83.96], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.03,83.96],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["transform", "rotateZ", '-15deg'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["style", "top", '478px'],
            ["style", "left", '42px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '759px'],
            ["style", "width", '577px']
         ],
         "${_Q5-MelaBella}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["transform", "scaleY", '0.50497'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["transform", "scaleX", '0.50497'],
            ["style", "top", '526px'],
            ["style", "left", '209px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px']
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
         "${_Q3-Pomodoro}": [
            ["style", "top", '574px'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["style", "left", '146px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.84)'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_Q2-Corpo}": [
            ["style", "top", '305px'],
            ["style", "left", '43px']
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
})(jQuery, AdobeEdge, "QuadroFinale");
