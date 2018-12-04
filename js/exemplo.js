var _ = require('lodash');
function verificarIsbn10Dig(isbn){
  let total = 0;
  if((isbn).length == 10){
    for(let i = 0; i<10;i++){
      total = total + isbn[i]*(10-i);
    };

    total%11 == 0 ? true : false;
    
  }
  return false;
}; 
function verificarIsbn13Dig(isbn){
  let total = 0;
  if((isbn).length == 13){
    for(let i = 0; i<13;i++){
     i % 2 == 0 ? total = total + isbn[i]*1 : total = total + isbn[i]*3;
    };

    total%10 == 0 ? true : false;
    } 
  return false;
};
function transformaIsbnArray(isbn){
  let aux = isbn;
  aux = aux.toString();
  aux = aux.split("");
  return aux;
};
function verificaNomeValido(nome){
 // (nome !== undefined && (nome).length > 3)? true:false ;
 if(nome !== undefined && (nome).length > 3){
   return true;
 }
 return false;
};
function verificaIsbnValido(isbn){
  
  if(isbn !== undefined){ 
    let auxisbn = transformaIsbnArray(isbn);
    if((auxisbn).length < 14){
    return true;
  }
}
  return false;
};
function tranformaArrayStringForNumber(array){
  for(let i in array){
    array[i] = parseInt(array[i]);
  };
};
function verificaIsbnGeral(isbn){
  let verificador;
  if(isbn.length == 13 || isbn.length == 10){
    // Mostrar isso para o Welson Play amanhã.
    tranformaArrayStringForNumber(isbn);

    verificador = (isbn.length == 13)?  verificarIsbn13Dig(isbn) : verificarIsbn10Dig(isbn);

    return verificador;
  }else{
    return false;
  }
};
function tratarId(){
  let id = livros.length + 1;
  return id;
};
let livros = [
  { id: 1,nome: 'Como as democracias morrem',autor: 'Steven Levitsky',isbn: '9788537818008' },
  { id: 2, nome: 'Fascismo: Um alerta', autor: 'Madeleine Albright', isbn: '8542214277'},
  { id: 3, nome: 'Ruptura: A crise da democracia liberal', autor: 'Manuel Castells', isbn: '8537817643'},
];
let votosLivros = [
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
function LerVotos(idLivro){
  let array = votosLivros.filter(function(votosLivros){
    return votosLivros.idLivro == idLivro;
  });
  return array; 
};
function filtraValorVotos(idLivro){
  let array = LerVotos(idLivro);
  let arrayaux = [];
  for(let i in array){
    arrayaux[i] = array[i].voto;
  }
  return arrayaux;
};
function quantidadeVotos(idLivro){
  let arrayEscolhidos = LerVotos(idLivro);
  let quantidade = arrayEscolhidos.length;

  return quantidade;
};
function mediaVotos(idLivro){
  let arrayEscolhidos = filtraValorVotos(idLivro);
  
  let quantidade = quantidadeVotos(idLivro);
  let total = 0;
  for(let i in arrayEscolhidos){
    total = total + arrayEscolhidos[i];
  }
  return total/quantidade;
};
function removerVotos(idLivro){
  let array = votosLivros.filter(function(votoLivro){
    return  votoLivro.idLivro != idLivro;
  })
  votosLivros = array;
  //return votosLivros;
};
function listaIdLivros(){
  let arrayLivros = livros.map(function(livros){
    return livros.id;
  });
  
  return arrayLivros;
};
function listaQuantidadeVotos(){
  let arrayLivrosId = listaIdLivros();
  let quantidade = [];
  for (let i in arrayLivrosId){
    quantidade[i] = quantidadeVotos(arrayLivrosId[i]);
  }
  return quantidade;
};
function ordernaArrayDecrescente(){
  let quantidadesVoto = FazObjetoIdVotos();
  quantidadesVoto = quantidadesVoto.sort(function(a, b) {
    //MITERIOS DE WELSON
    if (a.numeroVotos > b.numeroVotos) {
      return 1;
    }

    if (a.numeroVotos < b.numeroVotos) {
      return -1;
    }

    return 0;
  });
  quantidadesVoto = quantidadesVoto.reverse();
  
  return quantidadesVoto;
};
function criaVinculoIdVotos(numeroVotos,idLivro){
  return {
    numeroVotos : numeroVotos,
    id : idLivro
  }
};
function FazObjetoIdVotos(){
  let quantidadesVoto = listaQuantidadeVotos();
  let arrayIdsLivros = listaIdLivros();
  
  let arrayMaior = [];

  for (let i =0 ; i < quantidadesVoto.length; i++){
    arrayMaior[i] = criaVinculoIdVotos(quantidadesVoto[i],arrayIdsLivros[i]);
  }
  
  
  return arrayMaior;
};
function buscaNomeLivro(idLivro){
  let ler = livros.filter(function(livros){
    return livros.id == idLivro;
  });
  return ler[0].nome;
};
function  listaAutores(){
  let array = livros.map(function(livros){
    return livros.autor;
  });
  return array;
};
function toFixedDoisDigitos(numero){
  let valorX = numero;
  
  valorX = valorX.toFixed(1);
  valorX = parseFloat(valorX);
  return valorX;
};
function tirarRepetidos(){
  let arrayAutores = listaAutores();
  let arrayFormatado = _.uniq(arrayAutores);
  return arrayFormatado;
};
function comparar(){
  let valor=[];
  let arrayAutores = tirarRepetidos();
  for (let i  in  arrayAutores){
    valor[i] = _.groupBy(livros,'autor')[arrayAutores[i]].length;
  }
  function constroiObj(autor,numeroLivros) {
    return {
      autor: autor,
      Livros: numeroLivros
    }
  }
  for(let i in arrayAutores){
    arrayAutores[i] = constroiObj(arrayAutores[i],valor[i]);
  }
  return arrayAutores;

};
const adicionarLivro = livro => {
  let erro = 0;
  let id = tratarId();
  
  let newLivro ={
    id: id,
    nome: livro.nome,
    autor: livro.autor,
    isbn: livro.isbn
  };

  if(verificaNomeValido(newLivro.nome) == true){
    let isbnArray  = transformaIsbnArray(newLivro.isbn);

    if(verificaIsbnValido(newLivro.isbn) == true){
      let verificador1 = verificaIsbnGeral(isbnArray);
  
      (verificador1 == true )? livros.push(newLivro) : erro++;
    }
  }else{
    erro++;
  }

  if(erro > 0){
    return 'Ocorreu algum erro na operação';
  }
  
  // return livros;
};
const removerLivro = idLivro => {
  removerVotos(idLivro);
  let array = livros.filter(function(livros){
    return  livros.id != idLivro;
  })
  livros = array;
};
const atualizarLivro = (idLivro, novoLivro) => {
  let livro = novoLivro;
  let erro = 0;
  let aux;
  let encontrado;
  
  for(let i = 0 ; i < livros.length; i++){
    if(livros[i].id === idLivro){
      encontrado = true;
    
      if(verificaNomeValido(livro.nome)){
        livros[i].nome = livro.nome;
      }

      if(livro.nome !== undefined && (livro.nome).length <= 3){
        erro++;
      }

      if(livro.autor !== undefined){
        livros[i].autor = livro.autor;
      }

      if(verificaIsbnValido(livro.isbn)){
        let verificador;
        let isbnArray = transformaIsbnArray(livro.isbn);

        verificador = verificaIsbnGeral(isbnArray);

        if(verificador == true ){
           livros[i].isbn = livro.isbn;
        }else{
          erro++;
        }
      }
      aux = livros[i];
    }
  };

  if (encontrado == true && erro == 0){
    return aux;
  }else{
    return 'Não encontrar o livro e/ou ocorrer algum erro na operação';
  }

};
const lerLivro = idLivro => {
  let aux;
  let ler = livros.filter(function(livros){
    return livros.id == idLivro;
  });
  
  ler[0].mediaVotos = mediaVotos(idLivro);
  ler[0].quantidadeVotos = quantidadeVotos(idLivro); 

  ler.length == 0 ? aux = 'Livro não encontrado': aux = ler;
  return aux;
};
const livrosMaisVotados = quantidadelivros =>{
  if(quantidadelivros <= livros.length+1){
    let mostraMaior=[];
    let votosOrdenados = ordernaArrayDecrescente();
    for (let i=0; i< quantidadelivros;i++){
      mostraMaior[i] = "Nome: "+buscaNomeLivro(i+1)+", ID: "+votosOrdenados[i].id+", Numero de votos:"+votosOrdenados[i].numeroVotos;
    }
    
    return mostraMaior;
  }
  return 'Id invalido, quantidade de livros superior a do banco de dados';
};
const autorMaisLivros = () =>{
  let arrayAutores = comparar();
  arrayAutores = _.sortBy(arrayAutores,['autor','livros']);
  return arrayAutores[0];
};
const adicionarVoto = (idlivro,valorVoto) =>{
  if(idlivro <= livros.length){ 
    if(valorVoto >= 0 && valorVoto <= 5){
      let valorVotoX = toFixedDoisDigitos(valorVoto);
      let voto = {
        idlivro: idlivro,
        voto: valorVotoX
      }
      votosLivros.push(voto);
      return 'Operação feita com sucesso!';
    }else{
      return 'erro 404 : valor do voto invalido';
    }
  }else{
    return 'erro 454 :  id invalido';
  }
};