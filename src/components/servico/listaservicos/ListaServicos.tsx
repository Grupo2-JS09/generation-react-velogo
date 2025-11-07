import { useEffect, useState } from "react";
<<<<<<< Updated upstream
=======
import { Link } from "react-router-dom";
>>>>>>> Stashed changes
import { SyncLoader } from "react-spinners";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServico from "../cardservico/CardServico";

function ListaServicos() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    buscarServicos();
  }, []);

  async function buscarServicos() {
    try {
      setIsLoading(true);

      await buscar("/servicos", setServicos);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
<<<<<<< Updated upstream
    <>
      <div className="min-h-screen bg-linear-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="h-screen py-5">
          {isLoading && (
            <div className="flex justify-center w-full my-8">
              <SyncLoader color="#74b9ff" size={32} />
=======
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
      <div className="flex flex-col items-center min-h-screen py-10 px-6">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">
          Serviços
        </h1>

        {isLoading && <SyncLoader color="#74b9ff" size={32} />}

        {!isLoading && servicos.length === 0 && (
          <span className="text-2xl text-center my-8">
            Nenhum Serviço foi encontrado!
          </span>
        )}

        <div className="flex justify-end w-full max-w-6xl mb-10">
          <Link to="/cadastrarservico">
            <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm text-white shadow-md">
              Solicitar novo serviço
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="flex flex-col items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300"
            >
              <CardServico key={servico.id} servico={servico} />
>>>>>>> Stashed changes
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaServicos;
