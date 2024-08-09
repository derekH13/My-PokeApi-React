import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Dashboard, PokeDex } from "../pages";
import ClickPoke from "../pages/ClickPoke/ClickPoke";


//config do react route dom padrão

export const Routes = () => {

    return (
        <BrowserRouter>
         <Switch>

            {/* quando o navegador for pra rota '/pagina-inicial' vai para a pagina "Dashboard"  */}
            <Route path="/pagina-inicial" element={<Dashboard />} /> 
            <Route path="/PokeDex" element={<PokeDex/>} /> 
            <Route path="/ClickPoke" element={<ClickPoke />}></Route>

        

           {/* se a url não se encaixar com nenhuma a cima */}
           <Route path="*" element={<Navigate to="pagina-inicial" />}/>

         </Switch>
        </BrowserRouter>
    );
}