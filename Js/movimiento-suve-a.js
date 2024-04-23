    // Espera a que el documento esté completamente cargado
    document.addEventListener("DOMContentLoaded", function() {
        // Selecciona todos los enlaces que apuntan a index.html#nosotros
        var links = document.querySelectorAll('a[href="index.html#nosotros"]');
        
        // Recorre cada enlace y agrega un event listener
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Evita que el enlace funcione de forma predeterminada
                
                // Obtiene la posición (offset) de la sección "nosotros"
                var targetElement = document.getElementById("nosotros");
                var targetOffset = targetElement.offsetTop;

                // Realiza el desplazamiento suave hasta la sección
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth' // Hace que el desplazamiento sea suave
                });
            });
        });
    });