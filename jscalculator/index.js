let string = "";   //for input slide
let buttons = document.querySelectorAll('.button');  //all button classes are selected
Array.from(buttons).forEach((button)=>{             //making an array
    button.addEventListener('click', (e)=>{     //e for event
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string+ e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    
    })
})