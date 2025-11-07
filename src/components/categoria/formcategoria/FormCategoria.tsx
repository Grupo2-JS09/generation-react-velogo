import { Car } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

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

    try {
      if (id !== undefined) {
        await atualizar(`/categorias/atualizar`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria criada com sucesso!");
      }
      retornar();
    } catch (error) {
      alert(`Erro ao salvar categoria: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white flex flex-col items-center py-10 px-6">
      <h1 className="flex flex-col items-center py-10 px-6">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="bg-slate-800/60 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-slate-700"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className="block mb-2 text-sm font-semibold">
            <Car className="inline-block w-5 h-5 mr-2 text-orange-400" />
            Nome da Categoria
          </label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            placeholder="Digite o nome da categoria"
            className="border border-slate-600 bg-slate-900 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={categoria.tipo}
            onChange={atualizarEstado}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition flex justify-center items-center gap-2"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={22} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>

        <button
          type="button"
          onClick={retornar}
          className="w-full py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition"
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
