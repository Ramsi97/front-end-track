interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
}

let todoList : TodoItem[] = []; 

function  AddTask(task: string): void {
    const newItem : TodoItem  = {
        id: Date.now(),
        task: task,
        completed: false
    };

    todoList.push(newItem);
    console.log(`Added: "${task}"`);
}

function RemoveTask(id: number): void {
    const len: number = todoList.length
    todoList = todoList.filter(item => item.id !== id)

     if (todoList.length < len) {
        console.log(`Task with ID ${id} removed.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }    
}

function DisplayTodos() : void {
    if(todoList.length == 0){
        console.log("your list is empty")
    }else{
        todoList.forEach(item => {
            const status = item.completed ? "[X]" : "[ ]";
            console.log(`${status} ID: ${item.id} | Task: ${item.task}`);
        })
    }
}

DisplayTodos()

AddTask("Buy Milk");
AddTask("Clean Room");
AddTask("Finish Homework");

// 3. Show list with items
DisplayTodos();

// 4. Remove an item (We use the ID from the first item in the list)
if (todoList.length > 0) {
    const firstItem = todoList[0];
    if(firstItem){
        RemoveTask(firstItem.id);
    }
}

// 5. Show final list
DisplayTodos();
