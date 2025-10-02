fetch('alpha7_versao_rapida.json')
  .then(resp => resp.json())
  .then(data => {
    document.getElementById('app').innerHTML = `
      <b>Tempo total:</b> ${data.tempos_ajustados.tempo_total}<br>
      <b>Urgência:</b> ${data.tempos_ajustados.urgencia}<br>
      <h2>Fases:</h2>
      <ol>${data.tempos_ajustados.fases_temporais.map(f =>
        `<li><b>${f.nome}</b> – ${f.duracao_minutos} min<br><i>${f.pressao_temporal}</i></li>`
      ).join('')}</ol>
      <h2>Mecânicas aceleradas:</h2>
      <ul><li>Scanner: ${data.tempos_ajustados.mecanicas_aceleradas.scanner_quantico.tempo_analise} por evidência, ${data.tempos_ajustados.mecanicas_aceleradas.scanner_quantico.energia_limitada}</li>
      <li>Interrogatório: ${data.tempos_ajustados.mecanicas_aceleradas.interrogatorios.tempo_por_suspeito}, máx ${data.tempos_ajustados.mecanicas_aceleradas.interrogatorios.perguntas_limitadas}</li></ul>
      <h2>Eventos no Tempo:</h2>
      <ul>${data.tempos_ajustados.eventos_tempo_real.map(ev =>
        `<li>Min ${ev.minuto}: ${ev.evento}</li>`
      ).join('')}</ul>
    `;
  });
