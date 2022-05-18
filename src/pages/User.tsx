import { useEffect } from "react";

const User = (): JSX.Element => {
  useEffect(() => {
    console.log("User!");
  }, []);

  return (
    <div>
      <h1>User</h1>
      <p>
        Это закрытая страница - её видно только авторизованным пользователям!
      </p>
    </div>
  );
};

export default User;
