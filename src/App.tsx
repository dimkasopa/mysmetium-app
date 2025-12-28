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
    <div className="app">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-mark">S</span>
          <div>
            <p className="brand-name">Smetium</p>
            <p className="brand-tagline">Сметы и документы для частных мастеров</p>
          </div>
        </div>
        <nav className="top-actions">
          <button className="primary-button">Поддержка</button>
        </nav>
      </header>

      <main className="content">
        {!userId ? (
          <section className="auth-card">
            <div className="auth-copy">
              <p className="pill">3 дня PRO бесплатно</p>
              <h1>Сметы и документы для мастеров</h1>
              <p className="muted">
                Заходите через Telegram — получите доступ к PRO на 3 дня. Гость видит только
                смету с базовым PDF.
              </p>
              <div className="auth-actions">
                <button className="primary-button" onClick={() => handleLogin('telegram')}>
                  Войти через Telegram
                </button>
                <button className="secondary-button" onClick={() => handleLogin('guest')}>
                  Попробовать демо
                </button>
              </div>
            </div>
            <div className="auth-highlights">
              <div className="highlight-card">
                <p className="highlight-title">PRO: все документы</p>
                <p className="muted">Смета, договор, акт, расписка и красивый PDF.</p>
              </div>
              <div className="highlight-card">
                <p className="highlight-title">Гостевой режим</p>
                <p className="muted">Доступна только смета и упрощённый PDF.</p>
              </div>
              <div className="highlight-card">
                <p className="highlight-title">Профессии</p>
                <p className="muted">Электрики, сантехники, маляры, прорабы.</p>
              </div>
            </div>
          </section>
        ) : (
          <DocumentSelection />
        )}
      </main>
    </div>
  );
};

export default App;
