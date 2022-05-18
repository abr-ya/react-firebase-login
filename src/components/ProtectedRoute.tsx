import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface IProtectedRoute {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const { user } = { user: "tempUser" };
  const navigate = useNavigate();
  if (!user) {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }

  return user ? children : <div>необходимо авторизоваться</div>;
};

export default ProtectedRoute;
