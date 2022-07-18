
import { Suspense } from 'react'

import {Model, Loader} from './components'
import './styles/index.css'


export default function App() {
  return (
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
      <Model rotation={[0, 0, 0]} scale={1.6} position={[0,-0,0]} />
      </Suspense>
  )
}