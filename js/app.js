$(function() {
  $('.formulario').submit(function() {
    var cep = $('input[name="cep"]').val();
    $('.resultado').empty().append('<span class="fa fa-spinner load"></span>');
    if (cep != "") {
      $.get("https://viacep.com.br/ws/"+cep+"/json/unicode/",function(resultado) {
        $('.fa.fa-spinner.load').fadeOut().hide();
        console.log(resultado);
        $('.resultado').empty().append("<div id='r1'><div><div id='r2'><div><div id='r3'><div>");
        $("#r1").typed({
            strings: ["<b>Rua</b> "+resultado.logradouro],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
        $("#r2").typed({
            strings: ["<b>Bairro</b> "+resultado.bairro],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
        $("#r3").typed({
            strings: [resultado.cidade+" - "+resultado.uf],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });
       });
    } else {
      $('.resultado').empty().append('CEP Inválido');
    }
    return false;
  });
});
