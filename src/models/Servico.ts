import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Servico {
  id: number;
  preco_km: number;
  distancia: number;
  velocidade_media: number;
  destino: string;
  usuario: Usuario;
  categoria: Categoria;
}
