import { Box, Paper } from '@mui/material';

export default function CenteredContainer({ children }: { children: React.ReactNode }) {
    return (<Box
        sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg,rgb(254, 255, 211) 0%,rgb(181, 225, 254) 50%,rgb(139, 247, 238) 100%)',
            p: 2,
        }}
    >
        <Paper elevation={3} sx={{ p: 4, minWidth: 300, maxWidth:450 }}>
            {children}
        </Paper>
    </Box>);
}