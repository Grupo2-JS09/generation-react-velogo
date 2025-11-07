import { Coins, Gauge, MapPin, Navigation, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type Servico from "../../../models/Servico";
import { CalcularDestino, CalcularTempo } from "../../../services/Service";

interface CardServicoProps {
  servico: Servico;
}

function CardServico({ servico }: CardServicoProps) {
  const [valorCorrida, setValorCorrida] = useState<number | null>(null);

  const [tempoTotal, setTempoTotal] = useState<number | null>(null);

  const { id } = useParams<{ id: string }>();

  async function dadosCorrida() {
    try {
      await CalcularDestino(`/servicos/viagem/${servico.id}`, setValorCorrida);
      await CalcularTempo(
        `/servicos/viagem/tempo/${servico.id}`,
        setTempoTotal
      );
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    dadosCorrida();
  }, [servico.id]);

  const formatNumber = (value: unknown, digits = 2) => {
    const n = Number(value ?? NaN);
    if (Number.isNaN(n)) return null;
    return n.toFixed(digits);
  };

  const distanciaText = (() => {
    const v = Number(servico.distancia ?? NaN);
    return Number.isNaN(v) ? "-" : `${v} km`;
  })();

  const velocidadeText = (() => {
    const v = Number(servico.velocidade_media ?? NaN);
    return Number.isNaN(v) ? "-" : `${v} km/h`;
  })();

  const precoKmText = (() => {
    const s = formatNumber(servico.preco_km, 2);
    return s === null ? "-" : s;
  })();

  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100 w-full max-w-sm p-5 flex flex-col justify-around gap-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-[var(--darkblue)] uppercase tracking-wide">
          {servico.categoria?.tipo || "Serviço"}
        </span>
      </div>

      <div className="flex items-center gap-2 text-gray-800">
        <MapPin className="w-5 h-5 text-[var(--orange)]" />
        <p className="font-medium text-white">{servico.destino}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 text-sm text-white">
        <div className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-[var(--orange)]" />
          <p>
            <span className="font-semibold">Distância:</span> {distanciaText}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-[var(--orange)]" />
          <p>
            <span className="font-semibold">Velocidade:</span> {velocidadeText}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4 text-[var(--orange)]" />
          <p>
            <span className="font-semibold">Preço/km:</span> R${precoKmText}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-[var(--orange)]" />
          <p>
            <span className="font-semibold">Usuário:</span>{" "}
            {servico.usuario?.nome || "Indefinido"}
          </p>
        </div>
      </div>

      <div className="mt-1 text-sm">
        <p className="text-white">
          <span className="font-semibold text-[var(--orange)]">
            Tempo estimado:
          </span>{" "}
          {tempoTotal ? `${tempoTotal.toFixed(1)} min` : "Calculando..."}
        </p>
        <p className="text-white">
          <span className="font-semibold text-[var(--orange)]">
            Valor estimado:
          </span>{" "}
          {valorCorrida ? `R$ ${valorCorrida.toFixed(2)}` : "Calculando..."}
        </p>
      </div>

      <div className="flex gap-6 justify-center align-center h-fit text-center">
        <Link
          to={`/editarservico/${servico.id}`}
          className="w-auto p-5 mt-4 align-middle text-center  bg-[var(--darkblue)] hover:bg-blue-900 text-white rounded-xl font-semibold transition-all duration-300 w-1/3"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarservico/${servico.id}`}
          className="w-auto mt-4 p-5 bg-red-600 hover:bg-red-900 text-white rounded-xl font-semibold transition-all duration-300 w-1/3 "
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServico;
