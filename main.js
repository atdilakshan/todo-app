function addbtn() {
    document.getElementById("add-todo-container").style.display = "block";
    document.getElementById("add-todo-container-cover").style.display = "block";
}

// function viewallbtn() {
//     document.getElementById("add-todo-container").style.display = "none";
//     document.getElementById("add-todo-container-cover").style.display = "none";
//     document.getElementById("todo-container").style.display = "block";
// }

let addTodoForm = document.getElementById("add-todo-form");
let addTodo = document.getElementById("add-todo");
let addTodoDueDate = document.getElementById("add-todo-due-date");
let addTodoDueTime = document.getElementById("add-todo-due-time");

addTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    console.log(addTodo.value);

    document.querySelector('#todo-list').innerHTML += `
        <div class="todo-head">
            <div class="todo">
                ${document.querySelector(addTodo).value}
            </div>
                <div class="todo-due">${document.querySelector(addTodoDueDate).value}${document.querySelector(addTodoDueTime).value}</div>
        </div>

        <div class="todo-tools">
            <ul>
                <input type="checkbox" name="mark" id="mark">
                <li>Edit</li>
                <li>Delete</li>
            </ul>
        </div>
    `
});
