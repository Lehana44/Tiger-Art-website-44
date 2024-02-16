function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearInput() {
    document.getElementById('result').value = '';
}

function calculate() {
    let expression = document.getElementById('result').value;
    try {
        let result = eval(expression)
        document.getElementById('result').value = result;
        console.log(result);
    } catch (error) {
        document.getElementById('result').value = 'Syntax Error';
    }
}

function backSpace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}