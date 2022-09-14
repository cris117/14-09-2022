`use strict`;
/*Poo
Opp*/
// 1.Abstraccion -> UML -> Estructura, Comportamiento -> Clases, Objetos
// 2.Encapsulacion -> seguridad
// 3.Heriencia -> Herencia atributos o propiedades
// 4.Polimorfismo -> Muchas Formas

//Clase general -> Manuel
//Objeto

// El objeto es la instancia (creacion) de la clase
// Sepuede crear solo objetos por medio de : Atributos, Propiedades, Caracteristicas

/** La clase es una plantilla(Algo predeterminado) para el objeto */
/**(Clases)
 * Persona{       Modificaciones de acceso
 * Nombre:String(solo Uml)         - Private    -> Encapsulamiento
 * Apellido:String(solo Uml)       + Publico    
 * Edad: Lnt(solo Uml)             # Protegido 
 * Altura: double(solo Uml)        ~ Paquete
 * Peso: double(solo Uml)          / Derivado
 * 
 * + Caminar()____________            persona
 * - Hablar()string               peso  \O/
 * +yoHablo()string                 Edad l  Altura
 * }                                    / \
 *                               nombre    Apellido
 */
 
//1. Objeto literal de JavaScript
let cristian = {
    Nombre: `Cristian`,
    Apellido: `Caina`,
    Edad: 21,
    Altura: 1.70,
    peso: 60,
    caminar: function (){
        return `yo camino`;
    },
    hablar: function(){
        return `yo hablo`;
    }
}
//console.log(cristian);
//console.log(cristian.Nombres, cristian.Apellido);
//console.log(cristian.caminar());
/* No se puede
for (i of cristian){          Tarea<- como interar con el for clasico y el for in
    console.log(i);
}*/
//values
Object.keys(cristian).forEach((e) => console.log (e)) ;
