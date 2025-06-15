document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.getElementById("tabela-cronograma");
    if (!tabela) return;
  
    const dados = [
      { dia: "Segunda-feira", bairro: "Zona 1, Zona 2", tipo: "Orgânico" },
      { dia: "Terça-feira", bairro: "Zona 3, Zona 4", tipo: "Reciclável" },
      { dia: "Quarta-feira", bairro: "Zona 5, Zona 6", tipo: "Orgânico" },
      { dia: "Quinta-feira", bairro: "Zona 7, Zona 8", tipo: "Reciclável" },
      { dia: "Sexta-feira", bairro: "Zona 9, Zona 10", tipo: "Orgânico" },
    ];
  
    dados.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.dia}</td><td>${item.bairro}</td><td>${item.tipo}</td>`;
      tabela.appendChild(row);
    });
  });
  