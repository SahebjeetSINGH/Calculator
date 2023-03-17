 let string="";
 let buttons=document.querySelectorAll('.button');
 Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
            
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerText=='arrow_back_ios_new')
        {
            console.log("clicked")
            string= string.slice(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else{
        string+=e.target.innerHTML;
        document.querySelector('input').value=string;
        
        }
       
    })
 })