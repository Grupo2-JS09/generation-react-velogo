import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarServico from "./components/servico/deletarservico/DeletarServico";
import FormServico from "./components/servico/formservico/FormServico";
import ListaServicos from "./components/servico/listaservicos/ListaServicos";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Contato from "./pages/contato/Contato";
import { ToastContainer } from "react-toastify";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      <ToastContainer />
      {!hideNavbar && <Navbar />}

      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categorias' element={<ListaCategoria />} />
          <Route path='/cadastrarcategoria' element={<FormCategoria />} />
          <Route path='/editarcategoria/:id' element={<FormCategoria />} />
          <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
          <Route path='/servicos' element={<ListaServicos />} />
          <Route path='/cadastrarservico' element={<FormServico />} />
          <Route path='/editarservico/:id' element={<FormServico />} />
          <Route path='/deletarservico/:id' element={<DeletarServico />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
