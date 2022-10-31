jQuery(document).ready(function($){
    //au clic sur le btn-menu
    $('.btn-menu').click(function(){
        //j'ajoute et supprime la classe menu-collapse
        $('.menu').toggleClass('menu-collapse');
    });

    //au clic sur totop
    $('.totop').click(function(){
        $('html, body').animate({scrollTop:0},400);
    });
});

