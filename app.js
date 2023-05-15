var list = document.getElementById("list");


function addTodo(){
    var todo_item = document.getElementById("todo-item")
    
    // create li tag with text node 
    var li = document.createElement('li')   //list k tags create krne k
    var liText = document.createTextNode(todo_item.value) //simple text create hogya
    li.appendChild(liText)
    
    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)") //this as a argument jab this per press krn yahe wala pora button ajye ga code
    delBtn.appendChild(delText)
 
   //create edit button
 var editBtn = document.createElement("button");
 var editText = document.createTextNode("EDIT");
 editBtn.appendChild(editText)
 editBtn.setAttribute("onclick","editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
    // console.log(li)
}

function deleteItem(e){  //e ek parameter hai a b c kuch bh kikh skhte 
    // console.log(e)
    e.parentNode.remove()
}
function editItem(e){
    // console.log(e.parentNode.firstChild) //parentNode ppora button lakr d ga  //firstchild li k name phir dlt text phir 3 pay edit text 
var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ""
}