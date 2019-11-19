/*http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/*/

var UID = {
  _current: 0,
  getNew: function(){
    this._current++;
    return this._current;
  }
};


// HTMLElement.prototype.pseudoStyle = function(className,element,prop,value){
//   var _this = this;
//   var _sheetId = "pseudoStyles";
//   var _head = document.head || document.getElementsByTagName('head')[0];
//   var _sheet = document.getElementById(_sheetId) || document.createElement('style');
//   _sheet.id = _sheetId;
//   // var className = "pseudoStyle" + UID.getNew();
  
//   _this.className +=  " "+className; 
  
//   _sheet.innerHTML += " ."+className+"::"+element+"{"+prop+":"+value+"}";
//   _head.appendChild(_sheet);
//   return this;
// };

function pseudoStyleHelper(args={}){

  ////console.log(args);
  if(typeof args.props === "string"){
    ////console.log("aksdjhkjlasf");
  }
}
HTMLElement.prototype.pseudoStyle = function(args={}){
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "";
  var element = "";
  var prop = "";
  var value = "";
  var temp = ``;
  var attr = "";
  var istemp = false;
  var hasattr = false;

  ////console.log(window)

  // var className = "pseudoStyle" + UID.getNew();
  if(typeof args.classname ===  undefined){
    className = "pseudoStyle" + UID.getNew();
  }else{
    className = args.classname;
  }

  if(typeof args.element != undefined){
    element = args.element;
  }
  if(typeof args.prop != undefined){
    prop = args.prop;
  }
  if(typeof args.value != undefined){
    value = args.value;
  }
  if(typeof args.temp != undefined){
    temp = args.temp;
    istemp = true;
  }
  if(typeof args.attr != undefined){
    attr = ":"+args.attr;
    ////console.log(args.attr);
    hasattr = true;
  }else if(typeof args.attr === undefined){
    hasattr = false;
  }
  if(args.attr != undefined){
    attr = ":"+args.attr;
    
    hasattr = true;
  }else if(args.attr === undefined){
    hasattr = false;
  }

  
  
  _this.className +=  " "+className; 

  if(temp === ``){
    istemp = false;
  }else{
    istemp = true;
  }

  if(attr === ""){
    hasattr = false;
  }
   // $(this).bind("click",function(ev){
    
   //  ////console.log(ev);
   //  //////console.log(ev.target.parentNode);
   //  // ////console.log($(":after"));
    
   //  //$(".myafter").addClass("myafter:active");
   //    _sheet.innerHTML += " .myafter"+"::after{z-index:1000000;background:purple;}";
   // })
   // $(this).bind("mouseover",function(ev){
   //  //$(_this).css("background","white");
   //  ////console.log(ev.target);
   // });
  var checkstyle = String(_sheet.innerHTML).trim().split(" ");
 ////console.log(checkstyle);
  // for(var [i,elem] of checkstyle.entries()){
  //   ////console.log(elem);
  // }
  if(!String(_sheet).includes(className)){
    if(istemp){
      if(hasattr)
        _sheet.innerHTML += " ."+className+attr+"::"+element+"{"+temp+"}";
      else
        _sheet.innerHTML += " ."+className+"::"+element+"{"+temp+"}";
    }else{
      if(hasattr)
        _sheet.innerHTML += " ."+className+attr+"::"+element+"{"+prop+":"+value+"}";
      else
        _sheet.innerHTML += " ."+className+"::"+element+"{"+prop+":"+value+"}";
    }
    _head.appendChild(_sheet);
  }
  
  // $(this).unbind("click",function(ev){
  //   alert("okdd");
  // })
  // $(this).unbind("mouseover",function(ev){
  //   //$(_this).css("background","white");
  // });
  return this;
};


function Counter(init){
  this.counter = 0;

  this.count = function(c){
    this.counter += c;
  }

  this.getcount = function(){
    return this.counter;
  }
}

