import { createBrowserRouter } from "react-router-dom"
import Concluido from "./pages/cadastro/Concluido";
import DadosPessoais from "./pages/cadastro/DadosPessoais";
import Interesses from "./pages/cadastro/Interesses";
import LayoutBaseCadastro from "./pages/cadastro/LayoutBaseCadastro";
import SelecaoCliente from "./pages/cadastro/SelecaoCliente";
import LayoutBase from "./pages/LayoutBase";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Pagina404 from "./pages/erros/Pagina404";
import Login from "./pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: "",
                element: <PaginaInicial />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);