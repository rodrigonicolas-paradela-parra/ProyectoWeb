/* FRASES CAMBIANTES */
/* JS para mostrar frases y autores cambiando automáticamente cada 5 segundos */
/* También permite cambiar manualmente la frase al hacer clic */

/* Variables */
/* Array de objetos con frases y autores */
const frases = [
  {
    texto: `"Primero resuelve el problema. Después, escribe el código."`,
    autor: "John Johnson"
  },
  {
    texto: `"Los mejores programadores no solo escriben código que funciona. Escriben código limpio, eficiente y legible."`,
    autor: "Anónimo"
  },
  {
    texto: `"La programación no es solo escribir código, es resolver problemas."`,
    autor: "Linus Torvalds"
  },
  {
    texto: `"Si piensas que los buenos programadores no comentan su código, intenta leer el tuyo dentro de un mes."`,
    autor: "Harold Abelson"
  },
  {
    texto: `"Nunca dejes de aprender. La tecnología no lo hace."`,
    autor: "Anónimo"
  },
  {
    texto: `"Hablar es barato. Enseña el código."`,
    autor: "Linus Torvalds"
  },
  {
    texto: `"Usuario" es la palabra que usan los informáticos cuando quieren decir "idiota".`,
    autor: "Anónimo"
  },
  {
    texto: `"Cualquier tonto puede escribir código que una computadora entienda. Los buenos programadores escriben código que los humanos pueden entender."`,
    autor: "Martin Fowler"
  },
  {
    texto: `"La medida de la calidad del código no es si funciona, sino si alguien más puede entenderlo."`,
    autor: "Martin Fowler"
  },
  {
    texto: `"La mayoría del software hoy en día está como un iceberg: nueve décimas partes están debajo del agua y no se ven."`,
    autor: "Fred Brooks"
  },
  {
    texto: `"Los programas deben escribirse para que las personas los lean y solo incidentalmente para que las máquinas los ejecuten."`,
    autor: "Harold Abelson"
  },
  {
    texto: `"La mejor forma de predecir el futuro es inventarlo."`,
    autor: "Alan Kay"
  },
  {
    texto: `"La simplicidad es la máxima sofisticación."`,
    autor: "Leonardo da Vinci" // No informático, pero frecuentemente citada en desarrollo de software
  },
  {
    texto: `"Primero aprende a programar y luego aprende a pensar."`,
    autor: "Steve Jobs"
  },
  {
    texto: `"Software es como el sexo: es mejor cuando es gratis."`,
    autor: "Linus Torvalds"
  },
  {
    texto: `"Hay dos formas de construir un software. Una es hacerlo tan simple que obviamente no tenga errores. La otra es hacerlo tan complicado que no haya errores obvios."`,
    autor: "Tony Hoare"
  },
  {
    texto: `"Lo que un programador ve como un error, otro lo puede ver como una característica."`,
    autor: "Scott Adams"
  }
];

/* Variables para controlar el índice actual y el intervalo */
let indiceActual = 0; /* Índice de la frase mostrada actualmente */
let intervaloID; /* ID del intervalo para controlarlo */
const fraseElemento = document.getElementById("frase"); /* Elemento donde se muestra el texto de la frase */
const autorElemento = document.getElementById("autor"); /* Elemento donde se muestra el autor */
const bloqueFrases = document.querySelector(".frasesCambiantes"); /* Contenedor de las frases para detectar clics */

/* Función para mostrar la siguiente frase */
function mostrarSiguienteFrase() {
  indiceActual = (indiceActual + 1) % frases.length; /* Incrementar índice y resetear si llega al final */
  fraseElemento.textContent = frases[indiceActual].texto; /* Cambiar texto de la frase */
  autorElemento.textContent = frases[indiceActual].autor; /* Cambiar texto del autor */
}

/* Función para reiniciar el temporizador del intervalo */
function reiniciarTemporizador() {
  clearInterval(intervaloID); /* Parar el intervalo actual */
  intervaloID = setInterval(mostrarSiguienteFrase, 5000); /* Iniciar uno nuevo de 5 segundos */
}

/* Función que cambia la frase y reinicia el temporizador (para usar en clic) */
function cambiarFraseYReiniciar() {
  mostrarSiguienteFrase(); /* Mostrar la siguiente frase */
  reiniciarTemporizador(); /* Reiniciar el temporizador para el cambio automático */
}

/* Iniciar el intervalo para que cambie la frase cada 5 segundos */
intervaloID = setInterval(mostrarSiguienteFrase, 5000);

/* Evento clic en el bloque de frases: cambia la frase y reinicia temporizador */
bloqueFrases.addEventListener("click", cambiarFraseYReiniciar);
