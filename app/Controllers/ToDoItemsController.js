import { toDoItemsService } from "../Services/ToDoItemsService.js"

export class ToDoItemsController {

    constructor() {


    }
    createToDoItem(themainId) {
        event.preventDefault()
        debugger

        let form = event.target

        let toDoData = {
            title: form.title.value,
            mainCardId: themainId
        }
        toDoItemsService.createToDoItem(toDoData)
        form.reset()

    }
}