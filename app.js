const narrativaCompleta = {
  introducao: `
    <div style="text-align:center; margin:20px;">
      <h2 style="color:#ff6b6b;">🚨 ESTAÇÃO ALPHA-7 - 2087 🚨</h2>
      <p><b>Protocolo de emergência ativado.</b></p>
      <p>Alarmes tocam. ARIA: <i>"Incidente crítico, laboratório isolado."</i></p>
      <p>Última gravação: <b>"Eles descobriram... O Projeto Genesis não pode sair daqui vivo..."</b></p>
    </div>
  `,
  laboratorioInicial: `<b>🔬 Laboratório Principal</b><br>O local está em completa desordem. Elena jaz no chão, vidro quebrado por toda parte, amostras brilhando em verde neon. Terminal piscando: <b>GAMMA-7 — acesso negado</b>.`,
  pistaAmostras: `<b>🧬 Amostras Manipuladas</b><br>Scanner revela: nanobots clandestinos nas amostras! ARIA: "Elena investigava protocolos indevidos."`,
  eventoFalha: `<b>⚡ Falha no sistema!</b> ARIA: "Detectando anomalias... alguém está alterando minha programação!"`,
  mensagemOculta: `<b>Mensagem oculta:</b> <code>PROCUREM GAMMA-7. AS SERPENTES ESTÃO NO NINHO. -E.V.</code>`,
  inicioFase2: `<h2>Fase 2: Investigação</h2><p>Setores Comando e Criogenia liberados. Novas rotas, mais segredos.</p>`,
  centroComandoInicial: `<b>🖥️ Centro de Comando</b><br>O console ativou logout forçado minutos antes da morte. ARIA está inquieta: "Detectei tentativas de acesso não autorizado."</p>`,
  pistaLogsAcesso: `
    <b>LOGS CRÍTICOS:</b>
    <ul>
      <li>03:47 — Webb acessa o laboratório.</li>
      <li>04:15 — tentativa de acesso negada a GAMMA-7.</li>
      <li>04:52 — protocolo ARIA alterado.</li>
      <li>05:12 — logout forçado.</li>
    </ul>
    <p><b>Evidência clara:</b> Webb estava atuando perto do horário do crime.</p>`,
  pistaAlertasSistema: `<b>⚠️ Alertas ocultados</b><br>Falhas e manipulações marcadas pelo sistema como "falso positivo".`,
  pistaFitaAudio: `<b>Áudio captado:</b> "Eles querem usar tudo que achamos como arma!"`,
  criogenicoInicial: `<b>🧊 Módulo Criogênico</b><br>Etiquetas mostram amostras Gamma-7 removidas. Câmaras abertas. Rastro direto para Webb e sua cúmplice.`,
  pistaSeringas: `<b>Seringas de nanobots</b> contêm digitais de Webb. Equipamento avançado para manipulação genética clandestina.`,
  inicioFase3: `<h2>Fase 3: Confrontação</h2><p>Setores Médico e Reator liberados. As últimas peças do quebra-cabeça.</p>`,
  centroMedicoInicial: `<b>Centro Médico</b><br>Relatório de autópsia indica nanobots no sangue de Elena. Terminais com tentativas de deletar arquivos.`,
  pistaHistoricoMedico: `<b>Histórico secreto:</b> Elena fazia exames para detectar anomalias em seu próprio sangue. Todos apontam: Webb era o único com acesso para adulterar esses arquivos.`,
  pistaNanobots: `<b>Nanobots híbridos</b>: tecnologia além dos padrões humanos, com módulo de autodestruição ativável remotamente.`,
  pistaAutopsia: `<b>Relatório de autópsia:</b> Assinado (e depois apagado) por Webb: "Morte: falha neural induzida por nanobot ativado externamente."`,
  reatorInicial: `<b>⚛️ Núcleo do Reator</b><br>Alarmes de radiação! Alguém alterou as configurações de segurança para provocar autodestruição.`,
  pistaNiveisRadiacao: `<b>ALERTA:</b> Protocolos sabotados às 04:30; tentativa de destruição agendada para logo após o crime.`,
  eventoSabotagem: `<b>SABOTAGEM EM ANDAMENTO!</b> Explosões logo virão. ARIA: "Webb e Zara estão tentando escapar..."`,
  confrontoFinal: `<h2>Confronto Final</h2><b>Webb e Zara são os responsáveis!</b> Apresente sua acusação antes que destruam todas as provas.`,
  pistaResiduoNanobots: `<b>Resíduo de nanobots:</b> Ativação às 05:41 pelo terminal do Dr. Webb.`,
  pistaTerminalHackeado: `<b>Terminal de Elena hackeado:</b> Webb tentou apagar tudo, mas Elena escondeu cópias de segurança!`
};

