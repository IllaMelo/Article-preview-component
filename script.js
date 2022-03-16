(function(){


document.querySelector(".links-on").onclick = function (){
    document.querySelector(".links-off").style.display = "flex";
    document.querySelector(".links-on").style.display = "none";
}
document.querySelector(".links-off").onclick = function (){
    document.querySelector(".links-on").style.display = "flex";
    document.querySelector(".links-off").style.display = "none";
}

})();