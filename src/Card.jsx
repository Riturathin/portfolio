import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Sparkles } from '@react-three/drei';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/Contact-me';
import FuturisticOrb from './components/FuturisticOrb';


export default function App() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
            {/* Left: content */}
            <main className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-center gap-8 text-center">
                <Header />
                <Hero />
                <Skills />
                <Projects />
                <ContactMe />
                <Footer />
            </main>


            {/* Right: 3D visual */}
            <aside className="w-full lg:w-1/2 h-[50vh] lg:h-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[92%] h-[92%] card flex items-center justify-center">
                        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                            <ambientLight intensity={0.6} />
                            <directionalLight position={[5, 5, 5]} intensity={0.8} />
                            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
                                <FuturisticOrb />
                            </Float>
                            <OrbitControls enablePan={false} enableZoom={false} />
                        </Canvas>
                    </div>
                </div>
            </aside>
        </div>
    )
}