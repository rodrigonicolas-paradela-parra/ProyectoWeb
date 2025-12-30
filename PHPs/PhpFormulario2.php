<?php
/*Recogemos los datos enviados desde el formulario mediante POST*/
$nombre = $_POST['nombre2'];/*Nombre del usuario*/
$email = $_POST['email2'];/*Correo electrónico del usuario*/
$problema = $_POST['problema2'];/*Tipo de problema seleccionado*/
$descripcion = $_POST['descripcion2'];/*Descripción detallada del problema*/

/*Destinatario y asunto del correo*/
$destinatario = "rodrigoparadela@gmail.com";
$asunto = "Solicitud de soporte técnico - Formulario 2";

/*Construimos el mensaje de texto que se enviará en el cuerpo del email*/
$mensajeTexto = "Formulario de soporte técnico\n";
$mensajeTexto .= "Nombre: " . $nombre . "\n";
$mensajeTexto .= "Correo: " . $email . "\n";
$mensajeTexto .= "Tipo de problema: " . $problema . "\n";
$mensajeTexto .= "Descripción detallada:\n" . $descripcion . "\n";

/*Generamos un identificador único para separar las partes del email MIME*/
$boundary = md5(uniqid(time()));

/*Creamos las cabeceras del email para indicar que es multipart con adjuntos*/
$headers = "From: $email\r\n";/*Emisor del correo (email del usuario)*/
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";

/*Construimos el cuerpo del email MIME*/
$cuerpo = "--$boundary\r\n";
$cuerpo .= "Content-Type: text/plain; charset=UTF-8\r\n";
$cuerpo .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$cuerpo .= $mensajeTexto . "\r\n";

/*Comprobamos si se ha subido un archivo sin errores*/
if (isset($_FILES['archivo2']) && $_FILES['archivo2']['error'] == UPLOAD_ERR_OK) {
    $nombreArchivo = $_FILES['archivo2']['name'];         /*Nombre original del archivo*/
    $tipoArchivo = $_FILES['archivo2']['type'];           /*Tipo MIME del archivo*/
    $archivoTemp = $_FILES['archivo2']['tmp_name'];       /*Ruta temporal del archivo en servidor*/

    /*Leemos el archivo y lo codificamos en base64 para enviarlo como adjunto*/
    $contenidoArchivo = chunk_split(base64_encode(file_get_contents($archivoTemp)));

    /*Añadimos la parte del adjunto al cuerpo del email*/
    $cuerpo .= "--$boundary\r\n";
    $cuerpo .= "Content-Type: $tipoArchivo; name=\"$nombreArchivo\"\r\n";
    $cuerpo .= "Content-Disposition: attachment; filename=\"$nombreArchivo\"\r\n";
    $cuerpo .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $cuerpo .= $contenidoArchivo . "\r\n";
}

/*Finalizamos el cuerpo*/
$cuerpo .= "--$boundary--";

/*Enviamos el correo con mail() y comprobamos si se ha enviado correctamente*/
if(mail($destinatario, $asunto, $cuerpo, $headers)){
    echo "Solicitud enviada correctamente.";
} else {
    echo "Error al enviar la solicitud.";
}

/*Enlace para volver al formulario principal*/
echo "<p><a href='../HTMLs/Index.html'>Volver al formulario</a></p>";
?>
