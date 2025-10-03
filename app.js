// ==========================================
// NARRATIVA COMPLETA DO JOGO
// ==========================================
const narrativaCompleta = {
  introducao: `
    <div style="text-align: center; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 10px; margin: 10px;">
      <h2 style="color: #ff6b6b;">🚨 ESTAÇÃO ALPHA-7 - 15 DE OUTUBRO, 2087 🚨</h2>
      <p><strong>06:15 - PROTOCOLO DE EMERGÊNCIA ATIVADO</strong></p>
      <p>Você desperta com o som estridente dos alarmes. As luzes vermelhas de emergência piscam pelos corredores da Estação Alpha-7, criando sombras dançantes nas paredes metálicas.</p>
      <p><i>"ATENÇÃO TRIPULAÇÃO"</i>, ecoa a voz sintética da IA ARIA. <i>"INCIDENTE CRÍTICO NO LABORATÓRIO PRINCIPAL. PROTOCOLOS DE ISOLAMENTO ATIVADOS."</i></p>
      <p><strong>Como investigador, descubra o que aconteceu com a Dra. Elena Vasquez, cientista-chefe da missão.</strong></p>
      <p style="color: #71ffcb;"><em>Suas últimas palavras gravadas: "Eles descobriram... O Projeto Genesis não pode sair daqui vivo..."</em></p>
      <p>A tripulação está em pânico. As comunicações com a Terra foram cortadas. Você tem pouco tempo para começar a investigação.</p>
    </div>
  `,
  
  laboratorioInicial: `
    <div style="background: rgba(0,50,50,0.3); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ff9999;">🔬 LABORATÓRIO PRINCIPAL - CENA DO CRIME</h3>
      <p>O laboratório está em completa desordem. Elena jaz no chão, cercada por estilhaços de vidro e amostras derramadas que brilham com uma luz verde estranha. Seus olhos estão abertos, congelados em uma expressão de choque e terror.</p>
      <p>Equipamentos de última geração estão espalhados como se houvesse sido uma luta... ou como se alguém tivesse procurado por algo específico.</p>
      <p>No terminal principal, uma mensagem pisca: <strong style="color: #ff6b6b;">"ARQUIVOS GAMMA-7 - ACESSO NEGADO - AUTORIZAÇÃO INSUFICIENTE"</strong></p>
      <p><em>Por que as amostras alienígenas estão fora de seus recipientes de contenção?</em></p>
    </div>
  `,
  
  pistaAmostras: `
    <div style="background: rgba(0,100,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #71ffcb;">📊 SCANNER ATIVADO - ANÁLISE FORENSE COMPLETA</h3>
      <p><strong>COMPOSIÇÃO ANÔMALA DETECTADA!</strong></p>
      <p>As amostras apresentam sinais de manipulação recente - aproximadamente 3-4 horas antes da descoberta do corpo. Alguém alterou suas configurações moleculares básicas.</p>
      <p><strong style="color: #ff9999;">DESCOBERTA CHOCANTE:</strong> Nanobots microscópicos misturados às amostras - tecnologia que não deveria existir em experimentos básicos de xenobiologia.</p>
      <p><em style="color: #71ffcb;">ARIA sussurra:</em> "Detetive... Elena estava... preocupada nas últimas semanas. Ela fazia perguntas sobre protocolos de segurança que não fazem parte de sua clearance padrão. Talvez... talvez ela soubesse que algo estava errado."</p>
      <p><strong>NOVA EVIDÊNCIA DESBLOQUEADA:</strong> As amostras alienígenas foram modificadas por alguém com conhecimento avançado em nanotecnologia. Elena pode ter descoberto uma experiência não autorizada.</p>
    </div>
  `,
  
  eventoFalha: `
    <div style="background: rgba(100,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6b6b;">
      <p><strong>⚡ FALHA NO SISTEMA ⚡</strong></p>
      <p>As luzes do laboratório piscam violentamente. Por um momento, todos os hologramas se desativam e um silêncio absoluto toma conta do ambiente.</p>
      <p><em style="color: #ff9999;">ARIA, hesitante:</em> "Desculpe... interferência no sistema. Detectando... anomalias nos meus protocolos básicos. Alguém tem feito... alterações em minha programação."</p>
    </div>
  `,
  
  mensagemOculta: `
    <div style="background: rgba(100,100,0,0.2); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;">
      <p><strong>📨 MENSAGEM CRIPTOGRAFADA DESCOBERTA</strong></p>
      <p>No terminal de Elena, uma mensagem oculta pisca em ângulo específico:</p>
      <p style="color: #ffd700; font-family: monospace; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 4px;">
        "SE ALGO ME ACONTECER... PROCUREM GAMMA-7.<br>
        AS SERPENTES ESTÃO NO NINHO.<br>
        NÃO CONFIEM EM NINGUÉM COM ACESSO ADMINISTRATIVO. -E.V."
      </p>
      <p><em>Elena sabia que estava em perigo. A pergunta agora é: quem mais sabia do que ela estava investigando?</em></p>
    </div>
  `
};

