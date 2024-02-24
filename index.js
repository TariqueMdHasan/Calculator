function display(value){
    document.getElementById("screen").value += value;
}

function deleteAll(){
    document.getElementById("screen").value = "";
}

function deleteLastElement(){
    let eat= document.getElementById("screen").value.toString().slice(0,-1);
    document.getElementById("screen").value = eat;
}

function equate(){
    document.getElementById("screen").value = document.getElementById("screen").value.replace('x','*');

    let val= document.getElementById("screen").value;
    let sol= eval(val);
    document.getElementById("screen").value = sol;
}