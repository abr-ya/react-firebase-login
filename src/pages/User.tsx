import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container from "./elements/Container";
import { addLinkRecord, timestamp } from "services/fire";

const User = (): JSX.Element => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("logout handler");
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const testSaveHandler = () => {
    const createTestData = () => ({
      link: "123",
      title: "456",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad rem? Explicabo tempore atque quae. Quia, error doloribus? Beatae, saepe!",
      createdAt: timestamp(),
    });

    addLinkRecord({
      data: createTestData(),
      cb: () => {
        console.log("Link saved!");
      },
    });
  };

  return (
    <Container header="User">
      <>
        <p>
          Это закрытая страница - её видно только авторизованным пользователям!
        </p>
        <p>User Email: {user && user.email}</p>

        <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
        </button>

        <button onClick={testSaveHandler} className="border px-6 py-2 m-2">
          Test
        </button>
      </>
    </Container>
  );
};

export default User;
