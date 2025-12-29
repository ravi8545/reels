let main = document.querySelector("main");
let img = document.querySelector("img");
main.addEventListener("mousemove", function(elem){
   img.style.left=elem.x+"px";
   img.style.top=elem.y+"px";
})