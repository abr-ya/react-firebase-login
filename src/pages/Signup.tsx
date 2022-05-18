import { useEffect } from "react";

const Signup = (): JSX.Element => {
  useEffect(() => {
    console.log("Signup!");
  }, []);

  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
};

export default Signup;
