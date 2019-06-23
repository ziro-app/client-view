import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@ziro/dropdown'
import filterData from '../utils/filterData'
import { container, row, label, data } from './styles'

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