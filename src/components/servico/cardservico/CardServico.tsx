import { Link, useParams } from "react-router-dom";
import type Servico from "../../../models/Servico";
import { MapPin, User, Gauge, Coins, Navigation } from "lucide-react";
import { useEffect, useState } from "react";
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
    <div className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100 w-full max-w-sm p-5 flex flex-col justify-around gap-3'>
      <div className='flex justify-between items-center'>
        <span className='text-sm font-semibold  uppercase tracking-wide'>
          {servico.categoria?.tipo || "Serviço"}
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <MapPin className='text-blue-500 w-5 h-5' />
        <p className='text-gray-800 font-medium'>{servico.destino}</p>
      </div>

      <div className='grid grid-cols-2 gap-3 text-sm text-gray-700 mt-2'>
        <div className='flex items-center gap-2'>
          <Navigation className='w-4 h-4 text-blue-400' />
          <p>
            <span className='font-semibold'>Distância:</span> {distanciaText}
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <Gauge className='w-4 h-4 text-blue-400' />
          <p>
            <span className='font-semibold'>Velocidade:</span> {velocidadeText}
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <Coins className='w-4 h-4 text-blue-400' />
          <p>
            <span className='font-semibold'>Preço/KM:</span> R${precoKmText}
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <User className='w-4 h-4 text-blue-400' />
          <p className='truncate'>
            <span className='font-semibold'>Usuário:</span>{" "}
            {servico.usuario?.nome || "Indefinido"}
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <p className='text-gray-700'>
            <span className='font-medium'>Velocidade média:</span>{" "}
            {servico.velocidade_media} km/h
          </p>
        </div>
      </div>
      <div>
        <p className='text-blue-700 font-semibold'>
          Tempo estimado:{" "}
          {tempoTotal ? `${tempoTotal.toFixed(1)} min` : "Calculando..."}
        </p>
      </div>
      <div>
        <p className='text-green-700 font-semibold'>
          Valor estimado:{" "}
          {valorCorrida ? `R$ ${valorCorrida.toFixed(2)}` : "Calculando..."}
        </p>
      </div>

      <div className='flex gap-6 justify-center align-center h-fit'>
        <button className='mt-4 bg-[var(--darkblue)] hover:bg-blue-900 text-white py-2 rounded-xl font-semibold transition-all duration-300 w-1/3'>
          <Link to={`/editarservico/${servico.id}`}>Editar</Link>
        </button>

        <button className='mt-4 bg-red-600 hover:bg-red-900 text-white py-2 rounded-xl font-semibold transition-all duration-300 w-1/3 '>
          <Link to={`/deletarservico/${servico.id}`}>Excluir</Link>
        </button>
      </div>
    </div>
  );
}

export default CardServico;
