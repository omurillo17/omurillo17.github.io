// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Poner el año actual automáticamente en el footer
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Portafolio cargado y listo 🚀");
}); 

function copiarCorreo(event) {
    event.preventDefault();
    
    const correo = "oscxrma@gmail.com";
    const boton = document.getElementById("btn-email");
    const textoOriginal = boton.innerHTML;

    navigator.clipboard.writeText(correo).then(() => {
        boton.innerHTML = "¡Copiado!";
        boton.style.backgroundColor = "#22c55e";

        setTimeout(() => {
            boton.innerHTML = textoOriginal;
            boton.style.backgroundColor = "";
            booton.innerHTML = "Envíame un correo ";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}