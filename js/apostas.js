var aposta = 0;
var dinero = 50;
var numerointroduzido = 0;
var numdado = 0;



function dado() {// Function to simulate a dice roll
    numdado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('saidaDado').textContent = 'O número do dado é: ' + numdado;
    return numdado;
}


function pecaNumero() {// Function to get the number input from the user
    if(dinero>0)
        {// Check if the player has money to play
        const input = document.getElementById('inputNumero');
        numerointroduzido = Number(input.value);
        input.value = '';
        return numerointroduzido;
    } else {
        alert("Você não tem dinheiro suficiente para jogar. Por favor, aposte novamente.");
        return 1;
    }
}


function pecaApostas() {// Function to get the bet amount from the user
    if(dinero>0)
    {
        const input = document.getElementById('inputAposta');
        aposta = Number(input.value);
        input.value = '';
        //console.log("Apostas inserida:", aposta);
        return aposta;
    } else {
        alert("Você não tem dinheiro suficiente para jogar. Por favor, aposte novamente.");
        return null;
    }
}


function adicionarNumero() {// Function to add the number input
    numerointroduzido = pecaNumero();
    if (numerointroduzido < 1 || numerointroduzido > 6) {// Check if the number is between 1 and 6
    alert("Por favor, escolha um número entre 1 e 6.");
    return false;
    }
    else if (verificacaoNumero(numerointroduzido)) {
        return numerointroduzido;
    }
}

function adicionarAposta() {// Function to add the bet amount
    aposta = pecaApostas();
    if (aposta == 0) {// Check if the bet amount is zero
    alert("Por favor, escolha um número válido para a aposta.");
    return false;
    }
    if (verificacaoNumero(aposta)) {
        return aposta;
    }
}

function verificacaoNumero(numero)// Function to verify if the input is a letter
{
    const numerodaverificar = Number(numero);
    if (!Number.isInteger(numerodaverificar)) {
        alert("Por favor, introduza apenas números inteiros.");
        return false;
    }
}

function ganharojogo() {// Function to check if the player has won the game
    if (dinero >= 200) {
        alert("Você ganhou! Seu novo saldo é: " + dinero);
    } 
}

function perderojogo() {// Function to check if the player has lost the game
    if (dinero == 0) {
        alert("Você perdeu! já não tem dinheiro. GAME OVER! ");
    } 
}

function ganharTurno() {// Function to handle winning a turn
    dinero += 2*aposta;
    adicionarMensagem('Você apostou:' + aposta + ' e ganhou. O número sorteado foi:' + numdado + '. Você escolheu o número: ' + numerointroduzido + '.')
    ganharojogo();
}

function perderTurno() {// Function to handle losing a turn
    dinero -= aposta;
    adicionarMensagem('Você apostou:' + aposta + ' e perdeu. O número sorteado foi:' + numdado + '. Você escolheu o número: ' + numerointroduzido + '.')
    perderojogo();
}

function adicionarMensagem(testo) {// Function to add a message to the result div
    const div = document.getElementById('resultadoAposta');
    const novoparágrafo = document.createElement('p');
    novoparágrafo.textContent = testo;
    div.appendChild(novoparágrafo);
}

function jogar() {// Function to handle the game logic
    const numero = dado();

        if (numero == numerointroduzido) {
            ganharTurno();
            adicionarMensagem("O seu saldo de pontos é: " + dinero);
        } else {
            perderTurno();
            adicionarMensagem("O seu saldo de pontos é: " + dinero);
        }
}
    