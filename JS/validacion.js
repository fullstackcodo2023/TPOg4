// Función ejemplo para validar formulario

function validarFormulario() {

  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var email = document.getElementById("email").value.trim();


if(nombre === "" || apellido === "" || email === ""){
  alert("Complete todos campos del form.")
  return false
}


  var nombreTest = /^[a-zA-Z]+$/.test(nombre);
  var apellidoTest = /^[a-zA-Z]+$/.test(apellido);
  var emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);


  if (nombreTest === false) {
      alert("Ingrese un nombre válido con letras del abecedario.")
      return false //cuando hay algun error
  }

  if (apellidoTest === false) {
      alert("Ingrese un apellido válido con letras del abecedario.")
      return false
  }

  if (emailTest === false) {
      alert("Ingrese un correo válido con letras del abecedario.")
      return false
  }



  var optForm = document.forms["formulario"]["inputPais"].selectedIndex;
if (optForm == null || optForm == 0) {
  alert("Debe seleccionar un país");
  return false;
}


// Si todas las validaciones son exitosas, enviar el formulario
alert("Datos enviados correctamente.")
return true
}

