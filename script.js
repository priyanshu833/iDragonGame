let dino = document.querySelector('.dino')
let gameOver = document.querySelector('.gameOver')
let obstacle = document.querySelector('.obstacle')
let audioElement = new Audio('gameOver.mp3')
let audioElement1 = new Audio('music.mp3')

setTimeout(()=>{
    audioElement1.play()
},1000)
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino.classList.add('animateDino');
        setTimeout(()=>{
        dino.classList.remove('animateDino');
        }, 700)
    }
    if(e.keyCode==39){
        let dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dinoX + 95) + 'px';
    }
    if(e.keyCode==37){
        let dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dinoX - 95) + 'px';
    }
}

setInterval(()=>{
    let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')) 
    let oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')) 

    let offSetX = Math.abs(dx-ox);
    offSetY = Math.abs(dy-oy);
    if(offSetX<60 && offSetY<60){
        gameOver.style.visibility ='visible';
        obstacle.classList.remove('obstacleAni')
        obstacle.style.left = 'offSetX';
        gameContainer=document.getElementsByClassName('gameContainer')
        gameContainer.style.visibility='hidden';
        audioElement1.pause()
        audioElement.play()
        setTimeout(()=>{
            audioElement.pause()
        },1000)
    }
})