$(document).ready(function(){
    $(".galeria_arte").click(function(){
        setCategoria("art painting colors");
    });

    $(".galeria_natureza").click(function(){
        setCategoria("nature forest");
    });
    $(".galeria_cidades").click(function(){
        setCategoria("london new york tokyo rio de janeiro paris roma");
    });
    $(".galeria_esporte").click(function(){
        setCategoria("ball sport atletic");
    });

    $(".galeria_paisagem").click(function(){
        setCategoria("landscape");
    });

    $(".galeria_casa").click(function(){
        setCategoria("design interior house");
    });

    $(".galeria_festa").click(function(){
        setCategoria("party music");
    });

    $(".galeria_pb").click(function(){
        setCategoria("black an white gray");
    });

    $(".galeria_praia").click(function(){
        setCategoria("beach ocean");
    });

    $(".galeria_por_do_sol").click(function(){
        setCategoria("sunset");
    });
    function setCategoria(categoria){
        var NovaCategoria = categoria;
        sendData(NovaCategoria);
    }
    function sendData(NovaCategoria){
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
        $.post('galeria_fotos.php', {
            categoria: JSON.stringify(NovaCategoria)
        },function(data){
            // show the response
            $('.response').html(data);
        }).fail(function(){
            // just in case posting your form failed
            alert( "Posting failed." );
        });
        //to prevent refreshing the whole page page
        return false;

    }
});