const cria = document.getElementById("b");
const btn = document.getElementById("btn");
const fundoDia = "bg.png";
const fundoNoite = "bg_noite.jpg";
const btnGostosinho = document.getElementById("btn_gostosinho");
const imagemBotao = "botao.png";
const imagensGostosinho = [
    "gostosinho.jpeg",
    "gostosinho(1).jpeg",
    "gostosinho(2).jpeg",
    "gostosinho(3).jpeg",
    "gostosinho(4).jpeg",
    "gostosinho(5).jpeg",
    "gostosinho(6).jpeg",
];

let timeoutBotao = null;
let indiceAtual = 0;
let contadorHoras = 0;
let intervaloHoras = null;

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.puto;
            }

            if(contador == 60){
                cria.src = estados.morto;
            }
        }, 1000);
}

function alimentar(){
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if(timeoutClique)clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        cria.src = estados.alimentado;

       timeoutBack = setTimeout(() => {
        cria.src = estados.normal;
       }, 2000); 
    }, 1000); 
}

function atualizarFundo(){
    if (intervaloHoras) clearInterval(intervaloHoras);

    intervaloHoras = setInterval(() => {
        contadorHoras++;

        console.log("Hora atual do dia:", contadorHoras);

        if (contadorHoras >= 12 && contadorHoras < 24) {
            document.body.style.backgroundImage = `url(${fundoNoite})`;
            console.log("Fundo atualizado para noite");
        } else {
            document.body.style.backgroundImage = `url(${fundoDia})`;
            console.log("Fundo atualizado para dia");
        }
        if (contadorHoras >= 24) {
            contadorHoras = 0;
        }
    }, 1000);
}

function revelarSegredo(){
    const btnGostosinho = document.getElementById("btn_gostosinho");
    const imagemOriginal = "botao.png";

    btnGostosinho.src = imagensGostosinho[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagensGostosinho.length;
    console.log("Olha ele aí!");

    if (timeoutBotao) clearTimeout(timeoutBotao);
    timeoutBotao = setTimeout(() => {
        btnGostosinho.src = imagemBotao;
    }, 2000);
}

controlador();
atualizarFundo();