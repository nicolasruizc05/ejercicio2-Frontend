// Función para alternar vistas
function cargarLideres() {
    // Leemos la lista global usuarios que guardó el registro
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
function verEquipo(opcion) {
    var formulario = document.getElementById("vista-crear-equipo");
    var tablaEquipos = document.getElementById("vista-ver-equipo");

    if (opcion === 'crear') {
        formulario.style.display = "block";
        tablaEquipos.style.display = "none";

        cargarLideres();

    } else if (opcion === 'ver') {
        formulario.style.display = "none";
        tablaEquipos.style.display = "block"; 
        mostrarEquipos();                     
    }
}

function guardar(){
    var nombreEquipo =document.getElementById("nombre").value;
    var liderEquipo =document.getElementById("lider").value;

    if(nombreEquipo === "" || liderEquipo=== ""){
        alert("porfavor completa todos los campos ");
        return;

    }

    var equipos = JSON.parse(localStorage.getItem("equipos")) || [];
    var nuevoEquipo ={
        id:Date.now(),
        nombre:nombreEquipo,
        lider: liderEquipo

    };

    equipos.push(nuevoEquipo);
    localStorage.setItem("equipos", JSON.stringify(equipos));

    alert("equipo guardado con exito ")

    document.getElementById("nombre").value="";
    document.getElementById("lider").value="";
    document.getElementById("vista-crear-equipo").style.display = "none";

    
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

    // para renderizar cada fila
    for (var i = 0; i < equipos.length; i++) {
        tabla.innerHTML += "<tr>" +
            "<td>" + equipos[i].nombre + "</td>" +
            "<td>" + equipos[i].lider + "</td>" +
            "</tr>";
    }
}

// Cargar la lista global "usuarios" en el select de responsables
function cargarResponsables() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var combo = document.getElementById("responsable-actividad");

    combo.innerHTML = '<option value="">Selecciona el responsable...</option>';

    for (var i = 0; i < usuarios.length; i++) {
        var nombreCompleto = usuarios[i].nombre + " " + usuarios[i].apellido;
        combo.innerHTML += '<option value="' + nombreCompleto + '">' + 
                           nombreCompleto + ' (' + usuarios[i].cargo + ')' + 
                           '</option>';
    }
}

// Alternar vistas
function mostrarActividad(opcion) {
    var formulario = document.getElementById("vista-crear-actividad");
    var tabla = document.getElementById("vista-ver-actividad");

    if (opcion === 'crear') {
        formulario.style.display = "block";
        tabla.style.display = "none";
        cargarResponsables(); // Carga las opciones de usuarios en el select
    } else if (opcion === 'ver') {
        formulario.style.display = "none";
        tabla.style.display = "block";
        mostrarActividades(); // Pinta la lista
    }
}

// Guardar la actividad
function guardarActividad() {
    var titulo = document.getElementById("titulo-actividad").value;
    var descripcion = document.getElementById("descripcion-actividad").value;
    var responsable = document.getElementById("responsable-actividad").value;
    var fecha = document.getElementById("fecha-limite").value;

    if (titulo === "" || responsable === "" || fecha === "") {
        alert("Por favor completa los campos obligatorios.");
        return;
    }

    var actividades = JSON.parse(localStorage.getItem("actividades")) || [];

    var nuevaActividad = {
        id: Date.now(),
        titulo: titulo,
        descripcion: descripcion,
        responsable: responsable,
        fecha: fecha,
        estado: "Pendiente"
    };

    actividades.push(nuevaActividad);
    localStorage.setItem("actividades", JSON.stringify(actividades));

    alert("¡Actividad asignada con éxito!");

    // Limpiar campos y ocultar
    document.getElementById("titulo-actividad").value = "";
    document.getElementById("descripcion-actividad").value = "";
    document.getElementById("responsable-actividad").value = "";
    document.getElementById("fecha-limite").value = "";
    document.getElementById("vista-crear-actividad").style.display = "none";
}

// Mostrar actividades en la tabla
function mostrarActividades() {
    var actividades = JSON.parse(localStorage.getItem("actividades")) || [];
    var tabla = document.getElementById("tabla-actividades");

    tabla.innerHTML = "";

    if (actividades.length === 0) {
        tabla.innerHTML = "<tr><td colspan='5'>No hay actividades registradas.</td></tr>";
        return;
    }

    for (var i = 0; i < actividades.length; i++) {
        tabla.innerHTML += "<tr>" +
            "<td>" + actividades[i].titulo + "</td>" +
            "<td>" + actividades[i].descripcion + "</td>" +
            "<td>" + actividades[i].responsable + "</td>" +
            "<td>" + actividades[i].fecha + "</td>" +
            "<td>" + actividades[i].estado + "</td>" +
            "</tr>";
    }
}

// Función para generar indicadores en la tarjeta "Reportes del Área"
function generarInformeArea() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var equipos = JSON.parse(localStorage.getItem("equipos")) || [];
    var actividades = JSON.parse(localStorage.getItem("actividades")) || [];

    var contenedor = document.getElementById("resultado-reporte-area");
    var cantProductividad = document.getElementById("cant-productividad");

    if (cantProductividad) {
        cantProductividad.innerText = usuarios.length;
    }

    if (contenedor) {
        var totalPendientes = 0;
        for (var i = 0; i < actividades.length; i++) {
            if (actividades[i].estado === "Pendiente") {
                totalPendientes++;
            }
        }

        contenedor.innerHTML = 
            "<div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; margin-top: 10px;'>" +
                "<p class='card-text'><strong>Resumen de Indicadores:</strong></p>" +
                "<ul style='margin-left: 15px; text-align: left;' class='card-text'>" +
                    "<li>Total usuarios: <strong>" + usuarios.length + "</strong></li>" +
                    "<li>Equipos armados: <strong>" + equipos.length + "</strong></li>" +
                    "<li>Actividades asignadas: <strong>" + actividades.length + "</strong></li>" +
                    "<li>Actividades pendientes: <strong>" + totalPendientes + "</strong></li>" +
                "</ul>" +
            "</div>";
    }
}