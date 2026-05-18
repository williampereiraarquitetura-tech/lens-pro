import { useState } from 'react';
import Cadastro from './pages/Cadastro';

export default function App() {
  const[activeTab, setActiveTab] = useState('cadastro');

  return (
    <div className="flex h-screen bg-[#F5F5F3] font-sans text-[#111111]">
      <aside className="w-52 bg-dark text-white flex flex-col p-4">
        <h1 className="text-xl font-bold tracking-widest text-primary mb-8">LENS</h1>
        <nav className="flex flex-col gap-2">
          {['mapa', 'dashboard', 'cadastro'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 rounded-lg text-left capitalize ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-[#1A1A1A] text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-[58px] bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
          <h2 className="font-bold text-lg capitalize">{activeTab}</h2>
        </header>

        <section className="flex-1 p-6 overflow-auto">
          {activeTab === 'cadastro' ? <Cadastro /> : <div>Conteúdo de {activeTab}</div>}
        </section>
      </main>
    </div>
  );
}