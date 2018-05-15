var d = document.getElementById("dibujo");
var cuadro= d.getContext("2d");


var x = 250;
var y = 250;
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
    dibujarLinea("#1C7341",249,249,251,251,cuadro);

    document.addEventListener("keydown",dibujandoEventos);

    var Teclas ={
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };

    function dibujandoEventos(eventos)
      {
        var colorLinea = "#1F4C4F";



      var movimiento = 20;
        
      switch (eventos.keyCode){

        case Teclas.UP:
          dibujarLinea(colorLinea,x,y,x,y - movimiento,cuadro );
          y = y - movimiento;
          console.log(y);
          break;
        case Teclas.DOWN:
          dibujarLinea(colorLinea,x,y,x,y + movimiento,cuadro);
          y = y + movimiento
          break;
        case Teclas.LEFT:
          dibujarLinea(colorLinea,x,y,x-movimiento,y,cuadro);
          x = x - movimiento;
          break;
        case Teclas.RIGHT:
          dibujarLinea(colorLinea,x,y,x+movimiento,y,cuadro);
          x = x + movimiento;
          break;
      }
    }
