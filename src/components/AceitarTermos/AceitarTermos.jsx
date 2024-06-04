import styled from '@emotion/styled'
import MsgErro from '../MsgErro/MsgErro'
import { Field, Formik } from 'formik'

const StyledLabel = styled.label`
	width: 100%;
`

const StyledField = styled.div`
	display: flex;
	gap: 0.5rem;
`

export default function AceitarTermos({ ...props }) {
	return (
		<StyledLabel>
			<StyledField>
				<Field type='checkbox' name={props.name} />
				<span>Aceito os termos e condições</span>
			</StyledField>

			{props.formik.errors.termos ? (
				<MsgErro mensagem={props.formik.errors.termos} />
			) : null}
		</StyledLabel>
	)
}
