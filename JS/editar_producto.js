function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let titulo_ingresado = document.getElementById("titulo").value 
    let receta_ingresada = document.getElementById("receta").value 
    let notas_ingresadas = document.getElementById("notas").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        nombre: nombre_ingresado,
        titulo: titulo_ingresado,
        receta: receta_ingresada,
        notas: notas_ingresadas,
        imagen: imagen_ingresada
    }

    console.log(datos);

    let url = "https://leo773.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../index.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}