function iniciar_sesion() {

    const url = "http://127.0.0.1:5000/usuarios";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let nombre_ingresado = document.getElementById("username").value
            let password_ingresado = document.getElementById("password").value

            if (nombre_ingresado === "admin" && password_ingresado === "admin") {
                return window.location.href = "./tabla_usuarios.html";
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].nombre === nombre_ingresado && data[i].password === password_ingresado) {
                    return window.location.href = "./ingreso.html"; // Usuario y contraseña encontrados
                }
            }
            // return console.log("false") ; // Usuario y/o contraseña no encontrados
            alert("Usuario y/o contraseña no encontrados")
            window.location.reload();

        })
        .catch(err => {
            console.error(err);

        });

}
