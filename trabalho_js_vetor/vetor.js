let numeros = []

numeros[0] = prompt();
numeros[1] = prompt();
numeros[2] = prompt();
numeros[3] = 60;
numeros[4] = 80;


for(let i = 0; i < numeros.length; i++){
    alert(numeros[i]);
}

alert(numeros.length)

let capitais = [
    "Palmas",
    "São paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Salvador",
    "Recife",
    "Goiânia"
]

    //Adicionar um valor no final do array (Vetor)
capitais.push("Manaus");

// Adiciona ou inseri um elemento no inicio do vetor e retorna o novo tamanho do vetor
console.log(capitais.unshift("Curitiba"));

//Remove o elemento do inicio do vetor retorna o elemento removido
console.log(capitais.shift());

//Remove o último elemento do vetor
capitais.pop();

//Alterar o conteúdo, remover o elemento(s), posilção inicial
//Elemento a ser inserido
capitais.splice(1, 1, "Tókyo");

//Retornar um intervalo do vetor
//Posição inicial
//Posição final
//Obs: Não altera o vetor original
 for(i = 0; i < capitais.length; i++){
    console.log(capitais[i]);
 }

 console.log(capitais.slice);

 let estados = ["Roraima", "Acre", "Tocantins","Bahia"];

 //Ordenar o vetor
 estados.sort();

 console.log(estatos);

 let valores = [
    2,
    1,
    10,
    8,
    9,
    80
 ];

 valores.sort((a, b) => a - b);

 console.log(valores);

 let sistemas = [
    "Android",
    "iOS",
    "macOS",
    "Linux",
    "Windows"
 ];

 //Inverte os elementos de um array (vetor)

 //sistemas.reverse();

 
 //retorna o primeiro indice em que o elemento
 //é encontrado no vetor (Array)

 sistemas.indexOf("macOS");

 console.log(sistemas);