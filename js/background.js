/*Background worker for chrome extentions*/


// chrome.browserAction.setPopup({popup:""});
var open = false;
var cardopen = false;
var doitonce = false;

function Passing(){
	this.passing = "";

	this.set = function(val){
		this.passing = val;
	}
	this.get = function(){
		return this.passing
	}

	this.update = function(){
		this.passing = this.passing;
	}

	this.update();
}

var pass = new Passing();
function connection()
{
  var passing;
  chrome.runtime.onConnect.addListener(function (ported){
  this.port = ported;
    if (ported.name === "popup"){
      ported.onMessage.addListener(function(msg){
//        setInterval(function (){setpopmsg(msg.popupMessage);},100);
        console.log(msg.popupMessage);
        passing = {"msg":msg.popupMessage};
        ported.postMessage({backgrounds:{"from":"s"}})
      });
      
    }
  
    if(ported.name === "content"){
      ported.onMessage.addListener(function(msg){
        
        console.log(msg);

        //ported.postMessage({backgrounds:{"running":open,"popmessage":passing}});
        if(msg != undefined || msg != null){
          ported.postMessage({backgrounds:{"running":open,
            "cardopen":cardopen,
            "popmessage":passing}});

          if(msg.doitonce != undefined){
            doitonce = msg.doitonce;
            ported.postMessage({doitonce:doitonce});
          
          }

          if(msg.cardopen != undefined){
            cardopen = msg.cardopen;
            ported.postMessage({cardopen:cardopen});
          }
        }




      });
    }



  });
}

connection();


chrome.browserAction.onClicked.addListener(function(tabs){

})