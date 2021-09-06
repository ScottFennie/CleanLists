import { ProxyState } from "../AppState.js"
import { mainCardItemsService } from "../Services/MainCardItemsService.js"



function _drawMainCardItems() {


    let template = ""
    ProxyState.maincarditems.forEach(m => template += m.Template)
    document.getElementById("main-cards").innerHTML = template

    console.log("page reload", ProxyState.maincarditems)


}


export class MainCardItemsController {

    constructor() {

        ProxyState.on("maincarditems", _drawMainCardItems)
        ProxyState.on("todoitems", _drawMainCardItems)
        _drawMainCardItems()
    }

    createAList() {
        event.preventDefault()

        let form = event.target

        let mainCardItemData = {
            title: form.title.value,
            color: form.color.value

        }
        mainCardItemsService.createMainCardItem(mainCardItemData)
        form.reset()
    }

    destroyMainCardItem(CardId) {
        mainCardItemsService.destroyMainCardItem(CardId)
    }

    drawIt() {
        _drawMainCardItems()
    }

}