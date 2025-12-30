let btns = document.querySelectorAll("button");

btns.forEach(function(elem){
  elem.addEventListener("click", ()=>{
     if(elem.innerText=="Add friend"){
       elem.innerText="Remove friend"
     } else{
         elem.innerText="Add friend";
     }
    
  })

})