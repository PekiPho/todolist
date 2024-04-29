import toDo from "./todo.js";

export default class Projects{
    constructor(name) {
        this.name=name;
        let left=document.querySelector(".left");
        let proj=document.createElement("p");
        proj.classList.add("proj");
        proj.textContent=this.name;
        left.appendChild(proj);
    }
    
    addTask(){
        
    }

    remove(){

    }
}