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
    render();
    }
}

// Edita este objeto y cambia add por update 
// function editByIndex(index){
//     data.value = data[index];
//     isEditMode = true;
//     indexToEdit = index;
//     submit.innerText = "update";
// }
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
        `<li class="container" id="item-${i}">
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
                    value="${data[i].name}"
                    readonly="true"
                />
                <i class="bi bi-trash3-fill" onclick="deleteByIndex(${i})"></i>
                <i class="bi bi-pencil" onclick="editByIndex()"></i>
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

function showMenu(){
    document.querySelector('.navigation').classList.toggle('active')
}


// Intento de barra de busqueda
// let input, filter , ul , li, a , i, txtValue;

// input = document.getElementById('searchbar');
// filter = input.value.toUpperCase();
// ul = document.getElementById("list");
// li = ul.getElementsByTagName('li');

// for(i = 0; < li.length; i++){
//     a= li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if(txtValue.toUpperCase().indexOf(filter)>-1){
//         li[i].style.display = "";
//     }else{
//         li[i].style.display = "none";
//     }
// }


render();

