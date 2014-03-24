<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html" />
<title>Modificando Muerto</title>
</head>
<body>
	<?php
/*incluiremos el archivo conexion para poder conectar a la base de datos*/
	include("js/conexion.php");
/*Variables enviadas desde el formulario de registro de usuarios*/
	$id=$_POST['id'];
	$aut=$_POST['Autor'];
	$co=$_POST['Codigo'];
	$tit=$_POST['Titulo'];
	$edit=$_POST['Editorial'];
	/*Verificamos que las variables no vengan vacias*/	
	if($co=="" || $tit=="" || $aut ==""|| $edit==""){
		echo"Error: Verifique Los Datos";
	}
	else{
	/*insertarmos datos*/
	$modificar_usuario="UPDATE libros SET Codigo='$co', Titulo='$tit', Editorial='$edit', Autor='$aut' WHERE id='$id'";
	$modificar=mysql_query($modificar_usuario, $conectar) or die("Error: Error con la consulta");
	echo "Se Guardaron Cambios en el Libro";
}
?>	
</body>
</html>