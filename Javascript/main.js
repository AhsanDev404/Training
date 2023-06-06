let todo = [];
let i = 0;
function addTask() {
    
  let task = document.getElementById("task");
  if (task.value) {
    todo.push(task.value);
    task.value = "";
  }
  if (todo.length > i) {
    let list = document.getElementById("list");
    for (let j = i; j < todo.length; j++) {
      list.innerHTML =
        list.innerHTML +
        `<div id="${j}" class="my-1 d-flex justify-content-between">
              <div class="d-flex">
                  <input class="m-1" type="checkbox" /> <label for="">${todo[j]}</label>
              </div>
          <div>
              <button onclick="Edit(event)"   class="bg-success border-0 rounded">edit</button>
              <button onclick="remove(event)" class="bg-danger border-0 rounded">delete</button>
            
          </div>    
          </div>`;
    }
    i = todo.length;
  }
}

function Edit(event){
    
    var button = event.target;
     var parent = button.parentNode.parentNode.id;
     
     var item = document.getElementById(parent)
     item.innerHTML = `<div id="${parent}"  class="d-flex">
     <input
       type="text"
       name="task"
       id="edit"
       value="${todo[parent]}"
       class="text-light bg-dark border-1 border-light rounded"
     />
     <button
       onclick="EditAdd(event)"
       type="submit"
       class="bg-primary border-0 text-light px-3 py-1 rounded"
     >
     Update
     </button>
   </div>`
  
   

   
   
   }
   function EditAdd(event){
    var button = event.target;
    var parent = button.parentNode.id;
   

    todo[parent] = document.getElementById('edit').value
    let list = document.getElementById("list");
    list.innerHTML = ``
    for (let j = 0; j < todo.length; j++) {
        list.innerHTML =
          list.innerHTML +
          `<div id="${j}" class="my-1 d-flex justify-content-between">
                <div class="d-flex">
                    <input class="m-1" type="checkbox" /> <label for="">${todo[j]}</label>
                </div>
            <div>
                <button onclick="Edit(event)"   class="bg-success border-0 rounded">edit</button>
                <button onclick="remove(event)" class="bg-danger border-0 rounded">delete</button>
              
            </div>    
            </div>`;
      }
    
   }

function remove(event){
    
var button = event.target;
  var parent = button.parentNode.parentNode.id;
 
  parent = Number(parent)
 
  todo.splice(parent,1)
  console.log(todo);
  list.innerHTML = ``
   for (let j = 0; j < todo.length; j++) {
      list.innerHTML = list.innerHTML+
        `<div id="${j}" class="my-1 d-flex justify-content-between">
              <div class="d-flex">
                  <input class="m-1" type="checkbox" /> <label for="">${todo[j]}</label>
              </div>
          <div>
              <button onclick="Edit(event)"  class="bg-success border-0 rounded">edit</button>
              <button onclick="remove(event)" class="bg-danger border-0 rounded">delete</button>
            
          </div>    
          </div>`;
    }

}


