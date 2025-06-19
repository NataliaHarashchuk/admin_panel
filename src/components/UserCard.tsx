import type { User} from '../types/types.ts'

const UserCard = ({ user }: { user: User }) => {
  return (
    <div>
        <div>{user.id}</div>
        <div>{user.userName}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
    </div>
  )
}

export default UserCard