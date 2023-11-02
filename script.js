const result=document.getElementById('result');
let newOperation = false;

function display(value){
    if (newOperation) {
        result.value = '';
        newOperation = false;
    }
   result.value += value;
}

function calculate(){
    let x = result.value;
    try {
        let y = eval(x);
        result.value = y;
        newOperation = true;  // Set the flag after a calculation
    } catch (e) {
        result.value = 'Error';
    }
}


document.getElementById('clear').addEventListener('click', function() {
    result.value = '';
});


document.addEventListener('keydown', function(event) {
    const validKeys = "0123456789/*-+.";
    let x = result.value;
    if (validKeys.includes(event.key) || event.key === 'Enter' || event.key === 'Backspace') {
        event.preventDefault();
        if(newOperation){
            result.value = '';
            newOperation = false;
        }  else  if (event.key === 'Enter') {
            try {
             let y = eval(x);  
               result.value=y;
                newOperation=true;
            } catch {
                result.value = 'Error';
            }
        } else if (event.key === 'Backspace') {
            result.value = result.value.slice(0, -1);
        } else{
            result.value += event.key;
        }
    }
});

