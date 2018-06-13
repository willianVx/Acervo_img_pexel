$(document).ready(function(){
    //inicia a página com imagens pexel
    sendData("painting colors art", 1);

    setCookie("teste_1", "texto texto texto", 2);
    setCookie("teste_2", "texto texto texto", 2);
    setCookie("teste_3", "texto texto texto", 2);
    
    //verica se a aba atual é a de favoritos 
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
    $('.contador_favoritos').html(imagens_favoritadas.url_imagens.length);
    /************
     * 
     * 
     * 
     * 
     * 
     * 
     
    
    deleteCookie("fav_0");
    deleteCookie("fav_1");
    deleteCookie("fav_2");
    deleteCookie("fav_3");
    deleteCookie("fav_4");
    deleteCookie("fav_5");
    deleteCookie("fav_6");
    deleteCookie("fav_7");
    deleteCookie("fav_8");
    deleteCookie("fav_9");
    deleteCookie("fav_10");
    deleteCookie("PHPSESSID");

    /************
     * 
     * 
     * 
     * 
     * 
     * 
     */

    imagens_favoritadas.set_indice_controle();
    imagens_favoritadas.atualiza_url_imagens();

    $('.contador_favoritos').html(imagens_favoritadas.url_imagens.length);

    $(".galeria_response_img").on("mouseover", ".galeria_imagem_pexel_box", function(){

        var dataset_imagem = $(this)["0"].childNodes[1].dataset.imagemOriginal;

        if (typeof dataset_imagem == 'undefined') {
            dataset_imagem = $(this)["0"].childNodes[0].dataset.imagemOriginal;
        }

        for (let index = 0; index < imagens_favoritadas.url_imagens.length; index++) {
            const element = imagens_favoritadas.url_imagens[index];

            if (element[1] == dataset_imagem) {
                $(this)["0"].children[3].style = "color: rgb(71,175,88);";
            }

        }

    }); 

    //define ação para botão de favoritar 
    $(".galeria_response_img").on("click", ".fav_b", function(){
            
        var fav_url = $(this)["0"].parentNode.childNodes[1].dataset.imagemOriginal;
        if (typeof fav_url == 'undefined') {
            fav_url = $(this)["0"].parentNode.childNodes[0].dataset.imagemOriginal;
        }

        if ($(this)["0"].style.color != "rgb(71, 175, 88)") {
            this.style = "color: rgb(71,175,88);";
        }else{
            this.style = "color: rgb(255,255,255);";
        }
        if (aba_atual) {
            $(this)["0"].parentElement.style = "display: none;";
            if (imagens_favoritadas.url_imagens.length == 1) {
                var mensagem_sem_favoritos = document.createElement("div");
                mensagem_sem_favoritos.setAttribute("class", "jumbotron");
                mensagem_sem_favoritos.innerText = "Click em uma das categorias para favoritar mais imagens!";
                
                $('.response').html(mensagem_sem_favoritos);
            }
        }

        imagens_favoritadas.add_url(fav_url);
        $('.contador_favoritos').html(imagens_favoritadas.url_imagens.length);

    });

    //exibe aba favoritos
    $(".aba_favoritos").click(aba_favoritos);

    function aba_favoritos(){

        aba_atual = true;
        $('.response').html(" ");
        $('.sub_categorias').hide();
        $('.controle_de_paginas').hide();

        if (imagens_favoritadas.url_imagens.length == 0) {

            var mensagem_sem_favoritos = document.createElement("div");
            mensagem_sem_favoritos.setAttribute("class", "jumbotron");
            mensagem_sem_favoritos.innerText = "Você ainda não favoritou nenhuma imagem!";
            
            $('.response').html(mensagem_sem_favoritos);

        }

        for (let index = 0; index < imagens_favoritadas.url_imagens.length; index++) {

            const element  = imagens_favoritadas.url_imagens[index];

            var imagem_box = document.createElement("div");
            var img        = document.createElement("img");
            var button     = document.createElement("button");
            var zoom       = document.createElement("div");
            var zoom_span  = document.createElement("span");
            var fav_b      = document.createElement("div");
            var fav_b_icon = document.createElement("div");

            imagem_box.setAttribute("class", "col-lg-2 galeria_imagem_pexel_box");

            img.setAttribute("class", "galeria_imagem_pexel");
            img.setAttribute("alt", "Imagem do Acervo");
            img.setAttribute("data-imagem", "imagem" + index);
            img.setAttribute("data-imagem-original", element[1]);
            img.setAttribute("src", element[1]);

            button.setAttribute("class", "galeria_acervo_botao");
            button.setAttribute("type", "button");
            button.setAttribute("data-botao", "botao"+index);
            button.innerText = "Usar imagem";

            zoom.setAttribute("class", "overlay");
            zoom_span.setAttribute("class", "glyphicon glyphicon-zoom-in");
            zoom.append(zoom_span);

            fav_b.setAttribute("class", "fav_b");
            fav_b_icon.setAttribute("class", "glyphicon glyphicon-heart");
            fav_b.append(fav_b_icon);

            imagem_box.append(img, button, zoom, fav_b);

            $('.response').append(imagem_box);

        }

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
            $('.response').html(data);
            
        }).fail(function(){
            // just in case posting your form failed
            alert( "Algo deu errado no carregamento." );
        });
        //to prevent refreshing the whole page
        return false;
    }

    return window.pagina_categoria = pagina_categoria;
});