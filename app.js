const narrativaCompleta = {
  introducao: `
    <div style="text-align:center; margin:20px;">
      <h2 style="color:#ff6b6b;">🚨 ESTAÇÃO ALPHA-7 - 2087 🚨</h2>
      <p><b>06:15 — Protocolo de emergência ativado.</b></p>
      <p>Alarmes tocam. Luzes vermelhas. O anúncio da IA ARIA ecoa: <i>"Incidente crítico, laboratório isolado."</i></p>
      <p>Última gravação de Elena: <b>"Eles descobriram... O Projeto Genesis não pode sair daqui vivo..."</b></p>
      <p>Descubra a verdade antes que seja tarde demais.</p>
    </div>
  `,
  laboratorioInicial: `
    <div>
      <h3>🔬 Cena do Crime — Laboratório</h3>
      <p>Elena caída, vidro quebrado, amostras alienígenas derramadas, terminal com <b>"GAMMA-7 — acesso negado"</b>.</p>
    </div>
  `,
  pistaAmostras: `
    <div>
      <h4>🧬 Amostras Alienígenas Manipuladas</h4>
      <p>Nanobots clandestinos, digitais de Webb. ARIA: "Elena investigava protocolos não autorizados."</p>
    </div>
  `,
  eventoFalha: `
    <div>
      <b>⚡ Falha no sistema!</b> ARIA: "Detectando anomalias nos meus protocolos..."
    </div>
  `,
  mensagemOculta: `
    <div>
      <b>Mensagem oculta no terminal:</b>
      <code>SE ALGO ME ACONTECER... PROCUREM GAMMA-7. -E.V.</code>
    </div>
  `,
  inicioFase2: `
    <div><h2>Fase 2: Investigação</h2>
    <p>Setores abertos: <b>Centro de Comando</b> e <b>Módulo Criogênico</b>. Descubra quem monitorava Elena.</p></div>
  `,
  centroComandoInicial: `<p><b>Centro de Comando:</b> Login abortado às 05:12, perto do crime. Logs críticos suspeitos.</p>`,
  pistaLogsAcesso: `
    <ul>
      <li>03:47 — cartão Webb no laboratório</li>
      <li>04:52 — mudança na ARIA</li>
      <li>05:12 — logout forçado</li>
    </ul>
    <p>Webb ativo durante o crime.</p>
  `,
  pistaAlertasSistema: `<p>Falhas de segurança ocultadas do sistema. Alguém escondeu provas.</p>`,
  pistaFitaAudio: `<p>"Eles estão usando ciência como arma!", grita Elena no áudio perdido.</p>`,
  criogenicoInicial: `<p><b>Módulo Criogênico:</b> Amostras Gamma-7 sumidas; câmaras abertas.</p>`,
  pistaSeringas: `<p>Seringas de nanobots ligam Webb à manipulação das amostras.</p>`,
  inicioFase3: `
    <div><h2>Fase 3: Confrontação</h2>
    <p>Setores Médico e Reator abertos! Resolva antes que tudo se perca!</p></div>
  `,
  centroMedicoInicial: `<p>Relatório de autópsia quebrado, nanobots no sangue de Elena.</p>`,
  pistaHistoricoMedico: `<p>Arquivo mostra que Elena era cobaia dos experimentos. Webb tinha acesso total.</p>`,
  pistaNanobots: `<p>Nanobots híbridos, planejados para autodestruição. Webb único operador possível.</p>`,
  pistaAutopsia: `<p>Webb assina autópsia: falha neural induzida por nanobots.</p>`,
  reatorInicial: `<p><b>Reator:</b> Radiação fora do normal, sabotagem detectada.</p>`,
  pistaNiveisRadiacao: `<p>Protocolo de autodestruição em andamento! Webb programou a sabotagem.</p>`,
  eventoSabotagem: `<b>SABOTAGEM! Luzes piscam, sistemas caem, ARIA: "Eles me desligaram..."</b>`,
  confrontoFinal: `<div><h2>Confronto Final</h2><p>Faça sua acusação. O destino da estação está em suas mãos!</p></div>`,
  pistaResiduoNanobots: `<p>Resíduo de nanobots ativado remotamente do terminal de Webb.</p>`,
  pistaTerminalHackeado: `<p>Webb tentou apagar tudo, mas Elena criou cópias ocultas.</p>`
};
const suspectsData = [
  { nome: "Sarah Chen", cargo: "Comandante", motivo: "Questionada", alibi: "Comando", emoji: "⚔️" },
  { nome: "Dr. Webb", cargo: "Bioquímico", motivo: "Experimentos", alibi: "Criogenia", emoji: "🔬" },
  { nome: "Yuki", cargo: "Engenheira", motivo: "Bloqueio IA", alibi: "Núcleo", emoji: "🔧" },
  { nome: "Zara", cargo: "Criogenia", motivo: "Rivalidade", alibi: "Câmaras", emoji: "🧊" }
];
const fases = [
  { nome:"Fase 1: Descoberta",tempo:120,pistasPorLocal:{ "crime-scene":["Amostras alienígenas"] },locaisAbertos:["crime-scene"],equipamentosAtivos:["scanner-btn"] },
  { nome:"Fase 2: Investigação",tempo:300,pistasPorLocal:{ "crime-scene":["Amostras alienígenas"],"command":["Logs de acesso","Alertas de sistema","Fita de áudio"],"cryogenic":["Seringas médicas"]},locaisAbertos:["crime-scene","command","cryogenic"],equipamentosAtivos:["scanner-btn","interrogate-btn","aria-btn","sync-btn"] },
  { nome:"Fase 3: Confrontação",tempo:400,pistasPorLocal:{ "crime-scene":["Amostras alienígenas","Terminal hackeado","Resíduo de nanobots"],"command":["Logs de acesso","Alertas de sistema","Fita de áudio"],"cryogenic":["Seringas médicas"],"medical":["Histórico médico","Nanobots","Relatório de autópsia"],"reactor":["Níveis de radiação"] },locaisAbertos:["crime-scene","command","cryogenic","medical","reactor"],equipamentosAtivos:["scanner-btn","interrogate-btn","aria-btn","sync-btn"] }
];
const locs={
  "crime-scene":{nome:"Laboratório",descricao:"Cena do crime."},
  "command":{nome:"Comando",descricao:"Monitoramento e controle."},
  "cryogenic":{nome:"Criogenia",descricao:"Amostras em hibernação."},
  "medical":{nome:"Médico",descricao:"Hospital orbital."},
  "reactor":{nome:"Reator",descricao:"Energia central."}
};

