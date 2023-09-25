import Login from "./pages/login/login";
import Produto from "./pages/produtos";
import PaginaCliente from "./pages/clientes";
import Menu from "./components/menu";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
function Router(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/clientes" element={<PaginaCliente/>}/>
            <Route path="/produtos" element={<Produto/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default Router;