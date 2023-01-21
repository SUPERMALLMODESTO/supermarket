let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripcionSeleccionada = document.getElementById("descripcion");
let precioSelecionado = document.getElementById("precio");

//Función que carga la info del item selecionado
function carga(item){
    quitarBordes();
    mostrador.style.width ="60%"
    seleccion.style.width ="40%"
    seleccion.style.opacity ="1"
    item.style.border ="2px solid red";

    imgSeleccionada.src = item.getElementBytagname("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementBytagname("p")[0]

    descripcionSeleccionada.innerHTML = "Descripccion del modelo";

    precioSelecionado.innerHTML = item.getElementBytagname("span")[0].innerHTML
}
function quitarBordes(){
    var items = document.getElementsByClassName("item")
    for(i=0;i < items.length; i++){
        items[i].style.border = "none"
    }
    
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    mostrador.style.opacity = "0";
    quitarBordes();
}
