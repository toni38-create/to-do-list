// SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// FONCTIONS 
function addTodo(event) {
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Créer le li (nouvelle tâche)
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;  // Utiliser la valeur de l'input
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Bouton Check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';  // Correction des guillemets
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Bouton Supprimer
    const trashButton = document.createElement("button");  // Nom correct pour le bouton de suppression
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';  // Correction des guillemets
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // AJOUTER NOTRE TODO À LA TODO-LISTE
    todoList.appendChild(todoDiv);

    // Vider le champ input après l'ajout
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function (){
        todo.remove();
    });
    }


// CHECK MARK
if (item.classList [0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    }
}