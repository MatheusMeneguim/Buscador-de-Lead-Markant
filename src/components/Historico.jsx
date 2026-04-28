import { Box, Typography, Chip, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import HistoryIcon from '@mui/icons-material/History'
import { useLeads } from '../contexts/LeadContext'

function Historico() {
  const { historico, buscar } = useLeads()

  if (historico.length === 0) return null

  return (
    <Box sx={{ paddingX: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
        <HistoryIcon fontSize="small" color="action" />
        <Typography variant="subtitle2" color="text.secondary">
          Buscas recentes
        </Typography>
      </Box>

      <Divider />

      <List dense disablePadding>
        {historico.map((h, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={() => buscar(h.nicho, h.cidade)}>
              <ListItemText
                primary={`${h.nicho} em ${h.cidade}`}
                secondary={h.data}
              />
              <Chip label={`${h.total} leads`} size="small" variant="outlined" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Historico