// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Poner el año actual automáticamente en el footer
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Portafolio cargado y listo 🚀");
}); 