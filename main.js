let words = ['javascript', 'html', 'css', 'algoritmo', 'logica', 'tecnologia', 'php', 'java', 'python', 'array', 'django', 'flask', 'ruby', 'reactjs', 'jquery', 'mobile', 'lavarel', 'nodejs', 'reactnative', 'linguagem', 'spring', 'bootsrap', 'informatica', 'arduino','flutter', 'desktop', 'web', 'devops', 'desenvolvedor', 'software']

function changeTheme(event){
    let id = event.target.getAttribute('id')
    if(id == 'programing'){
        words = ['javascript', 'html', 'css', 'algoritmo', 'logica', 'tecnologia', 'php', 'java', 'python', 'array', 'django', 'flask', 'ruby', 'reactjs', 'jquery', 'mobile', 'lavarel', 'nodejs', 'reactnative', 'linguagem', 'spring', 'bootsrap', 'informatica', 'arduino','flutter', 'desktop', 'web', 'devops', 'desenvolvedor', 'software']
        closeModal(1)
        start()
        changeThemeTitle(1)
    } else if(id == 'animals'){
        words = ['girafa', 'cachorro', 'gato', 'leao', 'macaco', 'elefante', 'rinoceronte', 'capivara', 'tamandua', 'hipopotamo', 'zebra', 'cavalo', 'galinha', 'porco', 'coelho', 'touro', 'vaca', 'sapo', 'rato', 'linguagem', 'ovelha', 'bootsrap', 'tigre', 'cabra','urso', 'furao', 'anta', 'burro', 'esquilo', 'lemore']
        closeModal(1)
        start()
        changeThemeTitle(2)
    } else if(id == 'countries'){
        words = ['argentina', 'angola', 'chile', 'china', 'brasil', 'canada', 'mexico', 'alemanha', 'italia', 'japao', 'franca', 'holanda', 'peru', 'australia', 'inglaterra', 'panama', 'russia', 'uruguai', 'belgica', 'camaroes', 'egito', 'ira', 'escocia', 'tailandia','colombia', 'dinamarca', 'catar', 'noruega', 'jamaica', 'lemore']
        closeModal(1)
        start()
        changeThemeTitle(3)
    } else if(id == 'fruits'){
        words = ['pera', 'maca', 'abacate', 'tomate', 'morango', 'amora', 'banana', 'kiwi', 'mexirica', 'laranja', 'guarana', 'acerola', 'carambola', 'cereja', 'coco', 'figo', 'goiaba', 'groselha', 'jabutica', 'jaca', 'limao', 'mamao', 'escocia', 'manga','maracuja', 'melancia', 'pessego', 'pitanga', 'siriguela', 'uva']
        closeModal(1)
        start()
        changeThemeTitle(4)
    } else if(id == 'sports'){
        words = ['capoeira', 'futbol', 'volei', 'boxe', 'judo', 'carate', 'natacao', 'atletismo', 'canoagem', 'hipinismo', 'rugby', 'vela', 'basquete', 'beisebol', 'esgrima', 'tenis', 'surfe', 'handebol', 'boliche', 'badminton', 'ski', 'golfe', 'crossfit', 'biribol','skate', 'motociclismo', 'patinacao', 'handebol', 'danca', 'hoquei']
        closeModal(1)
        start()
        changeThemeTitle(5)
    } else if(id == 'objects'){
        words = ['ábaco', 'agulha', 'banco', 'cadeira', 'mesa', 'flauta', 'colher', 'sofa', 'bandeira', 'cama', 'armario', 'cadeado', 'caderno', 'chinelo', 'dado', 'elastico', 'faco', 'gaiola', 'guardanapo', 'roupa', 'parafuso', 'peruca', 'quadro', 'aspirador','navalha', 'vassoura', 'microfone', 'mascara', 'martelo', 'livro']
        closeModal(1)
        start()
        changeThemeTitle(6)
    }
}

// let words = ['javascript', 'curso', 'computador', 'transporte', 'livraria', 'tecnologia', 'controle', 'brasil', 'impressora', 'xicara', 'telefone', 'internet', 'camera', 'monitor', 'brinquedo', 'youtube', 'portaria', 'escola', 'carnaval', 'teclado', 'guitarra', 'bateria', 'chinelo', 'helicoptero','arduino', 'professor', 'mouse', 'linguagem']
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
let correctWord



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
                    drawings[misses].style.opacity = 1
                } else {
                    document.getElementById('head').src = 'imgs/cabeca2.png'
                    // document.getElementById('dvmsg').innerHTML = 'PERDEU'
                    let situation = document.querySelector('#finalGame')
                    situation.innerHTML = 'PERDEU!'
                    situation.style.color = '#e26c6c'
                    document.querySelector('#correctWordContainer').style.display = 'flex'
                    document.querySelector('#correctWord').innerHTML = correctWord
                    openModal(2)
                    playing = false
                }
            }
            changeButtonColor(letter.toUpperCase(), success)
            if(hits == wordLength){
                // document.getElementById('dvsmg').innerHTML = 'GANHOU'
                let situation = document.querySelector('#finalGame')
                situation.innerHTML = 'VENCEU!'
                situation.style.color = '#12c112'
                document.querySelector('#correctWordContainer').style.display = 'none'
                openModal(2)
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
    correctWord = word
    wordLength = word.length
    defineWords(wordLength)
    drawings[1] = document.getElementById('head')
    drawings[2] = document.getElementById('leftHand')
    drawings[3] = document.getElementById('rightHand')
    drawings[4] = document.getElementById('leftFoot')
    drawings[5] = document.getElementById('rightFoot')
    document.getElementById('head').src = 'imgs/cabeca1.png'
    for(let i=1; i<6; i++){
        drawings[i].style.opacity = 0
    } 

    const buttonsKey = document.querySelectorAll('.key')
    console.log(buttonsKey)
    buttonsKey.forEach((button) => button.classList.remove('success', 'notsuccess'))

    const themes = document.querySelectorAll('.theme')
    console.log(themes)
    themes.forEach((theme) => {
        theme.addEventListener('click', changeTheme)
    })

    closeModal(2)





    // keys.forEach(function(key){
    //     key.addEventListener('click', playBoard) 
    // })
    
}

// function dica(){
//     alert(word)
//     letterPlayer.focus()
// }

function openModal(m){
    if(m == 1){
        const modal = document.querySelector('#chooseThemeModal.modal')
        modal.classList.add('visibled')
    } else if(m == 2) {
        const modal = document.querySelector('#finalGameModal.modal')
        modal.classList.add('visibled')
    }
}

function closeModal(m){
    if(m == 1){
        const modal = document.querySelector('#chooseThemeModal.modal')
        modal.classList.remove('visibled')
    } else if(m == 2) {
        const modal = document.querySelector('#finalGameModal.modal')
        modal.classList.remove('visibled')
    }
}

function changeThemeTitle(theme){
    let choosenTheme = document.querySelector('#theme')
    switch(theme){
        case 1:
            choosenTheme.innerHTML = ' Programação';
        break
        case 2:
            choosenTheme.innerHTML = ' Animais';
        break
        case 3:
            choosenTheme.innerHTML = ' Países';
        break
        case 4:
            choosenTheme.innerHTML = ' Frutas';
        break
        case 5:
            choosenTheme.innerHTML = ' Esportes';
        break
        case 6:
            choosenTheme.innerHTML = ' Objetos';
        break
    }
}


window.addEventListener('load', start)