// ==========================================
// CONFIGURAÇÃO DO JOGO
// ==========================================
const pistaImagemMap = {
  "Amostras alienígenas": "lab_pista.png",
  "Terminal hackeado": "pista_terminal_hackeado.png",
  "Logs de acesso": "pista_logs_acesso.png",
  "Alertas de sistema": "pista_alertas_sistema.png",
  "Fita de áudio": "pista_fita_audio.png",
  "Seringas médicas": "pista_seringas.png",
  "Registros de temperatura": "pista_temperatura.png",
  "Acesso anormal": "pista_acesso_anormal.png",
  "Histórico médico": "pista_historico_medico.png",
  "Nanobots": "pista_nanobots.png",
  "Relatório de autópsia": "pista_autopsia.png",
  "Níveis de radiação": "pista_radiacao.png",
  "Resíduo de nanobots": "pista_residuo_nanobots.png"
};

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

let fases = [
  { nome: "Fase 1: Descoberta", tempo: 120,
    pistasPorLocal: { "crime-scene": ["Amostras alienígenas"] },
    locaisAbertos: ["crime-scene"],
    equipamentosAtivos: ["scanner-btn"]
  },
  { nome: "Fase 2: Investigação", tempo: 600,
    pistasPorLocal: {
      "crime-scene": ["Amostras alienígenas", "Terminal hackeado"],
      "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"],
      "cryogenic": ["Seringas médicas"]
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
let selectedRole = null;
let evidenciasDescobertas = [];
let pistaLabAtivada = false;
let eventosExecutados = [];

const locs = {
  "crime-scene": {
    nome: "Laboratório Principal",
    evidencias: ["Amostras alienígenas", "Terminal hackeado", "Resíduo de nanobots"],
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

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================

function renderImagemPista(pista, locationId){
  let imagem = pistaImagemMap[pista] || "img_indefinida.png";
  let narrativa = "";
  
  if(pista === "Amostras alienígenas" && locationId === "crime-scene") {
    narrativa = narrativaCompleta.pistaAmostras;
  } else if(pista) {
    narrativa = `
      <div style="background: rgba(0,100,0,0.2); padding: 15px; border-radius: 8px;">
        <h3 style="color: #71ffcb;">📊 PISTA DESCOBERTA</h3>
        <p><strong>${pista}</strong> encontrada em ${locs[locationId].nome}</p>
        <p>Análise em andamento...</p>
      </div>
    `;
  }
  
  document.getElementById('location-view').innerHTML = `
    <div style="width:100%;text-align:center">
      <img src="${imagem}" style="max-width:320px;border-radius:9px;box-shadow:0 0 14px #1388d7;">
    </div>
    <h2>${locs[locationId].nome}</h2>
    <p>${locs[locationId].descricao}</p>
    ${narrativa}
    <p style="opacity:.7"><i>Use o Scanner para investigar a cena.</i></p>
  `;
}

function renderLaboratorio(){
  let imgSrc = pistaLabAtivada ? "lab_pista.png" : "lab_inicial.png";
  let narrativa = pistaLabAtivada ? narrativaCompleta.pistaAmostras : narrativaCompleta.laboratorioInicial;
  
  document.getElementById('location-view').innerHTML = `
    <div style="width:100%;text-align:center">
      <img src="${imgSrc}" style="max-width:320px;border-radius:9px;box-shadow:0 0 14px #1388d7;">
    </div>
    <h2>Laboratório Principal</h2>
    <p>Local da morte de Elena. Equipamentos genéticos avançados.</p>
    ${narrativa}
    <p style="opacity:.7"><i>Use o Scanner para investigar a cena.</i></p>
  `;
}

function updateTimer(){
  let min = String(Math.floor(seconds/60)).padStart(2,'0');
  let sec = String(seconds%60).padStart(2,'0');
  document.getElementById('phase-timer').innerText = min+':'+sec;
  document.querySelector('.phase-timer').childNodes[0].textContent = fases[faseAtual].nome + ': ';
  updateRecursosEFiltros();
  if(seconds>0){seconds--;}else{clearInterval(timerInt); avancarFase();}
}

function startTimer(){
  clearInterval(timerInt);
  seconds = fases[faseAtual].tempo;
  updateTimer();
  timerInt = setInterval(updateTimer,1000);
}

function criarLegendaBloqueado(id,texto){
  let btn = document.getElementById(id);
  let legendaId = id+"-legenda";
  let legenda = document.getElementById(legendaId);
  if(!btn) return;
  if(!btn.disabled){ if(legenda) legenda.style.display="none"; return;}
  if(!legenda){
    legenda = document.createElement("div");
    legenda.id = legendaId;
    legenda.innerHTML = `<span style="color:#aaa;font-size:0.89em;text-align:center;display:block;">${texto}</span>`;
    btn.parentNode.insertBefore(legenda,btn.nextSibling);
  }
  legenda.style.display="block";
}

function atualizarPainelEvidencias() {
  if (evidenciasDescobertas.length === 0) {
    document.getElementById('evidence-container').innerHTML = `<b>Nenhuma pista exibida ainda.</b>`;
  } else {
    document.getElementById('evidence-container').innerHTML =
      `<b>Pistas encontradas:</b><ul>` +
      evidenciasDescobertas.map(p => `<li>${p}</li>`).join('') +
      `</ul>`;
  }
}

function updateRecursosEFiltros(){
  const equipamentos = ["scanner-btn","interrogate-btn","aria-btn","sync-btn"];
  equipamentos.forEach(id=>{
    let el=document.getElementById(id);
    let ativo=fases[faseAtual].equipamentosAtivos.includes(id);
    el.disabled=!ativo; el.style.opacity=ativo?1:0.5; el.title=ativo?"":"Disponível na próxima fase";
    criarLegendaBloqueado(id,"Disponível na fase 2");
    if(ativo){let legenda=document.getElementById(id+"-legenda"); if(legenda) legenda.style.display="none";}
  });
  document.querySelectorAll('.location-btn').forEach(btn=>{
    let ativo=fases[faseAtual].locaisAbertos.includes(btn.dataset.location);
    btn.disabled=!ativo; btn.style.opacity=ativo?1:0.5; btn.title=ativo?"":"Disponível na próxima fase";
    criarLegendaBloqueado(btn.id||btn.dataset.location,"Disponível na fase 2");
    if(ativo){let legenda=document.getElementById((btn.id||btn.dataset.location)+"-legenda"); if(legenda) legenda.style.display="none";}
  });
  atualizarPainelEvidencias();
}

function avancarFase(){
  if(faseAtual<fases.length-1){
    faseAtual++;seconds=fases[faseAtual].tempo;
    startTimer();
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
    if(faseAtual === fases.length-1) {
      document.getElementById('evidence-container').innerHTML = "<b>Última fase: Prepare-se para acusar!</b>";
    }
  }else{
    document.getElementById('phase-timer').innerText="00:00";
    alert("⏰ O tempo acabou! Última fase encerrada.");
  }
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(e=>e.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ==========================================
// EVENTOS DO JOGO
// ==========================================

window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('.select-role').forEach(btn=>{
    btn.onclick=()=>{
      selectedRole=btn.dataset.role;
      evidenciasDescobertas = [];
      pistaLabAtivada = false;
      eventosExecutados = [];
      showScreen('investigation');
      mountSuspects();
      prepareSolutionScreen();
      faseAtual=0; startTimer();
      document.getElementById('location-view').innerHTML = narrativaCompleta.introducao;
      atualizarPainelEvidencias();
    };
  });
});

function mountSuspects(){
  const grid=document.getElementById('suspects-grid');
  if(!grid) return;
  grid.innerHTML=
    suspectsData.map(s=>
      `<div class="suspect-card"><h4>${s.emoji} ${s.nome}</h4>
      <b>${s.cargo}</b><br>
      <b>Motivo:</b> ${s.motivo}<br>
      <b>Álibi:</b> ${s.alibi}</div>`
    ).join('')+
    `<div style="flex-basis:100%;height:0"></div>
    <button id="back-investigation" style="margin:14px 0 5px 0;padding:10px 30px;background:#32e6ff;font-weight:700;border-radius:9px;color:#032336;cursor:pointer;">
      ⬅️ Voltar
    </button>`;
  setTimeout(()=>{
    const backBtn=document.getElementById('back-investigation');
    if(backBtn) backBtn.onclick=()=>showScreen('investigation');
  },100);
}

document.querySelectorAll('.location-btn').forEach(btn=>{
  btn.onclick=()=>{
    let locationId = btn.dataset.location;
    if(locationId === "crime-scene"){
      renderLaboratorio();
    } else {
      document.getElementById('location-view').innerHTML =
        `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p>
        <p style="opacity:.7"><i>Use o Scanner ou outro equipamento para encontrar pistas.</i></p>`;
    }
    atualizarPainelEvidencias();
  };
});

document.getElementById('scanner-btn').onclick = () => {
  let activeBtn = document.querySelector('.location-btn.active');
  let locationId = activeBtn ? activeBtn.dataset.location : fases[faseAtual].locaisAbertos[0];
  let pistas = fases[faseAtual].pistasPorLocal[locationId] || [];
  
  pistas.forEach(pista => {
    if (!evidenciasDescobertas.includes(pista)) evidenciasDescobertas.push(pista);
    if(locationId === "crime-scene" && pista === "Amostras alienígenas") pistaLabAtivada = true;
  });
  
  if(locationId === "crime-scene"){
    renderLaboratorio();
    
    // Eventos especiais da Fase 1
    if(faseAtual === 0 && !eventosExecutados.includes('falha')) {
      setTimeout(()=> {
        let currentContent = document.getElementById('location-view').innerHTML;
        document.getElementById('location-view').innerHTML = currentContent + "<hr>" + narrativaCompleta.eventoFalha;
        eventosExecutados.push('falha');
      }, 30000);
      
      setTimeout(()=> {
        let currentContent = document.getElementById('location-view').innerHTML;
        document.getElementById('location-view').innerHTML = currentContent + "<hr>" + narrativaCompleta.mensagemOculta;
        eventosExecutados.push('mensagem');
      }, 60000);
    }
  }else{
    if(pistas.length > 0) {
      renderImagemPista(pistas[0], locationId);
    } else {
      document.getElementById('location-view').innerHTML = `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p><p><i>Nenhuma pista disponível neste local nesta fase.</i></p>`;
    }
  }
  atualizarPainelEvidencias();
};

document.getElementById('interrogate-btn').onclick=()=>{showScreen('suspects');};
document.getElementById('aria-btn').onclick=()=>{
  document.getElementById('evidence-container').innerHTML+=`<div style="color:#71ffcb; margin-top:10px;">🤖 IA ARIA: "Detectando anomalias nos protocolos de segurança. Recomendo verificar logs de acesso para identificar atividades suspeitas."</div>`;
};
document.getElementById('sync-btn').onclick=()=>{
  document.getElementById('evidence-container').innerHTML+=`<div style="color:#32e6ff; margin-top:10px;">🔗 Sincronização completa! Dados compartilhados entre detetives. Novas evidências podem estar disponíveis.</div>`;
};

function prepareSolutionScreen(){
  let killerSel=document.getElementById('killer-select');
  let accSel=document.getElementById('accomplice-select');
  if(killerSel && accSel) {
    killerSel.innerHTML=accSel.innerHTML="<option value=''>Selecione</option>"+suspectsData.map((s,i)=>`<option value="${i}">${s.nome}</option>`).join('');
  }
}

document.getElementById('submit-solution').onclick=()=>{
  let killerIdx=document.getElementById('killer-select').value;
  let methodIdx=document.getElementById('method-select').selectedIndex;
  let accIdx=document.getElementById('accomplice-select').value;
  let msg="";
  if((killerIdx==1)&&(accIdx==6)&&(methodIdx==1)){
    msg="✅ Parabéns! Você desvendou o mistério: Dr. Marcus Webb e Zara Al-Rashid eliminaram Elena usando Nanotecnologia Letal! A conspiração foi exposta e Alpha-7 está segura.";
  }
  else if(killerIdx==1){
    msg="🎯 Quase! Você acertou o assassino principal, mas errou alguns detalhes. A verdade está próxima...";
  }
  else{
    msg="❌ Erro! O culpado real escapou durante a investigação. A conspiração continua ativa em Alpha-7...";
  }
  alert(msg);
};
