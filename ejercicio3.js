
document.getElementById("btn2").addEventListener("click", () =>
{   
    var cad= document.getElementsByName("cad1")[0].value;
    
    document.getElementById("resultado2").innerHTML= "El resultado es:" + "  " + pri(cad);
    
  });
  function pri (cad){
  var ba ="falso";  
  return Eje3("",cad);
 function Eje3 (aux, cad) 
{  
  if (cad.length == 1)
  {   var aux2 =aux+cad;
      var rev ="";
      for (var i = aux2.length-1; i>=0; i--) {
          rev= rev+aux2.charAt(i);   
      }
      if (aux2==rev)
          ba ="Es palindromo";
      return;
  }
  for (var i =0; i < cad.length ; i++) {
      Eje3(aux + cad.charAt(i), cad.replace(cad.charAt(i),""));
  } return ba;
}}