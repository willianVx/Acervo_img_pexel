<?php 
/**
 *Author: Willian de Oliveira
 * Plugin Name: Instaarts - Pedidos personalizados
 * Plugin URI: http://instaarts.com.br
 * Description: Esse plugin implementa a ferramenta da Adobe (Creative SDK) para edição de imagens, mais menu onde o usuário pode fazer seu pedido personalizado escolhendo tamanho, acabamento e moldura. 
 * Author URI: Willian De Oliveira 
 * Version: 1.3.6 BETA
 * Licence: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// carrega acervo na página selecionada

function acervo_init(){
    if(is_page($page = 'Acervo de imagens')){
        echo "oi!";
    }
}

?>