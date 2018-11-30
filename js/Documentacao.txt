/**
 * {
 *   id: Number --> É um valor obrigatório e incrementál
 *   nome: String --> É um valor obrigatório e não pode conter menos que 3 caracteres
 *   autor: String/undefined --> Não é um valor obrigatório
 *   isbn: Isbn --> É um valor obrigatório e deve ser sempre válido.
 * }: Object
 */
/** 
Dicas para uma boa pontuação:

1. Utilize ao máximo métodos de array
2. Utilize funções reutilizáveis (se você escrever a mesma coisa mais de uma vez levara penalidade)
3. Boa documentação

OBS: não precisa de HTML e CSS :)
*/


var livros = [
    {
      id: 1,
      nome: 'Como as democracias morrem',
      autor: 'Steven Levitsky',
      isbn: '9788537818008'
    },
    {
      id: 2,
      nome: 'Fascismo: Um alerta',
      autor: 'Madeleine Albright',
      isbn: '8542214277'
    },
    {
      id: 3,
      nome: 'Ruptura: A crise da democracia liberal',
      autor: 'Manuel Castells',
      isbn: '8537817643'
    }
  ];
  
  var actualId = 4;
  
  var adicionarLivro = function(livro) {
  
  }
  
  var lerLivro = function(idLivro) {
  
      /* function lerId(element,index,array){
    let id = index+1;
    let value;
    if(id === idLivro){
       return value = element;
    }
    return value;
  }

  console.log(livros.forEach(lerId));*/
  }
  
  var atualizarLivro = function(idLivro, novoLivro) {
  
  }
  
  var removerLivro = function(idLivro) {
  
  }




[‎28/‎11/‎2018 16:41]  Joao Vitor Cavalcante Barbosa:  
var removerLivro = function(idLivro) {
	// Entrada: idLivro = Number => 3
    // Processamento: Excluir o livro do array livros
    // Saída: true => Livro excluido com sucesso; false => Não encontrar o livro e/ou ocorrer algum erro na operação
} 
 
[‎28/‎11/‎2018 16:44]  Joao Vitor Cavalcante Barbosa:  
var atualizarLivro = function(idLivro, novoLivro) {
	// Entrada: 
	// 	idLivro => Number => 3
    //  novoLivro => Object => { nome: 'As tranças do rei careca', autor: 'Desconhecido' }
	// Processamento: Atualizar o livro do array livros
    // Saída: novoLivro => Caso livro tenha sido atualizado com sucesso; false => Não encontrar o livro e/ou ocorrer algum erro na operação
} 
 
[‎28/‎11/‎2018 16:46]  Joao Vitor Cavalcante Barbosa:  
var lerLivro = function(idLivro) {
  // Entrada: idLivro => Number => 16546857
  // Processamento: Trazer o livro do array livros
  // Saída: Object => Caso encontrar o livro; false => Não encontrar o livro e/ou ocorrer algum erro na operação
} 
 
Salvamos esta conversa. Você poderá visualizá-la em breve na guia Conversas no Skype for Business e na pasta Histórico da Conversa no Outlook. 



---------------------------------------------------------FAZER 2-----------------------------------------------------------
/**
 * Você tera que fazer os 4 métodos do exercício anterior do zero novamente
 * Tente fazer os métodos do exercício anterior ficarem melhor ainda nessa nova criação :)
 */

 var livros = [
  { id: 1, nome: "x", autor: "a0" },
  { id: 2, nome: "y", autor: "a1" },
  { id: 3, nome: "z", autor: "a2" },
  { id: 4, nome: "w", autor: "a3" },
  { id: 5, nome: "k", autor: "a4" },
  { id: 6, nome: "h", autor: "a5" }
 ];


 /**
  * O valor máximo do voto é 5.0 e o mínimo é 0.0
  * Um livro não precisa ter um voto para existir.
  * Um livro pode N votos. 
  * A propriedade voto sempre vai ser um double. Exemplo -> 4.0; 4.9; 5.0; 0.1
 */

 var votosLivros = [
  { idLivro: 4, voto: 4.0 },
  { idLivro: 6, voto: 2.8 },
  { idLivro: 2, voto: 4.5 },
  { idLivro: 2, voto: 5.0 },
  { idLivro: 2, voto: 1.1 },
  { idLivro: 1, voto: 0.5 },
  { idLivro: 3, voto: 0.7 },
  { idLivro: 4, voto: 2.8 },
  { idLivro: 2, voto: 1.9 },
 ];

 /** 
  * param: livro => Object => { nome: "Livro 01", autor: "Fernando Fenner" }
  * explicação: Validar e caso positivo inserir o parâmetro livro no array livros, caso negativo retorne false e o que está errado
 */

 var adicionarLivro = function(livro) {

 }

 /**
  * param: idLivro => Number => 3, 4, 8, 9, 10
  * explicação: retornar o livro, caso exista retorne o livro, caso contrário retorne false
  * { 
  *   id: 15,
  *   nome: "As tranças do rei careca",
  *   autor: "Desconhecido",
  *   mediaVoto: 4.4,
  *   quantidadeVotos: 74
  * } 
 */

 var lerLivro = function(idLivro) {

 }

 /**
  * Só é possível mudar o nome e autor do livro. 
  * O restante esta como a atividade anterior
  */

var atualizarLivro = function(idLivro, livro) {

}

/**
 * Remove o livro do array livros e toda as suas votações do array votosLivros
 */
var removerLivro = function(idLivro) {

}

/**
 * param: quantidadeLivros => Number => 1, 2, 3, 4, 5, 6, 7, 8
 * Trazer do livro mais votado até o menos votado de acordo com a quantidade escolhida 
 */

var livrosMaisVotados = function(quantidadeLivros) {

}

/**
 * Retorna o nome do autor com a maior quantidade de livros e a sua quantidade
 * {
 *   nomeAutor: "João Vitor",
 *   quantidadeLivros: 54
 * }
 */

var autorMaisLivros = function() {

}

var adicionarVoto = function(idLivro,valorVoto){

}

