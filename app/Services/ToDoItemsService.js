import { ProxyState } from "../AppState.js"
import { ToDoItem } from "../Models/ToDoItem.js"

class ToDoItemsService {

    constructor() {


    }

    createToDoItem(todoData) {
        ProxyState.todoitems = [...ProxyState.todoitems, new ToDoItem(todoData)]
        console.log("here is our new card object", ProxyState.todoitems)


    }
}

export const toDoItemsService = new ToDoItemsService();