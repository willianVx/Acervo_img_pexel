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
    //mostra tamanhos possiveis e preco minimo para a fotografia  
    $( ".galeria_response_img" ).on( "mouseover", "img[data-imagem]", function() {
        //console.log($( this ));
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

