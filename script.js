

    //  JAVASCRIPT CODE FOR CALCULATE

    let display = document.querySelector(".display");

    let btns = document.querySelectorAll("button");
    
    let buttonArr = Array.from(btns);    
    
    let string = " ";
    
    // Here we can direct btns.forEach();
    buttonArr.forEach((btn)=> {
    
        // console.log(btn);  // print all induvidua variable
    
        btn.addEventListener("click", (e)=> {
    
            if(e.target.innerText == 'D') {
                // string = string.slice(0, string.length - 1);   // this also True 
                string = string.slice(0, - 1);  
                display.value = string;
    
            } else if (e.target.innerText == 'AC') {
                string = " ";
                display.value = string;
    
            } else if (e.target.innerText == '='){
                string = eval(string);
                display.value = string;
    
            } else {
                string += e.target.innerText;
                display.value = string;
            }
        })
    });
    