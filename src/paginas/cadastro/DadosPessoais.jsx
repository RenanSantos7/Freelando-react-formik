import { Tipografia } from '../../componentes/Tipografia/Tipografia'
import { CampoTexto } from '../../componentes/CampoTexto/CampoTexto'
import { ListaSupensa } from '../../componentes/ListaSuspensa/ListaSuspensa'
import { Col, Row } from 'react-grid-system'
import { Botao } from '../../componentes/Botao/Botao'
import { Link } from 'react-router-dom'
import { estadosBrasileiros } from '../../utils/estadosBr'
import { Formik } from 'formik'

const DadosPessoais = () => {
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
		>
			{formik => {
				<form>
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
								valor={formik.values.nome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='text'
								required
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
								valor={formik.values.cidade}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='text'
								required
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='E-mail'
								valor={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='email'
								required
							/>
						</Col>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Telefone'
								valor={formik.values.telefone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='tel'
								required
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Senha'
								valor={formik.values.senha}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='password'
								required
							/>
						</Col>
						<Col lg={6} md={6} sm={6}>
							<CampoTexto
								titulo='Confirme sua senha'
								valor={formik.values.confirmarSenha}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
								tipo='password'
								required
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
				</form>
			}}
		</Formik>
	)
}

export default DadosPessoais
