import { ProxyState } from "../AppState.js";
import { MainCardItem } from "../Models/MainCardItem.js";
import { saveState } from "../Utils/LocalStorage.js";

class MainCardItemsService {

    constructor() {
        ProxyState.on('maincarditems', saveState)
    }

    createMainCardItem(listData) {
        ProxyState.maincarditems = [...ProxyState.maincarditems, new MainCardItem(listData)]
        console.log("here is our new card object", ProxyState.maincarditems)

        console.log(ProxyState.maincarditems)


    }
    destroyMainCardItem(CardId) {
        ProxyState.maincarditems = ProxyState.maincarditems.filter(main => main.id !== CardId)
    }

}

export const mainCardItemsService = new MainCardItemsService();