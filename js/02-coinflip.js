//Coin Flip Game
    
    var coinFlip = Math.floor(Math.random() * 100);
    console.log(coinFlip);
    var choice = window.prompt('Heads or Tails');
    
    //If greater than or equal to 50, it is heads, else it's tails
    if(coinFlip>=50 && choice == 'heads'){
        document.write('The flip was heads and you chose heads... you win!');
    }else if(coinFlip>=50 && choice == 'tails'){
        document.write('The flip was heads and you chose tails... you lose!');
    }else if(coinFlip<=50 && choice == 'heads'){
        document.write('The flip was tails and you chose heads...you lose!');
    }else if(coinFlip<=50 && choice == 'tails'){
        document.write('The flip was tails and you chose tails... you win!');
    }else{
        document.write('Invail Entry');
    }
    