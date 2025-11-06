import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListaServicos from "./components/servico/listaservicos/ListaServicos";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListaCategoria />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route
              path='/deletarcategoria/:id'
              element={<DeletarCategoria />}
            />
            <Route path='/servicos' element={<ListaServicos />} />
            <Route path='/cadastrarservico' element={<FormServico />} />
            <Route path='/editarservico/:id' element={<FormServico />} />
            <Route path='/deletarservico/:id' element={<DeletarServico />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
