import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@ziro/dropdown'
import filterData from '../utils/filterData'
import { container, row, label, data } from './styles'

// const clientData = [
// 	{ value: 'Rubia' , name: 'Assessor' },
// 	{ value: 'Maria', name: 'Nome' },
// 	{ value: 'São Paulo - SP' , name: 'Localidade' },
// 	{ value: 'R Lubavitch, 71' , name: 'Endereço' },
// 	{ value: 'Centro' , name: 'Bairro' },
// 	{ value: '01122-010' , name: 'CEP' },
// 	{ value: '13.026.117/0001-99' , name: 'CNPJ' },
// 	{ value: '12.3456.7-8' , name: 'IE' },
// 	{ value: '011.445.667-09' , name: 'CPF' },
// 	{ value: '1305678-9' , name: 'RG' },
// 	{ value: 'f@gmail.com' , name: 'Email' },
// 	{ value: 'Eucatur' , name: 'Transporte' }, <---- Remover?
// 	{ value: '18/dez/18' , name: 'Última Compra' },
// 	{ value: ['Karmani','Absolutti','Secia','Doce Flor','Donna Ritz'] , name: 'Top Marcas' }
// ]

const View = ({ state: { resellers, reseller, clientData }, updateDropdown }) => (
	<Fragment>
		<Dropdown
			name='reseller'
			placeholder='Cliente'
			options={resellers}
			value={reseller}
			updateParent={updateDropdown}
		/>
		<div style={container}>
			{filterData(reseller, clientData).map( ({ value, name }) =>
				<div style={row} key={name}>
					<span style={label}>{name}</span>
					<span style={data}>{value}</span>
				</div>
			)}
		</div>
	</Fragment>
)

View.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired
}

export default View