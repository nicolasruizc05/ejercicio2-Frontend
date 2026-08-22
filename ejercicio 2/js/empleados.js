// Ejecutamos la función directamente al cargar el script
verificarSesionEmpleado();

function verificarSesionEmpleado() {
    // Leemos la sesión actual guardada al iniciar sesión
    var sesionActiva = localStorage.getItem("sesionActiva");

    var empleado = JSON.parse(sesionActiva);

    // Validamos que su rol o cargo sea Empleado
    if (empleado.cargo === "Empleado") {
        mostrarDatosEmpleado(empleado);
    } else {
        alert("No tienes permisos para ver esta sección.");
    }

    // Activamos el botón de salir de forma directa
    var botonSalir = document.getElementById("btnSalir");
    if (botonSalir) {
        botonSalir.onclick = function() {
            cerrarSesion();
        };
    }
}

function mostrarDatosEmpleado(empleado) {
    var cajaDatos = document.getElementById("datos-empleado");

    // Pintamos la información de forma directa
    cajaDatos.innerHTML = 
        "<p><strong>Nombre:</strong> " + empleado.nombre + " " + empleado.apellido + "</p>" +
        "<p><strong>Área:</strong> " + empleado.area + "</p>" +
        "<p><strong>Correo:</strong> " + empleado.correo + "</p>" +
        "<p><strong>Cargo:</strong> " + empleado.cargo + "</p>";
}

function cerrarSesion() {
    localStorage.removeItem("sesionActiva");
    alert("Has cerrado sesión con éxito.");
    location.reload();
}