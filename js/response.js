$(document).ready(function(){
    //inicia a página com imgens pexel
    sendData("painting colors art", 1);
    
    //define qual pagina deve ser carregada para cada categoria
    var pagina_categoria = {
        pagina: 1,
        set_pagina: function(numero){
            this.pagina = numero;
        },
        get_pagina: function(){
            return this.pagina;
        },
        adiciona_pagina: function(){
            this.pagina++
        },
        subtrai_pagina: function(){
            this.pagina--
        }
    }

    //armazena a categoria atual
    var categoria_atual = {

        categoria: "painting colors art",
        atualizar: function(categoria){
            this.categoria = categoria;
        }

    }

    // define a categoria de acordo com o botao clicado 
    $(".galeria").click(function(){
        var categoriaID = $(this).attr('data-galeria');
        pagina_categoria.set_pagina(1);
        categoria_atual.atualizar(categoriaID);
        var pagina = pagina_categoria.get_pagina();
        sendData(categoriaID, pagina);
    });

    //muda a página da categoria
    $(".page-item").click(function(){
        var p = $(this).attr('data-pagina');
        var pagina = parseInt(p);
        pagina_categoria.set_pagina(pagina);
        sendData(categoria_atual.categoria, pagina_categoria.get_pagina());
    });

    $(".previous_page").click(function(){

        if (pagina_categoria.get_pagina() == 1) {
            pagina_categoria.set_pagina(4);
        }else{
            pagina_categoria.subtrai_pagina();
        }
        sendData(categoria_atual.categoria, pagina_categoria.get_pagina());

    });

    $(".next_page").click(function(){

       if (pagina_categoria.get_pagina() <= 3) {
            pagina_categoria.adiciona_pagina();
       }else{
            pagina_categoria.set_pagina(1);
       }
       sendData(categoria_atual.categoria, pagina_categoria.get_pagina());

    });

    //envia dados para o servidor e retorna imagens de acordo com a categoria e pagina 
    function sendData(NovaCategoria, pagina){
        // show that something is loading
        $('.response').html("<img src='img/carregando.gif' alt='carregando' class='galeria_carregando'>");
        $.post('galeria_fotos.php', {
            categoria: JSON.stringify(NovaCategoria),
            pagina: pagina
        },function(data){
            // show the response
            $('.response').html(data);
            
        }).fail(function(){
            // just in case posting your form failed
            alert( "Algo deu errado no carregamento." );
        });
        //to prevent refreshing the whole page
        return false;
    }

});