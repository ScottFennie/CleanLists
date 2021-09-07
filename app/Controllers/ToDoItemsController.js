import { toDoItemsService } from "../Services/ToDoItemsService.js"

export class ToDoItemsController {

    constructor() {


    }
    createToDoItem(themainId) {
        event.preventDefault()


        let form = event.target

        let toDoData = {
            title: form.title.value,
            mainCardId: themainId
        }

        toDoItemsService.createToDoItem(toDoData)
        form.reset()

    }

    destroyTodoitem(TodoId) {


        Swal.fire({
            title: 'Are you sure you want to delete this task?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                )
                toDoItemsService.destroyTodoItem(TodoId)
            }
        })

    }

    changeAccomplishedStatus(isAccomp) {
        toDoItemsService.changeAccomplishedStatus(isAccomp)

    }
}