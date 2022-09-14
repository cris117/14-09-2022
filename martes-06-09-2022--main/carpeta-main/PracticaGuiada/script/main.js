import { validatedString, validatedAverage }  from "./validated.js";
import { pintarCard,agregarEstudiante } from "./pintar.js";


const btnAgregar = document.querySelector("#btn");

const btnmostrar = document.querySelector("#btnMostrar");



//propiedad y .addEventListener

btnAgregar.addEventListener("click",() =>{

    const nombre = document.querySelector("#nombre").value;

    const apellido = document.querySelector("#apellido").value;

    const promedio = document.querySelector("#promedio").value;

    const opcion = document.querySelector("#opcion").value;



    if (validatedString(nombre) && validatedString(apellido) && opcion != "0"){

        if  (!isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){

            console.log("validado");
            agregarEstudiante(nombre,apellido,promedio);

        }else{
            modalAlerta("error de promedio");
            console.log("error promedio");

        }

    }else{
        modalAlerta("error de datos");
        console.log("error de datos");

    }
});
btnmostrar.addEventListener("click",function(){
    pintarCard("ESTUDIANTE")
});
function modalAlerta(cadena){
    const alert = document.createElement("div");
    const texto = document.createElement("p");
    Text.setAttibute("class","TextAlerta");
    alert.setAttribute("id","alerta");
    alert.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    alert.body.appendchild(alerta);
    alerta.onclick = function(){
        document.getElementById("alerta").remove();
    }
}