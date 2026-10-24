let score=JSON.parse(localStorage.getItem('score'))
    || {
            win:0,
            lose:0,
            tie:0

        };
    
    updatescore();
    
    function PlayerMove(move){

    const ComputerChoice=PickNumber();

    let result = '';

    if(move === 'scissors'){
        if(ComputerChoice === 'rock'){
        result = 'lose';
    }
    else if(ComputerChoice === 'paper'){
        result = 'win';
    }
    else if(ComputerChoice === 'scissors'){
        result = 'tie';

    }
    
    }
    else if(move==='paper'){

        if(ComputerChoice === 'rock'){
        result = 'win';
        }
        else if(ComputerChoice === 'paper'){
            result = 'tie';
        }
        else if(ComputerChoice === 'scissors'){
            result = 'lose';
        }
  
    }
    else if(move==='rock'){
        if(ComputerChoice === 'rock'){
        result = 'tie';
        }
        else if(ComputerChoice === 'paper'){
            result = 'lose';
        }
        else if(ComputerChoice === 'scissors'){
            result = 'win';
        }
    }

    if(result ==='win'){
        score.win+=1;
        }
        else if(result ==='tie' ){
            score.tie+=1;
        }
        else if(result ==='lose'){
            score.lose+=1;
        }
    localStorage.setItem('score',JSON.stringify(score));  
    updatescore();
    document.querySelector('.js-result').innerHTML=`You ${result}.` ;
    document.querySelector('.js-move').innerHTML= `You <img src="images/${move}-emoji.png" class="move-icon"><img src="images/${ComputerChoice}-emoji.png" class="move-icon"> computer` ;

    }
    function updatescore(){
        document.querySelector('.js-score').innerHTML=`wins: ${score.win}, Losses: ${score.lose}, ties: ${score.tie}`;
    };

    function PickNumber(){

    let random_number = Math.random();

    let ComputerChoice ='';

    if(random_number >= 0 && random_number <1/3){
        ComputerChoice ='rock';
        }
        else if(random_number >= 1/3 && random_number <2/3){
            ComputerChoice ='paper';
        }
        else if(random_number >= 2/3 && random_number <1){
            ComputerChoice ='scissors';
        }
        return ComputerChoice;
        }
        