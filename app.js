const suspectsData = [
  { nome: "Comandante Sarah Chen", cargo: "Comandante da Estação", motivo: "Elena questionava suas decisões", alibi: "Centro de Comando", emoji: "⚔️" },
  { nome: "Dr. Marcus Webb", cargo: "Biólogo Chefe", motivo: "Experimentos não autorizados", alibi: "Módulo de Criogenia", emoji: "🔬" },
  { nome: "Yuki Tanaka", cargo: "Engenheira de Sistemas", motivo: "Acesso IA ARIA bloqueado", alibi: "Núcleo Central", emoji: "🔧" },
  { nome: "Viktor Petrov", cargo: "Piloto Chefe", motivo: "Contrabando descoberto", alibi: "Hangar", emoji: "🚀" },
  { nome: "Dra. Amara Okafor", cargo: "Psicóloga", motivo: "Relatório rejeitado", alibi: "Sessões virtuais", emoji: "💡" },
  { nome: "James Rodriguez", cargo: "Chefe de Segurança", motivo: "Falhas que escondeu", alibi: "Corredores", emoji: "🔒" },
  { nome: "Zara Al-Rashid", cargo: "Criogenia", motivo: "Rivalidade científica", alibi: "Câmaras criogênicas", emoji: "🧊" }
];

const methods = ["Nanotecnologia Letal", "Despressurização", "Overdose Neural", "Radiação", "Vírus Sintético"];

let selectedRole = null;

// Fases e pistas específicas
let fases = [
  { nome: "Fase 1: Descoberta", tempo: 300,
    pistasPorLocal: {
      "crime-scene": ["Amostras alienígenas"],
      "command": [],
      "cryogenic": [],
      "medical": [],
      "reactor": []
    },
    locaisAbertos: ["crime-scene"],
    equipamentosAtivos: ["scanner-btn"]
  },
  { nome: "Fase 2: Investigação", tempo: 600,
    pistasPorLocal: {
      "crime-scene": ["Amostras alienígenas", "Terminal hackeado"],
      "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"],
      "cryogenic": ["Seringas médicas"],
      "medical": [],
      "reactor": []
    },
    locaisAbertos: ["crime-scene", "command", "cryogenic"],
    equipamentosAtivos: ["scanner-btn","interrogate-btn","aria-btn","sync-btn"]
  },
  { nome: "Fase 3: Confrontação", tempo: 600,
    pistasPorLocal: {
      "crime-scene": ["Amostras alienígenas", "Terminal hackeado", "Resíduo de nanobots"],
      "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"],
      "cryogenic": ["Seringas médicas", "Registros de temperatura", "Acesso anormal"],
      "medical": ["Histórico médico", "Nanobots", "Relatório de autópsia"],
      "reactor": ["Níveis de radiação"]
    },
    locaisAbertos: ["crime-scene", "command", "cryogenic", "medical", "reactor"],
    equipamentosAtivos: ["scanner-btn","interrogate-btn","aria-btn","sync-btn"]
  },
  { nome: "Fase 4: Resolução", tempo: 300,
    pistasPorLocal: {},
    locaisAbertos: [],
    equipamentosAtivos: ["sync-btn"]
  }
];

let faseAtual = 0;
let seconds = fases[faseAtual].tempo;
let timerInt = null;

// Atualiza timer, restrições e interface
function updateTimer() {
  let min = String(Math.floor(seconds/60)).padStart(2,'0');
  let sec = String(seconds % 60).padStart(2,'0');
  document.getElementById('phase-timer').innerText = min + ':' + sec;
  document.querySelector('.phase-timer').childNodes[0].textContent = fases[faseAtual].nome + ': ';
  updateRecursosEFiltros();
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timerInt);
    avancarFase();
  }
}

function startTimer() {
  clearInterval(timerInt);
  seconds = fases[faseAtual].tempo;
  updateTimer();
  timerInt = setInterval(updateTimer, 1000);
}

