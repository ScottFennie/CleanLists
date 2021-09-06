import { MainCardItemsController } from "./Controllers/MainCardItemsController.js";
import { ToDoItemsController } from "./Controllers/ToDoItemsController.js";
import { loadState } from "./Utils/LocalStorage.js";


class App {

    mainCardItemsController = new MainCardItemsController();

    toDoItemsController = new ToDoItemsController();
}

loadState()

window["app"] = new App();