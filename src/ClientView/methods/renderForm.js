import React from 'react'
import View from '../View/index'
import Header from '../../Header/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderForm = that => uiState => {
	const componentToRender = {
		default:
			<View state={that.state} updateDropdown={that.updateDropdown} />,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	return <Header title='Dados Clientes'>{componentToRender[ui]}</Header>
}

export default renderForm