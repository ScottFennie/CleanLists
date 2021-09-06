import { ProxyState } from "../AppState.js"
import { ToDoItem } from "../Models/ToDoItem.js"
import { saveState } from "../Utils/LocalStorage.js"

class ToDoItemsService {

    constructor() {
        ProxyState.on('todoitems', saveState)
    }

    createToDoItem(todoData) {
        ProxyState.todoitems = [...ProxyState.todoitems, new ToDoItem(todoData)]
        console.log("here is our new card object", ProxyState.todoitems)

        let currentCardFinder = ProxyState.maincarditems.find(t => t.id == todoData.mainCardId)

        currentCardFinder.totaltodos++

            currentCardFinder.todos++
            ProxyState.maincarditems = ProxyState.maincarditems
    }

    destroyTodoItem(TodoId) {

        let currentToDo = ProxyState.todoitems.find(main => main.id == TodoId)

        let popid = (currentToDo.mainCardId)

        let currentCard = ProxyState.maincarditems.find(m => m.id == popid)

        currentCard.totaltodos--

            ProxyState.todoitems = ProxyState.todoitems.filter(td => td.id !== TodoId)

    }

    changeAccomplishedStatus(ID) {

        let currentToDo = ProxyState.todoitems.find(main => main.id == ID)

        let popid = (currentToDo.mainCardId)

        let currentCard = ProxyState.maincarditems.find(m => m.id == popid)


        ProxyState.maincarditems = ProxyState.maincarditems

        ProxyState.todoitems = ProxyState.todoitems

        if (currentToDo.checked == false) {

            currentToDo.checked = true

            if (currentCard.todos >= 1) {
                currentCard.todos--
                    if (currentCard.todos < 1) {
                        // TODO add a sweet alert
                        alert("Nice Job!")
                    }
            }
            ProxyState.maincarditems = ProxyState.maincarditems

            ProxyState.todoitems = ProxyState.todoitems

        } else if (currentToDo.checked == true) {
            currentToDo.checked = false

            currentCard.todos++

                ProxyState.maincarditems = ProxyState.maincarditems

            ProxyState.todoitems = ProxyState.todoitems

        }

        ProxyState.maincarditems = ProxyState.maincarditems

        ProxyState.todoitems = ProxyState.todoitems

    }
}

export const toDoItemsService = new ToDoItemsService();