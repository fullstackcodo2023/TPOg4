

document.addEventListener('DOMContentLoaded', function () {
 
    var buscarNombre = document.getElementById('buscar');
   
    var nameTable = document.getElementById('chefs-table'); 
    
    var arrayfilas = nameTable.getElementsByTagName('tr'); 
    
    buscarNombre.addEventListener('input', function () {

      var nombre = buscarNombre.value.toLowerCase();

      for (var i = 1; i < arrayfilas.length; i++) {
        var fila = arrayfilas[i];       
        var nombreInTable = fila.getElementsByTagName('td')[1].textContent.toLowerCase();      
        var nombreEncontrado = nombreInTable.indexOf(nombre) > -1;
        fila.style.display = nombreEncontrado ? '' : 'none';
      }
    });
  });