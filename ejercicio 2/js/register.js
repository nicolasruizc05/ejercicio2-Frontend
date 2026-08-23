// ir al login
const vuelvesesion = () => {
    document.getElementById("login").click();
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

    // Traer los usuarios que ya están en LocalStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   

    //Crear el objeto del nuevo usuario
    const nuevoUsuario = {
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