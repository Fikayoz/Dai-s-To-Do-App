const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");  

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // If the target element's class is empty, it adds "checked". If "checked" is there, it removes the class name
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        // Deletes list item element entirely if the span element is clicked
        e.target.parentElement.remove();
    }
}, false);