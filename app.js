// =====================================
// NARRATIVAS COMPLETAS E IMERSIVAS
// =====================================
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
  
  // FASE 1
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
  `,

  // FASE 2
  inicioFase2: `
    <div style="text-align: center; padding: 20px; background: rgba(50,0,100,0.3); border-radius: 10px; margin: 10px;">
      <h2 style="color: #71ffcb;">🔍 FASE 2: INVESTIGAÇÃO PROFUNDA</h2>
      <p><strong>Novos setores desbloqueados!</strong></p>
      <p>Com as evidências da Fase 1, ARIA liberou acesso ao <strong>Centro de Comando</strong> e <strong>Módulo Criogênico</strong>. A conspiração está se revelando, mas cada pista descoberta parece levantar mais questões.</p>
      <p><em style="color: #ff9999;">ARIA:</em> "Detetive, detectei atividades suspeitas nos logs de sistema. Alguém estava monitorando Elena há semanas..."</p>
      <p><strong>Sua missão:</strong> Investigar os logs de acesso, descobrir quem tinha conhecimento dos experimentos e identificar possíveis cúmplices.</p>
    </div>
  `,
  
  centroComandoInicial: `
    <div style="background: rgba(0,0,100,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #71ffcb;">🖥️ CENTRO DE COMANDO</h3>
      <p>O coração da Estação Alpha-7. Múltiplas telas exibem dados em tempo real: órbita, sistemas vitais, comunicações. Uma cadeira está ligeiramente desalinhada, como se alguém tivesse saído rapidamente.</p>
      <p>O console principal ainda está ativo, mostrando uma sessão de login que não foi finalizada. Horário da última atividade: <strong>05:12 - apenas 31 minutos antes da descoberta do corpo</strong>.</p>
      <p><em>Quem estava aqui tão próximo ao horário da morte?</em></p>
    </div>
  `,
  
  pistaLogsAcesso: `
    <div style="background: rgba(100,50,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ffd700;">📊 LOGS DE ACESSO ANALISADOS</h3>
      <p><strong>DESCOBERTA ALARMANTE!</strong></p>
      <p>Os logs revelam um padrão perturbador de atividades nas últimas 24 horas:</p>
      <ul style="color: #ffff99;">
        <li><strong>03:47</strong> - Cartão de acesso do Dr. Webb detectado no laboratório</li>
        <li><strong>04:15</strong> - Tentativa de acesso negada aos arquivos GAMMA-7</li>
        <li><strong>04:52</strong> - Modificações não autorizadas nos protocolos da ARIA</li>
        <li><strong>05:12</strong> - Logout forçado do sistema principal</li>
        <li><strong>05:43</strong> - Corpo de Elena descoberto</li>
      </ul>
      <p><strong style="color: #ff6b6b;">CONCLUSÃO:</strong> Dr. Marcus Webb estava altamente ativo no sistema durante a janela temporal do crime.</p>
      <p><em>Mas ele estava trabalhando sozinho?</em></p>
    </div>
  `,

  // FASE 3
  inicioFase3: `
    <div style="text-align: center; padding: 20px; background: rgba(100,0,0,0.3); border-radius: 10px; margin: 10px;">
      <h2 style="color: #ff6b6b;">⚔️ FASE 3: CONFRONTAÇÃO FINAL</h2>
      <p><strong>Todos os setores liberados - Situação crítica!</strong></p>
      <p>As evidências coletadas apontam claramente para Dr. Webb e Zara Al-Rashid como os culpados. Mas a conspiração é ainda mais profunda do que imaginávamos.</p>
      <p><em style="color: #ff9999;">ARIA, voz instável:</em> "Detetive... meus sistemas estão sendo atacados. Eles sabem que você está próximo da verdade. Os setores médico e do reator foram liberados em emergência."</p>
      <p><strong>MISSÃO CRÍTICA:</strong> Colete as evidências finais antes que os culpados destruam todas as provas e escapem!</p>
      <p style="color: #ff6b6b;"><strong>⚠️ ATENÇÃO:</strong> A estação pode entrar em colapso se não resolver isso rapidamente!</p>
    </div>
  `,

  confrontoFinal: `
    <div style="background: rgba(100,100,0,0.4); padding: 20px; border-radius: 8px; border-left: 4px solid #gold;">
      <p><strong>⚔️ CONFRONTO FINAL IMINENTE</strong></p>
      <p>Todas as evidências foram coletadas. A verdade está clara:</p>
      <ul>
        <li><strong>Dr. Marcus Webb:</strong> Mente por trás dos experimentos ilegais</li>
        <li><strong>Zara Al-Rashid:</strong> Cúmplice que ajudou a preservar as amostras</li>
        <li><strong>Método:</strong> Nanobots letais controlados remotamente</li>
        <li><strong>Motivo:</strong> Elena descobriu que era cobaia e tentou expor tudo</li>
      </ul>
      <p><strong style="color: #ffd700;">É hora de fazer sua acusação final e salvar Alpha-7!</strong></p>
      <p><em>O destino da estação e de todos a bordo está em suas mãos...</em></p>
    </div>
  `
};

// =====================================
// DADOS DO JOGO
// =====================================
const suspectsData = [
  { nome: "Comandante Sarah Chen", cargo: "Comandante da Estação", motivo: "Elena questionava suas decisões", alibi: "Centro de Comando", emoji: "⚔️" },
  { nome: "Dr. Marcus Webb", cargo: "Biólogo Chefe", motivo: "Experimentos não autorizados", alibi: "Módulo de Criogenia", emoji: "🔬" },
  { nome: "Yuki Tanaka", cargo: "Engenheira de Sistemas", motivo: "Acesso IA ARIA bloqueado", alibi: "Núcleo Central", emoji: "🔧" },
  { nome: "Viktor Petrov", cargo: "Piloto Chefe", motivo: "Contrabando descoberto", alibi: "Hangar", emoji: "🚀" },
  { nome: "Dra. Amara Okafor", cargo: "Psicóloga", motivo: "Relatório rejeitado", alibi: "Sessões virtuais", emoji: "💡" },
  { nome: "James Rodriguez", cargo: "Chefe de Segurança", motivo: "Falhas que escondeu", alibi: "Corredores", emoji: "🔒" },
  { nome: "Zara Al-Rashid", cargo: "Criogenia", motivo: "Rivalidade científica", alibi: "Câmaras criogênicas", emoji: "🧊" }
];

const fases = [
  { 
    nome: "Fase 1: Descoberta", 
    tempo: 120, 
    pistasPorLocal: { 
      "crime-scene": ["laboratorioInicial", "pistaAmostras", "eventoFalha", "mensagemOculta"] 
    }, 
    locaisAbertos: ["crime-scene"], 
    equipamentosAtivos: ["scanner-btn"] 
  },
  { 
    nome: "Fase 2: Investigação", 
    tempo: 300, 
    pistasPorLocal: { 
      "crime-scene": ["laboratorioInicial", "pistaAmostras"],
      "command": ["centroComandoInicial", "pistaLogsAcesso"],
      "cryogenic": ["criogenicoInicial", "pistaSeringas"]
    }, 
    locaisAbertos: ["crime-scene", "command", "cryogenic"], 
    equipamentosAtivos: ["scanner-btn", "interrogate-btn", "aria-btn", "sync-btn"] 
  },
  { 
    nome: "Fase 3: Confrontação", 
    tempo: 400,
    pistasPorLocal: {
      "crime-scene": ["laboratorioInicial", "pistaAmostras"],
      "command": ["centroComandoInicial", "pistaLogsAcesso"],
      "cryogenic": ["criogenicoInicial", "pistaSeringas"],
      "medical": ["centroMedicoInicial", "pistaHistoricoMedico"],
      "reactor": ["reatorInicial", "pistaNiveisRadiacao"]
    },
    locaisAbertos: ["crime-scene", "command", "cryogenic", "medical", "reactor"],
    equipamentosAtivos: ["scanner-btn", "interrogate-btn", "aria-btn", "sync-btn"]
  }
];

// =====================================
// VARIÁVEIS GLOBAIS
// =====================================
let faseAtual = 0;
let seconds = 120;
let timerInterval = null;
let selectedRole = null;
let evidenciasDescobertas = [];
let localAtualmenteSelecionado = "crime-scene";
let eventosExecutados = [];
let pistaIndexPorLocal = {};

// =====================================
// FUNÇÕES PRINCIPAIS
// =====================================
function updateTimer() {
  let min = String(Math.floor(seconds / 60)).padStart(2, '0');
  let sec = String(seconds % 60).padStart(2, '0');
  document.getElementById('phase-timer').innerText = min + ':' + sec;
  
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timerInterval);
    avancarFase();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  seconds = fases[faseAtual].tempo;
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function avancarFase() {
  if (faseAtual < fases.length - 1) {
    faseAtual++;
    seconds = fases[faseAtual].tempo;
    startTimer();
    
    if (faseAtual === 1) {
      document.getElementById('location-view').innerHTML = narrativaCompleta.inicioFase2;
    } else if (faseAtual === 2) {
      document.getElementById('location-view').innerHTML = narrativaCompleta.inicioFase3;
    }
    
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
    updateRecursosEFiltros();
  } else {
    document.getElementById('phase-timer').innerText = "00:00";
    document.getElementById('location-view').innerHTML = narrativaCompleta.confrontoFinal;
  }
}

function updateRecursosEFiltros() {
  const equipamentos = ["scanner-btn", "interrogate-btn", "aria-btn", "sync-btn"];
  equipamentos.forEach(id => {
    let el = document.getElementById(id);
    let ativo = fases[faseAtual].equipamentosAtivos.includes(id);
    el.disabled = !ativo;
    el.style.opacity = ativo ? 1 : 0.5;
    el.title = ativo ? "" : "Disponível na próxima fase";
  });

  document.querySelectorAll('.location-btn').forEach(btn => {
    let ativo = fases[faseAtual].locaisAbertos.includes(btn.dataset.location);
    btn.disabled = !ativo;
    btn.style.opacity = ativo ? 1 : 0.5;
    btn.title = ativo ? "" : "Disponível na próxima fase";
  });
}

function atualizarPainelEvidencias() {
  if (evidenciasDescobertas.length === 0) {
    document.getElementById('evidence-container').innerHTML = `<p style="opacity:0.7;">Nenhuma evidência encontrada ainda.</p>`;
  } else {
    document.getElementById('evidence-container').innerHTML = 
      evidenciasDescobertas.map(evidencia => `<div class="evidence-item">• ${evidencia}</div>`).join('');
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(e => e.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if (screenId === 'investigation') {
    document.getElementById(screenId).style.display = 'block';
  }
}

// =====================================
// EVENT LISTENERS
// =====================================
window.addEventListener("DOMContentLoaded", () => {
  // Seleção de papel
  document.querySelectorAll('.select-role').forEach(btn => {
    btn.onclick = () => {
      selectedRole = btn.dataset.role;
      evidenciasDescobertas = [];
      localAtualmenteSelecionado = "crime-scene";
      eventosExecutados = [];
      pistaIndexPorLocal = {};
      
      showScreen('investigation');
      mountSuspects();
      prepareSolutionScreen();
      faseAtual = 0;
      startTimer();
      
      document.getElementById('location-view').innerHTML = narrativaCompleta.introducao;
      atualizarPainelEvidencias();
      updateRecursosEFiltros();
    };
  });
  
  // Botões de local
  document.querySelectorAll('.location-btn').forEach(btn => {
    btn.onclick = () => {
      if (!btn.disabled) {
        document.querySelectorAll('.location-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        localAtualmenteSelecionado = btn.dataset.location;
        
        // Mostra descrição inicial do local
        const pistas = fases[faseAtual].pistasPorLocal[localAtualmenteSelecionado] || [];
        if (pistas.length > 0) {
          document.getElementById('location-view').innerHTML = narrativaCompleta[pistas[0]];
        }
      }
    };
  });
  
  // Scanner
  document.getElementById('scanner-btn').onclick = () => {
    const pistas = fases[faseAtual].pistasPorLocal[localAtualmenteSelecionado] || [];
    
    if (!pistaIndexPorLocal[localAtualmenteSelecionado]) {
      pistaIndexPorLocal[localAtualmenteSelecionado] = 0;
    }
    
    const indiceAtual = pistaIndexPorLocal[localAtualmenteSelecionado];
    
    if (indiceAtual < pistas.length) {
      const pista = pistas[indiceAtual];
      const nomeEvidencia = pista.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      
      if (!evidenciasDescobertas.includes(nomeEvidencia)) {
        evidenciasDescobertas.push(nomeEvidencia);
      }
      
      document.getElementById('location-view').innerHTML = narrativaCompleta[pista];
      pistaIndexPorLocal[localAtualmenteSelecionado]++;
      
      atualizarPainelEvidencias();
      
      // Eventos especiais
      if (faseAtual === 0 && !eventosExecutados.includes('falha')) {
        setTimeout(() => {
          if (document.getElementById('location-view').innerHTML.includes('SCANNER ATIVADO')) {
            let currentContent = document.getElementById('location-view').innerHTML;
            document.getElementById('location-view').innerHTML = currentContent + "<hr>" + narrativaCompleta.eventoFalha;
            eventosExecutados.push('falha');
          }
        }, 30000);
      }
    } else {
      document.getElementById('location-view').innerHTML = `<p><strong>Análise completa.</strong> Todas as pistas disponíveis neste local foram descobertas nesta fase.</p>`;
    }
  };
  
  // Outros equipamentos
  document.getElementById('interrogate-btn').onclick = () => {
    showScreen('suspects');
  };
  
  document.getElementById('aria-btn').onclick = () => {
    const dicas = [
      "Verifique os logs de acesso para identificar atividades suspeitas.",
      "As amostras alienígenas foram modificadas recentemente.",
      "Alguém tem alterado meus protocolos sem autorização.",
      "Elena estava preocupada com experimentos não autorizados.",
      "Os nanobots encontrados não fazem parte dos experimentos oficiais."
    ];
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    alert(`🤖 ARIA: "${dica}"`);
  };
  
  document.getElementById('sync-btn').onclick = () => {
    alert("🔗 Sincronização completa! Dados compartilhados entre detetives. Algumas evidências podem ter sido atualizadas.");
  };
});
// =====================================
// SUSPEITOS E SOLUÇÃO
// =====================================
function mountSuspects() {
  const grid = document.getElementById('suspects-grid');
  if (!grid) return;
  
  grid.innerHTML = suspectsData.map(s => 
    `<div class="suspect-card">
      <h4>${s.emoji} ${s.nome}</h4>
      <b>${s.cargo}</b><br>
      <b>Motivo:</b> ${s.motivo}<br>
      <b>Álibi:</b> ${s.alibi}
    </div>`
  ).join('') + 
  `<button id="back-investigation" style="margin:20px 0;padding:12px 30px;background:#32e6ff;color:#032336;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">
    ⬅️ Voltar à Investigação
  </button>`;
  
  setTimeout(() => {
    const backBtn = document.getElementById('back-investigation');
    if (backBtn) {
      backBtn.onclick = () => showScreen('investigation');
    }
  }, 100);
}

function prepareSolutionScreen() {
  let killerSel = document.getElementById('killer-select');
  let accSel = document.getElementById('accomplice-select');
  
  if (killerSel && accSel) {
    const options = "<option value=''>Selecione</option>" + 
      suspectsData.map((s, i) => `<option value="${i}">${s.nome}</option>`).join('');
    killerSel.innerHTML = options;
    accSel.innerHTML = options;
  }
}

document.getElementById('submit-solution').onclick = () => {
  let killerIdx = document.getElementById('killer-select').value;
  let methodIdx = document.getElementById('method-select').selectedIndex;
  let accIdx = document.getElementById('accomplice-select').value;
  
  let msg = "";
  if ((killerIdx == 1) && (accIdx == 6) && (methodIdx == 1)) {
    msg = "✅ Parabéns! Você desvendou o mistério: Dr. Marcus Webb e Zara Al-Rashid eliminaram Elena usando Nanotecnologia Letal! A conspiração foi exposta e Alpha-7 está segura.";
  } else if (killerIdx == 1) {
    msg = "🎯 Quase! Você acertou o assassino principal, mas errou alguns detalhes. A verdade está próxima...";
  } else {
    msg = "❌ Erro! O culpado real escapou durante a investigação. A conspiração continua ativa em Alpha-7...";
  }
  
  alert(msg);
  showScreen('investigation');
};

// Inicialização
updateRecursosEFiltros();
