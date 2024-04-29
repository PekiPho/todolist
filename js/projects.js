export default class Projects{
    constructor(name) {
        this.name=name;
        let left=document.querySelector(".left");
        let proj=document.createElement("p");
        proj.textContent=this.name;
        left.appendChild(proj);
    }
    
    remove(){

    }
}