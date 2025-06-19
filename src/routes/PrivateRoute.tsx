import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

type Props = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: Props) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
