import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useLeads } from '../contexts/LeadContext'

function FormBusca() {
  const [nicho, setNicho] = useState('')
  const [cidade, setCidade] = useState('')
  const [erros, setErros] = useState({})

  const { buscar } = useLeads()

  function validar() {
    const novosErros = {}

    if (!nicho.trim()) {
      novosErros.nicho = 'Informe o nicho de mercado.'
    } else if (nicho.trim().length < 3) {
      novosErros.nicho = 'O nicho deve ter pelo menos 3 caracteres.'
    } else if (/^[0-9]+$/.test(nicho)) {
      novosErros.nicho = 'O nicho não pode conter apenas números.'
    }

    if (!cidade.trim()) {
      novosErros.cidade = 'Informe a cidade.'
    } else if (cidade.trim().length < 3) {
      novosErros.cidade = 'A cidade deve ter pelo menos 3 caracteres.'
    } else if (/[0-9]/.test(cidade)) {
      novosErros.cidade = 'A cidade não pode conter números.'
    } else if (/[^a-zA-ZÀ-ÿ\s]/.test(cidade)) {
      novosErros.cidade = 'A cidade não pode conter caracteres especiais.'
    }

    return novosErros
  }

  function handleBuscar() {
    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) return

    buscar(nicho, cidade)
  }

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Nicho"
        placeholder="Ex: clínicas odontológicas"
        fullWidth
        sx={{ marginBottom: 1 }}
        value={nicho}
        onChange={(e) => {
          setNicho(e.target.value)
          setErros((prev) => ({ ...prev, nicho: '' }))
        }}
        error={!!erros.nicho}
        helperText={erros.nicho}
      />
      <TextField
        label="Cidade"
        placeholder="Ex: Cornélio Procópio"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value)
          setErros((prev) => ({ ...prev, cidade: '' }))
        }}
        error={!!erros.cidade}
        helperText={erros.cidade}
      />
      <Button variant="contained" onClick={handleBuscar}>
        Buscar
      </Button>
    </Box>
  )
}

export default FormBusca