# Buscador de Leads Qualificados — [Markant Growth Marketing](https://markant.com.br)

Single Page Application (SPA) desenvolvida em React.js
para a disciplina de Programação Web Fullstack (AS64A)
da UTFPR — Campus Cornélio Procópio.

Ferramenta de prospecção inteligente de leads B2B
via extração de dados públicos do Google Maps.

---

## Objetivo

Facilitar a busca por prestadores de serviços e empresas em localizações específicas, servindo como ferramenta estratégica de prospecção para a [Markant Growth Marketing](https://markant.com.br).

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| Vite | Build tool — estrutura moderna e rápida |
| Zenserp API | API JSON para busca de dados locais |
| Context API | Gerenciamento de estado global e histórico |
| useMemo | Otimização de filtragem sem re-renderizações |
| Material UI (MUI) | Interface profissional e responsiva |
| Exportação CSV | Conversão de JSON para uso em CRMs |

---

## Estrutura do Projeto
/src
/components   — Componentes reutilizáveis em JSX
/contexts     — Contextos para gerenciamento de estado
/services     — Configuração de consumo da API externa

---

## Funcionalidades

1. **Busca Parametrizada** — Pesquisa por nicho e cidade
   com parâmetros dinâmicos para a API
2. **Validação de Formulário** — Verificação de campos
   obrigatórios com mensagens de erro
3. **Tratamento de Erros** — Feedback visual para falhas
   na API ou limite de requisições
4. **Filtro Inteligente** — useMemo para tratamento
   de dados em memória
5. **Exportação CSV** — Dados validados exportados
   em formato .csv para uso em CRM

---

## Como rodar

```bash
# 1. Clone o repositório
git clone [url-do-repositorio]

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env na raiz
echo "VITE_ZENSERP_API_KEY=SUA_CHAVE_AQUI" > .env

# 4. Execute em modo de desenvolvimento
npm run dev
```

---

## Autor

**Matheus F. Meneguim**
Fundador — [Markant Growth Marketing](https://markant.com.br)

Projeto desenvolvido sob orientação do
Prof. Anderson Paulo Avila Santos — UTFPR Campus Cornélio Procópio
Disciplina: Programação Web Fullstack (AS64A)