function ClassHelper(x,y){
  this.x = x;
  this.y = y;

  this.setXY = function(x,y){
    this.x = x;
    this.y = y;
  }

  this.getXY = function(){
    return {"x":this.x,"y":this.y}
  }

}
function Cards(htm,op={}){

  /*creates container and menuitems*/
	this.hidecontainer = document.createElement("div");
  this.adcontiner = document.createElement("div");

  this.flipbtn = document.createElement("div");
  this.precisionmenu = document.createElement("div");
  this.precisionmode = document.createElement("button");
  this.mayhemmode = document.createElement("button");


  this.nextbtn = document.createElement("div");
  this.prevbtn = document.createElement("div");

  this.newcard = document.createElement("div");
  this.deletemenu = document.createElement("div");
  this.deleteone = document.createElement("button");
  this.deleteall = document.createElement("button");




  this.mover = document.createElement("div");

  /*creates div for cards*/
	this.card = document.createElement("div");
  this.innercard = document.createElement("div");
  this.frontside = document.createElement("div");
  this.backside = document.createElement("div");

  /*creates empty divs*/
  this.warn = document.createElement("div");
  this.empty = document.createElement("div");
  this.empty.appendChild(this.warn);
  this.empty.appendChild(document.createElement("br"))
  this.emptyback = document.createElement("div");
  this.emptyback.appendChild(document.createElement("br"))

  this.warn.setAttribute("class","checking");
 
  this.empty.setAttribute("class","writearea")

  this.emptyback.setAttribute("class","writearea")

  

  /*adds empties to front and back of card*/
  this.frontside.appendChild(this.empty);
  this.backside.appendChild(this.emptyback);

  

  
  this.cardarray = [];
  this.backorfront = [];

  this.x=0;
  this.y=0;
  ////console.log(op.x);
  if(op.x != undefined){
    this.x= op["x"];

  }if(op.y != undefined){
    this.y= op["y"];
  }

  this.classhelp = new ClassHelper(this.x,this.y);

  
  this.open = false;

  /*cards attr*/
  this.card.setAttribute("class","cards");
  this.innercard.setAttribute("class","card-inner");
  this.backside.setAttribute("class","card-back");
  this.frontside.setAttribute("class","card-front");
  /*making them writable*/
  this.backside.setAttribute("contenteditable",true);
  this.frontside.setAttribute("contenteditable",true);
  
  /*Gui menu and container*/
  this.mover.setAttribute("class","mover menuitems");
  this.mover.setAttribute("draggable",true)
  this.flipbtn.setAttribute("class","flipbtn menuitems");
  this.nextbtn.setAttribute("class","nextbtn menuitems");
  this.prevbtn.setAttribute("class","prevbtn menuitems");
  this.newcard.setAttribute("class","newcard menuitems");
  this.deletemenu.setAttribute("class","deletemenu menuitems");
  this.precisionmenu.setAttribute("class","precisionmenu menuitems");

  this.deleteone.setAttribute("class","deleteone menuitems");
  this.deleteall.setAttribute("class","deleteall menuitems");
  this.precisionmode.setAttribute("class","precisionmode menuitems");
  this.mayhemmode.setAttribute("class","mayhemmode menuitems");
  
  this.hidecontainer.setAttribute("class","hidecontainer");
  


  /*SubMenus*/
  this.deleteone.innerHTML = "Delete";
  this.deleteall.innerHTML = "Delete All";

  this.precisionmode.innerHTML="Precision";
  this.mayhemmode.innerHTML = "Mayhem";


  this.deletemenu.appendChild(this.deleteone);
  this.deletemenu.appendChild(this.deleteall);

  this.precisionmenu.appendChild(this.mayhemmode);
  this.precisionmenu.appendChild(this.precisionmode);
  

  /*adding menu gui to container*/
  this.hidecontainer.appendChild(this.precisionmenu);
  this.hidecontainer.appendChild(this.flipbtn);
  this.hidecontainer.appendChild(this.nextbtn);
  this.hidecontainer.appendChild(this.prevbtn);
  this.hidecontainer.appendChild(this.deletemenu);
  this.hidecontainer.appendChild(this.newcard);
  this.hidecontainer.appendChild(this.mover);


  /*adding the front and back of card to innercontainer*/
  this.innercard.appendChild(this.backside);
  this.innercard.appendChild(this.frontside);
  /*adding innercontainer*/
  this.card.appendChild(this.innercard);

  this.counting = new Counter(0);
  this.cardcount = 0;
  this.thisclass = this;


  //this.counting.count(this.counting.getcount());
  

  /*the document*/
  this.htm = htm;

  /*creates empty div*/
  this.createEmpty = function(){
    this.warn = document.createElement("div");
    this.empty = document.createElement("div");
    this.empty.appendChild(document.createElement("br"));

    this.empty.setAttribute("class","writearea");
    this.warn.setAttribute("class","warning");

    this.empty.appendChild(this.warn);

    return this.empty;
  }
  /*creates new card*/
  this.newcard = function(){
    this.cards = new Cards(this.htm,{"x":this.x,"y":this.y});
    this.card = this.cards.card;
    if(this.open){
      $(this.card).addClass("opened");
    }
    return this.card;
  }
  /*addes card to array*/
  this.add = function(){
    
    
    this.cardarray.push(this.newcard())
    this.card.setAttribute("data-card","card"+this.counting.getcount())
    //////console.log(this.counting.getcount());
    this.counting.count(this.cardcount);
    
  }
  this.styleCard =function(text){
    this.card.style.cssText = text;
  }
  this.styling = function(){
    return this.card;
  }

  this.move = function(x,y){
    this.x = x - this.hidecontainer.getBoundingClientRect().width;
    this.y = y - this.hidecontainer.getBoundingClientRect().height;

    // var xD = x - this.hidecontainer.getBoundingClientRect().width;
    // var yD = y - this.hidecontainer.getBoundingClientRect().height;
    this.classhelp.setXY(x,y);
    ////console.log(this.classhelp.getXY()["x"]-this.card.getBoundingClientRect().width,
      //this.classhelp.getXY()["y"]-this.card.getBoundingClientRect().height);
    //////console.log(this.x,"x");
    //$(".cards").css("transform","translate("+this.x+"px,"+this.y+"px)");
    this.x = this.classhelp.getXY()["x"];
    this.y = this.classhelp.getXY()["y"];
    $(".hidecontainer").css("transform","translate("+x+"px,"
      +y+"px)");
    //$(".mover").css("transform","translate("+(this.x-this.card.getBoundingClientRect().width/2)+"px,"+this.y+"px)")
  }
  this.remove = function(html,what){
    for(var i of this.cardarray.entries()){
      ////console.log(i)
    }
  }

  this.setbackground = function(img){
    $(".card-front").css("background-image","url("+img+")");
    $(".card-front").css("background-size","497px");
    $(".card-front").css("background-repeat","no-repeat");

    // $(".card-back").css("background-image","url("+background+")");
    // $(".card-back").css("background-size","497px");
    // $(".card-back").css("background-repeat","no-repeat");
  }

  /*adds cards to html*/
  this.addtohtml = function(body){
    /*adds cards before body*/
    this.htm.insertBefore(this.hidecontainer,body);
    for(var i of this.cardarray){
      /*adds adds to container*/
      //i.setAttribute("data-card","card"+this.cardcount)
      //////console.log(i);
      this.hidecontainer.appendChild(i);

      //this.cardcout++;
    }
  }
  this.cardcount++;

}


