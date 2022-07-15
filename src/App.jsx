import React, { useState } from 'react';

import './App.css';
import { UserProvider } from './context';
import DepositComponent from './deposit.component';

function App() {
  const [ balance, setBalance ] = useState(0);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const defaultState = {
    name,
    email,
    password,
    balance,
    updateBalance: (newBalance = 0) => setBalance(balance + newBalance),
    updateName: (newName = '') => setName(newName),
    updateEmail: (newEmail = '') => setEmail(newEmail),
    updatePassword: (newPassword = '') => setPassword(newPassword),
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value={defaultState}>
          <DepositComponent />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
