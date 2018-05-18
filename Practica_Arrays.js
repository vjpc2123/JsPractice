
//Suma de Los pametros
/*function sumatoria(...arreglos)
{
  var length = arreglos.length;
  let acumulador = 0;
  for (var i = 0; i < length; i++) {
    acumulador += arreglos[i];
  }
  return acumulador;
}*/

/*function sumatoria_dos(...arreglos)
{

return  arreglos.reduce(function(numero, acumulador)
   {
    acumulador += numero;
    return acumulador;
   },0)
}
*/
//Doble de los parametros ingresados.
/*function dobles(...arreglos)
{
  let length = arreglos.length
  var numeros = [];
  for (var i = 0; i < length; i++) {
    numeros.push(arreglos[i]*2);
  }
  return numeros;
}*/
/*
const dobles =(...arreglos) => arreglos.map(numeros =>  numeros*2);*/

function pares(...arreglos)
{
  let length = arreglos.length;
  let resultado = [];
  for (var i = 0; i < length; i++) {
    let numero = arreglos[i];
    if (numero % 2 == 0) {
      resultado.push(numero)
    }
  }
  return resultado;
}


function HoSanta(numeroHo )
{
  var Text = "Ho";
  var arreglo = [];
  for (var i = 1; i <= numeroHo ; i++) {
    if (numeroHo == i) {
      arreglo.push(Text + "!");
    }else {
      arreglo.push(Text);
    }


  }
  var resultado = arreglo.join(" ");

  return resultado.toString();
}