// Dados e lógica
const fases = [
  { tempo:120, locais:["crime-scene"], pistas:{ "crime-scene":["laboratorioInicial","pistaAmostras"] } },
  { tempo:180, locais:["crime-scene","command","cryogenic"], pistas:{
      "command":["centroComandoInicial","pistaLogsAcesso","pistaAlertasSistema","pistaFitaAudio"],
      "cryogenic":["criogenicoInicial","pistaSeringas"]
    }
  },
  { tempo:240, locais:["crime-scene","command","cryogenic","medical","reactor"], pistas:{
      "medical":["centroMedicoInicial","pistaHistoricoMedico","pistaNanobots","pistaAutopsia"],
      "reactor":["reatorInicial","pistaNiveisRadiacao"],
      "crime-scene":["pistaResiduoNanobots","pistaTerminalHackeado"]
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

let faseAtual=0, seg=0, tInt=null, localAtual="crime-scene", pistasObtidas=[];

// UI & Timer
function atualizarTimer(){
  let m = String(Math.floor(seg/60)).padStart(2,'0'), s = String(seg%60).padStart(2,'0');
  document.getElementById("phase-timer").innerText = `${m}:${s}`;
  if (seg>0) seg--; else clearInterval(tInt);
}
function iniciarFase(){
  seg = fases[faseAtual].tempo;
  clearInterval(tInt);
  tInt = setInterval(atualizarTimer,1000);
  atualizarTimer();
}
function showScreen(id){
  document.querySelectorAll(".screen").forEach(d=>d.style.display="none");
  document.getElementById(id).style.display="block";
}
function atualizarPistas(){
  document.getElementById('evidence-container').innerHTML = pistasObtidas.length?
    `<ul>${pistasObtidas.map(p=>`<li>${p}</li>`).join('')}</ul>` : '';
}
// Início
window.onload = ()=>{
  document.querySelectorAll(".select-role").forEach(b=>{
    b.onclick=()=>{
      showScreen("investigation");
      iniciarFase();
      document.getElementById("location-view").innerHTML = narrativaCompleta.introducao;
      atualizarPistas();
    };
  });
};
// Locais
document.querySelectorAll(".location-btn").forEach(b=>{
  b.onclick=()=>{
    localAtual=b.dataset.location;
    let narrKey = fases[faseAtual].pistas[localAtual]?.[0];
    document.getElementById("location-view").innerHTML = narrativaCompleta[narrKey]||"<p>Vazio</p>";
  };
});
// Scanner
document.getElementById("scanner-btn").onclick=()=>{
  let ps = fases[faseAtual].pistas[localAtual]||[];
  ps.forEach(pk=>{
    if (!pistasObtidas.includes(narrativaCompleta[pk])) pistasObtidas.push(narrativaCompleta[pk]);
    document.getElementById("location-view").innerHTML = narrativaCompleta[pk];
  });
  atualizarPistas();
};
document.getElementById("aria-btn").onclick=()=>alert("ARIA: Verifique logs suspeitos!");
document.getElementById("sync-btn").onclick=()=>alert("Sincronizado.");
document.getElementById("interrogate-btn").onclick=()=>alert("Interrogatório só após investigação avançada!");
