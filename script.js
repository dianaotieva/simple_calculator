let newOperation = false;
function display(value){
    if (newOperation) {
        document.getElementById("result").value = '';
        newOperation = false;
    }
    document.getElementById("result").value += value;
}

function calculate(){
    let x = document.getElementById("result").value;
    try {
        let y = eval(x);
        document.getElementById("result").value = y;
        newOperation = true;  // Set the flag after a calculation
    } catch (e) {
        document.getElementById("result").value = 'Error';
    }
}

function clearInput(){
    document.getElementById('result').value = ''
}



