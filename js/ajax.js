function objetoAjax(){
var xmlhttp=false;
try {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); //Para Chrome, Firefox, Opera
} catch (e) {
try {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Para IE 8 Y 9
} catch (E) {
xmlhttp = false;
}
}
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
  }

function enviarDatosUsuario(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  cu=document.registro_usuario.curp.value;
  nom=document.registro_usuario.Nombre.value;
  ape=document.registro_usuario.Apellido.value;
  gra=document.registro_usuario.Grado.value;
  gru=document.registro_usuario.Grupo.value;
  dir=document.registro_usuario.Direccion.value;
  tel=document.registro_usuario.Telefono.value;
   //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "reg_usuario.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposUsuario();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("curp="+cu+"&Nombre="+nom+"&Apellido="+ape+"&Grado="+gra+"&Grupo="+gru+"&Direccion="+dir+"&Telefono="+tel)
  }
function LimpiarCamposUsuario(){
document.registro_usuario.curp.value="";
document.registro_usuario.Nombre.value="";
document.registro_usuario.Apellido.value="";
document.registro_usuario.Grado.value="";
document.registro_usuario.Grupo.value="";
document.registro_usuario.Direccion.value="";
document.registro_usuario.Telefono.value="";
document.registro_usuario.curp.focus();
   }

  function enviarDatosLibro(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  cedula=document.registro_libro.cedula.value;
  co=document.registro_libro.Codigo.value;
  tit=document.registro_libro.Titulo.value;
  aut=document.registro_libro.Autor.value;
  edit=document.registro_libro.Editorial.value;
   //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "reg_libro.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposLibros();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("cedula="+cedula+"&Codigo="+co+"&Titulo="+tit+"&Autor="+aut+"&Editorial="+edit)
  }
function LimpiarCamposLibros(){
document.registro_libro.cedula.value="";
document.registro_libro.Codigo.value="";
document.registro_libro.Titulo.value="";
document.registro_libro.Autor.value="";
document.registro_libro.Editorial.value="";
document.registro_libro.cedula.focus();
   }


function enviarDatosPrestamo(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  cu=document.registro_prestamo.curp.value;
  co=document.registro_prestamo.Codigo.value;
  fep=document.registro_prestamo.Fecha_prestamo.value;
   //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "reg_prestamo.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposPrestamo();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("curp="+cu+"&Codigo="+co+"&Fecha_prestamo="+fep)
  }
function LimpiarCamposPrestamo(){
document.cambios.curp.value="";
document.registro_prestamo.Codigo.focus();
   }

function enviarDatosAdmin(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('administrador');
  //valores de los inputs
  nom=document.admin.Nombre.value;
  pass=document.admin.pass.value;
  //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "admin.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText

  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposAdmin();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("Nombre="+nom+"&pass="+pass)
  }
function LimpiarCamposAdmin(){
document.admin.Nombre.value="";
document.admin.pass.value="";

   }

function enviarDatosEMail(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('mail');
  //valores de los inputs
  nom=document.contacto.Nombre.value;
  gra=document.contacto.Grado.value;
  gru=document.contacto.Grupo.value;
  corre=document.contacto.Correo.value;
  asun=document.contacto.Asunto.value;
  //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "phpmailer-gmail/correo.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText

  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposAdmin();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("Nombre="+nom+"&Grado="+gra+"&Grupo="+gru+"&Correo="+corre+"&Asunto="+asun)
  }
function LimpiarCamposAdmin(){
document.contacto.Nombre.value="";
document.contacto.Grado.value="";
document.contacto.Grupo.value="";
document.contacto.Correo.value="";
document.contacto.Asunto.value="";

   }


  //TERMINA LAS CONSULTAS DE REGISTRAR CON AJAX EMPIEZA LAS CONSULTAS DE MODIFICAR


  function modificarDatosUsuario(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  cu=document.formulario.curp.value;
  nom=document.formulario.Nombre.value;
  ape=document.formulario.Apellido.value;
  gra=document.formulario.Grado.value;
  gru=document.formulario.Grupo.value;
  dir=document.formulario.Direccion.value;
  tel=document.formulario.Telefono.value;
   //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "mod_usuario.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposUsuariomod();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("curp="+cu+"&Nombre="+nom+"&Apellido="+ape+"&Grado="+gra+"&Grupo="+gru+"&Direccion="+dir+"&Telefono="+tel)
   }

function LimpiarCamposUsuariomod(){
document.cambios.curp.value="";
document.formulario.curp.value="";
document.formulario.Nombre.value="";
document.formulario.Apellido.value="";
document.formulario.Grado.value="";
document.formulario.Grupo.value="";
document.formulario.Direccion.value="";
document.formulario.Telefono.value="";
document.cambios.curp.focus();
   }
/* -----TERMINA LA SECCION DE LAS FUNCIONES PARA EL USUARIO*/



   //Funcion Ajax para modificar Libros
    function modificarDatosLibro(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  //cedula=document.cambio_libro.cedula.value;
  id=document.cambio_libro.id.value;
  co=document.cambio_libro.Codigo.value;
  tit=document.cambio_libro.Titulo.value;
  aut=document.cambio_libro.Autor.value;
  edit=document.cambio_libro.Editorial.value;
   //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "mod_libro.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
 LimpiarCamposLibro();
}
}
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("id="+id+"&Codigo="+co+"&Titulo="+tit+"&Autor="+aut+"&Editorial="+edit)
 }
 function LimpiarCamposLibro(){
//document.cambios.Codigo_bus.value="";
document.cambio_libro.Codigo.value="";
document.cambio_libro.Titulo.value="";
document.cambio_libro.Autor.value="";
document.cambio_libro.Editorial.value="";
document.cambios.Autor.focus();
 }

 function modificarDatosPrestamo(){
  //donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //valores de los inputs
  cu=document.modificar_prestamo.curp.value;
  co=document.modificar_prestamo.Codigo.value;
    //instanciamos el objetoAjax
  ajax=objetoAjax();
  //uso del medotod POST
  //archivo que realizará la operacion
  //reg_usuario.php
  ajax.open("POST", "mod_prestamo.php",true);
  ajax.onreadystatechange=function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  LimpiarCamposPrestamo();
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("curp="+cu+"&Codigo="+co)
  }
function LimpiarCamposPrestamo(){
document.cambios.curp.value="";
document.modificar_prestamo.Codigo.focus();
   }

  //Mostrar el formulario de contacto en el index

function DesplegarContac(){
  divResultado = document.getElementById('formcontact');
  ajax=objetoAjax();
   ajax.open("GET", "contacindex.php",true);
  ajax.onreadystatechange= function() {
  if (ajax.readyState==4) {
  //mostrar resultados en esta capa
  divResultado.innerHTML = ajax.responseText
  //llamar a funcion para limpiar los inputs
  //alert("Usuario Registrado");
  }
  }
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send(null)
  }  
