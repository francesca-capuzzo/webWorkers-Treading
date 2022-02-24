

const primeWorker = new Worker("./worker.js") //WORKER è una classe di javascript che lavora su un tread diverso da quello della pagina web principale

primeWorker.addEventListener('message', messageReceived2)
// primeWorker.postMessage("ciao"); //--> console printa [object MessageEvent] --> vuol dire che il worker ha ricevuto l'evento dallo script.
// primeWorker.postMessage(1000000); //aggiungo linea 21 e passo quello come message dopo aver aggiunto una seconda funzione al worker
let message = {operation: "prime", numberToReach: 100000};
let message2 = {operation: "sum", numberToReach: 100000};
//primeWorker.postMessage(message);
primeWorker.postMessage(message2);
let loader = document.getElementById('loader');
loader.style.display = 'inline-block';



function messageReceived2(event) {
    loader.style.display = 'none';
    if (event.data.operation === "prime") {
        // console.log("messaggio ricevuto dal worker: " + event.data);
        let primeToNumber = event.data.result;
        let par = document.getElementById('prime-numbers')

        for (const prime of primeToNumber) {
            const node = document.createTextNode(prime + " ");
            par.appendChild(node);
        }

    } else {
        let par = document.getElementById('prime-numbers');
        let sum = event.data.result;
        const node = document.createTextNode(sum);
        par.appendChild(node);
    }
}

