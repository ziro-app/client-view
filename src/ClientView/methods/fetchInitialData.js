import { get, isCancel } from 'axios'
import fetchFromSheet from '../utils/fetchFromSheet'

const fetchInitialData = async (cancelTokenSource, setUiState, changeUiState, setResellers, setClientData) => {
	try {
		const { resellers, clientData } = await fetchFromSheet(get, cancelTokenSource)
		setResellers(resellers)
		setClientData(clientData)
		setUiState(changeUiState('SUCCESS'))
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			console.log(error)
			setUiState(changeUiState('ERROR'))
			if (error.response)
				console.log(error.response)
		}
	}
}

export default fetchInitialData