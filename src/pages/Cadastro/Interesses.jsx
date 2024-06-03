import { Col, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { Botao } from '../../components/Botao/Botao'
import { Tipografia } from '../../components/Tipografia/Tipografia'
import GrupoRadio from '../../components/Radio/GrupoRadio'

const opcoes = [
	{ id: 1, valor: 'ti_programacao', label: 'TI e Programação' },
	{ id: 2, valor: 'design_mulitimidia', label: 'Design e Multimídia' },
	{ id: 3, valor: 'revisao', label: 'Revisão' },
	{ id: 4, valor: 'traducao', label: 'Tradução' },
	{ id: 5, valor: 'transcricao', label: 'Transcrição' },
	{ id: 6, valor: 'marketing', label: 'Marketing' },
]

export default function Interesses() {

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<Tipografia componente='h1'>Crie seu cadastro</Tipografia>
				<Tipografia componente='h3' estilo={{ marginBottom: 0 }}>
					Qual a área de interesse?
				</Tipografia>
			</div>

			<Formik
				initialValues={{
					interesse: '',
				}}
			>
				<Form>
					<GrupoRadio opcoes={opcoes} />
				</Form>
			</Formik>

			<Row style={{ marginTop: 0 }}>
				<Col lg={6} md={6} sm={6}>
					<Link to='/cadastro'>
						<Botao variante='secundaria'>Anterior</Botao>
					</Link>
				</Col>
				<Col lg={6} md={6} sm={6}>
					<div style={{ textAlign: 'right' }}>
						<Link to='/cadastro/dados-pessoais'>
							<Botao>Próxima</Botao>
						</Link>
					</div>
				</Col>
			</Row>
		</>
	)
}
