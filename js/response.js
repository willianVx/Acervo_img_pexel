$(document).ready(function(){
    $(".galeria_arte").click(function(){
        setCategoria("art");
    });

    $(".galeria_natureza").click(function(){
        setCategoria("nature");
    });

    $(".galeria_esporte").click(function(){
        setCategoria("sport");
    });

    $(".galeria_familia").click(function(){
        setCategoria("family");
    });

    $(".galeria_casa").click(function(){
        setCategoria("house");
    });

    $(".galeria_festa").click(function(){
        setCategoria("party");
    });

    $(".galeria_pb").click(function(){
        setCategoria("black and white");
    });

    $(".galeria_praia").click(function(){
        setCategoria("beach");
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