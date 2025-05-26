export default function TestBall() {
  return (
    <>
        <mesh>
            <sphereGeometry args={[1,32,32]} />
            <meshStandardMaterial color={"white"} />
        </mesh>
    </>
  )
}
