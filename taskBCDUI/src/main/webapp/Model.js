var response;   
function load(){  
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      response=this.responseXML;
     }      
   };         
   xhttp.open("GET","Daten.xml", false);
   xhttp.send();
   
}

function Model(){
  load();
  return response;
}


/*var response;   
function load(url){  
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      response=this.responseXML;
     }      
   };         
   xhttp.open("GET",url, false);
   xhttp.send();
   
}

function Model(url){
  load(url);
  return response;
}*/

  

  



 



