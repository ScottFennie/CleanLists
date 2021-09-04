import { MainCardItemsController } from "./Controllers/MainCardItemsController.js";
import { ToDoItemsController } from "./Controllers/ToDoItemsController.js";


class App {

    mainCardItemsController = new MainCardItemsController();

    toDoItemsController = new ToDoItemsController();
}

window["app"] = new App();