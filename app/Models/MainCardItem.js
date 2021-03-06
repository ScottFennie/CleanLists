import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class MainCardItem {

    constructor(listData) {

        this.title = listData.title
        this.id = listData.id || generateId()
        this.todos = listData.todos || 0
        this.totaltodos = listData.totaltodos || 0
        this.color = listData.color
    }

    get Template() {
        return /*html*/ `

        <div class="col-lg-3 d-flex justify-content-center">
        <div class="card text-dark bg-secondary my-4" style="max-width: 18rem;">
            <div class="card-header d-flex justify-content-between justify-content-center ${this.color == "Color" ?'bg-white': "text-white"}
            ${this.color == "blue" ?'bg-primary': ""}
            ${this.color == "red" ?'bg-danger': ""}
            ${this.color == "black" ?'bg-dark': ""}
            ${this.color == "green" ?'bg-success': ""} 
            ${this.color == "yellow" ?'bg-warning': ""}  shadow">
            <h6 class="Card-t ${this.color == 'Color' ? "text-info" : ''}" >${this.title}</h6>
            <h6 class="${this.color == "Color" ? "text-info" : ""}">${this.todos} / ${this.totaltodos} </h6>
            <div onclick="app.mainCardItemsController.destroyMainCardItem('${this.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-square ${this.color == "Color" ? "text-danger": "text-white"} select glassy" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
            </div>
            <div class="card-body">
                <div>
                ${this.ToDo}
                </div>
                <form class=" d-flex justify-content-end" onsubmit="app.toDoItemsController.createToDoItem('${this.id}')">
                        <input type="text" class="f-height form-control me-2 my-2 bg-white" id="title" placeholder="Add New Task" minlength="3" maxlength="50" required>
                        <button type="submit" class=" f-height btn btn-primary my-2 py-1">+</button>
                </form>
            </div>
        </div>
    </div>

`
    }

    get ToDo() {
        let template = ""
        let foundToDoItems = ProxyState.todoitems.filter(i => i.mainCardId == this.id)
        foundToDoItems.forEach(t => template += t.ToDoTemplate)
        return template
    }
}