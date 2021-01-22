//var cad= "foo(bar(baz))blim";
document.getElementById("btn1").addEventListener("click", () =>
{
    var cad= document.getElementsByName("cad")[0].value;
    document.getElementById("resultado1").innerHTML= "El resultado es:" + "  " + eje2(cad);
});


function eje2 (cad){
    var part1="", part="";
    while (cad.indexOf("(")>=0) {
        for (var i = cad.lastIndexOf("("); i<cad.length; i++) {
            if(cad.charAt(i)==")")
            {   part=cad.slice(cad.lastIndexOf("("),i+1);
                break;
            }}
        part1= rev( part);
        cad=cad.replace(part, part1)
} 
return cad;
}
function rev(part) {
    var res="";
    for (var i=part.length-2; i>0;i--){
        res= res+part.charAt(i);
    }
    return res; 
}