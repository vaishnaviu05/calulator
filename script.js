var screen = document.querySelector(".expression")
var buttons = document.querySelectorAll(".btn")
screen.value = ""
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        screen.value = screen.value+button.getAttribute("data")
    })
})
function solve(){
    var expr = screen.value
    var result = eval(expr)
    screen.value = result
}
function clearData(){
    screen.value = ""
}
