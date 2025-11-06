import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
// import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Servico from "../../../models/Servico";

function FormServico() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [categorias, setCategorias] = useState<Categoria[]>([]);

  // const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: "" });

  const [servico, setServico] = useState<Servico>({} as Servico);

  // const { usuario, handleLogout } = useContext(AuthContext);
  // const token = usuario.token;

  // const { id } = useParams<{ id: string }>();

  async function buscarServicoPorId(id: string) {
    try {
      // await buscar(`/postagens/${id}`, setServico, {
      //   headers: { Authorization: token },
      // });
      await buscar(`/servicos/${id}`, setServico)
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
        navigate("/")
      }
    }
  }

  // async function buscarCategoriaPorId(id: string) {
  //   try {
  //     await buscar(`/categorias/${id}`, setCategoria, {
  //       headers: { Authorization: token },
  //     });
  //   } catch (error: any) {
  //     if (error.toString().includes("401")) {
  //       handleLogout();
  //     }
  //   }
  // }

  // async function buscarCategorias() {
  //   try {
  //     await buscar("/categorias", setCategorias, {
  //       headers: { Authorization: token },
  //     });
  //   } catch (error: any) {
  //     if (error.toString().includes("401")) {
  //       handleLogout();
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (token === "") {
  //     ToastAlerta("Você precisa estar logado", "info");
  //     navigate("/");
  //   }
  // }, [token]);

  // useEffect(() => {
  //   buscarCategorias();

  //   if (id !== undefined) {
  //     buscarServicoPorId(id);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   setServico({
  //     ...servico,
  //     categoria: categoria,
  //   });
  // }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      // categoria: categoria,
      // usuario: usuario,
    });
  }

  function retornar() {
    navigate("/servicos");
  }

  async function gerarNovoServico(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/servicos`, servico, setServico);
        alert("Serviço atualizado com sucesso");

      } catch (error: any) {
        if (error.toString().includes("401")) {
          // handleLogout();
          navigate("/")
        } else {
          alert("Erro ao atualizar a Serviço");
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico);
        alert("Serviço cadastrado com sucesso");

      } catch (error: any) {
        if (error.toString().includes("401")) {
          navigate("/")
        } else {
          alert("Erro ao cadastrar a Serviço");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  // const carregandoCategoria = categoria.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoServico}>
        <div className="flex flex-col gap-2">
          <label htmlFor="valor">Valor da mensalidade</label>
          <input
            type="text"
            placeholder="Valor"
            name="valor"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={servico.valor_mensalidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="frequencia">Frequência</label>
          <input
            type="text"
            placeholder="Frequência"
            name="frequencia"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={servico.frequencia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="modalidade">Modalidade</label>
          <input
            type="text"
            placeholder="Modalidade"
            name="modalidade"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={servico.modalidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do Serviço</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Serviço
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.nome_categoria}</option>
              </>
            ))}
          </select>
        </div>
        {/* <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button> */}
      </form>
    </div>
  );
}

export default FormServico;
