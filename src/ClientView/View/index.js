import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@ziro/dropdown'

const View = ({ state: { resellers, reseller }, updateDropdown }) => (
	<Dropdown
		name='reseller'
		placeholder='Cliente'
		options={resellers}
		value={reseller}
		updateParent={updateDropdown}
	/>
)

export default View