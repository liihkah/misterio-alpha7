// ===========================
// Narrativa e Configurações
// ===========================
const narrativa = {
  intro: `<h2>🚨 ESTAÇÃO ALPHA-7 — 2087 🚨</h2>
    <p><b>Protocolo de emergência ativado!</b><br>
    Alarmes tocam. ARIA: <i>"Incidente crítico no Laboratório Principal."</i></p>
    <p>Última gravação de Elena: <b>"Eles descobriram... O Projeto Genesis não pode sair daqui vivo..."</b></p>`,
  laboratorio: `<h3>🔬 Laboratório Principal</h3>
    <p>Elena no chão, vidro estilhaçado, amostras alienígenas derramadas e um terminal com <b>GAMMA-7 — acesso negado</b>.</p>`,
  amostras: `<h3>🧬 Amostras Alienígenas</h3>
    <p>O scanner revela nanobots clandestinos nas amostras.<br>
    ARIA: "Elena investigava protocolos não autorizados."</p>`,
  falha: `<div style="background:#300;padding:10px;border-radius:5px;">
    <b>⚡ FALHA NO SISTEMA!</b><br>
    ARIA: "Detectando anomalias nos meus protocolos... alguém me modificou."</div>`,
  mensagem: `<h4>📨 Mensagem Oculta</h4>
    <p><code>SE ALGO ME ACONTECER... PROCUREM GAMMA-7.<br>
    AS SERPENTES ESTÃO NO NINHO. —E.V.</code></p>`,
  fase2: `<h2>🔍 Fase 2: Investigação</h2>
    <p>Novos setores liberados: <b>Centro de Comando</b> e <b>Módulo Criogênico</b>.</p>`,
  command: `<h3>🛸 Centro de Comando</h3>
    <p>Console mostra login abortado às 05:12. ARIA: "Atividade suspeita detectada."</p>`,
  logs: `<h4>📝 Logs de Acesso</h4>
    <ul>
      <li>03:47 — Cartão de Webb no laboratório</li>
      <li>04:52 — Protocolos ARIA alterados</li>
      <li>05:12 — Logout forçado</li>
    </ul><p><b>Webb estava ativo na cena do crime.</b></p>`,
  alertas: `<h4>⚠️ Alertas Ocultos</h4>
    <p>Sistema marcou manipulações como falsos positivos.</p>`,
  fita: `<h4>🎵 Fita de Áudio</h4>
    <p>"Eles estão usando a ciência como arma!" —voz de Elena.</p>`,
  criogenia: `<h3>❄️ Módulo Criogênico</h3>
    <p>Várias câmaras abertas: amostras Gamma-7 removidas.</p>`,
  seringas: `<h4>💉 Seringas de Nanobots</h4>
    <p>Resíduos encontrados e digitais de Webb.</p>`,
  fase3: `<h2>⚔️ Fase 3: Confrontação</h2>
    <p>Centros Médico e Reator liberados. Última chance de parar a fuga!</p>`,
  medical: `<h3>🏥 Centro Médico</h3>
    <p>Relatório de autópsia parcial: nanobots no sangue de Elena.</p>`,
  historico: `<h4>📋 Histórico Médico</h4>
    <p>Documentos secretos revelam que Elena era cobaia dos experimentos.</p>`,
  nanobots: `<h4>🤖 Nanobots Híbridos</h4>
    <p>Projetados para controle neural e autodestruição.</p>`,
  autopsia: `<h4>⚰️ Relatório de Autópsia</h4>
    <p>Webb assinou: <i>falha neural induzida por nanobot</i>.</p>`,
  reator: `<h3>⚛️ Núcleo do Reator</h3>
    <p>Configurações sabotadas; níveis críticos de radiação.</p>`,
  radiacao: `<h4>☢️ Sabotagem de Radiação</h4>
    <p>Protocolo de autodestruição em 20 minutos!</p>`,
  final: `<h2>🎯 Confronto Final</h2>
    <p>Webb e cúmplice pegos. Faça sua acusação e salve Alpha-7.</p>`
};

const fases = [
  { tempo:120, locais:["crime-scene"], pistas:{ "crime-scene":["laboratorio","amostras","falha","mensagem"] } },
  { tempo:180, locais:["crime-scene","command","cryogenic"], pistas:{
      "command":["command","logs","alertas","fita"],
      "cryogenic":["criogenia","seringas"]
    }
  },
  { tempo:240, locais:["medical","reactor"], pistas:{
      "medical":["medical","historico","nanobots","autopsia"],
      "reactor":["reator","radiacao"]
    }
  }
];

const locNames = {
  "crime-scene":"Laboratório Principal",
  "command":"Centro de Comando",
  "cryogenic":"Módulo Criogênico",
  "medical":"Centro Médico",
  "reactor":"Núcleo do Reator"
};

let faseAtual=0, segs=0, intervalId=null, localAtual="crime-scene", evidencias=[];

// Atualiza timer
function atualizarTimer(){
  const m = String(Math.floor(segs/60)).padStart(2,'0');
  const s = String(segs%60).padStart(2,'0');
  document.getElementById("phase-timer").innerText = `${m}:${s}`;
  if(segs>0) segs--; else clearInterval(intervalId);
}
function iniciarFase(){
  segs = fases[faseAtual].tempo;
  clearInterval(intervalId);
  atualizarTimer();
  intervalId = setInterval(atualizarTimer,1000);
}

// Muda de tela
function showScreen(id){
  document.querySelectorAll(".screen").forEach(el=> el.style.display="none");
  document.getElementById(id).style.display="block";
}

// Exibe narrativa/pistas
function exibirNarrativa(key){
  document.getElementById("location-view").innerHTML = narrativa[key] || "";
}
function atualizarEvidencias(){
  const html = evidencias.map(k=>`<div>${narrativa[k]}</div>`).join("");
  document.getElementById("evidence-container").innerHTML = html;
}

// Início do jogo
window.onload = () => {
  document.querySelectorAll(".select-role").forEach(btn=>{
    btn.onclick = () => {
      showScreen("investigation");
      faseAtual = 0;
      evidencias = [];
      localAtual = "crime-scene";
      iniciarFase();
      exibirNarrativa("intro");
      atualizarEvidencias();
    };
  });
};

// Botões de local
document.querySelectorAll(".location-btn").forEach(btn=>{
  btn.onclick = () => {
    localAtual = btn.dataset.location;
    const narrKey = fases[faseAtual].pistas[localAtual]?.[0];
    exibirNarrativa(narrKey || localAtual);
  };
});

// Scanner
document.getElementById("scanner-btn").onclick = () => {
  const arr = fases[faseAtual].pistas[localAtual] || [];
  const next = arr.find(k=>!evidencias.includes(k));
  if(next){
    evidencias.push(next);
    exibirNarrativa(next);
    atualizarEvidencias();
  }
};

// Equipamentos
document.getElementById("aria-btn").onclick = () => alert("ARIA: Analisando protocolos...");
document.getElementById("sync-btn").onclick = () => alert("Sincronização completa!");
document.getElementById("interrogate-btn").onclick = () => alert("Interrogatório não implementado ainda.");

// Transição de fase (clique no timer)
document.getElementById("phase-timer").onclick = () => {
  if(faseAtual < fases.length - 1){
    faseAtual++;
    evidencias = [];
    iniciarFase();
    exibirNarrativa(faseAtual===1? "fase2":"fase3");
  } else {
    exibirNarrativa("final");
  }
};
