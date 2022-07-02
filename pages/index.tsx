import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage, WhatsAppWidget } from '../components'
import imgheader from '../public/img-header.webp'

const Home: NextPage = () => {
	return (
		<div className='font-Ubuntu min-h-screen absolute top-0 left-0'>
			<Head>
				<title>Ferretería San Rafael - Todo para tu hogar</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Somos una empresa especializada en la venta de artículos de
					Ferretería, materiales para la construcción y toda clase de
					necesidades para el hogar.'
				/>
				<link rel='canonical' href='https://fsr-sepia.vercel.app' />
			</Head>
			<HomePage />
			<WhatsAppWidget />
		</div>
	)
}

export default Home
