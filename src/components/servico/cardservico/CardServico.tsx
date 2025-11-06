import type Servico from "../../../models/Servico";
// import { Link } from "react-router-dom";

interface CardServicoProps {
  servico: Servico;
}

function CardServico({servico}: CardServicoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>

        {/* Foto e nome do usuário */}
        {/* <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            src={servico.usuario?.foto || "https://cdn-icons-png.flaticon.com/128/15678/15678795.png"}
            className="h-12 rounded-full"
            alt={servico.usuario?.nome}
          />

          <h3 className="text-lg font-bold text-center uppercase">
            {servico.usuario?.nome || "Anônimo"}
          </h3>
        </div> */}

        <div className="p-4">
          {/* <h4 className="text-lg font-semibold uppercase">{servico.titulo}</h4> */}
          <h4 className="text-lg font-semibold uppercase">Serviços</h4>

          <p>{servico.modalidade}</p>
          {/* <p>Categoria: {servico.categoria?.nome_categoria}</p> */}
          <p>Categoria: nome</p>
          <p>
            {/* Data:
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(servico.dt_matricula))} */}
            Data: data
          </p>
        </div>
      </div>

      <div className="flex">
        {/* <Link
          to={`/editarservico/${servico.id}`}
          className="w-full text-white bg-indigo-400 
            hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarservico/${servico.id}`}
          className="text-white bg-red-400 
            hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link> */}

        <button className="w-full text-slate-100 bg-[#6D94C5] hover:bg-[#234C6A] flex items-center justify-center py-2">
          Editar
        </button>

        <button className="w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center">
            Deletar
        </button>
      </div>
    </div>
  )
}

export default CardServico