import './App.css';
import Button from './components/Button';
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
        <Button text='Click' isClicking={true} click={AddCounter} />
        <Button text='Restart' isClicking={false} click={restartCounter} />
      </section>
    </main>
  );
}

export default App;
