function buttonErzeugung(){
   var label=document.createElement('label');
   var input=document.createElement('input');
   var span=document.createElement('span');
   label.classList.add("switch");
   input.type="checkbox";
   input.id="presentation";
   span.classList.add("slider");
   span.classList.add("round");
   label.appendChild(input);
   label.appendChild(span);
   return label;  
}


 function tableColor(liste) {
  var colors =['#5d8aa8','#f0f8ff','#e32636','#efdecd','Red','Orange','#89cff0','#fe6f5e','#a2a2d0']; 
  $( "table" ).on( "click", "td", function() {
  var colorRandom=colors[Math.floor(Math.random()*colors.length)];   
  var id=$( this ).attr('id');  
  this.style.background=colorRandom;
  for(var i=0;i<liste.length;i++){
    if(liste[i].id==id){
      liste[i].style.background=colorRandom;
    }
  }
})
}


function listeColor(tab){ 
  var colors =['#5d8aa8','#f0f8ff','#e32636','#efdecd','Red','Orange','#89cff0','#fe6f5e','#a2a2d0'];
  $( "div" ).on( "click", "li", function() {
     var colorRandom=colors[Math.floor(Math.random()*colors.length)];  
     this.style.background=colorRandom;
     var id=$( this ).attr('id');
     for(var i=0;i<tab.length;i++){
       if(tab[i].id==id){
       tab[i].style.background=colorRandom;
      }
     }
   });  
}


function controler(targetHtml,numberOfRows){
  targetHtml.appendChild( buttonErzeugung());
  var daten = new  Model();
  
  new viewsTable(daten,targetHtml,numberOfRows); 
  new viewsListe(daten,targetHtml,numberOfRows);
  
  var tab=document.getElementsByTagName('td');
  var liste=document.getElementsByTagName('li');
  tableColor(liste);
  listeColor(tab);
  
  document.getElementById('table').style.display="none";
  document.getElementById('liste').style.display="none";
  var check=document.getElementById("presentation");
  check.addEventListener('click',function(){   
  if(check.checked==true) {
     document.getElementById('table').style.display="inline";
     document.getElementById('liste').style.display="none";
  }
  if(check.checked==false){
    document.getElementById('liste').style.display="inline";
    document.getElementById('table').style.display="none";
  } 
 })
   
}