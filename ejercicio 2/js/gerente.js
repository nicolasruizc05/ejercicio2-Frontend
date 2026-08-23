let usuarioL=JSON.parse(localStorage.getItem("usuarioLogeado"))
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let letra=document.getElementById("userInitial")
    letra.textContent=usuarioL.nombre[0].toUpperCase()

    let user=document.getElementById("userName")
    user.textContent=usuarioL.nombre

    let post=document.getElementById("cargoEmpleado")
    post.textContent=usuarioL.cargo
    

const cerrarSesion=()=>{
    document.getElementById("cerrar").click()
    console.log=("Sesion cerrada correctamente")
}
const mostrarRC=()=>{
    let contenedor_img1=document.getElementById("contenedor-img1")
    contenedor_img1.innerHTML=" "
    let imagen = document.createElement("img")
    imagen.src = "img/reporteContables.png"
    imagen.style.height="500px"
    imagen.style.width="500px"
    contenedor_img1.appendChild(imagen)
}
const mostrarRA=()=>{
    let contenedor_img2=document.getElementById("contenedor-img2")
    contenedor_img2.innerHTML=" "
    let imagen = document.createElement("img")
    imagen.src = "img/reporteActividades.png"
    imagen.style.height="500px"
    imagen.style.width="500px"
    contenedor_img2.appendChild(imagen)
}
const generar=()=>{
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML= ""
    let tabla = document.createElement("table")
    tabla.style.border="1px solid #2B3A67"
    tabla.style.borderCollapse="collapse"
    tabla.style.width="100%"
    tabla.style.margin
    let encabezado = document.createElement("thead")
    encabezado.style.background ="#2B3A67"
    encabezado.style.color="#F6F4EE"
    let filaencabezado = document.createElement("tr")
    filaencabezado.style.border="1px solid #2B3A67"
    let celda1encabezado=document.createElement("th")
    celda1encabezado.textContent="Nombre"
    celda1encabezado.style.border="1px solid #2B3A67"
    let celda2encabezado=document.createElement("th")
    celda2encabezado.textContent="Apellido"
    celda2encabezado.style.border="1px solid #2B3A67"
    let celda3encabezado=document.createElement("th")
    celda3encabezado.textContent="Cargo"
    celda3encabezado.style.border="1px solid #2B3A67"
    let celda4encabezado=document.createElement("th")
    celda4encabezado.textContent="Area"
    celda4encabezado.style.border="1px solid #2B3A67"
    let celda5encabezado=document.createElement("th")
    celda5encabezado.textContent="Correo"
    celda5encabezado.style.border="1px solid #2B3A67"
    filaencabezado.appendChild(celda1encabezado)
    filaencabezado.appendChild(celda2encabezado)
    filaencabezado.appendChild(celda3encabezado)
    filaencabezado.appendChild(celda4encabezado)
    filaencabezado.appendChild(celda5encabezado)
    encabezado.appendChild(filaencabezado)
    tabla.appendChild(encabezado)
    for(let i=0; i<usuarios.length; i++){
        let fila = document.createElement("tr")
        fila.style.border="1px solid #2B3A67"
       let celda1 =document.createElement("td")
       celda1.textContent=usuarios[i].nombre
       celda1.style.border="1px solid #2B3A67"
       let celda2=document.createElement("td")
       celda2.textContent=usuarios[i].apellido
       celda2.style.border="1px solid #2B3A67"
       let celda3=document.createElement("td")
       celda3.textContent=usuarios[i].cargo
       celda3.style.border="1px solid #2B3A67"
       let celda4 = document.createElement("td")
       celda4.textContent=usuarios[i].area
       celda4.style.border="1px solid #2B3A67"
       let celda5 = document.createElement("td")
       celda5. textContent = usuarios[i].correo
       celda5.style.border="1px solid #2B3A67"
       fila.appendChild(celda1)
       fila.appendChild(celda2)
       fila.appendChild(celda3)
       fila.appendChild(celda4)
       fila.appendChild(celda5)
       tabla.appendChild(fila)
    }
    contenedor.appendChild(tabla)
}
