var nombre = "Victor Jose";
var nombre1 = "Juan Antonio";
var edad = 21;
var edad1 = 12;
var edadLimite = 15;
var Pelicula = "Payasos al poder";

function Depende(nombre,edad,compañero)
{
  if (edad >= edadLimite) {
    alert(`${nombre} Puede Ingresar a ver la pelicula ${Pelicula} puesto que el mismo
      cumple con la edad requerida puesto que su edad actual es ${edad} y la minima es de ${edadLimite}`);
    }
  else if (compañero == true) {
        alert(`${nombre} Puede Ingresar a ver la pelicula ${Pelicula} aunque el mismo no
          cumple con la edad requerida puesto que su edad actual es ${edad} y la minima es de ${edadLimite} el mismo puede ingresar puesto que se encuentra acompañado de un adulto.`);}

      else {
        alert(`${nombre} no puede ingresar a la pelicula ${Pelicula} puesto que no cumple la edad minima requerida la cual es ${edadLimite} y el mismo posee ${edad}`)
      }
}

Depende(nombre,edad)
Depende(nombre1,edad1)
Depende(nombre1,edad1,true)
