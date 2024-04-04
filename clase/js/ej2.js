var anio,edad;
anio=parseInt(prompt("ingrese año de nacimiento:  "));
edad=2014-anio;


if(edad>=18){
    alert("MAYOR DE EDAD");
}
else{
    alert("MENOR DE EDAD");
}

var dia;
dia=parseInt(prompt("ingrese un dia entre 1 y 7:   "));

switch(dia)
{
    case 1: alert("lun"); break;
    case 2: alert("mar"); break;
    case 3: alert("mie"); break;
    case 4: alert("juev"); break;
    case 5: alert("vier"); break;
    case 6: alert("sab"); break;
    case 7: alert("dom"); break;
    default: alert("fuera de rango");
}
