var _ = require('lodash');

let livros = [
  { id: 1,nome: 'Como as democracias morrem',autor: 'Steven Levitsky',isbn: '9788537818008' },
  { id: 2,nome: 'Como as democracias morrem1',autor: 'Steven Levitsky',isbn: '9788537818008' },
  { id: 3, nome: 'Fascismo: Um alerta', autor: 'Madeleine Albright', isbn: '8542214277'},
  { id: 4, nome: 'Ruptura: A crise da democracia liberal', autor: 'Manuel Castells', isbn: '8537817643'},
  { id: 5, nome: "w", autor: "a3" },
  { id: 6, nome: "k", autor: "a4" },
  { id: 7, nome: "h", autor: "a5" }
];
let votosLivros = [
  { idLivro: 4, voto: 4.0 },{ idLivro: 6, voto: 2.8 },{ idLivro: 2, voto: 4.5 },{ idLivro: 2, voto: 5.0 },
  { idLivro: 2, voto: 1.1 },{ idLivro: 1, voto: 0.5 },{ idLivro: 3, voto: 0.7 },{ idLivro: 4, voto: 2.8 },
  { idLivro: 2, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },{ idLivro: 4, voto: 1.9 },
 ];
function validaIsbn(isbn,numeroDigitos){
  if(numeroDigitos == 10){
    let total = 0;
    if((isbn).length == 10){
      for(let i = 0; i<10;i++){
        total = total + isbn[i]*(10-i);
      };
      let aux;
      total%11 == 0 ? aux = true : aux = false;
      return aux;
    }
    return false;
  }
  else if(numeroDigitos == 13){
    let total = 0;
    if((isbn).length == 13){
      for(let i = 0; i<13;i++){
       i % 2 == 0 ? total = total + isbn[i]*1 : total = total + isbn[i]*3;
      };
      let aux;
      total%10 == 0 ?  aux = true : aux = false;
      return aux;
      } 
    return false;
  }
};
function validarIdExiste(idlivro){
  let livrosId = _.map(livros, 'id');
  let aux = _.includes(livrosId,idlivro);
  return aux;
};
function lerVotos(idlivro){
  let aux = _.groupBy(votosLivros,'idLivro')[idlivro];
  return aux;
};
const lerLivro = (idlivro) => {
  
  let arrayLivro = livros.filter(function(livros){
    return livros.id == idlivro;
  });
  if(arrayLivro.length != 0){
    let quantidadeVotos = lerVotos(idlivro).length;
    arrayLivro[0].numeroVotos = quantidadeVotos;
    arrayLivro[0].mediaVotos = _.meanBy(lerVotos(idlivro), 'voto');

    return arrayLivro ;
  }else{
   return 'Não encontrado e/ou ocorreu algum erro na operação';
  }
};
const removerLivros = idlivro =>{
  let removerIdArrayLivros = _.remove(livros, function(livros){
    return livros.id == idlivro;
  }); 
  let removerIdArrayVotos = _.remove(votosLivros, function(votosLivros){
    return votosLivros.idLivro == idlivro;
  });
  let aux;
  removerIdArrayLivros && removerIdArrayVotos != 0 ? aux = 'Operação feita com sucesso': aux = 'Ocorreu um erro!';
  return aux;
};
const adicionarVoto = (idlivro,valorVoto) =>{
  let aux = validarIdExiste(idlivro);

  if(aux == true){
    if(valorVoto >= 0.0 && valorVoto <= 5.0){
      let objeto = {
        idlivro : idlivro,
        Voto : valorVoto
      }
      votosLivros.push(objeto);
      return 'Operação feita com sucesso'
    }else{
      return 'Valor Invalido!'
    }
  }else{
    return 'Id Invalido!'
  }
};
const autorMaisLivros = () =>{
  let arrayAutores = _.map(livros, 'autor');
  arrayAutores = _.uniq(arrayAutores);
  let valor = []; 
  for(let i in arrayAutores){
    valor[i] = _.groupBy(livros,'autor')[arrayAutores[i]].length;

    arrayAutores[i] = {autor: arrayAutores[i], livros: valor[i]};
  }
  arrayAutores = _.sortBy(arrayAutores,['livros']);
  arrayAutores = _.reverse(arrayAutores);
  return arrayAutores[0];
};
const livrosMaisVotados = (numeroDeVezes) =>{
  aux = validarIdExiste(numeroDeVezes);
  if(aux ==true){
    let arrayLivros =_.groupBy(votosLivros,'idLivro');
    let order = _.orderBy(arrayLivros, ['length'], ['desc']);
    let imprimir = [];
    for(let i in order){
      let maxGroup = order[i];
      let livro = _.first(maxGroup);
      let nomeLivro = _.filter(livros,{'id':livro.idLivro});
      imprimir[i] = {Livro: nomeLivro[0].nome, numeroVotos: maxGroup.length}
    } 

    imprimir = _.take(imprimir,numeroDeVezes);

    return imprimir;
  }else{
    return 'Não existe votos pra tantos Livros';
  }
};
const atualizarLivro = (idlivro,novoLivro)=>{
  let erro = 0;
  let novolivro = novoLivro;
  let aux = validarIdExiste(idlivro);
  let id = 0;
  id = _.findIndex(livros,{'id':idlivro});
  
  if(aux == true && id>0){
    novolivro.nome != undefined && (novolivro.nome).length > 3 ? livros[id].nome = novolivro.nome : null;
    novolivro.nome !== undefined && (novolivro.nome).length <= 3 ? erro++ :  null;
    novolivro.autor !== undefined ? livros[id].autor = novolivro.autor : null ;
    if(novolivro.isbn != undefined){
      let aux = novolivro.isbn;
      aux = aux.toString();
      novolivro.isbn = aux;
      let numeroDigitosIsbn =  aux.length;
      if(numeroDigitosIsbn == 10 || numeroDigitosIsbn == 13){
        aux = aux.split("");
        let verificador;
        verificador = validaIsbn(aux, numeroDigitosIsbn);
          verificador == true ? livros[id].isbn = novolivro.isbn : erro++;
      }else{
        erro++;
      }
    } 
  }else{
    erro++;
  }
  if(erro > 0){
    return 'erro';
  }
  return livros[id];
};
const adicionarLivro = (novolivro)=>{
  let verificador = 0;
  let livro = {
    id : (livros[livros.length-1].id)+1,
    nome : novolivro.nome,
    autor : novolivro.autor,
    isbn : novolivro.isbn
  };
  novolivro.nome != undefined && (novolivro.nome).length > 3 ? verificador++ : null;
  novolivro.nome !== undefined && (novolivro.nome).length <= 3 ? verificador-- :  null;
  novolivro.autor !== undefined ? verificador++ : null ;
  if(novolivro.isbn != undefined){
    let aux = novolivro.isbn;
    aux = aux.toString();
    novolivro.isbn = aux;
    let numeroDigitosIsbn =  aux.length;
    if(numeroDigitosIsbn == 10 || numeroDigitosIsbn == 13){
      aux = aux.split("");
      let verificadorIsbn;
      verificadorIsbn = validaIsbn(aux, numeroDigitosIsbn);
        verificadorIsbn == true ? verificador++ : verificador--;
    }else{
      verificador--;
    }
  }
  verificador >= 2 ? livros.push(livro):'erro';
};