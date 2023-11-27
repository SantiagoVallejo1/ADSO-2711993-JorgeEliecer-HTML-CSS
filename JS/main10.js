function agregarImg(){
    const imagen = "IMG/mascota1.jpg";
    const contenedor = document.getElementById("0");
    contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`)
}