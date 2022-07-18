// let keys = document.querySelectorAll("div.key")
// console.log(keys)

let keys = document.querySelectorAll("div.key")
console.log(keys)


let words = ['javascript', 'curso', 'computador', 'transporte', 'livraria', 'tecnologia', 'controle', 'brasil', 'impressora', 'xicara', 'telefone', 'internet', 'camera', 'monitor', 'brinquedo', 'youtube', 'portaria', 'escola', 'carnaval', 'teclado', 'guitarra', 'bateria', 'chinelo', 'helicoptero','arduino', 'professor', 'mouse', 'linguagem']
let wordsQuantinity = words.length-1
let position = Math.round(Math.random()*wordsQuantinity)
let word = words[position]
let wordLength = word.length
let cxLetras = []
let hits = 0
let maxMisses = 7
let misses = 0
let drawings = []
let success = false
let playing = false
let letterPlayer
let caracterBoard



function defineWords(letters){
    let obj
    for(let i = 0; i < 20; i++){
        obj = document.getElementById('letter' + i).value = ''
        obj = document.getElementById('letter' + i).style.display = 'none'
    }
    for(let i = 0; i < letters; i++){
        obj = document.getElementById('letter' + i).style.display = 'inline-block'
    }
}

function game(letter){
    let obj, letterPosition, search
            success = false
            search = word.match(letter)
            while(search != null){
                letterPosition = word.search(letter)
                obj = document.getElementById('letter' + letterPosition).value = letter
                word = word.replace(letter, '0')
                hits++
                search = word.match(letter)
                success = true
            }
            if(!success){
                // document.getElementById('typedLetters').innerHTML += letter.toUpperCase()
                misses++
                if(misses < 6){
                    drawings[misses].style.visibility = 'visible'
                } else {
                    document.getElementById('head').src = 'imgs/cabeca2.png'
                    // document.getElementById('dvmsg').innerHTML = 'PERDEU'
                    alert('PERDEU')
                    playing = false
                }
            }
            changeButtonColor(letter.toUpperCase(), success)
            if(hits == wordLength){
                // document.getElementById('dvsmg').innerHTML = 'GANHOU'
                alert('GANHOU')
                playing = false
            }
}

function changeButtonColor(letter, success){
    let keycode = letter.charCodeAt(0)
    let button = document.querySelector(`button[data-key="${keycode}"]`)
    if(success) {
        button.classList.add('success')
    } else {
        button.classList.add('notsuccess')
    }
}

function play(){
    letterPlayer = document.getElementById('playLetter')
    letterPlayer.focus()
    if(letterPlayer.value == ''){
        alert('Digite uma letra')
    } else {
        if(playing){
            game(letterPlayer.value)
            letterPlayer.value = ''
        }
    }
}


function playBoard(event){
    let keyCode = event.target.dataset.key
    caracterBoard = String.fromCharCode(keyCode).toLocaleLowerCase()  
    if(playing){
        game(caracterBoard)
    }
}



function start(){
    playing = true
    letterPlayer = document.getElementById('playLetter')
    letterPlayer.value = ''
    letterPlayer.focus()
    hits = 0
    misses = 0
    success = false
    position = Math.round(Math.random()*wordsQuantinity)
    word = words[position]
    wordLength = word.length
    defineWords(wordLength)
    drawings[1] = document.getElementById('head')
    drawings[2] = document.getElementById('leftHand')
    drawings[3] = document.getElementById('rightHand')
    drawings[4] = document.getElementById('leftFoot')
    drawings[5] = document.getElementById('rightFoot')
    document.getElementById('head').src = 'imgs/cabeca1.png'
    for(let i=1; i<6; i++){
        drawings[i].style.visibility = 'hidden'
    } 

    let buttonsKey = document.querySelectorAll('.key')
    console.log(buttonsKey)
    buttonsKey.forEach(function(button){
        button.classList.remove('success', 'notsuccess')
    })





    // keys.forEach(function(key){
    //     key.addEventListener('click', playBoard) 
    // })
    
}

// function dica(){
//     alert(word)
//     letterPlayer.focus()
// }

function openModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('visibled')
}

function closeModal(){
    const modal = document.querySelector('.modal')
    modal.classList.remove('visibled')
}


window.addEventListener('load', start)