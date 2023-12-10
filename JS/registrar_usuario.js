function registrar_usuario() {
    let usuario_ingresado = document.getElementById("username").value
    let password_ingresado = document.getElementById("password").value

    const url1 = "http://127.0.0.1:5000/personas";

    if (usuario_ingresado === "" || password_ingresado === "") {
        alert("Complete todos los campos.")
        return false
    }

    var usuarioTest = /^[a-zA-Z]+$/.test(usuario_ingresado);
    var passwordTest = /^.{4,12}$/.test(password_ingresado);


    if (usuarioTest === false) {
        alert("Ingrese un nombre de usuario.")
        return false //cuando hay algun error
    }

    if (passwordTest === false) {
        alert("La contraseña debe tener 4 caracteres.")
        return false
    }

    fetch(url1)
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            for (let i = 0; i < data.length; i++) {
                if (data[i].nombre === usuario_ingresado || usuario_ingresado === "admin") {
                    alert("El Usuario ya existe")
                    window.location.reload();
                    return false
                }
            }
            // alert("Usuario y / o contraseña no encontrados")
            // window.location.reload();
            // return false; // Usuario y/o contraseña no encontrados

            let datos = {
                nombre: usuario_ingresado,
                password: password_ingresado
            }
            // console.log(datos);

            let url = "http://localhost:5000/registro"
            var options = {
                body: JSON.stringify(datos),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(url, options)
                .then(function () {
                    console.log("creado")
                    alert("Usuario registrado")
                    // Devuelve el href (URL) de la página actual
                    window.location.href = "../templates/login.html";

                })
                .catch(err => {
                    //this.errored = true
                    alert("Error al grabar")
                    console.error(err);
                })


        })
        .catch(err => {
            alert("Error al grabar")
            console.error(err);

        });


    // console.log(nombre_ingresado, password_ingresado);

    // let datos = {
    //     nombre: nombre_ingresado,
    //     password: password_ingresado
    // }
    // console.log(datos);

    // let url = "http://localhost:5000/registro"
    // var options = {
    //     body: JSON.stringify(datos),
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    // }
    // fetch(url, options)
    //     .then(function () {
    //         console.log("creado")
    //         alert("Usuario registrado")
    //         // Devuelve el href (URL) de la página actual
    //         window.location.href = "./inicio_sesion.html";

    //     })
    //     .catch(err => {
    //         //this.errored = true
    //         alert("Error al grabar")
    //         console.error(err);
    //     })
}