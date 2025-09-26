let todos = [];
 
// Add task
function addTask(task) {
  todos.push({ text: task, done: false });
  console.log(`Added: "${task}"`);
}
 
// Remove task by index
function removeTask(index) {
  if (index >= 0 && index < todos.length) {
    let removed = todos.splice(index, 1);
    console.log(`Removed: "${removed[0].text}"`);
  } else {
    console.log("Invalid index");
  }
}
 
// Mark task as done by index
function markDone(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].done = true;
    console.log(`Marked as done: "${todos[index].text}"`);
  } else {
    console.log("Invalid index");
  }
}
 
// Show all tasks
function showTasks() {
  console.log("\nYour ToDo List:");
  todos.forEach((t, i) => {
    let status = t.done ? "✅" : "❌";
    console.log(`${i}. ${status} ${t.text}`);
  });
}

addTask("Learn JavaScript");
addTask("Build a to-do app");
addTask("Read a book");

showTasks();

markDone(1);
showTasks();

removeTask(0);
showTasks();
