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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            id:'Q5-Farfa-12',
            type:'image',
            rect:['245px','206px','87px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Farfa-1.png",'0px','0px'],
            filter:[0,-2,1,1,0,0,0,0,"rgba(255,255,255,0.71)",3,2,3]
         },
         {
            id:'Q5-Farfa-2',
            type:'image',
            rect:['64px','191px','96px','78px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Farfa-2.png",'0px','0px'],
            filter:[0,-2,1,1,0,0,0,0,"rgba(255,255,255,0.71)",3,2,3]
         },
         {
            id:'Q5-Farfa-3',
            type:'image',
            rect:['165px','102px','87px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Farfa-3.png",'0px','0px'],
            filter:[0,-2,1,1,0,0,0,0,"rgba(255,255,255,0.71)",3,2,3]
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
            id:'Scoiattolo',
            type:'rect',
            rect:['308','96','auto','auto','auto','auto']
         },
         {
            id:'Q5-Cestino2',
            type:'image',
            rect:['307px','486px','216px','148px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-Cestino.png",'0px','0px']
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
            rect:['-43px','228px','181px','542px','auto','auto'],
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
            rect:['127','582','auto','auto','auto','auto']
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
            id:'Mela-Bella-3',
            type:'image',
            rect:['681px','-1px','52px','71px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-MelaBella.png",'0px','0px'],
            filter:[0,30,1,1.05,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'Mela-Bella-4',
            type:'image',
            rect:['855px','45px','52px','71px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-MelaBella.png",'0px','0px'],
            filter:[0,30,1,1.05,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'Mela-Bella-2',
            type:'image',
            rect:['767px','126px','52px','71px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-MelaBella.png",'0px','0px'],
            filter:[0,30,1,1.05,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'Mela-Bella-5',
            type:'image',
            rect:['967px','70px','52px','71px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q5-MelaBella.png",'0px','0px'],
            filter:[0,30,1,1.05,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'MENUz',
            type:'rect',
            rect:['354','634','auto','auto','auto','auto']
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226','auto','auto','auto','auto']
         },
         {
            id:'Trigger-Verme',
            type:'rect',
            rect:['116px','560px','119px','110px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"Trigger-Verme"
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
         }],
         symbolInstances: [
         {
            id:'Bird-Tereno',
            symbolName:'Bird-Tereno'
         },
         {
            id:'Bird-Pala',
            symbolName:'Bird-Pala'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         },
         {
            id:'FioreRosa',
            symbolName:'FioreRosa'
         },
         {
            id:'MENUz',
            symbolName:'MENUz'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'Mela-Easter-Egg',
            symbolName:'Mela-Easter-Egg'
         },
         {
            id:'Mela-Statica-4',
            symbolName:'Mela-Statica'
         },
         {
            id:'Verme',
            symbolName:'Verme'
         },
         {
            id:'Mela-Statica-3',
            symbolName:'Mela-Statica'
         },
         {
            id:'Mela-Statica-2',
            symbolName:'Mela-Statica'
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
            id:'Mela-Bella-1',
            symbolName:'Mela-Bella-1'
         },
         {
            id:'Mela-Statica',
            symbolName:'Mela-Statica'
         },
         {
            id:'FioreGialllo',
            symbolName:'FioreGialllo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Bird-Pala}": [
            ["style", "top", '477px'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.24)'],
            ["subproperty", "filter.drop-shadow.offsetH", '-2px']
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
         "${_Trigger-Mela-Easter}": [
            ["style", "top", '593px'],
            ["style", "height", '56px'],
            ["style", "opacity", '0'],
            ["style", "left", '766px'],
            ["style", "width", '64px']
         ],
         "${_Q5-Cespuglio}": [
            ["style", "top", '283px'],
            ["transform", "rotateZ", '-3deg'],
            ["style", "height", '178px'],
            ["style", "left", '51px'],
            ["style", "width", '302px']
         ],
         "${_Mela-Bella-5}": [
            ["style", "top", '70px'],
            ["style", "width", '52px'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '967px'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Trigger-Verme}": [
            ["style", "opacity", '0']
         ],
         "${_Q5-Farfa-2}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.71)'],
            ["subproperty", "filter.hue-rotate", '-2deg'],
            ["style", "left", '64px'],
            ["style", "width", '96px'],
            ["style", "top", '191px'],
            ["style", "height", '78px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px']
         ],
         "${_Verme}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.58)'],
            ["subproperty", "filter.drop-shadow.blur", '10px'],
            ["subproperty", "filter.drop-shadow.offsetH", '-7px']
         ],
         "${_Mela-Statica-3}": [
            ["style", "top", '-15px'],
            ["style", "left", '922px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_Q5-Pala}": [
            ["style", "top", '228px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '-16deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-43px']
         ],
         "${_Mela-Bella-4}": [
            ["style", "top", '45px'],
            ["style", "width", '52px'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '855px'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Q5-Farfa-12}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.71)'],
            ["subproperty", "filter.hue-rotate", '-2deg'],
            ["style", "left", '245px'],
            ["style", "width", '87px'],
            ["style", "top", '206px'],
            ["style", "height", '75px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px']
         ],
         "${_Q5-TerraToppa}": [
            ["style", "top", '460px'],
            ["transform", "scaleY", '0.31'],
            ["style", "left", '-381px'],
            ["transform", "scaleX", '0.31']
         ],
         "${_Mela-Bella-3}": [
            ["style", "top", '-1px'],
            ["style", "width", '52px'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '681px'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Mela-Bella-2}": [
            ["style", "top", '126px'],
            ["style", "width", '52px'],
            ["style", "height", '71px'],
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["style", "left", '767px'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Bird-Tereno}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.70)'],
            ["subproperty", "filter.drop-shadow.blur", '6px'],
            ["subproperty", "filter.contrast", '0.99'],
            ["style", "top", '563px'],
            ["transform", "scaleX", '0.85925'],
            ["transform", "scaleY", '0.85925'],
            ["style", "left", '893px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px']
         ],
         "${_Mela-Statica}": [
            ["style", "top", '18px'],
            ["style", "left", '777px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_Q5-Cestino2}": [
            ["style", "top", '486px'],
            ["style", "height", '148px'],
            ["style", "left", '307px'],
            ["style", "width", '216px']
         ],
         "${_FUMELLO}": [
            ["style", "left", '22px'],
            ["style", "top", '-207px']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Mela-Bella-1}": [
            ["subproperty", "filter.hue-rotate", '30deg'],
            ["subproperty", "filter.saturate", '1.05']
         ],
         "${_Q5-Terra}": [
            ["style", "top", '406px'],
            ["transform", "scaleY", '0.31'],
            ["style", "left", '-676px'],
            ["transform", "scaleX", '0.31']
         ],
         "${_Q5-Farfa-3}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.71)'],
            ["subproperty", "filter.hue-rotate", '-2deg'],
            ["style", "left", '165px'],
            ["style", "width", '87px'],
            ["style", "top", '102px'],
            ["style", "height", '75px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.blur", '3px'],
            ["subproperty", "filter.drop-shadow.offsetH", '3px']
         ],
         "${_MENUz}": [
            ["style", "left", '-73px'],
            ["style", "top", '696px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Q5-Albero}": [
            ["style", "top", '-119px'],
            ["style", "height", '793px'],
            ["style", "left", '511px'],
            ["style", "width", '652px']
         ],
         "${_Mela-Statica-4}": [
            ["style", "top", '131px'],
            ["style", "left", '886px'],
            ["subproperty", "filter.hue-rotate", '20deg']
         ],
         "${_Q5-Prato}": [
            ["style", "top", '253px'],
            ["style", "height", '535px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
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
            { id: "eid10035", tween: [ "style", "${_Mela-Statica}", "left", '777px', { fromValue: '777px'}], position: 0, duration: 0 },
            { id: "eid9941", tween: [ "style", "${_FUMELLO}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10094", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.blur", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid10091", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.color", 'rgba(0,0,0,0.24)', { fromValue: 'rgba(0,0,0,0.24)'}], position: 0, duration: 0 },
            { id: "eid10032", tween: [ "subproperty", "${_Mela-Statica-2}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10099", tween: [ "subproperty", "${_Bird-Tereno}", "filter.contrast", '0.99', { fromValue: '0.99'}], position: 0, duration: 0 },
            { id: "eid10092", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.offsetH", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid8862", tween: [ "style", "${_NUVOLA}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid10033", tween: [ "subproperty", "${_Mela-Statica}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10093", tween: [ "subproperty", "${_Verme}", "filter.drop-shadow.color", 'rgba(0,0,0,0.58)', { fromValue: 'rgba(0,0,0,0.58)'}], position: 0, duration: 0 },
            { id: "eid10089", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.offsetH", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
            { id: "eid10031", tween: [ "subproperty", "${_Mela-Statica-4}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10085", tween: [ "style", "${_Bird-Pala}", "top", '477px', { fromValue: '477px'}], position: 0, duration: 0 },
            { id: "eid10102", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.blur", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid10101", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.color", 'rgba(0,0,0,0.70)', { fromValue: 'rgba(0,0,0,0.70)'}], position: 0, duration: 0 },
            { id: "eid10037", tween: [ "style", "${_Mela-Statica-4}", "left", '886px', { fromValue: '886px'}], position: 0, duration: 0 },
            { id: "eid4941", tween: [ "style", "${_NUVOLA}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10038", tween: [ "style", "${_Mela-Statica-4}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid10090", tween: [ "subproperty", "${_Bird-Pala}", "filter.drop-shadow.blur", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid10034", tween: [ "subproperty", "${_Mela-Statica-3}", "filter.hue-rotate", '20deg', { fromValue: '20deg'}], position: 0, duration: 0 },
            { id: "eid10025", tween: [ "subproperty", "${_Mela-Bella-1}", "filter.hue-rotate", '30deg', { fromValue: '30deg'}], position: 0, duration: 0 },
            { id: "eid10026", tween: [ "subproperty", "${_Mela-Bella-1}", "filter.saturate", '1.05', { fromValue: '1.05'}], position: 0, duration: 0 },
            { id: "eid9967", tween: [ "style", "${_FUMELLO}", "top", '-207px', { fromValue: '-207px'}], position: 0, duration: 0 },
            { id: "eid10017", tween: [ "style", "${_Mela-Statica-2}", "top", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
            { id: "eid10036", tween: [ "style", "${_Mela-Statica}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
            { id: "eid10016", tween: [ "style", "${_Mela-Statica-2}", "left", '667px', { fromValue: '667px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '575px', { fromValue: '696px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '694px', { fromValue: '575px'}], position: 223, duration: 116, easing: "easeInOutQuad" },
            { id: "eid10013", tween: [ "style", "${_Mela-Statica-3}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
            { id: "eid10100", tween: [ "subproperty", "${_Bird-Tereno}", "filter.drop-shadow.offsetH", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid10012", tween: [ "style", "${_Mela-Statica-3}", "left", '922px', { fromValue: '922px'}], position: 0, duration: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"FUMELLO": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','446px','287px','auto','auto'],
      id: 'Fumello',
      userClass: 'fumello',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q5.png','0px','0px','445.97px','286.67px']
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
            { id: "eid10383", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10384", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10385", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid10386", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"NUVOLA": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
"HOME_butt": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','21px','1160px','217px','auto','auto'],
      id: 'Menu',
      opacity: 0.7,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'Testina',
      type: 'image',
      rect: ['1013px','0px','84px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Testina.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['93px','95px','auto','auto','auto','auto']
   },
   {
      userClass: 'prev',
      id: 'PREV',
      type: 'rect',
      transform: [[0,0],[],[],['0.69','0.69']],
      rect: ['212px','103px','auto','auto','auto','auto']
   },
   {
      rect: ['27.7%','29.5%','125px','98px','auto','auto'],
      userClass: 'uno',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   },
   {
      rect: ['39.1%','29.5%','124px','97px','auto','auto'],
      userClass: 'due',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   },
   {
      rect: ['50.3%','29.5%','124px','97px','auto','auto'],
      userClass: 'tre',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
   },
   {
      rect: ['61.5%','29.5%','124px','97px','auto','auto'],
      userClass: 'quattro',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
   },
   {
      rect: ['72.5%','29.5%','124px','97px','auto','auto'],
      userClass: 'cinque',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/5_col.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'PREV',
      symbolName: 'PREV'
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
            ["style", "height", '97px'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1013px'],
            ["style", "width", '84px']
         ],
         "${_Numero_4}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '61.5%'],
            ["style", "width", '124px']
         ],
         "${_Menu}": [
            ["style", "top", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '217px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '0px'],
            ["style", "width", '1160px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '61px'],
            ["transform", "scaleY", '0.71726'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.71726'],
            ["style", "left", '79px']
         ],
         "${_Numero_2}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '39.1%'],
            ["style", "width", '124px']
         ],
         "${_Numero_3}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '50.29%'],
            ["style", "width", '124px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Numero_1}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "opacity", '1'],
            ["style", "left", '27.71%'],
            ["style", "width", '125px']
         ],
         "${_Numero_5}": [
            ["style", "top", '29.46%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '72.54%'],
            ["style", "width", '124px']
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
            { id: "eid459", tween: [ "style", "${_HOME_butt}", "left", '79px', { fromValue: '79px'}], position: 415, duration: 0 },
            { id: "eid487", tween: [ "transform", "${_Testina}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 65, easing: "easeOutBounce" },
            { id: "eid488", tween: [ "transform", "${_Testina}", "rotateZ", '-8deg', { fromValue: '10deg'}], position: 65, duration: 44, easing: "easeOutBounce" },
            { id: "eid489", tween: [ "transform", "${_Testina}", "rotateZ", '5deg', { fromValue: '-8deg'}], position: 108, duration: 47, easing: "easeOutBounce" },
            { id: "eid490", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 156, duration: 49, easing: "easeOutBounce" },
            { id: "eid500", tween: [ "transform", "${_Testina}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 500, duration: 129 },
            { id: "eid501", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 629, duration: 92 },
            { id: "eid454", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid455", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.71726', { fromValue: '0.71726'}], position: 415, duration: 0 },
            { id: "eid460", tween: [ "style", "${_HOME_butt}", "top", '61px', { fromValue: '61px'}], position: 415, duration: 0 }         ]
      }
   }
},
"PREV": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'PrevImg',
      transform: [[0,0],[],[],['0.77','0.77']],
      clip: ['rect(-12px 81px 110px -7px)'],
      fill: ['rgba(0,0,0,0)','images/G-Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PrevImg}": [
            ["style", "top", '-11px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-12,81,110,-7], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8px'],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '55px']
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
"Coda": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         duration: 661.07822385364,
         autoPlay: false,
         timeline: [
            { id: "eid9656", tween: [ "transform", "${_Coda}", "rotateZ", '-14deg', { fromValue: '-8deg'}], position: 0, duration: 154, easing: "easeInOutQuad" },
            { id: "eid9657", tween: [ "transform", "${_Coda}", "rotateZ", '9deg', { fromValue: '-14deg'}], position: 154, duration: 284, easing: "easeInOutQuad" },
            { id: "eid9658", tween: [ "transform", "${_Coda}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 438, duration: 223, easing: "easeInOutQuad" }         ]
      }
   }
},
"CodaAni": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${symbolSelector}": [
            ["style", "height", '252px'],
            ["style", "width", '228px']
         ],
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['25'],[],['0.3','0.3']],
      id: 'Q5-Verme',
      type: 'image',
      rect: ['-51px','-79px','183px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Verme.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '91px'],
            ["style", "width", '81px']
         ],
         "${_Q5-Verme}": [
            ["style", "top", '-79px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "rotateZ", '25deg'],
            ["transform", "scaleX", '0.3'],
            ["style", "left", '-51px']
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
"Mela-Statica": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         ],
         "${symbolSelector}": [
            ["style", "height", '66px'],
            ["style", "width", '60px']
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"FioreGialllo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${_Q5-Fiore-Giallo}": [
            ["style", "top", '0px'],
            ["style", "height", '60px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [51,48], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51,48],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
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
            { id: "eid10048", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleY", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10050", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleY", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" },
            { id: "eid10044", tween: [ "transform", "${_Q5-Fiore-Giallo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 749 },
            { id: "eid10047", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleX", '1.12999', { fromValue: '1'}], position: 0, duration: 323, easing: "easeInOutExpo" },
            { id: "eid10049", tween: [ "transform", "${_Q5-Fiore-Giallo}", "scaleX", '1', { fromValue: '1.12999'}], position: 323, duration: 427, easing: "easeInOutExpo" }         ]
      }
   }
},
"FioreRosa": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
         "${_Q5-Fiore-Azzurro}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '68px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '61px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
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
         "${_Q1-NotaCopy4}": [
            ["style", "top", '-126px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "rotateZ", '-34deg'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '85px']
         ],
         "${_G-Bird-Gambe}": [
            ["style", "top", '50px'],
            ["style", "height", '29px'],
            ["style", "left", '26px'],
            ["style", "width", '30px']
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
            { id: "eid10258", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0.9', { fromValue: '0.000000'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10259", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0.89', { fromValue: '0.9'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10260", tween: [ "style", "${_Q1-NotaCopy4}", "opacity", '0', { fromValue: '0.89'}], position: 898, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10261", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.5', { fromValue: '0.32'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10262", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.51', { fromValue: '0.5'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10263", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleY", '0.32', { fromValue: '0.51'}], position: 898, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10110", tween: [ "style", "${_Q5-Bird-1}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10387", tween: [ "style", "${_Q5-Bird-1}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10388", tween: [ "style", "${_Q5-Bird-1}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10389", tween: [ "style", "${_Q5-Bird-1}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10390", tween: [ "style", "${_Q5-Bird-1}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
            { id: "eid10108", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 0, duration: 439, easing: "easeOutQuad" },
            { id: "eid10109", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '-7deg', { fromValue: '20deg'}], position: 439, duration: 285, easing: "easeOutQuad" },
            { id: "eid10111", tween: [ "transform", "${_Q5-Bird-1}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 724, duration: 564, easing: "easeOutQuad" },
            { id: "eid10255", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.5', { fromValue: '0.32'}], position: 562, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10256", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.51', { fromValue: '0.5'}], position: 833, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10257", tween: [ "transform", "${_Q1-NotaCopy4}", "scaleX", '0.32', { fromValue: '0.51'}], position: 898, duration: 195, easing: "easeInOutQuad" },
            { id: "eid10246", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.5', { fromValue: '0.32'}], position: 308, duration: 271, easing: "easeInOutQuad" },
            { id: "eid10247", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.51', { fromValue: '0.5'}], position: 579, duration: 65, easing: "easeInOutQuad" },
            { id: "eid10248", tween: [ "transform", "${_Q1-NotaCopy3}", "scaleX", '0.32', { fromValue: '0.51'}], position: 644, duration: 195, easing: "easeInOutQuad" }         ]
      }
   }
},
"Bird-Tereno": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
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
      rect: ['-82px','-70px','76px','95px','auto','auto'],
      transform: [[0,0],[],[],['0.543','0.537']],
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
            ["transform", "scaleX", '0.97642'],
            ["transform", "scaleY", '0.97642'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '91px'],
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
            { id: "eid10198", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10199", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10200", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10154", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.5', { fromValue: '0.32'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10158", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.51', { fromValue: '0.5'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10160", tween: [ "transform", "${_Q1-Nota2}", "scaleX", '0.32', { fromValue: '0.51'}], position: 366, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10149", tween: [ "style", "${_Q1-Nota2}", "opacity", '0.99', { fromValue: '0.000000'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10150", tween: [ "style", "${_Q1-Nota2}", "opacity", '1', { fromValue: '0.990000'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10151", tween: [ "style", "${_Q1-Nota2}", "opacity", '0', { fromValue: '1'}], position: 366, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10204", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '0.99', { fromValue: '0.000000'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10205", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '1', { fromValue: '0.990000'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10206", tween: [ "style", "${_Q1-Nota2Copy5}", "opacity", '0', { fromValue: '1'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10155", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 95, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10159", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 241, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10161", tween: [ "transform", "${_Q1-Nota2}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 366, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10201", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.5', { fromValue: '0.32'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10202", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.51', { fromValue: '0.5'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10203", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleX", '0.32', { fromValue: '0.51'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10195", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '0.99', { fromValue: '0.000000'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10196", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '1', { fromValue: '0.990000'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10197", tween: [ "style", "${_Q1-Nota2Copy4}", "opacity", '0', { fromValue: '1'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10207", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.4943', { fromValue: '0.31635'}], position: 512, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10208", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.50418', { fromValue: '0.4943'}], position: 658, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10209", tween: [ "transform", "${_Q1-Nota2Copy5}", "scaleY", '0.31634', { fromValue: '0.50418'}], position: 784, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10192", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.5', { fromValue: '0.32'}], position: 305, duration: 146, easing: "easeInOutCirc" },
            { id: "eid10193", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.51', { fromValue: '0.5'}], position: 451, duration: 125, easing: "easeInOutCirc" },
            { id: "eid10194", tween: [ "transform", "${_Q1-Nota2Copy4}", "scaleX", '0.32', { fromValue: '0.51'}], position: 576, duration: 135, easing: "easeInOutCirc" },
            { id: "eid10136", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '16deg', { fromValue: '0deg'}], position: 0, duration: 305, easing: "easeInOutCirc" },
            { id: "eid10137", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '-5deg', { fromValue: '16deg'}], position: 305, duration: 473, easing: "easeInOutCirc" },
            { id: "eid10138", tween: [ "transform", "${_Q5-Bird-3}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 778, duration: 402, easing: "easeInOutCirc" }         ]
      }
   }
},
"Scoiattolo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      userClass: 'codaani',
      id: 'Coda',
      type: 'rect',
      transform: [[0,0],[],[],['0.972','0.972']],
      rect: ['25px','128px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'Q5-Braccio2',
      rect: ['280px','117px','106px','164px','auto','auto'],
      transform: [[0,0],['10']],
      fill: ['rgba(0,0,0,0)','images/Q5-Braccio.png','0px','0px']
   },
   {
      id: 'Q5-Corpo2',
      type: 'image',
      rect: ['0px','235px','364px','335px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Corpo.png','0px','0px']
   },
   {
      type: 'image',
      id: 'Q5-Testa',
      rect: ['11px','0px','343px','293px','auto','auto'],
      transform: [[0,0],['7'],[],['0.9','0.9']],
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
            ["transform", "scaleX", '0.97167'],
            ["style", "top", '128px'],
            ["style", "left", '25px'],
            ["transform", "scaleY", '0.97167']
         ],
         "${_Q5-Braccio2}": [
            ["style", "-webkit-transform-origin", [22,94], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [22,94],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '10deg'],
            ["style", "height", '164px'],
            ["style", "top", '117px'],
            ["style", "left", '280px'],
            ["style", "width", '106px']
         ],
         "${_Q5-Corpo2}": [
            ["style", "height", '335px'],
            ["style", "top", '235px'],
            ["style", "left", '0px'],
            ["style", "width", '364px']
         ],
         "${symbolSelector}": [
            ["style", "height", '570px'],
            ["style", "width", '412px']
         ],
         "${_Q5-Testa}": [
            ["style", "-webkit-transform-origin", [73,89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73,89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '293px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "rotateZ", '7deg'],
            ["transform", "scaleX", '0.9'],
            ["style", "top", '0px'],
            ["style", "left", '11px'],
            ["style", "width", '343px']
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
"Mela-Easter-Egg": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      filter: [0,29,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Q5-Mela',
      rect: ['0px','0px','43px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q5-Mela.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '43px']
         ],
         "${_Q5-Mela}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["subproperty", "filter.hue-rotate", '29deg'],
            ["style", "height", '49px'],
            ["style", "left", '0px'],
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
            { id: "eid10285", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10286", tween: [ "transform", "${_Q5-Mela}", "rotateZ", '730deg', { fromValue: '360deg'}], position: 459, duration: 331, easing: "easeOutBounce" },
            { id: "eid10281", tween: [ "style", "${_Q5-Mela}", "top", '-170px', { fromValue: '0px'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10283", tween: [ "style", "${_Q5-Mela}", "top", '0px', { fromValue: '-170px'}], position: 459, duration: 331, easing: "easeOutBounce" },
            { id: "eid10280", tween: [ "style", "${_Q5-Mela}", "left", '-6px', { fromValue: '0px'}], position: 0, duration: 459, easing: "easeInOutQuad" },
            { id: "eid10282", tween: [ "style", "${_Q5-Mela}", "left", '0px', { fromValue: '-6px'}], position: 459, duration: 331, easing: "easeOutBounce" }         ]
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
