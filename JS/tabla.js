
const url = 'https://jsonplaceholder.typicode.com/users'; 
const tableBody = document.querySelector("#chefs-table tbody") 

fetch(url)
    .then(response => response.json()) 
    .then(data =>{
        
        data.forEach(cliente => {
        
            const fila = tableBody.insertRow()
            fila.insertCell(0).textContent = cliente.name
            fila.insertCell(1).textContent = cliente.email
            fila.insertCell(2).textContent = cliente.website

        });
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));