

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
    document.getElementById("cerrar").click()
    console.log=("Sesion cerrada correctamente")
}