import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; 

export default function Cadastro() {
  const [formData, setFormData] = useState({ nome: '', empresa: '', cidade: '' });
  const [lista, setLista] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const { data } = await supabase.from('empreendimentos').select('*');
    if (data) setLista(data);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData,[e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('empreendimentos').insert([formData]);
    if (!error) {
      setFormData({ nome: '', empresa: '', cidade: '' });
      fetchData();
    } else {
      alert("Erro ao salvar: " + error.message);
    }
  };

  const handleDelete = async (id: number) => {
    await supabase.from('empreendimentos').delete().eq('id', id);
    fetchData();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 h-full">
      {/* Formulário */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-6">Novo Empreendimento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input id="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="w-full bg-gray-100 p-2 rounded text-sm" />
          <input id="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa" className="w-full bg-gray-100 p-2 rounded text-sm" />
          <input id="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" className="w-full bg-gray-100 p-2 rounded text-sm" />
          <button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded">Salvar</button>
        </form>
      </div>

      {/* Listagem */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Listagem ({lista.length})</h3>
        <div className="space-y-3">
          {lista.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg border flex justify-between">
              <div>
                <p className="font-bold">{item.nome}</p>
                <p className="text-xs text-gray-500">{item.empresa} - {item.cidade}</p>
              </div>
              <button onClick={() => handleDelete(item.id)} className="text-red-400 text-xs">Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}