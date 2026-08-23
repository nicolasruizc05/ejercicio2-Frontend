const cerrarSesion=()=>{
    document.getElementById("cerrar").click()
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

}
