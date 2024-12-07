const container = document.querySelector('.container')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let fillcontainer = document.querySelector('.fillbox')
let turn1 = document.querySelector('.turn1')
let turn2 = document.querySelector('.turn2')
let turn = document.querySelector('.turn')
let clear = document.querySelector('.turn2')
let img = document.querySelectorAll('.img1 img, .img2 img'); 
console.log(img)





const SumFunc =()=>{
    const RandomNumber = () =>{
        let a = Math.floor(Math.random()*6+1)
        return a
    }
    
    let first = RandomNumber()
    
    box1.innerText = ""+first + ":" + "First Dice"
    
    const RandomNumber2 = () => {
        let b = Math.floor(Math.random()*6 +1)
        return b
    }
    
    let second = RandomNumber2()
    box2.innerText = ""+ second + ":" + "Second Dice"
    
    
    let c = first + second
    fillcontainer.innerText = c 
    
    if(c ===7 || c===11){
        console.log( c, "Winner")
        fillcontainer.innerText = c + "-"+  "Congratulations You Win" 
    }else if (c === 2 || c===3||c===12){
        console.log(c, "Loser")
        fillcontainer.innerText = c + "-"+    " Oops You Lose" 
    }else{
        console.log(c, "Try again")
        fillcontainer.innerText = c + "-" +  "Hey You Get Another Chance" 
    }
    
}


function Animate() {
    for (let i = 0; i < img.length; i++) {
        img[i].classList.add('revolution')
        
    }
}
Animate()



turn.addEventListener("click", SumFunc)
turn.addEventListener("click", Animate)


const StopFunc = ()=>{
     box1.innerText = "First Dice"
     box2.innerText = "Second Dice"
     fillcontainer.innerText = "Result"
}
clear.addEventListener('click',StopFunc )
