import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
function App() {
  // console.log(THREE.MathUtils.degToRad(125));
  return (
    <Canvas
      camera={{
        position: [3, 3, 3],
      }}
    >
      <OrbitControls />
      <mesh scale-z={4} rotation-y={125 * (Math.PI / 180)}>
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshBasicMaterial color={0x00ff00} /> */}
        <meshStandardMaterial color="green" />
        {/* <meshNormalMaterial /> */}
      </mesh>

      <mesh position-x={4} position-z={-1} scale-z={4} rotation-y={THREE.MathUtils.degToRad(125)}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" side={THREE.DoubleSide} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    </Canvas>
  );
}

export default App;
