function traerBusquedas() {

  //traer la hoja de cálculo externo por su id
  var archivoExterno =SpreadsheetApp.openById("1vM4gB3UGotrkrD-xxR7emhoYe5gfQZuQ50Crv3A89PY");
  // traer la hoja del archivo externo
  var hojaExterna= archivoExterno.getSheetByName("Sheet1");


  //traer las ultimas filas y columnas
  var ultimaFilaExterna= hojaExterna.getLastRow();
  var ultimaColumnaExterna= hojaExterna.getLastColumn();

  //traer los valores del arreglo
  var arregloBuscar= hojaExterna.getRange(1,1, ultimaFilaExterna,ultimaColumnaExterna).getValues();

  console.log(arregloBuscar[2]);

}

function hacerCopiaReemplazar(){
  //traer el Id del documento a copiar
  var idDocumentoACopiar="1JoEEHG1IsCxknDwolscWK6Zzzdw0FVp5tKBeq7heeM4";

  // hacer una copia del documento a copiar
  documentoCopiado =DriveApp.getFileById(idDocumentoACopiar).makeCopy("nombreCopia");

  //extraer el id del nuevo documento
  var idNuevoDocumento= (documentoCopiado.getId());

  //llamar el documento que va  a cambiar
  var documentoParaCambiarTexto= DocumentApp.openById(idNuevoDocumento);
  
  /*
  //reemplazar el texto
  documentoParaCambiarTexto.getBody().replaceText("xxxNombrexxx", variable_nombre);
  */
}



