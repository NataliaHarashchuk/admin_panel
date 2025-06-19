import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../app/store';
import type { User} from '../types/types.ts'


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = users.find((u: User) => u.email === email && u.password === password);
    if (user) {
      dispatch(login(user));
      navigate('/home');
    } else {
      alert('Невірний логін або пароль');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Вхід</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Увійти</button>
    </form>
  );
}
