export function formatarTelefone(valor) {
	if (!valor) return

	const telefone = valor.replace(/\D/g, '')
	
	if (telefone.length > 10) {
		return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`
	}
	
	return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6)}`
}
