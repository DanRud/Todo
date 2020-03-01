var input = document.querySelector(".input");
var elements = document.querySelector(".lists");


// add new todo
input.addEventListener("keypress", function(e){
    if(e.which === 13){
        var item = document.createElement("li");
        var value = input.value;
        if(value) {
            elements.appendChild(item);    
            item.textContent = value;
            item.insertAdjacentHTML('beforeend', '<span class="delete"><i class="fa fa-times" aria-hidden="true"></i></span>');
            input.value = "";
            
            item.childNodes[1].addEventListener("click", function() { 
      		this.parentNode.parentNode.removeChild(this.parentNode); // li>ul.remove(li)
		    });
           
        }
        

    }
});



var removeButtons = document.querySelectorAll(".delete");
for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
  });
}

