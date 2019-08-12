const fetchFromSheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSheet. values.length === 0')
	const resellers = values.map(value => value[0]).slice(1).sort()
	const delivery = values.slice(1)
		.filter(value => !!value[15])
		.map(value => [value[14],value[15]])
		.reduce((acc, current, index, array) => {
			const filtered = array.filter(value => value[0] === current[0])
			const reduced = filtered.reduce((acc, current) => acc + ',' + current[1], '').slice(1)
			const result = [filtered[0][0], reduced]
			if (index > 0 && array[index][0] === array[index - 1][0])
				return acc
			return [...acc, result]
	}, [])
	const lastBuy = values.slice(1).map(value => [value[0],value[16]]).filter(value => value[0] !== '')
	const partialData = values.slice(1).map(value => value.slice(0,14))
	const clientData = partialData.map(value => {
		const [ found ] = delivery.filter(options => options[0] === value[0])
		const [ foundLastBuy ] = lastBuy.filter(options => options[0] === value[0])
		if (found)
			return [...value, found[1], foundLastBuy[1]]
		return [...value, '', '']
	})
	return { resellers, clientData }
}

export default fetchFromSheet