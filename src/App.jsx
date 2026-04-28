import { Box, Container, Typography } from '@mui/material'
import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'
import TabelaLeads from './components/TabelaLeads'
import Historico from './components/Historico'
import BotaoExportar from './components/BotaoExportar'

function App() {
  return (
    <LeadProvider>

      {/* Header */}
      <Box sx={{
        borderBottom: '1px solid #3a3936',
        px: 4,
        py: 2,
        display: 'flex',
        alignItems: 'center',
      }}>
        <img
          src="/Logo_padrao_amarelo_branco.png"
          alt="Markant"
          style={{ height: 32, width: 'auto' }}
        />
      </Box>

      {/* Hero */}
      <Box sx={{
        borderBottom: '1px solid #3a3936',
        px: 4,
        py: 6,
      }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'inline-block',
            backgroundColor: '#D9E021',
            color: '#2B2A29',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            mb: 2,
            fontFamily: 'Space Grotesk, sans-serif',
          }}>
            GROWTH LAB
          </Box>

          <Typography variant="h3" fontWeight={700} sx={{ mb: 1.5, maxWidth: 600 }}>
            Buscador de Leads Qualificados
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
            Encontre empresas prontas para prospecção com dados direto do Google Maps — e exporte para o seu CRM em segundos.
          </Typography>
        </Container>
      </Box>

      {/* Conteúdo principal */}
      <Container maxWidth="lg">

        {/* Card do formulário */}
        <Box sx={{
          backgroundColor: 'background.paper',
          border: '1px solid #3a3936',
          borderRadius: 2,
          p: 4,
          mt: 4,
        }}>
          <Typography variant="h6" fontWeight={600} mb={3}>
            Insira os dados da busca
          </Typography>
          <FormBusca />
        </Box>

        {/* Histórico */}
        <Historico />

        {/* Botão exportar */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <BotaoExportar />
        </Box>

        {/* Tabela */}
        <TabelaLeads />

      </Container>

      {/* Footer */}
      <Box sx={{
        borderTop: '1px solid #3a3936',
        mt: 8,
        px: 4,
        py: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}>
        <img
          src="/Logo_padrao_amarelo_branco.png"
          alt="Markant"
          style={{ height: 24, width: 'auto' }}
        />
        <Typography variant="caption" color="text.secondary">
          © 2025 Markant. Todos os direitos reservados.
        </Typography>
      </Box>

    </LeadProvider>
  )
}

export default App