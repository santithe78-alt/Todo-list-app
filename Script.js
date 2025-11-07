console.log("hello");

function addTask(event) {
    //Get user in from text box
    let textBox = document.getElementById("task-input");
    let task = textBox.value;
    // Clear text box
    textBox.value = "";
    
    //check for empty task text
    if(task == "") {
        alert("Please enter a task");
        return;
    }


    let idNum = generateIdNum();


    createTaskDiv(task, idNum);
    // save task to local storage
    localStorage.setItem("task" + idNum, task);

    console.log(localStorage.length)
}

function generateIdNum() {

    // Iterate through local storage
    //check for first available id number
    let idNum = 0;
    while (localStorage.getItem("task" + idNum) != null) {
        idNum++;
    }
    return idNum;
}


function createTaskDiv(task, idNum) {

    //create a list item
    //Get To-do-list container div
    let todolist = document.getElementById("to-do-list")


    //create list-item div
    let taskDiv = document.createElement("div")
    taskDiv.id = "task" + idNum;
    taskDiv.classList.add("list-item");

    //create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" +idNum;
    checkbox.addEventListener("change", removeTask);

    //create label
let label = document.createElement("label");
    label.id = "label" + idNum;
    label.innerText = task;

    //Appeend checkbox to lost-item div
    taskDiv.appendChild(checkbox);


    //Append label to div
    taskDiv.appendChild(label);

    //Append list-item div to the list
    todolist.appendChild(taskDiv);
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
        localStorage.removeItem(taskdiv.id)
    }, 1000);
    
}

function loadTask() {
console.log("Loading Task sir...")
// Get each task from localStorage
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let task = localStorage.getItem(key);
    console.log(task);
    // Create task divs for each task
    createTaskDiv(task, key.substring(4));
}




//
}

loadTask();