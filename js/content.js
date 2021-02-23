

var UID = {
  _current: 0,
  getNew: function(){
    this._current++;
    return this._current;
  }
};

/*http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/*/
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
    return {"x":this.x,"y":this.y};
  }
}
function Cards(htm,op={}){

  /*creates container and menuitems*/
	this.hidecontainer = document.createElement("div");

  this.adcontiner = document.createElement("div");
  
    this.infolog = document.createElement("div");
      
      this.bannercont = document.createElement("div");

      this.infocont = document.createElement("div");
      
        
        this.progresscont = document.createElement("div");
        this.smallmessagecont = document.createElement("div");
        this.loginifo = document.createElement("div");
      
  this.width = 497;
  this.height = 300;
  
  this.mousedialolog = document.createElement("div");

  this.flipbtn = document.createElement("div");
  this.precisionmenu = document.createElement("div");
  this.precisionmode = document.createElement("button");
  this.mayhemmode = document.createElement("button");
  this.loginbtn = document.createElement("button");
  this.displayall = document.createElement("button");


  this.nextbtn = document.createElement("div");
  this.prevbtn = document.createElement("div");

  this.newcard = document.createElement("div");
  this.deletemenu = document.createElement("div");
  this.deleteone = document.createElement("button");
  this.deleteall = document.createElement("button");
  this.settingbtn = document.createElement("button");
  this.savebtn = document.createElement("button");




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

  this.deleteone.setAttribute("class","deleteone submenubtns L");
  this.deleteall.setAttribute("class","deleteall submenubtns L");
  this.precisionmode.setAttribute("class","precisionmode submenubtns R");
  this.mayhemmode.setAttribute("class","mayhemmode submenubtns R");
  this.loginbtn.setAttribute("class","loginbtn submenubtns R");
  this.settingbtn.setAttribute("class","settingbtn submenubtns L")
  this.savebtn.setAttribute("class","savebtn submenubtns L");
  this.displayall.setAttribute("class","displayall submenubtns R");
  
  this.hidecontainer.setAttribute("class","hidecontainer");

  this.adcontiner.setAttribute("class","adcontainer");
  this.infolog.setAttribute("class","infolog");
  this.infocont.setAttribute("class","infocont");
  this.bannercont.setAttribute("class","bannercont");
  this.smallmessagecont.setAttribute("class","smallmessagecont");
  this.progresscont.setAttribute("class","progresscont");
  this.loginifo.setAttribute("class","loginifo");
  

  this.mousedialolog.setAttribute("class","mousedialologclose");
  


  /*SubMenus*/
  this.deleteone.innerHTML = "Delete";
  this.deleteall.innerHTML = "Delete All";
  this.settingbtn.innerHTML = "Settings"
  this.savebtn.innerHTML = "Save"

  this.precisionmode.innerHTML="Precision";
  this.mayhemmode.innerHTML = "Mayhem";
  this.loginbtn.innerHTML = "Log in";
  this.displayall.innerHTML = "Show All";


  this.deletemenu.appendChild(this.settingbtn);
  this.deletemenu.appendChild(this.deleteone);
  this.deletemenu.appendChild(this.deleteall);
  this.deletemenu.appendChild(this.savebtn);

  this.precisionmenu.appendChild(this.loginbtn);
  this.precisionmenu.appendChild(this.mayhemmode);
  this.precisionmenu.appendChild(this.precisionmode);
  this.precisionmenu.appendChild(this.displayall);
  


  this.infocont.appendChild(this.loginifo);
  this.infocont.appendChild(this.smallmessagecont);
  this.infocont.appendChild(this.progresscont);

  this.infolog.appendChild(this.bannercont);
  this.infolog.appendChild(this.infocont);


  this.adcontiner.appendChild(this.infolog);

  /*adding menu gui to container*/
  this.hidecontainer.appendChild(this.adcontiner);
  this.hidecontainer.appendChild(this.precisionmenu);
  this.hidecontainer.appendChild(this.flipbtn);
  this.hidecontainer.appendChild(this.nextbtn);
  this.hidecontainer.appendChild(this.prevbtn);
  this.hidecontainer.appendChild(this.deletemenu);
  this.hidecontainer.appendChild(this.newcard);
  this.hidecontainer.appendChild(this.mover);
  this.hidecontainer.appendChild(this.mousedialolog);



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


/*adlog to do actions for adlogbox jquery based*/
function AdlogBox(card){
  console.log(card);
  console.log();
  this.maincont = $(card.adcontiner);

  //this.obj = html.getElementsByClassName("adcontiner")[0];
  this.showlog = function(ison){
    if(ison)
      this.maincont.addClass("addislog")
    else
      this.maincont.removeClass("addislog");
    this.maincont.removeClass("adconthide");
    this.maincont.removeClass("adcontshow");
    this.maincont.removeClass("adcontclose");
  } 

  this.ready = function(){
  
    this.maincont.addClass("adcontready");
    //this.maincont.removeClass("adcontclose");

  }
  this.open =function(){
    this.maincont.addClass("adcontopen");
    this.maincont.css("transition","width 50000000000000000000000s ease-out 5000000000000000000s");
  }
  this.reset = function(isopen){
    if(isopen){
      this.maincont.removeClass("adcontclose");
      this.maincont.removeClass("adconthide");
      this.maincont.removeClass("adcontshow");
      this.maincont.removeClass("addislog");
      this.ready();
      
    }else{
      this.maincont.removeClass("adcontclose");
      this.maincont.removeClass("adcontready");
      this.maincont.removeClass("adcontshow");
      this.maincont.removeClass("addislog");
      this.maincont.removeClass("adcontopen");
      this.hide();
    }
  }

  this.hide = function(){
    this.maincont.removeClass("adcontready");
    this.maincont.addClass("adconthide")
    
  }

  this.fullmode = function(isopen){
    
    if(isopen){
      this.maincont.addClass("adcontshow")
    }else{
      this.maincont.removeClass("adcontshow");
    }
  }
  this.adoff = function(){
    this.maincont.removeClass("adcontready");
    this.maincont.addClass("adcontshow");
  }
}

function MouseDialog(card,width,height){
  this.modio = $(card.mousedialolog);
  this.x=0;
  this.y=0;
  this.saving = false;
  // this.width = 250;
  // this.height= 250;
  this.width = width;
  this.height= height;
  this.changeX = 10;
  this.changeY = 10;
  this.oldX = 0;
  this.oldY = 0;
  this.movx = 0;
  this.movy = 0;

  this.open = function(){
    this.modio.addClass("mousedialolog");
    this.modio.removeClass("mousedialologclose");
  }
  this.close = function(){
    this.modio.addClass("mousedialologclose");
    this.modio.removeClass("mousedialolog");
  }
  this.lastpos = function(oldx,oldy){
    this.oldX = oldx;
    this.oldY = oldy;
  }
  this.fetch = function(newx,newy){
    // var x=this.movx | 0;
    // var y=this. movy |0;

    // if(x <= this.oldX){
    //   x++;
    // }
    // if(x >= this.oldX){
    //   x--;
    // }
    // if(y <= this.oldY){
    //   y++;
    // }
    // if(y >= this.oldY){
    //   y--;
    // }
    // this.movx = this.x;
    // this.movy = this.y;
    $(this.modio).css("translate","transform .5s ease-out 1s");
    this.move(newx,newy);
  }
  this.goback = function(){

  }
  this.message = function(message){
    $(this.modio).text(message);
  }
  this.setxy =function(x, y){
    this.x = x;
    this.y = y;
  }
  this.setSave = function(istrue){
    this.saving = istrue;
    if(this.saving){
      $(this.modio).removeClass("mousedialolog");
      $(this.modio).addClass("mousediaSavelogo");
    }else{
      $(this.modio).removeClass("mousediaSavelogo");
      $(this.modio).addClass("mousedialolog");
    }
  }
  this.getSave = function(){
    return this.saving;
  }
  this.setchange =function(x,y){
    this.changeX = x;
    this.changeY = y; 
  }
  this.getchangeX = function(){
    return this.changeX;
  }
  this.getchangeY = function(){
    return this.chnageY;
  }
  this.move = function(x, y){
    this.x = x;
    this.y = y;
    this.modio.css("transform","translate("+(this.x)+"px,"+(this.y)+"px)");
  }
  this.getX = function(){
    return this.x;
  }
  this.getY = function(){
    return this.y;
  }
}



var running = false;
var doitonce = false;

function sendConnection(val,func){
  var port=chrome.runtime.connect({name:"content"});
  port.postMessage({workingMessage:val});
  port.onMessage.addListener(function (msg){
    if(msg.doitonce){
      doitonce = true;
    }
    
    
    // if(run !== undefined){
    //   if(run===true){
    //     running = run;
    //     doitonce = true;
    //   }else if(running === false){
    //     running= run;
    //   }
    // }
    if(typeof func === "function")
      func(msg,port);  
  });
}


function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
    return this;
};


