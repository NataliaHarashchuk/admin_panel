import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flex: 1,
        background: 'linear-gradient(135deg, #d0e8f2 0%, #fdfbfb 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 'bold', color: '#1976d2' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Сторінку не знайдено
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 400 }}>
        Вибач, ми не змогли знайти сторінку, яку ти шукаєш. Можливо, вона була переміщена або ніколи не існувала.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/home')}
      >
        Повернутися назад
      </Button>
    </Box>
  );
}

export default NotFound



