/* eslint-disable @typescript-eslint/no-explicit-any */
import { Car } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
      console.log(categorias);
    } catch (error: any) {
      console.error("Erro ao buscar categorias", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
      <div className="flex flex-col items-center min-h-screen py-10 px-6">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">
          Categorias
        </h1>

        {isLoading && <SyncLoader color="#74b9ff" size={32} />}

        {!isLoading && categorias.length === 0 && (
          <span className="text-2xl text-center my-8">
            Nenhuma Categoria foi encontrada!
          </span>
        )}

        <div className="flex justify-end w-full max-w-6xl mb-10">
          <Link to="/cadastrarcategoria">
            <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm text-white shadow-md">
              Cadastrar nova categoria
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="flex flex-col items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <Car className="text-orange-400 w-6 h-6" />
                <h2 className="text-xl font-semibold text-center text-orange-400">
                  {categoria.tipo}
                </h2>
              </div>

              <div className="flex space-x-4 mt-2">
                <Link
                  to={`/editarcategoria/${categoria.id}`}
                  className="px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition"
                >
                  Editar
                </Link>
                <Link
                  to={`/deletarcategoria/${categoria.id}`}
                  className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
                >
                  Deletar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListaCategorias;
