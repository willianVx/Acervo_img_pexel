$(document).ready(function(){

    // define a categoria de acordo com o botao clicado 
    $(".galeria").click(function(){
        var categoriaID = $(this).attr('data-galeria');
        sendData(categoriaID);
    });

    //envia dados para o servidor e retorna imagens de acordo com a categoria
    function sendData(NovaCategoria){
        // show that something is loading
        $('.response').html("<img src='img/carregando.gif' alt='carregando' class='galeria_carregando'>");
        $.post('galeria_fotos.php', {
            categoria: JSON.stringify(NovaCategoria)
        },function(data){
            // show the response
            $('.response').html(data);
        }).fail(function(){
            // just in case posting your form failed
            alert( "Algo deu errado no carregamento." );
        });
        //to prevent refreshing the whole page page
        return false;
    }
    
});