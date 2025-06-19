import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import UserCard from './UserCard';



const UserList = () => {
const users = useSelector((state: RootState) => state.users.list);
  return (
    <>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </>
  );
};

export default UserList;