var self = document.querySelector('html');
var body = document.querySelector('body');
var head = document.querySelector('head');
var menuview = "simple";
var debugmode = false;
var opp = false;
var cardopen = false;
var cards = new Cards(self,{"x":400,"y":400});



//adlogsys.ready();

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
  var flip = $(".flipbtn");
  if(which === "open"){
    flip.css("visibility","visible");
    flip.css("height","30px");
    flip.css("width","30px");
    flip.css("transition","height 7s , visibility 6s ease 2s");
  }else if(which === "closed"){
    flip.css("visibility","collapse");
    flip.css("height","0px");
    flip.css("width","0px");
    flip.css("transition","height 2s ,visibility .0s ease .0s");
  }
}
function newcardbtnaction(which){
  var newc = $(".newcard");
  if(which === "open"){
    newc.css("visibility","visible");
    newc.css("height","30px");
    newc.css("width","30px");
    newc.css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){
    newc.css("visibility","collapse");
    newc.css("height","0px");
    newc.css("width","0px");
    newc.css("transition","height 2s ,visibility .0s ease .0s");
  }
}

function nextbtnaction(which){
  var nextb = $(".nextbtn");
  if(which === "open"){
    nextb.css("visibility","visible");
    nextb.css("height","70px");
    nextb.css("width","40px");
    nextb.css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){
    nextb.css("visibility","collapse");
    nextb.css("height","0px");
    nextb.css("width","0px");
    nextb.css("transition","height 2s ,visibility .0s ease .0s");
  }
}
function prevbtnaction(which){
  var ob = $(".prevbtn");
  if(which === "open"){
    ob.css("visibility","visible");
    ob.css("height","70px");
    ob.css("width","40px");
    ob.css("transition","height 7s ,visibility 6s ease 2s");
  }else if(which === "closed"){
    ob.css("visibility","collapse");
    ob.css("height","0px");
    ob.css("width","0px");
    ob.css("transition","height 2s ,visibility .0s ease .0s");
  }
}
function cardaction(which){
  var ob = $(".cards");
  if(which === "open"){
    ob.css("height","300px");
    ob.css("width","497px");
    ob.css("border-radius","0");
    ob.addClass("opened");
  }else if(which === "closed"){
    ob.removeClass("opened");
    ob.css("height","30px");
    ob.css("width","30px");
    ob.css("border-radius","25px");
  }
}
function cardinneraction(which){
  var ob = $(".card-inner");
  if(which === "open"){
   ob.css("overflow","inherit");
  }else if(which === "closed"){
    ob.css("overflow","hidden");
  }
}
function cardfrontaction(which){
  var ob = $(".card-front");
  if(which === "open"){
    ob.css("overflow","inherit");
  }else if(which === "closed"){
    ob.css("overflow","hidden");
  }
}
function cardbackaction(which){
  var ob = $(".card-back");
  if(which === "open"){
    ob.css("overflow","inherit");
  }else if(which === "closed"){
   ob.css("overflow","hidden");
  }
}
function hidecontaineraction(which){
  var ob = $(".hidecontainer");
  if(which === "open"){
    ob.css("background","white");
    ob.css("height","300px");
    ob.css("width","497px");
    ob.css("border-radius","0");
  }else if(which === "closed"){
    ob.css("height","30px");
    ob.css("width","30px");
    ob.css("border-radius","25px");
    ob.css("background","green");
  }
}
function moveraction(which){
  var ob = $(".mover");
  if(which === "open"){
      ob.css("top","-12px");
      ob.addClass("open");
  }else if(which === "closed"){
    ob.removeClass("open");
    ob.css("top","-12px");
  }
}

