import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'
import TabelaLeads from './components/TabelaLeads'

function App() {
  return (
    <LeadProvider>
      <h1>Buscador de Leads Qualificados</h1>
      <FormBusca />
      <TabelaLeads />
    </LeadProvider>
  )
}

export default App