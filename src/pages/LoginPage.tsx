import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../app/store';
import type { User } from '../types/types';
import {
  Button,
  TextField,
  Typography,
  Alert
} from '@mui/material';
import CenteredContainer from '../components/CenteredContainer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Невалідний формат email');
      return;
    }

    if (password.length < 6) {
      setError('Пароль має містити щонайменше 6 символів');
      return;
    }

    const user = users.find((u: User) => u.email === email && u.password === password);
    if (user) {
      dispatch(login(user));
      navigate('/home');
    } else {
      setError('Невірний логін або пароль');
    }
  };

  return (
    <CenteredContainer>
      <form onSubmit={handleLogin}>
        <Typography variant="h5" component="h2" gutterBottom>
          Вхід
        </Typography>

        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          inputProps={{
            pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            title: "Введіть коректний email у форматі example@domain.com",
          }}
        />

        <TextField
          type="password"
          label="Пароль"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          slotProps={{
            minLength: 6,
            title: "Пароль має містити щонайменше 6 символів",
          }}
        />

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Увійти
        </Button>
      </form>
    </CenteredContainer >
  );
}
