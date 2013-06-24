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
            id:'Q4-Albero-Sfondo',
            type:'image',
            rect:['859px','139px','180px','174px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Albero-Sfondo.png",'0px','0px']
         },
         {
            id:'Q4-prato',
            type:'image',
            rect:['-11px','270px','1058px','556px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-prato.png",'0px','0px']
         },
         {
            id:'Cespuglio-Giuncoso',
            type:'rect',
            rect:['196','61','auto','auto','auto','auto']
         },
         {
            id:'Q4-Terra',
            type:'image',
            rect:['465px','558px','539px','84px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Terra.png",'0px','0px']
         },
         {
            id:'Q4-Pianta-Fragole',
            type:'image',
            rect:['489px','302px','504px','317px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Pianta-Fragole.png",'0px','0px']
         },
         {
            id:'libellulalat',
            type:'rect',
            rect:['188','80','auto','auto','auto','auto'],
            userClass:"libellulalat"
         },
         {
            id:'Coda',
            type:'rect',
            rect:['103px','169px','auto','auto','auto','auto'],
            userClass:"codaani",
            transform:[]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['159px','-81px','auto','auto','auto','auto'],
            userClass:"scoiattolo",
            transform:[[],[],[],['0.814','0.814']]
         },
         {
            id:'codatrigger',
            type:'image',
            rect:['99px','215px','202px','231px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q1-Coda.png",'0px','0px'],
            userClass:"codatrigger",
            transform:[[],['-5'],[],['-1.035']]
         },
         {
            id:'FragoleStatiche',
            type:'rect',
            rect:['752','287','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Fragole',
            type:'rect',
            rect:['567','314','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy',
            type:'rect',
            rect:['567px','314px','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy2',
            type:'rect',
            rect:['567px','314px','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Fiore-FragoleCopy3',
            type:'rect',
            rect:['567px','314px','auto','auto','auto','auto'],
            userClass:"FioreFragole"
         },
         {
            id:'Ricci',
            type:'rect',
            rect:['160','614','auto','auto','auto','auto']
         },
         {
            id:'Q4-Roccia',
            type:'image',
            rect:['-38px','558px','256px','173px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Roccia.png",'0px','0px']
         },
         {
            id:'Q4-Piantalella',
            type:'image',
            rect:['-20px','428px','139px','304px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Piantalella.png",'0px','0px']
         },
         {
            id:'Fragola-1',
            type:'rect',
            rect:['642px','329px','auto','auto','auto','auto'],
            userClass:"fragola1"
         },
         {
            id:'Fragola-2',
            type:'rect',
            rect:['644px','339px','auto','auto','auto','auto'],
            userClass:"fragola2"
         },
         {
            id:'Fragola-3',
            type:'rect',
            rect:['905px','360px','auto','auto','auto','auto'],
            userClass:"fragola3"
         },
         {
            id:'Fragola-4',
            type:'rect',
            rect:['715px','510px','auto','auto','auto','auto'],
            userClass:"fragola4"
         },
         {
            id:'Q4-Cestino',
            type:'image',
            rect:['314px','438px','215px','158px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q4-Cestino.png",'0px','0px'],
            transform:[[],['9'],[],['1.03','1.03']]
         },
         {
            id:'LibellulaAuto',
            type:'rect',
            rect:['1095','135','auto','auto','auto','auto']
         },
         {
            id:'fragola2trigger',
            type:'ellipse',
            rect:['622px','314px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"fragola2trigger"
         },
         {
            id:'fragola3trigger',
            type:'ellipse',
            rect:['878px','335px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"fragola3trigger"
         },
         {
            id:'fragola4trigger',
            type:'ellipse',
            rect:['697px','486px','96px','97px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"fragola4trigger"
         },
         {
            id:'libellulaTrigger',
            type:'ellipse',
            rect:['166px','68px','131px','132px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            userClass:"libellulaTrigger"
         },
         {
            id:'AudioTappeto',
            type:'rect',
            rect:['-272px','164px','60px','60px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"AudioTappetino"
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-73px','696px','auto','auto','auto','auto'],
            userClass:"menu"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['112','-226px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Coda',
            symbolName:'Coda'
         },
         {
            id:'Fragola-2',
            symbolName:'Fragola-2'
         },
         {
            id:'Fragola-3',
            symbolName:'Fragola-3'
         },
         {
            id:'Cespuglio-Giuncoso',
            symbolName:'Cespuglio-Giuncoso'
         },
         {
            id:'FragoleStatiche',
            symbolName:'FragoleStatiche'
         },
         {
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'libellulalat',
            symbolName:'libellulalat'
         },
         {
            id:'LibellulaAuto',
            symbolName:'LibellulaAuto'
         },
         {
            id:'Fiore-Fragole',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Fragola-4',
            symbolName:'Fragola-4'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'Fiore-FragoleCopy3',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'Fiore-FragoleCopy2',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'Ricci',
            symbolName:'Ricci'
         },
         {
            id:'Fragola-1',
            symbolName:'Fragola-1'
         },
         {
            id:'Fiore-FragoleCopy',
            symbolName:'Fiore-Fragole'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_libellulaTrigger}": [
            ["style", "opacity", '0']
         ],
         "${_NUVOLA}": [
            ["style", "left", '-11px'],
            ["style", "top", '-21px']
         ],
         "${_LibellulaAuto}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.50)'],
            ["subproperty", "filter.drop-shadow.offsetH", '1px'],
            ["subproperty", "filter.drop-shadow.offsetV", '1px'],
            ["subproperty", "filter.drop-shadow.blur", '5px']
         ],
         "${_Menu}": [
            ["style", "top", '696px'],
            ["style", "left", '-73px']
         ],
         "${_Fiore-FragoleCopy}": [
            ["style", "left", '840px'],
            ["style", "top", '293px']
         ],
         "${_Q4-prato}": [
            ["style", "top", '270px'],
            ["style", "height", '556px'],
            ["style", "left", '-11px'],
            ["style", "width", '1058px']
         ],
         "${_Fragola-3}": [
            ["style", "top", '360px'],
            ["style", "left", '905px'],
            ["subproperty", "filter.hue-rotate", '15deg']
         ],
         "${_Coda}": [
            ["style", "top", '169px'],
            ["style", "left", '103px']
         ],
         "${_Fiore-FragoleCopy3}": [
            ["style", "left", '908px'],
            ["style", "top", '469px']
         ],
         "${_Q4-Roccia}": [
            ["style", "top", '558px'],
            ["style", "height", '173px'],
            ["style", "left", '-38px'],
            ["style", "width", '256px']
         ],
         "${_Scoiattolo}": [
            ["transform", "scaleX", '0.81363'],
            ["style", "left", '159px'],
            ["transform", "scaleY", '0.81363'],
            ["style", "top", '-81px']
         ],
         "${_Q4-Terra}": [
            ["style", "top", '558px'],
            ["style", "height", '84px'],
            ["style", "left", '465px'],
            ["style", "width", '539px']
         ],
         "${_Q4-Pianta-Fragole}": [
            ["style", "top", '302px'],
            ["style", "height", '317px'],
            ["style", "left", '489px'],
            ["style", "width", '504px']
         ],
         "${_Cespuglio-Giuncoso}": [
            ["transform", "scaleX", '0.75922'],
            ["style", "left", '-107px'],
            ["transform", "scaleY", '0.74026'],
            ["style", "top", '79px']
         ],
         "${_Fiore-FragoleCopy2}": [
            ["style", "left", '524px'],
            ["style", "top", '497px']
         ],
         "${_Fragola-2}": [
            ["style", "top", '339px'],
            ["style", "left", '644px'],
            ["subproperty", "filter.hue-rotate", '15deg']
         ],
         "${_fragola2trigger}": [
            ["style", "top", '314px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '622px'],
            ["style", "width", '96px']
         ],
         "${_fragola4trigger}": [
            ["style", "top", '486px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '697px'],
            ["style", "width", '96px']
         ],
         "${_FUMELLO}": [
            ["style", "left", '552px'],
            ["style", "top", '-226px']
         ],
         "${_AudioTappeto}": [
            ["style", "opacity", '0']
         ],
         "${_Q4-Piantalella}": [
            ["style", "top", '428px'],
            ["style", "height", '304px'],
            ["style", "left", '-20px'],
            ["style", "width", '139px']
         ],
         "${_Fragola-4}": [
            ["style", "top", '510px'],
            ["style", "left", '715px'],
            ["subproperty", "filter.hue-rotate", '15deg']
         ],
         "${_Cielo2}": [
            ["style", "height", '522px'],
            ["style", "top", '-42px'],
            ["style", "left", '-11px'],
            ["style", "width", '1050px']
         ],
         "${_Fragola-1}": [
            ["style", "top", '370px'],
            ["style", "left", '529px'],
            ["subproperty", "filter.hue-rotate", '15deg']
         ],
         "${_fragola3trigger}": [
            ["style", "top", '335px'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["style", "left", '878px'],
            ["style", "width", '96px']
         ],
         "${_Q4-Albero-Sfondo}": [
            ["style", "left", '859px'],
            ["style", "top", '139px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(190,240,241,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_codatrigger}": [
            ["style", "top", '215px'],
            ["transform", "scaleX", '-1.03488'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '231px'],
            ["style", "opacity", '0'],
            ["style", "left", '99px'],
            ["style", "width", '202px']
         ],
         "${_Q4-Cestino}": [
            ["style", "-webkit-transform-origin", [3,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [3,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1.03'],
            ["transform", "scaleY", '1.03'],
            ["transform", "rotateZ", '9deg'],
            ["style", "height", '158px'],
            ["style", "top", '438px'],
            ["style", "left", '314px'],
            ["style", "width", '215px']
         ],
         "${_FragoleStatiche}": [
            ["subproperty", "filter.hue-rotate", '5deg']
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
            { id: "eid9679", tween: [ "style", "${_Cespuglio-Giuncoso}", "left", '-107px', { fromValue: '-107px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9926", tween: [ "subproperty", "${_FragoleStatiche}", "filter.hue-rotate", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid9613", tween: [ "style", "${_Fragola-1}", "left", '529px', { fromValue: '529px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11461", tween: [ "subproperty", "${_LibellulaAuto}", "filter.drop-shadow.offsetV", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid9681", tween: [ "style", "${_Cespuglio-Giuncoso}", "top", '79px', { fromValue: '79px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9601", tween: [ "style", "${_Fiore-FragoleCopy}", "left", '840px', { fromValue: '840px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9676", tween: [ "transform", "${_Cespuglio-Giuncoso}", "scaleY", '0.74026', { fromValue: '0.74026'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11511", tween: [ "subproperty", "${_LibellulaAuto}", "filter.drop-shadow.color", 'rgba(0,0,0,0.50)', { fromValue: 'rgba(0,0,0,0.50)'}], position: 0, duration: 0 },
            { id: "eid9614", tween: [ "style", "${_Fragola-1}", "top", '370px', { fromValue: '370px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11486", tween: [ "subproperty", "${_LibellulaAuto}", "filter.drop-shadow.blur", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid9610", tween: [ "style", "${_Fiore-FragoleCopy3}", "top", '469px', { fromValue: '469px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11460", tween: [ "subproperty", "${_LibellulaAuto}", "filter.drop-shadow.offsetH", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid10267", tween: [ "subproperty", "${_Fragola-2}", "filter.hue-rotate", '15deg', { fromValue: '15deg'}], position: 0, duration: 0 },
            { id: "eid10266", tween: [ "subproperty", "${_Fragola-1}", "filter.hue-rotate", '15deg', { fromValue: '15deg'}], position: 0, duration: 0 },
            { id: "eid11370", tween: [ "style", "${_FUMELLO}", "top", '-226px', { fromValue: '-226px'}], position: 0, duration: 0 },
            { id: "eid9606", tween: [ "style", "${_Fiore-FragoleCopy2}", "top", '497px', { fromValue: '497px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9609", tween: [ "style", "${_Fiore-FragoleCopy3}", "left", '908px', { fromValue: '908px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9602", tween: [ "style", "${_Fiore-FragoleCopy}", "top", '293px', { fromValue: '293px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9675", tween: [ "transform", "${_Cespuglio-Giuncoso}", "scaleX", '0.75922', { fromValue: '0.75922'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid10269", tween: [ "subproperty", "${_Fragola-3}", "filter.hue-rotate", '15deg', { fromValue: '15deg'}], position: 0, duration: 0 },
            { id: "eid10268", tween: [ "subproperty", "${_Fragola-4}", "filter.hue-rotate", '15deg', { fromValue: '15deg'}], position: 0, duration: 0 },
            { id: "eid9605", tween: [ "style", "${_Fiore-FragoleCopy2}", "left", '524px', { fromValue: '524px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9716", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Ricci}', [] ], ""], position: 0 },
            { id: "eid11289", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"FUMELLO": {
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
      id: 'Fumello',
      rect: ['0px','0px','446px','287px','auto','auto'],
      userClass: 'fumello',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q4.png','0px','0px','445.97px','286.67px']
   },
   {
      rect: ['-8px','172px','466px','287px','auto','auto'],
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
         "${_Fumello}": [
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
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
            { id: "eid11368", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid11369", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 614, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid99", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11564", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11565", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11566", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid11567", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [50,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,91]}], position: 0, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"NUVOLA": {
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
"Coda": {
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
         duration: 37500,
         autoPlay: false,
         labels: {
            "animaziocoda": 750
         },
         timeline: [
            { id: "eid9656", tween: [ "transform", "${_Coda}", "rotateZ", '-14deg', { fromValue: '-8deg'}], position: 750, duration: 154, easing: "easeInOutQuad" },
            { id: "eid9657", tween: [ "transform", "${_Coda}", "rotateZ", '9deg', { fromValue: '-14deg'}], position: 904, duration: 284, easing: "easeInOutQuad" },
            { id: "eid9658", tween: [ "transform", "${_Coda}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 1188, duration: 223, easing: "easeInOutQuad" }         ]
      }
   }
},
"CodaAni": {
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
"Cespuglio-Giuncoso": {
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
      id: 'Q4-Giunco',
      type: 'image',
      rect: ['251px','-122px','118px','462px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      transform: [[0,0],['-12']],
      id: 'Q4-GiuncoCopy2',
      type: 'image',
      rect: ['163px','-87px','118px','462px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['-1.034']],
      id: 'Q4-GiuncoCopy',
      type: 'image',
      rect: ['57px','-87px','118px','462px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Giunco.png','0px','0px']
   },
   {
      id: 'Q4-Cespuglio',
      type: 'image',
      rect: ['0px','10px','560px','398px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Cespuglio.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-GiuncoCopy}": [
            ["transform", "scaleX", '-1.0339'],
            ["style", "left", '57px'],
            ["style", "top", '-87px']
         ],
         "${symbolSelector}": [
            ["style", "height", '462px'],
            ["style", "width", '560px']
         ],
         "${_Q4-Giunco}": [
            ["style", "left", '251px'],
            ["style", "top", '-122px']
         ],
         "${_Q4-GiuncoCopy2}": [
            ["style", "top", '-87px'],
            ["style", "left", '163px'],
            ["transform", "rotateZ", '-12deg']
         ],
         "${_Q4-Cespuglio}": [
            ["style", "left", '0px'],
            ["style", "top", '10px']
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
         ]
      }
   }
},
"Scoiattolo": {
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
      rect: ['250px','437px','180px','74px','auto','auto'],
      id: 'Q4-Braccio',
      transform: [[0,0],['9'],[],['0.86','0.86']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Braccio.png','0px','0px']
   },
   {
      rect: ['62px','367px','366px','422px','auto','auto'],
      id: 'Q4-Corpo',
      transform: [[0,0],['9']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Corpo.png','0px','0px']
   },
   {
      rect: ['58px','34px','289px','461px','auto','auto'],
      id: 'Q4-Testa',
      transform: [[0,0],['20'],[],['0.95','0.95']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Testa}": [
            ["style", "-webkit-transform-origin", [55,84], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55,84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.95'],
            ["transform", "rotateZ", '17deg'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '58px'],
            ["style", "top", '34px']
         ],
         "${_Q4-Corpo}": [
            ["style", "top", '367px'],
            ["style", "left", '62px'],
            ["transform", "rotateZ", '9deg']
         ],
         "${_Q4-Braccio}": [
            ["style", "-webkit-transform-origin", [1,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [1,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.86'],
            ["transform", "rotateZ", '9deg'],
            ["transform", "scaleX", '0.86'],
            ["style", "left", '249px'],
            ["style", "top", '433px']
         ],
         "${symbolSelector}": [
            ["style", "height", '642px'],
            ["style", "width", '439px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1861,
         autoPlay: false,
         timeline: [
            { id: "eid10396", tween: [ "transform", "${_Q4-Testa}", "rotateZ", '-3deg', { fromValue: '17deg'}], position: 0, duration: 600, easing: "easeInOutQuad" },
            { id: "eid10404", tween: [ "transform", "${_Q4-Testa}", "rotateZ", '17deg', { fromValue: '-3deg'}], position: 1352, duration: 509, easing: "easeOutQuad" },
            { id: "eid10496", tween: [ "style", "${_Q4-Braccio}", "top", '413px', { fromValue: '433px'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid10498", tween: [ "style", "${_Q4-Braccio}", "top", '413px', { fromValue: '413px'}], position: 1197, duration: 0, easing: "easeOutQuad" },
            { id: "eid10500", tween: [ "style", "${_Q4-Braccio}", "top", '413px', { fromValue: '413px'}], position: 1632, duration: 0, easing: "easeOutQuad" },
            { id: "eid10495", tween: [ "style", "${_Q4-Braccio}", "left", '265px', { fromValue: '249px'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid10499", tween: [ "style", "${_Q4-Braccio}", "left", '249px', { fromValue: '265px'}], position: 1197, duration: 435, easing: "easeOutQuad" },
            { id: "eid10454", tween: [ "transform", "${_Q4-Braccio}", "rotateZ", '-28deg', { fromValue: '9deg'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid10456", tween: [ "transform", "${_Q4-Braccio}", "rotateZ", '9deg', { fromValue: '-28deg'}], position: 1197, duration: 435, easing: "easeOutQuad" }         ]
      }
   }
},
"Fiore-Fragole": {
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
      id: 'Q4-Fiore-Fragole',
      type: 'image',
      rect: ['0px','0px','55px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fiore-Fragole.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '55px']
         ],
         "${_Q4-Fiore-Fragole}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '56px'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 720,
         autoPlay: false,
         timeline: [
            { id: "eid9600", tween: [ "transform", "${_Q4-Fiore-Fragole}", "rotateZ", '365deg', { fromValue: '0deg'}], position: 0, duration: 720, easing: "easeInOutQuad" }         ]
      }
   }
},
"FragoleStatiche": {
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
      id: 'FragStat',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy2',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'FragStatCopy3',
      type: 'rect',
      userClass: 'FragStat',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FragStatCopy2',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStatCopy3',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStat',
      symbolName: 'FragStat'
   },
   {
      id: 'FragStatCopy',
      symbolName: 'FragStat'
   }   ]
   },
   states: {
      "Base State": {
         "${_FragStatCopy}": [
            ["style", "left", '17px'],
            ["style", "top", '114px']
         ],
         "${_FragStatCopy2}": [
            ["style", "left", '-134px'],
            ["style", "top", '161px']
         ],
         "${_FragStatCopy3}": [
            ["style", "left", '63px'],
            ["style", "top", '215px']
         ],
         "${symbolSelector}": [
            ["style", "height", '168px'],
            ["style", "width", '202px']
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
            { id: "eid9635", tween: [ "style", "${_FragStatCopy3}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9632", tween: [ "style", "${_FragStatCopy2}", "top", '161px', { fromValue: '161px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9630", tween: [ "style", "${_FragStatCopy}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9629", tween: [ "style", "${_FragStatCopy}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9636", tween: [ "style", "${_FragStatCopy3}", "top", '215px', { fromValue: '215px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9631", tween: [ "style", "${_FragStatCopy2}", "left", '-134px', { fromValue: '-134px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fragola-1": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','55px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-2.png','0px','0px']
   },
   {
      id: '_1_col',
      type: 'image',
      rect: ['195.7%','-135.6%','435px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '55px']
         ],
         "${__1_col}": [
            ["style", "top", '-104.35%'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '211px'],
            ["style", "left", '-204.82%'],
            ["style", "width", '270px']
         ],
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3448,
         autoPlay: false,
         timeline: [
            { id: "eid9944", tween: [ "style", "${_Q4-Fragola-1}", "top", '-245px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9950", tween: [ "style", "${_Q4-Fragola-1}", "top", '138px', { fromValue: '-245px'}], position: 1899, duration: 250 },
            { id: "eid9952", tween: [ "style", "${_Q4-Fragola-1}", "top", '95px', { fromValue: '138px'}], position: 2149, duration: 187 },
            { id: "eid9954", tween: [ "style", "${_Q4-Fragola-1}", "top", '137px', { fromValue: '95px'}], position: 2336, duration: 164 },
            { id: "eid9931", tween: [ "transform", "${__1_col}", "scaleY", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9932", tween: [ "transform", "${__1_col}", "scaleY", '0.02', { fromValue: '1.25'}], position: 1899, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9936", tween: [ "transform", "${_Q4-Fragola-1}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9960", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 137 },
            { id: "eid9961", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-45deg', { fromValue: '18deg'}], position: 137, duration: 113 },
            { id: "eid9962", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '-45deg'}], position: 250, duration: 124 },
            { id: "eid9963", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 374, duration: 126 },
            { id: "eid9945", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 444 },
            { id: "eid9955", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 1899, duration: 250 },
            { id: "eid9956", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2149, duration: 187 },
            { id: "eid9957", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-19deg', { fromValue: '-12deg'}], position: 2336, duration: 164 },
            { id: "eid9935", tween: [ "transform", "${_Q4-Fragola-1}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9933", tween: [ "style", "${__1_col}", "left", '230.81%', { fromValue: '-204.82%'}], position: 739, duration: 439, easing: "easeInQuad" },
            { id: "eid9934", tween: [ "style", "${__1_col}", "left", '-154.29%', { fromValue: '230.81%'}], position: 1899, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9927", tween: [ "transform", "${__1_col}", "scaleX", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9928", tween: [ "transform", "${__1_col}", "scaleX", '0.02', { fromValue: '1.25'}], position: 1899, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9943", tween: [ "style", "${_Q4-Fragola-1}", "left", '19px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9949", tween: [ "style", "${_Q4-Fragola-1}", "left", '-197px', { fromValue: '19px'}], position: 1899, duration: 250 },
            { id: "eid9951", tween: [ "style", "${_Q4-Fragola-1}", "left", '-154px', { fromValue: '-197px'}], position: 2149, duration: 187 },
            { id: "eid9953", tween: [ "style", "${_Q4-Fragola-1}", "left", '-170px', { fromValue: '-154px'}], position: 2336, duration: 164 },
            { id: "eid9929", tween: [ "style", "${__1_col}", "top", '-484.66%', { fromValue: '-104.35%'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9930", tween: [ "style", "${__1_col}", "top", '604.35%', { fromValue: '-484.66%'}], position: 1899, duration: 601, easing: "easeInOutQuad" }         ]
      }
   }
},
"FragStat": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','46px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '46px']
         ],
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '68px'],
            ["style", "-webkit-transform-origin", [53,28], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53,28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 828,
         autoPlay: false,
         timeline: [
            { id: "eid9626", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 0, duration: 280, easing: "easeInOutQuad" },
            { id: "eid9627", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-29deg', { fromValue: '19deg'}], position: 280, duration: 283, easing: "easeInOutQuad" },
            { id: "eid9628", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 563, duration: 265, easing: "easeInOutQuad" }         ]
      }
   }
},
"Ricci": {
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
      userClass: 'riccio',
      id: 'Q4-Riccio-piccolo',
      type: 'image',
      rect: ['-517px','14px','125px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Riccio-piccolo.png','0px','0px']
   },
   {
      userClass: 'riccio',
      id: 'Q4-Riccio-Grande',
      type: 'image',
      rect: ['-369px','-9px','185px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Riccio-Grande.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Riccio-piccolo}": [
            ["style", "top", '14px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '90px'],
            ["style", "-webkit-transform-origin", [41,92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [41,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [41,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [41,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [41,92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-517px'],
            ["style", "width", '125px']
         ],
         "${_Q4-Riccio-Grande}": [
            ["style", "-webkit-transform-origin", [36,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [36,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [36,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [36,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [36,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '118px'],
            ["style", "top", '-9px'],
            ["style", "left", '-369px'],
            ["style", "width", '185px']
         ],
         "${symbolSelector}": [
            ["style", "height", '118px'],
            ["style", "width", '309px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 25500,
         autoPlay: false,
         timeline: [
            { id: "eid9689", tween: [ "style", "${_Q4-Riccio-piccolo}", "top", '21px', { fromValue: '14px'}], position: 4500, duration: 8000, easing: "easeInQuad" },
            { id: "eid9697", tween: [ "style", "${_Q4-Riccio-piccolo}", "top", '0px', { fromValue: '21px'}], position: 12500, duration: 1250, easing: "easeInQuad" },
            { id: "eid9701", tween: [ "style", "${_Q4-Riccio-piccolo}", "top", '28px', { fromValue: '0px'}], position: 13750, duration: 2000, easing: "easeOutQuad" },
            { id: "eid9699", tween: [ "style", "${_Q4-Riccio-piccolo}", "top", '28px', { fromValue: '28px'}], position: 15750, duration: 3750, easing: "easeOutQuad" },
            { id: "eid9738", tween: [ "style", "${_Q4-Riccio-piccolo}", "-webkit-transform-origin", [41,92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [41,92]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11568", tween: [ "style", "${_Q4-Riccio-piccolo}", "-moz-transform-origin", [41,92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [41,92]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11569", tween: [ "style", "${_Q4-Riccio-piccolo}", "-ms-transform-origin", [41,92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [41,92]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11570", tween: [ "style", "${_Q4-Riccio-piccolo}", "msTransformOrigin", [41,92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [41,92]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11571", tween: [ "style", "${_Q4-Riccio-piccolo}", "-o-transform-origin", [41,92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [41,92]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9739", tween: [ "style", "${_Q4-Riccio-Grande}", "-webkit-transform-origin", [36,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36,91]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11572", tween: [ "style", "${_Q4-Riccio-Grande}", "-moz-transform-origin", [36,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36,91]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11573", tween: [ "style", "${_Q4-Riccio-Grande}", "-ms-transform-origin", [36,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36,91]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11574", tween: [ "style", "${_Q4-Riccio-Grande}", "msTransformOrigin", [36,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36,91]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11575", tween: [ "style", "${_Q4-Riccio-Grande}", "-o-transform-origin", [36,91], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36,91]}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid9744", tween: [ "transform", "${_Q4-Riccio-piccolo}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 4500, duration: 7000, easing: "easeInOutQuad" },
            { id: "eid9745", tween: [ "transform", "${_Q4-Riccio-piccolo}", "rotateZ", '1deg', { fromValue: '-2deg'}], position: 11500, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid9746", tween: [ "transform", "${_Q4-Riccio-piccolo}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 13500, duration: 3105, easing: "easeInOutQuad" },
            { id: "eid9688", tween: [ "style", "${_Q4-Riccio-piccolo}", "left", '-107px', { fromValue: '-517px'}], position: 4500, duration: 5859, easing: "easeInQuad" },
            { id: "eid9695", tween: [ "style", "${_Q4-Riccio-piccolo}", "left", '210px', { fromValue: '-107px'}], position: 10359, duration: 2141, easing: "easeInOutQuad" },
            { id: "eid9696", tween: [ "style", "${_Q4-Riccio-piccolo}", "left", '371px', { fromValue: '210px'}], position: 12500, duration: 1250, easing: "easeInQuad" },
            { id: "eid9700", tween: [ "style", "${_Q4-Riccio-piccolo}", "left", '700px', { fromValue: '371px'}], position: 13750, duration: 2000, easing: "easeOutQuad" },
            { id: "eid9698", tween: [ "style", "${_Q4-Riccio-piccolo}", "left", '908px', { fromValue: '700px'}], position: 15750, duration: 3750, easing: "easeOutQuad" },
            { id: "eid9685", tween: [ "style", "${_Q4-Riccio-Grande}", "top", '-10px', { fromValue: '-9px'}], position: 4500, duration: 5750, easing: "easeInQuad" },
            { id: "eid9691", tween: [ "style", "${_Q4-Riccio-Grande}", "top", '19px', { fromValue: '-10px'}], position: 10250, duration: 4750, easing: "easeInQuad" },
            { id: "eid9703", tween: [ "style", "${_Q4-Riccio-Grande}", "top", '0px', { fromValue: '19px'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid9694", tween: [ "style", "${_Q4-Riccio-Grande}", "top", '0px', { fromValue: '0px'}], position: 15750, duration: 3750, easing: "easeOutQuad" },
            { id: "eid9740", tween: [ "transform", "${_Q4-Riccio-Grande}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 4500, duration: 3393, easing: "easeInOutQuad" },
            { id: "eid9741", tween: [ "transform", "${_Q4-Riccio-Grande}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 7893, duration: 3357, easing: "easeInOutQuad" },
            { id: "eid9742", tween: [ "transform", "${_Q4-Riccio-Grande}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 11250, duration: 3000, easing: "easeInOutQuad" },
            { id: "eid9743", tween: [ "transform", "${_Q4-Riccio-Grande}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 14250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid9684", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '62px', { fromValue: '-369px'}], position: 4500, duration: 5750, easing: "easeInQuad" },
            { id: "eid9690", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '340px', { fromValue: '62px'}], position: 10250, duration: 1750, easing: "easeInOutQuad" },
            { id: "eid9692", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '897px', { fromValue: '340px'}], position: 12000, duration: 3000, easing: "easeInQuad" },
            { id: "eid9702", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '947px', { fromValue: '897px'}], position: 15000, duration: 750, easing: "easeOutQuad" },
            { id: "eid9693", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '1068px', { fromValue: '947px'}], position: 15750, duration: 3750, easing: "easeOutQuad" },
            { id: "eid10681", tween: [ "style", "${_Q4-Riccio-Grande}", "left", '1068px', { fromValue: '1068px'}], position: 23500, duration: 0 }         ]
      }
   }
},
"LibellulaAuto": {
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
      id: 'Q4-Libellula-Top',
      type: 'image',
      rect: ['0px','0px','86px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Libellula-Top.png','0px','0px']
   },
   {
      rect: ['13px','34px','86px','67px','auto','auto'],
      id: 'Q4-Libellula-TopCopy',
      type: 'image',
      autoOrient: 'true',
      fill: ['rgba(0,0,0,0)','images/Q4-Libellula-Top.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Libellula-TopCopy}": [
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["motion", "location", '56px 67.5px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '86px']
         ],
         "${_Q4-Libellula-Top}": [
            ["style", "top", '34px'],
            ["style", "height", '67px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-103deg'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '1'],
            ["style", "left", '13px'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         timeline: [
            { id: "eid9863", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-95deg', { fromValue: '-103deg'}], position: 699, duration: 439, easing: "easeInOutBack" },
            { id: "eid9865", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-35deg', { fromValue: '-95deg'}], position: 1138, duration: 439, easing: "easeInOutBack" },
            { id: "eid9866", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-159deg', { fromValue: '-35deg'}], position: 1576, duration: 878, easing: "easeInOutBack" },
            { id: "eid9867", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-68deg', { fromValue: '-159deg'}], position: 2455, duration: 110, easing: "easeInOutBack" },
            { id: "eid9868", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-88deg', { fromValue: '-68deg'}], position: 2564, duration: 658, easing: "easeInOutBack" },
            { id: "eid9869", tween: [ "transform", "${_Q4-Libellula-Top}", "rotateZ", '-140deg', { fromValue: '-88deg'}], position: 3222, duration: 219, easing: "easeInOutBack" },
            { id: "eid9848", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-255px', { fromValue: '13px'}], position: 699, duration: 439, easing: "easeInOutBack" },
            { id: "eid9871", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-483px', { fromValue: '-255px'}], position: 1138, duration: 388, easing: "easeInOutBack" },
            { id: "eid9850", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-719px', { fromValue: '-483px'}], position: 1526, duration: 380, easing: "easeInOutBack" },
            { id: "eid9852", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-983px', { fromValue: '-719px'}], position: 1906, duration: 658, easing: "easeInOutBack" },
            { id: "eid9854", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-1006px', { fromValue: '-983px'}], position: 2564, duration: 219, easing: "easeInOutBack" },
            { id: "eid9856", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-958px', { fromValue: '-1006px'}], position: 2784, duration: 219, easing: "easeInOutBack" },
            { id: "eid9859", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-1002px', { fromValue: '-958px'}], position: 3003, duration: 219, easing: "easeInOutBack" },
            { id: "eid9860", tween: [ "style", "${_Q4-Libellula-Top}", "left", '-1336px', { fromValue: '-1002px'}], position: 3222, duration: 329, easing: "easeInOutBack" },
            { id: "eid11327", tween: [ "motion", "${_Q4-Libellula-TopCopy}", [[56,67.5,0,0],[-97.67,54.89,-72.64,70.41,-150.33,145.71],[-223.36,215.02,-119.84,16.73,-308.27,43.03],[-366.19,132.29,-108.79,-4.16,-145.94,-5.59],[-461.98,151.09,-118.26,-2.99]]], position: 1132, duration: 2511 },
            { id: "eid11328", tween: [ "motion", "${_Q4-Libellula-TopCopy}", [[-461.98,151.09,-172.22,-4.35],[-591.41,70.7,-179.31,-22.52]]], position: 3643, duration: 508 },
            { id: "eid11329", tween: [ "motion", "${_Q4-Libellula-TopCopy}", [[-591.41,70.7,-191.71,-24.08],[-790.54,45.8,-80.25,-81.09,-148.22,-149.78],[-885.15,-44.97,-248.54,8.88,-176.93,6.32],[-1019.38,135.13,-548.19,-680.62,-102.05,-126.71],[-1216.12,82.43,0,0]]], position: 4152, duration: 1598 },
            { id: "eid9845", tween: [ "transform", "${_Q4-Libellula-Top}", "scaleY", '1', { fromValue: '1'}], position: 699, duration: 0, easing: "easeInOutQuad" },
            { id: "eid11373", tween: [ "transform", "${_Q4-Libellula-TopCopy}", "rotateZ", '-66deg', { fromValue: '0deg'}], position: 0, duration: 3643 },
            { id: "eid9849", tween: [ "style", "${_Q4-Libellula-Top}", "top", '79px', { fromValue: '34px'}], position: 699, duration: 439, easing: "easeInOutBack" },
            { id: "eid9870", tween: [ "style", "${_Q4-Libellula-Top}", "top", '20px', { fromValue: '79px'}], position: 1138, duration: 388, easing: "easeInOutBack" },
            { id: "eid9851", tween: [ "style", "${_Q4-Libellula-Top}", "top", '-128px', { fromValue: '20px'}], position: 1526, duration: 380, easing: "easeInOutBack" },
            { id: "eid9853", tween: [ "style", "${_Q4-Libellula-Top}", "top", '91px', { fromValue: '-128px'}], position: 1906, duration: 658, easing: "easeInOutBack" },
            { id: "eid9855", tween: [ "style", "${_Q4-Libellula-Top}", "top", '67px', { fromValue: '91px'}], position: 2564, duration: 219, easing: "easeInOutBack" },
            { id: "eid9857", tween: [ "style", "${_Q4-Libellula-Top}", "top", '83px', { fromValue: '67px'}], position: 2784, duration: 219, easing: "easeInOutBack" },
            { id: "eid9858", tween: [ "style", "${_Q4-Libellula-Top}", "top", '102px', { fromValue: '83px'}], position: 3003, duration: 219, easing: "easeInOutBack" },
            { id: "eid9861", tween: [ "style", "${_Q4-Libellula-Top}", "top", '375px', { fromValue: '102px'}], position: 3222, duration: 329, easing: "easeInOutBack" },
            { id: "eid11331", tween: [ "style", "${_Q4-Libellula-Top}", "display", 'none', { fromValue: 'block'}], position: 455, duration: 0, easing: "easeInOutBack" },
            { id: "eid9844", tween: [ "transform", "${_Q4-Libellula-Top}", "scaleX", '1', { fromValue: '1'}], position: 699, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fragola-2": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','55px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-2.png','0px','0px']
   },
   {
      id: '_1_col',
      type: 'image',
      rect: ['195.7%','-135.6%','435px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ],
         "${__1_col}": [
            ["style", "top", '-104.35%'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '211px'],
            ["style", "left", '-204.82%'],
            ["style", "width", '270px']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3451,
         autoPlay: false,
         timeline: [
            { id: "eid9943", tween: [ "style", "${_Q4-Fragola-1}", "left", '199px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9949", tween: [ "style", "${_Q4-Fragola-1}", "left", '-251px', { fromValue: '199px'}], position: 1947, duration: 250 },
            { id: "eid9951", tween: [ "style", "${_Q4-Fragola-1}", "left", '-238px', { fromValue: '-251px'}], position: 2197, duration: 187 },
            { id: "eid9953", tween: [ "style", "${_Q4-Fragola-1}", "left", '-243px', { fromValue: '-238px'}], position: 2384, duration: 164 },
            { id: "eid9931", tween: [ "transform", "${__1_col}", "scaleY", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9932", tween: [ "transform", "${__1_col}", "scaleY", '0.02', { fromValue: '1.25'}], position: 1947, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9936", tween: [ "transform", "${_Q4-Fragola-1}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9960", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 137 },
            { id: "eid9961", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-45deg', { fromValue: '18deg'}], position: 137, duration: 113 },
            { id: "eid9962", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '-45deg'}], position: 250, duration: 124 },
            { id: "eid9963", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 374, duration: 126 },
            { id: "eid9945", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 444 },
            { id: "eid9955", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 1947, duration: 250 },
            { id: "eid9956", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2197, duration: 187 },
            { id: "eid9957", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-19deg', { fromValue: '-12deg'}], position: 2384, duration: 164 },
            { id: "eid9935", tween: [ "transform", "${_Q4-Fragola-1}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9933", tween: [ "style", "${__1_col}", "left", '-229.74%', { fromValue: '-204.82%'}], position: 739, duration: 439, easing: "easeInQuad" },
            { id: "eid9934", tween: [ "style", "${__1_col}", "left", '-154.29%', { fromValue: '-229.74%'}], position: 1947, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9929", tween: [ "style", "${__1_col}", "top", '-421.62%', { fromValue: '-104.35%'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9930", tween: [ "style", "${__1_col}", "top", '604.35%', { fromValue: '-421.62%'}], position: 1947, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9944", tween: [ "style", "${_Q4-Fragola-1}", "top", '-263px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9950", tween: [ "style", "${_Q4-Fragola-1}", "top", '192px', { fromValue: '-263px'}], position: 1947, duration: 250 },
            { id: "eid9952", tween: [ "style", "${_Q4-Fragola-1}", "top", '118px', { fromValue: '192px'}], position: 2197, duration: 187 },
            { id: "eid9954", tween: [ "style", "${_Q4-Fragola-1}", "top", '164px', { fromValue: '118px'}], position: 2384, duration: 164 },
            { id: "eid9927", tween: [ "transform", "${__1_col}", "scaleX", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9928", tween: [ "transform", "${__1_col}", "scaleX", '0.02', { fromValue: '1.25'}], position: 1947, duration: 601, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fragola-3": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','55px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-2.png','0px','0px']
   },
   {
      id: '_1_col',
      type: 'image',
      rect: ['195.7%','-135.6%','435px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '55px']
         ],
         "${__1_col}": [
            ["style", "top", '-104.35%'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '211px'],
            ["style", "left", '-204.82%'],
            ["style", "width", '270px']
         ],
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3651,
         autoPlay: false,
         timeline: [
            { id: "eid9944", tween: [ "style", "${_Q4-Fragola-1}", "top", '-284px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9950", tween: [ "style", "${_Q4-Fragola-1}", "top", '173px', { fromValue: '-284px'}], position: 2000, duration: 250 },
            { id: "eid9952", tween: [ "style", "${_Q4-Fragola-1}", "top", '100px', { fromValue: '173px'}], position: 2250, duration: 187 },
            { id: "eid9954", tween: [ "style", "${_Q4-Fragola-1}", "top", '133px', { fromValue: '100px'}], position: 2437, duration: 164 },
            { id: "eid9931", tween: [ "transform", "${__1_col}", "scaleY", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9932", tween: [ "transform", "${__1_col}", "scaleY", '0.02', { fromValue: '1.25'}], position: 2000, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9936", tween: [ "transform", "${_Q4-Fragola-1}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9960", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 137 },
            { id: "eid9961", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-45deg', { fromValue: '18deg'}], position: 137, duration: 113 },
            { id: "eid9962", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '-45deg'}], position: 250, duration: 124 },
            { id: "eid9963", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 374, duration: 126 },
            { id: "eid9945", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 444 },
            { id: "eid9955", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 2000, duration: 250 },
            { id: "eid9956", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2250, duration: 187 },
            { id: "eid9957", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-19deg', { fromValue: '-12deg'}], position: 2437, duration: 164 },
            { id: "eid9935", tween: [ "transform", "${_Q4-Fragola-1}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9933", tween: [ "style", "${__1_col}", "left", '-727.04%', { fromValue: '-204.82%'}], position: 739, duration: 439, easing: "easeInQuad" },
            { id: "eid9934", tween: [ "style", "${__1_col}", "left", '-154.29%', { fromValue: '-727.04%'}], position: 2000, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9927", tween: [ "transform", "${__1_col}", "scaleX", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9928", tween: [ "transform", "${__1_col}", "scaleX", '0.02', { fromValue: '1.25'}], position: 2000, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9943", tween: [ "style", "${_Q4-Fragola-1}", "left", '-80px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9949", tween: [ "style", "${_Q4-Fragola-1}", "left", '-478px', { fromValue: '-80px'}], position: 2000, duration: 250 },
            { id: "eid9951", tween: [ "style", "${_Q4-Fragola-1}", "left", '-479px', { fromValue: '-478px'}], position: 2250, duration: 187 },
            { id: "eid9953", tween: [ "style", "${_Q4-Fragola-1}", "left", '-472px', { fromValue: '-479px'}], position: 2437, duration: 164 },
            { id: "eid9929", tween: [ "style", "${__1_col}", "top", '-444.49%', { fromValue: '-104.35%'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9930", tween: [ "style", "${__1_col}", "top", '604.35%', { fromValue: '-444.49%'}], position: 2000, duration: 601, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fragola-4": {
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
      id: 'Q4-Fragola-1',
      type: 'image',
      rect: ['0px','0px','55px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q4-Fragola-2.png','0px','0px']
   },
   {
      id: '_1_col',
      type: 'image',
      rect: ['195.7%','-135.6%','435px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Fragola-1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '55px']
         ],
         "${__1_col}": [
            ["style", "top", '-104.35%'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '211px'],
            ["style", "left", '-204.82%'],
            ["style", "width", '270px']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3449,
         autoPlay: false,
         timeline: [
            { id: "eid9943", tween: [ "style", "${_Q4-Fragola-1}", "left", '-163px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9949", tween: [ "style", "${_Q4-Fragola-1}", "left", '-269px', { fromValue: '-163px'}], position: 1948, duration: 250 },
            { id: "eid9951", tween: [ "style", "${_Q4-Fragola-1}", "left", '-255px', { fromValue: '-269px'}], position: 2198, duration: 187 },
            { id: "eid9953", tween: [ "style", "${_Q4-Fragola-1}", "left", '-237px', { fromValue: '-255px'}], position: 2385, duration: 164 },
            { id: "eid9931", tween: [ "transform", "${__1_col}", "scaleY", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9932", tween: [ "transform", "${__1_col}", "scaleY", '0.02', { fromValue: '1.25'}], position: 1948, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9936", tween: [ "transform", "${_Q4-Fragola-1}", "scaleY", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9960", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 137 },
            { id: "eid9961", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-45deg', { fromValue: '18deg'}], position: 137, duration: 113 },
            { id: "eid9962", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '18deg', { fromValue: '-45deg'}], position: 250, duration: 124 },
            { id: "eid9963", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 374, duration: 126 },
            { id: "eid9945", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 500, duration: 444 },
            { id: "eid9955", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 1948, duration: 250 },
            { id: "eid9956", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2198, duration: 187 },
            { id: "eid9957", tween: [ "transform", "${_Q4-Fragola-1}", "rotateZ", '-38deg', { fromValue: '-12deg'}], position: 2385, duration: 164 },
            { id: "eid9935", tween: [ "transform", "${_Q4-Fragola-1}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid9933", tween: [ "style", "${__1_col}", "left", '-52.05%', { fromValue: '-204.82%'}], position: 739, duration: 439, easing: "easeInQuad" },
            { id: "eid9934", tween: [ "style", "${__1_col}", "left", '-154.29%', { fromValue: '-52.05%'}], position: 1948, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9929", tween: [ "style", "${__1_col}", "top", '-651.4%', { fromValue: '-104.35%'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9930", tween: [ "style", "${__1_col}", "top", '604.35%', { fromValue: '-651.4%'}], position: 1948, duration: 601, easing: "easeInOutQuad" },
            { id: "eid9944", tween: [ "style", "${_Q4-Fragola-1}", "top", '-394px', { fromValue: '0px'}], position: 500, duration: 444 },
            { id: "eid9950", tween: [ "style", "${_Q4-Fragola-1}", "top", '11px', { fromValue: '-394px'}], position: 1948, duration: 250 },
            { id: "eid9952", tween: [ "style", "${_Q4-Fragola-1}", "top", '-73px', { fromValue: '11px'}], position: 2198, duration: 187 },
            { id: "eid9954", tween: [ "style", "${_Q4-Fragola-1}", "top", '-40px', { fromValue: '-73px'}], position: 2385, duration: 164 },
            { id: "eid9927", tween: [ "transform", "${__1_col}", "scaleX", '1.25', { fromValue: '0'}], position: 739, duration: 439, easing: "easeInOutQuad" },
            { id: "eid9928", tween: [ "transform", "${__1_col}", "scaleX", '0.02', { fromValue: '1.25'}], position: 1948, duration: 601, easing: "easeInOutQuad" }         ]
      }
   }
},
"libellulalat": {
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
      rect: ['-6px','-36px','130px','118px','auto','auto'],
      id: 'Q4-Libellula-Laterale',
      transform: [[0,0],['-15'],[],['0.62','0.62']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q4-Libellula-Laterale.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q4-Libellula-Laterale}": [
            ["style", "top", '-36px'],
            ["style", "-webkit-transform-origin", [48,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [48,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [48,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [48,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [48,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.62'],
            ["transform", "rotateZ", '-15deg'],
            ["transform", "scaleX", '0.62'],
            ["style", "height", '118px'],
            ["style", "left", '-6px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2457,
         autoPlay: false,
         timeline: [
            { id: "eid10518", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '-3deg', { fromValue: '-15deg'}], position: 0, duration: 412, easing: "easeInOutBack" },
            { id: "eid10519", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '-12deg', { fromValue: '-3deg'}], position: 412, duration: 432, easing: "easeInOutBack" },
            { id: "eid10520", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '9deg', { fromValue: '-12deg'}], position: 844, duration: 442, easing: "easeInOutBack" },
            { id: "eid10521", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '-15deg', { fromValue: '9deg'}], position: 1286, duration: 353, easing: "easeInOutBack" },
            { id: "eid10522", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '19deg', { fromValue: '-15deg'}], position: 1639, duration: 130, easing: "easeInOutBack" },
            { id: "eid10523", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '-14deg', { fromValue: '19deg'}], position: 1769, duration: 375, easing: "easeInOutBack" },
            { id: "eid10524", tween: [ "transform", "${_Q4-Libellula-Laterale}", "rotateZ", '-15deg', { fromValue: '-14deg'}], position: 2144, duration: 313, easing: "easeInOutBack" },
            { id: "eid10504", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '-67px', { fromValue: '-6px'}], position: 0, duration: 412, easing: "easeInOutBack" },
            { id: "eid10506", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '66px', { fromValue: '-67px'}], position: 412, duration: 432, easing: "easeInOutBack" },
            { id: "eid10509", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '-54px', { fromValue: '66px'}], position: 844, duration: 442, easing: "easeInOutBack" },
            { id: "eid10510", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '-44px', { fromValue: '-54px'}], position: 1286, duration: 353, easing: "easeInOutBack" },
            { id: "eid10512", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '-199px', { fromValue: '-44px'}], position: 1639, duration: 129, easing: "easeInOutBack" },
            { id: "eid10514", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '111px', { fromValue: '-199px'}], position: 1769, duration: 375, easing: "easeInOutBack" },
            { id: "eid10516", tween: [ "style", "${_Q4-Libellula-Laterale}", "left", '-6px', { fromValue: '111px'}], position: 2144, duration: 313, easing: "easeInOutBack" },
            { id: "eid10505", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '-96px', { fromValue: '-36px'}], position: 0, duration: 412, easing: "easeInOutBack" },
            { id: "eid10507", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '-116px', { fromValue: '-96px'}], position: 412, duration: 432, easing: "easeInOutBack" },
            { id: "eid10508", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '-12px', { fromValue: '-116px'}], position: 844, duration: 442, easing: "easeInOutBack" },
            { id: "eid10511", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '-91px', { fromValue: '-12px'}], position: 1286, duration: 353, easing: "easeInOutBack" },
            { id: "eid10513", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '19px', { fromValue: '-91px'}], position: 1639, duration: 129, easing: "easeInOutBack" },
            { id: "eid10515", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '4px', { fromValue: '19px'}], position: 1769, duration: 375, easing: "easeInOutBack" },
            { id: "eid10517", tween: [ "style", "${_Q4-Libellula-Laterale}", "top", '-36px', { fromValue: '4px'}], position: 2144, duration: 313, easing: "easeInOutBack" }         ]
      }
   }
},
"MENUz": {
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
      id: 'Fondo-Menu',
      opacity: 0.7,
      rect: ['0px','21px','1160px','217px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['93px','95px','auto','auto','auto','auto'],
      userClass: 'home'
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      id: 'NEXT',
      userClass: 'next',
      rect: ['997px','99px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      id: 'PREV',
      userClass: 'prev',
      rect: ['225px','98px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      userClass: 'uno',
      rect: ['27.2%','33.2%','125px','98px','auto','auto'],
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/1_col.png','0px','0px']
   },
   {
      userClass: 'due',
      rect: ['38.6%','33.2%','124px','97px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/2_col.png','0px','0px']
   },
   {
      userClass: 'tre',
      rect: ['49.8%','33.2%','124px','97px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/3_col.png','0px','0px']
   },
   {
      userClass: 'quattro',
      rect: ['61%','33.2%','124px','97px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4_col.png','0px','0px']
   },
   {
      userClass: 'cinque',
      rect: ['72%','33.2%','124px','97px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/5_col.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.74','0.74']],
      id: 'musica',
      userClass: 'musica',
      rect: ['95px','118px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      rect: ['1013','0','auto','auto','auto','auto'],
      userClass: 'testina'
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
      symbolName: 'musica'
   },
   {
      id: 'NEXT',
      symbolName: 'NEXT'
   },
   {
      id: 'HOME_butt',
      symbolName: 'HOME_butt'
   }   ]
   },
   states: {
      "Base State": {
         "${_PREV}": [
            ["transform", "scaleX", '0.7'],
            ["style", "top", '98px'],
            ["transform", "scaleY", '0.7'],
            ["style", "left", '225px']
         ],
         "${_Numero_4}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '61.01%'],
            ["style", "width", '124px']
         ],
         "${_Numero_5}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '72.02%'],
            ["style", "width", '124px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '52px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '84px']
         ],
         "${_NEXT}": [
            ["style", "top", '99px'],
            ["style", "left", '997px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7']
         ],
         "${_Numero_1}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "opacity", '1'],
            ["style", "left", '27.18%'],
            ["style", "width", '125px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.74'],
            ["style", "top", '118px'],
            ["style", "left", '95px'],
            ["transform", "scaleY", '0.74']
         ],
         "${_Numero_2}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '38.55%'],
            ["style", "width", '124px']
         ],
         "${_Numero_3}": [
            ["style", "top", '33.23%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "opacity", '1'],
            ["style", "left", '49.77%'],
            ["style", "width", '124px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '21px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '217px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '0px'],
            ["style", "width", '1160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 415,
         autoPlay: false,
         timeline: [
            { id: "eid454", tween: [ "transform", "${_HOME_butt}", "scaleX", '0.59344', { fromValue: '0.59344'}], position: 415, duration: 0 },
            { id: "eid455", tween: [ "transform", "${_HOME_butt}", "scaleY", '0.59344', { fromValue: '0.59344'}], position: 415, duration: 0 },
            { id: "eid459", tween: [ "style", "${_HOME_butt}", "left", '84px', { fromValue: '84px'}], position: 415, duration: 0 },
            { id: "eid460", tween: [ "style", "${_HOME_butt}", "top", '52px', { fromValue: '52px'}], position: 415, duration: 0 }         ]
      }
   }
},
"Menu": {
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
         timeline: [
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '-121px', { fromValue: '0px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '-2px', { fromValue: '-121px'}], position: 223, duration: 161, easing: "easeInOutQuad" }         ]
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
"NEXT": {
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
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'NextImg',
      transform: [[0,0],[],[],['0.77','0.77']],
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
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'NextImg',
      transform: [[0,0],[],[],['0.77','0.77']],
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
"play": {
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
      id: 'Q0-Play',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/play.png','0px','0px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Quadro04");
