import styled from '@emotion/styled'
import { useState } from 'react'
import { ItemListaSuspensaEstilizado } from './ItemListaSuspensaEstilizado'
import { ListaSuspensaEstilizada } from './ListaSuspensaEstilizada'

const LabelEstilizada = styled.label`
	display: block;
	width: 100%;
	box-sizing: border-box;
	font-weight: 400;
	font-size: 18px;
	position: relative;
`
const Titulo = styled.p`
    margin-bottom: ${props => props.theme.espacamentos.xs};
    font-size: 20px;
    font-weight: 500;
`

const BotaoEstilizado = styled.button`
	cursor: pointer;
	display: block;
	height: 40px;
	width: 100%;
	font-size: 18px;
	outline: none;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 400;
	border-radius: 18px;
	border-bottom-left-radius: ${props => (props.estaAberta ? '0' : '18px')};
	border-bottom-right-radius: ${props => (props.estaAberta ? '0' : '18px')};
	padding: ${props => props.theme.espacamentos.s};
	background: ${props => props.theme.cores.branco};
	border: 1px solid ${props => props.theme.cores.neutras.a};
	&:focus {
		border-color: ${props => props.theme.cores.focus};
	}
`

export const ListaSupensa = ({ titulo, opcoes, valor, onChange }) => {
	const [estaAberta, alternarVisibilidade] = useState(false)

	const [opcaoFocada, setOpcaoFocada] = useState(null)

	const manipularEvtTeclado = evento => {
		alternarVisibilidade(true)
		switch (evento.key) {
			case 'ArrowDown':
				evento.preventDefault()
				setOpcaoFocada(focoAntigo => {
					if (focoAntigo == null) {
						return 0
					}
					if (focoAntigo === opcoes.length - 1) {
						return opcoes.length - 1
					}
					return (focoAntigo += 1)
				})
				break
			case 'ArrowUp':
				evento.preventDefault()
				setOpcaoFocada(focoAntigo => {
					if (!focoAntigo) {
						return 0
					}
					return (focoAntigo -= 1)
				})
				break
			case 'Enter':
				evento.preventDefault()
				setOpcaoFocada(null)
				alternarVisibilidade(false)
				onChange(opcoes[opcaoFocada])
				break
			case 'Tab':
				setOpcaoFocada(null)
				alternarVisibilidade(false)
				break
			case 'Escape':
				evento.preventDefault()
				setOpcaoFocada(null)
				alternarVisibilidade(false)
				break
			default:
				break
		}
	}

	return (
		<LabelEstilizada>
			<Titulo>{titulo}</Titulo>
			<BotaoEstilizado
				estaAberta={estaAberta}
				onClick={() => alternarVisibilidade(!estaAberta)}
				onKeyDown={manipularEvtTeclado}
				type='button'
			>
				<div>{valor ? valor.text : 'Selecione'}</div>
				<div>
					<span>{estaAberta ? '▲' : '▼'}</span>
				</div>
			</BotaoEstilizado>
			{estaAberta && (
				<ListaSuspensaEstilizada>
					{opcoes.map((opcao, index) => (
						<ItemListaSuspensaEstilizado
							key={opcao.value}
							focoAtivo={index === opcaoFocada}
							onClick={() => onChange(opcao)}
						>
							{opcao.text}
						</ItemListaSuspensaEstilizado>
					))}
				</ListaSuspensaEstilizada>
			)}
		</LabelEstilizada>
	)
}
