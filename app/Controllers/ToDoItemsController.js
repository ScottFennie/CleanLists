import { toDoItemsService } from "../Services/ToDoItemsService.js"

export class ToDoItemsController {

    constructor() {


    }
    createToDoItem(themainId) {
        event.preventDefault()


        let form = event.target

        let toDoData = {
            title: form.title.value,
            mainCardId: themainId
        }

        toDoItemsService.createToDoItem(toDoData)
        form.reset()

    }

    destroyTodoitem(TodoId) {

        if (window.confirm("Are you sure you want to delete this task?")) {
            toDoItemsService.destroyTodoItem(TodoId)
        }

    }

    changeAccomplishedStatus(isAccomp) {
        toDoItemsService.changeAccomplishedStatus(isAccomp)

    }
}