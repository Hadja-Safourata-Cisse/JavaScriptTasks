function color ()
{
  
  var index,
  table = document.getElementById('mytable');
  
  var colors =['#5d8aa8','#f0f8ff','#e32636','#efdecd','Red','Orange'];

  var colorRandom=colors[Math.floor(Math.random() * colors.length)];
  
  for(var i=0;i<table.cells.length;i++)
  {
    table.cells[i].onclick=function()
    {
      
      this.style.background=colorRandom; 
    }
    }
  }