import './App.css'
import FirstDiv from './components/firstDiv/FirstDiv'
import Header from './components/Header/Header'
import SecondDiv from './components/secondDiv/SecondDiv'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstDiv />
        <SecondDiv />
      </main>
    </div>
  )
}

export default App
