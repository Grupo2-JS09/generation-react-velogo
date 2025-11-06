import { Link } from "react-router-dom";
import { Car } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="bg-slate-900 text-white">
        <nav className='flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-sm'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center'>
              <Car className='w-6 h-6 text-white' />
            </div>
            <Link to='/home'>
              <span className='text-2xl font-bold'>VeloGo</span>
            </Link>
          </div>
          <div className='hidden md:flex gap-8 text-sm'>
            <a href='/categorias' className='hover:text-orange-400 transition'>
              Categorias
            </a>
            <a href='/servicos' className='hover:text-orange-400 transition'>
              Serviços
            </a>
            <a href='/contato' className='hover:text-orange-400 transition'>
              Contato
            </a>
          </div>
          <div className='flex gap-3'>
            <Link to='/'>
              <button className='px-6 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition text-sm'>
                Entrar
              </button>
            </Link>
            <Link to='Cadastro'>
              <button className='px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm'>
                Cadastre-se Agora
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
