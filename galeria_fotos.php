<?php

    if (isset($_POST["categoria"])){
        $pesquisa['categoria'] = $_POST['categoria'];
        galeria_set_fotos($pesquisa['categoria']);
    }
    
    function galeria_set_fotos($pesquisa){
        header('Content-Type: text/html; charset=utf-8');
            require 'vendor/autoload.php';
            require_once 'galeria_preco_dinamico.php';
            $pexels = new \Glooby\Pexels\Client("563492ad6f91700001000001cc96a2dbc78445ba83df0b75bb703e4e");
            $response = $pexels->search($pesquisa, 40, 1);
            //echo "<pre>".$response."</pre>";
            $data = $response->json();
            $imagemP = new ImagemProporcional;
            $precoP = new CalculaPreco;
            foreach ($data['photos'] as $photo) {
                $tamanhosP = $imagemP -> TamanhosProporcionais(600, 600)[0];
                echo "<div class='galeria_imagens'>";
                echo "<div class='galeria_idividual_img'>  <a href='#'><img class='galeria_imagem_pexel' src='".$photo['src']['medium']."</a>'><div class='galeria_imagem_texto'>". galeria_preco($photo['width'], $photo['height']). "</div></div>";
                //echo $photo['width']." por ".$photo['height'];
                echo "</div>";
            }
    }
?>