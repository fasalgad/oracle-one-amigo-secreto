// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
  const amigo = document.getElementById("amigo")
  let nombreAmigo = amigo.value.trim();
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === nombreAmigo) {
      alert("El amigo ya está en la lista.");
      return;
    }
  }
  amigos.push(nombreAmigo);
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
  amigo.value = ""; 
  return;
};

const sortearAmigo = () => {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  document.getElementById(
    "resultado"
  ).innerText = `El amigo sorteado es: ${amigoSorteado}`;
  console.log(amigoSorteado);
};
