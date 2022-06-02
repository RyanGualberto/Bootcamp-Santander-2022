//com this
//declarando o this(orange), e o value(price)
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
    //criando o array
	const array = [1, 2, 3, 4, 5];

    //criando um novo array, realizando a operação do item vezes seu valor
	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

//exibindo o novo array
console.log(mapArray());

//sem this

//criando o array original, cada index = item
const array = [1, 2, 3, 4, 5];

//exibindo o novo array com a operação de item vezes 2 sendo realizada dentro de uma arrow function
console.log(array.map((item) => item * 2));

//exibindo o array original
console.log(array);