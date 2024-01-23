let titleQuestion = document.getElementById('titleQuestion')
let buttonSumbit = document.getElementById("buttonSumbit")
let buttonTry =  document.getElementById("buttonTry")
let questionOne = document.getElementById("question1")
let questionTwo = document.getElementById("question2")
let questionTree = document.getElementById("question3")
let questionFour = document.getElementById("question4")
let inputAswers = document.getElementById('questions')

const questions = document.querySelector("#questions")
let textPoint = document.querySelector('h4')
let allInput = document.querySelectorAll('.option')

let allCorrect = 0
let question = 1

buttonSumbit.style.display === 'none'  

const questoes = [
    {
        numberQuestion: 1,
        title: "Qual foi a músicas mais populares no Brasil nos anos 2000?",
        questions: [
            {question1: "O Canto da Cidade - Daniela Mercury", correct: true, numb: 'question1',},
            {question2: "Hey Jude - The Beatles", correct: false, numb: 'question2'} ,
            {question3: "A Luz de Tieta - Caetano Veloso", correct: false, numb: 'question3'},
            {question4: "Garota de Ipanema - Tom Jobim e Vinícius de Moraes", correct: false, numb: 'question4'},
        ]
    },
    {
        numberQuestion: 2,
        title: "Quem foi o artista mais destacados na cena musical brasileira em 2000?",
        questions: [
            {question1: "Roberto Carlos", correct: false, numb: 'question1'},
            {question2: "Anitta", correct: false, numb: 'question2'},
            {question3: "Marisa Monte", correct: true, numb: 'question3'},
            { question4: "Froid", correct: false, numb: 'question4'},
        ]
    },
    {
        numberQuestion: 3,
        title: "Qual foi a música brasileira mais premiada em 2000?",
        questions: [
            {question1: "Cachorro Louco do Froid", correct:false, numb: 'question1'}, 
            {question2: "Ainda Gosto Dela do Skank", correct:true, numb: 'question2'},
            {question3: "Show das poderosas do Anitta", correct:false, numb: 'question3'},
            {question4: "Anos luzes do matue", correct:false, numb: 'question4'}
        ]
    },
    {
        numberQuestion: 4,
        title: "Quais gêneros musicais estavam em alta na cena brasileira em 2000?",
        questions: [
            {question1: "Pop, Rock e MPB", numb: 1, correct: true, numb: 'question1'},
            {question2: "RAP, Funk e MPB", correct: false, numb: 'question2'},
            {question3: "Rock, Trap e Brega", correct: false, numb: 'question3'},
            {question4: "Forró, RAP e Trap", correct: false, numb: 'question4'},
        ]
    },
]


function start() {
    document.getElementById("start").style.display = "none"
    document.getElementById("content").style.display = "block"
}

function addQuestions() {
    questoes.forEach(item => {
        buttonTry.style.display = 'none'
        if(item.numberQuestion === question){
            titleQuestion.innerText = item.title
            
            questionOne.value = item.questions[0].question1
            questionTwo.value = item.questions[1].question2
            questionTree.value = item.questions[2].question3
            questionFour.value = item.questions[3].question4

           
            let allQuestion = item.questions
            let alreadyClick = false
            
            allInput.forEach((button) => {
                button.classList.remove('correct')
                button.classList.remove('incorrect')
                buttonSumbit.style.display = 'none' 
                button.addEventListener("click", () => {
                    allQuestion.forEach(item => {
                        if(item.correct === true && item.numb === button.id && alreadyClick === false){
                            button.classList.add('correct')
                            alreadyClick = true
                            allCorrect += 1
                            textPoint.innerText = `Pontuação: ${allCorrect}`
                            buttonSumbit.style.display = 'block' 
                            
                             
                        }else if(item.correct === false && item.numb === button.id && alreadyClick === false)  {    
                            button.classList.add('incorrect')
                            alreadyClick = true   
                            buttonSumbit.style.display = 'block'  
                        }
                        
                    })
                })
            })

            
        } else if(question > 4){
            titleQuestion.innerText = ''
            document.getElementById('textTry').innerText = `Você acertou ${allCorrect}`
            if(allCorrect !== 4) {
                buttonTry.style.display = 'block'
            }else{
                buttonTry.style.display = 'none'
                document.getElementById('contentGif').style.display = 'block'
                document.querySelector('main').style.padding = '5px'
            }   
            
            buttonSumbit.style.display = 'none' 
            questionOne.style.display = 'none'
            questionTwo.style.display = 'none'
            questionTree.style.display = 'none'
            questionFour.style.display = 'none'
        }
       
    })
}

buttonSumbit.addEventListener("click", (e) => {
    e.preventDefault()
    question += 1
    addQuestions()
})

addQuestions()