import './App.scss'
import { ArrowIcon } from './components/arrow-icon'
import { Logo } from './components/logo'

function App() {
  return (
    <main>
      <header className='header-contaier'>
        <Logo />
        <nav className='menu-options'>
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className='btn-face-white'>
            Contact us <ArrowIcon />
          </div>
          <div className='btn-face-purple'>
            Contact us <ArrowIcon />
          </div>
        </button>
      </header>
    </main>
  )
}

export default App
