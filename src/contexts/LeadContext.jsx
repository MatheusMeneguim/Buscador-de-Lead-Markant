import { createContext, useContext, useState } from 'react'

const LeadContext = createContext(null)

export function LeadProvider({ children }) {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)
  const [buscaAtual, setBuscaAtual] = useState({ nicho: '', cidade: '' })

  async function buscar(nicho, cidade) {
    setLoading(true)
    setErro(null)
    setLeads([])
    setBuscaAtual({ nicho, cidade })

    try {
      console.log('Buscando na API:', nicho, cidade)
      // Por enquanto só loga — vamos conectar a API no próximo passo
    } catch (err) {
      setErro('Erro ao buscar leads. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <LeadContext.Provider value={{ leads, loading, erro, buscaAtual, buscar }}>
      {children}
    </LeadContext.Provider>
  )
}

export function useLeads() {
  return useContext(LeadContext)
}