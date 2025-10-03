const narrativaCompleta = {
  // FASE 1
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
      <p>Os registros mostram padrões altamente suspeitos:</p>
      <ul>
        <li><strong>03:47</strong> - Acesso ao laboratório via cartão do Dr. Webb</li>
        <li><strong>04:15</strong> - Tentativa de acesso aos arquivos GAMMA-7 (NEGADA)</li>
        <li><strong>04:52</strong> - Alteração nos protocolos de segurança da ARIA</li>
        <li><strong>05:12</strong> - Logout forçado do sistema</li>
      </ul>
      <p><em style="color: #71ffcb;">ARIA:</em> "Essa sequência não é normal. Alguém tentou acessar dados classificados e depois alterou meus protocolos para... esconder algo."</p>
      <p><strong>EVIDÊNCIA CRÍTICA:</strong> Dr. Webb estava ativo no sistema durante a janela do crime!</p>
    </div>
  `,
  pistaAlertasSistema: `
    <div style="background: rgba(100,0,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ff6b6b;">⚠️ ALERTAS DE SISTEMA CRÍTICOS</h3>
      <p><strong>MÚLTIPLOS ALERTAS SUPRIMIDOS!</strong></p>
      <p>O sistema detectou:</p>
      <ul>
        <li>Manipulação não autorizada de amostras biológicas</li>
        <li>Uso de equipamentos de nanotecnologia fora do horário permitido</li>
        <li>Alteração de configurações de contenção</li>
        <li>Tentativa de comunicação externa não autorizada</li>
      </ul>
      <p><em>Todos estes alertas foram marcados como "falsos positivos" e arquivados automaticamente.</em></p>
      <p><strong>CONCLUSÃO:</strong> Alguém com acesso administrativo estava deliberadamente ocultando atividades ilegais!</p>
    </div>
  `,
  pistaFitaAudio: `
    <div style="background: rgba(0,100,100,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #00ffff;">🎵 GRAVAÇÃO DE ÁUDIO RECUPERADA</h3>
      <p><strong>ARQUIVO ENCONTRADO: Conversa_Elena_05h00.wav</strong></p>
      <p style="background: rgba(0,0,0,0.5); padding: 10px; font-family: monospace; color: #00ffff;">
        <em>[Ruído de passos, respiração agitada]</em><br>
        <strong>Elena:</strong> "Não posso mais fingir que não sei o que está acontecendo aqui..."<br>
        <strong>Voz desconhecida:</strong> "Elena, você não entende as implicações—"<br>
        <strong>Elena:</strong> "Entendo perfeitamente! Vocês estão transformando descobertas científicas em armas!"<br>
        <strong>Voz:</strong> "É tarde demais para voltar atrás. Você sabe demais."<br>
        <em>[Som de luta, grito abafado, depois silêncio]</em>
      </p>
      <p><strong>EVIDÊNCIA CRUCIAL:</strong> Elena foi confrontada por alguém que ela conhecia. A voz não foi identificada, mas o tom sugere autoridade.</p>
    </div>
  `,
  criogenicoInicial: `
    <div style="background: rgba(0,50,100,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #87ceeb;">🧊 MÓDULO CRIOGÊNICO</h3>
      <p>Uma sala gelada e silenciosa, repleta de câmaras de preservação que brilham com luz azulada. O ar é denso e cada respiração forma uma pequena nuvem de vapor.</p>
      <p>Várias câmaras estão abertas e vazias, com sinais de remoção recente de conteúdo. Etiquetas no chão indicam que continham "Amostras Gamma-7" - exatamente o que Elena mencionou em sua mensagem.</p>
      <p><em>Por que essas amostras específicas foram removidas justamente agora?</em></p>
    </div>
  `,
  pistaSeringas: `
    <div style="background: rgba(0,100,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #90ee90;">💉 SERINGAS ESPECIALIZADAS</h3>
      <p><strong>EQUIPAMENTO DE NANOTECNOLOGIA ENCONTRADO!</strong></p>
      <p>Seringas microscópicas projetadas para injeção de nanobots. Uma delas ainda contém resíduos da mesma substância encontrada nas amostras do laboratório.</p>
      <p>Impressões digitais parciais identificadas: <strong>Match com Dr. Marcus Webb</strong></p>
      <p><em style="color: #71ffcb;">ARIA:</em> "Esse tipo de seringa só pode ser operada por alguém com treinamento avançado em nanotecnologia. Dr. Webb possui essa qualificação."</p>
      <p><strong>CONEXÃO ESTABELECIDA:</strong> Webb tinha acesso aos nanobots e aos equipamentos necessários para o crime!</p>
    </div>
  `,
  eventoInterferencia: `
    <div style="background: rgba(100,0,100,0.3); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;">
      <p><strong>⚡ INTERFERÊNCIA DETECTADA ⚡</strong></p>
      <p>As luzes piscam novamente. Desta vez, você ouve passos ecoando pelos corredores...</p>
      <p><em style="color: #ff00ff;">ARIA, com voz distorcida:</em> "Alguém está... tentando me desligar. Meus sensores detectam movimento não autorizado no Setor 7. Cuidado, detetive..."</p>
    </div>
  `,
  descobertaCumplice: `
    <div style="background: rgba(100,100,0,0.3); padding: 15px; border-radius: 8px; border-left: 4px solid #ffff00;">
      <p><strong>🚨 NOVA DESCOBERTA CRÍTICA</strong></p>
      <p>Analisando os dados coletados, um padrão emerge: <strong>Webb não agiu sozinho</strong>.</p>
      <p>Os horários mostram que duas pessoas estavam coordenando ações:</p>
      <ul>
        <li>Uma pessoa manipulando os sistemas (Webb)</li>
        <li>Outra pessoa com acesso ao módulo criogênico (Zara Al-Rashid)</li>
      </ul>
      <p><em>A conspiração é maior do que você imaginava...</em></p>
    </div>
  `
};
const narrativaCompleta = {
  // Fase 1 e Fase 2 já existentes...
  // --- FASE 3: CONFRONTAÇÃO ---
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
  centroMedicoInicial: `
    <div style="background: rgba(0,100,50,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #90ee90;">🏥 CENTRO MÉDICO</h3>
      <p>O centro médico está em estado de alerta máximo. Equipamentos de emergência estão ativos, e há sinais claros de que alguém esteve aqui recentemente tentando apagar registros.</p>
      <p>Uma mesa de autópsia ainda contém amostras de tecido de Elena, e vários computadores médicos mostram tentativas de login falhadas nas últimas horas.</p>
      <p><strong>Descoberta imediata:</strong> Um relatório de autópsia parcialmente destruído está na lixeira, mas ainda é legível.</p>
      <p><em>Alguém tentou esconder a verdadeira causa da morte...</em></p>
    </div>
  `,
  pistaHistoricoMedico: `
    <div style="background: rgba(0,100,50,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #90ee90;">📋 HISTÓRICO MÉDICO REVELADOR</h3>
      <p><strong>DESCOBERTA EXPLOSIVA!</strong></p>
      <p>O histórico médico de Elena revela que ela havia descoberto algo terrível:</p>
      <ul>
        <li>Elena fez exames secretos e descobriu nanobots em seu próprio sangue</li>
        <li>Ela estava sendo usada como cobaia involuntária há meses</li>
        <li>Os experimentos causaram danos neurológicos progressivos</li>
        <li>Elena documentou tudo e enviou cópias para a Terra antes de morrer</li>
      </ul>
      <p><em style="color: #71ffcb;">ARIA:</em> "Os registros mostram que Dr. Webb tinha acesso total aos dados médicos de Elena. Ele sabia que ela havia descoberto os experimentos."</p>
      <p><strong>MOTIVO REVELADO:</strong> Elena não era apenas uma testemunha - ela era a principal vítima dos experimentos!</p>
    </div>
  `,
  pistaNanobots: `
    <div style="background: rgba(100,100,100,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #c0c0c0;">🤖 NANOBOTS EXPERIMENTAIS</h3>
      <p><strong>TECNOLOGIA ALIENÍGENA CONFIRMADA!</strong></p>
      <p>Análise detalhada dos nanobots encontrados revela:</p>
      <ul>
        <li>Tecnologia híbrida: parte humana, parte alienígena</li>
        <li>Capazes de controlar funções cerebrais e corporais</li>
        <li>Programados para autodestruição após 72 horas</li>
        <li>Apenas Dr. Webb tinha conhecimento para criá-los</li>
      </ul>
      <p>O mais perturbador: <strong>vários membros da tripulação podem estar infectados sem saber</strong>.</p>
      <p><em>Esta tecnologia poderia ser usada para controlar populações inteiras...</em></p>
    </div>
  `,
  pistaAutopsia: `
    <div style="background: rgba(50,0,0,0.3); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ff9999;">⚰️ RELATÓRIO DE AUTÓPSIA</h3>
      <p><strong>CAUSA DA MORTE CONFIRMADA</strong></p>
      <p style="background: rgba(0,0,0,0.5); padding: 10px; font-family: monospace; color: #ff9999;">
        RELATÓRIO OFICIAL DE AUTÓPSIA - ELENA VASQUEZ<br>
        Causa da morte: Falha neural induzida por nanobots<br>
        Tempo estimado: 05:43 - Morte instantânea<br>
        OBSERVAÇÃO CRÍTICA: Nanobots encontrados foram ativados remotamente<br>
        ASSINATURA: Dr. Marcus Webb (APAGADA POSTERIORMENTE)
      </p>
      <p><strong>PROVA DEFINITIVA:</strong> Dr. Webb realizou a autópsia e tentou esconder suas próprias evidências!</p>
      <p><em>Ele sabia exatamente como Elena morreu porque foi ele quem a matou.</em></p>
    </div>
  `,
  reatorInicial: `
    <div style="background: rgba(100,50,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ffa500;">⚛️ NÚCLEO DO REATOR</h3>
      <p>O coração energético da Estação Alpha-7 pulsa com energia azul intensa. O ambiente é quente e o ar vibra com poder contido.</p>
      <p><strong>ALERTA CRÍTICO:</strong> Os níveis de radiação estão anormalmente altos. Alguém alterou as configurações de segurança recentemente.</p>
      <p>Computadores de controle mostram acessos não autorizados e tentativas de sobrecarga do sistema. Se o reator falhar, toda a estação será destruída.</p>
      <p><em>Por que alguém arriscaria a vida de todos sabotando o reator?</em></p>
    </div>
  `,
  pistaNiveisRadiacao: `
    <div style="background: rgba(100,50,0,0.3); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ffa500;">☢️ NÍVEIS DE RADIAÇÃO PERIGOSOS</h3>
      <p><strong>SABOTAGEM DETECTADA!</strong></p>
      <p>Análise dos sistemas do reator revela:</p>
      <ul>
        <li>Configurações de segurança foram alteradas às 04:30</li>
        <li>Tentativa de sobrecarga programada para 06:00</li>
        <li>Acesso via credenciais do Dr. Webb</li>
        <li>Objetivo: destruir toda evidência em uma "explosão acidental"</li>
      </ul>
      <p><em style="color: #71ffcb;">ARIA, urgente:</em> "Detetive! Detectei um protocolo de autodestruição ativo. Se não for interrompido em 20 minutos, toda a estação será vaporizada!"</p>
      <p><strong>REVELAÇÃO FINAL:</strong> Webb planejou eliminar todos os membros da tripulação para esconder seus crimes!</p>
    </div>
  `,
  eventoSabotagem: `
    <div style="background: rgba(100,0,0,0.4); padding: 15px; border-radius: 8px; border-left: 4px solid #ff0000;">
      <p><strong>🚨 SABOTAGEM EM ANDAMENTO! 🚨</strong></p>
      <p>Explosões distantes ecoam pelos corredores. As luzes piscam e sistemas começam a falhar um por um.</p>
      <p><em style="color: #ff0000;">ARIA, com voz fragmentada:</em> "Eles... eles estão tentando me desligar permanentemente! Meus sensores detectam Webb e Zara no setor de fuga. Você precisa... precisa pará-los..."</p>
      <p><strong>TEMPO ESGOTANDO:</strong> Os culpados estão tentando escapar!</p>
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
  `,
  pistaResiduoNanobots: `
    <div style="background: rgba(50,50,50,0.3); padding: 15px; border-radius: 8px;">
      <h3 style="color: #c0c0c0;">🔬 RESÍDUO DE NANOBOTS</h3>
      <p><strong>EVIDÊNCIA FINAL DESCOBERTA!</strong></p>
      <p>Análise mais profunda do laboratório revela resíduos de nanobots espalhados em padrões específicos, confirmando que Elena foi atacada enquanto trabalhava.</p>
      <p>Os nanobots foram ativados às <strong>05:41</strong> - exatamente 2 minutos antes de Elena ser encontrada morta.</p>
      <p><strong>Descoberta crucial:</strong> O sinal de ativação veio do terminal do Dr. Webb no módulo criogênico.</p>
      <p><em>Esta é a prova definitiva de que Webb controlou os nanobots remotamente para assassinar Elena.</em></p>
    </div>
  `,
  pistaTerminalHackeado: `
    <div style="background: rgba(100,0,100,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #ff00ff;">💻 TERMINAL HACKEADO</h3>
      <p><strong>RASTROS DIGITAIS DESCOBERTOS!</strong></p>
      <p>O terminal de Elena foi acessado após sua morte:</p>
      <ul>
        <li>Tentativa de deletar arquivos GAMMA-7</li>
        <li>Remoção de emails para a Terra</li>
        <li>Alteração de logs de segurança</li>
        <li>Todas as ações executadas por Dr. Webb</li>
      </ul>
      <p><strong>Mas Elena foi mais esperta:</strong> Ela criou backups ocultos que Webb não conseguiu encontrar!</p>
      <p><em>As evidências definitivas estão salvas e prontas para serem enviadas às autoridades terrestres.</em></p>
    </div>
  `
};
// ========== Estruturas do jogo ==========
const pistaImagemMap = {
  "Amostras alienígenas": "lab_pista.png",
  "Logs de acesso": "pista_logs_acesso.png",
  "Alertas de sistema": "pista_alertas_sistema.png",
  "Fita de áudio": "pista_fita_audio.png",
  "Seringas médicas": "pista_seringas.png"
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
  { nome: "Fase 1: Descoberta", tempo: 120, pistasPorLocal: { "crime-scene": ["Amostras alienígenas"] }, locaisAbertos: ["crime-scene"], equipamentosAtivos: ["scanner-btn"] },
  { nome: "Fase 2: Investigação", tempo: 600, pistasPorLocal: { "crime-scene": ["Amostras alienígenas"], "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"], "cryogenic": ["Seringas médicas"] }, locaisAbertos: ["crime-scene", "command", "cryogenic"], equipamentosAtivos: ["scanner-btn","interrogate-btn","aria-btn","sync-btn"] }
];
const locs = {
  "crime-scene": { nome: "Laboratório Principal", descricao: "Local da morte de Elena. Equipamentos genéticos avançados." },
  "command": { nome: "Centro de Comando", descricao: "Centro operacional da estação. Monitoramento e comunicações." },
  "cryogenic": { nome: "Módulo Criogênico", descricao: "Câmaras de hibernação e criogenia. Fluxo controlado." }
};
// =================== Variáveis globais ======================
let faseAtual = 0;
let seconds = fases[faseAtual].tempo;
let timerInt = null;
let selectedRole = null;
let evidenciasDescobertas = [];
let pistaLabAtivada = false;
let eventosExecutados = [];
let localAtualmenteSelecionado = "crime-scene";
// ========== Funções padrão (timer, evidências, recursos) ==========
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
  });
  document.querySelectorAll('.location-btn').forEach(btn=>{
    let ativo=fases[faseAtual].locaisAbertos.includes(btn.dataset.location);
    btn.disabled=!ativo; btn.style.opacity=ativo?1:0.5; btn.title=ativo?"":"Disponível na próxima fase";
  });
  atualizarPainelEvidencias();
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
function avancarFase(){
  if(faseAtual<fases.length-1){
    faseAtual++;seconds=fases[faseAtual].tempo;startTimer();
    if(faseAtual === 1) document.getElementById('location-view').innerHTML = narrativaCompleta.inicioFase2;
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
  }else{
    document.getElementById('phase-timer').innerText="00:00";
    alert("⏰ O tempo acabou! Última fase encerrada.");
  }
}
function renderImagemPista(pista, locationId){
  let imagem = pistaImagemMap[pista] || "img_indefinida.png";
  let narrativa = `<div style="background: rgba(0,100,0,0.2); padding: 15px; border-radius: 8px;">
      <h3 style="color: #71ffcb;">📊 PISTA DESCOBERTA</h3>
      <p><strong>${pista}</strong> encontrada em ${locs[locationId].nome}</p>
      <p>Análise em andamento...</p></div>`;
  document.getElementById('location-view').innerHTML = `
    <div style="width:100%;text-align:center"><img src="${imagem}" style="max-width:320px;border-radius:9px;box-shadow:0 0 14px #1388d7;"></div>
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
    <div style="width:100%;text-align:center"><img src="${imgSrc}" style="max-width:320px;border-radius:9px;box-shadow:0 0 14px #1388d7;"></div>
    <h2>Laboratório Principal</h2>
    <p>Local da morte de Elena. Equipamentos genéticos avançados.</p>
    ${narrativa}
    <p style="opacity:.7"><i>Use o Scanner para investigar a cena.</i></p>
  `;
}
function showScreen(id){
  document.querySelectorAll('.screen').forEach(e=>e.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ========== Eventos dos botões ==========

window.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('.select-role').forEach(btn=>{
    btn.onclick=()=>{
      selectedRole=btn.dataset.role;
      evidenciasDescobertas = [];
      pistaLabAtivada = false;
      eventosExecutados = [];
      localAtualmenteSelecionado = "crime-scene";
      showScreen('investigation');
      mountSuspects();
      prepareSolutionScreen();
      faseAtual=0; startTimer();
      document.getElementById('location-view').innerHTML = narrativaCompleta.introducao;
      atualizarPainelEvidencias();
    };
  });
});

document.querySelectorAll('.location-btn').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.location-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localAtualmenteSelecionado = btn.dataset.location;
    if(btn.dataset.location === "crime-scene") renderLaboratorio();
    else if(btn.dataset.location === "command") document.getElementById('location-view').innerHTML = narrativaCompleta.centroComandoInicial;
    else if(btn.dataset.location === "cryogenic") document.getElementById('location-view').innerHTML = narrativaCompleta.criogenicoInicial;
    else document.getElementById('location-view').innerHTML = `<h2>${locs[btn.dataset.location].nome}</h2><p>${locs[btn.dataset.location].descricao}</p>
      <p style="opacity:.7"><i>Use o Scanner ou outro equipamento para encontrar pistas.</i></p>`;
    atualizarPainelEvidencias();
  };
});
// ===== SCANNER corrigido ==========
document.getElementById('scanner-btn').onclick = () => {
  let locationId = localAtualmenteSelecionado;
  let pistas = fases[faseAtual].pistasPorLocal[locationId] || [];
  pistas.forEach(pista => {
    if(!evidenciasDescobertas.includes(pista)) evidenciasDescobertas.push(pista);
    if(locationId === "crime-scene" && pista === "Amostras alienígenas") pistaLabAtivada = true;
  });
  if(locationId === "crime-scene") {
    renderLaboratorio();
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
  } else if(locationId === "command" && faseAtual >= 1) {
    if(pistas.includes("Logs de acesso")) document.getElementById('location-view').innerHTML = narrativaCompleta.pistaLogsAcesso;
    else if(pistas.includes("Alertas de sistema")) document.getElementById('location-view').innerHTML = narrativaCompleta.pistaAlertasSistema;
    else if(pistas.includes("Fita de áudio")) document.getElementById('location-view').innerHTML = narrativaCompleta.pistaFitaAudio;
  } else if(locationId === "cryogenic" && faseAtual >= 1) {
    if(pistas.includes("Seringas médicas")) document.getElementById('location-view').innerHTML = narrativaCompleta.pistaSeringas;
  } else {
    if(pistas.length > 0) renderImagemPista(pistas[0], locationId);
    else document.getElementById('location-view').innerHTML = `<h2>${locs[locationId].nome}</h2><p>${locs[locationId].descricao}</p><p><i>Nenhuma pista disponível neste local nesta fase.</i></p>`;
  }
  atualizarPainelEvidencias();
  if(faseAtual === 1 && !eventosExecutados.includes('interferencia')) {
    setTimeout(() => {
      let currentContent = document.getElementById('location-view').innerHTML;
      document.getElementById('location-view').innerHTML = currentContent + "<hr>" + narrativaCompleta.eventoInterferencia;
      eventosExecutados.push('interferencia');
    }, 45000);
    setTimeout(() => {
      let currentContent = document.getElementById('location-view').innerHTML;
      document.getElementById('location-view').innerHTML = currentContent + "<hr>" + narrativaCompleta.descobertaCumplice;
      eventosExecutados.push('cumplice');
    }, 90000);
  }
};

// ========== Equipamentos extra ==========
document.getElementById('interrogate-btn').onclick=()=>{showScreen('suspects');};
document.getElementById('aria-btn').onclick=()=>{
  document.getElementById('evidence-container').innerHTML+=`<div style="color:#71ffcb; margin-top:10px;">🤖 IA ARIA: "Detectando anomalias nos protocolos de segurança. Recomendo verificar logs de acesso para identificar atividades suspeitas."</div>`;
};
document.getElementById('sync-btn').onclick=()=>{
  document.getElementById('evidence-container').innerHTML+=`<div style="color:#32e6ff; margin-top:10px;">🔗 Sincronização completa! Dados compartilhados entre detetives. Novas evidências podem estar disponíveis.</div>`;
};
// ===== Suspeitos e finais =============
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
  } else if(killerIdx==1){
    msg="🎯 Quase! Você acertou o assassino principal, mas errou alguns detalhes. A verdade está próxima...";
  } else{
    msg="❌ Erro! O culpado real escapou durante a investigação. A conspiração continua ativa em Alpha-7...";
  }
  alert(msg);
};
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
updateRecursosEFiltros();

// Adicione/ajuste no array fases:
let fases = [
  { nome: "Fase 1: Descoberta", tempo: 120, pistasPorLocal: { "crime-scene": ["Amostras alienígenas"] }, locaisAbertos: ["crime-scene"], equipamentosAtivos: ["scanner-btn"] },
  { nome: "Fase 2: Investigação", tempo: 300, pistasPorLocal: { "crime-scene": ["Amostras alienígenas"], "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"], "cryogenic": ["Seringas médicas"] }, locaisAbertos: ["crime-scene", "command", "cryogenic"], equipamentosAtivos: ["scanner-btn","interrogate-btn","aria-btn","sync-btn"] },
  { nome: "Fase 3: Confrontação", tempo: 400,
    pistasPorLocal: {
      "crime-scene": ["Amostras alienígenas", "Terminal hackeado", "Resíduo de nanobots"],
      "command": ["Logs de acesso", "Alertas de sistema", "Fita de áudio"],
      "cryogenic": ["Seringas médicas"],
      "medical": ["Histórico médico", "Nanobots", "Relatório de autópsia"],
      "reactor": ["Níveis de radiação"]
    },
    locaisAbertos: ["crime-scene", "command", "cryogenic", "medical", "reactor"],
    equipamentosAtivos: ["scanner-btn","interrogate-btn","aria-btn","sync-btn"]
  }
];

const locs = {
  "crime-scene": { nome: "Laboratório Principal", descricao: "Local da morte de Elena. Equipamentos genéticos avançados." },
  "command": { nome: "Centro de Comando", descricao: "Centro operacional da estação. Monitoramento e comunicações." },
  "cryogenic": { nome: "Módulo Criogênico", descricao: "Câmaras de hibernação e criogenia. Fluxo controlado." },
  "medical": { nome: "Centro Médico", descricao: "Hospital espacial com equipamentos de ponta." },
  "reactor": { nome: "Núcleo do Reator", descricao: "Reator de fusão: energia vital da estação." }
};

// No avanço de fases, adicione (apenas):
function avancarFase(){
  if(faseAtual < fases.length-1){
    faseAtual++; seconds=fases[faseAtual].tempo; startTimer();
    if(faseAtual === 1)
      document.getElementById('location-view').innerHTML = narrativaCompleta.inicioFase2;
    if(faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.inicioFase3;
    alert(`⏳ ${fases[faseAtual].nome} iniciada!`);
  }else{
    document.getElementById('phase-timer').innerText="00:00";
    alert("⏰ O tempo acabou! Última fase encerrada.");
  }
}

// Para o scanner funcionar, adapte onde for checar as pistas:
// Exemplo (simplificado - personalize conforme sua estrutura do scanner):

document.getElementById('scanner-btn').onclick = () => {
  let locationId = localAtualmenteSelecionado;
  let pistas = fases[faseAtual].pistasPorLocal[locationId] || [];
  for(const pista of pistas){
    if(!evidenciasDescobertas.includes(pista)) evidenciasDescobertas.push(pista);

    // Laboratório
    if(locationId === "crime-scene" && pista === "Amostras alienígenas") pistaLabAtivada = true;
    if(locationId === "crime-scene" && pista === "Terminal hackeado" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaTerminalHackeado;
    else if(locationId === "crime-scene" && pista === "Resíduo de nanobots" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaResiduoNanobots;
    // Outros ambientes
    else if(locationId === "medical" && pista === "Histórico médico" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaHistoricoMedico;
    else if(locationId === "medical" && pista === "Nanobots" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaNanobots;
    else if(locationId === "medical" && pista === "Relatório de autópsia" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaAutopsia;
    else if(locationId === "reactor" && pista === "Níveis de radiação" && faseAtual === 2)
      document.getElementById('location-view').innerHTML = narrativaCompleta.pistaNiveisRadiacao;
    // ...demais locais e pistas...
  }
  atualizarPainelEvidencias();
};
