import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

function FormBusca() {
  const [nicho, setNicho] = useState('')
  const [cidade, setCidade] = useState('')

  function handleBuscar() {
    console.log('Buscando:', nicho, cidade)
  }

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Nicho"
        placeholder="Ex: clínicas odontológicas"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={nicho}
        onChange={(e) => setNicho(e.target.value)}
      />
      <TextField
        label="Cidade"
        placeholder="Ex: Cornélio Procópio"
        fullWidth
        sx={{ marginBottom: 2 }}
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <Button variant="contained" onClick={handleBuscar}>
        Buscar
      </Button>
    </Box>
  )
}

export default FormBusca