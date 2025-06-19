import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);


    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };


    const shouldShowLogout = isAuthenticated;

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    АДМІНКА
                </Typography>

                {shouldShowLogout && (
                    <Box>
                        <Button color="inherit" onClick={handleLogout}>
                            Вийти
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;


