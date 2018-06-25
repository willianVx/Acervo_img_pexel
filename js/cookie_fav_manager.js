    /*
    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function deleteCookie(cname){
        var name = cname + "=";
        document.cookie = name + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    
    //armazena url de imagens favoritadas e as envia para o cookie
    var imagens_favoritadas = {
    
        url_imagens : [],
        indice_controle: document.cookie.split(';').length,
        
        atualiza_url_imagens: function(){
            lista_cookie_unfiltered = document.cookie.split(';');
            lista_cookie = lista_cookie_unfiltered.filter(this.filtra_cookie_fav);
            
            co = document.cookie.split(';').length;
            
            if (co > 1) {
                for (let index = 0; index < lista_cookie.length; index++) {
    
                    const element = lista_cookie[index];
                    this.url_imagens.push(element.split('='));
    
                }
            }
    
        },
        filtra_cookie_fav: function(value){

            return value.includes('fav');

        },
        set_indice_controle: function(){
    
            if (document.cookie.split(';').length > 1) {
                this.indice_controle = document.cookie.split(';').length + 1;
            }
    
        },
        add_url: function(url){

            var validate = this.validate_cookie(url);


            if (validate == -1) {

                if (this.url_imagens.length >= 40) {
                    alert("A aba favoritos está cheia!");
                    return
                }

                this.url_imagens.push(["fav_"+this.indice_controle,url]);
                this.indice_controle++;
                this.create_cookie();

            }else{

                this.delete_url(validate)

            }
            
        },
        delete_url: function(indice){

            deleteCookie(this.url_imagens[indice][0]);
            this.url_imagens.splice(indice, 1);
    
        },
        create_cookie: function(){
    
            for (let index = 0; index < this.url_imagens.length; index++) {
                const element = this.url_imagens[index];
                setCookie(element["0"], element[1], 30);
            }
    
        },
        check_cookie: function(){
    
            console.log(this.url_imagens);
            console.log(this.indice_controle);
        
        },
        validate_cookie: function(url){

            var lista_url = [];

            for (let index = 0; index < this.url_imagens.length; index++) {
                const element = this.url_imagens[index];
                lista_url.push(element[1]);
            }
            return lista_url.indexOf(url);

        }
    }
*/