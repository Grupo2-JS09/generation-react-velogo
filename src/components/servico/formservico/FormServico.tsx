/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coins, Gauge, MapPin, Navigation } from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import type Servico from "../../../models/Servico";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormServico() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [servico, setServico] = useState<Servico>({} as Servico);
  const { id } = useParams<{ id: string }>();

  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) buscarServicoPorId(id);
  }, [id]);

  useEffect(() => {
    setServico((prev) => ({ ...prev, categoria }));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria,
    });
  }

  async function gerarNovoServico(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/servicos`, servico, setServico);
        alert("Serviço atualizado com sucesso!");
      } else {
        await cadastrar(`/servicos`, servico, setServico);
        alert("Serviço cadastrado com sucesso!");
      }
      navigate("/servicos");
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const carregandoCategoria = categoria.tipo === "";

  return (
<<<<<<< Updated upstream
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-5'>
      <div className='bg-white shadow-lg rounded-2xl border border-gray-100 p-8 w-full max-w-lg'>
        <h1 className='text-3xl font-bold text-center text-blue-700 mb-8'>
          {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
        </h1>

        <form className='flex flex-col gap-5' onSubmit={gerarNovoServico}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='destino' className='font-medium text-gray-700'>
              <MapPin className='inline-block w-4 h-4 mr-1 text-blue-500' />
              Destino
            </label>
            <input
              type='text'
              name='destino'
              placeholder='Ex: Av. Paulista, 123'
              required
              className='border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={servico.destino || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='distancia' className='font-medium text-gray-700'>
                <Navigation className='inline-block w-4 h-4 mr-1 text-blue-500' />
                Distância (km)
              </label>
              <input
                type='number'
                name='distancia'
                placeholder='Ex: 12'
                required
                className='border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={servico.distancia || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='velocidade_media'
                className='font-medium text-gray-700'
              >
                <Gauge className='inline-block w-4 h-4 mr-1 text-blue-500' />
                Velocidade Média (km/h)
              </label>
              <input
                type='number'
                name='velocidade_media'
                placeholder='Ex: 60'
                required
                className='border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
                value={servico.velocidade_media || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='preco_km' className='font-medium text-gray-700'>
              <Coins className='inline-block w-4 h-4 mr-1 text-blue-500' />
              Preço por Km (R$)
            </label>
            <input
              type='number'
              name='preco_km'
              placeholder='Ex: 3.50'
              step='0.01'
              required
              className='border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={servico.preco_km}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='categoria' className='font-medium text-gray-700'>
              Categoria do Serviço
            </label>
            <select
              name='categoria'
              id='categoria'
              className='border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value='' disabled selected>
                Selecione uma categoria
              </option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.tipo}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='mt-4 bg-blue-600 hover:bg-blue-800 transition-all text-white font-semibold py-3 rounded-xl flex justify-center items-center disabled:bg-gray-300'
            disabled={carregandoCategoria || isLoading}
=======
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white flex flex-col items-center py-10 px-6">
      <h1 className="flex flex-col items-center py-10 px-6">
        {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
      </h1>

      <form
        onSubmit={gerarNovoServico}
        className="bg-slate-800/60 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-slate-700"
      >
        <div className="flex flex-col gap-2">
          <label className="block mb-2 text-sm font-semibold">
            <MapPin className="inline-block w-5 h-5 mr-2 text-orange-400" />
            Destino
          </label>
          <input
            type="text"
            name="destino"
            placeholder="Ex: Av. Paulista, 123"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.destino || ""}
            onChange={atualizarEstado}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold">
            <Navigation className="inline-block w-5 h-5 mr-2 text-orange-400" />
            Distância (km)
          </label>
          <input
            type="number"
            name="distancia"
            placeholder="Ex: 12"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.distancia || ""}
            onChange={atualizarEstado}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold">
            <Gauge className="inline-block w-5 h-5 mr-2 text-orange-400" />
            Velocidade Média (km/h)
          </label>
          <input
            type="number"
            name="velocidade_media"
            placeholder="Ex: 60"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.velocidade_media || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold">
            <Coins className="inline-block w-5 h-5 mr-2 text-orange-400" />
            Preço por Km (R$)
          </label>
          <input
            type="number"
            name="preco_km"
            placeholder="Ex: 3.50"
            step="0.01"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.preco_km || ""}
            onChange={atualizarEstado}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-semibold">
            Categoria do Serviço
          </label>
          <select
            name="categoria"
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
>>>>>>> Stashed changes
          >
            <option value="">Selecione uma Categoria</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>
                {c.tipo}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-white text-lg shadow-md"
          disabled={carregandoCategoria || isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#fff" size={24} />
          ) : id === undefined ? (
            "Cadastrar"
          ) : (
            "Atualizar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormServico;
