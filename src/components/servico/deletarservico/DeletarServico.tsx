import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { buscar, deletar } from "../../../services/Service";
import type Servico from "../../../models/Servico";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarServico() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [servico, setServico] = useState<Servico>({} as Servico);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico);
      console.log(buscar);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarServico() {
    setIsLoading(true);

    try {
      await deletar(`/servicos/${id}`);
      alert("Serviço apagado com sucesso");
    } catch (error: any) {
      console.log(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/servicos");
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Serviço</h1>

      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar o serviço a seguir?
      </p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
          Serviço
        </header>
        <div className='p-4'>
          <p className='text-xl h-full'>{servico.destino}</p>
          <p>{servico.calcularViagem}</p>
          <p>{servico.calcularTempo}</p>
        </div>
        <div className='flex'>
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
            onClick={retornar}
          >
            Não
          </button>
          <button
            className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
            onClick={deletarServico}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarServico;
