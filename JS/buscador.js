// DOMContentLoaded es un evento en
// JavaScript que se dispara cuando
// el Document Object Model (DOM)
// ha sido completamente cargado
// sin esperar a que 
// se carguen recursos adicionales
// como imágenes y hojas de estilo.

// Es útil utilizar este evento cuando quieres
// ejecutar código JavaScript tan pronto como sea
// posible después de que la estructura básica 
// de la página se haya cargado, pero antes de
// que todos los recursos externos (como imágenes)
// se hayan cargado.

document.addEventListener('DOMContentLoaded', function () {
  // Traer la etiqueta input,table por id 
  // y la etiqueta tr por tagName (todas las filas en un array)
  
  // buscarNombre -> input recibe el nombre a buscar desde el id buscar
    var buscarNombre = document.getElementById('buscar');
    //nameTable -> table 
    var nameTable = document.getElementById('clientesTable'); 
    // arrayfilas -> [tr,tr,tr, tr]
    var arrayfilas = nameTable.getElementsByTagName('tr'); 
    
    // Usar la variable que trae la etiqueta input y agregarle
    // un evento 
    buscarNombre.addEventListener('input', function () {

      // crear una variable nombre y guardar el valor que
      // ingresa por la variable del input buscar y transformar
      // a minúsculas
      var nombre = buscarNombre.value.toLowerCase();

      for (var i = 1; i < arrayfilas.length; i++) {

        // crear una variable fila y acceder al array por index
        var fila = arrayfilas[i];

        // Buscar por nombre, en la posición en la celda 1       
        var nombreInTable = fila.getElementsByTagName('td')[1].textContent.toLowerCase();

        // si es mayor a -1 no existe en la tabla.
        var nombreEncontrado = nombreInTable.indexOf(nombre) > -1;

        // de la fila agregar estilos 
        fila.style.display = nombreEncontrado ? '' : 'none';

        /*Si nombreEncontrado es true (es decir, si se encuentra una 
        coincidencia en la búsqueda), entonces row.style.display
        se establecerá en una cadena vacía (''), lo que significa
        que la fila será visible. Si nombreEncontrado es false (no se encuentra 
        ninguna coincidencia en la búsqueda), 
        entonces row.style.display se establecerá en 'none', ocultando la fila.*/
      }
    });
  });