import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Experience from './components/Experience'

function App() {
  return (
    <Canvas shadows>
      {import.meta.env.DEV && <Perf position="top-left" showGraph={false} />}
      <color attach="background" args={['#ececec']} />
      <Experience />
    </Canvas>
  )
}

export default App
