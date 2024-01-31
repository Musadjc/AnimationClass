// El que me paso Yenn comprobar porque no funciona !!!
/*const box = document.getElementById('box')

box.style.top = '0px'
let boxTop = 0
let speed = 20
let interval = setInterval(() =>{
    boxTop += speed 
    box.style.top = `${boxTop}`

    if (boxTop > 500-100-speed){
        clearInterval(interval)
    }
}, 500)*/



//El que hizo el profe
//const box = document.getElementById('box')
let boxTop1 = 0
let botTopLeft = 0
let boxTop2 = 0
let boxTopRigth = 400
let canvasHeight = 600
let canvaswidht = 600


//Box 1
setInterval(() => {
    boxTop1 += 5
    box.style.top = `${boxTop1}px`
}, 200)

setInterval(() => {
    boxTop1 += 5
    box.style.left = `${boxTop1}px`
}, 200)

//Box 2
setInterval(() => {
    boxTop2 += 5
    box2.style.top = `${boxTop2}px`
}, 200)

setInterval(() => {
    boxTop2 += 5
    box2.style.right = `${boxTop2}px`
}, 200)



