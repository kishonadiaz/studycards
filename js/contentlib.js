class BackgroundMessage{
  constructor(namecon){
    this.port = chrome.runtime.connect({name:namecon});
    this.passing;
    this.name = namecon;
    
  }
  sendMessage = function(message="",info={},interfaceing=""){
    if (typeof message === {}){
      this.port.postMessage({from:this.name,value:message});
    }
    else if(typeof message === function() {} || typeof info === {}){
      if(info != undefined || info != ""){
        this.port.postMessage(info);
      }else{
        this.port.postMessage({from:this.name, value: message, interface:interfaceing});
      }
    }
    else{
      this.port.postMessage({from:this.name,value:message});
    }

    lib.sendcounter++;
  }
  receive = function(func){
    this.port.onMessage.addListener(function (msg){
    //console.log(msg.from);

      if(msg != undefined){
        ///console.log(msg);
        if(func != undefined || func != "" || func != undefined){
          console.log(lib.sendcounter);
          func(this.port,msg);
        }
      }
    });
  }
  interface = function(info){
    let m = this;
    this.port.onMessage.addListener(function(msg){
      console.log(msg);
      if(msg != undefined){
        if(info != undefined || info != null || typeof info === {})
          m.sendMessage("",info);
      }
    })   
  }
}