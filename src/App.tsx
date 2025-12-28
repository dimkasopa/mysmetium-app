import { useState } from 'react';
import './App.css';
import DocumentSelection from './DocumentSelection';

const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);

  const handleLogin = (method: string) => {
    if (method === 'telegram') {
      setUserId('telegram-user-id');
    } else {
      setUserId('guest-id');
    }
  };

  return (
    <div className="app-container">
      {!userId ? (
        <div className="auth-screen">
          <h1>Добро пожаловать в Smetium</h1>
          <p>Создавайте юридически корректные документы за считанные минуты.</p>
          <button className="auth-button" onClick={() => handleLogin('telegram')}>
            Войти через Telegram
          </button>
          <button className="auth-button" onClick={() => handleLogin('guest')}>
            Войти как Гость
          </button>
        </div>
      ) : (
        <DocumentSelection />
      )}
    </div>
  );
};

export default App;
