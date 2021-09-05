import { ProxyState } from "../AppState.js"
import { ToDoItem } from "../Models/ToDoItem.js"

class ToDoItemsService {

    constructor() {


    }

    createToDoItem(todoData) {
        ProxyState.todoitems = [...ProxyState.todoitems, new ToDoItem(todoData)]
        console.log("here is our new card object", ProxyState.todoitems)

        let currentCardFinder = ProxyState.maincarditems.find(t => t.id == todoData.mainCardId)

        currentCardFinder.totaltodos++


            currentCardFinder.todos++

            ProxyState.maincarditems = ProxyState.maincarditems

    }
    changeAccomplishedStatus(ID) {

        let currentToDo = ProxyState.todoitems.find(main => main.id == ID)

        let popid = (currentToDo.mainCardId)

        let currentCard = ProxyState.maincarditems.find(m => m.id == popid)



        if (currentToDo.checked === false) {

            currentToDo.checked = true

            if (currentCard.todos >= 1) {
                currentCard.todos--
                    if (currentCard.todos < 1) {
                        // TODO 
                        alert("Nice Job!")
                    }
            }



            ProxyState.maincarditems = ProxyState.maincarditems

            ProxyState.todoitems = ProxyState.todoitems

            console.log(currentCard)

        } else if (currentToDo.checked === true) {
            currentToDo.checked = false

            currentCard.todos++

                ProxyState.maincarditems = ProxyState.maincarditems

            ProxyState.todoitems = ProxyState.todoitems

            console.log(currentCard)

        }

    }
}

export const toDoItemsService = new ToDoItemsService();