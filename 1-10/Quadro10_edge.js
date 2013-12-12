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
            id:'Q7-erba-fiore',
            type:'image',
            rect:['132px','174px','37px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px']
         },
         {
            id:'Q7-erba-fioreCopy',
            type:'image',
            rect:['311px','225px','37px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px']
         },
         {
            id:'Q7-erba-fioreCopy2',
            type:'image',
            rect:['0px','185px','37px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px']
         },
         {
            id:'Q10-erba-back',
            type:'image',
            rect:['244px','67px','811px','371px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q10-erba-back.png",'0px','0px']
         },
         {
            id:'Q10-erba-front',
            type:'image',
            rect:['-23px','210px','1078px','270px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q10-erba-front.png",'0px','0px']
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['395px','174px','auto','auto','auto','auto'],
            transform:[[],['5'],[],['0.76844','0.76844']]
         },
         {
            id:'Q10-cespuglio',
            type:'image',
            rect:['-14px','270px','1060px','534px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q10-cespuglio.png",'0px','0px']
         },
         {
            id:'scoiattolo-braccio-front',
            type:'rect',
            rect:['546px','356px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.92106','0.99928']]
         },
         {
            id:'foglielb',
            display:'none',
            type:'rect',
            rect:['-6px','460px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.9569','0.9569']]
         },
         {
            id:'foglielbCopy',
            display:'none',
            type:'rect',
            rect:['-12px','333px','auto','auto','auto','auto'],
            transform:[[],['-30'],[],['0.67241','0.67241']]
         },
         {
            id:'foglielbCopy2',
            display:'none',
            type:'rect',
            rect:['267px','424px','auto','auto','auto','auto'],
            transform:[[],['-66'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy3',
            display:'none',
            type:'rect',
            rect:['251px','558px','auto','auto','auto','auto'],
            transform:[[],['-46'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy4',
            display:'none',
            type:'rect',
            rect:['527px','504px','auto','auto','auto','auto'],
            transform:[[],['27'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy5',
            display:'none',
            type:'rect',
            rect:['446px','639px','auto','auto','auto','auto'],
            transform:[[],['-5'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy6',
            display:'none',
            type:'rect',
            rect:['685px','569px','auto','auto','auto','auto'],
            transform:[[],['-117'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy7',
            display:'none',
            type:'rect',
            rect:['678px','438px','auto','auto','auto','auto'],
            transform:[[],['-82'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy8',
            display:'none',
            type:'rect',
            rect:['823px','440px','auto','auto','auto','auto'],
            transform:[[],['-49'],[],['0.80758','0.80758']]
         },
         {
            id:'foglielbCopy9',
            display:'none',
            type:'rect',
            rect:['839px','626px','auto','auto','auto','auto'],
            transform:[[],['-33'],[],['0.80758','0.80758']]
         },
         {
            id:'fiore',
            type:'rect',
            rect:['9px','599px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy9',
            type:'rect',
            rect:['182px','659px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy',
            type:'rect',
            rect:['184px','327px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],[],[],['0.95506','0.95506']]
         },
         {
            id:'fioreCopy4',
            type:'rect',
            rect:['439px','471px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy5',
            type:'rect',
            rect:['348px','653px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],[],[],['0.95506','0.95506']]
         },
         {
            id:'fioreCopy6',
            type:'rect',
            rect:['646px','647px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy8',
            type:'rect',
            rect:['786px','647px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],[],[],['0.78652','0.78652']]
         },
         {
            id:'fioreCopy7',
            type:'rect',
            rect:['943px','517px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy2',
            type:'rect',
            rect:['131px','556px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],[],[],['0.85393','0.85393']]
         },
         {
            id:'fioreCopy3',
            type:'rect',
            rect:['179px','449px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],[],[],['1.06742','1.06742']]
         },
         {
            id:'lb1',
            type:'rect',
            rect:['-68px','211px','auto','auto','auto','auto'],
            userClass:"lb1",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb2',
            type:'rect',
            rect:['-68px','350px','auto','auto','auto','auto'],
            userClass:"lb2",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb3',
            type:'rect',
            rect:['209px','309px','auto','auto','auto','auto'],
            userClass:"lb3",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb4',
            type:'rect',
            rect:['209px','446px','auto','auto','auto','auto'],
            userClass:"lb4",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb5',
            type:'rect',
            rect:['623px','331px','auto','auto','auto','auto'],
            userClass:"lb5",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb7',
            type:'rect',
            rect:['480px','386px','auto','auto','auto','auto'],
            userClass:"lb7",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb6',
            type:'rect',
            rect:['416px','516px','auto','auto','auto','auto'],
            userClass:"lb6",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb8',
            type:'rect',
            rect:['655px','475px','auto','auto','auto','auto'],
            userClass:"lb8",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb9',
            type:'rect',
            rect:['766px','330px','auto','auto','auto','auto'],
            userClass:"lb9",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'lb10',
            type:'rect',
            rect:['782px','517px','auto','auto','auto','auto'],
            userClass:"lb10",
            transform:[[],[],[],['0.48628','0.48628']]
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['458px','317px','47px','47px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb1',
            type:'rect',
            rect:['56px','330px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb2',
            type:'rect',
            rect:['56px','465px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb3',
            type:'rect',
            rect:['334px','431px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb4',
            type:'rect',
            rect:['334px','566px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb5',
            type:'rect',
            rect:['751px','456px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb6',
            type:'rect',
            rect:['526px','635px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb7',
            type:'rect',
            rect:['610px','511px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb8',
            type:'rect',
            rect:['758px','576px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb9',
            type:'rect',
            rect:['891px','455px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-lb10',
            type:'rect',
            rect:['912px','640px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['49px','-232px','auto','auto','auto','auto']
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'fioreCopy2',
            symbolName:'fiore'
         },
         {
            id:'scoiattolo-braccio-front',
            symbolName:'scoiattolo-braccio-front'
         },
         {
            id:'foglielbCopy4',
            symbolName:'foglielb'
         },
         {
            id:'lb10',
            symbolName:'fiorelb'
         },
         {
            id:'fioreCopy8',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy7',
            symbolName:'fiore'
         },
         {
            id:'lb5',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy9',
            symbolName:'foglielb'
         },
         {
            id:'fioreCopy9',
            symbolName:'fiore'
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
            id:'lb8',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy7',
            symbolName:'foglielb'
         },
         {
            id:'foglielbCopy',
            symbolName:'foglielb'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'lb7',
            symbolName:'fiorelb'
         },
         {
            id:'fioreCopy6',
            symbolName:'fiore'
         },
         {
            id:'lb3',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy5',
            symbolName:'foglielb'
         },
         {
            id:'lb6',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy2',
            symbolName:'foglielb'
         },
         {
            id:'lb2',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy6',
            symbolName:'foglielb'
         },
         {
            id:'fiore',
            symbolName:'fiore'
         },
         {
            id:'lb9',
            symbolName:'fiorelb'
         },
         {
            id:'foglielbCopy3',
            symbolName:'foglielb'
         },
         {
            id:'lb4',
            symbolName:'fiorelb'
         },
         {
            id:'lb1',
            symbolName:'fiorelb'
         },
         {
            id:'fioreCopy3',
            symbolName:'fiore'
         },
         {
            id:'foglielbCopy8',
            symbolName:'foglielb'
         },
         {
            id:'fioreCopy5',
            symbolName:'fiore'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'fioreCopy4',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy',
            symbolName:'fiore'
         },
         {
            id:'foglielb',
            symbolName:'foglielb'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_fioreCopy6}": [
            ["style", "left", '646px'],
            ["style", "top", '647px']
         ],
         "${_lb9}": [
            ["transform", "scaleX", '0.48628'],
            ["style", "top", '330px'],
            ["transform", "scaleY", '0.48628'],
            ["style", "left", '766px']
         ],
         "${_trigger-coda}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '47px'],
            ["style", "opacity", '0'],
            ["style", "left", '458px'],
            ["style", "width", '47px']
         ],
         "${_Q7-erba-fioreCopy2}": [
            ["style", "top", '185px'],
            ["style", "height", '40px'],
            ["style", "left", '0px'],
            ["style", "width", '37px']
         ],
         "${_Q10-cespuglio}": [
            ["style", "top", '270px'],
            ["style", "height", '534px'],
            ["style", "left", '-14px'],
            ["style", "width", '1060px']
         ],
         "${_foglielbCopy2}": [
            ["style", "top", '424px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-66deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '267px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_trigger-lb8}": [
            ["style", "top", '576px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '758px'],
            ["style", "width", '44px']
         ],
         "${_trigger-lb2}": [
            ["style", "top", '465px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "width", '44px']
         ],
         "${_fiore}": [
            ["style", "top", '599px'],
            ["style", "left", '9px']
         ],
         "${_foglielbCopy8}": [
            ["style", "top", '440px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-49deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '823px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_fioreCopy8}": [
            ["style", "top", '647px'],
            ["transform", "scaleY", '0.78652'],
            ["style", "left", '786px'],
            ["transform", "scaleX", '0.78652']
         ],
         "${_trigger-lb6}": [
            ["style", "top", '635px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '526px'],
            ["style", "width", '44px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '49px']
         ],
         "${_fioreCopy5}": [
            ["style", "top", '653px'],
            ["transform", "scaleY", '0.95506'],
            ["style", "left", '348px'],
            ["transform", "scaleX", '0.95506']
         ],
         "${_fioreCopy4}": [
            ["style", "left", '439px'],
            ["style", "top", '471px']
         ],
         "${_scoiattolo-braccio-front}": [
            ["transform", "scaleX", '0.92106'],
            ["transform", "scaleY", '0.99928'],
            ["style", "left", '546px'],
            ["style", "top", '356px']
         ],
         "${_foglielb}": [
            ["style", "top", '460px'],
            ["transform", "scaleY", '0.9569'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.9569'],
            ["style", "left", '-6px'],
            ["style", "display", 'none']
         ],
         "${_trigger-lb10}": [
            ["style", "top", '640px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '912px'],
            ["style", "width", '44px']
         ],
         "${_lb4}": [
            ["transform", "scaleX", '0.48628'],
            ["transform", "scaleY", '0.48628'],
            ["style", "left", '209px'],
            ["style", "top", '446px']
         ],
         "${_lb3}": [
            ["style", "top", '309px'],
            ["transform", "scaleX", '0.48628'],
            ["style", "left", '209px'],
            ["transform", "scaleY", '0.48628']
         ],
         "${_foglielbCopy}": [
            ["style", "top", '333px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.67241'],
            ["transform", "rotateZ", '-30deg'],
            ["transform", "scaleX", '0.67241'],
            ["style", "display", 'none'],
            ["style", "left", '-12px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_lb2}": [
            ["style", "top", '350px'],
            ["style", "left", '-68px'],
            ["transform", "scaleY", '0.48628'],
            ["transform", "scaleX", '0.48628']
         ],
         "${_Q10-erba-front}": [
            ["style", "top", '210px'],
            ["style", "height", '270px'],
            ["style", "left", '-23px'],
            ["style", "width", '1078px']
         ],
         "${_foglielbCopy6}": [
            ["style", "top", '569px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-117deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '685px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_foglielbCopy9}": [
            ["style", "top", '626px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-33deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '839px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_NUVOLA}": [
            ["style", "top", '16px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '-23px']
         ],
         "${_foglielbCopy5}": [
            ["style", "top", '639px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-5deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '446px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_trigger-lb1}": [
            ["style", "top", '330px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "width", '44px']
         ],
         "${_lb7}": [
            ["style", "top", '386px'],
            ["transform", "scaleX", '0.48628'],
            ["style", "left", '480px'],
            ["transform", "scaleY", '0.48628']
         ],
         "${_fioreCopy7}": [
            ["style", "left", '943px'],
            ["style", "top", '517px']
         ],
         "${_lb1}": [
            ["transform", "scaleX", '0.48628'],
            ["style", "top", '211px'],
            ["transform", "scaleY", '0.48628'],
            ["style", "left", '-68px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_foglielbCopy4}": [
            ["style", "top", '504px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '27deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '527px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_foglielbCopy7}": [
            ["style", "top", '438px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-82deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '678px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_foglielbCopy3}": [
            ["style", "top", '558px'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleY", '0.80758'],
            ["transform", "rotateZ", '-46deg'],
            ["transform", "scaleX", '0.80758'],
            ["style", "display", 'none'],
            ["style", "left", '251px'],
            ["style", "-webkit-transform-origin", [73.36,18.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.36,18.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_lb8}": [
            ["transform", "scaleX", '0.48628'],
            ["transform", "scaleY", '0.48628'],
            ["style", "left", '632px'],
            ["style", "top", '455px']
         ],
         "${_trigger-lb9}": [
            ["style", "top", '455px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '891px'],
            ["style", "width", '44px']
         ],
         "${_fioreCopy}": [
            ["style", "top", '327px'],
            ["transform", "scaleY", '0.95506'],
            ["style", "left", '184px'],
            ["transform", "scaleX", '0.95506']
         ],
         "${_fioreCopy3}": [
            ["style", "top", '449px'],
            ["transform", "scaleY", '1.06742'],
            ["style", "left", '179px'],
            ["transform", "scaleX", '1.06742']
         ],
         "${_trigger-lb5}": [
            ["style", "top", '456px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '751px'],
            ["style", "width", '44px']
         ],
         "${_lb6}": [
            ["style", "top", '515px'],
            ["style", "left", '396px'],
            ["transform", "scaleY", '0.48628'],
            ["transform", "scaleX", '0.48628']
         ],
         "${_fioreCopy2}": [
            ["style", "top", '556px'],
            ["transform", "scaleY", '0.85393'],
            ["style", "left", '131px'],
            ["transform", "scaleX", '0.85393']
         ],
         "${_Q10-erba-back}": [
            ["style", "top", '67px'],
            ["style", "height", '371px'],
            ["style", "left", '244px'],
            ["style", "width", '811px']
         ],
         "${_fioreCopy9}": [
            ["style", "top", '659px'],
            ["style", "left", '182px']
         ],
         "${_Q7-erba-fioreCopy}": [
            ["style", "height", '40px'],
            ["style", "top", '225px'],
            ["style", "left", '311px'],
            ["style", "width", '37px']
         ],
         "${_trigger-lb4}": [
            ["style", "top", '566px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '334px'],
            ["style", "width", '44px']
         ],
         "${_lb5}": [
            ["transform", "scaleX", '0.48628'],
            ["style", "top", '331px'],
            ["transform", "scaleY", '0.48628'],
            ["style", "left", '623px']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '174px'],
            ["transform", "scaleY", '0.76844'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.76844'],
            ["style", "left", '395px']
         ],
         "${_trigger-lb3}": [
            ["style", "top", '431px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '334px'],
            ["style", "width", '44px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_trigger-lb7}": [
            ["style", "top", '511px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '610px'],
            ["style", "width", '44px']
         ],
         "${_lb10}": [
            ["style", "top", '517px'],
            ["style", "left", '782px'],
            ["transform", "scaleY", '0.48628'],
            ["transform", "scaleX", '0.48628']
         ],
         "${_Q7-erba-fiore}": [
            ["style", "top", '174px'],
            ["style", "height", '40px'],
            ["style", "left", '132px'],
            ["style", "width", '37px']
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
            { id: "eid4557", tween: [ "style", "${_foglielb}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4325", tween: [ "style", "${_NUVOLA}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4550", tween: [ "style", "${_foglielbCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4548", tween: [ "style", "${_foglielbCopy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4549", tween: [ "style", "${_foglielbCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4556", tween: [ "style", "${_foglielbCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4553", tween: [ "style", "${_foglielbCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4555", tween: [ "style", "${_foglielbCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4554", tween: [ "style", "${_foglielbCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4552", tween: [ "style", "${_foglielbCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4551", tween: [ "style", "${_foglielbCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid4547", tween: [ "style", "${_NUVOLA}", "top", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "swing" },
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
      rect: ['157px','488px','350px','281px','auto','auto'],
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
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-6',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum6.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-7',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum7.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-8',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum8.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-9',
         userClass: 'numeris',
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/svgNum9.svg','0px','0px']
      },
      {
         rect: ['0px','0px','350px','281px','auto','auto'],
         id: 'Num-10',
         userClass: 'numeris',
         type: 'image',
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
            ["motion", "location", '332.41663999024px 628.7529296875px'],
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
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '350px']
         ],
         "${_Num-8}": [
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
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[332.42,628.75,0,0],[94.37,220.26,23.83,-330.13,61.97,-858.66],[322.3,123.08,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[322.3,123.07,0,0],[625.03,120.87,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[625.03,120.87,46.54,379.81],[525,948.01,0,0]]], position: 2158, duration: 269 },
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
      fill: ['rgba(0,0,0,0)','images/Fumello-Q10.png','0px','0px','445.97px','286.67px']
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
         "${_HOME_butt}": [
            ["style", "top", '72px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
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
         "${_Num-8}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '773px'],
            ["style", "width", '90px']
         ],
         "${_musica}": [
            ["style", "top", '5px'],
            ["transform", "scaleX", '0.65'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '60px']
         ],
         "${_Numero_3}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '31.26%'],
            ["style", "width", '90px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px'],
            ["style", "top", '82px']
         ],
         "${_Num-6}": [
            ["style", "top", '72px'],
            ["style", "height", '70px'],
            ["style", "left", '606px'],
            ["style", "width", '90px']
         ],
         "${_Numero_2}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.54%'],
            ["style", "width", '90px']
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
      rect: ['139px','72px','231px','267px','auto','auto'],
      id: 'Coda',
      transform: [[],['7'],[],['-0.88538','0.84166']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      rect: ['319px','90px','182px','121px','auto','auto'],
      id: 'Q10-Scoiattolo-Braccio-SX',
      transform: [[],[],[],['0.85224','0.85224']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Braccio-SX.png','0px','0px']
   },
   {
      id: 'Q10-Scoiattolo-Corpo',
      type: 'image',
      rect: ['142px','146px','236px','357px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Corpo.png','0px','0px']
   },
   {
      rect: ['156px','-121px','215px','357px','auto','auto'],
      id: 'Q10-Scoiattolo-Testa',
      transform: [[],[],[],['1.01981','1.01981']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q10-Scoiattolo-Corpo}": [
            ["style", "top", '146px'],
            ["style", "height", '357px'],
            ["style", "left", '142px'],
            ["style", "width", '236px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Q10-Scoiattolo-Braccio-SX}": [
            ["style", "top", '90px'],
            ["transform", "scaleX", '0.85224'],
            ["transform", "scaleY", '0.85224'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '121px'],
            ["style", "-webkit-transform-origin", [4.43,78.65], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.43,78.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.43,78.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.43,78.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.43,78.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '319px'],
            ["style", "width", '182px']
         ],
         "${_Q10-Scoiattolo-Testa}": [
            ["style", "top", '-121px'],
            ["transform", "scaleX", '1.01981'],
            ["transform", "scaleY", '1.01981'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '357px'],
            ["style", "-webkit-transform-origin", [50.5,84.32], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.5,84.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.5,84.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.5,84.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.5,84.32],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '156px'],
            ["style", "width", '215px']
         ],
         "${_Coda}": [
            ["style", "top", '56px'],
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5574,
         autoPlay: false,
         labels: {
            "coda": 184,
            "ani": 1045,
            "finale": 2788
         },
         timeline: [
            { id: "eid4474", tween: [ "transform", "${_Q10-Scoiattolo-Testa}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 1045, duration: 516, easing: "easeInOutQuad" },
            { id: "eid4475", tween: [ "transform", "${_Q10-Scoiattolo-Testa}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1561, duration: 439, easing: "easeInOutQuad" },
            { id: "eid4531", tween: [ "transform", "${_Q10-Scoiattolo-Testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 3000, duration: 826, easing: "easeInOutQuad" },
            { id: "eid4532", tween: [ "transform", "${_Q10-Scoiattolo-Testa}", "rotateZ", '-13deg', { fromValue: '11deg'}], position: 3826, duration: 543, easing: "easeInOutQuad" },
            { id: "eid4533", tween: [ "transform", "${_Q10-Scoiattolo-Testa}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 4369, duration: 628, easing: "easeInOutQuad" },
            { id: "eid4052", tween: [ "transform", "${_Coda}", "rotateZ", '11deg', { fromValue: '7deg'}], position: 184, duration: 125, easing: "easeInOutQuad" },
            { id: "eid4053", tween: [ "transform", "${_Coda}", "rotateZ", '-4deg', { fromValue: '11deg'}], position: 309, duration: 112, easing: "easeInOutQuad" },
            { id: "eid4054", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 421, duration: 79, easing: "easeInOutQuad" },
            { id: "eid4109", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 1045, duration: 272, easing: "easeInOutQuad" },
            { id: "eid4110", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 1317, duration: 350, easing: "easeInOutQuad" },
            { id: "eid4111", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 1667, duration: 203, easing: "easeInOutQuad" },
            { id: "eid4518", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 3000, duration: 177, easing: "easeInOutQuad" },
            { id: "eid4519", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 3177, duration: 227, easing: "easeInOutQuad" },
            { id: "eid4520", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 3404, duration: 132, easing: "easeInOutQuad" },
            { id: "eid4521", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 3536, duration: 177, easing: "easeInOutQuad" },
            { id: "eid4522", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 3713, duration: 227, easing: "easeInOutQuad" },
            { id: "eid4523", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 3940, duration: 132, easing: "easeInOutQuad" },
            { id: "eid4524", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 4072, duration: 177, easing: "easeInOutQuad" },
            { id: "eid4525", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 4249, duration: 227, easing: "easeInOutQuad" },
            { id: "eid4526", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 4476, duration: 132, easing: "easeInOutQuad" },
            { id: "eid4527", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 4608, duration: 177, easing: "easeInOutQuad" },
            { id: "eid4528", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 4785, duration: 227, easing: "easeInOutQuad" },
            { id: "eid4529", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 5012, duration: 132, easing: "easeInOutQuad" },
            { id: "eid4477", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1317, duration: 189, easing: "easeInOutQuad" },
            { id: "eid4478", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '4deg', { fromValue: '-13deg'}], position: 1506, duration: 186, easing: "easeInOutQuad" },
            { id: "eid4479", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-13deg', { fromValue: '4deg'}], position: 1692, duration: 151, easing: "easeInOutQuad" },
            { id: "eid4480", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '13deg', { fromValue: '-13deg'}], position: 1843, duration: 163, easing: "easeInOutQuad" },
            { id: "eid4481", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '0deg', { fromValue: '13deg'}], position: 2006, duration: 141, easing: "easeInOutQuad" },
            { id: "eid4493", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 2788, duration: 323, easing: "easeInOutQuad" },
            { id: "eid4494", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '30deg', { fromValue: '-30deg'}], position: 3111, duration: 284, easing: "easeInOutQuad" },
            { id: "eid4505", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 3395, duration: 323, easing: "easeInOutQuad" },
            { id: "eid4506", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '30deg', { fromValue: '-30deg'}], position: 3718, duration: 284, easing: "easeInOutQuad" },
            { id: "eid4507", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 4002, duration: 323, easing: "easeInOutQuad" },
            { id: "eid4508", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '30deg', { fromValue: '-30deg'}], position: 4325, duration: 284, easing: "easeInOutQuad" },
            { id: "eid4509", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 4609, duration: 323, easing: "easeInOutQuad" },
            { id: "eid4510", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '30deg', { fromValue: '-30deg'}], position: 4932, duration: 284, easing: "easeInOutQuad" },
            { id: "eid4517", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-SX}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 5216, duration: 284, easing: "easeInOutQuad" }         ]
      }
   }
},
"ladybug": {
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
      id: 'Q10-coccinella-ali',
      type: 'image',
      rect: ['0px','0px','81px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-coccinella-ali.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q10-coccinella',
      type: 'image',
      rect: ['17px','10px','128px','136px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-coccinella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q10-coccinella}": [
            ["style", "top", '10px'],
            ["style", "height", '136px'],
            ["style", "left", '17px'],
            ["style", "width", '128px']
         ],
         "${_Q10-coccinella-ali}": [
            ["style", "top", '0px'],
            ["style", "height", '85px'],
            ["style", "left", '0px'],
            ["style", "width", '81px']
         ],
         "${symbolSelector}": [
            ["style", "height", '146px'],
            ["style", "width", '145px']
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
"fiorelb": {
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
      id: 'ladybug',
      type: 'rect',
      rect: ['79px','65px','auto','auto','auto','auto']
   },
   {
      id: 'Q10-fiore',
      type: 'image',
      rect: ['148px','45px','187px','166px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-fiore.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'ladybug',
      symbolName: 'ladybug'
   }   ]
   },
   states: {
      "Base State": {
         "${_ladybug}": [
            ["motion", "location", '151.50002544038px 137.99994792419px']
         ],
         "${_Q10-fiore}": [
            ["style", "top", '45px'],
            ["style", "height", '166px'],
            ["style", "-webkit-transform-origin", [52.79,54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.79,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.79,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.79,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.79,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '76px'],
            ["style", "width", '187px']
         ],
         "${symbolSelector}": [
            ["style", "height", '287px'],
            ["style", "width", '263px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1937,
         autoPlay: false,
         labels: {
            "uscita": 750
         },
         timeline: [
            { id: "eid4451", tween: [ "motion", "${_ladybug}", [[151.5,138,0,0],[212.27,24.22,85.87,-110.12]]], position: 750, duration: 250, easing: "easeInQuad" },
            { id: "eid4455", tween: [ "motion", "${_ladybug}", [[212.27,24.22,38.38,-49.22],[224.5,-21.4,0,0]]], position: 1000, duration: 129, easing: "easeOutQuad" },
            { id: "eid4452", tween: [ "motion", "${_ladybug}", [[224.5,-21.4,0,0],[152.5,-5.23,-41.99,-8.31]]], position: 1129, duration: 121, easing: "easeInQuad" },
            { id: "eid4456", tween: [ "motion", "${_ladybug}", [[152.5,-5.23,-66.27,-13.12],[148.5,-36.44,0,0]]], position: 1250, duration: 170, easing: "easeOutQuad" },
            { id: "eid4453", tween: [ "motion", "${_ladybug}", [[148.5,-36.44,0,0],[182.08,-73,38.56,-24.01]]], position: 1420, duration: 80, easing: "easeInQuad" },
            { id: "eid4457", tween: [ "motion", "${_ladybug}", [[182.08,-73,86.88,-54.09],[246.69,-97.58,0,0]]], position: 1500, duration: 156, easing: "easeOutQuad" },
            { id: "eid4454", tween: [ "motion", "${_ladybug}", [[246.69,-97.58,0,0],[301.21,-99.16,-17.71,52.7]]], position: 1656, duration: 94, easing: "easeInQuad" },
            { id: "eid4458", tween: [ "motion", "${_ladybug}", [[301.21,-99.16,-40.79,121.39],[200.5,39.88,0,0]]], position: 1750, duration: 187, easing: "easeOutQuad" }         ]
      }
   }
},
"fiore": {
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
      transform: [[0,0],[],[],[],['54%','54%']],
      id: 'Q10-fiore2Copy5',
      type: 'image',
      rect: ['0px','0px','89px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-fiore.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q10-fiore2Copy5}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '78px'],
            ["style", "-webkit-transform-origin", [54,54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [54,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54,54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '89px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '89px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 928.22881201244,
         autoPlay: false,
         timeline: [
            { id: "eid4467", tween: [ "transform", "${_Q10-fiore2Copy5}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 928, easing: "easeOutElastic" }         ]
      }
   }
},
"scoiattolo-braccio-front": {
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
      rect: ['-20px','-7px','89px','131px','auto','auto'],
      id: 'Q10-Scoiattolo-Braccio-DX',
      transform: [[],[],[],['0.85','0.85']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q10-Scoiattolo-Braccio-DX2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q10-Scoiattolo-Braccio-DX}": [
            ["style", "top", '-7px'],
            ["transform", "scaleX", '0.85'],
            ["transform", "scaleY", '0.85'],
            ["transform", "rotateZ", '-13deg'],
            ["style", "height", '131px'],
            ["style", "-webkit-transform-origin", [91.25,10.94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [91.25,10.94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [91.25,10.94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [91.25,10.94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [91.25,10.94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-20px'],
            ["style", "width", '89px']
         ],
         "${symbolSelector}": [
            ["style", "height", '111px'],
            ["style", "width", '76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3912,
         autoPlay: false,
         labels: {
            "ani": 38,
            "finale": 2250
         },
         timeline: [
            { id: "eid4483", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '-26deg', { fromValue: '-13deg'}], position: 340, duration: 594, easing: "easeInOutQuad" },
            { id: "eid4484", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '-13deg', { fromValue: '-26deg'}], position: 935, duration: 728, easing: "easeInOutQuad" },
            { id: "eid4486", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '-33deg', { fromValue: '-13deg'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4487", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '3deg', { fromValue: '-33deg'}], position: 2750, duration: 350, easing: "easeInOutQuad" },
            { id: "eid4488", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '-41deg', { fromValue: '3deg'}], position: 3100, duration: 369, easing: "easeInOutQuad" },
            { id: "eid4489", tween: [ "transform", "${_Q10-Scoiattolo-Braccio-DX}", "rotateZ", '-13deg', { fromValue: '-41deg'}], position: 3469, duration: 443, easing: "easeInOutQuad" }         ]
      }
   }
},
"foglielb": {
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
      rect: ['0px','-13px','108px','65px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Q10-fiore-fogliaCopy3',
      transform: [[0,0],['-23']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q10-fiore-foglia2.png','0px','0px']
   },
   {
      transform: [[0,0],['-89']],
      id: 'Q10-fiore-fogliaCopy2',
      type: 'image',
      rect: ['7px','-22px','108px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q10-fiore-foglia2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q10-fiore-fogliaCopy2}": [
            ["style", "-webkit-transform-origin", [92.1,58.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [92.1,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [92.1,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [92.1,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [92.1,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-89deg'],
            ["style", "height", '65px'],
            ["style", "top", '-22px'],
            ["style", "left", '7px'],
            ["style", "width", '108px']
         ],
         "${symbolSelector}": [
            ["style", "height", '116px'],
            ["style", "width", '134px']
         ],
         "${_Q10-fiore-fogliaCopy3}": [
            ["style", "-webkit-transform-origin", [90.16,51.88], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [90.16,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [90.16,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [90.16,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [90.16,51.88],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-23deg'],
            ["style", "height", '65px'],
            ["style", "top", '-13px'],
            ["style", "left", '0px'],
            ["style", "width", '108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1436,
         autoPlay: false,
         labels: {
            "normale": 250
         },
         timeline: [
            { id: "eid4538", tween: [ "transform", "${_Q10-fiore-fogliaCopy3}", "rotateZ", '-44deg', { fromValue: '-23deg'}], position: 250, duration: 500, easing: "swing" },
            { id: "eid4541", tween: [ "transform", "${_Q10-fiore-fogliaCopy3}", "rotateZ", '4deg', { fromValue: '-44deg'}], position: 750, duration: 250, easing: "swing" },
            { id: "eid4542", tween: [ "transform", "${_Q10-fiore-fogliaCopy3}", "rotateZ", '-23deg', { fromValue: '4deg'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid4539", tween: [ "transform", "${_Q10-fiore-fogliaCopy2}", "rotateZ", '-74deg', { fromValue: '-89deg'}], position: 436, duration: 500, easing: "swing" },
            { id: "eid4540", tween: [ "transform", "${_Q10-fiore-fogliaCopy2}", "rotateZ", '-115deg', { fromValue: '-74deg'}], position: 936, duration: 250, easing: "swing" },
            { id: "eid4543", tween: [ "transform", "${_Q10-fiore-fogliaCopy2}", "rotateZ", '-89deg', { fromValue: '-115deg'}], position: 1186, duration: 250, easing: "swing" }         ]
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
})(jQuery, AdobeEdge, "Quadro-10");
