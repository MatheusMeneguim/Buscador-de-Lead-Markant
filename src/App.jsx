import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'
import TabelaLeads from './components/TabelaLeads'
import Historico from './components/Historico'
import BotaoExportar from './components/BotaoExportar'

function App() {
  return (
    <LeadProvider>
      <h1>Buscador de Leads Qualificados</h1>
      <FormBusca />
      <Historico />
      <BotaoExportar />
      <TabelaLeads />
    </LeadProvider>
  )
}

export default App