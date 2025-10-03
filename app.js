// -- Adiciona controle de recursos por fase --
function aplicarRestricoesPorFase() {
  // Desbloqueia tudo por padrão
  document.getElementById('scanner-btn').disabled = false;
  document.getElementById('interrogate-btn').disabled = false;
  document.getElementById('aria-btn').disabled = false;
  document.getElementById('sync-btn').disabled = false;
  
  // Fase 1: Só scanner disponível e só Laboratório Principal aparece!
  if (faseAtual === 0) {
    document.getElementById('interrogate-btn').disabled = true;
    document.getElementById('aria-btn').disabled = true;
    document.getElementById('sync-btn').disabled = true;
    document.querySelectorAll('.location-btn').forEach(btn=>{
      btn.disabled = btn.dataset.location !== "crime-scene";
    });
    document.getElementById('evidence-container').innerHTML = 
      "<i>Só é possível analisar a cena do crime nesta fase.</i>";
  }
  // Fase 2: Tudo liberado
  if (faseAtual === 1) {
    document.querySelectorAll('.location-btn').forEach(btn=>btn.disabled=false);
    document.getElementById('interrogate-btn').disabled = false;
    document.getElementById('aria-btn').disabled = false;
    document.getElementById('sync-btn').disabled = false;
    document.getElementById('evidence-container').innerHTML = 
      "<i>Acesso completo aos equipamentos e interrogatórios!</i>";
  }
  // Fase 3: IA começa a falhar, scanner só funciona 4 vezes
  if (faseAtual === 2) {
    document.querySelectorAll('.location-btn').forEach(btn=>btn.disabled=false);
    document.getElementById('evidence-container').innerHTML = 
      "<i>Scanner com energia limitada (máx 4 usos). IA ARIA começa a apresentar falhas!</i>";
    let scannerUsos = 0;
    document.getElementById('scanner-btn').onclick = ()=>{
      scannerUsos++; 
      if(scannerUsos <= 4)
        document.getElementById('evidence-container').innerHTML += `<div>🔍 Scanner ativado (${scannerUsos}/4)!</div>`;
      else
        document.getElementById('evidence-container').innerHTML += "<div>⚠️ Energia do scanner esgotada!</div>";
    }
    document.getElementById('aria-btn').onclick = () => {
      document.getElementById('evidence-container').innerHTML += `<div>🤖 IA ARIA: ERRO DE ANÁLISE... dados corrompidos!</div>`;
    }
  }
  // Fase 4: Só sincronização e acusação final disponíveis
  if (faseAtual === 3) {
    document.getElementById('scanner-btn').disabled = true;
    document.getElementById('interrogate-btn').disabled = true;
    document.getElementById('aria-btn').disabled = true;
    document.getElementById('sync-btn').disabled = false;
    document.querySelectorAll('.location-btn').forEach(btn=>btn.disabled=true);
    document.getElementById('evidence-container').innerHTML = 
        "<span style='color:#ff845e'>⚠️ MOMENTO FINAL: agora só é possível sincronizar os dados e acusar o responsável!</span>";
  }
}

// Atualize/complete a função 'updateTimer' para chamar restrições a cada fase:
function updateTimer() {
  let min = String(Math.floor(seconds/60)).padStart(2,'0');
  let sec = String(seconds % 60).padStart(2,'0');
  document.getElementById('phase-timer').innerText = min + ':' + sec;
  document.querySelector('.phase-timer').childNodes[0].textContent = fases[faseAtual].nome + ': ';
  aplicarRestricoesPorFase(); // aplica a cada tick
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timerInt);
    avancarFase();
  }
}
