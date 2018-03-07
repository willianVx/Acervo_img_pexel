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
            $contador = 1;
            foreach ($data['photos'] as $photo) {
                    echo "<a href=#>";
                        echo "<img class='galeria_imagem_pexel' data-imagem='imagem".$contador."' src='".$photo['src']['medium']."'>";
                    echo "</a>";
                $contador++;
                //echo $photo['width']." por ".$photo['height']; 
                //. galeria_preco($photo['width'], $photo['height'])
            }
    }
?>