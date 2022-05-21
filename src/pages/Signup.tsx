import MailPassForm from "components/MailPassForm";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = (): JSX.Element => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const formHandler = async (email: string, pass: string) => {
    try {
      await createUser({ email, pass });
      navigate("/user");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="py-2">
          Already have an account yet?{" "}
          <Link to="/" className="underline">
            Sign in.
          </Link>
        </p>
      </div>
      <MailPassForm formHandler={formHandler} buttonTitle="Sign Up" />
    </div>
  );
};

export default Signup;
