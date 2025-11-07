import { Car } from "lucide-react";
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
<<<<<<< Updated upstream
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
        Categoria
      </header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.tipo}</p>

      <div className='flex'>
        <Link
          to=''
          className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800'
=======
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100 w-full max-w-sm p-5 flex flex-col justify-around gap-3">
      <div className="flex justify-between items-center ">
        <span className="text-md font-semibold  uppercase">Categoria</span>
      </div>

      <div className="flex items-center gap-2">
        <Car className="text-blue-500 w-5 h-5 " />
        <p className="font-medium">{categoria.tipo}</p>
      </div>

      <div className="flex gap-6 justify-center align-center h-fit text-center">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="mt-4 bg-[var(--darkblue)] hover:bg-blue-900 text-white py-2 rounded-xl font-semibold transition-all duration-300 w-1/3"
>>>>>>> Stashed changes
        >
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'
          >
            <button>Editar</button>
          </Link>

<<<<<<< Updated upstream
          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'
          >
            <button>Deletar</button>
          </Link>
=======
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="mt-4 bg-red-600 hover:bg-red-900 text-white py-2 rounded-xl font-semibold transition-all duration-300 w-1/3 "
        >
          <button>Deletar</button>
>>>>>>> Stashed changes
        </Link>
      </div>
    </div>
  );
}
export default CardCategoria;