var running = false;

function sendConnection(val,func)
{
  var port=chrome.runtime.connect({name:"content"});
  port.postMessage({workingMessage:val});
  port.onMessage.addListener(function (msg){
    run = msg.backgrounds["running"];
    
    if(run !== undefined){
      if(run===true){
        running = run;
        doitonce = true;
      }else if(running === false){
        running= run;
      }
    }

    func(k);  
  });
}
var storage = chrome.storage.local

////console.log(storage); 
// storage.set({"dirfolders":{"folders":"test1","folderssub":"test1/script.js","content":String(document.body.innerHTML)}},function(){
//    ////console.log("ok saved");
// })

// storage.get(["test","dirfolders"],function(data){

//     ////console.log(data);
// });

// storage.remove(["dirfolders"],function(data){
//   ////console.log(data,"removed");
// })


function flipbtnaction(which){
  if(which === "open"){
    $(".flipbtn").css("visibility","visible");
    $(".flipbtn").css("height","30px");
    $(".flipbtn").css("width","30px");
    $(".flipbtn").css("transition","height 7s , visibility 6s ease 2s");
  }else if(which === "closed"){
    $(".flipbtn").css("visibility","collapse");
    $(".flipbtn").css("height","0px");
    $(".flipbtn").css("width","0px");
    $(".flipbtn").css("transition","height 2s ,visibility .0s ease .0s");
  }

}
function newcardbtnaction(which){
  if(which === "open"){
    $(".newcard").css("visibility","visible");
    $(".newcard").css("height","30px");
    $(".newcard").css("width","30px");
    $(".newcard").css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){
    $(".newcard").css("visibility","collapse");
    $(".newcard").css("height","0px");
    $(".newcard").css("width","0px");
    $(".newcard").css("transition","height 2s ,visibility .0s ease .0s");
  }
}

