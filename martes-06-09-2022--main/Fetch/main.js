fetch("https://jsonplaceholder.typicode.com/todos")
    .then(respuesta => respuesta.json())
    .then((Response) => {
        console.log(Response);
    })
    .catch((error)=>(console.error(error)))
    .finally(console.log("Ha finalizado la peticion"));