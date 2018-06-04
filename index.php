<?php 
                    require "galeria_fotos.php";
                    require "categorias.php";
                    require "modal_comprar.php";
                    require "calculadoraProdutosInsta/main.php";
                    require "TamanhosProporcionais/imagemProporcional.php";
 ?>
 
<html>
    <head>

    <title>Acervo Instaarts</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="icon" type="imagem/png" href="https://instaarts.com/wp-content/uploads/2018/03/logo-instaarts-76.png" />
    </head>
    <body>

    <?php
        /*
        function inicia($n1, $n2){

            $teste2 = new ImagemProporcional;
            $verde2 = $teste2 -> TamanhosProporcionais($n1, $n2)[0];

            $teste = new CalculaPreco;
            return $teste -> formula_pedido_instaarts('meta5mm', 0, 20, $verde2);

        }

        $Tamanhos = array(100, 200,300,400,500);
        
        for ($i=0; $i < sizeof($Tamanhos) ; $i++) { 
            inicia($Tamanhos[$i],$Tamanhos[0]);
            echo "</br>";
        }
        */

    ?>

    <img src="img/instaarts_acervo_head.png" alt="cabeçalho Instaarts acervo" class="img_head">

    <div class="container">
        <div class="row">
            
            <div class="envelope">
                    <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                        <a href="https://instaarts.com/"><button class="btn btn-success">Voltar a loja</button></a>
                        <?php
                           galeria_categorias();
                        ?>
                        <div class="categorias_menu_mobile">
                            <button class="btn btn-success"><span class="glyphicon glyphicon-align-justify"></span></button>
                        </div>
                        
                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 container_response">
                        <div class="response galeria_response_img"></div>

                        <nav class = "controle_de_paginas">
                            <ul class="pagination pagination justify-content-center">
                                <li class="previous_page">
                                <a class="page-link" href="#" tabindex="-1">Anterior</a>
                                </li>
                                <li class="page-item" data-pagina="1"><a class="page-link" href="#">1</a></li>
                                <li class="page-item" data-pagina="2"><a class="page-link" href="#">2</a></li>
                                <li class="page-item" data-pagina="3"><a class="page-link" href="#">3</a></li>
                                <li class="page-item" data-pagina="4"><a class="page-link" href="#">4</a></li>
                                <li class="next_page">
                                <a class="page-link" href="#">Próximo</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
            </div>
        </div>
    </div>

    </body>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/response.js"></script>
    <script src="js/efeitos.js"></script>

</html>