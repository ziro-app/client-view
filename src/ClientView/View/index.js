import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@ziro/dropdown'
import { container, row, label, data } from './styles'

const View = ({ state: { resellers, reseller }, updateDropdown }) => (
	<Fragment>
		<Dropdown
			name='reseller'
			placeholder='Cliente'
			options={resellers}
			value={reseller}
			updateParent={updateDropdown}
		/>
		<div style={container}>
			{[{ value: 'test1', name: 'NAME1' },{ value: 'test2', name: 'NAME2' }].map( ({ value, name }) =>
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