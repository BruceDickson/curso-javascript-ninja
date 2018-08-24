/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = ['alo', 5, null, undefined, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ar(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(ar(myvar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunc(array, numero){
    return array[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [true, 10, 'Bruce', undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunc(array2, 0));
console.log(myfunc(array2, 1));
console.log(myfunc(array2, 2));
console.log(myfunc(array2, 3));
console.log(myfunc(array2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var allBooks = {
        'Tonico e Carnica': {
            quantidadePaginas: 200, 
            autor: 'Joao', 
            editora: 'Alo'},
        'Introducao ao HTML5': {
            quantidadePaginas: 300, 
            autor: 'Maria', 
            editora: 'nco'},
        'Cronicas do gelo e fogo': {
            quantidadePaginas: 1000, 
            autor: 'Fing', 
            editora: 'GGA'}
    };


    return !nome ? allBooks : allBooks[nome] // NAO FUNCIONA USAR allBooks.nome, PORQ A PROPRIEDADE NOME NAO EXISTE, TEM Q SER ACESSADO PELO INDICE, COMO SE FOSSE UM VETOR.
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Cronicas do gelo e fogo tem ' + book('Cronicas do gelo e fogo').quantidadePaginas + ' paginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Cronicas do gelo e fogo é ' + book('Cronicas do gelo e fogo').autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Cronicas do gelo e fogo foi publicado pela editora ' + book('Cronicas do gelo e fogo').editora + '.');
