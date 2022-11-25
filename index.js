const list = document.getElementsByTagName("ul")[0];
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

function toggleAddButton(){
    return addButton.disabled = todoInput.value.length === 0;
}

function clearInput(){
    return todoInput.value="";
}

function addItem(){
    const li = document.createElement("li");
    const text = document.createElement("h2");
    text.innerText = todoInput.value;
    const button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerText = "X";
    button.addEventListener("click", ()=>{
        const parent = button.parentElement
        parent.remove();
    })

    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
}

const handleAddItem = ()=>{
    addItem();
    clearInput();
    toggleAddButton()
}

addButton.addEventListener("click",handleAddItem)
todoInput.addEventListener("keyup", toggleAddButton)



// """Just for reference:"""

// const input = document.getElementsByClassName("input");
// const addButton = document.getElementsByClassName("addButton");


// input.addEventListener('input', onTypeTodo);
// addButton.addEventListener('click', onClickAdd);




// function onClickAdd() {
//     const li = createListItem(input.value);
//     todoList.appendChild(li);
//     input.value = '';
//     addButton.disabled = true;

// }


// function onTypeTodo(){
//    addButton.disabled  = input.value.length === 0;
// }

// function createListItem(name) {
//     const li = document.createElement('li');

//     const heading = document.createElement('h1');
//     heading.textContent = name;


//     li.appendChild(heading);
    
//     return li;
// }