import './App.css';
import Button from './components/Button';
import Counter from './components/Counter'
import logo from './assets/freecodecamp-logo.png'

function App() {

  const AddCounter = () => {
    console.log('is clicking')
  }

  const restartCounter = () => {
    console.log('restart')
  }

  return (
    <main className='App'>
      <figure className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={logo} alt='freecodecamp logo' />
      </figure>
      <section className='main-container'>
        <Counter num='5' />
        <Button text='Click' isClicking={true} click={AddCounter} />
        <Button text='Restart' isClicking={false} click={restartCounter} />
      </section>
    </main>
  );
}

export default App;
