// function agregarImg(){
//     const imagen = "IMG/mascota1.jpg";
//     const contenedor = document.getElementById("0");
//     contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`);
// }

let imagenes = [];

let vControladora = false;

function llenarArray(){
    for(let i = 1; i <= 20; i++){
        imagenes.push(`IMG/mascota${i}.jpg`);
    }
}

llenarArray();
function agregarImg(){

    if(vControladora == false){
        for(let i = 0; i < imagenes.length; i++){
            let contenedor = document.getElementById(`${i}`);
            contenedor.insertAdjacentHTML("beforeend", `<img src=${imagenes[i]} alt="imagenes" class="imgBody">`);
        }
        vControladora = true;
    } 
}

function quitarImg(){
    if(vControladora == true){
        for(let i = 0; i <= 19; i++){
            let contenedor = document.getElementById(`${i}`);  
            contenedor.childNodes[0].remove();
        }
        vControladora = false;
    }
}