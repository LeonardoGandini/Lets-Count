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
            id:'Q6-fattoria',
            type:'image',
            rect:['-26px','367px','340px','173px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fattoria.png",'0px','0px'],
            transform:[[],[],[],['0.93913','0.93913']]
         },
         {
            id:'Q6-prato',
            type:'image',
            rect:['-16px','332px','1066px','473px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-prato.png",'0px','0px']
         },
         {
            id:'Mucca',
            type:'rect',
            rect:['451px','292px','auto','auto','auto','auto']
         },
         {
            id:'Q6-fogline',
            type:'image',
            rect:['592px','657px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.55777','0.55777']]
         },
         {
            id:'Q6-foglineCopy',
            type:'image',
            rect:['299px','551px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.54','0.54']]
         },
         {
            id:'Q6-foglineCopy2',
            type:'image',
            rect:['795px','449px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.45','0.45']]
         },
         {
            id:'Q6-foglia-albero2',
            type:'image',
            rect:['61px','607px','128px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-foglia-albero2.png",'0px','0px'],
            transform:[[],[],[],['0.67187','0.52201']]
         },
         {
            id:'Q6-albero',
            type:'image',
            rect:['-41px','6px','558px','729px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-albero.png",'0px','0px'],
            transform:[[],[],[],['1.05418','1.05418']]
         },
         {
            id:'Fiore-Bianco',
            type:'rect',
            rect:['1400','212','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'Fiore-Giallo',
            type:'rect',
            rect:['1525','198','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'Fiore-Rosa',
            type:'rect',
            rect:['1273','223','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['343px','248px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.91927','0.91927']]
         },
         {
            id:'Fiore-Arancione',
            type:'rect',
            rect:['1697','208','auto','auto','auto','auto'],
            userClass:"fiore"
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['521px','-232px','auto','auto','auto','auto']
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'Q6-foglia-albero3',
            type:'image',
            rect:['173px','597px','139px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-foglia-albero3.png",'0px','0px'],
            transform:[[],[],[],['0.70376','0.70376']]
         },
         {
            id:'foglie-spareCopy3',
            type:'rect',
            rect:['-16px','22px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy4',
            type:'rect',
            rect:['79px','-12px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy5',
            type:'rect',
            rect:['185px','-4px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy6',
            type:'rect',
            rect:['304px','0px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy8',
            type:'rect',
            rect:['395px','58px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy7',
            type:'rect',
            rect:['115px','78px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'Bird-4',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-4',
            type:'rect',
            rect:['268px','164px','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'Bird-5',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-5',
            type:'rect',
            rect:['268px','164px','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'Bird-6',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-6',
            type:'rect',
            rect:['268px','164px','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'Bird-3',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-3',
            type:'rect',
            rect:['203px','152px','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'foglie-spareCopy2',
            type:'rect',
            rect:['115px','161px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'foglie-spareCopy9',
            type:'rect',
            rect:['9px','201px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'Bird-1',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-1',
            type:'rect',
            rect:['268px','164px','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'foglie-spareCopy',
            type:'rect',
            rect:['291px','188px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'Bird-2',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto'],
            userClass:"ucelo"
         },
         {
            id:'foglie-bird-2',
            type:'rect',
            rect:['268','164','auto','auto','auto','auto'],
            userClass:"fogliebird"
         },
         {
            id:'foglie-spare',
            type:'rect',
            rect:['168px','234px','auto','auto','auto','auto'],
            userClass:"foglie-spare"
         },
         {
            id:'temp1',
            display:'none',
            type:'text',
            rect:['659px','19px','48px','83px','auto','auto'],
            text:"1",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'temp2',
            display:'none',
            type:'text',
            rect:['725px','65px','48px','83px','auto','auto'],
            text:"2",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'temp3',
            display:'none',
            type:'text',
            rect:['796px','22px','48px','83px','auto','auto'],
            text:"3",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'temp4',
            display:'none',
            type:'text',
            rect:['844px','85px','48px','83px','auto','auto'],
            text:"4",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'temp5',
            display:'none',
            type:'text',
            rect:['902px','20px','48px','83px','auto','auto'],
            text:"5",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'temp6',
            display:'none',
            type:'text',
            rect:['957px','85px','48px','83px','auto','auto'],
            text:"6",
            align:"left",
            font:['Arial, Helvetica, sans-serif',74,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'trigger-mucca-testa',
            type:'rect',
            rect:['744px','210px','132px','162px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'trigger-mucca-coda',
            type:'rect',
            rect:['921px','256px','132px','97px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'trigger-mucca-corpo',
            type:'rect',
            rect:['838px','344px','95px','45px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['605px','392px','140px','197px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','520','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'Fiore-Bianco',
            symbolName:'Fiore-Bianco'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'Fiore-Arancione',
            symbolName:'Fiore-Arancione'
         },
         {
            id:'Bird-3',
            symbolName:'Bird'
         },
         {
            id:'foglie-spareCopy4',
            symbolName:'foglie-spare'
         },
         {
            id:'Mucca',
            symbolName:'Mucca'
         },
         {
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'Bird-1',
            symbolName:'Bird'
         },
         {
            id:'Bird-6',
            symbolName:'Bird'
         },
         {
            id:'Bird-4',
            symbolName:'Bird'
         },
         {
            id:'foglie-spareCopy2',
            symbolName:'foglie-spare'
         },
         {
            id:'Fiore-Rosa',
            symbolName:'Fiore-Rosa'
         },
         {
            id:'foglie-spareCopy',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-bird-5',
            symbolName:'foglie-bird'
         },
         {
            id:'foglie-bird-6',
            symbolName:'foglie-bird'
         },
         {
            id:'Fiore-Giallo',
            symbolName:'Fiore-Giallo'
         },
         {
            id:'foglie-spareCopy8',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-spareCopy3',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-bird-2',
            symbolName:'foglie-bird'
         },
         {
            id:'Bird-5',
            symbolName:'Bird'
         },
         {
            id:'foglie-spare',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-spareCopy6',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-bird-4',
            symbolName:'foglie-bird'
         },
         {
            id:'foglie-spareCopy7',
            symbolName:'foglie-spare'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'foglie-bird-1',
            symbolName:'foglie-bird'
         },
         {
            id:'foglie-bird-3',
            symbolName:'foglie-bird'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'Bird-2',
            symbolName:'Bird'
         },
         {
            id:'foglie-spareCopy9',
            symbolName:'foglie-spare'
         },
         {
            id:'foglie-spareCopy5',
            symbolName:'foglie-spare'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_trigger-mucca-coda}": [
            ["style", "top", '256px'],
            ["style", "opacity", '0'],
            ["style", "left", '921px'],
            ["style", "height", '97px']
         ],
         "${_foglie-spareCopy5}": [
            ["style", "top", '-4px'],
            ["style", "left", '185px']
         ],
         "${_trigger-coda}": [
            ["style", "opacity", '0']
         ],
         "${_Bird-5}": [
            ["style", "top", '11px'],
            ["transform", "scaleX", '0.34259'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '-48px']
         ],
         "${_Q6-fattoria}": [
            ["style", "top", '367px'],
            ["transform", "scaleY", '0.93913'],
            ["style", "height", '173px'],
            ["transform", "scaleX", '0.93913'],
            ["style", "left", '-26px'],
            ["style", "width", '340px']
         ],
         "${_foglie-spareCopy}": [
            ["style", "top", '188px'],
            ["style", "left", '291px']
         ],
         "${_Fiore-Giallo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.73923'],
            ["transform", "scaleX", '0.73923'],
            ["style", "left", '875px'],
            ["style", "top", '371px']
         ],
         "${_temp1}": [
            ["style", "top", '19px'],
            ["style", "width", '48px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '659px'],
            ["style", "font-size", '74px']
         ],
         "${_Q6-foglia-albero3}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.70376'],
            ["transform", "scaleX", '0.70376'],
            ["style", "left", '173px'],
            ["style", "top", '597px']
         ],
         "${_trigger-mucca-corpo}": [
            ["style", "top", '344px'],
            ["style", "height", '45px'],
            ["style", "opacity", '0'],
            ["style", "left", '838px'],
            ["style", "width", '95px']
         ],
         "${_Q6-albero}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '1.05418'],
            ["style", "height", '729px'],
            ["transform", "scaleX", '1.05418'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-41px'],
            ["style", "width", '558px']
         ],
         "${_Bird-3}": [
            ["transform", "scaleX", '0.34259'],
            ["style", "top", '52px'],
            ["style", "left", '145px'],
            ["transform", "scaleY", '0.34259']
         ],
         "${_foglie-spare}": [
            ["style", "top", '234px'],
            ["style", "left", '168px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_foglie-spareCopy4}": [
            ["style", "top", '-12px'],
            ["style", "left", '79px']
         ],
         "${_temp6}": [
            ["style", "top", '85px'],
            ["style", "font-size", '74px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '957px'],
            ["style", "width", '48px']
         ],
         "${_Bird-1}": [
            ["style", "top", '169px'],
            ["transform", "scaleX", '0.34259'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '23px']
         ],
         "${_foglie-spareCopy3}": [
            ["style", "top", '22px'],
            ["style", "left", '-16px']
         ],
         "${_foglie-bird-3}": [
            ["style", "left", '203px'],
            ["style", "top", '152px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Bird-2}": [
            ["transform", "scaleX", '0.34259'],
            ["style", "left", '197px'],
            ["transform", "scaleY", '0.34259'],
            ["style", "top", '169px']
         ],
         "${_foglie-spareCopy6}": [
            ["style", "top", '0px'],
            ["style", "left", '304px']
         ],
         "${_NUVOLA}": [
            ["style", "top", '38px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '247px']
         ],
         "${_Q6-foglineCopy2}": [
            ["transform", "scaleX", '0.45'],
            ["style", "top", '449px'],
            ["style", "left", '795px'],
            ["transform", "scaleY", '0.45']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_foglie-spareCopy8}": [
            ["style", "top", '58px'],
            ["style", "left", '395px']
         ],
         "${_Mucca}": [
            ["style", "-webkit-transform-origin", [47.66,95.92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.42853'],
            ["transform", "scaleX", '0.42853'],
            ["style", "left", '628px'],
            ["style", "top", '51px']
         ],
         "${_foglie-bird-4}": [
            ["style", "left", '344px'],
            ["style", "top", '127px']
         ],
         "${_foglie-spareCopy2}": [
            ["style", "top", '161px'],
            ["style", "left", '115px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_foglie-bird-5}": [
            ["style", "left", '10px'],
            ["style", "top", '111px']
         ],
         "${_foglie-spareCopy9}": [
            ["style", "top", '201px'],
            ["style", "left", '9px']
         ],
         "${_Q6-fogline}": [
            ["style", "top", '657px'],
            ["transform", "scaleX", '0.55777'],
            ["transform", "scaleY", '0.55777'],
            ["style", "left", '592px']
         ],
         "${_Fiore-Arancione}": [
            ["style", "-webkit-transform-origin", [49.14,105.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.86014'],
            ["transform", "scaleX", '0.86014'],
            ["style", "left", '699px'],
            ["style", "top", '531px']
         ],
         "${_temp5}": [
            ["style", "top", '20px'],
            ["style", "width", '48px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '902px'],
            ["style", "font-size", '74px']
         ],
         "${_foglie-bird-1}": [
            ["style", "left", '81px'],
            ["style", "top", '269px']
         ],
         "${_temp4}": [
            ["style", "top", '85px'],
            ["style", "font-size", '74px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '844px'],
            ["style", "width", '48px']
         ],
         "${_Fiore-Rosa}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.90441'],
            ["transform", "scaleX", '0.90441'],
            ["style", "left", '873px'],
            ["style", "top", '578px']
         ],
         "${_foglie-bird-2}": [
            ["style", "left", '255px'],
            ["style", "top", '269px']
         ],
         "${_temp2}": [
            ["style", "top", '65px'],
            ["style", "font-size", '74px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '725px'],
            ["style", "width", '48px']
         ],
         "${_Bird-4}": [
            ["style", "top", '27px'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '286px'],
            ["transform", "scaleX", '0.34259']
         ],
         "${_trigger-mucca-testa}": [
            ["style", "opacity", '0']
         ],
         "${_temp3}": [
            ["style", "top", '22px'],
            ["style", "width", '48px'],
            ["style", "height", '83px'],
            ["style", "display", 'none'],
            ["style", "left", '796px'],
            ["style", "font-size", '74px']
         ],
         "${_foglie-spareCopy7}": [
            ["style", "top", '78px'],
            ["style", "left", '115px']
         ],
         "${_Q6-foglineCopy}": [
            ["transform", "scaleX", '0.54'],
            ["style", "left", '299px'],
            ["transform", "scaleY", '0.54'],
            ["style", "top", '551px']
         ],
         "${_Q6-foglia-albero2}": [
            ["style", "top", '607px'],
            ["transform", "scaleX", '0.67187'],
            ["transform", "scaleY", '0.52201'],
            ["style", "left", '61px']
         ],
         "${_Bird-6}": [
            ["transform", "scaleX", '0.34259'],
            ["style", "left", '184px'],
            ["transform", "scaleY", '0.34259'],
            ["style", "top", '-22px']
         ],
         "${_Fiore-Bianco}": [
            ["style", "-webkit-transform-origin", [31.76,104.65], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.67444'],
            ["transform", "scaleX", '0.67444'],
            ["style", "left", '36px'],
            ["style", "top", '471px']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '248px'],
            ["transform", "scaleX", '0.91927'],
            ["transform", "scaleY", '0.91927'],
            ["style", "left", '343px']
         ],
         "${_Q6-prato}": [
            ["style", "height", '473px'],
            ["style", "top", '332px'],
            ["style", "left", '-16px'],
            ["style", "width", '1066px']
         ],
         "${_foglie-bird-6}": [
            ["style", "left", '242px'],
            ["style", "top", '78px']
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
            { id: "eid3416", tween: [ "style", "${_temp4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid949", tween: [ "transform", "${_Mucca}", "scaleY", '0.42853', { fromValue: '0.42853'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid3421", tween: [ "style", "${_temp3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3415", tween: [ "style", "${_temp5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3414", tween: [ "style", "${_temp6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3190", tween: [ "style", "${_Mucca}", "top", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
            { id: "eid3422", tween: [ "style", "${_temp2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid948", tween: [ "transform", "${_Mucca}", "scaleX", '0.42853', { fromValue: '0.42853'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid8", tween: [ "style", "${_Mucca}", "-webkit-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid3969", tween: [ "style", "${_Mucca}", "-moz-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid3970", tween: [ "style", "${_Mucca}", "-ms-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid3971", tween: [ "style", "${_Mucca}", "msTransformOrigin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid3972", tween: [ "style", "${_Mucca}", "-o-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid3192", tween: [ "style", "${_Mucca}", "left", '628px', { fromValue: '628px'}], position: 0, duration: 0 },
            { id: "eid3413", tween: [ "style", "${_temp1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid3874", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
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
      transform: [[0,0],['7']],
      id: 'Coda2',
      type: 'image',
      rect: ['191px','139px','193px','223px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-braccio-DX',
      type: 'image',
      rect: ['0px','153px','124px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-braccio-DX.png','0px','0px']
   },
   {
      id: 'Q6-braccio-SX',
      type: 'image',
      rect: ['206px','186px','131px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-braccio-SX.png','0px','0px']
   },
   {
      id: 'Q6-corpo',
      type: 'image',
      rect: ['47px','211px','189px','293px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-corpo.png','0px','0px']
   },
   {
      transform: [[0,0],['-5']],
      id: 'Q6-Testa',
      type: 'image',
      rect: ['83px','8px','262px','301px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Coda2}": [
            ["style", "-webkit-transform-origin", [4.66,93.27], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.66,93.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.66,93.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.66,93.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.66,93.27],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '9deg'],
            ["style", "height", '223px'],
            ["style", "top", '139px'],
            ["style", "left", '191px'],
            ["style", "width", '193px']
         ],
         "${_Q6-braccio-SX}": [
            ["style", "-webkit-transform-origin", [-5.56,93.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '186px'],
            ["style", "left", '206px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '504px'],
            ["style", "width", '432px']
         ],
         "${_Q6-corpo}": [
            ["style", "left", '47px'],
            ["style", "top", '211px']
         ],
         "${_Q6-Testa}": [
            ["style", "top", '8px'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '301px'],
            ["style", "-webkit-transform-origin", [26.89,77.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["style", "width", '262px']
         ],
         "${_Q6-braccio-DX}": [
            ["style", "-webkit-transform-origin", [95.76,81.02], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '159px'],
            ["style", "left", '7px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8053,
         autoPlay: false,
         labels: {
            "coda": 370,
            "ani": 1190,
            "sparep": 2750,
            "ultima6": 4199,
            "speciale": 5608
         },
         timeline: [
            { id: "eid285", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-12deg', { fromValue: '-5deg'}], position: 1190, duration: 155 },
            { id: "eid300", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '10deg', { fromValue: '-12deg'}], position: 1345, duration: 305 },
            { id: "eid307", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '10deg'}], position: 1650, duration: 480 },
            { id: "eid320", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2750, duration: 498 },
            { id: "eid321", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 3248, duration: 307 },
            { id: "eid3151", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-12deg', { fromValue: '-5deg'}], position: 4199, duration: 155 },
            { id: "eid3152", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '10deg', { fromValue: '-12deg'}], position: 4354, duration: 305 },
            { id: "eid3153", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '10deg'}], position: 4659, duration: 480 },
            { id: "eid3308", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-36deg', { fromValue: '-5deg'}], position: 5608, duration: 439, easing: "easeInOutQuad" },
            { id: "eid3334", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-7deg', { fromValue: '-36deg'}], position: 6047, duration: 624, easing: "easeInOutQuad" },
            { id: "eid3335", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '-7deg'}], position: 6671, duration: 1079, easing: "easeInOutQuad" },
            { id: "eid290", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1345, duration: 45 },
            { id: "eid299", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-14deg', { fromValue: '-13deg'}], position: 1390, duration: 110 },
            { id: "eid291", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1500, duration: 150 },
            { id: "eid3154", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 4250, duration: 45 },
            { id: "eid3155", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-14deg', { fromValue: '-13deg'}], position: 4295, duration: 160 },
            { id: "eid3156", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 4455, duration: 100 },
            { id: "eid3166", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 4555, duration: 148 },
            { id: "eid3167", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '10deg', { fromValue: '-13deg'}], position: 4703, duration: 106 },
            { id: "eid3168", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-17deg', { fromValue: '10deg'}], position: 4809, duration: 154 },
            { id: "eid3169", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '-17deg'}], position: 4963, duration: 142 },
            { id: "eid3311", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '32deg', { fromValue: '-13deg'}], position: 5608, duration: 815 },
            { id: "eid3314", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-44deg', { fromValue: '32deg'}], position: 6423, duration: 373 },
            { id: "eid3315", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '8deg', { fromValue: '-44deg'}], position: 6796, duration: 181 },
            { id: "eid3379", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-17deg', { fromValue: '8deg'}], position: 6977, duration: 94 },
            { id: "eid3381", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '14deg', { fromValue: '-17deg'}], position: 7071, duration: 88 },
            { id: "eid3383", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-17deg', { fromValue: '14deg'}], position: 7159, duration: 75 },
            { id: "eid3385", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '18deg', { fromValue: '-17deg'}], position: 7234, duration: 67 },
            { id: "eid3387", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '18deg'}], position: 7301, duration: 89 },
            { id: "eid3389", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '5deg', { fromValue: '-13deg'}], position: 7390, duration: 144 },
            { id: "eid3391", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '5deg'}], position: 7534, duration: 108 },
            { id: "eid3939", tween: [ "transform", "${_Coda2}", "rotateZ", '33deg', { fromValue: '9deg'}], position: 370, duration: 255 },
            { id: "eid3940", tween: [ "transform", "${_Coda2}", "rotateZ", '25deg', { fromValue: '33deg'}], position: 625, duration: 125 },
            { id: "eid3941", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '25deg'}], position: 750, duration: 115 },
            { id: "eid3942", tween: [ "transform", "${_Coda2}", "rotateZ", '42deg', { fromValue: '9deg'}], position: 1798, duration: 106 },
            { id: "eid3943", tween: [ "transform", "${_Coda2}", "rotateZ", '30deg', { fromValue: '42deg'}], position: 1904, duration: 96 },
            { id: "eid3944", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '30deg'}], position: 2000, duration: 90 },
            { id: "eid3945", tween: [ "transform", "${_Coda2}", "rotateZ", '42deg', { fromValue: '9deg'}], position: 4458, duration: 165 },
            { id: "eid3946", tween: [ "transform", "${_Coda2}", "rotateZ", '30deg', { fromValue: '42deg'}], position: 4623, duration: 150 },
            { id: "eid3947", tween: [ "transform", "${_Coda2}", "rotateZ", '31deg', { fromValue: '30deg'}], position: 4773, duration: 140 },
            { id: "eid3948", tween: [ "transform", "${_Coda2}", "rotateZ", '17deg', { fromValue: '31deg'}], position: 4913, duration: 96 },
            { id: "eid3949", tween: [ "transform", "${_Coda2}", "rotateZ", '42deg', { fromValue: '17deg'}], position: 5009, duration: 130 },
            { id: "eid3950", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '42deg'}], position: 5139, duration: 70 },
            { id: "eid3951", tween: [ "transform", "${_Coda2}", "rotateZ", '1deg', { fromValue: '9deg'}], position: 5815, duration: 496, easing: "easeInOutQuad" },
            { id: "eid3952", tween: [ "transform", "${_Coda2}", "rotateZ", '45deg', { fromValue: '1deg'}], position: 6311, duration: 148, easing: "easeInOutQuad" },
            { id: "eid3953", tween: [ "transform", "${_Coda2}", "rotateZ", '19deg', { fromValue: '45deg'}], position: 6459, duration: 175, easing: "easeInOutQuad" },
            { id: "eid3954", tween: [ "transform", "${_Coda2}", "rotateZ", '44deg', { fromValue: '19deg'}], position: 6634, duration: 116, easing: "easeInOutQuad" },
            { id: "eid3955", tween: [ "transform", "${_Coda2}", "rotateZ", '21deg', { fromValue: '44deg'}], position: 6750, duration: 110, easing: "easeInOutQuad" },
            { id: "eid3956", tween: [ "transform", "${_Coda2}", "rotateZ", '38deg', { fromValue: '21deg'}], position: 6860, duration: 140, easing: "easeInOutQuad" },
            { id: "eid3957", tween: [ "transform", "${_Coda2}", "rotateZ", '26deg', { fromValue: '38deg'}], position: 7000, duration: 118, easing: "easeInOutQuad" },
            { id: "eid3958", tween: [ "transform", "${_Coda2}", "rotateZ", '43deg', { fromValue: '26deg'}], position: 7118, duration: 148, easing: "easeInOutQuad" },
            { id: "eid3959", tween: [ "transform", "${_Coda2}", "rotateZ", '26deg', { fromValue: '43deg'}], position: 7266, duration: 124, easing: "easeInOutQuad" },
            { id: "eid3960", tween: [ "transform", "${_Coda2}", "rotateZ", '9deg', { fromValue: '26deg'}], position: 7390, duration: 525, easing: "easeInOutQuad" },
            { id: "eid293", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 1295, duration: 255 },
            { id: "eid298", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 1550, duration: 100 },
            { id: "eid297", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '28deg', { fromValue: '7deg'}], position: 1650, duration: 148 },
            { id: "eid294", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '4deg', { fromValue: '28deg'}], position: 1798, duration: 107 },
            { id: "eid295", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '26deg', { fromValue: '4deg'}], position: 1904, duration: 96 },
            { id: "eid296", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 2000, duration: 200 },
            { id: "eid3157", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 4304, duration: 255 },
            { id: "eid3158", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 4559, duration: 100 },
            { id: "eid3159", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '28deg', { fromValue: '7deg'}], position: 4659, duration: 148 },
            { id: "eid3160", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '4deg', { fromValue: '28deg'}], position: 4807, duration: 106 },
            { id: "eid3161", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '26deg', { fromValue: '4deg'}], position: 4913, duration: 96 },
            { id: "eid3162", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 5009, duration: 200 },
            { id: "eid3312", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '-29deg', { fromValue: '0deg'}], position: 5608, duration: 815 },
            { id: "eid3313", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '21deg', { fromValue: '-29deg'}], position: 6423, duration: 373 },
            { id: "eid3316", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '-29deg', { fromValue: '21deg'}], position: 6796, duration: 181 },
            { id: "eid3380", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '14deg', { fromValue: '-29deg'}], position: 6977, duration: 94 },
            { id: "eid3382", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '-23deg', { fromValue: '14deg'}], position: 7071, duration: 88 },
            { id: "eid3384", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '17deg', { fromValue: '-23deg'}], position: 7159, duration: 75 },
            { id: "eid3386", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '-27deg', { fromValue: '17deg'}], position: 7234, duration: 67 },
            { id: "eid3388", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '13deg', { fromValue: '-27deg'}], position: 7301, duration: 89 },
            { id: "eid3390", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '-12deg', { fromValue: '13deg'}], position: 7390, duration: 144 },
            { id: "eid3392", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 7534, duration: 108 }         ]
      }
   }
},
"Mucca": {
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
      transform: [[0,0],['2']],
      id: 'Q6-mucca-coda',
      type: 'image',
      rect: ['372px','92px','169px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-coda.png','0px','0px']
   },
   {
      id: 'Q6-mucca-corpo',
      type: 'image',
      rect: ['108px','63px','297px','301px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-corpo.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-mucca-campana',
      type: 'image',
      rect: ['72px','200px','71px','84px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-campana.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-mucca-testa',
      type: 'image',
      rect: ['0px','0px','228px','229px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-mucca-corpo}": [
            ["style", "left", '108px'],
            ["style", "top", '63px']
         ],
         "${symbolSelector}": [
            ["style", "height", '364px'],
            ["style", "width", '543px']
         ],
         "${_Q6-mucca-coda}": [
            ["style", "top", '89px'],
            ["style", "-webkit-transform-origin", [-1.49,34.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '382px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_Q6-mucca-campana}": [
            ["style", "-webkit-transform-origin", [73.21,8.47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '200px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-mucca-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [64.56,57.01], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: false,
         labels: {
            "testa": 400,
            "coda": 2750,
            "speciale": 3642
         },
         timeline: [
            { id: "eid218", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 400, duration: 350, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '-17deg', { fromValue: '11deg'}], position: 750, duration: 422, easing: "easeInOutQuad" },
            { id: "eid220", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '3deg', { fromValue: '-17deg'}], position: 1172, duration: 253, easing: "easeInOutQuad" },
            { id: "eid221", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1425, duration: 325, easing: "easeInOutQuad" },
            { id: "eid3581", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 3642, duration: 1059 },
            { id: "eid3582", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 4701, duration: 1299 },
            { id: "eid223", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 922, duration: 146 },
            { id: "eid224", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '15deg', { fromValue: '-12deg'}], position: 1068, duration: 132 },
            { id: "eid225", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-18deg', { fromValue: '15deg'}], position: 1200, duration: 127 },
            { id: "eid227", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-10deg', { fromValue: '-18deg'}], position: 1327, duration: 133 },
            { id: "eid226", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1461, duration: 98 },
            { id: "eid229", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '-38deg', { fromValue: '2deg'}], position: 2750, duration: 250 },
            { id: "eid230", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '16deg', { fromValue: '-38deg'}], position: 3000, duration: 100 },
            { id: "eid231", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '2deg', { fromValue: '16deg'}], position: 3100, duration: 220 },
            { id: "eid3584", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '-28deg', { fromValue: '2deg'}], position: 4016, duration: 138 },
            { id: "eid3585", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '26deg', { fromValue: '-28deg'}], position: 4153, duration: 132 },
            { id: "eid3586", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '-35deg', { fromValue: '26deg'}], position: 4286, duration: 113 },
            { id: "eid3587", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '26deg', { fromValue: '-35deg'}], position: 4399, duration: 151 },
            { id: "eid3588", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '2deg', { fromValue: '26deg'}], position: 4549, duration: 600 }         ]
      }
   }
},
"Bird": {
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
      id: 'Group',
      type: 'group',
      rect: ['0','0','270','283','auto','auto'],
      c: [
      {
         type: 'image',
         transform: [],
         display: 'none',
         rect: ['0px','201px','100px','61px','auto','auto'],
         id: 'Q6-bird-coda',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-coda.png','0px','0px']
      },
      {
         transform: [[0,0],['-19']],
         id: 'Q6-bird-ala-DX',
         type: 'image',
         rect: ['23px','98px','86px','89px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-DX.png','0px','0px']
      },
      {
         transform: [[0,0],['19']],
         id: 'Q6-bird-ala-SX',
         type: 'image',
         rect: ['169px','104px','85px','83px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-SX.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.896','0.896']],
         id: 'Q6-bird-corpo',
         type: 'image',
         rect: ['77px','132px','125px','167px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-corpo.png','0px','0px']
      },
      {
         transform: [],
         id: 'Q6-bird-testa',
         type: 'image',
         rect: ['76px','0px','136px','151px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-bird-ala-SX}": [
            ["style", "-webkit-transform-origin", [10.12,74.59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '104px'],
            ["style", "left", '169px'],
            ["transform", "rotateZ", '-3deg']
         ],
         "${_Q6-bird-ala-DX}": [
            ["style", "-webkit-transform-origin", [91.89,74.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '98px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '-5deg']
         ],
         "${_Q6-bird-corpo}": [
            ["style", "-webkit-transform-origin", [50.72,5.68], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.896'],
            ["transform", "scaleX", '0.896'],
            ["style", "left", '77px'],
            ["style", "top", '132px']
         ],
         "${_Q6-bird-coda}": [
            ["style", "top", '201px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [95.05,20.63], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Group}": [
            ["motion", "location", '134.99166870117px 141.30833435059px']
         ],
         "${symbolSelector}": [
            ["style", "height", '283px'],
            ["style", "width", '254px']
         ],
         "${_Q6-bird-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50.05,93.35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '76px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2366,
         autoPlay: false,
         labels: {
            "resetto": 2000
         },
         timeline: [
            { id: "eid56", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '38deg', { fromValue: '-3deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid57", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '11deg', { fromValue: '38deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '19deg', { fromValue: '11deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid195", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '-3deg', { fromValue: '19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid2983", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '-11deg', { fromValue: '-3deg'}], position: 2000, duration: 185, easing: "easeInQuad" },
            { id: "eid2984", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '-3deg', { fromValue: '-11deg'}], position: 2185, duration: 181, easing: "easeInQuad" },
            { id: "eid62", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 175, duration: 167, easing: "easeInQuad" },
            { id: "eid63", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 342, duration: 167, easing: "easeInQuad" },
            { id: "eid64", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 508, duration: 167, easing: "easeInQuad" },
            { id: "eid2975", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0, easing: "easeInQuad" },
            { id: "eid2982", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2366, duration: 0, easing: "easeInQuad" },
            { id: "eid891", tween: [ "style", "${_Q6-bird-coda}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid193", tween: [ "motion", "${_Group}", [[135,141.32,0,0],[134.99,-1.46,0,0]]], position: 0, duration: 395, easing: "easeInQuad" },
            { id: "eid194", tween: [ "motion", "${_Group}", [[135,-1.45,0,0],[126.99,35.08,0,0]]], position: 395, duration: 305, easing: "easeInQuad" },
            { id: "eid2979", tween: [ "motion", "${_Group}", [[126.99,35.08,0,0],[135,141.5,0,0]]], position: 2000, duration: 366, easing: "easeInQuad" },
            { id: "eid55", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-37deg', { fromValue: '-5deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-8deg', { fromValue: '-37deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid59", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-19deg', { fromValue: '-8deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid196", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-5deg', { fromValue: '-19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid2985", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '12deg', { fromValue: '-5deg'}], position: 2000, duration: 185, easing: "easeInQuad" },
            { id: "eid2986", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-5deg', { fromValue: '12deg'}], position: 2185, duration: 181, easing: "easeInQuad" },
            { id: "eid65", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 300, duration: 205, easing: "easeInQuad" },
            { id: "eid68", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '-14deg', { fromValue: '33deg'}], position: 505, duration: 170, easing: "easeInQuad" },
            { id: "eid69", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 675, duration: 80, easing: "easeInQuad" }         ]
      }
   }
},
"foglie-bird": {
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
      transform: [[0,0],['8'],[],['0.6','0.6']],
      id: 'Q6-foglia-alberoCopy8',
      type: 'image',
      rect: ['-30px','-4px','210px','178px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-foglia-albero.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-foglia-alberoCopy8}": [
            ["style", "-webkit-transform-origin", [50.5,17.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.6'],
            ["transform", "rotateZ", '8deg'],
            ["transform", "scaleX", '0.6'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-30px'],
            ["style", "top", '-4px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '140px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 645,
         autoPlay: false,
         timeline: [
            { id: "eid172", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '-7deg', { fromValue: '8deg'}], position: 0, duration: 200, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '25deg', { fromValue: '-7deg'}], position: 200, duration: 260, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '8deg', { fromValue: '25deg'}], position: 460, duration: 185, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fiore-Rosa": {
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
      id: 'Q6-fiore-gambo1',
      type: 'image',
      rect: ['0px','61px','107px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo1.png','0px','0px']
   },
   {
      rect: ['17px','0px','103px','95px','auto','auto'],
      id: 'Q6-fiore-rosa',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-rosa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-rosa}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-fiore-gambo1}": [
            ["style", "left", '0px'],
            ["style", "top", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '136px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1632,
         autoPlay: false,
         timeline: [
            { id: "eid338", tween: [ "transform", "${_Q6-fiore-rosa}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1632, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Bianco": {
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
      id: 'Q6-fiore-gambo2',
      type: 'image',
      rect: ['9px','74px','72px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo2.png','0px','0px']
   },
   {
      rect: ['15px','11px','86px','90px','auto','auto'],
      id: 'Q6-fiore-bianco',
      transform: [[0,0],['471']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-bianco.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-gambo2}": [
            ["style", "top", '74px'],
            ["style", "left", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '115px']
         ],
         "${_Q6-fiore-bianco}": [
            ["style", "top", '11px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '90px'],
            ["style", "left", '15px'],
            ["style", "width", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1341,
         autoPlay: false,
         timeline: [
            { id: "eid339", tween: [ "transform", "${_Q6-fiore-bianco}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1341, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Giallo": {
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
      id: 'Q6-fiore-gambo1Copy',
      type: 'image',
      rect: ['0px','74px','107px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo1.png','0px','0px']
   },
   {
      rect: ['17px','7px','104px','113px','auto','auto'],
      id: 'Q6-fiore-giallo',
      transform: [[0,0],['351']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-giallo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-giallo}": [
            ["style", "top", '7px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-fiore-gambo1Copy}": [
            ["style", "left", '0px'],
            ["style", "top", '74px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '129px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2697.4296875,
         autoPlay: false,
         timeline: [
            { id: "eid340", tween: [ "transform", "${_Q6-fiore-giallo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2697, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Arancione": {
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
      id: 'Q6-fiore-gambo2Copy',
      type: 'image',
      rect: ['20px','73px','72px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo2.png','0px','0px']
   },
   {
      rect: ['-1px','0px','109px','115px','auto','auto'],
      id: 'Q6-fiore-giallo2',
      transform: [[0,0],['745'],[],['0.78898','0.78898']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-giallo2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '143px'],
            ["style", "width", '116px']
         ],
         "${_Q6-fiore-gambo2Copy}": [
            ["style", "left", '20px'],
            ["style", "top", '73px']
         ],
         "${_Q6-fiore-giallo2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.78898'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.78898'],
            ["style", "left", '-1px'],
            ["style", "-webkit-transform-origin", [53.54,58.34], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid341", tween: [ "transform", "${_Q6-fiore-giallo2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeOutElastic" }         ]
      }
   }
},
"foglie-spare": {
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
      id: 'foglie-birdCopy',
      type: 'rect',
      rect: ['100px','-85px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'foglie-birdCopy',
      symbolName: 'foglie-bird'
   }   ]
   },
   states: {
      "Base State": {
         "${_foglie-birdCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '140px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 891.1328125,
         autoPlay: false,
         timeline: [
            { id: "eid960", tween: [ "transform", "${_foglie-birdCopy}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 303, easing: "easeInQuad" },
            { id: "eid961", tween: [ "transform", "${_foglie-birdCopy}", "rotateZ", '-18deg', { fromValue: '5deg'}], position: 303, duration: 363, easing: "easeInQuad" },
            { id: "eid962", tween: [ "transform", "${_foglie-birdCopy}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 666, duration: 225, easing: "easeInQuad" },
            { id: "eid967", tween: [ "transform", "${_foglie-birdCopy}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 303, easing: "easeInQuad" },
            { id: "eid971", tween: [ "transform", "${_foglie-birdCopy}", "scaleY", '1', { fromValue: '1.05'}], position: 666, duration: 225, easing: "easeInQuad" },
            { id: "eid966", tween: [ "transform", "${_foglie-birdCopy}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 303, easing: "easeInQuad" },
            { id: "eid970", tween: [ "transform", "${_foglie-birdCopy}", "scaleX", '1', { fromValue: '1.05'}], position: 666, duration: 225, easing: "easeInQuad" }         ]
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
            { id: "eid2428", tween: [ "transform", "${_numerigruppo}", "scaleX", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2439", tween: [ "transform", "${_numerigruppo}", "scaleX", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[175,140.5,0,0],[414.45,85.73,421.02,22.34,335.45,17.8],[725.82,117.6,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[725.82,117.6,0,0],[778.22,418.62,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[725.82,117.6,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,-67.92,329.52],[525,948.01,0,0]]], position: 2158, duration: 269 },
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
      fill: ['rgba(0,0,0,0)','images/Fumello-Q6.png','0px','0px','445.97px','286.67px']
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
      type: 'image',
      id: 'Fondo-Menu',
      opacity: 0.7,
      rect: ['-50px','12px','1260px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['55px','71px','auto','auto','auto','auto'],
      userClass: 'home'
   },
   {
      transform: [[0,0],[],[],['0.58314','0.58314']],
      id: 'NEXT',
      userClass: 'next',
      rect: ['1033px','83px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      userClass: 'fumnum1',
      rect: ['15.2%','31.9%','90px','70px','auto','auto'],
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      userClass: 'fumnum2',
      rect: ['22.1%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      userClass: 'fumnum3',
      rect: ['28.8%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      userClass: 'fumnum4',
      rect: ['35.7%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      userClass: 'fumnum5',
      rect: ['42.7%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-6',
      rect: ['578px','73px','90px','70px','auto','auto'],
      userClass: 'fumnum6',
      fill: ['rgba(0,0,0,0)','images/svgBWNum6.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-7',
      rect: ['661px','73px','90px','70px','auto','auto'],
      userClass: 'fumnum7',
      fill: ['rgba(0,0,0,0)','images/svgBWNum7.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-8',
      rect: ['745px','73px','90px','70px','auto','auto'],
      userClass: 'fumnum8',
      fill: ['rgba(0,0,0,0)','images/svgBWNum8.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-9',
      rect: ['828px','73px','90px','70px','auto','auto'],
      userClass: 'fumnum9',
      fill: ['rgba(0,0,0,0)','images/svgBWNum9.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-10',
      rect: ['910px','73px','90px','70px','auto','auto'],
      userClass: 'fumnum10',
      fill: ['rgba(0,0,0,0)','images/svgBWNum10.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.65','0.65']],
      id: 'musica',
      userClass: 'musica',
      rect: ['76px','129px','auto','auto','auto','auto'],
      type: 'rect'
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      rect: ['1013','0','auto','auto','auto','auto'],
      userClass: 'testina'
   },
   {
      transform: [[0,0],[],[],['0.65','0.65']],
      id: 'reload',
      userClass: 'reload',
      rect: ['65px','7px','auto','auto','auto','auto'],
      type: 'rect'
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
            ["transform", "scaleY", '0.65'],
            ["style", "left", '109px'],
            ["transform", "scaleX", '0.65']
         ],
         "${_HOME_butt}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_Numero_2}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '22.12%'],
            ["style", "width", '90px']
         ],
         "${_Numero_3}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '28.82%'],
            ["style", "width", '90px']
         ],
         "${_Numero_4}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '35.68%'],
            ["style", "width", '90px']
         ],
         "${_Numero_5}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '42.69%'],
            ["style", "width", '90px']
         ],
         "${_Num-9}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '828px'],
            ["style", "width", '90px']
         ],
         "${_musica}": [
            ["style", "top", '5px'],
            ["transform", "scaleY", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleX", '0.65']
         ],
         "${_Num-8}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '745px'],
            ["style", "width", '90px']
         ],
         "${_Num-7}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '661px'],
            ["style", "width", '90px']
         ],
         "${_Numero_1}": [
            ["style", "top", '31.9%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '15.18%'],
            ["style", "width", '90px']
         ],
         "${_Num-10}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '910px'],
            ["style", "width", '90px']
         ],
         "${_Num-6}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '578px'],
            ["style", "width", '90px']
         ],
         "${_NEXT}": [
            ["style", "top", '83px'],
            ["transform", "scaleX", '0.58314'],
            ["style", "left", '1033px'],
            ["transform", "scaleY", '0.58314']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
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
      transform: [[0,0],[],[],['0.77','0.77']],
      type: 'image',
      id: 'NextImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
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
      type: 'image',
      id: 'reload',
      rect: ['0px','0px','80px','80px','auto','auto'],
      userClass: 'reload',
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Quadro-06");
