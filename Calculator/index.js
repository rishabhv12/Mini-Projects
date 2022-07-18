function display(value){
     document.getElementById('textarea').value +=value
}
function calculate(){
     var x =0;
     var value = document.getElementById('textarea').value
     var ans = eval(value)
     document.getElementById('output').value = ans
}
function clr(){
     document.getElementById("textarea").value =''
     document.getElementById('output').value = ''
}