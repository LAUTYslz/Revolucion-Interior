var BotonesDeApertura = document.querySelectorAll('.ver-mas');

BotonesDeApertura.forEach(function(button){
    button.addEventListener('click',function(){
     // Obtener el ID del popup objetivo desde el atributo data-target
    var targetId = button.getAttribute('data-target');
    // Obtener el popup objetivo por su ID
    var targetPopup = document.getElementById(targetId);
    // Mostrar el popup objetivo cambiando el estilo de display a "flex"
    // targetPopup.style.display = 'flex';
    
    // Agregar la clase "open" al popup para mostrarlo gradualmente
    targetPopup.classList.add('open');
    })
})
  
var BotonesDeCierre = document.querySelectorAll('.cerrar-popups');

BotonesDeCierre.forEach(function(button){
    button.addEventListener('click', function(){
        var popups = document.querySelectorAll('.servicios-popups');
        popups.forEach(function(popup){
            // popup.style.display= 'none';
            // Remover la clase "open" para ocultar gradualmente el popup
            popup.classList.remove('open');
        });
    });
});
