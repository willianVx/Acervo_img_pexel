<?php
    require_once "calculadoraProdutosInsta/main.php";
    require_once "TamanhosProporcionais/imagemProporcional.php";

    //recebe dois valores inteiros (tamanho da imagem em pixel) e retorna o tamanho proporcional em cm 

    function galeria_preco($n1, $n2){

        $imagem = new ImagemProporcional;
        $calculo = new CalculaPreco;

        // o indice indica qual tamanho proporcional irá retornar 

        $novaImagem = $imagem -> TamanhosProporcionais($n1, $n2)[0];

        // faz o calculo de acordo com o acabemento, tipo de moldura e tamanhos x e y. 

        return $calculo -> formula_pedido_instaarts('meta5mm', 0, 20, $novaImagem);

    }
?>