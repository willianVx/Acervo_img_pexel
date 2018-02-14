$(document).ready(function(){
    $(".galeria_arte").mouseover(function(){
        $(".galeria_arte").addClass("galeria_mouseover");
    });
    $(".galeria_arte").mouseout(function(){
        $(".galeria_arte").removeClass("galeria_mouseover");
    });
    
    $(".galeria_natureza").mouseover(function(){
        $(".galeria_natureza").addClass("galeria_mouseover");
    });
    $(".galeria_natureza").mouseout(function(){
        $(".galeria_natureza").removeClass("galeria_mouseover");
    });

    $(".galeria_cidades").mouseover(function(){
        $(".galeria_cidades").addClass("galeria_mouseover");
    });
    $(".galeria_cidades").mouseout(function(){
        $(".galeria_cidades").removeClass("galeria_mouseover");
    });

    $(".galeria_esporte").mouseover(function(){
        $(".galeria_esporte").addClass("galeria_mouseover");
    });
    $(".galeria_esporte").mouseout(function(){
        $(".galeria_esporte").removeClass("galeria_mouseover");
    });

    $(".galeria_paisagem").mouseover(function(){
        $(".galeria_paisagem").addClass("galeria_mouseover");
    });
    $(".galeria_paisagem").mouseout(function(){
        $(".galeria_paisagem").removeClass("galeria_mouseover");
    });

    $(".galeria_casa").mouseover(function(){
        $(".galeria_casa").addClass("galeria_mouseover");
    });
    $(".galeria_casa").mouseout(function(){
        $(".galeria_casa").removeClass("galeria_mouseover");
    });

    $(".galeria_festa").mouseover(function(){
        $(".galeria_festa").addClass("galeria_mouseover");
    });
    $(".galeria_festa").mouseout(function(){
        $(".galeria_festa").removeClass("galeria_mouseover");
    });

    $(".galeria_pb").mouseover(function(){
        $(".galeria_pb").addClass("galeria_mouseover");
    });
    $(".galeria_pb").mouseout(function(){
        $(".galeria_pb").removeClass("galeria_mouseover");
    });

    $(".galeria_praia").mouseover(function(){
        $(".galeria_praia").addClass("galeria_mouseover");
    });
    $(".galeria_praia").mouseout(function(){
        $(".galeria_praia").removeClass("galeria_mouseover");
    });

    $(".galeria_por_do_sol").mouseover(function(){
        $(".galeria_por_do_sol").addClass("galeria_mouseover");
    });
    $(".galeria_por_do_sol").mouseout(function(){
        $(".galeria_por_do_sol").removeClass("galeria_mouseover");
    });

    $(".galeria_Vintage").mouseover(function(){
        $(".galeria_Vintage").addClass("galeria_mouseover");
    });
    $(".galeria_Vintage").mouseout(function(){
        $(".galeria_Vintage").removeClass("galeria_mouseover");
    });

    $(".galeria_arte").click(function(){
        galeria_remover_class();
        $(".galeria_arte").addClass("galeria_click");
    });

    $(".galeria_natureza").click(function(){
        galeria_remover_class();
        $(".galeria_natureza").addClass("galeria_click");
    });

    $(".galeria_cidades").click(function(){
        galeria_remover_class();
        $(".galeria_cidades").addClass("galeria_click");
    });

    $(".galeria_esporte").click(function(){
        galeria_remover_class();
        $(".galeria_esporte").addClass("galeria_click");
    });

    $(".galeria_paisagem").click(function(){
        galeria_remover_class();
        $(".galeria_paisagem").addClass("galeria_click");
    });

    $(".galeria_casa").click(function(){
        galeria_remover_class();
        $(".galeria_casa").addClass("galeria_click");
    });

    $(".galeria_festa").click(function(){
        galeria_remover_class();
        $(".galeria_festa").addClass("galeria_click");
    });

    $(".galeria_pb").click(function(){
        galeria_remover_class();
        $(".galeria_pb").addClass("galeria_click");
    });

    $(".galeria_praia").click(function(){
        galeria_remover_class();
        $(".galeria_praia").addClass("galeria_click");
    });

    $(".galeria_por_do_sol").click(function(){
        galeria_remover_class();
        $(".galeria_por_do_sol").addClass("galeria_click");
    });
    $(".galeria_Vintage").click(function(){
        galeria_remover_class();
        $(".galeria_Vintage").addClass("galeria_click");
    });

    function galeria_remover_class(){
        $(".galeria_arte").removeClass("galeria_click");
        $(".galeria_natureza").removeClass("galeria_click");
        $(".galeria_cidades").removeClass("galeria_click");
        $(".galeria_esporte").removeClass("galeria_click");
        $(".galeria_paisagem").removeClass("galeria_click");
        $(".galeria_casa").removeClass("galeria_click");
        $(".galeria_festa").removeClass("galeria_click");
        $(".galeria_pb").removeClass("galeria_click");
        $(".galeria_praia").removeClass("galeria_click");
        $(".galeria_por_do_sol").removeClass("galeria_click");
        $(".galeria_Vintage").removeClass("galeria_click");
    }
});