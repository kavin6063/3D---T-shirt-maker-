import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture, Text } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        position={[0, 0, 0]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.2}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        {/* Custom text rendering */}
        {snap.customText && (
          <Text
            position={[0, -0.07, 0.16]} // Adjust to fix the text position
            rotation={[0, 0, 0]}
            fontSize={snap.fontSize || 0.04} // Dynamic font size
            color={snap.fontColor || "black"} // Dynamic font color
            maxWidth={0.8}
            anchorX="center" // Ensures text is centered horizontally
            anchorY="middle" // Keeps the text anchored vertically
          >
            {snap.customText}
          </Text>
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
