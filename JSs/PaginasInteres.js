/*PÁGINAS INTERES*/
/*JS con las funciones necesarias para cambiar de grupo de páginas de interés dentro de la página al hacer clic en uno de los botones.*/
/*y con las funciones necesarias para que se vayan mostrando las páginas en función del scroll*/

/*Variables*/
const grupos = document.querySelectorAll(".grupo");/*Divs que contienen los botones para cambiar de grupo*/
const activo = document.querySelector(".activo");/*Div que se moverá detrás de los botones para destacarlos sobre el resto*/ 
let desplazamiento;/*Definimos la variable para mover el div .activo*/
const bloquesGrupos = document.querySelector(".bloquesGrupos");/*Div que contiene los grupos con las páginas de interés*/ 
const grupo1 = document.querySelector(".grupo1");/*Div que contiene el primer grupo de páginas*/
const grupo2 = document.querySelector(".grupo2");/*Div que contiene el segundo grupo de páginas*/ 
const grupo3 = document.querySelector(".grupo3");/*Div que contiene el tercer grupo de páginas*/
let alturaBloque;/*Variable que se usará para cambiar de altura al bloque .bloquesGrupos para que se ajuste al grupo activo*/
const clasesPaginas = ['pagInt1', 'pagInt2', 'pagInt3'];/*Array de strings con las clases de los divs con las páginas individuales*/
let currentObserver;/*Definimos el observador que servirá para coger el scroll*/

/*Según cargue la página*/
document.addEventListener('DOMContentLoaded', function () {
    alturaBloque=grupo1.scrollHeight;/*Cogemos como valor la altura del div del primer grupo*/
    alturaBloque= alturaBloque+25;/*Damos margen con el footer inicialmente*/
    bloquesGrupos.style.height=`${alturaBloque}px`;/*Asignamos la altura al bloque*/
    iniciarObserver('pagInt1');/*Inicializamos el observador para el primer grupo*/
});

/*Funciones*/
/*Función para ocultar un grupo y mostrar el seleccionado además de desplazar el div .visible de los botones*/
function cambiarGrupo(grupo) {
    
    /*Reseteamos todo*/
    grupos.forEach(grupo => grupo.style.color = 'black');/*Para todos los botones asignamos el color negro al texto*/
    grupo1.style.opacity = '0';/*Ocultamos todos los bloques y desactivamos sus eventos*/
    grupo2.style.opacity = '0';
    grupo3.style.opacity = '0';
    grupo1.style.pointerEvents = 'none';
    grupo2.style.pointerEvents = 'none';
    grupo3.style.pointerEvents = 'none';
    if (currentObserver){currentObserver.disconnect();}/*Desconectamos el observer para resetearlo*/
    ocultarPaginas();/*Llamamos a la función que oculta de nuevo todos los divs de las páginas individuales*/

    /*Switch para cambiar definitivamente el grupo*/
    switch(grupo) {
        case 1:
            alturaBloque = grupo1.scrollHeight;/*Cambiamos la altura del div bloquesGrupos para ajustarla al tamaño justo*/
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 5;/*Asignamos el valor para desplazar el div .activo de los botones según el grupo*/
            grupo1.style.opacity = '1';/*Mostramos el div con el grupo de páginas correspondiente*/
            grupo1.style.pointerEvents = 'all';/*Activamos sus eventos para que funcionen los botones*/
            iniciarObserver('pagInt1');/*Inicializamos el observador en función del grupo*/
            break;
        case 2:
            alturaBloque = grupo2.scrollHeight;
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 140;
            grupo2.style.opacity = '1';
            grupo2.style.pointerEvents = 'all';
            iniciarObserver('pagInt2');
            break;
        case 3:
            alturaBloque = grupo3.scrollHeight;
            bloquesGrupos.style.height = `${alturaBloque}px`;
            desplazamiento = 273;
            grupo3.style.opacity = '1';
            grupo3.style.pointerEvents = 'all';
            iniciarObserver('pagInt3');
            break;
    }

    activo.style.left = `${desplazamiento}px`;/*desplazamos el div .activo para destacar el botón activo*/
}

/*Función para iniciar el observer según el grupo*/
function iniciarObserver(pagInd) {/*Cogemos la clase de los divs con las páginas individuales*/
    const elementos = document.querySelectorAll(`.${pagInd}`);/*Guardamos todos los divs con la clase del grupo que corresponda*/

    currentObserver = new IntersectionObserver((scrolls)=> {/*Inicializamos el observador*/
        scrolls.forEach(scroll => {/*Para cada div visible en pantalla en cada scroll*/
            if (scroll.isIntersecting) {/*Si el bloque está mostrándose en pantalla*/
                scroll.target.classList.add('visible');/*Asignamos la clase visible al div con la página que se esté mostrando en pantalla*/
                currentObserver.unobserve(scroll.target); /*Dejamos de observar a ese div*/
            }
        });
    }, {
        threshold: 0.2 /*El div tiene que mostrarse al menos al 20% para que se considere que esta "intersectando"*/
    });

    elementos.forEach(pagInd => currentObserver.observe(pagInd));/*Recorre los divs de las páginas individuales e inicia la observación de ellos*/
}

/*Función para eliminar todas las clases .visible para ocultar de nuevo todos los bloques de las páginas individuales*/
function ocultarPaginas() {
    clasesPaginas.forEach(pagina => {/*Recorremos los nombres de las clases de los bloques individuales*/
        document.querySelectorAll(`.${pagina}`).forEach(pagina => {/*Seleccionamos todos los divs con las páginas*/
            pagina.classList.remove('visible');/*Quitamos la clase visible de todos ellos ocultándolos así*/
        });
    });
}

/* Eventos*/
grupos[0].addEventListener('click', () => cambiarGrupo(1));/*Un evento para cada botón de grupo*/
grupos[1].addEventListener('click', () => cambiarGrupo(2));
grupos[2].addEventListener('click', () => cambiarGrupo(3));

