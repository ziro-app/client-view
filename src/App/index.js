import React from 'react'
import ErrorBoundary from '../ErrorBoundary/index'
import ClientView from '../ClientView/index'

const App = () =>
	<ErrorBoundary>
		<ClientView />
	</ErrorBoundary>

export default App