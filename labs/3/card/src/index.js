
import Card from "./Component/Card/index.js";



function runOnLoad(){
  
        let element = document.createElement("div");    
        element.id = "container";    
        document.body.appendChild(element);    
        
        var newTask = new Card({content:"This is a card"});    
        
        element.appendChild(newTask.render());
    
    }
        
        
window.addEventListener("DOMContentLoaded", runOnLoad);