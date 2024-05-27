import { RouterProvider } from 'react-router-dom'
import { Estilos } from './components/EstilosGlobais/Estilos'
import { ProvedorTema } from './components/ProvedorTema/ProvedorTema'
import { router } from './router'

export default function App() {
	return (
		<ProvedorTema>
			<Estilos />
			<RouterProvider router={router} />
		</ProvedorTema>
	)
}
