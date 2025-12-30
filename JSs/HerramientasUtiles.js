/*BLOQUE HERRAMIENTAS*/ /*Mostrar la información detallada de cada herramienta al hacer clic sobre ella*/

/*Variable: */
const herramientasInfo = [/*Array que contiene objetos con la información de cada herramienta*/ 
    {
        titulo: "Visual Studio Code",
        descripcion: "Visual Studio Code es un editor de código fuente ligero pero muy potente desarrollado por Microsoft. Ofrece soporte nativo para múltiples lenguajes, depuración integrada, control de versiones con Git, y un amplio ecosistema de extensiones que permiten personalizar y ampliar sus funcionalidades. Es una herramienta muy versátil, ideal para desarrollo web, programación general y scripting, y es especialmente popular entre desarrolladores por su rapidez, facilidad de uso y comunidad activa."
    },
    {
        titulo: "IntelliJ IDEA",
        descripcion: "IntelliJ IDEA es un entorno de desarrollo integrado (IDE) muy robusto, desarrollado por JetBrains, que se centra principalmente en el desarrollo en Java y Kotlin. Incluye herramientas avanzadas como análisis de código en tiempo real, refactorizaciones inteligentes, soporte para múltiples frameworks y bases de datos, y una experiencia de usuario fluida. Es la opción preferida para desarrolladores backend y proyectos empresariales complejos, brindando un conjunto completo de funcionalidades para optimizar la productividad."
    },
    {
        titulo: "NetBeans",
        descripcion: "NetBeans es un IDE gratuito y de código abierto ampliamente utilizado para el desarrollo de aplicaciones Java, pero también soporta otros lenguajes como PHP, HTML5 y C++. Ofrece una interfaz sencilla e intuitiva, integración con sistemas de construcción como Maven y Gradle, y potentes herramientas de depuración y pruebas. Es una solución excelente para desarrolladores que buscan una herramienta sin coste, con una comunidad activa y soporte para múltiples plataformas."
    },
    {
        titulo: "Eclipse",
        descripcion: "Eclipse es una plataforma extensible y uno de los IDEs más veteranos y reconocidos para el desarrollo en Java. Se destaca por su gran capacidad de personalización mediante plugins, que permiten adaptar el entorno a distintos lenguajes y herramientas. Es ampliamente utilizado en entornos corporativos y proyectos de gran escala, ofreciendo soporte para integración continua, desarrollo modular y herramientas colaborativas."
    },
    {
        titulo: "Android Studio",
        descripcion: "Android Studio es el IDE oficial para el desarrollo de aplicaciones móviles Android. Basado en IntelliJ IDEA, proporciona herramientas específicas para diseñar interfaces de usuario, escribir código, realizar pruebas y depurar aplicaciones en emuladores o dispositivos reales. Incluye un editor visual de layouts, perfiles de rendimiento, un gestor de dependencias eficiente y soporte para múltiples APIs, facilitando así el desarrollo integral de proyectos Android."
    },
    {
        titulo: "Sublime Text",
        descripcion: "Sublime Text es un editor de texto ligero, rápido y altamente personalizable, ideal para desarrolladores que prefieren un entorno minimalista y sin distracciones. Soporta múltiples lenguajes, ofrece una poderosa funcionalidad de búsqueda y reemplazo, y cuenta con una gran cantidad de plugins disponibles. Es especialmente popular para editar código de forma rápida, trabajar en proyectos pequeños o realizar modificaciones puntuales sin complicaciones."
    },
    {
        titulo: "Notion",
        descripcion: "Notion es una herramienta todo en uno para organizar tareas, proyectos y documentación, que combina la flexibilidad de una base de datos con la simplicidad de una aplicación de notas. Ideal para estudiantes, profesionales y equipos de trabajo, permite crear espacios colaborativos personalizados, gestionar información y seguir el progreso de proyectos de manera eficiente y centralizada."
    },
    {
        titulo: "Trello",
        descripcion: "Trello utiliza un sistema visual basado en tableros, listas y tarjetas para la gestión de tareas y proyectos. Es muy útil para la organización de proyectos en equipo, permitiendo asignar responsabilidades, establecer fechas límite y seguir el progreso en tiempo real, facilitando así la colaboración y la productividad en ambientes laborales o personales."
    },
    {
        titulo: "Jira",
        descripcion: "Jira es una herramienta de gestión de proyectos orientada a equipos de desarrollo que siguen metodologías ágiles como Scrum o Kanban. Ofrece funcionalidades para planificar sprints, trackear incidencias, gestionar backlog y generar informes detallados, ayudando a optimizar los procesos y mejorar la coordinación dentro de equipos de desarrollo de software."
    },
    {
        titulo: "ClickUp",
        descripcion: "ClickUp es una plataforma muy personalizable que centraliza tareas, documentos, objetivos y calendarios en un único lugar. Facilita la planificación, colaboración y seguimiento del trabajo en equipo, integrando herramientas que permiten automatizar procesos, gestionar recursos y optimizar la productividad en proyectos de diferentes tamaños y complejidades."
    },
    {
        titulo: "Evernote",
        descripcion: "Evernote permite guardar notas, listas, ideas y documentos en la nube, sincronizándolos automáticamente entre todos tus dispositivos. Ofrece potentes herramientas de búsqueda, organización mediante etiquetas y libretas, así como integración con otras aplicaciones, siendo ideal para profesionales y estudiantes que necesitan gestionar grandes volúmenes de información de forma ordenada y accesible."
    },
    {
        titulo: "Asana",
        descripcion: "Asana es una plataforma de gestión de tareas y trabajo colaborativo utilizada por equipos de todo tipo. Facilita la planificación, organización y seguimiento de proyectos mediante listas, tableros, cronogramas y calendarios, mejorando la comunicación y coordinación entre miembros, así como la visibilidad de los avances y objetivos comunes."
    },
    {
        titulo: "Wappalyzer",
        descripcion: "Wappalyzer es una herramienta que detecta tecnologías utilizadas en páginas web, como frameworks, CMS, herramientas de análisis, servidores y más. Es muy útil para desarrolladores, analistas y profesionales de marketing que necesitan identificar las tecnologías que soportan un sitio para evaluaciones técnicas o estratégicas."
    },
    {
        titulo: "Dark Reader",
        descripcion: "Dark Reader habilita el modo oscuro en cualquier sitio web, lo que reduce la fatiga visual y facilita la lectura en entornos con poca luz. Ofrece opciones de personalización para ajustar brillo, contraste y colores, mejorando la experiencia del usuario en la navegación nocturna o prolongada."
    },
    {
        titulo: "uBlock Origin",
        descripcion: "uBlock Origin es una extensión de bloqueo de contenido ligera y eficiente que protege la privacidad del usuario y mejora la velocidad de navegación. Bloquea anuncios, rastreadores y malware, permitiendo una experiencia más segura y fluida en la web, con un bajo consumo de recursos del sistema."
    },
    {
        titulo: "JSON Formatter",
        descripcion: "JSON Formatter mejora la visualización y el análisis de archivos JSON directamente en el navegador. Es una herramienta muy útil para desarrolladores que trabajan con APIs, facilitando la lectura, depuración y validación de datos estructurados en formato JSON de manera clara y organizada."
    },
    {
        titulo: "Web Developer",
        descripcion: "Web Developer añade un panel de herramientas al navegador con funciones para analizar, modificar y depurar sitios web. Es ideal para frontend developers que necesitan inspeccionar estilos, validar código, desactivar elementos o realizar pruebas en tiempo real, agilizando el proceso de desarrollo y corrección."
    },
    {
        titulo: "WhatFont",
        descripcion: "WhatFont permite identificar rápidamente qué fuentes se están utilizando en cualquier página web simplemente pasando el cursor sobre el texto. Es una herramienta útil para diseñadores y desarrolladores que buscan conocer detalles tipográficos sin necesidad de inspeccionar el código manualmente."
    },
    {
        titulo: "Figma",
        descripcion: "Figma es una herramienta colaborativa basada en la nube para diseño de interfaces y prototipos. Facilita el trabajo en equipo permitiendo crear, compartir y editar diseños UI/UX en tiempo real, integrando funcionalidades para comentarios, versiones y recursos compartidos, siendo ideal para equipos distribuidos."
    },
    {
        titulo: "Adobe XD",
        descripcion: "Adobe XD es una herramienta especializada en diseño de experiencia de usuario que permite crear wireframes, prototipos interactivos y diseños visuales de alta fidelidad. Soporta integración con otras aplicaciones de Adobe y facilita la colaboración en proyectos de diseño digital de manera eficiente."
    },
    {
        titulo: "FontAwesome",
        descripcion: "FontAwesome es una biblioteca de iconos vectoriales y logos escalables que se integran fácilmente en cualquier proyecto web. Ofrece una gran variedad de iconos personalizables, que mejoran la interfaz y la experiencia visual sin aumentar significativamente el peso de las páginas."
    },
    {
        titulo: "Google Fonts",
        descripcion: "Google Fonts ofrece una amplia colección de tipografías gratuitas y de código abierto que pueden ser usadas fácilmente en sitios web. Permite personalizar estilos y combinaciones tipográficas para mejorar la apariencia y legibilidad del contenido digital con una carga rápida y compatible con múltiples navegadores."
    },
    {
        titulo: "Coolors",
        descripcion: "Coolors es una herramienta que genera paletas de colores armoniosas y modernas. Es ideal para diseñadores que buscan inspiración visual, permitiendo crear, ajustar y exportar combinaciones de colores que se adapten a diferentes proyectos y estilos con facilidad y rapidez."
    },
    {
        titulo: "Canva",
        descripcion: "Canva es una plataforma de diseño gráfico sencilla e intuitiva que permite crear diseños visuales atractivos sin necesidad de experiencia avanzada. Ofrece plantillas, elementos gráficos y herramientas colaborativas, facilitando la creación de contenido para redes sociales, presentaciones, posters y más."
    }
];
/*Funciones: */
function mostrarInformacion(index){/*Función que muestra la información de la herramienta seleccionada*/
    const info = herramientasInfo[index];/*Seleccionamos el objeto correspondiente del array según el índice*/
    document.getElementById('tituloDesplegable').textContent = info.titulo;/*Mostramos el título en el desplegable*/
    document.getElementById('descripcionDesplegable').textContent = info.descripcion;/*Mostramos la descripción*/
    document.getElementById('bloqueDesplegable').style.display = 'block';/*Mostramos el contenedor del desplegable*/
    document.getElementById('overlay').style.display = 'block';/*Mostramos el fondo oscurecido detrás del desplegable*/
}

function cerrarDesplegable(){/*Función que oculta el desplegable y su fondo al hacer clic en cerrar*/
    document.getElementById('bloqueDesplegable').style.display = 'none';/*Ocultamos el bloque de información*/
    document.getElementById('overlay').style.display = 'none';/*Ocultamos el fondo oscuro*/
}