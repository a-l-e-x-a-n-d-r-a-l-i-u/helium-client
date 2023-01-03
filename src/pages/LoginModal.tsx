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

  const showUsername = showProfile && user;
  return (
    <div>
      Log in here
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        type='text'
        placeholder='Enter username'
        onChange={(usernameChangeEvent) => {
          setUser({ username: usernameChangeEvent.target.value });
        }}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='text'
        placeholder='Enter password'
        onChange={(passwordChangeEvent) => {
          setUser({ password: passwordChangeEvent.target.value });
        }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Sign In
      </button>
      {showUsername && <h1>{user.username}</h1>}
    </div>
  );
};

export default LoginModal;
