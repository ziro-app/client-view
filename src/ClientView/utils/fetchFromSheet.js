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
		.filter(value => !!value[14])
		.map(value => [value[13],value[14]])
		.reduce((acc, current, index, array) => {
			const filtered = array.filter(value => value[0] === current[0])
			const reduced = filtered.reduce((acc, current) => acc + ',' + current[1], '').slice(1)
			const result = [filtered[0][0], reduced]
			if (index > 0 && array[index][0] === array[index - 1][0])
				return acc
			return [...acc, result]
	}, [])
	const clientData = values.slice(1)
	console.log(delivery)
	console.log(clientData)
	return { resellers, clientData }
}

export default fetchFromSheet