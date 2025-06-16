document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.getElementById("tabela-cronograma");
    if (!tabela) return;
  
    const dados = [
      { bairro: "Zona 1", periodo: "Manhã" },
      {bairro: "Zona 3", periodo: "Manhã" },
      {bairro: "Zona 5", periodo: "Manhã" },
      {bairro: "Zona 7", periodo: "Manhã" },
      {bairro: "Zona 9", periodo: "Manhã" },
    ];
  
    dados.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.bairro}</td><td>${item.periodo}</td>`;
      tabela.appendChild(row);
    });
  });
  