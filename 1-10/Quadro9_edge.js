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
            id:'Q9-albero-small',
            type:'image',
            rect:['770px','51px','427px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-albero-small.png",'0px','0px'],
            transform:[[],[],[],['0.41433','0.41433']]
         },
         {
            id:'Q9-erba2',
            type:'image',
            rect:['-23px','366px','1069px','275px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba2.png",'0px','0px']
         },
         {
            id:'Q9-erba1',
            type:'image',
            rect:['-9px','532px','1041px','289px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba1.png",'0px','0px']
         },
         {
            id:'pino',
            type:'rect',
            rect:['-35','197','auto','auto','auto','auto'],
            userClass:"pino"
         },
         {
            id:'alberogufo',
            type:'rect',
            rect:['71px','-102px','auto','auto','auto','auto']
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['-49px','272px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.76844','0.76844']]
         },
         {
            id:'Q9-cepspare',
            type:'image',
            rect:['-29px','543px','213px','238px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-cepspare.png",'0px','0px']
         },
         {
            id:'fiore',
            type:'rect',
            rect:['413px','170px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy',
            type:'rect',
            rect:['-53px','497px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'cespuglissimo',
            type:'rect',
            rect:['302px','244','auto','auto','auto','auto']
         },
         {
            id:'fioreCopy2',
            type:'rect',
            rect:['413px','170px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['41']]
         },
         {
            id:'fioreCopy3',
            type:'rect',
            rect:['413px','170px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy4',
            type:'rect',
            rect:['413px','170px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['37']]
         },
         {
            id:'fioreCopy5',
            type:'rect',
            rect:['804px','533px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['-35']]
         },
         {
            id:'fioreCopy6',
            type:'rect',
            rect:['872px','573px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy7',
            type:'rect',
            rect:['854px','416px','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'fioreCopy8',
            type:'rect',
            rect:['606px','458px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['5']]
         },
         {
            id:'fioreCopy9',
            type:'rect',
            rect:['402px','444px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['5']]
         },
         {
            id:'fioreCopy10',
            type:'rect',
            rect:['497px','348px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['-44']]
         },
         {
            id:'fioreCopy11',
            type:'rect',
            rect:['615px','323px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['23'],[],['0.22','0.22']]
         },
         {
            id:'fioreCopy12',
            type:'rect',
            rect:['719px','278px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['85'],[],['0.2','0.2']]
         },
         {
            id:'fioreCopy13',
            type:'rect',
            rect:['779px','271px','auto','auto','auto','auto'],
            userClass:"fiore",
            transform:[[],['-6'],[],['0.2','0.2']]
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['41px','451px','52px','63px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny1',
            type:'rect',
            rect:['422px','593px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny2',
            type:'rect',
            rect:['743px','607px','44px','31px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny3',
            type:'rect',
            rect:['915px','444px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny4',
            type:'rect',
            rect:['842px','446px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny5',
            type:'rect',
            rect:['735px','490px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny6',
            type:'rect',
            rect:['633px','503px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny7',
            type:'rect',
            rect:['479px','463px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny8',
            type:'rect',
            rect:['560px','351px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-bunny9',
            type:'rect',
            rect:['685px','333px','28px','24px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"triggers",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'trigger-pino',
            type:'rect',
            rect:['30px','255px','54px','67px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"",
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'Trigger-Gufo',
            type:'rect',
            rect:['399px','332px','36px','31px','auto','auto'],
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
            id:'Menu',
            type:'rect',
            rect:['-67','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'fioreCopy2',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy6',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy13',
            symbolName:'fiore'
         },
         {
            id:'pino',
            symbolName:'pino'
         },
         {
            id:'fioreCopy8',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy12',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy7',
            symbolName:'fiore'
         },
         {
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'fiore',
            symbolName:'fiore'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'fioreCopy5',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy10',
            symbolName:'fiore'
         },
         {
            id:'alberogufo',
            symbolName:'alberogufo'
         },
         {
            id:'fioreCopy9',
            symbolName:'fiore'
         },
         {
            id:'cespuglissimo',
            symbolName:'cespuglissimo'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'fioreCopy3',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy11',
            symbolName:'fiore'
         },
         {
            id:'fioreCopy4',
            symbolName:'fiore'
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
            ["style", "top", '573px'],
            ["style", "left", '872px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "scaleX", '0.24812']
         ],
         "${_fioreCopy13}": [
            ["style", "top", '271px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "rotateZ", '-6deg'],
            ["transform", "scaleX", '0.2'],
            ["style", "left", '779px']
         ],
         "${_trigger-coda}": [
            ["style", "top", '451px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '63px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '52px']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '272px'],
            ["transform", "scaleY", '0.76844'],
            ["style", "left", '-49px'],
            ["transform", "scaleX", '0.76844']
         ],
         "${_trigger-bunny7}": [
            ["style", "top", '463px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '479px'],
            ["style", "width", '28px']
         ],
         "${_Q9-albero-small}": [
            ["style", "top", '51px'],
            ["transform", "scaleY", '0.41433'],
            ["style", "left", '770px'],
            ["transform", "scaleX", '0.41433']
         ],
         "${_Q9-erba2}": [
            ["style", "top", '366px'],
            ["style", "height", '275px'],
            ["style", "left", '-23px'],
            ["style", "width", '1069px']
         ],
         "${_cespuglissimo}": [
            ["transform", "scaleX", '0.89234'],
            ["style", "top", '270px'],
            ["transform", "scaleY", '0.89234'],
            ["style", "left", '302px']
         ],
         "${_fioreCopy2}": [
            ["style", "top", '581px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '41deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '330px']
         ],
         "${_fioreCopy}": [
            ["style", "top", '497px'],
            ["style", "left", '-53px'],
            ["transform", "scaleY", '0.3123'],
            ["transform", "scaleX", '0.3123']
         ],
         "${_fiore}": [
            ["transform", "scaleX", '0.24812'],
            ["style", "top", '581px'],
            ["transform", "scaleY", '0.24812'],
            ["style", "left", '4px']
         ],
         "${_trigger-bunny8}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '24px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '560px'],
            ["style", "width", '28px']
         ],
         "${_fioreCopy4}": [
            ["style", "top", '586px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '633px']
         ],
         "${_Q9-cepspare}": [
            ["style", "top", '543px'],
            ["style", "height", '238px'],
            ["style", "left", '-29px'],
            ["style", "width", '213px']
         ],
         "${_trigger-bunny5}": [
            ["style", "top", '490px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '735px'],
            ["style", "width", '28px']
         ],
         "${_trigger-bunny6}": [
            ["style", "top", '503px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '24px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '633px'],
            ["style", "width", '28px']
         ],
         "${_NUVOLA}": [
            ["style", "top", '76px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '-23px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_trigger-bunny1}": [
            ["style", "top", '593px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '422px'],
            ["style", "width", '44px']
         ],
         "${_fioreCopy7}": [
            ["style", "top", '416px'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '854px'],
            ["transform", "scaleY", '0.24812']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_trigger-pino}": [
            ["style", "top", '255px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '30px'],
            ["style", "width", '54px']
         ],
         "${_fioreCopy12}": [
            ["style", "top", '278px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "rotateZ", '85deg'],
            ["transform", "scaleX", '0.2'],
            ["style", "left", '719px']
         ],
         "${_fioreCopy11}": [
            ["style", "top", '323px'],
            ["transform", "scaleY", '0.22'],
            ["transform", "rotateZ", '23deg'],
            ["transform", "scaleX", '0.22'],
            ["style", "left", '615px']
         ],
         "${_trigger-bunny9}": [
            ["style", "top", '333px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '685px'],
            ["style", "width", '28px']
         ],
         "${_fioreCopy3}": [
            ["style", "top", '533px'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '522px'],
            ["transform", "scaleY", '0.24812']
         ],
         "${_trigger-bunny2}": [
            ["style", "top", '607px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '31px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '743px'],
            ["style", "width", '44px']
         ],
         "${_trigger-bunny3}": [
            ["style", "top", '444px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '915px'],
            ["style", "width", '28px']
         ],
         "${_Trigger-Gufo}": [
            ["style", "top", '332px'],
            ["transform", "scaleY", '2.97591'],
            ["transform", "scaleX", '2.45946'],
            ["style", "height", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '399px'],
            ["style", "width", '36px']
         ],
         "${_fioreCopy9}": [
            ["style", "top", '444px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '402px']
         ],
         "${_fioreCopy8}": [
            ["style", "top", '458px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '606px']
         ],
         "${_fioreCopy5}": [
            ["style", "top", '533px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '-35deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '804px']
         ],
         "${_trigger-bunny4}": [
            ["style", "top", '446px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '24px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '842px'],
            ["style", "width", '28px']
         ],
         "${_fioreCopy10}": [
            ["style", "top", '348px'],
            ["transform", "scaleY", '0.24812'],
            ["transform", "rotateZ", '-44deg'],
            ["transform", "scaleX", '0.24812'],
            ["style", "left", '497px']
         ],
         "${_alberogufo}": [
            ["style", "left", '71px'],
            ["style", "top", '-102px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_Q9-erba1}": [
            ["style", "top", '532px'],
            ["style", "height", '289px'],
            ["style", "left", '-9px'],
            ["style", "width", '1041px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
            { id: "eid4324", tween: [ "style", "${_NUVOLA}", "top", '76px', { fromValue: '76px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4325", tween: [ "style", "${_NUVOLA}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0, easing: "easeOutBack" },
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
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '350px']
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
         "${_Num-10}": [
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
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[175,140.5,0,0],[414.45,85.73,421.02,22.34,335.45,17.8],[625.03,120.87,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[625.03,120.87,0,0],[823.85,251,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid4388", tween: [ "motion", "${_numerigruppo}", [[625.03,120.87,0,0],[823.85,251,0,0]]], position: 2158, duration: 0 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[823.85,251,-67.92,329.52],[525,948.01,0,0]]], position: 2158, duration: 269 },
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 }         ]
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
      fill: ['rgba(0,0,0,0)','images/Fumello-Q9.png','0px','0px','445.97px','286.67px']
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
            { id: "eid6395", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid6396", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
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
      rect: ['55px','72px','auto','auto','auto','auto']
   },
   {
      rect: ['1033px','82px','auto','auto','auto','auto'],
      id: 'NEXT',
      transform: [[0,0],[],[],['0.58314','0.58314']],
      type: 'rect',
      userClass: 'next'
   },
   {
      rect: ['17.6%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum1',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      rect: ['24.5%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum2',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      rect: ['31.3%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum3',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      rect: ['38.1%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum4',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      rect: ['45.1%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum5',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      rect: ['606px','72px','90px','70px','auto','auto'],
      id: 'Num-6',
      userClass: 'fumnum6',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum6.svg','0px','0px']
   },
   {
      rect: ['689px','72px','90px','70px','auto','auto'],
      id: 'Num-7',
      userClass: 'fumnum7',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum7.svg','0px','0px']
   },
   {
      rect: ['773px','72px','90px','70px','auto','auto'],
      id: 'Num-8',
      userClass: 'fumnum8',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum8.svg','0px','0px']
   },
   {
      rect: ['856px','72px','90px','70px','auto','auto'],
      id: 'Num-9',
      userClass: 'fumnum9',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum9.svg','0px','0px']
   },
   {
      rect: ['938px','72px','90px','70px','auto','auto'],
      id: 'Num-10',
      userClass: 'fumnum10',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum10.svg','0px','0px']
   },
   {
      rect: ['76px','129px','auto','auto','auto','auto'],
      id: 'musica',
      transform: [[0,0],[],[],['0.65','0.65']],
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
      transform: [[0,0],[],[],['0.65','0.65']],
      type: 'rect',
      userClass: 'reload'
   },
   {
      rect: ['147px','82px','auto','auto','auto','auto'],
      id: 'PREV2',
      transform: [[0,0],[],[],['0.58929','0.57999']],
      type: 'rect',
      userClass: 'prev'
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
            ["transform", "scaleX", '0.65'],
            ["style", "left", '109px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_Num-9}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
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
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '689px'],
            ["style", "width", '90px']
         ],
         "${_Num-10}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '938px'],
            ["style", "width", '90px']
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
         "${_PREV2}": [
            ["transform", "scaleX", '0.58929'],
            ["style", "top", '82px'],
            ["transform", "scaleY", '0.57999'],
            ["style", "left", '147px']
         ],
         "${_Numero_1}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '17.6%'],
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
         "${_Numero_3}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '31.26%'],
            ["style", "width", '90px']
         ],
         "${_Num-8}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '773px'],
            ["style", "width", '90px']
         ],
         "${_Num-6}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '606px'],
            ["style", "width", '90px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["style", "top", '82px'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
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
      type: 'image',
      id: 'Q0-Music',
      rect: ['0px','0px','80px','80px','auto','auto'],
      userClass: 'musicasvg',
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
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '103px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '0px']
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
      transform: [[0,0],[],[],['0.77','0.77']],
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
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '0px']
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
      userClass: 'nuvo',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Nuvola',
      rect: ['0px','-10px','185px','132px','auto','auto'],
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
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
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
      transform: [[0,0],['7'],[],['-0.88538','0.84166']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      rect: ['295px','140px','147px','179px','auto','auto'],
      id: 'Q9-scoia-braccio',
      transform: [[0,0],[],[],['0.62642','0.62642'],['13.7771%','53.006%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-braccio.png','0px','0px']
   },
   {
      id: 'Q9-scoia-corpo',
      type: 'image',
      rect: ['127px','179px','205px','321px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-corpo.png','0px','0px']
   },
   {
      rect: ['187px','-108px','211px','400px','auto','auto'],
      id: 'Q9-scoia-testa',
      transform: [[0,0],[],[],['0.9693','0.9693']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-testa.png','0px','0px']
   },
   {
      rect: ['293px','87px','133px','167px','auto','auto'],
      id: 'Q9-scoia-braccio-mano',
      transform: [[0,0],['15'],[],['0.46443','0.46443'],['56.7278%','91.7261%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-braccio-mano.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Q9-scoia-testa}": [
            ["style", "-webkit-transform-origin", [42.93,77.17], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.9693'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.9693'],
            ["style", "left", '187px'],
            ["style", "top", '-108px']
         ],
         "${_Q9-scoia-braccio-mano}": [
            ["style", "-webkit-transform-origin", [56.73,91.73], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [56.73,91.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [56.73,91.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [56.73,91.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [56.73,91.73],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.46443'],
            ["transform", "rotateZ", '15deg'],
            ["transform", "scaleX", '0.46443'],
            ["motion", "location", '358.06086489142px 221.55947704431px']
         ],
         "${_Q9-scoia-corpo}": [
            ["style", "top", '179px'],
            ["style", "height", '321px'],
            ["style", "left", '127px'],
            ["style", "width", '205px']
         ],
         "${_Q9-scoia-braccio}": [
            ["style", "top", '140px'],
            ["style", "-webkit-transform-origin", [13.78,53.01], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13.78,53.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13.78,53.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13.78,53.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13.78,53.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.62642'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '179px'],
            ["transform", "scaleX", '0.62642'],
            ["style", "left", '295px'],
            ["style", "width", '147px']
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
            "ani": 1045
         },
         timeline: [
            { id: "eid4372", tween: [ "transform", "${_Q9-scoia-braccio-mano}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 1171, duration: 328 },
            { id: "eid4373", tween: [ "transform", "${_Q9-scoia-braccio-mano}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 1499, duration: 222 },
            { id: "eid4374", tween: [ "transform", "${_Q9-scoia-braccio-mano}", "rotateZ", '-10deg', { fromValue: '14deg'}], position: 1721, duration: 241 },
            { id: "eid4375", tween: [ "transform", "${_Q9-scoia-braccio-mano}", "rotateZ", '15deg', { fromValue: '-10deg'}], position: 1962, duration: 266 },
            { id: "eid4052", tween: [ "transform", "${_Coda}", "rotateZ", '11deg', { fromValue: '7deg'}], position: 184, duration: 125, easing: "easeInOutQuad" },
            { id: "eid4053", tween: [ "transform", "${_Coda}", "rotateZ", '-4deg', { fromValue: '11deg'}], position: 309, duration: 112, easing: "easeInOutQuad" },
            { id: "eid4054", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 421, duration: 79, easing: "easeInOutQuad" },
            { id: "eid4109", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 1045, duration: 272, easing: "easeInOutQuad" },
            { id: "eid4110", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 1317, duration: 350, easing: "easeInOutQuad" },
            { id: "eid4111", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 1667, duration: 203, easing: "easeInOutQuad" },
            { id: "eid4386", tween: [ "transform", "${_Q9-scoia-testa}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 1114, duration: 385 },
            { id: "eid4387", tween: [ "transform", "${_Q9-scoia-testa}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1499, duration: 463 }         ]
      }
   }
},
"cespuglissimo": {
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
      transform: [[0,0],[],[],['0.66264','0.66264']],
      id: 'Q9-Cespuglio12',
      type: 'image',
      rect: ['71px','-66px','500px','306px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio12.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny8',
      userClass: 'bunny8',
      rect: ['200px','36px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny9',
      userClass: 'bunny9',
      rect: ['333px','11px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.66264','0.66264']],
      id: 'Q9-Cespuglio8-11-14',
      type: 'image',
      rect: ['-192px','-103px','1200px','617px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio8-11-14.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny3',
      userClass: 'bunny3',
      rect: ['593px','130px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny4',
      userClass: 'bunny4',
      rect: ['512px','128px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny5',
      userClass: 'bunny5',
      rect: ['391px','180px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny6',
      userClass: 'bunny6',
      rect: ['280px','197px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny7',
      userClass: 'bunny7',
      rect: ['104px','152px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.66264','0.66264']],
      id: 'Q9-Cespuglio5-7',
      type: 'image',
      rect: ['-193px','109px','1200px','386px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio5-7.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny1',
      userClass: 'bunny1',
      rect: ['52px','289px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.78179','0.78179']],
      id: 'bunny2',
      userClass: 'bunny2',
      rect: ['413px','306px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      transform: [[0,0],[],[],['0.66264','0.66264']],
      id: 'Q9-Cespuglio1-4',
      type: 'image',
      rect: ['-203px','224px','1200px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio1-4.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'bunny5',
      symbolName: 'bunny'
   },
   {
      id: 'bunny3',
      symbolName: 'bunny'
   },
   {
      id: 'bunny6',
      symbolName: 'bunny'
   },
   {
      id: 'bunny4',
      symbolName: 'bunny'
   },
   {
      id: 'bunny1',
      symbolName: 'bunny'
   },
   {
      id: 'bunny9',
      symbolName: 'bunny'
   },
   {
      id: 'bunny2',
      symbolName: 'bunny'
   },
   {
      id: 'bunny7',
      symbolName: 'bunny'
   },
   {
      id: 'bunny8',
      symbolName: 'bunny'
   }   ]
   },
   states: {
      "Base State": {
         "${_bunny3}": [
            ["transform", "scaleX", '0.78179'],
            ["style", "left", '593px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "top", '130px']
         ],
         "${_bunny2}": [
            ["style", "top", '306px'],
            ["transform", "scaleX", '0.78179'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '413px']
         ],
         "${_Q9-Cespuglio1-4}": [
            ["style", "top", '224px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-203px']
         ],
         "${_Q9-Cespuglio5-7}": [
            ["style", "top", '109px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-193px']
         ],
         "${_bunny4}": [
            ["transform", "scaleX", '0.78179'],
            ["style", "top", '128px'],
            ["style", "left", '512px'],
            ["transform", "scaleY", '0.78179']
         ],
         "${_bunny5}": [
            ["style", "top", '180px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '391px'],
            ["transform", "scaleX", '0.78179']
         ],
         "${symbolSelector}": [
            ["style", "height", '484px'],
            ["style", "width", '805px']
         ],
         "${_bunny8}": [
            ["transform", "scaleX", '0.78179'],
            ["style", "top", '36px'],
            ["style", "left", '200px'],
            ["transform", "scaleY", '0.78179']
         ],
         "${_bunny6}": [
            ["style", "top", '197px'],
            ["transform", "scaleX", '0.78179'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '280px']
         ],
         "${_bunny7}": [
            ["transform", "scaleX", '0.78179'],
            ["style", "left", '104px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "top", '152px']
         ],
         "${_Q9-Cespuglio12}": [
            ["style", "top", '-66px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '71px']
         ],
         "${_bunny1}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '52px'],
            ["transform", "scaleX", '0.78179']
         ],
         "${_Q9-Cespuglio8-11-14}": [
            ["style", "top", '-103px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-192px']
         ],
         "${_bunny9}": [
            ["style", "top", '11px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '333px'],
            ["transform", "scaleX", '0.78179']
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
"alberogufo": {
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
      id: 'Q9-albero',
      type: 'image',
      rect: ['0px','0px','608px','698px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-albero.png','0px','0px']
   },
   {
      type: 'group',
      id: 'gufo',
      rect: ['242px','402px','173','232','auto','auto'],
      transform: [[0,0],['21'],[],['0.39974','0.39974']],
      c: [
      {
         transform: [[0,0],[],[],['0.69733','0.69733']],
         filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
         id: 'Q9-gufo-corpo',
         rect: ['-39px','85px','248px','200px','auto','auto'],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-gufo-corpo.png','0px','0px']
      },
      {
         transform: [],
         id: 'Q9-gufo-testa',
         type: 'image',
         rect: ['13px','0px','150px','116px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q9-gufo-testa.png','0px','0px']
      }]
   },
   {
      id: 'Q9-albero-toppa',
      type: 'image',
      rect: ['232px','384px','158px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-albero-toppa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-gufo-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50.89,91.23], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '13px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q9-albero}": [
            ["style", "height", '698px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '608px']
         ],
         "${_Q9-albero-toppa}": [
            ["style", "height", '213px'],
            ["style", "top", '384px'],
            ["style", "left", '232px'],
            ["style", "width", '158px']
         ],
         "${symbolSelector}": [
            ["style", "height", '698px'],
            ["style", "width", '608px']
         ],
         "${_gufo}": [
            ["motion", "location", '328.5px 518px'],
            ["transform", "scaleX", '0.39974'],
            ["transform", "scaleY", '0.39974'],
            ["transform", "rotateZ", '21deg']
         ],
         "${_Q9-gufo-corpo}": [
            ["style", "-webkit-transform-origin", [51.38,11.62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.69733'],
            ["transform", "scaleX", '0.69733'],
            ["style", "left", '-39px'],
            ["style", "top", '85px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1975,
         autoPlay: false,
         timeline: [
            { id: "eid4336", tween: [ "transform", "${_Q9-gufo-testa}", "rotateZ", '29deg', { fromValue: '0deg'}], position: 670, duration: 416, easing: "easeInOutQuad" },
            { id: "eid4337", tween: [ "transform", "${_Q9-gufo-testa}", "rotateZ", '0deg', { fromValue: '29deg'}], position: 1087, duration: 255, easing: "easeInOutQuad" },
            { id: "eid4334", tween: [ "motion", "${_gufo}", [[328.5,518,0,0],[345.75,455.1,0,0]]], position: 0, duration: 963, easing: "easeInOutQuad" },
            { id: "eid4342", tween: [ "motion", "${_gufo}", [[345.75,455.1,0,0],[328.9,517.68,0,0]]], position: 1367, duration: 608, easing: "easeInOutQuad" }         ]
      }
   }
},
"bunny": {
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
      id: 'animatorebunny',
      type: 'group',
      rect: ['24','-1','80','206','auto','auto'],
      c: [
      {
         rect: ['-60px','6px','200px','287px','auto','auto'],
         id: 'Q9-bunny-corpo',
         transform: [[0,0],[],[],['0.38683','0.38683']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-corpo.png','0px','0px']
      },
      {
         rect: ['-50px','109px','124px','200px','auto','auto'],
         id: 'Q9-bunny-braccio',
         transform: [[0,0],['-28'],[],['0.21072','0.21072']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-braccio.png','0px','0px']
      },
      {
         rect: ['5px','108px','124px','200px','auto','auto'],
         id: 'Q9-bunny-braccioCopy',
         transform: [[0,0],['21'],[],['-0.21','0.21072']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-braccio.png','0px','0px']
      },
      {
         rect: ['-103px','-273px','287px','400px','auto','auto'],
         id: 'Q9-bunny-testa',
         transform: [[0,0],[],[],['0.27755','0.27755']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-bunny-corpo}": [
            ["style", "top", '6px'],
            ["transform", "scaleX", '0.38683'],
            ["transform", "scaleY", '0.38683'],
            ["style", "left", '-60px']
         ],
         "${_Q9-bunny-braccioCopy}": [
            ["style", "top", '108px'],
            ["transform", "scaleY", '0.21072'],
            ["transform", "rotateZ", '21deg'],
            ["transform", "scaleX", '-0.21'],
            ["style", "left", '5px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '205px'],
            ["style", "width", '103px']
         ],
         "${_Q9-bunny-testa}": [
            ["style", "top", '-273px'],
            ["transform", "scaleY", '0.27755'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.27755'],
            ["style", "left", '-103px'],
            ["style", "-webkit-transform-origin", [49.54,94.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_animatorebunny}": [
            ["motion", "location", '63.496609172601px 102.2483018897px']
         ],
         "${_Q9-bunny-braccio}": [
            ["style", "top", '109px'],
            ["transform", "scaleY", '0.21072'],
            ["transform", "rotateZ", '-28deg'],
            ["transform", "scaleX", '0.21072'],
            ["style", "left", '-50px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         labels: {
            "uscita": 222
         },
         timeline: [
            { id: "eid4364", tween: [ "transform", "${_Q9-bunny-braccioCopy}", "rotateZ", '-56deg', { fromValue: '21deg'}], position: 643, duration: 222, easing: "easeInOutQuad" },
            { id: "eid4366", tween: [ "transform", "${_Q9-bunny-braccioCopy}", "rotateZ", '21deg', { fromValue: '-56deg'}], position: 865, duration: 138, easing: "easeInOutQuad" },
            { id: "eid4369", tween: [ "transform", "${_Q9-bunny-testa}", "rotateZ", '28deg', { fromValue: '0deg'}], position: 460, duration: 451, easing: "easeInOutQuad" },
            { id: "eid4370", tween: [ "transform", "${_Q9-bunny-testa}", "rotateZ", '0deg', { fromValue: '28deg'}], position: 911, duration: 137, easing: "easeInOutQuad" },
            { id: "eid4365", tween: [ "transform", "${_Q9-bunny-braccio}", "rotateZ", '52deg', { fromValue: '-28deg'}], position: 644, duration: 222, easing: "easeInOutQuad" },
            { id: "eid4367", tween: [ "transform", "${_Q9-bunny-braccio}", "rotateZ", '-28deg', { fromValue: '52deg'}], position: 866, duration: 138, easing: "easeInOutQuad" },
            { id: "eid4360", tween: [ "motion", "${_animatorebunny}", [[63.5,102.26,0,0],[63.17,1.66,0,0]]], position: 222, duration: 604, easing: "easeInOutCirc" },
            { id: "eid4361", tween: [ "motion", "${_animatorebunny}", [[63.18,1.67,0,0],[63.18,27.7,0,0]]], position: 826, duration: 177, easing: "easeInOutCirc" }         ]
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
      rect: ['0px','0px','200px','198px','auto','auto'],
      id: 'Q9-fiore',
      transform: [[],[],[],[],['46.123%','50.5464%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-fiore.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-fiore}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [46.12,50.55], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [46.12,50.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [46.12,50.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [46.12,50.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [46.12,50.55],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1045.3383084945,
         autoPlay: false,
         timeline: [
            { id: "eid4391", tween: [ "transform", "${_Q9-fiore}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1045, easing: "easeOutElastic" }         ]
      }
   }
},
"pino": {
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
      rect: ['0px','0px','160px','187px','auto','auto'],
      id: 'Q9-pino',
      transform: [[],[],[],[],['54.27%','97.9925%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-pino.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-pino}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '187px'],
            ["style", "-webkit-transform-origin", [54.27,97.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [54.27,97.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54.27,97.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54.27,97.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54.27,97.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '160px']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1917.1936166698,
         autoPlay: false,
         timeline: [
            { id: "eid4433", tween: [ "transform", "${_Q9-pino}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 1193, easing: "easeInOutQuad" },
            { id: "eid4434", tween: [ "transform", "${_Q9-pino}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1193, duration: 724, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "Quadro-09");
