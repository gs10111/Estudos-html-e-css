

let listaComentarios = [];

const cadForm = document.getElementById("cad-usuario-form");

cadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  var nome_usuario  = document.getElementById("nome_usuario").value;
  var email_usuario = document.getElementById("email_usuario").value;
  var comentario_usuario = document.getElementById("comentario_usuario").value;

  const novoComentario = {
    nome: nome_usuario,
    email: email_usuario,
    comentario: comentario_usuario
  };

 
  listaComentarios.push(novoComentario);

  
  localStorage.setItem("comentarios", JSON.stringify(listaComentarios));

  // cleanar o campo dos formularios
  document.getElementById("nome_usuario").value = "";
  document.getElementById("email_usuario").value = "";
  document.getElementById("comentario_usuario").value = "";

  exibirComentarios();
});

function exibirComentarios() {
  const comentariosUl = document.getElementById("comentarios");
  comentariosUl.innerHTML = ""; 

  listaComentarios.forEach((comentario, index) => {
    const novoLi = document.createElement("li");
    novoLi.textContent = `Nome: ${comentario.nome}, Email: ${comentario.email}, Comentário: ${comentario.comentario}`;
    comentariosUl.appendChild(novoLi);
  });
}


window.addEventListener("load", () => {
  const comentariosLocalStorage = localStorage.getItem("comentarios");
  if (comentariosLocalStorage) {
    listaComentarios = JSON.parse(comentariosLocalStorage);
    exibirComentarios();
  }
});







