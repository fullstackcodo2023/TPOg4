// Función ejemplo para validar formulario

function validarFormulario() {

  var nombre = document.getElementById("name").value.trim()
  var apellido = document.getElementById("apellido").value.trim()
  var email = document.getElementById("email").value.trim()


  if (nombre === "" || apellido === "" || email === "") {
    alert("Complete todos campos del form.")
    return false
  }

  var nombreTest = /^[a-zA-Z]+$/.test(nombre)


  if (!nombreTest) {
    alert("Ingrese un nombre válido.")
    return false

  }

  var apellidoTest = /^[a-zA-Z]+$/.test(apellido)

  if (!apellidoTest) {
    alert("Ingrese un apellido válido.")
    return false

  }

  var emailtest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

  if (!emailtest) {
    alert("Ingrese un email válido.")
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
