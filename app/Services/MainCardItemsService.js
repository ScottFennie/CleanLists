import { ProxyState } from "../AppState.js";
import { MainCardItem } from "../Models/MainCardItem.js";

class MainCardItemsService {

    constructor() {}

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