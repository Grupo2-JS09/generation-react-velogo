import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<ListaCategoria />} />
            <Route path='/cadastrarcategorias' element={<FormCategoria />} />
            <Route path='/editarcategorias/:id' element={<FormCategoria />} />
            <Route
              path='/deletarcategoria/:id'
              element={<DeletarCategoria />}
            />
            <Route path='/servicos' element={<ListaCategoria />} />
            <Route path='/cadastrarservico' element={<FormCategoria />} />
            <Route path='/editarcategorias/:id' element={<FormCategoria />} />
            <Route
              path='/deletarcategoria/:id'
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
