/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { Link } from "react-router-dom";

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
    <>
      <div className='bg-[var(--lightgray)] h-screen py-5'>
        {isLoading && <SyncLoader color='#74b9ff' size={32} />}
        <div className='flex justify-center w-full my-4'>
          <div className='container flex flex-col mx-2'>
            {!isLoading && categorias.length === 0 && (
              <span className='text-3xl text-center my-8'>
                Nenhuma Categoria foi encontrada!
              </span>
            )}
            
            <div className='flex justify-end my-4'>
              <Link to='/cadastrarcategoria'>
                <button className='px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm text-white'>
                  Cadastrar nova categoria
                </button>
              </Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategorias;
