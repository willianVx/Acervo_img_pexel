<?php 
    require "galeria_fotos.php";
    require "categorias.php";
 ?>
 
<html>
    <head>

    <title>Acervo Instaarts</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:url"           content="https://instaarts.com/acervo_instaarts/" />
    <meta property="og:type"          content="store" />
    <meta property="og:title"         content="Acervo de imagens Instaarts" />
    <meta property="og:description"   content="Com o acervo de imagens Instaarts você pode escolher entre uma variedade incrivel de fotografias para compor seu quadro personalizado." />
    <meta property="og:image"         content="https://instaarts.com/wp-content/uploads/2018/03/logo-instaarts-152px.png" />
    <meta property="fb:app_id"        content="604627986580301">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="icon" type="imagem/png" href="https://instaarts.com/wp-content/uploads/2018/03/logo-instaarts-76.png" />
    <link rel="icon" href="https://instaarts.com/wp-content/uploads/2018/10/logo-instaarts-144-px.png" type="image/x-icon"/>
    </head>
    <body>

    <img id="teste" src="img/instaarts_acervo_head.png" alt="cabeçalho Instaarts acervo" class="img_head">

    <div class="container">
        <div class="row">
            
            <div class="envelope">
                    <div class="col- head_texto">
                        <p>
                            Use uma de nossas imagens para montar seu pedido
                        </p>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                    
                        <a href="https://instaarts.com/"><button class="btn btn-success voltar_loja">Voltar a loja</button></a>
                        <?php
                           galeria_categorias();
                        ?>
                        <div class="categorias_menu_mobile">
                            <button class="btn btn-success"><span class="glyphicon glyphicon-align-justify"></span></button>
                        </div>
                        
                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 container_response">

                        
                        <nav class="sub_categorias">Sub categorias:</nav>

                        <div id="aba_favoritos" class="aba_favoritos">
                            <span class="glyphicon glyphicon-heart"></span>
                            <span class="contador_favoritos">0</span>
                        </div>

                        <div class="response galeria_response_img"></div>
                        
                        
                        <nav class = "controle_de_paginas">
                            <ul class="pagination pagination justify-content-center">
                                <li class="previous_page">
                                <a class="page-link" href="#" tabindex="-1">Anterior</a>
                                </li>
                                <li class="page-item" data-pagina="1"><a id="page_1" class="page-link botao_ativado" href="#">1</a></li>
                                <li class="page-item" data-pagina="2"><a class="page-link" href="#">2</a></li>
                                <li class="page-item" data-pagina="3"><a class="page-link" href="#">3</a></li>
                                <li class="page-item" data-pagina="4"><a class="page-link" href="#">4</a></li>
                                <li class="page-item" data-pagina="5"><a class="page-link" href="#">5</a></li>
                                <li class="page-item" data-pagina="6"><a class="page-link" href="#">6</a></li>
                                <li class="page-item" data-pagina="7"><a class="page-link" href="#">7</a></li>
                                <li class="page-item" data-pagina="8"><a class="page-link" href="#">8</a></li>
                                <li class="page-item" data-pagina="9"><a class="page-link" href="#">9</a></li>
                                <li class="page-item" data-pagina="10"><a class="page-link" href="#">10</a></li>
                                <li class="next_page">
                                    <a class="page-link" href="#">Próximo</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
            </div>
        </div>
    </div>
        <!-- The Modal -->
<div id="myModal" class="modal">

<!-- The Close Button -->
<span class="close">&times;</span>

<!-- Modal Content (The Image) -->
<img class="modal-content" id="img01">

<!-- Modal Caption (Image Text) -->
<div id="caption">
    <div id="botao_usar_imagem_modal" class="btn btn-success">Usar imagem</div>
</div>
</div>
    </body>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/response.js"></script>
    <script src="js/efeitos.js"></script>
    <script src="js/webstorage_fav_manager.js"></script>

</html>