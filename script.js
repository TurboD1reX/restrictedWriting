
function char(event){
    var charLimit = 250;
    let currentChar = document.getElementById('currentChar').value.length;
    document.querySelector('.counter').innerHTML = `${currentChar} / 250`;
    if(currentChar >= charLimit && event.key !== "Backspace" && event.key !== "Delete"){
        document.querySelector('textarea').style.borderColor = "red";
        document.getElementById('currentChar').style.color = "red";
        document.querySelector('.counter').style.color = "red";
        event.preventDefault();
    }else if(currentChar < 250){
        document.querySelector('textarea').style.borderColor = "black";
        document.getElementById('currentChar').style.color = "black";
        document.querySelector('.counter').style.color = "black";
    }
}
