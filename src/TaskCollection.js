/**
 * Created by nicolas on 30/06/17.
 */
class TaskCollection {
    constructor (tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export default TaskCollection;