const narrativa = {
  intro: `<h2>🚨 ESTAÇÃO ALPHA-7 — 2087 🚨</h2>
    <p><b>Protocolo de emergência ativado!</b><br>ALARME: <i>Incidente crítico detectado.<br>Laboratório isolado.</i></p>
    <p>Última gravação de Elena: "Eles descobriram... O Projeto Genesis não pode sair daqui vivo..."</p>`,
  laboratorio: `<b>Laboratório Principal</b><br>Elena no chão, amostras alienígenas derramadas e terminal com <b>GAMMA-7 — acesso negado</b>.`,
  amostras: `<b>Pista: Amostras Manipuladas</b><br>Scan detecta nanobots avançados. ARIA: "Elena investigava protocolos ilegais."`,
  fail: `<b>⚡ Falha Sistêmica!</b> ARIA: "Detectando anomalias nos meus protocolos..."`,
  command: `<b>Centro de Comando</b><br>Console mostra login abortado às 05:12, minutos antes do crime.`,
  logs: `<b>LOGS:</b><ul><li>03:47 — Webb acessa laboratório.</li><li>04:52 — Protocolo ARIA alterado.</li></ul>`,
  alertas: `<b>Alertas ocultados</b>: alguém alterou registros do sistema.`,
  cryo: `<b>Módulo Criogênico</b><br>Registros mostram remoção recente das amostras Gamma-7.`,
  seringas: `<b>Seringas de Nanobots</b> com digitais de Webb.`,
  medical: `<b>Centro Médico</b><br>Relatórios provam que Elena vinha sofrendo alterações neurais.`,
  autopsia: `<b>Autópsia</b>: Nanobots no sangue de Elena, ativados pouco antes da morte.`,
  reactor: `<b>Núcleo do Reator</b><br>Radiação desestabilizada, tentativa clara de sabotagem.`,
  final: `<h2>Confronto Final</h2><p>Todos os dados apontam para Webb e cúmplice. Acuse!</p>`
};

const locNames = {
  "crime-scene":"Laboratório",
  "command":"Comando",
  "cryogenic":"Criogenia",
  "medical":"Médico",
  "reactor":"Reator"
};

const fases = [
  { tempo:120, locais:["crime-scene"], pistas:{ "crime-scene":["laboratorio","amostras","fail"] } },
  { tempo:180, locais:["crime-scene","command","cryogenic"], pistas:{
      "command":["command","logs","alertas"],
      "cryogenic":["cryo","seringas"]
    }
  },
  { tempo:240, locais:["crime-scene","command","cryogenic","medical","reactor"], pistas:{
      "medical":["medical","autopsia"],
      "reactor":["reactor"]
    }
  }
];

let faseAtual=0, tempo=0, intervalo=null, localAtual="crime-scene", evidencias=[];

function atualizarTimer(){
  tempo = Math.max(tempo-1,0);
  let m=String(Math.floor(tempo/60)).padStart(2,"0"), s=String(tempo%60).padStart(2,"0");
  document.getElementById("phase-timer").innerText=`${m}:${s}`;
  if(!tempo) clearInterval(intervalo);
}
function startFase(){
  tempo=fases[faseAtual].tempo;
  clearInterval(intervalo); atualizarTimer();
  intervalo=setInterval(atualizarTimer,1000);
}

// Seleção do detetive
window.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll('.select-role').forEach(btn=>{
    btn.onclick=()=>{
      document.getElementById('detective-selection').style.display='none';
      document.getElementById('investigation').style.display='block';
      faseAtual=0; evidencias=[]; localAtual="crime-scene";
      startFase();
      document.getElementById('location-view').innerHTML=narrativa.intro;
      document.getElementById('evidence-container').innerHTML="";
    };
  });
});

// Locais
document.querySelectorAll('.location-btn').forEach(b=>{
  b.onclick=()=>{
    localAtual=b.dataset.location;
    document.getElementById('location-view').innerHTML = narrativa[localAtual]||`<h3>${locNames[localAtual]}</h3>`;
  };
});

// Scanner revela pistas sequenciais na fase/local
document.getElementById('scanner-btn').onclick=()=>{
  let ps = fases[faseAtual].pistas[localAtual]||[];
  let nova = ps.find(p=>!evidencias.includes(p));
  if(nova){
    evidencias.push(nova);
    document.getElementById('location-view').innerHTML=narrativa[nova];
  }else{
    document.getElementById('location-view').innerHTML=`<b>Você já analisou todas as pistas deste local nesta fase.</b>`;
  }
  document.getElementById('evidence-container').innerHTML =
    evidencias.map(p=>`<div>${narrativa[p]}</div>`).join('');
};

// Equipamentos
document.getElementById('aria-btn').onclick=()=>alert("ARIA: Verifique os logs e registros do comando.");
document.getElementById('sync-btn').onclick=()=>alert("Sincronização completa.");
document.getElementById('interrogate-btn').onclick=()=>alert("Função de interrogatório disponível nas próximas fases.");

// Fase seguinte ou final (exemplo básico)
document.getElementById('phase-timer').onclick=()=>{
  if(faseAtual<fases.length-1){
    faseAtual++; evidencias=[]; localAtual="crime-scene"; startFase();
    document.getElementById('location-view').innerHTML=narrativa.intro;
    document.getElementById('evidence-container').innerHTML="";
  }else{
    document.getElementById('location-view').innerHTML=narrativa.final;
  }
};
