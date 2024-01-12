//adicionando função callbeck e usando jQuery $() para adicionar eventos

$(document).ready(function () {
    $('header button').click(function () {//  dispara envento click botão no Header id (button)
        $('form').slideDown();//funçao do jquery para expandir formulario 'form' clicando em botão nova imagem 'header button'
    })


    $('#btn-cancelar').click(function () {// dispara envento de click bo botao btn-cancelar
        $('form').slideUp();//  função do jquery para recolher formulário 'form' clicando em btn cancelar 
    })

    $('form').on('submit', function (e) {// função para previnir comportamento do submit de atualizar pagina
        e.preventDefault();
        const novaImg = $('#endereço-imagem-nova').val();
        // recuperar valor da nova imagem add +  botao endereço-imagem-nova   
        const novoItem = $(`<li style='display: none'></li>`);//add novo item  e stylizando para mexer no tempo de surgimento
        $(`<img src="${novaImg}" />`).appendTo(novoItem);// add a const novoItem
        $(`<div class="overlay-img">
        <a href="${novaImg}" target ="_blank" title="ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
        
        </div>`).appendTo(novoItem);

        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);//  usando função fazendo a animação "surgir" mais lento
        $('#endereço-imagem-nova').val('');// limpando campo input nova imagem após execução

    })
})


