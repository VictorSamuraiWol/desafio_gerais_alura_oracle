/*Desafios: 
1.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.*/
function nome (name) {
    let nome = name;
    console.log(`Olá, ${nome}!`);
}
nome ('Victor');

/*2.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.*/
function dobroNumero (numero) {
    let mult = numero * numero;
    return mult;
}
console.log(dobroNumero (5));

/*3.Criar uma função que recebe três números como parâmetros e retorna a média deles.*/
function mediaNumeros (num1, num2, num3) {
    let media = (num1 + num2 + num3)/3;
    return media;
}
console.log(mediaNumeros(1,2,3));

/*4.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.*/
function maiorNumero (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} é o maior!`);
        return num1;
    }
    else if (num1 < num2) {
        console.log(`${num2} é o maior!`);
        return num2;
    }
    else {
        console.log(`${num1} é igual ao ${num2}!`);    
    }
}
maiorNumero (5,5);

/*5.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/
function multAoQuadrado (num) {
    let mult = num * num;
    return mult;
}
console.log(multAoQuadrado(8));

/*6.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/
function IMC (altura, peso) {
    IMC = peso/(altura * altura)
    return IMC.toFixed(2)
}
console.log(IMC (1.7, 80));

/*7.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/
function factorialize (num) {
    let fatorial = num;
    let resultado = fatorial;
    let primeiroMultiplicador = fatorial - 1;
    for (i = primeiroMultiplicador; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorialize(5));

/*8.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/
function dolar(num) {
    let valorDolar = num * 4.8
    return valorDolar
}
console.log(dolar(2));

/*9.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.*/
function areaPerimetroRetangular (altura, largura) {
    let area = altura * largura;
    let perimetro = (2*altura) + (2*largura);
    console.log(`A área é: ${area} e o perímetro é: ${perimetro}`);
}
areaPerimetroRetangular(2,3);

/*10.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/
function areaPerimetroCircular(raio) {
    let area = (Math.PI * raio * raio).toFixed(2);
    let perimetro = (2 * Math.PI * raio).toFixed(2);
    console.log(`A área é: ${area} e o perímetro é: ${perimetro}`);
}
areaPerimetroCircular(2,3);

/*11.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*/
function tabuada (num) {
    let numero = num;

    for (i=1; i<=10; i++) {
        result = numero*i
        console.log(result);
    }
}
tabuada(3);

/*12.Crie uma lista vazia, com o nome listaGenerica.*/
let listaGenerica = [];

/*13.Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.*/
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'kotlin', 'Python'];
console.log(linguagensDeProgramacao);

/*14.Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.*/
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

/*15.Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.*/
let listaNomes = ['abacaxi', 'melancia', 'maçã'];
console.log(listaNomes[0]);

/*16.Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.*/
listaNomes = ['abacaxi', 'melancia', 'maçã'];
console.log(listaNomes[1]);

/*17.Crie uma lista com 3 nomes e exiba no console apenas o último elemento.*/
listaNomes = ['abacaxi', 'melancia', 'maçã'];
console.log(listaNomes[2]);