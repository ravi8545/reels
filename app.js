let div = document.querySelector("div");
let h1 = document.querySelector("h1");

let body = document.querySelector("body");
body.addEventListener("keydown", (event)=>{
  console.log(event.key);
  h1.innerText=event.key;
})