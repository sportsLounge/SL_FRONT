import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { usePlayerControls } from './usePlayerControls';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const MOVE_SPEED = 5;
const SPRINT_MULTIPLIER = 1.5;

export function Player() {
  const playerRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const { forward, backward, left, right, sprint, shoot } = usePlayerControls();
  
  // 이동 방향 벡터
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  
  useFrame((_state) => {
    if (!playerRef.current) return;

    const velocity = playerRef.current.linvel();
    
    // 이동 방향 계산
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    
    direction.subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED * (sprint ? SPRINT_MULTIPLIER : 1));
      
    // 물리 엔진에 속도 적용
    playerRef.current.wakeUp();
    playerRef.current.setLinvel({ 
      x: direction.x, 
      y: velocity.y, 
      z: direction.z 
    });
    
    // 모델이 이동 방향을 바라보도록 회전
    if (direction.length() > 0) {
      const angle = Math.atan2(direction.x, direction.z);
      modelRef.current.rotation.y = angle;
    }
    
    // 공 차기 동작 (슛)
    if (shoot) {
      // 여기에 공 차기 로직 추가
      console.log('슛!');
    }
  });

  return (
    <RigidBody 
      ref={playerRef}
      position={[0, 1, 0]} 
      colliders="cuboid"
      mass={1}
      friction={0.1}
    >
      <group ref={modelRef}>
        {/* 나중에 실제 선수 모델로 교체 */}
        <mesh castShadow>
          <capsuleGeometry args={[0.5, 1, 4, 8]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    </RigidBody>
  );
}