<?php 
                    require "galeria_fotos.php";
                    require "categorias.php";
                    require "modal_comprar.php";
                    require "calculadoraProdutosInsta/main.php";
                    require "TamanhosProporcionais/imagemProporcional.php";
 ?>
 
<html>
    <head>
    <title>teste Pexel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
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
    
    <div class="col-lg-12">
            <h1>Acervo de imagens</h1>
            
                <div class="col-lg-2">
                    <?php
                        galeria_categorias();
                    ?>
                    <div class="categorias_menu_mobile">
                        <img src="img/mobile_menu.png" alt="menu">
                    </div>
                    
                </div>

                <div class="container-fluid">
                    <div class="response galeria_response_img col-lg-12"></div>
                </div>
    </div>
        
    

    </body>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/response.js"></script>
    <script src="js/efeitos.js"></script>

</html>