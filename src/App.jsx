import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("#red")


  
  return (
    <div>
      <p>
        Color
      </p>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <br />
      <br />
      <br />
      <p>The Color we pick</p>
      <div style={{height:"100px", width:"100px", backgroundColor:color}}></div>

    </div>
  )
}

export default App