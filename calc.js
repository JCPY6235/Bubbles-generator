const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('res-screen');
const equal = document.getElementById('equals')
const supr = document.getElementById('supr')
const clear = document.getElementById('clear')




buttons.forEach(btn => {
    btn.addEventListener('click',() =>{
         let a = btn.textContent;
         //let b = e.target.id
         result.textContent += a;
    });
});

equal.addEventListener('click',() =>{
    result.textContent = eval(result.textContent);
})

supr.addEventListener('click',() =>{
   let c = String(result.textContent);
        result.textContent = c.substr(0, c.length-1);
     
})

clear.addEventListener('click',()=>{
    result.textContent = "";
})



