export default function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="bg-[url('https://media.discordapp.net/attachments/1403376913224826951/1435967826891640923/image.png?ex=690de4c0&is=690c9340&hm=c7109397397ddf405b667fd01c2cc8e9b3fbfab13f71fbf8a0ed252a0a7c924e&=&format=webp&quality=lossless')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-3">
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarsenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarsenha"
              name="confirmarsenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div>
            <button
              type="reset"
              className="rounded text-white bg-red-400
            hover:bg-red-900 w-1/2 py-2 flex justify-center"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white bg-indigo-400
            hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
