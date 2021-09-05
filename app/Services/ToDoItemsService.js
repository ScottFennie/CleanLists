import { ProxyState } from "../AppState.js"
import { ToDoItem } from "../Models/ToDoItem.js"

class ToDoItemsService {

    constructor() {


    }

    createToDoItem(todoData) {
        ProxyState.todoitems = [...ProxyState.todoitems, new ToDoItem(todoData)]
        console.log("here is our new card object", ProxyState.todoitems)


    }
    changeAccomplishedStatus(ID) {

        let currentToDo = ProxyState.todoitems.find(main => main.id == ID)

        if (currentToDo.checked === false) {
            currentToDo.checked = true
            ProxyState.todoitems = ProxyState.todoitems

            console.log("change?", ProxyState.todoitems)
        } else if (currentToDo.checked === true) {
            currentToDo.checked = false
            ProxyState.todoitems = ProxyState.todoitems

        }

    }
}

export const toDoItemsService = new ToDoItemsService();