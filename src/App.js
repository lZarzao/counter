import './App.css';
import logo from './assets/freecodecamp-logo.png'

function App() {
  return (
    <main className='App'>
      <figure className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={logo}
          alt='freecodecamp logo'
        />
      </figure>
    </main>
  );
}

export default App;
