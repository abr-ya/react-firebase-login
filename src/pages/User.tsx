import { UserAuth } from '../context/AuthContext';

const User = (): JSX.Element => {
  const { user } = UserAuth();

  const handleLogout = () => {
    console.log('logout handler');
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1>User</h1>
      <p>
        Это закрытая страница - её видно только авторизованным пользователям!
      </p>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
};

export default User;
