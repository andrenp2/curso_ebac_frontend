// função para cadastrar uma ativiade criando uma nova linha

$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nomeAtividade = $('#nova-tarefa').val();
        const novaLinha = $('<li></li>').text(nomeAtividade);
        $(novaLinha).appendTo('ol');

        $('#nova-tarefa').val('');
    })
})

// função para aplicar o efeito de linha sobre o text 
const linha = $('ol');
linha.on('click', 'li', function(){
    $(this).toggleClass('concluido')
})

// o (this) faz referencia apenas ao elemento que foi clicado. 
// caso contrario, ele marcaria todas as linhas 'li'