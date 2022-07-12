import './App.css';
import Button from './assets/components/Button';
import logo from './assets/freecodecamp-logo.png'

function App() {
  return (
    <main className='App'>
      <figure className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={logo} alt='freecodecamp logo' />
        <section className='main-container'>
          <Button 
            text='Click'
            isClicking={true}
            click={false} />
          <Button
            text='Restart'
            isClicking={false}
            click={true} />
        </section>
      </figure>
    </main>
  );
}

export default App;
