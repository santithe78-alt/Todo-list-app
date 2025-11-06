console.log("hello");

function addTask(event) {
    //Get user in from text box
    let textBox = document.getElementById("task-input");
    let task = textBox.value;
    let check
    //create a list item
    //Get To-do-list container div

    let todolist = document.getElementById("to-do-list")


    //create list-item div
    let listDiv = document.createElement("div")
    listDiv.id = "task" + todolist.childElementCount;
    listDiv.classList.add("list-item");

    //create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" +todolist.childElementCount; 

    //create label
let label = document.createElement("label");
    label.id = "label" + todolist.childElementCount;
    label.innerText = task;

    //Appeend checkbox to lost-item div
    listDiv.appendChild(checkbox);


    //Append label to div
    listDiv.appendChild(label);

    //Append list-item div to the list
    todolist.appendChild(listDiv)
}

checkbox.addeven

function removeTask(event) {
     
}