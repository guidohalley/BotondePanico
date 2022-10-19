<h1 align="center"> 👾 HOLA , soy Guido Halley 👽</h2>
<h4 align="center"><p><em> ## INCADE ☕</p></em>
<hr>
<br>
<h1 align="center">
Te invito a ver el codigo de Boton de panico, te puede servir para generar eventos en tu ambito laboral a partir de este script
Cualquier cosa te dejo mis redes para que te contactes si necesitas ayuda.
<p align="center">
<hr>
  Esta desarrollado en Google App Script, pero es similar a javascript
</p></h1>

<pre><code>
// pongo el ID en una variables asi es mas facil despues si necesitas incluir por ahi
var idCalendario = '//pone aca tu id de calendario';
function Agendar() {

// registrar los botones del sheet al calendar.
  var archivo = SpreadsheetApp.getActiveSpreadsheet();
  var calendario = CalendarApp.getCalendarById(idCalendario);

//dentro de la planilla
  var parte = archivo.getRange("C2:C").getValues();

  var valorParte = archivo.getRange("C2:C").getValues();
  //Logger.log(parte);
  var hasta = archivo.getRange("J2:J").getValues();
  //Logger.log(hasta);

  //trae la ultima columna activa en Integer, por ejemplo si cargas 8 datos, trae 8 
  var posParte = archivo.getLastRow();// Logger.log(posParte)  

  for (z = 0; z < posParte;z++){    
    
    if (parte[z] != "") {
      var nombre = parte[z];
      var fechaDeVencimiento = hasta[z];
      var estado = archivo.getRange("K2:K")[0];
      //Logger.log("tome a "+ nombre + " y su boton vence " + fechaDeVencimiento);

      /*
      aca tengan en cuenta que depende de la version que esten corriendo va a castear
      el dato en forma de fecha o no, en caso que no lo haga hay que castear, asi
      */

      var fechaDeVencimiento = (new Date (hasta[z]));
      var nombre = parte[z].toString();

      //Logger.log(nombre,fechaDeVencimiento);

      // la funcion CreateAllDayEvent tiene 2 parametros (string, date)
      //, en este caso como parte es string le sumamos al parametro string
      // y nos registra con el nombre de la parte.

      var eventosCal = CalendarApp.createAllDayEvent("Vence el Boton de: "+nombre,fechaDeVencimiento);
      Logger.log("cree el evento de: "+ nombre + " con fecha de: " + fechaDeVencimiento);

/*
      var posicion = archivo.getRange("k2:k10")
      Logger.log(posicion);*/
      //mira esta es la parte que me da el error. o sea no da un error pero no cumple con la funcioncion que deberia cumlir
      var fila = archivo.getLastRow();
      var columna = 11;
      archivo.getSheets()[0].getRange(fila, columna).setValue("Agenda2").setBackground('blue');
      
      var estado = archivo.getRange("K2:k20").getValues();
      Logger.log(estado);
    }
    
  }  
}
</code></pre>

<hr>
'''
<h1 align="center">
⚡ Buscame en ⚡
  
<p align="center">
  <br/>
  <a href="https://www.linkedin.com/in/guidohalley">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white">
  </a>
  
  <a href="https://github.com/guidohalley">
    <img src="https://img.shields.io/badge/Github-%230A0A0A.svg?&style=flat-square&logo=Github&logoColor=white">  
  </a>
 
  <a href="https://www.instagram.com/guidohalley">
    <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white">
  </a>

  <a href="https://twitter.com/GuidoHalley">
    <img src="https://img.shields.io/badge/twitter-%230077D4.svg?&style=flat-square&logo=twitter&logoColor=white">
  </a>
</p>
</h1>

<div align = "center">
<hr>

