# Buscador de Leads Qualificados — [Markant Growth Marketing](https://markant.com.br)

Single Page Application (SPA) desenvolvida em React.js
para a disciplina de Programação Web Fullstack (AS64A)
da UTFPR — Campus Cornélio Procópio.

Ferramenta de prospecção inteligente de leads B2B
via extração de dados públicos do Google Maps.

🔗 **Deploy:** [buscador.markant.com.br](https://buscador.markant.com.br)

---

## Objetivo

Facilitar a busca por prestadores de serviços e empresas em localizações específicas, servindo como ferramenta estratégica de prospecção para a [Markant Growth Marketing](https://markant.com.br).

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| React.js + Vite | SPA moderna e performática |
| Google Places API | API JSON para busca de dados locais do Google Maps |
| Context API | Gerenciamento de estado global e histórico de buscas |
| useMemo | Otimização de filtragem sem re-renderizações |
| Material UI (MUI) | Interface profissional e responsiva |
| Vercel Serverless | Função intermediária para chamada segura à API |
| Exportação CSV | Conversão de leads para uso em CRMs |

---

## Estrutura do Projeto
/src
/components     — Componentes reutilizáveis em JSX
FormBusca.jsx     — Formulário com validação de campos
TabelaLeads.jsx   — Tabela de resultados com useMemo
BotaoExportar.jsx — Exportação dos leads em CSV
Historico.jsx     — Histórico de buscas via Context
/contexts
LeadContext.jsx   — Estado global, busca e histórico
/api
buscar.js           — Função serverless (Google Places API)
---

## Funcionalidades

1. **Busca Parametrizada** — Pesquisa por nicho e cidade com parâmetros dinâmicos para a API
2. **Validação de Formulário** — Verificação de campos obrigatórios com mensagens de erro antes do envio
3. **Tratamento de Erros** — Feedback visual para falhas na API após o envio
4. **Filtro Inteligente** — useMemo para filtragem de leads por avaliação em memória
5. **Histórico de Buscas** — Context API armazena as últimas 5 buscas realizadas
6. **Exportação CSV** — Leads exportados em formato .csv para importação em CRMs

---

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/buscador-de-lead-markant

# 2. Instale as dependências
npm install

# 3. Execute em modo de desenvolvimento (usa mock data)
npm run dev
```

> A integração com a Google Places API funciona apenas em produção via Vercel,
> pois a chave fica armazenada como variável de ambiente segura na Vercel.
> Em desenvolvimento local os dados são simulados via mock.

---

## Critérios Acadêmicos Atendidos

| Critério | Como foi implementado |
|----------|----------------------|
| SPA com React + Vite | Toda a aplicação em uma única página HTML |
| API JSON externa | Google Places API via função serverless |
| Busca com parâmetros | Campos nicho e cidade enviados para a API |
| Validação de campos | Verificação antes e depois do envio |
| Context API | LeadContext gerencia leads, loading, erro e histórico |
| Hook useMemo | Filtragem de leads por avaliação sem re-renderização |
| Biblioteca externa | Material UI (MUI) |
| Deploy em servidor | Vercel — buscador.markant.com.br |
| Versionamento Git | Commits incrementais durante todo o desenvolvimento |

---

## Autor

**Matheus F. Meneguim**
Fundador — [Markant Growth Marketing](https://markant.com.br)

Projeto desenvolvido sob orientação do
Prof. Anderson Paulo Avila Santos — UTFPR Campus Cornélio Procópio
Disciplina: Programação Web Fullstack (AS64A)