import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class MainCardItem {

    constructor(listData) {

        this.title = listData.title
        this.id = listData.id || generateId()
    }

    get Template() {
        return /*html*/ `

        <div class="col-lg-2 d-flex justify-content-center">
        <div class="card text-dark bg-secondary my-4" style="max-width: 18rem;">
            <div class="card-header text-center bg-white shadow "><h6 class="text-primary">${this.title}</h6></div>
            <div class="card-body">
                <div>
                ${this.ToDo}
                </div>
                <form class=" d-flex justify-content-end" onsubmit="app.toDoItemsController.createToDoItem('${this.id}')">
                        <input type="text" class=" f-height form-control me-2 my-2" id="title" placeholder="Add New Task">
                        <button type="submit" class=" f-height btn btn-primary my-2 py-1">+</button>
                </form>
            </div>
        </div>
    </div>

`
    }

    get ToDo() {
        debugger
        let template = ""
        let foundToDoItems = ProxyState.todoitems.filter(i => i.mainCardId == this.id)
        foundToDoItems.forEach(t => template += t.ToDoTemplate)
        return template
    }
}