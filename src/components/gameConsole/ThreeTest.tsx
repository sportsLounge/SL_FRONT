import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, RigidBody } from '@react-three/rapier';
import TestBall from './TestBall';


export default function ThreeTest() {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
      {/* 조명 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
      {/* 하늘과 같은 환경 */}
      <Sky sunPosition={[100, 10, 100]} />
      
       {/* 물리 엔진 추가 */}
       <Physics debug={false}>
        {/* 지면 */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.1, 0]}>
            <planeGeometry args={[200, 300]} />
            <meshStandardMaterial color="#23a32d" />
          </mesh>
        </RigidBody>
        
        {/* 물리 효과가 적용된 축구공 */}
        <RigidBody colliders="ball" restitution={0.8}>
            <TestBall />
        </RigidBody>
        
        {/* 경기장 */}
        <RigidBody type="fixed" colliders="trimesh">
          {/* <Stadium /> */}
        </RigidBody>
      </Physics>       

      <OrbitControls />
    </Canvas>
  )
}
