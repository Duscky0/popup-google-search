javascript:(function(){
  const apiKey = 'AIzaSyC4CQ5WQApLW0yUMgdtUOWpLFLU1FikkM0'; // sua chave API
  const cseId = 'f5b794fc06f05409b'; // seu ID do mecanismo de busca

  const query = window.getSelection().toString() || prompt('Digite o termo para buscar:');
  if(!query) return alert('Busca cancelada.');

  let popup = document.getElementById('gcs-bookmarklet-popup');
  if(!popup){
    popup = document.createElement('div');
    popup.id = 'gcs-bookmarklet-popup';
    popup.style = 'position:fixed;bottom:20px;right:20px;width:360px;max-height:320px;overflow-y:auto;background:#fff;border:1px solid #333;padding:10px;z-index:99999;box-shadow:0 0 15px rgba(0,0,0,0.3);font-family:Arial,sans-serif;font-size:14px;color:#000;';
    document.body.appendChild(popup);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fechar';
    closeBtn.style = 'display:block;margin-bottom:8px;cursor:pointer;';
    closeBtn.onclick = () => popup.remove();
    popup.appendChild(closeBtn);
  } else {
    popup.innerHTML = '';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fechar';
    closeBtn.style = 'display:block;margin-bottom:8px;cursor:pointer;';
    closeBtn.onclick = () => popup.remove();
    popup.appendChild(closeBtn);
  }

  fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if(data.items && data.items.length){
        data.items.forEach(item => {
          const div = document.createElement('div');
          div.style.marginBottom = '12px';

          const a = document.createElement('a');
          a.href = item.link;
          a.target = '_blank';
          a.textContent = item.title;
          a.style = 'font-weight:bold;color:#1a0dab;text-decoration:none;';

          const p = document.createElement('p');
          p.textContent = item.snippet;
          p.style.margin = '4px 0';

          div.appendChild(a);
          div.appendChild(p);
          popup.appendChild(div);
        });
      } else {
        const p = document.createElement('p');
        p.textContent = 'Nenhum resultado encontrado.';
        popup.appendChild(p);
      }
    })
    .catch(() => {
      const p = document.createElement('p');
      p.textContent = 'Erro ao buscar resultados.';
      popup.appendChild(p);
    });
})();
