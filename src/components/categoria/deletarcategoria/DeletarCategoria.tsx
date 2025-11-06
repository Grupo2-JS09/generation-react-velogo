import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      console.error("Erro ao buscar categoria:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      alert("Categoria apagada com sucesso");
    } catch (error: any) {
      alert("Erro ao deletar a categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

      <p className='text-center font-semibold mb-4'>
        Voce tem certeza que deseja deletar esta categoria?
      </p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
          Categoria
        </header>

        <div className='p-4'>
          <p className='text-xl h-full'>{categoria.tipo}</p>
        </div>

        <div className='flex'>
          <button
            className='w-full text-slate-100 bg-indigo-400
                        hover:bg-indigo-600 flex items-center justify-center'
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
            onClick={retornar}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
