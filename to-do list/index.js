
let main = document.querySelector(":root");
let container = document.querySelector(".container");
let newTaskInput = document.getElementById("new_task_input");
let taskform = document.getElementById("newtask");
let tasksList = document.getElementById("tasksList");
let taskBtns = document.querySelectorAll(".task_check_btn");
let themeBtn = document.querySelector(".tooglebtn");
// submit the form
taskform.addEventListener("submit", function (t) {
    t.preventDefault();
    var newtaskInputValue = taskform.elements.new_task_input;

    addTask(newtaskInputValue.value);

    // Reset input value to empty
    newtaskInputValue.value = "";
    container.classList.remove("task_list_empty");
});


function addTask(newTask) {
    const TaskItem = document.createElement("li");
    TaskItem.setAttribute("class", "task_item");
    const CheckBtn = document.createElement("div");
    CheckBtn.setAttribute("class", "task_check_btn");
    const Task = document.createElement("span");
    Task.setAttribute("class", "task_bio");
    Task.innerText = newTask; 
    tasksList.appendChild(TaskItem);
    TaskItem.appendChild(CheckBtn);
    TaskItem.appendChild(Task);
    onTaskComplete(CheckBtn);
}

// To remove the completed task
function onTaskComplete(btns) {
    btns.addEventListener("click", function (e) {
        var parents = e.target.parentElement;
        parents.classList.add("task-completed");
        setTimeout(() => {
            parents.remove();
        }, 400);

        if (tasksList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add("task_list_empty");
            }, 200);
        }
    });
}

