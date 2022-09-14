//HTML
function notaspromedio(){
    promedio();
};
//Mediante propiedad
const btnpropiedad = document.getElementById("btn2");
btnpropiedad.onclick = function(){
    promedio();
}
//Metodo .addEventListener
const btnAdd = document.getElementById("btn3");
btnAdd.addEventListener("click", function(){
    promedio();
});
//Metodo para el calculo del promedio

const promedio = () =>{
    let cantNotas = prompt("Introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantNotas))){
        let notas = 0;
        let sumaNotas = 0;
        for (let i = 0; i < cantNotas; i++){
            notas = prompt("Introduzca la nota No:"+i);
            sumaNotas += (parseFloat(notas));
        }
        let promedio = sumaNotas / cantNotas ;
        alert("El promedio es:" + promedio.toFixed(1));
    } else {
        alert("El valor es invalido");
    }
}