$(document).ready(function(){
    /*
    *   inicia o webstorage_fav_manager
    */
    fav();
    
    //inicia a página com imagens pexel
    sendData("painting colors art", 1);

    //verifica se a aba atual é a de favoritos 
    var aba_atual = false;

    //lista de subcategorias
    var lista_sub_categoria = {

        arte: [
            ["Design", "design"],
            ["Pintura", "painting"],
            ["Desenho", "drawing"]
        ],
        natureza: [
            ["Rios", "rivers"],
            ["Flores", "flowers"],
            ["Animais", "animals"],
            ["Passaros", "birds"],
            ["Cachorros", "dogs"],
            ["Gatos", "cats"]
        ],
        cidades: [
            ["Nova York", "new york"],
            ["Paris", "paris"],
            ["Italia", "italy"],
            ["Alemanha", "germany"],
            ["Nova Zelândia", "new zealand"],
            ["Japão", "japan"],
            ["Brasil", "brazil"],
            ["Africa", "africa"]
        ],
        paisagem: [
            ["Montanha", "mountain"],
            ["Deserto", "desert"],
            ["Praia", "beach"],
            ["Por do sol", "sunset"]
        ],
        comida: [
            ["Fruta", "fruit"],
            ["Vegetais", "vegetables"],
            ["Salada", "salad"],
            ["Macarrão", "pasta"],
            ["Vinho", "wine"]
        ],
        abstrato: [
            ["Vermelho", "red"]
        ]

    }
  
    //exibe sub categorias de acordo com indice da lista de subcategorias passado
    function exibe_sub_categoria(lista){

        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
           
            var categoria = document.createElement("span");
            categoria.innerHTML = element["0"];
            categoria.setAttribute("class","sub_lista")
            categoria.setAttribute("data-galeria", element[1]);

            $(".sub_categorias").append(categoria);
        }

    }
    exibe_sub_categoria(lista_sub_categoria.arte);

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

    //passa parametro para sub categorias serem exibidas 
    var define_sub_categoria = {
        
        categoria_id: "undefined",
        init: function(categoria){
            this.categoria_id = categoria;
            this.start_sub_categoria();
        },
        start_sub_categoria: function(){
            if(this.categoria_id.includes("art")){
                exibe_sub_categoria(lista_sub_categoria.arte);
            }
            if(this.categoria_id.includes("nature")){
                exibe_sub_categoria(lista_sub_categoria.natureza);
            }
            if(this.categoria_id.includes("rio")){
                exibe_sub_categoria(lista_sub_categoria.cidades);
            }
            if(this.categoria_id.includes("landscape")){
                exibe_sub_categoria(lista_sub_categoria.paisagem);
            }
            if(this.categoria_id.includes("food")){
                exibe_sub_categoria(lista_sub_categoria.comida);
            }
            if(this.categoria_id.includes("abstract")){
                exibe_sub_categoria(lista_sub_categoria.abstrato);
            }
            
        }

    }

    //armazena a categoria atual
    var categoria_atual = {

        categoria: "painting colors art",
        atualizar: function(categoria){
            this.categoria = categoria;
            define_sub_categoria.init(this.categoria);
        }

    }

    //ação para quando uma subcategoria é selecionada
   $(".sub_categorias").on("click", ".sub_lista", function(){
        
        aba_atual = false;
        var categoriaID = $(this).attr('data-galeria');
        pagina_categoria.set_pagina(1);
        categoria_atual.atualizar(categoriaID);

        var pagina = pagina_categoria.get_pagina();
        sendData(categoriaID, pagina);

   });

    // define a categoria de acordo com o botao clicado 
    $(".galeria").click(function(){

        aba_atual = false;
        $(".sub_categorias").html("Sub categorias:");
        $('.sub_categorias').show();
        $('.controle_de_paginas').show();

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

        //ativa botao referente a página
        $(".page-link").removeClass('botao_ativado');
        $(this).find('a').addClass('botao_ativado');

    });

    $(".previous_page").click(function(){

        if (pagina_categoria.get_pagina() == 1) {
            pagina_categoria.set_pagina(10);
        }else{
            pagina_categoria.subtrai_pagina();
        }
        sendData(categoria_atual.categoria, pagina_categoria.get_pagina());
        var page = $('.page-item')[pagina_categoria.get_pagina() - 1].children["0"];
        $(".page-link").removeClass('botao_ativado');
        page.classList.add("botao_ativado");

    });

    $(".next_page").click(function(){

       if (pagina_categoria.get_pagina() <= 9) {
            pagina_categoria.adiciona_pagina();
       }else{
            pagina_categoria.set_pagina(1);
       }
       sendData(categoria_atual.categoria, pagina_categoria.get_pagina());
       
       var page = $('.page-item')[pagina_categoria.get_pagina() - 1].children["0"];
       $(".page-link").removeClass('botao_ativado');
       page.classList.add("botao_ativado");

    });
    $('.contador_favoritos').html(fav().length);

    //imagens_favoritadas.set_indice_controle();

    $('.contador_favoritos').html(fav().length);

    $(".galeria_response_img").on("mouseover", ".galeria_imagem_pexel_box", function(){

        var dataset_imagem = $(this)["0"].children["0"].dataset.imagemOriginal;
        for (let index = 0; index < fav().length; index++) {
            const element = fav()[index];

            if (element[1] == dataset_imagem) {
                $(this)["0"].children[1].children[1].style = "color: rgb(71,175,88);";
            }

        }
       
    }); 

    //define ação para botão de favoritar 
    $(".galeria_response_img").on("click", ".fav_b", function(){
        var fav_url = $(this)["0"].parentElement.parentElement.children["0"].dataset.imagemOriginal;

        add_fav(fav_url);
        $('.contador_favoritos').html(fav().length);

        if (aba_atual) {
            $(this)["0"].parentElement.parentElement.style = "display: none;";
            if (fav().length == 0) {
                var mensagem_sem_favoritos = document.createElement("div");
                mensagem_sem_favoritos.setAttribute("class", "jumbotron");
                mensagem_sem_favoritos.innerText = "Click em uma das categorias para favoritar mais imagens!";
                
                $('.response').html(mensagem_sem_favoritos);
            } 
        }
    });

    //exibe aba favoritos
    $(".aba_favoritos").click(aba_favoritos);

    function aba_favoritos(){

        aba_atual = true;
        $('.response').html(" ");
        $('.sub_categorias').hide();
        $('.controle_de_paginas').hide();

        if (fav().length == 0) {

            var mensagem_sem_favoritos = document.createElement("div");
            mensagem_sem_favoritos.setAttribute("class", "jumbotron");
            mensagem_sem_favoritos.innerText = "Você ainda não favoritou nenhuma imagem!";
            
            $('.response').html(mensagem_sem_favoritos);

        }
        render_img(fav());
    }

    //envia dados para o servidor e retorna imagens de acordo com a categoria e pagina 
    function sendData(NovaCategoria, pagina){
        // show that something is loading
        $('.response').html("<img src='img/carregando.gif' alt='carregando' class='galeria_carregando'>");
        $.post('galeria_fotos.php', {
            categoria: JSON.stringify(NovaCategoria),
            pagina: pagina
        },function(data){
            // show the response
            var retorno = JSON.parse(data);
            render_img(retorno.photos);
            
        }).fail(function(){
            // just in case posting your form failed
            alert( "Algo deu errado no carregamento." );
        });
        //to prevent refreshing the whole page
        return false;
    }

    var render_img = function(img){
        
        var colunas = document.createElement('div');
            colunas.setAttribute('class', 'response');

        var column_1 = document.createElement('div');
            column_1.setAttribute('class', 'column');

        var column_2 = document.createElement('div');
            column_2.setAttribute('class', 'column');

        var column_3 = document.createElement('div');
            column_3.setAttribute('class', 'column');
        
        for (let index = 0; index < img.length; index++) {

            const element = img[index];
            var render_image = document.createElement('img');

            if (typeof element.src == 'undefined' ) {
                render_image.src = element[1];
                render_image.dataset.imagemOriginal = element[1];
            }else{
                render_image.src = element.src.medium;
                render_image.dataset.imagemOriginal = element.src.original;
            }

            var galeria_img_pexel = document.createElement('div');
                galeria_img_pexel.setAttribute('class','galeria_imagem_pexel_box');

            var button            = document.createElement('button');  
            button.setAttribute('class', 'galeria_acervo_botao');
            button.innerText = "Usar imagem";

            var overlay           = document.createElement('div');
            overlay.setAttribute('class', 'overlay');

            var overlay_span      = document.createElement('span');
            overlay_span.setAttribute('class', 'glyphicon glyphicon-zoom-in');

            var fav_b             = document.createElement('div');
            fav_b.setAttribute('class', 'fav_b');

            var fav_b_span        = document.createElement('span');
            fav_b_span.setAttribute('class', 'glyphicon glyphicon-heart');

            $(overlay).append(overlay_span);
            $(fav_b).append(fav_b_span);
            $(overlay).append(fav_b);
            $(overlay).append(button);

            $(galeria_img_pexel).append(render_image, overlay);

            if (index <= 12) {
                $(column_1).append(galeria_img_pexel);
            }
            if (index > 12 && index <= 25) {
                $(column_2).append(galeria_img_pexel);
            }
            if (index > 25 && index <= 38) {
                $(column_3).append(galeria_img_pexel);
            }
        }
        $(colunas).append(column_1, column_2, column_3);
        $('.response').html(colunas);  
    }
    
    return window.pagina_categoria = pagina_categoria;
});