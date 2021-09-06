import { ProxyState } from "../AppState.js"
import { MainCardItem } from "../Models/MainCardItem.js"
import { ToDoItem } from "../Models/ToDoItem.js"


export function saveState() {

    localStorage.setItem('AllLists', JSON.stringify({

        maincarditems: ProxyState.maincarditems,

        todoitems: ProxyState.todoitems

    }))
}

export function loadState() {
    let info = JSON.parse(localStorage.getItem('AllLists'))

    if (info != null) {
        ProxyState.maincarditems = info.maincarditems.map(m => new MainCardItem(m))

        ProxyState.todoitems = info.todoitems.map(t => new ToDoItem(t))
    }
}