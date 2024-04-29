import Todo from './js/todo.js';
import Project from './js/projects.js';

let proj = document.querySelector(".new");
let modalproj=document.querySelector(".modal");
let overlayproj=document.querySelector(".overlay");

let p= new Array(5);

proj.addEventListener('click',()=>{
    modalproj.classList.add("active");
    overlayproj.classList.add("active");
});

