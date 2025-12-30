/*BUENAS PRÁCTICAS*/
/*JS con las funciones necesarias para que funcionen correctamente los desplegables y las animaciónes de los iconos*/

/*Variables*/
const desplegables = document.querySelectorAll(".desplegable");/*Seleccionamos todos los TÍTULOS de los primeros desplegables*/
const desplegables2 = document.querySelectorAll(".desplegable2");/*Seleccionamos todos los TÍTULOS de los segundos desplegables*/
let bloqueoTransicion = false; /*Variable booleana para permitir o no los eventos durante la transición*/

/*Funciones*/
/*Función para cambiar las alturas de los desplegables y así ir mostrando y ocultando los bloques*/
function animacionDesplegable(contenidoDesplegado, desplegado, animatePadding = false) {/*Cogemos el div, si está desplegado o no, y si se anima el padding o no según 
    si es de los primeros o segundos desplegables*/
    bloqueoTransicion = true; /*Activamos el bloqueo mientras dure la transición del desplegable*/
    if (desplegado) {/*En el caso de que el bloque ya esté desplegado*/
        contenidoDesplegado.style.height = contenidoDesplegado.scrollHeight + "px";/*Añadimos la altura antes de volver a modificarla para evitar errores*/
        requestAnimationFrame(() => {/*Nos aseguramos de que ya se ha modificado la altura antes de volver a hacerlo*/
            contenidoDesplegado.style.height = "0";/*Ahora sí, le añadimos la altura a 0 para que se oculte*/
            if (animatePadding) {/*En el caso de que sean los segundos desplegables animamos el padding también*/
                contenidoDesplegado.style.paddingTop = "0";/*Ajustamos el padding a 0 para ocultarlo del todo*/
                contenidoDesplegado.style.paddingBottom = "0";
            }
        });
        contenidoDesplegado.addEventListener("transitionend", function handler() {/*En el momento en el que la transición acaba...*/
            contenidoDesplegado.classList.remove("abierta");/*Quitamos la clase que indica que está abierto*/
            contenidoDesplegado.removeEventListener("transitionend", handler);/*Desactivamos el listener para no tener varios listeners activos*/
            bloqueoTransicion = false; /*Activamos de nuevo que se pueda desplegar otro bloque según termina la transición*/
        });
    } else {/*En el caso de que el bloque esté todavía oculto*/
        contenidoDesplegado.classList.add("abierta");/*Añadimos la clase para indicar que está abierto*/
        contenidoDesplegado.style.height = "auto";/*Asignamos altura automática para poder calcular su scrollHeight*/
        const height = contenidoDesplegado.scrollHeight + "px";/*Guardamos la altura real del bloque desplegado*/
        contenidoDesplegado.style.height = "0";/*Volvemos a 0 para iniciar la animación*/
        if (animatePadding) {/*En el caso de que sean los segundos desplegables*/
            contenidoDesplegado.style.paddingTop = "0";/*Quitamos el padding antes de animarlo*/
            contenidoDesplegado.style.paddingBottom = "0";
        }
        requestAnimationFrame(() => {/*Cuando se haya modificado la altura*/
            contenidoDesplegado.style.height = height;/*Desplegamos a su altura real*/
            if (animatePadding) {/*En el caso de que sean los segundos desplegables*/
                contenidoDesplegado.style.paddingTop = "0px";/*Volvemos a añadir el padding que tendrá*/
                contenidoDesplegado.style.paddingBottom = "0px";
            }
        });
        contenidoDesplegado.addEventListener("transitionend", function handler() {/*En el momento en el que la transición haya terminado*/
            contenidoDesplegado.style.height = "auto";/*Dejamos la altura en auto para que se mantenga tras la transición*/
            contenidoDesplegado.removeEventListener("transitionend", handler);/*Desactivamos el listener*/
            bloqueoTransicion = false; /*Activamos de nuevo la posibilidad de desplegar otro bloque de nuevo*/
        });
    }
}

/*Función para rotar los iconos de (+/-) mientras dura la transición*/
function animarIcono(icono, desplegado) {/*Cogemos como variables el span que contiene el icono, y si está el bloque desplegado o no*/

    icono.textContent = desplegado ? "+" : "–";/*Alterna entre (+/-) según si está abierto o no*/
    icono.classList.add("rotando");/*Añadimos la clase para rotar el icono*/
    icono.addEventListener("animationend", function handler() {/*En el momento en el que termina la animación*/
        icono.classList.remove("rotando");/*Quitamos la clase de nuevo*/
        icono.removeEventListener("animationend", handler);/*Desactivamos el listener*/
    });
}

/*Eventos*/
/*Eventos para los primeros desplegables*/
desplegables.forEach(desplegable => {/*Para cada elemento con la clase .desplegable*/

    desplegable.addEventListener("click", () => {/*Añadimos un evento para cuando se haga clic en ellos*/

        if (bloqueoTransicion) return;/*Si la transición está bloqueada porque se está ejecutando otra no hace nada*/
        const grupoBuenasPrac = desplegable.nextElementSibling;/*Seleccionamos el div del contenido de los primeros desplegables*/
        const icono = desplegable.querySelector("span:last-child");/*Seleccionamos el último span que contiene el icono*/
        const desplegado = grupoBuenasPrac.classList.contains("abierta");/*Comprobamos si el contenido está abierto*/
        animacionDesplegable(grupoBuenasPrac, desplegado, false);/*Llamamos a la función que modifica la altura*/
        animarIcono(icono, desplegado);/*Animamos el icono del desplegable*/

    });
});

/*Eventos para los segundos desplegables*/
desplegables2.forEach(desplegable2 => {/*Para cada elemento con la clase .desplegable2*/

    desplegable2.addEventListener("click", () => {/*Añadimos un evento para cuando se haga clic en ellos*/

        if (bloqueoTransicion) return;/*Si la transición está bloqueada porque se está ejecutando otra no hace nada*/
        const buenaPrac = desplegable2.nextElementSibling;/*Seleccionamos el div del contenido de los segundos desplegables*/
        const icono = desplegable2.querySelector("span:last-child");/*Seleccionamos el último span que tiene el icono*/
        const desplegado = buenaPrac.classList.contains("abierta");/*Comprobamos si el contenido está abierto*/
        animacionDesplegable(buenaPrac, desplegado, true);/*Llamamos a la función que modifica la altura. Usamos padding en este caso*/
        animarIcono(icono, desplegado);/*Animamos el icono del desplegable*/
    });
});

