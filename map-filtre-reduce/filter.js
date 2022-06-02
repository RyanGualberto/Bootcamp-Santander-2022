//criando a função e passando o arrya como parametro
function filtraPares(arr) {
	if (!arr || !arr.length) return;
    //chamando o  metodo filer e criando a arrow function realizando a operação, para verificação de pares
	const filteredArr = arr.filter((item) => item % 2 === 0);

    //retorno =  constante com o método filter
	return filteredArr;
}

//exibindo o novo array criado, e passando os parametros para realização das operações 
console.log(filtraPares([1, 2, 3, 4]));