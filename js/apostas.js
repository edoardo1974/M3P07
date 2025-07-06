var aposta = 0;
var dinero = 50;
var numerointroduzido = 0;
var numdado = 0;



function dado() {
    numdado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('saidaDado').textContent = 'O número do dado é: ' + numdado;
    return numdado;
}



function pecaNumero() {
    const input = document.getElementById('inputNumero');
    const numero = input.value;

    input.value = '';
    console.log("Número inserido:", numero);
    return numero;
}

function pecaApostas() {
    const input = document.getElementById('inputAposta');
    const numero = input.value;

    input.value = '';
    console.log("Apostas inserida:", numero);
    return numero;
}



function adicionarNumero() {
    numerointroduzido = pecaNumero();
    if (!verificacaoNumero(numerointroduzido)) {
        return Number(numerointroduzido);
    }
}

function adicionarAposta() {
    aposta = pecaApostas();
    if (!verificacaoNumero(aposta)) {
        return Number(aposta);
    }
}

function verificacaoNumero(numero)// Function to verify if the input is a letter
{
    const numerodaverificar = Number(numero);
    if (!Number.isInteger(numerodaverificar)) {
        alert("Por favor, introduza apenas números inteiros.");
        return false;
    }
    return true;
}

function ganharojogo() {
    if (dinero == 200) {
        alert("Você ganhou! Seu novo saldo é: " + dinero);
    } 
}

function perderojogo() {
    if (dinero == 0) {
        alert("Você perdeu! já não tem dinheiro. GAME OVER! ");
    } 
}

function ganharTurno() {
    dinero += 2*aposta;
    document.getElementById('resultadoAposta').textContent = `Você apostou: ${aposta} e ganhou. O número sorteado foi: ${numdado}. Você escolheu o número: ${numerointroduzido}.`;

    ganharojogo();
}

function perderTurno() {
    dinero -= aposta;
    document.getElementById('resultadoAposta').textContent = `Você apostou: ${aposta} e perdeu. O número sorteado foi: ${numdado}. Você escolheu o número: ${numerointroduzido}.`;
    perderojogo();
}

function jogar() {
    const numero = dado();
    const aposta = adicionarAposta();
    const numeroIntroduzido = adicionarNumero();

    if (numero === numeroIntroduzido) {
        ganharTurno();
    } else {
        perderTurno();
    }
}

    