function avancarFase() {
  if (faseAtual < fases.length-1) {
    faseAtual++;
    seconds = fases[faseAtual].tempo;
    startTimer();
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
  } else {
    document.getElementById('phase-timer').innerText = "00:00";
    alert("⏰ O tempo acabou! Última fase encerrada.");
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Indicação de recursos bloqueados "EM BREVE"
function updateRecursosEFiltros() {
  const equipamentos = ["scanner-btn","interrogate-btn","aria-btn","sync-btn"];
  equipamentos.forEach(id=>{
    let el = document.getElementById(id);
    let ativo = fases[faseAtual].equipamentosAtivos.includes(id);
    el.disabled = !ativo;
    el.style.opacity = ativo ? 1 : 0.5;
    el.title = ativo ? "" : "Disponível na próxima fase";
    if (!ativo && !el.innerText.includes("(EM BREVE)")) el.innerText += " (EM BREVE)";
    if (ativo) el.innerText = el.innerText.replace(" (EM BREVE)","");
  });
  document.querySelectorAll('.location-btn').forEach(btn=>{
    let ativo = fases[faseAtual].locaisAbertos.includes(btn.dataset.location);
    btn.disabled = !ativo;
    btn.style.opacity = ativo ? 1 : 0.5;
    btn.title = ativo ? "" : "Disponível na próxima fase";
    if (!ativo && !btn.innerText.includes("💡 EM BREVE")) btn.innerText += " 💡 EM BREVE";
    if (ativo) btn.innerText = btn.innerText.replace(" 💡 EM BREVE","");
  });
  // Apresenta apenas o local, sem pistas iniciais
  let locationId = fases[faseAtual].locaisAbertos[0] || "crime-scene";
  document.getElementById('location-view').innerHTML = `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p><p style="opacity:.7"><i>Use o Scanner ou outro equipamento para encontrar pistas.</i></p>`;
  document.getElementById('evidence-container').innerHTML = `<b>Nenhuma pista exibida ainda.</b>`;
  if(faseAtual === fases.length - 1){
    document.getElementById('evidence-container').innerHTML = "<b>Última fase: Prepare-se para acusar!</b>";
  }
}

// Seleção de detetive
document.querySelectorAll('.select-role').forEach(btn => {
  btn.onclick = () => {
    selectedRole = btn.dataset.role;
    showScreen('investigation');
    mountSuspects();
    prepareSolutionScreen();
    faseAtual = 0; startTimer();
  };
});

// Monta cards dos suspeitos e botão voltar
function mountSuspects() {
  const grid = document.getElementById('suspects-grid');
  if (!grid) return;
  grid.innerHTML =
    suspectsData.map(s =>
      `<div class="suspect-card"><h4>${s.emoji} ${s.nome}</h4>
        <b>${s.cargo}</b><br>
        <b>Motivo:</b> ${s.motivo}<br>
        <b>Álibi:</b> ${s.alibi}
      </div>`).join('') +
    `<div style="flex-basis:100%;height:0"></div>
    <button id="back-investigation" style="margin:14px 0 5px 0;padding:10px 30px;background:#32e6ff;font-weight:700;border-radius:9px;color:#032336;cursor:pointer;">
      ⬅️ Voltar
    </button>`;
  setTimeout(()=>{
    const backBtn = document.getElementById('back-investigation');
    if(backBtn) backBtn.onclick = ()=>showScreen('investigation');
  },100);
}

// Locais da estação
const locs = {
  "crime-scene": {
    nome: "Laboratório Principal", evidencias: ["Amostras alienígenas", "Terminal hackeado", "Resíduo de nanobots"],
    descricao: "Local da morte de Elena. Equipamentos genéticos avançados."
  },
  "command": {
    nome: "Centro de Comando", evidencias: ["Logs de acesso", "Alertas de sistema", "Fita de áudio"],
    descricao: "Centro operacional da estação. Monitoramento e comunicações."
  },
  "cryogenic": {
    nome: "Módulo Criogênico", evidencias: ["Seringas médicas", "Registros de temperatura", "Acesso anormal"],
    descricao: "Câmaras de hibernação e criogenia. Fluxo controlado."
  },
  "medical": {
    nome: "Centro Médico", evidencias: ["Histórico médico", "Nanobots", "Relatório de autópsia"],
    descricao: "Hospital espacial com equipamentos de ponta."
  },
  "reactor": {
    nome: "Núcleo do Reator", evidencias: ["Níveis de radiação", "Falha energética", "Acesso não autorizado"],
    descricao: "Reator de fusão: energia vital da estação."
  }
};

document.querySelectorAll('.location-btn').forEach(btn => {
  btn.onclick = () => {
    let locationId = btn.dataset.location;
    document.getElementById('location-view').innerHTML = `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p><p style="opacity:.7"><i>Use o Scanner ou outro equipamento para encontrar pistas.</i></p>`;
    document.getElementById('evidence-container').innerHTML = `<b>Nenhuma pista exibida ainda.</b>`;
  };
});

// Scanner: só mostra pistas ao clicar
document.getElementById('scanner-btn').onclick = () => {
  let locationId = fases[faseAtual].locaisAbertos.find(loc=>!document.querySelector('.location-btn[data-location="'+loc+'"]').disabled) || "crime-scene";
  const pistas = fases[faseAtual].pistasPorLocal[locationId] || [];
  let html = pistas.length === 0 ? "<i>Nenhuma pista disponível neste local nesta fase.</i>" : "<ul>"+pistas.map(p=>`<li>${p}</li>`).join("")+"</ul>";
  document.getElementById('location-view').innerHTML = `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p>` + html;
  document.getElementById('evidence-container').innerHTML =
    pistas.length === 0 ? `<b>Sem pistas para mostrar.</b>` : `<b>Pistas encontradas:</b><br>`+pistas.join("<br>");
};
document.getElementById('interrogate-btn').onclick = () => {
  showScreen('suspects');
};
document.getElementById('aria-btn').onclick = () => {
  document.getElementById('evidence-container').innerHTML += `<div>🤖 IA ARIA: verifique logs para anomalia!</div>`;
};
document.getElementById('sync-btn').onclick = () => {
  document.getElementById('evidence-container').innerHTML += `<div>🔗 Descobertas sincronizadas entre detetives!</div>`;
};

// Solução final
function prepareSolutionScreen() {
  let killerSel = document.getElementById('killer-select');
  let accSel = document.getElementById('accomplice-select');
  killerSel.innerHTML = accSel.innerHTML = "<option value=''>Selecione</option>" +
    suspectsData.map((s, i)=>`<option value="${i}">${s.nome}</option>`).join('');
}
document.getElementById('submit-solution').onclick = () => {
  let killerIdx = document.getElementById('killer-select').value;
  let methodIdx = document.getElementById('method-select').selectedIndex;
  let accIdx = document.getElementById('accomplice-select').value;
  let msg = "";
  if((killerIdx == 1) && (accIdx == 6) && (methodIdx == 1)) {
    msg = "✅ Parabéns! Você desvendou o mistério principal: Dr. Marcus Webb e Zara Al-Rashid eliminaram Elena usando Nanotecnologia!";
  } else if(killerIdx == 1) {
    msg = "Quase! Você acertou o assassino, mas errou outros detalhes.";
  } else {
    msg = "❌ Erro! O culpado escapou durante a evacuação...";
  }
  alert(msg);
};
