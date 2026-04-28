import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'
import TabelaLeads from './components/TabelaLeads'
import Historico from './components/Historico'

function App() {
  return (
    <LeadProvider>
      <h1>Buscador de Leads Qualificados</h1>
      <FormBusca />
      <Historico />
      <TabelaLeads />
    </LeadProvider>
  )
}

export default App