//2(a)
var Tasks = [];
//2(b)
function addTask(task) {
    var length;
    length = Tasks.push(task);
    console.log(task + " has been added to out Tasks Array.");
    return length;
}
//2(c)
function listAllTasks() {
    Tasks.forEach(function (element) {
        console.log("Task " + element + " is on our Tasks Array.");
    });
}
//2(d)
function deleteTask(task) {
    var index;
    index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from our Tasks Array");
    }
    else {
        console.log(task + " was not found in our Tasks");
    }
    return Tasks.length;
}
addTask("Eat Lunch"); //it prints a message in the console indicating the insertion
listAllTasks(); //It print each Array item in the console
deleteTask("Eat lunch");
