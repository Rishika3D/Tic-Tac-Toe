var btn= document.querySelectorAll('.box')
var reset= document.querySelector(".reset");
var result= document.querySelector('p')
var winPt= [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var clicked= true;
let gameOver= false;
let count=0;
const winner=()=>{
    for(let patterns of winPt){
        let pos1= btn[patterns[0]].innerText
        let pos2= btn[patterns[1]].innerText
        let pos3= btn[patterns[2]].innerText
        if(pos1 != '' && pos2 != '' && pos3!= ''){
            if(pos1===pos2 && pos2===pos3){
                console.log(`Winner is ${pos1}`);
                result.innerText= `Congratulations!! The winner is ${pos1}`
                gameOver= true
                btn.forEach((box)=>{
                    box.disabled= true;
                })
                return;
            }
        }
    }
}


btn.forEach((box)=>
 box.addEventListener('click', ()=>{
    if(clicked){
        box.innerText= 'X'
        clicked= false;
    }else{
        box.innerText='O';
        clicked= true

    }
    count++;
    winner();
    if(!gameOver && count===9){
         result.innerText= "It's a draw!!"
    }
        box.disabled= true;
}))

reset.addEventListener('click', ()=>{
    btn.forEach((box)=>{
        box.innerText='';
        box.disabled= false;
    })
    clicked = true;
    gameOver = false;
    result.innerText = '';
})

