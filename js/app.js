$(function() {
  $('.formulario').submit(function() {
    var cep = $('input[name="cep"]').val();
    $('.resultado').empty().append('<span class="fa fa-spinner load"></span>');
    if (cep != "") {
      $.get("https://viacep.com.br/ws/"+cep+"/json/unicode/",function(resultado) {
        $('.fa.fa-spinner.load').fadeOut().hide();
        console.log(resultado);
        $('.resultado').empty().append("Rua "+resultado.logradouro+"<br>"+"Bairro "+resultado.bairro+"<br>"+resultado.cidade+" - "+resultado.uf);
      });
    } else {
      $('.resultado').empty().append('CEP Inválido');
    }
    return false;
  });
});
