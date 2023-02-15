
const addTaskButton = document.getElementById("aggiungi");
const taskList = document.getElementById("lista");
addTaskButton.addEventListener("click", function (event) {
    const newTask = document.getElementById("input");
    if (!newTask.value) {
        alert("Inserisci un nome per il task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = newTask.value;
    taskItem.classList.add("custom-li");
    taskList.appendChild(taskItem);

    const labelItem = document.createElement("label");
    labelItem.textContent = newTask.value;
    labelItem.classList.add("custom-label");
    taskItem.appendChild(labelItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Elimina";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
    newTask.value = '';
})