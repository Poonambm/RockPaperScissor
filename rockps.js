const hands = ['rock' , 'paper', 'scissors'];
var player1score=0;
var player2score=0;

var player1 = {
    name: 'Poo',
    getHand: function(){
        return (hands[parseInt(Math.random()*10)%3]);
    }
};
var player2 = {
    name: 'Raj',
    getHand: function(){
        return (hands[parseInt(Math.random()*10)%3]);
    }
};
function playRound(player1, player2){
    
    let player1played = player1.getHand();
    let player2played = player2.getHand();
    console.log(player1.name+'-Player 1 played-'+player1played);
    console.log(player2.name+'-Player 2 played-'+player2played);
    if(player1played === player2played){
        console.log("it's a tie");
        return null;
    }
    else if(player1played == 'rock'){
        if(player2played == 'paper'){
            console.log('Winner is-'+player2.name);
            player2score++;
            return player2;
        }else{
            console.log('Winner is-'+player1.name);
            player1score++;
            return player1;
        }
    }
    else if(player1played == 'scissors'){
        if(player2played == 'rock'){
            console.log('Winner is-'+player2.name);
            player2score++;
            return player2;
        }else{
            console.log('Winner is-'+player1.name);
            player1score++;
            return player1;
        }
    }
    else if(player1played == 'paper'){
        if(player2played == 'scissors'){
            console.log('Winner is-'+player2.name);
            player2score++;
            return player2;
        }else{
            console.log('Winner is-'+player1.name);
            player1score++;
            return player1;
        }
    }
};

function playGame(player1, player2, playUntil){
   var i=1;
while(i> 0)
{
    var winnerplayer = playRound(player1,player2);
    if (player1score >= playUntil || player2score >= playUntil){
        i=0;
    }
}
return winnerplayer.name;
};


console.log(playGame(player1,player2,3)+" is winner of overall game");
