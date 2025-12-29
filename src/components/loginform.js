import React from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" />
      </div>

      <div>
        <label>Password: </label>
        <input type="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

