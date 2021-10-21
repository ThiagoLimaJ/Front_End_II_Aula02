let wusuario = 0;
let wmaquina = 0;

for (i = 1; i <= 3; i++) {

    let usuario = parseInt(prompt(i + "° jogo! Escolha: Pedra(1), papel(2) ou tesoura(3)?"));
    //console.log(typeof(usuario)) // string

    let maquina = parseInt(Math.random() * 3 + 1);

    switch (usuario) {
        case 1:
            console.log("Usuário escolheu Pedra(1)!");
            switch (maquina) {
                case 1:
                    console.log("Máquina escolheu Pedra(1)!");
                    console.log("Empate!");
                    alert("Usuário e a máquina escolheram Pedra(1), causando um empate!");
                    break;
                case 2:
                    console.log("Máquina escolheu Papel(2)!");
                    console.log("Máquina Ganhou!");
                    alert("Usuário escolheu Pedra(1) e a máquina escolheu Papel(2), máquina ganhou o " + i + "° jogo!");
                    wmaquina++;
                    break;
                case 3:
                    console.log("Máquina escolheu Tesoura(3)!");
                    console.log("Usuário Ganhou!");
                    alert("Usuário escolheu Pedra(1) e a máquina escolheu Tesoura(3), usuário ganhou o " + i + "° jogo!");
                    wusuario++;
                    break;
            }
            break;
        case 2:
            console.log("Usuário escolheu Papel(2)!");
            switch (maquina) {
                case 1:
                    console.log("Máquina escolheu Pedra(1)!");
                    console.log("Usuário Ganhou!");
                    alert("Usuário escolheu Papel(2) e a máquina escolheu Pedra(1), usuário ganhou o " + i + "° jogo!");
                    wusuario++;
                    break;
                case 2:
                    console.log("Máquina escolheu Papel(2)!");
                    console.log("Empate!");
                    alert("Usuário e a máquina escolheram Papel(2), causando um empate!");
                    break;
                case 3:
                    console.log("Máquina escolheu Tesoura(3)!");
                    console.log("Máquina Ganhou!");
                    alert("Usuário escolheu Papel(2) e a máquina escolheu Tesoura(3), máquina ganhou o " + i + "° jogo!");
                    wmaquina++;
                    break;
            }
            break;
        case 3:
            console.log("Usuário escolheu Tesoura(3)!");
            switch (maquina) {
                case 1:
                    console.log("Máquina escolheu Pedra(1)!");
                    console.log("Máquina Ganhou!");
                    alert("Usuário escolheu Tesoura(3) e a máquina escolheu Pedra(1), máquina ganhou o " + i + "° jogo!");
                    wmaquina++;
                    break;
                case 2:
                    console.log("Máquina escolheu Papel(2)!");
                    console.log("Usuário Ganhou!");
                    alert("Usuário escolheu Tesoura(3) e a máquina escolheu Papel(2), usuário ganhou o " + i + "° jogo!");
                    wusuario++;
                    break;
                case 3:
                    console.log("Máquina escolheu Tesoura(3)!");
                    console.log("Empate!");
                    alert("Usuário e a máquina escolheram Tesoura(3), causando um empate!");
                    break;
            }
            break;
    }
}


if (wusuario >= 2) {
    console.log("Usuário Ganhou! " + wusuario + "x" + wmaquina + " para o usuário!");
    alert("Usuário Ganhou! " + wusuario + "x" + wmaquina + " para o usuário!");
} else if (wmaquina >= 2) {
    console.log("Máquina Ganhou! " + wmaquina + "x" + wusuario + " para a máquina");
    alert("Máquina Ganhou! " + wmaquina + "x" + wusuario + " para a máquina");
} else {
    console.log("Empatou!");
    alert("Empatou!");
}