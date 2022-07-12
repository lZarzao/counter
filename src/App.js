import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './assets/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  const [numCounter, setNumCounter] = useState(0);

  const AddCounter = () => {
    setNumCounter(numCounter + 1);
  };

  const restartCounter = () => {
    setNumCounter(0);
  };

  return (
    <main className='App'>
      <figure className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={logo} alt='freecodecamp logo' />
      </figure>
      <section className='main-container'>
        <Counter num={numCounter} />
        <Button text='Click' isClicking={true} click={AddCounter} />
        <Button text='Restart' isClicking={false} click={restartCounter} />
      </section>
    </main>
  );
}

export default App;