function menuitemsactions(which){
  var ob = $(".menuitems");
  if(which === "open"){
    ob.css("opacity","1");
    ob.css("transition","opacity .5s");
  }else if(which === "closed"){
    ob.css("opacity",".15");
    ob.css("transition","opacity .5s");
  }
}

function deletemenuaction(which){
  let dm = $(".deletemenu");
  if(which === "open"){
    dm.addClass("dopen");
    dm.css("height","36px");
    dm.css("width","202px");
  }else if(which === "closed"){
    dm.removeClass("dopen");
    dm.css("height","36px");
    dm.css("width","0px");
  }
}
function precisionmenuaction(which){
  let pm = $(".precisionmenu");
  if(which === "open"){
    pm.addClass("popen");
    pm.css("height","36px");
    pm.css("width","202px");
  }else if(which === "closed"){
    pm.removeClass("popen");
    pm.css("height","36px");
    pm.css("width","0px");
  }
}

function hscale(which){
  let dm = $(".deletemenu");
  if(which){
    dm.addClass("scale");
    menuitemsactions("open");
  }else{
    
    dm.removeClass("scale");
  }
}
function pscale(which){
  let dm = $(".precisionmenu");
  if(which){
    dm.addClass("scaler");
    menuitemsactions("open");
  }else{
    dm.removeClass("scaler");
  }
}


