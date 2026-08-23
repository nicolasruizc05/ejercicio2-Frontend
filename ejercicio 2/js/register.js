const irARegistro = () => {
    document.getElementById("link-a-registro").click();
};

// Dispara el clic sobre la referencia a index.html (Login)
const irALogin = () => {
    document.getElementById("link-a-login").click();
};
function guardar() {
    // Capturar los datos tal cual los ingresa el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cargo = document.getElementById("cargo").value;
    const area = document.getElementById("area").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    //  Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || cargo === "" || area === "" || correo === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Traer los usuarios que ya están en LocalStorage (si no hay ninguno, inicia [])
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   

    //Crear el objeto del nuevo usuario
    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        area: area,
        correo: correo,
        password: password
    };

    // Agregar al arreglo y guardar en LocalStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito");

    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("area").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cargo").value = "";
}

const generarInformeArea = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const contenedor = document.getElementById("resultado-reporte-area");
    const cantProductividad = document.getElementById("cant-productividad");

    // Actualiza el número de usuarios en la tarjeta
    cantProductividad.innerText = usuarios.length;

    if (usuarios.length === 0) {
        contenedor.innerHTML = `<p class="card-text"><em>No hay personal registrado para calcular métricas.</em></p>`;
        return;
    }

    // Cuenta cuántos usuarios pertenecen a cada área
    const resumenArea = usuarios.reduce((acc, user) => {
        const nombreArea = user.area || "Sin área";
        acc[nombreArea] = (acc[nombreArea] || 0) + 1;
        return acc;
    }, {});

    // Construye la vista de indicadores dinámicamente
    let htmlMétricas = `<div style="background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px;">`;
    htmlMétricas += `<p class="card-text"><strong>Distribución de personal:</strong></p><ul style="margin-left: 15px;">`;

    for (const [area, cantidad] of Object.entries(resumenArea)) {
        htmlMétricas += `<li class="card-text">${area}: <strong>${cantidad}</strong> persona(s)</li>`;
    }

    htmlMétricas += `</ul></div>`;
    contenedor.innerHTML = htmlMétricas;
    
};
