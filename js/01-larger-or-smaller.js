//Larger or Smaller App

    var firstNum = window.prompt('Enter a number: ');
    var secondNum = window.prompt('Enter a another number: ');
    
    if (firstNum > secondNum){
        document.write(firstNum + ' is a larger number');
    }else if(secondNum > firstNum){
        document.write(secondNum + ' is a larger number');
    }else{
        document.write('The numbers are even');
    } 
    