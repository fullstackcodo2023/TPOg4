// URL de la API de prueba (JSONPlaceholder)
const url = 'https://jsonplaceholder.typicode.com/users'; // constante que contiene la url de la API que vamos a consumir

// Obtener la referencia a la tabla 
// Busca el primer elemento que coincide con el selector
// Id de la tabla (#clientesTable) y cuerpo de la tabla (tbody) 

const tableBody = document.querySelector("#chefs-table tbody") 
// const tableBody es una constante donde almacenaré el cuerpo de la tabla que quiero completar
//Por eso hace referencia al id="clientesTable" y de esa tabla indico que solo quiero el cuerpo (tbody)
//la tabla està en tabla.html

// Realizar la solicitud HTTP utilizando la funcion fetch que busca la informaciòn en la API por eso contiene la constante
// url con la direcciòn de la API, la informaciòn la guardarà en la variable response
// con la funciòn .hten indico que hacer luego de haber consumido la API
// 1) guarda los datos en una variable (response)
// 2) con => response.json() indico que tome todos datos json de la variable y los transforma a objetos
// 3) le indico que lo guarde en la variable data, pero debo generar una iteraciòn forEach para que extraiga 
//    solo los datos que quiero y los guarde donde corresponde


fetch(url)
    .then(response => response.json()) //transforma el string json en un objeto
    .then(data =>{
        //console.log(data);
        data.forEach(cliente => {
            // En cada iteración creará una fila
            const fila = tableBody.insertRow()

            fila.insertCell(0).textContent = cliente.name
            fila.insertCell(1).textContent = cliente.email
            fila.insertCell(2).textContent = cliente.website


        });
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));