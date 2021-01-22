document.getElementById("btn").addEventListener("click", () =>
{
var StringArray= document.getElementsByName("vec")[0].value;
document.getElementById("resultado").innerHTML= "La(s) cadena mas larga es(son):" + "  " + cadm(StringArray.split(" "));
});

function cadm(cad) {
    var max=cad [0].length, cadaux= [];
    for (var i=0; i<cad.length;i++)
    {
        if(max<cad[i].length){
            max=cad[i].length;
            cadaux.splice(0,cadaux.length);
            cadaux.push(cad[i]);
        }
            
        else if(max==cad[i].length)
            cadaux.push(cad[i]);
    }
return cadaux;
    
}