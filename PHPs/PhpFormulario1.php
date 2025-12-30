<?php
/*RECOGIDA DE DATOS DEL FORMULARIO*/
/*Se recogen los valores enviados por POST desde el formulario*/
$nombre = $_POST['nombre1']; /*Nombre completo*/
$email = $_POST['email1']; /*Correo electrónico*/
$asunto = $_POST['asunto1']; /*Asunto del mensaje*/
$mensaje_form = $_POST['mensaje1']; /*Contenido del mensaje*/

/*CONFIGURACIÓN DEL CORREO*/
/*Dirección de correo destino donde se enviará el mensaje*/
$destinatario = "rodrigoparadela@gmail.com";

/*Asunto que aparecerá en el correo recibido*/
$asunto_mail = "Formulario de Contacto - Web TFG";

/*CONSTRUCCIÓN DEL MENSAJE*/
/*Se arma el cuerpo del mensaje con etiquetas claras para facilitar su lectura*/
$mensaje_mail = "Has recibido un nuevo mensaje desde el formulario de contacto de la web:\n\n";
$mensaje_mail .= "Nombre completo: " . $nombre . "\n"; /*Añade nombre*/
$mensaje_mail .= "Correo electrónico: " . $email . "\n"; /*Añade correo*/
$mensaje_mail .= "Asunto: " . $asunto . "\n"; /*Añade asunto*/
$mensaje_mail .= "Mensaje:\n" . $mensaje_form . "\n"; /*Añade el mensaje*/

/*ENCABEZADOS DEL CORREO*/
/*Se define el From para que el email se vea más profesional y evitar que caiga en spam*/
$headers = "From: " . $email . "\r\n"; /*El correo del remitente será el que el usuario indicó*/
$headers .= "Reply-To: " . $email . "\r\n"; /*Se responde a ese correo*/
$headers .= "Content-Type: text/plain; charset=utf-8\r\n"; /*Codificación para caracteres especiales*/

/*ENVÍO DEL CORREO*/
/*Se utiliza la función mail() para enviar el mensaje*/
if(mail($destinatario, $asunto_mail, $mensaje_mail, $headers)) { /*Si el envío es correcto*/
    echo "Formulario enviado correctamente."; /*Mensaje de éxito*/
} else { /*Si hay error al enviar*/
    echo "Error al enviar el formulario. Por favor, inténtalo de nuevo."; /*Mensaje de error*/
}

/*ENLACE DE RETORNO AL FORMULARIO*/
/*Para que el usuario pueda volver a la página principal o formulario*/
echo "<p><a href='../HTMLs/Index.html'>Haz clic aquí para volver al formulario</a></p>";
?>
