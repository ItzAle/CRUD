//DOM
let itemListDOM = document.getElementById("list");
let urlInput = document.getElementById("addImage");
let titleInput = document.getElementById("addTitle");
let data = [{name: "salmon", photoUrl: "https://soycomocomo.es/media/2016/02/salmon-600.gif"}, {name: "Queso", photoUrl:"https://mencas.es/337-large_default/queso-mezcla.jpg"}]


// funcion que borra la pulsar el boton de borrar
function deleteByIndex(index){
    data.splice(index, 1);
    render();
}

// Añade un objeto al array 
const items= {
    name: "",
    photoUrl: ""
}
function addItem() {
    if ((titleInput.value != "" && titleInput.value != "name") && 
    isValidUrl(urlInput.value)) {
        let Objects = new Object();
        Objects.name = titleInput.value;
        Objects.photoUrl = urlInput.value;
        data.push(Objects);
    }
    titleInput.value = "";
    urlInput.value = "";
    render();
}

// Edita este objeto y cambia add por update 
function editByIndex(index){
    data.value = data[index];
    isEditMode = true;
    indexToEdit = index;
}
// Cambia de "Update" a "Add" de nuevo 
const toAddMode = () => {
    isEditMode = false
    submit.innerText = "Add";
    indexToEdit = null; 
};
// Boton de editar (nuevo)

//RENDER

function render() {
    let template = "";
    for (let i = 0; i < data.length; i++) {
        template += 
        `
        <li class="container" id="item-${i}">
            <div class="img_container">
                <img
                    class="img"
                    src="${data[i].photoUrl}"
                    alt="#"
                />
            </div>
            <div class="text">
                <p class="title">Title</p>
                <input
                    type="text"
                    class="name"
                    value="${data[i].name}"/>
                <i class="bi bi-trash3-fill" onclick="deleteByIndex(${i})"></i>
            </div>
        </li>`
    }
    itemListDOM.innerHTML = template;
}

// Funcion sacada de internet para solo poder poner URLS en el input de URLS
function isValidUrl(urlString) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
} 


//Funcion que abre el menu 
function showMenu(){
    document.querySelector('.navigation').classList.toggle('active')
}

// Funcion de busqueda

function search(){
    let input = document.getElementById('search_bar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('container');

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display ="none";
        }
        else{
            x[i].style.display = "list-item"
        }
    }
}

render();