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
    });
    $( ".galeria_response_img" ).on( "mouseout", ".galeria_imagem_pexel_box", function() {
        $(".galeria_acervo_botao").hide();
    });

    $( ".galeria_response_img" ).on( "mouseover", "img[data-imagem]", function() {
        //console.log($(this)["0"].dataset.imagemOriginal);
    });

    $(".categorias_menu_mobile").click(function(){
        $(this).hide();
        $(".galeria_categoria").show();
    });

    //funcionamento do menu mobile
    if (window.innerWidth < 1024) {

        $(".galeria").click(function(){
            $(".galeria_categoria").hide();
            $(".categorias_menu_mobile").show();
        });

        $(".categorias_menu_mobile").click(function(){
            $(".galeria_response_img").html(" ");
        });

    }
});

