
//  function change(){
//     onmouseover = document.getElementById('whatIf').innerHTML='Help ME Out';
//  }

//  function goBack(){
//      onmouseout = document.getElementById('whatIf').innerHTML='this will change';
//  }

//  function Third(){
//     onmouseout = document.getElementById('hitMe').innerHTML='this will change as well';

//  }

//  function thisIsIt() {
//      onmouseover = document.getElementById('hitMe').innerHTML='give it to me';
//  }


// function closeMe() {
//     // find the element
//     x=document.getElementById('demo');
//     //Option 1: Change the style attribute directly
//     x.style.display='none';

//     //Option 2 Change the class
//     // x.className ='close;
// }

//     function openMe() {
       

//         // 2: Change the class
//         //x.className='open';

//          //find the element
//          x=document.getElementById('demo');
//          //Option 1: Change the style attribute directly
//          x.style.display='block';
//     }

    // NEW LINE OF CODE

    let fruits = ["Banana", "Orange", "Mango", "Apple"];

    function loadFruits(){
        document.getElementById("fruits").innerHTML = fruits;
    }

    function myFunction(){
        let fruit = prompt("What is Your Favorite Fruit?");
        fruits[fruits.length] = fruit;
        document.getElementById("fruits").innerHTML = fruits;
    }



    let cars = ["Honda", "Toyota", "Nissan"];

    function loadCars(){
        document.getElementById("cars").innerHTML = cars;
    }

    function theFunction(){
        let cars = prompt("Name Your Favorite Model Car!");
        cars[cars.length] = cars;
        document.getElementById("cars").innerHTML = cars;
    }
    