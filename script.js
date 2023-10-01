let clickBtn = document.getElementById("addTodoBtn");
clickBtn.addEventListener("click",addItem);
function addItem(){
	
	let item = document.getElementById("newTodoInput");
	const newTodo = item.value.trim();
	if(newTodo!==''){
		let listItem = document.createElement('li');
		listItem.innerText=newTodo;
		let olist = document.getElementById("todoList");
		olist.append(listItem);
		item.value = '';
	}
	
}

