import * as Yup from 'yup'

export const schema = Yup.object().shape({
	nome: Yup.string()
        .min(5, 'Digite seu nome completo')
        .required('Campo obrigatório'),
	cidade: Yup.string()
        .max(58, 'Digite uma cidade válida')
		.required('Campo obrigatório'),
    estado: Yup.string()
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .matches(/^\d{10,11}$/i, 'Número de telefone inválido')
        .required('Campo obrigatório'),
	email: Yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
    senha: Yup.string()
        .min(8, 'Sua senha precisa ter entre 8 e 16 caracteres')
        .max(16, 'Sua senha precisa ter entre 8 e 16 caracteres')
        .matches(/[a-z]+[A-Z]+\d+[!@#$%&*.,|-_]+/, 'Sua senha dever ter letras minúsculas, maiúsculas, números e caracteres especiais (! @ # $ % & * . , | - _)')
        .required('Campo obrigatório'),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null], 'As senhas não conferem')
        .required('Campo obrigatório'),
})
