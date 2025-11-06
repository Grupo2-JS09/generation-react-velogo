import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
        <div className='container flex justify-between mx-8 text-2xl font-bold'>
          <Link to='/' className='text-2x1 font-bold'>
            Blog Pessoal
          </Link>
          <div className='flex gap-4'>
            <span className='hover:text-gray-300 cursor-pointer'>
              <Link to='/postagens' className='hover:underline'>
                Postagens
              </Link>
            </span>
            <span>
              <Link to='/categorias' className='hover:underline'>
                Temas
              </Link>
            </span>
            <span>
              <Link to='/cadastrarcategorias' className='hover:underline'>
                Cadastrar categorias
              </Link>
            </span>
            <span>
              <Link to='/perfil' className='hover:underline'>
                Perfil
              </Link>
            </span>
            <span>
              <Link to='' className='hover:underline'>
                Sair
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
