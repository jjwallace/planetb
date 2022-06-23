import React from 'react';
import Button from './components/menu/Button';
import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Banner />
      </header>
      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;