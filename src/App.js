import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
//hooks
import { useAuthContext } from "./hooks/useAuthContext";
// pages & components
import Menu from "./components/Menu";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Footer from "./components/Footer";


function App() {
  const { check_log_status,user } = useAuthContext();
  //console.log(check_log_status)
  return (
    <div className="App">
      {check_log_status && (
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to='/login'></Redirect>}
              {user && <Home/>}
            </Route>
            <Route path="/login">
              {user && <Redirect to='/'></Redirect>}
              {!user && <Login/>}
            </Route>
            <Route path="/cadastro">
              {user && <Redirect to='/'></Redirect>}
              {!user && <Cadastro/>}
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
