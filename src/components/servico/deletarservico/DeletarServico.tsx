import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  buscar,
  CalcularDestino,
  CalcularTempo,
  deletar
} from "../../../services/Service";
import type Servico from "../../../models/Servico";
import { Coins, Gauge, MapPin, Navigation, User } from "lucide-react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function DeletarServico() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [servico, setServico] = useState<Servico>({} as Servico);
  const [valorCorrida, setValorCorrida] = useState<number | null>(null);

  const [tempoTotal, setTempoTotal] = useState<number | null>(null);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico);
      console.log(buscar);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarServico() {
    setIsLoading(true);

    try {
      await deletar(`/servicos/${id}`);
      ToastAlerta("Serviço apagado com sucesso", 'sucesso');
    } catch (error: any) {
      console.log(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/servicos");
  }

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
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white'>
      <div className=' bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300'>
        <div className='flex justify-center items-center border-b border-gray-100 pb-2'>
          <span className='text-sm font-semibold uppercase tracking-wide text-white'>
            {servico.categoria?.tipo || "Serviço"}
          </span>
        </div>
        <div className='flex items-center gap-2 text-gray-800'>
          <MapPin className='w-5 h-5 text-[var(--orange)]' />
          <p className='font-medium text-white'>{servico.destino}</p>
        </div>
        <div className='grid grid-cols-1 gap-4 text-sm text-white'>
          <div className='flex items-center gap-2'>
            <Navigation className='w-5 h-5 text-[var(--orange)]' />
            <p>
              <span className='font-semibold'>Distância:</span> {distanciaText}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Gauge className='w-4 h-4 text-[var(--orange)]' />
            <p>
              <span className='font-semibold'>Velocidade:</span>{" "}
              {velocidadeText}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Coins className='w-4 h-4 text-[var(--orange)]' />
            <p>
              <span className='font-semibold'>Preço/km:</span> R${precoKmText}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <User className='w-4 h-4 text-[var(--orange)]' />
            <p>
              <span className='font-semibold'>Usuário:</span>{" "}
              {servico.usuario?.nome || "Indefinido"}
            </p>
          </div>
        </div>
        <div className='mt-1 text-sm'>
          <p className='text-white'>
            <span className='font-semibold text-[var(--orange)]'>
              Tempo estimado:
            </span>{" "}
            {tempoTotal ? `${tempoTotal.toFixed(1)} min` : "Calculando..."}
          </p>
          <p className='text-white'>
            <span className='font-semibold text-[var(--orange)]'>
              Valor estimado:
            </span>{" "}
            {valorCorrida ? `R$ ${valorCorrida.toFixed(2)}` : "Calculando..."}
          </p>
        </div>
        <div className='flex gap-6 justify-center align-center h-fit text-center'>
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 text-center bg-[var(--darkblue)] hover:bg-blue-900 text-white rounded-xl font-semibold transition-all duration-300'
            onClick={deletarServico}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>

          <button
            className='flex items-center justify-center w-auto p-3 mt-4 bg-[var(--orange)] hover:bg-orange-900 text-white rounded-xl font-semibold transition-all duration-300'
            onClick={retornar}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarServico;
