import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class ToDoItem {

    constructor(todoData) {

        this.title = todoData.title
        this.completed = todoData.completed
        this.mainCardId = todoData.mainCardId
        this.id = todoData.id || generateId()
        this.checked = todoData.checked || false

    }

    get ToDoTemplate() {

        return /*html*/ `

        <ul class="list-group bg-white shadow my-2">
        <div class="form-check form-switch">
        <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" id="('${this.id}')" value="" aria-label="..." onclick="app.toDoItemsController.changeAccomplishedStatus('${this.id}','${this.mainCardId}')" ${this.checked == true ? "" : "checked"}>

          <div class="d-flex justify-content-between align-items-center">
          <span class="text-break d-flex flex-wrap ${this.checked == true ? "strike" : "" }"
          >${this.title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi text-danger bi-x select" onclick="app.toDoItemsController.destroyTodoitem('${this.id}')" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </div>
        </li>
        </div>
        </ul>
        `

    }


}