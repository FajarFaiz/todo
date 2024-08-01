function addItem(event){
    event.preventDefault();
   let text = document.getElementById("todo-input");
   
   db.collection("todo-items").add({
    text: text.Value,
     status:"active"
})
   text.Value ="";
}
function getItems(){
    db.collection("todo-items").onsnapshot((snapshot)=>{
       let items = [];
       snapshot.docs.forEach((doc)=>{
       items.push({
        id: doc.id,
        ...doc.data()
       })
    })
     generateItems(items);
    })
}

function generateItems(items){
      

    let itemsHTML = "";
    items.forEach((item)=>{
      itemsHTML+=`
       <div class="todo-item">
                    <div class="check">
                        <div  data-id="${item.id}" class="check-mark ${item.status=="completed" ? "checked": ""}">
                            <img src="./img/icon-check.svg">
                        </div>
                    </div>
                            <img src="./img/icon-check.svg">
                  <div class="todo-text  ${item.status=="completed" ? "checked": ""}">
                        ${item.text}
                    </div>
                  </div>
      `
    })
      document.querySelector(".todo-items").innerHTML = itemsHTML
      createEventListeners()

}
function createEventListeners(){
    let todoCheckmarks = document.querySelectorAll(".todo-items .check-mark");
    todoCheckmarks.forEach((checkMark)=>{
        checkMark.addEventListeners("click",function(){
           markcompleted(checkMark.dataset.id);
        })

    })
}


function  markcompleted(id){
   let item =  db.collection("todo-items").doc(id);

item.get().then(function(doc){
    if(doc.exists){
    let status = doc.data().status;
    if(status=="active"){
        item,update({
        status: "completed"
        })
}  else if(status=="copleted"){
      item.update({
        status: "active"
})
}
    }
})

}



getItems();