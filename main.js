import Todo from './js/todo.js';
import Project from './js/projects.js';

let proj = document.querySelector(".new");
let modalproj=document.querySelector(".modal");
let overlayproj=document.querySelector(".overlay");
let exitproj=document.querySelector(".modal>.exit");
let projsumbit=document.querySelector(".modal>button");

let p= new Array(5);
let i=0;

proj.addEventListener('click',()=>{
    modalproj.classList.add("active");
    overlayproj.classList.add("active");
});

exitproj.addEventListener('click',()=>{
    modalproj.classList.remove("active");
    overlayproj.classList.remove("active");
});

projsumbit.addEventListener('click',()=>{
    if(i>4){
        alert("Too many projects");
        return;
    }
    let input=document.querySelector('.title_pr');
    if(input.value==""){
        alert("Enter a value");
        return;
    }
    p[i]=new Project(input.value);
    input.value="";
    i++;
    modalproj.classList.remove("active");
    overlayproj.classList.remove("active");
});

document.addEventListener( "click", someListener );

function someListener(event){
    var element = event.target;
    if(element.classList.contains("proj")){
        let projtitle=document.querySelector(".left1");
        while(projtitle.firstChild)
            projtitle.removeChild(projtitle.firstChild);
        let title=document.createElement("p");
        title.classList.add("titlebig");
        let value=document.createTextNode(element.textContent);
        title.appendChild(value);
        projtitle.appendChild(title);
        }
}
