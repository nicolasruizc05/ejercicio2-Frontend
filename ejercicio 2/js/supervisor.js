// Función para alternar vistas
function cargarLideres() {
    // Leemos la lista global "usuarios" que guardó el registro
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var comboLideres = document.getElementById("lider");

    // Limpiamos el select y dejamos la opción inicial
    comboLideres.innerHTML = '<option value="">Selecciona un líder...</option>';

    // Recorremos la lista global y agregamos cada usuario como una opción
    for (var i = 0; i < usuarios.length; i++) {
        var nombreCompleto = usuarios[i].nombre + " " + usuarios[i].apellido;
        
        comboLideres.innerHTML += '<option value="' + nombreCompleto + '">' + 
        nombreCompleto + ' (' + usuarios[i].cargo + ')' + 
         '</option>';
    }
}
function mostrarEquipo(opcion) {
    var formulario = document.getElementById("vista-crear-equipo");
    var tablaEquipos = document.getElementById("vista-ver-equipo");

    if (opcion === 'crear') {
        formulario.style.display = "block";
        tablaEquipos.style.display = "none";

        alert("Equipo creado")

        cargarLideres();

    } else if (opcion === 'ver') {
        formulario.style.display = "none";
        tablaEquipos.style.display = "block"; // Despliega la tabla
        mostrarEquipos();                     // Carga y pinta los datos
    }
}

// Función que pinta los datos en la tabla
function mostrarEquipos() {
    var equipos = JSON.parse(localStorage.getItem("equipos")) || [];
    var tabla = document.getElementById("tabla-equipos");

    tabla.innerHTML = "";

    if (equipos.length === 0) {
        tabla.innerHTML = "<tr><td colspan='2'>No hay equipos registrados.</td></tr>";
        return;

    }

    // Ciclo FOR para renderizar cada fila
    for (var i = 0; i < equipos.length; i++) {
        tabla.innerHTML += "<tr>" +
            "<td>" + equipos[i].nombre + "</td>" +
            "<td>" + equipos[i].lider + "</td>" +
            "</tr>";
    }
}