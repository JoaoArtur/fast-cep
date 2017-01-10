$(function() {
  $('.formulario').submit(function() {
    var cep = $('input[name="cep"]').val();
    $('.resultado').empty().append('<span class="fa fa-spinner load"></span>');
    if (cep != "") {
      $.get("https://viacep.com.br/ws/"+cep+"/json/unicode/",function(resultado) {
        $('.fa.fa-spinner.load').fadeOut().hide();
        console.log(resultado);
        $('.resultado').empty().append("<div id='r1'><div>");
        $("#r1").typed({
            strings: [resultado.logradouro+"<br>Bairro "+resultado.bairro+"<br>"+resultado.localidade+" - "+resultado.uf],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false
            //callback: function(){ foo(); },
        });
       });
    } else {
      $('.resultado').empty().append('CEP Inválido');
    }
    return false;
  });
});
