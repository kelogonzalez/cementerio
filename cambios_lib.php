<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset = 'utf-8'>
<meta http-equiv="Content-Type" content="text/html" />
<title>Actualizacion de Fallecidos</title>
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
		<!--<li><a href="prestamo.php">Prestamos</a></li>-->
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
<?php
if(isset($_POST['enviar']))	
 {
 	include("js/conexion.php"); // Conectar con MySQL
$buscare=mysql_query("SELECT * FROM libros WHERE id='".$_POST['Codigo_bus']."'"); //Busqueda por medio del Id
$id=$_POST['Codigo_bus'];
$row = @mysql_fetch_array($buscare); //Arreglo
$aut=$row[4];
$tit=$row[3];
$co=$row[2];
$edit=$row[5];
if(mysql_num_rows($buscare))
 {   
 	$datos=mysql_fetch_row($buscare); 
 
	echo "<form name='cambio_libro' method='post' action= '' onsubmit='modificarDatosLibro(); return false'>
		<center><b><h3>Modifica los Datos Del Formulario</h3></b><br>
		<table align='center'>
		<tr><td>ID</td> <td><input type='text' name='id' readonly = 'readonly' value='$id' > <br></td></tr>
		<tr><td>Nombres</td> <td><input type='text' name='Autor' value='$aut' > <br></td></tr>
		<tr><td>Bloque</td> <td><input type='text' name='Titulo' value='$tit'> <br></td></tr>
		<tr><td>Sector</td> <td><input type='text' name='Codigo' value='$co'><br></td></tr>
		<tr><td>Fecha de fallecido</td> <td><input type='text' name='Editorial' value='$edit'/><br></td></tr>
		<tr><td colspan='2' align='center'><input type='submit' value='Guardar Cambios'></td></tr>
		<tr><td colspan='2' align='center'><div id='resultado'></div></td></tr>
		<tr><td colspan='2' align='center' ><a href='javascript:history.back(1)'>Seguir Buscando</a></td></tr>
        </form></table></center>";
            
            }
 else
 echo "No se Encontro el fallecido";
} else {  
?>
<div id="busqueda">
<center>
<tr><td colspan="2" align="center"><h3>Actualización de Datos</h3></td></tr>
<form name="cambios" action="cambios_lib.php" method="POST">
Busca el fallecido por su ID : <input type="text" name="Codigo_bus" /><br>
<input type="submit" value="Buscar" name="enviar"/>
</form>
</center>
<?php } ?>
</div>
</div>
<footer id="pie">Departamento de Informatica © 2013 · V 1.0</footer>
<footer id="pie">Design and Programing by: Kelo González</footer>
</body>
</html>