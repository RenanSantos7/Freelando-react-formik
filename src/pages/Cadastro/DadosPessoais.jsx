import { Col, Row } from 'react-grid-system'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import styled from '@emotion/styled'

import { Botao } from '../../components/Botao/Botao'
import { CampoTexto } from '../../components/CampoTexto/CampoTexto'
import { estadosBrasileiros } from '../../utils/estadosBr'
import { ListaSupensa } from '../../components/ListaSuspensa/ListaSuspensa'
import { Tipografia } from '../../components/Tipografia/Tipografia'
import { schema } from '../../schemas/DadosPessoas.schema.jsx'
import AceitarTermos from '../../components/AceitarTermos/AceitarTermos.jsx'

const FlexStack = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const FlexLine = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	justify-content: space-between;
`

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
				termos: false,
			}}
			validationSchema={schema}
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

					<FlexStack>
						<FlexLine>
							<CampoTexto
								titulo='Nome completo'
								name='nome'
								type='text'
							/>

							<CampoTexto
								titulo='Data de nascimento'
								name='nascimento'
								type='date'
							/>
						</FlexLine>
	
						<FlexLine>
							<ListaSupensa
								titulo='Estado'
								opcoes={estadosBrasileiros}
								valor={formik.values.estado}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
	
							<CampoTexto titulo='Cidade' type='text' name='cidade' />
						</FlexLine>
	
						<FlexLine>
							<CampoTexto
								titulo='E-mail'
								name='email'
								type='email'
								autoComplete='username'
							/>
	
							<CampoTexto
								titulo='Telefone'
								name='telefone'
								type='tel'
							/>
						</FlexLine>
	
						<FlexLine>
							<CampoTexto
								titulo='Senha'
								name='senha'
								type='password'
								autoComplete='new-password'
							/>
	
							<CampoTexto
								titulo='Confirme sua senha'
								name='confirmarSenha'
								type='password'
								autoComplete='new-password'
							/>
						</FlexLine>
	
						<AceitarTermos name='termos' formik={formik} />

						<FlexLine>
							<Botao
								variante='secundaria'
								onClick={() => navegarPara('/cadastro/interesses')}
							>Anterior</Botao>
	
							<Botao type='submit'>Próxima</Botao>
						</FlexLine>
					</FlexStack>
				</Form>
			)}
		</Formik>
	)
}
