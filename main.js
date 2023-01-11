// STATE
const data = []; // RAM 
let isEditMode = false;
let indexToEdit = null;
let newItem = document.getElementById("input");
let listDOM = document.getElementById("listDOM")
let submit = document.getElementById("submit")

//LOGICA 

function deleteByIndex(index){
    data.splice(index, 1);
    render();
}


const addItem = () => {
    if(!isEditMode) data.push(newItem.value);
    if(isEditMode) data[indexToEdit] = newItem.value;
    toAddMode();
    newItem.value= "";
    render()
}

function editByIndex(index){
    newItem.value = data[index];
    isEditMode = true;
    indexToEdit = index;
    submit.innerText = "update";
    console.log(indexToEdit)
}

const toAddMode = () => {
    isEditMode = false
    submit.innerText = "Add";
    indexToEdit = null; 
};

//RENDER

const render = () =>{
    let template = "";
    data.forEach((item, index) => (template +=`<li>${item}</li><button onclick="deleteByIndex(${index})">Delete</button><button onclick="editByIndex(${index})">Edit</button>`)); 

    listDOM.innerHTML = template;
};

render();