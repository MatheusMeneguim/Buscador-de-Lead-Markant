import { Box, TextField, Button } from '@mui/material'

function FormBusca() {
  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Nicho"
        placeholder="Ex: clínicas odontológicas"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Cidade"
        placeholder="Ex: Cornélio Procópio"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained">
        Buscar
      </Button>
    </Box>
  )
}

export default FormBusca