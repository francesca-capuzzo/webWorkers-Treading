//addEventListener('message', (event) => console.log(event));        //il worker tread ha come prima funzione un addEventListener con event = 'message'
addEventListener('message', messageReceived);                        //printa "messaggio ricevuto dallo script"

function messageReceived(event) {
    // let numberToReach = event.data;
    // let primeToNumber = calculatePrimeNumbersTo(numberToReach);
    // console.log("messaggio ricevuto dallo script: " + event.data);
    // postMessage(primeToNumber);

    if (event.data.operation === "prime") {
        let numberToReach = event.data.numberToReach;
        let primeToNumber = calculatePrimeNumbersTo(numberToReach);
        let message = {operation: "prime", result: primeToNumber} 
        postMessage(message);
    } else {
        let numberToReach = event.data.numberToReach;
        let sumToNumber = sumNumbersTo(numberToReach);
        let message = {operation: "sum", result: sumToNumber} 
        postMessage(message);
    }
}


function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number - 2}, (v, i) => i + 3);
    return array.reduce((p, c) => p.some(element => c % element === 0) ? p : [...p,c], [2]);
}


//LA PARTE DELLO SCRIVERE SULLA PAGINA WEB, VA ALLO SCRIPT:

// let par = document.getElementById('prime-numbers')

// for (const prime of primeTo100) {
//     const node = document.createTextNode(prime + " ");
//     par.appendChild(node);
// }


function sumNumbersTo(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result;
}