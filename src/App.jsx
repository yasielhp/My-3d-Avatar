
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'

import {Model, Loader} from './components'
import './styles/index.css'


export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 150], fov: 53 }} style={{width:"100vw", height:"100vh"}} >
      <Suspense fallback={<Loader/>}>
        <Stage environment="apartment" intensity={0.6} >
          <directionalLight intensity={0.4} />
          <Model position={[0, 0.2, 0.5]}  />
        </Stage>
      </Suspense>
    </Canvas>
  )
}