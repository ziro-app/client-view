import React from 'react'
import { Image } from 'cloudinary-react'
import { container } from './styles'

const ErrorMessage = () =>
	<div style={container}>
	    <Image
	      cloudName='ziro'
	      width='45'
	      publicId='logo-app_fwothv'
	      version='1561160634'
	      format='png'
	      secure='true'
	      alt='logo'
	    />
		<p>Ocorreu um erro na renderização</p>
		<p>Tente novamente ou contate o suporte</p>
	</div>

export default ErrorMessage