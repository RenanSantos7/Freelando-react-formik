import { Col, Row } from 'react-grid-system'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import { Botao } from '../../components/Botao/Botao'
import { CampoTexto } from '../../components/CampoTexto/CampoTexto'
import { estadosBrasileiros } from '../../utils/estadosBr'
import { ListaSupensa } from '../../components/ListaSuspensa/ListaSuspensa'
import { Tipografia } from '../../components/Tipografia/Tipografia'

export default function DadosPessoais() {
	const navegarPara = useNavigate()

	return (
		<Formik
			initialValues={{
				nome: '',
				estado: '',
				cidade: '',
				telefone: '',
				email: '',
				senha: '',
				confirmarSenha: '',
			}}
			validate={values => {
				const errors = {}
				
				if (!values.nome) {
					errors.nome = 'Campo obrigatório'
				}
				
				if (!values.confirmarSenha) {
					errors.confirmarSenha = 'Campo obrigatório'
				} else if (values.senha != confirmarSenha) {
					errors.confirmarSenha = 'As senhas não conferem'
				}

				if (!values.telefone) {
					errors.telefone = 'Campo obrigatório'
				} else if (!/^\d{10,11}$/i.test(values.telefone)) {
					errors.telefone('Número de telefone inválido')
				}

				if (!values.email) {
					errors.email = 'Campo obrigatório'
				} else if (!/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/i.test(values.email)) {
					errors.email('Email inválido')
				}

				return errors
			}}
			onSubmit={values => {
				console.log(values)
				navegarPara('/cadastro/concluido')
			}}
		>
			{formik => (
				<Form onSubmit={formik.handleSubmit}>
					<div style={{ textAlign: 'center' }}>
						<Tipografia variante='h1' componente='h1'>
							Crie seu cadastro
						</Tipografia>
						<Tipografia variante='body' componente='body'>
							Crie seu perfil gratuitamente para começar a
							trabalhar com os melhores freelancers. Em seguida,
							você poderá dar mais detalhes sobre suas demandas e
							sobre sua forma de trabalho.
						</Tipografia>
					</div>
					<Row>
						<Col>
							<CampoTexto
								titulo='Nome completo'
								name='nome'
								type='text'
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={4} md={4} sm={4}>
							<ListaSupensa
								titulo='Estado'
								opcoes={estadosBrasileiros}
								valor={formik.values.estado}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
							/>
						</Col>
						<Col lg={8} md={8} sm={8}>
							<CampoTexto
								titulo='Cidade'
								type='text'
								name='cidade'
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='E-mail'
								name='email'
								type='email'
							/>
						</Col>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Telefone'
								name='telefone'
								type='tel'
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Senha'
								name='senha'
								type='password'
							/>
						</Col>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Confirme sua senha'
								name='confirmarSenha'
								type='password'
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6}>
							<Link to='/cadastro/interesses'>
								<Botao variante='secundaria'>Anterior</Botao>
							</Link>
						</Col>
						<Col lg={6} md={6} sm={6}>
							<div style={{ textAlign: 'right' }}>
								{/* <Link to='/cadastro/concluido'> */}
								<Botao>Próxima</Botao>
								{/* </Link> */}
							</div>
						</Col>
					</Row>
				</Form>
			)}
		</Formik>
	)
}
