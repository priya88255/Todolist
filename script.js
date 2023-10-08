function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