function nextbtnaction(which){
  if(which === "open"){
      $(".nextbtn").css("visibility","visible");
$(".nextbtn").css("height","70px");
$(".nextbtn").css("width","40px");
$(".nextbtn").css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){

$(".nextbtn").css("visibility","collapse");
$(".nextbtn").css("height","0px");
$(".nextbtn").css("width","0px");
$(".nextbtn").css("transition","height 2s ,visibility .0s ease .0s");
  }
}
function prevbtnaction(which){
  if(which === "open"){
      $(".prevbtn").css("visibility","visible");
  $(".prevbtn").css("height","70px");
  $(".prevbtn").css("width","40px");
  $(".prevbtn").css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){
      $(".prevbtn").css("visibility","collapse");
$(".prevbtn").css("height","0px");
$(".prevbtn").css("width","0px");
$(".prevbtn").css("transition","height 2s ,visibility .0s ease .0s");
  }
}
function cardaction(which){
  if(which === "open"){
    $(".cards").css("height","300px");
    $(".cards").css("width","497px");
    $(".cards").css("border-radius","0");
    $(".cards").addClass("opened");
  }else if(which === "closed"){
    $(".cards").removeClass("opened");
$(".cards").css("height","30px");
        $(".cards").css("width","30px");
        $(".cards").css("border-radius","25px");
  }
}
function cardinneraction(which){
  if(which === "open"){
    $(".card-inner").css("overflow","inherit");
  }else if(which === "closed"){
    $(".card-inner").css("overflow","hidden");
  }
}
function cardfrontaction(which){
  if(which === "open"){
    $(".card-front").css("overflow","inherit");
  }else if(which === "closed"){
    $(".card-front").css("overflow","hidden");
  }
}
function cardbackaction(which){
  if(which === "open"){
    $(".card-back").css("overflow","inherit");
  }else if(which === "closed"){
    $(".card-back").css("overflow","hidden");
  }
}
function hidecontaineraction(which){
  if(which === "open"){
    $(".hidecontainer").css("background","white");
    $(".hidecontainer").css("height","300px");
    $(".hidecontainer").css("width","497px");
    $(".hidecontainer").css("border-radius","0");
  }else if(which === "closed"){
    $(".hidecontainer").css("height","30px");
    $(".hidecontainer").css("width","30px");
    $(".hidecontainer").css("border-radius","25px");
    $(".hidecontainer").css("background","green");
    
  }
}
function moveraction(which){
  if(which === "open"){
      $(".mover").css("top","-12px");
      $(".mover").addClass("open");
  }else if(which === "closed"){
    $(".mover").removeClass("open");
    $(".mover").css("top","-12px");
  }
}




