let second = document.querySelector(".second")
let score = document.querySelector(".score")
let level = document.querySelector(".level")
let reload = document.querySelector(".reload")
let lose = document.querySelector(".lose")
let loseTxt = document.querySelector(".lose-text")
let info = document.querySelector(".info")
let infoTxt = document.querySelector(".info-text")
let sound = document.querySelector("sound")

let sec = 20;
let scr = 0;
let lvl = 1;
second.innerHTML = `Time : ${sec}s`
score.innerHTML = `Score : ${scr}`
level.innerHTML = `Level : ${lvl}`

let frog = document.querySelector(".frog")

let a;
let b = 0
let click = 0;
frog.addEventListener("click", () => {

    if (click == 0) {
        score.innerHTML = `Score : ${scr}`
        frog.style.top = (Math.round(Math.random() * 80) + 10) + "%"
        frog.style.left = (Math.round(Math.random() * 80) + 10) + "%"
    }
    click++
    if (click == 1) {
        a = setInterval(() => {
            sec--
            if (sec > 0) {
                second.innerHTML = `Time : ${sec}s`
            }
            else {
                second.innerHTML = `Time : ${sec}s`
                second.style.color = "darkred"
                clearInterval(a)
                lose.style.display = "flex"
                lose.style.backgroundColor = "rgba(255, 0, 0, 0.403)"
                loseTxt.innerHTML = "You lose"
            }
            if(scr>=20 && scr<50){
                b++
                if(b==1){
                    lvl++
                    level.innerHTML = `Level : ${lvl}`
                    sec = 20
                    second.innerHTML = `Time : ${sec}s`
                }
                b=1
            }
            else if(scr>=50 && scr<85){
                b++
                if(b==2){
                    lvl++
                    level.innerHTML = `Level : ${lvl}`
                    sec = 20
                    second.innerHTML = `Time : ${sec}s`
                }
                b=2
            }
            else if(scr>=85){
                clearInterval(a)
                lose.style.display = "flex"
                lose.style.backgroundColor = "rgba(38, 255, 0, 0.403)"
                loseTxt.innerHTML = "You win 🌟"
                b=0
            }
        }, 1000)
        
        reload.addEventListener("click", () => {
            b = 0
            lvl = 1
            level.innerHTML = `Level : ${lvl}`
            lose.style.display = "none"
            click = 0
            sec = 20
            second.innerHTML = `Time : ${sec}s`
            frog.style.top = "50%"
            frog.style.left = "50%"
            second.style.color = "black"
            scr = 0
            score.innerHTML = `Score : ${scr}`
            clearInterval(a)
        })

    }
})

frog.addEventListener("click", () => {
    if (sec > 0) {
        scr++
        score.innerHTML = `Score : ${scr}`
        frog.style.top = (Math.round(Math.random() * 80) + 10) + "%"
        frog.style.left = (Math.round(Math.random() * 80) + 10) + "%"
    }
    else {
        frog.style.top = "50%"
        frog.style.left = "50%"
    }
})
let c = 0
info.addEventListener("click",()=>{
    c++
    if(c%2==1){
        infoTxt.style.display = "flex"
    }
    else{
        infoTxt.style.display = "none"
        c=0
    }
})