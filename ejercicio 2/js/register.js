function guardar() {
    // 1. Capturar los datos tal cual los ingresa el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cargo = document.getElementById("cargo").value;
    const area = document.getElementById("area").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    // 2. Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || area === "" || correo === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // 3. Traer los usuarios que ya están en LocalStorage (si no hay ninguno, inicia [])
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 4. Validar si el correo ya existe
    const correoExiste = usuarios.some(user => user.correo === correo);
    if (correoExiste) {
        alert("Este correo ya está registrado.");
        return;
    }

    // 5. Crear el objeto del nuevo usuario
    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombre,
        apellido: apellido,
        cargo: cargo,
        area: area,
        correo: correo,
        password: password
    };

    // 6. Agregar al arreglo y guardar en LocalStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Usuario registrado con éxito!");

    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("area").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
}