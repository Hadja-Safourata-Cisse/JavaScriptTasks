function viewsListe(daten,targetHtml,numberOfRows){  
  var i=0;
  var parentDiv=document.createElement('div');
  parentDiv.id="liste";
  parentDiv.classList.add('liste')
  var liste=daten.getElementsByTagName('R') //recovery of the R element 
  while(i!=numberOfRows){      
    var element=liste[i].children;
    var div=document.createElement('div');
    var ul=document.createElement('ul');
    for(let j=0;j<element.length;j++){    
       var li=document.createElement('li');
       li.id=liste[i].id + "" + j;
       li.appendChild(document.createTextNode((liste[i].children[j].innerHTML).toLowerCase())) //Create a text node with the Data values and put them in toLowerCase                
       ul.appendChild(li);
    }
    div.appendChild(ul);
    parentDiv.appendChild(div) 
    i++;
 }
 targetHtml.appendChild(parentDiv);
 }