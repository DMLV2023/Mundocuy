// script.js

$(document).ready(function() {
    // Agregar desplazamiento suave a todos los enlaces
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Otras funciones aquí...
});

