/* FORMULARIOS */
/* JS con las funciones necesarias para cambiar de formulario al hacer clic en uno de los botones de grupo */

/* Variables */
const grupos = document.querySelectorAll(".grupo");/*Divs que contienen los botones para cambiar de grupo*/ // Botones
const activo = document.querySelector(".activo");/*Div que se moverá detrás de los botones para destacarlos sobre el resto*/ // Div deslizante del fondo del botón activo
let desplazamiento;/*Definimos la variable para mover el div .activo*/ // Valor para mover el div .activo
const bloquesGrupos = document.querySelector(".bloquesGrupos");/*Div que contiene los grupos con las páginas de interés*/ // Contenedor de formularios
const formulario1 = document.querySelector(".formulario1");/*Div que contiene el primer grupo de páginas*/ 
const formulario2 = document.querySelector(".formulario2");/*Div que contiene el segundo grupo de páginas*/ 
const formulario3 = document.querySelector(".formulario3");/*Div que contiene el tercer grupo de páginas*/ 
let alturaBloque;/*Variable que se usará para cambiar de altura al bloque .bloquesGrupos para que se ajuste al grupo activo*/ // Para ajustar la altura dinámica

/* Al cargar la página */
document.addEventListener('DOMContentLoaded', function () {
    alturaBloque = formulario1.scrollHeight;/*Cogemos como valor la altura del div del primer grupo*/ // Altura inicial
    bloquesGrupos.style.height = `${alturaBloque}px`;/*Asignamos la altura al bloque*/ // Asignarla al contenedor
});

/* Función para cambiar de formulario */
/*Función para ocultar un grupo y mostrar el seleccionado además de desplazar el div .visible de los botones*/
function cambiarFormulario(grupo) {
    /*Reseteamos todo*/
    grupos.forEach(grupo => grupo.style.color = 'black');/*Para todos los botones asignamos el color negro al texto*/
    formulario1.style.opacity = '0';/*Ocultamos todos los bloques y desactivamos sus eventos*/
    formulario2.style.opacity = '0';
    formulario3.style.opacity = '0';
    formulario1.style.pointerEvents = 'none';
    formulario2.style.pointerEvents = 'none';
    formulario3.style.pointerEvents = 'none';

    /*Switch para cambiar definitivamente el grupo*/
    switch (grupo) {
        case 1:
            alturaBloque = formulario1.scrollHeight;/*Cambiamos la altura del div bloquesGrupos para ajustarla al tamaño justo*/
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 5;/*Asignamos el valor para desplazar el div .activo de los botones según el grupo*/
            formulario1.style.opacity = '1';/*Mostramos el div con el grupo de páginas correspondiente*/
            formulario1.style.pointerEvents = 'all';/*Activamos sus eventos para que funcionen los botones*/
            break;
        case 2:
            alturaBloque = formulario2.scrollHeight;
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 136;
            formulario2.style.opacity = '1';
            formulario2.style.pointerEvents = 'all';
            break;
        case 3:
            alturaBloque = formulario3.scrollHeight;
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 273;
            formulario3.style.opacity = '1';
            formulario3.style.pointerEvents = 'all';
            break;
    }

    activo.style.left = `${desplazamiento}px`;/*desplazamos el div .activo para destacar el botón activo*/
}

/* Eventos */
/*Un evento para cada botón de grupo*/
grupos[0].addEventListener('click', () => cambiarFormulario(1));
grupos[1].addEventListener('click', () => cambiarFormulario(2));
grupos[2].addEventListener('click', () => cambiarFormulario(3));
