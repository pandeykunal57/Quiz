var quizdata =[

    {
        question: "Which Framework is related to JS?",
        a:'.net',
        b: 'React',
        c: 'Angular',
        d: 'Vue',
        correct: "b"
    },

    {
        question: "Which is not a Programming language?",
        a:'.HTML',
        b: 'Python',
        c: 'C++',
        d: 'Java',
        correct: "a"
    },

    {
        question: "Which is not a Framework ?",
        a:'react',
        b: 'javascript',
        c: 'Angular',
        d: 'django',
        correct: "b"
    },

    {
        question: "CSS Stands for ?",
        a:'Cascading Style Sheet',
        b: 'React',
        c: 'Angular',
        d: 'Vue',
        correct: "a"
    }
]

var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var button=document.getElementById('submit')
var currentquestion = 0
var quizscore=0

loadquiz()
function loadquiz(){
    
    deselect()

    question.innerHTML=quizdata[currentquestion].question
    option_a.innerHTML=quizdata[currentquestion].a
    option_b.innerHTML=quizdata[currentquestion].b
    option_c.innerHTML=quizdata[currentquestion].c
    option_d.innerHTML=quizdata[currentquestion].d

}

function deselect(){
    answer.forEach(answer => answer.checked = false)
}

button.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer => {
        if(answer.checked){
            selectedoption=answer.id
        }

})

if(selectedoption==quizdata[currentquestion].correct)
{
    quizscore=quizscore+1
}
currentquestion=currentquestion+1

if(currentquestion==quizdata.length)
{
    document.getElementById('quizdiv').innerHTML= `<h1> You have answered ${quizscore}  correctly out of ${quizdata.length}</h1>`
}
loadquiz()
})