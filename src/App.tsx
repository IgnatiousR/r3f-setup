import { OrbitControls, Stats, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Leva, LevaPanel, useControls } from "leva";

const Box = () => {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "red");

  const { position } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshStandardMaterial color={"white"} transparent opacity={0} />
    </mesh>
  );
};
function App() {
  return (
    <>
      {/* <Leva hidden /> */}
      <Stats />
      <Canvas
        camera={{
          position: [3, 3, 3],
        }}
      >
        <OrbitControls />
        {/* <mesh scale-z={4} rotation-y={125 * (Math.PI / 180)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x00ff00} />
        <meshStandardMaterial color="green" />
        <meshNormalMaterial />
      </mesh> */}

        {/* <mesh position-x={4} position-z={-1} scale-z={4} rotation-y={THREE.MathUtils.degToRad(125)}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" side={THREE.DoubleSide} />
      </mesh> */}
        <Box />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 3]} intensity={1} />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
