import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServico from "../cardservico/CardServico";

function ListaServicos() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    buscarServicos();
  }, [servicos.length]);

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
    <>
      <div className="min-h-screen bg-linear-to-b from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="h-screen py-5">
          {isLoading && (
            <div className="flex justify-center w-full my-8">
              <SyncLoader color="#74b9ff" size={32} />
            </div>
          )}
          <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col mx-2">
              {!isLoading && servicos.length === 0 && (
                <span className="text-3xl text-center my-8">
                  Nenhum Serviço foi encontrado!
                </span>
              )}
              <div className="flex justify-end my-4">
                <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm text-white">
                  Solicitar novo serviço
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {servicos.map((servico) => (
                  <CardServico key={servico.id} servico={servico} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaServicos;