var self = document.querySelector('html');
var body = document.querySelector('body');
var head = document.querySelector('head');
//////console.log(self);
function mainscript(html){
  let controlclick = false;
  let openup = false;
  var shrinkcount = 0;
  var cardcount = 0;

  var grammarlycheck = document.createElement("script");
  grammarlycheck.setAttribute("src","js/grammarlycheck.js")

  self.appendChild(grammarlycheck);
  // var style = document.createElement("link");
  // style.rel = "stylesheet";
  // style.type = "type/css";
  // style.href = chrome.extension.getURL('css/content.css');

  // (document.head||document.documentElement).appendChild(style);

  var cards = new Cards(html,{"x":400,"y":400});
  var background = chrome.extension.getURL("assets/indexcard.png");
  var focused = $(':focus');
  //cards.styleCard(`'background-image:url("${background}");'`);
  //cards.styleCard("background:green;");

  sendConnection('here too',function(k){
    if(running){
      alert("runnning");
    }else{

    }
  });
  //cards.move(400,400);
  cards.add();
  cards.add();
  cards.add();
  cards.add();


  
  
  // cards.add();
  // cards.add();

  

  cards.addtohtml(body);
  //////console.log($(".cards"));
  //////console.log(`${background}`);
  $(".card-front").css("background-image","url("+background+")");
  $(".card-front").css("background-size","497px");
  $(".card-front").css("background-repeat","no-repeat");

  // $(".card-back").css("background-image","url("+background+")");
  // $(".card-back").css("background-size","497px");
  // $(".card-back").css("background-repeat","no-repeat");


  function onmousemove(ev){

    //////console.log(ev);

    if(ev.type==="mouseover"){
      //////console.log(ev);

    }    

    if(ev.type === "drag"){
      //////console.log(ev.type)
      // ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      if(ev.ctrlKey){
        cards.move(ev.pageX-ev.target.offsetLeft-ev.target.offsetWidth+10,
          ev.pageY-ev.target.offsetHeight-ev.target.offsetTop+10);
      }
      ev.currentTarget.style.cssText = "cursor:grabbing";
      if(cards.open){
        //////console.log("adsfkjlkjfdsa");
        $(".mover").css("top","-12px");
      }
    }
    if(ev.type === "dragstart"){
      //////console.log(ev["dataTransfer"]);
      // ev["dataTransfer"]["dropEffect"] ="drag";
      // ev["dragTransfer"]["effectAllowed"] ="dragging";
      // ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      
    }

    if(ev.type==="dragover"){
      ev.preventDefault();
      //  ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      ev.currentTarget.style.cssText = "cursor:grabbing";
    }
    if(ev.type === "dragenter"){
      //////console.log(ev.type);
      //ev.preventDefault();
      //  ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      ev.currentTarget.style.cssText = "cursor:grabbing";
    }

    

    if(ev.type === "drop"){
      // ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      ev.preventDefault();
      if(cards.open){
        //////console.log("adsfkjlkjfdsa");
        $(".mover").css("top","-12px");
      }
      

    }
    //////console.log(ev.originalEvent["dataTransfer"].dropEffect);

    if(ev.ctrlKey){
       // cards.move(ev.pageX-ev.target.parentNode.offsetLeft-ev.target.parentNode.offsetWidth+10,
         // ev.pageY-ev.target.parentNode.offsetHeight-ev.target.parentNode.offsetTop+10);
      //cards.move(ev.pageX,ev.pageY);
      //////console.log(ev);
      // ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      if(cards.open){
        //////console.log("adsfkjlkjfdsa");
        $(".mover").css("top","-12px");
      }
    }

    if(ev.type === "dragend" && !ev.ctrlKey){
      cards.move(ev.pageX-ev.target.offsetLeft-ev.target.offsetWidth+10,
        ev.pageY-ev.target.offsetHeight-ev.target.offsetTop+10);
      ev.originalEvent["dataTransfer"].dropEffect="grab";
      //////console.log(ev.originalEvent["dataTransfer"].dropEffect);
      
      // storage.set({"card"+cards.cardcount:{"folders":"test1","folderssub":"test1/script.js","content":String(document.body.innerHTML)}},function(){
      //    ////console.log("ok saved");
      // })
    }
  }

  // body.ondragover = function(ev){
  //   ev.preventDefault();
  // }

  
  // window.addEventListener('drag', () => {
  //   document.body.style.cursor = 'grabbing';
  // }, true)
  var m = document.getElementsByClassName("mover");

  // for(var i of m){
  //   ////console.log(i);
  //   i.addEventListener("dragstart",onmousemove);
  // }
  //"dragstart",onmousemove)



  

  $(".mover").on("dblclick",function(){
    if(!cards.open){
      // $(".hidecontainer").css("background","white");
      // $(".hidecontainer").css("height","300px");
      // $(".hidecontainer").css("width","497px");
      // $(".hidecontainer").css("border-radius","0");

      hidecontaineraction("open");
      flipbtnaction("open");
      nextbtnaction("open");
      prevbtnaction("open");
      newcardbtnaction("open");
      moveraction("open");
      cardaction("open");
      cardinneraction("open");
      cardfrontaction("open");
      cardbackaction("open");

      // $(".flipbtn").css("visibility","visible");
      // $(".nextbtn").css("visibility","visible");
      // $(".prevbtn").css("visibility","visible");
      // $(".newcard").css("visibility","visible");

      // $(".flipbtn").css("height","30px");
      // $(".nextbtn").css("height","70px");
      // $(".prevbtn").css("height","70px");
      // $(".newcard").css("height","30px");

      // $(".flipbtn").css("width","30px");
      // $(".nextbtn").css("width","40px");
      // $(".prevbtn").css("width","40px");
      // $(".newcard").css("width","30px");

      // $(".flipbtn").css("transition","height 7s , visibility 6s ease 2s");
      // $(".nextbtn").css("transition","height 7s ,visibility 6s ease 2s");
      // $(".prevbtn").css("transition","height 7s ,visibility 6s ease 2s");
      // $(".newcard").css("transition","height 7s ,visibility 6s ease 2s");
      

      // $(".cards").css("height","300px");
      // $(".cards").css("width","497px");
      // $(".cards").css("border-radius","0");
      // $("grammarly-popups").css("visibility","visible");
      
      // $(".mover").css("top","-12px");
      // $(".mover").addClass("open");
      // $(".cards").addClass("opened");
      // $(".card-inner").css("overflow","inherit");
      // $(".card-front").css("overflow","inherit");
      // $(".card-back").css("overflow","inherit");
      
      cards.open = true;
    }
    shrinkcount++;
  });
  $(".mover").on("click",function(ev){
    //////console.log("clicked",shrinkcount);
    var str = String($(".mover").attr("class"));
    if(str.includes("open")){
      
      
      if(shrinkcount >= 1){
        for(var i of $(".cards")){
          $(i).removeClass("opened")
        }
        hidecontaineraction("closed");
        flipbtnaction("closed");
        nextbtnaction("closed");
        prevbtnaction("closed");
        newcardbtnaction("closed");
        moveraction("closed");
        cardaction("closed");
        cardinneraction("closed");
        cardfrontaction("closed");
        cardbackaction("closed");
        // $(".cards").removeClass("opened");
        // $(".mover").removeClass("open");
        // $(".hidecontainer").css("height","30px");
        // $(".hidecontainer").css("width","30px");
        // $(".hidecontainer").css("border-radius","25px");
        // $(".hidecontainer").css("background","green");


        // $(".flipbtn").css("visibility","collapse");
        // $(".nextbtn").css("visibility","collapse");
        // $(".prevbtn").css("visibility","collapse");
        // $(".newcard").css("visibility","collapse");


        // $(".flipbtn").css("height","0px");
        // $(".nextbtn").css("height","0px");
        // $(".prevbtn").css("height","0px");
        // $(".newcard").css("height","0px");

        // $(".flipbtn").css("width","0px");
        // $(".nextbtn").css("width","0px");
        // $(".prevbtn").css("width","0px");
        // $(".newcard").css("width","0px");

        // $(".flipbtn").css("transition","height 2s ,visibility .0s ease .0s");
        // $(".nextbtn").css("transition","height 2s ,visibility .0s ease .0s");
        // $(".prevbtn").css("transition","height 2s ,visibility .0s ease .0s");
        // $(".newcard").css("transition","height 2s ,visibility .0s ease .0s");
        

        // $(".cards").css("height","30px");
        // $(".cards").css("width","30px");
        // $(".cards").css("border-radius","25px");
        // $(".mover").css("top","-12px");

        // $("grammarly-popups").css("visibility","hidden");
        // $(".card-inner").css("overflow","hidden");
        // $(".card-front").css("overflow","hidden");
        // $(".card-back").css("overflow","hidden");
        cards.open = false;
        shrinkcount = 0;
        
        
        for(var i of $(".mover")){
          //////console.log(i);
          $(i).removeClass("open")
        }
        
        // alert("okss");
      }
    }

    //////console.log(shrinkcount,"dsfakj");
    //shrinkcount++;
    // if(openup){
    //   ////console.log("adsfkjlkjfdsa");
    //   $(".mover").css("top","-12px");
    // }
    // if(openup){
    //   $(".mover").css("top","-12px");
    // }
    ev.target.style.cssText = "cursor:grabbing";
  })

  $(".mover").on("mouseenter",function(ev){
      // for(var i of $(".menuitems")){
      //   $(i).css("opacity","1");
      // }
      if(cards.open){
        $(".menuitems").css("opacity","1");
        $(".menuitems").css("transition","opacity .5s");
      }
  });
  $(".mover").on("mouseleave",function(ev){
      // for(var i of $(".menuitems")){
      //   $(i).css("opacity",".15");
      // }
      if(cards.open){
        $(".menuitems").css("opacity",".15");
        $(".menuitems").css("transition","opacity .5s");
      }
  });
 
  $("body").on("drop",onmousemove);
  $("body").on("dragover",onmousemove);
  body.addEventListener("dragenter",onmousemove);
  body.addEventListener("dragleave",onmousemove);
  $(".mover").on("dragover",onmousemove)
  $(".mover").on("dragstart",onmousemove)
  $(".mover").on("drag",onmousemove);
  $(".mover").on("dragend",onmousemove);

  $(".hidecontainer").on("mouseover",function(ev){
    //////console.log(ev,"oversaaa");
    if(cards.open){
      if(String(ev.target.className).includes("menuitems")){
        $(ev.target).css("opacity","1");
      
      }
    }
  })

  $(".flipbtn").on("click",function(event){
      alert("djfkljljkadsfjkljd");
      var str = String($(".card-inner").attr("class"));
      $(".card-inner").css("transform","rotateY(180deg)");
      $(".card-inner").addClass("flipped");
      if(str.includes("flipped")){
        $(".card-inner").css("transform","rotateY(0deg)");
        $(".card-inner").removeClass("flipped");
      }
  })
  $(".newcard").on("click",function(ev){
    //alert("ok");
    cards.add();
    cards.addtohtml(body);
    cards.setbackground(background);
  });




  function nextbtnmouseevnts(event){
    console.log(event);
    if(event.type === "mouseenter"){

      if(!$(event.target).hasClass("nextbtnafter")){
        event.target.pseudoStyle({
          "classname":"nextbtnafter",
          "element":"after",
          "temp":`content:'next';
                  background:gray;
                  color:white;
                  border-radius:0px 0px 15px 0px;
                  position:absolute;
                  opacity:.8;

          `
        })
      }
    }

    if(event.type === "mouseleave"){
      $(event.target).removeClass("nextbtnafter");
    }
  }
  function prevbtnmouseevnts(event){
    console.log(event);
    if(event.type === "mouseenter"){

      if(!$(event.target).hasClass("prevbtnafter")){
        event.target.pseudoStyle({
          "classname":"prevbtnafter",
          "element":"before",
          "temp":`content:'prev';
                  background:gray;
                  color:white;
                  border-radius:15px 0px 0px 0px;
                  position:absolute;
                  opacity:.8;

          `
        })
      }
    }

    if(event.type === "mouseleave"){
      $(event.target).removeClass("prevbtnafter");
    }
  }
  $(".nextbtn").on("mouseenter",nextbtnmouseevnts)
  $(".nextbtn").on("mouseleave",nextbtnmouseevnts)

  $(".prevbtn").on("mouseenter",prevbtnmouseevnts)
  $(".prevbtn").on("mouseleave",prevbtnmouseevnts)
  // $(".mover").on("mouseup",function(){

  //   document.removeEventListener("drag",onmousemove);
  //   this.onmouseup = null;
  // })

  var max = 800;
  var emp = document.createElement("div");
  var brs = document.createElement("br");

  pseudoStyleHelper({"props":``});
  
  function getCaretPosition(element) {
    var ie = (typeof document.selection != "undefined" && document.selection.type != "Control") && true;
    var w3 = (typeof window.getSelection != "undefined") && true;
    var caretOffset = 0;
    if (w3) {
        var range = window.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
    } else if (ie) {
        var textRange = document.selection.createRange();
        var preCaretTextRange = document.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
  }

  var maxperline = 100;
  var subwidth = 1;

  function countcheckdiv(item,event){
    var tars = item.scrollWidth;
    var pars = item.parentNode.offsetWidth;
    var stopping = false;
    var entercheck = document.createElement("div");
    entercheck.innerHTML = "Enter";
    ////console.log(item.getBoundingClientRect(),"lksajdhflkasfahsd");

    // ////console.log(tars,prevsubheight);
    // ////console.log(getCaretPosition(item),"dasfkjhkjfsafafdsfads");
    var color = window.getComputedStyle(
        document.querySelector('.writearea'), ':after');
    // ).getPropertyValue('color')

    //color.setProperty("background","green");
    //color.cssText("background","green");

    // ////console.log(color);
    // for(var i of $(".writearea")){
    //     if(!$(i).hasClass("myafter")){

    //       ////console.log(i.pseudoStyle({
    //         "classname":"myafter",
    //         "element":"after",
    //         "temp":`z-index:1000000;
    //                 width:0;
    //                 border-radius:25px;
    //                 heigh:100000px;
    //                 transform:scaleX(0);
    //                 content:'';
    //                 background:lightblue;
    //                 color:white;
                    
    //         `})
    //       );
    //     }


    // }
    ////console.log(item.getBoundingClientRect(),item.parentNode.getBoundingClientRect());
    // if(getCaretPosition(item) < maxperline){

    //    subwidth = getCaretPosition(item);
    //    for(var i of $(".writearea")){

    //     if(i.getBoundingClientRect().width >= pars){
    //       //alert("asdf");
          
    //       if(!$(i).hasClass("myafter")){
    //         //$(i).removeClass("myafter")
    //         $(i).addClass("myafter:focus");
    //         ////console.log(
    //         i.pseudoStyle({
    //           "classname":"myafter",
    //           "element":"after",
    //           "temp":`z-index:1000000;
    //                   content:'Press Enter';
    //                   background:rgba(173,216,230,.9);
    //                   color:white;
    //                   transform:translateX(30px);
    //                   border-radius:3px
    //                   transition:all 2s;
    //                   position: relative;
    //           `});
    //         ////console.log(
    //         // i.pseudoStyle({
    //         //   "classname":"myafter",
    //         //   "element":"after",
    //         //   "attr":"focus",
    //         //   "temp":`z-index:1000000;
    //         //           content:'Press Enter';
    //         //           background:rgba(173,216,230,.9);
    //         //           color:white;
    //         //           transform:translateX(30px);
    //         //           border-radius:3px
    //         //           transition:all 2s;
    //         //           position: relative;
    //         //   `});
    //         //////console.log(i.pseudoStyle("myafter","after","content","'tesdft'"));
    //         // if($(i).attr("class")=="myafter"){
    //         //   $(i).removeClass("myafter");
    //         // }else{
    //         // ////console.log(i.pseudoStyle({
    //         //   "classname":"myafter",
    //         //   "element":"after",
    //         //   "temp":`z-index:1000000;
    //         //           content:'Press Enter';
    //         //           background:rgba(173,216,230,.9);
    //         //           color:white;
    //         //           transform:translateX(30px);
    //         //           border-radius:3px
    //         //           transition:all 2s;
    //         //           position: relative;
    //         //   `}));
            
    //         // }
    //         // ////console.log(i.pseudoStyle({
    //         //   "classname":"myafter",
    //         //   "element":"after",
    //         //   "attr":"hover",
    //         //   "temp":`content:'test';background:blue;color:white;transition:all 2s;
    //         //   `}));



    //       }
    //     }

        
    //     //console.log($(i).has("focus"));
    //     if(i.getBoundingClientRect().width > pars){
    //       if(tars > (pars)){
    //         ////console.log("asdfjhkjsd");
    //         $(i).addClass("full");
    //         stopping = true;

    //       }
    //     }

    //     if(event.which === 13){
    //       stopping = false;
    //       $(i).removeClass("myafter");
    //       $(i).removeClass("typing");
    //     }
    //     if(event.which === 8){
    //       stopping = false;
    //       $(i).removeClass("myafter");
    //       $(i).removeClass("typing");
    //     }
        
    //     ////console.log(($(i).text().length+i.getBoundingClientRect().width));
    //     //i.pseudoStyle("before","content","'tesdft'").pseudoStyle("before","color","purple");
    //     $(i).css("width",""+(($(i).text().length*6.1))+"px")
    //     ////console.log(i);
    //    }
    //    //$(".writearea")
    //    //stopping = true;
    //    //alert("ok stop");
    // }




    /*TODO PERSION MODE*/
    if(getCaretPosition(item)>0){
          // if(String($(i).prev().attr()).includes("full")){
          //   $(i).removeClass("myafter");
          // }

          /*LEFT OFFF HERE*/
          //console.log(item);
          //console.log($(item));
      if(item.getBoundingClientRect().width >= pars){
    //       //alert("asdf");
          
          if(!$(item).hasClass("myafter")){
            //$(i).removeClass("myafter")
            $(item).addClass("myafter:focus");
            ////console.log(
            item.pseudoStyle({
              "classname":"myafter",
              "element":"after",
              "temp":`z-index:1000000;
                      content:'Press Enter';
                      background:rgba(173,216,230,.9);
                      color:white;
                      transform:translateX(30px);
                      border-radius:3px
                      transition:all 2s;
                      position: relative;
              `});
            ////console.log(
            // i.pseudoStyle({
            //   "classname":"myafter",
            //   "element":"after",
            //   "attr":"focus",
            //   "temp":`z-index:1000000;
            //           content:'Press Enter';
            //           background:rgba(173,216,230,.9);
            //           color:white;
            //           transform:translateX(30px);
            //           border-radius:3px
            //           transition:all 2s;
            //           position: relative;
            //   `});
            //////console.log(i.pseudoStyle("myafter","after","content","'tesdft'"));
            // if($(i).attr("class")=="myafter"){
            //   $(i).removeClass("myafter");
            // }else{
            // ////console.log(i.pseudoStyle({
            //   "classname":"myafter",
            //   "element":"after",
            //   "temp":`z-index:1000000;
            //           content:'Press Enter';
            //           background:rgba(173,216,230,.9);
            //           color:white;
            //           transform:translateX(30px);
            //           border-radius:3px
            //           transition:all 2s;
            //           position: relative;
            //   `}));
            
            // }
            // ////console.log(i.pseudoStyle({
            //   "classname":"myafter",
            //   "element":"after",
            //   "attr":"hover",
            //   "temp":`content:'test';background:blue;color:white;transition:all 2s;
            //   `}));



          }

          
          //$(i).addClass("typing");
    }
    $(item).css("width",""+(($(item).text().length*6.1))+"px")
    ////console.log($(".myafter:hover::after"));
    // ////console.log((tars-98),"tar", (pars-96),"par");
    // if((tars-98) === (pars-90)){
    //     alert("f "+(pars-50)+"ASf "+pars);
    //     stopping = true;

    // }
    if(item.getBoundingClientRect().width >= pars){

      // if(tars > (pars)){
      //   ////console.log("asdfjhkjsd");
      
      //   stopping = true;

      // }
    }
  }
    
    // if(event.which != 8 && $(event.target).text().length > maxperline){
    //   event.preventDefault();
    // }
    return stopping;
  }

  var prevsubheight=0;
  function countcheck(event){
    var tar = event.target.scrollHeight;
    var par = event.target.parentNode.offsetHeight;
    var stop = false;
    //////console.log(tar,par);
    $(".menuitems").css("opacity",".15");

    
    
    ////console.log(event.target.childNodes, event);
    if(event.which != 8 || event.which != 13){

      for(var i of event.target.childNodes){
        prevsubheight = i.getBoundingClientRect().height;
        stop = countcheckdiv(i,event)
      }
      if(stop){
        event.preventDefault();
      }
    }
    
    if(event.keyCode === 8){
      if($(event.target).text().length === 0){
        emp.appendChild(brs)
        event.target.innerHTML = '<div class="writearea"><div class="checkbox"></div><br></div>';
      }
      return true;
    }

   // ////console.log(event);
    if(tar > par){
      //event.preventDefault();
      //alert("sdklfjhkldjsf");
      return false;
    }

    if(event.which != 8 && $(event.target).text().length > max){
      event.preventDefault();
    }

    
  }

  


  // $(".writearea").on("keyup",countcheckdiv)
  // $(".writearea").on("keydown",countcheckdiv)
  // $(".writearea").on("keypress",countcheckdiv)

  // $(".writearea").on("keyup",countcheckdiv)
  // $(".writearea").on("keydown",countcheckdiv)

  $(".card-front").bind("keyup",countcheck)
  $(".card-front").bind("keydown",countcheck)
  $(".card-front").bind("keypress",countcheck)

  $(".card-back").bind("keyup",countcheck)
  $(".card-back").bind("keydown",countcheck)

  
  

}






mainscript(self);