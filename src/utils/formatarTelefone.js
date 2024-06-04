export function formatarTelefone(valor) {
	if (!valor) return

	const telefone = valor.replace(/\D/g, '')

	return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`
}
