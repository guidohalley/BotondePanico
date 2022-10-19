var idCalendario = 'ablu5km3qbku8uroe92d8h3qmc@group.calendar.google.com';

function Agendar() {
  
  var archivo = SpreadsheetApp.getActiveSpreadsheet();
  var calendario = CalendarApp.getCalendarById(idCalendario);
  var parte = archivo.getRange("C2:C").getValues();
  var valorParte = archivo.getRange("C2:C").getValues();
  var hasta = archivo.getRange("J2:J").getValues();
  var posParte = archivo.getLastRow(); 

  for (z = 0; z < posParte;z++){    
    
    if (parte[z] != "") {
      var nombre = parte[z];
      var fechaDeVencimiento = hasta[z];
      var estado = archivo.getRange("K2:K")[0];  
      var fechaDeVencimiento = (new Date (hasta[z]));
      var nombre = parte[z].toString();

      var eventosCal = CalendarApp.createAllDayEvent("Vence el Boton de: "+nombre,fechaDeVencimiento);
      Logger.log("cree el evento de: "+ nombre + " con fecha de: " + fechaDeVencimiento);
      var fila = archivo.getLastRow();
      var columna = 11;
      archivo.getSheets()[0].getRange(fila, columna).setValue("Agenda2").setBackground('blue');
      var estado = archivo.getRange("K2:K").getValues();
      Logger.log(estado);
    }
    
}