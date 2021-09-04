import { generateId } from "../Utils/generateId.js"

export class ToDoItem {

    constructor(todoData) {

        this.title = todoData.title
        this.completed = todoData.completed
        this.mainCardId = todoData.mainCardId
        this.id = todoData.id || generateId()
    }

    get ToDoTemplate() {
        return /*html*/ `

        <ul class="list-group bg-white shadow my-2">
        <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="false" aria-label="...">
          ${this.title}
        </li>
        </ul>
        `
    }


}