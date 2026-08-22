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