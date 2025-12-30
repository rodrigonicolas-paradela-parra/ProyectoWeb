/*SECCIONES DESTACADAS*/ /*Mostrar y ocultar las secciones dentro del bloque además de modificar los puntos mediante los eventos de los botones*/
/*Variables: */
const seccion1 = document.getElementById('seccion1');/*Seccion 1*/ /*Del bloque de destacados*/
const seccion2 = document.getElementById('seccion2');/*Seccion 2*/
const seccion3 = document.getElementById('seccion3');/*Seccion 3*/
const boton1 = document.getElementById('boton1');/*Boton izquierda*/ /*retroceder*/
const boton2 = document.getElementById('boton2');/*Boton derecha*/ /*avanzar*/
const punto1 = document.getElementById('punto1');/*Punto 1*/ /*Coinciden con las secciones*/
const punto2 = document.getElementById('punto2');/*Punto 2*/ 
const punto3 = document.getElementById('punto3');/*Punto 3*/
let seccionActiva = 1; /*Íncide para seguir la sección activa*/

/*Funciones: */
function mostrarSecciones(){/*Función que irá mostrando y ocultando las secciones*/
    switch(seccionActiva){/*Switch que seguirá el índice de la sección activa*/
        case 1:/*Caso de la primera sección*/
            seccion1.style.opacity = 1;/*Muestra la primera sección y oculta las otras 2*/
            seccion2.style.opacity = 0;
            seccion3.style.opacity = 0;
            seccion1.style.pointerEvents = 'all';/*Le habilitamos los eventos a la sección mostrada y los deshabilitamos para las otras dos */
            seccion2.style.pointerEvents = 'none';
            seccion3.style.pointerEvents = 'none';
            setTimeout(() => {/*Le damos un poco de tiempo a los puntos para cambiar y así esperar a la transición de la sección*/
                punto1.style.color = 'black';/*Destacamos el punto de la sección activa*/
                punto1.style.fontSize = '32px';/*Lo agrandamos*/ 
                punto2.style.color = '#a3a3a3';/*Le damos de nuevo el formato gris y más pequeño a los otros dos puntos*/
                punto2.style.fontSize = '22px';
                punto3.style.color = '#a3a3a3';
                punto3.style.fontSize = '22px';
            }, 750);
            break;
        case 2:
            seccion1.style.opacity = 0;
            seccion2.style.opacity = 1;
            seccion3.style.opacity = 0;
            seccion1.style.pointerEvents = 'none';
            seccion2.style.pointerEvents = 'all';
            seccion3.style.pointerEvents = 'none';
            setTimeout(() => {
                punto1.style.color = '#a3a3a3';
                punto1.style.fontSize = '22px';
                punto2.style.color = 'black';
                punto2.style.fontSize = '32px';
                punto3.style.color = '#a3a3a3';
                punto3.style.fontSize = '22px';
            }, 750);
            break;
        case 3:
            seccion1.style.opacity = 0;
            seccion2.style.opacity = 0;
            seccion3.style.opacity = 1;
            seccion1.style.pointerEvents = 'none';
            seccion2.style.pointerEvents = 'none';
            seccion3.style.pointerEvents = 'all';
            setTimeout(() => {
                punto1.style.color = '#a3a3a3';
                punto1.style.fontSize = '22px';
                punto2.style.color = '#a3a3a3';
                punto2.style.fontSize = '22px';
                punto3.style.color = 'black';
                punto3.style.fontSize = '32px';
            }, 750);
            break;
    }
}
function cambioSeccion(){/*Función que actualiza el índice de la sección actual en caso de que no esté entre las posibles*/
    if(seccionActiva > 3){/*Si el índice es mayor que la última sección que vuelva a la primera*/
        seccionActiva = 1;
    }
    if(seccionActiva < 1){/*Si el índice es menor que la primera sección que vaya a la última*/
        seccionActiva = 3;
    }
}

/*Eventos: */
document.addEventListener("DOMContentLoaded", () => {/*Eventos para los botones de cambio de sección*/ /*Le añadimos el DOMContentLoaded para que cargue primero todo el html y css*/
    boton1.addEventListener('click', () => {/*Evento para el botón de retroceder*/
        seccionActiva--;/*Modificamos el índice*/
        cambioSeccion();/*Actualizamos el índice en el caso de que sea necesario*/
        mostrarSecciones();/*En base al índice mostramos y ocultamos las secciones además de los puntos que indican donde estamos posicionados*/
        
    });
    boton2.addEventListener('click', () => {/*Evento para el botón de avanzar*/
        seccionActiva++;/*Modificamos el índice*/
        cambioSeccion();/*Actualizamos el índice*/
        mostrarSecciones();/*Mostramos la sección y ocultamos las demás*/
    });
});
/*FIN DE LAS SECCIONES DESTACADAS*/



