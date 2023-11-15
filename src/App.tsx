import React from 'react'
import { useAuthStateChanged } from './hooks/useAuthStateChanged'
import { LoadingScreen } from './components/LoadingScreen'

const App = () => {
  const { user, loading } = useAuthStateChanged()

  if (loading) return <LoadingScreen />

  return (
    <div className='App'>
      <div className='div'>Welcome to the app component</div>
      <div>{user ? 'You are Logged In' : 'You are Logged Out'}</div>
    </div>
  )
}

export default App
