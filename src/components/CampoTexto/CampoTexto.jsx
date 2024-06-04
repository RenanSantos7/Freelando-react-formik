import styled from '@emotion/styled'
import { ErrorMessage, Field } from 'formik'
import MsgErro from '../MsgErro/MsgErro'

const LabelEstilizada = styled.label`
	display: block;
	width: 100%;
	box-sizing: border-box;
	font-weight: 400;
	font-size: 18px;
`

const Titulo = styled.p`
    margin-bottom: ${props => props.theme.espacamentos.xs};
	font-size: 20px;
    font-weight: 500;
`

const InputEstilizado = styled(Field)`
	display: block;
	width: 100%;
	box-sizing: border-box;
	background: ${props => props.theme.cores.branco};
	border: 1px solid;
	border-color: ${props => props.theme.cores.neutras.a};
	border-radius: ${props => props.theme.espacamentos.s};
	padding: 0 ${props => props.theme.espacamentos.s};
	height: 40px;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
`

export const CampoTexto = ({ titulo, ...props }) => {
	return (
		<LabelEstilizada>
			<Titulo>{titulo}</Titulo>
			<InputEstilizado {...props} />

			<ErrorMessage name={props.name}>
				{mensagens => (
					<MsgErro mensagem={mensagens} />
				)}
			</ErrorMessage>
		</LabelEstilizada>
	)
}
