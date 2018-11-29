let livros = [
  { id: 1,nome: 'Como as democracias morrem',autor: 'Steven Levitsky',isbn: '9788537818008' },
  { id: 2, nome: 'Fascismo: Um alerta', autor: 'Madeleine Albright', isbn: '8542214277'},
  { id: 3, nome: 'Ruptura: A crise da democracia liberal', autor: 'Manuel Castells', isbn: '8537817643'}
];

function verificarIsbn10Dig(isbn){
  let total = 0;

  if((isbn).length == 10){
    for(let i = 0; i<10;i++){
      total = total + isbn[i]*(10-i);
    };

    if(total%11 == 0){
      return true;
    }
    else{
      return false;
    }
  }
  return false;
}; 

function verificarIsbn13Dig(isbn){
  let total = 0;
  
  if((isbn).length == 13){
    for(let i = 0; i<13;i++){
      if(i % 2 == 0){
      total = total + isbn[i]*1;
      }
      else{
        total = total + isbn[i]*3;
      }
    };

    if(total%10 == 0){
      return true;
    }

    else{
      return false;
    } 
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

function tratarIndex(idLivro){
 let index = idLivro-1;
 return index;
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
  let id = tratarIndex(idLivro);
  if((livros.length) >= idLivro){
    livros.splice(id,1)
    return "Processo feito com sucesso!";
  } 
  return "livro não encontrado";
};

var atualizarLivro = (idLivro, novoLivro) => {
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
  ler.length == 0 ? aux = 'Livro não encontrado': aux = ler;
  return aux;
};




console.log(adicionarLivro({nome:'Crist',autor:'dapd', isbn:'8524023945'}));
console.log(adicionarLivro({nome:'Crist',autor:'dapd', isbn:'8524023945'}));
// console.log(atualizarLivro(3,{autor:'wesley'}));
console.log(lerLivro(5));
console.log(removerLivro(5));
console.log(lerLivro(5));
console.log(adicionarLivro({nome:'Crist',autor:'dapd', isbn:'8524023945'}));
console.log(atualizarLivro(5 ,{ id: 27 }));
console.log(lerLivro(5));
