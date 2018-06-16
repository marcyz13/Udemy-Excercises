window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var todos = ["Buy new turtle"];

  var input = prompt("What would you like to do?")

  

  while(input !== "quit"){
  	if(input === "list") {
  		listTodos();
  	} else if(input === "new") {
  	addTodo();
  	} else if(input === "delete"){
  		deleteTodo();
  	}
  	input = prompt("What would you like to do?")
  }
  console.log("Ok, you quit the app")

  function listTodos(){
  	console.log("************")
  	todos.forEach(function(todo, i){
  		console.log(i + ": " + todo);
  	});
  	console.log("************")
  }

  function addTodo(){
  	var newTodo = prompt("Enter new todo");
  	todos.push(newTodo)
  	console.log("Added todo")
  }
  function deleteTodo(){
  	var index = prompt("enter index of todo to delete");
  		todos.splice(index,1);
  		console.log("Deleted Todo");
  }
}, 500);