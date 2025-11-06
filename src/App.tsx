import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategorias/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategorias/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
