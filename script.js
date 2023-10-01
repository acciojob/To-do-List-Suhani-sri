let clickBtn = document.getElementById("addTodoBtn");
clickBtn.addEventListener("click",addItem);
function addItem(){
	let listItem = document.createElement('li');
	let item = document.getElementById("newTodoInput");
	listItem.innerText=item;
	let olist = document.getElementById("todoList");
	olist.append(listItem);
}

