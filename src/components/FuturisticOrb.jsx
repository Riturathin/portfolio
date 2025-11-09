import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Sparkles } from '@react-three/drei';
import { Github, Mail, ExternalLink } from 'lucide-react'

export default function FuturisticOrb() {
    // simple 3D object (icosahedron + emissive rings)
    return (
        <group>
            <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
                <icosahedronGeometry args={[1.4, 2]} />
                <meshStandardMaterial metalness={0.9} roughness={0.1} color={'#0ff5a0'} emissive={'#ff2d95'} emissiveIntensity={0.08} />
            </mesh>


            <mesh scale={[1.9, 1.9, 1.9]}>
                <torusGeometry args={[2.4, 0.02, 16, 100]} />
                <meshBasicMaterial toneMapped={false} color={'#00F5A0'} transparent opacity={0.15} />
            </mesh>


            <Sparkles size={6} scale={[3, 3, 3]} />
        </group>
    )
}