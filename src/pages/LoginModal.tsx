import { useState } from "react";
// import from the Modal.tsx component later

interface LoginProps {
  username?: string;
  password?: string;
  prevState?: null;
}

const LoginModal = () => {
  const [user, setUser] = useState<LoginProps | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      Log in here
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        type='text'
        placeholder='Enter username'
        onChange={(e) => {
          setUser({ username: e.target.value });
        }}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='text'
        placeholder='Enter password'
        onChange={(e) => {
          setUser({ password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}>
        Sign In
      </button>
      {showProfile && user && <h1>{user.username}</h1>}
    </div>
  );
};

export default LoginModal;
