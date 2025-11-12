import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './assets/styles/background.css'

export default function App() {
  return (
    <>
      {/* 🌌 Fullscreen Galaxy Background */}
      <Header />


      {/* 🌙 Foreground content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <img
          src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
          alt="Ritumoni Sarma"
          className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg mb-6 object-cover"
        />

        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-blue-400">Ritumoni Sarma</span>
        </h1>
        <Hero />
      </div>
    </>

  );
}
