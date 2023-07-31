import { Center, Environment } from "@react-three/drei";
import Lights from "./Lights";
import { useLoader } from "@react-three/fiber";
import { Color, TextureLoader } from "three";
import { useControls } from "leva";

const Experience = (props) => {

    const textures = {
        bump: useLoader(TextureLoader, "/textures/earthbump.jpg"),
        map: useLoader(TextureLoader, "/textures/earthmap.jpg"),
        spec: useLoader(TextureLoader, "/textures/earthspec.jpg"),
    }
    
    const {color, envMapIntensity } = useControls({
        color: "#ff8a00",
        envMapIntensity: { value: 1.5, min: 0, max: 12 }
    })
    
    return (
        <>

        <Environment
            files={"environmentMaps/envMap_2k.hdr"}
        />
        
        <Center>
        <Lights />
        <mesh rotation-y={Math.PI * 1.25}>
            <sphereGeometry args={[10, 70, 70]} />
            <meshPhysicalMaterial
            receiveShadow
            map={textures.map}
            roughnessMap={textures.spec}
            bumpMap={textures.bump}
            bumpScale={0.05}
            envMapIntensity={envMapIntensity}
            sheen={1}
            sheenRoughness={0.75}
            sheenColor={new Color(color)}
            clearcoat={0.5}
            />
        </mesh>
        </Center>
        </>
    );
};

export default Experience;