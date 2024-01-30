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
let boxTop = 0

setInterval(() => {
    boxTop += 5
    box.style.top = `${boxTop}px`
}, 200)


