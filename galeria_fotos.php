<?php
    if (isset($_POST["categoria"])){
        $pesquisa['categoria'] = $_POST['categoria'];
        $pagina = $_POST['pagina'];
        galeria_set_fotos($pesquisa['categoria'], $pagina);
    }
    
    function galeria_set_fotos($pesquisa, $pagina){
        header('Content-Type: text/html; charset=utf-8');
            require 'vendor/autoload.php';
            require_once 'galeria_preco_dinamico.php';
            $pexels = new \Glooby\Pexels\Client("563492ad6f91700001000001cc96a2dbc78445ba83df0b75bb703e4e");
            $response = $pexels->search($pesquisa, 39, $pagina);
            //echo "<pre>".$response."</pre>";
            $data = $response->json();
            //$contador = 1;

            print json_encode($data);
    }
?>