function opensystem(isopen){
  if(isopen){
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
    // adlogsys.ready();
    // adlogsys.open();
  }else{
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
    // adlogsys.hide();
  }
}


  //////console.log(self);
function mainscript(html){
  
  var cardcount = 0;
  
  var storage = chrome.storage.local;
  var adlogsys = new AdlogBox(cards);
  var mousebox = new MouseDialog(cards);

  let controlclick = false;
  let openup = false;
  var shrinkcount = 0;


  // var cardcount = 0;
  // var cards = new Cards(html,{"x":400,"y":400});
  var background = chrome.extension.getURL("assets/indexcard.png");
  var focused = $(':focus');
  var dmenucount=0;
  var pmenucount=0;
  var flipcount=0;
  var newcardcount=0;
  var pmaxtimeout = 1000;
  var hmaxtimeout = 1000;
  var newcardmaxtimeout = 1000;
  var flipmaxtimeout = 500;
  var messagemaxtimeout = 1500;
  var maxtimeout = 3000;
  var ad = new AdlogBox(cards);
  var lastdragY=0;
  var lastdragX=0;
  //ad.ready();

  //console.log(document);

  var grammarlycheck = document.createElement("script");
  grammarlycheck.setAttribute("src","js/grammarlycheck.js")

  self.appendChild(grammarlycheck);

  if(debugmode){
    //alert("debugmode");
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
    menuitemsactions("open");
    //deletemenuaction("open");
    //precisionmenuaction("open");
    cards.open = false;
  }
  cards.open = false;
  // var style = document.createElement("link");
  // style.rel = "stylesheet";
  // style.type = "type/css";
  // style.href = chrome.extension.getURL('css/content.css');

  // (document.head||document.documentElement).appendChild(style);

  
  //cards.styleCard(`'background-image:url("${background}");'`);
  //cards.styleCard("background:green;");

  cards.add();
  cards.add();
  cards.add();
  cards.add();
  
    //cards.move(400,400);
  

    // cards.add();
    // cards.add();
  //alert(running);
  console.log(doitonce);
  cards.addtohtml(body);

  var cardfront = $(".card-front");
    //////console.log($(".cards"));
    //////console.log(`${background}`);
  cardfront.css("background-image","url("+background+")");
  cardfront.css("background-size","497px");
  cardfront.css("background-repeat","no-repeat");

    // $(".card-back").css("background-image","url("+background+")");
    // $(".card-back").css("background-size","497px");
    // $(".card-back").css("background-repeat","no-repeat");


  
    // body.ondragover = function(ev){
    //   ev.preventDefault();
    // }

  
    // window.addEventListener('drag', () => {
    //   document.body.style.cursor = 'grabbing';
    // }, true)
  var m = document.getElementsByClassName("mover");

    // for(var i of m){
    //   ////console.log(i);
    //   i.addEventListener("dragstart",ondragevents);
    // }
    //"dragstart",ondragevents)

  /*Event Functions*/
  var dragx = 0;
  var dragy = 0;
  function ondragevents(ev){

    //////console.log(ev);

    if(ev.type==="mouseover"){
      //////console.log(ev);

    }    

    if(ev.type === "drag"){
      console.log(self.scrollHeight,"jkhgkjhgjhkhkjhg");
      //////console.log(ev.type)
      // ev.originalEvent["dataTransfer"].dropEffect="grab";
      // ev.originalEvent["dataTransfer"].effectAllowed="grabbing";
      mousebox.close();
      if(ev.ctrlKey){

        
        // cards.move(ev.pageX-ev.target.offsetLeft-ev.target.offsetWidth+10,
        //   ev.pageY-ev.target.offsetHeight-ev.target.offsetTop+10);
        // 
        cards.move(ev.pageX-self.getBoundingClientRect().left+10,
           ev.pageY-self.getBoundingClientRect().top-self.scrollHeight+10);
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
        mousebox.close();
        $(".mover").css("top","-12px");
      }
      

    }

    if(ev.type === "dragend" && !ev.ctrlKey){

      cards.move(ev.pageX-ev.target.offsetLeft-ev.target.offsetWidth+10,
        ev.pageY-ev.target.offsetHeight-ev.target.offsetTop+10);
      ev.originalEvent["dataTransfer"].dropEffect="grab";

      lastdragX = ev.pageX-ev.target.offsetLeft-ev.target.offsetWidth+10;
      lastdragY = ev.pageY-ev.target.offsetHeight-ev.target.offsetTop+10;
      //////console.log(ev.originalEvent["dataTransfer"].dropEffect);
      
      // storage.set({"card"+cards.cardcount:{"folders":"test1","folderssub":"test1/script.js","content":String(document.body.innerHTML)}},function(){
      //    ////console.log("ok saved");
      // })
    }
  }
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
  

  /*Drag Actions*/
  $("body").on("drop",ondragevents);
  $("body").on("dragover",ondragevents);
  body.addEventListener("dragenter",ondragevents);
  body.addEventListener("dragleave",ondragevents);
  $(".mover").on("dragover",ondragevents)
  $(".mover").on("dragstart",ondragevents)
  $(".mover").on("drag",ondragevents);
  $(".mover").on("dragend",ondragevents);

  /*Click actions*/
  $(".mover").on("dblclick",function(){
    if(!cards.open){

      // hidecontaineraction("open");
      // flipbtnaction("open");
      // nextbtnaction("open");
      // prevbtnaction("open");
      // newcardbtnaction("open");
      // moveraction("open");
      // cardaction("open");
      // cardinneraction("open");
      // cardfrontaction("open");
      // cardbackaction("open");

      opensystem(true);
      
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
        if(!debugmode || !opp){
          // hidecontaineraction("closed");
          // flipbtnaction("closed");
          // nextbtnaction("closed");
          // prevbtnaction("closed");
          // newcardbtnaction("closed");
          // moveraction("closed");
          // cardaction("closed");
          // cardinneraction("closed");
          // cardfrontaction("closed");
          // cardbackaction("closed");
          opensystem(false);
        }
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
  });
  $(".flipbtn").on("click",function(event){
      
      var str = String($(".card-inner").attr("class"));
      $(".card-inner").css("transform","rotateY(180deg)");
      $(".card-inner").addClass("flipped");
      if(str.includes("flipped")){
        $(".card-inner").css("transform","rotateY(0deg)");
        $(".card-inner").removeClass("flipped");
      }
  });
  $(".newcard").on("click",function(ev){
    //alert("ok");
    cards.add();
    cards.addtohtml(body);
    cards.setbackground(background);
  });

  /*mouse actions*/
  $(".mover").on("mouseenter",function(ev){
    // for(var i of $(".menuitems")){
    //   $(i).css("opacity","1");
    // }
    if(cards.open){

        menuitemsactions("open");
    }
  });
  $(".mover").on("mouseleave",function(ev){
    // for(var i of $(".menuitems")){
    //   $(i).css("opacity",".15");
    // }
    if(cards.open){
      if(!debugmode || !opp)
        menuitemsactions("closed");
    }
  });
  

  var deletemenutimer;
  var precisionmenutimer;
  var fliptimer;
  var newcardtimer;
  var maxcount = 3;

  function hmenutimerfunc(e){
    let deltime = this

    
    if(dmenucount >= maxcount){

      hscale(true);
      //deletemenuaction("open");
    //precisionmenuaction("open");
      dmenucount=0;
    }
    
    setTimeout(function(){
      //dmenucount=0;
      clearInterval(deletemenutimer);
    },maxtimeout)
   dmenucount++;
  }
  
  function pmenutimerfunc(e){
    let deltime = this

    
    if(pmenucount >= maxcount){
      
      pscale(true);
      //deletemenuaction("open");
      //precisionmenuaction("open");
      pmenucount=0;
    }
    
    setTimeout(function(){
      //pmenucount=0;
      clearInterval(precisionmenutimer);
    },maxtimeout)
   pmenucount++;
  }

  function fliptimerfunc(e){
    let deltime = this;

    console.log(flipcount);
    if(flipcount >= maxcount){
      
      //pscale(true);
      //deletemenuaction("open");
      //precisionmenuaction("open");
      flipcount=0;
    }
    
    setTimeout(function(){
      //pmenucount=0;
      mousebox.message("For extra menu hover mouse for 3 sec");
      flipcount=0;
      clearInterval(fliptimer);
    },messagemaxtimeout)
   flipcount++;
  }

  function newcardtimerfunc(e){
    let deltime = this;
    

    
    if(newcardcount >= maxcount){
      
      //pscale(true);
      //deletemenuaction("open");
      //precisionmenuaction("open");
      newcardcount=0;
    }
    
    setTimeout(function(){
      //pmenucount=0;
      mousebox.message("For extra menu hover mouse for 3 sec");
      clearInterval(newcardtimer);
    },messagemaxtimeout)
   newcardcount++;
  }

  $(".flipbtn").on("mouseenter",function(ev){
    menuitemsactions("open");
  })
  $(".flipbtn").on("mouseover",function(ev){
    

    //precisionmenutimer = setInterval(pmenutimerfunc,pmaxtimeout);
    fliptimer = setInterval(fliptimerfunc,flipmaxtimeout);
  })
  $(".flipbtn").on("mouseleave",function(ev){
    // if(!debugmode)
    //   menuitemsactions("closed");
    //precisionmenuaction("closed");
    //pscale(false);
    clearInterval(fliptimer);
    clearInterval(precisionmenutimer);
  })

  $(".newcard").on("mouseenter",function(ev){
    menuitemsactions("open");
  });
  $(".newcard").on("mouseover",function(ev){
    newcardtimer = setInterval(newcardtimerfunc,newcardmaxtimeout);
    deletemenutimer = setInterval(hmenutimerfunc,hmaxtimeout);
  });
  $(".newcard").on("mouseleave",function(ev){

    clearInterval(newcardtimer);
    clearInterval(deletemenutimer);
    //hscale(false);
    // if(!debugmode)
    //   menuitemsactions("closed");
    //deletemenuaction("closed");

  });

  var xc = 0;
  var yc = 0;
  var mousePos;
  var currentPos;
  var offset = [0,0];
  var div;
  var isDown = false;

  $(".hidecontainer").on("mousedown",function(ev){
    isDown = true;
    offset = [
      ($(".hidecontainer")[0].offsetLeft - ev.clientX),
      $(".hidecontainer")[0].offsetTop - ev.clientY
    ];

    console.log($("document"),"akjhsdf");

    console.log(offset);

  });
  var changeX = 0;
  var changeY = 0;
  function changeadjust(ev){
    var mousemessage = $(mousebox.modio);
      if($(ev.target).hasClass("newcard")){
          if(mousebox.getSave()){
            changeX = 60;
            changeY = 40;
          }else{
            changeX = 180;
            changeY = 150;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, width 1s, height 1s");
          mousebox.message("This button is to create a new card");

        }else if($(ev.target).hasClass("flipbtn")){
          if(mousebox.getSave()){
            changeX = -50;
            changeY = 40;
          }else{
            changeX = (-50);
            changeY = 150;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s , width 1s, height 1s");
          mousebox.message("This button is to flip card");

        }else if($(ev.target).hasClass("nextbtn")){
          if(mousebox.getSave()){
            changeX = -50;
            changeY = 40;
          }else{
            changeX = (-50);
            changeY = 150;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, width 1s, height 1s");
          mousebox.message("This button is to show next card");

        }else if($(ev.target).hasClass("prevbtn")){
          if(mousebox.getSave()){
            changeX = 60;
            changeY = 40;
          }else{
            changeX = (180);
            changeY = 150;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, width 1s, height 1s");
          mousebox.message("This button is show previous card");

        }else if($(ev.target).hasClass("L")){
          if(mousebox.getSave()){
            changeX = 60;
            changeY = 40;
          }else{
            changeX = (160);
            changeY = 160;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, width 1s, height 1s");
          mousebox.message("Feature coming soon");

        }else if($(ev.target).hasClass("R")){
          if(mousebox.getSave()){
            changeX = -50;
            changeY = 40;
          }else{
            changeX = (-50);
            changeY = 120;
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, width 1s, height 1s");
          mousebox.message("Feature coming soon");

        }else if($(ev.target).hasClass("mover")){
          if(mousebox.getSave()){
            changeX = 10;
            changeY = 50;
          }else{
            changeX = 50;
            changeY = (200);
          }
          mousebox.open();
          mousemessage.css("transition","transform .2s, witdh 1s, height 1s");
          if(cards.open)
            mousebox.message("moves the cards click to minify");
          else
            mousebox.message("Double Click to open");
        }else{
          if(mousebox.getSave()){
            changeX = 5;
            changeY = 40;
          }else{
            changeX = 100;
            changeY = 190;
          }
          mousebox.close();
          mousemessage.css("transition","transform 0s, witdh .5s, height .5s");
          mousebox.message("");
        }
  }

  $(".hidecontainer").on("mouseup",function(ev){
    isDown = false;
  });

  var x = 0;
  var y = 0;
  
  $(".hidecontainer").on("mousemove",function(ev){
      console.log(ev);
      
      mousebox.setSave(false);
     mousePos={
        "x":ev.clientX,
        "y":ev.clientY
      };

      
      changeadjust(ev);
      

      

      mousebox.move(ev.pageX-cards.card.getBoundingClientRect().left-changeX,ev.pageY-cards.card.getBoundingClientRect().top-changeY-self.scrollTop);


      // mousebox.move(((mousePos.x+offset[0]-self.getBoundingClientRect().x)-self.scrollWidth),((mousePos.y+offset[0]-self.getBoundingClientRect().y)-self.scrollHeight))


  });
  var scrolly =0;
  var yalt = 0;
  window.addEventListener('scroll', function(ev) {

     //changeadjust(ev);
    mousebox.open();
    console.log(self.scrollTop);
    mousebox.message(yalt+" sc"+ scrolly)
    if(scrolly <= lastdragY+self.scrollTop-cards.card.getBoundingClientRect().top){
      scrolly = scrolly+1.1;
      
     

    }else
    if(yalt >= scrolly){
      scrolly = scrolly-1.1;
    }
    yalt = lastdragY+self.scrollTop-cards.card.getBoundingClientRect().top+scrolly;

    
     //cards.move(500,lastdragY+self.scrollTop-cards.card.getBoundingClientRect().top);
     cards.move(500,scrolly);
     
  });
  // $("body").on("scroll",function(ev){
  //   alert("scroll");
  //   mousebox.move(ev.pageX-cards.card.getBoundingClientRect().left-changeX,ev.pageY-cards.card.getBoundingClientRect().top-changeY-self.scrollTop);
  // });

  function fliptimerfunc(e){
    let deltime = this

    console.log(pmenucount);
    if(pmenucount >= maxcount){
      
      pscale(true);
      //deletemenuaction("open");
      //precisionmenuaction("open");
      pmenucount=0;
    }
    
    setTimeout(function(){
      //pmenucount=0;
      clearInterval(precisionmenutimer);
    },maxtimeout)
   pmenucount++;
  }

  $(".hidecontainer").on("mouseover",function(ev){
    //////console.log(ev,"oversaaa");
    if(cards.open){
      if(String(ev.target.className).includes("menuitems")){
        $(ev.target).css("opacity","1");
      }
      
    }
  });



  $(".deletemenu").on("mouseleave",function(ev){
    hscale(false);
    // if(!debugmode)
    //   deletemenuaction("closed");
  })
  $(".precisionmenu").on("mouseleave",function(ev){
    pscale(false);
    // if(!debugmode)
    //   precisionmenuaction("closed");
  })

  $(".submenubtns").on("mouseover",function(ev){
    menuitemsactions("open");
  })




  $(".card-front").on("mouseenter",function(ev){
    if(!debugmode)
      menuitemsactions("closed");
  })
  $(".card-back").on("mouseenter",function(ev){
    if(!debugmode)
      menuitemsactions("closed");
  })

  $(".mousebox").on("mouseover",function(ev){
    mousebox.close();
  })
 
  $(".nextbtn").on("mouseenter",nextbtnmouseevnts);
  $(".nextbtn").on("mouseleave",nextbtnmouseevnts);

  $(".prevbtn").on("mouseenter",prevbtnmouseevnts);
  $(".prevbtn").on("mouseleave",prevbtnmouseevnts);


  $(".savebtn").on("click",function(){
    adlogsys.fullmode(true);
  })

  // $(".mover").on("mouseup",function(){

  //   document.removeEventListener("drag",ondragevents);
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

  function checkchildren(item,even){
   
    var stopping = false;
    console.log(item);
    $(item).each(function(iter,elem){
      console.log(iter, elem);
    });
  }

  function countcheckdiv(item,iter,event){
      var tars = item.scrollWidth;
      var pars = item.parentNode.offsetWidth;
      var stopping = false;
      var entercheck = document.createElement("div");
      entercheck.innerHTML = "Enter";
      item =  item[iter]
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
      if(getCaretPosition(item) < maxperline){

         subwidth = getCaretPosition(item);
         console.log(subwidth);
         for(var i of $(".writearea")){

          if(i.getBoundingClientRect().width >= pars){
            //alert("asdf");
            
            if(!$(i).hasClass("myafter")){
              //$(i).removeClass("myafter")
              $(i).addClass("myafter:focus");
              ////console.log(
              i.pseudoStyle({
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
          }

          
          //console.log($(i).has("focus"));
          if(i.getBoundingClientRect().width > pars){
            if(tars > (pars)){
              ////console.log("asdfjhkjsd");
              $(i).addClass("full");
              stopping = true;

            }
          }

          if(event.which === 13){
            stopping = false;
            $(i).removeClass("myafter");
            $(i).removeClass("typing");
          }
          if(event.which === 8){
            stopping = false;
            $(i).removeClass("myafter");
            $(i).removeClass("typing");
          }
          
          ////console.log(($(i).text().length+i.getBoundingClientRect().width));
          //i.pseudoStyle("before","content","'tesdft'").pseudoStyle("before","color","purple");
          $(i).css("width",""+(($(i).text().length*6.1))+"px")
          ////console.log(i);
         }
         //$(".writearea")
         //stopping = true;
         //alert("ok stop");
      }




      /*TODO PERSION MODE*/
      if(getCaretPosition(item)>0){
            // if(String($(i).prev().attr()).includes("full")){
            //   $(i).removeClass("myafter");
            // }

            /*LEFT OFFF HERE*/
            //console.log(item);
            //console.log($(item));
        
        
        if(item != undefined){
          if(!$(item).prev().hasClass("done")){
            $(item).removeClass("writing");
            $(item).addClass("done");
          }
        }
        if($(item).hasClass("writing")){
        if(item.getBoundingClientRect().width >= pars){
             //alert("asdf");
             
            
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
        }
        console.log($(item).prev(),"sdlkfhkjsdhflkjshdfkhlksdhfjldhslkk");
        
        $(item).css("width",""+(($(item).text().length*6.1))+"px");
        
        ////console.log($(".myafter:hover::after"));
        // ////console.log((tars-98),"tar", (pars-96),"par");
        // if((tars-98) === (pars-90)){
        //     alert("f "+(pars-50)+"ASf "+pars);
        //     stopping = true;

        // }
      }
      if(event.keyCode ===8){
        $(item).removeClass("myafter");
        $(item).removeClass("myafter:focus");
      }
      if(event.keyCode === 13){
        if($(item).prev().hasClass("done")){
          $(item).removeClass("writing");
        }
        $(item).removeClass("myafter");
        $(item).removeClass("myafter:focus");
        $(item).addClass("writing");
      }
      if(item.getBoundingClientRect().width >= pars){

        // if(tars > (pars)){
        //   ////console.log("asdfjhkjsd");
        
        //   stopping = true;

        // }
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
      var children =  event.target.childNodes.length;
      stop = checkchildren(children);
      /*Old Way*/
      // for(var i=0; i < children; i++){
      //   console.log($(children[i]),"dsafkjkjhs");
      //   //prevsubheight = i.getBoundingClientRect().height;
      //   stop = countcheckdiv(children[i],i,event);
      // }
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



sendConnection('here too',function(msg,port){
    //alert("runnning");
    console.log(msg)
    if(msg.backgrounds.running != undefined){
      if(msg.backgrounds.running){
        running = true;
        if(!doitonce){
          mainscript(self);
          doitonce = true;
          port.postMessage({doitonce:doitonce});
        }
      }
      
    }

    if(msg.action=== "checking"){

    }
});
