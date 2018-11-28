

let livros = [
  { id: 1,nome: 'Como as democracias morrem',autor: 'Steven Levitsky',isbn: '9788537818008' },
  { id: 2, nome: 'Fascismo: Um alerta', autor: 'Madeleine Albright', isbn: '8542214277'},
  { id: 3, nome: 'Ruptura: A crise da democracia liberal', autor: 'Manuel Castells', isbn: '8537817643'}
];

let novosLivro = [
  { id: 0,nome: 'Cristian',autor: 'Gato',isbn: '99160566' },
  { id: 0,nome: 'Fascismo: Um alerta25', autor: 'Madeleine Albright', isbn: '8542214277'},
  { id: 0,nome: 'Ruptura: A crise da democracia liberal25', autor: 'Manuel Castells', isbn: '8537817643'}
];


const adicionarLivro = livro => {
  
};

const removerLivro = idLivro => {
  let verificador;
  for(let i = 0 ; i < livros.length; i++){
    if(livros[i].id === idLivro){
      livros.splice(i,1)
      verificador = true;
    } 
  }
  if(verificador != true){
    return "livro não encontrado"
  }
  else{
    return "Processo feito com sucesso!"
  }
};

var atualizarLivro = (idLivro, novoLivro) => {
  
  function verificar2(parament){
    let total = 0;
    for(let i = 0; i<10;i++){
        total = total + parament[i]*(10-i);
    }
    if(total%11 == 0){
        return true;
    }
    else{
        return false;
    }; 
  }

  function verificar(parament){
    let total = 0;
    for(let i = 0; i<13;i++){
        if(i % 2 == 0){
        total = total + parament[i]*1;
        }
        else{
        total = total + parament[i]*3;
        }
    }

    if(total%10 == 0){
        return true;
    }

    else{
        return false;
    }; 
  }

  let livro  = novoLivro;
  let erro=0;
  let bom;
  let encontro;
  
  for(let i = 0 ; i < livros.length; i++){
    if(livros[i].id === idLivro){
      encontro = true;
      let id = i+1;
      livros[i].id =id;


      if(livro.nome !== undefined && (livro.nome).length > 3){
      livros[i].nome = livro.nome;

      }
      if((livro.nome).length <= 3){
        erro++;
      }

      if(livro.autor !== undefined){
        livros[i].autor = livro.autor;
      }

      if(livro.isbn !== undefined){
        let verificador1;
        let isbn = livro.isbn;
        isbn = isbn.toString();
        isbn = isbn.split("");

        if(isbn.length == 13 || isbn.length == 10){
          for(let i in isbn){
            isbn[i] = parseInt(isbn[i]);
            } 

            if(isbn.length == 13){
               verificador1 = verificar(isbn);
            }

            else{
              verificador1 = verificar2(isbn);
            }
        }else{
          erro++;
        }

        if(verificador1 == true ){
           livros[i].isbn = livro.isbn;
        }else{
          erro++;
        }
        
      }
      
      bom = livros[i];
    }
    if(erro > 0){
      console.log ('Não encontrar o livro e/ou ocorrer algum erro na operação');
    }
  }

  if (encontro == true){
    return bom;
  }else{
    return 'Não encontrar o livro e/ou ocorrer algum erro na operação'
  }
};

const lerLivro = idLivro => {
  let encontrado;
   let livro;
   for(let i = 0 ; i < livros.length; i++){
     if(livros[i].id === idLivro){
       encontrado = true;
       livro = livros[i];
     } 
   }
   function valida(){
     if(encontrado != true){
       return "livro não encontrado";
     }
     else{
       return livro;
     }
   }
 
   return valida();
};





console.log(atualizarLivro(3,{nome:'Cri', autor: '',isbn:8524023945}));
