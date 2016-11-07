$(document).ready(function() {
  $(function() {
  	var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  	var passreg= /(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?![.\n])((?=.*\d)|(?=.*\W+))(?=.*[a-z]).*/
  	$(".boton").click(function(){
  		$(".error").fadeOut().remove();

  		if ($(".nombre").val() == "") {
  			$(".nombre").focus().after('<span class="error">Ingrese su nombre</span>');
  			return false;
  		}

  		if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
  			$(".email").focus().after('<span class="error">Ingrese un email correcto</span>');
  			return false;
  		}

  		if ($(".pass").val() == "" || !passreg.test($(".pass").val())){
  			$(".pass").focus().after('<span class="error">Ingrese un password con almenos un numero , mayor a 8 caracteres y una mayuscula</span>');
  			return false;
  		}
  	});

  	$(".nombre").bind('blur keyup', function(){
  		if ($(this).val() != "") {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  	$(".email").bind('blur keyup', function(){
  		if ($(".email").val() != "" && emailreg.test($(".email").val())) {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  	$(".pass").bind('blur keyup', function(){
  		if ($(".pass").val() != "" && passreg.test($(".pass").val()) && ($(".pass").val().length >=8)) {
  			$('.error').fadeOut();
  			return false;
  		}
  	});

  });

  //apuntes
  // Método bind() para definir cualquier tipo de evento
  // Con el método bind() podemos definir de una manera genérica cualquier tipo de evento,
  // o incluso un mismo manejador de eventos para distintos tipos de eventos distintos.
  // El uso más habitual de este método es el siguiente:
  //				 bind(tipo_de_evento, manejador)


  // jQuery blur(), su funcionalidad es la detección de la pérdida del foco en los diferentes
  //  elementos del DOM de una página web. El evento opuesto es jQuery focus().

});
