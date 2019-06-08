import React from 'react'
import View from '../View/index'
import Header from '../../Header/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const RenderForm = ({ uiState, resellers, clientData, reseller, updateDropdown }) => {
	const state = { uiState, resellers, clientData, reseller }
	const componentToRender = {
		default:
			<View state={state} updateDropdown={updateDropdown} />,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	return <Header title='Dados do Cliente'>{componentToRender[ui]}</Header>
}

export default RenderForm