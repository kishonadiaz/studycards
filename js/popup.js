var htm = document.querySelector('html');
var b = document.querySelector('body');
var port;

var opened =  chrome.extension.getBackgroundPage().open;

function sendConnection(val="",func="",names="popup")
{
  port=chrome.runtime.connect({name:names});
  if(val != "")
    port.postMessage({popupMessage:val});

  port.onMessage.addListener(function (msg){
  //   console.log(msg);
    // if(func != "")
    //   func(msg);
  });
  
}

var count =0;
// function receiveMsg(){
//   var out = '';
//   sendConnection(function(msg){

//     out = msg;
//     if(count >1){
//       count = 0;
//       return out;
//     }
//     receiveMsg();

//   })
//   return out;
// }

function onopen(){

  if(!opened){
    chrome.extension.getBackgroundPage().open = true;
    chrome.tabs.executeScript({file:"js/content.js"});
    sendConnection("open");
  }
}

// function charaters(){
//   sendConnection("send on click");
//     //chrome.tabs.executeScript(null,{
      
//       //code:'document.querySelector("html").insertBefore('+div+','+b+')'
    
//       //code:'document.body +="'+h+'"'
//       //code: 'document.insertBefore('+cdiv+','+b+')'
      
      
//     //});
//     //chrome.extension.getBackgroundPage().v = true;
//     //console.log(chrome.extension.getBackgroundPage().v);
//     //document.body.innerHTML = "here";
// }
function onlogout(){
  chrome.extension.getBackgroundPage().open = false;
  sendConnection("out");
    chrome.tabs.executeScript({file:"js/content.js"});
}
function main(){


  //console.log(receiveMsg())
  // var c = document.getElementsByTagName('a');
  // var m = document.querySelectorAll('a');
  var b = document.querySelector('body');
  //var div = document.createElement('div');
  
  //var h = "here";
  // for(var i=0 ; i < m.length; i++){
  //   console.log(i);
  //   m.item(i).addEventListener('click',function(e){
  //     alert(e.target.innerHTML); 
  //     switch(e.target.innerHTML){
  //       case "charater":{
  //         charaters();
  //         break;
  //       }
  //       case "charater clothen":{
  //         break;
  //       }
  //       case "charater stats":{
  //         break;
  //       }
  //       case "log out":{
  //         onlogout();
  //         break;
  //       }
  //     }
    
      
  //   });
    
  // }
}

onopen();
//chrome.tabs.executeScript({file:"workingpage.js"});
document.addEventListener('DOMContentLoaded',function(){
  main(); 
//  document.body.innerHTML = "here";
});