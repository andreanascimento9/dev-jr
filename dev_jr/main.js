$(document).ready(function() {
    $("#drop").click(function() {
        $("#drop-menu").show();
        $("#triangulo").show();
        $("#bg-drop-menu").show();
        //bg-drop-menu

    });
    $("#close").click(function() {
        $("#drop-menu").hide();
        $("#triangulo").hide();
        $("#bg-drop-menu").hide();

    });
    $("#close").click(function() {
        $("#drop-menu").hide();
        $("#triangulo").hide();

    });
    $('#buscar').click(function() {
        $("#form_buscar").slideDown();
        $("#close_form").slideDown();

    });
    //mobile
    $('#drop-search').click(function() {
        $("#form_buscar_mobile").slideDown();
        $("#close_form_mobile").slideDown();
    });
    $('#close_form_mobile').click(function() {
        $("#form_buscar").slideUp();
        $("#close_form").slideUp();
    });
    //mobile
    $('#drop_mobile').click(function() {
        $(".main-mobile").hide();
        $("footer").hide();
        $("header").hide();
        $(".drop-menu-mobile").slideDown();
    });

    $('#close_menu_mobile').click(function() {
        $(".drop-menu-mobile").hide();
        $("header").show();
        $(".main-mobile").show();
        $("footer").show();

    });

});
var count = 0;

function comprar(id) {
    var btn1 = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");

    var btnm1 = document.getElementById("m1");
    var btnm2 = document.getElementById("m2");
    var btnm3 = document.getElementById("m3");

    var modal = document.getElementById("modal");
    var modal_mobile = document.getElementById("modal-mobile");

    var close = document.getElementById("close-pop");
    var close_mobile = document.getElementById("close-pop-mobile");

    var carrinho = document.getElementById("carrinho");
    var carrinho_menu = document.getElementById("carrinho-menu");
    var carrinho_menu_drop = document.getElementById("carrinho-menu-drop");


    if (id == "1") {
        count++

        btn1.style.background = "#084154";
        btn1.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:1px; right:4px;' src=\"vagadev-jr-main/img/mario.png\">";
        modal.style.display = "block";

        close.onclick = function() {
            modal.style.display = "none";

        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";

            }
        }



    } else if (id == "2") {
        count++;
        btn2.style.background = "#084154";
        btn2.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:1px; right:4px' src=\"vagadev-jr-main/img/mario.png\">";
        modal.style.display = "block";
        close.onclick = function() {
            modal.style.display = "none";

        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";

            }
        }
    } else if (id == "3") {
        count++;

        btn3.style.background = "#084154";
        btn3.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:1px; right:4px' src=\"vagadev-jr-main/img/mario.png\">";
        modal.style.display = "block";
        close.onclick = function() {
            modal.style.display = "none";

        }
        window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";

                }
            }
            //MOBILE
    } else if (id == "m1") {
        count++;

        btnm1.style.background = "#084154";
        btnm1.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:35px; left:12rem; width:45px' src=\"vagadev-jr-main/img/mario.png\">";
        modal_mobile.style.display = "block";
        close_mobile.onclick = function() {
            modal_mobile.style.display = "none";

        }
        window.onclick = function(event) {
            if (event.target == modal_mobile) {
                modal_mobile.style.display = "none";

            }
        }
    } else if (id == "m2") {
        count++;

        btnm2.style.background = "#084154";
        btnm2.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:35px; left:12rem; width:45px' src=\"vagadev-jr-main/img/mario.png\">";
        modal_mobile.style.display = "block";
        close_mobile.onclick = function() {
            modal_mobile.style.display = "none";

        }
        window.onclick = function(event) {
            if (event.target == modal_mobile) {
                modal_mobile.style.display = "none";

            }
        }
    } else if (id == "m3") {
        count++;

        btnm3.style.background = "#084154";
        btnm3.innerHTML = "<g style='float: left'>COMPRADO!!</g> <img style='position:absolute; bottom:35px; left:12rem; width:45px' src=\"vagadev-jr-main/img/mario.png\">";
        modal_mobile.style.display = "block";
        close_mobile.onclick = function() {
            modal_mobile.style.display = "none";

        }
        window.onclick = function(event) {
            if (event.target == modal_mobile) {
                modal_mobile.style.display = "none";

            }
        }
    }

    carrinho.innerHTML = count;
    carrinho_menu.innerHTML = count;
    carrinho_menu_drop.innerHTML = count;
    //clicked btn 1 btn m1


}