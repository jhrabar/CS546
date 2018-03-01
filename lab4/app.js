//John Hrabar
//I Pledge My Honor That I Have Abided By The Stevens Honor System
//10409311





const todoItems = require("./todo");



async function test() {
    let firstTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    let secondTask = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    let taskList = await todoItems.getAllTasks();
    console.log("First Task Added:\n")
    console.log(firstTask);
    console.log("\nDatabase After Both Tasks are Added:\n");
    console.log(taskList);
    console.log("\n\nDatabase After Removal of First Task:\n");
    await todoItems.removeTask(taskList[0]["_id"]);
    taskList = await todoItems.getAllTasks();
    console.log(taskList);
    console.log("\n\nDatabase After Remaining Task is Completed:\n");
    await todoItems.completeTask(taskList[0]["_id"]);
    taskList = await todoItems.getAllTasks();
    console.log(await todoItems.getAllTasks());

}


test();