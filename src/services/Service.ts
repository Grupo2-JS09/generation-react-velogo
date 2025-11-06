/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};

export const CalcularDestino = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};
export const CalcularTempo = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};
