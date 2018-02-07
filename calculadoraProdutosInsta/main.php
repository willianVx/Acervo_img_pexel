<?php
    class CalculaPreco
    {
        private $precoBaseAcabamento = array(
        'meta7mm' => 2467, 
        'meta5mm' => 1771,
        'meta4mm' => 1392,
        'meta3mm' => 1265, 
        'acm5mm' => 1518, 
        'uvPS' => 1265, 
        'uvACM' => 1553, 
        'papelAlgodao' => 552, 
        'papelFosco' => 714,
        'papelAcetinato' => 460,
        'papelBrilhante' => 437,
        'papelCanvas' => 633,
        );

        private $precoBaseMoldura;

        private $tamanhoX;
        private $tamanhoY;

        public function setPrecoBaseAcabamento($acabamento, $tipoDeMoldura){
            foreach($this -> precoBaseAcabamento as $index => $preco){
                if($acabamento == $index){
                    //echo "O acabamento é ". $acabamento . " e seu preço base é " . $preco;
                    $this -> setPrecoBaseMoldura($acabamento, $preco, $tipoDeMoldura);
                }
            }    
        }

        public function setPrecoBaseMoldura($index, $preco, $tipoDeMoldura){

            if($index == 'papelAlgodao' || $index == 'papelFosco' || $index == 'papelAcetinato' || $index == 'papelBrilhante'){
                $tipoDeMoldura = 0;
                $precoBaseMoldura = 0;
            } 
            if($tipoDeMoldura == 1){
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 0;
                    //echo "O acabamento é ". $index . " e seu preço base é " . $preco . "e o preço base da moldura é ". $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 153;
                }
                else{
                    $precoBaseMoldura = 160;
                }

            }  

            if($tipoDeMoldura == 2){
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 160;
                    //echo "O acabamento é ". $index . " e seu preço base é " . $preco . "e o preço base da moldura é ". $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 345;
                }
                else{
                    $precoBaseMoldura = 320;
                }

            }

            if($tipoDeMoldura == 3){
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 320;
                    //echo "O acabamento é ". $index . " e seu preço base é " . $preco . "e o preço base da moldura é ". $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 506;
                }
                else{
                    $precoBaseMoldura = 480;
                }

            }
            
        }

        public function setTamanho($tamanhoX, $tamanhoY){

            if($tamanhoX < 10 || $tamanhoX > 100 || $tamanhoY < 10 || $tamanhoY > 200){
                //echo "tamanho invalido.";
            }
            else{
                //echo "Voce escolheu os tamanhos ".$tamanhoX. " cm por ".$tamanhoY." cm";
            }

        }

    }
?>