import { Link } from "react-router-dom";

const Signin = (): JSX.Element => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Don&apos;t have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
