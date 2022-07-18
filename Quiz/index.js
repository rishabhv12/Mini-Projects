var quizdata=[
     {
          question : "What is a constant that contains a single character enclosed within single quotes?",
          a:'Character',
          b:'Numeric',
          c:'Fixed',
          d:'Floating point',
          correct :'a'
     },
     {
          question : "The special characters like tab, backspace, line feed, null, back slash are called ____ character constant",
          a:'Floting',
          b:'String',
          c:'Graphic',
          d:'Non-graphic',
          correct :'d'
     },
     {
          question : "How many fundamental data types are there in C++?",
          a:'1',
          b:'2',
          c:'3',
          d:'4',
          correct :'c'
     },
     {
          question : "Which one gives special meaning to the language compiler?",
          a:'Constant',
          b:'Variable',
          c:'Keyword',
          d:'Compiler',
          correct :'c'
     },
     {
          question : "The member function can always access the data in",
          a:'Any object of the class of which it is a member',
          b:'The public part of its class',
          c:'The class of which it is member',
          d:'The object of which is a member',
          correct :'d'
     }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var submitbtn = document.getElementById('submit')
var restart= document.getElementById('restart');
var cur_que =0
var score =0

loadQuiz()

function loadQuiz(){
     deselect() 
     question.innerHTML = quizdata[cur_que].question
     option_a.innerText = quizdata[cur_que].a
     option_b.innerText = quizdata[cur_que].b
     option_c.innerText = quizdata[cur_que].c
     option_d.innerText = quizdata[cur_que].d
}

function deselect(){
     answer.forEach(answer=> answer.checked =false)
}

submitbtn.addEventListener('click', ()=>{
     var selectedoption;
     answer.forEach(answer=>{
          if(answer.checked){
               selectedoption=answer.id
          }
          
     })
     if(selectedoption==quizdata[cur_que].correct){
          score = score+1
     }
     cur_que = cur_que+1
     if(cur_que==quizdata.length){
          document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${score} question correctly out of ${quizdata.length}</h1>`
     }
     else loadQuiz()
})

restart.addEventListener('click', ()=>{
    cur_que = 0
    score = 0
    loadQuiz()
})