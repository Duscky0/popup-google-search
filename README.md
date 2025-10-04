# Google Search Bookmarklet 🔍

Um bookmarklet que abre resultados de busca do **Google Custom Search API** direto em um popup na página que você estiver.

---

## 🚀 Como usar

1. Clone este repositório ou copie o código do arquivo `bookmarklet.js`.
2. Substitua no código:
   - `apiKey` pela sua chave da [Google Custom Search API](https://developers.google.com/custom-search/v1/overview).
   - `cseId` pelo seu ID de mecanismo de busca personalizado.
3. Copie todo o código começando com `javascript:(function(){...})();`.
4. No seu navegador:
   - Crie um novo **Favorito / Bookmark**.
   - No campo **URL**, cole o código.
5. Agora, sempre que você clicar no favorito:
   - Selecione um texto em uma página ou digite uma palavra.
   - Os resultados aparecerão em uma caixinha popup.

---

## 🛠️ Exemplo de uso
- Selecione um texto em qualquer site → clique no bookmarklet → popup abre com resultados.

---

## ⚠️ Observação importante
- **Não compartilhe sua API key em público** (este código expõe a chave se usado diretamente).  
- Se quiser segurança extra, crie um backend que chama a API, e faça o bookmarklet chamar seu backend em vez da API diretamente.  

---

## 📜 Licença
MIT
