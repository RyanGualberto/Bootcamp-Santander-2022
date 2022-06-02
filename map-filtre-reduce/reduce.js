//calcula saldo
//criando a função, e passando o saldo e itens como parametros
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    //chamando o metodo reduce para o array itens, e realizando a operação de subtração do saldo
	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    //retornando o valor restante final e concatenando com uma string padrão
	return `O saldo final será de ${saldoFinal} reais`;
}

//criando o parametro lista indice = item, value = preco
lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];
//definindo o saldo
saldo = 100;
//exibindo o valor da operação da função calcula saldo, e passando o saldo e a lista como parametros
console.log(calculaSaldo(saldo, lista));


//somando numeros com reduce

//criando a função soma numeros e passando o array como função
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
    //criando a constante soma e declarando que o valor anterior, vai ser somado a corrente(valor atual)
	const soma = arr.reduce((prev, curr) => prev + curr);

    //retorna a constante soma com as operações já feitas
	return soma;
}

//exibe o resultado 6, da operação, no qual chama a função, e passa os valores do array, como parametros
console.log(somaNumeros([1, 1, 1, 3]));