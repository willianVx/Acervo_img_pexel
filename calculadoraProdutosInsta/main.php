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

        //true para pedido com moldura e false para pedido sem moldura

        private $Moldura;

        public function setPrecoBaseAcabamento($acabamento, $tipoDeMoldura){
            foreach($this -> precoBaseAcabamento as $index => $preco){
                if($acabamento == $index){
                    //echo "O acabamento é ". $acabamento . " e seu preço base é " . $preco;
                    $this -> setPrecoBaseMoldura($acabamento, $preco, $tipoDeMoldura);
                }
            }    
        }

        public function setPrecoBaseMoldura($index, $preco, $tipoDeMoldura){
            if($index == 'meta3mm'){
                $precoBaseMoldura = 0;
                echo "O acabamento é ". $index . " e seu preço base é " . $preco . "e o preço base da moldura é ". $precoBaseMoldura;
            }
            if($index == 'meta4mm'){
                $precoBaseMoldura = 153;
            }
            else{
                $precoBaseMoldura = 160;
            }
        }

    }
?>