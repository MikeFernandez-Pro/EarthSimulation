const Lights = (props) => {

    return (
        <directionalLight
            color={"#FFFFFF"}
            intensity={9}
            position={[10, 20, 10]}
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-camera-near={0.5}
            shadow-camera-far={100}
            shadow-camera-top={(10)}
            shadow-camera-right={10}
            shadow-camera-bottom={-10}
            shadow-camera-left={-10}
        />
    );
};

export default Lights;