import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-blue-400">Ritumoni Sarma</span>
        </h1>
        <Hero />
        </div>
    </div>
    </>
  );
}
