import { useState } from 'react';
import Cadastro from './pages/Cadastro';
import Mapa from './pages/Mapa'; // 1. O IMPORT QUE FALTAVA

export default function App() {
  const [activeTab, setActiveTab] = useState('cadastro');

  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      {/* Background 3D */}
      {/* <DottedSurface /> */}

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-52 bg-black/80 backdrop-blur-xl text-white flex flex-col p-4 border-r border-white/10">
          <h1 className="text-xl font-bold tracking-widest text-primary mb-8">LENS</h1>
          <nav className="flex flex-col gap-2">
            {['mapa', 'dashboard', 'cadastro'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 rounded-lg text-left capitalize transition-colors ${
                  activeTab === tab ? 'bg-primary text-white font-bold' : 'hover:bg-[#1A1A1A] text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 flex flex-col p-8 overflow-hidden">
          <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-6 h-full overflow-hidden">
            
            {/* LÓGICA DE TROCA DE ABAS CORRIGIDA */}
            {activeTab === 'cadastro' && <Cadastro />}
            {activeTab === 'mapa' && <Mapa />}
            
            {/* Se não for nem mapa nem cadastro, mostra o aviso */}
            {activeTab === 'dashboard' && (
              <div className="flex items-center justify-center h-full text-gray-500">
                Dashboard em construção...
              </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
}