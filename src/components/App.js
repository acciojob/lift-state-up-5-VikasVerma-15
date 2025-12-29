
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};
