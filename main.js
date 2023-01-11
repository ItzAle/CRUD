// STATE
const data = ["patata" , "patata" ,"patata" ,"patata" , "patata" ,"patata" , ]; // RAM 
let isEditMode = false;
let indexToEdit = null;
let newItem = document.getElementById("input");
let listDOM = document.getElementById("listDOM")
let submit = document.getElementById("submit")

//LOGICA 

// Borra la pulsar el boton
function deleteByIndex(index){
    data.splice(index, 1);
    render();
}

// Añade un objeto al array 
const addItem = () => {
    if(!isEditMode) data.push(newItem.value);
    if(isEditMode) data[indexToEdit] = newItem.value;
    toAddMode();
    newItem.value= "";
    render()
}
// Edita este objeto y cambia add por update 
function editByIndex(index){
    newItem.value = data[index];
    isEditMode = true;
    indexToEdit = index;
    submit.innerText = "update";
}
// Cambia de "Update" a "Add" de nuevo 
const toAddMode = () => {
    isEditMode = false
    submit.innerText = "Add";
    indexToEdit = null; 
};

//RENDER

const render = () =>{
    let template = "";
    data.forEach((item, index) => (template +=`<div class="template">
    <img id="img" src="./img/imagen.png" />
    <li>${item}</li>
    <div class="buttons">
    <i class="bi bi-trash3-fill" onclick="deleteByIndex(${index})"></i
    ><i class="bi bi-pencil" onclick="editByIndex(${index})"></i>
  </div>
  </div>`)); 

    listDOM.innerHTML = template;
};

render();