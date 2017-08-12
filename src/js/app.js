// ES6 code goes here

$('.background-image').show();

$("#contact").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
		alert("Gracias, te contactaremos en breve!");
  });
});

$(document).on('click', '.navbar a, .button.cta', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('.navbar').height()
    }, 500);
});