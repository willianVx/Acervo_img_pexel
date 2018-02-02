<html>
    <head>
    <title>teste Pexel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/response.js"></script>
    <script src="js/efeitos.js"></script>
    </head>
    <body>
        <div class="col-lg-12">
        <h1>Acervo de imagens</h1>
            <?php 
                require "galeria_fotos.php";
                require "categorias.php";
                require "modal_comprar.php";
            ?>
            <div class="col-lg-2">
                <?php
                    galeria_categorias();
                ?>
            </div>
            <div class="col-lg-10 galeria_imagens">
                <div class="response"></div>
            </div>
                <div class="col-lg-12 galeria_page">
                </div>
            <footer>
                <p>by will</p>
            </footer>
        </div>
       
    </body> 
</html>