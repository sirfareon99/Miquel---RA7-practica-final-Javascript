// repaso.js
document.addEventListener("DOMContentLoaded", function() {

    // Interactividad 1: Arrays
    let frutas = ["manzana", "plátano", "naranja"];
    const btnAgregar = document.getElementById("btnAgregar");
    const listaFrutas = document.getElementById("listaFrutas");

    if (btnAgregar) {
        btnAgregar.addEventListener("click", function() {
            frutas.push("fresa");
            listaFrutas.textContent = frutas.join(", ");
            alert("¡Añadida fresa!");
        });
    }

    // Interactividad 2: DOM
    const btnCambiarTexto = document.getElementById("btnCambiarTexto");
    if (btnCambiarTexto) {
        btnCambiarTexto.addEventListener("click", function() {
            const header = document.querySelector("header h1");
            header.textContent = "¡Repaso JavaScript cambiado!";
            header.style.color = "#ffeb3b";
        });
    }

    // Interactividad 3: Eventos
    const btnSaludar = document.getElementById("btnSaludar");
    const mensajeEvento = document.getElementById("mensajeEvento");

    if (btnSaludar) {
        btnSaludar.addEventListener("click", function() {
            mensajeEvento.textContent = "¡Hola! Has hecho click correctamente!";
            mensajeEvento.style.color = "green";
        });
    }

    // Interactividad 4: Formulario
    const btnEnviar = document.getElementById("btnEnviar");
    const resultadoFormulario = document.getElementById("resultadoFormulario");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", function() {
            const nombre = document.getElementById("nombreInput").value;
            
            if (nombre.trim() !== "") {
                resultadoFormulario.textContent = "Hola " + nombre + ", ¡buen examen!";
                resultadoFormulario.style.color = "blue";
            } else {
                resultadoFormulario.textContent = "Por favor escribe tu nombre";
                resultadoFormulario.style.color = "red";
            }
        });
    }

    // Botón volver arriba
    const btnVolverArriba = document.getElementById("btnVolverArriba");
    if (btnVolverArriba) {
        btnVolverArriba.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Mensaje de bienvenida (opcional, fácil de borrar)
    console.log("Página de repaso cargada correctamente - Listo para el examen");
});