/*ESTADÍSTICAS*/ /*Cuando llegamos al bloque mediante scroll, que las estadísticas empiecen desde 0 hasta el número real*/
let ejecutado = false;/*Variable para conseguir que se ejecute solo la primera vez que llegas al bloque y no cada vez que haces scroll*/
document.addEventListener("scroll", function() {/*Función que se ejecuta cuando detecta el scroll de la página*/
    const contadores = document.querySelectorAll('.contador');/*Guarda todos los contadores con la clase contador*/
    const seccion = document.getElementById('estadisticas');/*Guarda el bloque de las estadísticas entero*/
    const seccionTop = seccion.offsetTop;/*Guarda la distancia que hay desde el inicio de la página hasta el inicio del bloque*/
    const alturaVentana = window.innerHeight;/*Guarda el tamaño de alto que tiene la pantalla que usa el usuario*/

    if (!ejecutado && window.scrollY > seccionTop - alturaVentana + 200) {/*Cuando hacemos scroll hasta el bloque con un margen de 200 se ejecuta*/
        contadores.forEach(contador => {/*Para cada elemento contador guardado*/
            let valorFinal = parseInt(contador.getAttribute('data-contador'));/*Guardamos el valor final de cada elemento contador*/
            let valorActual = 0;/*Hacemos que el valor empiece a contar desde 0*/
            let incremento = Math.ceil(valorFinal / 100);/*Divide el valor final entre 100 para dividir la animación en 100 pasos*/ 
            /*Redondeamos hacia arriba con math.ceil para que el número no se quede corto*/

            let intervalo = setInterval(() => {/*Hacemos un intervalo para ejecutar la animación cada cierto tiempo (cambio de número)*/
                ejecutado = true;/*Cambiamos el booleano para que no se repita la ejecución continuamente*/
                valorActual += incremento; /*Vamos incrementando el número que mostramos*/
                contador.textContent = valorActual; /*Mostramos el número en el contador*/ 

                if (valorActual >= valorFinal) {/*Cuando el número es mayor o igual al valor final*/
                    contador.textContent = valorFinal;/*Añadimos el valor final al contador*/
                    clearInterval(intervalo);/*Detenemos el intervalo para que no siga cambiando de número */
                }
            }, 25);/*Intervalo cada 25 ms*/
        });
    }
});
/*FIN DE LAS ESTADISTICAS*/


/*HABILIDADES*/ /*Bloque que estará dividido en grupos de habilidades de 4 en 4*/ /*Funciones para cambiar de grupo cuando se pulse algún botón*/
/*Variables*/
const habilidades = document.getElementById('habilidades');/*Guardamos el bloque de las habilidades*/
const grupos = document.querySelectorAll('.grupoHabilidades');/*Guardamos todos los bloques con clase grupoHabilidades*/
const totalBloques = grupos.length;/*En una constante añadimos el número de grupos que hay*/
const btnIzq = document.getElementById('btn-izq');/*Guardamos los botones para cambiar las habilidades*/
const btnDcha = document.getElementById('btn-dcha');
// Crear clones para ciclo infinito
const primerBloque = grupos[0].cloneNode(true);/*Guardamos el primer bloque, posición 0*/
const ultimoBloque = grupos[totalBloques - 1].cloneNode(true);/*Guardamos el último, posición totalBloques - 1*/
let posicionActual = 1;/*En una variable guardamos el grupo que se está mostrando, en un principio el primero*/

habilidades.appendChild(primerBloque);/*Añadimos el clon del primer bloque al final del bloque habilidades*/
habilidades.insertBefore(ultimoBloque, grupos[0]);/*Añadimos el clon del último bloque al principio del bloque habilidades*/
actualizarTransform();/*Se llama a la función para que aparezca en pantalla el primer bloque real, y no el clon del último bloque*/

/*Funciones*/
function actualizarTransform() {/*Función que realizará el transform siempre que se solicite*/
    const desplazamiento = -posicionActual * 100;/*Como hay que desplazarlo en el sentido contrario a la flecha pulsada, se le da un valor negativo * 100*/
    habilidades.style.transform = `translateX(${desplazamiento}%)`;/*Realizamos el desplazamiento del bloque habilidades*/
}
function moverHabilidades(direccion) {/*se le añade una variable dirección para saber que flecha ha sido la pulsada*/
    posicionActual += direccion;/*dependiendo de la flecha pulsada, se modifica la posición*/
    habilidades.style.transition = 'transform 0.5s ease-in-out';/*Le agregamos el diseño establecido en el css a la transición*/
    actualizarTransform();/*Se llama a la función para desplazar el bloque*/

    habilidades.addEventListener('transitionend', () => {/*Evento que se ejecutará siempre que se realice la transición */
        if (posicionActual === 0) {/*condición que solo se ejecuta cuando estamos posicionados en el bloque clonado (último)*/
            posicionActual = totalBloques;/*Cambiamos la posición al último bloque (real)*/
            habilidades.style.transition = 'none';/*cambiamos la transición para que no se desplace el bloque*/
            actualizarTransform();/*realizamos el transform pero sin transición para posicionarnos correctamente*/
        }
        if (posicionActual === totalBloques + 1) {/*Segunda condición para el caso del bloque clonado (Primero)*/
            posicionActual = 1;/*Lo llevamos a la posición real*/
            habilidades.style.transition = 'none';   /*De está manera, con las dos condiciones, los bloques clonados, y la modificación de la transición*/
            actualizarTransform();                   /*conseguimos un efecto de loop dentro del bloque habilidades*/
        }
    },);
}

/*Eventos*/
btnIzq.addEventListener('click', () => {/*Evento para el botón izquierdo*/
    moverHabilidades(-1);/*Le mandamos un -1 para que se desplace hacia la derecha*/
});
btnDcha.addEventListener('click', () => {/*Evento para el botón derecho*/
    moverHabilidades(1);/*Le mandamos un 1 para que se desplace hacia la izquierda*/
});
/*FIN DE LAS HABILIDADES*/ 





