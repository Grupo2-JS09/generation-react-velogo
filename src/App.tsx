import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
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
