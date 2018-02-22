 //Coin Flip Streaks
    
    var coinFlip;
    do{
        coinFlip = Math.floor(Math.random() * 2);
        if(coinFlip == 0){
           console.log('Heads');
        }else if(coinFlip == 1){
             console.log('Tails');
        }
        
    }while(coinFlip != 1);
    