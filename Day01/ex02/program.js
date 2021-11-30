function pocketMoney(coins){
    let somCoins = 0;

    function comparaison(coin1, coin2){
        return coin1 - coin2;
    }

    coins.sort(comparaison);
    for (let i = 0; i <(coins.length -1); i++){
        if(coins[i] < 0){
            return 1;
        }
        somCoins = somCoins + coins[i];
    }
    if(somCoins == coins[coins.length-1] || somCoins+1 == coins [coins.lenth-1]){
        return somCoins + coins[coins.length-1]+1;
        
    }else if(somCoins < coins [coins.length-1]){
        return somCoins+1;
    }   
}

// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney =  pocketMoney;