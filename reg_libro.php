<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registrando Muerto</title>
</head>
<body>
<?php
/*incluiremos el archivo conexion para poder conectar a la base de datos*/
	include("js/conexion.php");
/*Variables enviadas desde el formulario de registro de usuarios*/
	$cedula=$_POST['cedula'];
	$co=$_POST['Codigo'];
	$tit=$_POST['Titulo'];
	$aut=$_POST['Autor'];
	$edit=$_POST['Editorial'];
		/*Verificamos que las variables no vengan vacias*/	
	if($co=="" || $tit=="" || $aut ==""){
		echo"Error: Verifique Los Datos";
	}
	else{
	/*insertarmos datos*/
	$registrar_libro="INSERT INTO libros(cedula,Codigo,Titulo,Autor,Editorial) VALUES('$cedula','$co','$tit','$aut','$edit')";
	$registro=mysql_query($registrar_libro, $conectar) or die("El fallecido se Registro Anteriormente");
	echo "Registro Exitoso";
}
?>
</body>
</html>