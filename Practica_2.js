//1. Si la palabra termina con "ar", se le quitan estas dos letras
//2. Si la palabra inicia con Z, se le añade "pe" al final
//3. Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por
//la mita y unir con un guion medio
//4. Por Ultimo, si la palabra original es un palindromio, ninguna de las reglas
//anteriores cuentan y se devuelve la misma palabras pero Intercalando letras mayusculas
//y minusculas
function Idioma(original)
{
  var traduccion = original;
  if (original.toLowerCase().endsWith('ar')) {
    traduccion = original.slice(0,-2);
  }
  if(traduccion.toLowerCase().startsWith('z'))
  {
    traduccion += 'pe'
  }
   var largo = traduccion.length
  if (largo >= 10) {
    var primeramitad = traduccion.slice(0, Math.round(largo/2));
    var segundamitad = traduccion.slice(Math.round(largo/2))
      traduccion = primeramitad + "-"+ segundamitad;
  }

  const revertida = (original) => original.split('').reverse().join('');
  function minMayus(original)
  {
    const largo = original.largo;
    let traduccion = ''
    let capitalize = true
    for (var i = 0; i <largo; i++) {
      var char = original.charAt(i);
      traduccion += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize
    }
    return traduccion;
  if (original == revertida(original)) {
    return minMayus(original)
  }
  return traduccion
}
console.log(Idioma("Dominar"))
console.log(Idioma('Zorrar'))
console.log(Idioma('asdfghjklweqrwerss'))
console.log(Idioma('sometemos'))
