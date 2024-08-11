import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <Footer />
      </div>
      
    </>
  )
}

export default App
