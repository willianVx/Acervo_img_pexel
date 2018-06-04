//define funcao para imagem escolhida
function imagem_do_acervo(data_imagem, data_imagem_original){
    this.data_imagem = data_imagem;
    this.data_imagem_original = data_imagem_original;
}

$(document).ready(function(){
    
    //muda a cor da categoria quando o mouse está sobre ela
    $(".galeria").mouseover(function(){
        $(this).addClass("galeria_mouseover");
    });
    //retorna para cor padrão quando se retira o mouse 
    $(".galeria").mouseout(function(){
        $(this).removeClass("galeria_mouseover");
    });
    //aumenta o tamanho da fonte da categoria clicada
    $(".galeria").click(function(){
        $(".galeria").removeClass("galeria_click");
        $(this).addClass("galeria_click");
    });
    //mostra botao da imagem
    $( ".galeria_response_img" ).on( "mouseover", ".galeria_imagem_pexel_box", function() {
        var UsarEsse = $(this)["0"].children[1];
        $(UsarEsse).show();

        //quando clicado define a imagem escolhida

        $(UsarEsse).click(function(){

            var data_imagem = $(this)["0"].parentElement.childNodes[1].dataset.imagem;
            var data_imagem_original = $(this)["0"].parentElement.childNodes[1].dataset.imagemOriginal;
            //var define_imagem = new imagem_do_acervo("oi", data_imagem_original);
            window.location.assign("https://instaarts.com/produto/quadro-personalizado-iap/?img="+data_imagem_original);
            console.log(data_imagem_original);

        });

    });
    $( ".galeria_response_img" ).on( "mouseout", ".galeria_imagem_pexel_box", function() {
        $(".galeria_acervo_botao").hide();
    });

    $(".categorias_menu_mobile").click(function(){
        $(".galeria_categoria").show();
            $(".galeria").click(function(){
                $(".galeria_categoria").hide();
            });
    });

    $(".glyphicon-remove").click(function(){
        $(".galeria_categoria").hide();
    });
});

