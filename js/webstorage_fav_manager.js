/*
*
*   Armazena dados para favoritar imagens com web storage API
*
*
*
*
*/

//Armazena lista de imagens favoritas que estão no webstorage // ** // tem os métodos do localStorage
var fav = function(){
    this.url_imagens = [];
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key) & key.includes('fav')) {
            this.url_imagens.push([key, localStorage[key]]);
        }
    }
    return this.url_imagens;
}
fav.prototype = window.localStorage;

//Adiciona uma nova imagem aos favoritos 
var add_fav = function(url){
    if (filtro(url) == -1) {
        var indice = 'fav' + this.url_imagens.length++;
        fav.prototype.setItem(indice, url);
    }else{
        delete_fav(fav()[filtro(url)]["0"]);
        return
    }
}
add_fav.prototype = new fav();

//Deleta a imagem dos favoritos
var delete_fav = function(indice){
    fav.prototype.removeItem(indice);
}
delete_fav.prototype = new fav();

//compara a imagem a ser favoritada com as que estão salvas no webstorage
function filtro(url){
    var lista_url = [];
    for (let index = 0; index < fav().length; index++) {
        const element = fav()[index];
        lista_url.push(element[1]);
    }
    return lista_url.indexOf(url);
}