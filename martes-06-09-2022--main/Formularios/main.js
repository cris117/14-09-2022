const nombre = document.querySelector(`#inputNames`);
const edad = document.querySelector(`#inputAge`);
const correo = document.querySelector(`#inputEmail`);
const ciudad = document.querySelector(`#inputCity`);
const PoliticaData = document.querySelector(`#checkPolitica`);
const formulario = document.querySelector(`#form`);
//Validacion de formulario

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(validFieldsform() === -1){
    alert("Good enviando formulario");
}else{
    alert("Error en formulario");
}
}); 

const validFieldsform = () => {
    const values = Object.values(validFields);
    let response = values.findIndex(e => e === false);
    return response;
};
// Objeto de validacion 

let validFields = {
    nom: false,
    edad: false,
    mail: true,
    ciud: true,
    politica: false
}

nombre.addEventListener('change', (event) => {
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombre.match(patronNombres) ? true : false;
    console.log(Object.values(validFields));
});

edad.addEventListener('change', function(e){
    console.log("en edad");
    const patronEdad = / ^ (?: [1-9] [0-9]? | 1 [01] [0-9] | 120) $ /;
    if (parseInt (edad.value >=18)){
        if (edad.value.match(patronEdad)){
            validFields.edad = true;
        }
        else{
            alert("error en edad");
        }
    }
    else{
        alert("error en edad");
    }
    console.log(Object.values(validFields));
});

PoliticaData.addEventListener(`change`,(e)=>{
    validFields.politica = PoliticaData.Checked === true ? true : false;
    console.log(Object.values(validFields));
});

correo.addEventListener(`change`,(event)=>{
    const imputcorreo = event.target.value;
    const patroncorreo =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    validFields.mail = correo.check === true ? true : false;
    console.log(Object.values(validFields));

});

ciudad.addEventListener(`change`,(event)=>{
    validFields.ciud = event.target.value; 
    console.log(Object.values(validFields));
});




/**
 * Class personal{                                        Modificadores de Acces
 Declare los atributos     <-  Iniciales                  + Public
 Costructor -> Doy valores Iniciales                      - Private   -> Encapsular
                                                          # Protegido
 Metodos Get & Set       Set -> Establecer, Insinuar        Default
 Metodo orden                                                     Instanciar = crear  clase/constructor
                                                                                      |   |
                                                            let miObjetivo = new persona ();
 }
 */