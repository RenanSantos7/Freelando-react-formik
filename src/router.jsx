import { createBrowserRouter } from "react-router-dom"
import Concluido from "./pages/Cadastro/Concluido";
import DadosPessoais from "./pages/Cadastro/DadosPessoais";
import Interesses from "./pages/Cadastro/Interesses";
import LayoutBaseCadastro from "./pages/Cadastro/LayoutBaseCadastro";
import SelecaoCliente from "./pages/Cadastro/SelecaoCliente";
import LayoutBase from "./pages/LayoutBase";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Pagina404 from "./pages/Erros/Pagina404";
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