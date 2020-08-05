// Procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField);

// Executar uma ação
function cloneField() {
  // Duplicar os campos, que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); // boolean: true ou false

  // Pegar os campos para limpar, que campos?
  const fields = newFieldContainer.querySelectorAll('input');
  
  // Para cada campo, limpar

  /** 1ª forma
   * fields[0].value = "";
   * fields[1].value = "";
   */

  // 2ª forma (melhor forma)
  fields.forEach(field =>
    // pega o field do momento e limpa
    field.value = ""
  );
  
  // Colocar na página, onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
