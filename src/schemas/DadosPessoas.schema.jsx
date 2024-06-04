import * as Yup from 'yup'

export const schema = Yup.object().shape({
	nome: Yup.string()
		.trim()
		.lowercase()
		.min(5, 'Digite seu nome completo')
		.required('Campo obrigatório'),
	cidade: Yup.string()
		.max(58, 'Digite uma cidade válida')
		.required('Campo obrigatório'),
	estado: Yup.string().required('Campo obrigatório'),
	telefone: Yup.string()
		.matches(/^\d{2}9?\d{8}$/i, 'Número de telefone inválido')
		.required('Campo obrigatório'),
	email: Yup.string()
		.email('Digite um email válido')
		.required('Campo obrigatório'),
	senha: Yup.string()
		.min(8, 'Sua senha precisa ter entre 8 e 16 caracteres')
		.max(16, 'Sua senha precisa ter entre 8 e 16 caracteres')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*\.\,|\-_]).{8,16}$/,
			'Sua senha deve conter letras minúsculas, maiúsculas, números e caracteres especiais (! @ # $ % & * . , | - _)',
		)
		.required('Campo obrigatório'),
	confirmarSenha: Yup.string()
		.oneOf([Yup.ref('senha'), null], 'As senhas não conferem')
		.required('Campo obrigatório'),
	termos: Yup.boolean()
		.oneOf([true], 'Você precisa aceitar os termos.')
		.required(),
	nascimento: Yup.date()
		.max(new Date(), 'Digite uma data válida')
		.required(),
})
