import React, { useEffect } from "react";
import "./App.css";
import CamisetasF from './pages/CamisetasF/CamisetasF'
import Home from "./pages/Home/Home";
import CamisetasFDetalles from "./pages/CamisetasFDetalles/CamisetasFDetalles";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound/Error";
import SignInSignUp from "./components/SignIn-SignUp/SignInSignUp";
import CamisetasM from './pages/CamisetasM/CamisetasM'
import Buzos from './pages/Buzos/Buzos'
import CamisetasMDetalles from "./pages/CamisetasMDetalles/CamisetasMDetalles";
import BuzosDetalles from "./pages/BuzosDetalles/BuzosDetalles";
import Contacto from "./pages/Contacto/Contacto"
import Nosotros from "./pages/Nosotros/Nosotros"
import Contador from "./components/Contador/Contador";
import Noticias from "./pages/Noticias/Noticias";
import PaginaDeStock from "./pages/PaginaDeStock/PaginaDeStock"
import { useDispatch, useSelector } from "react-redux";
import userActions from "./redux/actions/userAction";
import proteccionRutas from "./components/proteccionRutas/proteccionRutas";
import Cart from "./components/Cart/Cart";
import BuzosAdmin from './pages/BuzosAdmin/BuzosAdmin';
//import EditorDeBuzos from './pages/EditorDeBuzos/EditorDeBuzos';
//import EditorRemerasF from './pages/EditorRemerasF/EditorRemerasF';
import RemerasFAdmin from './pages/RemeraFAdmin/RemeraFAdmin';
import RemeraMAdmin from './pages/RemerasMAdmin/RemerasMAdmin';
//import EditorDeRemerasF from './pages/EditorRemerasF/EditorRemerasF';
//import EditorDeRemerasM from './pages/EditorRemerasM/EditorRemerasM';





function App() {
  let dispatch = useDispatch()
  let {logged, role} = useSelector(store => store.userReducer)

  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem('token'))
    // console.log(token?.token.user);
    if(token){
      dispatch(userActions.relogin(token.token.user))
    }
  },[])
  return (
   
    <Layout>
       {/* <Noticias></Noticias> */}
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camisetasF/:id" element={<CamisetasFDetalles/>}></Route>
        <Route path="/camisetasM/:id" element={<CamisetasMDetalles/>}></Route>
        <Route path="/signinsignup" element={<SignInSignUp/>}></Route>
        <Route path="/chau" element={<PaginaDeStock/>}></Route>
        <Route path="/camisetasF" element={<CamisetasF/>}></Route>
        <Route path="/camisetasFDetalles" element={<CamisetasFDetalles/>}></Route>
        <Route path="/camisetasM" element={<CamisetasM/>}></Route>
        <Route path="/buzos" element={<Buzos/>}></Route>
        <Route path="/buzos/:id" element={<BuzosDetalles/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/noticias" element={<Noticias/>}></Route>
        <Route path='/carrito' element={<Cart />} />
        <Route path="/buzosadmin" element={<BuzosAdmin/>}></Route>
        {/* <Route path="/editordebuzos/:id" element={<EditorDeBuzos/>}></Route> */}
        <Route path="/remerafadmin" element={<RemerasFAdmin/>}></Route>
        <Route path="/remeramadmin" element={<RemeraMAdmin/>}></Route>
        {/* <Route path="/editorderemerasf/:id" element={<EditorDeRemerasF/>}></Route>
        <Route path="/editorderemerasm/:id" element={<EditorDeRemerasM/>}></Route> */}
        
        {/* <Route element={<proteccionRutas isAllowed={logged === false } reDirect={"/"} />}>
        </Route> */}
      </Routes> 
    </Layout> 
  );
} 

export default App;