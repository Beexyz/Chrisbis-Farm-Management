document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");
    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item for the task
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            // Add buttons for marking as completed and deleting the task
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            // Add click event handlers for completing and deleting tasks
            completeButton.addEventListener("click", function () {
                listItem.classList.toggle("completed");
            });

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });

            // Append buttons to the list item
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            // Add the task to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            newTaskInput.value = "";
        }
    });
});