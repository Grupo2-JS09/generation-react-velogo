import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { Car } from "lucide-react";
import { ToastAlerta } from "../../utils/ToastAlerta";

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

      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error: any) {
      ToastAlerta("Erro ao deletar a categoria.", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className='flex h-screen justify-center items-center min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white'>
      <div className='flex flex-col w-1/3 h-1/4 justify-center align-center items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300'>
        <div className='flex items-center gap-2 mb-3'>
          <Car className='text-orange-400 w-6 h-6' />
          <h2 className='text-xl font-semibold text-center text-orange-400'>
            {categoria.tipo}
          </h2>
        </div>
        <div className='flex gap-6 justify-center align-center h-fit text-center'>
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 text-center bg-[var(--darkblue)] hover:bg-blue-900 text-white rounded-xl font-semibold transition-all duration-300 '
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 bg-[var(--orange)] hover:bg-orange-900 text-white rounded-xl font-semibold transition-all duration-300'
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
