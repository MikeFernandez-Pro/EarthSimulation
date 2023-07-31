import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { OrbitControls } from "@react-three/drei"
import { ACESFilmicToneMapping, LinearSRGBColorSpace, PCFSoftShadowMap } from "three"


function App() {

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: LinearSRGBColorSpace,
          "shadowMap-enabled": true,
          "shadowMap-type": PCFSoftShadowMap
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 15, 50],
          rotation: [-Math.PI / 8, 0, 0],

        }}>
        <OrbitControls dampingFactor={0.05} enableDamping />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
