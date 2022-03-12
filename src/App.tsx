import React, {useState,useCallback} from 'react'
import useKeyListener from './hooks/useKeyListener'

import './App.css';

const RIGHT_ARROW = 'ArrowRight'
const LEFT_ARROW = 'ArrowLeft'
const ESCAPE = 'Escape'

function App() {

  const [angle, setAngle]=useState(0)
  const [lastKey, setLastKey]=useState('')

  console.log(angle);
  
  const onKeyDown = useCallback(
    (e:React.KeyboardEvent)=>{

      if(e.code === LEFT_ARROW) {
        setAngle(prev => Math.max(-360, prev-10))
        setLastKey(LEFT_ARROW)
      
      } else if(e.code===RIGHT_ARROW) {
        setAngle(prev => Math.min(360, prev+10))
        setLastKey(RIGHT_ARROW)

      } else if(e.code===ESCAPE) {
        setAngle(0)
        setLastKey(ESCAPE)
      }
  }, [])

  useKeyListener(onKeyDown)


  return (
    <div className="App">
       <p>Angle: {angle}</p>
      <p>Last Key: {lastKey}</p>
      <header className="App-header">
      <svg
        width="400px"
        height="400px"
        fill="none"
        strokeWidth="10"
        stroke="black"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <polyline points="100,200 200,0 300,200" />
        <polyline points="200,0 200,400" />
      </svg>
      </header>
     
    </div>
  );
}

export default App;
