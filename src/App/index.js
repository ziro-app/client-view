import React from 'react'
import ErrorBoundary from '../ErrorBoundary/index'
import Header from '../Header/index'

const App = () => <ErrorBoundary><Header title='Dados Clientes'>Hi</Header></ErrorBoundary>

export default App