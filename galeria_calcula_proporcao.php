<?php 
        function define_proporcao($largura,$altura){
            $proporcao;
            if($largura > $altura){
                $proporcao = $largura / $altura;
            }
            if($largura < $altura){
                $proporcao = $altura / $largura;
            }
            else{
                $proporcao = $largura / $altura;
            }
            define_tamanho_minimo($proporcao);
        }

        function define_tamanho_minimo($proporcao){
            $tamanhoYn;
            $tamanhoXn = 20;
            $tamanhoYn = $tamanhoXn / $proporcao;
            
            echo "Tamanho a partir de ".$tamanhoXn." por ".round($tamanhoYn);
        }
?>  