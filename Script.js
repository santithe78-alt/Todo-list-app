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
    checkbox.addEventListener("change", removeTask);

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


function removeTask(event) {
    // Get id of checkbox
    let checkboxId = event.target.id; // e.g. checkbox0

    // Get id number from the checkbox id
    let idNum = checkboxId.substring(8)
 

    // Get task div by id
    let taskdiv = document.getElementById("task" + idNum)
    
    // Apply animation
    taskdiv.classList.add("remove-task");

    // Remove the task div from layout
    setTimeout(function() {
        taskdiv.remove();
    }, 1000);
    
}

