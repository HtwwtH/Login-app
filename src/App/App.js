import React from 'react';
import s from './App.module.css';
import 'element-theme-default';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <p>
          Login App
          </p>
      </header>

      <LoginPage />

    </div>
  );
}

export default App;
