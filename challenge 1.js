
function sum(...arr){

    var total = 0;
    // Using reduce way--
    total = arr.reduce((acc , elelment) => acc + elelment , 0);

 /**
  * 
  * Direct & Simplest Way - Using Loop
  *    
    for(var i = 0; i<arr.length; i++){

        total += arr[i];

    }
*/
    console.log(total);

}


try{

    sum(1 , 4);

}catch(ex){

    console.log(ex.message);

}


sum (1 , 2 , 3 , 4 , 5);