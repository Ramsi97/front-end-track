var todoList = [];
function AddTask(task) {
    var newItem = {
        id: Date.now(),
        task: task,
        completed: false
    };
    todoList.push(newItem);
    console.log("Added: \"".concat(task, "\""));
}
function RemoveTask(id) {
    var len = todoList.length;
    todoList = todoList.filter(function (item) { return item.id !== id; });
    if (todoList.length < len) {
        console.log("Task with ID ".concat(id, " removed."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
function DisplayTodos() {
    if (todoList.length == 0) {
        console.log("your list is empty");
    }
    else {
        todoList.forEach(function (item) {
            var status = item.completed ? "[X]" : "[ ]";
            console.log("".concat(status, " ID: ").concat(item.id, " | Task: ").concat(item.task));
        });
    }
}
DisplayTodos();
AddTask("Buy Milk");
AddTask("Clean Room");
AddTask("Finish Homework");
// 3. Show list with items
DisplayTodos();
// 4. Remove an item (We use the ID from the first item in the list)
if (todoList.length > 0) {
    var firstItem = todoList[0];
    if (firstItem) {
        RemoveTask(firstItem.id);
    }
}
// 5. Show final list
DisplayTodos();
