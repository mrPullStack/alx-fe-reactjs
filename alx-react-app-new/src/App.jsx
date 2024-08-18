import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import './App.css'
import React from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <Footer />
          <Counter />
      </div>
      
    </>
  )
}

export default App
