import { useState } from 'react';
import Cadastro from './pages/Cadastro';
import { DottedSurface } from './components/DottedSurface';

export default function App() {
  const[activeTab, setActiveTab] = useState('cadastro');

  return (
    // O relative aqui garante que o background 3D fique fixo no fundo
    <div className="relative min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      <DottedSurface />

      <div className="flex h-screen relative z-10">
        {/* Sidebar com Glassmorphism */}
        <aside className="w-52 bg-black/80 backdrop-blur-xl text-white flex flex-col p-4 border-r border-white/10">
          <h1 className="text-xl font-bold tracking-widest text-primary mb-8">LENS</h1>
          {/* ... nav ... */}
        </aside>

        {/* Conteúdo com efeito de vidro */}
        <main className="flex-1 flex flex-col p-8">
           <div className="bg-white/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-6 h-full">
             <Cadastro />
           </div>
        </main>
      </div>
    </div>
  );
}