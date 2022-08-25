const body = document.querySelector('body')
const colorCode = document.getElementById('color-code')
const button = document.getElementById('button')

const input = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

addEventListener('click', click)

function click(){
    let hexCode = '#'
    for(let i=0; i < 6; i++){
        const num = Math.round(Math.random() * 15)
        hexCode += input[num]
    }
    body.style.backgroundColor = hexCode
    colorCode.innerText = hexCode
}
