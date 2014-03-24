<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset = 'utf-8'>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Registro de Fallecidos</title>
<link rel="stylesheet" href="maqueta.css" type="text/css">
<script language="JavaScript" type="text/javascript" src="js/ajax.js"></script>
</head>
<body>
<div id="ImgPan"><a href="index.php"><img src="images/logo.png"  width="400" height="100"  border="0" /></a> </div>
<ul class="Menuprin">
		<li><a href="index.php">Inicio</a></li>
    <li><a href="#">Registrar</a>
     <ul>
    <!--<li><a href="usuario.php">Usuarios</a></li>-->
		<li><a href="libro.php">Fallecidos</a></li>
	<!--	<li><a href="prestamo.php">Prestamos</a></li>-->
	</ul></li>
		<li><a href="#">Actualizar</a>
		<ul>
		<!--<li><a href="cambios.php">Usuario</a></li>-->
		<li><a href="cambios_lib.php">Fallecidos</a></li>
		<!--<li><a href="entrega.php">Entregas</a></li>-->
		</ul></li>
		<li><a href="#">Eliminar</a>
		<ul>
		<!--<li><a href="cambios.php">Usuario</a></li>-->
		<li><a href="bu_eli_nom.php">Por Nombre</a></li>
		<li><a href="bu_eli_blo.php">Por Bloque</a></li>
		<li><a href="bu_eli_fe.php">Por Fecha</a></li>
		<!--<li><a href="entrega.php">Entregas</a></li>-->
		</ul></li>
		<li><a href="#">Busquedas</a>
		<ul>
		<li><a href="bu_tit.php">Bloque</a></li>
		<li><a href="bu_aut.php">Nombres</a></li>
		<li><a href="bu_edit.php">Fecha</a></li>
		<!--<li><a href="bu_prestamo.php">Prestamos</a></li>-->
	</ul></li>
	
		<li><a href="salir.php">Cerrar Sesión</a></li>
	 </ul>	

<div id="formcontact">
<!--onsubmit es para que al presionar el boton guardar nos lleve a la funcion enviarDatosUsuario que esta en ajax.js y asi poder registrar -->
<form method="post" action="" onsubmit="enviarDatosLibro(); return false" name="registro_libro">
	<table align="center">
	<tr><td colspan="2" align="center"><h3>Registro de Fallecido</h3></td></tr>
	<tr><td>Cédula de Identidad</td><td><input type="text" name="cedula" /></td></tr>
	<tr><td>Nombres y Apellidos</td><td><input type="text" name="Autor" /></td></tr>
	<tr><td>Bloque</td><td><input type="text" name="Titulo" /></td></tr>
	<tr><td>Sector</td><td><input type="text" name="Codigo" /></td></tr>
	<tr><td>Fecha de fallecimiento</td><td><input type="text" name="Editorial" /></td></tr>
	<tr><td colspan="2" align="center"><input type="submit" value="Guardar" /></td></tr>
	<tr><td colspan="2" align="center"><div id="resultado"></div></td></tr>
 	<tr> <td colspan="2" align="center" ><a href="javascript:history.back(1)">Volver Atras</a></td></tr>
</table>
</form>
</div>
<footer id="pie">Departamento de Informatica © 2013 · V 1.0</footer>
<footer id="pie">Design and Programing by: Kelo González</footer>
</body>
</html>