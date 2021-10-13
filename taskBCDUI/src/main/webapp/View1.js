  function viewsTable(daten,targetHtml,numberOfRows){  
    var table=document.createElement('table');
    table.id="table";  
    table.appendChild(headerTeil(daten));  
    table.appendChild(bodyTeil(daten,numberOfRows));
    targetHtml.appendChild(table);
 }
  
function headerTeil(daten){   
    var caption=daten.getElementsByTagName('Columns')[0].children;
    var thead=document.createElement('thead');
    var tr=document.createElement('tr');  
    for(let i=0;i<caption.length;i++){ 
        var th = document.createElement('th');
        th.appendChild(document.createTextNode((caption[i].getAttribute("caption")).toUpperCase())); //Create a text node with the caption values and put them in Upercase    
         tr.appendChild(th); 
     }      
      thead.appendChild(tr); 
      return thead;
 }
  
  
function bodyTeil(daten,numberOfRows){  
   var i=0; 
   var bodyTeil=daten.getElementsByTagName('R');
   var tbody=document.createElement('tbody');
   while(i!=numberOfRows){ 
      var element=bodyTeil[i].children;
      var tr=document.createElement('tr');         
      for(let j=0;j<element.length;j++){
           var td=document.createElement('td');
           td.id=bodyTeil[i].id + "" + j
           td.appendChild(document.createTextNode((bodyTeil[i].children[j].innerHTML).toLowerCase())) //Create a text node with the Data values and put them in toLowerCase 
           tr.appendChild(td);        
        }
      tbody.appendChild(tr);
      i++;    
     }
     return tbody;
}