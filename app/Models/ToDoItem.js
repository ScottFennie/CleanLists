import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class ToDoItem {

    constructor(todoData) {

        this.title = todoData.title
        this.completed = todoData.completed
        this.mainCardId = todoData.mainCardId
        this.id = todoData.id || generateId()
        this.checked = false

    }

    get ToDoTemplate() {

        return /*html*/ `

        <ul class="list-group bg-white shadow my-2">
        <div class="form-check form-switch">
        <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" id="('${this.id}')" value="" aria-label="..." onclick="app.toDoItemsController.changeAccomplishedStatus('${this.id}','${this.mainCardId}')" ${this.checked == true ? "" : "checked"}>
          <span class="${this.checked == true ? "strike" : "" }"
          >${this.title}</span>
        </li>
        </div>
        </ul>
        `

    }


}