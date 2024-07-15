let inputValue = document.querySelector(".inputValue");
let inputBtn = document.querySelector(".inputBtn");
let warning = document.querySelector(".warning");
let itemBox = document.querySelector(".itemBox");


const todoarr = [];
let tasks;
let editList;
let itemListArr;

inputValue.addEventListener("keyup", (e) =>{
    e.preventDefault();
    if(e.keyCode === 13){
        inputBtn.click();
    }
})
inputBtn.addEventListener("click",() =>{
    if(!inputValue.value){
        warning.style.display = "block";
    }
    else if(inputBtn.innerHTML == "Add"){
        warning.style.display = "none";
        todoarr.push(inputValue.value);
        inputValue.value = "";
        displayList();
    }
    else if(inputBtn.innerHTML == "Update"){
        todoarr[editList] = inputValue.value;
        warning.style.display = "none";
        inputValue.value = "";
        inputBtn.innerHTML = "Add";
        inputBtn.classList.remove("updateBtn");
        displayList();
    }
    
})

const displayList = () => {
    itemBox.innerHTML = ""
    todoarr.map((item) =>{
        tasks = `<i class="fa-regular fa-circle unchecked"></i>
        <li class="itemList">${item}</li>
        <i class="fa-solid fa-pen-to-square editBtn"></i>
        <i class="fa-solid fa-trash-can deleteBtn"></i>` 
        itemBox.innerHTML += tasks;
    })
    
   

    let deleteBtn = document.querySelectorAll(".deleteBtn");
    let deleteArr = Array.from(deleteBtn);
    deleteArr.map((deleteItem,deleteIndex) => {
        deleteItem.addEventListener("click", () => {
            deleteTask(deleteItem,deleteIndex);
        })
    })

    let editBtn = document.querySelectorAll(".editBtn");
    let editArr = Array.from(editBtn);
    editArr.map((editItem,editIndex) => {
        editItem.addEventListener("click", () => {
            editTask(editItem,editIndex)
        })
    })


    let unchecked = document.querySelectorAll(".unchecked");
    let itemList = document.querySelectorAll(".itemList");
    let uncheckedArr = Array.from(unchecked);
    itemListArr  = Array.from(itemList);
    uncheckedArr.map((uncheckedItem,uncheckedIndex) => {
        uncheckedItem.addEventListener("click", () => {
            completedTask(uncheckedItem,uncheckedIndex);
        })
    })


}

const deleteTask = (deleteItem,deleteIndex) => {
    todoarr.splice(deleteIndex,1);
    displayList();
}
const editTask = (editItem,editIndex) => {
    inputValue.value = todoarr[editIndex];
    editList = editIndex;
    inputValue.focus();
    inputBtn.classList.add("updateBtn");
    inputBtn.innerHTML = "Update";
    displayList();
}
const completedTask = (uncheckedItem,uncheckedIndex) => {
    
    if(uncheckedItem.classList.value == "fa-regular fa-circle unchecked"){
        uncheckedItem.classList.value = "fa-solid fa-circle-check checked";
        itemListArr[uncheckedIndex].style.color = "#ffd166";
        itemListArr[uncheckedIndex].classList.value = "checkedItemList";
    }
    else{
        uncheckedItem.classList.value = "fa-regular fa-circle unchecked";
        itemListArr[uncheckedIndex].classList.remove("checkedItemList");
        itemListArr[uncheckedIndex].style.color = "#fff";
    }
}

