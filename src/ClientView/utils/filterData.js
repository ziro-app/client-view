const filterData = (reseller, data) => {
	const [ dataToShow ] = data.filter(value => value[0] !== '').filter(value => value[0] === reseller)
	if (dataToShow && dataToShow.length)
		return [
			{ value: dataToShow[1], name: 'Assessor' },
			{ value: dataToShow[2], name: 'Nome' },
			{ value: `${dataToShow[3]} - ${dataToShow[4]}`, name: 'Localidade' },
			{ value: dataToShow[5], name: 'Endereço' },
			{ value: dataToShow[6], name: 'Bairro' },
			{ value: dataToShow[7], name: 'CEP' },
			{ value: dataToShow[8], name: 'CNPJ' },
			{ value: dataToShow[9], name: 'IE' },
			{ value: dataToShow[10], name: 'RG' },
			{ value: dataToShow[11], name: 'CPF' },
			{ value: dataToShow[12], name: 'Email' },
			{ value: dataToShow[13], name: 'Fone' },
			{ value: dataToShow[14], name: 'Transporte' },
			{ value: dataToShow[15], name: 'Última Compra' },
		]
	return [
			{ value: '', name: 'Assessor' },
			{ value: '', name: 'Nome' },
			{ value: '', name: 'Localidade' },
			{ value: '', name: 'Endereço' },
			{ value: '', name: 'Bairro' },
			{ value: '', name: 'CEP' },
			{ value: '', name: 'CNPJ' },
			{ value: '', name: 'IE' },
			{ value: '', name: 'RG' },
			{ value: '', name: 'CPF' },
			{ value: '', name: 'Email' },
			{ value: '', name: 'Fone' },
			{ value: '', name: 'Transporte' },
			{ value: '', name: 'Última Compra' },
	]
}

export default filterData