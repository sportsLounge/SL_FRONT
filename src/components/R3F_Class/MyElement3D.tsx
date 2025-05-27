import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function MyElement3D() {
  const refMesh = useRef<Mesh>(null);

  /**
   * @description 인수로 받은 callback function 을 매 프레임 렌더링 되기 직전에 호출하는 r3f 제공 hooks
   * @param {} delta 이전 프레임과 현재 프레임 사이에 경과 시간 (밀리초)
   */
  useFrame((_state, delta) => {
    refMesh.current.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} rotation={[0, (45 * Math.PI) / 180, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"#e67e22"} />
      </mesh>
    </>
  );
}
