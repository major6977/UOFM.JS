
 function change(){
    onmouseover = document.getElementById('whatIf').innerHTML='Help ME Out';
 }

 function goBack(){
     onmouseout = document.getElementById('whatIf').innerHTML='this will change';
 }

 function Third(){
    onmouseout = document.getElementById('hitMe').innerHTML='this will change as well';

 }

 function thisIsIt() {
     onmouseover = document.getElementById('hitMe').innerHTML='give it to me';
 }


function closeMe() {
    // find the element
    x=document.getElementById('demo');
    //Option 1: Change the style attribute directly
    x.style.display='none';

    //Option 2 Change the class
    // x.className ='close;
}

    function openMe() {
       

    function color() {
            document.getElementById('demo').style.color='red';   
        }
       
        // 2: Change the class
        //x.className='open';

         //find the element
         x=document.getElementById('demo');
         //Option 1: Change the style attribute directly
         x.style.display='block';
    }
    