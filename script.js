//toggling effect by JavaScript

let answers=document.querySelectorAll(".accordion");
answers.forEach((Event)=>{
    Event.addEventListener("click",() =>{
        if(Event.classList.contains("active")) {
            Event.classList.remove("active");
        }
        else
        {
            Event.classList.add("active");
        }
    });
}); 
