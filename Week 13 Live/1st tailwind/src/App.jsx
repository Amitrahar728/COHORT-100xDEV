// App.jsx

// importing the VerifyAge component we just built
import VerifyAge from './pages/VerifyAge'

export default function App() {
  return (

    // no extra wrapper div needed here
    // VerifyAge already has min-h-screen so it fills the whole page by itself
    <VerifyAge />

  )
}