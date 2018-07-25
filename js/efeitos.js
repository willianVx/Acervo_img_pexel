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

        //ativa botao referente a página
        $(".page-link").removeClass('botao_ativado');
        $("#page_1").addClass('botao_ativado');
        
    });

    //ação para quando uma subcategoria é selecionada
    $(".sub_categorias").on("mouseover", ".sub_lista", function(){
        $(this).css({"color":"white", "background-color": "rgb(71,175,88)"});
    });

    $(".sub_categorias").on("mouseout", ".sub_lista", function(){
        $(this).css({"color":"rgb(71,175,88)", "background-color": "white"});
    });

    $(".sub_categorias").on("click", ".sub_lista", function(){
        
        $(".sub_lista").removeClass("sub_categorias_over");
        $(".page-link").removeClass('botao_ativado');
        $("#page_1").addClass('botao_ativado');
        $(this).addClass("sub_categorias_over");
    });

    //mostra botao da imagem
    $( ".galeria_response_img" ).on( "mouseover", ".galeria_imagem_pexel_box", function() {
        var overlay = $(this)["0"].children[1];
        $(overlay).show();

        var zoom = $(overlay)["0"].children["0"];

        imagem_original = $(overlay)["0"].parentElement.childNodes["0"].dataset.imagemOriginal;
        $(zoom).click(function(){
            zoom_modal(imagem_original);
        });
        var usar_imagem = $(overlay)["0"].children[2];

        $(usar_imagem).click(function(){
            window.location.assign("https://instaarts.com/produto/quadro-personalizado-iap/?img="+imagem_original);
        });

    });

    $( ".galeria_response_img" ).on( "mouseout", ".galeria_imagem_pexel_box", function() {
        var overlay = $(this)["0"].children[1];
        $(overlay).hide();
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
    
//deixa imagem em tela cheia
    function zoom_modal(imagem){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = imagem;
        var modalImg = document.getElementById("img01");

        modal.style.display = "block";
        modalImg.src = img;
        
        //direciona para quadro personalizado
        $("#botao_usar_imagem_modal").click(function(){
            window.location.assign("https://instaarts.com/produto/quadro-personalizado-iap/?img="+img);
        });

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
        
    }
    
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {sticky_scroll()};

    // Get the sidebar
    var galeria_categoria = document.getElementById("galeria_categoria");
    var aba_favoritos     = document.getElementById("aba_favoritos");
    
    // Get the offset position of the navbar
    var sticky = galeria_categoria.offsetTop;
    
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function sticky_scroll() {
        if (window.innerWidth <= 767) {
            return;
        }
        if (window.pageYOffset > sticky) {
            galeria_categoria.classList.add("sticky");
            aba_favoritos.classList.add("sticky");
        } else {
            galeria_categoria.classList.remove("sticky");
            aba_favoritos.classList.remove("sticky");
        }
    }
    
});