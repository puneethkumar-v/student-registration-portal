import { useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentInfo from './components/StudentInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Student Registration Portal</h1>
      <StudentForm />
      <StudentInfo />
    </div>
  )
}

export default App
