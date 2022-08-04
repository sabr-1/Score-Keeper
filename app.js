const p1btn=document.querySelector('#p1Button');
const p2btn=document.querySelector('#p2Button');
const resetbtn=document.querySelector('#resetButton');
const dropDown=document.querySelector('#max-score');

const p1Score=document.querySelector('#p1Score');
const p2Score=document.querySelector('#p2Score');

let maxScore=5;
let isGameOver=(parseInt(p1Score.innerText)>=maxScore || parseInt(p2Score.innerText)>=maxScore);



function updateScore(obj,obj2){
    if(!isGameOver){
        let playerScore=parseInt(obj.innerText);
        playerScore++;
        if(playerScore==maxScore){
            isGameOver=true;
            obj.classList.add('has-text-success');
            obj2.classList.add('has-text-danger');
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        obj.innerText=playerScore;
    }
    
}

function resetFunc(){
    p1Score.innerText=0;
    p2Score.innerText=0;
    if(isGameOver){
        p1Score.classList.remove('has-text-success');
        p2Score.classList.remove('has-text-success','has-text-danger');
        p1Score.classList.remove('has-text-danger');
        p1btn.disabled=false;
        p2btn.disabled=false;
        
        isGameOver=false;
    }
    
}

dropDown.addEventListener('change',function(){
    maxScore=parseInt(this.value);
    resetFunc();
})


p1btn.addEventListener('click',function(){
    updateScore(p1Score,p2Score);
   
       
    

})

p2btn.addEventListener('click',function(){
  
    updateScore(p2Score,p1Score);
   
     
    

})

resetbtn.addEventListener('click', resetFunc);

