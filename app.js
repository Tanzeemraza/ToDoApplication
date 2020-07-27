var list = document.getElementById("list")

function addtodo(){
    var todowe = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todowe.value)
    li.appendChild(liText)


    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","don(this)")
    delbtn.appendChild(deltext)

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","ed(this)")

    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    todowe.value = ""
    console.log(li)
}

function don(e){
   e.parentNode.remove()
}

function delall(){
    list.innerHTML = ""
}

function ed(e){
    var vel = e.parentNode.firstChild;
    var editvalue = prompt("enter edit value",vel)
    e.parentNode.firstChild.nodeValue =  editvalue


    console.log(e.parentNode.firstChild)

}