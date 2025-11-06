import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServico from "../cardservico/CardServico";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

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
      {isLoading && (
        <div className='flex justify-center w-full my-8'>
          <SyncLoader color='#0C2B4E' size={32} />
        </div>
      )}

      <div className='flex justify-center w-full my-4'>
        <div className='container flex flex-col mx-2'>
          {!isLoading && servicos.length === 0 && (
            <span className='text-3xl text-center my-8'>
              Nenhum Serviço foi encontrado!
            </span>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicos.map((servico) => (
              <CardServico key={servico.id} servico={servico} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaServicos;
