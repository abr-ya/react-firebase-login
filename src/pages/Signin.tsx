import { useEffect } from "react";

const Signin = (): JSX.Element => {
  useEffect(() => {
    console.log("Signin!");
  }, []);

  return (
    <div>
      <h1 className="p-5 py-2 text-2xl font-bold text-green-600 bg-yellow-300">
        Sign in to your account
      </h1>
    </div>
  );
};

export default Signin;
