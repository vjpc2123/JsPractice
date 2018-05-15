var imagenes = [];
imagenes["Victor"] = "../Img/vaca.png";
imagenes["Juan"] = "../Img/pollo.png";
imagenes["Pedro"] = "../Img/cerdo.png";
class pokemon
{
    constructor(nombre, vida, ataque)
    {
        this.img = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.img.src = imagenes[this.nombre];
    }
    hablar()
    {
      alert(this.ataque);
    }
    mostrar()
    {
      document.body.appendChild(this.img);
      document.write("<br/>");
      document.write("<strong>"+this.nombre+"</strong> <br />");
      document.write("Vida: "+this.vida+"<br />");
      document.write("Ataque: "+this.ataque + "<hr/>");
    }
}
var pokemones = [];
pokemones.push(new pokemon("Victor",100,200));
pokemones.push(new pokemon("Juan",16,20));
pokemones.push(new pokemon("Pedro",50,100));

for(var datos of pokemones)
{
  datos.mostrar()
}
/*
for(var datos in pokemones)
{
  pokemones[datos].mostrar();
}

for (var i = 0; i < pokemones.length; i++) {
  pokemones[i].mostrar();
}*/
