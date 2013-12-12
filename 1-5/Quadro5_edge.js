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
            id:'Q5-Prato',
            type:'image',
            rect:['-11px','253px','1050px','535px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Prato.png",'0px','0px']
         },
         {
            id:'Mela-Easter-Egg',
            type:'rect',
            rect:['773','596','auto','auto','auto','auto'],
            userClass:"melaeaster"
         },
         {
            id:'Q5-Cespuglio',
            type:'image',
            rect:['51px','283px','302px','178px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Cespuglio.png",'0px','0px'],
            transform:[[],['-3']]
         },
         {
            id:'FioreBlu',
            type:'rect',
            rect:['238','370','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreGialllo',
            type:'rect',
            rect:['181','301','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'FioreRosa',
            type:'rect',
            rect:['101','372','auto','auto','auto','auto'],
            userClass:"fioreani"
         },
         {
            id:'Q5-Albero',
            type:'image',
            rect:['511px','-119px','652px','793px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Albero.png",'0px','0px']
         },
         {
            id:'Farfalle',
            type:'rect',
            rect:['65','96','auto','auto','auto','auto']
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['308','96','auto','auto','auto','auto'],
            userClass:"scoiattolo"
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['326px','274px','196px','224px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Coda.png",'0px','0px'],
            userClass:"codatrigger",
            transform:[[],['-5'],[],['-1.035']]
         },
         {
            id:'Q5-Terra',
            type:'image',
            rect:['-676px','406px','1679px','456px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Terra.png",'0px','0px'],
            transform:[[],[],[],['0.31','0.31']]
         },
         {
            id:'Q5-Pala',
            type:'image',
            rect:['-43px','223px','181px','542px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Pala.png",'0px','0px'],
            transform:[[],['-16'],[],['0.66','0.66']]
         },
         {
            id:'Bird-Pala',
            type:'rect',
            rect:['52','475px','auto','auto','auto','auto'],
            userClass:"BirdPala"
         },
         {
            id:'Verme',
            type:'rect',
            rect:['127','582','auto','auto','auto','auto'],
            userClass:"verme"
         },
         {
            id:'Q5-TerraToppa',
            type:'image',
            rect:['-381px','460px','934px','355px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-TerraToppa.png",'0px','0px'],
            transform:[[],[],[],['0.31','0.31']]
         },
         {
            id:'Mela-Statica',
            type:'rect',
            rect:['662','4','auto','auto','auto','auto'],
            userClass:"MelaStat"
         },
         {
            id:'Mela-Statica-2',
            type:'rect',
            rect:['662','4','auto','auto','auto','auto'],
            userClass:"MelaStat"
         },
         {
            id:'Mela-Statica-3',
            type:'rect',
            rect:['662','4','auto','auto','auto','auto'],
            userClass:"MelaStat"
         },
         {
            id:'Mela-Statica-4',
            type:'rect',
            rect:['662','4','auto','auto','auto','auto'],
            userClass:"MelaStat"
         },
         {
            id:'Mela-Bella-1',
            type:'rect',
            rect:['570','60','auto','auto','auto','auto']
         },
         {
            id:'Mela-Bella-2',
            type:'rect',
            rect:['767','126','auto','auto','auto','auto']
         },
         {
            id:'Mela-Bella-3',
            type:'rect',
            rect:['681','-1','auto','auto','auto','auto']
         },
         {
            id:'Mela-Bella-4',
            type:'rect',
            rect:['855','45','auto','auto','auto','auto']
         },
         {
            id:'Mela-Bella-5',
            type:'rect',
            rect:['967','70','auto','auto','auto','auto']
         },
         {
            id:'MelaTrigger1',
            type:'rect',
            rect:['560px','51px','87px','91px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'MelaTrigger2',
            type:'rect',
            rect:['752px','118px','87px','91px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'MelaTrigger3',
            type:'rect',
            rect:['664px','6px','87px','91px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'MelaTrigger4',
            type:'rect',
            rect:['839px','35px','87px','91px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'MelaTrigger5',
            type:'rect',
            rect:['952px','60px','87px','91px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers"
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['11','36px','auto','auto','auto','auto']
         },
         {
            id:'Q5-Cestino2',
            type:'image',
            rect:['307px','486px','216px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Cestino.png",'0px','0px']
         },
         {
            id:'Trigger-Verme',
            type:'rect',
            rect:['125px','596px','80px','77px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggerverme"
         },
         {
            id:'Trigger-Mela-Easter',
            type:'rect',
            rect:['766px','593px','64px','56px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"Trigger-Mela-Easter"
         },
         {
            id:'Bird-Tereno',
            type:'rect',
            rect:['893px','563px','auto','auto','auto','auto'],
            userClass:"BirdTerra",
            transform:[[],[],[],['0.859','0.859']]
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['49px','-226px','auto','auto','auto','auto']
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-68px','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'Bird-Pala',
            symbolName:'Bird-Pala'
         },
         {
            id:'FioreRosa',
            symbolName:'FioreRosa'
         },
         {
            id:'Mela-Bella-2',
            symbolName:'Mela-Bella-2'
         },
         {
            id:'Mela-Easter-Egg',
            symbolName:'Mela-Easter-Egg'
         },
         {
            id:'Farfalle',
            symbolName:'Farfalle'
         },
         {
            id:'Mela-Statica-2',
            symbolName:'Mela-Statica'
         },
         {
            id:'Mela-Bella-1',
            symbolName:'Mela-Bella-1'
         },
         {
            id:'Mela-Statica',
            symbolName:'Mela-Statica'
         },
         {
            id:'Mela-Bella-4',
            symbolName:'Mela-Bella-4'
         },
         {
            id:'Verme',
            symbolName:'Verme'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         },
         {
            id:'Bird-Tereno',
            symbolName:'Bird-Tereno'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'Mela-Bella-5',
            symbolName:'Mela-Bella-5'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'Mela-Statica-3',
            symbolName:'Mela-Statica'
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
            id:'FioreBlu',
            symbolName:'FioreBlu'
         },
         {
            id:'Mela-Statica-4',
            symbolName:'Mela-Statica'
         },
         {
            id:'Mela-Bella-3',
            symbolName:'Mela-Bella-3'
         },
         {
            id:'FioreGialllo',
            symbolName:'FioreGialllo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Mela-Statica}": [
            ["style", "top", '18px'],
            ["style", "left", '777px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_Mela-Statica-2}": [
            ["style", "top", '83px'],
            ["style", "left", '667px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_NUVOLA}": [
            ["style", "left", '80px'],
            ["style", "top", '-15px']
         ],
         "${_codatrigger}": [
            ["style", "top", '274px'],
            ["transform", "scaleX", '-1.03488'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '224px'],
            ["style", "opacity", '0'],
            ["style", "left", '326px'],
            ["style", "width", '196px']
         ],
         "${_Menu}": [
            ["style", "top", '697px'],
            ["style", "left", '-68px']
         ],
         "${_numerazio}": [
            ["style", "top", '36px']
         ],
         "${_Trigger-Verme}": [
            ["style", "top", '596px'],
            ["style", "height", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '125px'],
            ["style", "width", '80px']
         ],
         "${_Trigger-Mela-Easter}": [
            ["style", "top", '593px'],
            ["style", "height", '56px'],
            ["style", "opacity", '0'],
            ["style", "left", '766px'],
            ["style", "width", '64px']
         ],
         "${_Verme}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.58)'],
            ["subproperty", "filter.drop-shadow.offsetH", '-7px'],
            ["subproperty", "filter.drop-shadow.blur", '10px']
         ],
         "${_Mela-Statica-3}": [
            ["style", "top", '-15px'],
            ["style", "left", '922px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_MelaTrigger2}": [
            ["style", "opacity", '0']
         ],
         "${_MelaTrigger1}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '560px']
         ],
         "${_MelaTrigger3}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '664px']
         ],
         "${_Q5-TerraToppa}": [
            ["style", "top", '460px'],
            ["transform", "scaleX", '0.31'],
            ["transform", "scaleY", '0.31'],
            ["style", "left", '-381px']
         ],
         "${_MelaTrigger5}": [
            ["style", "top", '60px'],
            ["style", "opacity", '0'],
            ["style", "left", '952px']
         ],
         "${_Q5-Pala}": [
            ["style", "top", '223px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '-16deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-43px']
         ],
         "${_Bird-Tereno}": [
            ["style", "top", '563px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px'],
            ["subproperty", "filter.contrast", '0.99'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.70)'],
            ["transform", "scaleX", '0.85925'],
            ["transform", "scaleY", '0.85925'],
            ["style", "left", '893px'],
            ["subproperty", "filter.drop-shadow.blur", '6px']
         ],
         "${_Bird-Pala}": [
            ["style", "top", '474px'],
            ["subproperty", "filter.drop-shadow.offsetH", '-2px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.24)'],
            ["subproperty", "filter.drop-shadow.blur", '3px']
         ],
         "${_Q5-Cestino2}": [
            ["style", "height", '148px'],
            ["style", "top", '486px'],
            ["style", "left", '307px'],
            ["style", "width", '216px']
         ],
         "${_FUMELLO}": [
            ["style", "left", '49px'],
            ["style", "top", '-226px']
         ],
         "${_MelaTrigger4}": [
            ["style", "top", '35px'],
            ["style", "opacity", '0'],
            ["style", "left", '839px']
         ],
         "${_Mela-Bella-1}": [
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Q5-Terra}": [
            ["style", "top", '406px'],
            ["transform", "scaleX", '0.31'],
            ["transform", "scaleY", '0.31'],
            ["style", "left", '-676px']
         ],
         "${_Cielo2}": [
            ["style", "top", '-42px'],
            ["style", "height", '522px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Mela-Statica-4}": [
            ["style", "top", '131px'],
            ["style", "left", '886px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Q5-Albero}": [
            ["style", "height", '793px'],
            ["style", "top", '-119px'],
            ["style", "left", '511px'],
            ["style", "width", '652px']
         ],
         "${_Q5-Cespuglio}": [
            ["style", "top", '283px'],
            ["transform", "rotateZ", '-3deg'],
            ["style", "height", '178px'],
            ["style", "left", '51px'],
            ["style", "width", '302px']
         ],
         "${_Q5-Prato}": [
            ["style", "height", '535px'],
            ["style", "top", '253px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 21500,
         autoPlay: true,
         timeline: [
            { id: "eid11663", tween: [ "style", "${_Mela-Statica-2}", "top", '98px', { fromValue: '83px'}], position: 0, duration: 21500 },
            { id: "eid10094", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.blur", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid10091", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.color", 'rgba(0,0,0,0.24)', { fromValue: 'rgba(0,0,0,0.24)'}], position: 0, duration: 0 },
            { id: "eid10032", tween: [ "subproperty", "${_Mela-Statica-2}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10099", tween: [ "subproperty", "${_Bird-Tereno}", "filter.contrast", '0.99', { fromValue: '0.99'}], position: 0, duration: 0 },
            { id: "eid10033", tween: [ "subproperty", "${_Mela-Statica}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10035", tween: [ "style", "${_Mela-Statica}", "left", '777px', { fromValue: '777px'}], position: 0, duration: 0 },
            { id: "eid10089", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.offsetH", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
            { id: "eid10093", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.color", 'rgba(0,0,0,0.58)', { fromValue: 'rgba(0,0,0,0.58)'}], position: 0, duration: 0 },
            { id: "eid10092", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.offsetH", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid8862", tween: [ "style", "${_NUVOLA}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid10031", tween: [ "subproperty", "${_Mela-Statica-4}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10037", tween: [ "style", "${_Mela-Statica-4}", "left", '886px', { fromValue: '886px'}], position: 0, duration: 0 },
            { id: "eid4941", tween: [ "style", "${_NUVOLA}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10038", tween: [ "style", "${_Mela-Statica-4}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid10090", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid11484", tween: [ "style", "${_Bird-Pala}", "top", '474px', { fromValue: '474px'}], position: 0, duration: 0 },
            { id: "eid10013", tween: [ "style", "${_Mela-Statica-3}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid10026", tween: [ "subproperty", "${_Mela-Bella-1}", "filter.saturate", '1.05', { fromValue: '1.05'}], position: 0, duration: 0 },
            { id: "eid10025", tween: [ "subproperty", "${_Mela-Bella-1}", "filter.hue-rotate", '30deg', { fromValue: '30deg'}], position: 0, duration: 0 },
            { id: "eid10036", tween: [ "style", "${_Mela-Statica}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid10101", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.color", 'rgba(0,0,0,0.70)', { fromValue: 'rgba(0,0,0,0.70)'}], position: 0, duration: 0 },
            { id: "eid11662", tween: [ "style", "${_Mela-Statica-2}", "left", '651px', { fromValue: '667px'}], position: 0, duration: 21500 },
            { id: "eid10034", tween: [ "subproperty", "${_Mela-Statica-3}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10102", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.blur", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid10100", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid10012", tween: [ "style", "${_Mela-Statica-3}", "left", '922px', { fromValue: '922px'}], position: 0, duration: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
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
      id: 'Fumello',
      type: 'image',
      rect: ['0px','0px','446px','287px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Fumello-Q5.png','0px','0px','445.97px','286.67px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['-8px','172px','466px','287px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[0,0],[],[],['0.84','0.84']],
      id: 'playCopy',
      userClass: 'playvoce',
      rect: ['333px','140px','auto','auto','auto','auto'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'playCopy',
      symbolName: 'play'
   }   ]
   },
   states: {
      "Base State": {
         "${_Fumello}": [
            ["style", "height", '287px'],
            ["style", "top", '-8px'],
            ["style", "left", '0px'],
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
         "${_playCopy}": [
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
            { id: "eid99", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11729", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11730", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11731", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11732", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11644", tween: [ "style", "${_playCopy}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid11645", tween: [ "style", "${_playCopy}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" },
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
            ["style", "top", '22px'],
            ["style", "height", '132px'],
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
            { id: "eid185", tween: [ "style", "${_Nuvola}", "top", '-83px', { fromValue: '22px'}], position: 0, duration: 105000, easing: "swing" },
            { id: "eid183", tween: [ "style", "${_Nuvola}", "left", '1003px', { fromValue: '-180px'}], position: 0, duration: 105000, easing: "swing" }         ]
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
      rect: ['156px','33px','194px','239px','auto','auto'],
      id: 'Coda',
      transform: [[0,0],['-8'],[],['-1.013']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Coda.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '239px'],
            ["style", "width", '194px']
         ],
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [13,90], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13,90],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '-1.0129'],
            ["transform", "rotateZ", '-8deg'],
            ["style", "height", '239px'],
            ["style", "top", '33px'],
            ["style", "left", '156px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 37481,
         autoPlay: false,
         labels: {
            "animaziocoda": 1289
         },
         timeline: [
            { id: "eid9656", tween: [ "transform", "${_Coda}", "rotateZ", '-14deg', { fromValue: '-8deg'}], position: 1289, duration: 154, easing: "easeInOutQuad" },
            { id: "eid9657", tween: [ "transform", "${_Coda}", "rotateZ", '9deg', { fromValue: '-14deg'}], position: 1443, duration: 284, easing: "easeInOutQuad" },
            { id: "eid9658", tween: [ "transform", "${_Coda}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 1727, duration: 223, easing: "easeInOutQuad" }         ]
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
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid9030", tween: [ "transform", "${_Coda2}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 363, easing: "easeInCirc" },
            { id: "eid9163", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '-13deg'}], position: 363, duration: 166, easing: "easeOutCirc" },
            { id: "eid9031", tween: [ "transform", "${_Coda2}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 529, duration: 221, easing: "easeInOutCirc" }         ]
      }
   }
},
"Verme": {
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
      id: 'Q5-Verme',
      rect: ['-42px','-163px','183px','250px','auto','auto'],
      transform: [[0,0],['25'],[],['0.3','0.3']],
      fill: ['rgba(0,0,0,0)','images/Q5-Verme.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-Verme}": [
            ["style", "top", '-157px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "rotateZ", '42deg'],
            ["transform", "scaleX", '0.3'],
            ["style", "left", '-77px'],
            ["style", "-webkit-transform-origin", [32.92,93.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [32.92,93.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [32.92,93.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [32.92,93.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [32.92,93.82],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '91px'],
            ["style", "width", '81px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1415,
         autoPlay: false,
         timeline: [
            { id: "eid10391", tween: [ "transform", "${_Q5-Verme}", "rotateZ", '18deg', { fromValue: '42deg'}], position: 0, duration: 599, easing: "easeInOutQuad" },
            { id: "eid10392", tween: [ "transform", "${_Q5-Verme}", "rotateZ", '42deg', { fromValue: '18deg'}], position: 599, duration: 816, easing: "easeInOutQuad" },
            { id: "eid10379", tween: [ "style", "${_Q5-Verme}", "top", '-162px', { fromValue: '-157px'}], position: 0, duration: 599, easing: "easeInOutQuad" },
            { id: "eid10381", tween: [ "style", "${_Q5-Verme}", "top", '-163px', { fromValue: '-162px'}], position: 599, duration: 263, easing: "easeInQuad" },
            { id: "eid10394", tween: [ "style", "${_Q5-Verme}", "top", '-157px', { fromValue: '-163px'}], position: 861, duration: 553, easing: "easeOutQuad" },
            { id: "eid10378", tween: [ "style", "${_Q5-Verme}", "left", '-36px', { fromValue: '-77px'}], position: 0, duration: 599, easing: "easeInOutQuad" },
            { id: "eid10380", tween: [ "style", "${_Q5-Verme}", "left", '-42px', { fromValue: '-36px'}], position: 599, duration: 263, easing: "easeInQuad" },
            { id: "eid10393", tween: [ "style", "${_Q5-Verme}", "left", '-77px', { fromValue: '-42px'}], position: 861, duration: 553, easing: "easeOutQuad" }         ]
      }
   }
},
"Mela-Statica": {
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
      transform: [[0,0],['8'],[],['0.34','0.34']],
      id: 'Q5-Mela',
      type: 'image',
      rect: ['-33px','-24px','153px','176px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Mela.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '66px'],
            ["style", "width", '60px']
         ],
         "${_Q5-Mela}": [
            ["style", "top", '-24px'],
            ["transform", "scaleY", '0.34'],
            ["transform", "rotateZ", '8deg'],
            ["transform", "scaleX", '0.34'],
            ["style", "left", '-33px'],
            ["style", "-webkit-transform-origin", [38.71,23.39], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.71,23.39],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.71,23.39],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.71,23.39],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.71,23.39],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 578,
         autoPlay: false,
         timeline: [
            { id: "eid9989", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '37deg', { fromValue: '8deg'}], position: 0, duration: 289, easing: "swing" },
            { id: "eid9990", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '8deg', { fromValue: '37deg'}], position: 289, duration: 289, easing: "swing" }         ]
      }
   }
},
"Mela-Bella-1": {
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
      id: 'Q5-MelaBella',
      type: 'image',
      rect: ['0px','0px','52px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-MelaBella}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '71px'],
            ["style", "left", '0px'],
            ["style", "width", '52px']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: false,
         timeline: [
            { id: "eid11107", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 43, easing: "easeOutQuad" },
            { id: "eid11108", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '-16deg', { fromValue: '24deg'}], position: 43, duration: 69, easing: "easeOutQuad" },
            { id: "eid11109", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '-1deg', { fromValue: '-16deg'}], position: 112, duration: 112, easing: "easeOutQuad" },
            { id: "eid11115", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '358deg', { fromValue: '-1deg'}], position: 419, duration: 455, easing: "easeOutQuad" },
            { id: "eid11126", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '723deg', { fromValue: '358deg'}], position: 1250, duration: 323, easing: "easeOutQuad" },
            { id: "eid11127", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '690deg', { fromValue: '723deg'}], position: 1573, duration: 70, easing: "easeOutQuad" },
            { id: "eid11128", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '720deg', { fromValue: '690deg'}], position: 1643, duration: 56, easing: "easeOutQuad" },
            { id: "eid11096", tween: [ "style", "${_Q5-MelaBella}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11113", tween: [ "style", "${_Q5-MelaBella}", "left", '-205px', { fromValue: '0px'}], position: 419, duration: 455, easing: "easeOutQuad" },
            { id: "eid11119", tween: [ "style", "${_Q5-MelaBella}", "left", '-127px', { fromValue: '-205px'}], position: 1250, duration: 323, easing: "easeOutQuad" },
            { id: "eid11122", tween: [ "style", "${_Q5-MelaBella}", "left", '-167px', { fromValue: '-127px'}], position: 1573, duration: 70, easing: "easeOutQuad" },
            { id: "eid11124", tween: [ "style", "${_Q5-MelaBella}", "left", '-121px', { fromValue: '-167px'}], position: 1643, duration: 56, easing: "easeOutQuad" },
            { id: "eid11097", tween: [ "style", "${_Q5-MelaBella}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11114", tween: [ "style", "${_Q5-MelaBella}", "top", '11px', { fromValue: '0px'}], position: 419, duration: 455, easing: "easeOutQuad" },
            { id: "eid11120", tween: [ "style", "${_Q5-MelaBella}", "top", '482px', { fromValue: '11px'}], position: 1250, duration: 323, easing: "easeOutQuad" },
            { id: "eid11123", tween: [ "style", "${_Q5-MelaBella}", "top", '425px', { fromValue: '482px'}], position: 1573, duration: 70, easing: "easeOutQuad" },
            { id: "eid11125", tween: [ "style", "${_Q5-MelaBella}", "top", '461px', { fromValue: '425px'}], position: 1643, duration: 56, easing: "easeOutQuad" }         ]
      }
   }
},
"FioreGialllo": {
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
      id: 'Q5-Fiore-Giallo',
      type: 'image',
      rect: ['0px','0px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Fiore-Giallo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '64px']
         ],
         "${_Q5-Fiore-Giallo}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '60px'],
            ["style", "-webkit-transform-origin", [51,48], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '64px']
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
            { id: "eid10044", tween: [ "transform", "${_Q5-Fiore-Giallo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 749 },
            { id: "eid10048", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleY", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10050", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleY", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" },
            { id: "eid10047", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleX", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10049", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleX", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" }         ]
      }
   }
},
"FioreRosa": {
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
      id: 'Q5-Fiore-Rosa',
      type: 'image',
      rect: ['0px','0px','66px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Fiore-Rosa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-Fiore-Rosa}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '66px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '66px'],
            ["style", "width", '66px']
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
            { id: "eid10053", tween: [ "transform", "${_Q5-Fiore-Rosa}", "scaleY", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10054", tween: [ "transform", "${_Q5-Fiore-Rosa}", "scaleY", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" },
            { id: "eid10055", tween: [ "transform", "${_Q5-Fiore-Rosa}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 749 },
            { id: "eid10051", tween: [ "transform", "${_Q5-Fiore-Rosa}", "scaleX", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10052", tween: [ "transform", "${_Q5-Fiore-Rosa}", "scaleX", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" }         ]
      }
   }
},
"FioreBlu": {
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
      id: 'Q5-Fiore-Azzurro',
      type: 'image',
      rect: ['0px','0px','70px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Fiore-Azzurro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '70px']
         ],
         "${_Q5-Fiore-Azzurro}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '68px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '70px']
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
            { id: "eid10056", tween: [ "transform", "${_Q5-Fiore-Azzurro}", "scaleX", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10057", tween: [ "transform", "${_Q5-Fiore-Azzurro}", "scaleX", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" },
            { id: "eid10058", tween: [ "transform", "${_Q5-Fiore-Azzurro}", "scaleY", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10059", tween: [ "transform", "${_Q5-Fiore-Azzurro}", "scaleY", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" },
            { id: "eid10060", tween: [ "transform", "${_Q5-Fiore-Azzurro}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 749 }         ]
      }
   }
},
"Bird-Pala": {
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
      id: 'G-Bird-Gambe',
      type: 'image',
      rect: ['26px','50px','30px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Bird-Gambe.png','0px','0px']
   },
   {
      id: 'Q5-Bird-1',
      type: 'image',
      rect: ['0px','0px','87px','61px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Bird-1.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q1-Nota',
      rect: ['77px','-44px','76px','95px','auto','auto'],
      transform: [[0,0],[],[],['0.377','0.51']],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q1-NotaCopy3',
      rect: ['62px','-44px','76px','95px','auto','auto'],
      transform: [[0,0],['35'],[],['0.377','0.51']],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q1-NotaCopy4',
      rect: ['85px','-126px','76px','95px','auto','auto'],
      transform: [[0,0],['-34'],[],['0.377','0.51']],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-Bird-1}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '61px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '87px']
         ],
         "${_Q1-NotaCopy3}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "rotateZ", '35deg'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '115px']
         ],
         "${symbolSelector}": [
            ["style", "height", '79px'],
            ["style", "width", '87px']
         ],
         "${_G-Bird-Gambe}": [
            ["style", "height", '29px'],
            ["style", "top", '50px'],
            ["style", "left", '26px'],
            ["style", "width", '30px']
         ],
         "${_Q1-NotaCopy4}": [
            ["style", "top", '-126px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "rotateZ", '-34deg'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '85px']
         ],
         "${_Q1-Nota}": [
            ["style", "top", '-44px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0'],
            ["style", "left", '77px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1288.42734375,
         autoPlay: false,
         timeline: [
            { id: "eid10249", tween: [ "style", "${_Q1-NotaCopy3}", "opacity", '0.9', { fromValue: '0.000000'}], position: 308, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10250", tween: [ "style", "${_Q1-NotaCopy3}", "opacity", '0.89', { fromValue: '0.9'}], position: 579, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10251", tween: [ "style", "${_Q1-NotaCopy3}", "opacity", '0', { fromValue: '0.89'}], position: 644, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10117", tween: [ "style", "${_Q1-Nota}", "opacity", '0.9', { fromValue: '0.000000'}], position: 92, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10120", tween: [ "style", "${_Q1-Nota}", "opacity", '0.89', { fromValue: '0.9'}], position: 363, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10126", tween: [ "style", "${_Q1-Nota}", "opacity", '0', { fromValue: '0.89'}], position: 428, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10213", tween: [ "transform", "${_Q1-Nota}", "scaleX", '0.5', { fromValue: '0.32'}], position: 92, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10215", tween: [ "transform", "${_Q1-Nota}", "scaleX", '0.51', { fromValue: '0.5'}], position: 363, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10217", tween: [ "transform", "${_Q1-Nota}", "scaleX", '0.32', { fromValue: '0.51'}], position: 428, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10214", tween: [ "transform", "${_Q1-Nota}", "scaleY", '0.5', { fromValue: '0.32'}], position: 92, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10216", tween: [ "transform", "${_Q1-Nota}", "scaleY", '0.51', { fromValue: '0.5'}], position: 363, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10218", tween: [ "transform", "${_Q1-Nota}", "scaleY", '0.32', { fromValue: '0.51'}], position: 428, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10252", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleY", '0.5', { fromValue: '0.32'}], position: 308, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10253", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleY", '0.51', { fromValue: '0.5'}], position: 579, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10254", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleY", '0.32', { fromValue: '0.51'}], position: 644, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10246", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.5', { fromValue: '0.32'}], position: 308, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10247", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.51', { fromValue: '0.5'}], position: 579, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10248", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.32', { fromValue: '0.51'}], position: 644, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10255", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.5', { fromValue: '0.32'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10256", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.51', { fromValue: '0.5'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10257", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.32', { fromValue: '0.51'}], position: 898, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10110", tween: [ "style", "${_Q5-Bird-1}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid11733", tween: [ "style", "${_Q5-Bird-1}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid11734", tween: [ "style", "${_Q5-Bird-1}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid11735", tween: [ "style", "${_Q5-Bird-1}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid11736", tween: [ "style", "${_Q5-Bird-1}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10108", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 439, easing: "easeOutQuad" },
            { id: "eid10109", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '-7deg', { fromValue: '20deg'}], position: 439, duration: 285, easing: "easeOutQuad" },
            { id: "eid10111", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 724, duration: 564, easing: "easeOutQuad" },
            { id: "eid10261", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.5', { fromValue: '0.32'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10262", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.51', { fromValue: '0.5'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10263", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.32', { fromValue: '0.51'}], position: 898, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10258", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0.9', { fromValue: '0.000000'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10259", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0.89', { fromValue: '0.9'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10260", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0', { fromValue: '0.89'}], position: 898, duration: 195, easing: "easeInOutQuad" }         ]
      }
   }
},
"Bird-Tereno": {
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
      id: 'G-Bird-Gambe2',
      rect: ['2px','79px','100px','102px','auto','auto'],
      transform: [[0,0],[],[],['0.437','0.442']],
      fill: ['rgba(0,0,0,0)','images/G-Bird-Gambe.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q5-Bird-3',
      rect: ['-1px','-3px','123px','91px','auto','auto'],
      transform: [[0,0],[],[],['0.976','0.976']],
      fill: ['rgba(0,0,0,0)','images/Q5-Bird-3.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.543','0.537']],
      rect: ['-82px','-70px','76px','95px','auto','auto'],
      id: 'Q1-Nota2',
      opacity: 0,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q1-Nota2Copy4',
      rect: ['-42px','-109px','76px','95px','auto','auto'],
      transform: [[0,0],['39'],[],['0.543','0.537']],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q1-Nota2Copy5',
      rect: ['-78px','-146px','76px','95px','auto','auto'],
      transform: [[0,0],['-34'],[],['0.543','0.537']],
      fill: ['rgba(0,0,0,0)','images/Q1-Nota.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_G-Bird-Gambe2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.4418'],
            ["transform", "scaleX", '0.43666'],
            ["style", "left", '2px'],
            ["style", "top", '79px']
         ],
         "${_Q1-Nota2}": [
            ["style", "top", '-70px'],
            ["transform", "scaleY", '0.31635'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0'],
            ["style", "left", '-82px']
         ],
         "${symbolSelector}": [
            ["style", "height", '124px'],
            ["style", "width", '120px']
         ],
         "${_Q5-Bird-3}": [
            ["style", "-webkit-transform-origin", [43.59,98.3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43.59,98.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43.59,98.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43.59,98.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43.59,98.3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '91px'],
            ["transform", "scaleY", '0.97642'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.97642'],
            ["style", "top", '-3px'],
            ["style", "left", '-1px'],
            ["style", "width", '123px']
         ],
         "${_Q1-Nota2Copy4}": [
            ["style", "top", '-109px'],
            ["transform", "scaleY", '0.31635'],
            ["transform", "rotateZ", '39deg'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '-42px']
         ],
         "${_Q1-Nota2Copy5}": [
            ["style", "top", '-146px'],
            ["transform", "scaleY", '0.31635'],
            ["transform", "rotateZ", '-34deg'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '-78px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1180,
         autoPlay: false,
         timeline: [
            { id: "eid10207", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10208", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10209", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10154", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.5', { fromValue: '0.32'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10158", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.51', { fromValue: '0.5'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10160", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.32', { fromValue: '0.51'}], position: 366, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10136", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 305, easing: "easeInOutCirc" },
            { id: "eid10137", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '-5deg', { fromValue: '16deg'}], position: 305, duration: 473, easing: "easeInOutCirc" },
            { id: "eid10138", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 778, duration: 402, easing: "easeInOutCirc" },
            { id: "eid10204", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '0.99', { fromValue: '0.000000'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10205", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '1', { fromValue: '0.990000'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10206", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '0', { fromValue: '1'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10155", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10159", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10161", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 366, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10192", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.5', { fromValue: '0.32'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10193", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.51', { fromValue: '0.5'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10194", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.32', { fromValue: '0.51'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10195", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '0.99', { fromValue: '0.000000'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10196", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '1', { fromValue: '0.990000'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10197", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '0', { fromValue: '1'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10198", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10199", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10200", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10201", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.5', { fromValue: '0.32'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10202", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.51', { fromValue: '0.5'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10203", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.32', { fromValue: '0.51'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10149", tween: [ "style", "${_Q1-Nota2}", "opacity", '0.99', { fromValue: '0.000000'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10150", tween: [ "style", "${_Q1-Nota2}", "opacity", '1', { fromValue: '0.990000'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10151", tween: [ "style", "${_Q1-Nota2}", "opacity", '0', { fromValue: '1'}], position: 366, duration: 135, easing: "easeInOutCirc" }         ]
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
      transform: [[0,0],[],[],['0.972','0.972']],
      id: 'Coda',
      userClass: 'codaani',
      rect: ['25px','128px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      rect: ['280px','117px','106px','164px','auto','auto'],
      id: 'Q5-Braccio2',
      transform: [[0,0],['10']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q5-Braccio.png','0px','0px']
   },
   {
      id: 'Q5-Corpo2',
      type: 'image',
      rect: ['0px','235px','364px','335px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Corpo.png','0px','0px']
   },
   {
      rect: ['11px','0px','343px','293px','auto','auto'],
      id: 'Q5-Testa',
      transform: [[0,0],['15'],[],['0.9','0.9']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q5-Testa.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Coda',
      symbolName: 'Coda'
   }   ]
   },
   states: {
      "Base State": {
         "${_Coda}": [
            ["style", "top", '128px'],
            ["transform", "scaleY", '0.97167'],
            ["style", "left", '25px'],
            ["transform", "scaleX", '0.97167']
         ],
         "${_Q5-Braccio2}": [
            ["style", "top", '117px'],
            ["transform", "rotateZ", '10deg'],
            ["style", "height", '164px'],
            ["style", "-webkit-transform-origin", [22,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '280px'],
            ["style", "width", '106px']
         ],
         "${_Q5-Corpo2}": [
            ["style", "top", '235px'],
            ["style", "height", '335px'],
            ["style", "left", '0px'],
            ["style", "width", '364px']
         ],
         "${_Q5-Testa}": [
            ["style", "-webkit-transform-origin", [73,89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '0.9'],
            ["transform", "scaleY", '0.9'],
            ["transform", "rotateZ", '15deg'],
            ["style", "height", '293px'],
            ["style", "top", '0px'],
            ["style", "left", '11px'],
            ["style", "width", '343px']
         ],
         "${symbolSelector}": [
            ["style", "height", '570px'],
            ["style", "width", '412px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1041,
         autoPlay: false,
         timeline: [
            { id: "eid11146", tween: [ "transform", "${_Q5-Braccio2}", "rotateZ", '-4deg', { fromValue: '10deg'}], position: 0, duration: 394, easing: "easeOutQuad" },
            { id: "eid11147", tween: [ "transform", "${_Q5-Braccio2}", "rotateZ", '20deg', { fromValue: '-4deg'}], position: 394, duration: 285, easing: "easeOutQuad" },
            { id: "eid11148", tween: [ "transform", "${_Q5-Braccio2}", "rotateZ", '10deg', { fromValue: '20deg'}], position: 680, duration: 280, easing: "easeOutQuad" },
            { id: "eid11150", tween: [ "transform", "${_Q5-Testa}", "rotateZ", '2deg', { fromValue: '15deg'}], position: 0, duration: 441, easing: "easeOutQuad" },
            { id: "eid11152", tween: [ "transform", "${_Q5-Testa}", "rotateZ", '15deg', { fromValue: '2deg'}], position: 718, duration: 323, easing: "easeOutQuad" },
            { id: "eid11161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Coda}', [] ], ""], position: 979.4012920757 }         ]
      }
   }
},
"Mela-Easter-Egg": {
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
      rect: ['0px','0px','43px','49px','auto','auto'],
      filter: [0,29,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Q5-Mela',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q5-Mela.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-Mela}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["subproperty", "filter.hue-rotate", '29deg'],
            ["style", "height", '49px'],
            ["style", "left", '0px'],
            ["style", "width", '43px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '43px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 790,
         autoPlay: false,
         timeline: [
            { id: "eid10280", tween: [ "style", "${_Q5-Mela}", "left", '-6px', { fromValue: '0px'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10282", tween: [ "style", "${_Q5-Mela}", "left", '0px', { fromValue: '-6px'}], position: 459, duration: 331, easing: "easeOutBounce" },
            { id: "eid10281", tween: [ "style", "${_Q5-Mela}", "top", '-170px', { fromValue: '0px'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10283", tween: [ "style", "${_Q5-Mela}", "top", '0px', { fromValue: '-170px'}], position: 459, duration: 331, easing: "easeOutBounce" },
            { id: "eid10285", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10286", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '730deg', { fromValue: '360deg'}], position: 459, duration: 331, easing: "easeOutBounce" }         ]
      }
   }
},
"Mela-Bella-2": {
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
      id: 'Q5-MelaBella',
      type: 'image',
      rect: ['0px','0px','52px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-MelaBella}": [
            ["style", "top", '0px'],
            ["style", "width", '52px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '0.85']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1698.3666428721,
         autoPlay: false,
         timeline: [
            { id: "eid11220", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 48, easing: "easeOutQuad" },
            { id: "eid11221", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '-16deg', { fromValue: '24deg'}], position: 48, duration: 77, easing: "easeOutQuad" },
            { id: "eid11222", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '-1deg', { fromValue: '-16deg'}], position: 125, duration: 125, easing: "easeOutQuad" },
            { id: "eid11223", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '358deg', { fromValue: '-1deg'}], position: 390, duration: 455, easing: "easeOutQuad" },
            { id: "eid11224", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '723deg', { fromValue: '358deg'}], position: 1183, duration: 340, easing: "easeOutQuad" },
            { id: "eid11225", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '690deg', { fromValue: '723deg'}], position: 1523, duration: 73, easing: "easeOutQuad" },
            { id: "eid11226", tween: [ "transform", "${_Q5-MelaBella}", "rotateZ", '720deg', { fromValue: '690deg'}], position: 1597, duration: 59, easing: "easeOutQuad" },
            { id: "eid11215", tween: [ "style", "${_Q5-MelaBella}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11216", tween: [ "style", "${_Q5-MelaBella}", "left", '-394px', { fromValue: '0px'}], position: 390, duration: 455, easing: "easeOutQuad" },
            { id: "eid11217", tween: [ "style", "${_Q5-MelaBella}", "left", '-350px', { fromValue: '-394px'}], position: 1183, duration: 340, easing: "easeOutQuad" },
            { id: "eid11218", tween: [ "style", "${_Q5-MelaBella}", "left", '-356px', { fromValue: '-350px'}], position: 1523, duration: 73, easing: "easeOutQuad" },
            { id: "eid11219", tween: [ "style", "${_Q5-MelaBella}", "left", '-350px', { fromValue: '-356px'}], position: 1597, duration: 59, easing: "easeOutQuad" },
            { id: "eid11210", tween: [ "style", "${_Q5-MelaBella}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11211", tween: [ "style", "${_Q5-MelaBella}", "top", '-61px', { fromValue: '0px'}], position: 390, duration: 455, easing: "easeOutQuad" },
            { id: "eid11212", tween: [ "style", "${_Q5-MelaBella}", "top", '405px', { fromValue: '-61px'}], position: 1183, duration: 340, easing: "easeOutQuad" },
            { id: "eid11213", tween: [ "style", "${_Q5-MelaBella}", "top", '373px', { fromValue: '405px'}], position: 1523, duration: 73, easing: "easeOutQuad" },
            { id: "eid11214", tween: [ "style", "${_Q5-MelaBella}", "top", '406px', { fromValue: '373px'}], position: 1597, duration: 59, easing: "easeOutQuad" }         ]
      }
   }
},
"Mela-Bella-3": {
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
      id: 'Q5-MelaBellaCopy',
      type: 'image',
      rect: ['0px','0px','52px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '52px']
         ],
         "${_Q5-MelaBellaCopy}": [
            ["style", "top", '20px'],
            ["subproperty", "filter.saturate", '0.85'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '0px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: false,
         timeline: [
            { id: "eid11242", tween: [ "style", "${_Q5-MelaBellaCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11243", tween: [ "style", "${_Q5-MelaBellaCopy}", "left", '-343px', { fromValue: '0px'}], position: 401, duration: 465, easing: "easeOutQuad" },
            { id: "eid11244", tween: [ "style", "${_Q5-MelaBellaCopy}", "left", '-328px', { fromValue: '-343px'}], position: 1175, duration: 367, easing: "easeOutQuad" },
            { id: "eid11245", tween: [ "style", "${_Q5-MelaBellaCopy}", "left", '-303px', { fromValue: '-328px'}], position: 1542, duration: 79, easing: "easeOutQuad" },
            { id: "eid11246", tween: [ "style", "${_Q5-MelaBellaCopy}", "left", '-294px', { fromValue: '-303px'}], position: 1621, duration: 64, easing: "easeOutQuad" },
            { id: "eid11385", tween: [ "style", "${_Q5-MelaBellaCopy}", "top", '0px', { fromValue: '20px'}], position: 0, duration: 401, easing: "easeOutQuad" },
            { id: "eid11238", tween: [ "style", "${_Q5-MelaBellaCopy}", "top", '66px', { fromValue: '0px'}], position: 401, duration: 465, easing: "easeOutQuad" },
            { id: "eid11239", tween: [ "style", "${_Q5-MelaBellaCopy}", "top", '545px', { fromValue: '66px'}], position: 1175, duration: 367, easing: "easeOutQuad" },
            { id: "eid11240", tween: [ "style", "${_Q5-MelaBellaCopy}", "top", '480px', { fromValue: '545px'}], position: 1542, duration: 79, easing: "easeOutQuad" },
            { id: "eid11241", tween: [ "style", "${_Q5-MelaBellaCopy}", "top", '518px', { fromValue: '480px'}], position: 1621, duration: 64, easing: "easeOutQuad" },
            { id: "eid11247", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 47, easing: "easeOutQuad" },
            { id: "eid11248", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '-16deg', { fromValue: '24deg'}], position: 47, duration: 75, easing: "easeOutQuad" },
            { id: "eid11249", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '-1deg', { fromValue: '-16deg'}], position: 122, duration: 122, easing: "easeOutQuad" },
            { id: "eid11250", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '358deg', { fromValue: '-1deg'}], position: 401, duration: 465, easing: "easeOutQuad" },
            { id: "eid11251", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '723deg', { fromValue: '358deg'}], position: 1175, duration: 367, easing: "easeOutQuad" },
            { id: "eid11252", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '690deg', { fromValue: '723deg'}], position: 1542, duration: 79, easing: "easeOutQuad" },
            { id: "eid11253", tween: [ "transform", "${_Q5-MelaBellaCopy}", "rotateZ", '720deg', { fromValue: '690deg'}], position: 1621, duration: 64, easing: "easeOutQuad" }         ]
      }
   }
},
"Mela-Bella-4": {
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
      id: 'Q5-MelaBellaCopy2',
      type: 'image',
      rect: ['0px','0px','52px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-MelaBellaCopy2}": [
            ["style", "top", '0px'],
            ["style", "width", '52px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '0.85']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1810.3175203292,
         autoPlay: false,
         timeline: [
            { id: "eid11292", tween: [ "style", "${_Q5-MelaBellaCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11293", tween: [ "style", "${_Q5-MelaBellaCopy2}", "left", '-475px', { fromValue: '0px'}], position: 427, duration: 486, easing: "easeOutQuad" },
            { id: "eid11294", tween: [ "style", "${_Q5-MelaBellaCopy2}", "left", '-515px', { fromValue: '-475px'}], position: 1250, duration: 367, easing: "easeOutQuad" },
            { id: "eid11295", tween: [ "style", "${_Q5-MelaBellaCopy2}", "left", '-489px', { fromValue: '-515px'}], position: 1617, duration: 79, easing: "easeOutQuad" },
            { id: "eid11296", tween: [ "style", "${_Q5-MelaBellaCopy2}", "left", '-500px', { fromValue: '-489px'}], position: 1696, duration: 64, easing: "easeOutQuad" },
            { id: "eid11297", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 48, easing: "easeOutQuad" },
            { id: "eid11298", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '-16deg', { fromValue: '24deg'}], position: 48, duration: 77, easing: "easeOutQuad" },
            { id: "eid11299", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '-1deg', { fromValue: '-16deg'}], position: 125, duration: 125, easing: "easeOutQuad" },
            { id: "eid11300", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '358deg', { fromValue: '-1deg'}], position: 427, duration: 486, easing: "easeOutQuad" },
            { id: "eid11301", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '723deg', { fromValue: '358deg'}], position: 1250, duration: 367, easing: "easeOutQuad" },
            { id: "eid11302", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '690deg', { fromValue: '723deg'}], position: 1617, duration: 79, easing: "easeOutQuad" },
            { id: "eid11303", tween: [ "transform", "${_Q5-MelaBellaCopy2}", "rotateZ", '720deg', { fromValue: '690deg'}], position: 1696, duration: 64, easing: "easeOutQuad" },
            { id: "eid11287", tween: [ "style", "${_Q5-MelaBellaCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11288", tween: [ "style", "${_Q5-MelaBellaCopy2}", "top", '10px', { fromValue: '0px'}], position: 427, duration: 486, easing: "easeOutQuad" },
            { id: "eid11289", tween: [ "style", "${_Q5-MelaBellaCopy2}", "top", '488px', { fromValue: '10px'}], position: 1250, duration: 367, easing: "easeOutQuad" },
            { id: "eid11290", tween: [ "style", "${_Q5-MelaBellaCopy2}", "top", '408px', { fromValue: '488px'}], position: 1617, duration: 79, easing: "easeOutQuad" },
            { id: "eid11291", tween: [ "style", "${_Q5-MelaBellaCopy2}", "top", '471px', { fromValue: '408px'}], position: 1696, duration: 64, easing: "easeOutQuad" }         ]
      }
   }
},
"Mela-Bella-5": {
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
      id: 'Q5-MelaBellaCopy3',
      type: 'image',
      rect: ['0px','0px','52px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-MelaBella.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-MelaBellaCopy3}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.saturate", '0.85'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '0px'],
            ["style", "width", '52px']
         ],
         "${symbolSelector}": [
            ["style", "height", '71px'],
            ["style", "width", '52px']
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
            { id: "eid11330", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 0, duration: 48, easing: "easeOutQuad" },
            { id: "eid11331", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '-16deg', { fromValue: '24deg'}], position: 48, duration: 77, easing: "easeOutQuad" },
            { id: "eid11332", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '-1deg', { fromValue: '-16deg'}], position: 125, duration: 125, easing: "easeOutQuad" },
            { id: "eid11333", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '358deg', { fromValue: '-1deg'}], position: 455, duration: 545, easing: "easeOutQuad" },
            { id: "eid11334", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '723deg', { fromValue: '358deg'}], position: 1425, duration: 367, easing: "easeOutQuad" },
            { id: "eid11335", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '690deg', { fromValue: '723deg'}], position: 1792, duration: 79, easing: "easeOutQuad" },
            { id: "eid11336", tween: [ "transform", "${_Q5-MelaBellaCopy3}", "rotateZ", '720deg', { fromValue: '690deg'}], position: 1871, duration: 64, easing: "easeOutQuad" },
            { id: "eid11325", tween: [ "style", "${_Q5-MelaBellaCopy3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11326", tween: [ "style", "${_Q5-MelaBellaCopy3}", "left", '-615px', { fromValue: '0px'}], position: 455, duration: 545, easing: "easeOutQuad" },
            { id: "eid11327", tween: [ "style", "${_Q5-MelaBellaCopy3}", "left", '-638px', { fromValue: '-615px'}], position: 1425, duration: 367, easing: "easeOutQuad" },
            { id: "eid11328", tween: [ "style", "${_Q5-MelaBellaCopy3}", "left", '-640px', { fromValue: '-638px'}], position: 1792, duration: 79, easing: "easeOutQuad" },
            { id: "eid11329", tween: [ "style", "${_Q5-MelaBellaCopy3}", "left", '-648px', { fromValue: '-640px'}], position: 1871, duration: 64, easing: "easeOutQuad" },
            { id: "eid11320", tween: [ "style", "${_Q5-MelaBellaCopy3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid11321", tween: [ "style", "${_Q5-MelaBellaCopy3}", "top", '-1px', { fromValue: '0px'}], position: 455, duration: 545, easing: "easeOutQuad" },
            { id: "eid11322", tween: [ "style", "${_Q5-MelaBellaCopy3}", "top", '445px', { fromValue: '-1px'}], position: 1425, duration: 367, easing: "easeOutQuad" },
            { id: "eid11323", tween: [ "style", "${_Q5-MelaBellaCopy3}", "top", '349px', { fromValue: '445px'}], position: 1792, duration: 79, easing: "easeOutQuad" },
            { id: "eid11324", tween: [ "style", "${_Q5-MelaBellaCopy3}", "top", '429px', { fromValue: '349px'}], position: 1871, duration: 64, easing: "easeOutQuad" }         ]
      }
   }
},
"Farfalle": {
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
      filter: [0,0,1,1,0,0,0,0,'rgba(255,255,255,0.71)',3,2,5],
      id: 'Q5-Farfa-2',
      rect: ['-262px','169px','96px','78px','auto','auto'],
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/Q5-Farfa-2.png','0px','0px','100%','100%']
   },
   {
      transform: [[0,0],['-14']],
      rect: ['1088px','438px','87px','75px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(255,255,255,0.71)',3,2,5],
      id: 'Q5-Farfa-12',
      type: 'image',
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/Q5-Farfa-1.png','0px','0px','100%','100%']
   },
   {
      type: 'image',
      filter: [0,0,1,1,0,0,0,0,'rgba(255,255,255,0.71)',3,2,5],
      id: 'Q5-Farfa-3',
      rect: ['-301px','-52px','87px','75px','auto','auto'],
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/Q5-Farfa-3.png','0px','0px','100%','100%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q5-Farfa-12}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.56)'],
            ["transform", "rotateZ", '-14deg'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["subproperty", "filter.drop-shadow.offsetV", '3px'],
            ["style", "width", '87px'],
            ["motion", "location", '1131.5px 475.5px'],
            ["subproperty", "filter.drop-shadow.blur", '5px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px'],
            ["style", "height", '75px']
         ],
         "${_Q5-Farfa-3}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.56)'],
            ["transform", "rotateZ", '142deg'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["subproperty", "filter.drop-shadow.offsetV", '3px'],
            ["style", "width", '87px'],
            ["motion", "location", '-257.5px -14.5px'],
            ["subproperty", "filter.drop-shadow.blur", '5px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px'],
            ["style", "height", '75px']
         ],
         "${_Q5-Farfa-2}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.56)'],
            ["transform", "rotateZ", '133deg'],
            ["subproperty", "filter.hue-rotate", '0deg'],
            ["subproperty", "filter.drop-shadow.offsetV", '3px'],
            ["style", "width", '96px'],
            ["motion", "location", '-214px 208px'],
            ["subproperty", "filter.drop-shadow.blur", '5px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px'],
            ["style", "height", '78px']
         ],
         "${symbolSelector}": [
            ["style", "height", '185px'],
            ["style", "width", '274px']
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
            { id: "eid11532", tween: [ "motion", "${_Q5-Farfa-2}", [[-214,208,0,0],[23.48,311.99,137.66,-30.67,418.45,-93.24],[187.38,197.67,128.64,-37.92,161.09,-47.49],[464.86,279.98,706.02,884.01,90.28,113.04],[1143.28,-94.44,0,0]]], position: 17500, duration: 6000 },
            { id: "eid11486", tween: [ "motion", "${_Q5-Farfa-3}", [[-257.5,-14.5,0,0],[162.22,284.37,509.01,116.15,710.08,162.03],[690.55,207.5,781.35,3.03,524.01,2.03],[1175.19,312.42,0,0]]], position: 1750, duration: 5750 },
            { id: "eid11529", tween: [ "motion", "${_Q5-Farfa-12}", [[1131.5,475.5,0,0],[878.12,355.84,-825.19,325.89,-428.45,169.21],[49.43,325.05,-500.58,-10.37,-700.42,-14.51],[-248.45,458.49,0,0]]], position: 9500, duration: 5500 }         ]
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
      transform: [],
      boxShadow: ['inset',8,3,18,6,'rgba(0,0,0,0.648438)'],
      id: 'HOME',
      type: 'image',
      rect: ['0px','0px','103px','97px','auto','auto'],
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
            ["transform", "scaleX", '0.65'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '109px']
         ],
         "${_musica}": [
            ["style", "top", '5px'],
            ["transform", "scaleX", '0.65'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '60px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '953px'],
            ["style", "top", '83px']
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
         "${_Numero_5Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '68.77%'],
            ["style", "width", '95px']
         ],
         "${_Numero_1Copy}": [
            ["style", "top", '30.67%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.15%'],
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
            { id: "eid3720", tween: [ "style", "${_musica}", "left", '60px', { fromValue: '60px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3812", tween: [ "style", "${_PREV}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3728", tween: [ "style", "${_musica}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
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
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[-128.05,504.65,0,0],[88.22,143.42,337.63,-252.51,381.41,-285.25],[186.61,141.45,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[725.82,117.6,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[186.61,141.45,0,0],[550.41,518.25,185.24,683]]], position: 1884, duration: 274 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[550.41,518.25,94.1,346.97],[525,948.01,0,0]]], position: 2158, duration: 269 },
            { id: "eid2428", tween: [ "transform", "${_numerigruppo}", "scaleX", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2439", tween: [ "transform", "${_numerigruppo}", "scaleX", '0', { fromValue: '0.9'}], position: 1884, duration: 543 }         ]
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
})(jQuery, AdobeEdge, "Quadro05");
