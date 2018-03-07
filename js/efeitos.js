$(document).ready(function(){
    // muda a cor da categoria quando o mouse está sobre ela
    $(".galeria").mouseover(function(){
        $(this).addClass("galeria_mouseover");
    });
    //retorna para cor padrão quando se retira o mouse 
    $(".galeria").mouseout(function(){
        $(this).removeClass("galeria_mouseover");
    });
    // aumenta o tamanho da fonte da categoria clicada
    $(".galeria").click(function(){
        $(".galeria").removeClass("galeria_click");
        $(this).addClass("galeria_click");
        console.log($(".galeria_imagem_pexel").prevObject["0"].images);
    });

    $(".galeria_imagem_pexel").click(function(){
        console.log("oi!");
    });
});