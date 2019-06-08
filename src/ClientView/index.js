/* import libraries */
import React, { useState, useEffect } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateDropdown from './methods/updateDropdown'
import RenderForm from './methods/RenderForm'

const ClientView = () => {
	const [uiState, setUiState] = useState(initialUiState)
	const [resellers, setResellers] = useState(0)
	const [clientData, setClientData] = useState([])
	const [reseller, setReseller] = useState('')
	const cancelTokenSource = CancelToken.source()
	useEffect(() => () => cancelTokenSource.cancel())
	useEffect(() => {
		fetchInitialData(cancelTokenSource, setUiState, changeUiState, setResellers, setClientData)
	})
	return (
		<RenderForm
			uiState={uiState}
			resellers={resellers}
			clientData={clientData}
			reseller={reseller}
		/>
	)
}

export default ClientView