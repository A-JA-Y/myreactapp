import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("black");
  useEffect(()=>{
    switch(count){
      case 1:
        setColor("#FF0000")
        break;
      case 2:
        setColor("#00FF00")
        break;
      case 3:
        setColor("#0000FF")
        break;
      case 4:
        setColor("violet")
        break;
      case 5:
        setColor("#FF00FF")
        break;
      case 6:
        setColor("#FFFF00")
        break;
      case 7:
        setColor("#FF8000")
        break;
      case 8:
        setColor("#00FFFF")
        break;
      case 9:
        setColor("#800080")
        break;
      case 10:
        setColor("#808000")
        break;
      default:
        setColor("#000000")
        break;
    }

  },[count])

  return (
    <>
     
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width:"100vw", height:"100vh",
        backgroundColor: color}} >
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
       
        
    </>
  )
}

export default App
