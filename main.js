
//   function change(){
//      onmouseover = document.getElementById('whatIf').innerHTML='Help ME Out';
//   }

//   function goBack(){
//       onmouseout = document.getElementById('whatIf').innerHTML='this will change';
//   }

//   function Third(){
//      onmouseout = document.getElementById('hitMe').innerHTML='this will change as well';

//   }

//   function thisIsIt() {
//       onmouseover = document.getElementById('hitMe').innerHTML='give it to me';
//   }


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

        
 
   
//     let fruits = ["Banana", "Orange", "Mango", "Apple"];
//         function loadFruits(){ 
//         document.getElementById("fruits").innerHTML = fruits; 
//         loadCars();
// }

// let cars = ["Honda", "Toyota", "Nissan"];
// function loadCars(){ 
// document.getElementById("cars").innerHTML = cars;
// }

// function myFunction(){
//     let fruit = prompt("What is Your Favorite Fruit?");
//     fruits[fruits.length] = fruit;
//     document.getElementById("fruits").innerHTML = fruits;
// }
//     function theFunction(){
//         let pop = prompt("Name Your Favorite Model Car!");
//     cars[cars.length] = pop;
//         document.getElementById("cars").innerHTML = cars;
//     } 

    // let sum = 0;
    // let grades = [80, 87, 94 ,82 ,62 ,98 ,81 ,81 ,74 ,91];
    // for (index = 0; index < grades.length; index++){ 
    //     sum += grades[index];
    //     console.log(sum);
    // }
    // document.write(sum/grades.length);


    //  let totals = 0;
    //   let average = [1, 2, 3, 4];
    //   for (index = 0; index < average.length; index++){
    //      totals += average[index];
    //  console.log(totals);
    //  }
    //    document.write(totals*average.length);

//     let totals1 = 0;
//     let theAverage1 = [1, 5, 100];
//   for (major = 0; major < theAverage1.length; major++){
//       totals1 += theAverage1[major];
//       console.log(totals1); 
//    }
//    document.getElementById("giveMe").innerHTML = 'HELP ME ' + totals1;
  
// let major1 = 0;
// let sums = [9, 8, 900];
// for (totals2 = 0; totals2 < sums.length; totals2++){
//     major1 += sums[totals2];
//     console.log(major1);
// }

// document.getElementById('helpMePlease').innerHTML = 'Learning Javascript is fun ' + major1;


//  let grades = [67, , , ,97 , , 12];
//  let sum = 0;
//  let count = 0;
//  if (grades.length > 0){
//      for (index = 0; index < grades.length; index++) { 
//         if (grades[index] != undefined){ 
//             sum += grades[index];
//         count = count + 1;
//         }
//      }
//      document.open();
//      document.write(sum/count);
//      document.close();
//      console.log(grades);
     
//  }

//   else  
//      document.open();
//      document.write("Empty Array");
// //      prompt('Identify Yourself Now !');
//      document.close();


let person = prompt("what is your name?")

if (person.length != 0){
    if (person == "Major"){ 
    document.open();
    document.write("Thank you");
    document.close();
}
    else


    document.open();
    document.write("Hey There " + person);
    document.close();
}
    else
        document.open();
        document.write("Why are you here ?");
        document.close();