const classOn = document.querySelector(".author-principal-on");
const classOff=document.querySelector(".links-off");
function Changeclass(){
    if (classOn==".author-principal-on"){
        classOn.classList.replace(".author-principal-on",".author-principal-off");
        classOff.classList.replace(".links-off",".links-on");
       
    }
    else{
        classOn.classList.replace(".author-principal-off",".author-principal-on");
        classOff.classList.replace(".links-on",".links-off");
    }
}