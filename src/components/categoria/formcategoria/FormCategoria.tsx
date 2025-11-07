import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { Car } from "lucide-react";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
    }
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/atualizar`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } catch (error) {
        alert(`Erro ao atualizar categoria: ${error}`);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria criada com sucesso!");
      } catch (error) {
        alert(`Erro ao criar categoria: ${error}`);
      }
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[var(--lightgray)] h-screen py-10 px-5'>
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className='flex flex-col gap-5' onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className='font-medium text-gray-700'>
          <Car className='inline-block w-4 h-4 mr-1 text-(--orange)'/>
          Nome da Categoria
          </label>
          <input
            type="text"
            placeholder="Qual o nome da categoria?"
            name="tipo"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}
export default FormCategoria;
