function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value
    let titulo_ingresado = document.getElementById("titulo").value 
    let receta_ingresada = document.getElementById("receta").value 
    let notas_ingresadas = document.getElementById("notas").value 
    let imagen_ingresada = document.getElementById("imagen").value 


    // Se arma el objeto de js 

    let datos = {
        nombre: nombre_ingresado,
        titulo: titulo_ingresado,
        receta: receta_ingresada,
        notas: notas_ingresadas,
        imagen: imagen_ingresada
    }

    console.log(datos);
    
    let url = "https://leo773.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../index.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}