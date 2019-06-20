/* import libraries */
import React, { useState, useEffect } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateDropdown from './methods/updateDropdown'
import renderForm from './methods/renderForm'

const ClientView = () => {
	const [uiState, setUiState] = useState(initialUiState)
	const [resellers, setResellers] = useState([])
	const [clientData, setClientData] = useState([])
	const [reseller, setReseller] = useState('')
	const cancelTokenSource = CancelToken.source()
	useEffect(() => () => cancelTokenSource.cancel())
	useEffect(fetchInitialData(cancelTokenSource, setUiState, setResellers, setClientData))
	return renderForm(
		uiState,
		resellers,
		clientData,
		reseller,
		updateDropdown(setUiState, setReseller)
	)
}

export default ClientView