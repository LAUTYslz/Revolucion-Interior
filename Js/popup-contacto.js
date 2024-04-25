function mostrarPopup(mensaje) {
    var popup = document.getElementById("popup");
    var popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = mensaje;
    popup.style.display = "block";
}

function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function enviarFormulario() {
    // Aquí puedes agregar cualquier lógica de validación adicional si es necesario

    // Simplemente mostramos el popup como ejemplo de éxito
    mostrarPopup("¡El mensaje se ha enviado correctamente!");
        
    // Retorna false para evitar que el formulario se envíe normalmente
    return true;
}

