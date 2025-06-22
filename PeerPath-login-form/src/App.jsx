import './App.css'
import LoginForm from './LoginForm.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import { useState } from "react";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <LoginForm onRegisterClick={() => setShowLogin(false)} />
      ) : (
        <RegistrationForm onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
}
