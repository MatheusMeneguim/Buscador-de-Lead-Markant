import { LeadProvider } from './contexts/LeadContext'
import FormBusca from './components/FormBusca'

function App() {
  return (
    <LeadProvider>
      <h1>Buscador de Leads Qualificados</h1>
      <FormBusca />
    </LeadProvider>
  )
}

export default App