import { ProxyState } from "../AppState.js"
import { mainCardItemsService } from "../Services/MainCardItemsService.js"



function _drawMainCardItems() {

    let template = ""
    ProxyState.maincarditems.forEach(m => template += m.Template)
    document.getElementById("main-cards").innerHTML = template


}


export class MainCardItemsController {

    constructor() {

        ProxyState.on("maincarditems", _drawMainCardItems)
        ProxyState.on("todoitems", _drawMainCardItems)
    }

    createAList() {
        event.preventDefault()

        let form = event.target

        let mainCardItemData = {
            title: form.title.value,

        }
        mainCardItemsService.createMainCardItem(mainCardItemData)
        form.reset()


    }
}