document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("mensagem-status");
  status.textContent = "Mensagem enviada com sucesso! (Simulação)";
  status.style.color = "green";

  setTimeout(() => {
    status.textContent = "";
    this.reset();
  }, 3000);
});
