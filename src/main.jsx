import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from "@react-three/fiber";
import { Stats } from '@react-three/drei'


import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas
    style={ { width: '100vw', height: '100vh', backgroundColor: 'blue' } }
    dpr={[1,7]}
    camera={{ position: [2, 0, 5]}}>
    <App />
    <Stats />
  </Canvas>
)
