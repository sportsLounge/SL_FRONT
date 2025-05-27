import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";

export default function CanvasClass() {
  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </>
  );
}
