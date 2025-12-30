<?php
/*RECOGIDA DE DATOS DEL FORMULARIO*/
/*Se recogen los valores enviados por POST desde el formulario de dudas*/
$nombre = $_POST['nombre']; /*Nombre del usuario*/
$apellidos = $_POST['apellidos']; /*Apellidos del usuario*/
$correo = $_POST['correo']; /*Correo electrónico*/

/*Checkboxes: comprobamos si están marcadas y construimos una lista de secciones*/
$secciones = [];
if(isset($_POST['seccion1'])) $secciones[] = "Sección 1";
if(isset($_POST['seccion2'])) $secciones[] = "Sección 2";
if(isset($_POST['seccion3'])) $secciones[] = "Sección 3";
if(isset($_POST['seccion4'])) $secciones[] = "Sección 4";

/*Unimos las secciones marcadas en una sola cadena*/
$seccionesTexto = !empty($secciones) ? implode(", ", $secciones) : "Ninguna sección seleccionada";

/*Texto de las dudas*/
$dudas = $_POST['dudas']; /*Contenido de las dudas*/

/*Valoración en estrellas*/
$valoracion = isset($_POST['stars']) ? $_POST['stars'] : "Sin valorar";

/*CONFIGURACIÓN DEL CORREO*/
/*Correo de destino*/
$destinatario = "rodrigoparadela@gmail.com";

/*Asunto del correo*/
$asunto_mail = "Formulario de Dudas - Web TFG";

/*CONSTRUCCIÓN DEL MENSAJE*/
/*Se crea el cuerpo del correo con los datos del formulario*/
$mensaje_mail = "Se ha recibido una nueva consulta desde el formulario de dudas de la web:\n\n";
$mensaje_mail .= "Nombre: " . $nombre . "\n";
$mensaje_mail .= "Apellidos: " . $apellidos . "\n";
$mensaje_mail .= "Correo electrónico: " . $correo . "\n\n";
$mensaje_mail .= "Secciones con dudas: " . $seccionesTexto . "\n\n";
$mensaje_mail .= "Dudas expresadas:\n" . $dudas . "\n\n";
$mensaje_mail .= "Valoración de la experiencia: " . $valoracion . " estrellas\n";

/*ENCABEZADOS DEL CORREO*/
/*Configuramos el remitente y la codificación*/
$headers = "From: " . $correo . "\r\n";
$headers .= "Reply-To: " . $correo . "\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

/*ENVÍO DEL CORREO*/
/*Se envía el correo con mail()*/
if(mail($destinatario, $asunto_mail, $mensaje_mail, $headers)) {
    echo "Formulario de dudas enviado correctamente.";
} else {
    echo "Error al enviar el formulario de dudas. Por favor, inténtalo de nuevo.";
}

/*ENLACE DE RETORNO AL FORMULARIO*/
echo "<p><a href='../HTMLs/Index.html'>Haz clic aquí para volver al formulario</a></p>";
?>