let faseAtual=0,seconds=120,timerInt=null,localAtualmenteSelecionado="crime-scene",
 evidenciasDescobertas=[],pistaLabAtivada=false,eventosExecutados=[],selectedRole=null;

// Timer simples
function updateTimer(){
  let m=String(Math.floor(seconds/60)).padStart(2,"0"),s=String(seconds%60).padStart(2,"0");
  document.getElementById("phase-timer").innerText=m+":"+s;
  if(seconds>0){seconds--;}else{clearInterval(timerInt);avancarFase();}
}
function startTimer(){clearInterval(timerInt);seconds=fases[faseAtual].tempo;updateTimer();timerInt=setInterval(updateTimer,1000);}
function avancarFase(){
  if(faseAtual<fases.length-1){
    faseAtual++;startTimer();
    if(faseAtual===1) document.getElementById('location-view').innerHTML=narrativaCompleta.inicioFase2;
    if(faseAtual===2) document.getElementById('location-view').innerHTML=narrativaCompleta.inicioFase3;
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
  }else{document.getElementById('phase-timer').innerText="00:00";}
}
function atualizarPainelEvidencias(){
  document.getElementById("evidence-container").innerHTML=evidenciasDescobertas.length?`<ul>${evidenciasDescobertas.map(p=>`<li>${p}</li>`).join("")}</ul>`:"";
}
window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('.select-role').forEach(btn=>{
    btn.onclick=()=>{
      selectedRole=btn.dataset.role;evidenciasDescobertas=[];pistaLabAtivada=false;eventosExecutados=[];localAtualmenteSelecionado="crime-scene";
      faseAtual=0;startTimer();
      document.getElementById('location-view').innerHTML=narrativaCompleta.introducao;
      atualizarPainelEvidencias();
    };
  });
});
document.querySelectorAll('.location-btn').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.location-btn').forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    localAtualmenteSelecionado=btn.dataset.location;
    let fase=faseAtual,loc=localAtualmenteSelecionado;
    // Narrativas iniciais locais
    if(fase===0 && loc==="crime-scene") document.getElementById('location-view').innerHTML=narrativaCompleta.laboratorioInicial;
    if(fase===1 && loc==="command") document.getElementById('location-view').innerHTML=narrativaCompleta.centroComandoInicial;
    if(fase===1 && loc==="cryogenic") document.getElementById('location-view').innerHTML=narrativaCompleta.criogenicoInicial;
    if(fase===2 && loc==="medical") document.getElementById('location-view').innerHTML=narrativaCompleta.centroMedicoInicial;
    if(fase===2 && loc==="reactor") document.getElementById('location-view').innerHTML=narrativaCompleta.reatorInicial;
    atualizarPainelEvidencias();
  };
});
document.getElementById('scanner-btn').onclick=()=>{
  let loc=localAtualmenteSelecionado,phase=faseAtual,pistas=fases[phase].pistasPorLocal[loc]||[];
  pistas.forEach(pista=>{
    if(!evidenciasDescobertas.includes(pista)) evidenciasDescobertas.push(pista);
    let texto="";
    if(phase===0 && loc==="crime-scene" && pista==="Amostras alienígenas") texto=narrativaCompleta.pistaAmostras;
    else if(phase===1 && loc==="command" && pista==="Logs de acesso") texto=narrativaCompleta.pistaLogsAcesso;
    else if(phase===1 && loc==="command" && pista==="Alertas de sistema") texto=narrativaCompleta.pistaAlertasSistema;
    else if(phase===1 && loc==="command" && pista==="Fita de áudio") texto=narrativaCompleta.pistaFitaAudio;
    else if(phase===1 && loc==="cryogenic" && pista==="Seringas médicas") texto=narrativaCompleta.pistaSeringas;
    else if(phase===2 && loc==="crime-scene" && pista==="Resíduo de nanobots") texto=narrativaCompleta.pistaResiduoNanobots;
    else if(phase===2 && loc==="crime-scene" && pista==="Terminal hackeado") texto=narrativaCompleta.pistaTerminalHackeado;
    else if(phase===2 && loc==="medical" && pista==="Histórico médico") texto=narrativaCompleta.pistaHistoricoMedico;
    else if(phase===2 && loc==="medical" && pista==="Nanobots") texto=narrativaCompleta.pistaNanobots;
    else if(phase===2 && loc==="medical" && pista==="Relatório de autópsia") texto=narrativaCompleta.pistaAutopsia;
    else if(phase===2 && loc==="reactor" && pista==="Níveis de radiação") texto=narrativaCompleta.pistaNiveisRadiacao;
    else texto=`<b>Pista encontrada:</b> ${pista}`;
    document.getElementById('location-view').innerHTML=texto;
  });
  atualizarPainelEvidencias();
};
document.getElementById('interrogate-btn').onclick=()=>alert("Interrogatório em breve.");
document.getElementById('aria-btn').onclick=()=>alert('ARIA: "Verifique logs e protocolos."');
document.getElementById('sync-btn').onclick=()=>alert("Descobertas sincronizadas.");

updateTimer();
