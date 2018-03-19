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
                        ?>

                        <div class="col-lg-4 galeria_imagem_pexel_box">
                            <img class="galeria_imagem_pexel" src="<?php  echo $photo['src']['medium'] ?>" alt="Imagem do Acervo" data-imagem="imagem<?php echo $contador ?>" data-imagem-original="<?php echo $photo['src']['original'] ?>">
                            <button class="galeria_acervo_botao" type="button" class="btn btn-success" data-botao="botao<?php echo $contador  ?>">Usar imagem</button>
                        </div>
                        
                        <?php
                        //echo "<img class='galeria_imagem_pexel' data-imagem='imagem".$contador."' src='".$photo['src']['medium']."'>";
                        //echo "<div class='galeria_preco' data-preco='texto".$contador."'>".galeria_preco($photo['width'], $photo['height'])."</div>";
                $contador++;
                //echo $photo['width']." por ".$photo['height']; 
                //. galeria_preco($photo['width'], $photo['height'])
            }
    }
?>