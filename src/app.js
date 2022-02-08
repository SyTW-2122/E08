import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';



function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  const token = localStorage.getItem('token');
  if (token) {
    tokenAuth(token);
  }

  return (
    <AuthState>
      <AlertaState>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="*" element={<h2>Error 404 - Pagina no encontrada</h2>} />
            <Route path="/login" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlertaState>
    </AuthState>

  );
}

export default App;


// links de estar registrado
// - al comprar la bateria
// - menu usuario
// - agregar bateria

