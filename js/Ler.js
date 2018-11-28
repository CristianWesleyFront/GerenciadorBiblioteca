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
   } 

   module.extends(lerLivro());