import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 text-white flex justify-center items-center">
        <form className="flex justify-center items-center flex-col gap-4">
          <h2 className="text-4xl font-bold text-white">Entrar</h2>
          <div className="flex flex-col w-full">
            <label className="text-orange-500 mb-1" htmlFor="usuario">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Nome"
              className="border-2 border-slate-400 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-orange-500 mb-1" htmlFor="senha">
              Senha
            </label>
            <input
              type="text"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-400 rounded p-2"
            />
          </div>
          <div className="flex gap-10">
            <button
              type="reset"
              className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold items-center"
              onClick={() => navigate("/")}
            >
              Logar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
