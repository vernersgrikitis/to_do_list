import './App.css'
import axios from 'axios'
import Button from './components/Button/Button'

function App() {

  axios.get('http://localhost:3000/tasks').then((res) => {
    console.log(res.data);
  })
  
  return (
    <div>
      <Button 
        text='Button 1'
        disabled
        onClick={() => {
          console.log("1")
        }}
      />
      
      <Button 
        text='Button 2'
        onClick={() => {
          console.log("2")
        }}
      />

      <Button 
        text='Button 3'
        onClick={() => {
          console.log("3")
        }}
      />
    </div>

  )
}

export default App
