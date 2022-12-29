// State
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// import from the Modal.tsx component later
const LoginModal = () => {
  //  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      Log in here
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        type='text'
        placeholder='Enter username'
        // onChange={(e) => {
        //   setUser({ username: e.target.value });
        // }}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='text'
        placeholder='Enter password'
        // onChange={(e) => {
        //   setUser({ password: e.target.value });
        // }}
      />
      <button>Sign In</button>
    </div>
  );
};

export default LoginModal;
